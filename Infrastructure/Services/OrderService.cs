using Core.Entities;
using Core.Entities.OrderAggregrate;
using Core.Interfaces;
using Core.Specifications;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {

        private readonly IBasketRepository _basketRepo;
        private readonly IUnitOfWork __unitOfWork;
        public OrderService(IBasketRepository basketRepo, IUnitOfWork _unitOfWork)
        {
            __unitOfWork = _unitOfWork;
            _basketRepo = basketRepo;

        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            var basket = await _basketRepo.GetBasketAsync(basketId);

            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var productItem = await __unitOfWork.Repository<Product>().GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);

                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);

                items.Add(orderItem);
            };

            var deliveryMethod = await __unitOfWork.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);

            var subtotal = items.Sum(items => items.Price * items.Quantity);

            var order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal);

            __unitOfWork.Repository<Order>().Add(order);
            var result = await __unitOfWork.Complete();

            if (result <= 0) return null;

            await _basketRepo.DeleteBasketAsync(basketId);

            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await __unitOfWork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);

            return await __unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);

            return await __unitOfWork.Repository<Order>().ListAsync(spec);

        }
    }
}