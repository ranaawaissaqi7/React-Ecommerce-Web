import React, { useEffect, useState } from 'react'
import "./Login.scss";
import { useFormik } from "formik";
import * as Yup from "yup"
import authImage from "../../assets/images/auth-images/auth-image.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isAuthChangeHandler } from '../../store/features/AuthSlice';

export default function Login() {

  const [userSignUpDataState, setUserSignUpDataState] = useState({})

  useEffect(() => {

    // getUserSignUpData
    const getUserSignUpData = async () => {

      try {
        const res = await JSON.parse(localStorage.getItem("userSignUpData"))
        console.log("SignUpData => ", res)
        setUserSignUpDataState(res)
      } catch (error) {
        console.log("error => ", error)
      }
    }

    getUserSignUpData();

  }, [])



  // navigate
  const navigate = useNavigate("")

  const disPatch = useDispatch()

  const [credentialsError, setCredentialsError] = useState("")

  // formHandling from Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().trim().email("Invalid Email").required("Email is Required!"),
      password: Yup.string().trim().min(7, "Enter minimum password length 7 characters").required("Password is Required!"),
    }),

    onSubmit: (values) => {
      console.log("FromikValues => ", values)

      // Convert all string values to lowercase
      const lowercaseValues = Object.keys(values).reduce((acc, key) => {
        acc[key] = typeof values[key] === 'string' ? values[key].toLowerCase() : values[key];
        return acc;
      }, {});
      // console.log("lowerCase => ",lowercaseValues)
      //  console.log("signUp Values => ",userSignUpDataState)

      // login credentials
      if (userSignUpDataState.email === lowercaseValues.email) {
        if (userSignUpDataState.email === lowercaseValues.email && userSignUpDataState.password === lowercaseValues.password) {

          disPatch(isAuthChangeHandler(true))

          navigate("/")
        } else {
          setCredentialsError("User Invalid Credentials")
        }
      } else {
        setCredentialsError("User Not Found Please go to SignUp Page")

      }
    },
  })


  return (
    <>
      <div className="sign-up-page flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="left-item md:order-1 order-2 flex flex-col justify-center">
              <div className="text-content text-center">
                <h1 className=" font-bold [font-size:25px] my-2">Sign in to Around</h1>
              </div>
              {/* form */}
              <form onSubmit={formik.handleSubmit}>

                <div className="flex justify-center">
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

                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      for="passowrd"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password:
                    </label>
                    <div class="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="passowrd"
                        placeholder="Enter Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0  p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    {formik.touched.password && formik.errors.password ? (<div className=" text-red-600">{formik.errors.password}</div>) : null}

                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">

                    <p className=" my-4 text-center">Don't have an account yet?<Link to={"/signUp"} className=" text-green-800 underline hover:opacity-80 ms-1 ">Sign Up here!</Link></p>

                    {/* <!-- Error Alert --> */}


                    {!credentialsError ? null : <div className=' font-bold text-red-600 [font-size:18px] text-center'>{credentialsError}</div>}

                    <button className=" bg-green-800 text-white rounded p-4  my-5 hover:opacity-75 [width:100%]"  >Sign In</button>

                  </div>
                </div>

              </form>
              {/* End-form */}
            </div>
            <div className="right-item order-1 md:order-2">
              <img src={authImage} alt="" className="md:h-auto h-80 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
