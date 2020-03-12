const fruitsList = [
    {"id": 1, "type": "apple", "name": "McIntosh"},
    {"id": 2, "type": "pear", "name": "Concorde"},
    {"id": 3, "type": "apple", "name": "Golden Delicious"},
    {"id": 4, "type": "pear", "name": "Bosc"},
    {"id": 5, "type": "orange", "name": "Valencia"},
    {"id": 6, "type": "apple", "name": "Granny Smith"},
    {"id": 7, "type": "orange", "name": "Hamlin"}
];

const getFruits = (req, res) => 
    res.send(fruitsList);

const addFruit = (req, res) => {
    const fruit = req.body;
    fruit.id = (fruitsList.slice(-1)[0] || {id: 0}).id + 1;
    fruitsList.push(fruit);
    res.send(fruit);
}

const removeFruit = (req, res) => {
    const id = req.params.id;
    const index = fruitsList.findIndex(fruit => fruit.id === parseInt(id));
    if(index > -1) {
        const removedFruit = fruitsList.splice(index, 1);
        res.send(removedFruit);
    } else {
        res.status(404).send('Not found');
    }
}

module.exports = {
    getFruits,
    addFruit,
    removeFruit
};