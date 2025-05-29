import { RouteParams, RouterContext } from "@oak/oak/router";
import { State } from "@oak/oak/application";
import Launches from "../models/launches.ts";

// Get all launches
const getAllLaunches = async (ctx: RouterContext<string>) => {
  ctx.response.body = await Launches.find();
};

// Add a new launch
const addNewLaunch = async (ctx: RouterContext<string>) => {
  const body = ctx.request.body;

  const launch = await body.json(); // Access parsed JSON content
  console.log(launch);
  // Save the new launch to the database
  const newLaunch = await Launches.insertOne(launch);
  ctx.response.status = 201;
  ctx.response.body = { success: true, data: newLaunch };
};

// Delete a launch
const deleteLaunch = (
  ctx: RouterContext<string, RouteParams<string>, State>,
) => {
  try {
    const { id } = ctx.params; // Access route parameters
    if (id) {
      console.log(`Deleting launch with ID: ${id}`);
      ctx.response.status = 200;
      ctx.response.body = { success: true, message: `Launch ${id} removed` };
    } else {
      ctx.response.status = 400;
      ctx.response.body = { success: false, message: "Launch ID is required" };
    }
  } catch (error) {
    console.error("Error processing request:", error);
    ctx.response.status = 500;
    ctx.response.body = { success: false, message: "Internal server error" };
  }
};

export { addNewLaunch, deleteLaunch, getAllLaunches };
