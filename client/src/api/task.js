const ENDPOINT = "http://localhost:3001";

export const fetchTasks = async (accessToken) =>
  await fetch(`${ENDPOINT}/api/tasks/getTasks`, {
    method: "GET",
    headers: { authorization: `JWT ${accessToken}` },
  });

export const createTask = async ({ accessToken, task }) =>
  await fetch(`${ENDPOINT}/api/tasks/createTask`, {
    method: "POST",
    headers: {
      authorization: `JWT ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task }),
  });

export const updateTask = async ({ accessToken, task }) =>
  await fetch(`${ENDPOINT}/api/tasks/updateTask`, {
    method: "PUT",
    headers: {
      authorization: `JWT ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task }),
  });
