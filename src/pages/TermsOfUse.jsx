import React from 'react';

export default function TermsOfUse() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#071B34] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
          <span className="text-accent-blue font-semibold tracking-wider text-sm uppercase mb-4">
            Legal Information
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight max-w-4xl leading-tight mb-6">
            Terms of Use
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#f0f4f8] dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none font-display space-y-6 md:space-y-8 text-slate-700 dark:text-slate-300">
              
              <p className="leading-relaxed">
                Welcome to our website. By continuing to browse this website you are agreeing to comply with and be bound by the following terms and conditions of use. These terms along with our privacy policy govern the relationship between Peer Consulting Resources and users of this website. The term “Peer Consulting Resources” or “Peer” or “us” or “we” refers to the owner of the website. The term “you” refers to the user or viewer of our website. The use of this website is subject to the following terms.
              </p>
              
              <p className="leading-relaxed">
                The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>
              
              <p className="leading-relaxed">
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
              </p>
              
              <p className="leading-relaxed">
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>
              
              <p className="leading-relaxed">
                All trademarks reproduced in this website which are not the property of, or licensed to, the operator is acknowledged on the website.
              </p>
              
              <p className="leading-relaxed">
                Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
              </p>

              <p className="leading-relaxed">
                From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
              </p>

              <p className="leading-relaxed">
                You may not create a link to this website from another website or document without Peer Consulting Resources’ prior written consent.
              </p>

              <p className="leading-relaxed">
                Your use of this website and any dispute arising out of such use of the website is subject to the laws of the United States of America.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
