import { Radio } from 'antd';
import { Formik } from 'formik';
import React from 'react'
import { AcceptHosted } from 'react-acceptjs';
import { ColorRing } from 'react-loader-spinner';


function OrderForm({ submitTestOrderByProvider, recurringInvoiceOrder, formToken, regId }) {
	const [waitInvoice, setWaitInvoice] = React.useState(false);
	const [waitPayment, setWaitPayment] = React.useState(false);

	return (
		<div>
			<Formik

				initialValues={{ confirm: false, firstName: '', lastName: '', dob: '', gender: "Male", streetAddress: "", city: '', state: '', zip: '', phone: '', email: '', race: 'American Indian', ethnicity: 'Hispanic/Latino' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					if (!values.confirm) errors.confirm = "Please consent to the registration by checking this field."
					if (!values.firstName) errors.firstName = "Please enter your first name";
					if (!values.lastName) errors.lastName = "Please enter your last name";
					if (!values.dob) errors.dob = "Please enter your DoB";
					if (!values.gender) errors.gender = "Please enter your gender";
					if (!values.streetAddress) errors.streetAddress = "Please enter your address";
					if (!values.city) errors.city = "City is required";
					if (!values.state) errors.state = "State is required";
					if (!values.zip) errors.zip = "Zip is required";
					if (!values.phone) errors.phone = "Phone is required";
					if (!values.email) errors.email = "Email is required";
					if (!values.race) errors.race = "Race is required";
					if (!values.ethnicity) errors.ethnicity = "Ethnicity is required";
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true);
					setTimeout(() => {
						console.log("default submit function");
						submitTestOrderByProvider(values, setSubmitting);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					setSubmitting,
					setFieldValue,
				}) => (
					<form className='grid grid-cols-6 gap-3 gap-y-6' onSubmit={handleSubmit}>
						{/* First Name */}
						<div style={{ backgroundColor: touched.firstName && errors.firstName ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-3'>
							{((touched.firstName && errors.firstName) || (touched.lastName && errors.lastName)) && <figure className='error-arrow-hldr absolute left-[-140px] top-0 translate-y-[-25%]'>
								<img src="/error-arrow.png" className='rotate-[-90deg]' alt="" />
							</figure>}
							{errors.firstName && touched.firstName && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.firstName}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.firstName} name='firstName' placeholder='First Name' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Last Name */}
						<div style={{ backgroundColor: touched.lastName && errors.lastName ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-3'>
							{errors.lastName && touched.lastName && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.lastName}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.lastName} name='lastName' placeholder='Last Name' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Addr */}
						<div style={{ backgroundColor: touched.streetAddress && errors.streetAddress ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-6'>
							{((errors.streetAddress && touched.streetAddress)) && <figure className='error-arrow-hldr absolute left-[-140px] top-0 translate-y-[-25%]'>
								<img src="/error-arrow.png" className='rotate-[-90deg]' alt="" />
							</figure>}
							{errors.streetAddress && touched.streetAddress && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.streetAddress}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.streetAddress} name='streetAddress' placeholder='Street Address' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* City */}
						<div style={{ backgroundColor: touched.city && errors.city ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-2'>
							{((touched.city && errors.city) || (touched.state && errors.state) || (touched.zip && errors.zip)) && <figure className='error-arrow-hldr absolute left-[-140px] top-0 translate-y-[-25%]'>
								<img src="/error-arrow.png" className='rotate-[-90deg]' alt="" />
							</figure>}
							{errors.city && touched.city && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.city}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.city} name='city' placeholder='City' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* State */}
						<div style={{ backgroundColor: touched.state && errors.state ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-2'>
							{errors.state && touched.state && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.state}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.state} name='state' placeholder='State' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Zip */}
						<div style={{ backgroundColor: touched.zip && errors.zip ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-2'>
							{errors.zip && touched.zip && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.zip}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.zip} name='zip' placeholder='Zip' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Phone */}
						<div style={{ backgroundColor: touched.phone && errors.phone ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-6'>
							{((touched.phone && errors.phone)) && <figure className='error-arrow-hldr absolute left-[-140px] top-0 translate-y-[-25%]'>
								<img src="/error-arrow.png" className='rotate-[-90deg]' alt="" />
							</figure>}
							{errors.phone && touched.phone && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.phone}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.phone} name='phone' placeholder='Phone' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Email */}
						<div style={{ backgroundColor: touched.email && errors.email ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-6'>
							{((touched.email && errors.email)) && <figure className='error-arrow-hldr absolute left-[-140px] top-0 translate-y-[-25%]'>
								<img src="/error-arrow.png" className='rotate-[-90deg]' alt="" />
							</figure>}
							{errors.email && touched.email && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.email}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' placeholder='Email' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Bday */}
						<div style={{ backgroundColor: touched.dob && errors.dob ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-6'>
							{((touched.dob && errors.dob)) && <figure className='error-arrow-hldr absolute left-[-140px] top-0 translate-y-[-25%]'>
								<img src="/error-arrow.png" className='rotate-[-90deg]' alt="" />
							</figure>}
							{errors.dob && touched.dob && <span className='inline-block absolute top-[-26px] text-[17px] font-semibold left-[-0px] text-red-600'>{errors.dob}</span>}
							<input type="text" onChange={handleChange} onBlur={handleBlur} value={values.dob} name='dob' placeholder='Birthday (mm/dd/yyyy)' className='inline-block outline-none w-full border-none bg-transparent' />
						</div>
						{/* Gender */}
						<div style={{ backgroundColor: touched.gender && errors.gender ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[15.5px] col-span-6'>
							<p>Gender</p>
							<div className='flex flex-wrap items-start mt-[10px] gap-[20px] gap-y-[30px]'>
								<Radio.Group value={values.gender} onChange={handleChange} onBlur={handleBlur} size='large' name="gender" className='flex items-center justify-start gap-[20px] flex-wrap ' defaultValue={1}>
									<Radio value={"Male"}>Male</Radio>
									<Radio value={"Female"}>Female</Radio>
									<Radio value={"Prefer Not To Say"}>Prefer Not To Say</Radio>
								</Radio.Group>
							</div>
						</div>
						{/* Race */}
						<div style={{ backgroundColor: touched.race && errors.race ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-6'>
							<p>Race</p>
							<div className='flex flex-wrap items-start mt-[10px] gap-[20px] gap-y-[30px]'>
								<Radio.Group onChange={handleChange} onBlur={handleBlur} size='large' name="race" className='flex items-center justify-start gap-[20px] flex-wrap ' value={values.race}>
									<Radio value={"American Indian"}>American Indian</Radio>
									<Radio value={"Alaskan Native"}>Alaskan Native</Radio>
									<Radio value={"Asian"}>Asian</Radio>
									<Radio value={"White"}>White</Radio>
									<Radio value={"African American"}>African American</Radio>
									<Radio value={"Native American"}>Native American</Radio>
									<Radio value={"Pacific Islander"}>Pacific Islander</Radio>
									<Radio value={"Other"}>Other</Radio>
									<Radio value={"Prefer Not To Say"}>Prefer Not To Say</Radio>
								</Radio.Group>
							</div>
						</div>
						{/* Ethnicity */}
						<div style={{ backgroundColor: touched.ethnicity && errors.race ? "red" : "#e6e7e8" }} className='bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] col-span-6'>
							<p>Ethnicity</p>
							<div className='flex flex-wrap items-start mt-[10px] gap-[20px] gap-y-[30px]'>
								<Radio.Group value={values.ethnicity} onChange={handleChange} onBlur={handleBlur} size='large' name="ethnicity" className='flex items-center justify-start gap-[20px] flex-wrap ' defaultValue={1}>
									<Radio value={"Hispanic/Latino"}>Hispanic / Latino</Radio>
									<Radio value={"Not Hispanic/Latino"}>Not Hispanic / Latino</Radio>
									<Radio value={"Prefer Not To Say"}>Prefer Not To Say</Radio>
								</Radio.Group>
							</div>
						</div>
						<div className="flex flex-col col-span-6">
							<p className='text-[40px] text-center uppercase my-[30px]'>Choose payment option</p>
							<p className='text-[18px]'><span className='font-bold'>Invoiced Orders </span>are tabulated and charged to your account as per terms of your agreement with NewDay Diagnostics.</p>
							<button
								onClick={() => {
									setWaitInvoice(true);
									setSubmitting(true);
									recurringInvoiceOrder(values, setSubmitting, setWaitInvoice);
								}}
								type="button"
								className='w-fit px-[30px] mt-[30px] leading-[50px] font-semibold border-[1px] border-black bg-[#DEA52B] uppercase'>{(isSubmitting && waitInvoice) ? <ColorRing
                                                                        visible={true}
                                                                        height="50"
                                                                        width="45"
                                                                        ariaLabel="color-ring-loading"
                                                                        wrapperStyle={{}}
                                                                        wrapperClass="color-ring-wrapper"
                                                                        colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
                                                                /> : 'Place Invoiced Order'}</button>
							<p className='text-[18px] font-bold mt-[25px] mb-[10px]'>-OR-</p>
							<p className='my-[5px] text-[18px]'>Pay directly online and instantly book your order</p>
							<button
								onClick={() => {
									setWaitPayment(true);
									setSubmitting(true);
									submitTestOrderByProvider(values, setSubmitting, setWaitPayment);
								}}
								type="button"
								className='w-fit px-[30px] mt-[15px] leading-[50px] font-semibold text-white border-[1px] border-black bg-[#202020] uppercase'>{(isSubmitting && waitPayment ) ? <ColorRing
									visible={true}
									height="50"
									width="45"
									ariaLabel="color-ring-loading"
									wrapperStyle={{}}
									wrapperClass="color-ring-wrapper"
									colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
								/> : 'Pay Now'}</button>
						</div>
					</form>
				)}
			</Formik>
			<div className='mt-[35px] flex items-center justify-end w-full'>
				{(formToken) && (
					<>
						<div className='flex items-center justify-start flex-col bg-[#E8E7ED] w-full'>
							<div className='flex items-center gap-[10px] py-[25px] pb-[25px] px-[35px] w-full'>
								<h3>Credit Card</h3>
								<img src="/allcard.png" width={170} alt="" />
							</div>
							<div className='border-t-[1px] border-[rgba(0,0,0,0.3)] bg-[#E8E7ED] pt-[20px] px-[35px] pb-[35px] w-full'>
								<p >Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className='text-red-600' href="">privacy policy</a>.</p>
								<p className='mt-[15px]'>Please enter your credit card details below to proceed with the payment securely.</p>

								<div className='flex items-center justify-end'>
									<div className="row">
										<div className="flex items-center justify-center border-2 border-slate-900 font-semibold bg-[#DEA52B] mt-[20px] py-[10px] px-[30px]">
											<AcceptHosted formToken={formToken} key={'colohealth-redr-110724'} integration="redirect">
												Make Payment
											</AcceptHosted>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default OrderForm
