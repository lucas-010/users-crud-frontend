import axios from "axios";
import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get("http://localhost:8080/user");
  console.log(response);
  return response.data;
};
