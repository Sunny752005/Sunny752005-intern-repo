/////Testing Redux with Jest/////

What was the most challenging part of testing Redux?
- The most challenging part was getting jest to work properly with Javascript. I used import and export but jest didn't support that at first so I had to set up babel and create some configure files such as babel.config.js and jest.config.mjs for example, to fix the issue.  


How do Redux tests differ from React component tests?
- Redux tests determine if the state changes as expected when actions are dispatched. It does not test any of the UI elements such as the buttons, screens or even the user input, instead it tests the logic and determines if the system operates logically, for example if the counter begins at 0 and an increment actions is dispatched, does it go up?
- Wheras the component tests are more so for testing UI components, ensuring that the screen renders all the items and whther the button executes a certain task once pressed. 





/////// Mocking API Calls in Jest /////////

Why is it important to mock API calls in tests?
- Mocking APIs are important because they tell us how the app behaves without actually using a real server. Real APIs are at the risk of failue due to numerious reasons such as server and internet issues. However using the jest.mock() we can control the output of the API, and it is more stable, flexible and faster than the real one. 

What are some common pitfalls when testing asynchronous code?
- A common issues when testing asynchronous code is not waiting long enough for async updates to conclude, an example of this would be using the expect() too early belore the data has appeared, whoch causes the test to fail even if the code is done right. 
- Another issue is forgeting to mock the apis which results in the test calling the real API which is not only slower but can also lead to unpredictable results.  