namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public bool? Featured { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }
        public bool? Rating { get; set; }
        public bool? New { get; set; }

    }
}