
// 3. Add event handler


window.addEventListener('keypress',(e)=>{
    
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var V_ID = url.searchParams.get("v");
    if(((e.key=='`'||e.key=='`')) && (V_ID != null)){
        window.open(`https://i.ytimg.com/vi/${V_ID}/maxresdefault.jpg`, "_blank");
    }
    
})

