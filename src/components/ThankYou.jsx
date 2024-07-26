import React, { useEffect, useState } from 'react'
import ReactGA from "react-ga"
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import axios from 'axios';

function ThankYou() {

	const [regId, setRegId] = useState('');
	const [pv, setpv] = useState('');

	const [appointmentData, setAppointmentData] = useState({
		dateTime: '',
		venue: '',
		address: '',
	});

	function handleAddToCalendar() {
		// link will be generated here
		// window.location.open in a new tab
		console.log("Adding to your calendar");
	}

	async function verifyPayment(){
		try {
			const response = await axios.post("http://174.138.76.145/api/v1/manage/verify-payment", {
				regId,
				pv
			});
			if(response.status === 200){
				setAppointmentData(prev => ({...prev, dateTime:response.data.data.scheduledAt}));
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		// Track this specific page view
		ReactGA.pageview('/thank-you');
	}, []);

	useEffect(()=>{
		const searchParams = new URLSearchParams(location.search);
		const regTemp = searchParams.get('regid');
		if(regTemp){
			const pvTemp = regTemp.split('__pv__')[1];
			if(pvTemp) setpv(pvTemp);
			setRegId(regTemp.split('__pv__')[0]);
		}
	},[location.search]);

	useEffect(()=>{
		if(pv && regId){
			verifyPayment();
		}
	},[pv, regId])


	// https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240702T141500Z%2F20240702T141500Z&details=Greeting%20from%20New%20Day%20Diagnostics%21%20Your%20blood%20draw%20is%20scheduled%20for%20this%20date.&location=&text=ColoHealth%20Blood%20Draw
	return (
		<>
			<Navbar />
			<section className='py-[55px]'>
				<div className='center-wr flex flex-col items-center'>
					<h1 className='text-[40px] text-center uppercase '>Thank You <br />For Your Order</h1>
					<div className='w-[75%] flex flex-col items-center justify-start'>
						<p className='font-medium text-[18px] mt-[40px] text-center'>Remember to write down your appointment time!</p>
						<p className='font-bold text-[18px] mt-[20px] text-center'>{appointmentData.dateTime} </p>
						<p className=' text-[18px] text-center'> at <br /> <a target='_blank' href="https://maps.app.goo.gl/w7TgGfCEPekidB8Z7">New Day Diagnostics <br /> <span className='whitespace-normal inline-block w-[200px]'>
							6701 Baum Drive, Suite 110 Knoxville, TN 37919</span></a> </p>
						<button onClick={handleAddToCalendar} className='common-btn capitalize px-[30px] mt-[30px] py-[12.5px] font-semibold border-[1px] border-black bg-[#DEA52B]'>
							Add To My Calendar
						</button>
						<p className='text-[18px] text-center mt-[30px]'>
							If you have any questions or need to<br />
							change your appointment, contact us at<br />
							<span className='font-semibold'><a href="tel:865-299-6250">865-299-6250</a></span>
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ThankYou
