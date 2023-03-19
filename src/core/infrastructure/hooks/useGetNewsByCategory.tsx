import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { GetNewsByCategory } from '../../../application'
import NewsQueryResult from '../shared/NewsQueryResult'

export const useGetNewsByCategory = (
  category: string,
  page: number,
  pageSize: number
): NewsQueryResult => {
  const { data, error, isLoading, isSuccess, refetch, isFetching } = useQuery(
    [`news-${category}`, page],
    async () => {
      const res = new GetNewsByCategory()
      const news = await res.getNewsByCategory(category, page, pageSize)

      return news
    },
    {
      initialData: [],
      notifyOnChangeProps: 'tracked',
    }
  )

  useEffect(() => {
    refetch()
  }, [refetch])

  const newsCategoryQueryResult: NewsQueryResult = {
    news: data ?? [],
    isLoading,
    error,
    success: isSuccess,
    isFetching,
  }

  return newsCategoryQueryResult
}
