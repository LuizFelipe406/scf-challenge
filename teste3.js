import data from "./fakeData.js";

export default function (req, res) {
  const { name } = req.query;

  const userIndex = data.findIndex(user => user.name === name);

  if (userIndex !== -1) {
    data.splice(userIndex, 1);
    return res.send("success");
  }
  return res.send("User not found");
}
