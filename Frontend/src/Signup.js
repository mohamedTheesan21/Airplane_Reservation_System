import React,{useState} from 'react';
import { Link } from "react-router-dom";
import validation from './SignupValidation';

function Signup() {

    const [values, setValues] = useState({
        username:'',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }

    return (
        <div className='background d-flex justify-content-center align-items-center vh-100'>
            <div className='signup p-3 rounded w-25'>
                <h2>Sign-up</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email' className="form-label"><strong>email</strong></label>
                        <div className="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="fa fa-envelope"></i></span>
                            <input type='text' placeholder='Enter email' name="email"
                            onChange={handleInput} className="form-control rounded-0"></input>
                              
                        </div>
                        {errors.email && <span className="text-danger">{errors.email}</span>} 
                    </div>
                    <div>
                        <label htmlFor='username' className="form-label"><strong>username</strong></label>
                        <div className="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><i class="fa fa-user icon"></i></span>
                            <input type='text' placeholder='Enter username' name="username"
                            onChange={handleInput} className="form-control rounded-0"></input>
                            
                        </div> 
                        {errors.username && <span className="text-danger">{errors.username}</span>}
                    </div>
                    <div>
                        <label htmlFor='password' className="form-label"><strong>password</strong></label>
                        <div className="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="fa fa-lock"></i></span>
                            <input type='password' placeholder='Enter password' name="password"
                            onChange={handleInput} className="form-control rounded-0"></input>
                            
                        </div>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Signup</button>
                    <p></p>
                    <Link to='/' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
                    <p className='text-center'><strong>OR</strong></p>
                    <Link to='/home' className='btn btn-default border w-100 bg-light text-decoration-none'>Visit as a guest</Link>
                </form>
            </div>
        </div>
);
}

export default Signup;

