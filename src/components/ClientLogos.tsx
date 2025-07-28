const ClientLogos = () => {
  const clients = [
    { name: "Google", logo: "Google" },
    { name: "Amazon", logo: "amazon" },
    { name: "Flipkart", logo: "Flipkart" },
    { name: "Facebook", logo: "facebook" }
  ];

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Our Happy Clients
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-2xl md:text-3xl font-semibold text-gray-600">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;