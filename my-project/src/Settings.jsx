import React, { useState } from "react";
import Sidebar from "./Sidebar";
import './Settings.css'
const Settings = () => {
    
    const [pricing, setPricing] = useState({
        marketing: { default: "0.79.553", markup: "0.86" },
        utility: { default: "0.12", markup: "0.20" },
        authentication: { default: "0.14", markup: "0.20" },
        service: { default: "Free", markup: "Free" },
    });

    const resetRates = () => {
        setPricing({
        marketing: { default: "0.79.553", markup: "0.86" },
        utility: { default: "0.12", markup: "0.20" },
        authentication: { default: "0.14", markup: "0.20" },
        service: { default: "Free", markup: "Free" },
        });
    };

    const updateRates = () => {
        alert("Rates updated!");
    };

  return (
    <>
        <Sidebar/>
        <div>
                <label htmlFor="">Rates</label>
                <label> Subscription</label>
            </div>
        <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md">
            
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 font-medium">India</th>
            <th className="border-b p-2 font-medium">Default Pricing</th>
            <th className="border-b p-2 font-medium">Markup Pricing</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(pricing).map(([key, value]) => (
            <tr key={key}>
              <td className="p-2 capitalize border-b">{key}</td>
              <td className="p-2 border-b">
                <input
                  type="text"
                  value={value.default}
                  className="w-full px-2 py-1 border rounded"
                  readOnly
                />
              </td>
              <td className="p-2 border-b">
                <input
                  type="text"
                  value={value.markup}
                  className="w-full px-2 py-1 border rounded"
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={resetRates}
          className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded"
        >
          Reset Rates
        </button>
        <button
          onClick={updateRates}
          className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded"
        >
          Update
        </button>
      </div>
    </div>
    
    </>
  );
};
export default Settings;
