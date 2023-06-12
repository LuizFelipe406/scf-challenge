import data from "./fakeData.js";

export default function (req, res) {
  const { name } = req.query;

  const searchedUser = data.find((user) => user.name === name);

  if (searchedUser) {
    return res.send(`Usuário ${name} foi lido ${searchedUser.accesses} vezes`);
  }
  return res.send("User not found");
}
