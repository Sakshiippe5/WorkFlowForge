// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* === FULL-SCREEN ANIMATED BACKGROUND === */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-pink-900/70" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{ y: -100, x: Math.random() * window.innerWidth }}
              animate={{
                y: window.innerHeight + 100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* === HERO SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl"
        >
          WorkFlowForge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xl md:text-3xl text-white drop-shadow-lg font-light"
        >
          Team Process Automation Platform
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-6"
        >
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition transform hover:scale-105"
          >
            Get Started Free
          </Link>
        </motion.div>
      </motion.div>

      {/* === SUBSCRIPTION PLANS === */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-t from-white/95 to-transparent">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Choose Your Plan
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: 'Starter',
              price: 'Free',
              features: ['1 Project', 'Basic Specs', 'Email Support'],
              color: 'from-gray-400 to-gray-600',
              delay: 0.2,
            },
            {
              name: 'Pro',
              price: '$29/mo',
              features: ['Unlimited Projects', 'Advanced Reports', 'Priority Support'],
              color: 'from-blue-500 to-purple-600',
              popular: true,
              delay: 0.4,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              features: ['Custom Workflows', 'API Access', 'Dedicated Manager'],
              color: 'from-indigo-600 to-pink-600',
              delay: 0.6,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border ${
                plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
              } transition-all duration-300 hover:shadow-3xl hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-800 mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: plan.delay + 0.1 * j }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="text-green-500 mr-2">Check</span> {f}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} shadow-lg transition`}
              >
                {plan.price === 'Free' ? 'Get Started' : 'Choose Plan'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;