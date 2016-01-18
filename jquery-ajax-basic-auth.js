/*!
 * AjaxBasicAuth v0.1.0 (https://github.com/rarconte/ajaxBasicAuth)
 * Copyright 2016 Rodrigo Arriaza.
 * Licensed under MIT (https://github.com/rarconte/ajaxBasicAuth/blob/master/LICENSE)
 */

(function( $ ) {
 
    $.fn.basicAuth = function(options) {

        var settings = $.extend({
            success: function(){},
            error: function(status, error){}
        }, options );

        console.debug(settings);
 
        $('form').on('submit', function(e){
            e.preventDefault();

            var username = $(this).find('input[type=text]').val();
            var password = $(this).find('input[type=password]').val();

            var ajax = $.ajax({
                type: $(this).prop('method'),
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ':' + password)
                },
                url: $(this).prop('action'),
                success: settings.success,
                error: function(data) {
                    settings.error(data.status, data.statusText)
                }
            });
        });
        
        return this;
    };
 
}( jQuery ));
