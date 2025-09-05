1. What makes a good commit message?  
- Good commit messages are short, specific and they are written in the imperative mood (e.g., “add login validation”).  
- The subject of change line should be ~50 characters or less.  
- If you need to add more detail, the body should explain the motivation and context in about 72 characters per line, wrapped.
- Using a consistent structure (such as Conventional Commits) makes the commit history consistent and thus easier to scan and understand.

2. How does a clear commit message help in team collaboration?  
- Clear commit messages let teammates quickly understand what changed without reading the full diff.  
- They speed up reviews because intent is obvious, reducing back-and-forth questions.  
- Over time, they create a searchable project history that explains why decisions were made.  
- Consistency also supports automated workflows like changelog generation and release notes.

3. How can poor commit messages cause issues later?  
- Vague messages like “fixed stuff” make it difficult to trace the cause of bugs.  
- Without context, future developers may repeat mistakes or undo important fixes.  
- Inconsistent messages can break automation tools that depend on structured commit history.  
- Overall, poor commit practices increase technical debt and slow down collaboration.
