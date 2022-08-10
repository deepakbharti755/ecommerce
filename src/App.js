
import './App.css';
import axios from "axios";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function App() {


  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://e-commerce12.p.rapidapi.com/categories/toprated',
  params: {category: 'homepetappliance', rating: '4', page: '1', limit: '100'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'e-commerce12.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <>
    <div className="header">
            <h1> Available Products</h1>

   </div>

   <div> 
    
    <select name="products" id="productdata">
    <option value="electronics">Electronics</option>
    <option value="shoes">Shoes</option>
    <option value="cloths">Cloths</option>
    <option value="books">Books</option>
  </select>
  
</div>

<div className="image-container" >
{/* <img id="ecommpic" src={pic} alt="products pic"></img> */}

<img id="pic1"  src={img1} alt="products pic"></img> 

<img id="pic2" src={img2} alt="products pic"></img> 

<img id="pic3" src={img3} alt="products pic"></img> 

<img id="pic4" src={img4} alt="products pic"></img> 

<img id="pic5" src={img5} alt="products pic"></img> 

</div>
   
   </>
  );
}

export default App;
