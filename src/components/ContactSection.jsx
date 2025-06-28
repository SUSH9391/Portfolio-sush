import { Mail, Phone, Map, Linkedin, Instagram, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { useToast } from "../hooks/use-toast";



export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const SERVICE_ID = "service_hv9rkvc";
        const TEMPLATE_ID = "template_nk8xwpk";

        setIsSubmitting(true);

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, publicKey)
            .then(() => {
                toast({
                    title: "✅ Message Sent!",
                    description: "Thank you for your message. I'll get back to you soon.",
                });

                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch(() => {
                toast({
                    title: "❌ Failed to send",
                    description: "Oops! Something went wrong. Please try again.",
                    variant: "destructive",
                });
                setIsSubmitting(false);
            });
    };
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Got a project you're passionate about? Or want to team up on something new? I'd love to hear from you. I'm always eager to explore new collaborations and opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 pag-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                             Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4"> {/* Mali */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:sushmitha_baliga_b@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        sushmitha_baliga_b@outlook.com
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-start space-x-4"> {/*Phone */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+91 8073542847" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 8073542847
                                    </a>
                                </div>

                            </div>


                            <div className="flex items-start space-x-4">{/*Location */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        India
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/sushmithabaligab31/" target="_black">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/_.xsushhhhx._" target="_black">
                                    <Instagram />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* contact form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"
                                    className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    required
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Name..."
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}></input>
                            </div>

                            <div>
                                <label htmlFor="email"
                                    className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@anymail.com..."
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input>
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none "
                                    placeholder="Hello, I'd like to talk about..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                            </div>
                            <button type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2")}>

                                {isSubmitting ? "Sending..." : "Send Message!"}
                                <Send size={16} />
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    )
}