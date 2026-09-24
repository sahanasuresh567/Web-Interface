import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function ReportCard() {

    const {
        selectedStudent,
        updateStudent
    } = useContext(DataContext);

    const [editMode, setEditMode] = useState(false);

    const [semesters, setSemesters] = useState(
        selectedStudent.semesters
    );

    const getGrade = (marks) => {

        if (marks >= 90) return "A+";
        if (marks >= 80) return "A";
        if (marks >= 70) return "B";
        if (marks >= 60) return "C";
        if (marks >= 50) return "D";
        if (marks >= 40) return "E";

        return "F";
    };

    const getSGPA = (subjects) => {

        let totalCredits = 0;
        let totalPoints = 0;

        subjects.forEach((subject) => {

            let gradePoint = 0;

            if (subject.marks >= 90) gradePoint = 10;
            else if (subject.marks >= 80) gradePoint = 9;
            else if (subject.marks >= 70) gradePoint = 8;
            else if (subject.marks >= 60) gradePoint = 7;
            else if (subject.marks >= 50) gradePoint = 6;
            else if (subject.marks >= 40) gradePoint = 5;

            totalPoints += gradePoint * subject.credits;
            totalCredits += subject.credits;
        });

        return (totalPoints / totalCredits).toFixed(2);
    };

    const getCGPA = () => {

        let total = 0;

        semesters.forEach((semester) => {
            total += Number(getSGPA(semester.subjects));
        });

        return (total / semesters.length).toFixed(2);
    };

    const handleMarksChange = (
        semesterIndex,
        subjectIndex,
        value
    ) => {

        const updated = [...semesters];

        updated[semesterIndex].subjects[subjectIndex].marks =
            Number(value);

        setSemesters(updated);
    };

    const saveChanges = () => {

        updateStudent({
            ...selectedStudent,
            semesters: semesters
        });

        setEditMode(false);
    };

    return (

        <div className="report-page">

            <div className="report-actions">

                <button
                    className="edit-btn"
                    onClick={() => setEditMode(!editMode)}
                >
                    {editMode ? "Cancel" : "✏ Edit Marks"}
                </button>

                {editMode && (
                    <button
                        className="save-btn"
                        onClick={saveChanges}
                    >
                        Save Changes
                    </button>
                )}

                <button
                    className="print-btn"
                    onClick={() => window.print()}
                >
                    🖨 Print
                </button>

            </div>


            <div className="report-card">

                <div className="decorative-border">

                    <div className="report-heading">

                        <div className="book-icon">
                            🎓
                        </div>

                        <div>
                            <h1>ACADEMIC REPORT</h1>
                            <h3>COLLEGE OF ENGINEERING</h3>
                        </div>

                    </div>


                    <div className="student-info college-info">

                        <div>

                            <p>
                                NAME:
                                <span>
                                    {selectedStudent.name}
                                </span>
                            </p>

                            <p>
                                REGISTER NO:
                                <span>
                                    {selectedStudent.regNo}
                                </span>
                            </p>

                            <p>
                                DEGREE:
                                <span>
                                    {selectedStudent.degree}
                                </span>
                            </p>

                        </div>


                        <div>

                            <p>
                                DEPARTMENT:
                                <span>
                                    {selectedStudent.department}
                                </span>
                            </p>

                            <p>
                                BATCH:
                                <span>
                                    {selectedStudent.batch}
                                </span>
                            </p>

                        </div>

                    </div>


                    <div className="grading">

                        <h2>GRADING SYSTEM</h2>

                        <div className="grades">

                            <span>A+ 90-100</span>
                            <span>A 80-89</span>
                            <span>B 70-79</span>
                            <span>C 60-69</span>
                            <span>D 50-59</span>
                            <span>E 40-49</span>

                        </div>

                    </div>


                    <section className="report-section">

                        <div className="section-title">
                            SEMESTER PERFORMANCE
                        </div>


                        {semesters.map(
                            (semester, semesterIndex) => (

                                <div
                                    className="semester-block"
                                    key={semester.semester}
                                >

                                    <div className="semester-heading">

                                        <strong>
                                            SEMESTER{" "}
                                            {semester.semester}
                                        </strong>

                                        <span>
                                            SGPA:{" "}
                                            {getSGPA(
                                                semester.subjects
                                            )}
                                        </span>

                                    </div>


                                    <div className="subject-header">

                                        <span>SUBJECT</span>
                                        <span>MARKS</span>
                                        <span>GRADE</span>
                                        <span>CREDITS</span>

                                    </div>


                                    {semester.subjects.map(
                                        (subject, subjectIndex) => (

                                            <div
                                                className="subject-row college-subject"
                                                key={subject.name}
                                            >

                                                <span>
                                                    {subject.name}
                                                </span>


                                                <div className="marks-area">

                                                    {editMode ? (

                                                        <input
                                                            type="number"
                                                            min="0"
                                                            max="100"
                                                            value={
                                                                subject.marks
                                                            }
                                                            onChange={(e) =>
                                                                handleMarksChange(
                                                                    semesterIndex,
                                                                    subjectIndex,
                                                                    e.target.value
                                                                )
                                                            }
                                                        />

                                                    ) : (

                                                        subject.marks

                                                    )}

                                                </div>


                                                <span>
                                                    {getGrade(
                                                        subject.marks
                                                    )}
                                                </span>


                                                <span>
                                                    {subject.credits}
                                                </span>

                                            </div>

                                        )
                                    )}

                                </div>

                            )
                        )}

                    </section>


                    <div className="result-summary">

                        <div>

                            <small>
                                SEMESTERS
                            </small>

                            <strong>
                                8
                            </strong>

                        </div>


                        <div>

                            <small>
                                CGPA
                            </small>

                            <strong>
                                {getCGPA()}
                            </strong>

                        </div>


                        <div>

                            <small>
                                STATUS
                            </small>

                            <strong>
                                {getCGPA() >= 5
                                    ? "PASS"
                                    : "FAIL"}
                            </strong>

                        </div>

                    </div>


                    <div className="signature">

                        <div>
                            __________________
                            <br />
                            Class Advisor
                        </div>

                        <div>
                            __________________
                            <br />
                            Head of Department
                        </div>

                        <div>
                            __________________
                            <br />
                            Principal
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ReportCard;