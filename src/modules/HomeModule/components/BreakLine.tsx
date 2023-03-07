import React from 'react'
import classes from './BreakLine.module.scss'

const BreakLine: React.FC = () => {
    return (
        <div className={classes.breakline}>
            <p className={classes['breakline-text']}>or</p>
        </div>
    )
}

export default BreakLine