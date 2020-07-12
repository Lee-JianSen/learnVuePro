<template>
    <div id="category">
        <div class="content">
            <TabMenu :tab-menu="category" @menuClick="menuClick"></TabMenu>

            <scroll id="tab-content"
                    ref="scroll"
                    :probe-type="3"
                    :data="[]">
                <TabContent :tab-content="categoryContent" @imageLoad="imageLoad"></TabContent>
                <TabControl
                        id="TabControl"
                        :title="['综合','新品','销量']"
                        @tabClick="tabClick1"
                />
                <TabContentDetail id="TabControlDetail" :tab-content-detail="showDetailData"/>
            </scroll>
        </div>
    </div>
</template>

<script>
    import {getCategory, getSubCatrgory, getCategoryDetail} from "../../netword/networdapi";
    import TabMenu from "./TabMenu";
    import TabContent from "./TabContent";
    import Scroll from "../../components/Scroll";
    import TabControl from "../Home/TabControl";
    import TabContentDetail from "./TabContentDetail";
    import {tabControlMixin} from "../../components/common/mixin";

    export default {
        name: "category",
        mixins: [tabControlMixin],
        created() {
            this.getCategoryData();
        },
        data() {
            return {
                category: null,
                categoryContent: null,
                categoryContentDetail: null,
                categoryContentType: [],
                currentIndex: 0
            }
        },
        components: {
            Scroll,
            TabMenu,
            TabContent,
            TabControl,
            TabContentDetail
        },
        computed: {
            showDetailData() {
                return this.categoryContentType[this.currentIndex].categoryType[this.currentType];
            }
        },
        watch: {
            currentIndex: {
                handler(newIndex, oldIndex) {
                    this.currentIndex = newIndex;
                    this.$nextTick(() => {
                        this.$refs.scroll.scrollTo(0, 0, 0);
                    });
                },
                immediate: true
            }
        },
        methods: {
            getCategoryData() {
                getCategory().then(res => {
                        const data = res.data.data.category;
                        this.category = data.list;
                        console.log(this.category);
                        for (let i = 0; i <= this.category.length; i++) {
                            this.categoryContentType[i] = {
                                categoryType: {
                                    'pop': [],
                                    'new': [],
                                    'sell': []
                                }
                            }
                        }
                        this.getSubCatrgoryData(0);
                    },
                )


            },
            getSubCatrgoryData(index) {
                this.currentIndex = index;
                const maitKey = this.category[index].maitKey;
                getSubCatrgory(maitKey).then(res => {
                    const data = res.data.data.list;
                    this.categoryContent = data;
                    this.getCategoryDetailData('pop');
                    this.getCategoryDetailData('sell');
                    this.getCategoryDetailData('new');

                })
            },
            getCategoryDetailData(type) {
                const miniWallkey = this.category[this.currentIndex].miniWallkey
                getCategoryDetail(miniWallkey, type).then(res => {
                    this.categoryContentDetail = res.data;
                    this.categoryContentType[this.currentIndex].categoryType[type] = res.data;
                    this.categoryContentType = [...this.categoryContentType];
                    console.log(this.categoryContentType);
                    console.log('-----------');
                    console.log(this.categoryContentType[this.currentIndex].categoryType[this.currentType]);
                })
            },
            menuClick(index) {
                this.getSubCatrgoryData(index);
            },
            imageLoad() {
                this.$refs.scroll.refresh();
            }
        }
    }
</script>

<style scoped>
    #category {
        height: 100vh;
    }

    .content {
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 49px;
    }

    #tab-content {
        height: 100%;
        float: right;
    }

    #TabControl, #TabControlDetail {
        padding-left: 110px;
    }
</style>
