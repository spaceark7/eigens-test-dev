import { Space } from 'antd'
import { useParams } from 'react-router-dom'
import NewsBanner from '../components/banner/NewsBanner'
import NewsList from '../components/newsList/NewsList'

const NewsCategory = () => {
  const { category } = useParams<{ category: string }>()
  return (
    <div className='site-layout-content'>
      {category === 'home' && <NewsBanner />}
      <Space />
      <h2>{category} News</h2>

      <NewsList />
    </div>
  )
}

export default NewsCategory
