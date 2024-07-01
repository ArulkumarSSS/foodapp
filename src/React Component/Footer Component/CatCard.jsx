import React from 'react'
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";

const CatCard = ({data}) => {

    const Navigate = useNavigate();

  return (
            <div className="con" onClick={() => {Navigate(`/Category/${data.strCategory}`); }}>
                <div key={data.idCategory} className="card" >
                  <img
                    className="aaa"
                    src={data.strCategoryThumb }
                    alt="cover image"
                  />
                  <div className="mealImg">{data.strCategory }</div>
                </div>
              </div>
  )
}

export default React.memo(CatCard)