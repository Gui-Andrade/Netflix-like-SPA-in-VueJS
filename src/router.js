import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import VideoPage from '@/views/VideoPage.vue'
import VideoPlayer from '@/views/VideoPlayer.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/VideoPage/:title',
            name: 'video-page',
            component: VideoPage,
            props: true
        },
        {
            path: '/VideoPlayer/:title',
            name: 'video-player',
            component: VideoPlayer,
            props: true
        }
    ]
})
