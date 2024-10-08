import { Component } from '@angular/core';
import {SvgIconComponent} from '../../shared/ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  protected menuItems: {
    label: string,
    icon: string,
    link: string,
  }[]= [
    {
      label: "Моя страница",
      icon: 'home',
      link: ''
    },
    {
      label: "Чаты",
      icon: 'chat',
      link: 'chats'
    },
    {
      label: "Поиск",
      icon: 'search',
      link: 'search'
    }
  ]
}
