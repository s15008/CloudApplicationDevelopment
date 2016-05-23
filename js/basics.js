( function () {
    "use strict";

    kintone.events.on( 'app.record.index.show', function( event) {
        window.alert( 'Record List Events');
    });
})()
