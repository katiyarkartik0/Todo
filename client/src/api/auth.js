// import { ENDPOINT } from "../constants";

const ENDPOINT = "http://localhost:3001"

export const userLogin = async (userCredentials) =>
  await fetch(`${ENDPOINT}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
  });

export const userSignup = async (userCredentials) =>
  await fetch(`${ENDPOINT}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
  });
