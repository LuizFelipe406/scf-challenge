import { push } from "./fakeData";

export default function (req, res) {
  const { name, job } = req.body;

  const newUser = {
    name,
    job,
  };

  push(newUser);

  return res.send(newUser);
}
