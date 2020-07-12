<template>
    <div id="detail">
        <navbar ref="nav" @navBarClick="navBarClick"/>
        <scroll
                class="content"
                ref="scroll"
                :probe-type="3"
                @scroll="contentClick"
                :pull-up-load="true"
        >
            <swiper v-if="topImages.length" class="swiperss" :options="swiperOption">
                <swiper-slide v-for="item in topImages">
                    <img class="image" :src="item" alt="">
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
                <!--                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
            <detail-information
                    :goods-infos="goodsInfos"
                    :columns="columns"
                    :shop-services="shopServices"
                    :shop="shop"
            />
            <detail-goods-info :detail-goods-info="detailGoodsInfo" @imageLoad="imageLoad"/>
            <detail-parame ref="parame" :params-infos="ParamsInfos"/>
            <detail-user ref="user" :user-evaluation="userInformation"/>
            <goodlist ref="goodList" :goodslist="recommendList"/>
        </scroll>
        <back-icon v-show="isShowBackTop" @click.native="backTop"/>
        <detail-bottom-nav-bar @buyClick="BuyClick"/>
    </div>
</template>

<script>
    import {getDetail, Goods, Shop, ItemParams, UserEvaluation, getRecommend} from "../../netword/networdapi";

    import 'swiper/dist/css/swiper.css';////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    // 使用vant组件库
    import Vue from 'vue'
    import { Button, Toast } from 'vant';
    Vue.use(Button);
    Vue.use(Toast);
    // 将vuex映射到这里
    import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'

    import goodlist from "../Home/goodlist";

    import Scroll from "../../components/Scroll";
    import {formatDate} from "../../components/common/utils";
    import navbar from "../../components/NavBar/navbar";
    import {debounce} from "../../components/common/utils";
    import backIcon from "../../components/backIcon";
    import {itemListenerMixin, backTopMixin} from "../../components/common/mixin";

    import detailInformation from "./detail-information";
    import detailGoodsInfo from "./detail-goodsInfo";
    import detailParame from "./detail-parame";
    import detailUser from "./detail-user";
    import detailBottomNavBar from "./detail-bottom-navbar";


    export default {
        name: "detail",
        mixins: [itemListenerMixin, backTopMixin],
        data() {
            return {
                iid: null,
                // 商品信息
                goodsInfos: {},
                // 店铺信息
                shop: {},
                // 轮播图 图片
                topImages: [],
                // 销量及收藏
                columns: [],
                // 商家服务
                shopServices: null,
                // 商品详情
                detailGoodsInfo: {},
                ParamsInfos: {},
                userInformation: {},
                recommendList: [],
                navBarTopYs: [],
                getNavBarTopY: null,
                currentIndex: 0,
                swiperOption: {
                    autoplay: {
                        delay: 1500,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                },
            }
        },
        created() {
            this.iid = this.$route.query.id;
            this.getDetailData();
            this.getRecommendData();
            this.getNavBarTopY = debounce(() => {
                this.navBarTopYs.push(0);
                this.navBarTopYs.push(this.$refs.parame.$el.offsetTop);
                this.navBarTopYs.push(this.$refs.user.$el.offsetTop);
                this.navBarTopYs.push(this.$refs.goodList.$el.offsetTop);
                // JS的Number最大值
                this.navBarTopYs.push(Number.MAX_VALUE);
                console.log(this.navBarTopYs);
            }, 500)
        },
        mounted() {
        },
        destroyed() {
            // 关闭事件总线
            this.$bus.$off('itemImgLoad', this.itemImgListener)
        },
        components: {
            navbar,
            swiper,
            swiperSlide,
            Scroll,
            detailInformation,
            detailGoodsInfo,
            detailParame,
            detailUser,
            goodlist,
            backIcon,
            detailBottomNavBar,
        },
        methods: {
            // 映射addProduct
            ...mapActions(['addProduct']),
            getDetailData() {
                getDetail(this.iid).then(res => {
                    // 商品信息
                    const goodsInfo = res.data.result.itemInfo;
                    this.topImages = goodsInfo.topImages;
                    // 销量及收藏
                    this.columns = res.data.result.columns;
                    // 商家信息
                    const shopInfo = res.data.result.shopInfo;
                    // 商家服务
                    this.shopServices = shopInfo.services;
                    // 商品参数
                    const params = res.data.result.itemParams;
                    this.detailGoodsInfo = res.data.result.detailInfo;

                    this.goodsInfos = new Goods(goodsInfo, this.columns, this.shopServices);
                    this.shop = new Shop(shopInfo);
                    this.ParamsInfos = new ItemParams(params.info, params.rule)
                    console.log(this.goodsInfos);
                    if (res.data.result.rate.cRate !== 0) {
                        this.userInformation = new UserEvaluation(res.data.result.rate.list[0])
                    }
                    // this.time = res.data.result.rate.list[0].created
                    // console.log(typeof this.userInformation);
                }).catch(error => {
                    console.log(error);
                })
            },
            imageLoad() {
                // this.$refs.scroll.refresh();
                this.itemrefresh();
                this.getNavBarTopY();
            },
            contentClick(position) {
                //决定按钮显示与隐藏
                this.isShowBackTop = position.y < -1500;
                // console.log(this.isShowBackTop);
                // 顶部导航监听滚动位置改颜色
                const positionY = -position.y;
                for (let i=0;i<this.navBarTopYs.length-1;i++){
                    if (this.currentIndex !== i
                    &&
                        ((positionY>=this.navBarTopYs[i]
                    &&
                    positionY<this.navBarTopYs[i+1]))
                    ){
                        this.currentIndex = i;
                        this.$refs.nav.currentIndex = this.currentIndex;
                    }
                }
                // for (let i in this.navBarTopYs) {
                //     if (this.currentIndex !== parseInt(i)
                //         &&
                //         ((parseInt(i) < this.navBarTopYs.length - 1 && positionY >= this.navBarTopYs[parseInt(i)]
                //                 &&
                //                 positionY < this.navBarTopYs[parseInt(i) + 1])
                //             || (parseInt(i) === this.navBarTopYs.length - 1 && positionY >= this.navBarTopYs[parseInt(i)])
                //         )) {
                //         this.currentIndex = parseInt(i);
                //         this.$refs.nav.currentIndex = this.currentIndex;
                //     }
                // }
            },
            getRecommendData() {
                getRecommend().then(res => {
                    // 推荐数据
                    this.recommendList = res.data.data.list;
                })
            },
            navBarClick(index) {
                this.$refs.scroll.scrollTo(0, -this.navBarTopYs[index], 200)
            },

            BuyClick(){
               const product = {};
               product.title = this.goodsInfos.title;
               product.desc = this.goodsInfos.desc;
               product.image = this.topImages[0];
               product.price = this.goodsInfos.realPrice;
               product.iid = this.iid;
               product.change = true;
               product.counter = 0;
               this.addProduct(product);
               // this.$store.dispatch('addProduct',product);
               //  console.log(product);
                Toast('加入购物车成功');
            }

        },
        filters: {
            showDate: function (value) {
                let date = new Date(value * 1000);
                return formatDate(date, 'yyyy-MM-dd')
            }
        }
    }
</script>

<style scoped>
    .content {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0px;
        left: 2px;
        right: 2px;
    }

    .swiperss {
        padding-top: 40px;
    }

    .image {
        width: 100%;
        height: 250px;
    }
</style>
