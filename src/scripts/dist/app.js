var $ = window.$;
var X10;
(function (X10) {
    var App = (function () {
        function App() {
        }
        App.prototype.init = function () {
            var cta = new X10.Components.CallToAction();
            cta.init();
        };
        return App;
    }());
    X10.App = App;
})(X10 || (X10 = {}));
var X10;
(function (X10) {
    var Components;
    (function (Components) {
        var CallToAction = (function () {
            function CallToAction() {
                this.fb = "#x10-cta-fb";
                this.fbClose = "#x10-cta-fb-close";
            }
            CallToAction.prototype.render = function (ready) {
                var template = "<div class=\"x10-cta\" id=\"x10-cta-fb\">\n                            <div class=\"x10-cta-head\">\n                                <i id=\"x10-cta-fb-close\" class=\"fa fa-close\"></i>\n                                <img src=\"images/cta-fb.png\" alt=\"LARS NATUS FITNESS\" />\n                                <div class=\"lnf-divider\"></div>\n                                <i class=\"fa fa-facebook-square\"></i>\n                              </div>\n                              <div class=\"x10-cta-body\">\n                                <h2>Sch\u00F6n, dass Du da bist!</h2>\n                                <p>Like 3x10.de auf Facebook und du bleibst immer auf dem Laufenden.</p>\n                                <p>Wir freuen uns auf Dich!</p>\n                                <iframe src=\"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2F3x10de&width=1000&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId\" width=\"100\" height=\"65\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n                              </div>\n                            </div>";
                $('body').append(template);
                ready();
            };
            CallToAction.prototype.init = function () {
                var that = this;
                that.render(function () {
                    var $fb = $(that.fb);
                    var $fbClose = $(that.fbClose);
                    $fbClose.click(function () {
                        $fb.slideToggle('slow');
                    });
                    setTimeout(function () {
                        $fb.slideToggle('slow');
                    }, 10000);
                });
            };
            return CallToAction;
        }());
        Components.CallToAction = CallToAction;
    })(Components = X10.Components || (X10.Components = {}));
})(X10 || (X10 = {}));
var X10;
(function (X10) {
    var Db;
    (function (Db) {
        var Posts = (function () {
            function Posts() {
                this.latest = new Array();
                this.p1 = new X10.Model.Post('2017_12-05-P1', 'http://google.de', 'First Post', 'My First Post Teaser', 'images/2017/12/1.png', new Date(), ['Bodybuilding', 'Fitness']);
                this.p2 = new X10.Model.Post('2017-12-05-P2', 'http://google.de', 'Second Post', 'My Second Post Teaser', 'images/2017/12/1.png', new Date(), ['Bodybuilding', 'Fitness']);
            }
            Posts.prototype.getLatest = function () {
                this.latest.push(this.p1, this.p2);
                return this.latest;
            };
            return Posts;
        }());
        Db.Posts = Posts;
    })(Db = X10.Db || (X10.Db = {}));
})(X10 || (X10 = {}));
var X10;
(function (X10) {
    var Model;
    (function (Model) {
        var Post = (function () {
            function Post(id, url, title, teaser, thumbnail, date, meta) {
                this._id = id;
                this._url = url;
                this._title = title;
                this._teaser = teaser;
                this._thumbnail = thumbnail;
                this._date = date;
                this._meta = meta;
            }
            Post.prototype.isValid = function () {
                return Boolean(this._id) && Boolean(this._url) &&
                    Boolean(this._title) && Boolean(this._teaser) &&
                    Boolean(this._thumbnail);
            };
            Post.prototype.render = function ($container) {
                if (this.isValid) {
                    var meta = '';
                    for (var _i = 0, _a = this._meta; _i < _a.length; _i++) {
                        var tag = _a[_i];
                        meta += "&middot; " + tag;
                    }
                    var post = "<a id='" + this._id + "' href='" + this._url + "' class='x10-post'>\n                              <div class='row'>\n                                <div class='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>\n                                  <img src='" + this._thumbnail + "' alt='" + this._title + "' />\n                                </div>\n                                <div class='col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>\n                                  <h3>" + this._title + "</h3>\n                                  <p>\n                                    " + this._teaser + "\n                                  </p>\n                                  <small>" + this._date + "</small>\n                                  <small>" + meta + "</small>\n                                </div>\n                              </div>\n                            </a>";
                    $container.append(post);
                }
            };
            return Post;
        }());
        Model.Post = Post;
    })(Model = X10.Model || (X10.Model = {}));
})(X10 || (X10 = {}));
