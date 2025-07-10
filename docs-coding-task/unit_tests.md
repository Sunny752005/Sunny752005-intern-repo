What was the most challenging part of testing Redux?
- The most challenging part was getting jest to work properly with Javascript. I used import and export but jest didn't support that at first so I had to set up babel and create some configure files such as babel.config.js and jest.config.mjs for example, to fix the issue.  


How do Redux tests differ from React component tests?
- Redux tests determine if the state changes as expected when actions are dispatched. It does not test any of the UI elements such as the buttons, screens or even the user input, instead it tests the logic and determines if the system operates logically, for example if the counter begins at 0 and an increment actions is dispatched, does it go up?
- Wheras the component tests are more so for testing UI components, ensuring that the screen renders all the items and whther the button executes a certain task once pressed. 



