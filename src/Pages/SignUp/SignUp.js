import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import cogoToast from 'cogo-toast';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser, updateName, emailVerify } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setError('Password should be 6 character or more');
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                
                // Name update
                updateName(name)
                    .then(() => {
                        // cogoToast.success('Name updated');

                        // email verification 
                        emailVerify()
                            .then(() => {
                                cogoToast.success('Please check your email for verification');
                            })
                            .catch(error => {
                                console.error(error);
                                setError(error.message);
                            })
                    })
                    .catch(() => {
                        console.error(error.message);
                        setError(error.message);
                    })

            })
            .catch(error => {
                console.error(error.message)
                setError(error.message);
            });

        form.reset();

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <p className='text-orange-600'> {error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;