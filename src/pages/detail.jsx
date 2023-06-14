import React from 'react'
import { useState } from 'react'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import Button from '../components/atom/Button'
import DetailProduct from '../components/organism/DetailProduct'

export default function ProductDetail() {
    const [count, setCount] = useState(0)
  return (
    <>
        <div > 
        <Navbar>PROJECT NAME</Navbar>
    </div>


    <div className='flex min-h-screen'>
        

    <div className="flex flex-col  items-center p-5 border">
        <div className="flex flex-col  items-center p-5 border">

        <div>
        <img src="public/images/rubick.jpg" alt="gambar"  width={500} height={500} className='rounded-lg max-w-4xl p-10' />
        </div>
           
    <div className='flex flex-wrap p-5 justify-center items-center'>    
        <div className='p-2'>
            <button onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}>
            <img src="public/images/kurang.png" alt="gambar"  width={100} height={100} className='rounded-lg max-w-4xl p-10' />
        </button></div>

         <div className='text-center items-center justify-center'> 
         <p className='text-center'>{count}</p>
         </div>


        <div className='p-2'>
            <button className={`font-semibold rounded-md`} onClick={() => setCount((count) => count + 1)}>
            <img src="public/images/tambah.png" alt="gambar"  width={100} height={100} className='rounded-lg max-w-4xl p-10' />
            </button>
        </div >
        </div>
        <Button color="bg-blue-500">Buy Now</Button>
    </div>
    </div>


    <div className='items-center justify-center min-h-screen pt-10 mt-8'>
          <DetailProduct title="RUBICK THE GRAND MAGUS"></DetailProduct> 
          <DetailProduct>Any mage can cast a spell or two, and a few may even study long enough to become a wizard, but only the most talented are allowed to be recognized as a Magus. Yet as with any sorcerer's circle, a sense of community has never guaranteed competitive courtesy.
                         Already a renowned duelist and scholar of the grander world of sorcery, it had never occurred to Rubick that he might perhaps be Magus material until he was in the midst of his seventh assassination attempt. As he casually tossed the twelfth of a string of
                         would-be killers from a high balcony, it dawned on him how utterly unimaginative the attempts on his life had become. Where once the interruption of a fingersnap or firehand might have put a cheerful spring in his step, it had all become so very predictable. 
                         He craved greater competition. Therefore, donning his combat mask, he did what any wizard seeking to ascend the ranks would do: he announced his intention to kill a Magus.
                         Rubick quickly discovered that to threaten one Magus is to threaten them all, and they fell upon him in force. Each antagonist's spell was an unstoppable torrent of energy, 
                         and every attack a calculated killing blow. But very soon something occurred that Rubick's foes found unexpected: their arts appeared to turn against them. Inside the magic 
                         maelstrom, Rubick chuckled, subtly reading and replicating the powers of one in order to cast it against another, sowing chaos among those who had allied against him. Accusations 
                         of betrayal began to fly, and soon the sorcerers turned one upon another without suspecting who was behind their undoing.
                         When the battle finally drew to a close, all were singed and frozen, soaked and cut and pierced. More than one lay dead by an ally's craft. Rubick stood apart, sore but delighted 
                         in the week's festivities. None had the strength to argue when he presented his petition of assumption to the Hidden Council, and the Insubstantial Eleven agreed as one to grant him the title of Grand Magus.
                         </DetailProduct>
    
    </div>
    

    <div className=''>
        <img src="public/images/love.png" alt="gambar"  width={150} height={150} className='rounded-lg max-w-4xl p-10' />
        </div>
    </div>
     <div className='text-center p-5'> 
     <Footer>YOUR NAME</Footer>
 </div>
    </>

  )
}
