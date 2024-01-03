import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();


  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container m-3 product-details">
        <div className="col-md-6">
          <img 
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="620"
            width={"500px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center m-4"> {product.name}</h1>
          <h6><span style={{fontSize:'20px',color:'green',fontWeight:'bold'}}>Product Description :</span> <br/> <br/>{product.description}</h6>
          <ul style={{marginLeft:'30px',}}>
                            <li className="mt-3">Plants play a vital role in the maintenance of life on Earth. 
                               </li>
                           <li className="mt-3"> All energy used by living organisms depends on the complex process of photosynthesis, which is mostly carried out by green plants. 
                           
                           </li>
                           <li className="mt-3"> Radiant energy from the Sun is transformed into organic chemical energy in the form of sugars through the fundamental series of chemical reactions constituting photosynthesis.</li>
                           <li className="mt-3">   In nature all food chains begin with photosynthetic autotrophs (primary producers), including green plants and algae. </li>  
                        </ul>
          <h6  style={{fontSize:'20px',fontWeight:'bold',border:'1px solid green',width:'150px',height:'50px',borderRadius:'45px',textAlign:'center'}}><span style={{color:'green'}}>
            Price :</span>
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <button onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item Added to cart");
                      }}  style={{marginLeft:'100px',marginTop:'10px',textAlign:'center',fontSize:'1.05rem',color:'black',backgroundColor:"green", borderRadius: "100px"}}  class="btn btn-dark ms-1">ADD TO CART</button>
        </div>
      </div>
      <div className="row container similar-products">
        <h4 style={{color:'green'}}>Similar Products <i style={{color:'green'}} class="fa-solid fa-arrow-right fa-beat"></i></h4>
        {relatedProducts.length < 1 && (
          <p style={{color:'green'}} className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button  style={{marginLeft:'100px',marginTop:'20px',textAlign:'center',fontSize:'1.05rem',  backgroundColor: " green",color:'black', borderRadius: "100px"}} 
                    className="btn btn-success ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div><ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </Layout>
  );
};

export default ProductDetails;