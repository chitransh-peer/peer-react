import React, { useState } from 'react';

export default function ContactUs() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#071B34] overflow-hidden page-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <span className="text-accent-blue font-semibold tracking-wider text-sm uppercase mb-4">
            Company
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight max-w-4xl leading-tight mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Us</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-[#8ba3bd] font-light">
            To help our clients build stronger and innovative businesses by providing technology professionals and/or software services.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-[#f0f4f8] dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold text-primary-text dark:text-white mb-4">Send us a Message</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Whether you have a strategic initiative to discuss or need specialized talent, our team is ready to listen and engage.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                      <input type="text" id="firstName" className="w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue" placeholder="Jane" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                      <input type="text" id="lastName" className="w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue" placeholder="jane@company.com" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                    <select id="subject" className="w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue">
                      <option>IT Staffing Needs</option>
                      <option>Software Services Consultation</option>
                      <option>General Inquiry</option>
                      <option>Careers</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea id="message" rows="4" className="w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue" placeholder="How can we help you?" required></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-3.5 px-4 rounded-lg shadow-[0_4px_15px_rgba(77,163,255,0.3)] text-sm font-bold uppercase tracking-wider text-white bg-[#4DA3FF] hover:bg-[#3b82f6] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4DA3FF] active:scale-[0.98] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold text-primary-text dark:text-white mb-4">Our Offices</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Strategically located to serve our clients and professionals across time zones.
                </p>
              </div>

              <div className="space-y-8">
                {/* New York Headquarters Card */}
                <div className="relative group rounded-xl overflow-hidden shadow-lg h-64 cursor-default">
                  <img 
                    alt="New York City skyline" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-300 group-hover:pb-8">
                    <div className="flex items-center text-accent-blue mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="material-icons-outlined mr-2">business</span>
                      <span className="uppercase tracking-widest text-xs font-bold">UNITED STATES OF AMERICA</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading transition-transform duration-300 group-hover:-translate-y-1">Headquarters (New York)</h3>
                    <div className="text-slate-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 space-y-1">
                      <p className="flex items-start"><span className="material-icons-outlined text-sm mr-2 mt-0.5">location_on</span> New York, NY</p>
                      <p className="flex items-center"><span className="material-icons-outlined text-sm mr-2">phone</span> +1 (732) 444 4645</p>
                      <p className="flex items-center"><span className="material-icons-outlined text-sm mr-2">email</span> contact@peer-consulting.com</p>
                    </div>
                  </div>
                </div>

                {/* Princeton Corporate Office Card */}
                <div className="relative group rounded-xl overflow-hidden shadow-lg h-64 cursor-default">
                  <img 
                    alt="Princeton New Jersey architecture" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtw2wLRM50o4JStyZE4-zfF-5ufY06qmdsG1buBCJ6f9GPxEKT4NG_7iaNGLXpw3kbJBwQy_HgF5nQpcDoO-tSyf6v-4U7pXMMCZ1zOj4RhXV7Q15qnTJ5oqZ2jrBJZZQerEti4dB2oWJSHNArNFc95VzZWZcMes5MeO7ZzBG11SCDcjQ6HXMqG2b2ZRT-HjniIn34sUrzmoTRPudvstBeh5FrEI5aMOuyvqRIP81e-b_wxSkdNrDcKYrc6vZyd3A-BgdexZYsySNM"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-300 group-hover:pb-8">
                    <div className="flex items-center text-accent-blue mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="material-icons-outlined mr-2">location_city</span>
                      <span className="uppercase tracking-widest text-xs font-bold">UNITED STATES OF AMERICA</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading transition-transform duration-300 group-hover:-translate-y-1">Corporate Office (Princeton)</h3>
                    <div className="text-slate-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 space-y-1">
                      <p className="flex items-start"><span className="material-icons-outlined text-sm mr-2 mt-0.5">location_on</span> 20 Jefferson Plaza, Princeton, NJ 08540</p>
                      <p className="flex items-center"><span className="material-icons-outlined text-sm mr-2">phone</span> +1 (732) 444 4645</p>
                      <p className="flex items-center"><span className="material-icons-outlined text-sm mr-2">email</span> contact@peer-consulting.com</p>
                    </div>
                  </div>
                </div>

                {/* India Branch Office Card */}
                <div className="relative group rounded-xl overflow-hidden shadow-lg h-64 cursor-default">
                  <img 
                    alt="Bengaluru tech park skyline" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNo-BW-2DQFmJOCGPGckOp7-1xu77VC9nixtiHBLgThOnxylbF1LHdcwWXCpWXDmfhXt0L4KOrt_Y-P8kH-2uSmusZ3g-6PxgisKkQbm72PCX_huQ-77QmGFwxrDj9TV-sOX87NYVgCc6gWBiLEC4kmKzD-D1md8Yqgj3PFdjsWLVYsMc5b4RvYfbfaS3jQ1kITitqyZFSd1w6KY-CMtn14ZGSLU_fuGNRqz4VetKBuff06LaEKl8tKBj_mvjbwlKGoCPyN4NsIgCX"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-300 group-hover:pb-8">
                    <div className="flex items-center text-accent-blue mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="material-icons-outlined mr-2">code</span>
                      <span className="uppercase tracking-widest text-xs font-bold">INDIA</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading transition-transform duration-300 group-hover:-translate-y-1">Global Delivery Center</h3>
                    <div className="text-slate-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 space-y-1">
                      <p className="flex items-start"><span className="material-icons-outlined text-sm mr-2 mt-0.5">location_on</span> Vaishnavi Sapphire Center, # 9/36, Bengaluru, Karnataka 560022</p>
                      <p className="flex items-center"><span className="material-icons-outlined text-sm mr-2">phone</span> +91 (924) 758 6996</p>
                      <p className="flex items-center"><span className="material-icons-outlined text-sm mr-2">email</span> contact@peer-consulting.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Toast Popup */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-[#071B34] text-white px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#4DA3FF]/30 flex items-center gap-3 max-w-md">
          <span className="material-icons text-[#4DA3FF] text-2xl animate-bounce">check_circle</span>
          <div>
            <h4 className="font-bold text-sm text-white">Message Delivered</h4>
            <p className="text-xs text-slate-300 mt-0.5">We will get back to you as soon as possible.</p>
          </div>
          <button onClick={() => setShowToast(false)} className="text-slate-400 hover:text-white ml-auto transition-colors">
            <span className="material-icons text-sm">close</span>
          </button>
        </div>
      </div>
    </>
  );
}
