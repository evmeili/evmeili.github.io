<template>
<div>
    <Search/>
    <Grid/>
    <Tu/>
    <Divider/>
    <Card/>
</div>
</template>
<script>
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Tu from "../components/Tu.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
export default {
    components: {
        Search,
        Grid,
        Tu,
        Divider,
        Card
    }
};
</script>
