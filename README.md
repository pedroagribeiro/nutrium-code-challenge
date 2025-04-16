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

### 1. Nutritionist Search Page

- [x] Similar to the presented mockup.
- [ ] Search input (by name or service).
- [ ] "Schedule appointment" button for each nutritionist.
    - [ ] Opens modal to collect: guest's name, email and desired appointment date and time.
- [ ] "Personal Page" button (this can be left as a non-functional placeholder)

### 2. Pending Appointment Requests Page (Nutritionist View)

- [x] Similar to the presented mockup.
- [ ] Implement using React.
- [ ] Be able to "Accept" or "Reject" appointments.
- [ ] Trigger email notification to the guest when the request is answered.

### Extra-Mile Features (Optional)

- [ ] **Testing:** Implement testing strategy (unit, feature...) for implemented features.
- [ ] **Caching:** Implement a caching strategy for nutritionist search.
- [ ] **Advanced Search:** Use external search engines or tools to enchance search capabilities.
- [x] **Utility-First CSS:** Use frameworks like TailwindCSS for styling.
- [x] **Internationaliztion (i18n):** Support for multiple languages.

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
