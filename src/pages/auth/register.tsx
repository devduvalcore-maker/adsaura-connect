import * as React from "react"
import { useState, useEffect } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Eye, EyeOff, Zap, ArrowLeft, UserCircle, Building, Users, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

type UserType = 'influencer' | 'brand' | 'client'

export default function Register() {
  const [searchParams] = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<UserType>(
    (searchParams.get('type') as UserType) || 'influencer'
  )
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    // Common fields
    name: "",
    phone: "",
    // Influencer specific
    username: "",
    bio: "",
    followersCount: "",
    niches: "",
    socialLinks: "",
    // Brand specific
    companyName: "",
    website: "",
    industry: "",
    description: ""
  })
  const navigate = useNavigate()

  const userTypes = [
    {
      id: 'influencer' as UserType,
      title: 'Influenceur',
      description: 'Créateur de contenu',
      icon: UserCircle,
      benefits: ['Accès aux campagnes', 'Négociation des tarifs', 'Analytics avancées']
    },
    {
      id: 'brand' as UserType,
      title: 'Marque',
      description: 'Entreprise/Annonceur',
      icon: Building,
      benefits: ['Créer des campagnes', 'Trouver des influenceurs', 'Mesurer le ROI']
    },
    {
      id: 'client' as UserType,
      title: 'Client',
      description: 'Consommateur',
      icon: Users,
      benefits: ['Offres exclusives', 'Recommandations', 'Suivre ses influenceurs']
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas")
      return
    }

    if (!formData.acceptTerms) {
      toast.error("Veuillez accepter les conditions d'utilisation")
      return
    }

    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      toast.success("Compte créé avec succès !")
      navigate(`/dashboard/${selectedType}`)
      setIsLoading(false)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const renderTypeSpecificFields = () => {
    switch (selectedType) {
      case 'influencer':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                name="username"
                placeholder="@votrenom"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="followersCount">Nombre d'abonnés</Label>
              <Input
                id="followersCount"
                name="followersCount"
                type="number"
                placeholder="ex: 10000"
                value={formData.followersCount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="niches">Niches/Domaines</Label>
              <Input
                id="niches"
                name="niches"
                placeholder="Mode, Tech, Lifestyle..."
                value={formData.niches}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Parlez-nous de vous..."
                value={formData.bio}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </>
        )

      case 'brand':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="companyName">Nom de l'entreprise</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Nom de votre entreprise"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Secteur d'activité</Label>
              <Input
                id="industry"
                name="industry"
                placeholder="ex: Mode, Tech, Alimentaire..."
                value={formData.industry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Site web (optionnel)</Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://votre-site.com"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description de l'entreprise</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Décrivez votre entreprise et vos objectifs..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </>
        )

      case 'client':
        return null // Minimal fields for clients

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à l'accueil</span>
        </Link>

        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">AdsAura</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Créer votre compte</h1>
          <p className="text-muted-foreground">Choisissez votre profil et rejoignez la communauté</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* User Type Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quel est votre profil ?</h2>
            <div className="space-y-3">
              {userTypes.map((type) => {
                const Icon = type.icon
                const isSelected = selectedType === type.id
                return (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all hover:border-primary/50 ${
                      isSelected ? 'border-primary bg-primary/5' : 'border-border'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                          isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">{type.title}</h3>
                              <p className="text-sm text-muted-foreground">{type.description}</p>
                            </div>
                            {isSelected && (
                              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                                <Check className="h-3 w-3 text-primary-foreground" />
                              </div>
                            )}
                          </div>
                          <ul className="mt-2 space-y-1">
                            {type.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Informations du compte</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common fields */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Type-specific fields */}
                {renderTypeSpecificFields()}

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                    }
                    required
                  />
                  <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                    J'accepte les{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80">
                      politique de confidentialité
                    </Link>
                  </Label>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Création du compte..." : "Créer mon compte"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Login link */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}