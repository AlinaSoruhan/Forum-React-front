type BoardHeaderProps = {
  title: string;
  description: string;
  postCount: number;
  memberCount: number;
};


export default function Header(props: BoardHeaderProps) {
  const { title, description, postCount, memberCount } = props;

  return (
    <header className="forum-main-header">
      <div className="header-content-wrapper">

        <div className="header-brand-section">
          <span className="forum-badge-logo" aria-hidden="true">
            DT
          </span>
          <div className="title-block">
            <h1 className="forum-main-title">{title}</h1>
            <p className="forum-description">{description}</p>
          </div>
        </div>

        <dl className="site-header">
          <div className="info">
            <dt>Постів</dt>
            <dd>{postCount}</dd>
          </div>
          <div className="info">
            <dt>Учасників</dt>
            <dd>{memberCount}</dd>
          </div>
          <div className="info">
            <dt>Онлайн</dt>
            <dd>67</dd>
          </div>
        </dl>

      </div>
    </header>
  ); 
}
