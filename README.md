# ToDo Application Backend Server

This project serves as the backend server for a ToDo application, providing APIs to manage tasks within a ToDo list. It's built using Node.js, Express, and MongoDB, and is designed for straightforward deployment to AWS.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Installation

Follow these steps to get the project up and running:

1. Clone the repository:
   git clone https://github.com/NA-Siddiky/todo-server

2. Change to the project directory:
   cd todo-server

3. Install the project dependencies:
   npm install

### Running the Application

To run the server in development mode, execute one of the following commands:

npm start

or

npm run dev

The server defaults to running on port 5010. If you need to change the port, set the `PORT` environment variable accordingly.

## Routes

- Create Task: `POST /tasks`
- Read Tasks: `GET /tasks/<email>`
- Update Task: `PATCH /tasks/<id>`
- Delete Task: `DELETE /tasks/<id>`

## Deployment
AWS Link: http://43.201.65.252
For AWS deployment, the `deploy/aws` branch contains all necessary configurations. Refer to the AWS deployment guide for detailed steps.

## Technologies Used

- Node.js - Runtime environment
- Express - Web framework
- MongoDB - Database
- AWS EC2
- PM2 for process management
