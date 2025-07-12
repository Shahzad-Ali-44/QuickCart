# QuickCart

**QuickCart** is a modern and responsive eCommerce web application that allows users to browse products, manage their shopping cart, and place orders seamlessly. Designed with a sleek interface and smooth UX, QuickCart delivers fast and intuitive shopping experiences. Built with React, Redux, Tailwind CSS, ShadCN and TypeScript.

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Features

* **Modern UI:** Clean and responsive design built using Tailwind CSS and shadcn/ui components.
* **Cart Functionality:** Add, remove, and update product quantities in a persistent shopping cart.
* **Product Listings:** Dynamic product fetching from a public API.
* **Local Storage Persistence:** Cart state is saved in browser local storage.
* **Dark Mode:** Seamless theme toggle support with persistent theme.
* **Checkout Page:** Order summary with total and confirmation page.
* **Contact Form:** Submit contact inquiries using W3Forms integration.

## Tech Stack

* **Frontend:**

  * React + Vite
  * TypeScript
  * Tailwind CSS
  * Redux Toolkit
  * React Router DOM
  * shadcn/ui
  * Lucide Icons

* **Tools:**

  * W3Forms (for contact form submissions)
  * Toastify (for notifications)

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/QuickCart.git
cd QuickCart
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up environment variables:

Create a `.env` file in the root directory and add:

```env
VITE_Contactform_API=your-w3form-access-key
```


### 4. Start the development server:

```bash
npm run dev
```

Visit the app at `http://localhost:5173`

## Usage

* Browse products from the home page
* Click **Add to Cart** to add items
* Open cart drawer and manage items (increase/decrease quantity or remove)
* Proceed to **Checkout** and place the order
* Visit **About** and **Contact** pages to learn more or get in touch

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

*🛒 QuickCart – Shop Smart. Live Better.*
