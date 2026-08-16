import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/data';
import { FaCalendar, FaClock } from 'react-icons/fa';

const BlogPreview = ({ isDark }) => {
  return (
    <section id="blog" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6584]">Blog</span> Posts
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Insights, tips, and stories from our team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                isDark ? 'bg-[#1A1A2E]' : 'bg-gray-50'
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#6C63FF]/10 text-[#6C63FF] text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {post.excerpt}
                </p>
                <div className={`flex items-center justify-between text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="mt-4 text-[#6C63FF] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;