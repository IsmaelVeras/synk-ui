import {
  BoxIcon,
  ChartLine,
  HouseIcon,
  PanelsTopLeftIcon,
  SettingsIcon,
  UsersRoundIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

export default function MenuTabs() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea className="w-full bg-neutral-100 dark:bg-neutral-900/70">
        <TabsList className="text-foreground bg-transparent h-auto gap-2 rounded-none border-b px-6 py-1">
          <TabsTrigger
            value="tab-1"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
          >
            <HouseIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Home
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
          >
            <PanelsTopLeftIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Projects
            <Badge
              className="bg-red-500/15 ms-1.5 min-w-5 px-1"
              variant="secondary"
            >
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
          >
            <BoxIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Packages
            <Badge className="ms-1.5">New</Badge>
          </TabsTrigger>
          <TabsTrigger
            value="tab-4"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
          >
            <UsersRoundIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Team
          </TabsTrigger>
          <TabsTrigger
            value="tab-5"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
          >
            <ChartLine
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Insights
          </TabsTrigger>
          <TabsTrigger
            value="tab-6"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
          >
            <SettingsIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Settings
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>


      <TabsContent value="tab-1">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          Bem-vindo ao Painel!
        </h1>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          Gerencie seus projetos, equipes e pacotes em um só lugar. Explore as abas acima para acessar diferentes funcionalidades e obter insights sobre sua organização.
        </p>
      </div>
      </TabsContent>
      <TabsContent value="tab-2">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="text-muted-foreground pt-1 text-center text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
      <TabsContent value="tab-4">
        <p className="text-muted-foreground pt-1 text-center text-xs">
          Content for Tab 4
        </p>
      </TabsContent>
      <TabsContent value="tab-5">
        <p className="text-muted-foreground pt-1 text-center text-xs">
          Content for Tab 5
        </p>
      </TabsContent>
      <TabsContent value="tab-6">
        <p className="text-muted-foreground pt-1 text-center text-xs">
          Content for Tab 6
        </p>
      </TabsContent>
    </Tabs>
  )
}
