"use client";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import React from "react";
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ["latin"] });

const DocumentForm = ({ formData, documentData, handleFormChange }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="relative z-0">
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="firstName"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          First Name*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="middleName"
          id="middleName"
          value={formData.middleName || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="middleName"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Middle Name
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="lastName"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Last Name*
        </label>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="relative z-0">
        <select
          name="documentType"
          id="documentType"
          value={formData.documentType || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        >
          <option value="" disabled>Select...</option>
          <option value="passport">Passport</option>
          <option value="visa">Visa</option>
        </select>
        <label
          htmlFor="documentType"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Document Type*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="document"
          id="document"
          value={formData.document || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="document"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Document Number*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="date"
          name="documentExpiry"
          id="documentExpiry"
          value={formData.documentExpiry || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="documentExpiry"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Document Expiry*
        </label>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="relative z-0">
        <input
          type="text"
          name="nationality"
          id="nationality"
          value={formData.nationality || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="nationality"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Nationality*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formData.dateOfBirth || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="dateOfBirth"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Date of Birth*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="gender"
          id="gender"
          value={formData.gender || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="gender"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Gender*
        </label>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative z-0">
        <input
          type="text"
          name="placeOfBirth"
          id="placeOfBirth"
          value={formData.placeOfBirth || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="placeOfBirth"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Place of Birth
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="issuingAuthority"
          id="issuingAuthority"
          value={formData.issuingAuthority || ""}
          onChange={handleFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="issuingAuthority"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Issuing Authority
        </label>
      </div>
    </div>
  </div>
);

const VisaForm = ({ documentData, handleVisaFormChange }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative z-0">
        <input
          type="text"
          name="full_name"
          id="full_name"
          value={documentData?.visa_data?.full_name || documentData.passport_data.full_name || ""}
          onChange={handleVisaFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="full_name"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Full Name*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="nationality"
          id="visa_nationality"
          value={documentData?.visa_data?.nationality || documentData.passport_data.nationality || ""}
          onChange={handleVisaFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="visa_nationality"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Nationality*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="passport_number"
          id="visa_passport_number"
          value={documentData?.visa_data?.passport_number || documentData.passport_data.passport_number || ""}
          onChange={handleVisaFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="visa_passport_number"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Passport Number*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="text"
          name="issuing_country"
          id="issuing_country"
          value={documentData?.visa_data?.issuing_country || ""}
          onChange={handleVisaFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="issuing_country"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Issuing Country*
        </label>
      </div>

      <div className="relative z-0">
        <input
          type="date"
          name="expiry_date"
          id="visa_expiry_date"
          value={documentData?.visa_data?.expiry_date || ""}
          onChange={handleVisaFormChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="visa_expiry_date"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Visa Expiry*
        </label>
      </div>
    </div>
    {!documentData?.visa_data && (
      <div className="mt-6 p-4 border rounded-md bg-yellow-50 text-yellow-800">
        <div className="flex items-center">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-medium">Visa Required - Please provide visa information</span>
        </div>
      </div>
    )}
  </div>
);

export default function Home() {
  const [mrzData, setMrzData] = useState({
    passport_mrz: "",
    visa_mrz: ""
  });

  const [loading, setLoading] = useState(false);
  const [documentData, setDocumentData] = useState(null);
  const [showDocumentForm, setShowDocumentForm] = useState(false);
  const [showMrzInput, setShowMrzInput] = useState(true);
  const [timaticStatus, setTimaticStatus] = useState(null);
  const [showVisaForm, setShowVisaForm] = useState(false);
  const [comparisonStatus, setComparisonStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    documentType: "",
    document: "",
    documentExpiry: "",
    dateOfBirth: "",
    gender: "",
    placeOfBirth: "",
    issuingAuthority: "",
    nationality: ""
  });
  const [activeForm, setActiveForm] = useState('document');

  // Debug useEffect to monitor state changes
  useEffect(() => {
    console.log("State changed:", {
      timaticStatus,
      showVisaForm,
      documentData: !!documentData,
      hasVisaData: documentData?.visa_data ? true : false
    });
  }, [timaticStatus, showVisaForm, documentData]);

  // Effect to handle visa form display
  useEffect(() => {
    if (timaticStatus === true) {
      console.log("Timatic requires visa, showing visa form");
      setShowVisaForm(true);
    }
  }, [timaticStatus]);

  const handleMrzChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = value.replace(/\\n/g, '\n');
    setMrzData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVisaFormChange = (e) => {
    const { name, value } = e.target;
    setDocumentData(prev => ({
      ...prev,
      visa_data: {
        ...prev?.visa_data || {},
        [name]: value
      }
    }));
  };

  const checkTimatic = async (nationality) => {
    try {
      console.log("Checking Timatic for nationality:", nationality);
      const response = await fetch('http://127.0.0.1:5000/check-timatic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nationality })
      });

      const data = await response.json();
      console.log("Timatic response:", data);
      
      if (data.visa_required) {
        console.log("Setting showVisaForm to true");
        setShowVisaForm(true);
      }
      setTimaticStatus(data.visa_required);
    } catch (error) {
      console.error('Error checking Timatic:', error);
    }
  };

  const validateMrz = async () => {
    try {
      setLoading(true);
      const cleanedMrzData = {
        passport_mrz: mrzData.passport_mrz.replace(/\\n/g, '\n'),
        visa_mrz: mrzData.visa_mrz.replace(/\\n/g, '\n')
      };

      const response = await fetch('http://127.0.0.1:5000/validate-mrz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedMrzData)
      });

      const data = await response.json();
      
      if (data.status === "success") {
        setShowVisaForm(false);
        setTimaticStatus(null);
        
        setDocumentData(data);
        setShowDocumentForm(true);
        setShowMrzInput(false);
        
        // Pre-fill form with passport data
        const names = data.passport_data.full_name.split(' ');
        const firstName = names[0] || "";
        const lastName = names[names.length - 1] || "";
        const middleName = names.slice(1, -1).join(' ') || "";

        setFormData({
          firstName,
          middleName,
          lastName,
          documentType: "passport",
          document: data.passport_data.passport_number || "",
          documentExpiry: data.passport_data.expiry_date || "",
          dateOfBirth: data.passport_data.date_of_birth || "",
          gender: data.passport_data.gender || "",
          placeOfBirth: data.passport_data.place_of_birth || "",
          issuingAuthority: data.passport_data.issuing_authority || "",
          nationality: data.passport_data.nationality || ""
        });

        await checkTimatic(data.passport_data.nationality);
      }
    } catch (error) {
      console.error('Error validating MRZ:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompare = () => {
    if (documentData?.comparison_result) {
      setComparisonStatus(documentData.comparison_result);
      setActiveForm('status');
    }
  };

  const isOkayToBoard = (comparisonResult) => {
    if (!comparisonResult) return false;
    
    // Check if all required fields match
    const requiredChecks = {
      full_name: comparisonResult.full_name === 'matched',
      passport_number: comparisonResult.passport_number === 'matched',
      visa_status: comparisonResult.visa_expiry_valid === 'valid' || comparisonResult.visa_expiry_valid === 'matched'
    };

    return Object.values(requiredChecks).every(value => value === true);
  };

  const getStatusMessage = (comparisonResult) => {
    if (!comparisonResult) return '';
    
    const issues = [];
    if (comparisonResult.full_name !== 'matched') {
      issues.push('Name mismatch');
    }
    if (comparisonResult.passport_number !== 'matched') {
      issues.push('Passport number mismatch');
    }
    if (comparisonResult.visa_expiry_valid !== 'valid' && comparisonResult.visa_expiry_valid !== 'matched') {
      issues.push('Visa expired');
    }

    return issues.length > 0 ? issues.join(', ') : 'All documents valid';
  };

  const getStatusColor = (status) => {
    if (status === 'matched' || status === 'valid') return 'text-green-600';
    return 'text-red-600';
  };

  const FloatingInput = null;
  const FloatingSelect = null;

  const renderForm = React.useCallback(() => {
    if (!documentData) {
      return null;
    }

    return (
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h1 className="text-xl font-semibold">
              {activeForm === 'visa' ? "Visa Details" : 
               activeForm === 'status' ? "Document Status" :
               "Passport Details"} for {documentData.passport_data.full_name}
            </h1>
          </div>

          {activeForm === 'document' && (
            <>
              <DocumentForm
                formData={formData}
                documentData={documentData}
                handleFormChange={handleFormChange}
              />
            </>
          )}

          {activeForm === 'visa' && (
            <>
              <VisaForm
                documentData={documentData}
                handleVisaFormChange={handleVisaFormChange}
              />
            </>
          )}

          {activeForm === 'status' && comparisonStatus && (
            <div className="space-y-6">
              <div className={`p-6 rounded-lg ${isOkayToBoard(comparisonStatus) ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    {isOkayToBoard(comparisonStatus) ? 'OK to Board' : 'Not OK to Board'}
                  </h2>
                  {isOkayToBoard(comparisonStatus) ? (
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
                <p className={`mt-2 ${isOkayToBoard(comparisonStatus) ? 'text-green-700' : 'text-red-700'}`}>
                  {getStatusMessage(comparisonStatus)}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span>Full Name</span>
                  <span className={getStatusColor(comparisonStatus.full_name)}>
                    {comparisonStatus.full_name === 'matched' ? 'Matched' : 'Mismatch'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span>Passport Number</span>
                  <span className={getStatusColor(comparisonStatus.passport_number)}>
                    {comparisonStatus.passport_number === 'matched' ? 'Matched' : 'Mismatch'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span>Visa Status</span>
                  <span className={getStatusColor(comparisonStatus.visa_expiry_valid)}>
                    {comparisonStatus.visa_expiry_valid === 'valid' || comparisonStatus.visa_expiry_valid === 'matched' ? 'Valid' : 'Expired'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }, [activeForm, documentData, formData, comparisonStatus, handleFormChange, handleVisaFormChange]);

  return (
    <div className="min-h-screen bg-gray-100 relative pb-16">
      <Sidebar />
      
      <div className="pl-16">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">Document Validation System</h1>
          </div>
        </header>

        <main className="container mx-auto p-6">
          {showMrzInput && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Enter MRZ Data</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passport MRZ
                  </label>
                  <textarea
                    name="passport_mrz"
                    value={mrzData.passport_mrz}
                    onChange={handleMrzChange}
                    className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter passport MRZ data..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visa MRZ
                  </label>
                  <textarea
                    name="visa_mrz"
                    value={mrzData.visa_mrz}
                    onChange={handleMrzChange}
                    className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter visa MRZ data..."
                  />
                </div>
                <button
                  onClick={validateMrz}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {loading ? "Validating..." : "Validate MRZ"}
                </button>
              </div>
            </div>
          )}

          {showDocumentForm && documentData && (
            <div className="flex">
              <div className="w-64 bg-white border-r border-gray-200 mr-6">
                <div className="p-4 border-b border-gray-200">
                  <div className="font-bold text-lg">{formData.lastName+"/"+formData.firstName}</div>
                  <div className="text-gray-600">{documentData.passport_data.expiry_date}</div>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li 
                      className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                        activeForm === 'document' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveForm('document')}
                    >
                      <span className={activeForm === 'document' ? "font-medium" : ""}>Document</span>
                      <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </li>
                    <li 
                      className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                        activeForm === 'timatic' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveForm('timatic')}
                    >
                      <span className={activeForm === 'timatic' ? "font-medium" : ""}>Timatic</span>
                      {timaticStatus === null ? (
                        <div className="bg-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">...</div>
                      ) : timaticStatus ? (
                        <div className="bg-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">!</div>
                      ) : (
                        <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </li>
                    {timaticStatus && (
                      <li 
                        className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                          activeForm === 'visa' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveForm('visa')}
                      >
                        <span className={activeForm === 'visa' ? "font-medium" : ""}>Visa</span>
                        {documentData?.visa_data ? (
                          <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="bg-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">!</div>
                        )}
                      </li>
                    )}
                    {comparisonStatus && (
                      <li 
                        className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                          activeForm === 'status' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveForm('status')}
                      >
                        <span className={activeForm === 'status' ? "font-medium" : ""}>Status</span>
                        {isOkayToBoard(comparisonStatus) ? (
                          <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              {renderForm()}
            </div>
          )}
        </main>
      </div>

      {showDocumentForm && documentData && activeForm !== 'status' && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={handleCompare}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer transform hover:scale-105 hover:shadow-xl"
            title="Compare Documents"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
