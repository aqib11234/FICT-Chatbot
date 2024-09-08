<h1>FICT Chatbot - GitHub Documentation</h1>

<h2>Description</h2>
<ul>
  <li>FICT Chatbot provides detailed information about the Faculty of ICT at BUITEMS.</li>
  <li>Features: course details, admissions info, department-specific data, and more.</li>
  <li>Uses FastAPI backend and React.js frontend with LLM for intelligent responses.</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repo:  
    <pre><code>git clone &lt;repo-url&gt;</code></pre>
  </li>
  <li>Install backend dependencies:  
    <pre><code>pip install -r requirements.txt</code></pre>
  </li>
  <li>Install frontend dependencies:  
    <pre><code>npm install</code></pre>
  </li>
  <li>Start backend:  
    <pre><code>uvicorn main:app --reload</code></pre>
  </li>
  <li>Start frontend:  
    <pre><code>npm start</code></pre>
  </li>
  <li>Access:  
    <pre><code>http://localhost:3000</code></pre>
  </li>
</ol>

<h2>Usage</h2>
<ul>
  <li>Write or speak queries about FICT.</li>
  <li>Get real-time answers on courses, teachers, and admissions.</li>
</ul>

<h2>Project Structure</h2>
<ul>
  <li><strong>Frontend:</strong> React.js, UI components.</li>
  <li><strong>Backend:</strong> FastAPI, LLM, FAISS.</li>
  <li><strong>Static:</strong> Assets like images and styles.</li>
</ul>

<h2>APIs</h2>
<ul>
  <li><strong>GET /query:</strong> Fetches the user’s query.</li>
  <li><strong>POST /generate:</strong> Processes and generates a response.</li>
  <li><strong>GET /course_list:</strong> Returns course details.</li>
</ul>

<h2>Libraries & Frameworks</h2>
<ul>
  <li><strong>Backend:</strong> FastAPI, LangChain, FAISS.</li>
  <li><strong>Frontend:</strong> React.js, Axios.</li>
  <li><strong>ML Libraries:</strong> Hugging Face, FAISS.</li>
</ul>
<h2>Screenshots</h2>
<p>(<img width="948" alt="6" src="https://github.com/user-attachments/assets/35d0742a-0214-4e6f-a449-cb66d89e32f2">
<img width="949" alt="3" src="https://github.com/user-attachments/assets/c2fe4367-fe52-469e-bdf9-dda4c3905f15">
<img width="949" alt="2" src="https://github.com/user-attachments/assets/526f6daf-cd53-4b67-a5a1-9bc33e5225e2">
<img width="949" alt="1" src="https://github.com/user-attachments/assets/298a7a29-f65a-4198-94ae-f857545041c9">


)</p>

