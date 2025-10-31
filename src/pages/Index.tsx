import { Badge, Network, MessageCircle } from "lucide-react";
import logoMini from "@/assets/logo-mini.png";
import synqLogo from "@/assets/synq-logo.png";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-8">
              <img
                src={synqLogo}
                alt="Synq"
                className="h-16 md:h-20"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Social Dapp on{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Quai Network
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experience the future of decentralized social interaction with
                Quai Name Service, cross-chain bridging, and onchain community
                engagement
              </p>
            </div>

            <div className="inline-flex items-center   gap-2 px-4 py-2 rounded bg-opacity-10 backdrop-blur-sm border-2 border-border">
              <span className="text-sm font-medium text-foreground">
                Join the Waitlist - Early Access Coming Soon
              </span>
              {/* Social Media Buttons */}
              <div className="flex gap-4 ml-4">
                <a
                  href="https://t.me/synq_web3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Join our Telegram"
                >
                  <i className="fab fa-telegram fa-2x"></i>
                </a>
                <a
                  href="https://x.com/synq_web3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Follow us on X"
                >
                  <i className="fab fa-x-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
              What Synq Offers
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={<Badge className="w-6 h-6 text-white" />}
                title="QNS - Quai Name Service"
                description="Claim your unique identity on Quai Network with human-readable addresses that make blockchain interaction seamless and intuitive"
              />
              <FeatureCard
                icon={<Network className="w-6 h-6 text-white" />}
                title="Cross-Chain Bridge"
                description="Seamlessly bridge assets between Quai Network and other L1s and L2s with secure, fast, and efficient cross-chain communication"
              />
              <FeatureCard
                icon={<MessageCircle className="w-6 h-6 text-white" />}
                title="Social Dapp"
                description="Connect and interact with the Quai community entirely onchain. Your social graph, fully decentralized and transparent"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl bg-card/30 backdrop-blur-sm border border-border p-8 md:p-12 shadow-card">
              <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-3xl" />
              <div className="relative z-10 space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    Be Among the First
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Join our waitlist to get early access to Synq, receive
                    testnet tokens, and be part of the future of decentralized
                    social network on Quai
                  </p>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Synq. Building the future of social interaction on Quai Network.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;