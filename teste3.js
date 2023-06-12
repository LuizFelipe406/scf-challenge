import data from "./fakeData";

export default function(req, res) {
  
    const { name } = req.query;

    const filteredArray = data.filter( user => user.name !== name );

    // efetivamente filtrou algo (tamanho menor)
    if ( filteredArray.length < data ) {
        data = [...filteredArray];
        return res.send("success");
    }
};