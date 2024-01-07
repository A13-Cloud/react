

export default function TabButton ({children, onSelect, selectedTab}) {

  return (
    <li>
      <button className={selectedTab ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  )
}