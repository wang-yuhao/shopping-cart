var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        imagePath: 'https://i.ytimg.com/vi/ohqEvRTSge0/maxresdefault.jpg',
        title:'League of Legends',
        description:'Awesome Game!!!',
        price: '10'
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/BGtROJeMPeE/maxresdefault.jpg',
        title:'League of Lengend',
        description:'Awesome Game!!!',
        price: '22'
    }),
    new Product({
        imagePath: 'https://nexus.leagueoflegends.com/wp-content/uploads/2019/06/Banner_T2_Image_tnp3w61gzna8r2n3rojp.jpg',
        title:'League of Legends',
        description:'Awesome Game!!!',
        price: '33'
    }),
    new Product({
        imagePath: 'https://images.gamewatcherstatic.com/image/file/9/dd/104079/League-of-Legends-1.jpg',
        title:'War of Stone',
        description:'Awesome Game!!!',
        price: '26'
    }),
    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2c/Minions_2018_April_Fools_promo_01.jpg/revision/latest/scale-to-width-down/340?cb=20180406002550',
        title:'League of Legends',
        description:'Awesome Game!!!',
        price: '31'
    }),
    new Product({
        imagePath: 'https://www.riotgames.com/darkroom/1120/677a001b682745b03ff0e8a65a9c3fe0:5680ee78d6d25470affff4cfb843c23a/annieversary-final-1.png',
        title:'Test',
        description:'Awesome Game!!!',
        price: '29'
    }),
    new Product({
        imagePath: 'https://static1.squarespace.com/static/59af2189c534a58c97bd63b3/5adcf24088251bb54e3215e9/5c7ad074f4e1fc6a4a7a6bb9/1583241094897/League+of+Legends.jpg?format=2500w',
        title:'Test',
        description:'Awesome Game!!!',
        price: '145'
    }),
    new Product({
        imagePath: 'https://nexus.leagueoflegends.com/wp-content/uploads/2018/11/6LOL-GAME.INFO_.850x1000-px_c3x0jb1reydcpqtw6xtu.jpg',
        title:'Test',
        description:'Awesome Game!!!',
        price: '55'
    }),
    new Product({
        imagePath: 'https://www.esportsactivity.com/wp-content/uploads/2019/05/leagueoflegends-esportsactivity.jpg',
        title:'Testy',
        description:'Awesome Game!!!',
        price: '65'
    })
];

var done = 0;

for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
