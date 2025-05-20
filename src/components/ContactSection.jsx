import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"

export const ContactSection = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in Mind feel free to discuss or want to collaborate. I am always open to discussing.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                <div className="space-y-8">
                    <h3 className="test-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:aakarshvermaav05@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    aakarshvermaav05@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+91 6268265637" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 6268265637
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Loaction</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Satna, Madhya Pradesh, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <h4>Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/aakarsh-verma-060b03253/" target="_blank">
                                <Linkedin/> 
                            </a>

                            <a href="https://www.instagram.com/aaka_r_s_h_0_5/" target="_blank">
                                <Instagram/> 
                            </a>

                            <a href="https://x.com/Aakarshver05" target="_blank">
                                <Twitter/> 
                            </a>
                        </div>
                    </div>
                

                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id='name'  name="name" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-primary" placeholder="Aakarsh verma"/>
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id='email'  name="email" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-primary" placeholder="abcd@gmail.com"/>
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea type="text" id='message'  name="message" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about...."/>
                        </div>
                        <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2">
                            Send Message
                            <Send size={16}/>
                        </button>
                    </form>

                </div>
            </div>

            </div>
        </section>
    )
}