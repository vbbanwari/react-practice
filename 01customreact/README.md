📘 README.md (React Custom Renderer Notes)
# Custom React Renderer – Notes & Explanation

This repository explains how a simple **custom React renderer** works internally by converting a React-like object into a real DOM element.

---

## 📌 What is a React Element Object?

In React, JSX like this:

```jsx
<a href="https://google.com" target="_blank">Click me</a>


is internally converted to a plain JavaScript object:

{
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me"
}

Meaning of each field:

type → HTML tag name

props → element attributes

children → inner text/content

This object is basically a blueprint of the final HTML element.

📌 The Custom Renderer

The custom rendering function takes this object and turns it into a real DOM element.

✔ Full Code:
function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)

📌 What the Custom Renderer Does (Simple Steps)

Creates the HTML tag

document.createElement(reactElement.type)


Adds inner text

domElement.innerHTML = reactElement.children


Sets all attributes (props) dynamically

domElement.setAttribute(prop, value)


Appends the element to the page

container.appendChild(domElement)

📌 What the Output Looks Like

The renderer produces:

<a href="https://google.com" target="_blank">
  Click me to visit google
</a>

📌 Why the Loop for props is Better

Instead of manually doing:

setAttribute("href", ...)
setAttribute("target", ...)


We use:

for (prop in reactElement.props)

Benefits:

Works with unlimited props

Cleaner code

More like real React renderers

🧠 Final Summary
ReactElement = blueprint
type = tag name
props = attributes
children = inner content
customRender = converts blueprint → actual HTML element


This project demonstrates the core idea of how React turns JSX into real UI elements.

📦 How to Use

Copy the code into a JS file

Add a <div id="root"></div> in your HTML

Run in a browser

You will see a working clickable link rendered manually, React-style.

⭐ Author

Vikash Banwari
Learning internals of React by building everything from scratch 🚀

