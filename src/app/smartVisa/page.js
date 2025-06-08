"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';

export default function SmartVisa() {
  const router = useRouter();
  const [files, setFiles] = useState({
    passport: null,
    visa: null
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (type) => (e) => {
    const file = e.target.files[0];
    setFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData
    const formData = new FormData();
    formData.append('passport', files.passport);
    formData.append('visa', files.visa);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://127.0.0.1:5001/validate-documents', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Adjust main content to account for sidebar */}
      <div className="pl-16">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">SmartVisa</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Document Upload Section (60%) */}
            <div className="lg:w-3/5 bg-white rounded-xl shadow-md p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Document Validation</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Upload your passport and visa images for instant validation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Passport Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Passport Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload passport</span>
                          <input
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange('passport')}
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                  {files.passport && (
                    <p className="mt-2 text-sm text-green-600">
                      Selected: {files.passport.name}
                    </p>
                  )}
                </div>

                {/* Visa Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Visa Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload visa</span>
                          <input
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange('visa')}
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                  {files.visa && (
                    <p className="mt-2 text-sm text-green-600">
                      Selected: {files.visa.name}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={!files.passport || !files.visa || loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Validate Documents'}
                  </button>
                </div>
              </form>

              {/* Results Section with Close Button */}
              {result && (
                <div className="mt-6 space-y-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setResult(null)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Close Results
                    </button>
                  </div>

                  {/* Status Banner */}
                  <div className={`p-6 rounded-lg ${result.status === 'Matched' ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="flex items-center justify-between">
                      <h2 className={`text-lg font-semibold ${result.status === 'Matched' ? 'text-green-800' : 'text-red-800'}`}>
                        {result.status === 'Matched' ? 'OK to Board' : 'Not OK to Board'}
                      </h2>
                      {result.status === 'Matched' ? (
                        <div className="bg-green-500 rounded-full p-2">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="bg-red-500 rounded-full p-2">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {result.issues && result.issues.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-red-800">Issues Found:</h3>
                        <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
                          {result.issues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {result.visa_fields?.authenticityReason && (
                      <div className="mt-4 p-4 bg-white rounded-md">
                        <h3 className="text-sm font-medium text-gray-900">Visa Authenticity:</h3>
                        <p className="mt-1 text-sm text-gray-600">{result.visa_fields.authenticityReason}</p>
                      </div>
                    )}
                  </div>

                  {/* Document Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Passport Details */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Passport Details</h3>
                      <dl className="space-y-3">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.passport_fields.fullName}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Passport Number</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.passport_fields.passportNumber}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Expiry Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.passport_fields.documentExpiryDate}</dd>
                        </div>
                      </dl>
                    </div>

                    {/* Visa Details */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Visa Details</h3>
                      <dl className="space-y-3">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.visa_fields.fullName}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Passport Number</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.visa_fields.passportNumber}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Expiry Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.visa_fields.documentExpiryDate}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Visa Type</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.visa_fields.visaType}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Authenticity</dt>
                          <dd className="mt-1 text-sm text-gray-900 flex items-center">
                            {result.visa_fields.isAuthentic === "yes" ? (
                              <>
                                <svg className="h-5 w-5 text-green-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Authentic
                              </>
                            ) : (
                              <>
                                <svg className="h-5 w-5 text-red-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Not Authentic
                              </>
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MRZ Reader Section (40%) */}
            <div className="lg:w-2/5 bg-white rounded-xl shadow-md p-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900">Read from MRZ</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Use our advanced MRZ reader to scan and validate travel documents
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => router.push('/mrzReader')}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg
                      className="mr-2 -ml-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Open MRZ Reader
                  </button>
                </div>

                {/* Decorative Image/Icon */}
                <div className="mt-12">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 bg-white text-sm text-gray-500">or scan directly</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <svg
                      className="mx-auto h-24 w-24 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 