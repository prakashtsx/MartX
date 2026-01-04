import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Prakash",
    email: "prakash@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

export default users;
