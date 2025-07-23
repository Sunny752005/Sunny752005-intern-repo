/////////Preventing Unnecessary Renders with useCallback////////


What problem does useCallback solve?
- It helps avoid any unnecessary rerender of the child components as it memorises the function. When a parent component is rerenders in React all of the functions within it are recreated, event he child will rerender regardless of if the output is the same. The useCallback fixes this issue by keeping the same function references unless there is a change in the dependencies. 

How does useCallback work differently from useMemo?
- UseCallBack memorises the function where as UseMemo memorises the value, while both of them help avoid unnecessary re-calculation or re-renders.

When would useCallback not be useful?
- When the function is not passed to the child components.
- The component doesn't re-render as much.



/////////Optimizing Performance with useMemo//////////
How does useMemo improve performance?
- UseMemo enhances the performance by preventing react from running a calculation everyting a component is changed. It memoises the result of the function and only recalculated if the input values change. This helps avoid innecessary calculations and keeps the app running smothly. 

When should you avoid using useMemo?
- The use of useMemo should be avaoided if the calculations are quic and the component doesn't re-render too much. The use of useMemo in that case can complicate the code without improving the performance. 

What happens if you remove useMemo from your implementation?
- If useMemo is removed, the expensive function will run everytime the component is re-rendered even if nothing has changed. This can cause slower performance especially if the function takes a long time to run.



///////Understanding React Hooks: useEffect///////

When should you use useEffect instead of handling logic inside event handlers?
- The useEffect should be used when something needs to happen automatically based on changes in the state or props and not just when the user takes an action. An example of this would be: if data needs to be retrived/accessed as soon as the component loads or watch for changes in a value, then useEffecect would be the right tool to use. Whereas event handlers are good for when the user makes any changes/ takes an action. 

What happens if you don’t provide a dependency array?
- If a dependency array is not provided to a useEffect it will run after every single render, regardless of what changes have occured. Although it may be fine but it leads to unnecessary function calls. Which is particularly bad if the function is expensive or needs to access data. Adding the dependancies ensures react is aware of when to run the effect.


How can improper use of useEffect cause performance issues?
- If the useEffect is run too oftern or has the improper dependencies, it can lead to inefficiency in the app. An example of this would be: if the app is re-fetching data after each render or setting up multiple event listeners; which can lead to memory leaks and lag within the app. It is necessary to ensure the useEffect is used properly so that the component doesn't have to repeat the work which has previously been completed.

