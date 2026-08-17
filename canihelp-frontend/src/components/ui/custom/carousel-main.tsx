import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselMain({ className = "" }: { className?: string }) {
  return (
    <Carousel className={[className].filter(Boolean).join(" ")}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="card-elevated hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <CardContent className="flex aspect-video items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-primary/0">
                  <span className="text-6xl font-bold text-primary/90">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 bg-primary/90 rounded-full p-2 hover:bg-primary/80 transition-all duration-200" />
      <CarouselNext className="right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 bg-primary/90 rounded-full p-2 hover:bg-primary/80 transition-all duration-200" />
    </Carousel>
  )
}