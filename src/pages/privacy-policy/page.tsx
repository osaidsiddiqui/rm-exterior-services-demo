export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0a1628] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <div className="space-y-8 text-white/65 text-sm leading-relaxed">
          {[
            {
              title: "Information We Collect",
              content: "When you contact us or request a free estimate, we may collect personal information including your name, phone number, email address, and property address. We use this information solely to respond to your inquiries and provide our services.",
            },
            {
              title: "How We Use Your Information",
              content: "The information you provide is used to: respond to your service inquiries, schedule and coordinate services, send service confirmations and updates, and improve our service quality. We do not sell, trade, or transfer your personal information to third parties.",
            },
            {
              title: "Data Security",
              content: "We implement reasonable security measures to protect your personal information. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.",
            },
            {
              title: "Cookies",
              content: "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may affect some website functionality.",
            },
            {
              title: "Third-Party Links",
              content: "Our website may contain links to third-party websites such as our Facebook page. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
            },
            {
              title: "Contact Us",
              content: "If you have questions about this Privacy Policy, contact us at rmallexteriorservices@gmail.com or call 865-333-0788.",
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
