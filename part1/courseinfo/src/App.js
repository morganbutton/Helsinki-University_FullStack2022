
const Header = (props) => {
  return(
      <div>
          <h1>{props.course}</h1>
      </div>
  )
}
const Content = (props) => {
  return(
      <div>
          <p><strong> Exercise One Title:</strong>{props.part1}</p>
          <p><strong> Exercise One Number:</strong>{props.exercise1}</p>
          <p><strong> Exercise Two Title:</strong>{props.part2}</p>
          <p><strong> Exercise Two Number:</strong>{props.exercise2}</p>
          <p><strong> Exercise Three Title:</strong>{props.part3}</p>
          <p><strong> Exercise Three Number:</strong>{props.exercise3}</p>
      </div>
  )
}
const Total = (props) => {
  return(
      <div>
          <p><strong>Number of exercises:</strong> {props.totalExcercises}</p>
      </div>
  )
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercise1 = 10;
    const part2 = 'Using props to pass data';
    const exercise2 = 7;
    const part3 = 'State of a component';
    const exercise3 = 14;
    const total = exercise1 + exercise2 + exercise3;
    return(
        <div>
            <Header course={course}/>
            <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}/>
            <Total  totalExcercises = {total} />
        </div>
    )
}
export default App;
