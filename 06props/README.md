#Props in React (Very Easy Explanation)
1️⃣ What are Props?

Props = Properties
They are like arguments passed to a function or inputs given to a component.
Props help you send data from parent to child component.

⭐ Why Props Are Used?

To reuse components with different data

To customize components

To communicate from parent → child

⭐ Key Points to Remember (Interview-Ready)
✔ Props are read-only

Child cannot change props.

✔ Data flow is one-way

Parent → Child (not child → parent)

✔ Props allow dynamic UI

Same component, different props = different output.

⭐ Simple Example
Parent Component
function App() {
  return (
    <div>
      <Student name="Vikash" age={22} />
      <Student name="Rahul" age={25} />
    </div>
  );
}

Child Component
function Student(props) {
  return (
    <h2>
      Name: {props.name}, Age: {props.age}
    </h2>
  );
}

⭐ Using Props with Destructuring

Cleaner code:

function Student({ name, age }) {
  return <h2>{name} - {age}</h2>;
}

⭐ Props            vs          State (Very Short)
Props	                         State
Passed from parent	             Managed inside component
Read-only	                     Mutable
Static	                         Dynamic (changes UI)

# Code Credit Chai aur Code  (Hitesh Choudary)