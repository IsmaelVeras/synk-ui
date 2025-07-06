import Logo from "@/components/navbar-components/logo"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ui/mode-toggle-theme"
import MenuTabs from "./menu-bottom"

export default function HeaderTop() {
  return (
   <>
    <header className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="flex h-16 justify-between gap-4">
        {/* Left side */}
        <div className="flex gap-2">
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="" className="text-primary hover:text-primary/90">
              <Logo /> 
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild size="sm" className="text-sm ">
            <a href="#">Logout</a>
          </Button>
        </div>
      </div>
      <MenuTabs />
    </header>
    </>
  )
}
