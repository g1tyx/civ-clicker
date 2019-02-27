//汉化杂项
var cnItems = {
    'Thorp': '小村庄',
    'food': '食物',
    'wood': '木头',
    'cut': '砍树',
    'stone': '石头',
    'mine': '采矿',
    'harvest': '收割',
    'free land': '空闲土地',
    'tents': '帐篷',
    'wooden huts': '木屋',
    'cottages': '茅屋',
    'houses': '房屋',
    'mansions': '宅邸',
    'barns': '谷仓',
    'fortifications': '防御工事',
    'wood stockpiles': '木材库存',
    'stone stockpiles': '石头库存',
    'tanneries': '制革厂',
    'smithies': '铁匠铺',
    'apothecaries': '药剂师',
    'graveyards': '墓地',
    'miners': '矿工',
    'woodcutters': '伐木工',
    'sick citizens': '患病公民',
    'idle citizens': '空闲公民',
    'farmers': '农民',
    'tanners': '制革工人',
    'blacksmiths': '铁匠',
    'healers': '医生',
    'clerics': '牧师',
    'labourers': '劳动者',
    'temples': '寺庙',
    'barracks': '军营',
    'stables': '马厩',
    'mills': '工厂',
    'soldiers': '士兵',
    'cavalry': '骑兵',
    'cats': '猫',
    'piety': '虔诚',
    'metal': '金属',
    'corpse': '尸体',
    'herbs': '草药',
    'Conquer more from your neighbors.': '征服更多的邻居。',
    'skins': '皮毛',
    'Build mills': '建造工厂',
    'Build stables': '建造马厩',
    'leather': '皮革',
    'wolves': '狼',
    'bandits': '土匪',
    'ore': '矿石',
    'gold': '黄金',
    'barbarians': '野蛮人',
    'siege engines': '攻城机械',
    'Your raiding party': '您的突击队',
    'Prospecting': '勘探',
    'Harvesting': '收割',
    'Domestication': '驯化',
    'Serfs': '农奴',
    'Guilds': '公会',
    'Feudalism': '封建制度',
    'Civil Service': '行政部门',
    'Nationalism': '民族主义',
    'Aesthetics': '美学',
    'Mathematics': '数学',
    'Code of Laws': '法典',
    'Administration': '政府',
    'Writing': '写作',
    'The Wheel': '车轮',
    'Horseback Riding': '骑马',
    'Basic Shields': '基础盾牌',
    'Basic Weaponry': '基础武器',
    'Improve soldiers': '提升士兵',
    'improves farmers': '提高农民',
    'Granaries': '谷仓',
    'Slums': '贫民窟',
    'Tenements': '公寓',
    'Masonry': '石匠',
    'Flensing': '剥皮工',
    'Construction': '建筑',
    'Architecture': ' 建筑学',
    'Palisade': '栅栏',
    'Macerating': '浸渍',
    'Extraction': '萃取',
    'Gardening': '园艺',
    'Butchering': '屠宰',
    'Playing idle games': '玩放置游戏',
    'Automatically harvest food': '自动收获食物',
    'Automatically cut wood': '自动砍木头',
    'Automatically mine stone': '自动开采石头',
    '+200 food storage': '+200 食物存储上限',
    '+200 wood storage': '+200 木头存储上限',
    '+200 stone storage': '+200 石头存储上限',
    'allows 1 tanner': '允许1个制革商',
    'allows 1 blacksmith': '允许1铁匠',
    'allows 1 cleric': '允许1神职人员',
    'allows 10 soldiers': '允许10个士兵',
    'allows 10 cavalry': '允许10个骑兵',
    'contains 100 graves': '包含100个坟墓',
    'Skinning': '剥皮',
    'Farmers can collect skins': '农民可收集皮毛',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}



//汉化标题
var cntit = {
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    

};

function cntitle(text) {
    //数组里面有的，返回中文
    for (var i in cntit) {
        if (text == i) {
            return cntit[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cntit) {
        if (text != i) {
            console.log("需汉化的英文标题：" + text);
            return text;
        }
    }
}

