<script lang="ts">
    export let showSplitMenu = false;

</script>


<div class="split-menu" style="width: {showSplitMenu ? '100%': 0}">

</div>


<style>
    .split-menu {
        height: 100vh;
        display: flex;
        background-color: #1A1C1F;
        position: relative;
        transition: 0.4s;
        z-index: 5;
    }
</style>