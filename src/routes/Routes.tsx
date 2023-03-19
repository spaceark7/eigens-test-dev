import { RouteObject } from 'react-router'
import RootLayout from '../presentation/components/layouts/RootLayout'
import NewsCategory from '../presentation/pages/NewsCategory'
import NewsDetail from '../presentation/pages/NewsDetail'
import NewsPage from '../presentation/pages/NewsPage'

let routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <NewsPage />,
      },
      {
        path: '/:category',
        element: <NewsCategory />,
      },
      {
        path: '/detail/:title',

        element: <NewsDetail />,
      },
    ],
  },
  {
    path: '/get-news',
    element: <p> Get</p>,
  },
  {
    path: '/search-news',
    element: <p> Search</p>,
  },
  {
    path: '/get-news-by-category',
    element: <p> get by category</p>,
  },
]
export default routes
