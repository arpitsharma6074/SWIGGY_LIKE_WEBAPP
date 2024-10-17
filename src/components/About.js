import React from "react";
import UserClass from "./UserClass";
import User from "./User";
const About = ()=>{
    return (
        <div>
            <h1>This is about page</h1>
            <h2>This is h2 of About page</h2>
            <UserClass name="Arpit Sharma"/>
            {/* <User name="Arpit Sharma"/> */}
        </div>
    );
};

export default About;