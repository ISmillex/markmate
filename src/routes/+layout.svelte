<script lang="ts">
    import Header from "../components/header.svelte"
    import Footer from "../components/footer.svelte"
    import FileMenu from "../components/FileMenu.svelte";
    import SettingsMenu from "../components/SettingsMenu.svelte";

    import "../app.css"
    import {states} from "$lib/stores";


    // import {onMount} from "svelte";
    // let fullscreenElement;
    // onMount(() => {
    //     window.addEventListener('keydown', () => {
    //         fullscreenElement.requestFullscreen();
    //     });
    // });

</script>


<!--bind:this={fullscreenElement}-->
<div class="app">
    <FileMenu showFileMenu={$states.fileMenu}/>
    <div class="wrapper">
        <Header/>
            <slot/>
        <Footer/>
    </div>
    <SettingsMenu showSettingsMenu={$states.settingsMenu}/>
</div>

<style>
    .app {
        width: 100vw;
        height: 100vh;
        position: relative;
        display: flex;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
    }
</style>