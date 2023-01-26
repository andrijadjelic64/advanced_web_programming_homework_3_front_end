import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Permission} from "../model/permission";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _selectedUser:User;
  constructor() { }



  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);

  }


  get selectedUser(): User {
    return this._selectedUser;
  }

  set selectedUser(value: User) {
    this._selectedUser = value;
  }

  public getData(key: string) {
    return localStorage.getItem(key)!.toString();
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

}
