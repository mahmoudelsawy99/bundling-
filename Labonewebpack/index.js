import "./style.css"
var products=new XMLHttpRequest(); // 
var arr=[]; // global
var div=document.getElementsByClassName('products')[0];
console.log(div);
products.open("GET","https://dummyjson.com/products") // open connecation  0
products.send(); // send  req //1  
// 2 arrive 
// 3 process
// 4 response

products.onreadystatechange=function()// event fire every change of state 
{
    //console.log(products.readyState);

   if(products.readyState==4)
   {
       var data= JSON.parse(products.responseText).products // convert from type string to type object
        console.log(data );
        arr=data // assgin
        for(var i=0;i<9;i++)
        {
            // var newdiv=document.createElement("div");
            // var img=document.createElement("img");
            // var title=document.createElement("h1");
            // var price=document.createElement("h2");
            // title.innerText=data[i].title;
            // price.innerText=data[i].price;
            // img.src=data[i].thumbnail
            // newdiv.appendChild(img);
            // newdiv.appendChild(title);
            // newdiv.appendChild(price);
            // document.body.appendChild(newdiv);
            //
            div.innerHTML+=`<div class="product">
            <div class="image">
                <img src=${data[i].thumbnail} alt="">
            </div>
            <div class="namePrice">
                <h3>${data[i].brand}</h3>
                <span>$ ${data[i].price}</span>
            </div>
            <p>${data[i].title}</p>
            
            <div class="bay">
                <button onclick="add(${i})"> bay now </button>
            </div>
        </div>`


        }


   }
}

function add(index)
{
// alert(index);
var newdata= JSON.parse(localStorage.getItem('product'))||[];

console.log(newdata);
newdata.push(arr[index]);
console.log(newdata);

// newdata.push(arr[index]);


localStorage.setItem("product",JSON.stringify(newdata)); //overwrite 

}


// let search = document.getElementById(searchh)

// searchh.addEventListener("click",search)
// function search()
// {



//     var text=document.getElementById('s').value;
//     alert('')
//     div.innerHTML="";
//     for(var i=0;i<arr.length;i++)
//     {
        
//         if(arr[i].title.indexOf(text)>-1)
//         {
            
//             div.innerHTML+=`<div class="product">
//             <div class="image">
//                 <img src=${arr[i].thumbnail} alt="">
//             </div>
//             <div class="namePrice">
//                 <h3>${arr[i].brand}</h3>
//                 <span>$ ${arr[i].price}</span>
//             </div>
//             <p>${arr[i].title}</p>
            
//             <div class="bay">
//                 <button> bay now </button>
//             </div>
//         </div>`
//         }
//     }



// }

// var x=10; 


// function change()
// {
//     x=1000000;

//     return x+2;
// }
// console.log(x) //10
// change()
// console.log(x) // 1000000








