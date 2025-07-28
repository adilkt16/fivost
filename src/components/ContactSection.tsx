import { Mail, Phone } from "lucide-react";
import shapePink from "@/assets/shape-pink.png";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 py-16">
      {/* Decorative shape */}
      <div className="absolute top-1/2 right-20 w-12 h-12 opacity-40 animate-pulse">
        <img src={shapePink} alt="" className="w-full h-full object-contain transform rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Fivost Logo */}
        <img src="Fivost-logo.png" alt="Fivost Logo" className="mx-auto mb-6 w-14 h-14 object-contain" />
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Let's Talk
          </span>
          <span className="text-foreground"> about your project</span>
          <br />
          <span className="text-foreground">and make your vision a reality!</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Start your journey to digital excellence. Reach
          out to Fivost today and watch your vision come to life!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Card */}
          <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-foreground mb-1">Mail Us</h3>
                <p className="text-muted-foreground">hello@fivost.com</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground">+91 95442 61416</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;