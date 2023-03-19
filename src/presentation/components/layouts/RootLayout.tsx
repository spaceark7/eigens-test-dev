import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../../core/infrastructure/hooks/useScrollToTop'
import { NewsContextProvider } from '../../../core/infrastructure/state/NewsContext'
import Footer from '../footer/Footer'
import NavBar from '../navigation'

const RootLayout = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <NewsContextProvider>
        <Layout className='max-w-screen-lg mx-auto bg-white'>
          <ScrollToTop />
          <NavBar />
          <Content className='px-12 '>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </NewsContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default RootLayout
