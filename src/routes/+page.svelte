<script lang="ts">
    import CustomTextArea from "../components/CustomTextArea.svelte"
    import SplitMenu from "../components/SplitMenu.svelte";


    import {states} from "$lib/stores";
</script>


<div class="edit-content">
    <CustomTextArea />
    <SplitMenu showSplitMenu={$states.splitMenu}/>
</div>



<style>
    .edit-content {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        background-color: #2E3033;
    }
</style>