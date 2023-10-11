import { OptionalItem } from "@/components/buySection/Optionals";

export const getTotalValueFromOptions = (
  items: OptionalItem[],
  initialValue: number
) => items.reduce((acc, item) => acc + item.value, Number(initialValue));

// For some reason was necessary to convert the initialValue param
// to number again because the value changed to string
