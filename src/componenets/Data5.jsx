import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Data5() {
  let {id} =useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div className='pt-lg-5'>
     <h1> {id}   </h1>
     <div className='d-flex m-5 justify-content-center flex-wrap'>
     <img src="https://www.koreanmarket.in/cdn/shop/files/nsYZ4O.png?v=1695106784" alt="" />
                   <div className='col ms-5 me-5 mb-5'>
          <h2>[RAJPUT'S BAZAAR] 2023.07 B TYPE [ Cover:ALL MOMENT IN THE WORLD ]</h2>
          <div className='mt-lg-5 fs-4'style={{color:"orange"}}><span className='bi bi-emoji-heart-eyes'></span>6 sold in last 17 hours</div>
          <p className='fs-5 mt-3'>SKU: [TYPE A]</p>
          <p className='fs-5'style={{color:"orange"}}>Availability: In Stock</p>
          <p className='fs-5'>RAJPUT brand in all world you new as don't read agen ipsum dolor sit  nihil non?</p>
          <h4 className='mt-lg-5 ms-3'>$ 3,099.00</h4>
          <div className='btn btn-dark  mt-lg-5 fs-3' style={{paddingLeft:"30%",paddingRight:"30%"}}>ADD TO CART</div>
        </div>
      </div>
      </div>
  )
}
