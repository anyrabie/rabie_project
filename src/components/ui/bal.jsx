import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link"><Avatar>
            <AvatarImage src="https://media.istockphoto.com/id/1182416349/vector/pizza-chef.webp?s=1024x1024&w=is&k=20&c=Z7KtsBzAYD7yNxk7mmEm5YZ7THEbvkoPyw1wFDicgso=" />
            <AvatarFallback>RE</AvatarFallback>
          </Avatar></Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://media.istockphoto.com/id/1182416349/vector/pizza-chef.webp?s=1024x1024&w=is&k=20&c=Z7KtsBzAYD7yNxk7mmEm5YZ7THEbvkoPyw1wFDicgso=" />
            <AvatarFallback>RE</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">RESTO</h4>
            <p className="text-sm">
            The Ultimate Dining Experience – now available for delivery!.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
