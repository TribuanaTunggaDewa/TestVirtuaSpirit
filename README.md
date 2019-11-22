# TestVirtualSpirit
Test React Native Developer [Junior]

## Question:
### 1. Why did you choose React-Native?

### Answer: I chose react native for some reason as follows:
    1. Large and powerful community, I chose react 
    native as the mobile hybrid development Framework, 
    because it has a large andstrong community that looks
    from how many communities contribute to the react native ecosystem Own.

    2. The programming language base, the programming language 
    base used by react native itself is JavaScript
    which is one of the most popular languages. 
    With fairly popular languages and a large community 
    and a very rich ecosystem will certainly benefit us 
    from solving a problem with the react native framework. 

    3. Proved, many popular technology companies are using 
    react native for their app development which can be 
    viewed at https://facebook.github.io/react-native/showcase.

    
### 2. From 1 - 10 how's your confident about your react-native development?
### Answer
    If the scale above illustrates the junior scale where the value of
    10 there is a gate for middle and intermediate then I was in number 
    6 but if the scale above describes the scale for experts like those 
    who contribute to the react native ecosystem
    then My number is between 3 and 4.

### 3. How many lifecycles did you know in react-native? please explain!
### Answer
#### Fase
##### Mounting
###### constructor()
    This method is invoked before the other method,
    it is where we setup an initialization of the values
    for the state or the other values
    The constructor() method is called with the props, as arguments,
    and you should always start by calling the super(props) before
    anything else, this will initiate the parent's constructor method
    and allows the component to inherit methods from its parent (React.Component).

###### getDerivedStateFromProps()
    This method is executed just before the Render method.
    This method is the right place to change the state object based on the initials props.
    This method naturally changes the state object based on its initials props.
    This takes the state and props as an argument to return an object that changes the state

###### render()
    The render() method is required, and is the method that actual return jsx wich will show on your device.

###### componentDidMount()
    The componentDidMount() method is called after the component is rendered.
    This is where you run statements that requires that the component is already placed in the screen.


##### Update
###### getDerivedStateFromProps()
###### shouldComponentUpdate()
    In the shouldComponentUpdate() method you can return a Boolean
    value that specifies whether React should continue with the rendering or not.

###### render

###### getSnapshotBeforeUpdate()
    In the getSnapshotBeforeUpdate() method you have access to 
    the props and state before the update, meaning that even after
    the update, you can check what the values were before the update.
    If the getSnapshotBeforeUpdate() method is present, you should
    also include the componentDidUpdate() method, otherwise you will
    get an error.

###### componentDidUpdate()
    The componentDidUpdate method is called after the screen is
    updated.


##### Unmounting
###### componentWillUnmount()
    The componentWillUnmount method is called when the component is
    about to be removed from the screen.


### 4. What is different between Component compare to PureComponent And ScrollView compare to Flatlist?
### Answer
#### Component vs PureComponent
    As far as I understand the difference from Component and 
    PureComponent is in Lifecycle shouldComponentUpdate () where
    the lifecycle Component we should declare and we fill in 
    the logic to return a Boolean that determines whether 
    Rendering should be run back or not.
    While the purecomponent doesn't have that lifecycle, it by default
    compare the current and previous state and props values before rerendering them on a screen.

#### ScrollView vs Flatlist
    As far as I understand the difference in ScrollView and 
    flatlist is how they load data where the ScrollView will 
    load data after all items in the data have been finished
    in the loading so it will overwhelm the ram and will slow 
    down the performance, while the Flatlist By default it will 
    restrict only 10 items to be displayed to the screen and
    the other items will be displayed when the user scrolling.


### 5. Do you know what is a functional component and class component? please explain!
### Answer
    Yes I know, functional component is a component made with 
    functional programming which is also referred to as stateless
    component because before any hook on react functional component 
    has no State and also lifecycle so it can only Accept props from
    the parent component and process them while the component class 
    is a component created with the programming class, also known as
    statefull component that has state and lifecycle inside.

### 6. Do you know redux? please explain!
### Answer
    Yes I know, Redux is a state management that helps us to set the
    state globally, Redux has a kind of individual folder structure that is generally divided into actions,
    reducer, and store.
    Store is where we store the state globally, the action is a Tigger
    for us to change the state at Redux and the reducer is where we
    initialize the Gobal state and change it to a new value. But redux 
    itself has a weakness that he cannot handle a process that is
    asyncrhonus. Redux itself has several middleware to take care of
    asyncrhonus processes among which I know are redux promises, redux
    Thunk, and Redux saga. I usually use a promise and ever use thunk, 
    but for the saga I'm still learning about the function of generators on ES6.
### 7. Is there any framework/library/package that you usually used in your project? please list!
### 8. Do you know "Ignite boilerplate"? did you use that?


## Bonus:
### 1. what is different between “if (variable == 1)” and “if(variable === 1)” ?
### Answer
    The difference is that the data type `==` Compares 2 values
    without worrying about the data type, whereas `===` Compares 2
    values with the data type.
### 2. what is different between common function  and arrow function?
  a. common function:
  ```javascript
  functionName() {
    // write some code here
  }
  ```

  b. arrow function:
  ```javascript
  functionName = () => {
    // write some code here
  }
  ```
### 3. what is different between:
  ```javascript
  a. let array = oldArray
  b. let array = […oldArray]
  ```
### 4. create a function that simulates API request using your own approach! 
