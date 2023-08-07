using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string Featured { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }
        [Range(3.0, 5.0, ErrorMessage = "Rating must be between than 3.0 and 5.0")]
        public decimal Rating { get; set; }

    }
}