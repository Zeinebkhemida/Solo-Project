var flowers = [
    {
        id: 1,
        name: "RedFlowers",
        image: "1.jpg",
        price: 50,
    },
    {
        id: 2,
        name: "Multicolor",
        image: "2.jpg",
        price: 70,
    },
    {
        id: 3,
        name: "Roses",
        image: "3.jpg",
        price: 60,
    },
    {
        id: 4,
        name: "PurpleFlowers",
        image: "4.jpg",
        price: 50,
    }, {
        id: 5,
        name: "WhiteFlowers",
        image: "5.jpg",
        price: 80,
    },
    {
        id: 6,
        name: "RedFlowersBox ",
        image: "6.jpg",
        price: 120,
    },
    {
        id: 7,
        name: "BoxFlowers",
        image: "7.jpg",
        price: 140,
    },
    {
        id: 8,
        name: "WhiteFlowersBox",
        image: "8.jpg",
        price: 90,
    }

]

function initial() {
    each(flowers, function (element, index) {

        $('.image').append(` <div><img  src="./picture/${element.image}"  id="${element.id}" onclick="myfunction(${element.id})" class='image1'> <div  class='title'>${element.name}</div>  <div  class='price'>${element.price}$   </div>`)
    })
}
initial()
var prices = []

function myfunction(id) {



    each(flowers, function (element,) {
        if (id === element.id) {

            prices.push(element)

        }


    })
    console.log('current prices', prices)

    items = JSON.stringify(prices)
    console.log('stringfied prices', prices)
    localStorage.setItem('data', items)




}


function searches() {
    var x = $("#search").val()

    each(flowers, function (element, index) {

        if (x.toLowerCase() === element.name.toLowerCase() || x * 1 === element.price) {

            $('.image').hide()
            $('.image').html(`<div class="container"><img  src="./picture/${element.image}"  id="${element.id}" onclick="myfunction(${element.id})" class='image1'> <div  class='title'>${element.name}</div>  <div  class='price'>${element.price}$   </div>
            </div>`)
            $('.image').show()

        }
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
    var acc = []
    each(array, function (element, i) {
        acc.push(f(element, i))
    });
    return acc;
}



function filter(array, predicate) {
    var acc = [];
    each(array, function (element) {
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
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}