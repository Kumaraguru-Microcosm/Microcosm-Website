import { Wrench, Server } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Server size={80} className="text-blue-500 mr-4" />
          <Wrench size={80} className="text-gray-600 animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Site Under Maintenance
        </h1>
        <p className="text-gray-600 mb-6">
          We're currently performing some system updates to improve your
          experience. We'll be back online shortly.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">Estimated Downtime: 30-60 minutes</p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href={`mailto:${import.meta.env.VITE_SUPPORT_EMAIL}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
