import Header from './components/Header'
import PostList from './components/PostList'
const posts: never[] = []

export default function App() {
  const count = posts.length

  return (
    <div className="app-container">
      <Header title={''} description={''} postCount={0} memberCount={0}>
        title="DevTalk Forum"
        description="Форум дз"
        postCount={count}
        memberCount={4820}
      </Header>

      <main className="forum-main">
        <div className="feed-header-block">
          <h2 className="forum-main-title">Свіжі теми</h2>
          <span className="forum-sub-description">Усього тем: {count}</span>
        </div>

        <PostList posts={posts} />
      </main>

      <footer className="status-message">
        <p>Тестова версія сайту</p>
      </footer>
    </div>
  )
}
