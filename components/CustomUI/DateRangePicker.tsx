"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SaleType } from "@/types";

interface DateProps extends React.HTMLAttributes<HTMLDivElement> {
  allSales: SaleType[];
  setSales: React.Dispatch<React.SetStateAction<SaleType[]>>;
}

export function DatePickerWithRange({
  allSales,
  setSales,
  className,
}: DateProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 4, 20),
    to: addDays(new Date(2023, 4, 20), 20),
  });

  React.useEffect(() => {
    if (date?.from && date?.to) {
      const filteredSales = allSales.filter((sale) => {
        return (
          new Date(sale.date) >= date.from && new Date(sale.date) <= date.to
        );
      });

      setSales(filteredSales);
    } else {
      setSales(allSales);
    }
  }, [date]);

  return (
    <div className={cn("grid gap-2 ", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[240px] text-xs lg:text-base lg:w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
