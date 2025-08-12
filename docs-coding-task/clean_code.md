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
