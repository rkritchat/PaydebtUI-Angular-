import { Component } from '@angular/core';
import { UtilComponent } from '../../util/util.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'tab-home',
    templateUrl: 'tab-home.component.html',
    styleUrls: ['../home.component.scss']
})
export class TabHomeComponent {
    constructor(
        private commonUtil:UtilComponent,
        private router: Router,
        private route: ActivatedRoute,) { }
    
    sendMeLogin(){
        this.router.navigate(['login']);
    }
}
