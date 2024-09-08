Description
FICT Chatbot provides detailed information about the Faculty of ICT at BUITEMS.
Features: course details, admissions info, department-specific data, and more.
Uses FastAPI backend and React.js frontend with LLM for intelligent responses.
Installation
Clone the repo:
git clone <repo-url>
Install backend dependencies:
pip install -r requirements.txt
Install frontend dependencies:
npm install
Start backend:
uvicorn main:app --reload
Start frontend:
npm start
Access:
http://localhost:3000
Usage
Write or speak queries about FICT.
Get real-time answers on courses, teachers, and admissions.
Project Structure
Frontend: React.js, UI components.
Backend: FastAPI, LLM, FAISS.
Static: Assets like images and styles.
APIs
GET /query: Fetches the user’s query.
POST /generate: Processes and generates a response.
GET /course_list: Returns course details.
Libraries & Frameworks
Backend: FastAPI, LangChain, FAISS.
Frontend: React.js, Axios.
ML Libraries: Hugging Face, FAISS.
Contributing
Fork repo and create a branch.
Commit changes and submit a pull request.
