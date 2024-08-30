# Sports Betting Dashboard

This project is a simple online sports betting dashboard that displays a list of sports events, the corresponding odds for the events, and allows users to place bets. It is built using Node.js, PostgreSQL, React, and TypeScript, following clean architecture principles.

## Features

- Backend: Node.js with Express and PostgreSQL
- Frontend: React with TypeScript and Styled Components
- Uses Docker for containerization

## Live Demo

You can test the application live at: [Sports Betting Dashboard](https://enuez-84e63.web.app/)

## Running the Project

Follow these steps to run the entire project using Docker Compose:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hollwann/dashboard-test.git
   cd dashboard-test
   ```

2. **Run Docker Compose**:

   ```bash
   docker-compose up --build
   ```

   This command will build and start all services (backend, frontend, and database) defined in the `docker-compose.yml` file.

3. **Access the application**:

   - **Frontend**: Open a web browser and navigate to `http://localhost:3000`
   - **Backend API**: The backend API is accessible at `http://localhost:5000/api/events`

## Project Structure

- **/backend**: Contains the backend code, including server, routes, controllers, and database configuration.
- **/frontend**: Contains the frontend code, including React components and styles.
- **/docker-compose.yml**: Defines the Docker containers for backend, frontend, and PostgreSQL database.

## Development and Testing

### Backend Development

Refer to the [Backend README](./backend/README.md) for instructions on setting up the backend development environment.

### Frontend Development

Refer to the [Frontend README](./frontend/README.md) for instructions on setting up the frontend development environment.
