
const Header = (props) => {
  return(
      <div>
          <h1>{props.course}</h1>
      </div>
  )
}
const Part = (props) => {
    return(
        <div>
           {props.part}&nbsp;{props.exercise}
        </div>
    )
}
const Content = (props) => {
    return (
      <div>
        <Part part={props.part1} exercise={props.exercise1} />
        <Part part={props.part2} exercise={props.exercise2} />
        <Part part={props.part3} exercise={props.exercise3} />
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
    const part1 = 'Fundamentals of React';
    const exercise1 = 10;
    const part2 = 'Using props to pass data';
    const exercise2 = 7;
    const part3 = 'State of a component';
    const exercise3 = 14;
    const course = 'Half Stack application development';
    const total = exercise1 + exercise2 + exercise3;
    return(
        <div>
            <Header course={course} />
            <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
            <Total  totalExcercises = {total} />
        </div>
    )
}
export default App;
