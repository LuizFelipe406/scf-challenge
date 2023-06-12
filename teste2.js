import data from "./fakeData.js";

export default function (req, res) {
  const { name, job } = req.body;

  const newUser = {
    id: data[data.length - 1].id + 1,
    name,
    job,
    accesses: 0,
    role: "user"
  };

  data.push(newUser);

  return res.send(newUser);
}
