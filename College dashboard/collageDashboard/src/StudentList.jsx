import "./StudentList.css";

function SubjectList(props) {
  return (
    <div className="subjects">
      <ul>
        {props.subjects.map((sub) => (
          <li>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;