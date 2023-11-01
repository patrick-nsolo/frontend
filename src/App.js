import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category='men'/>}/>
        <Route path='/women' element={<ShopCategory category='women'/>}/>
        <Route path='/kids' element={<ShopCategory category='kids'/>}/>
        <Route path='/product' element={<Product/>}>

        </Route>
      </Routes>

      </BrowserRouter>  
    </div>
  );
}

export default App;
