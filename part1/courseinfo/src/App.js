const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      {props.name} &nbsp; {props.exercises}
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercise1} />
      <Part name={props.part2} exercises={props.exercise2} />
      <Part name={props.part3} exercises={props.exercise3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        <strong>Number of exercises:</strong> {props.totalExcercises}
      </p>
    </div>
  );
};



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
    total: 31
  }

  return (
    <div>
    <Header course={course.name} />
    <Content
      part1={course.parts[0].name}
      exercise1={course.parts[0].exercises}
      part2={course.parts[1].name}
      exercise2={course.parts[1].exercises}
      part3={course.parts[2].name}
      exercise3={course.parts[2].exercises}
    />
    <Total totalExcercises={course.total} />
  </div>
  )
}


export default App;
