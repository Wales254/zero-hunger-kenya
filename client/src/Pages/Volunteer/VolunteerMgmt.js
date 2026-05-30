import { useEffect, useState } from 'react';
import axios from 'axios';

function VolunteerMgmt () {

// States to Store Data
const [volunteerJobs,setVolunteerJobs] = useState(null);
const [updateDelivery,setUpdateDelivery] = useState(
  {
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

const volunteerId = "sampleVolunteerID";


//UseEffect
useEffect(() =>{
    fetchVolunteerJobs();
},[]);

useEffect(() => {
  console.log(updateDelivery);
}, [updateDelivery]);

// Function to fetch Delivery Jobs of a Single Volunteer
const fetchVolunteerJobs = async () => {

    //Fetch Delivery Requests
    const response = await axios.get(`http://localhost:4000/volunteer/delivery-jobs/user-jobs/${volunteerId}`);

    //Set to State
    setVolunteerJobs(response.data);
}

//Toggle Decline Delivery
const toggleDeclineDelivery =  async (volunteerJob) =>{

  const deleteId = volunteerJob._id;
  
  //Delete Related Donor Record
  const deleteResponse = await axios.delete(`http://localhost:4000/volunteer/delivery-jobs/${deleteId}`);
  console.log(deleteResponse);

  if (deleteResponse){

      const repostDonation = {
          orgId:volunteerJob.orgId,
          orgName:volunteerJob.orgName,
          requestTitle:volunteerJob.requestTitle,
          population:volunteerJob.population,
          dueDate:volunteerJob.dueDate,
          orgOtherDetails:volunteerJob.orgOtherDetails,
          orgLocation:volunteerJob.orgLocation,
          orgTelephone:volunteerJob.orgTelephone,
          donorId:volunteerJob.donorId,
          donorName:volunteerJob.donorName,
          donationSize:volunteerJob.donationSize,
          deliveryMethod:volunteerJob.deliveryMethod,
          donorTelephone:volunteerJob.donorTelephone,
          donorOtherDetails:volunteerJob.donorOtherDetails,
          donorLocation:volunteerJob.donorLocation
  }

  //Send the create request
  const response = await axios.post("http://localhost:4000/donor",repostDonation);
  
  if(response){
  console.log(response);
  alert("Volunteer Job Deleted");
  //Update the Delivery Jobs List
  fetchVolunteerJobs();
  }
    }
  
  
  
};

//Toggle Edit Delivery
const toggleUpdateDelivery = (volunteerJob) =>{

  setUpdateDelivery({
    _id:volunteerJob._id,
    orgId:volunteerJob.orgId,
    orgName:volunteerJob.orgName,
    requestTitle:volunteerJob.requestTitle,
    population:volunteerJob.population,
    dueDate:volunteerJob.dueDate,
    orgOtherDetails:volunteerJob.orgOtherDetails,
    orgLocation:volunteerJob.orgLocation,
    orgTelephone:volunteerJob.orgTelephone,
    donorId:volunteerJob.donorId,
    donorName:volunteerJob.donorName,
    donationSize:volunteerJob.donationSize,
    deliveryMethod:volunteerJob.deliveryMethod,
    donorTelephone:volunteerJob.donorTelephone,
    donorOtherDetails:volunteerJob.donorOtherDetails,
    donorLocation:volunteerJob.donorLocation,
    volunteerId:volunteerJob.volunteerId,
    volunteerName:volunteerJob.volunteerName,
    NIC:volunteerJob.NIC,
    vehicleNo:volunteerJob.vehicleNo,
    volunteerTelephoneNo:volunteerJob.volunteerTelephoneNo
  })
};

//Handle Update Field Change
const handleUpdateFieldChange = (e) =>{
  const {value,name} = e.target

  setUpdateDelivery({
    ...updateDelivery,
    [name]:value,
  })
  console.log(updateDelivery);

};

// Update Delivery
const updateDeliveryJob = async (e) => {
  e.preventDefault();

  const deliveryJobUpdateDetails = {
    orgId:updateDelivery.orgId,
    orgName:updateDelivery.orgName,
    requestTitle:updateDelivery.requestTitle,
    population:updateDelivery.population,
    dueDate:updateDelivery.dueDate,
    orgOtherDetails:updateDelivery.orgOtherDetails,
    orgLocation:updateDelivery.orgLocation,
    orgTelephone:updateDelivery.orgTelephone,
    donorId:updateDelivery.donorId,
    donorName:updateDelivery.donorName,
    donationSize:updateDelivery.donationSize,
    deliveryMethod:updateDelivery.deliveryMethod,
    donorTelephone:updateDelivery.donorTelephone,
    donorOtherDetails:updateDelivery.donorOtherDetails,
    donorLocation:updateDelivery.donorLocation,
    volunteerId:updateDelivery.volunteerId,
    volunteerName:updateDelivery.volunteerName,
    NIC:updateDelivery.NIC,
    vehicleNo:updateDelivery.vehicleNo,
    volunteerTelephoneNo:updateDelivery.volunteerTelephoneNo};

    //Send the update request
    const response = await axios.patch(`http://localhost:4000/volunteer/delivery-jobs/${updateDelivery._id}`,deliveryJobUpdateDetails)
   
   
   if(response){
    console.log(response);
    alert("Volunteer Details Updated")

    //Update the Delivery Jobs List
    fetchVolunteerJobs();

    //Update the updateDelivery State
    setUpdateDelivery({
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
    });

  }
};

return (
  <div className="volunteer-mgmt">

    <h2>Volunteer Job Management</h2>

    <div className="vm-container">

      {/* LEFT SIDE - JOBS */}
      <div className="vm-jobs">

        {volunteerJobs && volunteerJobs.map(volunteerJob => (
          <div className="vm-card" key={volunteerJob._id}>

            <h4>{volunteerJob.requestTitle}</h4>

            <p><strong>Org:</strong> {volunteerJob.orgName}</p>
            <p><strong>Phone:</strong> {volunteerJob.orgTelephone}</p>
            <p><strong>Location:</strong> {volunteerJob.orgLocation}</p>

            <p><strong>Donor:</strong> {volunteerJob.donorName}</p>

            <div>
              <button onClick={() => toggleDeclineDelivery(volunteerJob)}>
                Decline
              </button>

              <button onClick={() => toggleUpdateDelivery(volunteerJob)}>
                Edit
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* RIGHT SIDE - FORM */}
      <form className="vm-form" onSubmit={updateDeliveryJob}>

        <h3>Edit Delivery Job</h3>

        <input
          type="text"
          name="volunteerName"
          placeholder="Volunteer Name"
          value={updateDelivery.volunteerName}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="text"
          name="NIC"
          placeholder="NIC"
          value={updateDelivery.NIC}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="text"
          name="vehicleNo"
          placeholder="Vehicle No"
          value={updateDelivery.vehicleNo}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="number"
          name="volunteerTelephoneNo"
          placeholder="Phone"
          value={updateDelivery.volunteerTelephoneNo}
          onChange={handleUpdateFieldChange}
        />

        <button type="submit">Update Job</button>

      </form>

    </div>

  </div>
);


}

export default VolunteerMgmt;