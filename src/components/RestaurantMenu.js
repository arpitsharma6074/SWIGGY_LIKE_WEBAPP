import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Menu_URL, CDN_URL} from '../utils/constants';
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const [resDetails,setResDetails] = useState(null);
    const {resId} = useParams();

    const fetchResDetails = async()=>{
        const data = await fetch( Menu_URL + resId);
        // const data = await fetch( 
        //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4452268&lng=80.20703280000001&restaurantId=608598"

        // );
        const jsonData = await data.json();
        setResDetails(jsonData);
        
    };
    useEffect(()=>{
        fetchResDetails();
    }, []);
    const menuList =  resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log( "menuLIst" + menuList);
    const restaurantDetails = resDetails?.data?.cards[2]?.card?.card?.info;

    if(resDetails === null)return <Shimmer/>;
     return (
        <div className="menu">
            <h1>{restaurantDetails.name}</h1>
            <img
            className="res-logo"
            alt="res-logo"
            src = {CDN_URL + restaurantDetails.cloudinaryImageId}></img>
            <h2>menu</h2>
            <ul>
                { menuList.map((res)=><li key = {res?.card?.info?.id}>
                    {res?.card?.info?.name}
                    </li>)}
            </ul>
        </div>
     );
};

export default RestaurantMenu;