const getProduct = async() => {
    const data = await fetch('https://openapi.programming-hero.com/api/quiz');
    return data;
}

export default getProduct;

