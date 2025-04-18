<div align="center">
    <img src="app/assets/images/nutrium.webp" alt="delegatewise" width="350px">
    <h1>Nutrium Code Challenge</h1>
</div>

Implementation of the code challenge pruposed by Nutrium.

## 📜 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Deployment](#deployment)

## ⚡ Features

### Core Requirements

#### Guest Flow 

- [ ] A guest can search nutritionists by:
    - [ ] Nutritionist's name.
    - [ ] Name of service provided.
- [ ] A guest can requet an appointment with a selected nutritionist by:
    - [ ] Providing their name and email.
    - [ ] Selecting a date and time.
- [ ] A guest can only have one pending request at a time.
- [x] Once a request is submitted, it will be marked as pending until is either
accepted or rejected by a nutritionist.
- [ ] If a request is accepted, all **other pending requests** for the same
guest **at the same time date and time** must be automatically rejected.
- [x] Guests should receive an email notification when their request is answered
(accepted or rejected).

#### Nutritionist Flow

- [x] A nutritionist can view a list of appointment requests.
- [x] The nutritionist can **accept or reject** each request.
- [x] When a decision is made, the guest is notified via email.

### Pages to Implement

#### 1. Nutritionist Search Page

- [x] Similar to the presented mockup.
- Includes:
    - [ ] A search input (by name or service).
    - [ ] A results list of matching nutritionists.
    - [x] A **"Schedule Appointment"** button for each nutritionist.
        - [x] Opens a modal to collect:
            - [x] Guest's name and email.
            - [x] Desired appointment date and time.
    - [x] A "Personal Page" button (this can be left as non-functional) placeholder. 

#### 2. Pending Appointment Requests Page (Nutritionist View)

- [x] Similar to the presented mockup.
- [x] A page where the a nutritionist can view all incoming appointment
requests.
- [x] **Must be implemented using a Javascript Framework (React recommended)**
- [x] Authentication is not required.
- For each request, show:
    - [x] Guest information.
    - [x] Request date/time.
    - [x] Actions: **Accept** or **Reject**.
- [x] Trigger email notification to the guest when the request is answered.

### Extra-Mile Features (Optional)

- [ ] **Testing:** Implement testing strategy (unit, feature...) for implemented
features.
- [ ] **Caching:** Implement a caching strategy for nutritionist search.
- [ ] **Advanced Search:** Use external search engines or tools to enchance
search capabilities.
- [x] **Utility-First CSS:** Use frameworks like TailwindCSS for styling.
- [ ] **Internationaliztion (i18n):** Support for multiple languages.

### Utilities

- [ ] Submit your solution as a **public Git repository** (GitHub, GitLab,
Bitbucket).
- [ ] Include a `README.md` file with:
    - [ ] Setup instructions.
    - [ ] How to run the application.
    - [ ] Any other relevant notes or decisions.
- [x] Include *seeds* that:
    - Create multiple nutritionists.
    - Assign services with different prices and locations.
    - Allow search functionality to be tested immediatly.

## 🚀 Getting Started

This project uses settings configured in environment variables defined in the
`.env` file. Use the `.env.sample` as a starting point.

```bash
cp .env.sample .env
```

### Prerequisists

Ensure you have the following installed:

- Ruby (version x.x.x)
- Rails (version x.x.x)
- PostgreSQL
- Node.js and Yarn (for managing JS dependencies)

### Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
bundle install
npm install
```

Setup the database:

```
rails db:create
rails db:migrate
rails db:seed
```

## Usage

Start the application server:

```
bin/rails server
```

Visit `http://localhost:3000` in your browser.

## Running tests

To run tests:

```
bin/rails test
```
