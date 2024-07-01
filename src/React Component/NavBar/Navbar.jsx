import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { GiDeathStar } from "react-icons/gi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchUser } from "../../redux/searchResultSlicer";
function Navbar() {
  // const user = useSelector((state)=>state.meals)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState([0]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let size = [10];
  let setter;
  let refer = useRef();
  const Navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [posts, setPosts] = useState([]);

  const HandleChange = (event) => {
    console.log(setter);
    setter = event.target.value;
    setTimeout(myStopFunction, 500);
    function myStopFunction() {
      setMessage(setter);
    }
    if (event.target.value == "") {
      setMessage(null);
    }
  };
  function closeresults(e) {
    if (e.target != refer.current) {
      setOpen(false);
    }
  }
  function front() {
    if (open == false) {
      setOpen(true);
    }
  }






  useEffect(() => {
    document.body.addEventListener("click", closeresults);
    return () => document.body.removeEventListener("click", closeresults);
  }, [open]);

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + message)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          var test = new Array(10);
          if (!(data.meals == null)) {
            console.log(data.meals.length);
            if (data.meals.length > 10) {
              for (var i = 0; i < 10; i++) {
                test[i] = data.meals[i];
              }
            } else {
              test = data.meals;
            }
          }
          setPosts(test);
          setLoader(false);
        });
    }, 500);
  }, [message]);
  return (
    <div>
      <div className="encloserNav">
        <Link to="/" className="topContent_1  flexRow">
          <div className="logoHead">
            <GiDeathStar className="iconHeadnav" />
          </div>
          <div className="logoName">FastEat</div>
        </Link>
        <div className="topContent_2">
          <div className="searchencloser">
            <div className="enclosesearchsearcher">
              <div className="searchX flexRow">
                <div className="iconsearcher">
                  <AiOutlineSearch />
                </div>
                <input
                  ref={refer}
                  onClick={front}
                  className="searchers"
                  onChange={HandleChange}
                  type="text"
                  placeholder="Search Here..."
                />
              </div>

              <div className={"ccardXsearchers" + (open ? "x" : "")}>
                {posts?.map((a, i) => (
                  <div
                    className="encloserr"
                    key={i}
                    onClick={() => {
                      Navigate(`/main/${a.strMeal}`);
                      dispatch(fetchUser(a.strMeal));
                      console.log(user);
                    }}
                  >
                    <div className="flex arx">
                      <div className="iconsearchersearch  ">
                        <AiOutlineSearch />
                      </div>
                      {/* <img className="aaa" src={a.strMealThumb} alt="cover image" /> */}
                      <div className="mealImgX">{a.strMeal}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link className="catoegrymover" to="/">
            Home
          </Link>
          <Link className="catoegrymover" to="/Category">
            Category
          </Link>
          {/* <IoReorderThreeSharp className="threeSlash" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
