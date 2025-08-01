    import React from "react";
    import ReactDOM from "react-dom/client"
// //     <div id="parent">
// //     <div id ="child">
// //         <h1>

// // const { jsx } = require("react/jsx-runtime");

// //         </h1>

// //     </div>
// // </div>
    
    
//     const parent = React.createElement(
//         "div",{id:"parent"},[
//             React.createElement("div",{id:"child1"},[
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("p",{},"I am h1 tag"),
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("p",{},"I am h1 tag")
//         ]),
//             React.createElement("div",{id:"child2"},[
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("p",{},"I am h1 tag"),
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("p",{},"I am h1 tag")
//         ])

        
//    ] )
    
    // React .createElement =>JS object => htmlelement(render)
    
    const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");

    const para = React.createElement("p", {}, "I am a Java Script Library");

    const container = React.createElement("div",{},heading,para)
console.log(heading)
 
//  JSX => react.creactElement 

const jsxheading =( <h1 className="head">
    This is JSX😂 JSX is html like syntax
     </h1>)

console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxheading)



