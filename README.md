# TV Show and Movie Search

![Screenshot 2025-01-25 010747](https://github.com/user-attachments/assets/b7b376f3-cec2-4504-aa9e-77e1eaffd02c)





## Overview
This project is a simple web application that allows users to search for TV shows and movies using the [TVmaze API](https://www.tvmaze.com/api). Users can enter a query into the search bar, and the application fetches and displays images of shows that match the query.

## Features
- **Search Functionality**: Users can search for TV shows or movies by entering a keyword.
- **Dynamic Results**: Fetches data from the TVmaze API and displays images of the results on the page.
- **Error Handling**: Displays a message in the console if the API fails to fetch data.

## File Structure
The project consists of two main files:

### `index.html`
The HTML structure of the application. It includes:
- A search form for user input.
- A styled background for a visually appealing interface.

### `index.js`
The JavaScript file responsible for:
- Handling the form submission.
- Fetching data from the TVmaze API.
- Dynamically displaying the results as images on the page.

## Usage Instructions
### Prerequisites
Ensure you have a web browser installed to run this project. No additional dependencies are required.

### Steps to Run
1. Clone this repository or download the files to your local machine.
2. Open the `index.html` file in a web browser.
3. Type a TV show or movie name into the search bar.
4. Click the "Search" button to see results displayed as images on the page.

### Example
- Input: `friends`
- Output: Images of TV shows or movies matching the keyword "friends" are displayed on the page.

## Code Details
### `index.js`
- **Form Submission Listener**:
  ```javascript
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      const vl = form.elements.q.value;
      search(vl);
      form.elements.q.value = ""; // Clear the input field after search
  });
  ```
  This prevents the default form submission behavior and triggers the `search` function with the user's input.

- **API Request**:
  ```javascript
  function search(name) {
      fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              for (let img of data) {
                  const imgs = document.createElement("IMG");
                  imgs.src = img.show.image.medium;
                  document.body.append(imgs);
              }
          })
          .catch(function (err) {
              console.log("Error fetching data: move not find", err);
          });
  }
  ```
  This function makes an API call to TVmaze, parses the JSON response, and appends the resulting images to the page dynamically.

## Technologies Used
- **HTML5**: For the basic structure and layout of the web page.
- **CSS**: Inline styling to enhance the visual appeal.
- **JavaScript**: For dynamic content rendering and API integration.
- **TVmaze API**: To fetch TV show and movie details.

## Future Improvements
- Add a loading indicator while fetching data.
- Display additional details about the show (e.g., title, summary, and genres).
- Improve the UI design with CSS frameworks like Bootstrap.
- Implement error messages visible on the webpage instead of just in the console.
- Add pagination for results if the query returns many items.

## Troubleshooting
- Ensure you are connected to the internet as the application requires an active connection to fetch data from the TVmaze API.
- If no results appear, check the browser console for error messages.

## License
This project is open source and available under the [MIT License](LICENSE).

---
Enjoy searching for your favorite TV shows and movies!
