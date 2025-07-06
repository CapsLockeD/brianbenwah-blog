import React from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Brain, Smartphone, Youtube, Instagram } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center flex flex-col items-center">
              {/* Profile Image */}
              <img
                src="/IMG_0335.jpeg" // Your manually cropped profile photo
                alt="Brian Benwah profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg mb-6"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Brian Benwah</span>
              </h1>
              {/* Catchy Headline */}
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 max-w-2xl mx-auto font-semibold">
                Building the future with AI, code, and creativity. Join my journey!
              </p>
              {/* Newsletter Subscription Form */}
              <form className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email to join the newsletter"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What I Do
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I build apps, explore AI, and share my journey through content creation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Development</h3>
                <p className="text-gray-600">
                  Exploring artificial intelligence and machine learning applications.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">App Building</h3>
                <p className="text-gray-600">
                  Creating mobile and web applications with modern technologies.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Creation</h3>
                <p className="text-gray-600">
                  Sharing knowledge through YouTube, Instagram, and blog posts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Blog Posts
              </h2>
              <p className="text-xl text-gray-600">
                Insights on AI, app development, and technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample Blog Post Cards */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      AI Development
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">Coming Soon</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    How I Use AI to Build Better Apps
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the intersection of artificial intelligence and mobile app development.
                  </p>
                  <Link href="/blog/coming-soon" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      App Building
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">Coming Soon</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    My App Development Workflow
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A deep dive into my process for building and launching applications.
                  </p>
                  <Link href="/blog/coming-soon" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Technology
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">Coming Soon</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The Future of AI in Software Development
                  </h3>
                  <p className="text-gray-600 mb-4">
                    My thoughts on how AI will transform the way we build software.
                  </p>
                  <Link href="/blog/coming-soon" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/blog"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Follow My Journey
              </h2>
              <p className="text-xl text-gray-600">
                Join me on YouTube and Instagram for more content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-red-50 rounded-lg">
                <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube Channel</h3>
                <p className="text-gray-600 mb-4">
                  Video tutorials, app demos, and AI insights.
                </p>
                <a 
                  href="https://youtube.com/@brianbenwah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Subscribe
                </a>
              </div>
              
              <div className="text-center p-8 bg-pink-50 rounded-lg">
                <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">
                  Behind-the-scenes and daily updates.
                </p>
                <a 
                  href="https://instagram.com/brianbenwah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                >
                  Follow
                </a>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <svg className="h-12 w-12 text-black mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok</h3>
                <p className="text-gray-600 mb-4">
                  Short-form content and app demos.
                </p>
                <a 
                  href="https://tiktok.com/@brianbenwah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Follow
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 