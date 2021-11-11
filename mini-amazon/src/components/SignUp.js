import React from "react";
// import * as FaIcons from 'react-icons/fa'

function SignUp(props){
    return (
        <div>
            <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input name="email" class="input" placeholder="Email" data-validation="email not-blank" type="email">
                    </input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="validation-error-message hidden has-text-danger">Email must be a valid email address</div>
            </div>
            <div class="field">
                <label for="password" class="label">Password</label>
                <div class="control">
                    <input name="password" class="input" placeholder="Password" data-validation="not-blank" type="password"></input>
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignUp;