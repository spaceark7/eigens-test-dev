import { Space } from 'antd'

import NewsBanner from '../components/banner/NewsBanner'

import NewsList from '../components/newsList/NewsList'

const NewsPage = () => {
  return (
    <div className='site-layout-content'>
      <NewsBanner />
      <Space />
      <h2>More News</h2>

      <NewsList />
    </div>
  )
}

export default NewsPage
