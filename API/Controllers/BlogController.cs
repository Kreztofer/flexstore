using API.Dtos;
using AutoMapper;
using Core.Entities.BlogEntity;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BlogController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly IMapper _mapper;
        public BlogController(StoreContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Blog>>> GetBlog()
        {
            var blog = await _context.BlogItems.ToListAsync();
            return Ok(_mapper.Map<IReadOnlyList<Blog>, List<BlogDto>>(blog));
        }

    }
}