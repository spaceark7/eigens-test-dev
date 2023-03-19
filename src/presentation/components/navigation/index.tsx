import { Menu, MenuRef } from 'antd'
import { Header } from 'antd/es/layout/layout'
import type { MenuProps } from 'rc-menu'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Science',
    key: 'science',
  },
  {
    label: 'Business',
    key: 'business',
  },
]

const NavBar = () => {
  const [current, setCurrent] = useState('home')
  const headerRef = useRef<MenuRef>(null)
  const navigate = useNavigate()
  const handleClick: MenuProps['onClick'] = (e: any) => {
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }

  return (
    <Header>
      <header>
        <Menu
          theme='dark'
          ref={headerRef}
          itemRef={'home'}
          items={items}
          selectedKeys={[current]}
          mode='horizontal'
          onClick={handleClick}
        />
      </header>
    </Header>
  )
}

export default NavBar
