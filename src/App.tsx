import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import NewsPage from './presentation/pages/NewsPage'
import { ReactQueryDevtools } from 'react-query/devtools'
import { NewsContextProvider } from './core/infrastructure/state/NewsContext'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <NewsContextProvider>
          <Layout className=''>
            <Header></Header>
            <NewsPage />
          </Layout>
        </NewsContextProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default App
