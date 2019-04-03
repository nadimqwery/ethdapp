import { Injectable } from '@angular/core';


interface ShareObj {
  [id: string]: any;
}



@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  shareObj: ShareObj = {'EscrowDBAddress': '0xe66240dD7F8AeCfD31e49d3FF988D4140D4ee50f'

};

  constructor() { }
}
