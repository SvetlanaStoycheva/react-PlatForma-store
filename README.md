## React Online Store for clothing company PlatForma

- See the project on Netlify
- Project is inspired by React Comfy Store project from [John Smilga's React tutorial](https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23467010#content)

- The product data is stored and controlled in graphical interface Airtable. As a server is used serverless netlify functions. There are two endpoints, one for all the products and one for single product with additional data in it.
- The online store consists of:
  - Home page with navbar, hero, featured products, special services, sign up form
  - Simple about page
  - Simple error page
  - All products page:
    - All company products are coming from a surverless functions Api.
    - Sorting form: by price and name
    - Filters by category, occasion, colors, price, free shipping. The filters work combined.
    - Two options to display the products, column and row layout.
    - We display how many products we have in certain filter.
  - Single product page:
    - Change the number of items in the cart. This quantity is limited by the product stock.
    - Available product colors are displayed
    - Reviews with stars are displayed
  - Shopping cart
    - Change the product quantity
    - Delete button, clear the cart button
    - Save the current cart on the local storage in order to persist the data between the renders
- CSS: using styled components
  - Responsive design; switching between navbar and sidebar navigation
- Format price. The prices are set in the smallest unit (cents). All calculations in the cart are done in cents in order to avoid bugs and price mistakes. Prices are displayed after formatting

<p align-items: center>
    <img src='./src/assets/Screenshot-1.png' width='500'>
</p>
<br/><br/>

#### Notes

#### Older React Version

```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.3",
```

#### Current React Version

```
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
```

#### Alternative fix

.env file in the root
FAST_REFRESH=FALSE

####

\_redirect file in public is for Netlify, so that react router and netlify work together
