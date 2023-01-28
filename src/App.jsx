import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import Counter from './features/counter/Counter';


export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Counter />
      </div>
    </Provider>
  )
}