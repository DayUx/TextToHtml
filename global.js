function transform(){
    input = document.getElementById("input");
    output = document.getElementById("output");
    str = input.value;
    str = str.replace(/&/g,"&amp;");
    str = str.replace(/</g,"&lt;");
    str = str.replace(/>/g,"&gt;");
   
    str = str.replace(/"/g,"&quot;");
    str = str.replace(/'/g,"&apos;");
    str = str.replace(/\//g,"&#47; ");
    
    str = str.replace(/`/g,"&#768;");
    
    str = str.replace(/\n/g,`<br>`);
    str = str.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    str = str.replace(/ /g,'&nbsp;');
    
    document.getElementById("preview").innerHTML = str;
    output.value = str;
}

transform();
function copy(){
    output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
}