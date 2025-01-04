import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Features from "./components/Pages/features";
import Products from "./components/Pages/products";
import Discount from "./components/Pages/Discount";
import Footer from "./components/Pages/footer";
import Testimonial from "./components/Pages/Testimonial";
import Banner from "./components/Pages/banner";
import News from "./components/Pages/news";
import Logos from "./components/Pages/logos";
import "./styles/app.css";

const App = () => {


  return (
    <div className="box">
      <div className="hContainer">
        <header className="container">
          <Header
           
          />
        </header>
      </div>
      <section>
        <Home
          // datas={datas}
          // products={products}
          // added={added}
          // setAdded={setAdded}
          // prdQt={prdQt}
          // addQt={addQt}
          // rmvQt={rmvQt}
          // setPrdQt={setPrdQt}
          // cartId={cartId}
          // setCartId={setCartId}
          // cartName={cartName}
          // setCartName={setCartName}
          // cartQt={cartQt}
          // setCartQt={setCartQt}
          // cartPrice={cartPrice}
          // setCartPrice={setCartPrice}
        />
      {/* </section>
      <section> */}
        <Features /> {/* Include the Features component here */}
        <Products />
        <Discount/> 
        <Testimonial/>
        <Banner/> 
        <News/>
        <Logos/>
        <Footer />
      </section>
    </div>
  );
};

export default App;
