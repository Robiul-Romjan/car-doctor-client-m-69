import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [error, setError] = useState("")
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        setError("")
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result=> {
            console.log(result.user)
            if(result.user){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }
        })
        .catch(error=> {
            setError(error.message)
        })
      form.reset();
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-20">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Sign Up now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p className="text-error">{error}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <Link className="text-error" to="/login">have an account? Please Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;