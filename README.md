# aDMe-Assignment
## Task Overview (Image Gallery)
The objective of the task is to convert the images into a website. The images are rendered by integrating the following URLs (Image URL: https://picsum.photos/v2/list API for pagination: https://picsum.photos/v2/list?page=2&amp;limit=100).

## Technologies Used
1. ReactJs
2. Axios for API requests
3. Bootstrap for grid design
4. responsive UI

## How to run
1. Clone the repository
2. cd image-gallery
3. Install dependencies (npm install)
4. To start the development server (npm start)
5. Open http://localhost:3000 to view the app.

# Pagination
<img width="781" alt="image" src="https://github.com/user-attachments/assets/a937a688-7187-48aa-a14c-a1089183747d">

The gallery uses the **"Load More"** button for pagination. Here’s how it works:
1. **Initial Load**: The gallery starts by loading a set of images from the API.
2. **Load More Button**: A "Load More" button is provided at the bottom of the gallery. Clicking this button fetches the next set of images from the API.
3. **Incremental Loading**: Each click on the "Load More" button increments the page number, which triggers a new fetch request to load additional images.
4. **Appending Images**: New images are appended to the existing list of images, so previously loaded images remain visible while new ones are added.

## Important Notes
Ensure you have Node.js installed and this assignment was tested on Node.js version 20.16.0.

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 77e1ace (Initial commit)
