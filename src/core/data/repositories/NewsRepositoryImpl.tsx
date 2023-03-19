import { NewsRepository, News } from '../../domain'
import { createNewsFromJson } from '../../domain/entities/News'
import NewsService from '../services/NewsService'

class NewsRepositoryImpl implements NewsRepository {
  private newsService: NewsService

  constructor(newsService: NewsService) {
    this.newsService = newsService
  }

  getNews = async (): Promise<News[]> => {
    const newsResponse = await this.newsService.getNews()
    const news = newsResponse.map((json: any) => createNewsFromJson(json))
    return news
  }

  getNewsByCategory = async (
    category: string,
    page: number = 1,
    pageSize: number = 5
  ): Promise<News[]> => {
    const newsResponse = await this.newsService.getNewsByCategory(
      category,
      page,
      pageSize
    )
    const news = newsResponse.map((json: any, index) =>
      createNewsFromJson(json)
    )
    return news
  }

  searchNews = async (keyword: string): Promise<News[]> => {
    const newsResponse = await this.newsService.searchNews(keyword)
    const news = newsResponse.map((json: any) => createNewsFromJson(json))
    return news
  }
}

export default NewsRepositoryImpl
