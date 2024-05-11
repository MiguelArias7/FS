// import { listMessages as list, getMessage as getOne, addMessage as add, updateText, deleteMessage as deleteById, Message } from "./storage";
import { User } from "@prisma/client";
import { get, add } from "./storage";
import { hash } from "bcrypt";

/**
 * Retrieves a user from the database based on the provided ID.
 *
 * @param {string} email - The email of the user to retrieve.
 * @return {Promise<User>} A promise that resolves to the retrieved user object.
 */
async function getUser(email: string): Promise<User> {
  if (!email) throw new Error("Email was not provided");
  return get(email);
}

/**
 * Adds a new user to the system.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {string} address - The address of the user.
 * @param {number} id_departamento - The ID of the department the user belongs to.
 * @param {number} id_municipio - The ID of the municipality the user belongs to.
 * @return {Promise<User>} A promise that resolves to the newly created user object.
 */
async function addUser(email: string, name: string, password: string, address: string, id_departamento: string, id_municipio: string): Promise<User> {
  if (!email || !name || !password || !address || !id_departamento || !id_municipio) throw new Error("Not all info was provided.");

  let user: User = await getUser(email);
  if (user.email) throw new Error("User already exists");

  let userToAdd: User = {
    name: name,
    email: email,
    password: await hash(password, 10),
    address: address,
    id_departamento: id_departamento,
    id_municipio: id_municipio,
  };

  return add(userToAdd);
}

export { getUser, addUser };
