# ToDo Application Backend Server

This project serves as the backend server for a ToDo application, providing APIs to manage tasks in a ToDo list. It's built using Node.js with Express and MongoDB, and it's designed to be easily deployable to AWS.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. Clone the repository:
   git clone [<repository-url>](https://github.com/NA-Siddiky/todo-server)

2. Navigate to the project directory:
   cd todo-server

3. Install dependencies:
   npm install

### Running the Application

To start the server in development mode, use the following command:

npm start
or
npm run dev

By default, the server runs on port 5010. If needed, you can change the port by setting the `PORT` environment variable.

## Deployment

The `deploy/aws` branch contains the necessary configurations for deploying the application to AWS. Follow the AWS deployment guide for detailed instructions.

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment
- [Express](https://expressjs.com/) - The web framework
- [MongoDB](https://www.mongodb.com/) - The database
