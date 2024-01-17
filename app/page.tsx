import Image from 'next/image'
import Chair from "@/components/Chair";
import Link from 'next/link';
export default function Home() {
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
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-2">
     <h1 className='text-center'>Routing In Next js Assignment</h1>
    <h2>Routes</h2>
    <div className=' w-full flex flex-wrap justify-center items-center gap-3'>
    {PRODUCTS.map(p => <Chair key={Math.random()} prod={p}/>)}
    </div>
    <Link href={`/dashboard`}><button className='border py-3 w-[300px] mt-5 bg-purple-500 text-white hover:border-purple-500 hover:bg-gray-200 hover:text-black'>GO TO DASHBOARD</button></Link>
    </main>
  )
}
