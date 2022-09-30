import React from "react";
import HookRef from "./UseRef";

const Main = () => {
  return (
    <div>
      <h1>Question 1. What is UseRef Hook?(implementation)</h1>
      <h4>
        The useRef Hook allows you to persist values between renders.It can be
        used to store a mutable value that does not cause a re-render when
        updated.It can be used to access a DOM element directly.
      </h4>
      <HookRef />
      <h1>Question 2. What is context api?</h1>
      <h4>
        The Context API is a React structure that enables you to exchange unique
        details and assists in solving prop-drilling from all levels of your
        application. (or) Context provides a way to pass data through the
        component tree without having to pass props down manually at every
        level.
      </h4>
      <h1>Question 3. Difference between callback and useCallback Hook ?</h1>
      <h2>UseCallback</h2>
      <h4>
        The useCallback hook is used when you have a component in which the
        child is rerendering again and again without need. Pass an inline
        callback and an array of dependencies. useCallback will return a
        memoized version of the callback that only changes if one of the
        dependencies has changed.
      </h4>
      <h2>callback</h2>
      <h4>
        {" "}
        A callback is a function passed as an argument to another function. This
        technique allows a function to call another function. A callback
        function can run after another function has finished.
      </h4>
      <h1>
        Question 4. What is Props Drilling Concept ?What is State Uplifting ?
      </h1>
      <h2>Prop Drilling</h2>
      <h4>
        Prop drilling is the process in a React app where props are passed from
        one part of a tree to another by going through other parts that do not
        need the data, but only help in passing it through the tree.
      </h4>
      <h2>State Uplifting</h2>
      <h4>
        In React, sharing state is accomplished by moving it up to the closest
        common ancestor of the components that need it. This is called “lifting
        state up”. We will remove the local state from the TemperatureInput and
        move it into the Calculator instead.
      </h4>
      <h1>Question 5. Difference between useEffect and useContext ?</h1>
      <h2>UseEffect</h2>
      <h4>
        The React hook useEffect helps in adding componentDidUpdate and
        componentDidMount combined lifecycle in React’s functional component.{" "}
      </h4>
      <h2>useContext</h2>
      <h4>
        Context API uses Context. Provider and Context. Consumer Components pass
        down the data but it is very cumbersome to write the long functional
        code to use this Context API. So useContext hook helps to make the code
        more readable, less verbose and removes the need to introduce Consumer
        Component. The useContext hook is the new addition in React 16.8.{" "}
      </h4>
      <h1>
        Question 6.What are React Life cycles. Explain each one with Example
      </h1>
      <h2>Initialization</h2>
      <h4>
        In this phase the developer has to define the props and initial state
        ofthe component this is generally done in the constructor of the
        component. The following code snippet describes the initialization
        process.
      </h4>
      <h2>Mounting</h2>
      <h4>
        Mounting is the phase of the component lifecycle when the initialization
        of the component is completed and the component is mounted on the DOM
        and rendered for the first time in the webpage. Now React follows a
        default procedure in the Naming Conventions of this predefined functions
        where the functions containing “Will” represents before some specific
        phase and “Did” represents after the completion of that phase.
      </h4>
      <ul>
        <li>
          <strong>componentWillMount() Function :</strong> As the name clearly
          suggests, this function is invoked right before the component is
          mounted on the DOM i.e. this function gets invoked once before the
          render() function is executed for the first time.
        </li>
        <li>
          <strong>componentDidMount() Function :</strong>Similarly as the
          previous one this function is invoked right after the component is
          mounted on the DOM i.e. this function gets invoked once after the
          render() function is executed for the first time.
        </li>
      </ul>
      <h3>Updation</h3>
      <h4>
        Updation is the phase where the states and props of a component are
        updated followed by some user events such as clicking, pressing a key on
        keyboard etc.
      </h4>
      <ul>
        <li>
          <strong>componentWillRecieveProps() Function: </strong> This is a
          Props exclusive Function and is independent of States. This function
          is invoked before a mounted component gets its props reassigned. The
          function is passed the new set of Props which may or may not be
          identical to the original Props. Thus checking is a mandatory step in
          this regards.
        </li>
        <li>
          <strong>componentWillUpdate() Function: </strong> As the name clearly
          suggests, this function is invoked before the component is rerendered
          i.e. this function gets invoked once before the render() function is
          executed after the updation of State or Props.
        </li>
        <li>
          <strong>componentDidUpdate() Function: </strong>Similarly this
          function is invoked after the component is rerendered i.e. this
          function gets invoked once after the render() function is executed
          after the updation of State or Props.
        </li>
      </ul>
      <h3>Unmounting</h3>
      <h4>
        This is the final phase of the lifeycle of the component that is the
        phase of unmounting the component from the DOM. The following function
        is the sole member of this phase.
      </h4>
      <ul>
        <li>
          <strong>componentWillUnmount() Function</strong>This function is
          invoked before the component is finally unmounted from the DOM i.e.
          this function gets invoked once before the component is removed from
          the page and this denotes the end of the lifecycle.
        </li>
      </ul>
    </div>
  );
};

export default Main;
