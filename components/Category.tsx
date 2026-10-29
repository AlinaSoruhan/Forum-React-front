type CategoryBadgeProps = {
  category: string
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  return <span className="category-badge">{category}</span>
}

export default CategoryBadge
