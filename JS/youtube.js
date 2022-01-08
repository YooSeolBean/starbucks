  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  
  function onYouTubeIframeAPIReady() {
     new YT.Player('player', {
      // height: '360',
      // width: '640', //영상의 가로세로 너비(별도 지정 필요X)
      videoId: 'An6LvWQuj_8', // 최고 재생할 유튜브 영상 ID
      playerVars:{
         autoplay:true,// 자동재생 여부
         loop : true, // 반복재생 여부(반복재생할 유튜브 영상 ID목록을 제시해줘야 함)
         playlist :  'An6LvWQuj_8' // 반복재생할 유튜브 영상 ID 목록

      }, //영상을 제어하기 위한 여러가지 변수들 
      events:{
        onReady: function(event){
          event.target.mute() // target : 재생되고 있는 영상 자체를 의미

        } 
      }    
    
    });
  }

 