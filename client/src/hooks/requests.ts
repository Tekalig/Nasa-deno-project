// deno-lint-ignore-file no-explicit-any
const API_URL = "http://localhost:8000";

interface Launch {
  launchDate: Date;
  mission: string;
  rocket: string;
  target: string;
}

interface Response {
  ok: boolean;
}

// Load planets and return as JSON.
async function httpGetPlanets(): Promise<any[]> {
  // Load planets from API
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches(): Promise<any[]> {
  // ...existing code...
  const response = await fetch(`${API_URL}/launches`);
  return await response.json();
  
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch: Launch): Promise<Response> {
  // ...existing code...
  return await fetch(`${API_URL}/launches`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(launch),
  });
  
}

// Delete launch with given ID.
async function httpAbortLaunch(id: number): Promise<Response> {
  // ...existing code...
  return await fetch(`${API_URL}/launches/${id}`, {
    method: "delete",
  });
}

export { httpAbortLaunch, httpGetLaunches, httpGetPlanets, httpSubmitLaunch };
