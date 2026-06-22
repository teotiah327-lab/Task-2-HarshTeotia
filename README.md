# Task Manager - Backend API

This project extends the Task Manager application by adding a backend API using Node.js and Express.js. The API handles task creation, retrieval, and deletion while validating user input.

## Features

* Get All Tasks
* Add New Task
* Delete Existing Task
* Input Validation
* REST API Architecture
* JSON Data Handling
* Express.js Server

## Technologies Used

* Node.js
* Express.js
* CORS

## Project Structure

project2/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md

## Installation

1. Clone the repository

git clone https://github.com/your-username/task-manager-api.git

2. Install dependencies

npm install

3. Start the server

node server.js

4. Open API

http://localhost:5000/tasks

## API Endpoints

### Get All Tasks

GET /tasks

### Add Task

POST /tasks

Example Request Body:

{
"name": "Complete DecodeLabs Project"
}

### Delete Task

DELETE /tasks/:id

## Learning Outcomes

* Backend Development
* Express.js
* REST API Design
* HTTP Methods
* JSON Handling
* Input Validation
* API Integration

## Future Improvements

* Database Integration (MongoDB)
* Update Task API
* User Authentication
* Task Categories

## Author

Harsh Teotia

## License

This project was created for educational and internship purposes.
