import { Search, UserRound, Briefcase, Phone, Check, Shield, MessageSquare } from 'lucide-react'
import { useMemo, useState } from 'react'

import { ProfileCard } from '@/components/custom/profile-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Layout } from '@/layout/layout'
import { CarouselMain } from '@/components/ui/custom/carousel-main'

type Person = {
  name: string
  profession: string
  phone: string
  imageProfile: string
}

const people: Person[] = [
  {
    name: 'Ana Silva',
    profession: 'Médica',
    phone: '(11) 99999-1234',
    imageProfile: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Bruno Costa',
    profession: 'Engenheiro',
    phone: '(11) 98888-2345',
    imageProfile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Carla Souza',
    profession: 'Professora',
    phone: '(11) 97777-3456',
    imageProfile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Diego Lima',
    profession: 'Designer',
    phone: '(11) 96666-4567',
    imageProfile: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Elaine Rocha',
    profession: 'Advogada',
    phone: '(11) 95555-5678',
    imageProfile: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Felipe Nunes',
    profession: 'Analista',
    phone: '(11) 94444-6789',
    imageProfile: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Giovana Prado',
    profession: 'Psicóloga',
    phone: '(11) 93333-7890',
    imageProfile: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Henrique Dias',
    profession: 'Arquiteto',
    phone: '(11) 92222-8901',
    imageProfile: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Isabela Moreira',
    profession: 'Nutricionista',
    phone: '(11) 91111-9012',
    imageProfile: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'João Pereira',
    profession: 'Consultor',
    phone: '(11) 90000-0123',
    imageProfile: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Karen Alves',
    profession: 'Veterinária',
    phone: '(11) 99888-1112',
    imageProfile: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Lucas Martins',
    profession: 'Programador',
    phone: '(11) 98777-2223',
    imageProfile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function HomePage() {
  const [query, setQuery] = useState('')

  const filteredPeople = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) return people

    return people.filter(
      (person) =>
        person.name.toLowerCase().includes(normalizedQuery) ||
        person.profession.toLowerCase().includes(normalizedQuery) ||
        person.phone.toLowerCase().includes(normalizedQuery),
    )
  }, [query])

  return (
    <Layout className="min-h-[calc(100vh-4.5rem)] bg-background">
      {/* Hero Section */}
      <section className="py-8 sm:py-8">
        <div className="container">
          <div className="space-y-8 text-center">
            <img src="src/public/logo.png" alt="Can I Help Logo" className="sm:w-3/12 md:w-3/12 lg:w-2/12 xl:w-2/12 mb-1 mx-auto" />
            <h1 className="logo-home text-5xl font-bold tracking-tight text-[#2ebdb6]">
              <span className="text-[#1392a5]">i</span>Help
            </h1>
            <h2 className="text-2xl font-bold tracking-tight">
              Conectando profissionais e pessoas!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma página dedicada a encontrar profissionais confiáveis e qualificados para qualquer serviço que você precise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-3 text-lg">
                Começar agora
                <Search className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-primary px-8 py-3 text-lg">
                Como funciona
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/5">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="section-title">Por que escolher nossa plataforma?</h2>
              <p className="section-subtitle">
                Plataforma moderna e confiável para conectar você com os melhores profissionais
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="card-modern hover-lift p-8">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <div className="bg-[#1392a5] rounded-lg p-3">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Busca Inteligente</h3>
                    <p className="text-sm text-muted-foreground">
                      Encontre exatamente o que você precisa com filtros avançados e sugestões personalizadas
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card-modern hover-lift p-8">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <div className="bg-[#1392a5] rounded-lg p-3">
                    <UserRound className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Perfis Verificados</h3>
                    <p className="text-sm text-muted-foreground">
                      Todos os profissionais fazem parte de nossa comunidade e são de total confiança.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card-modern hover-lift p-8">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <div className="bg-[#1392a5] rounded-lg p-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Privacidade e Segurança</h3>
                    <p className="text-sm text-muted-foreground">
                      Seus dados estão protegidos e você pode se comunicar com os profissionais de forma segura e confiável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - Full width 16:9 with max height 640px */}
      <section className="py-8">
        <div className="container">
          <h2 className="section-title mb-4 text-center">
            Faça uma doação e ajude quem precisa de você.
          </h2>
          <p className="text-center justify-center mx-auto text-lg text-muted-foreground mb-4 w-6/12">
            "Portanto, sempre que pudermos, devemos fazer o bem a todos, especialmente aos que fazem parte da nossa família na fé." 
          </p>
          <p className='text-wrap text-center justify-center mx-auto text-muted-foreground mb-4 w-5/12'>
            <i className='text-wrap text-center justify-center mx-auto '>Gálatas 6:10</i>
          </p>
          <div className="relative">
            <div className="aspect-video w-full">
              <CarouselMain className="w-full h-full" />
            </div>
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <button
                  key={i}
                  className="w-2 h-2 bg-muted/50 rounded-full transition-all duration-200 hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="busca py-8">
        <div className="container">
          <div className="space-y-8 text-center">
            <h2 className="section-title">Encontre o profissional ideal</h2>
            <p className="section-subtitle">
              Busque por nome, especialidade ou localização
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Buscar por nome, profissão ou especialidade..."
                  className="input-modern"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button className="btn-primary w-full">
                  Pesquisar
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 bg-muted/5">
        <div className="container">
          <div className="space-y-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="section-title">
                Profissionais encontrados
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredPeople.length} resultados encontrados
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPeople.map((person) => (
                <ProfileCard
                  key={`${person.name}-${person.phone}`}
                  name={person.name}
                  profession={person.profession}
                  phone={person.phone}
                  imageProfile={person.imageProfile}
                />
              ))}

              {filteredPeople.length === 0 && (
                <div className="col-span-full">
                  <div className="card-modern text-center py-12">
                    <div className="space-y-4">
                      <Search className="h-8 w-8 mx-auto text-muted-foreground" />
                      <h3 className="font-semibold text-lg">Nenhum profissional encontrado</h3>
                      <p className="text-sm text-muted-foreground">
                        Tente ajustar seus critérios de busca ou verificar a ortografia
                      </p>
                      <Button className="btn-outline mt-6">
                        Limpar busca
                        <Search className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            <h2 className="section-title text-center">O que nossos usuários dizem</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="card-modern hover-lift p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground/80 italic">
                    "Plataforma incrível! Encontrei o profissional perfeito para meu projeto em menos de 24 horas."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a8dae2]">
                      <UserRound className="h-4 w-4 text-[#1392a5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Maria Silva</h4>
                      <p className="text-xs text-muted-foreground">Cliente satisfeita</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="card-modern hover-lift p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground/80 italic">
                    "Finalmente encontrei um jeito simples e seguro de contratar freelancers qualificados."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a8dae2]">
                      <UserRound className="h-4 w-4 text-[#1392a5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">João Santos</h4>
                      <p className="text-xs text-muted-foreground">Empresário</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="card-modern hover-lift p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground/80 italic">
                    "A verificação de perfis me deu total confiança para contratar profissionais através da plataforma."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a8dae2]">
                      <UserRound className="h-4 w-4 text-[#1392a5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ana Paula</h4>
                      <p className="text-xs text-muted-foreground">Gestora de projetos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contato py-12 bg-[#a8dae2]">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="section-text text-3xl font-bold">
              Interessado em participar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0">
              Junte-se a nossa plataforma e deixe seu perfil disponível para contato!
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Basta clicar no botão abaixo para entrar em contato conosco e criar sua conta gratuita. Estamos ansiosos para tê-lo(a) conosco!
            </p>
            <Button className="btn-primary px-8 py-3 text-lg">
              Criar conta gratuita
              <UserRound className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/10">
        <div className="container">
          <div className="space-y-6 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                Sobre nós
              </a>
              <a href="#" className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                Termos de serviço
              </a>
              <a href="#" className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                Contato
              </a>
            </div>
            <p className="text-xs text-muted-foreground/50">
              © 2026 CaniHelp. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  )
}