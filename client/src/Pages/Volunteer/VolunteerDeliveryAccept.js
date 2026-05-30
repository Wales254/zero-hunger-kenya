import { useEffect, useState } from 'react';
import axios from 'axios';

function VolunteerDeliveryAccept () {


//Get All Delivery Requests from DB and Display them
    //#1 - Create a function to fetch Delivery Requests
    //#2 - Set the DeliveryRequests into a State
    //#3 - Create a UseEffect to Update Page everytime Refreshed
    //#4 - Create the Container for Delivery Request


//States to Store Data
const [deliveryRequests, setDeliveryRequests] = useState(null);
const[deliveryAccept,setDeliveryAccept] = useState({
_id:null,
orgId:"",
orgName:"",
requestTitle:"",
population:"",
dueDate:"",
orgOtherDetails:"",
orgLocation:"",
orgTelephone:"",
donorId:"",
donorName:"",
donationSize:"",
deliveryMethod:"",
donorTelephone:"",
donorOtherDetails:"",
donorLocation:"",
volunteerId:"",
volunteerName:"",
NIC:"",
vehicleNo:"",
volunteerTelephoneNo:""
}
);

//useEffect
useEffect(() => {
    fetchDeliveryRequests();
}, []);

useEffect(() => {
  console.log(deliveryAccept);
}, [deliveryAccept]);

 //Function to Fetch Delivery Requests
const fetchDeliveryRequests = async () =>{
  
    //Fetch Delivery Requests
    const response = await axios.get("http://localhost:4000/donor/volunteer-delivery");

    //Set to State
    setDeliveryRequests(response.data);
  };

//Toggle Accept Delivery
const toggleAcceptDelivery = (deliveryRequest) =>{

  setDeliveryAccept({
    _id:deliveryRequest._id,
    orgId:deliveryRequest.orgId,
    orgName:deliveryRequest.orgName,
    requestTitle:deliveryRequest.requestTitle,
    population:deliveryRequest.population,
    dueDate:deliveryRequest.dueDate,
    orgOtherDetails:deliveryRequest.orgOtherDetails,
    orgLocation:deliveryRequest.orgLocation,
    orgTelephone:deliveryRequest.orgTelephone,
    donorId:deliveryRequest.donorId,
    donorName:deliveryRequest.donorName,
    donationSize:deliveryRequest.donationSize,
    deliveryMethod:deliveryRequest.deliveryMethod,
    donorTelephone:deliveryRequest.donorTelephone,
    donorOtherDetails:deliveryRequest.donorOtherDetails,
    donorLocation:deliveryRequest.donorLocation,
    volunteerId:"",
    volunteerName:"",
    NIC:"",
    vehicleNo:"",
    volunteerTelephoneNo:""
    })

    console.log(deliveryAccept);
}

//Handle Update Field Change
const handleAddFieldChange = (e) =>{
  const {value,name} = e.target

  setDeliveryAccept({
    ...deliveryAccept,
    [name]:value,
  })
  console.log(deliveryAccept);
}

// Create Delivery Job
const createDeliveryJob = async (e) => {
  e.preventDefault();

  //fetch delivery job details
  const deliveryJobDetails = {
    orgId:deliveryAccept.orgId,
    orgName:deliveryAccept.orgName,
    requestTitle:deliveryAccept.requestTitle,
    population:deliveryAccept.population,
    dueDate:deliveryAccept.dueDate,
    orgOtherDetails:deliveryAccept.orgOtherDetails,
    orgLocation:deliveryAccept.orgLocation,
    orgTelephone:deliveryAccept.orgTelephone,
    donorId:deliveryAccept.donorId,
    donorName:deliveryAccept.donorName,
    donationSize:deliveryAccept.donationSize,
    deliveryMethod:deliveryAccept.deliveryMethod,
    donorTelephone:deliveryAccept.donorTelephone,
    donorOtherDetails:deliveryAccept.donorOtherDetails,
    donorLocation:deliveryAccept.donorLocation,
    volunteerId:"sampleVolunteerID",
    volunteerName:deliveryAccept.volunteerName,
    NIC:deliveryAccept.NIC,
    vehicleNo:deliveryAccept.vehicleNo,
    volunteerTelephoneNo:deliveryAccept.volunteerTelephoneNo
  };

  //Send the create request
  const response = await axios.post("http://localhost:4000/volunteer/delivery-jobs",deliveryJobDetails);
  console.log(response); 

  //Delete Related Donor Record
  const deleteResponse = await axios.delete(`http://localhost:4000/donor/${deliveryAccept._id}`);
  
  if(deleteResponse){
  
    console.log(deleteResponse);
    alert("Volunteer Job Created");

  //Refresh Delivery Requests List

  fetchDeliveryRequests();

  //Clear Details From State
  setDeliveryAccept({
    _id:null,
    orgId:"",
    orgName:"",
    requestTitle:"",
    population:"",
    dueDate:"",
    orgOtherDetails:"",
    orgLocation:"",
    orgTelephone:"",
    donorId:"",
    donorName:"",
    donationSize:"",
    deliveryMethod:"",
    donorTelephone:"",
    donorOtherDetails:"",
    donorLocation:"",
    volunteerId:"",
    volunteerName:"",
    NIC:"",
    vehicleNo:"",
    volunteerTelephoneNo:""
    }
    );
  }

}

  return (
  <div className="volunteer-dashboard">

    {/* Sidebar (reuse same style system) */}
    <aside className="volunteer-sidebar">
      <div className="volunteer-logo">Food Pals</div>

      <nav className="volunteer-menu">
        <a href="/volunteer-home">Dashboard</a>
        <a href="/volunteer-delivery-accept">Deliveries</a>
        <a href="/volunteer-mgmt">Profile</a>
      </nav>
    </aside>

    {/* Main content */}
    <main className="volunteer-main">

      {/* Top bar */}
      <div className="volunteer-topbar">
        <h1>Available Deliveries</h1>
        <div className="volunteer-user">Accept & Manage Jobs</div>
      </div>

      {/* Layout split: list + form */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>

        {/* LEFT: Delivery list */}
        <div className="volunteer-grid">

          {deliveryRequests && deliveryRequests.map(deliveryRequest => (
            <div className="volunteer-card" key={deliveryRequest._id}>

              <h3>{deliveryRequest.requestTitle}</h3>

              <p><strong>Org:</strong> {deliveryRequest.orgName}</p>
              <p><strong>Phone:</strong> {deliveryRequest.orgTelephone}</p>
              <p><strong>Location:</strong> {deliveryRequest.orgLocation}</p>
              <p><strong>Due:</strong> {deliveryRequest.dueDate}</p>

              <p><strong>Donor:</strong> {deliveryRequest.donorName}</p>
              <p><strong>Donation:</strong> {deliveryRequest.donationSize}</p>

              <div className="volunteer-actions">
                <button
                  className="volunteer-btn accept"
                  onClick={() => toggleAcceptDelivery(deliveryRequest)}
                >
                  Accept
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT: FORM */}
        <form className="volunteer-card" onSubmit={createDeliveryJob}>

          <h3>Accept Delivery</h3>
          <p style={{ color: "#94a3b8" }}>
            {deliveryAccept.requestTitle}
          </p>

          <label>Volunteer Name</label>
          <input
            type="text"
            name="volunteerName"
            onChange={handleAddFieldChange}
            value={deliveryAccept.volunteerName}
            required
          />

          <label>NIC</label>
          <input
            type="text"
            name="NIC"
            onChange={handleAddFieldChange}
            value={deliveryAccept.NIC}
            required
          />

          <label>Vehicle No</label>
          <input
            type="text"
            name="vehicleNo"
            onChange={handleAddFieldChange}
            value={deliveryAccept.vehicleNo}
            required
          />

          <label>Telephone</label>
          <input
            type="number"
            name="volunteerTelephoneNo"
            onChange={handleAddFieldChange}
            value={deliveryAccept.volunteerTelephoneNo}
            required
          />

          <button className="volunteer-btn accept" style={{ width: "100%" }}>
            Confirm Delivery
          </button>

        </form>

      </div>

    </main>
  </div>
);

}

export default VolunteerDeliveryAccept;