Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

### About The Project

This Chitter project is my version of a Twitter/X clone. Users can view peeps without logging in, you can register as a new user, and you can post peeps using your account.

### Developed With

This project is developed using the following frameworks and libraries:

<ul>
    <li><a href="https://react.dev/">React.js </a></li>
    <li><a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library </a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap.com </a></li>
    <li><a href="https://vitejs.dev/">Vite.js </a></li>
    <li><a href="https://vitest.dev/">Vitest.dev </a></li>
    <li><a href="https://nodejs.org/en">Node.js </a></li>
    <li><a href="https://github.com/expressjs/express">Express.js </a></li>
    <li><a href="https://github.com/chaijs/chai">Chai.js </a></li>
    <li><a href="https://github.com/mochajs/mocha">Mocha.js </a></li>
    <li><a href="https://www.mongodb.com/">MongoDB </a></li>
    <li><a href="https://mongoosejs.com/">Mongoose.js </a></li>
</ul>

## Getting Started

### Prerequisite

You will need to have mongodb-community running first. For Mac, run:
```
brew services start mongodb-community
```

### Get the code 

```
git clone https://github.com/Saphly/chitter-challenge.git
```

As the project is split into two folders (back-end and front-end), you will have to go into each folder and run them locally on separate terminals.


### Back-end

If you are in the root directory of this project, run
```
cd chitterBackEnd && npm i
npm run start
```

### Front-end

If you are in the root directory of this project, run
```
cd chitterFrontEnd && npm i
npm run dev
```

### Using the app

As you will be starting off with a completely empty project, you can follow these steps to create a new user and post some peeps!

<ol>
    <li>Click on the Login button on the header</li>
    <li>Click on "Click here to register"</li>
    <li>Fill in your details (email, password, name and username) and click register</li>
    <li>Once you are registered, go back and login with your details</li>
    <li>Post some peeps!</li>
</ol>

### For tests

Make sure that your terminal is in the folder that you are interested in testing, and run the following: 
```
npm run test
```

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```


#### Resources

Chitter Logo and favicon generated from [app.logo.com](https://app.logo.com)

#### Reflection

Some improvements that I would like to do in this project: 
<ul>
    <li>Auto dismiss the modals after logging in or registering</li>
    <li>Change <code>alert()</code> </li>
    <li>Move functions out of App.js</li>
    <li>Implement JWT Authentication</li>
</ul>