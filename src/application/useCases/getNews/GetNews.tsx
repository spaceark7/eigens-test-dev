import { NewsRepositoryImpl, NewsService } from '../../../core/data'
import { News } from '../../../core/domain/index'

interface GetNewsUseCase {
  getNews: () => Promise<News[]>
}

class GetNews implements GetNewsUseCase {
  private newsRepositoryImpl: NewsRepositoryImpl
  private newsService: NewsService

  constructor() {
    this.newsService = new NewsService()
    this.newsRepositoryImpl = new NewsRepositoryImpl(this.newsService)
  }

  async getNews(): Promise<News[]> {
    const news = await this.newsRepositoryImpl.getNews()
    return news
  }
}

export default GetNews
