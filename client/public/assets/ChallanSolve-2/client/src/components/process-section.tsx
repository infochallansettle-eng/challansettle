export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4" data-testid="text-process-title">
            Our Simple 3-Step Process
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto" data-testid="text-process-description">
            We've streamlined the challan settlement process to make it as easy as possible for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Process Step 1 */}
          <div className="text-center relative" data-testid="card-process-1">
            <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
              1
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                alt="Legal professional organizing and compiling traffic violation documents" 
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-testid="img-process-1"
              />
              <h3 className="text-xl font-semibold mb-4" data-testid="text-process-1-title">Document Compilation</h3>
              <p className="text-neutral-600" data-testid="text-process-1-description">
                We collect and compile all necessary documents related to your traffic challan, ensuring everything is properly organized and ready for legal proceedings.
              </p>
            </div>
          </div>
          
          {/* Process Step 2 */}
          <div className="text-center relative" data-testid="card-process-2">
            <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
              2
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                alt="Traffic violation ticket and legal filing documents being processed" 
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-testid="img-process-2"
              />
              <h3 className="text-xl font-semibold mb-4" data-testid="text-process-2-title">Document Filing</h3>
              <p className="text-neutral-600" data-testid="text-process-2-description">
                Our legal team files all compiled documents with the appropriate court authorities, following proper legal procedures and timelines.
              </p>
            </div>
          </div>
          
          {/* Process Step 3 */}
          <div className="text-center relative" data-testid="card-process-3">
            <div className="bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
              3
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                alt="Court building exterior representing legal proceedings and fine deposit process" 
                className="w-full h-48 object-cover rounded-lg mb-6"
                data-testid="img-process-3"
              />
              <h3 className="text-xl font-semibold mb-4" data-testid="text-process-3-title">Court Appearance & Fine Deposit</h3>
              <p className="text-neutral-600" data-testid="text-process-3-description">
                We appear before the court on your behalf, handle all legal proceedings, and deposit the required fine to complete the settlement process.
              </p>
            </div>
          </div>
          
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-10 left-1/4 w-1/2 h-0.5 bg-neutral-300 z-0"></div>
          <div className="hidden md:block absolute top-10 right-1/4 w-1/2 h-0.5 bg-neutral-300 z-0"></div>
        </div>
      </div>
    </section>
  );
}
