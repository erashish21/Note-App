# Notes Application
This is a simple full-stack notes application where users can create, list, and delete notes. The backend is built using Node.js, Express, MariaDB, and TypeScript, while the frontend is built using HTML, CSS, and JavaScript.

# Features
1.Create and store notes in a MariaDB database.
2.List all notes.
3.Delete specific notes.

# Tech Stack
Backend: Node.js, Express, TypeScript, MariaDB, dotenv
Frontend: HTML, CSS, JavaScript
Database: MariaDB

# Clone the repository
git clone https://github.com/yourusername/notes-app.git
cd notes-app
npm run build
npm start

# API Endpoints
# 1. Create a new note
URL: /api/notes
Method: POST

Request Body
{
  "noteText": "Your note here"
}
Response:
{
  "message": "Note added successfully",
  "noteId": 1
}
# 2. List all notes
URL: /api/notes
Method: GET
Response 
[
  {
    "id": 1,
    "noteText": "First note"
  },
  {
    "id": 2,
    "noteText": "Second note"
  }
]


# 3. Delete a note
URL: /api/notes/:id
Method: DELETE
Response:
{
  "message": "Note deleted successfully"
}

# Project Structure
.
├── backend
│   ├── src
│   │   ├── app.ts               # Main entry point for the server
│   │   ├── routes
│   │   │   └── noteRoutes.ts     # Routes for the note APIs
│   │   ├── controllers
│   │   │   └── noteController.ts # Logic for handling requests
│   │   └── db.ts                 # Database connection using MariaDB
│   ├── .env                      # Environment variables (not included in repo)
│   ├── package.json
│   └── tsconfig.json             # TypeScript configuration
├── frontend
│   ├── index.html                # Frontend HTML
│   ├── style.css                 # Frontend styling
│   └── script.js                 # Frontend JavaScript logic
├── README.md
└── .gitignore


