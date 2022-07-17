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
<<<<<<< HEAD
      {props.name} &nbsp; {props.exercises}
=======
      {props.part}
>>>>>>> 15fc8ec238428008d407d0b8d18620b5e4e70639
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
<<<<<<< HEAD
      <Part name={props.part1} exercises={props.exercise1} />
      <Part name={props.part2} exercises={props.exercise2} />
      <Part name={props.part3} exercises={props.exercise3} />
=======
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
>>>>>>> 15fc8ec238428008d407d0b8d18620b5e4e70639
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
