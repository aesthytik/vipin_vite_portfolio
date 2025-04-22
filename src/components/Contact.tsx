
import { Mail, Phone, MapPin } from "lucide-react";
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
              <div className="text-sm text-gray-400">Contact No</div>
              <div>+(02) 4057 2930</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <Mail className="w-6 h-6 text-neon-green" />
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <div>ANDREW@WEBSITE.COM</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <MapPin className="w-6 h-6 text-neon-green" />
            <div>
              <div className="text-sm text-gray-400">Address</div>
              <div>Beverly Hills, Los Angeles, California, USA</div>
            </div>
          </div>
        </div>

        <form className="glass-card p-6 space-y-4">
          <Input placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Textarea placeholder="Message" className="min-h-[120px]" />
          <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-black">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
