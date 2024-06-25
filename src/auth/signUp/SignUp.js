import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import authImage from "../../assets/images/auth-images/auth-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function SignUp() {
  const [userSignUpDataState, setUserSignUpDataState] = useState({});
  const [credentialsError, setCredentialsError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getUserSignUpData = async () => {
      try {
        const res = JSON.parse(localStorage.getItem("userSignUpData"));
        console.log("SignUpData => ", res);
        setUserSignUpDataState(res);
      } catch (error) {
        console.log("error => ", error);
      }
    };
    getUserSignUpData();
  }, []);

  const formik = useFormik({
    initialValues: {
      uuid: "",
      fullName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().trim().min(3, "Enter Valid Full Name!").max(50, "Enter Valid Full Name!").required("Full Name is Required!"),
      email: Yup.string().trim().email("Invalid Email").required("Email is Required!"),
      password: Yup.string().trim().min(7, "Enter minimum password length 7 characters").required("Password is Required!"),
      cpassword: Yup.string().trim().oneOf([Yup.ref("password"), null], "Confirm Password does not match").required("Confirm Password is Required!"),
    }),

    onSubmit: (values) => {
      console.log("FormikValues => ", values);

      values.uuid = uuidv4();

      // Convert all string values to lowercase
      const lowercaseValues = Object.keys(values).reduce((acc, key) => {
        acc[key] = typeof values[key] === 'string' ? values[key].toLowerCase() : values[key];
        return acc;
      }, {});

      console.log("lowerCase => ", lowercaseValues);

      if (userSignUpDataState?.email === lowercaseValues.email) {
        setCredentialsError("User already exists. Go to the Sign in page.");
      } else {
        storeDataLocalStorage(lowercaseValues);
      }
    },
  });

  const storeDataLocalStorage = (lowercaseValues) => {
    try {
      localStorage.setItem("userSignUpData", JSON.stringify(lowercaseValues));
      console.log("User SignUp Successfully Done!");
      navigate("/login");
    } catch (error) {
      console.log("error => ", error);
    }
  };

  return (
    <>
      <div className="sign-up-page flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="left-item md:order-1 order-2 flex flex-col justify-center">
              <div className="text-content text-center">
                <h1 className="font-bold text-[25px] my-2">No account? Sign up</h1>
              </div>
              {/* form */}
              <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name:
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="given-name"
                        id="full-name"
                        placeholder="Enter Full Name"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <div className="text-red-600">{formik.errors.fullName}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email:
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password:
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-600">{formik.errors.password}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">
                    <label
                      htmlFor="cpassword"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password:
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Enter Confirm Password"
                        value={formik.values.cpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.cpassword && formik.errors.cpassword ? (
                      <div className="text-red-600">{formik.errors.cpassword}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="lg:basis-3/5 basis-11/12">
                    <p className="my-4 text-center">
                      Have an account already? <Link to="/login" className="text-green-800 underline hover:opacity-80">Sign in here!</Link>
                    </p>
                    {!credentialsError ? null : (
                      <div className="font-bold text-red-600 text-[18px] text-center">{credentialsError}</div>
                    )}
                    <button type="submit" className="bg-green-800 text-white rounded p-4 my-5 hover:opacity-75 w-full">Sign Up</button>
                  </div>
                </div>
              </form>
              {/* End-form */}
            </div>
            <div className="right-item order-1 md:order-2">
              <img src={authImage} alt="Authentication" className="md:h-auto h-80 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
