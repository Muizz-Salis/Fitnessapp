export default function ContactSection() {
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Contact */}
            <div className="border border-orange-500 p-10 flex flex-col items-center transform skew-y-6 md:skew-y-3 h-80 flex justify-center">
              <div className="text-orange-500 text-5xl mb-6">📞</div>
              <h3 className="text-xl font-semibold">BY PHONE</h3>
              <p className="mt-2 text-base">Prefer to talk? Call us at</p>
              <p className="text-lg font-medium">+234 8161329340</p>
              <p className="text-sm text-gray-400">[8AM - 6PM]</p>
            </div>
            {/* Email Contact */}
            <div className="border border-orange-500 p-10 flex flex-col items-center transform skew-y-6 md:skew-y-3 h-80 flex justify-center">
              <div className="text-orange-500 text-5xl mb-6">✉️</div>
              <h3 className="text-xl font-semibold">BY EMAIL</h3>
              <p className="mt-2 text-base">Reach out to us at</p>
              <a href="mailto:support@yanyanfitness.com" className="text-orange-500 underline text-lg">support@yanyanfitness.com</a>
              <p className="text-sm text-gray-400">We respond within 24 hours!</p>
            </div>
            {/* Live Chat */}
            <div className="border border-orange-500 p-10 flex flex-col items-center transform skew-y-6 md:skew-y-3 h-80 flex justify-center">
              <div className="text-orange-500 text-5xl mb-6">💬</div>
              <h3 className="text-xl font-semibold">LIVE CHAT</h3>
              <p className="mt-2 text-base text-center">For immediate assistance, use the live chat feature in the app for quick responses from our support team.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  