import React, { useState } from 'react';
import OrderForm from './OrderForm';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import RequisitionFormPDF from './RequisitionFormPDF';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';

function NewOrder({ }) {

	const [formToken, setFormToken] = useState('');
	const [regId, setRegId] = useState('');

	const providerData = JSON.parse(localStorage.getItem("colo_H_providerData"));
	async function submitTestOrderByProvider(values, setSubmitting, setWaitPayment) {
		try {
			const blob = await pdf(<RequisitionFormPDF patientData={values} providerData={providerData} />).toBlob();

			const formData = new FormData();

			formData.append('file', blob, 'document.pdf');
			formData.append('confirm', values.confirm);
			formData.append('firstName', values.firstName);
			formData.append('lastName', values.lastName);
			formData.append('dob', values.dob);
			formData.append('gender', values.gender);
			formData.append('streetAddress', values.streetAddress);
			formData.append('city', values.city);
			formData.append('state', values.state);
			formData.append('zip', values.zip);
			formData.append('phone', values.phone);
			formData.append('email', values.email);
			formData.append('race', values.race);
			formData.append("ethnicity", values.ethnicity);
			formData.append('providerId', providerData._id);

			const response = await axios.post("http://174.138.76.145/api/v1/manage/register-new-test-data", formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			if (response.status === 200) {
				setFormToken(response.data.code);
				setRegId(response.data.regid);
				setSubmitting(false);
				setWaitPayment(false);
				toast.success("Registration Successful");
			}
		} catch (error) {
			console.log(error);
			setSubmitting(false);
			setWaitPayment(false);
		}
	}

	async function recurringInvoiceOrder(values, setSubmitting, setWaitInvoice) {
		try {
			const blob = await pdf(<RequisitionFormPDF patientData={values} providerData={providerData} />).toBlob();

                        const formData = new FormData();

                        formData.append('file', blob, 'document.pdf');
                        formData.append('confirm', values.confirm);
                        formData.append('firstName', values.firstName);
                        formData.append('lastName', values.lastName);
                        formData.append('dob', values.dob);
                        formData.append('gender', values.gender);
                        formData.append('streetAddress', values.streetAddress);
                        formData.append('city', values.city);
                        formData.append('state', values.state);
                        formData.append('zip', values.zip);
                        formData.append('phone', values.phone);
                        formData.append('email', values.email);
                        formData.append('race', values.race);
                        formData.append("ethnicity", values.ethnicity);
                        formData.append('providerId', providerData._id);
			formData.append('isInvoiced', true);

                        const response = await axios.post("http://174.138.76.145/api/v1/manage/register-new-test-data", formData, {
                                headers: {
                                        'Content-Type': 'multipart/form-data',
                                },
                        });
                        if (response.status === 200) {
                                // setFormToken(response.data.code);
                                setRegId(response.data.regid);
                                setSubmitting(false);
				setWaitInvoice(false);
                                toast.success("Registration Successful");
                        }
		} catch (error) {
			console.log(error);
			setSubmitting(false);
			setWaitInvoice(false);
		}
	}



	return (
		<div className='w-[75%] col-span-3 py-[25px] px-[50px]' >
			<h1 className='text-[40px] text-center uppercase'>New order</h1>
			<h3 className='font-bold mt-[40px] text-[18px]'>ColoHealth is recommended for patients who meet the following
				guidelines.</h3>

			<ul className='list-decimal pl-[15px] mt-[20px] text-[18px]'>
				<li>Patients who are 50 Years or older</li>
				<li>Patients who have declined the recommended U.S. Preventive Services Task Force
					(USPSTF) colorectal cancer (CRC) screening methods such as fecal tests,
					sigmoidoscopy, and/or colonoscopy?</li>
				<li>
					Patients who <span className='font-bold'>do not have</span> close relatives (parent, sibling, child) who have been
					diagnosed with CRC, precancerous polyps or hereditary colorectal cancer
					syndromes such as familial adenomatous polyposis (FAP) or Lynch syndrome?
				</li>
				<li>
					Patients who <span className='font-bold'>do not have</span> a history of CRC, polyps, inflammatory bowel disease,
					or hereditary CRC syndromes?
				</li>
				<li>
					Patients who <span className='font-bold'>do not have</span> any of the following symptoms: A change in bowel
					habits including diarrhea, constipation, or narrowing of stool that persists over a
					couple of days. Constant changing in bowel habits – e.g., feeling like there is bowel
					movement that is not relieved by passing stool. Rectal bleeding with visible red blood.
					Blood in the stool, which can change the appearance of stool to look dark brown or
					black. Abdominal cramping or pain. Weakness and fatigue. Inexplicable weight loss.
				</li>
			</ul>

			<h3 className='font-bold mt-[40px] text-[18px]'>After placing this order, you will:</h3>

			<ul className='list-decimal pl-[15px] mt-[20px] text-[18px]'>
				<li>Download Print the requisition form provided.</li>
				<li>
					Have the Patient sign the requisition/consent form.
					<ol className=''>
						<li>You may also sign for your records. Completing this order qualifies as provider
							signature.</li>
					</ol>
				</li>
				<li>
					Collect a blood sample from the patient
				</li>
				<li>
					Mail the sample to:
					<p className='w-[250px] whitespace-normal mt-[30px]'>
						<a target='_blank' href="https://maps.app.goo.gl/w7TgGfCEPekidB8Z7">
						New Day Diagnostics<br />
						6701 Baum Drive, Suite 110<br />
						Knoxville, TN 37919
						</a>
					</p>
				</li>
			</ul>

			<h3 className='font-bold mt-[40px] text-[18px]'>Patient Information</h3>
			<div className='new-order-form-wr w-[70%] mt-[30px]'>
				<OrderForm formToken={formToken} regId={regId} submitTestOrderByProvider={submitTestOrderByProvider} recurringInvoiceOrder={recurringInvoiceOrder} />
			</div>

		</div>
	)
}

export default NewOrder
