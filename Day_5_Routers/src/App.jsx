import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HomeDetails from "./pages/HomeDetails"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          // This route will match any path like /Home/1, /Home/2, etc.
          <Route path="/Home/:id" element={<HomeDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App

/* 1. Basic Routing

<Route path="/about" element={<About />} />
Maps a URL (/about) to a component (<About />).

Used inside <Routes>.


🌿 2. Nested Routing
Allows rendering child components inside a parent layout.
Example:
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>
🔁 Access via:
/dashboard/stats
/dashboard/settings

✅ Don't forget to use <Outlet /> in Dashboard.jsx to render the nested child.


🧑‍💼 3. Dynamic Routes (URL Params)

<Route path="/user/:id" element={<UserDetails />} />
Use useParams() inside UserDetails to access the id.


🏹 4. Navigate Programmatically

import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/login'); // Navigate on event


🔁 5. Redirects (Navigate)

import { Navigate } from 'react-router-dom';

// For protected route
<Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />


🧭 6. Wildcard Routing (*)
Catch-all for undefined routes:

<Route path="*" element={<NotFound />} />


🔐 7. Private / Protected Routes
Wrap your route in a custom component that checks login/auth status.

const PrivateRoute = ({ children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

<Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />


🧱 8. Layout Routes
Useful for shared components like navbars or sidebars.

<Route element={<MainLayout />}>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
</Route>
Inside MainLayout.jsx, use:

jsx
Copy
Edit
<>
  <Navbar />
  <Outlet />
</>


⛓️ 9. Relative vs Absolute Paths
"about" inside a nested route is relative to its parent.

"/about" is absolute, i.e., from root.

🧙‍♂️ 10. Loader & Action (React Router v6.4+)
For data fetching before render and form handling in routes. Advanced usage.

🧑‍🚀 11. useLocation()
Get current path and search params.

import { useLocation } from 'react-router-dom';

const location = useLocation();
console.log(location.pathname); // "/user/123"
🧪 Bonus: Route-based Code Splitting (lazy loading)


import { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));

<Route path="/about" element={
  <Suspense fallback={<div>Loading...</div>}>
    <About />
  </Suspense>
} />

*/