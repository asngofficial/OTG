# OTG Photography Website

This document provides instructions on how to set up and run the OTG Photography website locally for testing and development.

## 1. Set up and Run the Flask Backend

**This must be run in a separate terminal tab/window.**

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
2.  **Create and activate a Python virtual environment:**
    *   **On Windows (PowerShell):**
        ```bash
        python -m venv venv
        .\venv\Scripts\Activate.ps1
        ```
    *   **On Windows (Command Prompt):**
        ```bash
        .\venv\Scripts\activate.bat
        ```
    *   **On macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```
3.  **Install dependencies:**
    ```bash
    pip install Flask Flask-SQLAlchemy Flask-Mail python-dotenv Flask-CORS
    ```
4.  **Configure Environment Variables:**
    Create a `.env` file in the `backend` directory with your email credentials for Flask-Mail.
    ```
    MAIL_USERNAME=your_email@example.com
    MAIL_PASSWORD=your_email_password
    ```
5.  **Run the Flask application:**
    ```bash
    python -m flask --app app run
    ```
    The backend will typically run on `http://127.0.0.1:5000`.

For more detailed backend instructions, including setting up Cal.com webhooks with ngrok, please see `backend/README.md`.

## 2. Run the Frontend Server

**This must be run in another separate terminal tab/window.**

1.  **Navigate to the project's root directory:**
    ```bash
    cd C:\Users\laolu\OneDrive\Desktop\GIT\OTG
    ```
2.  **Run a simple HTTP server for the frontend files:**
    ```bash
    python -m http.server
    ```
    This will typically serve your frontend on `http://localhost:8000`.

## 3. Access the Site

Open your web browser and go to `http://localhost:8000` to view the website.
