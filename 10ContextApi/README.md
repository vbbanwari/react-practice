What is Context API?

Context API is a built-in React feature used to share data globally across components without passing props manually at every level.

Why Context API?

Avoids prop drilling

Centralized state management

Clean and readable code

Ideal for small to medium applications

When to Use Context API

User authentication (login data)

Theme (dark / light)

Language selection

Global settings

Basic Steps to Use Context API
1️⃣ Create Context
import { createContext } from "react";

const UserContext = createContext(null);
export default UserContext;

2️⃣ Provide Context

Wrap the component tree with Provider.

<UserContext.Provider value={{ user, setUser }}>
  <App />
</UserContext.Provider>


Provider makes data available to all child components

value contains shared data and functions

3️⃣ Consume Context

Access data using useContext.

const { user, setUser } = useContext(UserContext);

Example Flow (Used in This Project)
Global State
const [user, setUser] = useState(null);

Login Page
setUser("Vikash");

Home / Profile Page
Welcome Vikash

How Context Works (Simple Flow)
Login → setUser()
     → Context updates global state
     → Home/Profile re-render automatically

Important Rules

Components using Context must be inside Provider

Context object must be created using createContext

Export and import Context correctly (default export recommended)

Common Errors

Using Context.Provider on an undefined Context

Wrong file path or incorrect casing

Mismatch between default and named exports

Forgetting to wrap components with Provider

Context API vs Props
Props	Context API
Manual passing ❌	Global access ✅
Prop drilling ❌	Clean structure ✅
Good for small data	Good for global data
Context API vs Redux
Context API	Redux
Built-in	External library
Simple setup	Complex setup
Best for small apps	Best for large apps
Interview One-Liner

Context API is used to share global data in a React application without prop drilling.

Project Use Case

Store logged-in user

Access user data in Home and Profile pages

Avoid passing user props across route