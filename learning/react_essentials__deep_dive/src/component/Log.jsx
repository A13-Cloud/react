

export default function Log ({turns}) {
  return (
    <ol id="log">
      {turns.map(turn => <li>{turn.player} elected {turn.square.row}, {turn.square.col}</li>)}
    </ol>
  )
}