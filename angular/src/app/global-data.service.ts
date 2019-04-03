import { Injectable } from '@angular/core';


interface ShareObj {
  [id: string]: any;
}



@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  shareObj: ShareObj = {'EscrowDBAddress': '0x7820AD72F4D32679460589110D989c148Aa2ddD4'

};

  constructor() { }
}
