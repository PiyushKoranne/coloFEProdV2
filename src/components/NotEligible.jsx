import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'

function NotEligible() {
	return (
		<>
			<Navbar />
			<section className='py-[125px] not-eligible-page'>
				<div className='center-wr flex flex-col items-center'>
					<figure onClick={()=>navigate("/")} className='cursor-pointer'>
						<img src="/logo-updated.png" width={240} alt="" />
					</figure>
					<h1 className='text-[40px] font-semibold text-center'>We are sorry, you do not qualify at this time.</h1>
					<div className='w-[75%]'>
					<p className='font-medium text-[18px] mt-[40px] text-center'>Based on your results you do not qualify for the ColoHealth Test Kit at this time.</p>
					<p className='font-medium text-[18px] mt-[40px] text-center'>If you have concerns about Colorectal Cancer, please contact your doctor to discuss.</p>
					<p className='font-medium text-[18px] mt-[80px] text-center'>
					Physician ordering of this test will become available this summer. Please share information about
					</p>
					<p className='font-medium text-[18px] text-center'>ColoHealth with your doctor and check back this summer for a physician ordering option.</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default NotEligible