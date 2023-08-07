using API.Dtos;
using AutoMapper;
using Core.Entities.BlogEntity;

namespace API.Helpers
{
    public class BlogUrlResolver : IValueResolver<Blog, BlogDto, string>
    {
        private readonly IConfiguration _config;
        public BlogUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Blog source, BlogDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.BlogImg))
            {
                return _config["ApiUrl"] + source.BlogImg;
            }
            return null;
        }
    }
}