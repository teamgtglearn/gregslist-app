# GregsList App

Gregslist App is a web application built with a React front-end and Rails back-end.

Try out the live version here: [GregsList App](https://gregs-list-app.herokuapp.com/index)

# About the App

This app is based on our assessment that there is a patch missing in the e-commerce industry; E-commerce apps and platforms are abundant today; from giants like Amazon and Alibaba to mom and pop websites. What sets Gregslist apart from the rest is the users ability to use crypto as a form of currency complete their transactions safely, securely, and if choose to.. anonymously.

Alongside the ability to purchase items using cryptocurrencies, producers can produce and sell a wide range of products both tangible and digital opening a plethora choices buyers can browse through.
GregsList features:

- Without logging in or creating a user account, visitors to the app can access the index of all items that are currently available for sale.
- Item prices are displayed in both dollars and in Doge.
- If a visitor want to begin purchasing or selling products, they would need to create an account and then would be able to access their own personal account information.
  There are 5 pages to this application: Home, All Products, Add Products (authorized users), My Products (authorized users).

![Screen Shot 2022-11-23 at 3 18 38 PM](https://user-images.githubusercontent.com/80366503/203662458-b06a68bc-78ad-41cf-b17e-ad4ca7ebd3b7.png)

### Home Page

The Home page provides very simple and classic design from the Neo-Classical era of Webardry.
Up Top in the Navigation Command Center, Users can idolize Greg, the inspiration behind our revolution and are provided a wide range of 5 choices to choose from:

    1) ‘Home’
    2) ‘All Products’
    3) ‘About Us’
    4) ‘Sign In’
    5) ‘Sign Up’

Below the Navigation Command Center, Visitors are welcomed by a contemporary digital art photograph of a modern empty home overlooking an even more empty desert overlaid by an attractive green ‘Shop’ button. If pressed, the app will elegantly display a wonderful white screen.

### All Product Page

The ‘All Products’ page provides visitors an aweing experience. Contained within a single page’s worth of bits and pieces is a treasure trove of insurmountable possibilities. Items that can only be found in the imaginations of the progenitors of imagination, of which, the items’ magnificence are meticulously paired with their equally magnificent price tags shining in.

### About Us Page

This is the most favorite page of our visitors. Here, visitors are enthralled and captivated by the Heroes of GregsList, Goran, Tawn, and Guan.. Team GTG. The astonishing and mythical-like biographies of each these three amazing individuals are on full display for all to scrutinize, admire and emulate.

# Tools and Technologies

This is React-in-Rails app

### **_Client-side (Front-End)_**

The front-end of this project is built in React using Rails implementation of javascript. CSS and Reactstrap styling is used to improve the user experience and to make the site mobile responsive.

### **_Server-side (Back-End)_**

The back-end for this site is created using Rails and Postgresql with full CRUD functionality. Users are able to Create new Listings, Read Listings, Update Listings, and Delete Listings.

- “Create” route is used to create and add a new product to the main index page as well as the user’s own personal listings.
- “Read” route is used to return all of the products that are currently listed on GregsList.
- “Update” route is used to update a listing a user may have or need to do.
- “Delete” route is used to allow the user to delete their items and listings.
  For each route endpoint, GregsList utilizes the 2 incorporated databases to pull and push information which is then reformated and sent to the front-end for display.

### **_Deployment_**

For web deployment, we use [Heroku](https://www.heroku.com/). Heroku is a container-based cloud Platform as a Service (PaaS). The platform is flexible and easy to use while providing the simplest path to getting an app to market.

# Running Locally

The below instructions can be followed if you want to run this project locally for custom development or enhancements:

### **_Setup locally_**

- Fork this repository to your GitHub account
- On your local computer, navigate to the folder you want to store the project: cd PROJECT-FOLDER-NAME
- Clone the forked repository locally: git clone https://github.com/orgs/teamgtglearn/repositories

### **_Start Server and Client_**

- Run Yarn
- Run rails db:create
- Run rails s

# Authors

Goran Cvetic - Web Developer - [LinkedIn](https://www.linkedin.com/in/goran-cvetic/)
Chanthorn Peou - Web Developer - [LinkedIn](https://www.linkedin.com/in/player2/)
Guan Chan - Hackathon Legend - [LinkedIn](https://www.linkedin.com/in/guanchan/)
