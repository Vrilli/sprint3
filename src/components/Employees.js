import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../action/actionLogin';

export const Employees = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/Login")
    }

    return (
        <div>
            <button
            onClick={() => handleLogout()}>logout</button>
        </div>
    )
}