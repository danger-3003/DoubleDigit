"use client"

import { Mail, Phone, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent mb-4">
              DoubleDigit
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your business with digital intelligence. We combine marketing expertise, creative design, and AI automation to help you grow smarter and faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full group hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 transition-all duration-300">
                <Facebook size={20} className='group-hover:text-slate-900 text-white duration-300' />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full group hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 transition-all duration-300">
                <Instagram size={20} className='group-hover:text-slate-900 text-white duration-300' />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full group hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 transition-all duration-300">
                <Twitter size={20} className='group-hover:text-slate-900 text-white duration-300' />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full group hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 transition-all duration-300">
                <Linkedin size={20} className='group-hover:text-slate-900 text-white duration-300' />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => router.push('/')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => router.push('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => router.push('services')} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => router.push('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>hello@doubledigit.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DoubleDigit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
