import {debounce} from "./utils";

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            itemrefresh: null
        }
    },
    mounted() {
        this.itemrefresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImgListener = () => {
            this.itemrefresh();
        };
        console.log('混入成功');
        this.$bus.$on('itemImageLoad', this.itemImgListener);
    }
};
export const backTopMixin = {
    data: function () {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop: function () {
            this.$refs.scroll.scrollTo(0, 0, 300);
        }
    }
}
export const tabControlMixin = {
    data() {
        return {
            currentType: 'pop'
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
                    break;
            }
            // 伪装吸顶效果tab与不吸顶的tab的点击下标保持一致
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },
        tabClick1(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
                    break;
            }
            console.log(this.currentType);
        },
    }
}
