import { RouteObject } from 'react-router'
import RootLayout from '../presentation/components/layouts/RootLayout'
import NewsCategory from '../presentation/pages/NewsCategory'
import NewsDetail from '../presentation/pages/NewsDetail'
import NewsPage from '../presentation/pages/NewsPage'
import NotFound from '../presentation/pages/NotFound'
let routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
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
    ],
  },
]
export default routes
