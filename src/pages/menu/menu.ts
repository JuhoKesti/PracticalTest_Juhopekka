import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home/CV', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'About', pageName: 'HomePage', tabComponent: 'AboutPage', index: 1, icon: 'contact'},
    {title: 'Hobbies', pageName: 'HomePage', tabComponent: 'HobbiesPage', index: 2,  icon: 'list'},
    {title: 'Contact', pageName: 'HomePage', tabComponent: 'ContactPage', index: 3,  icon: 'contact'}
  ]

  /** Configured pathing to new pages // Juhopekka Kesti(1601537) */

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){
let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}
  }

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
  }

} 