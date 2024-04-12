# Workflow CA

This is my course assignment for the course Workflow at Noroff. The course spanned over 4 weeks and we were tasked with "improving the quality of an existing application by providing various development workflows as well as a testing strategy."

## Live site

This repo is deployed using [GitHub Pages](https://dwnwnd.github.io/dwnwnd_social-media-client/).

## Course goal

"Using the skills and knowledge from this course, improve the quality of a package by establishing helpful workflows that make the development process more efficient." (copied from the CA requirements)

### Delivery

An open Pull Request from branch workflow into the fork’s default branch.

### Requirements

**Configuration**

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Code is versioned and branching conventions have been followed.

**Project changes**

- Project readme file is updated to include new configuration information and workflow status badges
- All known bugs have been communicated in the Issues tab

**Testing**

1. Unit-testing

- The login function stores a token when provided with valid credentials
- The logout function clears the token from browser storage

2. E2E-testing

- The user can log in with the login form with valid credentials
- The user cannot submit the login form with invalid credentials and is shown a message.
- The user can log out with the logout button

### Testing Statusbadges from Github Actions Workflows runs on PR

[![Automated Unit Testing](https://github.com/DWNWND/dwnwnd_social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=master)](https://github.com/DWNWND/dwnwnd_social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/DWNWND/dwnwnd_social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/DWNWND/dwnwnd_social-media-client/actions/workflows/e2e-test.yml)

## How to run locally

1. Ensure you have [Node.js](https://nodejs.org/) installed

2. Clone this repository:

```bash
git clone https://github.com/DWNWND/dwnwnd_social-media-client.git
```

3. Open the repository with VSCode

4. Install dependencies

```bash
npm install
```

5. Run tests

```bash
 npm run test
```

**If all tests ran `successfully` you are all set**

### Add your own **cypress.env.json** file based on the example

1. Register a new user [here](https://dwnwnd.github.io/dwnwnd_social-media-client/)
2. Make a new file called `cypress.env.json` in your root folder
3. Copy the content from `cypress.env.example` into your new `cypress.env.json`file
4. Populate the new `cypress.env.json` file with the credentials for your newly registered user

## Contact

[My LinkedIn page](https://www.linkedin.com/in/thea-oland-b38175139/)

## Acknowledgments

[Noroff Online Studies](https://www.noroff.no)
