What is React Router?

React Router is a library that enables client-side routing in React applications, allowing navigation between different pages without reloading the browser.

Why React Router?

Builds Single Page Applications (SPA)

Faster navigation (no full page refresh)

Better user experience

Organizes app into multiple pages

Installation
npm install react-router-dom

Core Components
BrowserRouter

Wraps the entire app and enables routing.

<BrowserRouter>
  <App />
</BrowserRouter>

Routes & Route

Defines application pages.

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

Link

Used for navigation without page reload.

<Link to="/about">About</Link>


❌ Avoid <a href="">

Common Hooks
useNavigate

Navigate programmatically.

const navigate = useNavigate();
navigate("/login");

useParams

Access dynamic URL values.

const { id } = useParams();

Example Routes
Path	Component
/	Home
/about	About
/login	Login
/profile	Profile
Important Rules

Link, Routes, and Route must be inside BrowserRouter

React Router does not reload the page

Only one <Routes> should wrap all <Route> components

Common Errors

Using <Link> without <BrowserRouter>

Wrong file paths or casing

Missing Routes wrapper

Interview One-Liner

React Router allows navigation between different components in a React application without reloading the page.

When to Use

Multi-page React apps

Dashboards

Authentication flows

User profile systems