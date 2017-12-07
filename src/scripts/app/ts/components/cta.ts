namespace X10 {
  export namespace Components {
    export class CallToAction {
      private fb = "#x10-cta-fb"
      private fbClose = "#x10-cta-fb-close"

      private render(ready) {
        const template = `<div class="x10-cta" id="x10-cta-fb">
                            <div class="x10-cta-head">
                                <i id="x10-cta-fb-close" class="fa fa-close"></i>
                                <img src="images/cta-fb.png" alt="LARS NATUS FITNESS" />
                                <div class="lnf-divider"></div>
                                <i class="fa fa-facebook-square"></i>
                              </div>
                              <div class="x10-cta-body">
                                <h2>Schön, dass Du da bist!</h2>
                                <p>Like 3x10.de auf Facebook und du bleibst immer auf dem Laufenden.</p>
                                <p>Wir freuen uns auf Dich!</p>
                                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2F3x10de&width=1000&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId" width="100" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                              </div>
                            </div>`

        $('body').append(template)
        ready()
      }

      public init () {
        const that = this
        that.render(() => {
          const $fb = $(that.fb);
          const $fbClose = $(that.fbClose)

          $fbClose.click(() => {
            $fb.slideToggle('slow')
          })
          setTimeout(() => {
            $fb.slideToggle('slow')
          }, 10000)
        })
      }
    }
  }
}
