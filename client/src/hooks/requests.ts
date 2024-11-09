// deno-lint-ignore-file no-explicit-any
const API_URL = 'v1';

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
  // ...existing code...
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches(): Promise<any[]> {
  // ...existing code...
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch: Launch): Promise<Response> {
  // ...existing code...
}

// Delete launch with given ID.
async function httpAbortLaunch(id: number): Promise<Response> {
  // ...existing code...
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
