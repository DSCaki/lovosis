function k(d,t,e){return Math.max(d,Math.min(t,e))}class q{advance(t){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=k(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(s,o,c,u){return function(n,v,m){return(1-m)*n+m*v}(s,o,1-Math.exp(-c*u))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:o,onStart:c,onUpdate:u}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,c?.(),this.onUpdate=u}}class F{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:s=250}={}){this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(c,u){let p;return function(){let n=arguments,v=this;clearTimeout(p),p=setTimeout(function(){c.apply(v,n)},u)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class D{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let s=0,o=i.length;s<o;s++)i[s](...e)}on(t,e){return this.events[t]?.push(e)||(this.events[t]=[e]),()=>{this.events[t]=this.events[t]?.filter(i=>e!==i)}}off(t,e){this.events[t]=this.events[t]?.filter(i=>e!==i)}destroy(){this.events={}}}const O=100/6;class I{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new D,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=s===1?O:s===2?this.windowWidth:1,i*=s===1?O:s===2?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}class B{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:o=!0,syncTouch:c=!1,syncTouchLerp:u=.075,touchInertiaMultiplier:p=35,duration:n,easing:v=l=>Math.min(1,1.001-Math.pow(2,-10*l)),lerp:m=.1,infinite:z=!1,orientation:r="vertical",gestureOrientation:g="vertical",touchMultiplier:S=1,wheelMultiplier:b=1,autoResize:W=!0,prevent:V=!1,__experimental__naiveDimensions:X=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.direction=0,this.onVirtualScroll=({deltaX:l,deltaY:w,event:h})=>{if(h.ctrlKey)return;const f=h.type.includes("touch"),x=h.type.includes("wheel");if(this.isTouching=h.type==="touchstart"||h.type==="touchmove",this.options.syncTouch&&f&&h.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const Y=l===0&&w===0,A=this.options.gestureOrientation==="vertical"&&w===0||this.options.gestureOrientation==="horizontal"&&l===0;if(Y||A)return;let _=h.composedPath();_=_.slice(0,_.indexOf(this.rootElement));const E=this.options.prevent;if(_.find(a=>{var T,L,M,N,R;return a instanceof Element&&((typeof E=="function"?E?.(a):E)||((T=a.hasAttribute)===null||T===void 0?void 0:T.call(a,"data-lenis-prevent"))||f&&((L=a.hasAttribute)===null||L===void 0?void 0:L.call(a,"data-lenis-prevent-touch"))||x&&((M=a.hasAttribute)===null||M===void 0?void 0:M.call(a,"data-lenis-prevent-wheel"))||((N=a.classList)===null||N===void 0?void 0:N.contains("lenis"))&&!(!((R=a.classList)===null||R===void 0)&&R.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void h.preventDefault();if(!(this.options.syncTouch&&f||this.options.smoothWheel&&x))return this.isScrolling="native",void this.animate.stop();h.preventDefault();let y=w;this.options.gestureOrientation==="both"?y=Math.abs(w)>Math.abs(l)?w:l:this.options.gestureOrientation==="horizontal"&&(y=l);const U=f&&this.options.syncTouch,H=f&&h.type==="touchend"&&Math.abs(y)>5;H&&(y=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+y,Object.assign({programmatic:!1},U?{lerp:H?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(this.isScrolling===!1||this.isScrolling==="native"){const l=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-l,this.direction=Math.sign(this.animatedScroll-l),this.isScrolling="native",this.emit(),this.velocity!==0&&(this.__resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.3",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:o,syncTouch:c,syncTouchLerp:u,touchInertiaMultiplier:p,duration:n,easing:v,lerp:m,infinite:z,gestureOrientation:g,orientation:r,touchMultiplier:S,wheelMultiplier:b,autoResize:W,prevent:V,__experimental__naiveDimensions:X},this.animate=new q,this.emitter=new D,this.dimensions=new F({wrapper:t,content:e,autoResize:W}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new I(s,{touchMultiplier:S,wheelMultiplier:b}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:c=this.options.easing,lerp:u=this.options.lerp,onStart:p,onComplete:n,force:v=!1,programmatic:m=!0,userData:z={}}={}){if(!this.isStopped&&!this.isLocked||v){if(typeof t=="string"&&["top","left","start"].includes(t))t=0;else if(typeof t=="string"&&["bottom","right","end"].includes(t))t=this.limit;else{let r;if(typeof t=="string"?r=document.querySelector(t):t instanceof HTMLElement&&t?.nodeType&&(r=t),r){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?S.left:S.top}const g=r.getBoundingClientRect();t=(this.isHorizontal?g.left:g.top)+this.animatedScroll}}if(typeof t=="number"&&(t+=e,t=Math.round(t),this.options.infinite?m&&(this.targetScroll=this.animatedScroll=this.scroll):t=k(0,t,this.limit),t!==this.targetScroll)){if(this.userData=z,i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),n?.(this),void(this.userData={});m||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:c,lerp:u,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",p?.(this)},onUpdate:(r,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=r-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=r,this.setScroll(this.scroll),m&&(this.targetScroll=r),g||this.emit(),g&&(this.reset(),this.emit(),n?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextNativeScrollEvent})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,i){return(e%i+i)%i}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}const $=new B;function C(d){$.raf(d),requestAnimationFrame(C)}requestAnimationFrame(C);
