<template>
    <div id="q-app">
        <router-view />
    </div>
</template>

<script>
import TabNavbar from './components/TabNavbar'
export default {
    name: 'App',
    components: {
        TabNavbar
    }
}
</script>



