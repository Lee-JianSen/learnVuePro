import {request} from "./request";

export function getHomeSwiper() {
    return request({
        // url: '/home/multidata',
        url: '/api/wh/home/multidata',
    })
}

// }
export function getTabBar(type, page) {
    return request({
        // url: '/api/hy/home/data',
        url: '/api/wh/home/data',
        params: {
            type,
            page
        }
    })
}

export function getDetail(iid) {
    return request({
        // url: '/api/hy/detail',
        url: '/api/wh/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/api/wh/recommend'
    })
}

export function getCategory() {
    return request({
        url: '/api/wh/category'
    })
}

export function getSubCatrgory(maitKey) {
    return request({
        url: '/api/wh/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: '/api/wh/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, service) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.lowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.columns.pop();
        this.columns.push(service[0].name);
        this.realPrice = itemInfo.lowNowPrice;
        service.shift();
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.fans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class ItemParams {
    constructor(info, rule) {
        this.text = rule.disclaimer;
        this.infos = info.set;
        this.size = rule.tables;
    }
}

export class UserEvaluation {
    constructor(rate) {
        this.timer = rate.created;
        this.userImage = rate.images;
        this.content = rate.content;
        this.style = rate.style;
        this.userAvatar = rate.user.avatar;
        this.userName = rate.user.uname;

    }
}
