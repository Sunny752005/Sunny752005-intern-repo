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




//////////////////////Avoiding Code Duplication//////////////////////

---- Removing Duplication----

The issue with the duplicated code:
1. I had an error when logging in two places -> The axios interceptor and the component they both printed the same thing.
2. Meaning if I wanted to change the log format, it meant that I would have had to update it in multiple spots.
3. This repetition adds not only extra steps on my end when trying to perform a task, it also made the system dificult to maintain and scale in the long run. 

How refactoring improved the maintainability:
1. I centralised logging inside the interceptor, meaning the components didnt have to repeat that.
2. The components are now responsible for altering the UI message, and the logging happens all in one place.
3. Making the code shorter, cleaner, and easier to update.


###
----Before----

// inside interceptor
api.interceptors.response.use(
  res => res,
  err => {
    console.error('API Error:', err.message);
    return Promise.reject(err);
  }
);

// inside component
try {
  const res = await api.post('/posts', {...});
} catch (err) {
  console.error('Request failed:', err.message); // duplicate
}
###

###
------After--------

// interceptor handles logging
api.interceptors.response.use(
  res => res,
  err => {
    console.error('API Error:', err.message);
    return Promise.reject(err);
  }
);

// component only shows UI error, no duplicate log
try {
  const res = await api.post('/posts', {...});
} catch {
  ui.showError("Could not complete request");
}
###





/////////////////Commenting & Documentation///////////////
----Commenting & Documentation – Reflection----

When should you add comments?
1. To explain "why" something is done/certain code is added, and removes the need for a person having to figure it out on their own.
2. To point out trade-offs or edge cases for example why we ignore empty input.
3. To help future readers with understanding core fundamentals used and their reson for use. 
4. To clarify decisions made that aren’t obvious from the function or variable names.

When should you avoid comments and instead improve the code?
1. If the comment just repeats what the code already says, and thus we should make the code clearer instead.
2. If the code is too long/complex we should break it into smaller functions that also helps with future maintainability as well as making the code cleaner.
3. If comments are needed to explain confusing variable names, we should rename the variables properly.
4. If the comment risks becoming outdated or misleading as the sytem development progresses we should restructure the code so it’s self-explanatory/ easier to understand.



//////////// Refactoring Code for Simplicity////////////


What made the original code complex?
1. Mixed concerns: filtering, sorting, formatting, and rendering were all part of a single component.
2. Deep nesting and inline conditionals made the flow of the code hard to follow and understand.
3. Repeated checks (search/priority) lead to duplicated logic and inconsistency within the code.
5. Improper naming conventions did a poor job at explaining intent, so comments were needed to explain the obvious things.

How did refactoring improve it?
1. Separated all the code from one large component to smaller increments that complete specific tasks.
2. Early returns and named helpers get rid of the need for branches and make the flow readable.
3. Single source of truth for business rules such as filters & sort comparators.
4. Pure data transformation so that the behavior is predictable and testable.
5. Smaller and self‑documenting functions are used that make it easier to maintain and safer to change the code.

Common refactoring techniques used:
- Extract Function (pulled out `matchesQuery`, `matchesPriority`, `makeComparator`, `formatTaskLabel`)
- Separated the Pure Logic from I/O/UI.
- Replaced the Nested Conditionals with Named Functions
- Improved Names meaningfully so functions describe intent of the code instead.




//////////////Naming Variables & Functions///////////////

What makes a good variable or function name?
1. Clear and specific: the name says exactly what it holds/does.
2. Consistent style: follows the same style throughout the codebase (e.g., camelCase, snake_case).
3. Uses domain terms: match the problem space.
4. Includes units/qualifiers when relevant or needed: `timeoutMs`, `priceAUD`.
5. Verbs for functions, nouns for data: `loadUser()`, `userProfile`.
6. Boolean names read as true/false: `isEmpty`, `hasError`, `canRetry`.


----before-----
function fn(arr, x) {
  const temp = arr.filter(i => i.a === x);
  const res = temp.map(y => y.v).reduce((p, c) => p + c, 0);
  return res;
}

----✅ after-----
function sumValuesByAccountId(records, accountId) {
  const matching = records.filter(r => r.accountId === accountId);
  const values = matching.map(r => r.value);
  const totalValue = values.reduce((sum, v) => sum + v, 0);
  return totalValue;
}

What issues can arise from poorly named variables?
1. Misunderstandings that can lead to misinterpretations of what the function does and thus errors in the long run.
2. Slower code reviews and onboarding because intent isn’t clear and thus requires more explanation/comments
3. Duplicate logic if new developers don’t realise similar code already exists.
4. Risky edits as changes can be applied to the wrong part of the codebase due to unclear names.

How did refactoring improve readability?
1. Variable and function names now show the intent without needing extra comments.
2. Reduced mental load/memorisation on the developer side as names like `orderId`, `timeoutMs`, and `canRetry` are clear.
3. Consistent naming patterns make the code easier to scan, understand, and maintain.
4. Safer changes, as responsibilities and purposes are obvious from the names themselves.
