//1 ---------------------------------------------

function combine(a, b, c) {
    return a * b /c
}


//2 --------------------------------------------------

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const transformed = numberArray.map( (item) => ( {val: item} )  )
    return transformed
}


//3 ----------------------------------------------------

import React from 'react';

// DEFINE YOUR COMPONENT HERE
export function MainGoal(){
    return <p>My main goal: Learn React in-depth and from the ground up.
    </p>;
}


// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
      <MainGoal/>
    </div>
  );
}

export default App;


//4 ------------------------------------------------------

import React from 'react';

export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName + " " + userData.lastName} // 여기
      </h2>
      <p>{userData.title}</p> // 그리고 여기가 내가 수정한 부분.
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;

//5 -------------------------------------------------------
// course goal 만들기
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}

        <CourseGoal
        title="Learn React"
        description="In-depth"/>
        <CourseGoal
        title="Practice"
        description="Practice working with React, components etc"/>
		
      </ul>
    </div>
  );
}

export default App;



//6 ----------------------------------------------
// Card.js file에,


export default function Card(props) {
  return (
      
    <div class="card">
      <h2>{props.name}</h2>
      {props.children}
    </div>
  );
}

{/*By looking at the css file, 
i figured out that the class should be "card",
and the name should be h2. 
props.children was used to represent 
the contents in the custom component <Card> */}


//7 ------------------------------------------------------------


// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
function App() {
    ////////////
    function handleClick(){
        user.email = 'aaa@aaaa.com'
        user.password = '1q2w3e4r!'
        user.loggedIn = true
    }
    ////////////
    
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
	  ////////////////////////
        <button onClick={handleClick}>Login</button>
		////////////////////////
      </p>
    </div>
  );
}

export default App;

//8 ----------------------------------------

export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
	  ////////////////////////////
        <button onClick={() => handleCreateUser("abc")}>Create User</button>
	///////////////////////////
      </p>
    </div>
  );
}

export default App;


//9 -------------------------------------------------

// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
import React from 'react';


export default function App() {
    const [price, setPrice] = React.useState("$100"); //default=100
    
     function handleClick(){
        //console.log('$75');
        setPrice('$75')
    }
    
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}

//10 -------------------------------------------------------
import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"


export default function App() {

const [state, setState] = React.useState() // state initially undefined

function handleClick(selectedButton){
    if(selectedButton=="delete" ){
        setState(1) 
    }else if(selectedButton=="proceed"){
        setState(undefined)
    }   
}

    return (
      <div>
        // display warning only when state is not undefined
		{state ? (<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => handleClick("proceed")} >Proceed</button>
        </div>
        ) : null}
		
        <button onClick={() => handleClick("delete")}>Delete</button>
      </div>    
    );
}


//11 ------------------------------------------------------
import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [state, setState] = React.useState(false) 
    
    function handleClick(){
        setState(true)
    }
    
    return (
        <div>
            <p className={state ? "active" : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}


//12 ------------------------------------

// App.js

import React from 'react';

import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
return(

<ul>
{DUMMY_TODOS.map((item)=>(<Todo>{item}</Todo>)  
)}

</ul>


  )
}

// Todo.js

import React from 'react';

export default function Todo(props) {
  return (
    <li>

      {props.children}

    </li>
  );
}

