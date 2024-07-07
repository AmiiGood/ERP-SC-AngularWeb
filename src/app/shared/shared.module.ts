import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  imports: [CommonModule, ToolbarModule, AvatarGroupModule, AvatarModule],
  exports: [HeaderComponent, ButtonComponent], // Exporta HeaderComponent
})
export class SharedModule {}
