/*
*<div id="parent">
    <div id="child">
        <h1>first heading</h1>
    </div>
</div>

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},
    React.createElement("h1", {},"first heading"))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
/*
<div id="parent">
    <div id="child">
        <h1>first heading</h1>
        <h2>second heading</h2>
    </div>
</div>
const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},
    [React.createElement("h1", {},"first heading"),
        React.createElement("h2", {},"second heading")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
/*
*<div id="parent">
    <div id="child">
        <h1>first heading</h1>
        <h2>second heading</h1>
    </div>
    <div id="child2">
        <h1>first heading</h1>
        <h2>second heading</h2>
    </div>
</div>*/
const parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child"},
        [React.createElement("h1", {},"first heading"),
        React.createElement("h2", {},"second heading"),]),
    React.createElement("div", {id:"child2"},
            [React.createElement("h1", {},"first heading"),
                React.createElement("h2", {},"second heading"),]
            )
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
/*      
<h1>first heading</h1>

const heading = React.createElement("h1",{id: "heading"},"hello world !");
const root = dReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/