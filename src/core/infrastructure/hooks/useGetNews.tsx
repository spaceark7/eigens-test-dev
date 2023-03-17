import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { GetNews } from '../../../application'
import NewsQueryResult from '../shared/NewsQueryResult'

export const useGetNews = (): NewsQueryResult => {
  const { data, isLoading, error, isSuccess, refetch } = useQuery(
    'news',
    async () => {
      const res = new GetNews()
      const news = await res.getNews()
      return news
    }
  )

  useEffect(() => {
    refetch()
  }, [refetch])

  const newsQueryResult: NewsQueryResult = {
    news: data ?? [],
    isLoading,
    error,
    success: isSuccess,
  }

  return newsQueryResult
}
