let blink=document.getElementById("blink");
    setInterval(function(){
        blink.style.opacity=(blink.style.opacity==0?1:0);
    },500)

    // for crauser part

    let imag=document.getElementById("imge");
    let buttons=document.getElementsByClassName("but");
    let imgArr=["https://images-static.nykaa.com/uploads/a3b68274-a5e5-44e9-984f-f5c69eee46c9.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/0eaf59f6-efbe-4f8c-886b-64d60e94ea68.gif?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/6c220042-b021-457b-bdd5-6acf1b8c56d1.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/c6a622a9-935a-46a6-98ee-a8ab50e6f41d.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/8f7e3fd2-bc1b-4944-ae18-fd028b44ac85.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/526b6c16-dac6-4643-83d6-cfbf7ad1c4a0.jpg?tr=w-1200,cm-pad_resize"]

let imgNum=0;
buttons[0].addEventListener("click", decfun);
    function decfun()
    {
        if(imgNum===0)
    {
        imgNum=(imgArr.length)-1;
    }
    else
    {
        imgNum--;
    }
    imag.src=imgArr[imgNum]; 
    }


    buttons[1].addEventListener("click", incfun);
    function incfun()
    {
        if(imgNum===imgArr.length-1)
    {
        imgNum=0
    }
    else
    {
        imgNum++;
    }
    imag.src=imgArr[imgNum]; 
    }

    setInterval(function(){
        incfun()
    },1500)