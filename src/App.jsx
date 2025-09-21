import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";

// Layouts & Pages
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Ecommerce from "./pages/Ecommerce";
import Projects from "./pages/Projects";
import OnlineCourses from "./pages/OnlineCourses";
import UserProfile from "./pages/UserProfile";
import { getTheme } from "./theme/theme";
import Order from "./pages/Order";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout toggleTheme={toggleTheme} mode={mode} />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Ecommerce />} />
            <Route path="/overview" element={<Ecommerce />} />
            <Route path="/default" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<OnlineCourses />} />
            <Route path="/profile/overview" element={<UserProfile />} />
            <Route path="/profile/projects" element={<UserProfile />} />
            <Route path="/profile/campaigns" element={<UserProfile />} />
            <Route path="/profile/documents" element={<UserProfile />} />
            <Route path="/profile/followers" element={<UserProfile />} />
            <Route path="/account" element={<UserProfile />} />
            <Route path="/followers" element={<UserProfile />} />
            <Route path="/corporate" element={<UserProfile />} />
            <Route path="/blog" element={<UserProfile />} />
            <Route path="/social" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
