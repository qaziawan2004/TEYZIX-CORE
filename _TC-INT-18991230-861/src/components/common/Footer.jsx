import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Integrations', 'Roadmap'],
    'Company': ['About', 'Blog', 'Careers', 'Press'],
    'Resources': ['Documentation', 'Help Center', 'Community', 'Status'],
    'Legal': ['Privacy', 'Terms', 'Security', 'Cookies']
  }

  return (
    <footer className="bg-secondary-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                SaaS<span className="text-primary-400">Pro</span>
              </span>
            </Link>
            <p className="text-secondary-400 mb-6 max-w-sm">
              Modern SaaS platform helping businesses grow faster with powerful tools and insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} SaaSPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer