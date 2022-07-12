
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
          <p><strong> Exercise Title:</strong>{props.exerciseTitle}</p>
          <p><strong> Exercise Number:</strong>{props.exerciseNum}</p>
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
            <Content exerciseTitle={part1} exerciseNum={exercises1}/>
            <Content exerciseTitle={part2} exerciseNum={exercises2}/>
            <Content exerciseTitle={part3} exerciseNum={exercises3}/>
            <Total  total = {total} />
        </div>
    )
}
export default App;
