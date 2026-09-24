import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function AdminDashboard({ setPage }) {

    const {
        students,
        setSelectedStudent
    } = useContext(DataContext);

    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    const openReport = (student) => {
        setSelectedStudent(student);
        setPage("report");
    };

    return (

        <div className="dashboard">

            <div className="dashboard-title">

                <div>
                    <h2>Admin Dashboard</h2>
                    <p>Search and manage student report cards</p>
                </div>

                <div className="student-count">
                    <strong>{students.length}</strong>
                    <span>Total Students</span>
                </div>

            </div>


            <div className="search-box">

                <span>🔍</span>

                <input
                    type="text"
                    placeholder="Search student name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>


            <div className="student-table">

                <div className="table-header">
                    <span>Name</span>
                    <span>Class</span>
                    <span>Grade</span>
                    <span>Action</span>
                </div>

                {filteredStudents.length > 0 ? (

                    filteredStudents.map((student) => (

                        <div className="student-row" key={student.id}>

                            <span className="student-name">
                                👤 {student.name}
                            </span>

                            <span>
                                {student.className}
                            </span>

                            <span>
                                Grade {student.grade}
                            </span>

                            <button
                                onClick={() => openReport(student)}
                            >
                                View Report
                            </button>

                        </div>

                    ))

                ) : (

                    <div className="no-result">
                        No student found
                    </div>

                )}

            </div>

        </div>
    );
}

export default AdminDashboard;