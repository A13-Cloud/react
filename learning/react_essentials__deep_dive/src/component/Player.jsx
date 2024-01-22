
export default function Player ({name, symbol}) {

  return (
    <li>
      <soan className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </soan>
      <button>Edit</button>
    </li>
  )
}