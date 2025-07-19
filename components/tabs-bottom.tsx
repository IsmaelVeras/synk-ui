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
import { HomeTabs } from "./tabs-bottom-components/home"
import { JobsTabs } from "./tabs-bottom-components/jobs"
import { RetriesTabs } from "./tabs-bottom-components/retries"
import { BatchesTabs } from "./tabs-bottom-components/batches"
import { RecurringJobsTabs } from "./tabs-bottom-components/recurring-jobs "
import { ServerTabs } from "./tabs-bottom-components/servers"

const tabItems = [
  {
    value: "tab-1",
    label: "Home",
    icon: HouseIcon,
  },
  {
    value: "tab-2",
    label: "Jobs",
    icon: PanelsTopLeftIcon,
    badge: <Badge className="ms-1.5 bg-neutral-300 text-foreground dark:bg-neutral-400 dark:text-muted">1</Badge>,
  },
  {
    value: "tab-3",
    label: "Retries",
    icon: BoxIcon,
    badge: <Badge className="ms-1.5 bg-neutral-300 text-foreground dark:bg-neutral-400 dark:text-muted">1</Badge>,
  },
  {
    value: "tab-4",
    label: "Batches",
    icon: UsersRoundIcon,
    badge: <Badge className="ms-1.5 bg-neutral-300 text-foreground dark:bg-neutral-400 dark:text-muted">1</Badge>,
  },
  {
    value: "tab-5",
    label: "Recurring Jobs",
    icon: ChartLine,
    badge: <Badge className="ms-1.5 bg-neutral-300 text-foreground dark:bg-neutral-400 dark:text-muted">1</Badge>,
  },
  {
    value: "tab-6",
    label: "Servers",
    icon: SettingsIcon,
  },
]

function TabTriggerItem({ value, label, icon: Icon, badge }: any) {
  return (
    <TabsTrigger
      value={value}
      className="hover:bg-accent cursor-pointer text-lg hover:text-foreground data-[state=active]:after:bg-red-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-sidebar-border data-[state=active]:shadow-none"
    >
      <Icon className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
      {label}
      {badge}
    </TabsTrigger>
  )
}

export default function TabsBottom() {
  return (
    <Tabs defaultValue="tab-1" className="">
      <div className="bg-neutral-100 dark:bg-neutral-900/70">
        <ScrollArea className="w-full mx-auto max-w-10/12 ">
          <TabsList className="text-foreground bg-transparent h-auto gap-2 rounded-none border-b px-6 py-1 ">
            {tabItems.map(tab => (
              <TabTriggerItem key={tab.value} {...tab} />
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <TabsContent value="tab-1">
        <HomeTabs />
      </TabsContent>
      <TabsContent value="tab-2">
        <JobsTabs />
      </TabsContent>
      <TabsContent value="tab-3">
       <RetriesTabs />
      </TabsContent>
      <TabsContent value="tab-4">
        <BatchesTabs />
      </TabsContent>
      <TabsContent value="tab-5">
       <RecurringJobsTabs />
      </TabsContent>
      <TabsContent value="tab-6">
       <ServerTabs />
      </TabsContent>
    </Tabs>
  )
}
