# README

## Overview

This task focuses on improving the user experience by adding error handling, a loading spinner during data fetch, and enhancing CSS styling in a project using **Vite**.

### Key Features:

- **Error Handling**: Proper error management for form submissions.
- **Loading Spinner**: Displaying a loading indicator when data is being fetched and not yet received.
- **CSS Styling**: Improving the look and feel of the form using custom styles.

---

## Setup and Installation

### 1. Clone the Repository:

```bash
git clone https://github.com/itsnooshin/Form-vuejs-v1.git
cd Form-vuejs-v1
```

### 2. Install Dependencies:

Install all necessary dependencies using **npm** or **yarn**:

```bash
npm install
# or
yarn install
```

### 3. Run the Project:

Start the development server using **Vite**:

```bash
npm run dev
# or
yarn dev
```

This will launch the app on `http://localhost:5173`.

---

## Features Added

### 1. **Error Handling**:

- Implemented error handling to ensure the form submission shows appropriate messages when validation or server-side errors occur.
- Example of the error messages shown:
  - _"Please fill in the required fields."_
  - _"Server error, please try again later."_

### 2. **Loading Spinner**:

- A loading spinner is shown when the form is fetching data (e.g., on form submission or data fetching for dropdowns).
- The spinner provides a visual cue to users, ensuring a smoother experience.

### 3. **CSS Styling**:

- Enhanced the look of the form using **custom CSS**.
- Responsive design ensures that the form works well on both mobile and desktop screens.
- Specific styles were added to highlight errors and improve form input usability.

---

```javascript
const handleSubmit = async () => {
  try {
    const response = await fetchData();
    if (!response.ok) {
      throw new Error("Server error. Please try again.");
    }
  } catch (error) {
    setErrorMessage("An error occurred during submission.");
  }
};
```

## How to Use

1. **Form Submission**:

   - Fill in all required fields.
   - If any field is missing, an error message will be displayed.
   - During submission, the loading spinner will appear until the response is received.

2. **Error Scenarios**:
   - If the server returns an error, the error message will be shown at the top of the form.
   - Ensure proper validation before submission to avoid client-side errors.

---
