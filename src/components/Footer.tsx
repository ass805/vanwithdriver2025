export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 bg-[rgb(20,66,114)] text-white text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <a 
            href="https://www.facebook.com/SaniaBelyj2001/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[rgb(44,116,179)] transition-colors"
          >
            Sprendimas: GrandChriss
          </a>
        </div>
        <div className="text-right">
          © Galiu Pavežėt {currentYear}. Visos teisės saugomos
        </div>
      </div>
    </footer>
  );
};