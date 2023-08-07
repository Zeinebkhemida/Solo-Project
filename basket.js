var pricess=[]
var items=JSON.parse(localStorage.getItem("data"))

function panier(){
      each(items,function(element,index){
        $(".panier").append(`<div>
      <h2>Flowers Name:${element.name}</h1>
      <h3>PRICE:${element.price}$</h2>
  </div>`)
        pricess.push(element.price)
  })}
  

panier()
var sum=0
function sums(){
      each(pricess,function(element,index){
            sum=sum+element
      })
      $(".panier").append(`<div id="total" > 

      <h1>TOTAL:${sum}$</h1>
      
  </div>`)
}
sums()


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