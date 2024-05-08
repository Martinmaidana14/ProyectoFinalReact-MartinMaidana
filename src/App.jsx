
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
//import { Cart } from './components/Cart/Cart';
import { NavBar } from "./components/NavBar";
import { Provider } from './contexts/CartContext';
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
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
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