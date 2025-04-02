
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-medivault-blue">
        <Navbar />
        <div className="py-20 px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About MediVault</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Simplifying health report management for patients and diagnostic centers
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At MediVault, our mission is to simplify healthcare by providing secure, accessible, and efficient solutions for managing health reports. We believe that everyone should have easy access to their medical information.
            </p>
            <p className="text-lg text-gray-700">
              By bridging the gap between diagnostic centers and patients, we create a seamless experience that saves time, reduces stress, and improves healthcare outcomes.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              MediVault was founded in 2023 by a team of healthcare professionals and technology experts who recognized the challenges patients face in managing their medical reports and the inefficiencies in the traditional report delivery system.
            </p>
            <p className="text-lg text-gray-700">
              We have since grown to serve thousands of patients and partner with hundreds of diagnostic centers across the country, continually improving our platform based on user feedback and technological advancements.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Security & Privacy</h3>
                <p className="text-gray-700">
                  We prioritize the security and confidentiality of your medical data with state-of-the-art encryption and strict privacy policies.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p className="text-gray-700">
                  We believe healthcare information should be easily accessible to patients whenever and wherever they need it.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p className="text-gray-700">
                  We continuously optimize our processes to save time for both patients and healthcare providers.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We embrace technology and innovation to improve the healthcare experience for everyone.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
