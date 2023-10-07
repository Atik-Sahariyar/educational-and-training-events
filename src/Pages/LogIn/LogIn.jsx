import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const LogIn = () => {
   const { googleSignIn } = useContext(AuthContext);

   const handleGoogleSignIn = () =>{
    return googleSignIn();
   }

    return (
       <div>
         <div className="text-center">
        
        <h3 className="text-3xl my-8">Please login</h3>
        <form  className=" mx-auto w-1/2">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div>
                <button  className="btn btn-primary w-full">Login</button>
            </div>    
        
        </form>
        <div>
        <p>---------- Or -----------</p>
        <button onClick={() => handleGoogleSignIn()}  className=" text-blue-600 underline border px-3 py-1 rounded-md hover:bg-gray-400">Google</button>
        </div>
        
        <p className=" my-2">Do not have an account <Link to ="/registration" className=" text-blue-800 underline">Registration</Link></p>
        </div>
       </div>
    );
};

export default LogIn;