import * as React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Zap, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  })
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login - in real app, this would query CustomUser table
    setTimeout(() => {
      if (formData.email && formData.password) {
        // Simulate database lookup of CustomUser by email
        // Would validate password hash and get user.role field
        toast.success("Connexion réussie !")
        
        // Simulate user role from database (INFLUENCER, BRAND, CUSTOMER)
        const userRole = formData.email.includes("brand") ? "BRAND" : 
                        formData.email.includes("client") ? "CUSTOMER" : "INFLUENCER"
        
        // Navigate to appropriate dashboard based on role
        navigate(`/dashboard/${userRole.toLowerCase()}`)
      } else {
        toast.error("Veuillez remplir tous les champs")
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              <span>Retour à l'accueil</span>
            </Link>
            
            <div>
              <Link to="/" className="inline-flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">AdsAura</span>
              </Link>
              <h1 className="text-3xl font-bold text-foreground">Bon retour !</h1>
              <p className="text-muted-foreground">Connectez-vous à votre compte</p>
            </div>
          </div>

          {/* Login Form */}
          <Card>
            <CardHeader>
              <CardTitle>Connexion</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      name="remember"
                      checked={formData.remember}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, remember: checked as boolean }))
                      }
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Se souvenir de moi
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Hero image/content */}
      <div className="hidden lg:flex flex-1 hero-gradient items-center justify-center p-12">
        <div className="text-center text-white space-y-6 max-w-lg">
          <h2 className="text-4xl font-bold">Rejoignez l'écosystème AdsAura</h2>
          <p className="text-lg opacity-90">
            Connectez-vous avec des milliers d'influenceurs et de marques pour créer des partenariats exceptionnels.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold">1K+</div>
              <div className="text-sm opacity-80">Influenceurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Marques</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2K+</div>
              <div className="text-sm opacity-80">Campagnes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}