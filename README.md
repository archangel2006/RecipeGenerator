# Fridge Mate
AI Powered Recipe Generator


Turn a simple fridge photo into smart, creative, and healthy recipes using YOLOv8, FastAPI, and Google Gemini.

Fridge Mate helps users reduce food waste and daily confusion about “What should I cook?”
Upload a fridge image → detect ingredients → auto-generate recipes → cook smarter.

## 🚀 Overview

Fridge Mate is an AI-powered web application that:

-Detects food ingredients from an uploaded fridge image using YOLOv8n

Uses a Generative AI (Gemini API) to create recipes from detected items

Shows detailed, step-by-step instructions

Runs a FastAPI backend for inference + recipe generation

Has a React + TypeScript + Tailwind (Vite) frontend for a clean, fast UI

The system is built to be lightweight, fast, and deployable on common hosting platforms.

⭐ Key Features
🔍 1. Smart Ingredient Detection

Upload a fridge/pantry image

YOLOv8n detects common food items (vegetables, fruits, dairy, jars, bottles)

Optimized for quick inference and low compute

🍽️ 2. AI Recipe Generation

Uses Google Gemini LLM

Converts detected items into:

Simple everyday recipes

Detailed step-by-step instructions

Optional variations (vegan, high-protein, low-calorie, etc.)

🧠 3. Fully Automated Pipeline

Image → Preprocessing → Detection → Prompt → Recipe → Frontend display
All integrated inside FastAPI.

🧑‍🍳 4. Beginner-Friendly Meal Assistance

Generates easy-to-follow instructions, perfect for new cooks.

🗂️ 5. Modern, Fast UI

Built using React + TypeScript + Tailwind

Real-time image previews

Smooth display of detected ingredients & recipes

🏗️ Tech Stack
Frontend

React (Vite)

TypeScript

Tailwind CSS

Backend

FastAPI (Python)

Google Gemini API (LLM)

YOLOv8n (Ultralytics)

OpenCV + Pillow (Image preprocessing)

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
