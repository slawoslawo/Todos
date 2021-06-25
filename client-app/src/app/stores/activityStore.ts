import { makeObservable, observable, observe } from "mobx"
import { isConstructorDeclaration } from "typescript"

export default class ActivityStore{
  title = "Hello from MobX!"

  constructor() {
    makeObservable(this, {
      title: observable
    })
  }
}
