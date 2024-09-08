# FICT-Chatbot
 The FICT Chatbot is an intelligent assistant designed to provide detailed information about the Faculty of Information and Communication Technologies (FICT) at BUITEMS University. It offers details regarding admissions, courses, departments, teachers, schedules, and other academic resources. The chatbot utilizes natural language processing and machine learning to deliver accurate responses, with support for both written and spoken queries.

Built using FastAPI for the backend and React.js for the frontend, the project leverages powerful AI models like LLM (Large Language Model) and FAISS for efficient query handling and response generation.

<h3>Table of Contents<h3>
Installation
Usage
Project Structure
APIs
Libraries & Frameworks
Contributing
License
Contact
Installation
Clone the repository

bash
Copy code
git clone <repo-url>
cd fict-chatbot
Install Backend Dependencies

Navigate to the backend directory and install Python dependencies:
bash
Copy code
cd backend
pip install -r requirements.txt
Install Frontend Dependencies

Navigate to the frontend directory and install Node.js packages:
bash
Copy code
cd frontend
npm install
Run the Backend

Start the FastAPI backend server:
bash
Copy code
uvicorn main:app --reload
Run the Frontend

Start the React frontend:
bash
Copy code
npm start
Access the Application

Open your browser and navigate to http://localhost:3000 to interact with the chatbot.
Usage
Interacting with the Chatbot

Write or speak a query about FICT (e.g., "What are the courses offered in Computer Science?").
The chatbot will process the input and display the relevant information, such as course details, admission requirements, or teacher profiles.
Key Features

Query Handling: Write or speak queries to ask about FICT-related information.
Natural Language Processing: The chatbot intelligently processes complex queries and provides accurate answers.
Real-time Responses: The chatbot fetches and displays information in real-time.
Project Structure
/frontend
Contains the React.js frontend, including components like NavBarr, CustomCarousel, and the chat interface.
/backend
Houses the FastAPI backend, including main.py, which handles API routes, and llm.py, which integrates the LLM and FAISS for query processing.
/static
Contains static assets like images and styles.
APIs
GET /query

<h3>Description<h3>: Fetches the query provided by the user.
Parameters: query (string) - The user's written or spoken query.
Response: Returns relevant information about FICT.
POST /generate

<h3>Description<h3>: Processes the user's query and returns a generated response.
Parameters: query (string) - The user's question.
Response: Returns the generated answer based on the query and underlying data.
GET /course_list

Description: Provides the list of courses for each department in FICT.
Response: List of available courses with prerequisites and credit hours.
Libraries & Frameworks
Backend

FastAPI: High-performance backend framework for building APIs.
LangChain: For working with large language models (LLMs).
FAISS: Efficient retrieval of vector embeddings for query search.
PyPDF2: Used for extracting text from PDFs.
Frontend

React.js: User interface framework for building dynamic web applications.
Axios: To make HTTP requests from React to the FastAPI backend.
AI/ML Libraries

Hugging Face Transformers: For embedding queries using the "BAAI/bge-large-en-v1.5" model.
FAISS (Facebook AI Similarity Search): For fast document retrieval and indexing.
Contributing
Fork the repository

bash
Copy code
git clone https://github.com/yourusername/fict-chatbot
Create a new branch

bash
Copy code
git checkout -b feature-branch
Make your changes and commit

bash
Copy code
git commit -m "Add new feature"
Push the branch to your fork

bash
Copy code
git push origin feature-branch
Submit a Pull Request
