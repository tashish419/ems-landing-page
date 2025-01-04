import { ArrowRight, PieChart, DollarSign, TrendingUp, Shield, Zap, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white h-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl ss:text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              AI-Powered Financial Insights at Your Fingertips
            </h1>
            <p className="text-xl ss:text-2xl mb-6 text-orange-200">
              Unlock your financial potential with Finwell's cutting-edge AI
              technology
            </p>
            <div className="flex flex-col xs:flex-row space-y-4 xs:space-y-0 xs:space-x-4">
              <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-orange-500 text-orange-400 font-semibold py-3 px-6 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4 ss:gap-6">
              <FeatureCard icon={<PieChart />} title="Smart Budgeting" />
              <FeatureCard icon={<DollarSign />} title="Expense Tracking" />
              <FeatureCard icon={<TrendingUp />} title="Investment Insights" />
              <FeatureCard icon={<ArrowRight />} title="Personalized Advice" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Finwell?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReasonCard
              icon={<Shield className="w-12 h-12 text-orange-400" />}
              title="Secure & Private"
              description="Your financial data is protected with bank-level security and encryption."
            />
            <ReasonCard
              icon={<Zap className="w-12 h-12 text-orange-400" />}
              title="Lightning Fast"
              description="Get real-time insights and analysis powered by our advanced AI algorithms."
            />
            <ReasonCard
              icon={<User className="w-12 h-12 text-orange-400" />}
              title="Community Driven"
              description="Join a community of savvy investors and financial experts for support and advice."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-opacity-70 transition duration-300 border border-orange-700">
      <div className="text-4xl mb-2 text-orange-400">{icon}</div>
      <h3 className="font-semibold text-orange-200">{title}</h3>
    </div>
  );
};

const ReasonCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 flex flex-col items-center text-center hover:bg-opacity-50 transition duration-300 border border-orange-800">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-orange-300">
        {title}
      </h3>
      <p className="text-orange-100">{description}</p>
    </div>
  );
};

export default HeroSection;
