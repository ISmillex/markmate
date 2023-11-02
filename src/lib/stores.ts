import { writable } from 'svelte/store';
export const states = writable({
    fileMenu: false,
    splitMenu: false,
    focusDropdown: false,
    prevFile: false,
    nextFile: false,
    settingsMenu: false
});


export const textStates = writable({
    body: true,
    heading: {status: false, h1: false, h2: false, h3: false, h4: false, h5: false, h6: false},
    list: {status: false, list: false, orderedList: false, task: false, orderedTask: false},
    blockquote: false,
    bold: false,
    italic: false,
    strikethrough: false,
    link: {status: false, link: false, wikilink: false},
    footnote: false,
    table: false,
    toc: false
})
