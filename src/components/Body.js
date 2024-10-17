import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resList from "../utils/MockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";


const Body= ()=>{
    // const [listOfRestro,setlistOfRestro] = useState(resList);
    const [listOfRestro,setListOfRestro] = useState([]);
    const [listOfFiltered,setListOfFiltered] = useState([]);
    const [searchVal,setSearchVal] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData =async()=>{
        try{
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4452268&lng=80.20703280000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            console.log("fetch sucess");
            const json = await data.json();
            console.log("conversion to json sucess");
            console.log(json);
            let restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurants) {
                // setListOfRestro(restaurants);
                setListOfRestro(restaurants);
                setListOfFiltered(restaurants);
            } else {
                console.log("Restaurants data not found");
            }
            // setlistOfRestro(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log(err);
        }
    };

    if(useOnlineStatus() === false)return <div>Looks like you're Offline!!</div>;
    if(listOfRestro.length === 0){
        return <Shimmer/>;
    }
    
    return (
        <div className="body">
            <div className ="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}>
                    </input>
                    <button className="search-btn" onClick={()=>{
                        setListOfFiltered(listOfRestro.filter((res)=>
                        res.info.name.toLowerCase().includes(searchVal.toLowerCase()) ))
                        return  listOfFiltered;
                    }}>Search</button>
                </div>
                <button className ="filter-btn" onClick ={(()=>{
                    const filteredList = resList.filter((res)=>res.info.avgRating>4.5)
                    setListOfRestro(filteredList);
                })}>
                    Top Restaurant
                </button>
            </div>
            <div className ="restaurant-container">
                {
                    listOfFiltered.map((res) => <Link 
                    key={res.info.id} to={"restaurant/" + res.info.id}><RestroCard  resData = {res}/>
                    </Link>)
                }
            </div>
        </div>
    );
}

export default Body;