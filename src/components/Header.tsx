import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Fivost-logo.png" alt="Fivost Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-foreground">FIVOST</span>
        </div>

        {/* CTA Button */}
        <Button
          variant="cta"
          size="lg"
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
    </header>
  );
};

export default Header;