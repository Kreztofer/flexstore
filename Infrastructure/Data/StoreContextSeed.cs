using System.Text.Json;
using Core.Entities;
using Core.Entities.BlogEntity;
using Core.Entities.OrderAggregrate;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context)
        {
            if (!context.ProductBrands.Any())
            {
                var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                context.ProductBrands.AddRange(brands);
            }
            if (!context.FeaturedProducts.Any())
            {
                var featuredData = File.ReadAllText("../Infrastructure/Data/SeedData/featured.json");
                var featured = JsonSerializer.Deserialize<List<FeaturedProduct>>(featuredData);
                context.FeaturedProducts.AddRange(featured);
            }
            if (!context.ProductTypes.Any())
            {
                var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/color.json");
                var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                context.ProductTypes.AddRange(types);
            }
            if (!context.Products.Any())
            {
                var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                context.Products.AddRange(products);
            }
            if (!context.DeliveryMethods.Any())
            {
                var deliveryData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");
                var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
                context.DeliveryMethods.AddRange(methods);
            }
            if (!context.BlogItems.Any())
            {
                var blogData = File.ReadAllText("../Infrastructure/Data/SeedData/blog.json");
                var blogs = JsonSerializer.Deserialize<List<Blog>>(blogData);
                context.BlogItems.AddRange(blogs);

            }
            if (context.ChangeTracker.HasChanges()) await context.SaveChangesAsync();

        }
    }
}