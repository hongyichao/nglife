import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  userLog: string[] = [];

  constructor() {

  }

  addLog(logTxt: string) {
    this.userLog.push(logTxt);
  }
}
