import data from "./fakeData";

export default function (req, res) {
  const { name } = req.query;

  const searchedUser = data.find((user) => user.name === name);

  if (searchedUser) {
    res.send(`Usuário ${name} foi lido ${searchedUser.accesses} vezes`);
  }
}
