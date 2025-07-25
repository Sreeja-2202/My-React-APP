    
//     <div id="parent">
//     <div id ="child">
//         <h1>

// const { jsx } = require("react/jsx-runtime");

//         </h1>

//     </div>
// </div>
    
    
    const parent = React.createElement(
        "div",{id:"parent"},[
            React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("p",{},"I am h1 tag"),
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("p",{},"I am h1 tag")
        ]),
            React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("p",{},"I am h1 tag"),
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("p",{},"I am h1 tag")
        ])

        
   ] )
    
    
    
    const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");

    const para = React.createElement("p", {}, "I am a Java Script Library");

    const container = React.createElement("div",{},heading,para)
    console.log(heading)

    const root = ReactDOM.createRoot(document.getElementById("root")); 

    

    root.render(parent);
  






    


    // jsx to simlify the above code 
    

