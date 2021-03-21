# React shopping cart
A demo app to learn the basics of React and to create a shopping cart using class components.

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project-📖">About The Project</a>
      <ul>
        <li><a href="#built-with- 🛠️">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-🚀">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-📋">Prerequisites</a></li>
        <li><a href="#installation-🔧">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing-⛑">Contributing</a></li>
    <li><a href="#author-✒️">Authors</a></li>
    <li><a href="#license-📝">License</a></li>
  </ol>
</details>

## About The Project 📖
<img src="src/img/repo/react-basics-classes-add-to-cart.png" alt="app demo" style="margin: 20px 0">

Clicking the Add to Cart button the product that was clicked will be added to the shopping cart.

By default, the shopping cart will be empty.

Once a product has been added to the cart you should be able to:

- Edit the product quantity using the select element which will update the cart’s total price
- Remove items from the cart which will update the cart’s total price
- The cart total price always will be updated so that it represents the total cost of all the items in the cart
- When the cart is empty will be render a message inside the cart saying that the cart is empty. Then, when the cart has had items added, instead will be render the cart items and remove the default message.
- If the cart item has already been added to the cart will be only updated the quantity instead of adding it again.
- The quantity should not be larger than 10 units for each product when try to added more than that will be display a error message
- Items will be stored in local storage and load them if the page is reloaded so that the cart items are not lost of page refresh


### What are the main objectives in this project?
- Learn the basics of SASS
- Improve your React skills
- Learn how to work with React and SASS
- Improve your frontend knowledge
- Improve your SASS knowledge

## Built With 🛠️

* [REACT](https://reactjs.org/)
* [SASS](https://sass-lang.com/)

## Getting Started 🚀

Clone the repository
   ```bash
   git clone https://github.com/fab-rvn/react-shopping-cart.git
   ```
### Prerequisites 📋

Have a `node` and `yarn` installed in your machine
_to check it just type_
```bash
 node -v
```
```bash
 yarn -v
```
### installation 🔧

Once you have all installed just type

```bash
yarn add
```

After that you can start test your code with the command

```bash
 yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Contributing ⛑

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project (`https://github.com/fab-rvn/instagram-clone`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author ✒️

* **Fabrizio Ervini** - [fab-rvn](https://github.com/fab-rvn)

## License 📝

Licensed under the [MIT License](./LICENSE)