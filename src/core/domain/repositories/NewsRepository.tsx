import { News } from '../entities/News'

interface NewsRepository {
  getNews: () => Promise<News[]>
  getNewsByCategory: (
    keyword: string,
    page: number,
    pageSize: number
  ) => Promise<News[]>
  searchNews: (keyword: string) => Promise<News[]>
}

export default NewsRepository
