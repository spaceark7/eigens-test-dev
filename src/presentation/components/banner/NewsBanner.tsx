import { Card, Carousel, Skeleton } from 'antd'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NewsContext } from '../../../core/infrastructure/state/NewsContext'

const NewsBanner = () => {
  const { news, isLoading, error } = useContext(NewsContext)
  if (error) {
    return <div>Error fetching news articles.</div>
  }
  if (isLoading) {
    return (
      <>
        <h1>Top Headlines</h1>

        <Card loading className='w-full'>
          <Card.Meta
            avatar={
              <Skeleton.Image className='w-20 h-20 rounded-md object-cover' />
            }
            title='placeholder'
            description='placeholder'
          />
        </Card>
      </>
    )
  }

  return (
    <>
      <h1>Top Headlines</h1>
      <Carousel
        dotPosition='top'
        className='relative mb-8'
        autoplay
        effect='scrollx'
      >
        {news.map((item) => (
          <Link
            key={item.id}
            to={`detail/${item.title.replace('.com', '')}`}
            state={{
              query: news.filter((i) => i.title.includes(item.title))[0],
            }}
          >
            <Card
              hoverable
              key={item.id}
              className='bg-blue-800 w-full h-[60vh]'
              cover={
                <img
                  className='w-full h-full object-cover'
                  alt={item.title}
                  src={item?.urlToImage}
                />
              }
            >
              <Card.Meta
                className='text-white absolute bottom-0 p-2  w-full left-0 bg-white bg-opacity-60'
                style={{ color: 'white' }}
                title={item.title}
                description={item.description}
              />
            </Card>
          </Link>
        ))}
      </Carousel>
    </>
  )
}

export default NewsBanner
