export function track(target: object, key: unknown) {
  console.log('track')
}

export function trigger(target: object, key: unknown, newValue: unknown) {
  console.log('trigger')
}
