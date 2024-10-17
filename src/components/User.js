
import React from "react";
import { useState } from "react";




const User =(props)=>{
    const [count, SetCount ]  = useState(0);
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{props.name}</h1>
        </div>
    );
}

export default User;