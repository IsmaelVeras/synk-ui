import Logo from "@/components/navbar-components/logo"
import { ModeToggle } from "./ui/mode-toggle-theme"
export default function HeaderTop() {
  return (
   <>
    <header className="">
        <div className="bg-neutral-100 dark:bg-neutral-900/70">
          <div className="container mx-auto flex px-6 md:px-8 h-16 justify-between gap-4">
            {/* Left side */}
            <div className="flex gap-2">
              {/* Main nav */}
              <div className="flex items-center gap-6">
                <a href="" className="text-red-500 hover:text-red-500/90">
                  <Logo /> 
                </a>
              </div>
            </div>
            {/* Right side */}
            <div className="flex items-center gap-2">
              <ModeToggle />
            </div>
          </div>
        </div>
    </header>
    </>
  )
}
