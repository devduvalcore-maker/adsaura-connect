import * as React from "react"
import { 
  UserCircle, 
  Building, 
  Users, 
  Target, 
  TrendingUp, 
  Shield,
  MessageCircle,
  CreditCard,
  BarChart3
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation"

export function FeaturesSection() {
  const features = [
    {
      icon: UserCircle,
      title: "Pour les Influenceurs",
      description: "Trouvez des marques qui correspondent à votre audience et vos valeurs",
      benefits: [
        "Découvrez des opportunités personnalisées",
        "Négociez vos tarifs en toute transparence",
        "Suivez vos performances en temps réel"
      ],
      color: "text-primary"
    },
    {
      icon: Building,
      title: "Pour les Marques",
      description: "Connectez-vous avec des influenceurs authentiques et engagés",
      benefits: [
        "Accédez à une base d'influenceurs vérifiés",
        "Gérez vos campagnes depuis un tableau de bord",
        "Mesurez l'impact de vos collaborations"
      ],
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Pour les Clients",
      description: "Découvrez des produits et services recommandés par vos influenceurs préférés",
      benefits: [
        "Profitez d'offres exclusives",
        "Suivez vos influenceurs favoris",
        "Découvrez de nouvelles marques"
      ],
      color: "text-accent"
    }
  ]

  const additionalFeatures = [
    {
      icon: Target,
      title: "Ciblage Précis",
      description: "Algorithmes avancés pour des partenariats pertinents"
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Transactions sécurisées et données protégées"
    },
    {
      icon: MessageCircle,
      title: "Communication Fluide",
      description: "Messagerie intégrée pour faciliter les échanges"
    },
    {
      icon: CreditCard,
      title: "Paiements Simplifiés",
      description: "Système de paiement automatisé et transparent"
    },
    {
      icon: BarChart3,
      title: "Analytics Avancées",
      description: "Tableaux de bord détaillés pour optimiser vos performances"
    },
    {
      icon: TrendingUp,
      title: "Croissance Mesurable",
      description: "KPIs en temps réel pour suivre votre évolution"
    }
  ]

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container">
        {/* Header */}
        <ScrollAnimationWrapper animation="fade-up" className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Une plateforme adaptée à{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              tous vos besoins
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Que vous soyez influenceur, marque ou client, AdsAura vous offre les outils parfaits 
            pour réussir dans l'écosystème du marketing d'influence.
          </p>
        </ScrollAnimationWrapper>

        {/* Main features grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {features.map((feature, index) => (
            <ScrollAnimationWrapper 
              key={index}
              animation="fade-up"
              delay={index * 200}
            >
              <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 ${feature.color.replace('text-', 'border-')}`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className={`mt-1 h-2 w-2 rounded-full ${feature.color.replace('text-', 'bg-')}`} />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Additional features */}
        <div className="border-t border-border pt-16">
          <ScrollAnimationWrapper animation="fade-up">
            <h3 className="text-2xl font-bold text-center mb-12">
              Fonctionnalités avancées
            </h3>
          </ScrollAnimationWrapper>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((feature, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation="scale-in"
                delay={index * 100}
              >
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors h-full">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}