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

  - A Normal JS function which is given by REACT which are prebuilt all ready Retun in react 

  - Normal JS utility function

  - There are 2  mian hooks - 99% we  use these 2 hooks for lots of time

     - useState()
     - useEffect()

- useState ()--> Super power state variable in react
- we have to import the useState in React as Named Import . 
    - import {useState} from react.
- Creating State Variable
    Local State Variable 

- const [listOfREsturants] = useState([]) --> creating a state vairable 
                                       |
                                       default value -->  which is like passing parameters to the functions 
- let listOfREsturants;--> creating normal variable .

- const [listOfREsturants] = useState([......]) --> when we want to modify this array we want to give a second variable 

- const [listOfREsturants,setListofResturants] = useState([......])

- resobj.resturants
    |
lets store all this in the  "listOfREsturants"

- when ever the state varible changes react will re render the component ******IMP



- **RECONCILIATION ALGORITHAM**

# React Fiber
- we are having 15 Res cards ---> we are filtered into 3 restro cards

##  Virtual DOM

- Virtual DOM is a representation of actual DOM 

- what is Actula DOM?

 - <div>
     <h1>Hi</h1>
    </div>


## Diff Algorithm

- 7 restro cards ---> After button clicked  ---> new filtered data of 3 restro cards 
-           |                                         |
-          old                                      new 
- react will find the main diff usng diff alg and sort then it updates the DOM so react is fast and which is virtual dom it uses and updates the UI .

## Diff Alg

- A diffing algorithm is a computational method used to identify the differences between two versions of a data structure, often represented as trees. In the context of front-end frameworks like React, the diffing algorithm plays a crucial role in optimizing UI updates.
How it Works (in React's Virtual DOM):
Virtual DOM Comparison:
When a component's state or props change, React creates a new Virtual DOM tree representing the updated UI. The diffing algorithm then compares this new Virtual DOM tree with the previous one.




**Monolith Arch**
- when web was developed traditionally the dev used monolith arch 
- Backend Service 
- UI service
- Authethication Service
- Data Base Service
- SMS sending Service
- Email Notification Service 
## BE and FE dev work on same project
## every one in monolith arch used to work on single project .

**MicroServices Arch ***
- Backend Service 
- UI service
- Authethication Service
- Data Base Service
- SMS sending Service
- Email Notification Service 
## All the service combine toghters forms a big application everthing has individual projects according to their role

## THis is Known as speration of concerns Follows the Single responsibilty Prnciple where each and every service as their own job 

## Lets Us see how these two services work each other 

- BE <--> UI , etcc.. how to deploya and acess

- react project now i am making in  UI microservice
- we can write Microservices  in differenct languages - like UI in react , BE with JAVA, SMS in golang etc..
- how these services are connected

- just like our UI service as connected to the port 1234
- similar to this other services will work on differnt ports :1000 - > BE,
- SMS:-> :3000 port 
- calling when requires as /sms or /api or using port 

## https://app.eraser.io/workspace/P05V898kZiUGaNKiE5e9



**useEffect**

- is a simple function which takes two aruguments passed in useEffect 
- Arrow Function  / call bank fun  as 1st arugument
- dependency arry as 2nd argument

- useEffect(()=>{},[])

- useEffect is called after the 1st render the code inside the use effect is called 












