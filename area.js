
function area(radio){
    const pi = 3.1416;
    let perimetro = (2*pi*radio);
    let area_ = pi *(radio**2);
    console.log("el perimetro es: ",perimetro)
    console.log("el area es: ",area_)
    return area_,perimetro;
}
//area(12)

function array(numero){
    let frutas=["manzana","banana","pera","mango","durazno","uva"];
    console.log(frutas[numero]);
}
array(4)

