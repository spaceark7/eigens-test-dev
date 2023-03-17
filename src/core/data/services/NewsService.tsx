import axios from 'axios'
import { createNewsFromJson, News } from '../../domain/entities/News'
import NewsRepository from '../../domain/repositories/NewsRepository'

class NewsService implements NewsRepository {
  private BASE_URL = 'https://newsapi.org/v2'
  private API_KEY = import.meta.env.VITE_API_KEY

  async getNews(): Promise<News[]> {
    const url = `${this.BASE_URL}/top-headlines?country=id&apiKey=${this.API_KEY}`
    const response = await axios.get(url)
    const news = response.data.articles.map((json: any) =>
      createNewsFromJson(json)
    )
    return news
  }
  async searchNews(keyword: string): Promise<News[]> {
    const url = `${this.BASE_URL}/everything?q=${keyword}&apiKey=${this.API_KEY}`
    const response = await axios.get(url)
    const news = response.data.articles.map((json: any) =>
      createNewsFromJson(json)
    )
    return news
  }
}

export default NewsService
