//#region BD functions
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
// async function main() {
//   const user = await prisma.user.create({ data: { email: "Xqk2s@example.com", password: "blabla", address: "", id_departamento: 1, id_municipio: 1 } });
//   console.log(user);
// }

/**
 * Retrieves a user from the database based on the provided email.
 *
 * @param {string} email - The email of the user to retrieve.
 * @return {Promise<User>} A promise that resolves to the retrieved user object.
 */
async function get(email: string): Promise<User> {
  let user = await prisma.user.findUnique({ where: { email: email } });
  if (!user || !user.email) return { email: "", name: "", password: "", address: "", id_departamento: "", id_municipio: "" };
  return user;
}
/**
 * Creates a new user in the database with the provided user data.
 *
 * @param {User} userToAdd - The user data to add to the database.
 * @return {Promise<User>} A promise that resolves to the added user object.
 */
async function add(userToAdd: User): Promise<User> {
  // let addedUser = await prisma.user.create({ data: userToAdd });
  // if (!addedUser || !addedUser.email) throw new Error("User not added");
  // return addedUser;
  return prisma.user.create({ data: userToAdd });
}

// async function listMessages(filterUser: string): Promise<Array<Message>> {
//   //TODO: Find a better way to send the filter
//   if (filterUser !== "undefined") {
//     let filter: Filter = {};
//     filter.user = filterUser;
//     return prisma. .find(filter);
//   }

//   return Model.find();
// }

// //TODO: Find a better way that to send an any

// async function updateText(id: string, message: string): Promise<Message> {
//   let foundMessage: any = await Model.findById(id);
//   foundMessage.message = message;
//   foundMessage.save();
//   return foundMessage;
// }

// async function deleteMessage(id: string): Promise<any> {
//   return await Model.findByIdAndDelete(id);
// }

// //#endregion

// export { listMessages, getMessage, addMessage, updateText, deleteMessage, Message };
export { get, add };
