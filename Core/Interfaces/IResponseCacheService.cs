namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        Task CachedResponseAsync(string cacheKey, object response, TimeSpan timeToLive);

        Task<string> GetCachedResponseAsync(string cacheKey);
    }
}