import { NewsRepositoryImpl, NewsService } from '../../../core/data'
import { News } from '../../../core/domain'

interface GetNewsByCategoryUseCase {
  getNewsByCategory: (
    keyword: string,
    page: number,
    pageSize: number
  ) => Promise<News[]>
}

class GetNewsByCategory implements GetNewsByCategoryUseCase {
  private newsRepositoryImpl: NewsRepositoryImpl
  private newsService: NewsService
  constructor() {
    this.newsService = new NewsService()
    this.newsRepositoryImpl = new NewsRepositoryImpl(this.newsService)
  }

  async getNewsByCategory(
    keyword: string,
    page: number = 1,
    pageSize: number = 5
  ): Promise<News[]> {
    const news = await this.newsRepositoryImpl.getNewsByCategory(
      keyword,
      page,
      pageSize
    )
    return news
  }
}

export default GetNewsByCategory
