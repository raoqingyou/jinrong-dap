import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/view/index'
// import submitFailure from '@/view/submitFailure'
// import submitSuccessFully from '@/view/submitSuccessfully'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration
    }
    // {
    //   path: '/submitFailure',
    //   name: 'submitFailure',
    //   component: submitFailure
    // },
    // {
    //   path: '/submitSuccessFully',
    //   name: 'submitSuccessfFully',
    //   component: submitSuccessFully
    // }
  ]
})
