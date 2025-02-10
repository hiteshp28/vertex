import React from 'react';
import { Users, Target, History, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Founded in 1978, we've grown to become a leading manufacturer of HDPE solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative and sustainable HDPE monofilament solutions that exceed customer
                expectations while maintaining the highest standards of quality and environmental
                responsibility.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in HDPE monofilament manufacturing, recognized for our
                innovation, quality, and commitment to sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200" />
            <div className="space-y-12">
              {[
                {
                  year: '1978',
                  title: 'Foundation',
                  description: 'Established by Mr. Rajendra Tibrewala with a vision for quality manufacturing.',
                },
                {
                  year: '1985',
                  title: 'Expansion',
                  description: 'Expanded production capacity and entered international markets.',
                },
                {
                  year: '1995',
                  title: 'Innovation',
                  description: 'Introduced new product lines and advanced manufacturing processes.',
                },
                {
                  year: '2010',
                  title: 'Sustainability Focus',
                  description: 'Implemented eco-friendly practices and sustainable manufacturing processes.',
                },
                {
                  year: '2023',
                  title: 'Global Presence',
                  description: 'Serving customers worldwide with state-of-the-art manufacturing facilities.',
                },
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <History className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold text-green-600 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the team driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajendra Tibrewala',
                position: 'Founder & Chairman',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
              },
              {
                name: 'Sarah Johnson',
                position: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
              },
              {
                name: 'Michael Chen',
                position: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
              },
            ].map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-green-600">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Commitment to excellence in every product',
              },
              {
                title: 'Innovation',
                description: 'Continuously improving and evolving',
              },
              {
                title: 'Sustainability',
                description: 'Responsible manufacturing practices',
              },
              {
                title: 'Integrity',
                description: 'Honest and ethical business conduct',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-green-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}