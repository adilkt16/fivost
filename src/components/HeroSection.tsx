import { Button } from "@/components/ui/button";
import shapeBlue from "@/assets/shape-blue.png";
import shapeYellow from "@/assets/shape-yellow.png";
import shapeGreen from "@/assets/shape-green.png";
import shapePink from "@/assets/shape-pink.png";
import shapePurple from "@/assets/shape-purple.png";

const HeroSection = () => {
  return (
    <section className="relative px-6 md:px-12 py-16 md:py-24">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-20 w-16 h-16 opacity-60 animate-pulse">
        <img src={shapeBlue} alt="" className="w-full h-full object-contain rotate-45" />
      </div>
      <div className="absolute top-32 left-16 w-12 h-12 opacity-60 animate-pulse delay-100">
        <img src={shapePink} alt="" className="w-full h-full object-contain transform rotate-45" />
      </div>
      <div className="absolute bottom-32 right-32 w-10 h-10 opacity-60 animate-pulse delay-200">
        <img src={shapeGreen} alt="" className="w-full h-full object-contain transform rotate-12" />
      </div>
      <div className="absolute bottom-64 left-24 w-8 h-8 opacity-60 animate-pulse delay-300">
        <img src={shapePurple} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 left-8 w-6 h-6 opacity-40 animate-pulse delay-500">
        <img src={shapeYellow} alt="" className="w-full h-full object-contain transform rotate-90" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-foreground">Where Vision Meets</span>
          <br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
We help businesses and startups turn ideas into impactful digital products. From modern websites to full-featured mobile apps, our team delivers tailored solutions with clean design, solid code, and user-first experiences.

        </p>

        {/* CTA Button */}
        <Button
          variant="cta"
          size="lg"
          className="text-lg px-8 py-4"
          onClick={() => {
            const footer = document.getElementById('footer-section');
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Let's Talk
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;