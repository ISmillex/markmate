<script lang="ts">
    export let showFileMenu = false;
</script>


<div class="file-menu" style="width: {showFileMenu ? '260px': 0}">
    <div class="files"></div>
    <div class="search"></div>
</div>


<style>
    .file-menu {
        height: 100vh;
        display: block;
        background-color: #363b41;
        margin-left: -10px;
        position: relative;
        transition: 0.3s;
        z-index: 5;
    }
</style>