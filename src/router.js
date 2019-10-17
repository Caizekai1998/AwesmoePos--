import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

import Pos from '@/components/page/Pos';

export default new Router({
    routes:[
        {path:'/',component:Pos}
    ]
})