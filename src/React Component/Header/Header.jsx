import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { GiDeathStar } from "react-icons/gi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import MainHome from "../MainHome/MainHome";
import Navbar from "../NavBar/Navbar";
import { fetchUser } from "../../redux/searchResultSlicer";

var data1;
var i = 0;
var a;

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  let clear = useRef();
  let refer1 = useRef();
  let refer2 = useRef();
  let refer3 = useRef();
  let refer4 = useRef();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const Navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(true);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);

  const [base, setBase] = useState(null);
  const [message, setMessage] = useState(null);
  const [posts, setPosts] = useState(null);
  const [nuller, setnuller] = useState([]);

  function closeresults(e) {
    if (e.target != clear.current) {
      console.log(clear.current);
      setOpen(false);
      // setMessage(null);
    }
  }
  function front() {
    if (!(posts == null)) {
      setPosts(null);
    }
    if (open == false) {
      setOpen(true);
    }
  }
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=null")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const ha = data.meals;
        console.log("dtfygu");
        setPosts(ha);
      });
  }, [nuller]);
  useEffect(() => {
    document.body.addEventListener("click", closeresults);
    return () => document.body.removeEventListener("click", closeresults);
  }, [open]);

  function handleClick1() {
    clear.current.value = "";
    setA(1);
    setB(0);
    setC(0);
    setD(0);
  }

  function handleClick2() {
    clear.current.value = "";
    setA(0);
    setB(1);
    setC(0);
    setD(0);
  }

  function handleClick3() {
    clear.current.value = "";
    setA(0);
    setB(0);
    setC(1);
    setD(0);
  }

  function handleClick4() {
    clear.current.value = "";
    setA(0);
    setB(0);
    setC(0);
    setD(1);
  }

  const HandleChange = (event) => {
    let a = event.target.value;

    if (a == "") {
      setMessage(null);
    }
    setMessage(a);
  };
  const handleOnFocus = (event) => {
    setIsFocused(true);
    setMessage("");
  };
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=null")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const ha = data.meals;
        console.log("dtfygu");
        setPosts(ha);
      });
  }, [nuller]);
  useEffect(() => {
    if (A == 1) {
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const ha = data.meals;
          setPosts(ha);
        });
    }
  }, [A == 1]);
  useEffect(() => {
    if (B == 1) {
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const ha = data.meals;
          setPosts(ha);
        });
    }
  }, [B == 1]);
  useEffect(() => {
    if (C == 1) {
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const ha = data.meals;
          setPosts(ha);
        });
    }
  }, [C == 1]);
  useEffect(() => {
    if (D == 1) {
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=french")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const ha = data.meals;
          setPosts(ha);
        });
    }
  }, [D == 1]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + message)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const ha = data.meals;
        console.log(ha);
        var test = new Array(10);
        if (!(data.meals == null)) {
          console.log(data.meals.length);
          if (data.meals.length > 10) {
            for (var i = 0; i < 5; i++) {
              test[i] = data.meals[i];
            }
          } else {
            test = data.meals;
          }
        }
        data[0] = ha;
        setBase(test);
      });
    setA(0);
    setB(0);
    setC(0);
    setD(0);
  }, [message]);

  return (
    <>
      <div className="top">
        <div className="encave1">
          <div className="encloserNav1">
            <Link to="/" className="topContent_1  flexRow">
              <div className="logoHead flex">
                <GiDeathStar className="iconHead" />
              </div>
              <div className="logoName">FastEat</div>
            </Link>
            <div className="topContent_3">
              <div className="search flexRow"></div>
              <Link className="catoegrymover1" to="/">
                Home
              </Link>
              <Link className="catoegrymover1" to="Category">
                Category
              </Link>
              {/* <IoReorderThreeSharp className="threeSlash" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="a">
        <div className="toptoBottom ">
          {console.log(posts)}
          <div className="content flexColumn">
            <div className="buttonsforcontrolchange">
              <button className={`buttonControl${A}`} onClick={handleClick1}>
                Canadian
              </button>
              <button className={`buttonControl${B}`} onClick={handleClick2}>
                Indian
              </button>
              <button className={`buttonControl${C}`} onClick={handleClick3}>
                Chinese
              </button>
              <button className={`buttonControl${D}`} onClick={handleClick4}>
                French
              </button>
            </div>
            <div className="enclosesearchwithresult">
              <div className="searchHead flexRow">
                <div className="iconsearcher">
                  <AiOutlineSearch />
                </div>
                <input
                  ref={clear}
                  onClick={front}
                  className="searcher"
                  onFocus={handleOnFocus}
                  onChange={HandleChange}
                  type="text"
                  placeholder="Search Here..."
                />
              </div>
              <div className={"ccardXsearchers" + (open ? "x" : "")}>
                {console.log("ccardXsearchers" + (open ? "x" : ""))}
                {base?.map((a, i) => (
                  <div
                    className="encloserr"
                    key={i}
                    onFocus={() => {
                      Navigate(`/main/${a.strMeal}`);
                    }}
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
                      <div className="mealImg+">{a.strMeal}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="introback1">
              <div className="introhead">What are your favourite Cusines?</div>
            </div>
            <div className="introback1">
              <div className="introhead">Perosnalize your cusines</div>
            </div>
          </div>
        </div>
        {/* <div className={"bottomControl" + (open ? "" : "")}> */}

        <MainHome data={posts} />
        {/* </div> */}
      </div>
    </>
  );
}

export default Header;
