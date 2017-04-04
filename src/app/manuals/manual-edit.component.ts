import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IManual } from './manual';
import { ManualService } from './manual.service';

import { NumberValidators } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic-validator';

@Component({
    templateUrl: 'app/Manuals/manual-edit.component.html'
})
export class ManualEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Manual Edit';
    errorMessage: string;
    manualForm: FormGroup;

    manual: IManual;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get tags(): FormArray {
        return <FormArray>this.manualForm.get('tags');
    }

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private manualService: ManualService) {

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
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.manualForm = this.fb.group({
            fileDate: '',
            itemDescription: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            fileLocation: ['', Validators.required],
            tags: this.fb.array([]),
            itemModel: '',
            itemManufacturer: '',
            equipLocation: '',
            modelUrl: '',

        });

        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getManual(id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.manualForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.manualForm);
        });
    }

    addTag(): void {
        this.tags.push(new FormControl());
    }

    getManual(id: number): void {
        this.manualService.getManual(id)
            .subscribe(
                (manual: IManual) => this.onManualRetrieved(manual),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onManualRetrieved(manual: IManual): void {
        if (this.manualForm) {
            this.manualForm.reset();
        }
        this.manual = manual;

        if (this.manual.id === 0) {
            this.pageTitle = 'Add Manual';
        } else {
            this.pageTitle = `Edit Manual: ${this.manual.itemDescription }`;
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
    }

    deleteManual(): void {
        if (this.manual.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the manual: ${this.manual.itemDescription}?`)) {
                this.manualService.deleteManual(this.manual.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveProduct(): void {
        if (this.manualForm.dirty && this.manualForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.manual, this.manualForm.value);

            this.manualService.saveManual(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.manualForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.manualForm.reset();
        this.router.navigate(['/manuals']);
    }
}
