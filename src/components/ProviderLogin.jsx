import React, { useEffect } from 'react'
import { ColorRing } from 'react-loader-spinner';
import { Formik } from 'formik';
import { Checkbox } from 'antd';
import axios from 'axios';
import { MdCopyright } from 'react-icons/md';
import { useNavigate,Link } from 'react-router-dom';

const ProviderLogin = () => {

	const navigate = useNavigate();

	function sleep(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, ms)
		})
	}


	async function handleLogin(values, setSubmitting) {
		try {
			await sleep(2000);
			const response = await axios.post("http://174.138.76.145/api/v1/manage/provider-login", {...values});
			if(response.status === 200) {
				localStorage.setItem("colo_H_accessToken", response.data.data.accessToken);
				localStorage.setItem("colo_H_providerData", JSON.stringify(response.data.data));

				// redirect to provider portal 
				navigate("/provider-portal");
			}
			setSubmitting(false);
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		}
	}

	useEffect(()=>{
		if(localStorage.getItem('colo_H_accessToken') && Object.keys(JSON.parse(localStorage.getItem('colo_H_providerData'))).length > 0){
			navigate("/provider-portal")
		}
	},[])

	return (
		<section className='bg-slate-100'>
			<div id="login-bg" className='flex flex-col items-start justify-start center-wr min-h-screen bg-white p-[30px] relative'>
				<figure onClick={()=>navigate("/")} className='flex items-center gap-[10px] cursor-pointer login-pg-logo-wr'>
					<img src="/logo-updated.png" width={250} alt="" />
					<h3 className='text-[40px] capitalize'>Provider Portal</h3>
				</figure>
				<h2 className='mt-[24px] text-[24px] font-semibold'>Login</h2>
				<Formik
					initialValues={{ email: '', password: '', rememberMe: false }}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Email is Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}
						if (!values.password) errors.password = "Password is Required"
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							handleLogin(values, setSubmitting);
						}, 400);
					}}
				>
					{
						({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
							setFieldValue,
						}) => (
							<form onSubmit={handleSubmit} className='w-[30%] provider-login-form-wr'>
								<div className='w-[100%] mt-[20px]'>
									<label className='mb-[0px] block' htmlFor="">Email*:{(errors.email && touched.email) && <span className='text-red-600 ml-[10px]'>({errors.email})</span>}</label>
									<input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
								</div>
								<div className='w-[100%] mt-[20px]'>
									<label className='mb-[0px] block' htmlFor="">Password*:{(errors.password && touched.password) && <span className='text-red-600 ml-[10px]'>({errors.password})</span>}</label>
									<input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
									<p className='text-right underline text-sky-600'>Forgot Password?</p>
								</div>
								<Checkbox name='rememberMe' value={values.rememberMe} onChange={handleChange} >Remember Me</Checkbox>
								<button className='block px-[30px] mt-[30px] leading-[50px] font-semibold bg-sky-600 text-white hover:bg-sky-700 transition-all duration-200'>{isSubmitting ?
									<ColorRing
										visible={true}
										height="50"
										width="45"
										ariaLabel="color-ring-loading"
										wrapperStyle={{}}
										wrapperClass="color-ring-wrapper"
										colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
									/> : 'Log In'}</button>
							</form>
						)
					}
				</Formik>

				<div className='for-res-in-login fixed bottom-0 left-[50%] translate-x-[-50%] p-[20px] border-t-[1px] border-t-[rgba(0,0,0,0.6)] center-wr w-[75%] flex flex-col items-center justify-start'>
					<div className='flex items-center gap-[5px]'><p>Copyright</p> <p>{new Date().getFullYear()},<Link to="/">ColoHealth</Link>. All rights reserved.</p></div>
					<p className='mt-[10px] text-center text-slate-500 text-[14px]'>For permissions requests or other inquiries, please contact <Link to="/">ColoHealth</Link>.</p>

				</div>
			</div>
		</section>
	)
}

export default ProviderLogin