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
      <img
        className='max-h-72 object-contain w-full'
        src={detail.urlToImage}
        alt={detail.title}
      />
      <h1 className='text-2xl font-bold'>{detail.title}</h1>
      <p className='text-sm'>{detail.description}</p>
      <>{detail.content}</>
    </article>
  )
}
