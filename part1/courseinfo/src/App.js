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
      {props.part}
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0]}
        part2={parts[1]}
        part3={parts[2]}
      />
      <Total totalExcercises={total} />
    </div>
  );
};

export default App;
