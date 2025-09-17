import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2px-4 bg-card relative border-t border-border mt-8pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={15}/>
      </a>
    </footer>
  );
};
