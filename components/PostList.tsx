import type { Post } from '../types/Post'
import PostCard from './PostCard'

type PostListProps = {
  posts: Post[]
}

function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="feed-empty-message">Тут ще немає публікацій — залиште першу!</p>
  }

  return (
    <div className="forum-posts-stream">
      {posts.map((post) => (
        <PostCard key={post.id} data={post} /> 
      ))}
    </div>
  )
}

export default PostList
