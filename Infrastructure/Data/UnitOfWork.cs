using System.Collections;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreContext __context;
        private Hashtable _repositories;
        public UnitOfWork(StoreContext _context)
        {
            __context = _context;
        }

        public async Task<int> Complete()
        {
          return await __context.SaveChangesAsync();
        }

        public void Dispose()
        {
            __context.Dispose();
        }

        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            if(_repositories == null) _repositories = new Hashtable();

            var type = typeof(TEntity).Name;
            if (!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(GenericRepository<>);
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), __context);

                _repositories.Add(type, repositoryInstance);
            }

            return (IGenericRepository<TEntity>)_repositories[type];
        }
    }
}