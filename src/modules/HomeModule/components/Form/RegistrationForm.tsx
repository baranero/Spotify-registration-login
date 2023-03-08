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
            

        </div>
    )
}

export default RegistrationForm