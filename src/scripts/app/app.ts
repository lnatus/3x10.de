const { $ } = window

namespace X10 {
  export class App {

    public init () {
      const cta = new X10.Components.CallToAction()
      cta.init()

      const cc = new X10.Components.CalorieCalulator()
      cc.init()
    }
  }
}
