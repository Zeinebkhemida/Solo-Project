var flowers=[
    {
        id:1,
        name: "redflowers",
        image:"1.jpg",
        price:50 ,
    },
    {
    id:2,
    name: "multicolor",
    image:"2.jpg",
    price:70 ,
    },
    {
     id:3,
     name: "roses",
    image:"3.jpg",
    price:60 ,
        },
        {
    id:4,
    name: "purpleFlowers",
    image:"1.jpg",
     price:50 ,
            },
          

]
function initial(){
    var newt = document.createElement('div')
    each(flowers,function(element,index){
    
        newt.append(` <img src='./${element.image} > <div  class='title'>${element.name}</div>  <div  class='price'>element.price</div>`)
        
    })
  
}

function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i)
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}



function map(array, f) { 
   var  acc = [] 
    each(array, function(element, i) { 
          acc.push(f(element, i)) 
    }); 
    return acc; 
}



function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}



 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }