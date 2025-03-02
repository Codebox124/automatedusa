export default function LocationPage() {
    return (
        <div
            className="relative bg-black text-white py-16 px-6"
            style={{
                backgroundImage: `url('/your-background-image.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-4">Location and Hours</h2>

                    <p className="text-lg font-semibold">Call us</p>
                    <p className="text-sm uppercase font-medium">BY APPOINTMENT ONLY</p>
                    <a
                        href="tel:+14693300423"
                        className="text-blue-400 text-lg font-semibold"
                    >
                        +1 469 330 0423
                    </a>

                    <div className="mt-4">
                        <p className="text-lg font-semibold">Location</p>
                        <p className="text-sm">
                        
                        13151 Emily Rd Suite 200, <br /> Dallas, TX 75240, United States
                        </p>
                    </div>

                    <div className="mt-4">
                        <p className="text-lg font-semibold">Opening Hours</p>
                        <p className="text-sm">
                            Monday - Friday: <strong>9:30am to 6:30pm</strong> <br />
                            Saturday: <strong>12:00pm to 5:30pm</strong> <br />
                            Sunday: <strong>CLOSED</strong>
                        </p>
                    </div>
                </div>

                {/* Right Section: Google Map */}
                <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.9194370104356!2d-96.7670528!3d32.926726699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c20390a3f69f1%3A0x640c07144ef710c1!2sAutomated%20Bookkeeping%20%26%20Tax%20Services!5e0!3m2!1sen!2sng!4v1740894215167!5m2!1sen!2sng" width="600" height="450"   allowFullScreen loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
            </div>
        </div>
    );
}
