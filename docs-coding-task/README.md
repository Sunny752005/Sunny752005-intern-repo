React + Tailwind CSS Project Setup

1. Clone and Install
(bash)
git clone <your-repo-url>
cd my-tailwind-app
npm install

2. Start the Development Server
(bash)
npm run dev

3. Tailwind CSS Setup Steps
Step 1: Create Vite + React app
(bash)
npm create vite@latest my-tailwind-app -- --template react
cd my-tailwind-app

Step 2: Install Tailwind and its dependencies
(bash)
npm install -D tailwindcss postcss autoprefixer

Step 3: Initialize Tailwind configuration
(bash)
npx tailwindcss init -p

Step 4: Update tailwind.config.js
Replace the file content with:

###

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

###

Step 5: Update index.css
Clear the existing styles and replace with Tailwind directives:

###

@tailwind base;
@tailwind components;
@tailwind utilities;

###

Step 6: Import index.css in main.jsx
Ensure your Tailwind styles are included in the project.

####

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>,
)

###

4. How to Verify It Works
    You can test Tailwind by adding a utility class to any element. For example:

<h1 className="text-4xl font-bold">Tailwind is working!</h1>
