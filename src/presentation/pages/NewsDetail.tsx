import { Button } from 'antd'
import { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { News } from '../../core/domain'
import { ArrowLeftOutlined } from '@ant-design/icons'

export default function NewsDetail() {
  const location = useLocation()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState<News>(location.state.query as News)
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <article className='pb-4 py-4'>
      {/* Back Button */}
      <Button type='text' onClick={handleBack} icon={<ArrowLeftOutlined />}>
        Back
      </Button>
      <div className='py-4'>
        <h1 className='text-4xl m-0 font-bold'>{detail.title}</h1>
        <div className='flex items-center space-x-8 text-gray-600 font-medium'>
          <p className='text-sm'>
            Published At : {detail.publishedAt.toLocaleDateString()}
          </p>
          <p>Author : {detail.author}</p>
        </div>
      </div>

      <img
        className='max-h-72 object-contain w-full'
        src={detail.urlToImage}
        alt={detail.title}
      />

      <p className='text-sm'>{detail.description}</p>
      <>{detail.content}</>
      <div className='mt-4'>
        <p>Read more this article at</p>
        <a href={detail.url} target='_blank' rel='noreferrer'>
          {detail.url}
        </a>
      </div>
    </article>
  )
}
