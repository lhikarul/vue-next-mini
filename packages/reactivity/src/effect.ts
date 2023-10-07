export function effect<T = any>(fn: () => T) {
  const _effect = new ReactiveEffect(fn)
  _effect.run()
}

export let activeEffect: ReactiveEffect | undefined
export class ReactiveEffect<T = any> {
  constructor(public fn: () => T) {}

  run() {
    activeEffect = this
    return this.fn()
  }
}

export function track(target: object, key: unknown) {
  console.log('track effect')
}

export function trigger(target: object, key: unknown, newValue: unknown) {
  console.log('trigger effect')
}
