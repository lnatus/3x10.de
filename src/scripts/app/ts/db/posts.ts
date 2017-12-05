namespace X10 {
  export namespace Db {
    export class Posts {

      private latest = new Array<X10.Model.Post>()

      private p1 = new X10.Model.Post('2017_12-05-P1','http://google.de','First Post','My First Post Teaser','images/2017/12/1.png', new Date(), ['Bodybuilding', 'Fitness'])
      private p2 = new X10.Model.Post('2017-12-05-P2','http://google.de','Second Post','My Second Post Teaser','images/2017/12/1.png', new Date(), ['Bodybuilding', 'Fitness'])

      public  getLatest(): X10.Model.Post[] {
         this.latest.push(this.p1, this.p2)
         return this.latest
      }
    }
  }
}
