import { News } from '../entities/News'

interface NewsRepository {
  getNews: () => Promise<News[]>
  searchNews: (keyword: string) => Promise<News[]>
}

export default NewsRepository
