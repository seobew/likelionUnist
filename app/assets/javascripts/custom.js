$(function(){
  var strings = ["Change The World With Coding", "&lt;h1&gt; Hello World! &lt;/h1&gt; ", "&lt;p&gt;Hello UNISTAR&lt;/p&gt; "];

  typing();

  function typing(index) {
    if (!index) index = 0;
    if (!strings[index]) {
      typingComplete();
      return;
    }

    var $font_box2 = $('<div class="font_box2 f' + index + '" />');
    $font_box2.append($('<div class="font" />'));

    $('.font_box').append($font_box2);

    $('.font_box .font_box2:last-child .font').typed({
      strings: [strings[index]],
      typeSpeed: 20,
      showCursor: false,
      callback: function callback() {
        setTimeout(function () {
          typing(++index);
        }, 200);
      }
    });
  }
});

$(document).on('ready page:load', function(){
  var pth = '/users/sign_in';
  var pth2 = '/users/sign_up';
  if(window.location.pathname == pth || window.location.pathname == pth2){
    $("#title_logo").attr("href", "/");
  }
  else{
    $('#title_logo').attr('href','#page-top');
  }
});


$(window).scroll(function(){
  if ($(window).scrollTop() > 50) {
    $('nav').removeClass('navbar-trans', 300);
    $('nav').removeClass('navbar-inverse', 300);
    $('nav').addClass('navbar-small', 300);
    $("#animation").attr("src", "/uniwebsite/logo/logo_s.png");
  }
  else {
    $('nav').addClass('navbar-trans', 300);
    $('nav').addClass('navbar-inverse', 300);
    $('ul').addClass('navbar-font', 300);
    $('nav').removeClass('navbar-small', 300);
    $("#animation").attr("src", "/uniwebsite/logo/logo.png");
  }
});

// easing menu
$(document).on('ready page:load', function(){
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// a tag active 활성화
/*
$(document).ready(function(){
  var nav_li = '#active_test li a'
  $(nav_li).on('click', function(){
    $(nav_li).removeClass('active');
    $(this).addClass('active');
  });
});
*/


// nav bar 스크롤
$(document).ready(function(){
  var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
            var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
            console.log(nav_height);
           // console.log(top, bottom);
            console.log(cur_pos);
           // console.log(nav.find('a'));
            //nav.find('li').removeClass('active');
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            //console.log($(this));
            //console.log(nav.find('a[href="#'+$(this).attr('id')+'"]'));
            $(this).addClass('active');
            //nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
    });
  });
});

//패스워드 찾기 모달& 계정 삭제시 seet alert //
$(document).ready(function(){
    $('#link').click(function(){
     $('#modal1').openModal();
    });

  $('.new_user').on('submit', function(event) {

    var input = $('.find_password');
    if(input.val().length == 0){
       event.preventDefault();
    }
  });

  $('.account_delete').click(function(event){
    swal({   title: "정말 삭제하시겠습니까?",  
      text: "삭제 확인 하시면 아이디가 삭제됩니다.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "삭제 확인",
      cancelButtonText: "취소",
      closeOnConfirm: false,
      closeOnCancel: false 
    }, function(isConfirm){   
      if (isConfirm) {    
        $.ajax({
          type: 'delete',
          url: '/users',
          success: function(response) {
            if(response.status) {
              swal({
                title: '삭제되었습니다',
                text: "아이디삭제가 완료되었습니다",
                confirmButtonText: "취소"
              }, function() {
                location.href = '/';
              });
            }
          }
        });

      } else {
        swal("취소되었습니다", "아이디가 삭제되지 않았습니다", "error");
      }
    }); 
  });
  $('.button_login').click(function(event){
    swal("사용자 인증 메일을 보냅니다", "( only UNIST 포탈 이메일 )")
    
  });
});
