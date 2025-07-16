let res=document.getElementById("final");

let fa=document.getElementById("aa");
let fb=document.getElementById("bb");


fa.addEventListener("click",()=>{
    let na=document.getElementById("aa");
    let n1=prompt("enter 1st number: ",);
    if(n1===null ||  n1.length==0){
        na.innerHTML="ENTER 1ST NUM";
        num1=undefined;
    }
    else{
        num1=Number.parseFloat(n1);
    na.innerText=num1;
    }
    res.innerHTML=" ";
})

fb.addEventListener("click",()=>{
    let n2=prompt("enter 2nd number: ");
    let nb=document.getElementById("bb");
    if(n2===null || n2.length==0){
        nb.innerHTML="ENTER 2ND NUM";
        num2=undefined;
    }
    else{
    num2=Number.parseFloat(n2);
    nb.innerText=num2;
    }
    res.innerHTML=" ";
})


let first=document.getElementById("first");
let second=document.getElementById("second");

first.addEventListener("click",()=>{
    let n1r=prompt("enter 1st number again: ");
 num1=Number.parseFloat(n1r);
let nar=document.getElementById("aa");
if(n1r===null ||n1r.length==0){
    nar.innerHTML="ENTER 1ST NUM";
    num1=undefined;
}
else{
num1=Number.parseFloat(n1r);
nar.innerText=num1;
}
res.innerHTML=" ";
})


second.addEventListener("click",()=>{
    let n2r=prompt("enter 2nd number again: ");
    num2=Number.parseFloat(n2r);
    console.log(n2r,typeof n2r);
    let nbr=document.getElementById("bb");
    if(n2r===null || n2r.length==0 ){
        nbr.innerHTML="ENTER 2ND NUM";
        num2=undefined;
    }
    else{
    num2=Number.parseFloat(n2r);
    nbr.innerText=num2;
    }
    res.innerHTML=" ";
})


let add=document.getElementById("add");

let sub=document.getElementById("sub");

let mul=document.getElementById("mul");

let div=document.getElementById("div");

add.addEventListener("click",()=>{
    console.log(num1,typeof num1);
    if(num1==null || num2==null){
        res.innerHTML=" ";
    }
    else{
    res.innerHTML=num1+num2;
    }
})

sub.addEventListener("click",()=>{
    if(num1==undefined || num2==null){
        res.innerHTML=" ";
    }
    else{
    res.innerHTML=num1-num2;
    }
})

mul.addEventListener("click",()=>{
    if(num1==null || num2==null){
        res.innerHTML=" ";
    }
    else{
    res.innerHTML=num1*num2;
    }
})

div.addEventListener("click",()=>{
    if(num1==null || num2==null){
        res.innerHTML=" ";
    }
    else if(num2==0){
        res.innerHTML="ERROR";
        return;
    }
   else {res.innerHTML=num1/num2;
}
}
)



const toggleMode = document.getElementById('toggle-mode');
	const container = document.querySelector('.con');

	toggleMode.addEventListener('change', function() {
		container.classList.toggle('dark-mode');
        let xx=document.getElementById("conn");
        if(xx.classList.contains("dark-mode")){
            xx.style.border="10px solid #555"
            xx.style.boxShadow="rgba(85, 85, 85, 0.26) 0px 22px 70px 4px;"
           
        }
        else{
            xx.style.border="10px solid white"
            xx.style.boxShadow="rgba(255, 255, 255, 0.26) 0px 22px 70px 4px;"
            
        }
	});


    let y=document.getElementById("hea");
    y.addEventListener("click",()=>{
        window.location.reload();    
    })