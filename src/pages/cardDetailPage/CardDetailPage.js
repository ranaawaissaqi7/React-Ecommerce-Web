import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CardDetailPage() {
    const { id } = useParams();
    const [cardDetailData, setCardDetailData] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setCardDetailData(res.data);
                console.log("getSingleProduct => ", res.data);
            } catch (error) {
                console.log("error", error);
            }
        };

        getProduct();
    }, [id]);

    return (
        <>
            <div className="flex justify-center mt-24">
                <div className=" lg:basis-1/2 md:basis-4/5 basis-10/12">

                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-center border border-gray-300 px-4 py-2" colSpan={2}>Card Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Image</th>
                                <td className="border border-gray-300 px-4 py-2"><img src={cardDetailData.image} className=' h-52 mx-auto' alt={cardDetailData.title} /></td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <td className="border border-gray-300 px-4 py-2">{cardDetailData.id}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <td className="border border-gray-300 px-4 py-2">{cardDetailData.title}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <td className="border border-gray-300 px-4 py-2">{cardDetailData.price}</td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Category</th>
                                <td className="border border-gray-300 px-4 py-2">{cardDetailData.category}</td>
                            </tr>

                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Description</th>
                                <td className="border border-gray-300 px-4 py-2">{cardDetailData.description}</td>
                            </tr>

                            <tr>
                                <th className="border border-gray-300 px-4 py-2" colSpan={2}><Link to={"/"} className='bg-slate-600 block w-full text-white p-2 rounded hover:opacity-80'>Add Card</Link></th>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}
