import { Search } from 'lucide-react'
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
}

const people: Person[] = [
  { name: 'Ana Silva', profession: 'Médica', phone: '(11) 99999-1234' },
  { name: 'Bruno Costa', profession: 'Engenheiro', phone: '(11) 98888-2345' },
  { name: 'Carla Souza', profession: 'Professora', phone: '(11) 97777-3456' },
  { name: 'Diego Lima', profession: 'Designer', phone: '(11) 96666-4567' },
  { name: 'Elaine Rocha', profession: 'Advogada', phone: '(11) 95555-5678' },
  { name: 'Felipe Nunes', profession: 'Analista', phone: '(11) 94444-6789' },
  { name: 'Giovana Prado', profession: 'Psicóloga', phone: '(11) 93333-7890' },
  { name: 'Henrique Dias', profession: 'Arquiteto', phone: '(11) 92222-8901' },
  { name: 'Isabela Moreira', profession: 'Nutricionista', phone: '(11) 91111-9012' },
  { name: 'João Pereira', profession: 'Consultor', phone: '(11) 90000-0123' },
  { name: 'Karen Alves', profession: 'Veterinária', phone: '(11) 99888-1112' },
  { name: 'Lucas Martins', profession: 'Programador', phone: '(11) 98777-2223' },
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
    <Layout className="space-y-12 pb-16">
      {/* Carousel Section - Full width 16:9 with max height 640px */}
      <section className="w-full">
        <div className="relative w-full max-w-7xl mx-auto max-h-160">
          <div className="aspect-video w-full h-full">
            <CarouselMain className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Central Search Block - Increased and improved based on BigMarker */}
      <section className="mx-auto w-full">
        <div className="space-y-8">
          {/* Search Section - Made more prominent */}
          <div className="flex flex-col items-center gap-6">
            {/* Optional: Add a heading for clarity */}
            <h2 className="text-2xl font-bold text-foreground">
              Encontre profissionais
            </h2>

            {/* Search Input Container - Made larger and more modern */}
            <div className="w-full flex items-center gap-3 rounded-2xl border border-border bg-card p-2 shadow-sm">
              {/* Left Icon Container */}
              <div className="items-center justify-center rounded-xl bg-primary/10 text-primary p-3">
                <Search className="h-5 w-5" />
              </div>

              {/* Input Field - Expanded to take more space */}
              <div className="flex-1">
                <Input
                  aria-label="Pesquisar"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por nome, profissão ou telefone"
                  className="h-12 border-0 bg-transparent text-lg font-medium text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Search Button - Made prominent with teal color */}
              <Button
                type="button"
                className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 flex items-center gap-2"
              >
                Pesquisar
                <Search className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section - Improved spacing and styling */}
      <section>
        {/* Optional: Add a heading for the cards section */}
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Profissionais encontrados
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPeople.map((person) => (
            <ProfileCard
              key={`${person.name}-${person.phone}`}
              name={person.name}
              profession={person.profession}
              phone={person.phone}
            />
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/20 p-12 text-center text-sm text-muted-foreground">
            Nenhum resultado encontrado para sua busca.
          </div>
        )}
      </section>
    </Layout>
  )
}