import React from "react";
import SignupButton from "../Button/SignupButton";
import Input, { InputProps } from "../Input/Input";
import Button from "../UI/Button";
import classes from './RegistrationForm.module.scss'

const RegistrationForm: React.FC<{ input: InputProps }> = ({ input }) => {

    return (
        <div className={classes['registration-form']}>
            <h3 className={classes['registration-form-subtitle-h3']}>Sign up with your email address</h3>

            <Input
                name="email"
                label="What&apos;s your email?"
                type="email"
                placeholder="Enter your email."
            />

            <Input
                name="confirm-email"
                label="Confirm your email"
                type="email"
                placeholder="Enter your email again."
            />

            <Input
                name="password"
                label="Create a password"
                type="password"
                placeholder="Create a password"
            />

            <Input
                name="profile-name"
                label="What should we call you?"
                type="text"
                placeholder="Enter a profile name."
            />

            <p className={classes['registration-form-description']}>This appears on your profile.</p>


            <label className={classes['registration-form-input-label']} >What&apos;s your date of birth</label>

            <div className={classes['registration-form-birth']}>

                <div className={classes['registration-form-birth-input']}>
                    <label className={classes['registration-form-description']} htmlFor="month">Month</label>
                    <input className={`${classes['registration-form-input']} ${classes.month}`}  type='text' name="month" list="month" placeholder="Month" />
                    <datalist id="month" >
                        <option value='January'/>
                        <option value='February'/>
                        <option value="March"/>
                        <option value="April"/>
                        <option value="May"/>
                        <option value="June"/>
                        <option value="July"/>
                        <option value="August"/>
                        <option value="September"/>
                        <option value="October"/>
                        <option value="November"/>
                        <option value="December"/>
                    </datalist>
                </div>

                <div className={classes['registration-form-birth-input']}>
                    <label className={classes['registration-form-description']} htmlFor="month">Day</label>
                    <input className={`${classes['registration-form-input']} ${classes.year}`} type="select" name="month" placeholder="DD" />
                </div>

                <div className={classes['registration-form-birth-input']}>
                    <label className={classes['registration-form-description']} htmlFor="month">Year</label>
                    <input className={`${classes['registration-form-input']} ${classes.day}`} type="select" name="month" placeholder="YYY" />
                </div>

            </div>



            <div className={classes['registration-form-gender']}>

                <label className={classes['registration-form-input-label']}>What&apos;s your gender?</label>
                <div className={classes['registration-form-gender-container']}>
                    
                    <input className={classes['registration-form-gender-input']} type='radio' id="male" name="male" value='Male'/>
                    <label className={classes['registration-form-gender-label']} htmlFor="male">Male</label>

                    <input className={classes['registration-form-gender-input']} type='radio' id="female" name="female" value='Female'/>
                    <label className={classes['registration-form-gender-label']}  htmlFor="female">Female</label>

                    <input className={classes['registration-form-gender-input']} type='radio' id="non-binary" name="non-binary" value='Non-binary'/>
                    <label className={classes['registration-form-gender-label']}  htmlFor="non-binary">Non-binary</label>

                    <input className={classes['registration-form-gender-input']} type='radio' id="other" name="other" value='Other'/>
                    <label className={classes['registration-form-gender-label']}  htmlFor="other">Other</label>

                    <input className={classes['registration-form-gender-input']} type='radio' id="not-to-say" name="not-to-say" value='Prefer not to say'/>
                    <label className={classes['registration-form-gender-label']}  htmlFor="not-to-say">Prefer not to say</label>
                </div>

            </div>

            <div className={classes['registration-form-marketing']}>
                <input className={classes['registration-form-marketing-input']} type='checkbox' id="male" name="male" value='Male'/>
                <label className={classes['registration-form-marketing-label']} htmlFor="male">Share my registration date with Spotify&apos;s content providers for marketing purposes.</label>
                
            </div>

            <p className={classes['registration-form-terms']}>By clicking on sing-up. you agree to Sporify&apos;s <a href="#">Terms and Conditions of Use</a>.</p>

            <p className={classes['registration-form-terms']}>To learn more about how. Spotify collects, uses, shares and protects your
            personal data, please see <a href="#">Spotify&apos;s Privacy Policy</a>.</p>

            <SignupButton/>

            <p className={classes['registration-form-login']}>Have an account? <a href="#">Log in</a>.</p>
        </div>
    )
}

export default RegistrationForm