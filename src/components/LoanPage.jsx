export default function LoanPage() {
    return (
      <div className="bg-purple-900 min-h-screen p-8 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-6xl font-bold mb-2">More Savings.</h1>
            <p className="text-lg">Finding the right personal loan doesn't need to be complicated.</p>
          </header>
          
          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-2">
                <div className="bg-gray-800 h-52 rounded overflow-hidden relative">
                  <img 
                    src="https://loanoptions.ai/uploads/home/ms1.gif" 
                    alt="Fast loan application process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-gray-900 font-bold text-xl mb-1">We're fast...</h2>
                <h3 className="text-gray-900 font-bold text-xl mb-4">like super duper fast</h3>
                <p className="text-gray-700">Submit your whole loan application within 8 minutes and get instant pre-approval.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-2">
                <div className="bg-purple-800 h-52 rounded overflow-hidden relative">
                  <img 
                    src="https://loanoptions.ai/uploads/home/ms2.gif" 
                    alt="No hidden fees" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-gray-900 font-bold text-xl mb-1">No hidden stuff...</h2>
                <h3 className="text-gray-900 font-bold text-xl mb-4">cause that ain't cool</h3>
                <p className="text-gray-700">We show you what others won't. Highlighting all fees associated with each lender. Pick products from over 60+ major lenders.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-2">
                <div className="bg-purple-600 h-52 rounded overflow-hidden relative">
                  <img 
                    src="https://loanoptions.ai/uploads/home/ms3.gif" 
                    alt="Badass loan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-gray-900 font-bold text-xl mb-1">Badass loan...</h2>
                <h3 className="text-gray-900 font-bold text-xl mb-4">for a badass customer</h3>
                <p className="text-gray-700">Using AI Technology, our matching of the most tailored loan to your financial position.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }