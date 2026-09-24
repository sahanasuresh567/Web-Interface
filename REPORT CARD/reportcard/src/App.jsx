import { useContext, useState } from "react";
import { DataContext } from "./DataContext";
import AdminDashboard from "./AdminDashboard";
import ReportCard from "./ReportCard";
import "./App.css";

function App() {

    const { selectedStudent } = useContext(DataContext);

    const [page, setPage] = useState("dashboard");

    return (
        <div className="app">

            <header className="header">

                <div>
                    <h1>Report Card Management</h1>
                    <p>Student Academic Administration System</p>
                </div>

                <div className="admin">
                    👨‍💼 Admin
                </div>

            </header>

            <nav className="navbar">

                <button
                    className={page === "dashboard" ? "active" : ""}
                    onClick={() => setPage("dashboard")}
                >
                    Dashboard
                </button>

                <button
                    className={page === "report" ? "active" : ""}
                    onClick={() => setPage("report")}
                    disabled={!selectedStudent}
                >
                    Report Card
                </button>

            </nav>

            <main>

                {page === "dashboard" && (
                    <AdminDashboard setPage={setPage} />
                )}

                {page === "report" && selectedStudent && (
                    <ReportCard />
                )}

            </main>

        </div>
    );
}

export default App;