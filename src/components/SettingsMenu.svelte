<script lang="ts">
    export let showSettingsMenu = false;
</script>


<div class="settings-menu" style="width: {showSettingsMenu ? '400px': 0}">

</div>


<style>
    .settings-menu {
        height: 100vh;
        display: block;
        background-color: #363b41;
        position: relative;
        transition: 0.3s;
        z-index: 5;
    }
</style>