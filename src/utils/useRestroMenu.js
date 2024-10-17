import { useEffect, useState } from "react";
import { Menu_URL } from '../utils/constants';


const useRestroMenu = (resId)=>{

    const [resDetails,setResDetails] = useState(null);

    const fetchResDetails = async()=>{
        const data = await fetch( Menu_URL + resId);
        const jsonData = await data.json();
        setResDetails(jsonData);
        
    };
    useEffect(()=>{
        fetchResDetails();
    }, []);

    return resDetails;
};

export default useRestroMenu;