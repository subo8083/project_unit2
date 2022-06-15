let data=[
{image_url : 
    "https://images-static.nykaa.com/uploads/638b4d90-1629-417d-bd46-bbc1d7826b28.jpg?tr=w-600,cm-pad_resize",
 discount : "30% Off",
 name : "Salaon Smooth Hair At Home !",
 product_id : 101,
},
{
    image_url: 
    "https://images-static.nykaa.com/uploads/7ba0c4b8-eac8-46ba-910c-bbb327dab24d.gif?tr=w-600,cm-pad_resize",
    discount : "30% Off",
    name : "Byu Makeup & Skin WorthRs.999 and Get Additional 5% Off",
    product_id : 102,
},
{
    image_url: 
    "https://images-static.nykaa.com/uploads/48a19dea-cba4-4938-9ae6-722ea32c3520.jpg?tr=w-600,cm-pad_resize",
    discount : "Upto 35% Off",
    name : "Byu 2 get 1 on Lakme Nails!",
    product_id : 103,
},
{
    image_url: 
    "https://images-static.nykaa.com/uploads/bc456ba7-caa3-4f57-acaa-ad58f14ee001.jpg?tr=w-600,cm-pad_resize",
    discount : "Upto 35% Off",
    name : "Celebrate Beauty In Equality with #MNYPRIDE",
    product_id : 104,
},
// 1-2 -3 4


{image_url : 
    "https://images-static.nykaa.com/uploads/51c59f3d-64eb-45dc-aaad-23228234271f.jpg?tr=w-600,cm-pad_resize",
 discount : "Get 4 Gifts",
 Name : "Get order on 3000",
 product_id : 105,
},
{
    image_url: 
    "https://images-static.nykaa.com/uploads/7d4fabac-cc0a-4efa-a3ae-6a41052c18a9.jpg?tr=w-600,cm-pad_resize",
    discount : "The Oridinary has arived in  India",
    name : "Shop Best Seller starting at Rs.5000",
    product_id : 106,
},
{
    image_url: 
    "https://images-static.nykaa.com/uploads/5231fd76-c138-47be-8d3f-4606193b6fae.jpg?tr=w-600,cm-pad_resize",
    discount : "Frangrances For Father's Day",
    name : "Upto 25% Off+ Gift with Purchases",
    product_id : 107,
},
{
    image_url: 
    "https://images-static.nykaa.com/uploads/bc456ba7-caa3-4f57-acaa-ad58f14ee001.jpg?tr=w-600,cm-pad_resize",
    discount : "Upto 35% Off",
    name : "Celebrate Beauty In Equality with #MNYPRIDE",
    product_id : 108,
},





];
// Calling funtion to show the products into the body 
        
// This Function show all the products in the body 

    function display_data(data){
    data.forEach(function (element){

 
    let div = document.createElement("div");
    div.setAttribute("id", "card");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "text")

    let image = document.createElement("img");
    image.setAttribute('src', element.image_url);
    image.addEventListener("click",myproducts)

    let disc = document.createElement("h3");
    disc.innerText=element.discount;
    disc.addEventListener("click",myproducts)


    let name = document.createElement("p");
    name.innerText=element.name;
    name.addEventListener("click",myproducts)

    
    div.append(image,disc,name);

    //div.append(div2);
    
    document.querySelector("#main").append(div);
});
    }
display_data(data);
//document.querySelector("#card").addEventListener("click",myproducts);

//myproducts();
    function myproducts(){
         window.location.href="product.html"

    localStorage.setItem("products",JSON.stringify(data))    

    }


