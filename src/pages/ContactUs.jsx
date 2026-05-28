import React, { useState } from 'react';

// ✅ Use the /exec URL from Deploy → Manage Deployments (NOT /dev)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyi84MJjjlAfM-hHH0V7QbuZUpebgBFYnejXISluHRxBm9QpHMad8IXDXEL1v70iW9ccQ/exec';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'IT Staffing Needs',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // ✅ FIX: Use e.target.name as primary key (more robust), fallback to id
  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name || id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // ✅ URLSearchParams works with no-cors; JSON body does NOT
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, val]) => params.append(key, val));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: 'IT Staffing Needs', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        First Name
                      </label>
                      {/* ✅ FIX: Added name attribute to all inputs */}
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm px-3 py-2 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]"
                        placeholder="Jane"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm px-3 py-2 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm px-3 py-2 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    {/* ✅ FIX: Added name + explicit value on each <option> */}
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm px-3 py-2 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]"
                    >
                      <option value="IT Staffing Needs">IT Staffing Needs</option>
                      <option value="Software Services Consultation">Software Services Consultation</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Careers">Careers</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm px-3 py-2 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF]"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-lg shadow-[0_4px_15px_rgba(77,163,255,0.3)] text-sm font-bold uppercase tracking-wider text-white bg-[#4DA3FF] hover:bg-[#3b82f6] hover:shadow-[0_8px_25px_rgba(77,163,255,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4DA3FF] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
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

      {/* Success Toast */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${status === 'success' ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-[#071B34] text-white px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#4DA3FF]/30 flex items-center gap-3 max-w-md">
          <span className="material-icons text-[#4DA3FF] text-2xl animate-bounce">check_circle</span>
          <div>
            <h4 className="font-bold text-sm text-white">Message Delivered!</h4>
            <p className="text-xs text-slate-300 mt-0.5">We've received your message and will get back to you soon.</p>
          </div>
          <button onClick={() => setStatus('idle')} className="text-slate-400 hover:text-white ml-auto transition-colors">
            <span className="material-icons text-sm">close</span>
          </button>
        </div>
      </div>

      {/* Error Toast */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${status === 'error' ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-[#071B34] text-white px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-red-500/30 flex items-center gap-3 max-w-md">
          <span className="material-icons text-red-400 text-2xl">error_outline</span>
          <div>
            <h4 className="font-bold text-sm text-white">Submission Failed</h4>
            <p className="text-xs text-slate-300 mt-0.5">Something went wrong. Please try again or email us directly.</p>
          </div>
          <button onClick={() => setStatus('idle')} className="text-slate-400 hover:text-white ml-auto transition-colors">
            <span className="material-icons text-sm">close</span>
          </button>
        </div>
      </div>
    </>
  );
}