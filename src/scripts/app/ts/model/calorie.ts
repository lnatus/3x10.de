namespace X10 {
  export namespace Model {
    export class Calorie {
      public age: number

      /* 0 = Female; 1 = Male */
      public gender: number
      public size: number
      public weight: number

      /* 0 = Light; 1 = Moderat; 2 Strong;  */
      public activity: number

      /* 0 = Health; 1 = Muscle; 2 Diat;  */
      public target: number

      /* Calculated */
      public baseMetabolism: number
      public totalCalories: number
      public diatCalories: number
      public bulkCalories: number

      constructor(age: number, gender: number,
        size: number, weight: number, activity: number,
        target: number) {
          this.age = age
          this.gender = gender
          this.size = size
          this.weight = weight
          this.activity = activity
          this.target = target

          // WOMEN
          if(this.gender == 0) {
            this.baseMetabolism = Math.round(655 + (9.6 * this.weight) + (1.8 * this.size) - (4.7 * this.age))
          //MEN
          } else {
            this.baseMetabolism = Math.round(66 + (13.7 * this.weight) + (5 * this.size) - (6.8 * this.age))
          }

          this.totalCalories = Math.round((this.baseMetabolism * this.activity))
          this.diatCalories = Math.round(this.totalCalories - (500 - (this.activity * 80)))
          this.bulkCalories = Math.round(this.totalCalories + (400 + (this.activity * 80)))
      }

      public isValid() : boolean {
        return this.gender >= 0 &&
               this.size > 0  &&
               this.weight > 0 &&
               this.activity >= 0 &&
               this.target >= 0
      }
    }
  }
}
