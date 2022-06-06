import React, { useState } from "react";
import "./signup.css"
import axios from "axios";

function Login() {

    const [input, setInput] = useState({
        first: '',
        last: '',
        email: '',
        pass: '',
        confirm: ''
    })

    function formInput(e) {
        const { name, value } = e.target
        setInput(() => ({ ...input, [name]: value }))
    }

    function formSubmit(e) {
        e.preventDefault();
        const newUser = {}
        if (input.pass.length >= 16 || input.pass.length <= 8) {
            alert("your password don't meet the criteria")
        }
        else if (input.pass != input.confirm) {
            alert("your passwords don't match")
        }
        else {
            const newUser = {
                FirstName: input.first,
                LastName: input.last,
                Email: input.email,
                Password: input.pass
            }
        }
    }

    return (
        <div className="container">
            <div className="register-section">
                <div className="register">
                    <form>

                        <label className="form-label name-section">
                            First Name<p className="requirement">*</p>
                        </label>
                        <label className="form-label name-section name-section-right">
                            Last Name<p className="requirement">*</p>
                        </label>

                        <input onChange={formInput} name='first' value={input.first} className="input-form name-input" required></input>
                        <input onChange={formInput} name='last' value={input.last} className="input-form name-input name-input-right" required></input>
                    </form>
                    <form>
                        <label className="form-label">
                            Email<p className="requirement">*</p>
                        </label>
                        <input onChange={formInput} name='email' value={input.user} placeholder="@gmail or @hotmail" autoComplete="off" className="input-form" type="text" required />
                    </form>
                    <form>
                        <label className="form-label">
                            Password<p className="requirement">*</p>
                        </label>
                        <input onChange={formInput} name='pass' value={input.pass} placeholder="8 - 16 letters (a,A,1,!, no punctuation)" autoComplete="off" className="input-form" type="password" required />
                    </form>
                    <form>
                        <label className="form-label" >Confirm Password</label>
                        <input onChange={formInput} name='confirm' value={input.confirm} placeholder="8 - 16 letters (a,A,1,!, no punctuation)" autoComplete="off" className="input-form" type="password" required />
                    </form>
                    <p className="description">* (required field)</p>
                    <button onClick={formSubmit} className="register-button">Finish sign-up</button>

                </div>
            </div>
        </div>

    );
}

export default Login;