const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-white">STONE</span>
              <span className="text-xs text-gray-400 tracking-widest">SHADOW</span>
            </div>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Stone Shadow. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
