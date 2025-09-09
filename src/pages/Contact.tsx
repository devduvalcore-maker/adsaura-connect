import * as React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message envoyé avec succès ! Nous vous répondrons sous 24h.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general"
      })
      setIsLoading(false)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Notre équipe vous répond sous 24h",
      value: "contact@adsaura.com",
      action: "mailto:contact@adsaura.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Lun-Ven, 9h-18h",
      value: "+33 1 23 45 67 89",
      action: "tel:+33123456789"
    },
    {
      icon: MapPin,
      title: "Adresse",
      description: "Venez nous rendre visite",
      value: "123 Rue de l'Innovation\n75001 Paris, France",
      action: null
    }
  ]

  const supportTypes = [
    {
      icon: MessageSquare,
      title: "Support général",
      description: "Questions, suggestions, feedback"
    },
    {
      icon: Headphones,
      title: "Support technique",
      description: "Problèmes techniques, bugs"
    },
    {
      icon: Users,
      title: "Partenariats",
      description: "Collaborations, intégrations"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Nous sommes là pour vous aider
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Contactez-nous
              </h1>
              <p className="text-xl text-muted-foreground">
                Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner dans votre réussite.
              </p>
            </div>
          </div>
        </section>

        <div className="container pb-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Nous contacter</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            {method.action ? (
                              <a 
                                href={method.action}
                                className="text-primary hover:text-primary/80 font-medium"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-sm font-medium whitespace-pre-line">{method.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Support Types */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Types de support</h3>
                <div className="space-y-3">
                  {supportTypes.map((type, index) => {
                    const Icon = type.icon
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">{type.title}</div>
                          <div className="text-xs text-muted-foreground">{type.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Lun - Ven</span>
                        <span>9h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span>10h00 - 16h00</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Dimanche</span>
                        <span>Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Type de demande</Label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="general">Support général</option>
                        <option value="technical">Support technique</option>
                        <option value="partnership">Partenariats</option>
                        <option value="sales">Ventes</option>
                        <option value="billing">Facturation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Résumé de votre demande"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez votre demande en détail..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
              <p className="text-muted-foreground">Trouvez rapidement les réponses à vos questions</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Combien de temps pour une réponse ?</h3>
                  <p className="text-muted-foreground">Nous répondons généralement sous 24h en semaine, et sous 48h le week-end.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comment suivre ma demande ?</h3>
                  <p className="text-muted-foreground">Vous recevrez un email de confirmation avec un numéro de ticket pour suivre votre demande.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proposez-vous un support téléphonique ?</h3>
                  <p className="text-muted-foreground">Oui, pour les clients Premium et Enterprise. Les autres peuvent nous contacter par email.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Puis-je programmer un appel ?</h3>
                  <p className="text-muted-foreground">Absolument ! Mentionnez-le dans votre message et nous vous proposerons des créneaux.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support en plusieurs langues ?</h3>
                  <p className="text-muted-foreground">Nous supportons le français et l'anglais. D'autres langues sont disponibles sur demande.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Urgences techniques ?</h3>
                  <p className="text-muted-foreground">Pour les urgences, utilisez le chat en direct sur votre dashboard ou appelez notre ligne dédiée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}