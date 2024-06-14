import React from 'react'

export default function Alert({ error, showAlert, closeAlert,}) {
  return (
    <>
        <div className="alert-main-div flex justify-center ">
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 xl:basis-2/6 lg:basis-5/12 md:basis-8/12 sm:basis-4/5 basis-4/5" role="alert" style={{display:alert}}>
      <strong className="font-bold">Error!</strong>
      <span className=" block sm:inline ms-2 ">{error}</span>
      <span className="absolute top-0 bottom-0 right-0 px-2 py-3  " onClick={showAlertHandler}>
        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.934 2.935a1 1 0 11-1.414-1.414l2.934-2.935-2.935-2.934a1 1 0 011.415-1.415L10 8.586l2.934-2.935a1 1 0 111.414 1.415L11.414 10l2.934 2.934a1 1 0 010 1.415z"/>
        </svg>
      </span>
    </div>

    </div>
    </>
  )
}
