
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from "./components/Cart"
import { NavBar } from "./components/NavBar";
import { Provider } from './contexts/CartContext';
import { Checkout } from './components/Checkout';
import { Error404 } from './components/Error404';

import './App.css';

//import { getFirestore, getDocs, collection } from "firebase/firestore";



function App() {

  return (

    <Provider>

      <BrowserRouter>

        <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>

      </BrowserRouter>

    </Provider>
  );
}

export default App;





//import { Input } from './components/NavBar'
/*
//Definicion de componente
const Input = () => {
  return <input type="number" />
};
*/