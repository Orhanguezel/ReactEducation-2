import { useReducer } from 'react';
import data from './data.json';


const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        basket: [...state.basket, action.product],
        total: state.total + action.product.price
      };

    case 'clear':
      return {
        basket: [],
        total: 0
      };

    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };

    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

function App2() {
  // 2. useReducer ile State Tanımlama
  const initialState = { count:0, basket: [], total: 0 };
  const [catStuff, dispatch] = useReducer(reducer, initialState);

  // 3. Sepete Ürün Ekleme Fonksiyonu
  const handleBasket = (product) => {
    dispatch({ type: 'add', product });
  };

  const handleClear = () => {
    dispatch({ type: 'clear' });
  }
  
  const increment = () => {
    dispatch({type: 'increment'})
  }
  
  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <div>
      <header>Cat stuff</header>
      <main>
        <p>
          {catStuff.basket.length} Items,  {catStuff.total}€
        </p>
        <br />
        <button onClick={handleClear}>Clear</button>
        {data.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
            <button onClick={() => handleBasket(product)}>Add to basket</button>
          </div>
        ))}
      </main>

      {/* 4. Sepet Bilgisi */}
      <aside>
        <h3>Shopping Basket</h3>
        <ul>
          {catStuff.basket.map((item, index) => (
            <li key={index}>{item.name} - {item.price}€ 
            <button onClick={increment}>+</button>
        <p>{catStuff.count}:</p>
        <button onClick={handleDecrement}>-</button>
            </li>

          ))}
        </ul>
        <p><strong>Total: {catStuff.total}€</strong></p>
      </aside>
    </div>
  );
}

export default App2;
