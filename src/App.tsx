import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Menu from 'antd/es/menu'

function App() {
  return (
    <div className='App'>
      <Layout className=''>
        <Header>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1
              return {
                key,
                label: `nav ${key}`,
              }
            })}
          />
        </Header>
      </Layout>
    </div>
  )
}

export default App
