import { createContext } from 'react'
import { useGetNews } from '../hooks/useGetNews'
import NewsQueryResult from '../shared/NewsQueryResult'

interface NewsContextProps {
  children: React.ReactNode
}

const NewsContext = createContext<NewsQueryResult>({
  news: [],
  isLoading: false,
  error: null,
  success: false,
  isFetching: false,
})

const NewsContextProvider = ({ children }: NewsContextProps) => {
  const { news, isLoading, error, success, isFetching } = useGetNews()

  const newsQueryResult: NewsQueryResult = {
    news: news ?? [],
    isLoading,
    error,
    success,
    isFetching: isFetching ?? false,
  }

  return (
    <NewsContext.Provider value={newsQueryResult}>
      {children}
    </NewsContext.Provider>
  )
}

export { NewsContext, NewsContextProvider }
