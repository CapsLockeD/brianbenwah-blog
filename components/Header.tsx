import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Youtube, Instagram } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Brian Benwah</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://youtube.com/@brianbenwah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-gray-400 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/brianbenwah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-gray-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@brianbenwah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-400 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://github.com/brianbenwah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/brianbenwah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-400 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 