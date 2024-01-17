"use client"
const PRODUCTS = [{
    id:1,
    image: "https://tse2.mm.bing.net/th?id=OIP.RfooReCjMUmVoGEF6E1boAHaEo&pid=Api&P=0&h=220",
    price: 100,
    description: "Very fine quality chair"
  }, 
  {
    id:2,
    image: "https://tse2.mm.bing.net/th?id=OIP.DDKx4zKxGy4fOCJUSsqHEgHaEK&pid=Api&P=0&h=220",
    price: 200,
    description: "Very fine quality chair"
  },
  {
    id:3,
    image: "https://tse2.mm.bing.net/th?id=OIP.DDKx4zKxGy4fOCJUSsqHEgHaEK&pid=Api&P=0&h=220",
    price: 300,
    description: "Very fine quality chair"
  }]
function Page({params}) {
    if(+params.id > 2){
        return <div className="h-screen flex justify-center items-center">404 Page Not found</div>
    }
    const product = PRODUCTS[+params.id - 1];
    
    return <div className="h-screen w-screen flex flex-col justify-center items-center">
            <p>ID : {product.id}</p>
            <p>DESCRIPTION : {product.description}</p>
            <p>Price : {product.price} $</p>
         </div>
}
export default Page;