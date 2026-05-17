import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getAllInstructors } from "../services/instructorApi";

export default function InstructorListPage() {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {

        async function fetchInstructors() {

            try {

                const data = await getAllInstructors();

                setInstructors(data);

            } catch (error) {

                console.error(error);
            }
        }

        fetchInstructors();

    }, []);

    return (
        <div>

            <h1>Instructor List Page</h1>

            {
                instructors.map((instructor, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            marginBottom: "10px"
                        }}
                    >

                        <h3>{instructor.name}</h3>

                        <p>
                            Specialization:
                            {" "}
                            {instructor.specialization}
                        </p>

                        <p>
                            Experience:
                            {" "}
                            {instructor.yearsExperience}
                            {" "}
                            years
                        </p>

                        <Link to={`/instructors/${index}`}>
                            View Details
                        </Link>

                    </div>
                ))
            }

        </div>
    );
}