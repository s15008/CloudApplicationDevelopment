( function() {
    "use strict";

    // レコード登録後にレベルを算出する
    kintone.events.on( [ 'app.record.create.submit', 'app.record.edit.submit'], function( event) {
        var record = event.record;
        var score = record['score'].value;

        /*
        var level_origin = 22;
        var level_step = 17;
        var score_max = 300;
        var level_min_point = 'E'.codePointAt(0);
        for ( var i = 0; i < level_max; i++ ) {
            if ( score < i*level_step + level_origin) {
                level_min_point + i
                break;
            }
        }
        */

        var level = 'love';
        if ( score < 22) {
            level = 'E-';
        }
        else if ( score < 39) {
            level = 'E';
        }
        else if ( score < 56) {
            level = 'E+';
        }
        else if ( score < 73) {
            level = 'D-';
        }
        else if ( score < 90) {
            level = 'D';
        }
        else if ( score < 107) {
            level = 'D+';
        }
        else if ( score < 124) {
            level = 'C-';
        }
        else if ( score < 141) {
            level = 'C';
        }
        else if ( score < 158) {
            level = 'C+';
        }
        else if ( score < 175) {
            level = 'B-';
        }
        else if ( score < 192) {
            level = 'B';
        }
        else if ( score < 209) {
            level = 'B+';
        }
        else if ( score < 226) {
            level = 'A-';
        }
        else if ( score < 243) {
            level = 'A';
        }
        else if ( score < 260) {
            level = 'A+';
        }
        else if ( score < 277) {
            level = 'S';
        }
        else {
            level = 'Good';
        }

        record['level'].value = level;

        return event;
    });
})();
