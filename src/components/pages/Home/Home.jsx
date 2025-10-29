"use client"

import { ArrowRight, TrendingUp, Bot, Palette, Globe, Target, Eye, CheckCircle, Sparkles } from 'lucide-react';
import { homePageData } from '@/constants/homePage';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Home() {
  const router = useRouter();
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: homePageData.services.services.googleAds.heading,
      description: homePageData.services.services.googleAds.body,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: homePageData.services.services.metaAds.heading,
      description: homePageData.services.services.metaAds.body,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: homePageData.services.services.aiToolsSupport.heading,
      description: homePageData.services.services.aiToolsSupport.body,
      color: 'from-primary to-secondary'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: homePageData.services.services.graphicDesigning.heading,
      description: homePageData.services.services.graphicDesigning.body,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: homePageData.services.services.webDesigning.heading,
      description: homePageData.services.services.webDesigning.body,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <Container>
      {/* Hero sectiom */}
      <section className="relative mt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F8F8] via-white to-blue-50 rounded-3xl">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl px-4 sm:px-5 lg:px-8 py-20 text-center">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              {homePageData.heroSection.heading}
            </h1>

            <p className="text-base md:text-lg text-text max-w-3xl mx-auto leading-relaxed">
              {homePageData.heroSection.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                className={"px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2"}
                icon={<ArrowRight size={16} />}
                name={"Get a Free Consultation"}
                onClick={() => router.push('contact')}
              />
              <Button
                className={"px-5 py-[6px] bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-gradient-to-r from-primary to-secondary hover:text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"}
                name={"Explore Services"}
                onClick={() => router.push('services')}
              />
            </div>

            <div className="flex items-center justify-center flex-wrap gap-4 pt-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-52 h-36 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center flex-col gap-5 group"
                >
                  <div className={`size-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white group-hover:-rotate-6 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <p className="text-sm font-medium text-text">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">
                {homePageData.aboutSection.heading}
              </h2>
              <p className="text-xl text-primary font-semibold">
                {homePageData.aboutSection.tagline}
              </p>
              <div className="text-base md:text-lg text-text leading-relaxed">
                {homePageData.aboutSection.body}
              </div>
              <p className="text-lg text-gray-900 font-medium">
                {homePageData.aboutSection.cta}
              </p>
              <Button
                className={"px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2"}
                name={"Learn More About Us"}
                icon={<ArrowRight size={16} />}
                onClick={() => router.push('about')}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-5 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 shadow-xl">
                <div className="space-y-4">
                  {[
                    'Data-Driven Strategies',
                    'Creative Excellence',
                    'AI-Powered Solutions',
                    'Measurable Results'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 px-4 py-2 sm:py-4 sm:px-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-gray-900 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="text-center mb-10 md:mb-16 flex items-center justify-center flex-col">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
              {homePageData.services.heading}
            </h2>
            <div className='flex items-center justify-center flex-row gap-3 bg-primary text-white mb-7 rounded-full px-5 py-2 sm:w-max'>
              <p className="text-[12px] sm:text-base">
                {homePageData.services.tagline}
              </p>
              <Sparkles size={16} />
            </div>
            <div className="text-lg text-text max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-primary">DoubleDigit</span>, we specialize in creating Google and Meta Ad campaigns that attract, engage, and convert. Our team uses advanced analytics, creative storytelling, and audience insights to maximize your ROI and brand presence.
            </div>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl min-w-60 max-w-96 w-full h-80 sm:h-80 p-5 md:p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex items-center justify-center">
            <Button
              className={"px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2"}
              name={"View All Services"}
              icon={<ArrowRight size={16} />}
              onClick={() => router.push('services')}
            />
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white shadow-2xl">
              <Eye className="w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                {homePageData.vision.heading}
              </h3>
              <p className="text-lg leading-relaxed text-blue-50">
                {homePageData.vision.body}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                {homePageData.mission.heading}
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                At DoubleDigit, our mission is to help businesses achieve smarter growth through:
              </p>
              <ul className="space-y-3">
                {homePageData.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div className="text-gray-200">{point}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl mb-20">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg text-text mb-8">
            Let's create something extraordinary together. Get in touch for a free consultation.
          </p>
          <Button
            className={"px-5 py-2 text-white bg-primary rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"}
            name={"Get Started Today"}
            icon={<ArrowRight size={16} />}
            onClick={() => router.push('contact')}
          />
        </div>
      </section>
    </Container>
  );
}
