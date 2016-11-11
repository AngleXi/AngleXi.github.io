

(function (){
	$(function (){

		


		// ================================首页===================

        // ************边框运动***************
        function bdRun1(w,h,t,r,b,l){
	    	t.stop(true).animate({width:w},300,"linear");
	    	r.stop(true).animate({height:h},300,"linear");
	    	b.stop(true).animate({width:w},300,"linear");
	    	l.stop(true).animate({height:h},300,"linear");
	    }
	    function bdRun2(t,r,b,l){
	    	r.stop(true).animate({height:0,width:"1px"},300,"linear");
	    	 t.stop(true).animate({width:0,height:"1px"},300,"linear");
	    	 l.stop(true).animate({height:0,width:"1px"},300,"linear");
	    	 b.stop(true).animate({width:0,height:"1px"},300,"linear");
	    }

	    function bdRun11(i,w,h,t,r,b,l){
	    	t.eq(i).stop(true).animate({width:w},300,"linear");
	    	r.eq(i).stop(true).animate({height:h},300,"linear");
	    	b.eq(i).stop(true).animate({width:w},300,"linear");
	    	l.eq(i).stop(true).animate({height:h},300,"linear");
	    }
	    function bdRun22(i,t,r,b,l){
	    	r.eq(i).stop(true).animate({height:0,width:"1px"},300,"linear");
	    	 t.eq(i).stop(true).animate({width:0,height:"1px"},300,"linear");
	    	 l.eq(i).stop(true).animate({height:0,width:"1px"},300,"linear");
	    	 b.eq(i).stop(true).animate({width:0,height:"1px"},300,"linear");
	    }

		// *************banner图**************
		var aLi=$("#btn-list a");
		var imgs=$("#img-list li");
		var bannerList=$("#banner-list");
		var dirList=$("#dir-list");
		var leftDir=$("#left-dir");
		var rightDir=$("#right-dir");
		var iIndex=0;
		var iTimer=null;

		//划过小圆按钮
		aLi.mouseenter(function (){
			iIndex=$(this).index();
	        imgs.animate({opacity:0},function (){
				$(this).css({display:"none"});
			})
			imgs.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1});
			$("#btn-list a").removeClass("action").eq(iIndex).addClass("action");
		});

		//点击左侧按钮向左运动
		leftDir.click(function(){
			iIndex--;
			if(iIndex<0){
				iIndex=imgs.length-1;
			}
			imgs.animate({opacity:0},function (){
				$(this).css({display:"none"});
			})
			imgs.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1});
	        $("#btn-list a").removeClass("action").eq(iIndex).addClass("action");
		});
		//点击右侧按钮向右运动
		rightDir.click(function(){
			iIndex++;
			if(iIndex==imgs.length){
				iIndex=0;
			}
			imgs.animate({opacity:0},function (){
				$(this).css({display:"none"});
			})
			imgs.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1});
	        $("#btn-list a").removeClass("action").eq(iIndex).addClass("action");
		});
		//自动运动
		run();

		//划过bannerList清除定时器
		bannerList.hover(function (){
			clearInterval(iTimer);
		},function (){
			run();
		});

	    //封装运动
	    function run(){
	    	iTimer=setInterval(function (){
			iIndex++;
			if(iIndex==imgs.length){
				iIndex=0;
			}
			imgs.animate({opacity:0},function (){
				$(this).css({display:"none"});
			})
			imgs.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1});
	        $("#btn-list a").removeClass("action").eq(iIndex).addClass("action");
		},5000);
	    }

	    // *************banner左侧菜单栏**************

	    var menuLi=$("#nav-menu>li");
	    var menuspans=$("#nav-menu>li>span");
	    var menuems=$("#nav-menu>li>em");
	    var panels=$(".panel");
	    var subnavMenu=$("#sub-nav-menu");
	    menuLi.mouseenter(function(){
	    	var iIndex=$(this).index();
	    	panels.css({display:"none"}).eq(iIndex).css({display:"block"});
	    	menuLi.css({backgroundColor:""}).eq(iIndex).css({backgroundColor:"#e5004f"});
	    	menuspans.css({display:"block"}).eq(iIndex).css({display:"none"});
	    	menuems.css({backgroundPosition:""}).eq(iIndex).css({backgroundPosition:"0 -126px"});
	    });
	    subnavMenu.mouseleave(function (){
	    	panels.css({display:"none"});
	    	menuLi.css({backgroundColor:""});
	    	menuspans.css({display:"block"});
	    	menuems.css({backgroundPosition:""});
	    });

	    // *****************main1部分**************
	    var main1Li=$(".main1-top-ul>li");
	    var main1Com=$(".main1-com");
	    main1Li.mouseenter(function(){
	    	var iIndex=$(this).index();
	    	main1Li.removeClass("action").eq(iIndex).addClass("action");
	    	main1Com.css({display:"none"}).eq(iIndex).css({display:"block"});
	    });

	    var hLi=$(".h-li");
	    var main2Hua=$(".main2-hua");
	    var hLiSpan=$(".h-li span");
	    hLi.mouseenter(function(){
	    	var iIndex=$(this).index();
	    	hLi.css({borderBottom:"3px solid #333"}).eq(iIndex).css({borderBottom:"3px solid #e70050"});
	    	hLiSpan.css({display:"none"}).eq(iIndex).css({display:"block"});
	    	main2Hua.css({display:"none"}).eq(iIndex).css({display:"block"});
	    });

	    // ****************
	    
	      var main1BotList=$("#main1 .main1-bot-list");
	     main1BotList.hover(function(){
	    	var iIndex=$(this).index();
	    	var borderTop=$(this).find(".border-top");
		    var borderRight=$(this).find(".border-right");
		    var borderBottom=$(this).find(".border-bottom");
		    var borderLeft=$(this).find(".border-left");
	      bdRun1("220px","260px",borderTop,borderRight,borderBottom,borderLeft);
		 },function(){
	    	var iIndex=$(this).index(); 
	    	var borderTop=$(this).find(".border-top");
		    var borderRight=$(this).find(".border-right");
		    var borderBottom=$(this).find(".border-bottom");
		    var borderLeft=$(this).find(".border-left");
	    	 bdRun2(borderTop,borderRight,borderBottom,borderLeft);
	    });
	     


	    // ****************main2部分****************
	    var main2Li=$("#main2 .main2-ul li");
	    var borderTop1=$("#main2 .main2-ul .border-top");
	    var borderRight1=$("#main2 .main2-ul .border-right");
	    var borderBottom1=$("#main2 .main2-ul .border-bottom");
	    var borderLeft1=$("#main2 .main2-ul .border-left");
	    main2Li.hover(function(){
	    	var iIndex=$(this).index();
	    	bdRun11(iIndex,"198px","246px",borderTop1,borderRight1,borderBottom1,borderLeft1);
	    },function(){
	    	 var iIndex=$(this).index(); 
	    	 bdRun22(iIndex,borderTop1,borderRight1,borderBottom1,borderLeft1);
	    });
	    

	    // **********************main3-left部分*********
	    
	    var flag=true;
	    var oIndex=1;
	    function imgRun1(botBanner,imgPanel,iLiWidth){
	    	if(flag){
	    		flag=false;
	    		oIndex--;
		    	botBanner.animate({left:-oIndex*iLiWidth},function (){
		    		flag=true;
	      		    if(oIndex==imgPanel.length-2){
	      			   botBanner.css({left:-(imgPanel.length-2)*iLiWidth});
	      		    }
	          	});
	          	if(oIndex==0){
	      		    oIndex=imgPanel.length-2;
	      	    }
	    	}
	    }
	    function imgRun2(botBanner,imgPanel,iLiWidth){
	    	if(flag){
	    		flag=false;
	    		oIndex++;
		    	botBanner.animate({left:-oIndex*iLiWidth},function (){
		    		flag=true;
	      		    if(oIndex==1){
	      			   botBanner.css({left:-iLiWidth});
	      		    }
	          	});
	          	if(oIndex==imgPanel.length-1){
	      		    oIndex=1;
	      	    }
	    	}
	    }

	    // *********

	    var botLeftBot=$("#main3 .bot-left-bot");
	    
	    botLeftBot.mouseenter(function(){
	    	 var botBannerCom=$(this).find(".bot-banner-com");
	         var imgPanelCom=$(this).find(".img-panel-com");
	    	$(this).find(".panel-leftdir-com").click(function(){
	    		imgRun1(botBannerCom,imgPanelCom,160);
	    	});
	    	$(this).find(".panel-rightdir-com").click(function(){
	    		imgRun2(botBannerCom,imgPanelCom,160);
	    	});
	    });

	    
	    // **************main3-mid部分***********


	    var botMid=$("#main3 .bot-mid");
	    var midImgW=390;
	    
	    botMid.mouseenter(function(){
	    	var midBtnList=$(this).find(".mid-btnList a");
	    	var midImgList=$(this).find(".mid-imgList");
	    	midBtnList.click(function(){
	    		var iIndex=$(this).index();
	    	    midImgList.stop(true).animate({left:-midImgW*(iIndex)});
	    	    midBtnList.removeClass("btn-active").eq(iIndex).addClass("btn-active");
	    	});

            var midDirList=$(this).find(".mid-dirList a");
	    	midDirList.click(function(){
		    	var iIndex=$(this).index();
		    	midImgList.stop(true).animate({left:-midImgW*(iIndex)});
		    	midBtnList.removeClass("btn-active").eq(iIndex).addClass("btn-active");
	        });
            
            var midDirLeft=$(this).find(".mid-dirLeft");
            var midDirRight=$(this).find(".mid-dirRight");
	        $(this).hover(function (){
		    	midDirLeft.stop(true).animate({left:"0"},300,"linear");
		    	midDirRight.stop(true).animate({right:"0"},300,"linear");
			    },function(){
			    	midDirLeft.stop(true).animate({left:"-30px"},300,"linear");
			    	midDirRight.stop(true).animate({right:"-30px"},300,"linear");
			    });
	    });



	   

	    // ******************main3-right部分***********

	    // ************
	     var brBdCom=$("#main3 .br-bd-com");
	     brBdCom.hover(function(){
	    	var iIndex=$(this).index();
	    	var borderTop=$(this).find(".border-top");
		    var borderRight=$(this).find(".border-right");
		    var borderBottom=$(this).find(".border-bottom");
		    var borderLeft=$(this).find(".border-left");
	      bdRun1("270px","180px",borderTop,borderRight,borderBottom,borderLeft);
		 },function(){
	    	var iIndex=$(this).index(); 
	    	var borderTop=$(this).find(".border-top");
		    var borderRight=$(this).find(".border-right");
		    var borderBottom=$(this).find(".border-bottom");
		    var borderLeft=$(this).find(".border-left");
	    	 bdRun2(borderTop,borderRight,borderBottom,borderLeft);
	    });
	     



	    // ***************定位锚点************


        
        var rightNav=$("#right-fixed-nav");
        var goodsListMidTop=$("#main-goodsList .goodsList-mid-top");
        var footJi=$('.foot-ji-top');


        // ********TOP*******************************
 	  var goodsListBackTop=$('.goodsList-backtop');
 	  var dMainMlTop=$(".DMain-ml-top");

	    $(window).scroll(function (){
			var oscrollTop=document.documentElement.scrollTop || document.body.scrollTop;
			if(oscrollTop>750){
				rightNav.css({
					display:"block"
				});
			}else{
				rightNav.css({
				   display:"none"
		        });
			}

			if($(document).scrollTop()>502){
 	  		goodsListMidTop.css({
 	  			position:'fixed',
 	  			top:"0px",
 	  		});
	 	  	}else{
	 	  		goodsListMidTop.css({position:'relative'});
	 	  	}


			if(oscrollTop!==0){
				goodsListBackTop.fadeIn("slow");
			}else{
				goodsListBackTop.fadeOut("slow");
			}

			if($(document).scrollTop()>873){
 	  		dMainMlTop.css({
 	  			position:'fixed',
 	  			top:"0px",
 	  		});
	 	  	}else{
	 	  		dMainMlTop.css({position:'relative'});
	 	  	}

	 	  	if($(document).scrollTop()>30){
	 	  		footJi.css({
	 	  			position: "absolute",
					right:"-32px",
					bottom:"0px",
	 	  		});
	 	  	}else{
	 	  		footJi.css({
	 	  			position: "fixed",
				    right:"108px",
				    bottom:"-50px",
	 	  		});
	 	  		
	 	  	}

		});



	    var backtop=$("#top"); 
	    var iTimer=0;
	    $("#right-fixed-nav a").click(function() {
	        var el = $(this).attr('id');
	        if(el!=="top"){
	        	$('html, body').animate({
	            scrollTop: $("." + el).offset().top
             }, 300);
	        }
	        
	    });

	    backtop.click(function (){
	    	var iscrollTop=document.body.scrollTop || document.documentElement.scrollTop;
			iTimer =setInterval(function (){
				document.body.scrollTop -=100;
				document.documentElement.scrollTop-=100;
				if(document.body.scrollTop==0 && document.documentElement.scrollTop==0){
					clearInterval(iTimer);
				}
	        },1)
		});

		// ********************顶部搜索框************
		

     	/*跨域地址：http://www.yintai.com/ajaxpage/autosearch.aspx?keyword=%E8%A1%A3%E6%9C%8D&callback=YUI.Env.JSONP.yui_3_13_0_1_8*/

     	var sIndex=-1;
     	var keywordsList=$(".keywords-list");
     	var keywordsUl=$(".keywords-list ul");
     	var placeHolder=$(".place-holder");
     	var a="";
     	placeHolder.bind("input propertychange",function(){
     		if($(this).val()==""){
     			keywordsList.css({display:"none"});
     		}
     		$.getJSON("http://www.yintai.com/ajaxpage/autosearch.aspx?&callback=?",{keyword:$(this).val()},function (data){
                     var str="";
                    data.forEach(function (v,k){
                    	str+='<li class="cur">'+ v.keyword +'</li>';
                   })
                    if(str==""){
     			    	keywordsList.css({display:"none"});
     			    }else{
     			    	 keywordsList.css({display:"block"});
     			    }
                     keywordsUl.html(str);
                     a=str;
                });
     		sIndex=-1;
            });
            


        
     	placeHolder.focus(function (){
     		if(placeHolder.val()=="不奢不时髦"){
     			placeHolder.val("");
     		}
          
          if(a==""){
	    		keywordsList.css({display:"none"});
	    	}else{
	    		 keywordsList.css({display:"block",border:"2px solid #323333",borderTop:"none"});
    	}
     		
     	});
     	placeHolder.blur(function (){
     		if(placeHolder.val()==""){
     			placeHolder.val("不奢不时髦");
     		}
     		keywordsList.css({display:"none"});
     		
     	});

     	
    	// 键盘事件
     	    
            
 	   placeHolder.bind("keydown",function (evt) {
            var event=evt || window.event;
            var code=event.keyCode || event.which;
            var lis=$(".keywords-list li");
            if((code==38 || code==40)&& lis.length){
                if(code==38){
                    sIndex--;
                    if(sIndex<0){
                        sIndex=lis.length-1;
                    }
                }
                if(code==40){
                    sIndex++;
                    if(sIndex==lis.length){
                        sIndex=0;
                    }
                }

                lis.removeClass("selected").eq(sIndex).addClass("selected");
                placeHolder.val(lis.eq(sIndex).text());
                return false;
            }
        });


 	   // =======================================登录页面=================

 	   var homeUserName=$("#user-name a");
 	   var homeLogin=$('#login');
 	   var homeRegister=$('#register');
 	   var homeBackhome=$('#backhome');
 	   /*homeUserName.text()=='欢迎来到银泰网!'*/
 	  
 	   if(getCookie('tell1')){
 	   	 	homeUserName.text(getCookie('tell1'));
       	    homeLogin.css({display:"none"});
       	    homeRegister.css({display:"none"});
       	    homeBackhome.css({display:"block"});
       }
       homeBackhome.click(function(){
       	 homeLogin.css({display:"block"});
       	 homeRegister.css({display:"block"});
       	 homeBackhome.css({display:"none"});
       	 homeUserName.text('欢迎来到银泰网!');
       });
 
       



 	   var userName=$("#login-main .user-name");
 	   var userPassword=$("#login-main .user-password");
 	   var userName1=$("#login-main .user-name1");
 	   var userPassword1=$("#login-main .user-password1");

 	   var nameTip=$("#login-main .name-tip");
 	   var reg1=/^[1][358][0-9]{9}$/;
 	   var reg2=/^.{6,16}$/;
       userName.val(getCookie('tell'));
 	     userPassword.val(getCookie('word'));
 	   
 	   // ********注册*********
 	   userName1.focus(function (){
 	     userName1.removeClass("user-name-active");
 	     nameTip.text("请输入E-mail或手机号码");
 	     nameTip.removeClass("name-tip-active");
 	   });
 	   userName1.blur(function (){
 	   	 userName1.addClass("user-name-active");
 	   	 if(!reg1.test(userName1.val())||(userName1.val()=="")){
 	   	 	nameTip.text("请输入E-mail或已验证的手机号码");
 	   	    nameTip.addClass("name-tip-active");
 	   	 }else{
 	   	 	nameTip.text("");
 	   	 	userName1.removeClass("user-name-active");
 	   	 }
 	   });
       
       // ************登录*************
 	   userName.focus(function (){
 	     userName.removeClass("user-name-active");
 	     nameTip.text("请输入E-mail或手机号码");
 	     nameTip.removeClass("name-tip-active");
 	   });
 	   userName.blur(function(){
 	   	userName.addClass("user-name-active");
 	   	if((userName.val()!=getCookie("tell2"))||(userName.val()=="")){
 	   		nameTip.text("请输入E-mail或已验证的手机号码");
 	   	    nameTip.addClass("name-tip-active");
 	   	}else{
 	   		nameTip.text("");
 	   	 	userName.removeClass("user-name-active");
 	   	}
 	   });

 	  // ************注册**********
 	   var passwordTip=$("#login-main .password-tip");
 	   userPassword1.focus(function (){
 	     userPassword1.removeClass("user-name-active");
 	     passwordTip.text("请输入登录密码");
 	     passwordTip.removeClass("name-tip-active");
 	   });
 	   userPassword1.blur(function (){
 	   	 userPassword1.addClass("user-name-active");
 	   	 if(!reg2.test(userPassword1.val())){
 	   	 	passwordTip.text("6-16个字符，可使用字母、数字、符号任意组合！");
 	   	    passwordTip.addClass("name-tip-active");
 	   	 }else{
 	   	 	passwordTip.text("");
 	   	 	userPassword1.removeClass("user-name-active");
 	   	 }
 	   });

 	   // ************登录*************
 	   userPassword.focus(function (){
 	     userPassword.removeClass("user-name-active");
 	     passwordTip.text("请输入登录密码");
 	     passwordTip.removeClass("name-tip-active");
 	   });
 	   userPassword.blur(function(){
 	   	userPassword.addClass("user-name-active");
 	   	if(userPassword.val()!==getCookie("word2")){
 	   		passwordTip.text("密码错误！");
 	   	    passwordTip.addClass("name-tip-active");
 	   	}else{
 	   	 	passwordTip.text("");
 	   	 	userPassword.removeClass("user-name-active");
 	   	 }
 	   });


 	   // ******写入cookie*******
 	  var loginSelf=$("#login-main .login-self");
 	   $("#login-main .login-self").click(function (){	   	
         setCookie("tell",userName.val(),1,"/");
 	   	 setCookie("word",userPassword.val(),1,"/");
 	   });

 	   // *******点击登录按钮*************
 	   var loginBtn=$('#login-btn');
 	   loginBtn.click(function (){
 	   	if((!reg1.test(userName.val())||(userName.val()==""))||(!reg2.test(userPassword.val()))||(identifyText.val()!==arrCode[imgNum-1])){
 	   		alert("请重新输入");
 	   	}else{
 	   		setCookie("tell1",userName.val(),1,"/");
 	   	   setCookie("word1",userPassword.val(),1,"/");
 	   		window.location.href="yintai.html";
 	   	}
 	   });


 	   // ***************验证码************
 	   var codeImg=$(".code-img");
 	   var codeImgimg=$(".identify-code .code-img img");
 	   var arrCode=['ezgp','84c2','8zba','gena','csy2','32ug','kzn9','a9sz','r3ag','ecb6','zrx2','62u6','3bek','qk8e','xedt','yxes','ayxa','tgde','deuq','skm6'];
 	   var imgNum=parseInt(Math.random()*20)+1;

 	   codeImg.click(function(){
 	   	imgNum=parseInt(Math.random()*20)+1;   	
 	   	var imgsrc="../img/code_"+imgNum+".png";
 	   	codeImgimg[0].src=imgsrc;
 	   });
 	   var changeCode=$(".change-code");
 	   changeCode.click(function(){
	 	   	imgNum=parseInt(Math.random()*20)+1;   	
	 	   	var imgsrc="../img/code_"+imgNum+".png";
	 	   	codeImgimg[0].src=imgsrc;
 	   });

 	   var identifyText=$(".identify-text");
 	   var codeTip=$(".code-tip");
 	   identifyText.blur(function (){
 	   	 identifyText.addClass("user-name-active");
 	   	 if(identifyText.val()!==arrCode[imgNum-1]){
 	   	 	codeTip.text("请输入正确的验证码！");
 	   	    codeTip.addClass("name-tip-active");
 	   	 }else{
 	   	 	codeTip.text("");
 	   	 	identifyText.removeClass("user-name-active");
 	   	 }
 	   });
 	   identifyText.focus(function (){
 	     identifyText.removeClass("user-name-active");
 	     codeTip.text("请输入右边图片中的验证码！");
 	     codeTip.removeClass("name-tip-active");
 	   });

 	   // **************滑选卡***********
 	   var loginMainTop=$(".login-main-top a");
 	   var loginMidPanel=$(".login-mid-panel");
 	   loginMainTop.click(function (){
 	   	var iIndex=$(this).index();
 	   	loginMidPanel.css({display:"none"}).eq(iIndex).css({display:"block"});
 	   	loginMainTop.removeClass("hov").eq(iIndex).addClass("hov");
 	   });

 	   var loginMid1=$("#login-main .login-mid1");
 	   var loginCode1=$("#login-main .login-code1");
 	   var loginCode2=$("#login-main .login-code2");
 	   loginMid1.hover(function(){
 	   	loginCode1.stop(true).animate({left:"-10px"});
 	   	loginCode2.stop(true).animate({opacity:"1"});
 	   },function(){
 	   	loginCode1.stop(true).animate({left:"60px"});
 	   	loginCode2.stop(true).animate({opacity:"0"});
 	   });

 	   // =================================注册页面================
 	    var userPasswordAgain=$(".user-password-again");
 	   var passwordTipAgain=$(".password-tip-again");
 	   userPasswordAgain.blur(function (){
 	   	 userPasswordAgain.addClass("user-name-active");
 	   	 if(userPasswordAgain.val()!==userPassword1.val()){
 	   	 	passwordTipAgain.text("两次密码不一致，请重试！");
 	   	    passwordTipAgain.addClass("name-tip-active");
 	   	 }else{
 	   	 	passwordTipAgain.text("");
 	   	 	userPasswordAgain.removeClass("user-name-active");
 	   	 }
 	   });
 	   userPasswordAgain.focus(function (){
 	     userPasswordAgain.removeClass("user-name-active");
 	     passwordTipAgain.text("请再次输入您设置的密码");
 	     passwordTipAgain.removeClass("name-tip-active");
 	   });

 	   // *******点击注册按钮*************
 	   var registerBtn=$('#register-btn');
 	   var loginSuccess=$(".login-success");

 	   registerBtn.click(function (){
 	   	if((!reg1.test(userName1.val())||(userName1.val()==""))||(!reg2.test(userPassword1.val()))||(identifyText.val()!==arrCode[imgNum-1])||(userPasswordAgain.val()!==userPassword1.val())){
 	   		alert("请重新输入");
 	   	}else{
 	   		loginSuccess.css({display:"block"});
 	       setCookie("tell2",userName1.val(),1,"/");
 	   	   setCookie("word2",userPassword1.val(),1,"/"); 	   		
 	   	}

 	   });

 	   

 	   // *************************全部分类************
 	   var subNavSort=$("#sub-nav-sort");
 	   var subNavMenu=$("#sub-nav-menu");
 	   subNavSort.mouseenter(function (){
 	   	 subNavMenu.css({display:"block"});
 	   });
 	   subNavSort.mouseleave(function(){
 	   	subNavMenu.css({display:"none"});
 	   });


 	  // ===========================================商品列表页===============

 	  // **********************配饰-头部*****************
 	  var ornament=$(".ornament");
 	  var ornamentHide=$('.ornament-hide');
 	  ornament.hover(function(){
 	  	ornamentHide.css({display:"block"});
 	  },function(){
 	  	ornamentHide.css({display:"none"});

 	  });

 	  // *************************商品分类******************
 	  var brsHide1=$("#main-goodsList .brs-hide1");
 	  var brsHide11=$("#main-goodsList .brs-hide11");
 	  var brsHide2=$("#main-goodsList .brs-hide2");
 	  var brsHide22=$("#main-goodsList .brs-hide22");
 	  var gtBrandHide1=$('#main-goodsList .gt-brand-hide1');
 	  var gtBrandHide2=$('#main-goodsList .gt-brand-hide2');
 	  var gtBotBrand=$('#main-goodsList .gt-bot-brand');
 	  var brandPanelCb=$("#main-goodsList .brand-panel-cb");
 	  brsHide1.click(function(){
 	  	gtBrandHide1.css({display:"none"});
 	  	gtBrandHide2.css({display:"block"});
 	  	gtBotBrand.css({height:"250px"});
 	  	brsHide1.css({display:"none"});
        brsHide11.css({display:'block'});
 	  });
 	  brsHide11.click(function(){
 	  	gtBrandHide1.css({display:"block"});
 	  	gtBrandHide2.css({display:"none"});
 	  	gtBotBrand.css({height:"50px"});
 	  	brsHide1.css({display:"block"});
        brsHide11.css({display:'none'});
 	  });
 	  brsHide2.click(function(){
 	  	brsHide22.css({display:"block"});
 	  	brsHide2.css({display:"none"});
 	  	brandPanelCb.css({display:"block"});
 	  });
 	  brsHide22.click(function(){
 	  	brsHide2.css({display:"block"});
 	  	brsHide22.css({display:"none"});
 	  	brandPanelCb.css({display:"none"});
 	  });

 	  var gtBrandHideMList=$("#main-goodsList .gt-brand-hideM li");
 	  var brandPanel=$("#main-goodsList .brand-panel");
 	  gtBrandHideMList.mouseenter(function(){
 	  	var iIndex=$(this).index();
 	  	gtBrandHideMList.css({border:"1px solid #eaeaea"}).eq(iIndex).css({border:"1px solid #e5004f"});
 	  	brandPanel.css({display:"none"}).eq(iIndex).css({display:"block"});
 	  });

 	  // ***************固定在顶部*************
 	  var goodsListMidTop=$("#main-goodsList .goodsList-mid-top");


 	  var goodesChangeLtimg=$('.goodes-change-ltimg');
 	  var goodesChangeLtimgList=$('.goodes-change-ltimg li');
 	  var goodesChangeBigimg=$('.goodes-change-bigimg');
 	  var goodsPanel=$("#main-goodsList .goods-panel");

 	  goodsPanel.mouseenter(function(){
 	  	var goodesChangeBigimgA=$(this).find(".goodes-change-bigimg").children();
 	  	$(this).find("li").mouseenter(function(){
 	  		var iIndex=$(this).index();
 	  		goodesChangeBigimgA.css({display:"none"}).eq(iIndex).css({display:"block"});

 	  	});
 	  });

 	  var pageSingalListA=$("#main-goodsList .page-singal a");
 	  var pageSingalList=$("#main-goodsList .page-singal .page-num");
 	  pageSingalList.click(function(){
 	  	var iIndex=$(this).index(".page-num"); 	
 	  		pageSingalList.css({backgroundColor:"#fff",color:"#666"}).eq(iIndex).css({backgroundColor:"#e5004f"});
 	  		pageSingalListA.css({color:"#666"}).eq(iIndex).css({color:'#fff'});

 	  });

 	  // ******************浏览历史**************
 	  var goodsDelete=$(".goods-delete");
 	  var goodsListBotB=$("#goodsList-bot-add");
 	  // var historyJL=$(".history-jl");
 	  var hisArr=[];
 	  goodsDelete.click(function(){
 	  	goodsListBotB.css({height:0});
 	  	goodsListBotB.text("浏览历史为空");
 	  	hisArr=[];
 	  	setCookie('history','',1,'/');   
 	  	
 	  });
 	 
 	  goodsPanel.click(function(){
 	  	if(goodsListBotB.html() === '浏览历史为空') {
 	  		goodsListBotB.html('');
 	  	}
 	  	var addimg=$(this).find(".goods-panel-top").find("p").find("img");
 	  	for(var i=0;i<addimg.length;i++){
           if((addimg.eq(i).parent("a").css("display")=="block")){
 	  			goodsListBotB.css({height:"96px"});
 	  		    if(hisArr.indexOf(addimg[i].src)==-1){
 	  		    	hisArr.push(addimg[i].src);
 	  		    	goodsListBotB.append('<li><a href="javascript:;"><img src="'+addimg[i].src+'" alt=""></a><p>￥159</p></li>');
 	  		    }	
 	  	    }
 	  	}
           setCookie('history',goodsListBotB.html(),1,'/'); 	  	
 	  });

 	   goodsListBotB.html(getCookie('history'));



 	  // ===============================商品详情页=======================
 	  // 点击小图两侧按钮轮播
 	  var DmDirLeft=$(".Dm-dir-left");
 	  var DmDirRight=$(".Dm-dir-right");
 	  var ltimg=$('.little-img');
 	  var ltimgList=$('.little-img li');
 	  var ltimgW=74;
 	  var DmIndex=0;
 	  var btn1=true;
 	  var btn2=true;
 	  DmDirLeft.click(function (){
 	  	if(btn1){
 	  		btn1=false;
 	  		DmIndex++;
 	  		ltimg.animate({left:-DmIndex*ltimgW},function (){
 	  			if(DmIndex==ltimgList.length-1){
		    		btn1=false; 
 	  			}else{
 	  				btn1=true; 
 	  			}
	          });
 	  	}
 	  });
 	  DmDirRight.click(function (){
 	  	if(DmIndex!==0){
 	  		if(btn2){
 	  		btn2=false;
 	  		DmIndex--;
 	  		ltimg.animate({left:-DmIndex*ltimgW},function (){
 	  			if(DmIndex==0){
 	  			   btn2=false;
 	  		    }else{
 	  		    	btn2=true; 
 	  		    }
		    		
 	  		});

 	  	}
 	  	}
 	  	
 	  });

 	  // ************点击小图使对应的大图出现**********
 	  var DmainBigImg=$(".Dmain-big-img li");
 	  var bigImgHide=$('.big-img-hide');
 	  var bigImgHideImg=$('.big-img-hide img');
 	  ltimgList.mouseenter(function(){
 	  	var hIndex=$(this).index();
 	  	DmainBigImg.css({display:"none"}).eq(hIndex).css({display:"block"});
 	  	bigImgHideImg[0].src="../img/DmainT.bigimg_"+(hIndex+1)+".png";

 	  });
 	  // ***************拖动小方块************
 	  var imgMove=$('.img-move');
 	  var bigImg=$(".big-img");
 	  var bigImgHua=$(".Dmain-big-hua");
 	  var bigImgList=$('.big-img li');
 	  var dmainBigImg=$('.Dmain-big-img'); 
 	  var DmainBigHua=$('.Dmain-big-hua');

 	  var maxx=parseInt(bigImg.width())-parseInt(imgMove.width());
      var maxy=parseInt(bigImg.height())-parseInt(imgMove.height());
      var scale=parseInt(bigImgHide.width())/parseInt(imgMove.width());


      bigImgHua.mouseenter(function () {
      	imgMove.css({display:"block"});
      	bigImgHide.css({display:"block"});
      }).mouseleave(function () {
      	imgMove.css({display:"none"});
        bigImgHide.css({display:"none"});
      });

 	  bigImgHua.mousemove(function(evt){
 	  	var event=evt || window.event;
 	  	var x=event.clientX-dmainBigImg[0].offsetLeft-parseInt(imgMove.width())/2; 	

 	  	var y=event.clientY+$(document).scrollTop()-dmainBigImg[0].offsetTop-parseInt(imgMove.height())/2;

 	  	if(x<0){
            x=0;
        }
        if(x>maxx){
            x=maxx;
        }
        if(y<0){
            y=0;
        }
        if(y>maxy){
            y=maxy;
        }

        imgMove.css({left:x});
        imgMove.css({top:y});
        bigImgHideImg.css({left:-x*scale});
        bigImgHideImg.css({top:-y*scale});
 	  });


      // ***********************
       var duihao=$('#DMain-top .DmainT-p3 span');
	       	duihao.click(function(){
	       	var iIndex=$(this).index(".DmainT-p3 span");
	       	duihao.eq(iIndex).toggleClass('duihao');
	       });

	// ************点击增加购物shul******
	var buyUp=$(".buy-up");
	var buyDown=$(".buy-down");
	var buyNum=$('.buy-num');
	var num=buyNum.val();

	buyNum.bind("input",function (){
		num=buyNum.val();  	
	});

	buyUp.click(function(){
		num++;
		buyNum.val(num);
		num=buyNum.val();
	});
	buyDown.click(function(){
		num--;
		if(num<=1){
			num=1;
		}
		buyNum.val(num);
	});
       
       // *************换一批**********

       
 	   var dmCom=$('#DMain-mid .dm-com');
 	   dmCom.mouseenter(function(){
 	   	var changeBatch=$(this).find(".change-batch");
 	   	var dmComUl=$(this).find("ul");
 	   	changeBatch.click(function(){
 	   		var iIndex=parseInt(Math.random()*dmComUl.length);
 	   		dmComUl.css({display:"none"}).eq(iIndex).css({display:'block'});
 	   	});
 	   });

 	  var dmlLeftA=$('#DMain-mid .dml-left a');
 	  var DMainMlPanel=$('.DMain-ml-panel');
 	  dmlLeftA.click(function(){
 	  	var iIndex=$(this).index();
 	  	dmlLeftA.css({backgroundColor:"#999"}).eq(iIndex).css({backgroundColor:"#b7ab91"});
 	  	DMainMlPanel.css({display:'none'}).eq(iIndex).css({display:'block'});
 	  });


 	  // *****************用户评论********************
 	    var commiteFooter=$("#commite-footer");
        var aLi=$("#commite-footer a");
        var commiteContent=$("#commite-content");

         $.getJSON("https://sclub.jd.com/productpage/p-1466349481-s-0-t-3-p-0.html?callback=?",function (data){
                 var str="";
               data.comments.forEach(function (v,k){
                 str+=" <div class='box'><div class='box-left'><img src='../img/star_"+v.score+".png'><p>下单第"+data.comments[k].days+"天评论</p><b class='i-time'>"+data.comments[k].creationTime+"</b><span>"+data.comments[k].productColor+"</span> </div> <div class='box-mid'> <p class='huoqu'>"+data.comments[k].content+"</p><img src='../img/jing_1.png'></div><div class='box-right'><h5><img src='http://"+ data.comments[k].userImage+"'/><p>"+data.comments[k].nickname+"</p></h5> <p><b>"+data.comments[k].userLevelName+"</b> "+data.comments[k].userProvince+"</p></div></div>";
               })
                 commiteContent.html(str);
        });

        aLi.click(function(){
        	var iIndex=$(this).index();

        	 $.getJSON("https://sclub.jd.com/productpage/p-1466349481-s-0-t-3-p-"+$(this).index()+".html?callback=?",function (data){
                 var str="";
               data.comments.forEach(function (v,k){
                 str+=" <div class='box'><div class='box-left'><img src='../img/star_"+v.score+".png'><p>下单第"+data.comments[k].days+"天评论</p><b class='i-time'>"+data.comments[k].creationTime+"</b><span>"+data.comments[k].productColor+"</span> </div> <div class='box-mid'> <p class='huoqu'>"+data.comments[k].content+"</p><img src='../img/jing_1.png'></div><div class='box-right'><h5><img src='http://"+ data.comments[k].userImage+"'/><p>"+data.comments[k].nickname+"</p></h5> <p><b>"+data.comments[k].userLevelName+"</b> "+data.comments[k].userProvince+"</p></div></div>";
               })
                 commiteContent.html(str);
           });

        });

        // ***************用户咨询**************
        var tijiao=$("#DMain-mid #tijiao");
        var dmMessage=$("#dm-message");
        var textArea=$("#DMain-mid #textarea");
        var xuanZe=$('#DMain-mid .xuanze');
        tijiao.click(function(){
        	if(xuanZe.val()=='请选择'){
        		dmMessage.text("请选择问题类型！");
        	}else{
        		dmMessage.text("提交成功！");
        		textArea.val(" ");
        	}
        	
        });


// **********************购物车页***********************
 
 // ***********无缝滚动*********
 var cartClothList=$('.cart-other-goods');
 var cartClothLiW=848;
 var aIndex=0;

  var cartCustomeList=$('.cart-custome-list a');
  var cartCustomeI=$('.cart-custome-list a i');
  cartCustomeList.mouseenter(function(){
  	 aIndex=$(this).index();
  	 cartCustomeList.removeClass('cart-hov').eq(aIndex).addClass('cart-hov')
  	 cartCustomeI.css({display:'none'}).eq(aIndex).css({display:'block'});
  	 cartClothList.css({display:'none'}).eq(aIndex).css({display:'block'});
  });
   
   cartClothList.mouseenter(function(){
   	  var cartClothUl=$(this).find('.cart-cloth-ul');
   	  var cartClothLi=$(this).find('.cart-cloth-ul li');
   	  var cartRightDir=$(this).find('.cart-right-dir');
   	  var cartLeftDir=$(this).find('.cart-left-dir');
   	  var cartBtnList=$(this).find('.cart-btn-list a');
   	  cartLeftDir.click(function(){
 	    imgRun1(cartClothUl,cartClothLi,cartClothLiW);
      });
      cartRightDir.click(function(){
 	    imgRun2(cartClothUl,cartClothLi,cartClothLiW);
      });
      cartBtnList.mouseenter(function(){
        iIndex=$(this).index();
      	cartBtnList.css({backgroundColor:"#ccc"}).eq(iIndex).css({backgroundColor:'#e5004f'});
      });
   });

   // **************首页购物篮***************
   var JMiniShop=$(".J-MiniShop");
   var JShopCart=$(".J-ShopCart");
   var JMiniCart=$("#J-MiniCart");
   JMiniShop.mouseenter(function(){
   	JShopCart.css({display:'block'});
   })
   JMiniCart.mouseleave(function(){
   	JShopCart.css({display:'none'});
   });



   // ****************详情页弹出框***********
   var DmainTp4Car=$(".DmainT-p4-car");
   var shoppingCartReminder=$('#shopping-cart-reminder');
   var reminderDel=$('.reminder-del');
   var goBuy=$('.go-buy');
   DmainTp4Car.click(function(){
   	 shoppingCartReminder.css({display:'block'});
   });
   reminderDel.click(function(){
   	shoppingCartReminder.css({display:'none'});
   });
   goBuy.click(function(){
   	shoppingCartReminder.css({display:'none'});
   });

   // *********************购物袋**********


   var addcookieTb=$(".cart-goods-tb");
   var tempGoodsCookie = null;	 //将要添加的外层结构
   var tempCookieArr = getCookie('goodsInfo'); 
   var cartEmpty=$('.cart-empty');
   var cartGoodsBot=$('.cart-goods-bot');
   var cartGoods=$('.cart-goods');
   var headerGoods=$(".header-goods");
   var headerCartEmpty=$(".header-cart-empty");
   var headerGoodsList=$(".header-goods-list");

   var orderGoods=$(".order-goods");

if (tempCookieArr != null) {
	cartEmpty.css({display:"none"});
	headerCartEmpty.css({display:"none"});

	cartGoodsBot.css({display:'block'});
	cartGoods.css({display:'block'});
	headerGoodsList.css({display:'block'});

   var tempCookieArr = JSON.parse(getCookie('goodsInfo'));
   for (var i = 0; i < tempCookieArr.length; i++) {
		tempGoodsCookie = tempCookieArr[i] ;
		addcookieTb.append('<tr class="add-cartgoods"><td><input type="checkbox" class="single-choose" checked="checked"></td><td class="cart-td2"><h3 class="left"><a href="javascript:;" class="cartgoods-img"><img class="cartgoodsimg" src="'+tempGoodsCookie["goodsImg"]+'" alt=""></a></h3><div class="left"><p class="shop-name"><a href="javascript:;" class="cartgoods-title">'+tempGoodsCookie
["goodsTitle"]+'</a></p><p class="goods-case">颜色：<b class="cartgoods-color" style="color:#AF9B71">'+tempGoodsCookie["goodsColor"] +'</b>  尺码：<b class="cartgoods-size" style="color:#AF9B71">'+tempGoodsCookie["goodsSize"]+'</b></p></div></td><td class="cartgoods-price cart-td3">￥<b class="cloth-price">'+tempGoodsCookie["goodsSingle"]+'</b> <span class="cart-discount">'+tempGoodsCookie["discount"]+'</span></td><td class="shuliang cart-td4"><a href="javascript:;" class="goodsnum-down buy-down">-</a><input type="text" value="'+tempGoodsCookie["buyNum"]+'" class="goodsnum-num buy-num"><a href="javascript:;" class="goodsnum-add buy-up">+</a></td><td class="integration cart-td5">0</td><td class="caozuo cart-td6"><a href="javascript:;" class="shoucang">移入收藏</a><a href="javascript:;" class="shanchu">删除商品</a></td></tr>');

		headerGoods.append('<div class="sort-goods"><a href="javascript:;"><img src="'+tempGoodsCookie["goodsImg"]+'" class="cartgoodsimg"></a><p class="cartgoods-title">'+tempGoodsCookie
["goodsTitle"]+'</p><h6><p><b class="cloth-price">'+tempGoodsCookie["goodsSingle"]+'</b> X <span> '+tempGoodsCookie["buyNum"]+'</span></p><a href="javascript:;" class="shanchu delete">删除</a></h6></div>');

		orderGoods.append('<ul class="add-order"><li class="or-li1">21-165-6417</li><li class="or-li2"><p class="or-p1 left"><img src="'+tempGoodsCookie["goodsImg"]+'" class="cartgoodsimg"></p><div><p class="or-p2 cartgoods-title">'+tempGoodsCookie
["goodsTitle"]+'</p><p class="or-p3">颜色：<b class="cartgoods-color">'+tempGoodsCookie["goodsColor"] +' </b> 尺码：<b class="cartgoods-size">'+tempGoodsCookie["goodsSize"]+'</b></p></div> </li><li class="or-li3 integration">0</li><li class="or-li4 goodsnum-num buy-num">'+tempGoodsCookie["buyNum"]+'</li><li class="or-li5">￥ <b class="cloth-price">'+tempGoodsCookie["goodsSingle"]+'</b></li><li class="or-li6">￥ <b class="little-price">0</b></li></ul>');


   }
		}
   


   
   var addCartgoods=$('.add-cartgoods');  //变化的商品详情
   var cgbtDingdan=$('.cgbt-t-dingdan'); //运费谈话框
   var clothTotalPrice=$('.cloth-total-price');  //商品总价
   var carriage=$('.carriage'); //运费
   var settlement=$('.settlement');  //最后结算金额
   var runpriceIten=$('.runprice-iten'); //运费是否免的提醒
   var goodsnumAdd=$('.goodsnum-add'); //增加数量
   var goodsnumDown=$('.goodsnum-down'); //减少数量
   var goodsnumNum=$('.goodsnum-num');  //数量
   var runPrice=$('.cloth-price'); //单价
   var integration=$('.integration'); //获得积分
   var cartgoodsImg=$('.cartgoodsimg');  //获得图片的src
   var JCartCount=$('.J-CartCount');  //首页中的购物袋数量

   var littlePrice=$(".little-price"); //商品小计

   function runprice(){
   	if(clothTotalPrice.text()>=199){
	   	cgbtDingdan.text('该订单已满199元，运费已免');
	   	cgbtDingdan.css({background: "url(../img/shopping-icon.png) no-repeat left 20px"});
	   	carriage.text(0);
	   	runpriceIten.text('（运费已免）');

	   }else{
	   	cgbtDingdan.text('该订单未满199元，需支付运费15元');
	   	cgbtDingdan.css({background: "url(../img/tanhao.png) no-repeat left center"});
	   	carriage.text(15);
	   	runpriceIten.text('（包含运费）');
	   }
   }
  	

      //页面数据初始化
      var superTemps = getCookie('goodsInfo');
		if (superTemps) {
			var superCookie = JSON.parse(superTemps);
			var superH = 0,
				superC = 0;
			for (var i = 0; i < superCookie.length; i++) {
					superH += parseInt(superCookie[i]['buyNum'] * superCookie[i]['goodsSingle']);
					superC += parseInt(superCookie[i]['buyNum']);
					integration.eq(i).text(parseInt(superCookie[i]['buyNum']) * superCookie[i]['goodsSingle']);

					littlePrice.eq(i).text(parseInt(superCookie[i]['buyNum']) * superCookie[i]['goodsSingle']);
				}
            clothTotalPrice.text(superH);
            JCartCount.text(superC);

		   runprice();

			settlement.text(superH+parseInt(carriage.text()));

	}

	// ****************点击复选框*****************
	var singleChoose=$('.single-choose');
	singleChoose.click(function(){
		var iIndex = singleChoose.index($(this));
			if(singleChoose.eq(iIndex).attr("checked",false)){
				addCartgoods.eq(iIndex).css({backgroundColor:"#fff"});
	        }

	});
      

    //点击增加按钮*************

	goodsnumAdd.click(function () {
			var iIndex = goodsnumAdd.index($(this));
			var tempH = 0;
			var tempNumber =  goodsnumNum.eq(iIndex).val();
			tempNumber++;
			goodsnumNum.eq(iIndex).val(tempNumber);
			integration.eq(iIndex).text( tempNumber * parseInt( runPrice.eq(iIndex).text()));
			littlePrice.eq(iIndex).text( tempNumber * parseInt( runPrice.eq(iIndex).text()));
			for (var i = 0; i < integration.length; i++) {
				tempH += parseInt(integration.eq(i).text()) ;
			}
			clothTotalPrice.text(tempH);
			settlement.text(tempH);
			runprice();

		//----------------------------点击加号 同时 加cookie 对应值-------------------
			if (tempCookieArr) {
				var sTempCookie = tempCookieArr;
				var goodsSrc= cartgoodsImg.eq(iIndex).attr("src");
				for (var i = 0; i < sTempCookie.length; i++) {
					if(sTempCookie[i]['goodsImg'] == goodsSrc){
						sTempCookie[i]['buyNum']++;
						setCookie('goodsInfo',JSON.stringify(sTempCookie),1,'/');
					}
				}
			}
		});
	
	//点击减少按钮*************

	goodsnumDown.click(function () {
			var iIndex = goodsnumDown.index($(this));
			var tempH = 0;
			var tempNumber =  goodsnumNum.eq(iIndex).val();
			tempNumber--;
			if(tempNumber<=1){
				tempNumber=1;
			}
			goodsnumNum.eq(iIndex).val(tempNumber);
			integration.eq(iIndex).text( tempNumber * parseInt( runPrice.eq(iIndex).text()));
			littlePrice.eq(iIndex).text( tempNumber * parseInt( runPrice.eq(iIndex).text()));
			for (var i = 0; i < integration.length; i++) {
				tempH += parseInt(integration.eq(i).text()) ;
			}
			clothTotalPrice.text(tempH);
			settlement.text(tempH);
			runprice();

		//----------------------------点击减号 同时 减少cookie 对应值-------------------
		
			if (tempCookieArr) {
				var sTempCookie = tempCookieArr;
				var goodsSrc= cartgoodsImg.eq(iIndex).attr("src");
				for (var i = 0; i < sTempCookie.length; i++) {
					if(sTempCookie[i]['goodsImg'] == goodsSrc){
						sTempCookie[i]['buyNum']--;
						if(sTempCookie[i]['buyNum']<=1){
							sTempCookie[i]['buyNum']=1;
						}
						setCookie('goodsInfo',JSON.stringify(sTempCookie),1,'/');
					}
				}
			}
		
		});


	// -----------------------------------购物车删除单条记录----------------------------------------

 
		var shanchu=$('.shanchu');
		shanchu.click(function () {
			var tempsSCookie = getCookie('goodsInfo');
			var iIndex = shanchu.index($(this));
			var addCartgoods = shanchu.eq(iIndex).closest('.add-cartgoods');
			var tempDelData = addCartgoods.find('.cartgoodsimg').attr('src');
			var tempArr = [];
			if(tempsSCookie){
				for (var i = 0; i < JSON.parse(tempsSCookie).length; i++) {
					if ( JSON.parse(tempsSCookie)[i]['goodsImg'] != tempDelData ) {
						tempArr.push( JSON.parse(tempsSCookie)[i]);
					}
				}
				if (tempArr.length == 0) {
					setCookie('goodsInfo','',-666,'/');
				}else{
					tempsSCookie = tempArr;
					setCookie('goodsInfo',JSON.stringify(tempsSCookie),1,'/');
				}
			}
		    addCartgoods.remove();
		    runprice();

		});

		var delete1=$(".delete");
		delete1.click(function(){
			var tempsSCookie1 = getCookie('goodsInfo');
			var iIndex = delete1.index($(this));
			var sortGoods = delete1.eq(iIndex).closest('.sort-goods');
			var tempDelData2=sortGoods.find('.cartgoodsimg').attr('src');
			var tempArr1 = [];

			if(tempsSCookie1){
				for (var i = 0; i < JSON.parse(tempsSCookie1).length; i++) {
					if ( JSON.parse(tempsSCookie1)[i]['goodsImg'] != tempDelData2 ) {
						tempArr1.push( JSON.parse(tempsSCookie1)[i]);
					}
				}
				if (tempArr1.length == 0) {
					setCookie('goodsInfo','',-666,'/');
				}else{
					tempsSCookie1 = tempArr1;
					setCookie('goodsInfo',JSON.stringify(tempsSCookie1),1,'/');
				}
			}
		
		  sortGoods.remove();
		  runprice();
		});
   


   


   // ***********************详情页的加入购物车****************

   var DmainTAddCar=$('.DmainT-p4-car'); //加入购物车按钮
   var bigImgLi=$('.big-img li');

   DmainTAddCar.click(function(){
   	clothTotalPrice.text(superH);
   	 var 
   	    goodsSingle=$('.goods-single').text(),  //商品单价
   	    discount=$('.discount').text(),         //商品折扣
   	    goodsTitle=$('.goods-title').text(),    //商品标题
   	    goodsColor=$('.goods-color').text(),    //商品颜色
   	    goodsSize=$('.goods-size').text(),      //商品尺寸
   	    buyNum=$('#buy-num').val();            //商品数量
   	    // goodsImg=null;

   	 for(var i=0;i<bigImgLi.length;i++){
		if(bigImgLi[i].style.display=="block"){
			var goodsImg=bigImgLi[i].children[0].children[0].src;
		}
   	 }

   	 if (getCookie('goodsInfo') == undefined) {
			var cookieArr = [];
			var obj = {
				'goodsSingle' : goodsSingle,
				'discount': discount,
				'goodsTitle': goodsTitle,
				'goodsColor' : goodsColor ,
				'goodsSize' : goodsSize,
				'buyNum' : buyNum,
				'goodsImg':goodsImg
			};
			cookieArr.push(obj);
		}else{
			var cookieArr = JSON.parse(getCookie('goodsInfo'));
			for (var i = 0; i < cookieArr.length; i++) {
				var Mbtn = true;
				if (cookieArr[i]['goodsImg'] == goodsImg) {
					Mbtn = false;
					cookieArr[i]['buyNum']=parseInt(cookieArr[i]['buyNum'])+parseInt(buyNum) ;			
				}
			}
			
			if (Mbtn) {
					var obj = {
						'goodsSingle' : goodsSingle,
						'discount': discount,
						'goodsTitle': goodsTitle,
						'goodsColor' : goodsColor ,
						'goodsSize' : goodsSize,
						'buyNum' : buyNum,
						'goodsImg':goodsImg
					};
					cookieArr.push(obj);
			}
		}

		var goodsInfo = JSON.stringify(cookieArr);
		setCookie('goodsInfo',goodsInfo,1,'/');
		JCartCount.html(parseInt(JCartCount.html())+parseInt(buyNum));
		if(superH ==undefined){
			superH=0;
		}
		var detailtotalp=superH+(parseInt(buyNum)*parseInt(goodsSingle));
		console.log(superH);
		clothTotalPrice.html(parseInt(detailtotalp));
   });


   // **************************收货地址***************
   var receive1=$(".receive1");
   var receive1Option=$(".receive1 option");
   var receive2=$(".receive2");
   var receive3=$(".receive3");
   var receive2Option=null;

   // *****************地址更新**************

   receive1.change(function(){
   	for(var i=0;i<receive1Option.length;i++){
   		if(receive1.val()==receive1Option.eq(i+1).text()){
   			receive2Option=receive2.eq(i).find("option");
   			receive2.css({display:"none"}).eq(i).css({display:"block"}); 
   			receive2.eq(i).change(function(){
			   	 for(var j=0;j<receive2Option.size();j++){
			   	 	if($(this).val()==receive2Option.eq(j+1).text()){
			   	 		receive3.css({display:"none"}).eq(j).css({display:"block"});
			   	 	}
			   	 }
            }); 
   		}
   	}
   	 
   });

   // ********************地址内容文本框判断****************
   function check(rule,str,param){
          var reg=new RegExp(rule,param);
          return reg.test(str);
   }

   var consignee=$('.consignee'); //姓名
   var consigneeTs=$(".consignee-ts");
   consignee.blur(function(){
   	if(consignee.val()==""){
   		consigneeTs.css({display:"block"});
   	}else{
   		if(check("^[\\u2E80-\\u9FFF]+$",consignee.val())==false){
   		   consigneeTs.css({display:"block"}).text("只能输入2-30个汉字");
   	    }else{
   	    	consigneeTs.css({display:"none"});
   	    }
   	}
   	
   });

   var consigneeTell=$(".consignee-tell");  //手机
   var consigneeTellTs =$('.consignee-tell-ts');
   consigneeTell.focus(function(){
   		if(consignee.val()==""){
   		   consigneeTs.css({display:"block"});
   	    }
   });
   consigneeTell.blur(function(){
   	if(consigneeTell.val()==""){
   		consigneeTellTs.css({display:"block"});
   	}else{
   		if(check("^[1][358][0-9]{9}$",consigneeTell.val())==false){
   		   consigneeTellTs.css({display:"block"}).text("请检查您的手机号码是否正确");
   	    }else{
   	    	consigneeTellTs.css({display:"none"});
   	    }
   	}
   });

   var detailAddress=$(".detail-address"); //地址
   var detailAddressTs=$(".detail-address-ts");
   detailAddress.focus(function(){
   		if(consigneeTell.val()=="" || consignee.val()==""){
   		   consigneeTellTs.css({display:"block"});
   		   consigneeTs.css({display:"block"});
   	    }
   });

   var addressCode=$('.address-code');  //邮箱
   var addressCodeTs=$('.address-code-ts');
   addressCode.blur(function(){
   	if(addressCode.val()==""){
   		addressCodeTs.css({display:"block"});
   	}else{
   		if(check("^[1-9]\\d{5}(?!\\d)$",addressCode.val())==false){
   		   addressCodeTs.css({display:"block"}).text("请检查邮编是否正确");
   	    }else{
   	    	addressCodeTs.css({display:"none"});
   	    }
   	}
   });

   // **************点击确认保存地址****************
   var tiShi=$(".tishi");
   var confirm=$(".confirm");
   var lastCue=$('.last-cue');

   var finishAddress=$(".finish-address");
   var tempAdressCookie = null;	 
   var tempAdressArr = getCookie('customAdress'); 
   var confirmMessage=$(".confirm-message");
   var orderContent=$(".order-content");

   confirm.click(function(){
   	if((check("^[\\u2E80-\\u9FFF]+$",consignee.val())==true) && (check("^[1][358][0-9]{9}$",consigneeTell.val())==true) && (check("^[1-9]\\d{5}(?!\\d)$",addressCode.val())==true)){
   		var 
   	    customName=$('.consignee').val(),      //姓名
   	    customTell=$('.consignee-tell').val(), //收货人电话
   	    customAdress1=$('.receive1').val(),    //地址1
   	    customAdress2=$('.receive2').val(),    //地址2
   	    customAdress3=$('.receive3').val(),    //地址3
   	    detailAdress=$('.detail-address').val();    //详细地址


   	 if (getCookie('customAdress') == undefined) {
			var cookieArr = [];
			var obj = {
				'customName' : customName,
				'customTell': customTell,
				'customAdress1': customAdress1,
				'customAdress2' : customAdress2 ,
				'customAdress3' : customAdress3,
				'detailAdress' : detailAdress
			};
			cookieArr.push(obj);
		}else{
			var cookieArr = JSON.parse(getCookie('customAdress'));

			var obj = {
				'customName' : customName,
				'customTell': customTell,
				'customAdress1': customAdress1,
				'customAdress2' : customAdress2 ,
				'customAdress3' : customAdress3,
				'detailAdress' : detailAdress
			};
			    cookieArr.push(obj);
			}

		var customAdress = JSON.stringify(cookieArr);
		setCookie('customAdress',customAdress,1,'/');	

		window.location.href="";

   	}else{
   		lastCue.css({display:"block"});
   	}

   });

   // **********获取地址************

	if (tempAdressArr != null) {
		orderContent.css({display:"none"});
		finishAddress.css({display:'block'});

	   var tempAdressArr = JSON.parse(getCookie('customAdress'));
	   for (var i = 0; i < tempAdressArr.length; i++) {
			tempAdressCookie = tempAdressArr[i] ;
			finishAddress.append('<div class="add-adress"><label><input type="radio" class="add-radio" name="choose" /><span class="ad-name" style="width:100px;margin-left:10px">'+tempAdressCookie["customName"]+'</span><span  style="width:130px;" class="ad-tell">'+tempAdressCookie["customTell"]+'</span><span>'+tempAdressCookie["customAdress1"] +' --  </span><span>' +tempAdressCookie["customAdress2"] +' --  </span><span>'+ tempAdressCookie["customAdress3"] +' --  </span><span>'+ tempAdressCookie["detailAdress"] +'</span><span class="ad-del">删除</span></label></div>');
		}
	}

	// ******************** 地址显示到see-order中*********

	var addRadio=$(".add-radio");
	var seeOrder=$(".see-order");
	var addAdress=$(".add-adress");
	var seeOrderdown=$(".see-orderdown");
	var orderAddress=$(".order-address");
	var seeAddorder=$(".see-addorder");
	var addlistIp=$(".asslistIp");

	seeOrderdown.click(function(){
		orderAddress.css({display:"block"});
		seeOrder.css({display:"none"});
	});

   if(orderContent.css("display")=="none"){
        confirm.click(function(){
        	lastCue.css({display:"none"});
    	    for(var j=0;j<addRadio.length;j++){
    			if(addRadio.eq(j).is(":checked")){
	    			orderAddress.css({display:"none"});
	    			seeOrder.css({display:"block"});
	    			seeAddorder.html(addAdress.eq(j).html());
	    		}
    	    }
        });
    }

	// ****************删除地址*******

   var adDel=$(".ad-del");
   var addlist=$('.addlist');

	adDel.click(function(){
		var tempAddressC = getCookie('customAdress');
		var iIndex = adDel.index($(this));
		var addAdress=adDel.eq(iIndex).closest('.add-adress');
		var adDelData = addAdress.find('.ad-name').text();
		var tepArrAd = [];

		if(tempAddressC){
			for (var i = 0; i < JSON.parse(tempAddressC).length; i++) {
				if ( JSON.parse(tempAddressC)[i]['customName'] != adDelData ) {
					tepArrAd.push( JSON.parse(tempAddressC)[i]);
				}

			}
			if (tepArrAd.length == 0) {
				setCookie('customAdress','',-666,'/');
			}else{
				tempAddressC = tepArrAd;
				setCookie('customAdress',JSON.stringify(tempAddressC),1,'/');
			}
		}
		addAdress.remove();
	});

	


	// **************添加地址*************
    
    
    var addlistAb=$(".addlist label");

	addlistAb.click(function(){
		if(addlistIp.is(":checked")){
		    orderContent.css({display:"block"});
		}else{
		    orderContent.css({display:"none"});
		}	
	});

	// *******************优惠券************
	var coupon=$(".coupon");
	var seeCoupon=$(".see-coupon");
	var seeCouponI=$(".see-coupon i");
	var hideCoupon=$(".hide-coupon");


	var seePayment=$(".see-payment");
	var seePaymentI=$(".see-payment i");
	var payment=$(".payment");
	var hidePayment=$(".hide-payment");

	seeCoupon.click(function(){
		if(seeCouponI.attr("class")=="youhui"){
			seeCouponI.removeClass("youhui");
			hideCoupon.stop(true).animate({height:0},function(){
				hideCoupon.css({display:"none"})});
		}else{
			seeCouponI.addClass("youhui");
			hideCoupon.css({display:"block"}).stop(true).animate({height:"76px"});
			
		}
		
	});

	seePayment.click(function(){
		if(seePaymentI.attr("class")=="youhui"){
			seePaymentI.removeClass("youhui");
			hidePayment.stop(true).animate({height:0},function(){
				hidePayment.css({display:"none"})});
		}else{
			seePaymentI.addClass("youhui");
			hidePayment.css({display:"block"}).stop(true).animate({height:"125px"});
		}
		
	});


	// **************支付方式**************

	var metList=$('.met-list li');
	var metPanel=$(".met-panel");

	metList.click(function(){
		var iIndex=metList.index($(this));
		metList.removeClass("met-action").eq(iIndex).addClass("met-action");
		metPanel.css({display:"none"}).eq(iIndex).css({display:"block"});
	});

	var metPanelLbI=$(".met-panel label img");
	var metPanelLb=$(".met-panel label");

	metPanelLb.click(function(){
		var iIndex=metPanelLb.index($(this));
		metPanelLbI.removeClass("lb-active").eq(iIndex).addClass("lb-active");
	});

	var medDown=$(".med-down");
	var medUp=$(".med-up");
	var spaymentMethod=$(".see-payment-method");
	var hpaymentMethod=$(".hide-payment-method");

	medDown.click(function(){
		spaymentMethod.css({display:"none"});
		hpaymentMethod.css({display:"block"});
	});
	medUp.click(function(){
		spaymentMethod.css({display:"block"});
		hpaymentMethod.css({display:"none"});
	});

	var metConfirm=$(".met-confirm");
	var metPanelIp=$(".met-panel input");
	var seeMethod=$(".see-method");

	metConfirm.click(function(){
		for(var i=0;i<metPanelIp.length;i++){
			if(metPanelIp.eq(i).is(':checked')){
				seeMethod.html(metPanelLb.eq(i));
			}
		}
		spaymentMethod.css({display:"block"});
		hpaymentMethod.css({display:"none"});
	});


	// *****************发票信息*************
	var company=$(".company");
	company.focus(function(){
		if(company.val()=="请填写公司名称"){
			company.val(" ");
		}
	});
	company.blur(function(){
		if(company.val()!==" "){
			company.val();
		}else{
			company.val("请填写公司名称");
		}	
	});

	var infoChek=$(".info-chek");
	var hideRight=$(".hide-right");
	infoChek.click(function(){
		if(infoChek.is(":checked")){
			hideRight.css({display:"block"}).stop(true).animate({height:"60px"});
		}else{
			hideRight.stop(true).animate({height:"0"},function(){hideRight.css({display:"none"})});
		}
	});

	var selCom=$(".sel-com");
	var selComSel=$(".sel-com select");
	var cardInfoLb=$(".card-info label");
	var cardInfoLbIp=$(".card-info label input");
	cardInfoLb.click(function(){
		var iIndex=$(this).index();
		selCom.css({display:"none"}).eq(iIndex).css({display:"block"});
	});

	var preservation=$(".preservation");
	var infoConL=$(".info-con-l");
	var infoConR=$(".info-con-r");
	var seeInvoiceInfo=$(".see-invoice-info");
	var hideInvoiceInfo=$(".hide-invoice-info");
	var company=$(".company");
	var infoTs=$(".info-ts");

	preservation.click(function(){
		for(var i=0;i<cardInfoLbIp.length;i++){
			if(selComSel.eq(i).val()=="请选择发票类型"){
					infoTs.text("请选择发票类型");
					infoTs.addClass("info-ts-style");
			}else{
				infoTs.text(" ");
				infoTs.removeClass("info-ts-style");
			}
			if(infoTs.text()==" "){
				if(cardInfoLbIp.eq(i).is(":checked")){
				   infoConL.html(cardInfoLb.eq(i).text()+"类型: ");
				   if(company){
					   infoConR.html(company.val()+" "+ selComSel.eq(i).val());
				   }else{
					   infoConR.html(selComSel.eq(i).val());
				   }
				
			    }
				seeInvoiceInfo.css({display:"block"});
		      	hideInvoiceInfo.css({display:"none"});

		    }
			
		}
		
	});

	var invDown=$(".inv-down");
	invDown.click(function(){
		seeInvoiceInfo.css({display:"none"});
		hideInvoiceInfo.css({display:"block"});
	});

	// *****************提交成功************
	var success=$("#success");
	var tijiao=$(".tijiao");
	var succeSpan=$(".success-span");
	tijiao.click(function(){
		success.css({display:"block"});
	});
	succeSpan.click(function(){
		success.css({display:"none"});
	});









   	
   
   	
 



	});
})(jQuery);

// *****************cookie***************
		 function setCookie(name,value,expires,path){
            var oDate=new Date();
            oDate.setDate(oDate.getDate()+expires);
            document.cookie = name + '=' +encodeURIComponent(value)+ ';expires='+oDate+';path='+path;
        }

        function getCookie(name){
            var aCookie=document.cookie.split("; ");
            for(var i=0;i<aCookie.length;i++){
                var aTemp=aCookie[i].split("=");
                if(aTemp[0]==name){
                    return decodeURIComponent(aTemp[1]);
                }
            }
        }

        function removeCookie(name,path){
            document.cookie=name+'=;expires=-1;path='+path;
        }





