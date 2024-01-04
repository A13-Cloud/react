

export default function TabButton ({children}) {
  function onClickHandler () {
    console.log("Hello A13!");
  }
  return (
    <li>
      <button onClick={onClickHandler}>{children}</button>
    </li>
  )
}