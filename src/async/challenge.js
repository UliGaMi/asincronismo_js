import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'


async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherfunction = async (urlApi) => {
    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        const category = await fetchData(`${API}/categories/${product.category.id}`);
        console.log(products, product, category);
    }
    catch(error){
        console.log(error);
    }
}

await anotherfunction(API); //todas las funciones asincronas al llamarse deben tener un await si quieres que se respete el flujo de trabajo
console.log('Holaaa');