'use client';
import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    serviceName: 'CCTV Installation Survey',
    date: '',
    timeSlot: '10:00 AM - 12:00 PM',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100 my-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Book a Service / Site Visit</h2>
      <p className="text-sm text-gray-600 mb-6">Schedule an expert technician visit or consultation for your security network.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center">
          <h3 className="font-bold text-lg">Booking Confirmed!</h3>
          <p className="text-sm mt-1">We have received your request and will call you shortly to verify.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              required
              className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.clientName}
              onChange={(e) => setFormData({...formData, clientName: e.target.value})}
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                required
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service Type</label>
              <select 
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                value={formData.serviceName}
                onChange={(e) => setFormData({...formData, serviceName: e.target.value})}
              >
                <option value="CCTV Installation Survey">CCTV Installation Survey</option>
                <option value="Networking & IT Setup">Networking & IT Setup</option>
                <option value="AMC Maintenance Check">AMC Maintenance Check</option>
                <option value="DVR / Camera Troubleshooting">DVR / Camera Troubleshooting</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input 
                type="date" 
                required
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time Slot</label>
              <select 
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                value={formData.timeSlot}
                onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
              >
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-lg transition"
          >
            Confirm Appointment
          </button>
        </form>
      )}
    </div>
  );
}