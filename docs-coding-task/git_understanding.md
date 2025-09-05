1. What makes a good commit message?  
- Good commit messages are short, specific and they are written in the imperative mood (e.g., “add login validation”).  
- The subject of change line should be ~50 characters or less.  
- If you need to add more detail, the body should explain the motivation and context in about 72 characters per line, wrapped.
- Using a consistent structure (such as Conventional Commits) makes the commit history consistent and thus easier to scan and understand.

2. How does a clear commit message help in team collaboration?  
- Clear commit messages allow for teammates to quickly identify and understand what changes have been made, without the need to read/scan the whole document for changes.  
- They also speed up the review process as it makes the intent clear.  
- As the commits build up they create a searchable history of the project that explains why decisions were made.  

3. How can poor commit messages cause issues later?  
- Vague messages like “fixed stuff” make it difficult to figure out what bug was fixed later down the line.  
- Without context/history of changes the future developers may repeat mistakes or undo important fixes.  
- Inconsistent messages can cause issues with automation tools that depend on structured commit history.  
- Overall, poor commit messages can increase technical soundness of the project and slow down collaboration and team members are unsure of others changes/work.
s 