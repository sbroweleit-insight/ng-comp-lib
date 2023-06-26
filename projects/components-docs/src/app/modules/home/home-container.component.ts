import { Component } from '@angular/core';

@Component({
  selector: 'cui-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {
  subSections = [
    {
      icon: 'info',
      label: 'Overview',
      route: 'overview',
    },
    {
      icon: 'tips_and_updates',
      label: 'Request Updates',
      route: 'request-updates',
    },
    {
      icon: 'history',
      label: 'Changelog',
      route: 'changelog',
    },
    {
      icon: 'download',
      label: 'Install Guide',
      route: 'install-coreui',
    },
    {
      icon: 'volunteer_activism',
      label: 'Want to Contribute?',
      route: 'contributing',
    },
  ];
}
