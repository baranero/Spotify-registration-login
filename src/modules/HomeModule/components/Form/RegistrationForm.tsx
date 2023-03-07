import React from "react";
import classes from './RegistrationForm.module.scss'

const RegistrationForm: React.FC = () => {
    return (
        <div className={classes['registration-form']}>
            <h3 className={classes['registration-form-subtitle-h3']}>Sign up with your email address</h3>

            <label className={classes['registration-form-input-label']} htmlFor="email">What&apos;s your email?</label>
            <br/>
            <input className={classes['registration-form-input']} type="email" name="email" placeholder="Enter your email." />

            <label className={classes['registration-form-input-label']} htmlFor="email">Confirm your email</label>
            <br/>
            <input className={classes['registration-form-input']} type="confirm-email" name="email" placeholder="Enter your email again." />

            <label className={classes['registration-form-input-label']} htmlFor="password">Create a password</label>
            <br/>
            <input className={classes['registration-form-input']} type="password" name="password" placeholder="Create a password" />

            <label className={classes['registration-form-input-label']} htmlFor="profile-name">What should we call you?</label>
            <br/>
            <input className={classes['registration-form-input']} type="text" name="profile-name" placeholder="Enter a profile name." />

        </div>
    )
}

export default RegistrationForm