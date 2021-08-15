## React Online Store for clothing company PlatForma

- See the project on Netlify
- Project is inspired by React Comfy Store project from [John Smilga's React tutorial](https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23467010#content)

- The products data is stored and controled in graphical interface Airtable. As a server are used serverless netlify functions. There are two endpoints, one for all the products and one for single product with additional data in it.
- The online store consist of:
  - Home page with navbar, hero, featured products, special services, sign up form
  - Simple about page
  - Simple error page
  - All products page:
    - All compnay products are comming from the Api.
    - Filters by category, occasion, colors, price, free shipping. The filters are combining.
    - Two options to display the products, column and row layout.
    - We display how many products we have in certain filter. Sorting by price and name
  - Single product page:
    - Change the number of items in the cart. This qauntity is limited by the product stock.
    - Available product colors are displayed
  - Shopping cart
    - Change the product qauntity
    - Delete button, cleare the cart
- CSS: using styled components
  - Responsive design; switching between navbar and sidebar navigation
- Format price. The prices are set in the smallest unit(cents). All calculation in the cart are done in cents in order to avoid bugs and price mistakes. Prices are displayed after formatting.
- User authification

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
