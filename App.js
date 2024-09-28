// const heading = React.createElement("h1",{},"Hello React!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [   React.createElement("h1",{},"Hello React!!"),
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")] ));
// const root2 = ReactDOM.createRoot(document.createElement("div"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);