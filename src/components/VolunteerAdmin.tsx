import React, { useState } from "react";

const VolunteerAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    areaOfInterest: [],
    experience: "",
  });

  const areasOfInterest = [
    "Afforestation",
    "Water Management",
    "Fund Raising",
    "Waste Management",
    "Agriculture",
    "Event Management",
    "Social Management",
    "Data Management",
    "Documentation",
    "Photography",
    "Digital Design",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedAreas = checked
        ? [...prev.areaOfInterest, value]
        : prev.areaOfInterest.filter((interest) => interest !== value);
      return { ...prev, areaOfInterest: updatedAreas };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your API call or form submission logic here
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      areaOfInterest: [],
      experience: "",
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-screen flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Volunteer Form</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Organization */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Area of Interest */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">Area of Interest</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areasOfInterest.map((area) => (
                <label key={area} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={area}
                    checked={formData.areaOfInterest.includes(area)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="text-sm">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              Previous Experience in Selected Area of Interest
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border rounded-md p-2 h-28"
              placeholder="Describe your experience"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-between items-center">
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" required />
                <span className="text-sm">I'm not a robot</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerAdmin;
