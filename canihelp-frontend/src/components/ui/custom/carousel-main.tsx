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
            <div className="p-1">
              <Card className="h-full">
                <CardContent className="flex aspect-video items-center justify-center bg-card/50">
                  <span className="text-5xl font-semibold text-muted-foreground">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  )
}