"use client"

import { ArrowRight, Target, Users, Award, Lightbulb, CheckCircle } from 'lucide-react';
import { aboutPageData } from '@/constants/aboutPage';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
export default function About() {
  const router = useRouter();

  const services = [
    {
      title: aboutPageData.services.services.googleAds.heading,
      description: aboutPageData.services.services.googleAds.body
    },
    {
      title: aboutPageData.services.services.metaAds.heading,
      description: aboutPageData.services.services.metaAds.body
    },
    {
      title: aboutPageData.services.services.aiToolsSupport.heading,
      description: aboutPageData.services.services.aiToolsSupport.body
    },
    {
      title: aboutPageData.services.services.graphicDesigning.heading,
      description: aboutPageData.services.services.graphicDesigning.body
    },
    {
      title: aboutPageData.services.services.webDesigning.heading,
      description: aboutPageData.services.services.webDesigning.body
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'We measure success by your growth. Every strategy is designed to deliver measurable impact and ROI.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of digital trends, leveraging the latest technologies and methodologies to give you a competitive edge.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your goals are our goals. We work as an extension of your team, committed to your long-term success.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality & Excellence',
      description: 'From strategy to execution, we maintain the highest standards in everything we create and deliver.'
    }
  ];

  return (
    <Container>
      <section className="relative mt-24 py-20 bg-gradient-to-br from-[#F8F8F8] via-white to-blue-50 overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-[#1D1DFF]/10 to-[#5F27CD]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-[#5F27CD]/10 to-[#1D1DFF]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              {aboutPageData.heading}
            </h1>
            <div className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              At <span className="font-semibold text-[#1D1DFF]">DoubleDigit</span>, we believe in blending creativity with data and AI-driven insights to craft solutions that are both beautiful and effective. Our mission is simple to deliver measurable impact through innovation.
            </div>
            <p className="text-2xl text-[#1D1DFF] font-semibold max-w-3xl mx-auto mb-6">
              {aboutPageData.tagline}
            </p>
            <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
              {aboutPageData.cta}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1D1DFF] to-[#5F27CD] rounded-xl flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D1DFF]/20 to-[#5F27CD]/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-[#1D1DFF] to-[#5F27CD] rounded-3xl p-12 text-white">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">100+</div>
                      <div className="text-lg">Projects Completed</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">50+</div>
                      <div className="text-lg">Happy Clients</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">95%</div>
                      <div className="text-lg">Client Satisfaction</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">24/7</div>
                      <div className="text-lg">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose DoubleDigit?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We're more than a digital agency - we're your growth partner. With a proven track record of delivering exceptional results, we combine strategic thinking with creative execution to help businesses thrive in the digital landscape.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert team with years of industry experience',
                  'Customized solutions tailored to your needs',
                  'Transparent communication and reporting',
                  'Cutting-edge tools and technologies',
                  'Proven ROI and measurable results'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#1D1DFF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {aboutPageData.services.heading}
            </h2>
            <div className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-[#1D1DFF]">DoubleDigit</span>, we are passionate about delivering innovative digital solutions that empower businesses to thrive in an ever-evolving digital landscape. Our services combine strategy, creativity, and technology to drive measurable results and meaningful growth.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => router.push('services')}
                  className="text-[#1D1DFF] font-semibold hover:gap-3 transition-all flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight size={15} className='-rotate-45 group-hover:rotate-0 duration-300' />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full mt-12">
            <Button
              className={"px-5 py-2 bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] text-white rounded-full font-semibold hover:shadow-md hover:shadow-white/10 transition-all hover:scale-105 flex items-center gap-2"}
              icon={<ArrowRight size={16} />}
              name={"Explore All Services"}
              onClick={() => router.push('services')}
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl py-10 md:py-20 bg-gradient-to-r from-[#1D1DFF] to-[#5F27CD] w-full rounded-3xl my-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-8">
            Partner with us to transform your business with digital intelligence. Let's create something extraordinary together.
          </p>
          <div className='flex items-center justify-center'>
            <Button
              className={"px-5 py-2 bg-white text-[#1D1DFF] rounded-full font-semibold hover:shadow-md hover:shadow-white/10 transition-all hover:scale-105 flex items-center gap-2"}
              icon={<ArrowRight size={16} />}
              name={"Explore All Services"}
              onClick={() => router.push('services')}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
