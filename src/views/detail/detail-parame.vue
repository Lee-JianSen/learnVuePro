<template>
    <div class="param-info">
        <p style="font-size: 10px;margin-top: -15px">{{ParamsInfos.text}}</p>
        <table v-for="(itemSize1,index) in ParamsInfos.size" :key="index">
            <tr v-for="(itemSize2,indey) in itemSize1" :key="indey">
                <td v-for="(itemSize3,indez) in itemSize2" :key="indez">{{itemSize3}}</td>
            </tr>
        </table>
        <div class="param-info-bottom" v-for="item in ParamsInfos.infos">
            <p>{{item.key}}</p>
            <p>{{item.value}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailParame",
        props: {
            ParamsInfos: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .param-info {
        padding: 20px 10px;
        font-size: 14px;
        /*border-bottom: 5px solid #f2f5f8;*/
    }

    .param-info table {
        width: 100%;
        border-collapse: collapse;
    }

    .param-info table tr {
        height: 38px;
    }

    .param-info table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }

    .param-info table tr:last-child td {
        border-bottom: 3px solid rgba(100, 100, 100, .1);
    }
    .param-info-bottom{
        display: flex;
    }
    .param-info-bottom > p {
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .param-info-bottom:last-child > p {
        padding-bottom: 10px;
        padding-right: -5px;
        padding-left: 0;
        border-bottom: 3px solid rgba(100, 100, 100, .1);
    }
    .param-info-bottom:not(:first-child){
        margin-bottom: -15px;
    }
    .param-info-bottom > p:last-child {
        padding-left: 45px;
        width: 75%;
        color: red;
    }
</style>
