import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import styles from "./Home.module.css"

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchDataApi = async () => {
    axios
      .get(`http://localhost:8080/products`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchDataApi();
  }, []);


  const handleChange=(value)=>{
   console.log(value);
  }


  return <div>
    <h2 className={styles.heading}>Home Page</h2>
    <div className={styles.searchBar}>
        <input type="search" name="search" id="search" placeholder="Search any products" onChange={(e)=>handleChange(e.target.value)}/>
    </div>
    <div className={styles.container}>
        {products.length>0?
        products.map((singleProduct)=>{
           return <SingleProduct key={singleProduct.id} price={singleProduct.discountedPrice} title={singleProduct.title} image={singleProduct?.image?.[0]  }/>
        })
        :<h1>No Data Found</h1>}
    </div>
  </div>;
};

export default Home;
