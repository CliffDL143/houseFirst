"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//import { ToolService } from './tool.service';
var ToolDetailComponent = (function () {
    function ToolDetailComponent() {
        this.pageTitle = 'Tool Detail';
        //  private sub: Subscription;
        /*   constructor(private _route: ActivatedRoute,
                       private _router: Router,
                       private _productService: ProductService) {
           }
       
         ngOnInit(): void {
               this.sub = this._route.params.subscribe(
                   params => {
                       let id = +params['id'];
                       this.getTool(id);
               });
           }
       
           ngOnDestroy() {
               this.sub.unsubscribe();
           }
       
           getProduct(id: number) {
               this._productService.getTool(id).subscribe(
                   Tool => this.tool = tool,
                   error => this.errorMessage = <any>error);
           }
       
           onBack(): void {
               this._router.navigate(['/equip']);
           }
       
           onRatingClicked(message: string): void {
               this.pageTitle = 'Tool Detail: ' + message;
           }
           
           
           
           */
    }
    return ToolDetailComponent;
}());
ToolDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/equip/tool-detail.component.html'
    })
], ToolDetailComponent);
exports.ToolDetailComponent = ToolDetailComponent;
//# sourceMappingURL=tool-details.component.js.map