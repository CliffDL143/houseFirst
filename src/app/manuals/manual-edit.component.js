"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var Observable_1 = require("rxjs/Observable");
var manual_service_1 = require("./manual.service");
var generic_validator_1 = require("../shared/generic-validator");
var ManualEditComponent = (function () {
    function ManualEditComponent(fb, route, router, manualService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.manualService = manualService;
        this.pageTitle = 'Manual Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            itemDescription: {
                required: 'Description is required.',
                maxlength: 'Decription cannot exceed 50 characters.'
            },
            fileLocation: {
                required: 'Manual location is required.'
            }
        };
        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    Object.defineProperty(ManualEditComponent.prototype, "tags", {
        get: function () {
            return this.manualForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ManualEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manualForm = this.fb.group({
            fileDate: '',
            itemDescription: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            fileLocation: ['', forms_1.Validators.required],
            tags: this.fb.array([]),
            itemModel: '',
            itemManufacturer: '',
            equipLocation: '',
            modelUrl: '',
        });
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getManual(id);
        });
    };
    ManualEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ManualEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, [this.manualForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.manualForm);
        });
    };
    ManualEditComponent.prototype.addTag = function () {
        this.tags.push(new forms_1.FormControl());
    };
    ManualEditComponent.prototype.getManual = function (id) {
        var _this = this;
        this.manualService.getManual(id)
            .subscribe(function (manual) { return _this.onManualRetrieved(manual); }, function (error) { return _this.errorMessage = error; });
    };
    ManualEditComponent.prototype.onManualRetrieved = function (manual) {
        if (this.manualForm) {
            this.manualForm.reset();
        }
        this.manual = manual;
        if (this.manual.id === 0) {
            this.pageTitle = 'Add Manual';
        }
        else {
            this.pageTitle = "Edit Manual: " + this.manual.itemDescription;
        }
        // Update the data on the form
        this.manualForm.patchValue({
            itemDescription: this.manual.itemDescription,
            fileLocation: this.manual.fileLocation,
            fileDate: this.manual.fileDate,
            itemModel: this.manual.itemModel,
            itemManufacturer: this.manual.itemManufacturer,
            equipLocation: this.manual.equipLocation,
            modelUrl: this.manual.modelUrl
        });
        this.manualForm.setControl('tags', this.fb.array(this.manual.tags || []));
    };
    ManualEditComponent.prototype.deleteManual = function () {
        var _this = this;
        if (this.manual.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the manual: " + this.manual.itemDescription + "?")) {
                this.manualService.deleteManual(this.manual.id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ManualEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.manualForm.dirty && this.manualForm.valid) {
            // Copy the form values over the product object values
            var p = Object.assign({}, this.manual, this.manualForm.value);
            this.manualService.saveManual(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (!this.manualForm.dirty) {
            this.onSaveComplete();
        }
    };
    ManualEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.manualForm.reset();
        this.router.navigate(['/manuals']);
    };
    return ManualEditComponent;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], ManualEditComponent.prototype, "formInputElements", void 0);
ManualEditComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Manuals/manual-edit.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        manual_service_1.ManualService])
], ManualEditComponent);
exports.ManualEditComponent = ManualEditComponent;
//# sourceMappingURL=manual-edit.component.js.map