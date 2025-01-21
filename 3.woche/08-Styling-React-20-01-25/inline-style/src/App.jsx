import './App.css'

function App() {
  const pStyle ={
    backgroundColor: 'lightblue',
    color: 'green',
    padding: '${Math.floor(Math.random()*20)}px',
  }
 

  return (
    <>
      <h1 style={{color:"magenta", textAlign:"center"}}>Inline style</h1>
      <p style={pStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, unde.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undeLorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undeLorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undeLorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undeLorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undeLorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undeLorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, undev
      </p>
    </>
  )
}

export default App
