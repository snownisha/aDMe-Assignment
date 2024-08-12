# aDMe-Assignment
## Task Overview (Image Gallery)
The objective of the task is to convert the images into a website. The images are rendered by integrating the following URLs (Image URL: https://picsum.photos/v2/list API for pagination: https://picsum.photos/v2/list?page=2&amp;limit=100).

## Technologies Used
ReactJs
Axios for API requests
Bootstrap for grid design and responsive UI

## How to run
1. Clone the repository
2. cd image-gallery
3. Install dependencies (npm install)
4. To start the development server (npm start)
5. Open http://localhost:3000 to view the app.

## Important Notes
Ensure you have Node.js installed and this assignment was tested on Node.js version 20.16.0.

# Pagination
<img width="781" alt="image" src="https://github.com/user-attachments/assets/a937a688-7187-48aa-a14c-a1089183747d">

The gallery uses the **"Load More"** button for pagination. Here’s how it works:
1. **Initial Load**: The gallery starts by loading a set of images from the API.
2. **Load More Button**: A "Load More" button is provided at the bottom of the gallery. Clicking this button fetches the next set of images from the API.
3. **Incremental Loading**: Each click on the "Load More" button increments the page number, which triggers a new fetch request to load additional images.
4. **Appending Images**: New images are appended to the existing list of images, so previously loaded images remain visible while new ones are added.
