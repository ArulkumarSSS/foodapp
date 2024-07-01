import React, { useState, useEffect } from "react";
import "./main.css";
import {fetchUser} from '../../redux/searchResultSlicer'
import { useDispatch,useSelector } from 'react-redux'
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { GiDeathStar } from "react-icons/gi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import Loader from "react-js-loader";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../NavBar/Navbar";
var jp = require("jsonpath");

var data1;
let ha;
let i = 0;

function Main() {

  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]) 
  const { strMeal } = useParams();
  const [posts, setPosts] = useState([]);
  const [val, setval] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState([strMeal]);
  const dispatch = useDispatch();
  // dispatch(fetchUser())
  const users = useSelector((state)=>state.user)
  console.log(users.users.meals)
  // useEffect(()=>{
  //   dispatch(fetchUser())
  //   console.log(users)
  // },[users])

  // console.log(message);
  // console.log(strMeal);
  if(!(strMeal==message)){
    // window. location. reload(); 
      setMessage(strMeal)
  }
    useEffect(() => {
      setLoader(true);

      setTimeout(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + message)
          .then((response) => response.json())
          .then((data) => {
            ha = data.meals;
            setval(ha);
            setLoader(false);
          });
      }, 500);
    }, [message]);
 
  function splitIdYT(a) {
    const text = a;
    const myArray = text.split("=");
    return myArray[1];
  }
  return (
    <>
     {loader ? (
          <div className="centerizer">
            <Loader type="bubble-scale" />
          </div>
        ) : (<>
      <div className="top">
        <Navbar />
      </div>
      <div className="MainsFood">
        <div className="mainIntro" onClick={() => {
                    //  Navigate(`/main/${a.strMeal}`)
                    //  console.log(user)
                     dispatch(fetchUser());
                     console.log(users)
                    //  console.log(fetchUser())
                    }}>Meal Details:</div>

        {users.users.meals?.map((a) => (
          <div className="toppeer">
            <div className="containDetails flexRow">
              <img className="aaa" src={a.strMealThumb} alt="cover image" />
              <div className="containDetailsRight ">
                <div className="Belowline">
                  <div className="namewithline flexColumn">
                    <div className="containName">{a.strMeal}</div>
                     {/* <div className="line"></div> */}
                  </div>
                  <div className="containCategory">
                    <b>Category : </b>
                    {a.strCategory}
                  </div>
                  <div className="containArea">
                    <b>Area : </b>
                    {a.strArea}
                  </div>

                  <div className="ingredClose">
                    <b>Ingredients: </b>
                    <div className="strIngredients">
                      <ul className="ulist">
                        <li className="ingredient">
                          {a.strIngredient1}-{a.strMeasure1}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient2}-{a.strMeasure2}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient3}-{a.strMeasure3}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient4}-{a.strMeasure4}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient5}-{a.strMeasure5}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient6}-{a.strMeasure6}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient7}-{a.strMeasure7}
                        </li>
                        <li className="ingredient">
                          {a.strIngredient8}-{a.strMeasure8}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomcontain">
              <div className="flex aligncenter">
              <div className="howtoDo">
                <div className="enclose">
                  <div className="flex center">
                  Instructions:&nbsp; &nbsp;
                  </div>
                  <p className="wrap">{a.strInstructions}</p>
                </div>
                </div>
              </div>
              <div className="vid">
                <iframe
                  className="youtube"
                 src={`https://www.youtube.com/embed/`+splitIdYT(a.strYoutube)}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div></>)}
    </>
  );
}

export default Main;
