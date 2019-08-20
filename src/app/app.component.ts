import 'hammerjs';
import { Component, OnInit } from '@angular/core';
import { MenuModel } from './models/menu.model';
import { MenuItem } from './interfaces/menu.interfaces';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'klindic-com';
    menuItems: Array<MenuItem> = [];

    constructor(
        private storageService: StorageService
    ) { }

    ngOnInit() {
        this.menuItems = MenuModel.menuItems;
        this.setCurrentPage();
    }

    setCurrentPage() {
        let currentPageId: string = this.storageService.getItem(sessionStorage, 'currentPageId');
        if(currentPageId != undefined) {
            this.menuItems.find(menuItem => menuItem.id === parseInt(currentPageId)).active = true;
        } else {
            this.menuItems[0].active = true;
            this.storageService.setItem(sessionStorage, 'currentPageId', '0');
        }
    }

    navigateSelected(id: number) {
        this.menuItems.forEach(menuItem => {
            menuItem.active = false;
            if (menuItem.id === id) {
                menuItem.active = true;
                this.storageService.setItem(sessionStorage, 'currentPageId', menuItem.id.toString());
            }
        });
    }

    getMenuItemById(id: number) {
        return this.menuItems.find(menuItem => menuItem.id === id);
    }
}
