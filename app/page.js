'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, ArrowRight, Copy, ExternalLink, Scissors, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortUrl('');
    setLoading(true);

    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(`${window.location.origin}/${data.shortCode}`);
        toast.success('URL shortened successfully!', {
          duration: 2000,
          position: 'bottom-right',
        });
      } else {
        toast.error(data.error || 'Something went wrong', {
          duration: 2000,
          position: 'bottom-right',
        });
      }
    } catch (err) {
      toast.error('Failed to shorten URL', {
        duration: 2000,
        position: 'bottom-right',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success('URL copied to clipboard!', {
        duration: 2000,
        position: 'bottom-right',
        icon: '📋',
      });
    } catch (err) {
      toast.error('Failed to copy URL', {
        duration: 2000,
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Header with Logo */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <span className="text-2xl font-bold text-gray-900">URLSnip</span>
          </div>
          <nav className="items-center space-x-6">
            <p className='text-sm text-black'>Built by <a href="https://adilc0070.site" className="text-gray-600 hover:text-blue-500 transition-colors">adilc0070.site</a></p> 
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Long URLs into Short Links
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create short, memorable links that are easy to share and track.
              Perfect for social media, marketing campaigns, and personal use.
            </p>
          </div>

          {/* Main URL Shortener Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
              <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
                <h2 className="text-2xl font-semibold text-gray-800">URL Shortener</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste your long URL here"
                    required
                    className="flex-1 px-4 py-3 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Shortening...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Shorten URL
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {shortUrl && (
                <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Your shortened URL is ready!</h3>
                  <div className="flex items-center gap-3">
                    <input 
                      type="text" 
                      value={shortUrl}
                      readOnly
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-white text-black"
                    />
                    <button
                      onClick={handleCopy}
                      className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
                    >
                      <Copy className="w-5 h-5" />
                      Copy
                    </button>
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Open
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Link className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Short Links</h3>
              <p className="text-gray-600">Create branded and memorable links that reflect your identity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliable & Secure</h3>
              <p className="text-gray-600">Your links are always available and protected with HTTPS encryption.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Ready</h3>
              <p className="text-gray-600">Track clicks and measure the performance of your short links.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@urlsnip.com</span>
                </li>
                <li>123 Web Street</li>
                <li>Internet City, ON 10101</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2025 URLSnip. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}