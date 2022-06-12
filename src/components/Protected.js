import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {

    const history = useNavigate();

    // if not authenticated then redirect to register route
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history("/register");
        }
    }, [])

    let PassComponent = props.PassComponent
    return (
        <div>
            <PassComponent />
        </div>
    )
}

export default Protected