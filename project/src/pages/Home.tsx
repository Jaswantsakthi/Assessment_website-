import React from 'react';
import { ChevronRight, Clock, MapPin, Phone, Users, Heart, Book, Music, Headphones, Coffee } from 'lucide-react';

function Home() {
  const ministries = [
    {
      icon: <Music className="w-12 h-12 text-blue-600" />,
      title: "Worship Ministry",
      description: "Experience powerful worship through contemporary and traditional music."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Youth Ministry",
      description: "Engaging programs for young people to grow in faith and community."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Community Outreach",
      description: "Serving our local community through various charitable initiatives."
    },
    {
      icon: <Book className="w-12 h-12 text-purple-600" />,
      title: "Bible Study",
      description: "Deep dive into Scripture through group studies and discussions."
    },
    {
      icon: <Headphones className="w-12 h-12 text-orange-600" />,
      title: "Prayer Ministry",
      description: "24/7 prayer support and weekly prayer meetings for all needs."
    },
    {
      icon: <Coffee className="w-12 h-12 text-yellow-600" />,
      title: "Fellowship Groups",
      description: "Connect with others in small groups for support and growth."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to<br />The Communion Hub
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Join us in worship and fellowship. Experience the warmth of our community as we grow together in faith and love.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Join Us Today <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to Our Community</h2>
            <p className="text-xl text-gray-600 mb-8">
              The Communion Hub is more than just a church - it's a family of believers committed to growing in faith, serving others, and sharing God's love with everyone we meet.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">To share God's love and make disciples through authentic worship and community.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">To be a beacon of hope and transformation in our community and beyond.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Our Values</h3>
                <p className="text-gray-600">Love, authenticity, community, and service to others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Times Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Join Us in Worship</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Sunday Service</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Experience uplifting worship, relevant teaching, and warm fellowship every Sunday morning.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Bible Study</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>Wednesday 6:30 PM - 8:00 PM</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Dive deeper into God's Word through interactive study and meaningful discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ministries Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Ministries</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {ministries.map((ministry, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    {ministry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{ministry.title}</h3>
                  <p className="text-gray-600">{ministry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Your Next Steps</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3">Join a Service</h3>
                <p className="text-gray-600">Experience worship and fellowship with our community.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3">Connect Group</h3>
                <p className="text-gray-600">Find your place in a small group for fellowship.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3">Serve Others</h3>
                <p className="text-gray-600">Discover opportunities to serve in our community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold text-xl">Location</h3>
                    <p className="text-gray-600">123 Faith Street, Worship City, WC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold text-xl">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-4">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
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
    </>
  );
}

export default Home;