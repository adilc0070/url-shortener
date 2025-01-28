import { BookOpen, Shield } from 'lucide-react'
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: January 28, 2025</p>
            
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our URL shortening application.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Personal Information:</span>
                When you register or interact with our application, we may collect your email address or other contact details.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Usage Data:</span>
                We collect information about your usage of the application, including the URLs you shorten and analytics related to their performance.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>To provide and improve our services.</li>
              <li>To communicate with you regarding updates or support.</li>
              <li>To analyze application performance and improve user experience.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sharing Your Information</h2>
            <p className="text-gray-700 mb-6">
              We do not sell your information to third parties. However, we may share it with trusted service providers to enhance functionality or comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement robust measures to protect your data. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
            </p>
          </div>
        </div>
      </div>
  )
}

export default PrivacyPolicy