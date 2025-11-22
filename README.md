# RecipeGenerator
AI Powered Recipe Generator


---

## 📁 Project Structure

```
RecipeGenerator/
│── requirements.txt        # Backend dependencies
│── Frontend/               # React application
│── Backend/                # FastAPI backend
```
This project contains a **FastAPI backend** for image-based ingredient detection and recipe generation, and a **React (Vite) frontend** for user interaction.

---

## Backend Setup (FastAPI + Python)

**Run all backend commands inside:**

```
RecipeGenerator/Backend
```

### 1️⃣ Create a virtual environment

```
cd RecipeGenerator/Backend
python -m venv .venv
```

### 2️⃣ Activate the virtual environment

PowerShell:

```
.\.venv\Scripts\Activate.ps1
```

### 3️⃣ Install backend dependencies

Requirements file is in the project root, so install using:

```
pip install -r ../requirements.txt
```

### 4️⃣ Run the FastAPI backend

```
uvicorn app:app --reload --port 8000
```

Backend will now run at:

```
http://localhost:8000
```

API Endpoint:

```
POST /detect_and_generate
```

---

## ⚛️ Frontend Setup (React)

**Run all frontend commands inside:**

```
RecipeGenerator/Frontend
```

### 1️⃣ Install React dependencies

```
cd RecipeGenerator/Frontend
npm install
```

### 2️⃣ Start the development server

```
npm run dev
```

React will run on a port such as:

```
http://localhost:5173
```

Make sure your React API calls point to:

```
http://localhost:8000/detect_and_generate
```

---

## 🔁 Connecting Frontend with Backend

Ensure **both** are running:

* Backend → `http://localhost:8000`
* Frontend → `http://localhost:5173`

If the backend port is different, update the frontend fetch URL accordingly.

---

## 🧪 Testing the Backend

You can test the backend using `curl`, Postman, or a file upload client.

Example (PowerShell):

```
curl -X POST -F "file=@image.jpg" http://localhost:8000/detect_and_generate
```

---

## 🛠️ Troubleshooting

### ❌ "uvicorn: command not found"

- venv not activated OR uvicorn not installed.

```
.\.venv\Scripts\Activate.ps1
pip install -r ../requirements.txt
```

Then run:

```
uvicorn app:app --reload --port 8000
```

### ❌ `Failed to load resource: net::ERR_CONNECTION_REFUSED`

 - React is trying to call the backend but the backend is not running on the expected port.

* Ensure backend is running on **port 8000**
* If backend runs on a different port, update frontend API URL.

### ❌ CORS errors

-  Frontend is on a different port.

CORS is already enabled with:
```
allow_origins=["*"]
```
If needed, restart backend.

### ❌ `.venv\Scripts\activate` not working on PowerShell

Use the correct command:

```
.\.venv\Scripts\Activate.ps1
```

If permission error:

```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### ❌ `ModuleNotFoundError: No module named 'detect'`

- Running uvicorn from the wrong directory.

Run from inside Backend:

```
cd RecipeGenerator/Backend
uvicorn app:app --reload --port 8000
```

---
