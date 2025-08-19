import { Button } from './ui/button';

// Font-face declaration for Bower-Bold
const bowerBoldFont = `
@font-face {
    font-family: "Bower-Bold";
    src: url("https://db.onlinewebfonts.com/t/40fccfffa7bc57048f06f7420d6fe7ae.eot");
    src: url("https://db.onlinewebfonts.com/t/40fccfffa7bc57048f06f7420d6fe7ae.eot?#iefix") format("embedded-opentype"),
         url("https://db.onlinewebfonts.com/t/40fccfffa7bc57048f06f7420d6fe7ae.woff2") format("woff2"),
         url("https://db.onlinewebfonts.com/t/40fccfffa7bc57048f06f7420d6fe7ae.woff") format("woff"),
         url("https://db.onlinewebfonts.com/t/40fccfffa7bc57048f06f7420d6fe7ae.ttf") format("truetype"),
         url("https://db.onlinewebfonts.com/t/40fccfffa7bc57048f06f7420d6fe7ae.svg#Bower-Bold") format("svg");
}
`;

const HeroSection = () => {
  // Inject font-face into the document head (only once)
  if (typeof window !== "undefined" && !document.getElementById("bower-bold-font")) {
    const style = document.createElement("style");
    style.id = "bower-bold-font";
    style.innerHTML = bowerBoldFont;
    document.head.appendChild(style);
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen text-black overflow-hidden"
      style={{ fontFamily: '"Bower-Bold", sans-serif' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover opacity-90"
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          <source src="/herovid2.mp4" type="video/mp4" />
          {/* You can add additional <source> tags for different formats if needed */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Section - Content */}
            <div className="animate-fade-in space-y-8">
              <div className="space-y-6">
                <h1
                  className="text-4xl md:text-3xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                  style={{ fontFamily: '"Bower-Bold", sans-serif' }}
                >
                  AI First Consulting, built for <span className="text-blue-500">Orchestration</span>.
                </h1>
                <h2
                  className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg"
                  style={{ fontFamily: '"Bower-Bold", sans-serif' }}
                >
                  We bring <span className="text-blue-500">foresight</span>, AI, and orchestration to turn it into&nbsp;
                  <span className="text-blue-500">results</span>
                </h2>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('eo-framework')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: '"Bower-Bold", sans-serif' }}
                >
                  Explore EO Framework
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('sarah-ai')}
                  className="border-white bg-white text-blue-500 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  style={{ fontFamily: '"Bower-Bold", sans-serif' }}
                >
                  Discover&nbsp;SARAH&nbsp;AI
                </Button>
              </div>
            </div>
            {/* Right Section - Empty for now, can be used for additional content */}
            <div className="flex justify-center lg:justify-end">
              {/* This space can be used for additional content or kept empty */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;