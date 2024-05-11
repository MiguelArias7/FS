import { User } from "@prisma/client";
import { addUser, getUser } from "./controller";
import { get, add } from "./storage";

jest.mock("./storage");

const getMock = get as jest.MockedFunction<typeof get>;
const addMock = add as jest.MockedFunction<typeof add>;

describe("get(email) function", () => {
  it("should return the user object with the matching email", async () => {
    const expectedUser: User = {
      email: "test@example.com",
      name: "John Doe",
      password: "hashedPassword",
      address: "123 Main Street",
      id_departamento: "",
      id_municipio: "",
    };
    getMock.mockResolvedValueOnce(expectedUser);

    const user = await getUser(expectedUser.email);
    expect(user).toEqual(expectedUser);
  });

  it("should return an empty user object for invalid email", async () => {
    const invalidEmail = "";
    await expect(() => getUser(invalidEmail)).rejects.toEqual(new Error("Email was not provided"));
  });
});

describe("addUser(email, name, password, address, id_departamento, id_municipio) function", () => {
  it("should add a new user to the database", async () => {
    const newUser: User = {
      email: "test@example.com",
      name: "John Doe",
      password: "123456",
      address: "123 Main Street",
      id_departamento: "3",
      id_municipio: "4",
    };
    const expectedUser: User = {
      email: "",
      name: "",
      password: "",
      address: "",
      id_departamento: "",
      id_municipio: "",
    };

    getMock.mockResolvedValueOnce(expectedUser);
    addMock.mockResolvedValueOnce(newUser);
    const user = await addUser(newUser.email, newUser.name, newUser.password, newUser.address, newUser.id_departamento, newUser.id_municipio);
    expect(user).toEqual(newUser);
  });

  it("should throw an error if the user/email already exists", async () => {
    const newUser: User = {
      email: "test@example.com",
      name: "Andres Perez",
      password: "123456",
      address: "123 Main Street",
      id_departamento: "3",
      id_municipio: "4",
    };
    const expectedUser: User = {
      email: "test@example.com",
      name: "John Doe",
      password: "159357",
      address: "159 Second Street",
      id_departamento: "5",
      id_municipio: "6",
    };

    getMock.mockResolvedValueOnce(expectedUser);
    addMock.mockResolvedValueOnce(newUser);
    await expect(() => addUser(newUser.email, newUser.name, newUser.password, newUser.address, newUser.id_departamento, newUser.id_municipio)).rejects.toEqual(new Error("User already exists"));
  });

  it("should throw an error if the information is not provided", async () => {
    const newUser: User = {
      email: "test@example.com",
      name: "Andres Perez",
      password: null,
      address: "123 Main Street",
      id_departamento: null,
      id_municipio: "4",
    };
    const expectedUser: User = {
      email: "",
      name: "",
      password: "",
      address: "",
      id_departamento: "",
      id_municipio: "",
    };

    getMock.mockResolvedValueOnce(expectedUser);
    addMock.mockResolvedValueOnce(newUser);
    await expect(() => addUser(newUser.email, newUser.name, newUser.password, newUser.address, newUser.id_departamento, newUser.id_municipio)).rejects.toEqual(new Error("Not all info was provided."));
  });
});
