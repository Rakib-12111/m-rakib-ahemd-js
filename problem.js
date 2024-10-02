const phones =[
      {
            name:'sumsung', price: 40000, camara: '12mp', color: 'blocks',
            name:'oppo', price: 200000, camara: '10mp', color: 'blocks',
            name:'iphone', price: 10000, camara: '2mp', color: 'blocks',
            name:'realmi', price: 20000, camara: '120mp', color: 'blocks',
            name:'vivo', price: 30000, camara: '123mp', color: 'blocks'
      }
      
]


function getHeastPnones(info){
     for(const phone of phones){
      console.log(phone);
      
     }
}

console.log(getHeastPnones(phones));



