import { BrowserRouter, Routes, Route } from "react-router-dom";
import react, { useEffect, useState, createContext, useContext } from 'react'
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx'
import ProfileSeller from './components/Mbarki/ProifleSeller.jsx'
import Add from './components/Mbarki/Add.jsx'
import AddProductSeller from './components/Mbarki/AddProductSeller.jsx';
import Edit from './components/Mbarki/EditProduct.jsx'
import Foutree from './components/Mbarki/Foutree.jsx' 
import Images from './components/Mbarki/Images.jsx';
import AdminDashboard from "./components/adminComponents/AdminDashboard.jsx"
import axios from "axios" 
import Womanfashion from "./components/briniHomePage/Womanfashion.jsx"
import Manfashion from "./components/briniHomePage/Manfashion.jsx";
import Sports from "./components/briniHomePage/Sports.jsx";
import Gaming from './components/briniHomePage/Gaming.jsx';
import Healthbeauty from './components/briniHomePage/Health&beauty.jsx';
import Medecine from './components/briniHomePage/Medecine.jsx';
import AllflashSale from './components/briniHomePage/AllFlashsale.jsx';
import Allnewarrivals from "./components/briniHomePage/Allnewarrivals.jsx"
import Allproducts from "./components/briniHomePage/Allproducts.jsx"
import Contact from "./components/briniHomePage/Contact.jsx"
import Aboutus from './components/briniHomePage/Aboutus.jsx';
import FlashSale from "./components/briniHomePage/FlashSale.jsx"
import SignIn from "./components/SignIn.jsx"
import SignUp from "./components/SignUp.jsx"
import ProductContext from './components/UseContext.js';
import OneView from "./components/OneView.jsx"
import Wishlist from "./components/Wishlist.jsx";
import Notfound from './components/briniHomePage/Notfound.jsx'

function App() {
  
  const [dataproduct, setDataproduct] = useState([])
  const [one, setOne] = useState({})
  
  useEffect(() => {
    axios.get("http://localhost:8080/product/getall")
    .then((res) => {
      setDataproduct(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  },[])

  return (
 
    <>
    <BrowserRouter>
    <ProductContext.Provider value={dataproduct}>
    <Header/>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path ="/ProfileSeller" Component={ProfileSeller}/>  
        <Route path ="/EditSeller" Component={Add}/>  
        <Route path ="/addProductSeller" Component={AddProductSeller}/>  
        <Route path ="/editProductSeller" Component={Edit}/>  
        <Route path ="/foutre" Component={Foutree}/>  
        <Route path ="/Images" Component={Images}/> 
        <Route path ="/notfound" Component={Notfound}/> 
        <Route path='/admin' Component={AdminDashboard}></Route>
        <Route path="/womanfashion" element={<Womanfashion prodd={dataproduct}/>} ></Route>
        <Route path="/manfashion" element={<Manfashion prodd={dataproduct}/>} ></Route>
        <Route path="/health&beauty" element={<Healthbeauty prodd={dataproduct}/>} ></Route>
        <Route path="/gaming" element={<Gaming prodd={dataproduct}/>} ></Route>
        <Route path="/sports" element={<Sports prodd={dataproduct}/>} ></Route>
        <Route path="/medecine" element={<Medecine prodd={dataproduct}/>} ></Route>
        <Route path="/allproduct" Component={Allproducts}> </Route>
        <Route path="/newarrivals" Component={Allnewarrivals}></Route>
        <Route path="/contact" Component={Contact}  ></Route>
        <Route path="/aboutus" Component={Aboutus}  ></Route>  
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' Component={SignUp}></Route>  
        <Route path='/signin' Component={SignIn}></Route>
        <Route path="/flashsale" Component={AllflashSale}></Route>
        <Route path='/oneview' Component={OneView}></Route>
        <Route path='/wishlist' Component={	Wishlist}></Route>
      </Routes>
    </ProductContext.Provider>
    </BrowserRouter>
    </>
  )
}
export default App;
