/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { onCheckIsLogin } from "../../redux/features/users";

const Protected = ({ children, adminPage, cashierPage }) => {
    const role = useSelector((state) => state.users.role)
    const id = useSelector((state) => state.users.id)

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onCheckIsLogin())
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            navigate('/login')
            return
        }

        if (!role) {
            return
        }

        if (role === 'Cashier' && adminPage) {
            return setTimeout(() => { setLoading(false) }, 1000), navigate('/')
        }

        if (role === 'Admin' && cashierPage) {
            return setTimeout(() => { setLoading(false) }, 1000), navigate('/admin')
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [role])

    return (
        <>
            {
                loading ? (
                    <>
                        <main className="flex justify-center items-center h-screen">
                            <Spinner color='red.500' boxSize={100} size={"xl"} thickness="10px" />
                        </main>
                    </>
                ) : (
                    children
                )
            }
        </>
    )
};

export default Protected;