import {useReducer} from 'react'
import './App.css'
// import App2 from './App2'
import Message from './Message'

const reducer = (state,action) => {
  //console.log(state, action)
  switch(action.type){
    case 'increment':{
      //return {count: state.count + 1, name: state.name}
      return {...state, count: state.count + 1}
    }
    case 'decrement':{
     // return {count: state.count - 1, name: state.name}
      return {...state, count: state.count - 1}
    }

    case 'changeName':{
      return {...state, name: action.newName}
    }
}
}

function App() {

const initialState = {count: 0, name: 'John'};
const[counter, dispatch] = useReducer(reducer, initialState);

const increment = () => {
  dispatch({type: 'increment'})
}

const handleDecrement = () => {
  dispatch({type: 'decrement'})
}

const handleName = (e) => {
  dispatch({type: 'changeName', newName: e.target.value})
}

// <App2></App2>

  return (
    <>
      <h1>Count with useReducer</h1>
     
      <Message></Message>
      <div className='card'>
        <button onClick={increment}>+</button>
        <p>{counter.count}:</p>
        <button onClick={handleDecrement}>-</button>
        <br />
        <input type="text" placeholder='first name' onChange={handleName}/>
        <p>your name is {counter.name}</p>
      </div>

    </>
  )
}

export default App
