import React from 'react';
import {Icon} from 'antd';
import {useToggle} from "hooks/useToggle";

export const Password = () => {
    const {isOn: showPlainText, toggle} = useToggle();

    return (
        <>
            <Icon
                type={showPlainText ? 'eye-invisible' : 'eye'}
                onClick={toggle}
            />
            <label> Password
                <input type={showPlainText ? 'text' : 'password'}
                       name='password'/>
            </label>
        </>
    )
};

