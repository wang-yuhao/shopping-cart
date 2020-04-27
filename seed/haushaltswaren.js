var Product = require('../models/product');

var mongoose = require('mongoose');
//var mongoose = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        category: 'haushaltswaren',
        group: '刀具 Messer',
        imagePath: '/images/second-level-directory/haushaltswaren/刀具 Messer/30001.jpg',
        title:'ZWILLING主厨刀 包括免费雕刻',
        description:'本产品是ZWILLING公司用其“特别版”对已经流行的四星系列刀具进行补充的四把刀具之一。像本系列中的往常一样，他的刀片由优质钢制成。用这把厨师刀切碎各种食物，从蔬菜到肉和鱼。由于叶片的特殊形状，它甚至适用于重斩。 构成厨师刀紧凑型的钢的特点是铬碳比达到最佳平衡。刀片由单块钢制成，可确保独特的刀形几何形状。 FRIODUR刀片经过特殊工艺硬化后的冰具有必要的硬度，抗断裂性和耐腐蚀性。厨师刀的刀片是弯曲的，因此您也可以使用此刀切草药。纤细的尖端非常适合建筑和抹灰。 主厨刀COMPACT的刀片长度为14厘米，重量轻。这使它使用起来很舒适。它具有符合人体工程学的形状的手柄，该手柄由优质塑料制成，可无缝地与刀片无缝连接。因此，细菌和污垢没有机会渗透到空隙中。作物可以防止手指从手柄上滑落。使用由特别优质的钢材制成的ZWILLING紧凑型厨师刀，您可以快速安全地切碎食物中的所有配料。 FRIODUR®冰硬化刀片具有更长的刀片寿命和耐腐蚀性。 特殊的不锈钢，特殊的ZWILLING熔体：这些刀既稳定，耐腐蚀又灵活。 SIGMAFORGE®刀具-一件锻造 手柄和刀片之间的无缝过渡。 符合人体工程学的塑料手柄：使用刀时无疲劳且安全。',
        price: '779'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '刀具 Messer',
        imagePath: '/images/second-level-directory/haushaltswaren/刀具 Messer/30002.jpg',
        title:'ZWILLING主厨刀 包括免费雕刻',
        description:'ZWILLING的TWIN®四星II系列的切肉刀是著名经典产品的进一步发展。通过在手柄平衡中使用不锈钢应用，从而提高了安全性和舒适性。切肉刀的坚固刀片长20厘米，由不锈钢制成。光滑的切割边缘使其特别适合切割肉类和雕刻烤肉。此外，农作物确保了高功能性和安全处理。 通过使用特殊的ZWILLING熔体可确保高质量。这种钢提供了铬和碳含量的完美平衡，并且通过冰硬化的FRIODUR®刀片进一步增强了强度。由于精确的切割和完美的几何形状，该刀具有很高的精度，因此具有非常好的切割性能。一种为您的厨房用具增加有用的帮助的产品。FRIODUR®冰硬化刀片具有更长的刀片寿命和耐腐蚀性。特殊的不锈钢，特殊的ZWILLING熔体：这些刀既稳定，耐腐蚀又灵活。SIGMAFORGE®刀具-一件锻造手柄和刀片之间的无缝过渡。符合人体工程学的手柄，由塑料制成，并带有不锈钢应用程序：使用刀时无疲劳且安全。',
        price: '849'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '刀具 Messer',
        imagePath: '/images/second-level-directory/haushaltswaren/刀具 Messer/30003.jpg',
        title:'ZWILLING 切碎和装饰用刀 TWIN®Pollux 30720-101-0',
        description:'TWIN®POLLUX系列是高质量，整形工具，每天在每个厨房中使用几次。小型方便刀的精确研磨刀片长10厘米。 FRIODUR®刀片由不锈的，冰硬化的不锈钢制成。通过这种改进，叶片的锋利度可以保持特别长的时间。极高的耐腐蚀性和柔韧性是与双特殊熔体有关的其他特征。 切碎和装饰用刀非常适合加工水果和蔬菜，因为您的工作非常精确。切割和剥皮只是使用多功能，细长，锋利的刀即可快速完成的几个任务。黑色塑料手柄由符合人体工程学的高质量材料制成，因此手感非常舒适。众所周知的三铆钉设计进一步增强了这款实用刀的外观。使用ZWICKING装饰刀，您可以制作精美的菜肴并立即进行设置。 FRIODUR®冰硬化刀片具有更长的刀片寿命和耐腐蚀性。 特殊的不锈钢，特殊的ZWILLING熔体：这些刀既稳定，耐腐蚀又灵活。 经典三铆钉设计 舒适的手柄，镶嵌ZWILLING徽标，可实现最佳处理效果。 重量轻，无疲劳。',
        price: '569'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '刀具 Messer',
        imagePath: '/images/second-level-directory/haushaltswaren/刀具 Messer/30004.jpg',
        title:'TWIN 三德刀/库伦 TWIN®Cuisine 30348-181-0',
        description:'配有库伦功能的SANTOKU刀特别适合亚洲食谱。使用锋利的边缘，您可以将肉，鱼和蔬菜切成细末或粗末。刀配备了符合人体工程学的手柄。这提供了横向ERL，以提供舒适的操作和轻微的切割。 18厘米长叶片的钢具有均衡的铬碳含量，因此特别稳定。 FRIODUR®刀在特殊的过程中经过冰硬化处理，并且由于这种改进，刀变得非常锋利。此外，多功能的SANTOKU刀具有防锈和防腐蚀功能。精确的锻造和完美的切割使该刀成为厨房的多才多艺，不仅适用于切碎的亚洲菜肴，还适用于各种其他菜肴。随着农作物的弯曲过渡，切割变得更加安全，容易。 握把的全角度不需要铆钉，因此在手时容易又好用。螃蟹不允许手指从手柄滑到刀片上，从而将受伤的风险降到最低。刀被制成一件。 ZWILLING的SANTOKU刀可帮助您精确切割薄薄的薄片，因此是必不可少的工具。 FRIODUR®冰硬化刀片具有更长的刀片寿命和耐腐蚀性。 不锈钢：这些刀坚固，耐腐蚀且同时具有柔韧性。刀-一件锻造而成 RAZOR EDGE-EDGE扳机：抛光扳机还确保了持久的清晰度，因此可提供始终如一的高精度切割性能。 符合人体工程学的塑料手柄，带横向全切角（刀片伸入刀柄），没有铆钉：使用刀时无疲劳且安全。',
        price: '1899'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '刀具 Messer',
        imagePath: '/images/second-level-directory/haushaltswaren/刀具 Messer/30005.jpg',
        title:'ZZWILLING 切割刀 TWIN® Pollux 30795-150-0',
        description:'TWIN®POLLUX系列产品是15厘米刀片长度的实用且多功能的切割刀。它可以帮助您切碎肉，肋骨和类似食物：锋利的刀片可轻松切碎肉块。 人体工学手柄的美观和功能性形状由三个铆钉装饰，刀片手柄本身略微弯曲，因此易于抓握。刀片具有宽广的设计，可通过其自重将成分切成小块。该产品的镶嵌ZWILLING徽标具有特色，并巧妙地修整了刀的整体外观。 切割刀的冰硬化FRIODUR®刀片之所以出色，是因为在特殊的ZWILLING熔体中铬和碳的平衡比例。这使得不锈钢特别锋利并且耐腐蚀。成品和打孔刀可满足您的需求，并且非常耐用。使用具有矩形刀片形状的切肉刀，您可以相应地进行装备，例如，切碎香脆的烤肉。 FRIODUR®冰硬化刀片具有更长的刀片寿命和耐腐蚀性 特殊不锈钢，特殊ZWILLING熔体：这些刀具稳定，耐腐蚀 经典三铆钉设计 舒适的手柄，镶嵌ZWILLING徽标，可实现最佳处理效果 重型刀，舒适工作',
        price: '1129'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '刀具 Messer',
        imagePath: '/images/second-level-directory/haushaltswaren/刀具 Messer/30006.jpg',
        title:'TWIN 剔骨刀 TWIN® Cuisine 30343-181-0',
        description:'TWIN®CUISINE系列的锉刀代表了现代技术与传统的独特结合，锉刀具有纤细，灵活的刀片和光滑的刀刃。用这把刀可以很容易地去鱼或肉。带有18厘米长刀片的刀也易于操作。因此，这把刀非常适合切肉和鱼。另一个亮点是刀的简洁优雅的设计。 这款锉刀将创新材料与传统工艺相结合。手柄由易于保养的塑料制成，即使在温度波动的情况下也能保持稳定。锉刀的刀片由单块钢精确锻造而成。 FRIODUR®刀片还通过特殊工艺进行了冰硬化。这使得叶片特别耐久，柔韧性和耐腐蚀。这些特性是对刀进行一流切割和精确切割的基础。作物在手柄和刀片之间提供了适当的平衡。他还担任护指。如果您想将鱼肉和鱼柳切成薄片，那么TWIN®CUISINE系列的ZWILLING高质量鱼片切刀是正确的选择。 FRIODUR®冰硬化刀片具有更长的刀片寿命和耐腐蚀性。 不锈钢：这些刀坚固，耐腐蚀且同时具有柔韧性。 刀-一件锻造而成 手柄和刀片之间的无缝过渡。 符合人体工程学的塑料手柄，带横向全切角（刀片伸入刀柄），没有铆钉：使用刀时无疲劳且安全。',
        price: '1499'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '餐 具 Gläser und Besteck',
        imagePath: '/images/second-level-directory/haushaltswaren/餐 具 Gläser und Besteck/31001.jpg',
        title:'ZWILLING BALLARINI 60个 餐具套装 Julietta 01201-360-0',
        description:'永恒而又特别：BALLARINI的JULIETTA系列餐具60件套装的外观简直是“ MOLTO优雅”。圆形的杆端与醒目的鞋面形成鲜明的对比。亚光饰面也赋予餐具现代感。餐具在桌上总是很引人注目。 由于其出色的品质，餐具还可以承受日常生活。 60汤匙，叉子和刀子足以容纳多达12人。当整个“ FAMIGLIA”宣布自己一起吃饭时，菜单餐具将是完美的。无论是2人还是12人，餐具都非常适合大型节日烧烤或下午的简单烤饼。它易于保养，易于清洁且可使用洗碗机清洗。汤匙，叉子，蛋糕叉子和咖啡匙由18/10不锈钢制成。刀由优质刀片钢制成。由于刀片上有细锯齿状的边缘，几乎可以将食物中的所有食物切碎。符合人体工程学的形状确保舒适的操作。从初学者到最后的提拉米苏，您和您的客人几乎都不想放下餐具。 汤匙和叉子由18/10不锈钢制成 整体刀由一块优质刀片钢制成 圆润的边缘和符合人体工程学的形状，带来舒适的手感 易于清洁且洗碗机安全',
        price: '1259'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '餐 具 Gläser und Besteck',
        imagePath: '/images/second-level-directory/haushaltswaren/餐 具 Gläser und Besteck/31002.jpg',
        title:'ZWILLING BALLARINI 餐具套装30件 Francesca 01204-330-0',
        description:'BALLARINI的30件餐具套装FRANCESCA由六把人份的菜单刀，菜单叉，菜单勺，咖啡勺和蛋糕叉组成。多亏了铺张的外观，它也将成为您摆在桌子上的抢眼对象。现代且适合日常使用：FRANCESCA餐具的非凡设计会让您信服。餐具套装的加工质量特别高，手感非常舒适。精致的刻面和弧形线条是当代设计的亮点。叉子和勺子由高质量，无锈的18/10不锈钢制成。整体刀由一块高质量的刀片钢制成。餐具组易于清洗，因为它是洗碗机安全的。有了餐具，您最多可以让6个人用餐。现在，你可以放心的享受你的意大利面，比萨或其他完全不同的东西了！ 抛光的 30个6份 18/10不锈钢叉子和勺子 整体刀片由硬化刀片钢制成 易于护理，洗碗机安全 现代弧形造型，时尚设计',
        price: '2359'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '餐 具 Gläser und Besteck',
        imagePath: '/images/second-level-directory/haushaltswaren/餐 具 Gläser und Besteck/31003.jpg',
        title:'ZWILLING 餐具套装+牛排餐具 80件 格林威治 00119-SET-DE',
        description:'有了这套餐具，您就可以准备所有菜肴。 ZWILLING的这套80件餐具套装包含菜单餐具和配件（可容纳12人）以及12件牛排餐具。这意味着您在每顿饭上都拥有精良的装备-晚餐，烧烤甚至咖啡桌。蛋糕服务器和肉叉等一些其他功能完善了刀，叉和匙的基本范围。 GREENWICH系列餐具具有优雅而永恒的设计。配备68件餐具的套装，在日常生活中以及宴会上迎合众多客人的需求时，总是有合适的选择。ZWILLING牛排餐具可容纳12人，因此这套餐具更加完美，因此您可以在夏季与朋友烧烤时真正享受烤牛排。 牛排刀典型的锥形刀片形状使切割牛排变得容易。这将使您露台上的烧烤夜晚变成您牧场上难忘的烧烤！ 由优质18/10不锈钢制成 不锈 洗碗机安全',
        price: '8999'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '锅 具 Kochgeschirr',
        imagePath: '/images/second-level-directory/haushaltswaren/锅 具 Kochgeschirr/32001.jpg',
        title:'ZWILLING STAUB 木柄煎锅 40511-952-0',
        description:'无论是多汁的牛排还是精致的蔬菜菜肴-无论您在厨房中有烘烤香气的任何地方，一个好的锅都非常重要。 STAUB用木柄煎锅创建了精心设计的炊具，您可以毫不费力地准备油炸和炖菜。木柄煎锅直径26厘米，有足够的容量来炸中等大小的肉块或为两个人准备炒菜。 煎锅的木柄由有吸引力的榉木制成，并用蜂蜡和米油经特殊工艺精制而成。这种改进使手柄具有高光泽，非常易于抓握。木柄的人体工程学设计使您可以安全地搬运相对轻便的铸铁锅。钢包主体由铸铁制成，铸铁是一种经过验证的材料，由于其非凡的储热性能，非常适合油炸。 典型的法式外形以及黑色铸铁和棕色山毛榉木的混合物使锅具在炉子上引人注目。锅的高度和将木柄固定在钢包上的角度完全适合用户的需求。设计精美，创新制造的STAUB煎锅使炸菜的准备成为各种感官体验。 香脆酥脆 传统与现代元素的完美结合 符合人体工学的榉木手柄，用米油和蜂蜡精制 适用于包括烤箱在内的所有热源，除了烤箱 与其他铸铁锅相比更轻',
        price: '2199'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '锅 具 Kochgeschirr',
        imagePath: '/images/second-level-directory/haushaltswaren/锅 具 Kochgeschirr/32002.jpg',
        title:'2件式锅具 ZWILLINGTWIN®Choice 涂层和未涂层​​28厘米 00031 SET DE',
        description:'此两件式锅组由一个ZWILLING煎锅TWIN®CHOICE涂层和未涂层​​组成。 TWIN®CHOICE无涂层煎锅非常适合烤肉。牛排，鱼片和其他肉块会因烘烤而结皮变脆，内部也非常柔软多汁。烤土豆和许多其他菜肴在此锅中也非常成功，因为它们的材料可以快速均匀地散发热量。因此整个区域都可以用于边缘油炸。 直径28厘米的带涂层煎锅因其DURASLIDE®ULTRA不粘涂层而非常适合烤煎饼和精心准备鸡蛋，鱼和米饭。当然，您也可以将此锅用于其他菜肴。您的不粘涂层不含PFOA。 ZWILLING的TWIN®CHOICE煎锅由三层SIGMA包层材料制成，它由铝芯和两层不锈钢组成。这三层确保热量均匀分布在锅底并缓慢稳定地散发。 由于使用了这种材料，您可以在不同类型的炉子上甚至在电磁炉上使用煎锅。简单而优雅的设计使该平底锅即使在一起用餐时也能与朋友相处融洽。该材料可长时间存储热量-因此即使在进食前开胃酒期间也不会损失热量。 SIGMA复合3层材料 热量分布均匀快速 人体工学不锈钢手柄在烹饪过程中保持凉爽 适用于所有热源，包括电磁炉 涂层锅：3层DURASLIDE ULTRA不粘涂层，具有超长的持久防粘性能和改善的耐磨性',
        price: '3199'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '锅 具 Kochgeschirr',
        imagePath: '/images/second-level-directory/haushaltswaren/锅 具 Kochgeschirr/32003.jpg',
        title:'ZWILLING TWIN 玻璃盖，28厘米 TWIN®Nova 40111-928-0 ',
        description:'ZWILLING的锅专用玻璃盖使您可以享受节能油炸的乐趣。得益于完美的封闭系统，烹饪过程不会受到不必要的能量损失的干扰。这使您可以烤大块的肉或鱼。使用这种高效的厨房用具，甚至可以将蔬菜整体制成。 盖子由玻璃制成的事实，可以进行视觉烘烤。这对于保持烹饪过程的确切状态而不必提起盖子特别有用。紧密配合的盖子可防止水蒸气逸出，从而节省能源。TWIN®NOVA系列的28厘米盖子不仅在烹饪时为您提供支撑，而且还能使您的食物保持温暖。此外，该同名系列锅的有用补品具有极其不敏感的表面。使用玻璃盖，您可以准备节能并清洁餐具。盖子边缘由优质18/10不锈钢制成',
        price: '3179'
    }),
    
    new Product({
        category: 'haushaltswaren',
        group: '锅 具 Kochgeschirr',
        imagePath: '/images/second-level-directory/haushaltswaren/锅 具 Kochgeschirr/32004.jpg',
        title:'STAUB Staub的明日世界砂锅 24厘米 科科特 40501-166-0',
        description:'独家的明日世界设计 独特的盖子旋钮上刻有“世界口味”字样 特殊的盖子可关闭锅盖，并保留菜肴的自然风味，使其保持多汁且充满风味 适用于所有烤盘，包括电磁炉 辛辣灼热和肉，鱼或蔬菜慢煮的理想选择 传统的铸铁非常耐用，可以保持热量并均匀分布。内部的黑色搪瓷涂层增强了这种效果。 限量版',
        price: '4299'
    }),

    new Product({
        category: 'haushaltswaren',
        group: '锅 具 Kochgeschirr',
        imagePath: '/images/second-level-directory/haushaltswaren/锅 具 Kochgeschirr/32005.jpg',
        title:'DEMEYERE 锥形砂锅带玻璃盖 阿波罗 40850-766-0',
        description:'ZWILLING的锅专用玻璃盖使您可以享受节能油炸的乐趣。得益于完美的封闭系统，烹饪过程不会受到不必要的能量损失的干扰。这使您可以烤大块的肉或鱼。使用这种高效的厨房用具，甚至可以将蔬菜整体制成。 盖子由玻璃制成的事实，可以进行视觉烘烤。这对于保持烹饪过程的确切状态而不必提起盖子特别有用。紧密配合的盖子可防止水蒸气逸出，从而节省能源。TWIN®NOVA系列的28厘米盖子不仅在烹饪时为您提供支撑，而且还能使您的食物保持温暖。此外，该同名系列锅的有用补品具有极其不敏感的表面。使用玻璃盖，您可以准备节能并清洁餐具。盖子边缘由优质18/10不锈钢制成',
        price: '2999'
    }),

    new Product({
        category: 'haushaltswaren',
        group: '锅 具 Kochgeschirr',
        imagePath: '/images/second-level-directory/haushaltswaren/锅 具 Kochgeschirr/32006.jpg',
        title:'TWIN 高压锅，6升，22厘米 ZWILLING®AirControl 40435-622-0',
        description:'满足最高要求的压力锅：ZWILLING AIRCONTROL 6升压力锅具有其质量，功能和工艺，属于高级级别。它的操作非常简单，只需一只手即可完成。即使是密封的封闭盖也可以通过刺刀式卡扣轻松操作。 当您要抬起锅并将其放在炉子上时，额外的安全环手柄被证明是一种舒适的额外设备。在整个烹饪过程中保持凉爽，意味着您无需保留隔热垫或类似物品的库存。 对于有压力的烹饪，有两个可调的烹饪水平。在低速烹饪和高速烹饪之间进行选择-两者都可从短烹饪时间和高节能中受益。借助压力指示器，可以轻松控制烹饪过程本身。要重新打开压力锅，请使用快速释放蒸汽台快速安全地降低压力。为了最大的安全性，打开时还要确保剩余压力。 尤其是在健康厨房中，ZWILLING AIRCONTROL压力锅几乎可以无限地发挥您的创意。无论是大米，蔬菜，汤还是炖菜-都可以保留天然风味和重要物质，并且日常烹饪几乎都是由自己完成的。 最高品质的6升高压锅 两个可调烹饪水平 节省时间和精力 安全简便 各种菜肴的理想选择',
        price: '3299'
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
