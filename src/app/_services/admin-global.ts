import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
  readonly baseAppUrl: string = 'http://localhost/elearn/';
  readonly baseAppUpload: string = '/upload';
  // readonly baseAPIUrl: string = 'http://colegiodigital360.com.pe';
  readonly baseAPIUrl: string = '/server';
}


