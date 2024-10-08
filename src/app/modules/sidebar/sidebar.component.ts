import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
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
