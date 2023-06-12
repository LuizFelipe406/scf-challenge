import data from "./fakeData.js";

export default function(req, res) {
    const { id } = req.query;
    const { name, job } = req.body;

    const user = data.find( user => user.id.toString() === id);

    if (user) {
        user.name = name;
        user.job = job;
        return res.send(user);
    }
    return res.send("User not found");
};