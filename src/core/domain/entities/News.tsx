interface News {
  id: string
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: string
}

function createNewsFromJson(json: any): News {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = json
  const id = url // id dari URL
  return {
    id,
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt: new Date(publishedAt),
    content,
  }
}

export { type News, createNewsFromJson }
