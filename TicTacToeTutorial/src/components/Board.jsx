function Square({value}) {
  function handleClick(){
    console.log('clicked')
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function Board() {
  <>
    <div className="board-row">
      <Square value='X'/>
      <Square value='X'/>
      <Square value='X'/>
    </div>
    <div className="board-row">
      <Square value='X'/>
      <Square value='X'/>
      <Square value='X'/>
    </div>
    <div className="board-row">
      <Square value='X'/>
      <Square value='X'/>
      <Square value='X'/>
    </div>
  </>;
}
