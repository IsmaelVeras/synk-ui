import { ChartAreaInteractive } from "../chart";
import { Card, CardContent, CardFooter } from "../ui/card";

export function HomeTabs() {
  return (
   <div className="container mx-auto px-4 py-8">
    <div className="flex items-center justify-between py-2">
      <h1 className="text-6xl mb-4 font-bold mask-b-from-85%">Overwiew</h1>
    </div>

    <div className="grid dark:*:bg-neutral-950 gap-4 md:grid-cols-2 lg:grid-cols-5 sm:grid-cols-1">
      {[
        { value: '6.2.1', label: 'Redis Version' },
        { value: '0', label: 'Uptime (days)' },
        { value: '3', label: 'Connections' },
        { value: '371.31 M', label: 'Memory Usage' },
        { value: '0', label: 'Pub/Sub Channels' },
      ].map((item, index) => (
        <Card
          key={index}
          className="flex flex-col items-center gap-4 text-center"
        >
          <CardContent className="flex items-center justify-center flex-1 text-3xl font-semibold text-center break-words">
            <p className="w-full break-words">{item.value}</p>
          </CardContent>
          <CardFooter className="">
            <p className="font-medium text-xl text-center break-words w-full">
              {item.label}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>

    <ChartAreaInteractive />
    </div>
  );
}