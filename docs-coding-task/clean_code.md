/////Unit Testing & Clean Code Reflection/////

Why Unit Testing Matters

Unit testing is an essential commpponent in software development as it ensures individual pieces of logic (functions, components, slices) work as intended which is done by testing components of the code in isolation for one another; which helps in:

- Catching bugs early before they become a big challenge.
- NMake changes to the code without breaking the app.
- Improve code readability and its modular design.
- Serve as documentation for what the function is supposed to do.

Chosen Testing Framework: Jest

For this project, I used Jest as the unit testing framework since it's:

- Widely used in the React ecosystem.
- Built in support for mocking and asynchronous tests.
- Simple syntax and great developer experience.

//////////Handling Errors & Edge Cases/////////

Original code with bad error handling:

###

export function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

####

Refactored code:

####

export function formatName(user) {
  if (!user || typeof user !== 'object') {
    throw new Error('Invalid user object');
  }

  const { firstName, lastName } = user;

  if (!firstName || !lastName) {
    throw new Error('Missing firstName or lastName');
  }

  return `${firstName} ${lastName}`;
}

####

Refactoring for Better Error Handling

Original Problem:

The function always assumed the input was always valid. If the function received `null`, `undefined`, or an object missing `firstName` or `lastName`, it would display an error message like:

TypeError: Cannot read properties of undefined

Which would eventually crash the app.

Refactored Version with Guard Clauses

To fix this issue I was having, a guard clauses was added at the start of the function to:

- Check if `user` is an object
- Check if `firstName` and `lastName` are present

Guard clauses are a clean and easy meathod to catch errors early and exit before the function runs preventing any crash. This makes code: easier to debug and safer to use and more maintainable.

Takeaway:
Adding basic error handling greatly improves the reliability of the function. These small changes prevent crashses when dealing with untrusted input or incomplete data.




////////////////Writing Small, Focused Functions //////////////////////// 

----Refactoring Task – Small, Single-Purpose Functions----

Why is breaking down functions beneficial?
1. Clarity & Maintainability: Small functions allow me to scan faster and find issues locally rather than having to fix the whole code.

2. Reusability: When coder is in smaller components, those parts can be reused in other flows without copy paste.

3. Testability: Smaller functions are easier to test with inputs and return values, which makes them trivial to unit test.

4. Lower Cognitive Load: I can understand and modify behavior without needing to memorise the entire system in my head.

5. Safer Changes: Localized edits reduce the chances of breaking the whole system.

----How did refactoring improve the structure of the code?------

Before: `submitOrder` mixed concerns—validation, discount logic, tax, API, storage, analytics, and UI. It was like 100 something lines with multiple exit paths and deep nesting.

After: I split responsibilities into samller and focused functions:
- `validateOrder` – checks the input and makes sure it matches which is required fromt he input
- `computeSubtotal`, `applyDiscounts`, `computeTotals` – does all the calculations for pricing 
- `trackOrder` – analytics, tracks the order location
- `handleCouponWarnings`, `showSuccessAndNavigate` – checks to see if UI works as needed

------Improvements:------
- Separates the issues: Business rules and the  I/O, UI issues are clearly isolated.
- Naming as documentation: Function names convey meaning and thus reduce need for comments.
- Easier testing: I can unit test pricing functions without touching API/UI.
- Extensibility: Adding a new discount or tax rule means editing a small part of the code.


