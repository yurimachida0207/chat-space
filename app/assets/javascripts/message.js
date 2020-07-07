$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main">
          <div class="Chat-main__group_info">
            <div class="Chat-main__group_info__message">
              ${message.user_name}
            </div>
            <div class="MessageInfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__content">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Chat-main">
        <div class="Chat-main__group_info">
          <div class="Chat-main__group_info__message">
            ${message.user_name}
          </div>
          <div class="MessageInfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__content">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message_list').append(html);
      $('.Chat-main__message_list').animate({ scrollTop: $('.Chat-main__message_list')[0].scrollHeight});    
      $('.Form')[0].reset();
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
  });
  })
})
