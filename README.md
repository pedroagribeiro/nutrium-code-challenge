<div align="center">
    <img src="app/assets/images/nutrium.webp" alt="delegatewise" width="350px">
    <h1>Nutrium Code Challenge</h1>
</div>

Implementation of the code challenge pruposed by Nutrium.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Deployment](#deployment)

## About

This is my implementation of the code challenge, with the following goals
accomplished:

- [x] Goal 1
- [ ] Goal 2

## Features

- [x] Feature 1
- [x] Feature 2

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

## Deployment

