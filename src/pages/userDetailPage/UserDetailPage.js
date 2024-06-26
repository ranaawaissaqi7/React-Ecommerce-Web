import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserDetailPage() {
    const [getShipingAdressState, setGetShipingAdressState] = useState({})

    useEffect(()=>{

        const getShipingAdress=async()=>{
            const res=JSON.parse(localStorage.getItem("userShipingAdress"))
            console.log("shipingAdress => ",res)
            setGetShipingAdressState(res)
        }
        getShipingAdress();
    },[])

  return (
    <>
    {
        // if shiping adress is null

        !getShipingAdressState ? <> <h1 className=' text-red-600 text-center font-bold mt-10 [font-size:20px]'> Please Add Shiping Adress</h1></> :
        
        // if shiping adress is fullfiled

        <>
            <div className="flex justify-center mt-24">
                <div className=" lg:basis-1/2 md:basis-4/5 basis-10/12">

                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-center border border-gray-300 px-4 py-2" colSpan={3}>User Detail </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.uuid}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">First Name</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.fName}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.lName}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.email}</td>
                            </tr>

                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Phone No</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.phone}</td>
                            </tr>

                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Gender</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.gender}</td>
                            </tr>

                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Country</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.country}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">City</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.city}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Adress</th>
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>{getShipingAdressState.adress}</td>
                            </tr>

                            <tr>
                                <th className="border border-gray-300 px-4 py-2" ><Link to={`/editUser/${getShipingAdressState.uuid}`} className='bg-slate-600 block w-full text-white p-2 rounded hover:opacity-80'>Edit User</Link></th>
                                <th className="border border-gray-300 px-4 py-2" ><Link to={`/userAdmin`} className='bg-slate-600 block w-full text-white p-2 rounded hover:opacity-80'>Card Deatails</Link></th>
                                <th className="border border-gray-300 px-4 py-2" ><Link to={`/`} className='bg-slate-600 block w-full text-white p-2 rounded hover:opacity-80'>Add Card</Link></th>
                            </tr>

                        </tbody>
                    </table>

                </div>
     </div>
        </>
    }
    </>
  )
}
