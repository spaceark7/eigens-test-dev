import { News } from '../../domain'

interface NewsQueryResult {
  news: News[]
  isLoading: boolean
  error: any
  success: boolean
  isFetching: boolean | undefined
}

export default NewsQueryResult
