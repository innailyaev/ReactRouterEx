import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Products from "./Components/Products";
import Homepage from './Components/Homepage';
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Homepage}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/product/:id" exact component={ProductDetails}/>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
