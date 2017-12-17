namespace X10 {
  export namespace Components {
    export class CalorieCalulator {

      private getFormData () : X10.Model.Calorie {
        const age = +$('#inputAge').val()
        const gender = +$('#inputGender').val()
        const size = +$('#inputSize').val()
        const weight = +$('#inputWeight').val()
        const activity = +$('#inputActivity').val()
        const habits = +$('#inputHabits').val()
        const target = +$('#inputTarget').val()
        const disciplin = +$('#inputDisciplin').val()

        return new X10.Model.Calorie(
          age, gender, size, weight,
          activity, target
        )
      }

      private showError() {
        $('#js-x10-calorie-calc-error').show()
      }

      private getResultTemplate(nutrition: X10.Model.Calorie) : string  {
        let targetCalories
        let targetLabel
        let targetDisciplin = ''

        switch(nutrition.target){
          case 0:
            targetCalories = nutrition.totalCalories
            targetLabel = "Wohlbefinden verbessern"
            break
          case 1:
            targetLabel = "Muskel- und Kraftaufbau"
            targetCalories = nutrition.bulkCalories
            break
          case 2:
            targetLabel = "Fettreduktion (Abnehmen)"
            targetCalories = nutrition.diatCalories
        }

        return `<div class="x10-calorie-calc-result">
                  <h2 class="x10-cl-red">Kalorien</h2>
                  <p>Dein Grundumsatz liegt aktuell bei <strong>${nutrition.baseMetabolism} kcal/Tag.</strong></p>
                  <p>Die Gesamtkalorien liegen bei deinem aktuellen Aktivitätslevel bei <strong>${nutrition.totalCalories} kcal/Tag</strong></p>
                  <h2 class="lnf-branding">${targetLabel}</h2>
                  <p>
                    Für Deine Zielsetzung <strong>${targetLabel}</strong>, solltest du aktuell <strong>${targetCalories} kcal/Tag</strong> zu dir nehmen.
                  </p>
                  <a class="btn x10-btn" href="app-kalorien-rechner.html">Erneut Starten</a>
                </div>`
      }

      public init () {
        if(location.href.indexOf('/app-kalorien-rechner') > -1){
          $('#js-x10-calorie-calc-error button').click(() => {
            $('#js-x10-calorie-calc-error').hide()
          })

          $('#js-x10-app-calorie-calc-run').click(()=>{
            this.run()
          })
        }
      }

      public run() {
        if(location.href.indexOf('/app-kalorien-rechner') > -1){
          const $resultContainer = $('#js-x10-calorie-calc-result')[0];
          const $formContainer = $('#js-x10-calorie-calc-form')

          const form = this.getFormData()

          if(form.isValid()){
            var template = this.getResultTemplate(form)
            $resultContainer.innerHTML = template
            $formContainer.hide()
            $("html, body").animate({ scrollTop: 0 }, "slow");
          } else {
            this.showError()
          }
        }
      }
    }
  }
}
