import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {CDN_URL} from '../utils/constants';
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const resDetails = useRestroMenu(resId);
    const menuList =  resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const restaurantDetails = resDetails?.data?.cards[2]?.card?.card?.info;

    if(resDetails === null)return <Shimmer/>;
     return (
        <div className="menu">
            <h1>{restaurantDetails.name}</h1>
            <img
            className="res-logo"
            alt="res-logo"
            src = {CDN_URL + restaurantDetails.cloudinaryImageId}></img>
            <h2>Menu: </h2>
            <ul>
                { menuList.map((res)=><li key = {res?.card?.info?.id}>
                    {res?.card?.info?.name}
                    </li>)}
            </ul>
        </div>
     );
};

export default RestaurantMenu;