import React, { useState, useEffect } from "react";

import "./footer.css";

import 'react-loading-skeleton/dist/skeleton.css' 
import "aos/dist/aos.css";
import CatCard from "./CatCard";
import Loader from "react-js-loader";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
var jp = require("jsonpath");
var data;
var ii=0;

function Footer() {
  
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  const Navigate = useNavigate();
  const [base, setBase] = useState();
  const [content, setContent] = useState();
  const [message, setMessage] = useState(null);
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [loader,setLoader] = useState(false)


  const HandleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };
 


  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const ha = data.categories;
          setBase(ha);
          console.log(ha);
          console.log(base)
          setLoader(false);
        });
    }, 500);
  }, []);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + message)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const ha = data.meals;
        setPosts(ha);
        if (!(message === null)) {
          setContent("Search Results:");
        }
        console.log(ha);
      });
  }, [message]);

  
  return (
    <>
      <div className="top">
        <Navbar />
      </div>
      <div className="bottomControl">
        {loader ? (
          <div className="centerize">
            <Loader type="bubble-scale" />
          </div>
        ) : (
          <>
            <div className="bottom">
              <div className="categoryhead">Categories</div>
              <div className="category searchresult">
                {base?.map((a) => (
                  <CatCard data={a} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
    }
    
    export default Footer;
    export const careerLoader = async()=>{
      return data;
  }