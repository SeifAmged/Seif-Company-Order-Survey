# Seif-company-order-survey
A Simple Survey  Pop up Window


---

### Feedback Form

This repository contains a feedback form designed to gather user opinions on product quality, shipping speed, and website experience. The form is implemented using HTML, CSS, and JavaScript.
![Description of GIF](https://github.com/SeifAmged/Seif-Company-Order-Survey/blob/main/Media3/1.gif)
#### Features

- HTML Form: Collects user details such as name, email, client ID, and feedback on product quality, shipping speed, and website experience.
- CSS Styling: Provides a visually appealing design with a background image, centered content, and responsive layout.
- JavaScript Functionality: 
  - Form Handling: Prevents default form submission and processes the form data.
  - Local Storage: Stores user input in localStorage for potential future use.
  - Data Submission: Sends form data to a remote API using the fetch API and handles the response.
  - User Notifications: Displays alerts to inform the user about the success or failure of the form submission.

#### How It Works

1. Form Submission: When the form is submitted, the JavaScript function myfunc prevents the default behavior and retrieves the form data.
2. Local Storage: The collected data is saved in the browser's localStorage.
3. Data Posting: The form data is sent to a remote API endpoint via a POST request.
4. User Feedback: Upon successful submission, the user is thanked, and a new tab opens with a thank you page. In case of an error, an error message is displayed.
