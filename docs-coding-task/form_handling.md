
How does Formik simplify form management compared to handling state manually?

- Formik makes it easy to manage forms in react as it riddens the needs to perform repetative and error prone taks when handling the form state manually. Typically developers would use UseState to manage each input field the user alters by seting up onchange and on blur handlers and also write code for submissions and resets. Formik handles all this internally giving developers a API to interact with making the whole proccess of making and managing forms extreamly easy.

What are the benefits of using Formik’s validation instead of writing validation logic manually?

- One of the key advantage of using Formik is its easy integration with YUP validation libarary, if the developers were to validate mannualy they would need to rely heavily on if statements and expressions for each input. Which is extreamly dificult to scale and maintain. However with Formik and yup a single validation scheme can de defined which outlines the rule in a declarative format making forms more maintainable, error free and reusable.
