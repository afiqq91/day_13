import InstructorForm from "../components/InstructorForm";

function CreateInstructorPage() {

  function handleCreateInstructor(data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Create Instructor</h1>

      <InstructorForm
        initialData={null}
        onSubmit={handleCreateInstructor}
        buttonText="Create Instructor"
      />
    </div>
  );
}

export default CreateInstructorPage;