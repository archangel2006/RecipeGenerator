# 🍳 Fridge Mate

AI Powered Recipe Generator 
> Turn a fridge photo into smart recipe suggestions using YOLOv8, FastAPI, and Google Gemini.

---

##  Overview
Fridge Mate is an AI-based web app that:
- Detects ingredients from fridge images using **YOLOv8n**
- Generates recipes using **Google Gemini LLM**
- Shows step-by-step cooking instructions
- Uses **FastAPI backend** + **React frontend** for a smooth workflow

---

1. Smart Ingredient Detection
- Upload a fridge/pantry image
- YOLOv8n detects common food items (vegetables, fruits, dairy, jars, bottles)
- Optimized for quick inference and low compute

2. AI Recipe Generation
- Uses Google Gemini LLM
- Converts detected items into:
   - Simple everyday recipes
   - Detailed step-by-step instructions
   
3. Fully Automated Pipeline
- Image → Preprocessing → Detection → Prompt → Recipe → Frontend display
- All integrated inside FastAPI.

4. Beginner-Friendly Meal Assistance
- Generates easy-to-follow instructions, perfect for new cooks.

 5. Modern, Fast UI
- Built using React + TypeScript + Tailwind
- Real-time image previews
- Smooth display of detected ingredients & recipes  

---

## 🏗️ Tech Stack

### 🔹 Frontend
- React (Vite)
- TypeScript
- TailwindCSS

### 🔹 Backend
- FastAPI (Python)
- YOLOv8n (Ultralytics)
- Google Gemini API
- OpenCV
- Pillow

## Technology

- **YOLOv8n** → Lightweight + fastest version, ideal for quick inference in a web project  
- **FastAPI** → Faster than Flask, async, auto-docs, perfect for ML APIs  
- **React (Vite)** → Fast dev environment, smooth UI, instant hot reload  
- **Pillow** → Format conversion + dimension prep for ML models  
- **OpenCV** → Pixel-level operations (resizing, color channels, etc.)  
- **Gemini API** → Strong reasoning + natural recipe generation  

---

## 📐 Architecture

```
                [Frontend: React + Vite]
                         |
                 Image Upload (JPG/PNG)
                         |
                         v
            [FastAPI Backend (Python)]
   ┌────────────────────────────────────────┐
   │   1. Preprocess Image (Pillow, OpenCV) │
   │   2. Ingredient Detection (YOLOv8n)    │
   │   3. Prompt Engineering                │
   │   4. Gemini API Recipe Generation      │
   └────────────────────────────────────────┘
                         |
                         v
               JSON Response (Ingredients + Recipe)
                         |
                         v
                Recipe UI Display (Frontend)
```

---
🧪 Core Functional Workflow
1️⃣ User uploads image
- Frontend sends image → FastAPI receives file.

2️⃣ Image Processing
- Pillow normalizes image format
- OpenCV handles resizing, color channels, and drawing (if needed)

3️⃣ YOLOv8n Detection
- Model infers bounding boxes + labels
- Extracts ingredients list

4️⃣ LLM Recipe Generation

A custom prompt sends:
- Ingredient list
- User preferences (optional)
- Required style (simple/stepwise/healthy)
- Gemini returns the final recipe text.

5️⃣ Response to Frontend

Frontend displays:
- Detected items
- Recipe title
- Steps
-Tips or variations

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
