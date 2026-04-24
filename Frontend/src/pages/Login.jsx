import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Hammer, ShieldCheck, User as UserIcon } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('customer'); // 'customer' or 'technician'

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4 md:p-10">
      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-2xl shadow-blue-100 overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side - Dynamic Branding */}
        <div className={`md:w-1/2 p-12 text-white flex flex-col justify-between relative transition-all duration-700 ${role === 'customer' ? 'bg-blue-600' : 'bg-indigo-600'}`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-16 group">
              <div className="bg-white p-2.5 rounded-xl text-blue-600 group-hover:scale-110 transition-transform shadow-lg">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">FixIt<span className="opacity-80">Pro</span></span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                {role === 'customer' ? (
                  <>Repair Your <br /> Home with Trust.</>
                ) : (
                  <>Help Others <br /> Fix Their Home.</>
                )}
              </h1>
              <p className="text-blue-50 text-lg max-w-sm leading-relaxed">
                {role === 'customer' 
                  ? "Sign in to book expert repairs with verified technicians and genuine warranty-backed parts."
                  : "Sign in to manage your assigned repair tasks, update service statuses, and view customer feedback."}
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">100% Secure Platform</p>
                  <p className="text-sm opacity-80">Your data and privacy are our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="md:w-1/2 p-10 md:p-20 bg-white">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-500 font-medium">Please enter your details to sign in</p>
          </div>

          {/* Role Switcher */}
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-10">
            <button 
              onClick={() => setRole('customer')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${role === 'customer' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <UserIcon className="w-5 h-5" />
              Customer
            </button>
            <button 
              onClick={() => setRole('technician')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${role === 'technician' ? 'bg-white shadow-md text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Hammer className="w-5 h-5" />
              Technician
            </button>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="email" 
                  className="w-full pl-14 pr-6 py-4.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-semibold"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline transition-all">Forgot password?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full pl-14 pr-14 py-4.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-semibold"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button className={`w-full py-5 rounded-2xl font-black text-lg text-white shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group ${role === 'customer' ? 'bg-blue-600 shadow-blue-200 hover:bg-blue-700' : 'bg-indigo-600 shadow-indigo-200 hover:bg-indigo-700'}`}>
              Sign In to Account
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-500 font-bold">
              New to FixItPro? <Link to="/register" className="text-blue-600 hover:underline ml-1">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
