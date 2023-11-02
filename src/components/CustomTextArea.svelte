<script lang="ts">
    import { onMount } from 'svelte';
    import { position } from 'caret-pos';

    let textarea;
    let customCaret;
    let fakeTextarea;

    let stopAnimation = false;
    let timeout;

    onMount(() => {
        window.addEventListener('keydown', () => {
            textarea.focus();
        });

        textarea.addEventListener('input', updateCaretPosition);
        textarea.addEventListener('click', updateCaretPosition);
        textarea.addEventListener('scroll', updateCaretPosition);
        textarea.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
            }
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                stopAnimation = false;
            }, 500);
            updateCaretPosition(event);
        });

        fakeTextarea.value = textarea.value;
        fakeTextarea.scrollTop = textarea.scrollTop;
    });

    function updateCaretPosition(event) {
        if (event && event.key === 'ArrowLeft') {
            textarea.selectionStart -= 1;
            textarea.selectionEnd -= 1;
            event.preventDefault();
            stopAnimation = true;
        }
        else if (event && event.key === 'ArrowRight') {
            textarea.selectionStart += 1;
            textarea.selectionEnd += 1;
            event.preventDefault();
            stopAnimation = true;
        }

        const pos = position(textarea);
        pos.top -= textarea.scrollTop;

        customCaret.style.left = pos.left - textarea.offsetLeft + 'px';
        customCaret.style.top = pos.top - textarea.offsetTop + pos.height / 2 - customCaret.offsetHeight / 2 + 'px';

        fakeTextarea.value = textarea.value;
        fakeTextarea.scrollTop = textarea.scrollTop;
    }

</script>

<div class="test">
    <div class="text-area">
        <div class="custom-caret" bind:this={customCaret} style="animation-play-state: {stopAnimation ? 'paused' : 'running'}; opacity: {stopAnimation ? 1: undefined}"></div>
        <textarea bind:this={textarea} autofocus></textarea>
        <textarea class="fake-textarea" bind:this={fakeTextarea} readonly></textarea>
    </div>
</div>


<style>
    .test {
        width: 100%;
        height: 100%;
        position: relative;
    }


    .text-area {
        width: 80%;
        max-width: 1000px;
        height: 85%;
        position: absolute;
        left: 50%;
        top: max(8%, 50px);
        transition: 0.3s;
        transform: translateX(-50%);
    }

    .text-area textarea {
        width: 100%;
        height: 100%;
        font-size: 20px;
        color: transparent;
        font-family: 'Mono', sans-serif;
        z-index: 1;
        background: none;
        border: none;
        outline: none;
    }

    .text-area .fake-textarea {
        position: absolute;
        top: 0;
        left: 0;
        color: #B8BFC6;
        font-size: 20px;
        background-color: transparent;
        z-index: 0;
        pointer-events: none;
    }

    .text-area .custom-caret {
        position: absolute;
        height: 30px;
        width: 3px;
        opacity: 1;
        background-color: #1CB955;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        from, to {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
</style>