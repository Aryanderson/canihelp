import { BriefcaseBusiness, Phone, UserRound } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

type ProfileCardProps = {
  name: string
  profession: string
  phone: string
}

export function ProfileCard({ name, profession, phone }: ProfileCardProps) {
  return (
    <Card className="h-full rounded-2xl border border-primary/20 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="flex flex-col gap-5 p-6">
        {/* Name Section */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserRound className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Nome:
            </p>
            <p className="mt-1 text-base font-semibold text-foreground truncate">
              {name}
            </p>
          </div>
        </div>

        {/* Profession Section */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Profissão:
            </p>
            <p className="mt-1 text-base font-semibold text-foreground truncate">
              {profession}
            </p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Telefone:
            </p>
            <p className="mt-1 text-base font-semibold text-foreground truncate">
              {phone}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}