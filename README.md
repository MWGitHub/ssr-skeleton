# React SSR Skeleton

### Usage

`npm i`
`npm run dev`

May need to cancel and run dev again.

Navigate to localhost:3000
See that hydrate does not log anything.
Click the "Click" button, it should log something.

Change the following line in `./src/containers/Inner.jsx' from
`ReactDOM.hydrate(<Inner />, document.getElementById('app'));`
to
``ReactDOM.hydrate(<Inner />, document.getElementById('app'));`

The console log should now show for both the image loading and click.
