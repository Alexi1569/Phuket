$(document).ready(function($) {
    // Get the comment form
    var commentform = $('#commentform');
    var sent_text = $("input[name='comments_sent_text']");
    var success_text = $("input[name='comments_success_text']");
    var error_text = $("input[name='comments_error_text']");
    // Add a Comment Status message
    commentform.prepend('<div id="comment-status" ></div>');
    // Defining the Status message element
    var statusdiv = $('#comment-status');
    commentform.submit(function () {
        // Serialize and store form data
        var formdata = commentform.serialize();
        //Add a status message
        statusdiv.html('<p class="ajax-placeholder">'+sent_text.val()+'</p>');
        //Extract action URL from commentform
        var formurl = commentform.attr('action');
        //Post Form with data
        $.ajax({
            type: 'post',
            url: formurl,
            data: formdata,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                statusdiv.html('<p class="ajax-error" >'+error_text.val()+'</p>');
            },
            success: function (data, textStatus) {
                console.log(textStatus);
                //if (data == "success")
                statusdiv.html('<p class="ajax-success" >'+success_text.val()+'</p>');
                // else
                //   statusdiv.html('<p class="ajax-error" >Пожалуйста, подождите некоторое время, прежде чем публиковать следующий комментарий.</p>');
                commentform.find('textarea[name=comment]').val('');
                commentform.find('input[name=author]').val('');
                commentform.find('input[name=email]').val('');
            }
        });
        return false;
    });
});