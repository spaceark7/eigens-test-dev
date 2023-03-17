import { useContext } from 'react'
import { Input, Layout, List } from 'antd'
import { NewsContext } from '../../core/infrastructure/state/NewsContext'

const { Content } = Layout
const { Search } = Input

const NewsPage = () => {
  const { news, isLoading, error } = useContext(NewsContext)

  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Search
            placeholder='Search news articles'
            allowClear
            enterButton='Search'
            size='large'
            style={{ marginBottom: 16 }}
          />
          {error && <div>Error fetching news articles.</div>}
          {isLoading ? (
            <div>Loading news articles...</div>
          ) : (
            <List
              itemLayout='horizontal'
              dataSource={news}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href={item.url}>{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          )}
        </div>
      </Content>
    </Layout>
  )
}

export default NewsPage
