# All tasks

## TECH STACK

- React
- TypeScript
- Tailwind
- React-Router-Dom
- Context API
- React Query
- Redux
- React-Hook-Form
- Zod validation
- Axios

## FEATURES

### AUTH

- [ ] Signup `${BASE_URL}/auth/signup`
- Form data
  - name
  - email
  - password
  - rePassword
  - phone
- Update UI When form is submiting and when there are errors

- [ ] SignIn `${BASE_URL}/auth/signin`
- Form data
  - email
  - password
- set token in localStorage
- Update UI when invalid email or password

- [ ] Forget password `${BASE_URL}/auth/forgotPasswords`
- Form data

  - email

- [ ] Reset password `${BASE_URL}/auth/resetPassword`
- Form data

  - email
  - new password

- [ ] SignOut

  - remove token from localStorage

- [ ] Protected routes
  - Cart
  - Checkout
  - Orders

### PRODUCTS

- [ ] Get all Products `${BASE_URL}/products`
- [ ] Get specific Product `${BASE_URL}/products/:id`

### CATIGORIES

- [ ] Get All Categories `${BASE_URL}/categories`
- [ ] Get specific category `${BASE_URL}/categories/:id`

### BRANDS

- [ ] Get All Categories `${BASE_URL}/brands`
- [ ] Get specific category `${BASE_URL}/brands/:id`

### WISHLIST

- [ ] Add product to wishlist `${BASE_URL}/wishlist`
- Body: broduct id

- [ ] Remove product from wishlist `${BASE_URL}/wishlist/:id`
- Body: broduct id

- [ ] Get logged user wishlist `${BASE_URL}/wishlist/`
- Body: broduct id

### CART

- [ ] Add Product To Cart `${BASE_URL}/cart`
- Body: broduct id

- [ ] Update cart product quantity `${BASE_URL}/cart/:id`
- Body: count

- [ ] Get Logged user cart `${BASE_URL}/cart`

- [ ] Remove specific cart Item `${BASE_URL}/cart/:id`

- [ ] Clear user cart `${BASE_URL}/cart`

### Orders

- [ ] Create Cash Order `${BASE_URL}/orders/:cartId`
- Form data: shippingAddress

  - details
  - phone
  - city

- [ ] getUserOrders `${BASE_URL}/orders/user/:userId`

- [ ] getAllOrders `${BASE_URL}/orders`

- [ ] Checkout session `${BASE_URL}/orders/checkout-session/66c91634ed0dc0016c217bb3?url=http://localhost:3000`
- Form data: shippingAddress

  - details
  - phone
  - city
