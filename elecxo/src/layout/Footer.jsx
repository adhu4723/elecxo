import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
          {/* Know Us */}
          <div>
            <h3 className="font-semibold mb-2">Know Us</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Elexo Earn</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-semibold mb-2">Policy</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Compliance</a></li>
            </ul>
          </div>

          {/* Help You */}
          <div>
            <h3 className="font-semibold mb-2">Help You</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Return & Cancellation</a></li>
              <li><a href="#" className="hover:underline">Membership</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-gray-800 text-sm">
          {/* Mail Us */}
          <div>
            <h3 className="font-semibold">Mail Us</h3>
            <p>elexo@info.com</p>
            <p>elexoindia@info.in</p>
          </div>

          {/* Logo */}
          <div className="text-center md:text-left my-4 md:my-0">
            <h1 className="text-2xl font-bold text-blue-500">Elec<span className="text-black">xo</span></h1>
          </div>

          {/* Contact Us */}
          <div className="text-right">
            <h3 className="font-semibold">Contact Us</h3>
            <p>B-11 D.S.I.D.C Complex, F.I.E</p>
            <p>Patparganj Industrial Area</p>
            <p>New Delhi, Delhi 110092</p>
            <p>011 4242 0976</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
