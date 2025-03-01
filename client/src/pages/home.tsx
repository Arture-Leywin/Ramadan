import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { GreetingCard } from "@/components/greeting-card";
import { PatternOverlay } from "@/components/pattern-overlay";
import { CrescentMoonIcon, StarIcon, LanternIcon } from "@/components/ramadan-icons";
import html2canvas from 'html2canvas';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  pattern: z.enum(["geometric", "arabesque", "stars", "mosque", "lanterns"]).default("geometric")
});

export default function Home() {
  const [name, setName] = useState<string>("");
  const [selectedPattern, setSelectedPattern] = useState<string>("geometric");
  const [isDownloading, setIsDownloading] = useState(false);
  const greetingCardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      pattern: "geometric"
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setName(values.name);
    setSelectedPattern(values.pattern);
  }

  const handleDownload = async () => {
    if (!greetingCardRef.current) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(greetingCardRef.current, {
        scale: 2, // Higher quality
        backgroundColor: null,
        logging: false
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `ramadan-greeting-${name.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = image;
      link.click();

      toast({
        title: "Success!",
        description: "Your greeting card has been downloaded.",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Could not download the greeting card.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3E9] relative overflow-hidden">
      <PatternOverlay />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#C19B6C]/20"
        >
          <h1 className="text-4xl md:text-5xl text-center font-playfair text-[#2C3E50] mb-8">
            Ramadan Greeting Generator
          </h1>

          {!name ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className="border-[#C19B6C] focus:border-[#0D4C3E]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pattern"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[#2C3E50]">Choose a Pattern</Label>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-3 gap-4"
                        >
                          {["geometric", "arabesque", "stars", "mosque", "lanterns"].map((pattern) => (
                            <div key={pattern}>
                              <RadioGroupItem
                                value={pattern}
                                id={pattern}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={pattern}
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary capitalize"
                              >
                                <span>{pattern}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#0D4C3E] hover:bg-[#0D4C3E]/90"
                >
                  Generate Greeting
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              <div ref={greetingCardRef}>
                <GreetingCard name={name} selectedPattern={selectedPattern} />
              </div>
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="bg-[#C19B6C] hover:bg-[#8C5E2A] px-8 py-3 rounded-full relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <CrescentMoonIcon className="w-5 h-5" />
                      {isDownloading ? "Downloading..." : "Download Greeting"}
                      <StarIcon className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-[#8C5E2A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Button>

                  <div className="absolute -top-3 -left-3 w-6 h-6 text-[#C19B6C]">
                    <LanternIcon className="w-full h-full animate-bounce" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 text-[#C19B6C]">
                    <LanternIcon className="w-full h-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}