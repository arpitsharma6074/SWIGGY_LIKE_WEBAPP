import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"not defined",
                location:"not defined",
                avatar_url:"",
            }

        }
    }
    async componentDidMount(){
        //for api calls
        // fetchGithub();
        const githubData = await fetch("https://api.github.com/users/arpitsharma6074");
        const githubJson = await githubData.json();
        console.log(githubJson);
        this.setState({userInfo : githubJson});
        // return githubJson;
    }
    
    render(){
        return (
            <div className="user-card">
                {/* <h1>Count = {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>
                    Increase count
                </button> */}
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>{this.state.userInfo.name}</h1>
                <h1>{this.state.userInfo.location}</h1>
            </div>
        );
    }
}

export default UserClass;