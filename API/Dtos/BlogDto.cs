namespace API.Dtos
{
    public class BlogDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string BlogImg { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}