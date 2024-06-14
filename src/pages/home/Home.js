import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePageCard from '../../components/homePageCard/HomePageCard';
import "./Home.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../store/features/UserAllDataSlice';
export default function Home() {


  useEffect(() => {
    getAllProducts();
  }, [])

  // getAllProducts
  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      console.log("FetchApiAllProducts => ", res.data)
      setGetAllProductsState(res.data)
      setIsLoading(true)

    } catch (error) {
      console.log("error => ", error)
    }
  }


  const [getAllProductsState, setGetAllProductsState] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const { isAuth, isShipingAdress } = useSelector((state) => state.authHandling)

  console.log("isShiping aadreee => ", isShipingAdress)

  const dispatch = useDispatch()

  //  addCardHandler
  const addCardHandler = (cardData) => {
    const data = cardData
    console.log("Data => ", data)
    if (isAuth === true) {
      if (isShipingAdress === false) {
        alert("Please Add Shiping Adress Then add Card!")
      } else {
        dispatch(addCard(data))
      }
    } else {
      alert("please login then add to card")
    }

  }
  return (
    <>

      <div className="home-page">

        <div className="sm:container mx-auto">
          <div className="grid mt-10">

            {/* loader */}

            {
              isLoading ?

                // if loading true

                <div className=" grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-5 md:px-0 px-3  ">

                  {
                    getAllProductsState.map((item, index) => {
                      return <>
                        <HomePageCard cardData={item} key={index} addCardHandler={addCardHandler} />
                      </>
                    })
                  }

                </div>

                :

                // if loading false

                <>
                  <div class="flex items-center justify-center ">
                    <div class="loader"></div>
                  </div>
                </>

            }
          </div>
        </div>


      </div>

    </>
  )
}
