import { useMemo } from 'react'
import CategoryBadge from './Category'


export type Post = {
  id: number;
  title: string;
  content: string;
  category: string;
  author?: string;
  createdAt?: string;
  likes?: number;
  views?: number;
}

type CardProps = {
  data: Post;
}

function parseDateString(isoString?: string) {
  if (!isoString) return 'Невідома дата';
  const targetDate = new Date(isoString);
  return targetDate.toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function createAvatarLetters(fullName: string) {
  if (!fullName) return '';
  return fullName
    .split(' ')
    .filter(Boolean)
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

export default function PostCard({ data }: CardProps) {
  const {
    author = "Someone",
    createdAt,
    category = "Загальне",
    likes = 0,
    views = 12,
    title,
    content
  } = data;

  const avatarLetters = useMemo(() => createAvatarLetters(author), [author]);

  return (
    <article className="forum-article-item">
      <div className="article-header-row">
        <div className="author-avatar-circle" aria-hidden="true">
          {avatarLetters}
        </div>
        
        <div className="article-meta-info">
          <span className="author-display-name">{author}</span>
          {createdAt && (
            <time className="publication-timestamp" dateTime={createdAt}>
              {parseDateString(createdAt)}
            </time>
          )}
        </div>
        
        <CategoryBadge category={category} />
      </div>


      <h3 className="article-main-title">{title}</h3>
      <p className="article-text-body">{content}</p>


      <footer className="article-stats-footer">
        <div className="metric-item">
          <span>{likes}</span> вподобань
        </div>
        <div className="metric-item">
          <span>{views}</span> переглядів
        </div>
      </footer>
    </article>
  );
}
