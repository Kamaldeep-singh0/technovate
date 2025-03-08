import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundLines } from '../components/ui/background-lines';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
     
    
      <BackgroundLines className="relative h-screen flex items-center px-4 bg-black">
     
      
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Showcase Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {' '}Projects
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Connect with peers, get feedback, and attract recruiters with your portfolio of projects.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:text-lg"
              >
                Explore Projects
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        </BackgroundLines>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Feature
              icon={<Star className="w-8 h-8" />}
              title="Showcase Projects"
              description="Create beautiful project portfolios to highlight your best work"
            />
            <Feature
              icon={<Users className="w-8 h-8" />}
              title="Connect with Peers"
              description="Get valuable feedback and collaborate with other students"
            />
            <Feature
              icon={<Zap className="w-8 h-8" />}
              title="Attract Recruiters"
              description="Get discovered by companies looking for talented students"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Feature = ({ icon, title, description }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
  >
    <div className="bg-white/5 p-3 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
    
  </motion.div>
);

export default Home;