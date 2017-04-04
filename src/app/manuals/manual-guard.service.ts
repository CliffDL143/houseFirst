import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

import { ManualEditComponent } from './manual-edit.component';

@Injectable()
export  class ManualDetailGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid manual Id');
            // start a new navigation to redirect to list page
            this.router.navigate(['/manuals']);
            // abort current navigation
            return false;
        };
        return true;
    }
}

@Injectable()
export  class ManualEditGuard implements CanDeactivate<ManualEditComponent> {

    canDeactivate(component: ManualEditComponent): boolean {
        if (component.manualForm.dirty) {
            let itemDescription = component.manualForm.get('itemDescription').value || 'New Manual';
            return confirm(`Navigate away and lose all changes to ${itemDescription}?`);
        }
        return true;
    }
}
