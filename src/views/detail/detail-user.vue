<template>
    <div>
        <div v-if="Object.keys(userEvaluation).length!==0" class="userEvaluation">
            <p>用户评价<span>更多</span></p>
            <div class="userInformation">

                <img :src="userEvaluation.userAvatar" alt="">
                <span>{{userEvaluation.userName}}</span>
            </div>
            <div class="userContent">
                <p>{{userEvaluation.content}}</p>
                <p>
                    {{userEvaluation.timer|showTimer}}
                    <span>{{userEvaluation.style}}</span>
                </p>
                <img v-show="userEvaluation.userImage.length !== 0"
                     v-for="item in userEvaluation.userImage"
                     :src="item" alt="">
            </div>
        </div>
    </div>

</template>

<script>
    import {formatDate} from "../../components/common/utils";

    export default {
        name: "detailUser",
        props: {
            userEvaluation: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            showTimer: function (value) {
                let date = new Date(value * 1000);
                return formatDate(date, 'yyyy-MM-dd')
            }
        }
    }
</script>

<style scoped>
    .userEvaluation {
        padding: 0 5px;
        margin-top: -10px;
    }

    .userEvaluation > p {
        font-size: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }

    .userEvaluation > p > span {
        padding-right: 10px;
        float: right;
    }

    .userInformation > img {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        vertical-align: middle;
        margin-right: 10px;
        margin-bottom: 5px;
    }

    .userContent {
        padding-bottom: 15px;
        border-bottom: 3px solid rgba(100, 100, 100, .1);
    }

    .userContent > p {
        font-size: 11px;
        margin-top: -5px;
        color: rgba(140, 140, 140, 1);
    }

    .userContent > p:first-child {
        margin-top: 0;
        font-size: 13px;
        color: black;
    }

    .userContent > img {
        padding-right: 5px;
        width: 60px;
        height: 60px;
    }
</style>
