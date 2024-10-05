import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { IProfile } from '../../data/interfaces/profile';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() profile!: IProfile;
}
