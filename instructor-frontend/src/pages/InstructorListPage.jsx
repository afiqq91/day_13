import { Link } from "react-router-dom";

export default function InstructorListPage() {

    const instructors = [
        {
            id: 1,
            name: "Ahmad Bashir",
            specialization: "Java",
            yearsOfExperience: 5
        },

        {
            id: 2,
            name: "Muhammad Ali",
            specialization: "React",
            yearsOfExperience: 3
        },

        {
            id: 3,
            name: "Sarah Kamaruddin",
            specialization: "MongoDB",
            yearsOfExperience: 7
        }
    ];

    return (
        <div>

            <h1>Instructor List Page</h1>

            {
                instructors.map((instructor) => (

                    <div
                        key={instructor.id}
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
                            {instructor.yearsOfExperience}
                            {" "}
                            years
                        </p>

                        <Link to={`/instructors/${instructor.id}`}>
                            View Details
                        </Link>

                    </div>
                ))
            }

        </div>
    );
}