<template>
  <Popover>
    <PopoverTrigger as-child >
      <Button
        variant="outline"
        :class="
          cn(
            'col-span-3 justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )
        "
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : name }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date";

import { CalendarIcon } from "@radix-icons/vue";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});

const props = defineProps({
  name: {
    type: String,
    default: "Pick a date",
  },
});

const value = defineModel<DateValue>({});
</script>
