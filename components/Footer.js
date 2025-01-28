import { Github, Globe, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 max-h-fit">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
                <span className="text-xl font-bold text-white">URLSnip</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making the web more accessible, one shortened URL at a time. 
                URLSnip provides fast, reliable, and secure URL shortening services.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/adilc0070" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="http://linkedin.com/in/adilc0070" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:adilc0070@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <a href="https://adilc0070.site">adilc0070.site</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:adilc0070@gmail.com">adilc0070@gmail</a>
                </li>
                
                <li className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="http://linkedin.com/in/adilc0070">adilc0070</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/adilc0070">adilc0070</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <a href="https://instagram.com/adilc0070">adilc0070</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2025 URLSnip. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer