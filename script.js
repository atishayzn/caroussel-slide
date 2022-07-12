$('document').ready(function() {
    var i=0;
    const mvp=1;
    var n=$('.photos img').length
    $('.prev').click(function(){ 
        $('.photos img').eq(i).removeClass('shown');
        $('.pagination-dots div').eq(i).removeClass('shown')
        i-=mvp;
        if(i<=0){
            i=0
            $('.prev').removeClass('shown')
        }
        if(i<n-1){
            $('.next').addClass('shown')
        } 
        $('.photos img').eq(i).addClass('shown');
        $('.pagination-dots div').eq(i).addClass('shown')
    })
    $('.next').click(function(){ 
        $('.photos img').eq(i).removeClass('shown');
        $('.pagination-dots div').eq(i).removeClass('shown')
        i+=mvp; 
        if(i>=n-1){
            i=n-1
            $('.next').removeClass('shown')
        }
        if(i>0){
            $('.prev').addClass('shown')
        } 
        $('.photos img').eq(i).addClass('shown');
        $('.pagination-dots div').eq(i).addClass('shown')
    })

    renderDots(n)

    $('.dot').click(function(e){
      var parent=this.parentNode
      var index = Array.prototype.indexOf.call(parent.children, e.target);

      
      console.log(parent.children)
      $('.photos img').eq(i).removeClass('shown');
      $('.pagination-dots div').eq(i).removeClass('shown')
      i=index
      if(i>=n-1){
        i=n-1
        $('.next').removeClass('shown')
      }
      if(i>0){
          $('.prev').addClass('shown')
      } 
      if(i<=0){
        i=0
        $('.prev').removeClass('shown')
      }
      if(i<n-1){
          $('.next').addClass('shown')
      }
      $('.photos img').eq(i).addClass('shown');
      $('.pagination-dots div').eq(i).addClass('shown')
      
    })

  
});

function renderDots(slideCount){
  for(var i=0;i<slideCount;i++){
    $('.pagination-dots').append("<div class='dot'></div>")
  }
  $('.pagination-dots div').eq(0).addClass('shown')

}

