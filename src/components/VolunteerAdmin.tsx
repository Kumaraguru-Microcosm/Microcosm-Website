import React, { useState } from "react";
import { addNewVolunteer } from "../api/volunteer"; // Adjust path if needed

const VolunteerAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    graduationYear: "",
    college: "",
    areaOfInterest: [],
    experience: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phoneNumber);
      data.append("graduationYear", formData.graduationYear);
      data.append("college", formData.college);
      data.append("interests", formData.areaOfInterest);
      data.append("experience", formData.experience);

      const response = await addNewVolunteer(data);
      setMessage(response.message);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        graduationYear: "",
        college: "",
        areaOfInterest: [],
        experience: "",
      });
      alert("Volunteer form submitted successfully");
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong! Please try again.");
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Volunteer Form</h1>
        {message && (
          <div
            className={`mb-6 text-center text-lg font-medium ${
              message.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-base font-medium mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-base font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block text-base font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Graduation Year */}
          <div>
            <label className="block text-base font-medium mb-2">Graduation Year *</label>
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300"
              required
            >
              <option value="">Select Year</option>
              {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* College Selection */}
          <div>
            <label className="block text-base font-medium mb-2">College *</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300"
              required
            >
              <option value="">Select College</option>
              <option value="KCT">Kumaraguru College of Technology (KCT)</option>
              <option value="KCLAS">Kumaraguru College of Liberal Arts & Science (KCLAS)</option>
            </select>
          </div>
          {/* Area of Interest */}
          <div className="md:col-span-2">
            <label className="block text-base font-medium mb-2">Area of Interest</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areasOfInterest.map((area) => (
                <label key={area} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={area}
                    checked={formData.areaOfInterest.includes(area)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5"
                  />
                  <span className="text-base">{area}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div className="md:col-span-2">
            <label className="block text-base font-medium mb-2">
              Previous Experience in Selected Area of Interest
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300 h-32"
              placeholder="Describe your experience"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" required />
              <span className="text-base">I'm not a robot</span>
            </label>
            <button
              type="submit"
              className="w-full md:w-auto bg-green-600 text-white px-8 py-3 text-lg rounded-lg hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerAdmin;
