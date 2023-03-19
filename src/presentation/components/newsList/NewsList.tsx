import { Card, Pagination, Skeleton } from 'antd'
import SkeletonAvatar from 'antd/es/skeleton/Avatar'

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetNewsByCategory } from '../../../core/infrastructure/hooks/useGetNewsByCategory'

function NewsList() {
  const { category } = useParams<{ category: string }>()
  const param: any = category === 'home' ? 'technology' : category

  const [page, setPage] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageSize, setPageSize] = useState(10)
  const { news, isLoading, error, success, isFetching } = useGetNewsByCategory(
    param,
    page,
    pageSize
  )
  const dummy: number[] = Array.from({ length: 10 }, (_, i) => i)
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3'>
        {(isLoading || isFetching) &&
          dummy.map((item) => (
            <Card
              loading={isLoading}
              hoverable
              className='flex flex-col'
              key={item}
            >
              <Card.Meta
                avatar={<SkeletonAvatar />}
                title={<Skeleton />}
                description={<Skeleton />}
              />
            </Card>
          ))}
        {error && <div>Error fetching news articles.</div>}
        {success && (
          <>
            {news.map(
              (item) =>
                item.urlToImage && (
                  <Link
                    to={`/detail/${item.title.replace('.com', '')}`}
                    key={item.title}
                    state={{
                      query: news.filter((i) => i.title === item.title)[0],
                    }}
                  >
                    <Card
                      loading={isLoading}
                      hoverable
                      className='flex flex-col'
                      key={item.id}
                    >
                      <Card.Meta
                        avatar={
                          <img
                            className='w-20 h-20 rounded-md object-cover'
                            src={item.urlToImage}
                            alt={item.title}
                          />
                        }
                        title={item.title}
                        description={item.description}
                      />
                    </Card>
                  </Link>
                )
            )}
          </>
        )}
        {success && news.length === 0 && (
          <div className='w-full flex justify-center py-6'>
            <p className='text-2xl'>No news articles found.</p>
          </div>
        )}
      </section>
      {success && (
        <div className='w-full flex justify-center py-6'>
          <Pagination
            defaultCurrent={page}
            total={50}
            onChange={(page) => {
              setPage(page)
            }}
          />
        </div>
      )}
    </>
  )
}

export default NewsList
