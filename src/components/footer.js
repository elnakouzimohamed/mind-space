const Footer = () => {
    return (
      <footer className="bg-red-500 text-white py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
   
          <div>
            <h3 className="text-lg font-semibold mb-3">sitemap</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">about us</a></li>
              <li><a href="#" className="hover:underline">our work</a></li>
              <li><a href="#" className="hover:underline">our clients</a></li>
              <li><a href="#" className="hover:underline">our team</a></li>
              <li><a href="#" className="hover:underline">contact us</a></li>
            </ul>
          </div>
  
     
          <div>
            <h3 className="text-lg font-semibold mb-3">offices</h3>
            <ul className="space-y-2">
              <li>dubai, UAE</li>
              <li>beirut, LEBANON</li>
              <li>paris, FRANCE</li>
              <li>cairo, EGYPT</li>
              <li>riyadh, KSA</li>
            </ul>
          </div>
  
      
          <div>
            <h3 className="text-lg font-semibold mb-3">inquiries</h3>
            <a href="mailto:briefme@mindspace-me.com" className="hover:underline">
              briefme@mindspace-me.com
            </a>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-sm">
     
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">mindspace®</span>
            <span className="text-xl">|</span>
            <a href="#" className="text-xl hover:opacity-75">📷</a>
            <a href="#" className="text-xl hover:opacity-75">🔗</a>
          </div>
  
          {/* Privacy & Terms */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">privacy policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">terms & conditions</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  