// Day 13 Excercise 3
const BASE_URL = "http://localhost:8080/api/v1/instructors";

export async function getAllInstructors() {

    const response = await fetch(BASE_URL);

    return response.json();
}

export async function getInstructorById(id) {

    const response = await fetch(`${BASE_URL}/${id}`);

    return response.json();
}

export async function createInstructor(instructorData) {

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(instructorData),
    });

    return response.json();
}

export async function updateInstructor(id, instructorData) {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(instructorData),
    });

    return response.json();
}

export async function deleteInstructor(id) {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    return response.json();
}