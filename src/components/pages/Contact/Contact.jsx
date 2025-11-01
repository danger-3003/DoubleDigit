"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <section className="relative pt-20 pb-10 md:py-20 bg-gradient-to-br from-[#F8F8F8] via-white to-blue-50 overflow-hidden rounded-3xl mt-24 max-w-7xl w-full">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-[#1D1DFF]/10 to-[#5F27CD]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-[#5F27CD]/10 to-[#1D1DFF]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 data-aos="fade-up" data-aos-delay="0" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Create Something <span className="bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] bg-clip-text text-transparent">Extraordinary</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch with us today for a free consultation. We're here to help you grow smarter, faster, and stronger.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col sm:grid sm:grid-cols-2 gap-7 md:gap-12">
            <div className="space-y-8 w-full max-w-96 sm:max-w-full">
              <div data-aos="fade" data-aos-delay="200" className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 md:p-5 py-8 lg:p-8 border border-gray-200 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="size-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1D1DFF] to-[#5F27CD] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">hello@doubledigit.com</p>
                      <p className="text-gray-600 text-sm sm:text-base">support@doubledigit.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="size-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1D1DFF] to-[#5F27CD] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
                      <p className="text-gray-600 text-sm sm:text-base">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="size-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1D1DFF] to-[#5F27CD] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">123 Digital Avenue</p>
                      <p className="text-gray-600 text-sm sm:text-base">Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade" data-aos-delay="0" className="bg-slate-900 rounded-2xl w-full max-w-96 sm:max-w-full p-3 md:p-5 py-5 lg:p-8 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Customized solutions for your needs',
                    'Transparent pricing & timelines',
                    'Dedicated account manager',
                    '24/7 customer support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div data-aos="fade" data-aos-delay="200" className="bg-white/80 backdrop-blur-sm rounded-2xl w-full max-w-96 sm:max-w-full p-3 md:p-5 py-8 lg:p-8 border border-gray-200 shadow-xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-2 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1D1DFF] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-2 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1D1DFF] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-2 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1D1DFF] focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-2 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1D1DFF] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="ai-tools">AI Tools Support</option>
                        <option value="graphic-design">Graphic Designing</option>
                        <option value="web-design">Web Designing</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-2 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1D1DFF] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-2.5 bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white max-w-7xl w-full my-16">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Book a time that works for you, and let's discuss how we can help your business grow.
          </p>
          <div className='flex items-center justify-center'>
            <Button
              className={"px-5 py-2 bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] text-white rounded-full font-semibold hover:shadow-md hover:shadow-white/10 transition-all hover:scale-105 flex items-center gap-2"}
              icon={<ArrowRight size={16} />}
              name={"Schedule a Meeting"}
              onClick={() => { console.log("meeting") }}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
