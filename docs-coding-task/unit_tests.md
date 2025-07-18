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





////////Testing React Components with Jest & React Testing Library/////////

What are the benefits of using React Testing Library instead of testing implementation details?
- React Test library tests how users interact with the app instead of how the code is written, this enhances the reliability of the tests as the test is less likely to break when the code is updated. By focusing more on the UI elements such as button clicks and whats shown on the screen, it checks where the app behaves as expected. 

What challenges did you encounter when simulating user interaction?
- Innitially, my biggest challenge was missing/ wrong matches such as .toBeInTheDocument(). I forgot to import them from @testing-library/jest-dom, which resulted in my test failing innitially. Another challenge was making sure that the component was imported and renders correctly. One of my files was named js instead of jsx which too caused a test to fail.




////////Introduction to Unit Testing with Jest //////////

Why is automated testing important in software development?
- Automated Testing ensures that the code functions correctly even after chnages has been made to it, it saves time by running tests in a more time efficient manner and helps catch bugs early before they cause significant challenges later on in the development.


What did you find challenging when writing your first Jest test?
- I innitially struggled with how Jest's syntac works and how I am supposed to structure the test, and I also had to make sure that the function was exported correctly. However when I understood how to write the expect() statements it bacame a bit more simpler. 



//////////Implementing Internationalization with i18next////////////////

What challenges did you face while setting up i18next?
- They key challenge I faced was when the file path for i18n was inaccurate and it was causing an error over and over again and I was unable to figure out the issue. Analysing the directory structure and then using the relative path ultimatly I was able to figure out the issue and fix it. 

Why is it important to use a library like i18next instead of manually handling translations?
- The use of the i18next library simplifies the process for translation, specifically for apps. It consists of features such as language detechtion and namespace suppoer and fallback which would be extreamly dificult and subject to errors is I were to implement them manually. 

How would you handle dynamic content (e.g., user-generated text) in a multilingual app?
- I would not translate user-generated content automatically. I would instead store it and display it in the language it was inputeded. If translation were neccesary, I would use external APIs such as google translate and clearly display that the content was auto translated to mitigate any consusion. 