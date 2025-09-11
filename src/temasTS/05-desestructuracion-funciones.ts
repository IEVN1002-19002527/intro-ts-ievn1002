
export interface Producto{
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:"Nokia A1",
    precio:150
}
const tableta:Producto={
    desc:"Ipad Air",
    precio:350
}
function calcularISV(productos:Producto[]):number{
    let total=0;
    for(const producto of productos){
        total+=producto.precio;
    }
    return total*0.15;
}
const articulos=[telefono,tableta];
const isv=calcularISV(articulos);
console.log("ISV: ",isv);


//desestructuracion
export function calcularISV2(productos:Producto[]):[number,number]{
    let total=0;
    for(const producto of productos){
        total+=producto.precio;
    }
    return [total,total*0.15];
}
const [total,isv2]=calcularISV2(articulos);
console.log("Total: ",total);
console.log("ISV2: ",isv2);
