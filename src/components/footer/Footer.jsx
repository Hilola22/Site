import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
