const mybtn = document.getElementById("about_page");
const mylinks = document.getElementById("mylink").getAttribute("href");

mybtn.onclick = function(){
    if (!mylinks || mylinks.trim() === "") {
        alert("Not Available");
        return false;
    }
    return true;
}