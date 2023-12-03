document.getElementsByTagName("button")[0].addEventListener("click", pass_gen);
document.getElementsByTagName("button")[1].addEventListener("click", funny);
op=document.querySelector("#password");
function pass_gen() {
    let len = document.querySelector("#length").value;
    let spc = document.querySelector("#special").checked;
    let num = document.querySelector("#number").checked;
    let up = document.querySelector("#upper").checked;

    if(len === ""){
       op.innerHTML="<strong style=color:red;>*Please Enter Length</strong>";
       return;
    }

    let str = "";
    for (let i = 0; i < len; i++) {
        str = str + String.fromCharCode(Math.floor(Math.random() * (121 - 97 + 1) + 97));
    }
    add = parseInt(Math.floor(Math.random() *len))

    if (spc) {
        let spc_char = ["!", "@", "#", '$', "%", "^", "&", "*", "()", "_", "-", "+", "=", "<", '>', '?', "/"];
        let special = spc_char[Math.floor(Math.random() * 17)];
        str=str.slice(0,add)+ special + str.slice(add);
    }

    if(num){
        let number = Math.floor(Math.random() * 10);
        str=str.slice(0,add)+ number + str.slice(add);
    } 

    if(up){
        str = str.slice(0, 2) + str[2].toUpperCase() + str.slice(3);
    }

    op.innerHTML=`Password Generated: <strong>${str}</strong>`;
}

function funny(){
    document.querySelector("#length").value = "";
    document.querySelector("#special").checked = false;
    document.querySelector("#number").checked = false;
    document.querySelector("#upper").checked = false;
    let fun = ['ineedapassword', 'changeme', 'secret', 'iamforgetful', 'newpassword', 'IamACompleteIdiot', 'nothing', 'nothingagain', 'iforgot', 'whydoialwaysforget', 'user', ' YouWontGuessThisOne', ' PasswordShmashword', ' youmoron', ' doubleclick', ' iamnottellingyoumypw', ' masterpassword', ' yetanotherpassword', ' nomorepasswords', ' password123', ' myonlypassword', ' cantremember', ' dontaskdonttell', ' memorysucks', ' earlyalzheimers', ' passwordforoldpeople'];
    let funn=fun[Math.floor(Math.random() * 25)]
    op.innerHTML=`Password Generated: <strong>${funn}</strong>`;
}