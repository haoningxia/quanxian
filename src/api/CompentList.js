const SendOut = () => import('../views/SendOut.vue') //发货
const ReturnOf = () => import('../views/ReturnOf.vue') //退货

const PUnpacking = () => import('../views/PUnpacking.vue') //粉漆开箱
const PproduceMain = () => import('../views/PproduceMain.vue') //粉漆生产维护
const PparameterMain = () => import('../views/PparameterMain.vue') //粉漆参数维护
const PTestRecord = () => import('../views/PTestRecord.vue') //粉漆检测记录
const PCountRecord = () => import('../views/PCountRecord.vue') //粉漆计数维护

const WUnpacking = () => import('../views/WUnpacking.vue') //水漆开箱
const WproduceMain = () => import('../views/WproduceMain.vue') //水漆生产维护
const WparameterMain = () => import('../views/WparameterMain.vue') //水漆参数维护
const WTestRecord = () => import('../views/WTestRecord.vue') //水漆检测记录
const WCountRecord = () => import('../views/WCountRecord.vue') //水漆计数维护

const AbnormalSendout = () => import('../views/AbnormalSendout.vue') //发货异常
const AbnormalReturnOf = () => import('../views/AbnormalReturnOf.vue') //退货异常
const Home = () => import('../components/Home.vue') //home

export default {
    SendOut,
    ReturnOf,
    PUnpacking,
    PproduceMain,
    PparameterMain,
    PTestRecord,
    PCountRecord,
    WUnpacking,
    WproduceMain,
    WparameterMain,
    WTestRecord,
    WCountRecord,
    AbnormalSendout,
    AbnormalReturnOf,
    Home
}