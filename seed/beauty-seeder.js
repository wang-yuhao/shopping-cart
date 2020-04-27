var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var beauty = [
    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20001.jpg',
        title:'香奈儿 嘉柏丽尔天性香水 100ml',
        description:'香奈儿（CHANEL）香水设计师奥利维耶·波尔格（OLIVIER POLGE）热情洋溢地绽放着光彩。 由加布里埃尔·香奈儿（GABRIELLE CHANEL）启发的香水GABRIELLE CHANEL ESSENCE是一种自决的女性的香水，该香水完全表达自己的个性并从内部散发出光芒。 气味似乎在超细玻璃制成的方形瓶中漂浮得很轻。标签和扣环以强烈而富裕的金色调像香水一样展现自己。GABRIELLE CHANEL ESSENCE是充满光彩的感性，丰盈成分。 LESSENCE是一款由四朵白花制成的香水花蜜：充满异国情调的茉莉花，带有果香和光芒四射的依兰，新鲜而波光粼粼的橙花，天鹅绒般的天鹅绒和浓郁的女人味晚香玉。 晚香玉被认为是最强烈的香气和迷人的花朵。在这种香水中，晚香玉更具表现力。它们温暖而有光泽的光芒流过整个香水。',
        price: '1998'
    }),

    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20002.jpg',
        title:'香奈儿 可可小姐香水（瓶装）100ml',
        description:'自由奔放，大胆的女人的精髓。 强烈的女性化东方香气以其强烈的清新感而著称。 强烈的东方香气，以其强烈的清新感而著称。 开始时，鲜活的橙色飞溅唤醒了感官。 明亮而感性的心透露出茉莉和玫瑰的透明和弦。 在特征上，广PATCH香和香根草的简单口音凸显了该成分的优雅轮廓。',
        price: '1959'
    }),

    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20003.jpg',
        title:'香奈儿 五号之水 100ml',
        description:'N°5 L\'EAU是今天的N°5花香，活力十足的香气。现代是他的座右铭，新鲜是他的主旋律。 N°5 L\'EAU完美无瑕。 N°5 L\'EAU是新的必需品，巧妙地采用了其简约的包装。传说中的香水的轮廓在纸板上略显可见。内部，第二个外壳保护着透明的瓶子。瓶子的终极简单性突出了香水的非凡特征，并为梦想留出了空间。N°5 L’EAU比其前辈更抽象，柑橘类水果的辐射清新令人惊讶。首先是由醛类带来的柠檬，橘子和橙子的动态和谐。它的背后隐藏着花香的小面：玫瑰与精致的茉莉花和果味依兰的相互作用–从未有过的现代感。 N°5的这一标志性特征在香根草和雪松木之间营造出一种新的张力，并带有柔和的麝香味。 N°5 L’EAU自然绽放，前所未有，新鲜！',
        price: '1959'
    }),

    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20004.jpg',
        title:'香奈儿 智慧紧肤植物精萃乳霜 50ml',
        description:'香奈儿（CHANEL）的研究首次开发了一种平滑紧致的乳霜，其对皮肤友好的配方中含有高浓度的天然活性成分。 LE LIFTCRÈME由94％的天然成分组成，并且与植物紫花苜蓿浓缩物一起，含有一种新的，非常有效的活性成分，与视黄醇*一样有效。面霜有3种极富感性的质感：CRÈMEFINE，CRÈME和CRÈMERICHE可以完美地适合不同的皮肤类型。 *刺激角质形成细胞分化和增殖以及I型胶原合成的比较-体外测试。 表皮测试强度在重建皮肤上增加的比较。 抗皱和平滑效果的比较-对21个测试对象的仪器测量。',
        price: '49'
    }),

    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20005.jpg',
        title:'香奈儿 五号香水（经典）100ml',
        description:'使用PRONUTRA配方，无需调味即可生产的APTAMIL PRONUTRA儿童牛奶1+，每天都能为您的孩子在当前发育阶段所需的最佳营养供应提供支持。维生素A和C自然可以促进正常的免疫系统。维生素D和钙支持骨骼的正常生长和发育。碘对于甲状腺功能和生长很重要。随着年龄的增长降低蛋白质含量。本产品适合2岁以上儿童。',
        price: '1790'
    }),

    new Product({
        category: 'beauty',
        group: 'parfum',
        imagePath: '/images/second-level-directory/beauty/parfum/20006.jpg',
        title:'香奈儿 蔚蓝男士香水 100ml',
        description:'香奈儿（CHANEL）将您的礼物摆在风头，并设计了一款特别的限量版表壳。 专门用于50毫升和100毫升的香水。 *数量有限，售完即止。 散发着芳香，木质，迷人香气的男士自由。 一瓶坚不可摧的蓝色拥有这种永恒而有力的成分。 香水散发着BLEU DE CHANEL的男性气息，带有强烈的嗅觉特征，特别令人震惊地表现出男性气质。 BLEU DE CHANEL淡香水，一种带有琥珀和麝香气息的芳香木质香精。 酸雪松香调给人一种温暖的感性，新喀里多尼亚的麝香木香和檀香带来优雅和深度。',
        price: '1649'
    }),

    new Product({
        category: 'beauty',
        group: '唇膏 Lippenstift',
        imagePath: '/images/second-level-directory/beauty/唇膏 Lippenstift/21001.jpg',
        title:'香奈儿 山茶花唇膏 限量版 3.5g',
        description:'山茶花是MAISON CHANEL的标志性花朵。 加布里埃尔·香奈儿（GABRIELLE CHANEL）从花花公子的夹克外套中挑出它们，而每个季节，花朵都通过MAISON的创作再次绽放。 如今，限量版ROUGE ALLURECAMÉLIA推出了4种丰富明亮的ROUGE ALLURE唇膏颜色和4种哑光和光泽ROUGE ALLURE VELVET阴影。 打开表壳时，只需单击鼠标即可立即识别出这8种独创作品。 ROUGE ALLURE的超细，平滑融化质地像第二层皮肤一样在您的嘴唇上滑动，而ROUGE ALLURE VELVET质地柔软柔软。',
        price: '569'
    }),

    new Product({
        category: 'beauty',
        group: '睫毛膏 Wimperntusche',
        imagePath: '/images/second-level-directory/beauty/睫毛膏 Wimperntusche/22001.jpg',
        title:'香奈儿 炫密3D睫毛膏 6g',
        description:'香奈儿（CHANEL）创新的3D打印睫毛膏刷。 能够生产革命性刷子的技术。 由于其蜂窝状结构，刷子吸收了最适量的产品。 它采用独特的材料开发而成，当涂在睫毛上时可释放出所有质感。 只需一个手势，您的睫毛立即变得极致而不会过载。 他们充分发挥出惊人的效果。 -蜡组合（大米，蜂蜡）和包裹睫毛线并赋予其丰满度的光滑配方。 -聚合物膜，可将结果固定至最大体积，直至卸妆为止。 -维生素原可在每次使用时增强睫毛，形成美丽而饱满的睫毛线。 在眼科控制下进行测试。 适用于隐形眼镜佩戴者',
        price: '449'
    }),

    new Product({
        category: 'beauty',
        group: '睫毛膏 Wimperntusche',
        imagePath: '/images/second-level-directory/beauty/睫毛膏 Wimperntusche/22002.jpg',
        title:'全新 香奈儿 印记液体眼影 6ml',
        description:'得益于CHANEL的微胶囊颜料，第一款具有清新效果的彩妆。 作为化妆品微流控技术的先驱，CHANEL创立了EAU DE TEINT，这是首款具有微囊色素的具有清新效果的彩妆。 这款超轻型配方具有75％的水分，可保湿，给人立即清爽的感觉。从微流体技术中出现的微胶囊颜料可在皮肤上融化，形成无妆和辐射肤色的妆容。 肤色变柔和，均匀。难以察觉的轻柔遮盖力营造出完全透明的肤色。 随附的刷子符合人体工程学，可直观，均匀，自然地使用。 肤色自然美丽。 •专利的微流体技术，其可见的微胶囊在与皮肤接触时会融化，并确保无与伦比的第二种皮肤效果和自然清新的外观。 •由75％的水组成的轻盈配方，可为特别重要的皮肤提供立即的清爽感和八小时*的保湿效果。 •符合人体工程学的刷子，由密集而柔软的纤维制成，可确保最佳的均匀度。 •罗望子种子的天然提取物，以其保湿特性而闻名，整日为皮肤提供舒适感和水分。 •带有橙花香调的舒缓香气可确保立即获得幸福感。 *对一组15名妇女的仪器测试',
        price: '859'
    }),

    new Product({
        category: 'beauty',
        group: '美妆 Kosmetik',
        imagePath: '/images/second-level-directory/beauty/美妆 Kosmetik/23001.jpg',
        title:'香奈儿 泡泡水粉底 30ml',
        description:'自由奔放，大胆的女人的精髓。 强烈的女性化东方香气以其强烈的清新感而著称。 强烈的东方香气，以其强烈的清新感而著称。 开始时，鲜活的橙色飞溅唤醒了感官。 明亮而感性的心透露出茉莉和玫瑰的透明和弦。 在特征上，广PATCH香和香根草的简单口音凸显了该成分的优雅轮廓。',
        price: '299'
    }),

    new Product({
        category: 'beauty',
        group: '美妆 Kosmetik',
        imagePath: '/images/second-level-directory/beauty/美妆 Kosmetik/23002.jpg',
        title:'香奈儿 臻美光感哑光粉底液 30ml',
        description:'ULTRA LE TEINT VELVET是一种持久的彩妆，可自然抚平和均匀肤色。它的柔焦效果可减少所有不规则现象，并确保使用哑光哑光面膜进行化妆。质地超轻，超哑光和超自然。它立即融化到皮肤中，并确保整日完美肤色。 ULTRA LE TEINT VELVET有多种色调可供选择，非常适合普通皮肤和混合性皮肤。以获得完美的结果。 “ PERFECT SKIN AFFINITY”复合物可确保化妆品与皮肤保持最佳连接，长时间附着，并使肤色一天到晚都具有强烈的光泽。 由香奈儿研究部门选择的具有柔焦效果的粉末可以弥补皮肤表面的不规则现象，并立即细化毛孔。 “ PERFECT LIGHT CONTROL”复合物中两种半透明半球形粉末的全新组合掩盖了色素斑点和发红现象，而没有任何遮罩效果。',
        price: '629'
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
