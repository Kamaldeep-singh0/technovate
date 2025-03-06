import React, { useState } from 'react';
import { UserRoundPlus, LogIn, Mail, Lock, User, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Auth = () => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Student'  
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
     
      const endpoint = `${API_BASE_URL}/api/auth${authMode === 'login' ? '/login' : '/signup'}`;
      
     
      const requestBody = authMode === 'login' 
        ? { 
            email: formData.email, 
            password: formData.password 
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Store both token and user data based on the API response structure
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Navigate to home page on success
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred during authentication');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      {/* Hero Image Background with Overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="/api/placeholder/1920/1080"
          alt="Hero background" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" />
      </div>

      <div className="w-full max-w-md p-8 m-4 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl relative">
        <div className="flex justify-center mb-8">
          {authMode === 'login' ? (
            <LogIn className="w-12 h-12 text-white" />
          ) : (
            <UserRoundPlus className="w-12 h-12 text-white" />
          )}
        </div>
        
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {authMode === 'signup' && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-white/40"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-white/40"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-white/40"
              required
            />
          </div>

          {authMode === 'signup' && (
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-white/40 appearance-none"
                required
              >
                <option value="student">Student</option>
                <option value="company">Company</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-white text-black font-semibold rounded-lg shadow-lg transform transition hover:bg-white/90 hover:scale-[1.02] hover:shadow-white/20"
          >
            {authMode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
            className="text-white/70 hover:text-white transition-colors"
          >
            {authMode === 'login' 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;