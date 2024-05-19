import { Component } from '@angular/core';

import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-information-notification',
  standalone: true,
  imports: [],
  templateUrl: './information-notification.component.html',
  styleUrl: './information-notification.component.scss',
})
export class InformationNotificationComponent extends Toast {
  override message!: string;

  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
    if (toastPackage.toastRef && toastPackage.toastRef.componentInstance) {
      this.message = toastPackage.toastRef.componentInstance.message;
    }
  }

  dismiss() {
    this.toastPackage.triggerAction();
    this.toastrService.clear(this.toastPackage.toastId);
  }
}
