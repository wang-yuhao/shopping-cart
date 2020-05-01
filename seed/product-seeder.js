var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10001.png',
        title:'爱他美 白金版 婴儿奶粉（1岁后）600g',
        description:'使用PRONUTRA配方，无需调味即可生产的APTAMIL PRONUTRA儿童牛奶1+，每天都能为您的孩子在当前发育阶段所需的最佳营养供应提供支持。维生素A和C自然可以促进正常的免疫系统。维生素D和钙支持骨骼的正常生长和发育。碘对于甲状腺功能和生长很重要。随着年龄的增长降低蛋白质含量。本产品适合1岁以上儿童。在准备和存储APTAMIL®儿童牛奶1+时，请遵循使用说明。 始终准备新鲜并立即喂食。 不要重复使用剩菜剩饭。 APTAMIL®儿童牛奶1+可以冷热配制。 请勿在微波炉中加热APTAMIL®儿童牛奶1+（有过热的危险）。 1.如有必要，煮沸新鲜的饮用水，使其冷却至约40°C。 2.将所需量的水放入杯子或马克杯中。 用随附的量匙（满）添加所需量的粉末。 3.搅拌并检查饮用温度（约37°C）。',
        price: '149'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10002.png',
        title:'爱他美 白金版 婴儿奶粉（2岁后）600g',
        description:'使用PRONUTRA配方，无需调味即可生产的APTAMIL PRONUTRA儿童牛奶1+，每天都能为您的孩子在当前发育阶段所需的最佳营养供应提供支持。维生素A和C自然可以促进正常的免疫系统。维生素D和钙支持骨骼的正常生长和发育。碘对于甲状腺功能和生长很重要。随着年龄的增长降低蛋白质含量。本产品适合2岁以上儿童。在准备和存储APTAMIL®儿童牛奶1+时，请遵循使用说明。 始终准备新鲜并立即喂食。 不要重复使用剩菜剩饭。 APTAMIL®儿童牛奶1+可以冷热配制。 请勿在微波炉中加热APTAMIL®儿童牛奶1+（有过热的危险）。 1.如有必要，煮沸新鲜的饮用水，使其冷却至约40°C。 2.将所需量的水放入杯子或马克杯中。 用随附的量匙（满）添加所需量的粉末。 3.搅拌并检查饮用温度（约37°C）。',
        price: '149'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10003.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10004.png',
        title:'爱他美 婴儿奶粉 HA配方 Pre段（0-6个月）800g',
        description:'Awesome Game!!!',
        price: '26'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10005.png',
        title:'League of Legends',
        description:'Awesome Game!!!',
        price: '31'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10006.png',
        title:'Test',
        description:'Awesome Game!!!',
        price: '29'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10007.png',
        title:'Test',
        description:'Awesome Game!!!',
        price: '145'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10008.png',
        title:'Test',
        description:'Awesome Game!!!',
        price: '55'
    }),
    new Product({
        category: 'babycare',
        group: 'babymilch',
        imagePath: '/images/second-level-directory/babycare/babymilch/10009.jpg',
        title:'Testy',
        description:'Awesome Game!!!',
        price: '65'
    }),
    new Product({
        category: 'babycare',
        group: 'babyhautcream',
        imagePath: '/images/second-level-directory/babycare/babymilch/10001.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),
    new Product({
        category: 'babycare',
        group: 'babyhautcream',
        imagePath: '/images/second-level-directory/babycare/babyhautcream/11002.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),
    new Product({
        category: 'babycare',
        group: 'babyhautcream',
        imagePath: '/images/second-level-directory/babycare/babyhautcream/11001.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),
    new Product({
        category: 'babycare',
        group: 'babyhautcream',
        imagePath: '/images/second-level-directory/babycare/babyhautcream/11002.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),

    new Product({
        category: 'babycare',
        group: 'babynahrung',
        imagePath: '/images/second-level-directory/babycare/babynahrung/12001.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),

    new Product({
        category: 'babycare',
        group: 'babynahrung',
        imagePath: '/images/second-level-directory/babycare/babynahrung/12002.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),

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
