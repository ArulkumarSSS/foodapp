import React, { useState, useEffect } from "react";
import "./mainHome.css";
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Aos from "aos";
import { useDispatch,useSelector } from 'react-redux'
import {fetchUser} from '../../redux/searchResultSlicer'
import "aos/dist/aos.css";
var data1;
var i = 0;
var a;
function MainHome(data1) {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  console.log(data1.data)

  useEffect(() => {
    if((!(data1.data==null)))
    {
      console.log("from 700");
    window.scrollTo(0,640);
  }
   }, [data1.data ]);
   useEffect(() => {
    if(((data1.data==null)))
    {
      console.log("from 0");
      console.log((data1.data==""));
      console.log((!(data1.data==null)));
    window.scrollTo(0,0);
  }
   }, [((data1.data==null)) ]);
   
    const [base, setBase] = useState(null);
    const Navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() =>
  {
    if(!(data1.data===null))
    {
        setBase("Search Result:")
    } 
},[data1]);
a="Search Results:"
  return (
   
      <div className="bottom">
      {(!(data1.data==null)) ? <h2>{a}</h2>:<h2></h2>}
        <div data-aos="fade-up" className="searchresult ">
          {data1.data?.map((a) => (
            <div className="encloser"  key={a.strMeal} onClick={() => {Navigate(`/main/${a.strMeal}`); dispatch(fetchUser(a.strMeal));}}>
            <div className="card " >
              {/* <div className="hovercontent flex">
                <div className="none"></div>
                <div className="veg">Id:{a.idMeal}</div>
                <div className="veg">Category:{a.strCategory}</div>
                <div className="veg">From:{a.strArea}</div>
              </div> */}
              <img className="aaa" src={a.strMealThumb  || <Skeleton />} alt="cover image" />
              <div className="mealImg">{a.strMeal || <Skeleton />}</div>
            </div>
            </div>
          ))}
        </div>
      </div>
 
  );
}
export const careerLoad = async()=>{
    console.log(data1)
    return data1;
}
export default MainHome;

