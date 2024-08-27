export default {
  trailingComma: "all",
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  printWidth: 160,
  bracketSpacing: true,
  endOfLine: "lf",
  sortingMethod: "alphabetical",
  plugins: ["./node_modules/prettier-plugin-sort-imports/dist/index.js"],
  stripNewlines: true,
  newlineBetweenTypes: true,
  importTypeOrder: ["NPMPackages", "localImportsType", "localImportsValue"],
};
