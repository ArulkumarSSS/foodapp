import React, { useRef, useState, useEffect } from "react";
import "./Categorywise.css";
import Loader from "react-js-loader";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/searchResultSlicer";
import "aos/dist/aos.css";

// import InfiniteScroll from "react-infinite-scroll-component";
let store;
let v;
function Categorywise() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const Navigate = useNavigate();
  const input = useRef();
  const { strCategory } = useParams();
  console.log(strCategory);
  store = strCategory;
  const [base, setBase] = useState(store);
  const [content, setContent] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [source, setDataSource] = useState(Array.from({ length: 8 }));
  a();
  function a() {
    if (!(base == store)) {
      setBase(store);
    }
  }
  const handleFocus = () => {
    input.current.focus();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [base]);

    useEffect(() => {
      setLoader(true);

      setTimeout(() => {
       fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + base)
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           const ha = data.meals;
           setMessage(ha);
           console.log(ha);
           setLoader(false);
         });
      }, 500);
    }, []);
 
  return (
     <>
     {loader ? (
          <div className="centerizer">
            <Loader type="bubble-scale" />
          </div>
        ) : (<>
      <div className="top">
        <Navbar data={posts} />
      </div>
      <div className="close">
        <div className="detail" onFocus={handleFocus}>
          Menu:
        </div>

        <div data-aos="fade-up" className="MainFood">
          {/* {console.log(message.length)} */}

          {message?.map((a) => (
            
              <div
                className="enclose"
                key={a.idMeal}
                onClick={() => {
                  Navigate(`/main/${a.strMeal}`);
                  dispatch(fetchUser(a.strMeal));
                }}
              >
                {console.log("posts")}
                {console.log(posts.length === 0)}
                <div className="card">
                  <img
                    className="aaa"
                    src={a.strMealThumb || <Skeleton />}
                    alt="cover image"
                  />
                  <div className="mealImg">
                    <span className="meal">{a.strMeal || <Skeleton />}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
      <div className="detail" onFocus={handleFocus}>
        {store} Menu:
      </div>
    </> )
}</>)
}
export default Categorywise;
