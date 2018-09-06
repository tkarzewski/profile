// import * as fs from 'fs';
import { Observable, combineLatest } from 'rxjs';

const fs = require('fs');
const { version: appVersion } = require('./package.json');
const exec = require('child_process').exec;

const getRevision = new Observable<string>(s => {
  exec('git rev-parse --short HEAD',
    function (error: Error, stdout: Buffer, stderr: Buffer) {
      if (error !== null) {
        // tslint:disable-next-line
        console.log('git error: ' + error + stderr);
      }
      s.next(stdout.toString().trim());
      s.complete();
    });
});

const getBranch = new Observable<string>(s => {
  exec('git rev-parse --abbrev-ref HEAD',
    function (error: Error, stdout: Buffer, stderr: Buffer) {
      if (error !== null) {
        // tslint:disable-next-line
        console.log('git error: ' + error + stderr);
      }
      s.next(stdout.toString().trim());
      s.complete();
    });
});


combineLatest(getRevision, getBranch)
  .subscribe(([revision, branch]) => {
    // tslint:disable-next-line
    console.log(`version: '${appVersion}', revision: '${revision}', branch: '${branch}'`);

    const timestamp = new Date();
    const content = '// this file is automatically generated by git.version.ts script\n' +
      'export const versions = {\n' +
      `  version: '${appVersion}',\n` +
      `  revision: '${revision}',\n` +
      `  branch: '${branch}',\n` +
      `  buildtime: '${timestamp}'\n` +
      '};\n';

    fs.writeFileSync(
      'src/app/versions.ts',
      content,
      {encoding: 'utf8'}
    );
  });