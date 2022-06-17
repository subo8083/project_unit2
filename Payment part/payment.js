document.querySelector("form").addEventListener("submit",proceed);
function proceed(event){
    event.preventDefault();
    let cardnum=1234567812345678;
    let cvv=123;
    let expiry="02/26";
    let enterednum=document.querySelector("#cardno").value;
    let enteredcvv=document.querySelector("#cvv").value;
    let enteredexpiry=document.querySelector("#date").value;
    
    if(enterednum==cardnum && enteredcvv==cvv && enteredexpiry==expiry){
         window.location.href="http://127.0.0.1:5500/otp%20part/otp.html";
        }else{
            alert("Invalid Credentials!");
            document.querySelector("#cardno").value="";
            document.querySelector("#cvv").value="";
            document.querySelector("#date").value="";
          }  
    }
