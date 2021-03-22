import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Products from "./Components/Products";
import Homepage from './Components/Homepage';
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Homepage}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/product/:1" exact component={ProductDetail}/>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
