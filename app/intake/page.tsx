'use client';

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function IntakePage() {
  const [formData, setFormData] = useState({
    // Basic Information
    childName: '',
    age: '',
    date: '',
    completedBy: '',
    relationship: '',
    legalGuardian: '',
    clientsInsurance: '',
    memberID: '',
    
    // Medical History
    primaryCarePhysician: '',
    allergies: '',
    lifeThreatening: '',
    allergicInstructions: '',
    dietaryRestrictions: '',
    healthProblems: '',
    hospitalization: '',
    surgery: '',
    emergencyRoom: '',
    
    // Birth History
    birthHistory: '',
    birthWeight: '',
    weeksGestation: '',
    
    // Health Review
    overallHealth: '',
    
    // Checkboxes for various conditions
    noseConditions: [],
    skinConditions: [],
    throatConditions: [],
    headConditions: [],
    eyeConditions: [],
    earConditions: [],
    lungConditions: [],
    gastroConditions: [],
    muscleConditions: [],
    nervousConditions: [],
    urinaryConditions: [],
    heartConditions: [],
    bloodConditions: [],
    reproductiveConditions: [],
    psychConditions: [] as string[],
    
    // Medications
    medications: [{ name: '', strength: '', frequency: '', since: '' }],
    
    // Immunizations
    immunizationsUpToDate: '',
    whyNotImmunized: '',
    pneumoniaHistory: '',
    pneumoniaWhen: '',
    fluVaccineDate: '',
    
    // Family History
    familyHistory: [],
    
    // Social History
    primaryLanguage: '',
    legalIssues: '',
    spiritualNeeds: '',
    culturalVariables: '',
    
    // School Information
    schoolSettings: [] as string[],
    schoolName: '',
    schoolAddress: '',
    schoolContact: '',
    schoolPhone: '',
    schoolEmail: '',
    teacherName: '',
    teacherPhone: '',
    teacherEmail: '',
    grade: '',
    
    // Living Situation
    childResidesWith: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category: 'psychConditions' | 'schoolSettings', value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item: string) => item !== value)
        : [...prev[category], value]
    }));
  };

  const handleMedicationChange = (index: number, field: string, value: string) => {
    const newMedications = [...formData.medications];
    newMedications[index] = { ...newMedications[index], [field]: value };
    setFormData(prev => ({ ...prev, medications: newMedications }));
  };

  const addMedication = () => {
    setFormData(prev => ({
      ...prev,
      medications: [...prev.medications, { name: '', strength: '', frequency: '', since: '' }]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-xl">
              <h1 className="text-4xl font-bold text-black mb-4">Thank You!</h1>
              <p className="text-lg text-black mb-6">
                Your intake form has been submitted successfully. We'll review your information and be in touch within 24 hours.
              </p>
              <div className="space-y-4">
                <p className="text-black">
                  <strong>Next Steps:</strong>
                </p>
                <ul className="text-left text-black space-y-2">
                  <li>• We'll review your child's information</li>
                  <li>• A BCBA will contact you to schedule a consultation</li>
                  <li>• We'll discuss your child's specific needs and goals</li>
                </ul>
              </div>
              <div className="mt-8">
                <a 
                  href="tel:404-838-7010"
                  className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Call Us: 404-838-7010
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Child Medical History Questionnaire
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your information helps us better understand and support your child's needs. All data is kept private and secure.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Basic Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name *</label>
                  <input
                    type="text"
                    name="childName"
                    required
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input
                    type="text"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Form Completed By *</label>
                  <input
                    type="text"
                    name="completedBy"
                    required
                    value={formData.completedBy}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Relationship to Child</label>
                  <input
                    type="text"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Are you the legal guardian?</label>
                  <select
                    name="legalGuardian"
                    value={formData.legalGuardian}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Client's Insurance</label>
                  <input
                    type="text"
                    name="clientsInsurance"
                    value={formData.clientsInsurance}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Member ID</label>
                  <input
                    type="text"
                    name="memberID"
                    value={formData.memberID}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Medical History
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Care Physician (name, contact number, address, email)
                  </label>
                  <textarea
                    name="primaryCarePhysician"
                    rows={3}
                    value={formData.primaryCarePhysician}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Does your child have any allergies? If yes, please list below.
                  </label>
                  <textarea
                    name="allergies"
                    rows={3}
                    value={formData.allergies}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    If life threatening, please list below.
                  </label>
                  <textarea
                    name="lifeThreatening"
                    rows={2}
                    value={formData.lifeThreatening}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructions for allergic reactions
                  </label>
                  <textarea
                    name="allergicInstructions"
                    rows={2}
                    value={formData.allergicInstructions}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary restrictions, special diet
                  </label>
                  <textarea
                    name="dietaryRestrictions"
                    rows={2}
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Health Review - General */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Health Review
              </h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  How do you rate your child's overall health?
                </label>
                <div className="space-y-2">
                  {['Excellent', 'Very good', 'Good', 'Not very good', 'Poor'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="overallHealth"
                        value={option}
                        checked={formData.overallHealth === option}
                        onChange={handleInputChange}
                        className="mr-3 text-yellow-400 focus:ring-yellow-400"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Psychological and Behavioral */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Psychological and Behavioral
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Anxiety', 'Depression', 'Suicidal', 'Sleeping issues',
                  'Feeding/eating issues', 'Autism', 'Bi-polar disorder', 'ADHD'
                ].map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.psychConditions.includes(condition)}
                      onChange={() => handleCheckboxChange('psychConditions', condition)}
                      className="mr-3 text-yellow-400 focus:ring-yellow-400 rounded"
                    />
                    <span className="text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Social History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Social History
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary language spoken in the home. List any other languages spoken.
                  </label>
                  <textarea
                    name="primaryLanguage"
                    rows={3}
                    value={formData.primaryLanguage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Legal issues that may impact treatment (divorce, custody, child services open cases, etc.)
                  </label>
                  <textarea
                    name="legalIssues"
                    rows={3}
                    value={formData.legalIssues}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Spiritual needs that may impact treatment?
                  </label>
                  <textarea
                    name="spiritualNeeds"
                    rows={3}
                    value={formData.spiritualNeeds}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cultural variables that may impact treatment?
                  </label>
                  <textarea
                    name="culturalVariables"
                    rows={3}
                    value={formData.culturalVariables}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* School Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                School Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">School Setting:</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Gifted', 'Advance/Gifted', 'Special ED inclusion', 'Regular Education',
                      'Special ED self contained', 'Private School', 'Daycare', 'My child currently has an IEP'
                    ].map((setting) => (
                      <label key={setting} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.schoolSettings.includes(setting)}
                          onChange={() => handleCheckboxChange('schoolSettings', setting)}
                          className="mr-3 text-yellow-400 focus:ring-yellow-400 rounded"
                        />
                        <span className="text-gray-700">{setting}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name of school/daycare</label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <input
                      type="text"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address of school/daycare</label>
                    <input
                      type="text"
                      name="schoolAddress"
                      value={formData.schoolAddress}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact name of school/daycare</label>
                    <input
                      type="text"
                      name="schoolContact"
                      value={formData.schoolContact}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teacher's name</label>
                    <input
                      type="text"
                      name="teacherName"
                      value={formData.teacherName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teacher's phone number</label>
                    <input
                      type="tel"
                      name="teacherPhone"
                      value={formData.teacherPhone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Child Resides With */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Living Situation
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Child resides with?
                </label>
                <textarea
                  name="childResidesWith"
                  rows={3}
                  value={formData.childResidesWith}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Submit Intake Form
              </button>
              <p className="text-sm text-gray-600 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
} 