import data from "./fakeData";

const getUser = (req, res, next) => {
  const { name } = req.query;

  const searchedUser = data.find((user) => user.name === name);

  if (searchedUser) res.send(searchedUser);
  else next("User not found");
};

const getUsers = (req, res, next) => {
  res.send(data);
};

export default {
  getUser,
  getUsers,
};
