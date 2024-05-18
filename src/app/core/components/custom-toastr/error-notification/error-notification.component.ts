import { Component } from '@angular/core';

import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-error-notification',
  standalone: true,
  imports: [],
  templateUrl: './error-notification.component.html',
  styleUrl: './error-notification.component.scss',
})
export class ErrorNotificationComponent extends Toast {
  override title!: string;
  override message!: string;

  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
    if (toastPackage.toastRef && toastPackage.toastRef.componentInstance) {
      this.title = toastPackage.toastRef.componentInstance.title;
      this.message = toastPackage.toastRef.componentInstance.message;
    }
  }

  dismiss() {
    this.toastPackage.triggerAction();
    this.toastrService.clear(this.toastPackage.toastId);
  }
}
