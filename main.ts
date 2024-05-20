//-------------------------------------------BASIC ARAYS------------------------------------------------

// .............................................STEP # 1 .............................................
type Product={
    name:string;
    price:number;
    inventory:{
        stock:number;
        colorOption:string[];
    }
}
// .......................................... STEP # 2 ...........................................
const products:Product[]= [
    {
    name:"Laptop",
    price:70000,
    inventory:{
        stock:40,
        colorOption:["Black" , "White" ],
                }
    },
    {
        name:"Smartphone",
        price:50000,
        inventory:{
            stock:60,
            colorOption:["Blue" , "Black" ]
            }
        },
    
    {
        name:"Watch", 
        price:2000,
        inventory:{
            stock:50,
            colorOption:["Black" , "Grey"]
        }
    }
];
// ................................................. STEP # 3 .....................................
function changeColor(products:Product,newColor:string){
    products.inventory.colorOption.push(newColor);


    if(newColor==="White"){
        products.price += products.price *0.1;
    }
    else if(newColor==="Blue"){
        products.price -= products.price  *0.05;
    }
    else if(newColor==="Black"){
        products.price += products.price *0.15;
    }
    else if(newColor==="Grey"){
        products.price -= products.price *0.1;
    }
    else{console.log(`Sorry! this ${newColor} is not available `)};

};

//....................................................STEP# 4.................................................
function displayProductDetails(products:Product[]):void{
    products.forEach(products=>{
        console.log(`Name: ${products.name}`);
        console.log(`Price: ${products.price}`);
        console.log(`Stock: ${products.inventory.stock}`);
        console.log(`Available colors: ${products.inventory.colorOption}`);
    });

}
changeColor(products[0] , "Grey");
changeColor(products[1] , 'White');
changeColor(products[2] , "Biue");
displayProductDetails(products);