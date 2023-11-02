<script lang="ts">
    import {textStates} from "$lib/stores";

    function handleMouseClick(event) {
        const target = event.currentTarget.id;
        if (target === "body") {
            $textStates.body = !$textStates.body;
        }
        else if (target === "heading") {
            $textStates.heading.status = !$textStates.heading.status;
        }
        else if (target === "list") {
            $textStates.list.status = !$textStates.list.status;
        }
        else if (target === "blockquote") {
            $textStates.blockquote = !$textStates.blockquote;
        }
        else if (target === "bold") {
            $textStates.bold = !$textStates.bold;
        }
        else if (target === "italic") {
            $textStates.italic = !$textStates.italic;
        }
        else if (target === "strikethrough") {
            $textStates.strikethrough = !$textStates.strikethrough;
        }
        else if (target === "link") {
            $textStates.link.status = !$textStates.link.status;
        }
        else if (target === "footnote") {
            $textStates.footnote = !$textStates.footnote;
        }
        else if (target === "table") {
            $textStates.table = !$textStates.table;
        }
        else if (target === "toc") {
            $textStates.toc = !$textStates.toc;
        }
    }

</script>


<div class="footer">
    <div class="tools">
        <div class="tool-item {$textStates.body ? 'active' : ''}" id="body" on:click={handleMouseClick}>
            <span>Body</span>
        </div>
        <div class="tool-item {$textStates.heading.status ? 'active' : ''}" id="heading" on:click={handleMouseClick}>
            <span>Heading</span>
        </div>
        <div class="tool-item {$textStates.list.status  ? 'active' : ''}" id="list" on:click={handleMouseClick}>
            <span>List</span>
        </div>
        <div class="tool-item {$textStates.blockquote ? 'active' : ''}" id="blockquote" on:click={handleMouseClick}>
            <span>Blockquote</span>
        </div>
        <div class="tool-item {$textStates.bold ? 'active' : ''}" id="bold" style="border-left: 1px solid #4C4E51; padding-left: 10px" on:click={handleMouseClick}>
            <span>Bold</span>
        </div>
        <div class="tool-item {$textStates.italic ? 'active' : ''}" id="italic" on:click={handleMouseClick}>
            <span>Italic</span>
        </div>
        <div class="tool-item {$textStates.strikethrough ? 'active' : ''}" id="strikethrough" on:click={handleMouseClick}>
            <span>Strikethrough</span>
        </div>
        <div class="tool-item {$textStates.link.status  ? 'active' : ''}" id="link" style="border-left: 1px solid #4C4E51; padding-left: 10px" on:click={handleMouseClick}>
            <span>Link</span>
        </div>
        <div class="tool-item {$textStates.footnote ? 'active' : ''}" id="footnote" on:click={handleMouseClick}>
            <span>Footnote</span>
        </div>
        <div class="tool-item {$textStates.table ? 'active' : ''}" id="table" on:click={handleMouseClick}>
            <span>Table</span>
        </div>
        <div class="tool-item {$textStates.toc ? 'active' : ''}" id="toc" on:click={handleMouseClick}>
            <span>TOC</span>
        </div>
    </div>
    <div class="info">
        <div class="info-item">Markdown</div>
        <div class="info-item"><span>100</span> words</div>
        <div class="info-item"><span>2000</span> characters</div>
        <div class="info-item"><span>9</span> paragraphs</div>
        <div class="info-item" style="border-right: none;"><span>1000</span> bytes</div>
    </div>
</div>


<style>

    .footer {
        width: 100%;
        height: 30px;
        display: flex;
        position: absolute;
        font-size: 13px;
        border-top: 1px solid #4C4E51;
        bottom: 5px;
        left: 0;
    }

    .footer .tools {
        left: 0;
        height: 100%;
        display: flex;
        padding-left: 10px;
        position: absolute;
        align-items: center;
        padding-right: 5px;
        background-color: #2E3033;
        z-index: 2;
    }

    .tools .tool-item {
        padding-right: 10px;
        cursor: default;
        transition: 0.1s;
    }

    .footer .tool-item:hover {
        color: #30CD69;
        transition: 0.1s;
    }

    .footer .info {
        right: 0;
        height: 100%;
        display: flex;
        position: absolute;
        align-items: center;

    }

    .info span {
        font-weight: 700;
    }

    .info .info-item {
        padding-right: 7px;
        border-right: 1px solid #4C4E51;
        padding-left: 7px;
    }

    .active span{
        color: #1CB955;
    }


</style>