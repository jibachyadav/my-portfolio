import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(
        "https://68bce1c30f2491613edfe1b5.mockapi.io/Contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "Could not send message. Please check your internet connection.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 relative bg-secondary/30 -mt-12"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-2xl font-bold mb-3 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-small">Email</h4>
                  <a
                    href="mailto:jibachh201@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    jibachh201@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-small">Phone</h4>
                  <a
                    href="tel:+9779816796590"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +9779816796590
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-small">Location</h4>
                  <span className="text-muted-foreground hover:text-primary text-sm">
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-sm text-center">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/jibachh-yadav-np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://www.instagram.com/jibach.yadav.1848"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://github.com/jibachyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Send a Message</h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-small mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-2 py-1 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-small mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-2 py-1 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-small mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-2 py-1 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-sm cursor-pointer",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={8} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
