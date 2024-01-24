import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Data10() {
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
     <img className='me-lg-5' height={"550px"} src="https://www.koreanmarket.in/cdn/shop/files/360019014_661380832526625_7696690474821647317_n_570x.jpg?v=1689330275" alt="" />
     <div className='ms-lg-4 col ms-5 me-5 mb-5'>
          <h2>[SINGH,RAKSEL-HUMENTY] 2023.10 TYPE C [Cover: IU]</h2>
          <div className='mt-lg-5 fs-4'style={{color:"orange"}}><span className='bi bi-emoji-heart-eyes'></span>6 sold in last 17 hours</div>
          <p className='fs-5 mt-3'>SKU: [TYPE A]</p>
          <p className='fs-5'style={{color:"orange"}}>Availability: In Stock</p>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil non?</p>
          <h4 className='mt-lg-5 ms-3'>$ 2,199.00</h4>
          <div className='btn btn-dark  mt-lg-5 fs-3' style={{paddingLeft:"30%",paddingRight:"30%"}}>ADD TO CART</div>
        </div>
      </div>
      </div>
  )
}
