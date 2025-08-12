///////Using Selectors in Redux Toolkit//////////

What are the benefits of using selectors instead of directly accessing state?

- using selectiord in redux makes the code more clean and organised by separating the logic for accessing the state from the components. Rather than reaching into the state every time, you create a reuseable function that retuen the part of the state which is needed. This makes the code easier to maintain and test by reducing repetition and improving readability. Selectors also reduce bugs when the shape of the state changes because the delectos is only updated instead of all the components that use that part of the state.

///////Introduction to Redux Toolkit//////////

When should you use Redux instead of useState

- Redux should be used instead of useState when global state needs to be managed across a number of components. Where useState is better for handling local sate within one single component. Redux is better suited for more complex applications where diffrent parts of the app use the same data. Redux has a central store which makes it easier to track, update and debug any state changes.
