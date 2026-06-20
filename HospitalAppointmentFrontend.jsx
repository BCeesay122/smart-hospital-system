export default function HospitalAppointmentFrontend() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Smart Hospital Queue System</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#appointment" className="hover:underline">Book Appointment</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Reduce Hospital Queues with Online Appointments
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Patients can book appointments online, receive queue numbers,
              and meet available doctors without waiting in long lines.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl shadow-md text-lg">
              Book Appointment
            </button>
          </div>

          <div className="bg-blue-100 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Quick Features</h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Online Appointment Booking</li>
              <li>✔ Automatic Queue Number</li>
              <li>✔ Doctor Availability Tracking</li>
              <li>✔ Appointment Notifications</li>
              <li>✔ Patient Dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Hospital Departments</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "General Medicine",
              "Pediatrics",
              "Dental Care",
              "Cardiology",
              "Eye Clinic",
              "Emergency Unit",
            ].map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3">{dept}</h3>
                <p className="text-gray-600">
                  Book appointments quickly with available specialists.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Book an Appointment
          </h2>

          <form className="grid gap-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 border rounded-xl"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border rounded-xl"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-4 border rounded-xl"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Department</label>
              <select className="w-full p-4 border rounded-xl">
                <option>General Medicine</option>
                <option>Pediatrics</option>
                <option>Dental Care</option>
                <option>Cardiology</option>
                <option>Eye Clinic</option>
                <option>Emergency Unit</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Appointment Date</label>
                <input
                  type="date"
                  className="w-full p-4 border rounded-xl"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Preferred Time</label>
                <input
                  type="time"
                  className="w-full p-4 border rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Describe Symptoms</label>
              <textarea
                rows="4"
                placeholder="Describe your symptoms"
                className="w-full p-4 border rounded-xl"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl text-lg font-semibold"
            >
              Submit Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Queue Preview */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Live Queue Preview</h2>

          <div className="bg-white rounded-3xl shadow-lg p-8 inline-block min-w-[300px]">
            <p className="text-lg text-gray-600 mb-2">Current Queue Number</p>
            <h3 className="text-6xl font-bold text-blue-700">12</h3>
            <p className="mt-4 text-gray-500">
              Estimated Waiting Time: 15 Minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Smart Hospital</h3>
            <p className="text-gray-400">
              Improving healthcare access through digital appointment and queue management.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: support@smarthospital.com</p>
            <p className="text-gray-400">Phone: +220 123 4567</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Working Hours</h4>
            <p className="text-gray-400">Monday - Friday</p>
            <p className="text-gray-400">8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
