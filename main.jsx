export default function HospitalAppointmentFrontend() {
  return (
    <div style={{padding:"20px",fontFamily:"Arial"}}>
      <h1>Smart Hospital Queue System</h1>
      <p>Reduce Hospital Queues with Online Appointments</p>
      <form>
        <input placeholder="Full Name" /><br/><br/>
        <input placeholder="Email Address" /><br/><br/>
        <input placeholder="Phone Number" /><br/><br/>
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
}
