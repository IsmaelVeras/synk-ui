import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsLeft() {
  return (
    <>
    <div className="flex items-center justify-between py-2">
      <h1 className="text-6xl mb-4 font-bold mask-b-from-85%">Jobs</h1>
    </div>
    <Tabs
      defaultValue="tab-1"
      orientation="vertical"
      className="w-full flex-row"
    >
      <TabsList className="flex-col rounded-none border-l bg-transparent p-0">
        <TabsTrigger value="tab-1" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Enqueued
        </TabsTrigger>
        <TabsTrigger value="tab-2" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Scheduled
        </TabsTrigger>
        <TabsTrigger value="tab-3" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Processing
        </TabsTrigger>
        <TabsTrigger value="tab-4" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Succeeded
        </TabsTrigger>
        <TabsTrigger value="tab-5" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Failed
        </TabsTrigger>
        <TabsTrigger value="tab-6" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Deleted
        </TabsTrigger>
        <TabsTrigger value="tab-7" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Awaiting
        </TabsTrigger>
        <TabsTrigger value="tab-8" className="data-[state=active]:after:bg-primary p-3 relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
          Awaiting Batch
        </TabsTrigger>
      </TabsList>
      <div className="grow rounded-md border text-start">
        <TabsContent value="tab-1">
          <p className="text-muted-foreground px-4 py-3 text-xs">
            Content for Tab 1
          </p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="text-muted-foreground px-4 py-3 text-xs">
            Content for Tab 2
          </p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="text-muted-foreground px-4 py-3 text-xs">
            Content for Tab 3
          </p>
        </TabsContent>
      </div>
    </Tabs>
    </>
  )
}
