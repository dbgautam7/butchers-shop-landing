import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";

// Main page component for Next.js
const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      <Header />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
