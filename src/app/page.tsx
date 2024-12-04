"use client"; // Mark this file as a client component

import { useState } from 'react';

const RentEase = () => {
  // State for rent calculator
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [securityDeposit, setSecurityDeposit] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [leaseDuration, setLeaseDuration] = useState(12);
  const [hasPets, setHasPets] = useState(false);
  const [petFees, setPetFees] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);

  // Calculations
  const totalMonthlyCost = monthlyRent + utilities + (hasPets ? petFees : 0);
  const totalYearlyCost = (totalMonthlyCost * leaseDuration) + securityDeposit;
  const budgetRecommendation = monthlyIncome ? (monthlyIncome * 0.3) : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-24">
      <h1 className="text-8xl font-bold mb-16">RentEase</h1>
      
      {/* Rent Calculator Section */}
      <div className="bg-white shadow-md rounded-lg p-20 w-full max-w-2xl mb-16">
        <h2 className="text-5xl font-semibold mb-12">Calculate Your Rent</h2>
        <div className="mb-12">
          <label className="block text-2xl font-medium mb-4">Monthly Rent</label>
          <input
            type="number"
            value={monthlyRent || ''}
            onChange={(e) => setMonthlyRent(Number(e.target.value))}
            className="border rounded-md p-6 w-full text-2xl"
            placeholder="Enter monthly rent"
          />
        </div>
        <div className="mb-12">
          <label className="block text-2xl font-medium mb-4">Security Deposit</label>
          <input
            type="number"
            value={securityDeposit || ''}
            onChange={(e) => setSecurityDeposit(Number(e.target.value))}
            className="border rounded-md p-6 w-full text-2xl"
            placeholder="Enter security deposit (optional)"
          />
        </div>
        <div className="mb-12">
          <label className="block text-2xl font-medium mb-4">Utilities</label>
          <input
            type="number"
            value={utilities || ''}
            onChange={(e) => setUtilities(Number(e.target.value))}
            className="border rounded-md p-6 w-full text-2xl"
            placeholder="Enter monthly utilities"
          />
        </div>
        <div className="mb-12">
          <label className="block text-2xl font-medium mb-4">Lease Duration (Months)</label>
          <select
            value={leaseDuration}
            onChange={(e) => setLeaseDuration(Number(e.target.value))}
            className="border rounded-md p-6 w-full text-2xl"
          >
            {[6, 12, 24].map((duration) => (
              <option key={duration} value={duration}>{duration} months</option>
            ))}
          </select>
        </div>
        <div className="mb-12">
          <label className="flex items-center text-2xl">
            <input
              type="checkbox"
              checked={hasPets}
              onChange={() => setHasPets(!hasPets)}
              className="mr-6"
            />
            Do you have pets?
          </label>
          {hasPets && (
            <input
              type="number"
              value={petFees || ''}
              onChange={(e) => setPetFees(Number(e.target.value))}
              className="border rounded-md p-6 w-full text-2xl"
              placeholder="Enter pet fees (optional)"
            />
          )}
        </div>
        <div className="mb-12">
          <label className="block text-2xl font-medium mb-4">Monthly Income</label>
          <input
            type="number"
            value={monthlyIncome || ''}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="border rounded-md p-6 w-full text-2xl"
            placeholder="Enter your monthly income"
          />
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Total Monthly Cost: ${totalMonthlyCost.toFixed(2)}</h3>
          <h3 className="text-3xl font-semibold">Total Yearly Cost: ${totalYearlyCost.toFixed(2)}</h3>
          {budgetRecommendation > 0 && (
            <h3 className="text-3xl font-semibold">
              Recommended Rent (30% of Income): ${budgetRecommendation.toFixed(2)}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentEase;
