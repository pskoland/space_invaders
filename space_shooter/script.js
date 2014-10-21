// Generated by CoffeeScript 1.6.3
(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};window.onload=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g;window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}();f=document.getElementById("intro");h=document.getElementById("loading");f.className="active";document.addEventListener("keydown",g=function(e){if(e.keyCode===32){document.removeEventListener("keydown",g);h.className="active";f.className="";return d.load()}},!1);d={done:0,required:2,load:function(){this.done++;if(this.done===this.required)return m()}};s={images:[],loaded:0,paths:["images/bg-o.png","images/bg2.png","images/explosion.png","images/explosion2.png","images/sprite.png"],loadImages:function(){var e,t,n,r,i,s,o,u=this;s=this.paths;o=[];for(e=r=0,i=s.length;r<i;e=++r){n=s[e];t=new Image;this.images.push({path:n,img:t});t.onload=function(){u.loaded++;if(u.loaded===u.paths.length)return d.load()};o.push(t.src=this.paths[e])}return o},get:function(e){var t;t=this.images.filter(function(t){return t.path===e});return t[0].img}};s.loadImages();v={shoot:new Howl({urls:["sounds/shoot.ogg","sounds/shoot.mp3"],volume:.14}),explosion:new Howl({urls:["sounds/explosion.ogg","sounds/explosion.mp3"],volume:.5}),background:new Howl({urls:["sounds/background.ogg","sounds/background.mp3"],loop:!0,buffer:!0,volume:.7})};r=document.getElementById("cont");a=document.getElementById("game_over");u=document.getElementById("levelup");c=document.getElementById("lives");l=document.getElementById("ingame_level");o=document.getElementById("info_level");p=document.getElementById("mute");n=document.getElementById("game_screen");t=n.getContext("2d");i={width:900,height:630,level:0,lives:3,timeOfLastDeath:0,deltaLastTime:0,paused:{levelup:!1,over:!1},muted:!1};n.width=i.width;n.height=i.height;i.setSize=function(){var e,t,r;r=window.innerWidth;t=window.innerHeight;e=(t-100)/i.height;e>1.1&&(e=1.1);i.scale(e);if(r-20<+n.style.width.replace("px",""))return i.scale((r-40)/i.width)};i.scale=function(e){r.style.width=i.width*e+"px";n.style.width=i.width*e+"px";return n.style.height=i.height*e+"px"};window.addEventListener("resize",function(){return i.setSize()},!1);i.setSize();return m=function(){var n,r,f,d,m,g,y,b,w;w=Date.now();i.time=function(){return Date.now()-w};b=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};d=function(){function n(t,n,r,i,s,o,u,a,f){this.image=t;this.cTop=n;this.cSize=r;this.pos=i;this.size=s;this.speed=o;this.frames=u;this.once=a;this.length=f;this.draw=e(this.draw,this);this.animation=e(this.animation,this);this.ticker=0}n.prototype.animation=function(e,t){this.frames=e;t!=null&&(this.once=t);this.ticker=0;return this.done=!1};n.prototype.draw=function(){var e,n,r;if(!this.done){this.frames||(this.frames=function(){var e,t,n;n=[];for(r=e=0,t=this.length-1;0<=t?e<=t:e>=t;r=0<=t?++e:--e)n.push(r);return n}.call(this));this.ticker+=this.speed*m;n=Math.floor(this.ticker);e=this.frames[n%this.frames.length];this.cLeft=e*this.cSize[0];this.once&&n>=this.frames.length-1&&(this.done=!0)}return t.drawImage(this.image,this.cLeft,this.cTop,this.cSize[0],this.cSize[1],this.pos[0],this.pos[1],this.size[0],this.size[1])};return n}();n=function(){function e(t,n,r,i,s,o,u){this.image=t;this.height=n;this.width=r;this.top=i;this.left=s;this.isPlayers=o;this.horzMovement=u;e.bullets.push(this)}e.bullets=[];e.move=function(){var e,t,n,r,s,o,u;this.bullets=this.bullets.filter(function(e){return!(e.top+e.height<0||e.top>i.height)});o=this.bullets;u=[];for(r=0,s=o.length;r<s;r++){e=o[r];if(e.isPlayers)u.push(e.top-=Math.round(10*m));else{t=Math.round(1*e.horzMovement*i.level/8*m);n=Math.round((3+i.level/4)*m);e.left+=t;e.top+=n;e.image.pos[0]+=t;u.push(e.image.pos[1]+=n)}}return u};e.draw=function(){var e,n,r,i,s;i=this.bullets;s=[];for(n=0,r=i.length;n<r;n++){e=i[n];e.isPlayers?s.push(t.drawImage(e.image,0,276,7,14,e.left,e.top,e.width,e.height)):s.push(e.image.draw())}return s};return e}();y={width:60,height:60};y.left=i.width/2-y.width/2;y.top=i.height-y.height-10;y.sp=30;y.tp=20;y.sprite=new d(s.get("images/sprite.png"),101,[128,120],[y.left,y.top],[y.width+y.sp,y.height+y.tp],.3,[3],"once");y.move=function(){this.isMovingLeft&&this.left>20?this.left-=Math.round(12*m):this.isMovingRight&&this.left<i.width-this.width-20&&(this.left+=Math.round(12*m));this.isMovingUp&&this.top>i.height-y.height-100?this.top-=Math.round(6*m):this.isMovingDown&&this.top<i.height-y.height-10&&(this.top+=Math.round(6*m));y.sprite.pos[0]=this.left-y.sp/2;return y.sprite.pos[1]=this.top-y.tp};y.draw=function(){return y.sprite.draw()};y.shoot=function(){var e,t,r,o;e=18;o=9;t=y.left+y.width/2-o/2;r=y.top-e;new n(s.get("images/sprite.png"),e,o,r,t-15,!0,null);new n(s.get("images/sprite.png"),e,o,r,t+15,!0,null);this.initMuzzleFlash();if(!i.muted)return v.shoot.play()};y.flashes=[];y.initMuzzleFlash=function(){y.flashes.push(new d(s.get("images/sprite.png"),240,[56,36],[0,0],[32,32],.8,!1,"once",4));return y.flashes.push(new d(s.get("images/sprite.png"),240,[56,36],[0,0],[32,32],.8,!1,"once",4))};y.drawFlashes=function(){var e,t,n,r,i,s,o;this.flashes=this.flashes.filter(function(e){return!e.done});s=this.flashes;o=[];for(t=r=0,i=s.length;r<i;t=++r){e=s[t];n=t%2===0?-15:15;e.pos[0]=y.left+y.width/2+n-16;e.pos[1]=y.top+12-36;o.push(e.draw())}return o};f=function(){function e(t,n,r,i,s,o,u,a,f){this.cLeft=t;this.cTop=n;this.cWidth=r;this.cHeight=i;this.left=s;this.top=o;this.width=u;this.height=a;this.dead=f;this.patrol={left:0,top:0};this.lives=2;e.invaders.push(this)}e.invaders=[];e.speed=1;e.patrolSwitch=0;e.deploy=function(){var t,n,r,s,o,u,a,f,l,c,h,p;a=[[105,0,100,100],[205,0,103,100],[312,0,103,100],[415,0,103,100],[631,0,104,100],[738,0,100,100],[845,0,105,100],[954,0,103,100],[0,0,105,100],[518,0,111,100]];u=i.level%10;n=a[u][0];r=a[u][1];s=a[u][2];t=a[u][3];c=70;o=50;this.p=15;l=-(o+this.p)*3;f=i.width/2-((c+this.p)*8-this.p)/2;p=[];for(u=h=0;h<=23;u=++h)p.push(new e(n,r,s,t,f+u%8*(c+this.p),l+u%3*(o+this.p),c,o,!1));return p};e.move=function(){var t,n,r,s,o,u,a,f,l,c,h,p,d;r=[];u=[];h=this.invaders;for(a=0,l=h.length;a<l;a++){t=h[a];r.push(t.left);u.push(t.left+t.width)}n=Math.min.apply(Math,r);o=Math.max.apply(Math,u);s=Date.now();if((n<20||o>i.width-20)&&s-this.patrolSwitch>1e3){this.speed=-this.speed;this.patrolSwitch=s}p=e.invaders;d=[];for(f=0,c=p.length;f<c;f++){t=p[f];if(t.patrol.top<(t.height+this.p)*3+20){t.patrol.top+=Math.round(2*m);d.push(t.top+=Math.round(2*m))}else d.push(t.left+=Math.round(this.speed*m))}return d};e.draw=function(){var n,r,i,o,u;o=e.invaders;u=[];for(r=0,i=o.length;r<i;r++){n=o[r];u.push(t.drawImage(s.get("images/sprite.png"),n.cLeft,n.cTop,n.cWidth,n.cHeight,n.left,n.top,n.width,n.height))}return u};e.shoot=function(){var t,r,o,u,a,f,l,c,h,p,v,m,g,y,w;g=e.invaders;w=[];for(h=0,v=g.length;h<v;h++){u=g[h];t=!1;y=e.invaders;for(p=0,m=y.length;p<m;p++){o=y[p];u.top<o.top&&u.left<o.left+u.width&&u.left+u.width>o.left&&(t=!0)}if(b(-1e3,2+i.level/2)>-1&&!t){f=18;c=u.top+u.height;a=u.left+u.width/2-f/2;r=b(-10,10)/10;l=new d(s.get("images/sprite.png"),222,[f,f],[a,c],[f,f],200,!1,!1,18);w.push(new n(l,f,f,c,a,!1,r))}else w.push(void 0)}return w};return e}();r=function(){function e(t,n,r,i){var o;this.left=t;this.top=n;this.size=r;this.type=i;t=this.left-this.size/2;n=this.top-this.size/2;this.type==="shockwave"?o=new d(s.get("images/explosion2.png"),0,[83.333,83],[t,n],[this.size,this.size],.65,!1,"once",48):o=new d(s.get("images/explosion.png"),0,[88,88],[t,n],[this.size,this.size],.8,!1,"once",64);e.explosions.push(o)}e.explosions=[];e.draw=function(){var e,t,n,r,i;this.explosions=this.explosions.filter(function(e){return!e.done});r=this.explosions;i=[];for(t=0,n=r.length;t<n;t++){e=r[t];i.push(e.draw())}return i};return e}();i.colliding=function(e,t){return e.left<t.left+t.width&&e.left+e.width>t.left&&e.top<t.top+t.height&&e.height+e.top>t.top};i.handleCollisions=function(){var e,t,s,o,u,a,l,c,h,p,d,m;d=n.bullets;for(t=l=0,h=d.length;l<h;t=++l){e=d[t];if(this.colliding(y,e)&&!e.isPlayers&&this.time()-this.timeOfLastDeath>800){this.lives--;this.timeOfLastDeath=this.time();e.dead=!0;this.updateScore();new r(y.left+y.width/2,y.top+20,120,"impact");i.muted||v.explosion.play()}m=f.invaders;for(o=c=0,p=m.length;c<p;o=++c){s=m[o];if(this.colliding(s,e)&&e.isPlayers){e.dead=!0;s.lives--;s.lives||(s.dead=!0);a=s.dead&&b(-10,5)>0?"shockwave":"impact";u=a==="shockwave"?100+b(1,40):80+b(1,40);new r(s.left+s.width/2,s.top+s.height/2,u,a);i.muted||v.explosion.play()}}}n.bullets=n.bullets.filter(function(e){return!e.dead});return f.invaders=f.invaders.filter(function(e){return!e.dead})};i.bgPos=0;i.bgPos2=0;i.loopBackground=function(){var e,n;this.bgPos+=Math.round(m*1);this.bgPos2+=Math.round(m*2);e=i.height;t.drawImage(s.get("images/bg-o.png"),0,this.bgPos,i.width,e);t.drawImage(s.get("images/bg-o.png"),0,this.bgPos-e,i.width,e);this.bgPos>=e&&(this.bgPos=0);n=i.height;t.drawImage(s.get("images/bg2.png"),0,this.bgPos2,i.width,n);t.drawImage(s.get("images/bg2.png"),0,this.bgPos2-n,i.width,n);if(this.bgPos2>=n)return this.bgPos2=0};i.updateScore=function(){var e,t,n,r;t=[];if(i.lives)for(e=n=1,r=i.lives;1<=r?n<=r:n>=r;e=1<=r?++n:--n)t.push("<img src='images/life.png'>");c.innerHTML=t.join("");l.textContent=i.level;return o.textContent=i.level};m=0;g=!0;i.setDeltaLastTime=function(){var e;if(g){g=!1;i.deltaLastTime=Date.now()}e=Date.now();m=(e-i.deltaLastTime)/1e3*60;return i.deltaLastTime=e};i.dealWithEvents=function(){var e=this;if(this.lives===0&&!this.paused.over){this.paused.over=!0;setTimeout(function(){var t;return document.addEventListener("keydown",t=function(n){if(n.keyCode===32){document.removeEventListener("keydown",t);e.paused.over=!1;a.className="";v.background.pos(0);return e.init(1,3)}},!1)},1e3)}else if(f.invaders.length===0&&!this.paused.levelup){this.paused.levelup=!0;this.level++;this.updateScore();setTimeout(function(){e.paused.levelup=!1;u.className="";return e.init(e.level,e.lives)},2e3)}if(this.paused.over)return a.className="active";if(this.paused.levelup)return u.className="active"};i.update=function(){i.loopBackground();i.setDeltaLastTime();if(!i.paused.over){y.move();y.draw()}if(!i.paused.levelup){f.move();f.draw()}if(!i.paused.over&&!i.paused.levelup){i.handleCollisions();f.shoot()}n.move();n.draw();r.draw();y.drawFlashes();i.dealWithEvents();return requestAnimationFrame(i.update)};i.init=function(e,t){this.level=e;this.lives=t;n.bullets=[];f.invaders=[];f.deploy();return this.updateScore()};document.addEventListener("keydown",function(e){if(e.keyCode===37){y.leftPressed||y.sprite.animation([2,1,0]);y.leftPressed=!0;y.isMovingLeft=!0;return y.isMovingRight=!1}if(e.keyCode===39){y.rightPressed||y.sprite.animation([4,5,6]);y.rightPressed=!0;y.isMovingRight=!0;return y.isMovingLeft=!1}if(e.keyCode===38){y.upPressed=!0;y.isMovingUp=!0;return y.isMovingDown=!1}if(e.keyCode===40){y.downPressed=!0;y.isMovingDown=!0;return y.isMovingUp=!1}if(e.keyCode===32){e.preventDefault();if(!i.paused.over&&!i.paused.levelup)return y.shoot()}},!1);document.addEventListener("keyup",function(e){if(e.keyCode===37){y.leftPressed=!1;y.isMovingLeft=!1;y.rightPressed&&(y.isMovingRight=!0);return y.rightPressed?y.sprite.animation([4,5,6]):y.sprite.animation([1,2,3])}if(e.keyCode===39){y.rightPressed=!1;y.isMovingRight=!1;y.leftPressed&&(y.isMovingLeft=!0);return y.leftPressed?y.sprite.animation([2,1,0]):y.sprite.animation([5,4,3])}if(e.keyCode===38){y.upPressed=!1;y.isMovingUp=!1;if(y.downPressed)return y.isMovingDown=!0}else if(e.keyCode===40){y.downPressed=!1;y.isMovingDown=!1;if(y.upPressed)return y.isMovingUp=!0}},!1);p.addEventListener("click",function(){i.muted?v.background.unmute():v.background.mute();return i.muted=!i.muted},!1);i.update();h.className="";return v.background.play()}}}).call(this);