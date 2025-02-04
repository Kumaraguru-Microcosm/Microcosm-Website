import React, { useState } from "react";
import { addNewInternship, addNewVolunteer } from "../api/volunteer"; // Create this API function
import Header from "./Header";
import Footer from "./Footer";
import Captcha from "./Captcha";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    areaOfInterest: [],
    sop: "",
    resume: null,
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const areasOfInterest = [
    "Environmental Sustainability",
    "Waste Management",
    "Renewable Energy",
    "Community Development",
    "Research & Innovation",
    "Social Entrepreneurship",
    "Data Analysis",
    "Project Management",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
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
      data.append("interests", formData.areaOfInterest);
      data.append("sop", formData.sop);
      data.append("resume", formData.resume);

      const response = await addNewInternship(data);
      setMessage(response.message);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        areaOfInterest: [],
        sop: "",
        resume: null,
      });
      alert("Internship application submitted successfully");
    } catch (error) {
      console.log(error);
      setMessage(
        error.response?.data?.error ||
        "Something went wrong! Please try again.",
      );
      alert("Something went wrong. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Microcosom Internship Application
          </h1>
          {message && (
            <div
              className={`mb-6 text-center text-lg font-medium ${message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
                }`}
            >
              {message}
            </div>
          )}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
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
              <label className="block text-base font-medium mb-2">
                Email *
              </label>
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
              <label className="block text-base font-medium mb-2">
                Phone Number *
              </label>
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

            {/* Resume Upload */}
            <div>
              <label className="block text-base font-medium mb-2">
                Upload Resume (PDF/DOC) *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full border rounded-lg p-3 text-lg"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            {/* Area of Interest */}
            <div className="md:col-span-2">
              <label className="block text-base font-medium mb-2">
                Area of Interest
              </label>
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

            {/* Statement of Purpose */}
            <div className="md:col-span-2">
              <label className="block text-base font-medium mb-2">
                Statement of Purpose (SOP) *
              </label>
              <textarea
                name="sop"
                value={formData.sop}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 text-lg focus:ring focus:ring-green-300 h-48"
                placeholder="Explain why you want this internship and how it aligns with your goals"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-4">
              <Captcha onClick={() => setCaptchaVerified(true)} />
              <button
                type="submit"
                className={`w-full md:w-auto bg-blue-600 text-white px-8 py-3 text-lg rounded-lg ${captchaVerified && "hover:bg-blue-700 "} ${isLoading || (!captchaVerified && "bg-blue-300")}`}
                disabled={isLoading || !captchaVerified}
              >
                {isLoading ? "Submitting..." : "SUBMIT APPLICATION"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternshipForm;
