const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AyurVaid. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
