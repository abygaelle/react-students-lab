import Score from './Score'

const Student = (props) => {
  return(
    <>
    {props.students.map((student, idx) => 
      <div key={idx}>
        <h1>{student.name}</h1>
        <p>{student.bio}</p>
        <Score scores={student.scores}/>
      </div>
    )};
    </>
  );
}

export default Student;