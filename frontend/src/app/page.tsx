'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<'loading' | 'online' | 'offline'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check backend health
    axios.get('/api/health')
      .then(() => {
        setBackendStatus('online');
        setMessage('✅ Backend is connected!');
      })
      .catch(() => {
        setBackendStatus('offline');
        setMessage('⚠️ Backend is offline. Check your API URL.');
      });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          🚀 The Big Project
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-indigo-100">
          Full-Stack Agency Website
        </p>
        <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <p className="text-lg font-semibold">Stack</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Next.js 14</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">TypeScript</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Node.js</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">MongoDB</span>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-indigo-200">Backend Status:</p>
          <p className={`font-semibold ${
            backendStatus === 'online' ? 'text-green-300' : 
            backendStatus === 'offline' ? 'text-red-300' : 'text-yellow-300'
          }`}>
            {message || 'Checking connection...'}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a 
            href="/contact" 
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:shadow-xl transition shadow-lg"
          >
            Start a Project →
          </a>
          <a 
            href="https://github.com/goku/The-big-project-v2" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
