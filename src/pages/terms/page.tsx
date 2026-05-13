export default function TermsPage() {
  return (
    <div className="bg-[#0a1628] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white tracking-tight mb-3">Terms & Conditions</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <div className="space-y-8 text-white/65 text-sm leading-relaxed">
          {[
            {
              title: "Acceptance of Terms",
              content: "By accessing and using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
            },
            {
              title: "Services",
              content: "RM Exterior Services provides professional exterior cleaning services including pressure washing, soft washing, roof cleaning, gutter cleaning, and window cleaning. Service availability is subject to weather conditions, scheduling, and geographic location within our service area.",
            },
            {
              title: "Estimates and Pricing",
              content: "Free estimates are provided based on information submitted by the customer. Final pricing may vary upon on-site assessment. We will always communicate any pricing differences before beginning work. Estimates are valid for 30 days from the date issued.",
            },
            {
              title: "Customer Responsibilities",
              content: "Customers are responsible for providing accurate property information, ensuring access to the service areas, securing pets and clearing personal items from work areas, and notifying us of any fragile items, special concerns, or known hazards on the property.",
            },
            {
              title: "Satisfaction Guarantee",
              content: "We are committed to providing high-quality results. If you are not satisfied with our work, please notify us within 24 hours of service completion and we will return to address any concerns at no additional charge.",
            },
            {
              title: "Liability",
              content: "RM Exterior Services is fully insured. We are not liable for pre-existing damage or conditions. Customers acknowledge that exterior cleaning may reveal underlying damage that was previously hidden by dirt or biological growth.",
            },
            {
              title: "Cancellations",
              content: "We request at least 24 hours notice for cancellations or rescheduling. We reserve the right to reschedule services due to inclement weather or unforeseen circumstances.",
            },
            {
              title: "Contact",
              content: "For questions regarding these terms, contact us at rmallexteriorservices@gmail.com or call 865-333-0788.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
