import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCard } from '../../store/features/UserAllDataSlice'
export default function UserAdmin() {
    const { userCardData } = useSelector((state) => state.userAllDataHandling)

    console.log("userCardData => ", userCardData)

    const disPatch = useDispatch()

    return (
        <>
            <div className="flex justify-center mt-24 overflow-auto">
                <div className=" xl:basis-10/12  basis-11/12 table-auto">

                    {
                        userCardData.length === 0 ?

                            <>
                                <h1 className='text-center text-red-600 font-bold md:[font-size:25px] [font-size:20px]'> Your List Card is Empty Go to Home Page and Add Card</h1>
                            </> :

                            <>
                                <table className=" w-full border-collapse border border-gray-300 overflow-auto">
                                    <thead>
                                        <tr  >
                                            <th className="text-center border border-gray-300 px-4 py-2" colSpan={8}>User All Details</th>
                                        </tr>
                                        <tr>
                                            <th className="text-center border border-gray-300 px-4 py-2">#</th>

                                            <th className="text-center border border-gray-300 px-4 py-2">ID</th>

                                            <th className="text-center border border-gray-300 px-4 py-2">Image</th>

                                            <th className="text-center border border-gray-300 px-4 py-2" >Title</th>

                                            <th className="text-center border border-gray-300 px-4 py-2" >Category</th>
                                            <th className="text-center border border-gray-300 px-4 py-2" colSpan={3} >Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userCardData.map((item, index) => {
                                                return <>
                                                    <tr key={index + 1}>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center "><img src={item.image} className=' w-20 h-20 mx-auto' alt={item.title} /></td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{item.title}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{item.category}</td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center"><Link className=' bg-slate-600 block w-full text-white p-2 rounded hover:opacity-80' to={"/"}>Add</Link></td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center"><Link className=' bg-orange-600 block w-full text-white p-2 rounded hover:opacity-80 ' to={`/${item.id}`}>View</Link></td>
                                                        <td className="border border-gray-300 px-4 py-2 text-center"><button className=' bg-red-600 block w-full text-white p-2 rounded hover:opacity-80' onClick={() => disPatch(deleteCard(index))} >Delete</button></td>
                                                    </tr>
                                                </>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

