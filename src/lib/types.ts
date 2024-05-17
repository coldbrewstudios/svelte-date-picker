export type DatePickerDispatchType = {
  change: DatePickerChangeData
}

export type DatePickerChangeData = {
  value: Date,
  changed: "day" | "month" | "year"
}

export type DatePickerChangeEvent = CustomEvent<{
  value: Date,
  changed: "day" | "month" | "year"
}>