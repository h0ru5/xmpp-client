# &lt;xmpp-timeline&gt;

> Custom element providing a XMPP client
>
> Based on strophe.js

## Demo

[Check it live!](http://h0ru5.github.io/xmpp-client)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install xmpp-client --save
```

Or [download as ZIP](https://github.com/h0ru5/xmpp-client/archive/master.zip).

## Usage

1. Import Web Components polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/xmpp-client/dist/xmpp-client.html">
    ```

3. Start using it!

    ```html
        <xmpp-client jid="test@jabber.org" password="xyz" />
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`jid`        | *string*    | ``           | The jid to use
`pass`        | *string*    | ``           | The password (you probably want to set this imperatively)
`host`       | *string*    | domain part of `jid`       | hostname to connect
``connected``      | *boolean*   | `true`       | start connected?




## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`connect()`    | None.        | Nothing.    | Open connection
`disconnect()`    | None.        | Nothing.    | Close connection
`send(jid,msg)`    | `jid` target,  `msg` (string)        | Nothing.    | send text message
`sendRaw(jid,xml)`    | `jid` target,  `xml` Raw stanza as XML string        | Nothing.    | send custom stanza
`setPresence(msg)`    | `msg` presence string        | Nothing.    | set presence


## Events

Event         | Description
---           | ---
`onStanza` | Triggers when incoming stanza
`onConnect` | Triggers when connection status changes

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/h0ru5/xmpp-client/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
