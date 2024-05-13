export default function TabButton ({children, isSelectedTab, ...props}) {

  return (
    <li>
      <button className={isSelectedTab ? "active" : undefined} {...props}>{children}</button>
    </li>
  )
}