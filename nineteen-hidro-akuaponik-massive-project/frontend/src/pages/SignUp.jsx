import React, { useState } from "react";
import image from "../assets/foto47.jpg?url";
import { Await, useNavigate } from "react-router-dom";
import Axios from "axios"

const SignUp = () => {
  const navigate = useNavigate();
  const [initialValue, setInitialValue] = useState({
    email:"",
    password:"",
    firstname:"",
    lastname:""
  })
   const handleLogin = async () => {
    const response = await Axios.post('http://localhost:3000/api/register', initialValue)
    if(response.data){
      localStorage.setItem(
        'token', response.data.token)
      navigate('login/')
    }
    };
    const handleChange = (name, value) => {
      if(name == 'email'){
        setInitialValue({...initialValue, email: value})
      } 
      if(name == 'firstname') {
        setInitialValue({...initialValue, password: value})
      }
      if(name == 'lastname') {
        setInitialValue({...initialValue, password: value})
      }
    }


     
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Gambar */}
      <div className="relative w-full h-full">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt="Gambar Latar"
        />
      </div>

      {/* Form Pendaftaran */}
      <div className="flex items-center justify-center bg-green-50  p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">Daftar</h3>
          <p className="text-sm text-center text-gray-600 mb-6">
            Selamat datang! Silakan masukkan data Anda.
          </p>
          <div className="space-y-4">
            <input
            onChange={(e) => handleChange('firstname',e.target.value)}
              type="text"
              placeholder="Nama Depan"
              className="w-full py-2 px-4 text-sm border rounded-md outline-none focus:ring focus:ring-green-200"
            />
            <input
             onChange={(e) => handleChange('lastname',e.target.value)}
              type="text"
              placeholder="Nama Belakang"
              className="w-full py-2 px-4 text-sm border rounded-md outline-none focus:ring focus:ring-green-200"
            />
            <input
             onChange={(e) => handleChange('email',e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 text-sm border rounded-md outline-none focus:ring focus:ring-green-200"
            />
            <input
             onChange={(e) => handleChange('password',e.target.value)}
              type="password"
              placeholder="Kata Sandi"
              className="w-full py-2 px-4 text-sm border rounded-md outline-none focus:ring focus:ring-green-200"
            />
          </div>
          <div className="flex justify-between items-center text-sm mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ingat Saya Selama 30 Hari
            </label>
            <p className="cursor-pointer underline">Lupa Kata Sandi?</p>
          </div>
          <button  onClick={handleLogin} className="w-full bg-green-800 text-white py-2 rounded-md mt-6 text-center font-medium hover:bg-green-700">
            Daftar
          </button>
          <p className="text-sm text-center text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <span className="font-medium underline cursor-pointer">
              Masuk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
