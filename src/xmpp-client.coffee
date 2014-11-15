class XmppClient
    endpoint: '/xmpp-httpbind',
    online: true,
    jid: null,
    pass: null,
    connection: null,
    ready: () ->
        console.log('xmpp-client ready, creating connection');
        @connection = new Strophe.Connection(this.endpoint);
        this.connect() if @online
    connect: () ->
        @online = true
        this.connection.connect(this.jid, this.pass, this.throwConnect.bind(this))
    disconnect: () ->
        @online = false
        connction.disconnect()
    throwConnect: (status) ->
        if (status == Strophe.Status.CONNECTING)
            @constate = "CONNECTING"
        else if (status == Strophe.Status.CONNFAIL)
            @constate = "CONFAIL"
        else if (status == Strophe.Status.DISCONNECTING)
            @constate = "DISCONNECTING"
        else if (status == Strophe.Status.DISCONNECTED)
            @constate = "DISCONNECTED"
            @connected = false
            this.fire('connect', false)
        else if (status == Strophe.Status.CONNECTED)
            @constate = "CONNECTED"
            @connected = true
            this.fire('connect', true)
        this.fire('constate', this.constate)

    onlineChanged: (oV, nV) ->
        console.log("online: " + oV + " -> " + nV)
        if (nV)
            this.connect()
        else
            this.disconnect();

Polymer('xmpp-client', XmppClient.prototype);
