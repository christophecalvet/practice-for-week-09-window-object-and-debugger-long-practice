export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    window.document.title = "My name Portfolio"



    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    window.document.body.children[0].children[0].innerText = "I am me";

    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

     window.document.body.children[1].children[1].innerText = "Very short";

    // Your code here
}
