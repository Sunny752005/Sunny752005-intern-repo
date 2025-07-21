What problem does useCallback solve?
- It helps avoid any unnecessary rerender of the child components as it memorises the function. When a parent component is rerenders in React all of the functions within it are recreated, event he child will rerender regardless of if the output is the same. The useCallback fixes this issue by keeping the same function references unless there is a change in the dependencies. 

How does useCallback work differently from useMemo?
- UseCallBack memorises the function where as UseMemo memorises the value, while both of them help avoid unnecessary re-calculation or re-renders.

When would useCallback not be useful?
- When the function is not passed to the child components.
- The component doesn't re-render as much.
