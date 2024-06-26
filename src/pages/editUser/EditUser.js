import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom';
export default function EditUser() {

    const [getShipingAdressState, setGetShipingAdressState] = useState({})

      // naviagte
  const navigate = useNavigate("")

    useEffect(()=>{

        const getShipingAdress=async()=>{
            const res=JSON.parse(localStorage.getItem("userShipingAdress"))
            console.log("shipingAdress => ",res)
            setGetShipingAdressState(res)
        }
        getShipingAdress();
    },[])

    useEffect(()=>{

        if (getShipingAdressState) {
            formik.setValues({
                fName: getShipingAdressState.fName || "",
                lName: getShipingAdressState.lName || "",
                email: getShipingAdressState.email || "",
                phone: getShipingAdressState.phone || "",
                gender: getShipingAdressState.gender || "",
                country: getShipingAdressState.country || "",
                city: getShipingAdressState.city ||  "",
                adress: getShipingAdressState.adress ||  ""
            })
        }

    },[getShipingAdressState])

      // formHandling from Formik

  const formik = useFormik({
    initialValues: {
      uuid: "",
      fName: "",
      lName: "",
      email: "",
      phone: "",
      gender: "",
      country: "",
      city: "",
      adress: ""

    },
    validationSchema: Yup.object().shape({
      fName: Yup.string().trim().min(3, "Enter Valid Firts Name!").max(50, "Enter Valid First Name!").required("First Name is Required!"),
      lName: Yup.string().trim().min(3, "Enter Valid last Name!").max(50, "Last Valid Full Name!").required("Last Name is Required!"),
      email: Yup.string().trim().email("Invalid Email").required("Email is Required!"),
      phone: Yup.string().trim().min(11, "Enter 11 Digit Phone No!").max(11, "Enter 11 Digit Phone No!").required("Phone is Required!"),
      gender: Yup.string().trim().required("Gender is Required!"),
      country: Yup.string().trim().min(3, "Enter Valid Country Name!").required("Country is Required!"),
      city: Yup.string().trim().min(3, "Enter Valid City!").required("City is Required!"),
      adress: Yup.string().trim().min(3, "Enter Valid Adress!").required("Adress is Required!"),

    }),

    onSubmit: (values) => {

      values.uuid = getShipingAdressState.uuid

      console.log("FromikValues => ", values)

      // Convert all string values to lowercase
      const lowercaseValues = Object.keys(values).reduce((acc, key) => {
        acc[key] = typeof values[key] === 'string' ? values[key].toLowerCase() : values[key];
        return acc;
      }, {});
      console.log("lowerCase => ", lowercaseValues)

      storeDataLocalStorage(lowercaseValues)
    },
  })

  // storeData to LoacalStorage
  const storeDataLocalStorage = (lowercaseValues) => {
    try {
      localStorage.setItem("userShipingAdress", JSON.stringify(lowercaseValues))
      navigate("/userDetailPage")

    } catch (error) {
      console.log("error => ", error)
    }
  }

  return (
  <>

<div className=" flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="left-item md:order-1 order-2 flex flex-col justify-center">
              <div className="text-content text-center">
                <h1 className=" font-bold [font-size:25px] my-5">Edit Shiping Adress</h1>
              </div>
              {/* form */}
              <form onSubmit={formik.handleSubmit}>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="fName"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name:
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="fName"
                        autocomplete="given-name"
                        id="fName"
                        placeholder="Enter First Name"
                        value={formik.values.fName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.fName && formik.errors.fName ? (<div className=" text-red-600">{formik.errors.fName}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="lName"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name:
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="lName"
                        autocomplete="given-name"
                        id="lName"
                        placeholder="Enter Last Name"
                        value={formik.values.lName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.lName && formik.errors.lName ? (<div className=" text-red-600">{formik.errors.lName}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email:
                    </label>
                    <div class="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.email && formik.errors.email ? (<div className=" text-red-600">{formik.errors.email}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="phone"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone:
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter Phone No Ex:03000000000"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.phone && formik.errors.phone ? (<div className=" text-red-600">{formik.errors.phone}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12 ">
                    <label
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Gender:
                    </label>

                    <div className="flex">

                      <div class="mt-2">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          value={"male"}
                          checked={formik.values.gender === "male"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autocomplete="given-name"

                        />

                        <label
                          for="male"
                          class=" text-sm font-medium leading-6 text-gray-900 me-3"
                        >
                          Male
                        </label>
                      </div>

                      <div class="mt-2">
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          value={"female"}
                          checked={formik.values.gender === "female"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autocomplete="given-name"

                        />

                        <label
                          for="female"
                          class=" text-sm font-medium leading-6 text-gray-900 "
                        >
                          FeMale
                        </label>

                      </div>

                    </div>

                    {formik.touched.gender && formik.errors.gender ? (<div className=" text-red-600">{formik.errors.gender}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country:
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Enter Country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.country && formik.errors.country ? (<div className=" text-red-600">{formik.errors.country}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City:
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter City"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.city && formik.errors.city ? (<div className=" text-red-600">{formik.errors.city}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="adress"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Complete Adress:
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="adress"
                        id="adress"
                        placeholder="Enter Adress"
                        value={formik.values.adress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.adress && formik.errors.adress ? (<div className=" text-red-600">{formik.errors.adress}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center my-3">
                  <div className="lg:basis-3/5 basis-11/12">

                    <p className=" my-4 text-center">Have an shiping adress already? <Link to={"/"} className=" text-green-800 underline hover:opacity-80 ">add Card!</Link></p>

                    <button className=" bg-green-800 text-white rounded p-4  my-5 hover:opacity-75 [width:100%]" type='submit'>Submit</button>
                  </div>
                </div>

              </form>
              {/* End-form */}
            </div>


          </div>
        </div>
      </div>

  </>
  )
}
