////////////Navigation with React Router//////////////

What are the advantages of client-side routing?
- Client-side routining allows for more effieicent and smooth navigation between pages of the app. This is because the browser doesn't have to load the entire page from the server, but only parts of the content update. This enhnaces the user experience with features such as animations and tranistions between the pages whilst also maintainiong the state of the app. 


///////////Working with Lists & User Input////////////

What are some common issues when working with lists in React?
- When working with lists in React, some of the common issues include: not adding a unique key prop when rendering list items. This can lead to performance issues or bugs during the re-renders. Another issue is if the state array is mutated directly instead of creating a new one which prevents React from detechting chnages made. In adition whrn handling user input and the list updates improperly (eg not trimming thr input of duplicates), it can result in unexpected behavioiur in the UI.


///////////Styling with Tailwind CSS////////////

What are the advantages of using Tailwind CSS?
- Tailwind CSS has a number of benifits including: its utility first approach, which lets developers to pre define classes directly in html or jsx. This removes the need to write custom CSS and thus speeds up development by keeping the styles close to markup. It also promotes consistency across a project as developerrs use a shared design system which is defined in the tailwind config. Tailwind Css through its built-in screen size prefixes like sm:, md:, and lg: makes responsive design significantly easier.


What are some potential pitfalls?
- Some of the pitfalls for Tailwind are: it can lead to a messy JSX, because long chains of class names clutter the code, they reduce readability. Also given the large number of utility classes, it can be overwhelming to memorise. Also whithout the use of helper libraries sich as clsx, the same utility classes can be repeated in difrent components which can make the code dificult to manage. 


//////////Handling State & User Input///////////////

What happens if we modify state directly instead of using setState?
- If we modify the state dierectly instead of using setState, react wornt detect the change and thus will not re-render the component. Meaning the UI will not update to reflect the change. This will lead to inconsistencies between what the user sees and the actual state of the app. 
