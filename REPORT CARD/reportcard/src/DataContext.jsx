import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {

    const [students, setStudents] = useState(() => {

        const saved = localStorage.getItem("collegeStudents");

        return saved ? JSON.parse(saved) : [

            {
                id: 1,
                name: "Sahana S",
                regNo: "24CSE001",
                department: "CSE - Cyber Security",
                degree: "B.E",
                batch: "2024 - 2028",

                semesters: [

                    {
                        semester: 1,
                        subjects: [
                            { name: "Engineering Mathematics I", marks: 88, credits: 4 },
                            { name: "Programming in C", marks: 92, credits: 3 },
                            { name: "Engineering Physics", marks: 85, credits: 3 },
                            { name: "Engineering Chemistry", marks: 82, credits: 3 },
                            { name: "English", marks: 90, credits: 2 }
                        ]
                    },

                    {
                        semester: 2,
                        subjects: [
                            { name: "Engineering Mathematics II", marks: 90, credits: 4 },
                            { name: "Object Oriented Programming", marks: 94, credits: 3 },
                            { name: "Data Structures", marks: 91, credits: 3 },
                            { name: "Digital Principles", marks: 86, credits: 3 },
                            { name: "Communication Skills", marks: 89, credits: 2 }
                        ]
                    },

                    {
                        semester: 3,
                        subjects: [
                            { name: "Discrete Mathematics", marks: 92, credits: 4 },
                            { name: "Data Structures", marks: 95, credits: 4 },
                            { name: "Database Management Systems", marks: 88, credits: 3 },
                            { name: "Operating Systems", marks: 91, credits: 3 },
                            { name: "Web Technology", marks: 94, credits: 3 }
                        ]
                    },

                    {
                        semester: 4,
                        subjects: [
                            { name: "Computer Networks", marks: 90, credits: 4 },
                            { name: "Design and Analysis of Algorithms", marks: 87, credits: 4 },
                            { name: "Software Engineering", marks: 93, credits: 3 },
                            { name: "Cyber Security", marks: 96, credits: 3 },
                            { name: "Java Programming", marks: 91, credits: 3 }
                        ]
                    },

                    {
                        semester: 5,
                        subjects: [
                            { name: "Cryptography", marks: 94, credits: 4 },
                            { name: "Network Security", marks: 92, credits: 4 },
                            { name: "Cloud Computing", marks: 88, credits: 3 },
                            { name: "Artificial Intelligence", marks: 90, credits: 3 },
                            { name: "Cyber Forensics", marks: 95, credits: 3 }
                        ]
                    },

                    {
                        semester: 6,
                        subjects: [
                            { name: "Ethical Hacking", marks: 96, credits: 4 },
                            { name: "Machine Learning", marks: 91, credits: 4 },
                            { name: "Digital Forensics", marks: 93, credits: 3 },
                            { name: "Blockchain Technology", marks: 89, credits: 3 },
                            { name: "Security Analytics", marks: 94, credits: 3 }
                        ]
                    },

                    {
                        semester: 7,
                        subjects: [
                            { name: "Advanced Cyber Security", marks: 95, credits: 4 },
                            { name: "Penetration Testing", marks: 93, credits: 4 },
                            { name: "Security Management", marks: 90, credits: 3 },
                            { name: "Cloud Security", marks: 94, credits: 3 },
                            { name: "Project Phase I", marks: 96, credits: 3 }
                        ]
                    },

                    {
                        semester: 8,
                        subjects: [
                            { name: "Project Phase II", marks: 97, credits: 8 },
                            { name: "Internship", marks: 95, credits: 4 },
                            { name: "Professional Ethics", marks: 92, credits: 2 },
                            { name: "Technical Seminar", marks: 94, credits: 2 }
                        ]
                    }

                ]
            },

            {
                id: 2,
                name: "Sharani P",
                regNo: "24CSE002",
                department: "CSE - Cyber Security",
                degree: "B.E",
                batch: "2024 - 2028",

                semesters: [
                    {
                        semester: 1,
                        subjects: [
                            { name: "Engineering Mathematics I", marks: 82, credits: 4 },
                            { name: "Programming in C", marks: 88, credits: 3 },
                            { name: "Engineering Physics", marks: 80, credits: 3 },
                            { name: "Engineering Chemistry", marks: 85, credits: 3 },
                            { name: "English", marks: 87, credits: 2 }
                        ]
                    },

                    {
                        semester: 2,
                        subjects: [
                            { name: "Engineering Mathematics II", marks: 85, credits: 4 },
                            { name: "Object Oriented Programming", marks: 90, credits: 3 },
                            { name: "Data Structures", marks: 86, credits: 3 },
                            { name: "Digital Principles", marks: 84, credits: 3 },
                            { name: "Communication Skills", marks: 88, credits: 2 }
                        ]
                    },

                    {
                        semester: 3,
                        subjects: [
                            { name: "Discrete Mathematics", marks: 89, credits: 4 },
                            { name: "Data Structures", marks: 91, credits: 4 },
                            { name: "Database Management Systems", marks: 85, credits: 3 },
                            { name: "Operating Systems", marks: 88, credits: 3 },
                            { name: "Web Technology", marks: 90, credits: 3 }
                        ]
                    },

                    {
                        semester: 4,
                        subjects: [
                            { name: "Computer Networks", marks: 87, credits: 4 },
                            { name: "Design and Analysis of Algorithms", marks: 84, credits: 4 },
                            { name: "Software Engineering", marks: 89, credits: 3 },
                            { name: "Cyber Security", marks: 92, credits: 3 },
                            { name: "Java Programming", marks: 88, credits: 3 }
                        ]
                    },

                    {
                        semester: 5,
                        subjects: [
                            { name: "Cryptography", marks: 90, credits: 4 },
                            { name: "Network Security", marks: 88, credits: 4 },
                            { name: "Cloud Computing", marks: 84, credits: 3 },
                            { name: "Artificial Intelligence", marks: 87, credits: 3 },
                            { name: "Cyber Forensics", marks: 91, credits: 3 }
                        ]
                    },

                    {
                        semester: 6,
                        subjects: [
                            { name: "Ethical Hacking", marks: 92, credits: 4 },
                            { name: "Machine Learning", marks: 87, credits: 4 },
                            { name: "Digital Forensics", marks: 90, credits: 3 },
                            { name: "Blockchain Technology", marks: 85, credits: 3 },
                            { name: "Security Analytics", marks: 89, credits: 3 }
                        ]
                    },

                    {
                        semester: 7,
                        subjects: [
                            { name: "Advanced Cyber Security", marks: 91, credits: 4 },
                            { name: "Penetration Testing", marks: 89, credits: 4 },
                            { name: "Security Management", marks: 86, credits: 3 },
                            { name: "Cloud Security", marks: 90, credits: 3 },
                            { name: "Project Phase I", marks: 93, credits: 3 }
                        ]
                    },

                    {
                        semester: 8,
                        subjects: [
                            { name: "Project Phase II", marks: 95, credits: 8 },
                            { name: "Internship", marks: 91, credits: 4 },
                            { name: "Professional Ethics", marks: 88, credits: 2 },
                            { name: "Technical Seminar", marks: 90, credits: 2 }
                        ]
                    }
                ]
            }
        ];
    });

    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "collegeStudents",
            JSON.stringify(students)
        );
    }, [students]);

    const updateStudent = (updatedStudent) => {

        setStudents((oldStudents) =>
            oldStudents.map((student) =>
                student.id === updatedStudent.id
                    ? updatedStudent
                    : student
            )
        );

        setSelectedStudent(updatedStudent);
    };

    return (
        <DataContext.Provider
            value={{
                students,
                selectedStudent,
                setSelectedStudent,
                updateStudent
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;