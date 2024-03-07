import {useFormik} from "formik";
import React from "react";
import {loginTC} from "redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoggedIn} from "components/Login/auth.selectors";
import {Redirect} from "react-router-dom";

type  FormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
}
export const LoginForm = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn);



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values) => {
            dispatch(loginTC(values))
        },
        validate: values => {
            const errors: Partial<FormValues> = {};

            if (!values.email) {
                errors.email = 'Email Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password Required';
            } else if (values.password.length <= 3) {
                errors.password = 'Incorrect password length';
            }

            return errors;
        },
    });

    if (isLoggedIn) {
        return <Redirect to="/profile" />;
    }


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{color: 'red'}}>{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div style={{color: 'red'}}>{formik.errors.password}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="rememberMe">Remember Me</label>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};