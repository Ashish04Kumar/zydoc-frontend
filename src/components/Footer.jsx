import { assets } from "@/assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            ZyDoc is your trusted partner for seamless doctor appointments. We
            aim to make healthcare more accessible by connecting patients with
            verified doctors across specialties. Book consultations anytime,
            anywhere with confidence and convenience
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+918400478516</li>
            <li>ashishishere11@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2025 ZyDoc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
