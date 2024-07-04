import cors from './middlware/cors'
import axios from 'axios';
import data from '../../api'
const API_BASE_URL = "http://localhost:5143/api"; // Replace with your actual backend URL
export default async function fetchStudentData(id: number) {
  const studentUrl = `${API_BASE_URL}/Student/${id}`;
    try {
        const response = await fetch(studentUrl, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const body = await response.json();
        return body;
      } catch (error) {
        console.error(error);
      }
  }
  