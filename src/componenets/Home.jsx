import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink,useNavigate } from 'react-router-dom';
// import Data1 from './Data1';

export default function Home() {
  let Nav =useNavigate();
  let back =(a)=>{
    Nav(`/data1/${a}`)
  }
  return (
    <div style={{paddingTop:'73px'}}>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        
        modules={[Autoplay]}
        className="mySwiper" 
      >
        <SwiperSlide><img  src="https://korikart.com/storage/website/home_banner/1687166398_Banner%20copy.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://korikart.com/storage/website/home_banner/1674198674_image002.png" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="slide2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://korikart.com/storage/website/home_banner/1693559760_Bugslock%20Banner%20(1).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://korikart.com/storage/website/home_banner/1692935392_banner%20(2).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://korikart.com/storage/website/home_banner/1687254630_Spicywitch%20Topokki%20Korean%20Rice%20Pasta%20Website_%20(1)%20(1).jpg" alt="" /></SwiperSlide>

      </Swiper>
      
      <div  className='mt-lg-5'>
        <div>
          <h3 className='text-center' style={{ color: '#5e5959' }}>Top Categories</h3>
          <span className='text-center d-flex justify-content-center' style={{ color: '#5e5959' }} >Shop From Your Favorite </span>
        </div>
        <div className='d-flex justify-content-center mt-1'>
          <div className=" border-bottom border-2 border-danger " style={{ width: '200px' }}></div>

        </div>
        <div className='d-flex flex-wrap gap-3 justify-content-between m-5'>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded' style={{fontWeight:'bold',color:'#5e5959'}}>Pre-Order</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>K-Pop</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>K-Food</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>K-Drama OST</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>K-Magazine</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>K-Merch</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>K-Drama OST</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>Lightsticks</button>
            <button className='border ps-lg-5 pe-lg-5 fs-5 rounded'style={{fontWeight:'bold',color:'#5e5959'}}>Doll & Cushion</button>
        </div>
      </div>
      <div className='mt-5 mb-5 m-4' >
        <Swiper style={{ height: '450px' }}
         
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
            1150: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide style={{ height: '350px'}} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/ovcJGe.png?v=1695293094"  alt="" />
          <NavLink to='/data1' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav(123)}} className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
              {/* <Data1 id={alldata[0].id} image={alldata[0].image} price={alldata[0].price} description={alldata[0].description} title={alldata[0].title} /> */}
           
            </NavLink>
            <span className='shadow-lg'>[Noblesse MEN] 2023.10 TYPE A [ Cov.....
              <h6>Rs.2,799.00 </h6>
            </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/GD00095900.default.1_570x.png?v=1687162192" alt="" />
            <NavLink to='/data2' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
              <h6>Rs.1,499.00 </h6>
            </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/009006000639.jpg?v=1694764156" alt="" />
            <NavLink to='/data3' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
            <h6>Rs.1,799.00 </h6>
          </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/HGcIkM.png?v=1695292977" alt="" />
            <NavLink to='/data4' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[Noblesse MEN] 2023.10 TYPE A [ Cov.....
              <h6>Rs.2,799.00 </h6>
            </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/nsYZ4O.png?v=1695106784" alt="" />
            <NavLink to='/data5' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
            <h6>Rs.3,099.00 </h6>
          </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/009006000622_470x.jpg?v=1692162803" alt="" />
            <NavLink to='/data7' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
              <h6>Rs.2,299.00 </h6>
            </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/009006000640.jpg?v=1694764207" alt="" />
            <NavLink to='/data6' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
            <h6>Rs.4,099.00 </h6>
          </span>
          </SwiperSlide>

          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/378323782_626477006278069_3608313311775547050_n.jpg?v=1694766310" alt="" />
            <NavLink to='/data8' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
          <span className='shadow-lg'>[Marie Claire] 2023.10 TYPE C [ COVER.....
            <h6>Rs.1,899.00 </h6>
          </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/cPNi6w.png?v=1692691258" alt="" />
            <NavLink to='/data9' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
          <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
            <h6>Rs.1,799.00 </h6>
          </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
           
           <img src="https://www.koreanmarket.in/cdn/shop/files/360019014_661380832526625_7696690474821647317_n_570x.jpg?v=1689330275" alt="" />
           <NavLink to='/data10' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div  onClick={()=>{Nav("/data1")}} className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[Marie Claire] 2023.08 TYPE A[Cover:Kim Tae-Ri]
              <h6>Rs.1,899.00 </h6>
            </span>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }} className='d-flex flex-wrap '>
            <img src="https://www.koreanmarket.in/cdn/shop/files/009006000614_470x.jpg?v=1691993664"  alt="" />
            <NavLink to='/data11' className='border  position-fixed text-dark bg-light text-decoration-none'style={{marginTop:'300px'}}>
              <div onClick={()=>{Nav("/data1")}}  className='ms-lg-5 me-lg-5 m-1'> Add_Card </div>
            </NavLink>
            <span className='shadow-lg'>[HARPER'S BAZAAR] 2023.07 B TYPE [ Cover:.....
              <h6>Rs.1,799.00 </h6>
            </span>
          </SwiperSlide>

        </Swiper>
      </div>

      <div className='mt-5 mb-5 m-4'>
        <h3 className='text-center' style={{ color: '#5e5959' }}>#MUST Try</h3>

        <img src="https://www.koreanmarket.in/cdn/shop/files/Untitled_1882_x_720_px_1880x.jpg?v=1690017787" width={'100%'} alt="" />

      </div>
      <div className='mt-5 mb-5 m-4'>
        <img src="https://www.koreanmarket.in/cdn/shop/files/4_1880x.png?v=1677869713" width={'100%'} alt="" />

      </div>
      <div className='mt-5 mb-5 m-4'>
        <img src="https://www.koreanmarket.in/cdn/shop/files/My_project-1_4_1170x.png?v=1685693101" width={'100%'} alt="" />

      </div>
      <div className='mt-5 mb-5 m-4'>
        <img src="https://www.koreanmarket.in/cdn/shop/files/SUZUME_665x.jpg?v=1688476908" width={'100%'} alt="" />

      </div>
      <div className='m-4'>
        <h3 className='text-center' style={{ color: '#5e5959' }}>Magazines</h3>
        <img src="https://www.koreanmarket.in/cdn/shop/files/My_project-1_6_670x.png?v=1685694215" width={'100%'} alt="" />

      </div>
    </div>
  );
}
