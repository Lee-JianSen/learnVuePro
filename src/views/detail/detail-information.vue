<template>
<!--    v-if先判断goodsInfos是否有数据-->
    <div v-if="Object.keys(goodsInfos).length !== 0" class="information">
        <div class="title">
            <p>{{goodsInfos.title}}</p>
        </div>
        <div class="price">
            <div class="left">{{goodsInfos.price}}</div>
            <div class="center">￥{{goodsInfos.oldPrice}}</div>
            <div v-show="goodsInfos.discountDesc !== ''" class="right"
                 :style="{backgroundColor:goodsInfos.discountBgColor}">{{goodsInfos.discountDesc}}
            </div>
        </div>
        <div class="columns">
            <div v-for="item in columns">{{item}}</div>
        </div>
        <div class="shopscervices">
            <div v-for="item in shopServices">
                <img :src="item.icon" alt="">
                {{item.name}}
            </div>
        </div>
        <div class="shopInfo">
            <div class="shopInfoTop">
                <img :src="shop.logo" alt="">
                <p>{{shop.name}}</p>
            </div>
            <div class="shopInfoMiddle">
                <div class="boxLeft">
                    <div class="sale">
                        <p>{{shop.sells | sellsNumber}}</p>
                        <p>总销量</p>
                    </div>
                    <div class="babies">
                        <p>{{shop.goodsCount}}</p>
                        <p>全部宝贝</p>
                    </div>
                </div>
                <div class="boxMiddle">
                </div>
                <div class="boxRight">
                    <div class="serviceQuality" v-for="item in shop.score">
                        <p>{{item.name}}</p>
                        <p :class="item.isBetter ? 'lowColor' : 'heightColor' ">
                            {{item.score}}
                            <span :style="item.isBetter ? {background: 'red'} : {background:'green'}">
                            {{item.isBetter ? '高':'低'}}
                          </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="shopInfoBottom">
                <div class="enter-shop">进店逛逛</div>
            </div>
        </div>
        <div class="separate"></div>
    </div>
</template>

<script>

    export default {
        name: "detailInformation",
        props: {
            goodsInfos: {
                type: Object,
                default() {
                    return {};
                }
            },
            columns: {
                type: Array,
                default() {
                    return []
                }
            },
            shopServices: {
                type: Array,
                default() {
                    return [];
                }
            },
            shop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            sellsNumber(value) {
                if (value < 10000) {
                    return value
                } else if (value >= 10000) {
                    return (value / 10000).toFixed(1) + '万'
                }
            }
        },

    }
</script>

<style scoped>
    .information {
        margin-top: -10px;
    }

    .title {
        font-size: 15px;
        font-weight: 600;
        padding: 0 5px;
    }

    .price {
        display: flex;
        margin-top: -10px;
        color: deeppink;
        font-weight: 500;
        font-size: 16px;
        padding: 0 5px;
    }

    .center {
        color: gray;
        text-decoration: line-through;
        font-size: 12px;
        padding-left: 5px;
        padding-top: 5px;
    }

    .right {
        color: white;
        font-size: 12px;
        border-radius: 7px;
        padding: 1px 3px;
        margin-left: 5px;
        text-align: center;
    }

    .columns {
        display: flex;
        margin-top: 10px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: space-between;
        color: grey;
        font-size: 12px;
        border-bottom: 1px solid rgba(240, 240, 240, 1);
    }

    .shopscervices {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        padding: 15px 5px;
        border-bottom: 2px solid rgba(240, 240, 240, 1);
    }

    .shopscervices img {
        width: 10px;
        height: 10px;
    }

    .shopInfo {
        padding: 15px 5px;
    }

    .shopInfoTop {
        display: flex;
        text-align: center;
        align-items: center;
    }

    .shopInfoTop > img {
        width: 42px;
        height: 42px;
        border: 1px solid rgba(140, 140, 140, 0.5);
        border-radius: 25px;
    }

    .shopInfoTop > p {
        padding-left: 10px;
        font-size: 15px;
    }

    .shopInfoMiddle {
        display: flex;
        justify-content: space-between;
    }

    .boxLeft {
        display: flex;
        flex: 1;
        justify-content: space-around;
        text-align: center;
    }

    .sale > p, .babies > p {
        font-size: 12px;
    }

    .sale > p:last-child,
    .babies > p:last-child {
        margin-top: -12px;
    }

    .boxMiddle {
        height: 30px;
        margin-top: 15px;
        border-right: 1px solid rgba(140, 140, 140, 0.5);
    }

    .boxRight {
        flex: 1;
    }

    .serviceQuality {
        display: flex;
        margin-left: 15px;
    }

    .serviceQuality > p {
        font-size: 11px;
        margin-top: -4px;
        padding-left: 10px;
    }

    .serviceQuality > p:last-child {
        width: 40px;
    }

    .serviceQuality > p > span {
        float: right;
        color: white;
        padding: 1px;
    }

    .heightColor {
        color: green;
    }

    .lowColor {
        color: red;
    }

    .shopInfoBottom {
        text-align: center;
        margin-top: 10px;
    }
    .enter-shop {
        display: inline-block;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
    }
    .separate{
        height: 3px;
        background-color: rgba(140, 140, 140, 0.2);
    }
</style>
