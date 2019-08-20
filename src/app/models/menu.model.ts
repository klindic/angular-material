import { MenuItem } from '../interfaces/menu.interfaces';

export abstract class MenuModel {
    static menuItems: Array<MenuItem> = [
        {
            id: 0,
            name: 'Home',
            active: false
        },
        {
            id: 1,
            name: 'About us',
            active: false
        },
        {
            id: 2,
            name: 'Blog',
            active: false
        },
        {
            id: 3,
            name: 'Services',
            active: false
        },
        {
            id: 4,
            name: 'Products',
            active: false
        },
        {
            id: 5,
            name: 'Contact',
            active: false
        }
    ]
}