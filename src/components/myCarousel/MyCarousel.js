import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
export default function MyCarousel({cardData}) {
    console.log("slider => ",cardData)
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 3
          },
          600: {
            items: 4
          },
          1000: {
            items: 4
          },
          1200: {
            items: 5
          }
        }
      };
      const handleImageClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
        <OwlCarousel className='owl-theme' {...options}>
        {
            cardData.map((items,index)=>{
                return <div className='item' key={index}  onClick={() => handleImageClick(items.id)}><img  src={items.image} className='img-fluid' alt={items.title}  style={{height:"200px",width:"200px"}}/></div>
            })
        }           
    </OwlCarousel>
    </>
  )
}
