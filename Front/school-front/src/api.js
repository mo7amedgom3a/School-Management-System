
const API_BASE_URL = "http://localhost:5143/api/Student/2"; // Replace with your actual backend URL

async function fetchStudent() {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
let data = fetchStudent();

export default data;
