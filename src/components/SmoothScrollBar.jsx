import React, { useRef, useEffect } from 'react'
import ScrollBar from 'react-smooth-scrollbar'
import { useLocation } from 'react-router-dom';

const SmoothScrollBar = ({ children }) => {

    const ref = useRef(null)

    const { pathName } = useLocation()

    useEffect(() => {
        const { scrollbar } = ref.current;
        scrollbar.setPosition(0, 0);
    }, [pathName])

    return (
        <ScrollBar ref={ref} damping={0.05}>
            {children}
        </ScrollBar>
    )
}

export default SmoothScrollBar
