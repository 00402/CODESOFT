document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementsByTagName('button');
    let display = document.querySelector('.show');
    console.log(btn);
    let text = " ";
    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener("click", function(){
            let a = btn[i].innerText;
            display.innerHTML = text;
            if(a === '='){
                try{
                    text = eval(text);    
                }
                catch{
                    text = "Error";
                }
            }
            else if(a === "C"){
                text = "";
            }
            else{
                text += a;
            }
            display.innerHTML = text || 0 ;
            console.log(text)
        })
    }
})