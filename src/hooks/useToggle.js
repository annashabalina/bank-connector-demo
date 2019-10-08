import {useCallback, useState} from "react";

export function useToggle(initialState = false) {
    const [isOn, setIsOn] = useState(initialState);
    const toggle = useCallback(() => setIsOn(!isOn), [isOn]);
    const forceState = state => setIsOn(state);

    return {isOn, toggle, forceState};
}