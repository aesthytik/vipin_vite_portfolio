import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="space-y-6 appear appear-delay-3">
      <h2 className="text-2xl font-display font-bold flex items-center gap-2">
        <Mail className="w-6 h-6" />
        Let's Get in Touch!
      </h2>

      <div className="grid md:grid-cols-[1fr,1.5fr] gap-8">
        <div className="space-y-6">
          <div className="glass-card p-4 flex items-center gap-4">
            <Phone className="w-6 h-6 text-neon-green" />
            <div>
              <div className="text-sm text-gray-400">Phone</div>
              <div>+44 07445179134</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <Mail className="w-6 h-6 text-neon-green" />
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <div>aesthytik@gmail.com</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <MapPin className="w-6 h-6 text-neon-green" />
            <div>
              <div className="text-sm text-gray-400">Location</div>
              <div>Manchester, United Kingdom</div>
            </div>
          </div>
          <div className="glass-card p-4 flex items-center gap-4">
            <Calendar className="w-6 h-6 text-neon-green" />
            <div>
              <div className="text-sm text-gray-400">Schedule a Call</div>
              <a
                href="https://cal.com/aesthytik-vipin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-green hover:underline"
              >
                Book a Meeting
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/aesthytik/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-2 hover:bg-gray-800/50 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5 text-neon-green" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/aesthytik"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-2 hover:bg-gray-800/50 transition-colors"
            >
              <GithubIcon className="w-5 h-5 text-neon-green" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <form
          className="glass-card p-6 space-y-4"
          action="https://formspree.io/f/aesthytik@gmail.com"
          method="POST"
        >
          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="company" placeholder="Company (Optional)" />
          <Input name="role" placeholder="Role/Position (Optional)" />
          <Textarea
            name="message"
            placeholder="Tell me about the opportunity..."
            className="min-h-[120px]"
            required
          />
          <Button
            type="submit"
            className="w-full bg-neon-green hover:bg-neon-green/90 text-black"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
