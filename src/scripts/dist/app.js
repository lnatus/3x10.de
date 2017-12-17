var $ = window.$;
var X10;
(function (X10) {
    var App = (function () {
        function App() {
        }
        App.prototype.init = function () {
            var cta = new X10.Components.CallToAction();
            cta.init();
            var cc = new X10.Components.CalorieCalulator();
            cc.init();
        };
        return App;
    }());
    X10.App = App;
})(X10 || (X10 = {}));
var X10;
(function (X10) {
    var Components;
    (function (Components) {
        var CalorieCalulator = (function () {
            function CalorieCalulator() {
            }
            CalorieCalulator.prototype.getFormData = function () {
                var age = +$('#inputAge').val();
                var gender = +$('#inputGender').val();
                var size = +$('#inputSize').val();
                var weight = +$('#inputWeight').val();
                var activity = +$('#inputActivity').val();
                var habits = +$('#inputHabits').val();
                var target = +$('#inputTarget').val();
                var disciplin = +$('#inputDisciplin').val();
                return new X10.Model.Calorie(age, gender, size, weight, activity, target);
            };
            CalorieCalulator.prototype.showError = function () {
                $('#js-x10-calorie-calc-error').show();
            };
            CalorieCalulator.prototype.getResultTemplate = function (nutrition) {
                var targetCalories;
                var targetLabel;
                var targetDisciplin = '';
                switch (nutrition.target) {
                    case 0:
                        targetCalories = nutrition.totalCalories;
                        targetLabel = "Wohlbefinden verbessern";
                        break;
                    case 1:
                        targetLabel = "Muskel- und Kraftaufbau";
                        targetCalories = nutrition.bulkCalories;
                        break;
                    case 2:
                        targetLabel = "Fettreduktion (Abnehmen)";
                        targetCalories = nutrition.diatCalories;
                }
                return "<div class=\"x10-calorie-calc-result\">\n                  <h2 class=\"x10-cl-red\">Kalorien</h2>\n                  <p>Dein Grundumsatz liegt aktuell bei <strong>" + nutrition.baseMetabolism + " kcal/Tag.</strong></p>\n                  <p>Die Gesamtkalorien liegen bei deinem aktuellen Aktivit\u00E4tslevel bei <strong>" + nutrition.totalCalories + " kcal/Tag</strong></p>\n                  <h2 class=\"lnf-branding\">" + targetLabel + "</h2>\n                  <p>\n                    F\u00FCr Deine Zielsetzung <strong>" + targetLabel + "</strong>, solltest du aktuell <strong>" + targetCalories + " kcal/Tag</strong> zu dir nehmen.\n                  </p>\n                  <a class=\"btn x10-btn\" href=\"app-kalorien-rechner.html\">Erneut Starten</a>\n                </div>";
            };
            CalorieCalulator.prototype.init = function () {
                var _this = this;
                if (location.href.indexOf('/app-kalorien-rechner') > -1) {
                    $('#js-x10-calorie-calc-error button').click(function () {
                        $('#js-x10-calorie-calc-error').hide();
                    });
                    $('#js-x10-app-calorie-calc-run').click(function () {
                        _this.run();
                    });
                }
            };
            CalorieCalulator.prototype.run = function () {
                if (location.href.indexOf('/app-kalorien-rechner') > -1) {
                    var $resultContainer = $('#js-x10-calorie-calc-result')[0];
                    var $formContainer = $('#js-x10-calorie-calc-form');
                    var form = this.getFormData();
                    if (form.isValid()) {
                        var template = this.getResultTemplate(form);
                        $resultContainer.innerHTML = template;
                        $formContainer.hide();
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                    }
                    else {
                        this.showError();
                    }
                }
            };
            return CalorieCalulator;
        }());
        Components.CalorieCalulator = CalorieCalulator;
    })(Components = X10.Components || (X10.Components = {}));
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
                var template = "<div class=\"x10-cta\" id=\"x10-cta-fb\">\n                            <div class=\"x10-cta-head\">\n                                <i id=\"x10-cta-fb-close\" class=\"fa fa-close\"></i>\n                                <img src=\"images/cta-fb.png\" alt=\"3x10.de\" />\n                                <div class=\"lnf-divider\"></div>\n                                <i class=\"fa fa-facebook-square\"></i>\n                              </div>\n                              <div class=\"x10-cta-body\">\n                                <h2>Sch\u00F6n, dass Du da bist!</h2>\n                                <p>Like 3x10.de auf Facebook und du bleibst immer auf dem Laufenden.</p>\n                                <p>Wir freuen uns auf Dich!</p>\n                                <iframe src=\"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2F3x10de&width=1000&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId\" width=\"100\" height=\"65\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\n                              </div>\n                            </div>";
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
        var Calorie = (function () {
            function Calorie(age, gender, size, weight, activity, target) {
                this.age = age;
                this.gender = gender;
                this.size = size;
                this.weight = weight;
                this.activity = activity;
                this.target = target;
                // WOMEN
                if (this.gender == 0) {
                    this.baseMetabolism = Math.round(655 + (9.6 * this.weight) + (1.8 * this.size) - (4.7 * this.age));
                }
                else {
                    this.baseMetabolism = Math.round(66 + (13.7 * this.weight) + (5 * this.size) - (6.8 * this.age));
                }
                this.totalCalories = Math.round((this.baseMetabolism * this.activity));
                this.diatCalories = Math.round(this.totalCalories - (500 - (this.activity * 80)));
                this.bulkCalories = Math.round(this.totalCalories + (400 + (this.activity * 80)));
            }
            Calorie.prototype.isValid = function () {
                return this.gender >= 0 &&
                    this.size > 0 &&
                    this.weight > 0 &&
                    this.activity >= 0 &&
                    this.target >= 0;
            };
            return Calorie;
        }());
        Model.Calorie = Calorie;
    })(Model = X10.Model || (X10.Model = {}));
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
