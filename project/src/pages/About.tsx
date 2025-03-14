import React from 'react';
import { Users, Heart, Book } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-white max-w-2xl">
              We are a vibrant community of believers dedicated to spreading God's love and message of hope.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-gray-600">Building strong relationships and supporting one another in faith and life.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Heart className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Love</h3>
                <p className="text-gray-600">Showing God's love through our actions and service to others.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Book className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Scripture</h3>
                <p className="text-gray-600">Grounding our faith and practice in God's Word.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Founded in 2010, The Communion Hub began with a small group of believers who shared a vision for creating a welcoming space where people could experience God's presence and build meaningful relationships.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into a thriving community that celebrates diversity and embraces all who seek to know God better. Our commitment to authentic worship, biblical teaching, and community service has remained unchanged.
              </p>
              <p className="text-gray-600">
                Today, we continue to focus on making disciples and impacting our community through various outreach programs and ministries. We believe that every person has a unique role to play in God's story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} The Communion Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;