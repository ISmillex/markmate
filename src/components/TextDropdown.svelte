<script lang="ts">
    export let showFocusDropdown = false;
</script>



<div class="focus-dropdown" style="height: {showFocusDropdown ? '250px': 0}">

</div>


<style>
    .focus-dropdown {
        width: 150px;
        display: block;
        right: 45px;
        position: fixed;
        background-color: #363b41;
        transition: 0.3s;
        z-index: 5;
    }
</style>