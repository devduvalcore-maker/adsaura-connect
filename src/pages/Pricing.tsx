import * as React from "react"
import { Link } from "react-router-dom"
import { Check, Zap, Star, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Pricing() {
  const plans = {
    influencer: [
      {
        name: "Starter",
        price: "Gratuit",
        description: "Parfait pour commencer",
        icon: Zap,
        features: [
          "Jusqu'à 3 campagnes par mois",
          "Profil basique",
          "Messagerie limitée",
          "Analytics de base"
        ],
        popular: false,
        cta: "Commencer gratuitement"
      },
      {
        name: "Pro",
        price: "29€/mois",
        description: "Pour les créateurs actifs",
        icon: Star,
        features: [
          "Campagnes illimitées",
          "Profil premium avec vérification",
          "Messagerie prioritaire",
          "Analytics avancées",
          "Négociation de tarifs",
          "Support prioritaire"
        ],
        popular: true,
        cta: "Démarrer l'essai gratuit"
      },
      {
        name: "Elite",
        price: "99€/mois",
        description: "Pour les top influenceurs",
        icon: Crown,
        features: [
          "Tout du plan Pro",
          "Manager dédié",
          "Campagnes exclusives",
          "Formation personnalisée",
          "Événements VIP",
          "Commission réduite"
        ],
        popular: false,
        cta: "Contacter l'équipe"
      }
    ],
    brand: [
      {
        name: "Startup",
        price: "49€/mois",
        description: "Pour les petites entreprises",
        icon: Zap,
        features: [
          "Jusqu'à 5 campagnes actives",
          "Base de données d'influenceurs",
          "Outils de recherche basiques",
          "Analytics de campagne",
          "Support par email"
        ],
        popular: false,
        cta: "Essayer 14 jours gratuit"
      },
      {
        name: "Business",
        price: "149€/mois",
        description: "Pour les entreprises en croissance",
        icon: Star,
        features: [
          "Campagnes illimitées",
          "Recherche avancée d'influenceurs",
          "Analytics détaillées et ROI",
          "Gestion d'équipe",
          "API disponible",
          "Support prioritaire"
        ],
        popular: true,
        cta: "Démarrer maintenant"
      },
      {
        name: "Enterprise",
        price: "Sur mesure",
        description: "Pour les grandes entreprises",
        icon: Crown,
        features: [
          "Tout du plan Business",
          "Manager de compte dédié",
          "Intégrations personnalisées",
          "Formation d'équipe",
          "SLA garanti",
          "Support 24/7"
        ],
        popular: false,
        cta: "Nous contacter"
      }
    ]
  }

  const [selectedTab, setSelectedTab] = React.useState<'influencer' | 'brand'>('influencer')

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Tarifs transparents
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Choisissez votre 
                <span className="hero-gradient-text"> plan parfait</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Des tarifs adaptés à tous les profils. Commencez gratuitement et évoluez selon vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Tab Selection */}
        <section className="pb-16">
          <div className="container">
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center justify-center rounded-lg bg-muted p-1">
                <button
                  onClick={() => setSelectedTab('influencer')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedTab === 'influencer' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Influenceurs
                </button>
                <button
                  onClick={() => setSelectedTab('brand')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedTab === 'brand' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Marques
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans[selectedTab].map((plan, index) => {
                const Icon = plan.icon
                return (
                  <Card 
                    key={plan.name}
                    className={`relative transition-all hover:shadow-lg ${
                      plan.popular ? 'border-primary shadow-lg scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">
                          Le plus populaire
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mx-auto mb-4 ${
                        plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold">{plan.price}</div>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link to="/register">
                          {plan.cta}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
              <p className="text-muted-foreground">Tout ce que vous devez savoir sur nos tarifs</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Puis-je changer de plan à tout moment ?</h3>
                  <p className="text-muted-foreground">Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Y a-t-il des frais cachés ?</h3>
                  <p className="text-muted-foreground">Non, nos tarifs sont transparents. Seules des commissions sur les campagnes réussies peuvent s'appliquer.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Qu'est-ce qui est inclus dans l'essai gratuit ?</h3>
                  <p className="text-muted-foreground">L'essai gratuit inclut toutes les fonctionnalités du plan choisi pendant 14 jours, sans engagement.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comment fonctionne la facturation ?</h3>
                  <p className="text-muted-foreground">La facturation est mensuelle ou annuelle. Vous recevez une facture détaillée par email.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Offrez-vous des remises pour les associations ?</h3>
                  <p className="text-muted-foreground">Oui, nous offrons des tarifs préférentiels pour les associations et ONG. Contactez-nous pour plus d'informations.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Puis-je annuler à tout moment ?</h3>
                  <p className="text-muted-foreground">Oui, vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">
                Prêt à commencer votre aventure ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Rejoignez des milliers d'influenceurs et de marques qui font confiance à AdsAura
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/register">Commencer gratuitement</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Parler à un expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}