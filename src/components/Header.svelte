<script lang="ts">

    import FocusDropdown from "./FocusDropdown.svelte";

    import {states} from "$lib/stores";

    function handleMouseClick(event) {
        const targetClass = event.currentTarget.className;
        if (targetClass.includes("file-menu")) {
            $states.fileMenu = !$states.fileMenu;
        }
        else if (targetClass.includes("prev-file")) {
            $states.prevFile = !$states.prevFile;
        }
        else if (targetClass.includes("next-file")) {
            $states.nextFile = !$states.nextFile;
        }
        else if (targetClass.includes("focus-dropdown") && !$states.splitMenu && !$states.settingsMenu) {
            $states.focusDropdown = !$states.focusDropdown;
        }
        else if (targetClass.includes("split-menu")) {
            $states.splitMenu = !$states.splitMenu;
            if ($states.focusDropdown) $states.focusDropdown = false;
        }
        else if (targetClass.includes("settings-menu")) {
            $states.settingsMenu = !$states.settingsMenu;
            if ($states.focusDropdown) $states.focusDropdown = false;
        }
    }
</script>


<div class="header">
    <div class="left-side wrapper">
        <div class="file-menu {$states.fileMenu ? 'active' : ''}" on:click={handleMouseClick}>
            <svg height="30px" width="36px" viewBox="0 0 24 24" class="icon">
                <path d="M10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"></path>
            </svg>
        </div>
        <div class="prev-file" on:click={handleMouseClick}>
            <svg height="24" width="24" viewBox="0 -960 960 960">
                <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
            </svg>
        </div>
        <div class="next-file" on:click={handleMouseClick}>
            <svg height="24" width="24" viewBox="0 -960 960 960">
                <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" />
            </svg>
        </div>
        <div class="title">Title</div>
    </div>
    <div class="right-side wrapper">
        <div class="focus-dropdown {$states.focusDropdown ? 'active' : ''}" on:click={handleMouseClick}>
            <span>focus</span>
            <svg height="18" width="18" viewBox="0 -960 960 960">
                <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
        </div>
        <div class="split-menu {$states.splitMenu ? 'active' : ''}" on:click={handleMouseClick}>
            <svg height="20px" width="20px" viewBox="0 0 24 24" class="icon">
                <path d="M11,20.977l-6,0c-1.104,0 -2,-0.896 -2,-2l0,-14c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,14c0,1.104 -0.895,2 -2,2l-6,0l0,0.023l-2,0l0,-0.023Zm0,-2l0,-14l-6,0l0,14l6,0Zm8,-14l-6,0l0,14l6,0l0,-14Z"></path>
            </svg>
        </div>
        <div class="settings-menu {$states.settingsMenu ? 'active' : ''}" on:click={handleMouseClick}>
            <svg height="24" width="24" viewBox="0 -960 960 960">
                <path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/>
            </svg>
        </div>
    </div>
</div>
<FocusDropdown showFocusDropdown={$states.focusDropdown}/>



<style>

    .header {
        width: 100%;
        height: 40px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: #363b41;
    }

    .header .left-side {
        position: absolute;
        left: 0;
        height: 100%;
    }


    .header .right-side {
        position: absolute;
        right: 0;
        height: 100%;
    }

    .header svg {
        fill: #b8bfc6;
        transition: 0.2s;
    }

    .header svg:hover {
        fill: #30CD69;
        transition: 0.2s;
    }

    .wrapper {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper * {
        display: flex;
        position: relative;
        align-items: center;
        height: 100%;
        padding-top: 2px;
    }

    .file-menu {
        padding-left: 15px;
        padding-top: 0;
    }

    .prev-file {
        padding-left: 10px;
    }

    .next-file {
        padding-right: 10px;
    }

    .title {
        padding-right: 15px;
        color: white;
    }

    .focus-dropdown {
        transition: 0.2s;
        margin-right: 10px;
    }

    .focus-dropdown svg {
        padding-top: 4px;
    }

    .focus-dropdown span {
        padding-top: 0;
    }

    .focus-dropdown:hover svg,
    .focus-dropdown:hover span {
        color: #30CD69;
        fill: #30CD69;
        transition: 0.2s;
    }

    .split-menu {
        margin-right: 15px;
    }

    .settings-menu {
        margin-right: 15px;
    }

    .active svg,
    .active span{
        fill: #1cb955;
        color: #1CB955;
    }

</style>
