
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
          <p><strong> Exercise Title:</strong>{props.exerciseTitle1}</p>
          <p><strong> Exercise Number:</strong>{props.exerciseNum1}</p>
          <p><strong> Exercise Title:</strong>{props.exerciseTitle2}</p>
          <p><strong> Exercise Number:</strong>{props.exerciseNum2}</p>
          <p><strong> Exercise Title:</strong>{props.exerciseTitle3}</p>
          <p><strong> Exercise Number:</strong>{props.exerciseNum3}</p>
      </div>
  )
}
const Total = (props) => {
  return(
      <div>
          <p><strong> Total:</strong> {props.total}</p>
      </div>
  )
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;
    const total = exercises1 + exercises2 + exercises3;
    return(
        <div>
            <Header course={course}/>
            <Content exerciseTitle1={part1} exerciseNum1={exercises1} exerciseTitle2={part2} exerciseNum2={exercises2} exerciseTitle3={part3} exerciseNum3={exercises3}/>
            <Total  total = {total} />
        </div>
    )
}
export default App;
