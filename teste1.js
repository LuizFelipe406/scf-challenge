import data from "./fakeData.js";

const getUser = (req, res, next) => {
  const { name } = req.query;

  const searchedUser = data.find((user) => user.name === name);

  if (searchedUser) {
    searchedUser.accesses += 1;
    res.send(searchedUser);
  } else res.send("User not found");
};

const getUsers = (req, res, next) => {
  res.send(data);
};

export default {
  getUser,
  getUsers,
};
