import React from "react";
import ReactDOM from "react-dom/client"

//  React Element 
const heading = (
    <h1 className="head" tabIndex="5">
        Hello React 😀</h1>
)


// React Component 
// Class Based Components  -- old 
// Functional Based Componenets -- new 
//  React Functional Componet are just js function 
// when creating a component we have to start with capital letter 
//  we can write js in jsx {} inside the curly brases considered as js
const fn =()=>true; //-->in js for single line code 

const number = 10000
 const elem = <span>React Element</span>

const Title =()=>(
    
    <h1>I am Title Componenets i am called inside the HeadingComponent😀</h1>
);
const HeadingComponent = () =>{

    return 
    <h1> Hello React Functional Component</h1>;

}

const HeadingComponent2= () => (
    <div id="Container">
          <Title></Title> 
          <Title/> 
          {Title()} 
          {/* above both are similar we can use any sytax to render the component  */}
         <h1 className="Heading"> Hello React Functional Component</h1>

    </div>

);






const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent2/>)
// always render the Components in between <component name/>