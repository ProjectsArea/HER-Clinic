import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-8" style={{backgroundColor: "rgb(139 75 107 / 0.95)"}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2">HER Clinic</h2>
          <p>123, Main Street, Near City Hospital,<br />
            Springfield, State, 123456, India</p>
          <p className="mt-2">Phone: <a href="tel:+911234567890" className="underline">+91 12345 67890</a></p>
          <p>Email: <a href="mailto:info@herclinic.com" className="underline">info@herclinic.com</a></p>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-2">Follow Us</span>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/herclinicindia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .6 0 1.326v21.348C0 23.4.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.4 24 22.674V1.326C24 .6 23.405 0 22.675 0"/></svg>
            </a>
            <a href="https://www.instagram.com/her_clinic/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.627.387 3.678 1.336c-.95.95-1.21 2.093-1.267 3.374C2.012 5.668 2 6.078 2 12s.012 6.332.07 7.31c.057 1.281.317 2.424 1.267 3.374.95.95 2.093 1.21 3.374 1.267C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.424-.317 3.374-1.267.95-.95 1.21-2.093 1.267-3.374.058-.978.07-1.388.07-7.31s-.012-6.332-.07-7.31c-.057-1.281-.317-2.424-1.267-3.374-.95-.95-2.093-1.21-3.374-1.267C15.668.012 15.259 0 12 0z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCY_KWzcEiYOcj5_HKUB8hBA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-400">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.993 2.993 0 00-2.108-2.12C19.16 3.5 12 3.5 12 3.5s-7.16 0-9.39.566a2.993 2.993 0 00-2.108 2.12C0 8.42 0 12 0 12s0 3.58.502 5.814a2.993 2.993 0 002.108 2.12C4.84 20.5 12 20.5 12 20.5s7.16 0 9.39-.566a2.993 2.993 0 002.108-2.12C24 15.58 24 12 24 12s0-3.58-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
            </a>
            <a href="https://www.lybrate.com/visakhapatnam/clinic/her-clinic-vip-road" target="_blank" rel="noopener noreferrer" aria-label="Lybrate" className="hover:text-orange-400">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.428 2.571H4.571A2.571 2.571 0 002 5.143v13.714A2.571 2.571 0 004.571 21.43h14.857A2.571 2.571 0 0022 18.857V5.143a2.571 2.571 0 00-2.572-2.572zM20.286 18.857a.857.857 0 01-.858.857H4.571a.857.857 0 01-.857-.857V5.143a.857.857 0 01.857-.857h14.857a.857.857 0 01.858.857v13.714z"/></svg>
            </a>
            <a href="https://www.practo.com/visakhapatnam/clinic/pinnacle-city-clinic-siripuram" target="_blank" rel="noopener noreferrer" aria-label="Practo" className="hover:text-blue-200">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.182A8.182 8.182 0 113.818 12 8.192 8.192 0 0112 20.182zm0-14.364A6.182 6.182 0 1018.182 12 6.19 6.19 0 0012 5.818z"/></svg>
            </a>
          </div>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} HER Clinic. All rights reserved.</p>
          <p className="text-xs mt-1">Designed & Developed by HER Clinic Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
