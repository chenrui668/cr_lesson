<template>
    <div class="look">
        {{ msg }}
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Look',
    data () {
        return {
            msg: '看一看'
        }
    }
}
</script>