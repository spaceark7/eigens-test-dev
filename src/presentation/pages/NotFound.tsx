import { Button, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Layout className='bg-white'>
      <Content className='w-full  max-w-screen-md mx-auto flex flex-col items-center h-screen'>
        <div className=' h-1/2 w-full relative flex items-center'>
          <img
            className='w-full h-[300px] mx-auto aspect-square object-contain'
            src='/error.jpg'
            alt='404'
          />
        </div>

        <Title className='m-1'>404 Not Found</Title>
        <p className='text-xl mt-0'>
          Sorry, the page you are looking for could not be found.
        </p>
        <p className='m-0'>Let's find something amazing here</p>
        <Link to='/' replace>
          <Button type='primary'>Back to Home</Button>
        </Link>
      </Content>
    </Layout>
  )
}

export default NotFound
