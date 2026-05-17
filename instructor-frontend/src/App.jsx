import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import InstructorListPage from "./pages/InstructorListPage";
import InstructorDetailsPage from "./pages/InstructorDetailPage";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* PUBLIC ROUTES */}
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/instructors"
                    element={<InstructorListPage />}
                />

                <Route
                    path="/instructors/:id"
                    element={<InstructorDetailsPage />}
                />

               {/* PROTECTED ROUTE */}
<Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <DashboardPage />
        </ProtectedRoute>
    }
/> 


<Route
    path="/instructors/create"
    element={
        <ProtectedRoute adminOnly={true}>
            <h1>Create Instructor Page</h1>
        </ProtectedRoute>
    }
/>

<Route
    path="/instructors/:id/edit"
    element={
        <ProtectedRoute adminOnly={true}>
            <h1>Edit Instructor Page</h1>
        </ProtectedRoute>
    }
/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
