// import {Formik,Field,ErrorMessage ,Form} from "formik"
// import * as yup from "yup"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div>
    <section className="min-h-screen flex items-stretch text-white ">
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
            
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
            </div>
          
            <div className="w-full py-6 z-20">
            <div className="flex justify-end">
              <span className="text-black ">Don't have an account?</span>
              <Link to={"/register"} className="ml-2 text-green-400">Sign up!</Link>
             </div>
                <h1 className="my-6 text-black font-mono text-2xl" >
                    Welcome Back
                    <p className="text-sm my-6">Login into your account</p>
                </h1>
                <div className="space-x-2">
                    <button className=" bg-black w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</button>
                </div>
                <p className="text-black">
                    or continue with
                </p>
                <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div className=" pt-4">
                        <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-2 text-lg rounded-sm bg-black "/>
                    </div>
                    <div className=" pt-4">
                        <input className="block w-full p-2 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password"/>
                        <p className="text-end text-black">Recover password</p>
                    </div>
 
                    
                    <div className="px-4 pb-2 pt-4">
                        <button className="block w-full p-2 text-md rounded-full bg-black hover:bg-indigo-600 focus:outline-none">login</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                <h1 className="text-5xl font-bold text-left tracking-wide">Welcome back to uniVERSE</h1>
                <p className="text-3xl my-4">Connect, Share, and Discover!</p>
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default Login