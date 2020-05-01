var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10001.png',
        title:'爱他美 白金版 婴儿奶粉（1岁后）600g',
        description:'使用PRONUTRA配方，无需调味即可生产的APTAMIL PRONUTRA儿童牛奶1+，每天都能为您的孩子在当前发育阶段所需的最佳营养供应提供支持。维生素A和C自然可以促进正常的免疫系统。维生素D和钙支持骨骼的正常生长和发育。碘对于甲状腺功能和生长很重要。随着年龄的增长降低蛋白质含量。本产品适合1岁以上儿童。在准备和存储APTAMIL®儿童牛奶1+时，请遵循使用说明。 始终准备新鲜并立即喂食。 不要重复使用剩菜剩饭。 APTAMIL®儿童牛奶1+可以冷热配制。 请勿在微波炉中加热APTAMIL®儿童牛奶1+（有过热的危险）。 1.如有必要，煮沸新鲜的饮用水，使其冷却至约40°C。 2.将所需量的水放入杯子或马克杯中。 用随附的量匙（满）添加所需量的粉末。 3.搅拌并检查饮用温度（约37°C）。',
        price: '149'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10002.png',
        title:'爱他美 白金版 婴儿奶粉（2岁后）600g',
        description:'使用PRONUTRA配方，无需调味即可生产的APTAMIL PRONUTRA儿童牛奶1+，每天都能为您的孩子在当前发育阶段所需的最佳营养供应提供支持。维生素A和C自然可以促进正常的免疫系统。维生素D和钙支持骨骼的正常生长和发育。碘对于甲状腺功能和生长很重要。随着年龄的增长降低蛋白质含量。本产品适合2岁以上儿童。在准备和存储APTAMIL®儿童牛奶1+时，请遵循使用说明。 始终准备新鲜并立即喂食。 不要重复使用剩菜剩饭。 APTAMIL®儿童牛奶1+可以冷热配制。 请勿在微波炉中加热APTAMIL®儿童牛奶1+（有过热的危险）。 1.如有必要，煮沸新鲜的饮用水，使其冷却至约40°C。 2.将所需量的水放入杯子或马克杯中。 用随附的量匙（满）添加所需量的粉末。 3.搅拌并检查饮用温度（约37°C）。',
        price: '149'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10003.png',
        title:'爱他美 白金版 婴儿奶粉 2段（6个月后）800g',
        description:'与GOS / FOS纤维混合 维生素C和D有助于健康的免疫系统 最高含量的APTAMIL®HMO HMOS自然存在于母乳中 APTAMIL®PROFUTURA补充乳是根据我们NUTRICIA对母乳和儿童早期营养研究的最新发现开发的。 它们具有专利配方的独特配方使它们成为母乳喂养后最先进，最创新的配方之一。 理想地适合您的宝宝在第6个月后的营养需求。准备婴儿牛奶食品时，请遵循使用说明。 由于有害细菌的滋生，准备不当会导致健康问题。 每餐前都要新鲜准备食物，并立即喂食。 不要重复使用剩菜剩饭。 彻底清洁奶瓶，奶嘴和戒指。 请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，并向瓶中添加所需量的水的2/3。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。 3.将所需量的粉末放入瓶中。 关闭瓶子并剧烈摇晃，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。 4.打开瓶子，装上奶嘴。 检查瓶内饮料的饮用温度（约37°C）。',
        price: '299'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10004.png',
        title:'爱他美 婴儿奶粉 HA配方 Pre段（0-6个月）800g',
        description:'使用LCP（长链多不饱和脂肪酸）专利纤维混合物 为您的宝宝量身定制 出生时的APTAMIL PRE牛奶是专门为宝宝在各个发育阶段的需求量身定制的。 它包含一种获得专利的纤维混合物和LCP-长链多不饱和脂肪酸，婴儿在最初的几个月中无法形成足够的自身。准备：准备APTAMIL PRE时，请遵循使用说明。由于有害细菌的滋生，准备和储存不当会导致健康问题。每餐前都要新鲜准备食物，并立即喂食。不要重复使用剩菜剩饭。彻底清洁奶瓶，奶嘴和戒指。请勿在微波炉中加热牛奶食品（有过热的危险）。 1.让新鲜的白开水冷却至约40°C，然后将所需量的水的2/3倒入瓶中。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。仅使用随附的量匙。 3.将所需量的粉末放入瓶中。剧烈关闭瓶子，并剧烈摇晃约10秒钟，倒入剩余的饮用水，然后再次剧烈摇晃瓶子中的内容物。用法用量：每个小瓶的饮料数量和数量各不相同。因此，规定的饮用量和每天的瓶数仅是建议的准则。量匙可容纳4.6克',
        price: '279'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10005.png',
        title:'爱他美 婴儿奶粉 Pre段（0-6个月）800g',
        description:'专利纤维混合物 使用GOS / FOS和BIFIDUS BREVE APTAMIL HA SYNEO PRE的诞生基于40多年的研究。 归功于蛋白质的轻柔分解，SYNEO的起始食品，GOS / FOS和BIFIDUS BREVE的独特结合，降低了对牛奶蛋白过敏的风险。 短双歧杆菌是自然存在于儿童肠道中的细菌家族的一部分。准备：准备APTAMIL HA PRE时，请遵循使用说明。由于有害细菌的滋生，准备和储存不当会导致健康问题。每餐前都要新鲜准备食物，并立即喂食。不要重复使用剩菜剩饭。彻底清洁奶瓶，奶嘴和戒指。请勿在微波炉中加热牛奶食品（有过热的危险）。 1.让新鲜的白开水冷却并在最高40°C的温度下使用。将所需量的水的2/3倒入瓶中。 2.要获得准确剂量的粉末，请在刮板上擦拭随附的量匙。仅使用随附的量匙。3.将所需量的粉末放入瓶中。关闭瓶，剧烈摇动约10秒钟，倒入剩余的饮用水，然后再次剧烈摇动瓶中的内容物。 4.打开瓶子，装上奶嘴。检查瓶内饮料的饮用温度（约37°C）。',
        price: '239'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10006.png',
        title:'爱他美 白金版 新生婴儿奶粉1 800g',
        description:'使用LCP（长链多不饱和脂肪酸） 专利纤维混合物 为您的宝宝量身定制 出生时的APTAMIL 1牛奶是专门为宝宝在各个发育阶段的需求量身定制的。 它包含一种获得专利的纤维混合物和LCP-长链多不饱和脂肪酸，婴儿在最初的几个月中无法形成足够的自身。准备：准备APTAMIL 1时，请遵循使用说明。由于有害细菌的滋生，准备和储存不当会导致健康问题。每餐前都要新鲜准备食物，并立即喂食。不要重复使用剩菜剩饭。彻底清洁奶瓶，奶嘴和戒指。请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，然后将所需量的水的2/3倒入瓶中。2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。仅使用随附的量匙。 3.将所需量的粉末放入瓶中。关闭瓶，剧烈摇动约10秒钟，倒入剩余的饮用水，然后再次剧烈摇动瓶中的内容物。 4.打开瓶子，装上奶嘴。检查瓶内饮料的饮用温度（约37°C）。',
        price: '239'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10007.png',
        title:'爱他美 白金版 6个月后补充奶粉2 800g',
        description:'含维生素A，C和D 有助于健康的免疫系统 含OMEGA-3脂肪酸（ALA） 支持正常的大脑和神经发育 具有GOS / FOS的专利纤维混纺 第6个月后的MILUPA APTAMIL 2后续奶具有特殊的营养成分，旨在支持宝宝的维生素D免疫系统。它含有OMEGA-3脂肪酸（ALA），有助于儿童正常生长发育。准备：准备APTAMIL 2时，请遵循使用说明。由于有害细菌的滋生，准备和储存不当会导致健康问题。每餐前都要新鲜准备食物，并立即喂食。不要重复使用剩菜剩饭。彻底清洁奶瓶，奶嘴和戒指。请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，然后将所需量的水的2/3倒入瓶中。 2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。仅使用随附的量匙。 3.将所需量的粉末放入瓶中。关闭瓶，剧烈摇动约10秒钟，倒入剩余的饮用水，然后再次剧烈摇动瓶中的内容物。 4.打开瓶子，装上奶嘴。检查瓶内饮料的饮用温度（约37°C）。',
        price: '239'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10008.png',
        title:'爱他美 白金版 10个月后补充奶粉3 800g',
        description:'含维生素A，C和D 有助于健康的免疫系统 含OMEGA-3脂肪酸（ALA）支持正常的大脑和神经发育 具有GOS / FOS的专利纤维混纺 适合10个月以上的MILUPA APTAMIL 3后续奶具有特殊的营养成分，旨在支持宝宝的维生素D免疫系统。它含有OMEGA-3脂肪酸（ALA），可促进儿童的正常生长发育。 准备：准备APTAMIL 3时，请遵循使用说明。由于有害细菌的滋生，准备和储存不当会导致健康问题。每餐前都要新鲜准备食物，并立即喂食。不要重复使用剩菜剩饭。彻底清洁奶瓶，奶嘴和戒指。请勿在微波炉中加热牛奶食品（有过热的危险）。1.让新鲜的白开水冷却至约40°C，然后将所需量的水的2/3倒入瓶中。2.要获得准确剂量的粉末，请擦去刮板上随附的量匙。仅使用随附的量匙。3.将所需量的粉末放入瓶中。关闭瓶，剧烈摇动约10秒钟，倒入剩余的饮用水，然后再次剧烈摇动瓶中的内容物。4.打开瓶子，装上奶嘴。检查瓶内饮料的饮用温度（约37°C）。',
        price: '239'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10009.jpg',
        title:'喜宝 HA Combiotik 婴儿奶粉 Pre段（0-6个月）600g',
        description:'具有低过敏原蛋白 珍贵成分的独特组合 用天然乳酸培养 基于牛奶营养研究的最新发现，HIPP NUTRITION SCIENCE从出生开始就使用HIPP起始牛奶PRE HACOMBIOTIK®开发了新一代的HA食品。 这正是针对易过敏婴儿在各自年龄段的特殊营养需求量身定制的。 它基于自然模式，从出生起就可以用作唯一食物或用于喂养母乳。准备婴儿食品时，请遵循使用说明。制备后的小瓶制备或存放时间较长，可能导致健康问题，例如B.由有害细菌的生长导致。每顿饭前都要新鲜准备食物，并立即进食。不要重复使用食物残渣。彻底清洁奶瓶，奶嘴和戒指。取出产品后，再次关闭打开的袋子，将其在室温下干燥存放，并在3周内用完。不要在微波炉中加热食物（有烫伤的危险）。 1）煮沸新鲜的饮用水，冷却至约40°-50°C *。 2）向小瓶中加入2/3的水。 3）松散地装满量匙，然后清除剩余的粉末。将建议量的粉末加到小瓶中。 4）关闭瓶子，并剧烈摇动。 5）加入剩余的水，剧烈摇动几次。 6）冷却至大约37°C的饮用温度。检查温度，例如使用HIPP温度计。 *为了不破坏天然乳酸菌（乳酸杆菌），请不要用太热的水烹制食物。由于原料的原因，粉末会发生自然的颜色波动。每个小瓶的饮用量可能会有所不同。建议的饮用量和每天的小瓶数量是准则。您的宝宝不必空着喝奶瓶。请仅使用随附的量匙！一把量匙相当于30毫升水。1-2周：每天5-7瓶餐，60毫升开水+ 2汤匙= 70ML即饮食品*除非医生另有建议。 3-4周：每天5-7瓶餐，90毫升开水+ 3汤匙= 100毫升即饮食品 5-6周：每天5-6瓶餐，120毫升开水+ 4汤匙= 135毫升即饮食品 7-8周：每天5瓶餐，150毫升开水+ 5汤匙= 170毫升即食食品 3-4个月：每天5瓶进餐，180毫升开水+ 6汤匙=200毫升即食食品 第5个月起：每天5瓶进餐，210毫升开水+ 7量匙= 210毫升即食食品',
        price: '239'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10010.png',
        title:'喜宝 HA2 Combiotik 婴儿奶粉（6个月后）600g',
        description:'第六个月后的HIPP后续牛奶HA2COMBIOTIK®是HIPP最新一代的HA食品。 它的过敏原蛋白含量低。 由于特别强大的蛋白质分解作用，它仅包含小的蛋白质结构单元。 6个月后，它可以作为混合饮食的一部分。准备婴儿食品时，请遵循使用说明。制备后的小瓶制备或存放时间较长，可能会导致健康问题，例如B.由有害细菌的生长导致。每顿饭前都要新鲜准备食物，并立即进食。不要重复使用食物残渣。彻底清洁瓶子，奶嘴和戒指。不要在微波炉中加热食物（有烫伤的危险）。1.）煮沸新鲜的饮用水，冷却至约40°-50°C *。2.）将提供的水的2/3倒入小瓶中。3.）松散地装满量匙，然后除去剩余的粉末。4.）将建议量的粉末加到小瓶中。5.）关闭瓶子，并剧烈摇动。6.）加入剩余的水，剧烈摇动几次。冷却至饮用温度约37°C。检查温度，例如使用HIPP温度计。*为了不破坏天然乳酸菌（乳酸杆菌），请不要用太热的水烹制食物。饮用量和剂量：每个小瓶的饮用量可能会有所不同。建议的饮用量和每天的小瓶数量是准则。您的宝宝不必喝空奶瓶。请仅使用随附的量匙！150毫升开水+ 5勺粉末= 170毫升即饮食品；180ML开水+ 6勺粉末= 200ML即饮食品；210毫升开水+ 7勺粉末= 235毫升即食食品  婴儿每天需要大约5顿进食。对于每种新近引入的玻璃杯和辅食，应省略一瓶。',
        price: '199'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10011.png',
        title:'喜宝 纯天然Combiotik 婴儿奶粉 Pre段（0-6个月）600g',
        description:'HIPP PRE BIO初生婴儿益生菌很容易消化，并针对婴儿的特殊营养需求量身定制。 精心挑选的有机成分以及珍贵成分沿自然界的独特组合。 每顿饭前都要新鲜准备食物，并立即进食。不要在微波炉中加热食物（有烫伤的危险）。准备婴儿牛奶食品时，请遵循使用说明。 1.）煮沸新鲜的饮用水，冷却至约40°-50°C *。2.）将提供的水的2/3倒入小瓶中。3.）松散地装满量匙，然后除去剩余的粉末。4.）将建议量的粉末加到小瓶中。5.）关闭瓶子，并剧烈摇动。6.）加入剩余的水，剧烈摇动几次。冷却至饮用温度约37°C。检查温度，例如使用HIPP温度计。*为了不破坏天然乳酸菌（乳酸杆菌），请不要用太热的水烹制食物。饮用量和剂量：每个小瓶的饮用量可能会有所不同。建议的饮用量和每天的小瓶数量是准则。您的宝宝不必喝空奶瓶。请仅使用随附的量匙！150毫升开水+ 5勺粉末= 170毫升即饮食品；180ML开水+ 6勺粉末= 200ML即饮食品；210毫升开水+ 7勺粉末= 235毫升即食食品  婴儿每天需要大约5顿进食。对于每种新近引入的玻璃杯和辅食，应省略一瓶。',
        price: '179'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10012.jpg',
        title:'喜宝 纯天然Combiotik 婴儿奶粉 2段（6-10个月）600g',
        description:'HIPP后续牛奶2 BIO COMBIOTIK包含天然乳酸培养物和OMEGA-3脂肪酸，适合7个月以上婴儿。每顿饭前都要新鲜准备食物，并立即进食。不要在微波炉中加热食物（有烫伤的危险）。准备婴儿牛奶食品时，请遵循使用说明。准备:1）煮沸新鲜的饮用水，冷却至约40°-50°C *。2）向小瓶中加入2/3的水。3）松散地装满量匙，然后清除剩余的粉末。将建议量的粉末加到小瓶中。4）关闭瓶子，并剧烈摇动。5）加入剩余的水，剧烈摇动几次。6）冷却至饮用温度（约37°C）。检查温度。 *为了不破坏天然乳酸菌（乳酸杆菌），请不要用太热的水烹制食物。饮用量<（>＆<）>剂量每个小瓶的饮用量可以单独变化。建议的饮用量和每天的小瓶数量是准则。您的宝宝不必喝空奶瓶。请仅使用随附的量匙！一把量匙相当于30毫升水。 每餐剂量：150毫升开水+ 5汤匙粉末= 170毫升即食食品   180毫升开水+ 6汤匙粉末= 200毫升即食食品   210毫升开水+ 7汤匙粉末= 235毫升即食食品  婴儿每天大约需要5顿饭 。 对于每种新近引入的玻璃杯和粥粉，都应省略小瓶粉。 *除非医生另有建议，否则请按照以下步骤进行操作。 **从第5个月起，您可以与儿科医生协商开始使用玻璃杯和辅食。婴儿每天需要大约五顿饭。对于每种新近引入的玻璃杯和粥粉，都应省略一瓶。',
        price: '169'
    }),
    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10013.jpg',
        title:'喜宝 纯天然Combiotik 婴儿奶粉 3段（10个月后）600g',
        description:'HIPP后续牛奶3 BIO COMBIOTIK适合从第10个月开始食用。 它包含OMEGA-3脂肪酸。 所有成分均来自有机生产。不要在微波炉中加热食物（有烫伤的危险）。准备:1）煮沸新鲜的饮用水，冷却至约40°-50°C *。2）向小瓶中加入2/3的水。3）松散地装满量匙，然后清除剩余的粉末。将建议量的粉末加到小瓶中。4）关闭瓶子，并剧烈摇动。5）加入剩余的水，剧烈摇动几次。6）冷却至饮用温度（约37°C）。检查温度。 *为了不破坏天然乳酸菌（乳酸杆菌），请不要用太热的水烹制食物。饮用量<（>＆<）>剂量每个小瓶的饮用量可以单独变化。建议的饮用量和每天的小瓶数量是准则。您的宝宝不必喝空奶瓶。请仅使用随附的量匙！一把量匙相当于30毫升水。150毫升开水+ 5汤匙粉末= 170毫升即食食品  180毫升开水+ 6汤匙粉末= 200毫升即食食品  210毫升开水+ 7汤匙粉末= 235毫升即食食品  婴儿每天需要大约五餐。对于每种新近引入的玻璃杯和粥粉，都应省略小瓶粉。',
        price: '239'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10014.jpg',
        title:'喜宝 纯天然Combiotik 婴儿奶粉 无淀粉 2段（6-10个月）600g',
        description:'使用PRONUTRA配方，无需调味即可生产的APTAMIL PRONUTRA儿童牛奶1+，每天都能为您的孩子在当前发育阶段所需的最佳营养供应提供支持。维生素A和C自然可以促进正常的免疫系统。维生素D和钙支持骨骼的正常生长和发育。碘对于甲状腺功能和生长很重要。随着年龄的增长降低蛋白质含量。本产品适合2岁以上儿童。每顿饭前都要新鲜准备食物，并立即进食。准备婴儿牛奶食品时，请遵循使用说明。不要在微波炉中加热食物（有烫伤的危险）。准备：1）煮沸新鲜的饮用水，冷却至约40°-50°C *。2）向小瓶中加入2/3的水。 3）松散地装满量匙，然后清除剩余的粉末。将建议量的粉末加到小瓶中。 4）关闭瓶子，并剧烈摇动。 5）加入剩余的水，剧烈摇动几次。 6）冷却至饮用温度（约37°C）。检查温度，然后将内容物倒入（饮用）杯中。 *为了不破坏天然乳酸菌（乳酸杆菌），请不要用太热的水烹制食物。每个小瓶的饮用量可能会有所不同。建议的饮用量和每天的小瓶数量是准则。您的宝宝不必喝空奶瓶。请仅使用随附的量匙！一把量匙相当于30毫升水。 1量匙=约4.7 G HIPP 2每餐BIOCOMBIOTIK®剂量  150毫升开水+ 5量匙粉末= 170毫升即食食品    180毫升开水+ 6量匙粉末= 200毫升即食食品  210毫升开水+ 7量匙粉末= 235毫升即饮食品  婴儿每天需要大约五餐。对于每种新近引入的玻璃杯和粥粉，都应省略小瓶粉。',
        price: '239'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10015.png',
        title:'喜宝 Combiotik 婴儿奶粉（2岁以上）600g',
        description:'HIPP儿童牛奶益生菌适用于2岁以下的儿童。 儿童牛奶中含有维生素A，C和D。准备HIPP儿童牛奶COMBIOTIK®2+时，请遵循使用说明。如果准备或储存时间不当，可能会导致健康问题，例如B.通过有害细菌的生长。每顿饭前都要新鲜准备食物，并立即进食。不要重复使用食物残渣，也不要在微波炉中加热儿童牛奶（有烫伤的危险）。 1.煮沸新鲜的饮用水，冷却至约40°-50°C。2.将所需量的冷水或温水倒入（饮用）杯中。3.松散装入量匙，并清除剩余的粉末。添加推荐量的粉末4.搅拌，必要时检查饮用温度（约37°C）。饮用量<（>和<）>剂量建议每天饮用2份HIPP儿童牛奶益生菌。建议的饮用量和每天的份量是准则。您的孩子不必完全倒空杯子。请仅使用随附的量匙！ 150毫升开水+ 5汤匙粉末= 170毫升即食食品',
        price: '149'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿奶粉 Babymilch',
        imagePath: '/images/second-level-directory/babycare/婴儿奶粉 Babymilch/10016.png',
        title:'喜宝 Combiotik 婴儿奶粉（1岁以上）600g',
        description:'HIPP儿童牛奶益生菌适用于1岁以上的儿童。 儿童牛奶中含有维生素A，C和D。准备HIPP儿童牛奶COMBIOTIK®1+时，请遵循使用说明。如果准备或储存时间不当，可能会导致健康问题，例如B.通过有害细菌的生长。每顿饭前都要新鲜准备食物，并立即进食。不要重复使用食物残渣，也不要在微波炉中加热儿童牛奶（有烫伤的危险）。 1.煮沸新鲜的饮用水，冷却至约40°-50°C。2.将所需量的冷水或温水倒入（饮用）杯中。3.松散装入量匙，并清除剩余的粉末。添加推荐量的粉末 4.搅拌，必要时检查饮用温度（约37°C）。饮用量<（>和<）>剂量建议每天饮用2份HIPP儿童牛奶益生菌。建议的饮用量和每天的份量是准则。您的孩子不必完全倒空杯子。请仅使用随附的量匙！ 150毫升开水+ 5汤匙粉末= 170毫升即食食品',
        price: '149'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11001.png',
        title:'金盏花霜婴儿沐浴乳 200m',
        description:'WELEDA婴儿金盏花霜沐浴露可轻柔清洁。它专为脆弱的婴儿皮肤的需求量身定制，并支持其天然弹性。浴室说服了经过认证的天然化妆品，并且纯素。',
        price: '139'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11002.png',
        title:'婴儿湿巾 80只',
        description:'从头到脚进行轻柔清洁 含芦荟和洋甘菊提取物 不含酒精',
        price: '22'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11003.png',
        title:'伤口保护霜 金盏花婴儿润肤霜',
        description:'WELEDA金盏花婴儿乳霜可自然保护尿布区域的敏感皮肤并防止疮疮。 经认证的天然化妆品中的杏仁和麻油可维持并促进皮肤再生。',
        price: '82'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11004.png',
        title:'WaterWipes 婴儿湿巾 540片',
        description:'纯湿巾 99.9％的水，0.1％的水果提取物 无添加剂 适合所有年龄段的新生儿和婴儿 减少过敏反应的风险 WATERWIPES湿巾是纯净的婴儿湿巾，不含添加剂-除0.1％的水果提取物具有天然抗菌作用外。 使用湿巾时，尽管没有化学清洁剂，但皮肤仍感觉柔软且有效清洁。 葡萄柚籽提取物具有护肤和保湿作用，有助于保持健康的皮肤状况。 它还具有天然的抗菌作用。',
        price: '379'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11005.png',
        title:'NATY 婴儿湿巾 504片',
        description:'超厚柔软湿巾 无味 为了出色的护理 不含酒精，氯，染料，对羟基苯甲酸酯，邻苯二甲酸盐 无味的NATY湿巾由100％FSC认证且完全不含氯的纤维素制成。 超厚和柔软的毛巾提供出色的护理。 它们不含酒精，氯，染料，对羟基苯甲酸酯和邻苯二甲酸酯。',
        price: '329'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11006.png',
        title:'Bübchen 婴儿护理初级套装 7件',
        description:'婴儿油400ML：向日葵种子油，BUTYROSPERMUM PARKII黄油，金盏菊提取物，柠檬酸，大豆大豆油，香精，生育酚 牛奶敏感性：水合，葵花籽油，山梨醇，聚甘油3二异硬脂酸酯，棕榈酸异丙酯，辛基十二烷醇，甘油，泛醇，己基癸醇，月桂基癸基癸酸酯，丁草香派克黄油，辛二醇，丙二醇，丙二醛，柠檬酸二乙酯谷氨酸，辛酸甘油酯，大豆大豆油，HELIOTROPINE，香精，丙二醇，氢氧化钠，生育酚 PFLEGE敏化霜：水，棕榈酸异丙酯，硬脂酸乙基己酯，聚甘油3聚蓖麻油酸酯，甘油，丙二醇，丁二醇，己基癸醇，己基十二烷基月桂酸酯，泛醇，杏苦杏仁苷，棕榈油，尿囊素，抗坏血酸，阿斯科尔酸，甘油甘油油酸酯，大豆大豆油，HELIOTROPINE，氢化棕榈甘油酸酯柠檬酸盐，卵磷脂，香水，生育酚，硬脂酸锌，硫酸锌 WIND＆WETTER霜：水，棕榈酸异丙酯，丁二醇，聚3甘油二异硬脂酸酯，甘油，己基癸醇，己基十二烷基月桂酸酯，泛醇，聚甘油3聚蓖麻油酸酯，李桃木杏仁油，杜仲油，丁香柏油，柠檬酸，CERA ALBA， ，香精，生育酚，生育酚乙酸酯，硬脂酸锌，硫酸锌 SPEZIAL WUNDSCHUTZ奶油：AQUA，棕榈酸异丙酯，聚甘油3聚甘油油酸酯，乙基己基硬脂酸酯，甘油，丁二醇，己基癸醇，月桂基癸基癸酸酯，泛醇，尿囊素，抗坏血酸棕榈酸酯，丁香香皮草提取物，桔梗，花蜜豆蔻油，甘油油酸酯，大豆大豆油，HELIOTROPINE，氢化棕榈甘油柠檬酸酯，卵磷脂，硫酸镁，对戊酸，角鲨烷，生育酚，生育酚乙酸酯，硬脂酸锌，硫酸锌 有害的＆洗发水：水合剂，月桂基硫酸钠，月桂基磺基琥珀酸二钠，椰油酰胺丙基甜菜碱，甘油，泛醇，芦荟叶汁粉，金盏菊花提取物，水解小麦蛋白，柠檬酸，二硬脂酸乙二醇酯，HELIOTROPINE，LAURETH-4 -120葡萄糖酸二甲酯，苯氧乙醇，聚季铵盐10，苯甲酸钠，氯化钠，柠檬酸钠，氢氧化钠，生育酚，香精 FEUCHTTÜCHER：水，甘油，芦荟叶汁，BISABOLOL，丁二醇，辛基乙二醇，CHAMOMILLA RECUTITA花提取物，柠檬酸，椰油糖苷，乙基己基甘油，乙酰丙酸，泛醇，山梨酸钾，氢氧化二钠，乙酸钠，白蛋白酸钠',
        price: '299'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿护肤 Babyhautcream',
        imagePath: '/images/second-level-directory/babycare/婴儿护肤 Babyhautcream/11007.jpg',
        title:'Bob 婴儿杏仁油 150ml',
        description:'不含矿物油，石蜡，对羟基苯甲酸酯，PEG，有机硅或合成香料 经皮肤科测试，结果非常好 素食主义者  BOEP婴儿沐浴油结合了宝贵的有机荷荷巴油和杏仁油，很容易在沐浴水中分配，并且无需很多成分即可确保出色的飞溅体验。 柔和的气味使沐浴更加完美，当然也使婴儿闻起来很香。 珍贵的精油在洗澡时能滋养婴儿的皮肤，并能确保天鹅绒般柔软，健康的皮肤。',
        price: '249'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12001.png',
        title:'儿童餐 1岁以上 鸡肉彩色马铃薯 250g',
        description:'鸡肉鸡肉ALETE BIO马铃薯蔬菜含有Α-亚麻酸（一种OMEGA-3脂肪酸），可促进儿童的生长发育。 它还含有碘，以支持正常的甲状腺和认知功能。 从1年开始。',
        price: '20'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12002.png',
        title:'儿童餐 1岁以上 苹果香蕉小麦什锦 90g',
        description:'鸡肉鸡肉ALETE BIO马铃薯蔬菜含有Α-亚麻酸（一种OMEGA-3脂肪酸），可促进儿童的生长发育。 它还含有碘，以支持正常的甲状腺和认知功能。 从1年开始。',
        price: '12'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12003.png',
        title:'儿童餐 4个月以上 苹果香蕉和婴儿饼干什锦 4x90g',
        description:'鸡肉鸡肉ALETE BIO马铃薯蔬菜含有Α-亚麻酸（一种OMEGA-3脂肪酸），可促进儿童的生长发育。 它还含有碘，以支持正常的甲状腺和认知功能。 从1年开始。',
        price: '49'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12004.jpg',
        title:'喜宝 100%纯天然菜籽油（4个月后）250ml',
        description:'与许多其他食用油相比，HIPP 100％有机菜籽油具有较高的OMEGA-3含量。 它还具有OMEGA-3与OMEGA-6脂肪酸的最佳比例。 这些特性使有机菜籽油成为第4个月后的婴儿补充餐的有用成分。',
        price: '59'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12005.jpg',
        title:'喜宝 纯天然燕麦苹果牛奶粥（8个月后）450g',
        description:'舒缓有机牛奶粥 睡前最佳选择 富含宝贵的维生素 适合8个月以上的HIPP BIO晚安燕麦燕麦苹果是不加糖的（成分自然含有糖）。 它由严格选择的有机成分组成，为您的孩子提供丰盛的晚餐。 可以用新鲜的开水快速方便地制备粥。',
        price: '59'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12006.png',
        title:'喜宝 纯天然婴儿饼干牛奶粥（6个月后）450g',
        description:'舒缓有机牛奶粥 睡前最佳选择 富含宝贵的维生素 适合6个月以上婴儿，HIPP BIO晚安粥儿童饼干不加糖（成分天然含有糖），并由严格选择的有机成分组成。 它为您的孩子提供便餐。 可以用新鲜的开水快速方便地制备粥。',
        price: '59'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12007.jpg',
        title:'喜宝 苹果香蕉婴儿饼干什锦（4个月后）4 x 90g',
        description:'享受四倍的水果 搭配4个最喜欢的品种 理想的零食 附带免费勺子附件 适合四个月以上的婴儿HIPP挤压袋混合装可为您提供4种美味品种的水果乐趣。 挤压袋是零食或旅途中的理想选择。',
        price: '49'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12008.png',
        title:'喜宝 混合什锦（4个月后）4 x 90g',
        description:'理想的甜点或粥品成分 他们味道特别好 从具有足够成熟时间的水果品种中自然而然地发展出完整的水果口味 没有添加调味剂和糖（成分天然包含糖）实用的4X100G福利包装袋中的HIPP HIPPIS挤压袋非常适合在旅途中和旅途中使用。 婴儿在第一年后会像儿童，青少年和成人一样品尝水果。',
        price: '49'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12009.png',
        title:'喜宝 草莓香蕉苹果什锦（1岁以上）4 x 100g',
        description:'喜宝什锦（HIPP HIPPI）的苹果草莓香蕉使人们享受水果变得异常有趣。 精美的水果泥和其他有机成分的配料是介于两者之间的理想零食，尤其适合旅途中使用。 喜宝什锦不需要添加任何糖或浓缩甜汁。 适合一岁以上儿童。',
        price: '49'
    }),

    new Product({
        category: 'babycare',
        group: '婴儿食品 Babynahrung',
        imagePath: '/images/second-level-directory/babycare/婴儿食品 Babynahrung/12010.png',
        title:'喜宝 桃子芒果香蕉什锦（6个月后）4 x 90g',
        description:'不加糖 100％有机水果和谷物 带有免费的HIPP汤匙附件作为喂食辅助 适合6个月以上儿童，香蕉中带有燕麦的HIPP挤压袋水果粥芒果桃是为小孩子准备的水果粥点心。 它不包含任何添加的糖（成分自然包含糖），并且带有免费的HIPP汤匙附件，可以随时随地喂食。',
        price: '49'
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
