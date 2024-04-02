import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/post";

import styles from './app.module.css'

import './globals.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ianfss.png',
      name: 'Ian',
      role: 'Developer'
    },
    content: [
      { type: 'paragrah', content: 'Lorem ipsum dolor sit amet' },
      { type: 'paragrah', content: 'Lorem ipsum dolor sit amet' },
      { type: 'link', content: 'iansilva.dev' },
    ],
    publishedAt: new Date('2024-04-01 13:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ianfss.png',
      name: 'Ian',
      role: 'Developer'
    },
    content: [
      { type: 'paragrah', content: 'Lorem ipsum dolor sit amet' },
      { type: 'paragrah', content: 'Lorem ipsum dolor sit amet' },
      { type: 'link', content: 'iansilva.dev' },
    ],
    publishedAt: new Date('2024-04-02 13:30:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
