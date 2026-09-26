import "./App.css";
import Header from "./Header";
import StudentCard from "./StudentCard";
import StudentList from "./StudentList";
import Footer from "./Footer";
import studentImg from "./assets/photo.JPG";

function App() {
  const subjects = [
    "Python",
    "Java",
    "Operating System",
    "Web Technology",
    "DBMS",
    "Computer Networks"
  ];

  const attendance = 90;

  return (
    <div>

      <Header />

      {/* Student Card Section */}
      <div className="info">
        <h2 style = {{color:"#003366"}}>Student Bio Card</h2>

        <StudentCard
          name="Sahana S"
          regno="411625149037"
          dept="CSE (Cyber Security)"
          year=" II "
          cgpa="8.9"
          attendance={attendance}
          photo={studentImg}
        />
      </div>

      {/* Academic Information Section */}
      <div className="info">
        <h2 style = {{color:"#003366"}}>Academic Information</h2>

        <h3>Current Year : II</h3>
        <h3>Current Semester : III</h3>
        <h3>Total Subjects : {subjects.length}</h3>
        <h3>Attendance Status : {attendance}%</h3>
        <h3>
          Placement Status :
          {attendance >= 80 ? " Eligible" : " Need Improvement"}
        </h3>
      </div>

      {/* Subject Section */}
      <div className="info">
        <h2 style = {{color:"#003366"}}>Current Semester Subjects</h2>

        <StudentList subjects={subjects} />
      </div>

      <Footer />
<hr/>

    </div>
  );
}

export default App;
