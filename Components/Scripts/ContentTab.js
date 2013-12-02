var viewBackupButtonMenu = Ext.create('Ext.menu.Menu', {
    plain: true,
    items: [{
         text: 'Lorem Ipsum 1',
         handler: function () {
            console.log('Lorem Ipsum 1 Handler');
        }
    }, {
        text: 'Lorem Ipsum 2',
        handler: function () {
            console.log('Lorem Ipsum 2 Handler');
        }
    }, {
        text: 'Lorem Ipsum 3',
        handler: function () {
            console.log('Lorem Ipsum 3 Handler');
        }
    }]
});

var viewBackupButton = Ext.create('Ext.button.Split', {
    text: 'View Backup',
    icon: '\/images\/view-icon.png',
    //tooltip: 'Copy',
    handler: function () {
        console.log('Copy Link Handler');
    },
    menu: viewBackupButtonMenu
});

viewBackupButton.on({
    click: function () {
        viewBackupButton.showMenu();
    },
    mouseover: function () {
        viewBackupButton.showMenu();
    },
    scope: this
});

var contentSubToolbar = {
        xtype: 'toolbar',
        dock: 'top',
        height: 30,
        items: [
                viewBackupButton,
                {
                    text: 'Notify Stakeholders',
                    icon: '\/images\/notify-icon.png',
                    handler: function () {
                        console.log('Notify Stakeholders icon clicked');
                    }
                }
        ]
    }
