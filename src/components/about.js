import { aboutUsData } from "@/data/about";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-neutral-100 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-800">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Our Story */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Our Story
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Established in 2020, The Butchers Shop has been serving the
              community with the freshest meats, eggs, and seafood. Our team is
              passionate about quality and customer satisfaction, ensuring every
              product meets the highest standards from farm to table. We are
              committed to ethical and sustainable sourcing to bring you the
              best.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Why Choose Us?
            </h3>
            <ul className="space-y-4 text-neutral-700">
              {aboutUsData.map((point, index) => {
                return (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
