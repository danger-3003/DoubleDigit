"use client"

import { ArrowRight, TrendingUp, Bot, Palette, Globe, CheckCircle, Zap } from 'lucide-react';
import { servicesPageData } from '@/constants/servicesPage';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const router = useRouter()

  const serviceDetails = [
    {
      icon: <TrendingUp className="size-5 sm:size-8 md:size-10" />,
      title: servicesPageData.services.services.digitalMarketing.heading,
      description: servicesPageData.services.services.digitalMarketing.body,
      offerings: servicesPageData.services.services.digitalMarketing.keyOfferings,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      svg: 'text-cyan-500'
    },
    {
      icon: <Bot className="size-5 sm:size-8 md:size-10" />,
      title: servicesPageData.services.services.aiToolsSupport.heading,
      description: servicesPageData.services.services.aiToolsSupport.body,
      offerings: servicesPageData.services.services.aiToolsSupport.keyOfferings,
      color: 'from-[#1D1DFF] to-[#5F27CD]',
      bgColor: 'from-blue-50 to-purple-50',
      svg: 'text-[#5f27cd]'
    },
    {
      icon: <Palette className="size-5 sm:size-8 md:size-10" />,
      title: servicesPageData.services.services.graphicDesigning.heading,
      description: servicesPageData.services.services.graphicDesigning.body,
      offerings: servicesPageData.services.services.graphicDesigning.keyOfferings,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      svg: 'text-red-500'
    },
    {
      icon: <Globe className="size-5 sm:size-8 md:size-10" />,
      title: servicesPageData.services.services.webDesigning.heading,
      description: servicesPageData.services.services.webDesigning.body,
      offerings: servicesPageData.services.services.webDesigning.keyOfferings,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      svg: 'text-teal-500'
    }
  ];

  return (
    <Container>
      <section className="relative mt-24 py-20 bg-gradient-to-br from-[#F8F8F8] via-white to-blue-50 overflow-hidden max-w-7xl w-full rounded-3xl">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-[#1D1DFF]/10 to-[#5F27CD]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-[#5F27CD]/10 to-[#1D1DFF]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
          <div className="text-center">
            <h1 data-aos="fade-up" data-aos-delay="0" className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <div data-aos="fade-up" data-aos-delay="100" className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              At <span className="font-semibold text-[#1D1DFF]">DoubleDigit</span>, we believe in blending creativity with data and AI-driven insights to craft solutions that are both beautiful and effective. Our mission is simple - to deliver measurable impact through innovation.
              we are passionate about delivering innovative digital solutions that empower businesses to thrive in an ever-evolving digital landscape. Our services combine strategy, creativity, and technology to drive measurable results and meaningful growth.
            </div>
            <p data-aos="fade-up" data-aos-delay="200" className="text-2xl text-[#1D1DFF] font-semibold max-w-3xl mx-auto mb-6">
              {servicesPageData.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 w-full max-w-7xl">
        <div className="space-y-20">
          {serviceDetails.map((service, index) => (
            <div
              data-aos="fade-up" data-aos-delay="0"
              key={index}
              className={`relative rounded-3xl overflow-hidden ${index % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'
                } ${service.bgColor}`}
            >
              <div className="grid md:grid-cols-2 gap-12 p-3 py-5 sm:p-5 md:p-8">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`size-12 sm:size-16 md:size-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => router.push('contact')}
                    className={`px-5 py-2 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-3 py-5 sm:p-5 md:p-8 shadow-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className={`w-6 h-6 ${service.svg}`} />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Key Offerings</h3>
                    </div>
                    <ul className="space-y-4 list-disc">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-1 ${service.svg}`} />
                          <span className="text-gray-700 text-base md:text-lg">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" data-aos-delay="0" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into understanding your business, goals, and challenges.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We craft a customized roadmap aligned with your objectives and market dynamics.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our expert team brings the strategy to life with precision and creativity.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor, measure, and optimize for maximum impact.'
              }
            ].map((process, index) => (
              <div data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index} className="relative flex items-center justify-center">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2 h-full max-w-80 w-full">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] bg-clip-text mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="block sm:hidden lg:block absolute top-full sm:top-1/2 sm:-right-3 w-0.5 sm:w-6 h-6 sm:h-0.5 bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] rounded-3xl max-w-7xl w-full my-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-8">
            Ready to take your business to the next level? Our team is here to help you succeed with tailored solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className={"px-5 py-2 bg-white text-secondary rounded-full font-semibold hover:shadow-md hover:shadow-white/10 transition-all hover:scale-105 flex items-center gap-2 w-max"}
              icon={<ArrowRight size={16} />}
              name={"Start Your Project"}
              onClick={() => router.push('contact')}
            />
            <Button
              className={"px-5 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:shadow-md hover:shadow-white/10 transition-all hover:scale-105 flex items-center gap-2 w-max"}
              icon={<ArrowRight size={16} />}
              name={"Learn More About Us"}
              onClick={() => router.push('about')}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
