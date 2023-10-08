type KeyToDepMap = Map<any, ReactiveEffect>

const targetMap = new WeakMap<any, KeyToDepMap>()

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
  if (!activeEffect) return
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  depsMap.set(key, activeEffect)

  console.log(targetMap)
}

export function trigger(target: object, key: unknown, newValue: unknown) {
  console.log('trigger effect')
}
