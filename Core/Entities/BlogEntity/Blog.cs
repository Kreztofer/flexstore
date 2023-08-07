namespace Core.Entities.BlogEntity
{
    public class Blog : BaseEntity
    {
        public string Title { get; set; }
        public string BlogImg { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}