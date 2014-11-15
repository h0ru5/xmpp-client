Polymer('xmpp-client', {
    endpoint: '/xmpp-httpbind',
    online: true,
    jid: null,
    pass: null,
    connection: null,
    ready: function() {
        console.log('xmpp-client ready, creating connection');
        this.connection = new Strophe.Connection(this.endpoint);
        if (this.online) this.connect();
    },
    connect: function() {
        this.online = true;
        this.connection.connect(this.jid, this.pass, this.throwConnect.bind(this));
    },
    disconnect: function() {
        this.online = false;
        connction.disconnect();
    },
    throwConnect: function(status) {
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
    },
    onlineChanged: function(oV, nV) {
        console.log("online: " + oV + " -> " + nV);
        if (nV)
            this.connect()
        else
            this.disconnect();
    }
});
