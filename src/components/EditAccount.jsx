import { Formik } from 'formik';
import React from 'react'
import { ColorRing } from 'react-loader-spinner';
import axios from "axios";

function EditAccount({handlePasswordChange}) {
	const [providerData, setProviderData] = React.useState(JSON.parse(localStorage.getItem("colo_H_providerData")));
	const providerAccessToken = localStorage.getItem("colo_H_accessToken");
	const [updateFlag, setUpdateFlag] = React.useState(false);

	console.log("EDITING ACCOUNT DETILS", providerData);

	async function handleProviderUpdate(values) {
		try{
			return;
/*			const response = await axios.post('http://174.138.76.145/api/v1/manage/update-provider-manual', {
				...values,
				accessToken: providerAccessToken
			});
			if(response.status === 200){
				setProviderData(response.data.providerData);
				setUpdateFlag(true);
				localStorage.setItem('colo_H_providerData', JSON.stringify(response.data.providerData));
			} */
		} catch(err){
			console.log(err)
		}
	}


	return (
		<div className='col-span-3 py-[25px] px-[50px] pb-[50px]' >
									<h1 className='text-[40px] text-center uppercase'>Edit Your Account</h1>
									<p className='mt-[40px] text-[18px]'>Edit your account details, profile pic and reset your password</p>

									 <p className='text-[18px] my-[30px]'>Edit Provider Data</p>
		{updateFlag &&  <div className="px-[10px] py-[5px] bg-emerald-100 text-emerald-600 font-semibold">Data Updated Successfully!</div>		}

									<Formik
                                                                                initialValues={ providerData }
                                                                                validate={values => {
											setUpdateFlag(false)
                                                                                        const errors = {};
											if(!values.firstName) errors.firstName = "Please enter first name";
											if(!values.lastName) errors.lastName = "Please enter last name";
											if(!values.mi) errors.mi = "Please enter middle name";
											if(!values.dob) errors.dob = "Please enter d.o.b";
											if(!values.email) errors.email = "Please enter email";
											if(!values.phone) errors.phone = "Please enter phone";
											if(!values.address1) errors.address1 = "Please enter address";
											if(!values.city) errors.city = "Please enter city";
											if(!values.state) errors.state = "Please enter state";
											if(!values.zip) errors.zip = "Please enter ZIP";
											if(!values.npi) errors.npi = "Please enter NPI number";
											if(!values.lisProviderId) errors.lisProviderId = "Please enter LIS Provider Id";
											if(!values.resultContactEmail) errors.resultContactEmail = "Please enter result contact email";

                                                                                        return errors;
                                                                                }}
                                                                                onSubmit={(values, { setSubmitting }) => {
                                                                                        setTimeout(() => {
                                                                                                handleProviderUpdate(values);
                                                                                                setSubmitting(false);
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
                                                                        <form onSubmit={handleSubmit}>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">First Name:</label>
                                                                                        <input name='firstName' value={values.firstName}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										<div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Middle Name:</label>
                                                                                        <input name='mi' onChange={handleChange} value={values.mi} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										<div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Last Name:</label>
                                                                                        <input name='lastName' onChange={handleChange} value={values.lastName} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">DOB:</label>
                                                                                        <input name='dob' onChange={handleChange} onBlur={handleBlur} value={values.dob}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Email:</label>
                                                                                        <input name='email' value={values.email}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Phone:</label>
                                                                                        <input name='phone' value={values.phone}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Address 1:</label>
                                                                                        <input name='address1' value={values.address1}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Address 2:</label>
                                                                                        <input name='address2' value={values.address2}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">City:</label>
                                                                                        <input name='city' value={values.city}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">State:</label>
                                                                                        <input name='state' value={values.state}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">ZIP:</label>
                                                                                        <input name='zip'value={values.zip}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">NPI Number:</label>
                                                                                        <input name='npi' value={values.npi}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">LIS Provider Id:</label>
                                                                                        <input name='lisProviderId' value={values.lisProviderId}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										 <div className='w-[100%] mt-[20px]'>
                                                                                        <label className='mb-[0px] block' htmlFor="">Result Contact Email:</label>
                                                                                        <input name='resultContactEmail' value={values.resultContactEmail}  onChange={handleChange} onBlur={handleBlur}  type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
                                                                                </div>
										<button className='px-[30px] mt-[30px] leading-[50px] font-semibold border-[1px] border-black bg-[#DEA52B]'>{isSubmitting ? <ColorRing
                                                                                                                visible={true}
                                                                                                                height="50"
                                                                                                                width="45"
                                                                                                                ariaLabel="color-ring-loading"
                                                                                                                wrapperStyle={{}}
                                                                                                                wrapperClass="color-ring-wrapper"
                                                                                                                colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
                                                                                                        /> : 'Update'}</button>
                                                                        </form>)}
									</Formik>

									<p className='text-[18px] my-[30px]'>Reset your password</p>

									<Formik
										initialValues={{ oldPassword: "", newPassword: "", newConfirmPassword: "" }}
										validate={values => {
											const errors = {};
											if (!values.oldPassword) errors.oldPassword = "Please enter your last password"
											if (!values.newPassword) errors.newPassword = "Please enter your new password";
											if (!values.newConfirmPassword) errors.firstName = "Please confirm your password";
											if (values.newPassword !== values.newConfirmPassword) errors.newPassword = "Passwords do not match";
											return errors;
										}}
										onSubmit={(values, { setSubmitting }) => {
											setTimeout(() => {
												handlePasswordChange(values);
												setSubmitting(false);
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
												<form onSubmit={handleSubmit} className='w-[50%]' >
													<div className='w-[100%] mt-[20px]'>
														<label className='mb-[0px] block' htmlFor="">Old Password:{(errors.oldPassword && touched.oldPassword) && <span className='text-red-600 ml-[10px]'>({errors.oldPassword})</span>}</label>
														<input name='oldPassword' onChange={handleChange} onBlur={handleBlur} value={values.oldPassword} type="password" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
													</div>
													<div className='w-[100%] mt-[20px]'>
														<label className='mb-[0px] block' htmlFor="">New Password:{(errors.newPassword && touched.newPassword) && <span className='text-red-600 ml-[10px]'>({errors.newPassword})</span>}</label>
														<input name='newPassword' onChange={handleChange} onBlur={handleBlur} value={values.newPassword} type="password" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
													</div>
													<div className='w-[100%] mt-[20px]'>
														<label className='mb-[0px] block' htmlFor="">Confirm New Password:{(errors.newConfirmPassword && touched.newConfirmPassword) && <span className='text-red-600 ml-[10px]'>({errors.newConfirmPassword})</span>}</label>
														<input name='newConfirmPassword' onChange={handleChange} onBlur={handleBlur} value={values.newConfirmPassword} type="password" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
													</div>
													<button className='px-[30px] mt-[30px] leading-[50px] font-semibold border-[1px] border-black bg-[#DEA52B]'>{isSubmitting ? <ColorRing
														visible={true}
														height="50"
														width="45"
														ariaLabel="color-ring-loading"
														wrapperStyle={{}}
														wrapperClass="color-ring-wrapper"
														colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
													/> : 'Reset Password'}</button>
												</form>
											)
										}
									</Formik>

									<p className='text-[18px] my-[30px]'>Manage Other Settings</p>

									<form action="">
										<div className='w-[100%] mt-[20px]'>
											<label className='mb-[0px] block' htmlFor="">Phone:</label>
											<input name='phone' type="text" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
										</div>
										<div className='w-[100%] mt-[20px]'>
											<label className='mb-[0px] block' htmlFor="">Profile Image:</label>
											<input name='profileImage' type="file" className='border-[1px] w-[100%] shadow-sm bg-slate-50  px-[30px] py-[8.5px]' />
										</div>
									</form>
									<figure className='flex flex-col items-center justify-center'>
										<img src="/under_cons.svg" width={500} alt="" />
										<h3 className='text-[24px] font-bold uppercase'>Great things are being built...</h3>
									</figure>
								</div>
	)
}

export default EditAccount
