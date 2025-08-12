import { UserCheck, FileText, Gavel } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4" data-testid="text-services-title">
            Why Choose ChallanSettle?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto" data-testid="text-services-description">
            We provide comprehensive legal services for traffic challan settlement with guaranteed results and no court appearance required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid="card-service-1">
            <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UserCheck className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-service-1-title">No Personal Appearance</h3>
            <p className="text-neutral-600 leading-relaxed" data-testid="text-service-1-description">
              We handle all court proceedings on your behalf. You don't need to take time off work or visit the court personally.
            </p>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid="card-service-2">
            <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FileText className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-service-2-title">Complete Documentation</h3>
            <p className="text-neutral-600 leading-relaxed" data-testid="text-service-2-description">
              We compile all necessary documents, file them properly, and ensure all legal requirements are met for your case.
            </p>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid="card-service-3">
            <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Gavel className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-service-3-title">Expert Court Representation</h3>
            <p className="text-neutral-600 leading-relaxed" data-testid="text-service-3-description">
              Our experienced legal team appears before the court, handles all proceedings, and deposits the fine on your behalf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
