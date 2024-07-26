import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";


const RequisitionFormPDF = ({patientData, providerData}) => (
	<Document>
		<Page style={styles.body}>
			<View style={{ display: "flex", flexDirection: "row", borderBottom: "5px solid #E48312" }}>
				<View >
					<Image
						style={styles.image}
						src="/requisition_pdf_logo.png"
					/>
				</View>
				<View style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
					<Text style={{ fontSize: "14px" }}>Accession Number</Text>
					<Text style={{ backgroundColor: "#e7e7e7", padding: "5px 10px", fontSize: "13px", fontWeight: "bold", marginTop: "5px", border: "1px solid" }}>NDD_____</Text>
				</View>
			</View>
			<View style={{ marginTop: "10px", border: "1px solid black" }}>
				<Text style={{ color: "white", backgroundColor: "#595959", padding: "5px", textTransform: "uppercase", textAlign: "center", fontSize: "11px" }}>Provider Information</Text>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "row", gap: "5px", paddingTop: "6px", paddingHorizontal: "5px", flexWrap: "wrap" }}>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>first Name</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.firstName}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 1 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>MI</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.mi}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>last Name</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.lastName}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>phone</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.phone}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 3 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>email</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.email}</Text>
						</View>
					</View>
				</View>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "row", gap: "5px", paddingTop: "6px", paddingHorizontal: "5px", flexWrap: "wrap" }}>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>address 1</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.address1}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>address 2</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.address2}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>city</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.city}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 1 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>state</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.state}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>zip</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.zip}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>LIS ID</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{providerData.lisProviderId}</Text>
						</View>


					</View>
				</View>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "row", gap: "5px", padding: "15px 5px 10px 5px", flexWrap: "wrap" }}>

						<View style={{ display: "flex", flexDirection: "row", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "9px", color: "#f43f5e", textTransform: "uppercase", fontWeight: "light", flex: 1 }}>Provider</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", borderBottom: "1px solid #f43f5e", flex: 2, textAlign: "center" }}>   </Text>
						</View>

						<View style={{ display: "flex", flexDirection: "row", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "9px", color: "#f43f5e", textTransform: "uppercase", fontWeight: "light", flex: 1 }}>Date Signed</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", borderBottom: "1px solid #f43f5e", flex: 2, textAlign: "center" }}>   </Text>
						</View>

					</View>
				</View>
			</View>

			<View style={{ marginTop: "30px", border: "1px solid black" }}>
				<Text style={{ color: "white", backgroundColor: "#595959", padding: "5px", textTransform: "uppercase", textAlign: "center", fontSize: "11px" }}>Patient Information</Text>
				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "row", gap: "5px", paddingTop: "6px", paddingHorizontal: "5px", flexWrap: "wrap" }}>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 3 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>first Name</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ?  patientData.firstName : ""}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 3 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>last Name</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.lastName : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>DOB</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.dob : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>Address</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.streetAddress : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>city</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.city : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 1 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>state</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.state : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>zip</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.zip : " "}</Text>
						</View>

					</View>
				</View>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "row", gap: "5px", padding: "6px 10px", paddingHorizontal: "5px", flexWrap: "wrap" }}>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>email</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.email : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 2 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>phone</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.phone : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 1 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>gender</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.gender : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 3 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>race</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.race : " "}</Text>
						</View>

						<View style={{ backgroundColor: "white", border: "1px solid black", display: "flex", flexDirection: "column", padding: "2px 5px", flex: 4 }}>
							<Text style={{ fontSize: "6px", textTransform: "uppercase", fontWeight: "light" }}>ethnicity</Text>
							<Text style={{ fontSize: "9px", color: "#2271b1", marginTop: "3px" }}>{patientData ? patientData.ethnicity : " "}</Text>
						</View>


					</View>
				</View>
			</View>

			<View style={{ marginTop: "10px", border: "1px solid black" }}>
				<Text style={{ color: "white", backgroundColor: "#595959", padding: "5px", textTransform: "uppercase", textAlign: "center", fontSize: "11px" }}>Informed Consent</Text>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "column", gap: "5px", paddingTop: "6px", paddingHorizontal: "5px", flexWrap: "wrap" }}>
						<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px" }}>
							Consenting to this test requires that you understand the following: You indemnify the ordering physician and the testing laboratory, you agree to the reporting of results to the client listed above and to your email address, you agree to followup with your own physician with your results, and you agree that we may use your sample and the following information for research purposes. Providing this extra information will provide significant information for the development of effective diagnostics
						</Text>
						<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px" }}>
							Please sign below if you agree and consent:
						</Text>
					</View>
				</View>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#FFE699", display: "flex", flex: 1, flexDirection: "row", gap: "5px", padding: "6px 10px", paddingHorizontal: "5px", flexWrap: "wrap", borderTop: "1px solid black" }}>
						<Text style={{ fontSize: "10px", width: "48%" }}>Patient Signature: </Text>
						<Text style={{ fontSize: "10px", width: "48%" }}>Date Signed: </Text>
						<View style={{ height: "6px", width: "100%" }}></View>
					</View>
				</View>
			</View>

			<View style={{ marginTop: "20px", border: "1px solid black" }}>
				<Text style={{ color: "white", backgroundColor: "#595959", padding: "5px", textTransform: "uppercase", textAlign: "center", fontSize: "11px" }}>For lab use only</Text>

				<View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", }}>
					<View style={{ backgroundColor: "#F2F2F2", display: "flex", flex: 1, flexDirection: "row", gap: "5px", paddingTop: "6px", paddingHorizontal: "5px", position: "relative" }}>

						<View style={{ display: "flex", alignItems: "flex-start", flexDirection: "row", gap: "10px", width: "70%", paddingLeft: "5px" }}>
							<View style={{ width: "100%" }}>
								<View style={{display:"flex", alignItems:'center', gap:"10px", flexDirection:"row", justifyContent:"space-between"}}>
									<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px", }}>
										1. Blood Tube Spin (Disable Break)
									</Text>
									<View style={{display:"flex", alignItems:'center', gap:"10px", flexDirection:"row", justifyContent:"space-between"}}>
										<View style={{ backgroundColor: "white", border: "1px solid black", padding: "7px", width: "20px", marginTop: "6px" }}></View>
										<View style={{ backgroundColor: "white", border: "1px solid black", padding: "7px", width: "120px", marginTop: "6px" }}></View>
									</View>
								</View>

								<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px", }}>
									2. Aiquiot Plasma in 15mL Tube
								</Text>
								<View style={{display:"flex", alignItems:'center', gap:"30px", flexDirection:"row", justifyContent:"flex-start"}}>
									<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px", }}>
										3. 15mL Tube Spin
									</Text>
									<View style={{display:"flex", alignItems:'center', gap:"10px", flexDirection:"row", justifyContent:"space-between"}}>
										<View style={{ backgroundColor: "white", border: "1px solid black", padding: "7px", width: "20px", marginTop: "6px" }}></View>
										<View style={{ backgroundColor: "white", border: "1px solid black", padding: "7px", width: "120px", marginTop: "6px" }}></View>
									</View>
								</View>
								<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px", }}>
									4. Aiquiot at least 3.5mL in 15mL Tube
								</Text>
								<Text style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(0,0,0,0.85)", marginVertical: "10px", }}>
									5. Refrigerate samples until couriered on ice packs OR recommended cooling samples at least 2 hours before shipping on ice packs
								</Text>
							</View>
						</View>

						<View style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", width: "30%", position: "absolute", top: "2px", right: "10px" }}>
							<Text style={{ fontSize: "9px", textTransform: "capitalize", color: "rgba(0,0,0,0.85)", margin: "3px 0px" }}>
								Collected Date/Time
							</Text>
							<View style={{ display: "flex", alignItems: "center", gap: "5px", flexDirection: "row" }}>
								<View style={{ backgroundColor: "white", border: "1px solid black", width: "50px", padding: "7px" }}></View>
								<View style={{ backgroundColor: "white", border: "1px solid black", width: "50px", padding: "7px" }}></View>
							</View>
						</View>

					</View>
				</View>
			</View>
			
			<View style={{ marginTop: "10px", backgroundColor:"#FBC717", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"10px" }}>
				<Text style={{fontSize:"8px", textAlign:"center"}}>New Day Diagnostics</Text>
				<Text style={{fontSize:"8px", textAlign:"center"}}>6701 Baum Drive Suite 110 Knoxville, TN 37919</Text>
				<Text style={{fontSize:"8px", textAlign:"center"}}>Toll Free (844) EDP-3938 | www.NewDayDiagnostics.com | info@NewDayDiagnostics.com</Text>
				<Text style={{fontSize:"8px", textAlign:"center"}}>Medical Laboratory Director: Dr. Melissa Chiles, MD (TN LIC# 0000039233)</Text>
				<Text style={{fontSize:"8px", textAlign:"center"}}>New Day Diagnostics is a CLIA Approved (CLIA# 44D2184836) Testing Laboratory and ISO 13845:2016 R&D and Medical Device Facility </Text>
			</View>
		</Page>
	</Document>
);

Font.register({
	family: 'Oswald',
	src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
	body: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingHorizontal: 35,
	},
	pdfHead: {
		display: "flex",
		alignItems: "center"
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		fontFamily: 'Oswald'
	},
	author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: 'Oswald'
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman'
	},
	image: {
		width: "150px",
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey',
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
});


export default RequisitionFormPDF;
