# Epicodus | Friday Project | Kombucha Taproom

1. [Setting up Development](#setting-up-development)
2. [Description](#description)
3. [Objectives](#objectives)
4. [Further Exploration](#further-exploration)

- **Live Website Link**: [https://alyxmoon.github.io/epicodus-project-react02-kombucha-taproom/](https://alyxmoon.github.io/epicodus-project-react02-kombucha-taproom/)
- **Author**: Allister Moon Kays
- **Copyright**: MIT License

<details>
  <summary>See Component/Page Map</summary>

  ![Component and Page Map](/planning/epicodus-project-react02-diagram.drawio.png)
</details>

## Setting up Development

Requirements:
- NodeJS (assumed version 12 or higher)
- npm or yarn

Getting started with local development
1. Open a terminal in the root of this project
2. Run `npm install` or `yarn`
3. Run `npm run start` or `yarn run start`
4. Open a browser window on `http://localhost:3000`
5. Profit!

## Description

Build a tap room in React where a bar or kombucha store can track their kegs. This could also be a soda fountain or another kind of tracker - as long as you're able to track the remaining amount and meet the objectives, you can be creative with this prompt.

**Before getting started, plan out your application and draw a component tree or component diagram that shows the structure of your components. This is a requirement for the project and should be included in your README**. You may draw the structure on a piece of paper and take a picture of it or use an application like [https://www.draw.io/](https://www.draw.io/).

Keep in mind that you will only be expected to add CREATE and READ functionality, though you are welcome to implement full CRUD. Here are some user stories to get you started. The application should have the following functionality:

- As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
- As a user, I want to submit a form to add a new keg to a list.
- As a user, I want to be able to click on a keg to see its detail page.
- As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints.
- As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.

## Objectives

Your code will be reviewed for the following objectives:
- Application compiles and runs and all required functionality is included.
- Functional and class components are used correctly.
- Application effectively uses local and shared state.
- Props are used correctly and always include PropTypes.
- README includes an accurate representation of the application's component tree.
- Project is in a polished, portfolio-quality state.
- The prompt’s required functionality and baseline project requirements are in place by the deadline.

### What is a polished, portfolio-quality state?
When a project is both polished and in a portfolio-quality state, this means:
- You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure.
- You are following the best practices and coding conventions we teach.

### What are the baseline project requirements?
All independent coding projects at Epicodus have these baseline requirements:

- A complete and informative README
- The project's commit history demonstrates that the project’s required work schedule and hours have been met:
  - 8 hours completed on Friday is required for full-time students
  - 4 hours completed over the weekend is required for part-time students
- Completion of the project based on the prompt and objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.

## Further Exploration
If you have time remaining after you complete the required objectives, work on the following user stories:
- As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake.
- As a user, I want to be able to delete a keg.
- As a user, I want a keg to update to say "Out of Stock" once it's empty.
- As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
- As a user, I want to have kegs prices to be color-coded for easy readability. This could be based on their price, the style of beer or kombucha, or the amount of pints left.
- As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)