import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  getUserDetails(data: any) {
    console.log("service data:", data)
  }
}

