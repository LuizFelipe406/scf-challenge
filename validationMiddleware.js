import data from "./fakeData.js";

export default function validationMiddleware(req, res, next) {
  const { userId } = req.params;

  const user = data.find((user) => user.id.toString() === userId);
  
  if (user && user.role === "admin") next();
  else res.send("User not allowed");
}
