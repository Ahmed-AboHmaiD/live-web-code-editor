const frame = document.getElementById("preview-window").contentWindow.document;

function showPreview(){
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = ""+document.getElementById("cssCode").value+"";
    const jsCode = ""+document.getElementById("jsCode").value+"";
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    addToLocal(htmlCode, cssCode, jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

function addToLocal(html, css, js) {
    window.localStorage.setItem("html_code", html);
    window.localStorage.setItem("css_code", css);
    window.localStorage.setItem("js_code", js);
}

function setSavedCode() {
    const savedHTML = window.localStorage.getItem("html_code") || "<div>\n\n</div>";
    const savedCSS = window.localStorage.getItem("css_code") || "<style>\n\n</style>";
    const savedJS = window.localStorage.getItem("js_code") || "<script>\n\n</script>";
    const savedCode = savedHTML+savedCSS+savedJS;

    document.getElementById("htmlCode").value=`${savedHTML}`;
    document.getElementById("cssCode").value=`${savedCSS}`;
    document.getElementById("jsCode").value=`${savedJS}`;

    frame.open();
    savedCode && frame.write(savedCode);
    frame.close();
}
setSavedCode();