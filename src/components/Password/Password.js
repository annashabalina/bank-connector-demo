import React from 'react';
import {Icon} from 'antd';
import {useToggle} from "hooks/useToggle";
import passwordStyle from './Password.module.scss';

export const Password = () => {
    const {isOn: showPlainText, toggle} = useToggle();

    return (
        <div className={passwordStyle.passwordWrapper}>
            <div>
                <span>
                <Icon
                    type={showPlainText ? 'eye-invisible' : 'eye'}
                    onClick={toggle}
                />
                Show
                </span>
            </div>
            <label> Password
                <input type={showPlainText ? 'text' : 'password'}
                       name='password'/>
            </label>
        </div>
    )
};

