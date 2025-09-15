import * as React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Influenceuse Lifestyle",
      type: "Influenceur",
      image: "/placeholder.svg",
      rating: 5,
      content: "AdsAura a transformé ma façon de collaborer avec les marques. Je trouve maintenant des partenariats qui correspondent vraiment à mes valeurs et à mon audience.",
      followers: "85K followers"
    },
    {
      id: 2,
      name: "Tech Solutions Inc.",
      role: "Directeur Marketing",
      type: "Marque",
      image: "/placeholder.svg",
      rating: 5,
      content: "Grâce à AdsAura, nous avons pu identifier et collaborer avec des influenceurs tech qui ont généré un ROI exceptionnel pour nos campagnes.",
      company: "Startup Tech"
    },
    {
      id: 3,
      name: "Antoine Moreau",
      role: "Client Premium",
      type: "Client",
      image: "/placeholder.svg",
      rating: 4,
      content: "J'adore découvrir de nouveaux produits grâce aux recommandations de mes influenceurs préférés. Les offres exclusives sont un vrai plus !",
      purchases: "12 achats via AdsAura"
    },
    {
      id: 4,
      name: "Sophie Laurent",
      role: "Influenceuse Beauté",
      type: "Influenceur",
      image: "/placeholder.svg",
      rating: 5,
      content: "La transparence des tarifs et la simplicité des négociations font d'AdsAura ma plateforme préférée pour mes collaborations professionnelles.",
      followers: "150K followers"
    },
    {
      id: 5,
      name: "EcoFashion Brand",
      role: "Responsable Partenariats",
      type: "Marque",
      image: "/placeholder.svg",
      rating: 5,
      content: "Nous avons trouvé des influenceurs parfaitement alignés avec nos valeurs écoresponsables. L'engagement de leur audience est remarquable.",
      company: "Mode Durable"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Influenceur':
        return 'text-primary bg-primary/10 border-primary/20'
      case 'Marque':
        return 'text-secondary bg-secondary/10 border-secondary/20'
      case 'Client':
        return 'text-accent bg-accent/10 border-accent/20'
      default:
        return 'text-muted-foreground bg-muted/10 border-muted/20'
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container">
        {/* Header */}
        <ScrollAnimationWrapper animation="fade-up" className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Ce que disent nos{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              utilisateurs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment AdsAura transforme l'expérience du marketing d'influence 
            pour les influenceurs, les marques et les clients.
          </p>
        </ScrollAnimationWrapper>

        {/* Carousel */}
        <ScrollAnimationWrapper animation="scale-in" className="relative mx-auto max-w-4xl">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium mt-2 ${getTypeColor(testimonials[currentIndex].type)}`}>
                      {testimonials[currentIndex].type}
                    </div>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="text-sm text-muted-foreground">
                {testimonials[currentIndex].followers && (
                  <span>{testimonials[currentIndex].followers}</span>
                )}
                {testimonials[currentIndex].company && (
                  <span>{testimonials[currentIndex].company}</span>
                )}
                {testimonials[currentIndex].purchases && (
                  <span>{testimonials[currentIndex].purchases}</span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}