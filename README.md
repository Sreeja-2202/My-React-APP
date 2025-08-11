# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement



- File Watching Algoritham ("written in c++")
- Caching - Faster Builds
- image Optimization 
- Minification 
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling  - to support older Browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree shaking -- remove unused code 😍
- Minification 
- content hashing
- Production bundles 

 

- when we write the code in jsx the parcel is transpiled the code we wrote in jsx foremat before it reaches the js engine 

- transpiled by -PARCEL - Babel -is a package where used to transpile the jsx code before going into js engine .

- Bable converts the jsx code into browser understandle langiage (react code )
-  JSX => react.creactElement => js OBECTS =>  RENDER AS HTML ELEMENT in DOM document 

- Babel is transpiling JSX into react .createElement from here it renders the obj into htmlelement in doc

- attributes in jsx should be in camel case 

- the react functional component which is similar to js fucntion which returns a jsx .

- the fucntion which return a react element is functional component or a fun which retun jsx is a         functional component 

- Component Composition => calling other componnent in another component or we can say rendering a component  in another component .

- jsx will take care of malious data which is fetching from an api it will sanitize and prevents crosside scripting .


- jsx is javascript xml 

-- WHAT IS PROPS?
it is a arugument to the function when want to make dynamic we use props and we pass data through it 
and it is an object .
- config driven UI
- all the UI is driven by config

- config which means data --interview quetsion dyamic use example how swiggy  constuted the data .


- https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4065284&lng=78.5139136&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


- we should not never never we should not index as a key to specific itms as unique in a react it is bad practice .


-   {resObj.restaurants.map((restaurant,index))}  -->  X 

    -return(
        <div>
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.restaurants.map((restaurant) => (

    <ResturantCard key={restaurant.info.id} resData={restaurant} />
))})

this is good way to give  good practice


- sperate file for sperate component


- 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Component
 *  - ResturantCardContainer
 *    -- ResturantCard
 *       - Img
 *       -- Name of Res,Star Rating ,Cuisine,delivery time,LOcation 
 * 
 * Footer
 *  - CopyRights
 *  - Links
 *  - Address
 *  - Contact


- we having to different types exports 

   - default export 

- To export mutliple components from single file we have to export with named exports

    - named export import {component} 

- REACT is faster 
   - yes it can do DOM Manuplications very faster 
   - Reconsiliaction
   - Parllelly to  work UI and Data we use the SuperPower in React is which Are Hooks in react 
   - State Varible in react which is super power variable.
   - Hooks in react
     - UseState

- Lets see what is Hooks in REACT

  - A Normal JS fintion which is given by REACT which are prebuilt all ready Retun in react 

  - Normal JS utility function

  - There are 2  mian hooks - 99% we  use these 2 hooks for lots of time

     - useState()
     - useEffect()

- useState ()--> Super power state variable in react
- we have to import the useState in React as Named Import . 
    - import {useState} from react.
- Creating State Variable
    Local State Variable 



