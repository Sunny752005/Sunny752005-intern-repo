/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": ["babel-jest", { presets: ["@babel/preset-env", "@babel/preset-react"] }],
  },
};

export default config;