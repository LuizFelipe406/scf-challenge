import { find } from "./fakeData";

export default  function(req, res) {
    const { id } = req.query;
    const { name, job } = req.body;

    const user = find( user => user.id === id);

    if (user) {
        user.name = name;
        user.job = job;
    }

    return res.send(user);
};