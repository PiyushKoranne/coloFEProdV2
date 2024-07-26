import React, { useEffect, useRef, useState } from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import EditAccount from './EditAccount'
import NewOrder from './NewOrder'
import { Pagination } from 'antd'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'
import RequisitionFormPDF from './RequisitionFormPDF'
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';


const styles = StyleSheet.create({
	viewer: {
		width: "100%", //the pdf viewer will take up all of the width and height
		height: "800px"
	},
});

const defaultColumns = [
	{
		key: 'order_number',
		label: 'Order Number',
		fixed: true,
		width: 150
	},
	{
		key: 'firstName',
		label: 'First Name',
		fixed: false,
	},
	{
		key: 'lastName',
		label: 'Last Name',
	},

	{
		key: 'dob',
		label: 'DOB',
		width: 200
	},
	{
		key: 'requisition',
		label: 'Requisition',
		flexGrow: 1
	}
];

const ProviderPage = () => {
	const navigate = useNavigate();
	const [tabber, setTabber] = useState('NEW_ORDER');
	const [patients, setPatients] = useState([]);
	const patientsListRef = useRef([]);
	const [search, setSearch] = useState("")

	const providerData = JSON.parse(localStorage.getItem("colo_H_providerData"));

	async function getPatientList() {
		try {
			const providerId = JSON.parse(localStorage.getItem("colo_H_providerData"))._id;
			if (!providerId) return;
			const response = await axios.post("http://174.138.76.145/api/v1/manage/get-orders-for-provider", {
				providerId,
			});
			if (response.status === 200) {
				setPatients(response.data.orders);
				patientsListRef.current = response.data.orders;
			}
		} catch (error) {
			console.log(error);
		}
	}

	console.log("PATIENTS", patients);

	function changePage(pageNum, pageSize) {
		try {
			console.log(pageNum, pageSize);
			setPatients(patientsListRef.current.slice(pageNum*pageSize, pageNum*pageSize + pageSize));
		} catch (error) {
			console.log(error);
		}
	}

	function handleSearchPatients() {
		let temp = patientsListRef.current.slice();
		if(!search) return setPatients(temp);
		let final = [];
		if (/^[A-Za-z]+$/.test(search)) {
			console.log("The string contains only letters.");
			final = [...final, ...temp.filter(item=> (item.firstName+" "+item.lastName).includes(search) )]
		} else if (/^[A-Za-z0-9]+$/.test(search)) {
			console.log("The string contains letters and numbers.");
			final = [...final, ...temp.filter(item => (item.orderId).includes(search))];
		} else if (/^\d+[-/]\d+[-/]\d+$/.test(search)) {
			console.log("The string contains numbers and special characters (like a date).");
			final = [...final, ...temp.filter(item => (item.dob).includes(search))]
		} else {
			console.log("The string doesn't match any of the specified conditions.");
		}
		setPatients(final);
	}

	const handleReset = () => {
    setSearch("");
    setPatients(patientsListRef.current);
  };

	async function handlePasswordChange(values) {
		try {
			const response = await axios.post("http://174.138.76.145/api/v1/manage/password-reset", { ...values, accessToken: localStorage.getItem('colo_H_accessToken') });
			if (response.status === 200) {
				toast.success("Password reset successfully!")
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function recDownload(orderId) {
		try {
			console.log("ORDER ID", orderId);
			const providerId = JSON.parse(localStorage.getItem("colo_H_providerData"))._id;
			if (!providerId) return;
			const response = await axios.get(`http://174.138.76.145/api/v1/manage/download-rec-rpt?pid=${providerId}&oid=${orderId._id}`, {
        responseType: 'blob',
      });
			const contentDisposition = response.headers['content-disposition'];
      let filename = 'rec_form.pdf'; // Default filename
      if (contentDisposition) {
				const match = contentDisposition.match(/filename="?([^"]+)"?/);
        if (match) {
					filename = match[1];
        }
      }
			const blob = new Blob([response.data], { type: 'application/pdf' });
			saveAs(blob,'rec_form.pdf');

		} catch (error) {
			console.log(error);
		}
	}

	 useEffect(()=>{
                if(!localStorage.getItem('colo_H_accessToken') || !localStorage.getItem('colo_H_providerData')){
                        navigate("/provider-login");
                }
        },[])

	useEffect(() => {
		getPatientList();
	}, [])

	return (
		<>
			<Toaster position='bottom-center' />
			<Navbar />
			<section className=''>
				<div className='center-wr'>
					<div className='border-b-[4px] border-b-[#DEA52B] py-[50px] flex flex-col items-center justify-center'>
						<figure onClick={()=>navigate("/") } className='cursor-pointer'>
							<img src="/logo-updated.png" width={200} alt="" />
						</figure>
						<h1 className='text-[40px] text-center'>Provider Portal</h1>
					</div>
					<div className='flex provider-portal-content-wr'>
						{
							tabber === "NEW_ORDER" ? (
								<NewOrder />
							) : tabber === "VIEW_PATIENTS" ? (
								<div className='w-[75%] col-span-3 py-[25px] px-[50px]' >
									<h1 className='text-[40px] text-center uppercase'>View Patient orders</h1>
									<p className='mt-[40px] text-[18px]'>Search Patients by entering name, DOB or Order Number</p>
									<div className='search-bar-wr-container flex items-center gap-[10px] mt-[20px] mb-[30px]'>
										<div className='search-bar-wr bg-[#E6E7E8] relative border-[1px] border-[#000] px-[30px] py-[12.5px] w-[50%] '>
											<input type="text" onChange={(e)=>{if(e.target.value === ""){ setPatients(patientsListRef.current)} setSearch(e.target.value)}} name='search' placeholder='Search' className='w-full inline-block outline-none  border-none bg-transparent' />
										</div>
										<button onClick={handleSearchPatients} className='w-[150px] px-[30px] py-[13.6px] text-[18px] hover:bg-black hover:text-white transition-all duration-300 bg-[#DEA52B] capitalize' >Search</button>
										<button onClick={handleReset}  className='w-[150px] px-[30px] py-[13.6px] text-[18px] hover:bg-black hover:text-white transition-all duration-300 bg-[#DEA52B] capitalize'>Reset</button></div>

										<div className='patient-orders-table'>

									<table className='provider-client-table border-[1px] border-slate-800 w-full'>
										<thead>
											<th>Order Number</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>DOB</th>
											<th>Requisition</th>
										</thead>
										<tbody>

											{patients.length > 0 ? patients.map(item => (<tr>
												<td>{item.orderId}</td>
												<td>{item.firstName}</td>
												<td>{item.lastName}</td>
												<td>{item.dob}</td>
												<td><a href="#" onClick={(e) => {e.preventDefault();  recDownload(item) }} className='text-sky-600 underline'>download</a></td>
											</tr>)) : (
												<tr>
													<td colSpan={5} className='text-center'>No Testing Orders Placed Yet</td>
												</tr>
											)}
										</tbody>
									</table>
											</div>
									<div className='mt-[20px] flex items-center justify-end'>
										<Pagination onChange={(pageNum, pageSize)=>{changePage(pageNum, pageSize)}} defaultCurrent={1} total={patients.length} pageSize={10} />
									</div>
								</div>
							) : tabber === "EDIT_ACCOUNT" ? (
								<EditAccount handlePasswordChange={handlePasswordChange} />
							) : (
								<div className='w-[75%] col-span-3 py-[25px] px-[50px] pb-[50px]' >
									<PDFViewer style={styles.viewer}>
										<RequisitionFormPDF providerData={providerData} patientData={null} />
									</PDFViewer>
								</div>
							)
						}
						<div className='provider-portal-sidebar-btn-wr w-[30%] col-span-1 flex flex-col items-center justify-start border-l-[4px] border-l-[#DEA52B] py-[25px] px-[30px]' >
							<button className='px-[30px] w-full mt-[30px] py-[14.5px] text-[18px] hover:bg-black hover:text-white transition-all duration-300 bg-[#DEA52B] capitalize' onClick={() => { setTabber('NEW_ORDER') }}>Order new test</button>
							<button className='px-[30px] w-full mt-[30px] py-[14.5px] text-[18px] hover:bg-black hover:text-white transition-all duration-300 bg-[#DEA52B] capitalize' onClick={() => { setTabber('VIEW_PATIENTS') }}>View patients</button>
							<button className='px-[30px] w-full mt-[30px] py-[14.5px] text-[18px] hover:bg-black hover:text-white transition-all duration-300 bg-[#DEA52B] capitalize' onClick={() => { setTabber('PRINT_FORM') }}>print blank requisition</button>
							<button className='px-[30px] w-full mt-[30px] py-[14.5px] text-[18px] hover:bg-black hover:text-white transition-all duration-300 bg-[#DEA52B] capitalize' onClick={() => { setTabber('EDIT_ACCOUNT') }}>edit account details</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ProviderPage;
