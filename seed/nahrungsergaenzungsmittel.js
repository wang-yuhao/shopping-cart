var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '维他命 Vitamine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/维他命 Vitamine/40001.jpg',
        title:'Mivolis 维生素C泡腾片 20片，82克 20支装',
        description:'每片240毫克维生素C 血橙味 不加糖 MIVOLIS维生素C泡腾片中所含的维生素C支持免疫系统的正常功能。 在某些生活条件下或有特殊饮食习惯时，可能会增加维生素需求量。',
        price: '129'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '维他命 Vitamine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/维他命 Vitamine/40002.jpg',
        title:'双心 维生素B12 30片，8.4克 5盒装',
        description:'每片150毫克维生素B12 满足增加的需求 维生素B12有助于减轻疲劳和疲劳 支持免疫系统的正常功能 有助于神经系统的正常运作 DOPPELHERZ维生素B12片剂每片含150毫克维生素B12，因此可以增加维生素B12的供应，例如，如果需要增加的话。',
        price: '219'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '维他命 Vitamine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/维他命 Vitamine/40003.jpg',
        title:'tetesept 维生素D3 50片，9.1克 5盒',
        description:'每片150毫克维生素B12 满足增加的需求 维生素B12有助于减轻疲劳和疲劳 支持免疫系统的正常功能 有助于神经系统的正常运作 DOPPELHERZ维生素B12片剂每片含150毫克维生素B12，因此可以增加维生素B12的供应，例如，如果需要增加的话。',
        price: '239'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '维他命 Vitamine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/维他命 Vitamine/40004.jpg',
        title:'镁 + 维生素C + 维生素B6 + B12 30片，45克 10盒',
        description:'含维生素C，B6 + B12 镁有助于正常的肌肉功能 带有橙味 MIVOLIS镁+维生素C +维生素B6 + B12含片含重要营养素，人体无法自行产生。镁是最通用的矿物质之一，有助于正常的肌肉和神经功能，并有助于维持正常的骨骼。另外，镁有助于正常的能量代谢。在某些饮食或生活环境中，镁的需求不一定总能满足食品的需求。维生素C，B6和B12在体内执行各种任务；例如，与镁结合使用，它们可以支撑神经系统。该产品不含乳糖。该产品适合素食主义者，仅包含草药成分或源自活体动物的成分。 该产品不含麸质。使用注意事项 每天1片。如果您需要更多的镁，则全天服用2片。每天的消费量不应超过。膳食补充剂不应替代多样化，均衡的饮食和健康的生活方式。镁可以泻药。如果肾功能受损，应在服用前咨询医生。请勿使用其他镁源或镁强化食品。如果消耗过多，索比特可能会通便。该产品不适合儿童和青少年。 成分确切的产品名称： 膳食补充剂，含镁，维生素C，维生素B6和维生素B12。与甜味剂。 甜味剂山梨糖醇，碳酸镁，氧化镁，全硬化植物油脂（菜籽），L-抗坏血酸（维生素C），酸化剂柠檬酸，调味剂，脂肪酸（棕榈）镁盐脱模剂，盐酸吡RID醇（VITAMIN B6），氰钴胺（维生素B12）。',
        price: '139'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '维他命 Vitamine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/维他命 Vitamine/40005.jpg',
        title:'儿童维生素D3咀嚼片 60片，51克 5盒',
        description:'含有维生素D。骨骼正常生长 为了免疫系统的正常功能 MIVOLIS儿童维生素D3咀嚼片含有维生素D，这是儿童骨骼正常生长和发育所必需的。此外，维生素D有助于儿童免疫系统的正常运作。维生素D在维生素中占有特殊的位置，因为它可以由阳光自身在皮肤中形成。但是，如果您在户外的阳光下几乎没穿衣服或仅穿着衣服，身体自身产生的维生素D可能不足以满足需要。尤其是在阳光不足和寒冷的月份，皮肤仅会与阳光轻微接触。该产品不含乳糖。 该产品适合素食主义者，仅包含草药成分或源自活体动物的成分。 该产品不含麸质。 使用注意事项 4岁以上的儿童和成人：每天吸食或咀嚼1片。 成分 确切的产品名称： 含维生素D的膳食补充剂，含甜味剂 甜味剂山梨糖醇，酸化剂（柠檬酸，柠檬酸钠），脱模剂脂肪酸镁盐，调味剂，椰子油，甜味剂三氯蔗糖，胆钙化固醇（维生素D3），染料核黄素。',
        price: '199'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '维他命 Vitamine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/维他命 Vitamine/40006.jpg',
        title:'维生素K2滴剂',
        description:'膳食补充剂可以帮助血液正常凝结。 万一受伤，可以更好地阻止出血。 维生素K2也有可能有助于骨骼的正常维护，因为它可以确保更好地吸收钙。 即使在年老时，也能使骨骼坚强并能正常凝结血液。维生素K2滴剂 正常保护骨骼 可以帮助血液凝结 纯素 建议剂量：一日三餐食用。 不得超过规定的建议消耗量。',
        price: '149'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '矿物质 Mineralien',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/矿物质 Mineralien/41001.jpg',
        title:'双心 辅酶Q10 +镁+ B1 + B5 + B6 胶囊30粒，23.3克 2盒装',
        description:'Doppelherz双心辅酶Q10+B族维生素胶囊是外用美容品的上好佳品，效果明显，由内而外，全面吸收，真正滋养。大部分外用美容品，只是从皮肤细胞外部对已经产生问题的皮肤进行护理，而Doppelherz双心辅酶Q10+B族维生素胶囊是从皮肤细胞内部，持续不断地维护细胞功能，使皮肤细胞保持理想状态，从而达到美白效果。○　辅酶Q10是一种能使衰老‘刹车’的成分，至今已被世界各地的研究者广泛研究证明；○　辅酶Q10能改善各种衰老迹象，对色斑、暗沉、干燥等各种衰老迹象都具有改善作用，保持年轻光彩；○　维生素E具有增强机体活力、延缓细胞衰老、提高免疫力、促进血液循环、降低血胆固醇和增加中性脂肪的功能；○　维生素E还可改善生育机能，延缓性功能衰退，是抗衰老和美容护肤的佳品。使用方法: 每天一次，每次一粒。用温水，随餐服用。',
        price: '269'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '矿物质 Mineralien',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/矿物质 Mineralien/41002.jpg',
        title:'双心 钙750 +维生素D3 30片，66.5克 5盒装',
        description:'DOPPELHERZ AKTIV钙750 + D3可提供750MG钙，用于天然骨骼保存，并通过维生素D辅助钙的摄取，维生素D可帮助人体吸收钙，这也有利于肌肉功能和血液凝结。 皮肤和头发也被生物素促进。',
        price: '179'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '矿物质 Mineralien',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/矿物质 Mineralien/41003.jpg',
        title:'Mivolis 镁（300 片），210克 2盒装',
        description:'镁支持肌肉和神经 镁有助于正常的肌肉功能 镁有助于正常的能量代谢 MIVOLIS镁用于肌肉和神经。 镁是最通用的矿物质之一，有助于正常的肌肉和神经功能，维持正常的骨骼和正常的能量代谢。 不能总是确保充足的镁供应，尤其是在特殊的饮食习惯或增加体育锻炼的情况下。',
        price: '369'
    }),
        
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '矿物质 Mineralien',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/矿物质 Mineralien/41005.jpg',
        title:'锌+组氨酸+半胱氨酸长效片40片，19克 5盒装',
        description:'每片15毫克锌 长期护理的仓库效应 含锌，可用于皮肤，头发和指甲 含锌支持免疫系统 MIVOLIS锌+组氨酸+半胱氨酸仓库支持锌的免疫系统，并且由于其时间仓库的供应，可以确保锌的供应，就像养分库一样。锌是重要的微量元素，并且是众多酶的组成部分。一。用于维持正常的皮肤，头发和指甲，防止细胞氧化应激，以及维持免疫系统的正常功能。另外，包括氨基酸组氨酸和半胱氨酸，它们是许多蛋白质的组成部分。该产品不含乳糖。该产品不含麸质。 警告 膳食补充剂不能代替均衡多样的饮食和健康的生活方式。不适合18岁以下的儿童和青少年。 使用注意事项 每天服用1片液体（例如½杯水）。不应超过建议的每日剂量。不建议食用其他含锌补品。 成分 确切的产品名称： 含锌，组氨酸和半胱氨酸的膳食补充剂 L-组氨酸盐酸盐|葡萄糖酸锌|填充微晶纤维素|涂布剂羟丙基甲基纤维素|盐酸半胱氨酸|填料交联羧甲基纤维素钠|脂肪酸的滑石，二氧化硅和镁盐脱模剂染料二氧化钛|涂料剂聚乙二醇。',
        price: '209'
    }),
    
    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '矿物质 Mineralien',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/矿物质 Mineralien/41006.jpg',
        title:'女士矿物质补充片 30片，44.1克 2盒装',
        description:'使用注意事项 每天服用1片，并加足量的液体和吞咽的食物。 确切的产品名称： 膳食补充剂 含有矿物质和维生素的片剂 成分：碳酸钙，氧化镁，异麦芽酮糖醇，微晶纤维素和聚乙烯吡咯烷酮，L-抗坏血酸，羟丙基甲基纤维素和羟丙基纤维素的包覆剂，分离剂脂肪酸，脂肪酸镁盐，滑石粉和二氧化硅，改性淀粉，富马酸铁，硫酸锌，染料氧化铁和氢氧化铁，椰子油，季戊四酰单谷氨酸碘酸钾，胆钙化固醇 请注意有关过敏原的说明。 过敏原 不含标签要求的致敏成分',
        price: '119'
    }),

    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '胆结石Gallensteine',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/胆结石Gallensteine/42001.jpg',
        title:'德国原版爱活胆通胶囊 Gallith Kapseln，100粒',
        description:'服用方法：德国进口版胆通胶囊饭后服用，针对自身情况，一次1~2粒，一日3次。 服用期间要注意不要吃油腻的食物。专家表示：胆结石患者吃一些油腻的食物会刺激胆囊收缩引起的疼痛！由于脂肪类食物主要是靠胆汁来消化的，所以只要一下吃油腻的食物，就会反射性地引起胆囊收缩把胆汁挤到十二指肠，引起胆囊疼痛。 德国原产的爱活胆通胶囊可以长期吃，毕竟是纯植物提取药品，对身体影响不大！推荐为6个月一个疗程。',
        price: '209'
    }),

    new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '痛风,尿酸高Gicht,Harnsäure',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/痛风,尿酸高Gicht,Harnsäure/43001.jpg',
        title:'德国BULLRICH调整尿酸 痛风 尿酸高降尿酸 排酸排毒片450片',
        description:'【用法用量】：每天3次，每次2片，随餐服用。  【试纸用法】建议连续3天，每天5次使用试纸测量患者的尿液，吃饭前和饭后1小时测试，用药盒底部的试纸浸入尿液的量杯中，拿出来会逐渐变色，对应颜色区分酸碱性。酸性就 +1片 碱性就 -1片  【关于尿酸试纸颜色】建议每天5次检查历时3天的尿PH值。（例如：饭前和饭后1小时）； 蓝色的范围（7.0-7.4）成酸性，以外的成碱性     【适用人群】：酸性体质、免疫力差、尿酸高、痛风、因生活不规律饮食结构不合理和烟酒过量所致身体不适的亚健康人群。  【产品介绍】：1.有效溶解尿酸结石、胱氨酸结石、作为胱氨酸结石和胱氨酸尿的维持**； 2.预防各种泌尿系统结石再发，特别是草酸钙结石； 3.各种代谢紊乱引起的代谢性疾病，如高尿酸所致的各种代谢性疾病，如痛风 4.防止新结石的形成。     痛风高尿酸人群应进行嘌呤低能量饮食，保持合理体重，戒酒，多饮水，每日饮水2000ml以上。避免暴食、酗酒、受凉受潮、过度疲劳和精神紧张，穿舒适鞋，防止关节损伤，慎用影响尿酸排泄的药物如某些利尿剂和小剂量阿司匹林等。防治伴发病如高血压、糖尿病和冠心病等。 ',
        price: '149'
    }),


        new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '风湿痛Rheumatischer Schmerz',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/风湿痛Rheumatischer Schmerz/44001.jpg',
        title:'德国本土品牌Kräuterhof 本草庄园 马膏 热凝胶 250ml大瓶装',
        description:'使用方法：外用，取适量薄薄涂抹于身体相关部位，轻柔按摩即可。 使用方法外用，均匀涂抹于痛处，并按摩直至吸收效果更佳。注：请勿涂抹于伤口及触及眼睛，孕妇、严重过敏史、重症皮肤病患者禁用。     推荐针对风湿关节痛非常有效针对风湿关节痛非常有效 德亚超过300多个5星好评！！能够对有助于缓解动脉硬化，助麻痹的四肢恢复活力，促进血液循环；同时富含多种天然植物提取成分，能够有效用于跌打损伤，帮助肌肉恢复；并且有助于缓解关节炎痛、风湿痛、肌肉酸痛、颈椎痛、腱鞘炎       强烈推荐~~~适用于长期电脑工作者、引起的颈肩疼痛，中老年人颈肩腰腿疼痛，风湿性关节炎，走路膝盖疼痛，骨骼咯吱咯吱疼痛。具有强力消浮肿的作用，能够舒缓疲倦的肌肤，活络及帮助肌肤新陈代谢~~~在德国是冠军球队的必备良品。',
        price: '79'
    }),

        new Product({
        category: 'nahrungsergaenzungsmittel',
        group: '鱼油Seefischöl',
        imagePath: '/images/second-level-directory/nahrungsergaenzungsmittel/鱼油Seefischöl/45001.jpg',
        title:'Doppelherz 双心 Omega-3 鱼油 1000毫克版本 80粒',
        description:'用量: 每日一次，每次一粒，饭后大量温水送服。    推荐：预防动脉硬化、四肢冰冷，减少脂肪的形成，防止肥胖症产生、预防老年痴呆、通血管、调节血脂、降血压。适合12岁以上人群服用，尤其适用于患有高血压、高胆固醇、动脉硬化、心血管疾病患者。',
        price: '99'
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
