import React from 'react'

function Footer() {
	return (
		<footer>
			<div className='center-wr'>
				<span><a className='text-orange-600 text-[14px] font-medium' href="">Return Policy</a> | <a className='text-orange-600 text-[14px] font-medium' href="">Shipping Policy</a></span>
			</div>
			<div className='bg-[#FAC838] overflow-hidden relative z-0'>
				<div id='footer-pattern' className='absolute top-[-263px] left-[-190px] w-[30%] h-[601px]'></div>
				<div className='center-wr'>

					<div className=' pt-[55px] pb-[50px] footer-inner-container'>
						<div className='footer-inner-child-container'>

						<div className=' col-span-1 flex flex-col '>
							<h4 className='font-semibold text-[16px] text-amber-800'>Legal</h4>
							<ul className='list-none gap-y-[5px] mt-[10px]'>
								<li><a href="" className='font-semibold'>Privacy</a></li>
								<li><a href="" className='font-semibold'>Return Policy</a></li>
								<li><a href="" className='font-semibold'>Shipping Policy</a></li>
							</ul>
						</div>
						<div className=' col-span-1 flex flex-col items-center justify-start'>
							<h4 className='text-center pt-[35px] for-footer-res'><a href="tel:865-299-6250" className='font-semibold '>865-299-6250</a></h4>
							<h4 className='text-center for-footer-res-two'><a href="mailto:info@newdaydiagnostics.com" className='font-semibold '>info@newdaydiagnostics.com</a></h4>
						</div>
						

						</div>
						<div className='footer-inner-child-container'>

						<div className='footer-other-logo-container col-span-1 flex flex-col items-center justify-start'>
							<figure>
								<img src="/footer-logo-2.png" className='mt-[0px]' width={150} alt="" />
							</figure>
							<figure>
								<img src="/footer-logo-1.png" className='mt-[-40px]' width={200} alt="" />
							</figure>
							
						</div>
						<div className='knoxville-logo-wr  col-span-1 flex flex-col items-center justify-start'>
						<figure>
								<img src="/mainlogo.svg" width={240} className='mt-[45px]' alt="" />
							</figure>
						</div>
						
						</div>
					
					</div>
				</div>
			</div>

			<div className='bg-[#2A3B42]'>
				<div className='center-wr'>
					<div className=' py-[25px] text-slate-100 text-[14px] flex flex-col gap-[10px]'>
						<p>
							{
								`Copyright ${new Date().getFullYear()}. All Rights Reserved.`
							}
						</p>
						<p>
							Website usage is subject to <a className='underline font-semibold' href="#">New Day Diagnostics / EDP Biotech's WebSite Usage</a> and <a className='underline font-semibold' href="">Privacy Policy</a>. Copyright {new Date().getFullYear()} New Day Diagnostics, All Rights Reserved. All other copyrights are owned by their respective owners.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer