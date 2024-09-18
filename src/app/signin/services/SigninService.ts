import { Injectable } from "@angular/core";

type Subscription = {
    email: string,
    phone: string
}

@Injectable({ providedIn: 'root'})
export class SigninService {
    private subscriptions: Subscription[] = [];

    constructor() {}

    signIn(subscription: Subscription) {
        this.subscriptions.push(subscription);
        return this.subscriptions;
    }
}