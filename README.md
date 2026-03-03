# CS Ticket System
Simple responsive ticket management system build for an assignment.

Uses Fake API for ticket data.

## Questions

**1. What is JSX, and why is it used?**
JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It is used in React to describe what the UI should look like in a way that is easy for developers to read and write.

**2. What is the difference between State and Props?**
- **State:** Data managed *locally* within a component that can change over time.
- **Props:** Data passed *from a parent* component to a child component (read-only for the child).

**3. What is the useState hook, and how does it work?**
`useState` is a React Hook that adds state to functional components. It returns an array with the current state value and a function to update that value.

**4. How can you share state between components in React?**
By "Lifting State Up"—moving the state to the nearest common parent component and passing it down as props.

**5. How is event handling done in React?**
Event handlers are written in camelCase (e.g., `onClick`) and receive a function as the handler instead of a string.
