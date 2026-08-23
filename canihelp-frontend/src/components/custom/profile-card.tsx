import { Briefcase, Phone, UserRound } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

type ProfileCardProps = {
  name: string
  profession: string
  phone: string
  imageProfile: string
  onClick?: () => void
}

export function ProfileCard({ name, profession, phone, imageProfile, onClick }: ProfileCardProps) {
  return (
    <Card className="card-interactive hover:-translate-y-2 hover:shadow-xl border border-primary/20 overflow-hidden" onClick={onClick}>
      <img
        src={imageProfile}
        alt={`${name} profile`}
        className="h-[200px] w-full object-cover"
      />

      <CardContent className="flex flex-col gap-5 p-6">
        {/* Name Section */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a8dae2] text-[#1392a5]">
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
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a8dae2] text-[#1392a5]">
            <Briefcase className="h-6 w-6" />
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
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a8dae2] text-[#1392a5]">
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