# Backend - Sports Betting Dashboard

This directory contains the backend for the Sports Betting Dashboard. It is built using Node.js, Express, and PostgreSQL, and it follows clean architecture principles.

## Features

- API for fetching sports events and their odds
- Database integration with PostgreSQL
- Database migrations and seeding using Knex.js
- Unit tests with Jest

## Running the Backend

To run the backend as part of the full project using Docker, follow the instructions in the [main project README](../README.md).

## Project Structure

Here's an overview of the backend project structure:

```plaintext
/backend
├── src
│   ├── controllers         # Route controllers
│   ├── database            # Database setup and configuration
│   ├── interfaces          # Interfaces for servces
│   ├── migrations          # Database migrations
│   ├── models              # Entity models
│   ├── repositories        # Data access layers
│   ├── routes              # API route definitions
│   ├── services            # Business logic
│   ├── seeds               # Seed data for the database
│   └── utils
├── .env
├── package.json
└── tsconfig.json
```
