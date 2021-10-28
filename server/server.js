let path = require('path');
let fs = require('fs');
const { dirname } = require('path');
const request = require('request');                                                                                                                                                                                                       

const dataPath = path.join(__dirname, '../chirps.json');

const chirpArray = [
    {username: 'Tristan', chirpText: 'I want to take cookies to school today!'},
    {username: 'Jake', chirpText: 'See you all around!'},
    {username: 'Josh', chirpText: 'Walk through at 1pm!'},
    {username: 'Garrett', chirpText: 'I will eat an onion if everyone turn their labs in on time!'},
    {username: 'KyeJuana', chirpText: 'At this moment, I think I like this better...then again...NOOOO!'},
]
request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath,item.data.title + '/n');
    });

    fs.writeFile('chirps.json', JSON.stringify(chirps), (err) => {
        if (err) console.log(err);
    });

    fs.readFile('chirps.json', (err, data) => {
        if  (err) console.log(err);
        console.log(data.toString());
    });
});