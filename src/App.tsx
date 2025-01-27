import React from 'react';
import { Video, Phone, Clock, Shield, Heart, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="text-red-400" size={36} />
                <h1 className="text-4xl font-bold tracking-tight">EMMA Africa</h1>
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">Medical Care When You Need It Most</h2>
              <p className="text-2xl mb-12 text-gray-100 leading-relaxed">Connect with qualified doctors instantly through secure video consultations. Available 24/7 across Africa.</p>
              <div className="flex space-x-6">
                <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center transition-colors duration-200">
                  Start Emergency Call
                  <Video className="ml-3" size={24} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center transition-colors duration-200">
                  Learn More
                  <ChevronRight className="ml-2" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8">
                <Video className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Video Consultation</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Secure, high-quality video calls with experienced medical professionals at your convenience.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-8">
                <Clock className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">24/7 Service</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Round-the-clock medical assistance because emergencies don't wait for office hours.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-8">
                <Shield className="text-purple-500" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Expert Care</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Access to a network of verified and experienced medical professionals across Africa.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Need Medical Assistance?</h2>
              <p className="text-xl text-blue-100 leading-relaxed">Our team of qualified medical professionals is ready to assist you immediately through secure video consultations.</p>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-200">
                <Video className="mr-3" size={24} />
                Start Video Call
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-200">
                <Phone className="mr-3" size={24} />
                Emergency Hotline
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <Heart className="text-red-400" size={32} />
              <span className="text-2xl font-bold text-white tracking-tight">EMMA Africa</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="hover:text-white flex items-center text-lg transition-colors duration-200">
                About Us <ChevronRight size={20} className="ml-2" />
              </a>
              <a href="#" className="hover:text-white flex items-center text-lg transition-colors duration-200">
                Our Doctors <ChevronRight size={20} className="ml-2" />
              </a>
              <a href="#" className="hover:text-white flex items-center text-lg transition-colors duration-200">
                Contact <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EMMA Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;