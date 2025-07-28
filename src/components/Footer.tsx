import { Linkedin, Instagram, Youtube, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const navigationLinks = ["Services", "Works", "Testimonial", "Clients", "Blog"];
  
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/fivost/?viewAsMember=true" },
    // { icon: Twitter, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/fivostworld/" },
    { icon: Youtube, href: "#" },
    // { icon: Facebook, href: "#" }
  ];

  return (
    <footer id="footer-section" className="px-6 md:px-12 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <img src="/Fivost-logo.png" alt="Fivost Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-foreground">FIVOST</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
          {navigationLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          © 2024, Fivost, All Right Reserves
        </div>
      </div>
    </footer>
  );
};

export default Footer;