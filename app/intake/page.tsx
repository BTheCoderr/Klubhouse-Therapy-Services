'use client';

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function IntakePage() {

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

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-yellow-800">
                  <strong>Required Information:</strong> Please ensure you provide your contact email, phone number, and attach the client's psychological evaluation to complete this form.
                </p>
              </div>
            </div>
          </div>

          <form 
            name="intake" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            encType="multipart/form-data"
            action="/thank-you"
            className="space-y-8"
          >
            <input type="hidden" name="form-name" value="intake" />
            
            {/* Honeypot field */}
            <p className="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>
            
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input
                    type="text"
                    name="age"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Form Completed By *</label>
                  <input
                    type="text"
                    name="completedBy"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Relationship to Child</label>
                  <input
                    type="text"
                    name="relationship"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Are you the legal guardian?</label>
                  <select
                    name="legalGuardian"
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Member ID</label>
                  <input
                    type="text"
                    name="memberID"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email Address *</label>
                  <input
                    type="email"
                    name="contactEmail"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone Number *</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="(555) 123-4567"
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
                      name="psychConditions"
                      value={condition}
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
                          name="schoolSettings"
                          value={setting}
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
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <input
                      type="text"
                      name="grade"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address of school/daycare</label>
                    <input
                      type="text"
                      name="schoolAddress"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact name of school/daycare</label>
                    <input
                      type="text"
                      name="schoolContact"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teacher's name</label>
                    <input
                      type="text"
                      name="teacherName"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teacher's phone number</label>
                    <input
                      type="tel"
                      name="teacherPhone"
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
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Behavioral Health History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Behavioral Health History
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name of the Provider:
                  </label>
                  <input
                    type="text"
                    name="behavioralProviderName"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="behavioralProviderEmail"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="behavioralProviderPhone"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="contactBehavioralProvider"
                    value="yes"
                    className="mr-3 text-yellow-400 focus:ring-yellow-400 rounded"
                  />
                  <label className="text-gray-700">
                    I would like Klubhouse Therapy Services to contact this provider.
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Therapeutic Intervention:
                  </label>
                  <textarea
                    name="therapeuticIntervention"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Response to the Intervention:
                  </label>
                  <textarea
                    name="interventionResponse"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Community Resources
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                (Support Groups, Social Services, School Based Services, Other Therapies such as OT/PT/SPEECH etc.)
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name of the Provider:
                  </label>
                  <input
                    type="text"
                    name="communityProviderName"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="communityProviderEmail"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="communityProviderPhone"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="contactCommunityProvider"
                    value="yes"
                    className="mr-3 text-yellow-400 focus:ring-yellow-400 rounded"
                  />
                  <label className="text-gray-700">
                    I would like Klubhouse Therapy Services to contact this provider.
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes:
                  </label>
                  <textarea
                    name="communityResourceNotes"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* File Attachment */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                Additional Documents
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please attach Client's Psychological Evaluation (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    name="psychologicalEvaluation"
                    accept=".pdf,.doc,.docx"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Accepted formats: PDF, DOC, DOCX (Max file size: 10MB)
                  </p>
                </div>
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