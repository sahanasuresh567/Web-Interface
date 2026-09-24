import { useState } from "react";
import "./project2.css";

function AttendanceTracker() {

    const [students, setStudents] = useState([
        { id: 1, name: "Sahana", present: true },
        { id: 2, name: "Sharani", present: false },
        { id: 3, name: "Shivani", present: true },
        { id: 4, name: "Priya", present: true },
        { id: 5, name: "Divya", present: false },
        { id: 6, name: "Harini", present: true },
        { id: 7, name: "Kaviya", present: false },
        { id: 8, name: "Keerthana", present: true },
        { id: 9, name: "Anitha", present: true },
        { id: 10, name: "Swetha", present: false },
        { id: 11, name: "Nandhini", present: true },
        { id: 12, name: "Deepika", present: false },
        { id: 13, name: "Monisha", present: true },
        { id: 14, name: "Aishwarya", present: true },
        { id: 15, name: "Pavithra", present: false },
        { id: 16, name: "Roshini", present: true },
        { id: 17, name: "Janani", present: false },
        { id: 18, name: "Sneha", present: true },
        { id: 19, name: "Abinaya", present: true },
        { id: 20, name: "Lavanya", present: false }
    ]);

    function changeAttendance(id) {
        setStudents(
            students.map(student =>
                student.id === id
                    ? { ...student, present: !student.present }
                    : student
            )
        );
    }

    const totalPresent = students.filter(student => student.present).length;
    const totalAbsent = students.filter(student => !student.present).length;

    return (
        <div className="container">

            <h2>Attendance Tracker</h2>

            {students.map(student => (
                <div className="student" key={student.id}>

                    <span>
                        {student.id}. {student.name}
                    </span>

                    <span>
                        {student.present ? "Present" : "Absent"}
                    </span>

                    <button onClick={() => changeAttendance(student.id)}>
                        {student.present ? "Mark Absent" : "Mark Present"}
                    </button>

                </div>
            ))}

            <div className="summary">
                <h3>Attendance Summary</h3>
                <p>Total Present: {totalPresent}</p>
                <p>Total Absent: {totalAbsent}</p>
            </div>

        </div>
    );
}

export default AttendanceTracker;