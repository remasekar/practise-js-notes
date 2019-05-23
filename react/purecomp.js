
// 1) created by extending PureComponent class
// 2)implements shouldComponentUpdate lifecycle hook by shallow comparison ( complex type should refer to same object) on the props and state of the component 
// 3)if there is no difference component is not re rendered 
// 4) children component should also be kept pure component to avoid conflicts
// 5) never mutate the state, always return a new object that reflects the new state
// basically prevents re render if there is no difference btwn prev props and current props , prev state and current state

//https://www.youtube.com/watch?v=YCRuTT31qR0
//performance boost with avoiding re-rendering