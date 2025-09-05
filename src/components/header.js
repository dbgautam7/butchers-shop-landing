import React from "react";

const Header = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-cover bg-center bg-[#4f46e5]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute top-8 left-8 z-20 flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.188 8.019c-1.428-1.428-3.085-2.228-4.73-2.228-.621 0-1.229.124-1.79.362-2.126.903-4.321-1.056-5.836-3.267-1.127-1.636-2.502-1.928-4.01-1.246-1.508.682-2.457 2.062-2.001 3.51.456 1.447 1.831 2.368 3.518 2.067 1.423-.25 2.509.673 3.011 2.058.502 1.385.111 2.822-1.077 3.869-1.328 1.155-2.228 2.571-2.91 4.145-.681 1.574-.962 3.255-.785 4.896.177 1.64.673 3.245 1.574 4.708.902 1.463 2.058 2.721 3.491 3.635 1.433.914 2.898 1.428 4.385 1.527 1.488.1 2.91-.077 4.218-.545 1.308-.468 2.454-1.282 3.391-2.417.937-1.135 1.602-2.522 1.996-4.045.394-1.523.447-3.13-.153-4.636-.6-1.506-1.656-2.829-2.898-3.834-1.242-1.006-2.618-1.748-4.01-2.193-1.392-.444-2.79-.62-4.145-.521-.77.054-1.5.215-2.186.476.666-1.011 1.258-2.016 1.777-3.044.519-1.028.937-2.046 1.257-3.056.32-1.011.516-1.996.64-2.98.125-.985.176-1.968.151-2.946-.025-.978-.151-1.944-.377-2.883-.226-.939-.553-1.849-.982-2.709-.429-.86-.967-1.655-1.583-2.368-1.564 1.292-2.893 2.768-3.957 4.29-1.064 1.522-1.879 3.051-2.441 4.606-.563 1.554-.888 3.125-.973 4.685-.085 1.56.096 3.094.521 4.59.424 1.496.994 2.915 1.777 4.24.783 1.325 1.714 2.553 2.79 3.635 1.077 1.082 2.274 2.016 3.593 2.799 1.32 0 2.535-.297 3.64-.845 1.105-.548 2.091-1.353 2.951-2.396.86-1.043 1.58-2.285 2.158-3.705.578-1.42.923-3.003.923-4.654 0-.177.01-.354-.01-.527z" />
        </svg>
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Butcher&apos;s Shop
        </h1>
        <p className="text-lg md:text-xl font-light drop-shadow-lg max-w-2xl mx-auto">
          Experience the difference that premium quality and traditional
          craftsmanship make. We source the finest meats for the perfect meal.
        </p>
        <a
          onClick={(e) => {
            e.preventDefault();
            const productsSection = document.getElementById("products");
            if (productsSection) {
              productsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          href="#products"
          className="mt-8 inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Explore Our Selection
        </a>
      </div>
    </header>
  );
};

export default Header;
