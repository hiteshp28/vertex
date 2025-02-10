import React from 'react';
import { Factory, Leaf, Recycle, BarChart3, Award, Shield } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              State-of-the-Art Manufacturing
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Our advanced manufacturing facilities combine cutting-edge technology with decades of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Manufacturing Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From raw material to finished product, every step is optimized for quality and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="h-12 w-12 text-green-600" />,
                title: 'Raw Material Processing',
                description: 'Premium HDPE materials are carefully selected and processed under strict quality control.',
              },
              {
                icon: <Leaf className="h-12 w-12 text-green-600" />,
                title: 'Eco-Friendly Production',
                description: 'Sustainable manufacturing processes that minimize environmental impact.',
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-green-600" />,
                title: 'Quality Testing',
                description: 'Rigorous testing at every stage ensures consistent product quality.',
              },
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Technology</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art machinery and equipment ensure precise manufacturing of HDPE monofilament products.
                We continuously invest in the latest technology to maintain our position as an industry leader.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated production lines for consistent quality',
                  'Advanced quality control systems',
                  'Energy-efficient machinery',
                  'Precision monitoring and control',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                alt="Manufacturing Technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Standards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is reflected in our international certifications and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-green-600" />,
                title: 'ISO 9001:2015',
                description: 'Certified quality management system ensuring consistent product quality.',
              },
              {
                icon: <Shield className="h-12 w-12 text-green-600" />,
                title: 'Quality Testing Lab',
                description: 'In-house testing facility for comprehensive quality control.',
              },
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg flex items-start">
                <div className="mr-6">{cert.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sustainable Manufacturing</h2>
              <p className="text-lg text-green-100 mb-8">
                Our commitment to sustainability goes beyond products. We implement eco-friendly
                practices throughout our manufacturing process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Energy-efficient processes',
                  'Waste reduction initiatives',
                  'Recycling programs',
                  'Water conservation',
                ].map((initiative, index) => (
                  <div key={index} className="flex items-center">
                    <Recycle className="h-5 w-5 mr-3" />
                    <span>{initiative}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                alt="Sustainable Manufacturing"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}