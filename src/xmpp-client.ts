class XmppClient {
    endpoint: string;
    online: boolean;
    connected : boolean;
    jid: string;
    pass: string;
    connection: any;
    constate : string;
    ready() {
        console.log('xmpp-client ready, creating connection');
        this.connection = new Strophe.Connection(this.endpoint);
        if (this.online) this.connect();
    }
    connect() {
        this.online = true;
        this.connection.connect(this.jid, this.pass, this.throwConnect.bind(this));
    }
    disconnect() {
        this.online = false;
        this.connection.disconnect();
    }
    throwConnect(status : number) {
        if (status == Strophe.Status.CONNECTING) {
            this.constate = "CONNECTING";
        } else if (status == Strophe.Status.CONNFAIL) {
            this.constate = "CONFAIL";
        } else if (status == Strophe.Status.DISCONNECTING) {
            this.constate = "DISCONNECTING";
        } else if (status == Strophe.Status.DISCONNECTED) {
            this.constate = "DISCONNECTED";
            this.connected = false;
            this.fire('connect', false);
        } else if (status == Strophe.Status.CONNECTED) {
            this.constate = "CONNECTED";
            this.connected = true;
            this.fire('connect', true);
        }
        this.fire('constate', this.constate);
    }
    onlineChanged(oV, nV) {
        console.log("online: " + oV + " -> " + nV);
        if (nV)
            this.connect()
          else
            this.disconnect();
    }
}

/*   Setting prototype properties externally
 *   see https://typescript.codeplex.com/discussions/444777
 */
XmppClient.prototype.endpoint = '/xmpp-httpbind';
XmppClient.prototype.online = true;
XmppClient.prototype.connected = false;
XmppClient.prototype.constate  = "DISCONNECTED";


Polymer('xmpp-client', XmppClient.prototype);
