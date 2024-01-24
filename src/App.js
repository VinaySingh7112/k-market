
import './App.css';
import Home from './componenets/Home';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Navbar1 from './componenets/Navbar1';
import Footer from './Footer';
import Data1 from './componenets/Data1';

// import { useState } from 'react';
import Data2 from './componenets/Data2';
import Data3 from './componenets/Data3';
import Data4 from './componenets/Data4';
import Data5 from './componenets/Data5';
import Data6 from './componenets/Data6';
import Data7 from './componenets/Data7';
import Data8 from './componenets/Data8';
import Data9 from './componenets/Data9';
import Data10 from './componenets/Data10';
import Data11 from './componenets/Data11';

function App() {

  return (
  <>
    <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/data1/:productID" element={Data1} />
    
         <Route path='/data1' element={<Data1/>}></Route>
         <Route path='/data2' element={<Data2/>}></Route>
         <Route path='/data3' element={<Data3/>}></Route>
         <Route path='/data4' element={<Data4/>}></Route>
         <Route path='/data5' element={<Data5/>}></Route>
         <Route path='/data6' element={<Data6/>}></Route>
         <Route path='/data7' element={<Data7/>}></Route>
         <Route path='/data8' element={<Data8/>}></Route>
         <Route path='/data9' element={<Data9/>}></Route>
         <Route path='/data10' element={<Data10/>}></Route>
         <Route path='/data11' element={<Data11/>}></Route>
      
      </Routes>
    
    </BrowserRouter>
    <Footer/>
  </>
  );
}

export default App;
