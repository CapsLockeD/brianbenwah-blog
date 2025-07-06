import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Code, Brain, Smartphone, Youtube, Instagram } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link 
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Brian Benwah</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                AI developer, app builder, and content creator passionate about technology and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Personal Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
                <p className="text-lg text-gray-600 mb-6">
                  I'm a passionate developer and entrepreneur who loves building things that make a difference. 
                  My journey in tech started with a curiosity about how things work, and it's evolved into 
                  a career creating innovative solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  When I'm not coding, you'll find me exploring the latest in AI technology, sharing insights 
                  on social media, or working on my next big project. I believe in the power of technology 
                  to solve real-world problems and improve people's lives.
                </p>
                <p className="text-lg text-gray-600">
                  My mission is to help others learn and grow in the tech space while building amazing 
                  applications that push the boundaries of what's possible.
                </p>
              </div>

              {/* Skills & Expertise */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Brain className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Development</h3>
                      <p className="text-gray-600">
                        Machine learning, natural language processing, and AI-powered applications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Smartphone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">App Development</h3>
                      <p className="text-gray-600">
                        Mobile and web applications using modern frameworks and technologies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Code className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                      <p className="text-gray-600">
                        End-to-end development from frontend to backend and everything in between.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">My Journey</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">AI Developer & Content Creator</h3>
                  <span className="text-blue-600 font-medium">2023 - Present</span>
                </div>
                <p className="text-gray-600">
                  Building AI-powered applications and sharing knowledge through YouTube, Instagram, and TikTok. 
                  Focused on making AI accessible to everyone.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">App Developer</h3>
                  <span className="text-blue-600 font-medium">2021 - 2023</span>
                </div>
                <p className="text-gray-600">
                  Developed multiple mobile and web applications, learning the ins and outs of modern 
                  development frameworks and best practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Tech Enthusiast</h3>
                  <span className="text-blue-600 font-medium">2019 - 2021</span>
                </div>
                <p className="text-gray-600">
                  Started my journey in technology, learning to code and exploring various programming 
                  languages and frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-8">
              Interested in collaborating on a project or just want to chat about tech? 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="/blog"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read My Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 