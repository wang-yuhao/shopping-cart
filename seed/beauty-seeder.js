var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var beauty = [
    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20001.jpg',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),

    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20002.jpg',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),
];

var done = 0;

for (var i = 0; i < beauty.length; i++){
    beauty[i].save(function(err, result){
        done++;
        if (done === beauty.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
