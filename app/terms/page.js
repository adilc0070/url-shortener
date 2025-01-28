import { BookOpen } from 'lucide-react'
import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: January 28, 2025</p>
            
            <p className="text-gray-700 mb-6">
              Welcome to our URL shortening application. By using our services, you agree to the following terms and conditions.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Ensure the URLs you shorten comply with all applicable laws.</li>
              <li>Avoid using the application for malicious or illegal purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Prohibited Uses</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Shortening URLs leading to harmful or illegal content.</li>
              <li>Attempting to hack, exploit, or reverse-engineer the application.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-6">
              The application is provided as is without any warranties. We are not responsible for damages resulting from the use of the service.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              We are not liable for any direct, indirect, or consequential damages arising from the use of the application.
            </p>
          </div>
        </div>
      </div>
  )
}

export default TermsAndConditions