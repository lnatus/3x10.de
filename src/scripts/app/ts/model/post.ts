namespace X10 {
  export namespace Model {
    export class Post {

      private _id: string
      private _url: string
      private _title: string
      private _teaser: string
      private _thumbnail: string
      private _date: Date
      private _meta: string[]

      public isValid() : boolean {
        return Boolean(this._id) && Boolean(this._url) &&
               Boolean(this._title) && Boolean(this._teaser) &&
               Boolean(this._thumbnail)
      }

      public render($container) {
        if(this.isValid) {
          let meta = ''

          for(const tag of this._meta) {
            meta += `&middot; ${ tag }`
          }

          const post = `<a id='${ this._id }' href='${ this._url }' class='x10-post'>
                              <div class='row'>
                                <div class='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                                  <img src='${ this._thumbnail }' alt='${ this._title }' />
                                </div>
                                <div class='col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
                                  <h3>${ this._title }</h3>
                                  <p>
                                    ${ this._teaser }
                                  </p>
                                  <small>${ this._date }</small>
                                  <small>${ meta }</small>
                                </div>
                              </div>
                            </a>`

          $container.append(post)
        }
      }

      constructor(id: string, url: string, title: string, teaser: string, thumbnail: string, date: Date, meta: string[]) {
          this._id = id
          this._url = url
          this._title = title
          this._teaser = teaser
          this._thumbnail = thumbnail
          this._date = date
          this._meta = meta
      }
    }
  }
}
