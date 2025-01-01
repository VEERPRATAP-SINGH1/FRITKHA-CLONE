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
  // const [datas, setData] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [added, setAdded] = useState(0);
  // const [prdQt, setPrdQt] = useState(0);
  // const [cartId, setCartId] = useState(0);
  // const [cartName, setCartName] = useState("");
  // const [cartQt, setCartQt] = useState(0);
  // const [cartPrice, setCartPrice] = useState(0);

  // const getData = async () => {
  //   const res = await fetch("./db/db.json");
  //   const data = await res.json();
  //   setData(data);
  // };

  // const getProducts = async () => {
  //   const res = await fetch("./db/products.json");
  //   const data = await res.json();
  //   setProducts(data);
  // };

  // const addQt = () => setPrdQt(prdQt + 1);
  // const rmvQt = () => (prdQt > 0 ? setPrdQt(prdQt - 1) : null);

  // useEffect(() => {
  //   getData();
  //   getProducts();
  // }, []);

  return (
    <div className="box">
      <div className="hContainer">
        <header className="container">
          <Header
            // added={added}
            // setAdded={setAdded}
            // cartId={cartId}
            // setCartId={setCartId}
            // cartName={cartName}
            // setCartName={setCartName}
            // cartQt={cartQt}
            // setCartQt={setCartQt}
            // cartPrice={cartPrice}
            // setCartPrice={setCartPrice}
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
