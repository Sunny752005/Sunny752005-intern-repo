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
