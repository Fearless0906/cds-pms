export const BASE_URL = "http://127.0.0.1:8000/api/v1";

export const getProjects = async (token: string) => {
  const response = await fetch(`${BASE_URL}/pms/projects/`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/pms/tasks/`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
};
