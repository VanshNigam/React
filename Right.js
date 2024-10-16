import React, { useState, useRef, useEffect } from "react";
import Logo from "./logo.png"; // Adjust path as necessary

function Right({ isLogin, setIsLogin }) {
  // Define initial styles for input fields
  const initialClass =
    "border-b border-slate-400 placeholder:text-gray-400 pb-2";

  // Set up state for each input field class
  const [hospitalNameClass, setHospitalNameClass] = useState(initialClass);
  const [addressClass, setAddressClass] = useState(initialClass);
  const [cityClass, setCityClass] = useState(initialClass);
  const [stateClass, setStateClass] = useState(initialClass);
  const [pincodeClass, setPincodeClass] = useState(initialClass);
  const [registrationDateClass, setRegistrationDateClass] =
    useState(initialClass);
  const [ambulanceClass, setAmbulanceClass] = useState(initialClass);
  const [emailClass, setEmailClass] = useState(initialClass);
  const [phoneClass, setPhoneClass] = useState(initialClass);
  const [hospitalRegNumberClass, setHospitalRegNumberClass] =
    useState(initialClass);
  const [emergencyWardNumberClass, setEmergencyWardNumberClass] =
    useState(initialClass);
  const [registrationCertificateClass, setRegistrationCertificateClass] =
    useState(initialClass);
  const [createPasswordClass, setCreatePasswordClass] = useState(initialClass);
  const [confirmPasswordClass, setConfirmPasswordClass] =
    useState(initialClass);

  const inputRef = useRef(null); // Reference to the last input field

  const handleInputClick = (setClass) => {
    setClass(
      "text-black text-xl font-semibold border-b border-black placeholder:text-black focus:outline-none pb-2"
    );
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      // Reset all classes to initial
      setHospitalNameClass(initialClass);
      setAddressClass(initialClass);
      setCityClass(initialClass);
      setStateClass(initialClass);
      setPincodeClass(initialClass);
      setRegistrationDateClass(initialClass);
      setAmbulanceClass(initialClass);
      setEmailClass(initialClass);
      setPhoneClass(initialClass);
      setHospitalRegNumberClass(initialClass);
      setEmergencyWardNumberClass(initialClass);
      setRegistrationCertificateClass(initialClass);
      setCreatePasswordClass(initialClass);
      setConfirmPasswordClass(initialClass);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center  pt-[73px] w-[calc(100vw-560px)]">
        <img src={Logo} alt="Logo" className="w-[98px] h-[98px] ml-[90px]" />
        <div className="headingWrapper flex items-center  pl-[160px] size-full text-3xl cursor-pointer">
          <h1
            className={!isLogin ? "font-bold " : "text-slate-400"}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Sign Up
          </h1>
          <p className="ml-4 mr-4 font-semibold text-4xl text-gray-300"> / </p>
          <h1
            className={isLogin ? "font-semibold" : "text-slate-400"}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </h1>
        </div>

        {/* Added Tailwind classes */}
      </div>

      {!isLogin && (
        <div className="signup-form-field ">
          <div className="flex ml-[60px]  text-lg">
            <div className="w-[390px] flex flex-col">
              <input
                type="text"
                placeholder="Hospital Name"
                className={`w-[320px] h-[32px] mt-[50px] ${hospitalNameClass} p-2`} // Added padding
                onClick={() => handleInputClick(setHospitalNameClass)}
              />
              <input
                type="text"
                placeholder="Address"
                className={`w-[320px] h-[32px] mt-[50px] ${addressClass} p-2`} // Added padding
                onClick={() => handleInputClick(setAddressClass)}
              />
              <input
                type="text"
                placeholder="City"
                className={`w-[320px] h-[32px] mt-[50px] ${cityClass} p-2`} // Added padding
                onClick={() => handleInputClick(setCityClass)}
              />
              <input
                type="text"
                placeholder="State"
                className={`w-[320px] h-[32px] mt-[50px] ${stateClass} p-2`} // Added padding
                onClick={() => handleInputClick(setStateClass)}
              />
              <input
                type="text"
                placeholder="Pincode"
                className={`w-[320px] h-[32px] mt-[50px] ${pincodeClass} p-2`} // Added padding
                onClick={() => handleInputClick(setPincodeClass)}
              />
              <input
                type="text"
                placeholder="Hospital Registration Date"
                className={`w-[320px] h-[32px] mt-[50px] ${registrationDateClass} p-2`} // Added padding
                onClick={() => handleInputClick(setRegistrationDateClass)}
              />
              <input
                ref={inputRef}
                type="text"
                placeholder="Number Of Ambulance Available"
                className={`mt-[50px] w-[320px] h-[32px] ${ambulanceClass} p-2`} // Added padding
                onClick={() => handleInputClick(setAmbulanceClass)}
              />
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Email Id"
                className={`w-[320px] h-[32px] mt-[50px] ${emailClass} p-2`} // Added padding
                onClick={() => handleInputClick(setEmailClass)}
              />

              <input
                type="text"
                placeholder="Phone Number"
                className={`w-[320px] h-[32px] mt-[50px] ${phoneClass} p-2`} // Added padding
                onClick={() => handleInputClick(setPhoneClass)}
              />
              <input
                type="text"
                placeholder="Hospital Registration Number"
                className={`w-[320px] h-[32px] mt-[50px] ${hospitalRegNumberClass} p-2`} // Added padding
                onClick={() => handleInputClick(setHospitalRegNumberClass)}
              />
              <input
                type="text"
                placeholder="Emergency-Ward Number"
                className={`w-[320px] h-[32px] mt-[50px] ${emergencyWardNumberClass} p-2`} // Added padding
                onClick={() => handleInputClick(setEmergencyWardNumberClass)}
              />
              <input
                type="text"
                placeholder="Registration Certificate Upload"
                className={`w-[320px] h-[32px] mt-[50px] ${registrationCertificateClass} p-2 border-b border-gray-400`}
                onClick={() =>
                  handleInputClick(setRegistrationCertificateClass)
                }
              />

              <label className="w-[120px] h-[39px] bg-slate-700 text-white  pt-1 pl-3 pr-3 rounded-md cursor-pointer text-center mt-[16px] block">
                Choose
                <input type="file" className="hidden" />
              </label>
              <input
                type="password"
                placeholder="Create Password"
                className={`w-[320px] h-[32px] mt-[20px] ${createPasswordClass} p-2`} // Added padding
                onClick={() => handleInputClick(setCreatePasswordClass)}
              />
              <input
                ref={inputRef}
                type="password"
                placeholder="Confirm Password"
                className={`mt-[50px] w-[320px] h-[32px] ${confirmPasswordClass} p-2`} // Added padding
                onClick={() => handleInputClick(setConfirmPasswordClass)}
              />
            </div>
          </div>
          {/* Sign up button */}
          <div className="flex justify-center pt-[50px]">
            <button className="w-[160px] h-[50px] m-auto bg-black text-white  pt-1 pl-3 pr-3 rounded-2xl cursor-pointer text-center  block font-bold text-xl ">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {isLogin && (
        <form className="login-form-field  ">
          <div className="shadow-2xl mt-[80px] border-l-2 border-t-2 border-gray-300 flex  flex-col  w-[500px]  pb-[140px] rounded-3xl ml-[160px] p-[34px]">
            <div className="top">
              <h1 className="text-center text-2xl font-semibold ">Welcome to Sicu-aura</h1>
              <p className="text-gray-400 mt-4 text-center text-sm">Your one stop safety solutions using innovative technology</p>
            </div>
            <div className="fields w-[300px] m-auto">
              <input
                type="text"
                placeholder="Hospital Name"
                className={`w-[320px] h-[32px] mt-[50px] ${hospitalNameClass} p-2`} // Added padding
                onClick={() => handleInputClick(setHospitalNameClass)}
              />
              <input
                type="text"
                placeholder="Email Id"
                className={`w-[320px] h-[32px] mt-[50px] ${hospitalNameClass} p-2`} // Added padding
                onClick={() => handleInputClick(setHospitalNameClass)}
              />
              <input
                type="text"
                placeholder="Password"
                className={`w-[320px] h-[32px] mt-[50px] ${hospitalNameClass} p-2`} // Added padding
                onClick={() => handleInputClick(setHospitalNameClass)}
              />
              <input
                type="text"
                placeholder="Special Access Code"
                className={`w-[320px] h-[32px] mt-[50px] ${hospitalNameClass} p-2`} // Added padding
                onClick={() => handleInputClick(setHospitalNameClass)}
              />
            </div>
          </div>
        </form>
      )}

      <div className="text-center mt-[50px] text-slate-400">
        • Terms and Condition Privacy Policy
      </div>
    </div>
  );
}

export default Right;
