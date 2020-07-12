<template>
    <!-- swiper -->
    <div class="wrapper">
        <MainTabBar></MainTabBar>
        <!--        伪装吸顶效果-->
        <TabControl
                :title="['推荐','精选','热门']"
                @tabClick="tabClick"
                ref="tabControl1"
                v-show="isShowTabControl"
                class="tab-control2"
        />
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                :pull-up-load="true"
                @scroll="contentClick"
                @pullingUp="pullingUp"
        >
            <swiper v-if="result.length" class="swiperss" :options="swiperOption">
                <swiper-slide v-for="item in result">
                    <a :href="item.link">
                        <img @load="imageFinsh" class="image" :src="item.image" alt="">
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
                <!--                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
            <home-recommend-view :recommend="recommend"/>
            <FreatureView/>
            <TabControl
                    :title="['推荐','精选','热门']"
                    @tabClick="tabClick"
                    ref="tabControl2"/>
            <goodlist :goodslist="showGoods"/>
        </scroll>
        <back-icon @click.native="backTop" v-show="isShowBackTop"/>
        <router-view></router-view>
    </div>

</template>

<script>
    import {getHomeSwiper, getTabBar} from "../../netword/networdapi";

    import 'swiper/dist/css/swiper.css';////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    import HomeRecommendView from "./HomeRecommendView";
    import FreatureView from "./FreatureView";
    import TabControl from "./TabControl";
    import goodlist from "./goodlist";
    import Scroll from "../../components/Scroll";
    import backIcon from "../../components/backIcon";
    import MainTabBar from "../MainTabBar";
    import {itemListenerMixin, backTopMixin, tabControlMixin} from "../../components/common/mixin";

    export default {
        name: "Home",
        created() {
            this.getHomeData();
            this.getTabBarData('pop');
            this.getTabBarData('new');
            this.getTabBarData('sell');
        },
        mixins: [itemListenerMixin, backTopMixin, tabControlMixin],
        mounted() {
        },
        activated() {
            this.$nextTick(() => {
                this.$refs.scroll.scrollTo(0, this.deactivatedOffsetY, 0);
            });
            this.$refs.scroll.refresh();
        },
        deactivated() {
            // 保存滚动Y值
            this.deactivatedOffsetY = this.$refs.scroll.scroll.y;
            console.log(this.deactivatedOffsetY);

        },
        methods: {
            getHomeData() {
                getHomeSwiper().then(res => {
                    this.result = res.data.data.banner.list;
                    this.recommend = res.data.data.recommend.list;
                }).catch(error => {
                    console.log(error);
                })
            },
            getTabBarData(type) {
                let page = this.goods[type].page + 1;
                getTabBar(type, page).then(res => {
                    console.log(res.data.data.list);
                    this.goods[type].list.push(...res.data.data.list)
                    this.goods[type].page += 1;
                    // 实现多次上拉加载
                    this.$refs.scroll.finishPullUp();
                }).catch(error => {
                    console.log(error);
                })

            },
            // backTop() {
            //     // 通过给组件绑定ref可以拿到该组件里面的data数据
            //     this.$refs.scroll.scrollTo(0, 0, 500)
            // },
            // 隐藏与显示
            contentClick(position) {
                //决定按钮显示与隐藏
                this.isShowBackTop = position.y < -500;
                // 觉得tabControl是否吸顶
                this.isShowTabControl = position.y < -this.TabOffsetTop;
                //
            },
            // 上拉加载
            pullingUp() {
                this.getTabBarData(this.currentType);
            },
            // 防抖，延迟执行监听

            imageFinsh() {
                // 获取轮播图图片加载完之后tabControl的高度
                this.TabOffsetTop = this.$refs.tabControl2.$el.offsetTop
            },
        },
        data() {
            return {
                result: [],
                recommend: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                isShowTabControl: false,
                TabOffsetTop: 0,
                deactivatedOffsetY: 0,
                swiperOption: {
                    autoplay: {
                        delay: 1500,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                }
            }

        },
        components: {
            MainTabBar,
            swiper,
            swiperSlide,
            HomeRecommendView,
            FreatureView,
            TabControl,
            goodlist,
            Scroll,
            backIcon
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
    }
</script>

<style scoped>
    .image {
        width: 100%;

    }

    /*.content{*/
    /*    height: calc(100%);*/
    /*    overflow: hidden;*/
    /*}*/
    .content {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 2px;
        right: 2px;
    }

    .tab-control2 {
        position: relative;
        z-index: 9;
    }
</style>
