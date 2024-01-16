import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Login } from './../APIs/login';
import { TokenContext } from './../context/token';
import { RoleContext } from './../context/role';


export default function LoginForm() {
    const { token, setToken } = useContext(TokenContext)
    const { role, setRole } = useContext(RoleContext)
    let navigate = useNavigate()
    const [errorMessage, seterrorMessage] = useState(null)
    const [form, setForm] = useState({
        emailOrPhone: '',
        password: '',
    })
    const [formError, setFormError] = useState({
        emailOrPhone: null,
        password: null,
    });

    const handleOnChangeForm = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'emailOrPhone') {
            setForm({
                ...form,
                emailOrPhone: value
            });
            setFormError({
                ...formError,
                emailOrPhone:
                    value.trim(" ").length === 0
                        ? "You Should Enter Your username"
                        : null
            })
        }
        if (name === 'password') {
            setForm({
                ...form,
                password: value
            });
            setFormError({
                ...formError,
                password:
                    value.trim(" ").length === 0
                        ? "You Should Enter Your Password"
                        : null
            })
        }
    }

    const isFormValid = !formError.emailOrPhone && !formError.password && form.emailOrPhone && form.password

    const handleOnClickLogin = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log("Form Submitted Successfully");
            Login(form)
                .then((res) => {
                    console.log(res && res.data);
                    setToken(res.data.token);
                    setRole(res.data.role.name);
                    if(res.data.role.name == 'admin'){
                        navigate('/dashboard')
                    }else{
                        navigate('/profile')
                    }
                   
                })
                .catch((err) => {
                    console.log(err.response && err.response.data);
                    seterrorMessage('Please enter your username and password correctly.')
                });
        } else {
            seterrorMessage('Please enter your username and password.')
            console.log(formError);
            console.log(form);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: "570px"}}>
            <div className="profile container p-5 my-5  shadow rounded-3 bg-white text-start" style={{ width: "800px" }}>
                <div className="row align-items-center">
                    <div className="col-6 pb-5">
                        {(errorMessage) && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>
                                {errorMessage}
                            </p>
                        )}
                        <form method="post" encType="multipart/form-data">
                            <div className=" mb-3">
                                <label htmlFor="floatingInput" className='form-label'>email or Phone</label>
                                <input type="emailOrPhone" className="form-control" id="floatingInput" value={form.emailOrPhone} onChange={handleOnChangeForm} placeholder='Enter your email or phone' name="emailOrPhone" required />
                                {formError.username && <div className="form-text text-danger text-start ">{formError.emailOrPhone}</div>}
                            </div>
                            <div className=" mb-3">
                                <label htmlFor="floatingPassword">Password</label>
                                <input type="password" className="form-control" id="floatingPassword" value={form.password} onChange={handleOnChangeForm} name='password' placeholder='Enter your password' required />
                                {formError.password && <div className="form-text text-danger text-start ">{formError.password}</div>}
                            </div>
                            <div className="d-flex flex-column">
                                <button type="submit" className="btn custom-btn my-4 py-2" style={{ borderRadius: '7px' }} onClick={handleOnClickLogin}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}