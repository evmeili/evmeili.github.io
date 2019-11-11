<template>
    <div>
        <router-view></router-view>
        <Tabbar/>
    </div>
</template>
<script>
import Tabbar from '../components/Tabbar.vue'
export default {
    components: {
        Tabbar
    }
}
</script>