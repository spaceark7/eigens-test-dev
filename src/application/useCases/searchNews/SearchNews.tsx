import { News } from '../../../core/domain/entities/News'
import NewsRepository from '../../../core/domain/repositories/NewsRepository'

interface SearchNewsUseCase {
  searchNews: (keyword: string) => Promise<News[]>
}

class SearchNews implements SearchNewsUseCase {
  constructor(private newsRepository: NewsRepository) {}

  async searchNews(keyword: string): Promise<News[]> {
    const news = await this.newsRepository.searchNews(keyword)
    return news
  }
}

export default SearchNews
