import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";


const Register = () => {
  const {createuser}  = useContext(Authcontext)
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const  name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        // 
        createuser(email,password)
        .then(res =>{
            console.log(res.user)

        })
        .catch(error =>{
            console.log(error, "The invalid message")
        })
    
    }
    return (
        <div className="flex items-center justify-between my-8 px-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <div>
            <img className="w-80 h-70 rounded" src="https://i.ibb.co/JrKFKh5/878787.png"/>
        </div>
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
<h1 className="text-2xl font-bold text-center">Login</h1>
<form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
    <div className="space-y-1 text-sm">
        <label className="block dark:text-gray-400">Name</label>
        <input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm">
        <label className="block dark:text-gray-400">Email</label>
        <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm">
        <label  className="block dark:text-gray-400">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
        </div>
    </div>
    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
</form>
<div className="flex items-center pt-4 space-x-1">
    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    {/* <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p> */}
    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
</div>

<p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account
    <Link>
    <button rel="noopener noreferrer" href="#" type="submit" className="underline dark:text-gray-100">Login</button>
    </Link>
    
   
</p>
</div>
</div>
    );
};

export default Register;
