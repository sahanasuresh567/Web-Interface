import "./StudentCard.css";
import studentImg from "./assets/photo.jpg";
function StudentCard(props) {
  return (
    <div className="card">

      <img src={studentImg} alt="Student" className="photo" />

      <h2 style={{ color: "darkblue" }}>
        {props.name}
      </h2>

      <p><b>Register No :</b> {props.regno}</p>

      <p><b>Department :</b> {props.dept}</p>

      <p><b>Year :</b> {props.year}</p>
  

      <p style={{ color: "green", fontWeight: "bold" }}>
        CGPA : {props.cgpa}
      </p>

      <p style={{ color: "red", fontWeight: "bold" }}>
        Attendance : {props.attendance}%
      </p>

    </div>
  );
}

export default StudentCard;