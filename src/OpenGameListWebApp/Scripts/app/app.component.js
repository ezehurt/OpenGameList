System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "OpenGameList";
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: "opengamelist",
                    template: "\n            <h1>{{title}}</h1>\n            <div class=\"menu\">\n<a class=\"home\" [routerLink]=\"['']\">Home</a>\n| <a class=\"about\" [routerLink]=\"['about']\">About</a>\n| <a class=\"login\" [routerLink]=\"['login']\">Login</a>\n</div>\n<router-outlet></router-outlet>\n",
                    styles: ["\nitem-list {\nmin-width: 332px;\nborder: 1px solid #aaaaaa;\ndisplay: inline-block;\nmargin: 0 10px;\npadding: 10px;\n}\nitem-list.latest {\nbackground-color: #f9f9f9;\n}\nitem-list.most-viewed {\nbackground-color: #f0f0f0;\n}\nitem-list.random {\nbackground-color: #e9e9e9;\n}\n"]
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
