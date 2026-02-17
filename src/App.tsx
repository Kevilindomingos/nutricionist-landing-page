import { Heart, Leaf, Shield, Star, Users, Zap, Instagram, Mail, MessageCircle, CheckCircle, ArrowRight, Moon, Sun, Award, Coffee, Apple, Activity, Smile, Target, Clock } from 'lucide-react';
import { useState, FormEvent, useEffect } from "react";
import './index.css';

function App() {
  const [nome, setNome] = useState<string>("");
  const [mensagem] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome) {
      alert("Please enter your name");
      return;
    }

    const text = `Hello, my name is ${nome} and I would like to schedule a consultation. ${mensagem}`;

    window.open(
      `https://wa.me/5599999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-amber-50 via-white to-emerald-50'}`}>
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-800/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Dra. Marina Silva
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button className="hidden md:block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                TOP NUTRITIONIST 2024
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Transform Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500"> Relationship</span>
                <br />with Food
              </h1>
              <p className={`text-xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Discover how to nourish your body with love and achieve the well-being 
                you deserve, without restrictive diets or guilt.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-6">
              <input
                type="text"
                placeholder="Your name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={`p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </span>
              </button>
            </form>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-br from-emerald-400 to-amber-400 animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <div>
                <span className={`block font-bold text-2xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  200+
                </span>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Happy clients
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-amber-400/20 rounded-3xl transform rotate-6 blur-2xl"></div>
            <img 
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Confident and healthy woman"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover animate-zoom-in"
            />
            <div className={`absolute -bottom-6 -left-6 p-5 rounded-2xl shadow-2xl backdrop-blur-md ${
              darkMode ? 'bg-gray-800/90' : 'bg-white/90'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 p-3 rounded-full animate-pulse">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Real Well-being
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    No extreme diets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Dra. Marina Silva"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-500 p-4 rounded-full animate-bounce">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">Dr. Marina Silva</span>
              </h2>
              <p className={`text-emerald-600 dark:text-emerald-400 font-semibold text-xl mb-4`}>
                Nutritionist | CRN 12345 | Women's Health Specialist
              </p>
              
              <div className={`space-y-6 text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="animate-fade-in-left">
                  For over 8 years, I've dedicated my career to helping women discover 
                  that it's possible to have a healthy life without giving up the pleasure of eating.
                </p>
                <p className="animate-fade-in-left animation-delay-200">
                  My mission is simple: <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  transform women's relationship with food</span>, creating a sustainable 
                  path to well-being that respects their individual needs and lifestyle.
                </p>
              </div>
              
              <div className={`p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900/30 dark:to-amber-900/30 border border-emerald-200 dark:border-emerald-800 transform hover:scale-105 transition-transform duration-300`}>
                <p className={`text-lg italic ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  "My goal is for you to feel free to live fully, 
                  with energy and self-esteem, while nourishing your body with love."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 to-amber-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              An Approach That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">Really Works</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Forget fad diets. My methodology combines science, individuality, 
              and plenty of support for lasting results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Shield, color: 'emerald', title: 'Personalized Plan', desc: 'Each plan is unique, created especially for your body, routine, and food preferences.' },
              { icon: Heart, color: 'rose', title: 'No Food Terrorism', desc: 'No "forbidden foods" here. I work with nutritional education and real balance.' },
              { icon: Users, color: 'amber', title: 'Continuous Support', desc: 'Humanized follow-up with constant adjustments to ensure your results.' }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } group`}
              >
                <div className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-10 h-10 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{item.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className={`p-10 rounded-3xl shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-3xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              My Differentiators
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Online and In-Person Care',
                'Focus on Sustainable Results',
                'Practical and Tasty Recipes',
                'Women\'s Health Specialization',
                'Flexible Scheduling',
                'Holistic Approach'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{item}</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {index % 2 === 0 ? 'Complete personalized attention' : 'Proven methodology'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">Achieve</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Much more than weight loss. Together we'll transform your life holistically.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, color: 'emerald', title: 'More Energy', desc: 'Wake up with vitality and stay active all day' },
              { icon: Activity, color: 'rose', title: 'Hormonal Balance', desc: 'Regular cycles and milder PMS symptoms' },
              { icon: Smile, color: 'amber', title: 'High Self-esteem', desc: 'Feel confident in your own body' },
              { icon: Target, color: 'purple', title: 'Ideal Weight', desc: 'Achieve and maintain weight naturally' }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900/30 dark:to-${item.color}-900/10 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 shadow-lg`}>
                  <item.icon className={`w-14 h-14 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{item.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-amber-50 to-emerald-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">Stories</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              See what my patients have to say about their journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: 'Ana Carolina', age: 34, title: 'Executive', text: 'Finally found a nutritionist who understands me! Lost 15kg without starving and even learned to cook. My energy is back and I feel incredible.', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
              { name: 'Carla Mendes', age: 28, title: 'Teacher', text: 'Dr. Marina helped me solve digestive issues I had for years. Plus, my PMS improved so much! Highly recommend.', image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg' },
              { name: 'Júlia Santos', age: 41, title: 'Mom & Entrepreneur', text: 'Even with the chaos of motherhood and work, I managed to take care of myself following her guidance. Best part? I can eat everything without guilt!', image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg' }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mr-4 border-4 border-emerald-400"
                  />
                  <div>
                    <h4 className={`font-bold text-lg ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{testimonial.name}</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {testimonial.title}, {testimonial.age}
                    </p>
                  </div>
                </div>
                <p className={`text-lg italic mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>"{testimonial.text}"</p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-down">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Don't wait any longer to have the healthy life you deserve. 
            Click below and schedule your first consultation.
          </p>
          <button
            onClick={() => {
              const text = `I would like to schedule my consultation!`;
              window.open(
                `https://wa.me/5599999999999?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 group animate-bounce-slow"
          >
            <span>Start Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Consultation Process */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">Consultation</span> Works
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A simple and accessible process for you to start your transformation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { num: 1, title: 'First Consultation', desc: 'We talk about your goals, history, and routine. Can be in-person or online.', color: 'emerald' },
                { num: 2, title: 'Personalized Plan', desc: 'We create a unique meal plan together, with practical recipes that adapt to your life.', color: 'rose' },
                { num: 3, title: 'Continuous Follow-up', desc: 'Follow-up appointments to adjust the plan and ensure you\'re on the right track.', color: 'amber' }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className={`bg-${step.color}-100 dark:bg-${step.color}-900/30 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                    darkMode ? `text-${step.color}-400` : `text-${step.color}-600`
                  }`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{step.title}</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`p-10 rounded-3xl shadow-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 to-amber-50'
            }`}>
              <h3 className={`text-3xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>Available Options</h3>
              
              <div className="space-y-6">
                <div className={`p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <Coffee className={`w-8 h-8 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <h4 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>In-Person Consultation</h4>
                  </div>
                  <p className={`mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Office visit with complete evaluation
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Flexible scheduling</p>
                </div>
                
                <div className={`p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <Apple className={`w-8 h-8 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <h4 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Online Consultation</h4>
                  </div>
                  <p className={`mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Video call appointment, ideal for busy schedules
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Same quality, more convenience</p>
                </div>
              </div>
              
              <div className={`mt-8 p-5 rounded-xl ${
                darkMode ? 'bg-emerald-900/50' : 'bg-emerald-100'
              } animate-pulse`}>
                <p className={`text-center font-medium ${
                  darkMode ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  🎯 Special discount on first consultation for new patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 ${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-bold">Dra. Marina Silva</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nutritionist specializing in women's health and sustainable well-being. 
                Transforming lives through conscious and loving nutrition.
              </p>
              <p className="text-sm text-gray-400">
                CRN: 12345 | Education: Federal University of Nutrition
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <div className="space-y-4">
                {[
                  { icon: MessageCircle, text: '(11) 99999-9999' },
                  { icon: Mail, text: 'marina@nutritionist.com' },
                  { icon: Instagram, text: '@drmarinanutritionist' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <item.icon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Important Info</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>📍 Office: 123 Health Street - São Paulo/SP</p>
                </div>
                <p>⏰ Hours: Mon-Fri, 8am to 6pm</p>
                <p>🔒 Online appointments available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Dra. Marina Silva - All rights reserved
              </p>
              <p className="text-gray-500 text-xs text-center max-w-2xl">
                ⚠️ This website does not replace a medical consultation. 
                Always seek professional guidance for health issues.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;