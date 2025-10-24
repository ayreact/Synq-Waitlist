import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WaitlistForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    walletAddress: "",
    telegram: "",
    hasLaptop: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert waitlist submission into database
      const { error } = await supabase.from("waitlist").insert({
        email: formData.email,
        wallet_address: formData.walletAddress,
        telegram: formData.telegram,
        has_laptop: formData.hasLaptop === "yes",
      });

      if (error) {
        // Handle duplicate email
        if (error.code === "23505") {
          toast({
            title: "Already registered",
            description: "This email is already on the waitlist!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully joined the waitlist! 🎉",
          description: "We'll notify you when Synq goes live on Quai Network.",
        });
        setFormData({ email: "", walletAddress: "", telegram: "", hasLaptop: "" });
      }
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-card border-border focus:border-primary transition-colors"
          />
          <p className="text-sm text-muted-foreground">
            Your access credentials when Synq goes live
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="walletAddress" className="text-foreground font-medium">
            Pelagus Wallet Address
          </Label>
          <Input
            id="walletAddress"
            name="walletAddress"
            type="text"
            placeholder="0x..."
            value={formData.walletAddress}
            onChange={handleChange}
            required
            className="bg-card border-border focus:border-primary transition-colors font-mono text-sm"
          />
          <p className="text-sm text-muted-foreground">
            Testnet tokens will be sent to this address
          </p>
          <a
            href="https://chromewebstore.google.com/detail/pelagus/nhccebmfjcbhghphpclcfdkkekheegop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors mt-2"
          >
            <ExternalLink className="w-4 h-4" />
            Get Pelagus Extension
          </a>
        </div>

        <div className="space-y-2">
          <Label htmlFor="telegram" className="text-foreground font-medium">
            Telegram Handle
          </Label>
          <Input
            id="telegram"
            name="telegram"
            type="text"
            placeholder="@username"
            value={formData.telegram}
            onChange={handleChange}
            required
            className="bg-card border-border focus:border-primary transition-colors"
          />
          <p className="text-sm text-muted-foreground">
            For direct updates and community access
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hasLaptop" className="text-foreground font-medium">
            Do you have a laptop?
          </Label>
          <Select
            value={formData.hasLaptop}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, hasLaptop: value }))
            }
            required
          >
            <SelectTrigger className="bg-card border-border focus:border-primary transition-colors">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Beta version is desktop-only
          </p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg h-12 font-heading font-semibold shadow-glow"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
