// Detect Menu Button to enable or disable left menu nav bar

function inactive_menu_btn() {
    let inactive_bar = document.querySelector("#inactive_bar");
    let active_bar = document.querySelector("#active_bar");
    let top_nav_bar = document.querySelector("#top_nav_bar");
    let ytb_body = document.querySelector("#ytb_body");

    inactive_bar.style.visibility = 'hidden'; // Make the inactive bar hidden
    active_bar.style.visibility = 'visible'; // Make the active bar visible
    active_bar.style.width = '240px'; // Transition
    top_nav_bar.style.opacity = 0.3; // Opacity 
    ytb_body.style.opacity = 0.3; // Opacity 
}

function active_menu_btn() {
    inactive_bar.style.visibility = 'visible'; //Make the inactive bar visible
    active_bar.style.visibility = 'hidden';// Make the active bar hidden
    active_bar.style.width = '0'; // Transition
    top_nav_bar.style.opacity = 1; // Opacity 
    ytb_body.style.opacity = 1; // Opacity 
}


// Function to get what was typed and search on actual YouTube website
function submit_func() {
    let input_search = document.getElementById("input_search").value;
    window.open("https://www.youtube.com/results?search_query="+input_search);
}
