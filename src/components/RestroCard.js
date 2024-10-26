import React from "react";
import ReactDOM from "react-dom/client";
import {CDN_URL} from "../utils/constants";

const RestroCard =(props)=>{
    const {resData} = props;
    return (
        <div className=" justify-between w-50 p-1" /*restaurant-card*/>
            <img
            className="w-36 h-40 "
            alt="res-logo"
            src = {CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3> 
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <h5>{resData.info.avgRating} start</h5>
            <h5>{resData.info.costForTwo}</h5>
        </div>
    );
};

export default RestroCard;