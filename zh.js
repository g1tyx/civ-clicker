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
//            console.log("需汉化的英文Item：" + text);
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

