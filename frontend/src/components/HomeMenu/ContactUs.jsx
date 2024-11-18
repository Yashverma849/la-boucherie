import ContactInfo from "../ContactUsPage/ContactInfo";
import Suggestion from "../ContactUsPage/Suggestion";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 px-4 py-8">
      {/* Contact Info Section */}
      <div className="w-full md:w-2/3 px-5 py-2">
        <ContactInfo />
      </div>

      {/* Suggestion Section */}
      <div className="w-full md:w-1/3 px-5 py-2">
        <Suggestion />
      </div>
    </div>
  );
}
