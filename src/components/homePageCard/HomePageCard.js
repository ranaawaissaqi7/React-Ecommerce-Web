import { Link } from "react-router-dom";
import "./HomePageCard.scss"
export default function HomePageCard({cardData,addCardHandler}) {

    console.log("HomePageCardDataProps => ",cardData)
    

  return (

    <div className="item my-5">
       <div   className="card border p-4 ">
        <Link to={`/${cardData.id}`} className="card-image hover:cursor-pointer block">
            <img src={cardData.image} className="mx-auto lg:[height:200px] md:[height:200px] [height:200px]" alt={cardData.title} />
        </Link>
        <div className="card-body py-3 flex flex-col justify-between ">

          <h2 className=' font-bold xl:[font-size:18px] md:[font-size:15px] [font-size:14px]  '>{cardData.title}</h2>
           <div className="category flex items-center py-2 justify-between flex-wrap ">
           <span className=' font-bold xl:[font-size:18px] md:[font-size:15px] [font-size:14px] capitalize'>Category: </span> <span className='  capitalize'>{cardData.category}</span>
           </div>
          <div className="card-bottom flex justify-between items-center my-3 flex-wrap">
            <p> <span className=" font-bold xl:[font-size:18px] md:[font-size:15px] [font-size:14px]" >Price:</span> {cardData.price}$</p>
            <button className=' bg-black text-white md:p-2 p-1 rounded hover:opacity-80' onClick={()=>{addCardHandler(cardData)}}>Add Card</button>
          </div>
        </div>
        </div>

    </div>

  )
}
