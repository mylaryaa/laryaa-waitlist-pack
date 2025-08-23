import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  email: string;
  company_name: string;
  industry: string;
  company_size: string;
  role: string;
  revenue_range: string;
  primary_channel: string;
  location: string;
  website_url: string;
  whatsapp: string;
  alt_email: string;
  needs: string;
  honeypot: string;
  consent: boolean;
}

const Reserve = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    company_name: "",
    industry: "",
    company_size: "",
    role: "",
    revenue_range: "",
    primary_channel: "",
    location: "",
    website_url: "",
    whatsapp: "",
    alt_email: "",
    needs: "",
    honeypot: "",
    consent: false,
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.email.trim() && formData.consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) return;
    
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    try {
      // Save to Supabase waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          email: formData.email,
          consent: formData.consent,
          // Store additional data as JSON in a metadata column if needed
          // For now, we're only saving email and consent as per the current table structure
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      toast({
        title: "Success!",
        description: "Thanks! You're on the waitlist. We'll reach out soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        email: "",
        company_name: "",
        industry: "",
        company_size: "",
        role: "",
        revenue_range: "",
        primary_channel: "",
        location: "",
        website_url: "",
        whatsapp: "",
        alt_email: "",
        needs: "",
        honeypot: "",
        consent: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-questionnaire-bg text-questionnaire-text antialiased min-h-screen">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link 
          to="/" 
          className="text-sm text-questionnaire-muted hover:underline hover:text-questionnaire-text transition-colors"
        >
          ← Back to Laryaa
        </Link>
        
        <h1 className="mt-4 text-3xl font-bold">Reserve Your Spot</h1>
        <p className="mt-2 text-questionnaire-muted">
          Tell us a little about your company.{" "}
          <span className="font-medium">Email is required</span>; everything else is optional (but helpful).
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => handleInputChange("honeypot", e.target.value)}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="company_name">Company name</Label>
              <Input
                id="company_name"
                type="text"
                placeholder="Acme Pvt Ltd"
                value={formData.company_name}
                onChange={(e) => handleInputChange("company_name", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleInputChange("industry", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="edtech">EdTech</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="company_size">Company size</Label>
              <Select
                value={formData.company_size}
                onValueChange={(value) => handleInputChange("company_size", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="role">Your role</Label>
              <Input
                id="role"
                type="text"
                placeholder="Founder / Sales Lead"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="revenue_range">Revenue range</Label>
              <Select
                value={formData.revenue_range}
                onValueChange={(value) => handleInputChange("revenue_range", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Prefer not to say" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under Rs.50L">Under Rs.50L</SelectItem>
                  <SelectItem value="Rs.50L to Rs.5Cr">Rs.50L to Rs.5Cr</SelectItem>
                  <SelectItem value="Rs.5Cr to Rs.50Cr">Rs.5Cr to Rs.50Cr</SelectItem>
                  <SelectItem value="Above Rs.50Cr">Above Rs.50Cr</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="primary_channel">Primary sales channel</Label>
              <Select
                value={formData.primary_channel}
                onValueChange={(value) => handleInputChange("primary_channel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="field-sales">Field sales</SelectItem>
                  <SelectItem value="marketplace">Marketplace</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="website_url">Website (optional)</Label>
              <Input
                id="website_url"
                type="url"
                placeholder="https://"
                value={formData.website_url}
                onChange={(e) => handleInputChange("website_url", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="whatsapp">WhatsApp (optional)</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="+91..."
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="alt_email">Alternate email (optional)</Label>
              <Input
                id="alt_email"
                type="email"
                placeholder="ops@company.com"
                value={formData.alt_email}
                onChange={(e) => handleInputChange("alt_email", e.target.value)}
              />
            </div>
          </div>

          <div className="pt-2">
            <Label htmlFor="needs">What do you want Laryaa to solve? (optional)</Label>
            <Textarea
              id="needs"
              rows={3}
              placeholder="e.g., faster WhatsApp pitches, better objection handling..."
              value={formData.needs}
              onChange={(e) => handleInputChange("needs", e.target.value)}
            />
          </div>

          <div className="pt-2">
            <Label htmlFor="email">
              Work email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className="flex items-start gap-3 text-sm text-questionnaire-muted">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked === true)}
              required
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed">
              I agree to receive early-access emails from Laryaa and accept the Privacy Notice.
            </Label>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="rounded-xl px-6 py-3"
          >
            {isSubmitting ? "Submitting..." : 
             isFormValid ? "Submit & Join Waitlist" : "Submit & Join Waitlist"}
          </Button>
        </form>

        <section className="mt-12 text-xs text-questionnaire-muted">
          <p>
            <strong>Privacy:</strong> We collect this info to prioritise onboarding and tailor early access.
            Email is mandatory; other fields are optional. We do not sell data.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Reserve;