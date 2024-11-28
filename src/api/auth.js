// src/api/auth.js

// URL base para la API, donde se realizarán las solicitudes
const API_URL = "https://backend2-h2re.onrender.com/api";

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Función para iniciar sesión de un usuario
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};