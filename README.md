## clicktrack

ClickTrack is a webpart for Sharepoint Office 365. You can add the webpart to a Sharepoint page, 
clicks on the content item will be tracked and scored in a rise.global scorecard for that user.

It's written in Typescript and Node.js.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.


