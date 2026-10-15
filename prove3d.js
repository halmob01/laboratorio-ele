(()=>{var cf=0,jc=1,hf=2;var Yc=1,cs=2,ai=3,jn=0,mn=1,Sn=2,Yt=0,lr=1,Ci=2,Zc=3,Kc=4,Oo=5,Rn=100,uf=101,ff=102,df=103,pf=104,Sr=200,mf=201,gf=202,vf=203,ho=204,uo=205,ca=206,xf=207,ha=208,bf=209,_f=210,yf=211,Mf=212,Sf=213,Ef=214,Bo=0,ko=1,zo=2,cr=3,Ho=4,Go=5,Vo=6,Wo=7,Jc=0,wf=1,Tf=2,Pi=0,Xo=1,qo=2,jo=3,Yo=4,Zo=5,Xi=6,Ko=7,Uc="attached",Af="detached",Qc=300,Er=301,wr=302,Jo=303,Qo=304,ua=306,Jt=1e3,Nn=1001,Yr=1002,qt=1003,$o=1004;var Tr=1005;var Ht=1006,hs=1007;var On=1008;var gn=1009,$c=1010,eh=1011,us=1012,el=1013,qi=1014,hn=1015,kt=1016,tl=1017,nl=1018,ji=1020,th=35902,nh=1021,ih=1022,sn=1023,Zr=1026,Yi=1027,fs=1028,il=1029,rh=1030,rl=1031;var sl=1033,fa=33776,da=33777,pa=33778,ma=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,fl=37496,dl=37808,pl=37809,ml=37810,gl=37811,vl=37812,xl=37813,bl=37814,_l=37815,yl=37816,Ml=37817,Sl=37818,El=37819,wl=37820,Tl=37821,ga=36492,Al=36494,Rl=36495,sh=36283,Cl=36284,Pl=36285,Il=36286;var hr=2300,ur=2301,co=2302,Nc=2400,Fc=2401,Oc=2402,Rf=2500;var ah=0,va=1,ds=2,Cf=3200,Pf=3201;var Dl=0,If=1,Kn="",Lt="srgb",jt="srgb-linear",zs="linear",St="srgb";var or=7680;var Bc=519,Df=512,Lf=513,Uf=514,oh=515,Nf=516,Ff=517,Of=518,Bf=519,fo=35044;var lh="300 es",ti=2e3,Hs=2001;var yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Fs=Math.PI/180,fr=180/Math.PI;function qn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function ch(r,e){return(r%e+e)%e}function pp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function mp(r,e,t){return r!==e?(t-r)/(e-r):0}function Os(r,e,t){return(1-t)*r+t*e}function gp(r,e,t,n){return Os(r,e,1-Math.exp(-t*n))}function vp(r,e=1){return e-Math.abs(ch(r,e*2)-e)}function xp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _p(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yp(r,e){return r+Math.random()*(e-r)}function Mp(r){return r*(.5-Math.random())}function Sp(r){r!==void 0&&(Mu=r);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ep(r){return r*Fs}function wp(r){return r*fr}function Tp(r){return(r&r-1)===0&&r!==0}function Ap(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Rp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cp(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var hh={DEG2RAD:Fs,RAD2DEG:fr,generateUUID:qn,clamp:pt,euclideanModulo:ch,mapLinear:pp,inverseLerp:mp,lerp:Os,damp:gp,pingpong:vp,smoothstep:xp,smootherstep:bp,randInt:_p,randFloat:yp,randFloatSpread:Mp,seededRandom:Sp,degToRad:Ep,radToDeg:wp,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:Rt,denormalize:Xn},Te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],w=i[1],y=i[4],_=i[7],C=i[2],I=i[5],D=i[8];return s[0]=a*x+o*w+l*C,s[3]=a*m+o*y+l*I,s[6]=a*p+o*_+l*D,s[1]=c*x+h*w+u*C,s[4]=c*m+h*y+u*I,s[7]=c*p+h*_+u*D,s[2]=f*x+d*w+g*C,s[5]=f*m+d*y+g*I,s[8]=f*p+d*_+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ac.makeScale(e,t)),this}rotate(e){return this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ac=new dt;function uh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kf(){let r=Kr("canvas");return r.style.display="block",r}var Su={};function xa(r){r in Su||(Su[r]=!0,console.warn(r))}function zf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hf(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gf(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Eu=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pp(){let r={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=jr(i.r),i.g=jr(i.g),i.b=jr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[jt]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}var gt=Pp();function _i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ur,po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Kr("canvas")),Ur.width=e.width,Ur.height=e.height;let i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ip=0,Jr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(oc(i[a].image)):s.push(oc(i[a]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?po.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dp=0,Qt=class r extends yi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Nn,i=Nn,s=Ht,a=On,o=sn,l=gn,c=r.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=qn(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Qc;Qt.DEFAULT_ANISOTROPY=1;var yt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(d+1)/2,C=(p+1)/2,I=(h+f)/4,D=(u+x)/4,N=(g+m)/4;return y>_&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=I/n,s=D/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=I/i,s=N/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=D/s,i=N/s),this.set(n,i,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gs=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),I=Math.atan2(C,p*w);m=Math.sin(m*I)/C,o=Math.sin(o*I)/C}let _=o*w;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+x*_,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new O,Tu=new Fn,Cn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),ka.subVectors(this.max,Rs),Nr.subVectors(e.a,Rs),Fr.subVectors(e.b,Rs),Or.subVectors(e.c,Rs),Ni.subVectors(Fr,Nr),Fi.subVectors(Or,Fr),ir.subVectors(Nr,Or);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ir.z,ir.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ir.z,0,-ir.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ir.y,ir.x,0];return!cc(t,Nr,Fr,Or,ka)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,Nr,Fr,Or,ka))?!1:(za.crossVectors(Ni,Fi),t=[za.x,za.y,za.z],cc(t,Nr,Fr,Or,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new O,new O,new O,new O,new O,new O,new O,new O],Gn=new O,Ba=new Cn,Nr=new O,Fr=new O,Or=new O,Ni=new O,Fi=new O,ir=new O,Rs=new O,ka=new O,za=new O,rr=new O;function cc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rr.fromArray(r,s);let o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lp=new Cn,Cs=new O,hc=new O,_n=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);let t=Cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(hc)),this.expandByPoint(Cs.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new O,uc=new O,Ha=new O,Oi=new O,fc=new O,Ga=new O,dc=new O,Gi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(uc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=Oi.dot(this.direction),l=-Oi.dot(Ha),c=Oi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uc).addScaledVector(Ha,f),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),i=di.dot(di)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,s){fc.subVectors(t,e),Ga.subVectors(n,e),dc.crossVectors(fc,Ga);let a=this.direction.dot(dc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);let l=o*this.direction.dot(Ga.crossVectors(Oi,Ga));if(l<0)return null;let c=o*this.direction.dot(fc.cross(Oi));if(c<0||l+c>a)return null;let h=-o*Oi.dot(dc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,f,d,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,d,g,x,m)}set(e,t,n,i,s,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Up,e,Np)}lookAt(e,t,n){let i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Bi.crossVectors(n,Tn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Bi.crossVectors(n,Tn)),Bi.normalize(),Va.crossVectors(Tn,Bi),i[0]=Bi.x,i[4]=Va.x,i[8]=Tn.x,i[1]=Bi.y,i[5]=Va.y,i[9]=Tn.y,i[2]=Bi.z,i[6]=Va.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],y=n[7],_=n[11],C=n[15],I=i[0],D=i[4],N=i[8],E=i[12],M=i[1],L=i[5],V=i[9],W=i[13],K=i[2],ie=i[6],z=i[10],ee=i[14],X=i[3],Q=i[7],ve=i[11],Me=i[15];return s[0]=a*I+o*M+l*K+c*X,s[4]=a*D+o*L+l*ie+c*Q,s[8]=a*N+o*V+l*z+c*ve,s[12]=a*E+o*W+l*ee+c*Me,s[1]=h*I+u*M+f*K+d*X,s[5]=h*D+u*L+f*ie+d*Q,s[9]=h*N+u*V+f*z+d*ve,s[13]=h*E+u*W+f*ee+d*Me,s[2]=g*I+x*M+m*K+p*X,s[6]=g*D+x*L+m*ie+p*Q,s[10]=g*N+x*V+m*z+p*ve,s[14]=g*E+x*W+m*ee+p*Me,s[3]=w*I+y*M+_*K+C*X,s[7]=w*D+y*L+_*ie+C*Q,s[11]=w*N+y*V+_*z+C*ve,s[15]=w*E+y*W+_*ee+C*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+x*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,y=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,C=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,I=t*w+n*y+i*_+s*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=w*D,e[1]=(x*f*s-u*m*s-x*i*d+n*m*d+u*i*p-n*f*p)*D,e[2]=(o*m*s-x*l*s+x*i*c-n*m*c-o*i*p+n*l*p)*D,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*D,e[4]=y*D,e[5]=(h*m*s-g*f*s+g*i*d-t*m*d-h*i*p+t*f*p)*D,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*D,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*d+t*l*d)*D,e[8]=_*D,e[9]=(g*u*s-h*x*s-g*n*d+t*x*d+h*n*p-t*u*p)*D,e[10]=(a*x*s-g*o*s+g*n*c-t*x*c-a*n*p+t*o*p)*D,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*D,e[12]=C*D,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*m+t*u*m)*D,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*D,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,x=a*h,m=a*u,p=o*u,w=l*c,y=l*h,_=l*u,C=n.x,I=n.y,D=n.z;return i[0]=(1-(x+p))*C,i[1]=(d+_)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(d-_)*I,i[5]=(1-(f+p))*I,i[6]=(m+w)*I,i[7]=0,i[8]=(g+y)*D,i[9]=(m-w)*D,i[10]=(1-(f+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Br.set(i[0],i[1],i[2]).length(),a=Br.set(i[4],i[5],i[6]).length(),o=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);let c=1/s,h=1/a,u=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ti){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(o===ti)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Hs)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ti){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),f=(t+e)*c,d=(n+i)*h,g,x;if(o===ti)g=(a+s)*u,x=-2*u;else if(o===Hs)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Br=new O,Vn=new $e,Up=new O(0,0,0),Np=new O(1,1,1),Bi=new O,Va=new O,Tn=new O,Au=new $e,Ru=new Fn,Yn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fp=0,Cu=new O,kr=new Fn,pi=new $e,Wa=new O,Ps=new O,Op=new O,Bp=new Fn,Pu=new O(1,0,0),Iu=new O(0,1,0),Du=new O(0,0,1),Lu={type:"added"},kp={type:"removed"},zr={type:"childadded",child:null},pc={type:"childremoved",child:null},Nt=class r extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new O,t=new Yn,n=new Fn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new dt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ps,Wa,this.up):pi.lookAt(Wa,Ps,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),kr.setFromRotationMatrix(pi),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new O,mi=new O,mc=new O,gi=new O,Hr=new O,Gr=new O,Uu=new O,gc=new O,vc=new O,xc=new O,bc=new yt,_c=new yt,yc=new yt,Hi=class r{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wn.subVectors(i,t),mi.subVectors(n,t),mc.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(mi),l=Wn.dot(mc),c=mi.dot(mi),h=mi.dot(mc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return bc.setScalar(0),_c.setScalar(0),yc.setScalar(0),bc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,n),yc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bc,s.x),a.addScaledVector(_c,s.y),a.addScaledVector(yc,s.z),a}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),mi.subVectors(e,t),Wn.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Hr.subVectors(i,n),Gr.subVectors(s,n),gc.subVectors(e,n);let l=Hr.dot(gc),c=Gr.dot(gc);if(l<=0&&c<=0)return t.copy(n);vc.subVectors(e,i);let h=Hr.dot(vc),u=Gr.dot(vc);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Hr,a);xc.subVectors(e,s);let d=Hr.dot(xc),g=Gr.dot(xc);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Uu.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Uu,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Hr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Mc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=ch(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Mc(a,s,e+1/3),this.g=Mc(a,s,e),this.b=Mc(a,s,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return gt.fromWorkingColorSpace(on.copy(this),e),Math.round(pt(on.r*255,0,255))*65536+Math.round(pt(on.g*255,0,255))*256+Math.round(pt(on.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(on.copy(this),t);let n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Lt){gt.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,i=on.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Xa);let n=Os(ki.h,Xa.h,t),i=Os(ki.s,Xa.s,t),s=Os(ki.l,Xa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Re;Re.NAMES=Vf;var zp=0,dn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=lr,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xi=Hp();function Hp(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Gp(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=pt(r,-65504,65504),xi.floatView[0]=r;let e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function Vp(r){let e=r>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(r&1023)]+xi.exponentTable[e],xi.floatView[0]}var $r=class{static toHalfFloat(e){return Gp(e)}static fromHalfFloat(e){return Vp(e)}},Xt=new O,qa=new Te,Wp=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}};var Vs=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ws=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xp=0,Ln=new $e,Sc=new Nt,Vr=new O,An=new Cn,Is=new Cn,nn=new O,Ft=class r extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?Ws:Vs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(An.min,Is.min),An.expandByPoint(nn),nn.addVectors(An.max,Is.max),An.expandByPoint(nn)):(An.expandByPoint(Is.min),An.expandByPoint(Is.max))}An.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),nn.add(Vr)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new O,l[N]=new O;let c=new O,h=new O,u=new O,f=new Te,d=new Te,g=new Te,x=new O,m=new O;function p(N,E,M){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,N),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[N].add(x),o[E].add(x),o[M].add(x),l[N].add(m),l[E].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,E=w.length;N<E;++N){let M=w[N],L=M.start,V=M.count;for(let W=L,K=L+V;W<K;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let y=new O,_=new O,C=new O,I=new O;function D(N){C.fromBufferAttribute(i,N),I.copy(C);let E=o[N];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),_.crossVectors(I,E);let L=_.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,L)}for(let N=0,E=w.length;N<E;++N){let M=w[N],L=M.start,V=M.count;for(let W=L,K=L+V;W<K;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nu=new $e,sr=new Gi,ja=new _n,Fu=new O,Ya=new O,Za=new O,Ka=new O,Ec=new O,Ja=new O,Ou=new O,Qa=new O,Ze=class extends Nt{constructor(e=new Ft,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ec.fromBufferAttribute(u,e),a?Ja.addScaledVector(Ec,h):Ja.addScaledVector(Ec.sub(t),h))}t.add(Ja)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(ja.containsPoint(sr.origin)===!1&&(sr.intersectSphere(ja,Fu)===null||sr.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Nu.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,C=y;_<C;_+=3){let I=o.getX(_),D=o.getX(_+1),N=o.getX(_+2);i=$a(this,p,e,n,c,h,u,I,D,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=$a(this,a,e,n,c,h,u,w,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,C=y;_<C;_+=3){let I=_,D=_+1,N=_+2;i=$a(this,p,e,n,c,h,u,I,D,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let w=m,y=m+1,_=m+2;i=$a(this,a,e,n,c,h,u,w,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function qp(r,e,t,n,i,s,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===jn,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:r}}function $a(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ya),r.getVertexPosition(l,Za),r.getVertexPosition(c,Ka);let h=qp(r,e,t,n,Ya,Za,Ka,Ou);if(h){let u=new O;Hi.getBarycoord(Ou,Ya,Za,Ka,u),i&&(h.uv=Hi.getInterpolatedAttribute(i,o,l,c,u,new Te)),s&&(h.uv1=Hi.getInterpolatedAttribute(s,o,l,c,u,new Te)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};Hi.getNormal(Ya,Za,Ka,f.normal),h.face=f,h.barycoord=u}return h}var ln=class r extends Ft{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(x,m,p,w,y,_,C,I,D,N,E){let M=_/D,L=C/N,V=_/2,W=C/2,K=I/2,ie=D+1,z=N+1,ee=0,X=0,Q=new O;for(let ve=0;ve<z;ve++){let Me=ve*L-W;for(let Ne=0;Ne<ie;Ne++){let st=Ne*M-V;Q[x]=st*w,Q[m]=Me*y,Q[p]=K,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ne/D),u.push(1-ve/N),ee+=1}}for(let ve=0;ve<N;ve++)for(let Me=0;Me<D;Me++){let Ne=f+Me+ie*ve,st=f+Me+ie*(ve+1),ne=f+(Me+1)+ie*(ve+1),pe=f+(Me+1)+ie*ve;l.push(Ne,st,pe),l.push(st,ne,pe),X+=6}o.addGroup(d,X,E),d+=X,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function un(r){let e={};for(let t=0;t<r.length;t++){let n=Ar(r[t]);for(let i in n)e[i]=n[i]}return e}function jp(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var vn={clone:Ar,merge:un},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xs=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zi=new O,Bu=new Te,ku=new Te,Bt=class extends Xs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Bu,ku),t.subVectors(ku,Bu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wr=-90,Xr=1,vo=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bt(Wr,Xr,e,t);i.layers=this.layers,this.add(i);let s=new Bt(Wr,Xr,e,t);s.layers=this.layers,this.add(s);let a=new Bt(Wr,Xr,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Wr,Xr,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Wr,Xr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Wr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends Qt{constructor(e=[],t=Er,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xo=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ln(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Yt});s.uniforms.tEquirect.value=t;let a=new Ze(i,s),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Ht),new vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Qe=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var js=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fo,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new O,ns=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var zu=new O,Hu=new yt,Gu=new yt,Jp=new O,Vu=new $e,eo=new O,wc=new _n,Wu=new $e,Tc=new Gi,Ys=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wc.copy(this.boundingSphere),wc.applyMatrix4(i),e.ray.intersectsSphere(wc)!==!1&&(Wu.copy(i).invert(),Tc.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&Tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hu.fromBufferAttribute(i.attributes.skinIndex,e),Gu.fromBufferAttribute(i.attributes.skinWeight,e),zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Gu.getComponent(s);if(a!==0){let o=Hu.getComponent(s);Vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jp.copy(zu).applyMatrix4(Vu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},is=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ni=class extends Qt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=qt,h=qt,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xu=new $e,Qp=new $e,Zs=class r{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Qp;Xu.multiplyMatrices(o,t[s]),Xu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ni(t,e,e,sn,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new is),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Vi=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new $e,qu=new $e,to=[],ju=new Cn,$p=new $e,Ds=new Ze,Ls=new _n,Ks=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$p)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),ju.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Ls.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qr),qu.multiplyMatrices(n,qr),Ds.matrixWorld=qu,Ds.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=s,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(i*this.count),i,this.count,fs,hn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ac=new O,em=new O,tm=new dt,Un=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ac.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tm.getNormalMatrix(e),i=this.coplanarPoint(Ac).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new _n,no=new O,rs=class{constructor(e=new Un,t=new Un,n=new Un,i=new Un,s=new Un,a=new Un){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],w=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-s,f-c,m-d,_-p).normalize(),n[1].setComponents(l+s,f+c,m+d,_+p).normalize(),n[2].setComponents(l+a,f+h,m+g,_+w).normalize(),n[3].setComponents(l-a,f-h,m-g,_-w).normalize(),n[4].setComponents(l-o,f-u,m-x,_-y).normalize(),t===ti)n[5].setComponents(l+o,f+u,m+x,_+y).normalize();else if(t===Hs)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(no.x=i.normal.x>0?e.max.x:e.min.x,no.y=i.normal.y>0?e.max.y:e.min.y,no.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ss=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bo=new O,_o=new O,Yu=new $e,Us=new Gi,io=new _n,Rc=new O,Zu=new O,pr=class extends Nt{constructor(e=new Ft,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)bo.fromBufferAttribute(t,i-1),_o.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bo.distanceTo(_o);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Yu.copy(i).invert(),Us.copy(e.ray).applyMatrix4(Yu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),w=h.getX(x+1),y=ro(this,e,Us,l,p,w,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=ro(this,e,Us,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=ro(this,e,Us,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ro(this,e,Us,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ro(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(bo.fromBufferAttribute(o,i),_o.fromBufferAttribute(o,s),t.distanceSqToSegment(bo,_o,Rc,Zu)>n)return;Rc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Rc);if(!(c<e.near||c>e.far))return{distance:c,point:Zu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Ku=new O,Ju=new O,Js=class extends pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ku.fromBufferAttribute(t,i),Ju.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ku.distanceTo(Ju);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qs=class extends pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},as=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qu=new $e,kc=new Gi,so=new _n,ao=new O,mr=class extends Nt{constructor(e=new Ft,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Qu.copy(i).invert(),kc.copy(e.ray).applyMatrix4(Qu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);ao.fromBufferAttribute(u,m),$u(ao,m,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)ao.fromBufferAttribute(u,g),$u(ao,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $u(r,e,t,n,i,s,a){let o=kc.distanceSqToPoint(r);if(o<t){let l=new O;kc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wi=class extends Qt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gr=class extends Qt{constructor(e,t,n=qi,i,s,a,o=qt,l=qt,c,h=Zr){if(h!==Zr&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Pn=class r extends Ft{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function w(){let _=new O,C=new O,I=0,D=(t-e)/n;for(let N=0;N<=s;N++){let E=[],M=N/s,L=M*(t-e)+e;for(let V=0;V<=i;V++){let W=V/i,K=W*l+o,ie=Math.sin(K),z=Math.cos(K);C.x=L*ie,C.y=-M*n+m,C.z=L*z,u.push(C.x,C.y,C.z),_.set(ie,D,z).normalize(),f.push(_.x,_.y,_.z),d.push(W,1-M),E.push(g++)}x.push(E)}for(let N=0;N<i;N++)for(let E=0;E<s;E++){let M=x[E][N],L=x[E+1][N],V=x[E+1][N+1],W=x[E][N+1];(e>0||E!==0)&&(h.push(M,L,W),I+=3),(t>0||E!==s-1)&&(h.push(L,V,W),I+=3)}c.addGroup(p,I,0),p+=I}function y(_){let C=g,I=new Te,D=new O,N=0,E=_===!0?e:t,M=_===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let L=g;for(let V=0;V<=i;V++){let K=V/i*l+o,ie=Math.cos(K),z=Math.sin(K);D.x=E*z,D.y=m*M,D.z=E*ie,u.push(D.x,D.y,D.z),f.push(0,M,0),I.x=ie*.5+.5,I.y=z*.5*M+.5,d.push(I.x,I.y),g++}for(let V=0;V<i;V++){let W=C+V,K=L+V;_===!0?h.push(K,K+1,W):h.push(K+1,K,W),N+=3}c.addGroup(p,N,_===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Te:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,i=[],s=[],a=[],o=new O,l=new $e;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(pt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$s=class extends In{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Te){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yo=class extends $s{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var oo=new O,Cc=new dh,Pc=new dh,Ic=new dh,Mo=class extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(oo.subVectors(i[0],i[1]).add(i[0]),c=oo);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(oo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Cc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Pc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Ic.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Pc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ic.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Cc.calc(l),Pc.calc(l),Ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ef(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function nm(r,e){let t=1-r;return t*t*e}function im(r,e){return 2*(1-r)*r*e}function rm(r,e){return r*r*e}function Bs(r,e,t,n){return nm(r,e)+im(r,t)+rm(r,n)}function sm(r,e){let t=1-r;return t*t*t*e}function am(r,e){let t=1-r;return 3*t*t*r*e}function om(r,e){return 3*(1-r)*r*r*e}function lm(r,e){return r*r*r*e}function ks(r,e,t,n,i){return sm(r,e)+am(r,t)+om(r,n)+lm(r,i)}var So=class extends In{constructor(e=new Te,t=new Te,n=new Te,i=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Te){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ks(e,i.x,s.x,a.x,o.x),ks(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends In{constructor(e=new O,t=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new O){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ks(e,i.x,s.x,a.x,o.x),ks(e,i.y,s.y,a.y,o.y),ks(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wo=class extends In{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vr=class extends In{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends In{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,i.x,s.x,a.x),Bs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends In{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,i.x,s.x,a.x),Bs(e,i.y,s.y,a.y),Bs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ef(o,l.x,c.x,h.x,u.x),ef(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Te().fromArray(i))}return this}},zc=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:Mo,CubicBezierCurve:So,CubicBezierCurve3:Eo,EllipseCurve:$s,LineCurve:wo,LineCurve3:vr,QuadraticBezierCurve:To,QuadraticBezierCurve3:ea,SplineCurve:Ao}),os=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new zc[i.type]().fromJSON(i))}return this}};var yn=class r extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let w=p*f-a;for(let y=0;y<c;y++){let _=y*u-s;g.push(_,-w,0),x.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let y=w+c*p,_=w+c*(p+1),C=w+1+c*(p+1),I=w+1+c*p;d.push(y,_,I),d.push(_,C,I)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dn=class r extends Ft{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,f=new O,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],y=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let I=C/t;u.x=-e*Math.cos(i+I*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+I*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(I+_,1-y),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let y=h[p][w+1],_=h[p][w],C=h[p+1][w],I=h[p+1][w+1];(p!==0||a>0)&&d.push(y,_,I),(p!==n-1||l<Math.PI)&&d.push(_,C,I)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ls=class r extends Ft{constructor(e=new ea(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,l=new O,c=new Te,h=new O,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function x(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),w(),p()}function m(y){h=e.getPointAt(y/t,h);let _=a.normals[y],C=a.binormals[y];for(let I=0;I<=i;I++){let D=I/i*Math.PI*2,N=Math.sin(D),E=-Math.cos(D);l.x=E*_.x+N*C.x,l.y=E*_.y+N*C.y,l.z=E*_.z+N*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=i;_++){let C=(i+1)*(y-1)+(_-1),I=(i+1)*y+(_-1),D=(i+1)*y+_,N=(i+1)*(y-1)+_;g.push(C,I,N),g.push(I,D,N)}}function w(){for(let y=0;y<=t;y++)for(let _=0;_<=i;_++)c.x=y/t,c.y=_/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new zc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ta=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ae=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cn=class extends Ae{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var na=class extends dn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ro=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function hm(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Wf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Po=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fc:s=e,o=2*t-n;break;case Oc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:a=e,l=2*n-t;break;case Oc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,w=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+w*a[c+C]+y*a[l+C]+_*a[u+C];return s}},Io=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},Do=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&cm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===co,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ur;var Si=class extends Mn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=hr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}};ia.prototype.ValueTypeName="color";var ii=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}};ii.prototype.ValueTypeName="number";var Lo=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Fn.slerpFlat(s,0,a,c-o,a,c,l);return s}},ri=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends Mn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=hr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}};si.prototype.ValueTypeName="vector";var ra=class{constructor(e="",t=-1,n=[],i=Rf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fm(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=hm(l);l=tf(l,1,h),c=tf(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ii(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];Wf(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let w=0;w!==f[g].morphTargets.length;++w){let y=f[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new ii(".morphTargetInfluence["+x+"]",m,p))}l=d.length*a}else{let d=".bones["+t[u].name+"]";n(si,d+".position",f,"pos",i),n(ri,d+".quaternion",f,"rot",i),n(si,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function um(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ii;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return ia;case"quaternion":return ri;case"bool":case"boolean":return Si;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function fm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=um(r.type);if(r.times===void 0){let t=[],n=[];Wf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Uo=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Xf=new Uo,Zn=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},Hc=class extends Error{constructor(e,t){super(e),this.response=t}},xr=class extends Zn{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=vi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){w();function w(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let I=0,D=h.length;I<D;I++){let N=h[I];N.onProgress&&N.onProgress(C)}p.enqueue(_),w()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Hc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{bi.add(e,c);let h=vi[e];delete vi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var No=class extends Zn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=bi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Kr("img");function l(){h(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var sa=class extends Zn{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new ni,o=new xr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Nn,a.wrapT=c.wrapT!==void 0?c.wrapT:Nn,a.magFilter=c.magFilter!==void 0?c.magFilter:Ht,a.minFilter=c.minFilter!==void 0?c.minFilter:Ht,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=On),c.mipmapCount===1&&(a.minFilter=Ht),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},br=class extends Zn{constructor(e){super(e)}load(e,t,n,i){let s=new Qt,a=new No(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},_r=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yr=class extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dc=new $e,nf=new O,rf=new O,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gc=class extends aa{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Mr=class extends _r{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Gc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sf=new $e,Ns=new O,Lc=new O,Vc=class extends aa{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),Lc.copy(n.position),Lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lc),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf)}},pn=class extends _r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wi=class extends Xs{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wc=class extends aa{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ti=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var oa=class extends Zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=bi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(e,l),s.manager.itemStart(e)}};var Fo=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},la=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=af(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=af();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function af(){return performance.now()}var ph="\\[\\]\\.:\\/",dm=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",pm="[^"+ph.replace("\\.","")+"]",mm=/((?:WC+[\/:])*)/.source.replace("WC",mh),gm=/(WCOD+)?/.source.replace("WCOD",pm),vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),bm=new RegExp("^"+mm+gm+vm+xm+"$"),_m=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_m.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Xc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yb=new Float32Array(1);var of=new $e,Ri=class{constructor(e,t,n=0,i=1/0){this.ray=new Gi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)qc(e[i],this,n,t);return n.sort(lf),n}};function lf(r,e){return r.distance-e.distance}function qc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)qc(s[a],e,t,!0)}}function gh(r,e,t,n){let i=ym(n);switch(t){case nh:return r*e;case fs:return r*e/i.components*i.byteLength;case il:return r*e/i.components*i.byteLength;case rh:return r*e*2/i.components*i.byteLength;case rl:return r*e*2/i.components*i.byteLength;case ih:return r*e*3/i.components*i.byteLength;case sn:return r*e*4/i.components*i.byteLength;case sl:return r*e*4/i.components*i.byteLength;case fa:case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(r,16)*Math.max(e,8)/4;case al:case ll:return Math.max(r,8)*Math.max(e,8)/2;case hl:case ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ga:case Al:case Rl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sh:case Cl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Pl:case Il:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ym(r){switch(r){case gn:case $c:return{byteLength:1,components:1};case us:case eh:case kt:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case qi:case el:case hn:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");function md(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Sm(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Em,alphahash_pars_fragment:wm,alphamap_fragment:Tm,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Pm,aomap_pars_fragment:Im,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Um,beginnormal_vertex:Nm,bsdfs:Fm,iridescence_fragment:Om,bumpmap_pars_fragment:Bm,clipping_planes_fragment:km,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Gm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:jm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Km,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:$m,colorspace_fragment:e0,colorspace_pars_fragment:t0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:r0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:g0,envmap_vertex:a0,fog_vertex:o0,fog_pars_vertex:l0,fog_fragment:c0,fog_pars_fragment:h0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:f0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:v0,lights_toon_pars_fragment:x0,lights_phong_fragment:b0,lights_phong_pars_fragment:_0,lights_physical_fragment:y0,lights_physical_pars_fragment:M0,lights_fragment_begin:S0,lights_fragment_maps:E0,lights_fragment_end:w0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:C0,map_fragment:P0,map_pars_fragment:I0,map_particle_fragment:D0,map_particle_pars_fragment:L0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:N0,morphinstance_vertex:F0,morphcolor_vertex:O0,morphnormal_vertex:B0,morphtarget_pars_vertex:k0,morphtarget_vertex:z0,normal_fragment_begin:H0,normal_fragment_maps:G0,normal_pars_fragment:V0,normal_pars_vertex:W0,normal_vertex:X0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:K0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:$0,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:fg,specularmap_fragment:dg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:vg,transmission_pars_fragment:xg,uv_pars_fragment:bg,uv_pars_vertex:_g,uv_vertex:yg,worldpos_vertex:Mg,background_vert:Sg,background_frag:Eg,backgroundCube_vert:wg,backgroundCube_frag:Tg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Pg,distanceRGBA_vert:Ig,distanceRGBA_frag:Dg,equirect_vert:Lg,equirect_frag:Ug,linedashed_vert:Ng,linedashed_frag:Fg,meshbasic_vert:Og,meshbasic_frag:Bg,meshlambert_vert:kg,meshlambert_frag:zg,meshmatcap_vert:Hg,meshmatcap_frag:Gg,meshnormal_vert:Vg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:jg,meshphysical_frag:Yg,meshtoon_vert:Zg,meshtoon_frag:Kg,points_vert:Jg,points_frag:Qg,shadow_vert:$g,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},Ie={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},oi={basic:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Re(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:un([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:un([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Re(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:un([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:un([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:un([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:un([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:un([Ie.common,Ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:un([Ie.lights,Ie.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};oi.physical={uniforms:un([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Ll={r:0,b:0,g:0},Rr=new Yn,iv=new $e;function rv(r,e,t,n,i,s,a){let o=new Re(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,C=g(y);C===null?p(o,l):C&&C.isColor&&(p(C,1),_=!0);let I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,_){let C=g(_);C&&(C.isCubeTexture||C.mapping===ua)?(h===void 0&&(h=new Ze(new ln(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Ar(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rr.copy(_.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Rr)),h.material.toneMapped=gt.getTransfer(C.colorSpace)!==St,(u!==C||f!==C.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ze(new yn(2,2),new Tt({name:"BackgroundMaterial",uniforms:Ar(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=gt.getTransfer(C.colorSpace)!==St,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Ll,fh(r)),n.buffers.color.setClear(Ll.r,Ll.g,Ll.b,_,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m,dispose:w}}function sv(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(M,L,V,W,K){let ie=!1,z=u(W,V,L);s!==z&&(s=z,c(s.object)),ie=d(M,W,V,K),ie&&g(M,W,V,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,_(M,L,V,W),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,L,V){let W=V.wireframe===!0,K=n[M.id];K===void 0&&(K={},n[M.id]=K);let ie=K[L.id];ie===void 0&&(ie={},K[L.id]=ie);let z=ie[W];return z===void 0&&(z=f(l()),ie[W]=z),z}function f(M){let L=[],V=[],W=[];for(let K=0;K<t;K++)L[K]=0,V[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:W,object:M,attributes:{},index:null}}function d(M,L,V,W){let K=s.attributes,ie=L.attributes,z=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let ve=K[X],Me=ie[X];if(Me===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;z++}return s.attributesNum!==z||s.index!==W}function g(M,L,V,W){let K={},ie=L.attributes,z=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let ve=ie[X];ve===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));let Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),K[X]=Me,z++}s.attributes=K,s.attributesNum=z,s.index=W}function x(){let M=s.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let V=s.newAttributes,W=s.enabledAttributes,K=s.attributeDivisors;V[M]=1,W[M]===0&&(r.enableVertexAttribArray(M),W[M]=1),K[M]!==L&&(r.vertexAttribDivisor(M,L),K[M]=L)}function w(){let M=s.newAttributes,L=s.enabledAttributes;for(let V=0,W=L.length;V<W;V++)L[V]!==M[V]&&(r.disableVertexAttribArray(V),L[V]=0)}function y(M,L,V,W,K,ie,z){z===!0?r.vertexAttribIPointer(M,L,V,K,ie):r.vertexAttribPointer(M,L,V,W,K,ie)}function _(M,L,V,W){x();let K=W.attributes,ie=V.getAttributes(),z=L.defaultAttributeValues;for(let ee in ie){let X=ie[ee];if(X.location>=0){let Q=K[ee];if(Q===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){let ve=Q.normalized,Me=Q.itemSize,Ne=e.get(Q);if(Ne===void 0)continue;let st=Ne.buffer,ne=Ne.type,pe=Ne.bytesPerElement,xe=ne===r.INT||ne===r.UNSIGNED_INT||Q.gpuType===el;if(Q.isInterleavedBufferAttribute){let be=Q.data,Le=be.stride,qe=Q.offset;if(be.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)p(X.location+Ce,be.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)m(X.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Ce=0;Ce<X.locationSize;Ce++)y(X.location+Ce,Me/X.locationSize,ne,ve,Le*pe,(qe+Me/X.locationSize*Ce)*pe,xe)}else{if(Q.isInstancedBufferAttribute){for(let be=0;be<X.locationSize;be++)p(X.location+be,Q.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<X.locationSize;be++)m(X.location+be);r.bindBuffer(r.ARRAY_BUFFER,st);for(let be=0;be<X.locationSize;be++)y(X.location+be,Me/X.locationSize,ne,ve,Me*pe,Me/X.locationSize*be*pe,xe)}}else if(z!==void 0){let ve=z[ee];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(X.location,ve);break;case 3:r.vertexAttrib3fv(X.location,ve);break;case 4:r.vertexAttrib4fv(X.location,ve);break;default:r.vertexAttrib1fv(X.location,ve)}}}}w()}function C(){N();for(let M in n){let L=n[M];for(let V in L){let W=L[V];for(let K in W)h(W[K].object),delete W[K];delete L[V]}delete n[M]}}function I(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let V in L){let W=L[V];for(let K in W)h(W[K].object),delete W[K];delete L[V]}delete n[M.id]}function D(M){for(let L in n){let V=n[L];if(V[M.id]===void 0)continue;let W=V[M.id];for(let K in W)h(W[K].object),delete W[K];delete V[M.id]}}function N(){E(),a=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function av(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ov(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==sn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let N=D===kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==gn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==hn&&!N)}function l(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:C,maxSamples:I}}function lv(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Un,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let w=s?0:n,y=w*4,_=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let C=0;C!==y;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cv(r){let e=new WeakMap;function t(a,o){return o===Jo?a.mapping=Er:o===Qo&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Jo||o===Qo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new xo(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ms=4,qf=[.125,.215,.35,.446,.526,.582],Ir=20,vh=new wi,jf=new Re,xh=null,bh=0,_h=0,yh=!1,Pr=(1+Math.sqrt(5))/2,ps=1/Pr,Yf=[new O(-Pr,ps,0),new O(Pr,ps,0),new O(-ps,0,Pr),new O(ps,0,Pr),new O(0,Pr,-ps),new O(0,Pr,ps),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],hv=new O,Zi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=hv}=s;xh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,bh,_h),this._renderer.xr.enabled=yh,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:kt,format:sn,colorSpace:jt,depthBuffer:!1},i=Zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uv(s)),this._blurMaterial=fv(s,e,t)}return i}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,vh)}_sceneToCubeUV(e,t,n,i,s){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(jf),u.toneMapping=Pi,u.autoClear=!1;let g=new rn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new Ze(new ln,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(jf),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let _=this._cubeSize;Ul(i,y*_,w>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(x,l),u.render(e,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Er||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ul(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yf[(i-s-1)%Yf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ze(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ir-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);let p=[],w=0;for(let D=0;D<Ir;++D){let N=D/x,E=Math.exp(-N*N/2);p.push(E),D===0?w+=E:D<m&&(w+=2*E)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let _=this._sizeLods[i],C=3*_*(i>y-ms?i-y+ms:0),I=4*(this._cubeSize-_);Ul(t,C,I,3*_,2*_),l.setRenderTarget(t),l.render(u,vh)}};function uv(r){let e=[],t=[],n=[],i=r,s=r-ms+1+qf.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ms?l=qf[a-r+ms-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let I=0;I<d;I++){let D=I%3*2/3-1,N=I>2?0:-1,E=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];w.set(E,x*g*I),y.set(f,m*g*I);let M=[I,I,I,I,I,I];_.set(M,p*g*I)}let C=new Ft;C.setAttribute("position",new Ut(w,x)),C.setAttribute("uv",new Ut(y,m)),C.setAttribute("faceIndex",new Ut(_,p)),e.push(C),i>ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zf(r,e,t){let n=new Gt(r,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ul(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fv(r,e,t){let n=new Float32Array(Ir),i=new O(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Kf(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Jf(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Jo||l===Qo,h=l===Er||l===wr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zi(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Zi(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pv(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mv(r,e,t,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let w=d.array;x=d.version;for(let y=0,_=w.length;y<_;y+=3){let C=w[y+0],I=w[y+1],D=w[y+2];f.push(C,I,I,D,D,C)}}else if(g!==void 0){let w=g.array;x=g.version;for(let y=0,_=w.length/3-1;y<_;y+=3){let C=y+0,I=y+1,D=y+2;f.push(C,I,I,D,D,C)}}else return;let m=new(uh(f)?Ws:Vs)(f,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gv(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*x[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vv(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xv(r,e,t){let n=new WeakMap,i=new yt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let I=new Float32Array(_*C*4*u),D=new Gs(I,_,C,u);D.type=hn,D.needsUpdate=!0;let N=y*4;for(let M=0;M<u;M++){let L=m[M],V=p[M],W=w[M],K=_*C*4*M;for(let ie=0;ie<L.count;ie++){let z=ie*N;d===!0&&(i.fromBufferAttribute(L,ie),I[K+z+0]=i.x,I[K+z+1]=i.y,I[K+z+2]=i.z,I[K+z+3]=0),g===!0&&(i.fromBufferAttribute(V,ie),I[K+z+4]=i.x,I[K+z+5]=i.y,I[K+z+6]=i.z,I[K+z+7]=0),x===!0&&(i.fromBufferAttribute(W,ie),I[K+z+8]=i.x,I[K+z+9]=i.y,I[K+z+10]=i.z,I[K+z+11]=W.itemSize===4?i.w:1)}}f={count:u,texture:D,size:new Te(_,C)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function bv(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var gd=new Qt,Qf=new gr(1,1),vd=new Gs,xd=new go,bd=new qs,$f=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function xs(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=$f[i];if(s===void 0&&(s=new Float32Array(i),$f[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fl(r,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _v(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function Mv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function Sv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function Ev(r,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if($t(t,n))return;id.set(n),r.uniformMatrix2fv(this.addr,!1,id),en(t,n)}}function wv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if($t(t,n))return;nd.set(n),r.uniformMatrix3fv(this.addr,!1,nd),en(t,n)}}function Tv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if($t(t,n))return;td.set(n),r.uniformMatrix4fv(this.addr,!1,td),en(t,n)}}function Av(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function Cv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function Pv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function Iv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function Lv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function Uv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function Nv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qf.compareFunction=oh,s=Qf):s=gd,t.setTexture2D(e||s,i)}function Fv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xd,i)}function Ov(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bd,i)}function Bv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function kv(r){switch(r){case 5126:return _v;case 35664:return yv;case 35665:return Mv;case 35666:return Sv;case 35674:return Ev;case 35675:return wv;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Dv;case 36295:return Lv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}function zv(r,e){r.uniform1fv(this.addr,e)}function Hv(r,e){let t=xs(e,this.size,2);r.uniform2fv(this.addr,t)}function Gv(r,e){let t=xs(e,this.size,3);r.uniform3fv(this.addr,t)}function Vv(r,e){let t=xs(e,this.size,4);r.uniform4fv(this.addr,t)}function Wv(r,e){let t=xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xv(r,e){let t=xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qv(r,e){let t=xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jv(r,e){r.uniform1iv(this.addr,e)}function Yv(r,e){r.uniform2iv(this.addr,e)}function Zv(r,e){r.uniform3iv(this.addr,e)}function Kv(r,e){r.uniform4iv(this.addr,e)}function Jv(r,e){r.uniform1uiv(this.addr,e)}function Qv(r,e){r.uniform2uiv(this.addr,e)}function $v(r,e){r.uniform3uiv(this.addr,e)}function ex(r,e){r.uniform4uiv(this.addr,e)}function tx(r,e,t){let n=this.cache,i=e.length,s=Fl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gd,s[a])}function nx(r,e,t){let n=this.cache,i=e.length,s=Fl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xd,s[a])}function ix(r,e,t){let n=this.cache,i=e.length,s=Fl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bd,s[a])}function rx(r,e,t){let n=this.cache,i=e.length,s=Fl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vd,s[a])}function sx(r){switch(r){case 5126:return zv;case 35664:return Hv;case 35665:return Gv;case 35666:return Vv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return jv;case 35667:case 35671:return Yv;case 35668:case 35672:return Zv;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return Qv;case 36295:return $v;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kv(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function rd(r,e){r.seq.push(e),r.map[e.id]=e}function ax(r,e,t){let n=r.name,i=n.length;for(Mh.lastIndex=0;;){let s=Mh.exec(n),a=Mh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rd(t,c===void 0?new Sh(o,r,e):new Eh(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new wh(o),rd(t,u)),t=u}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);ax(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function sd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var ox=37297,lx=0;function cx(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ad=new dt;function hx(r){gt._getMatrix(ad,gt.workingColorSpace,r);let e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(r)){case zs:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function od(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+cx(r.getShaderSource(e),a)}else return i}function ux(r,e){let t=hx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fx(r,e){let t;switch(e){case Xo:t="Linear";break;case qo:t="Reinhard";break;case jo:t="Cineon";break;case Yo:t="ACESFilmic";break;case Xi:t="AgX";break;case Ko:t="Neutral";break;case Zo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nl=new O;function dx(){gt.getLuminanceCoefficients(Nl);let r=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function mx(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ba(r){return r!==""}function ld(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(r){return r.replace(vx,bx)}var xx=new Map;function bx(r,e){let t=mt[e];if(t===void 0){let n=xx.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(r){return r.replace(_x,yx)}function yx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ud(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===cs?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Sx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Er:case wr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ex(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===wr&&(e="ENVMAP_MODE_REFRACTION"),e}function wx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case wf:e="ENVMAP_BLENDING_MIX";break;case Tf:e="ENVMAP_BLENDING_ADD";break}return e}function Tx(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ax(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Mx(t),c=Sx(t),h=Ex(t),u=wx(t),f=Tx(t),d=px(t),g=mx(s),x=i.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ba).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,ux("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),a=Th(a),a=ld(a,t),a=cd(a,t),o=Th(o),o=ld(o,t),o=cd(o,t),a=hd(a),o=hd(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=w+m+a,_=w+p+o,C=sd(i,i.VERTEX_SHADER,y),I=sd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,C),i.attachShader(x,I),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(L){if(r.debug.checkShaderErrors){let V=i.getProgramInfoLog(x).trim(),W=i.getShaderInfoLog(C).trim(),K=i.getShaderInfoLog(I).trim(),ie=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,C,I);else{let ee=od(i,C,"vertex"),X=od(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+ee+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||K==="")&&(z=!1);z&&(L.diagnostics={runnable:ie,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:K,prefix:p}})}i.deleteShader(C),i.deleteShader(I),N=new gs(i,x),E=gx(i,x)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,ox)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=I,this}var Rx=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}};function Cx(r,e,t,n,i,s,a){let o=new Qr,l=new Ah,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,V,W){let K=V.fog,ie=W.geometry,z=E.isMeshStandardMaterial?V.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),X=ee&&ee.mapping===ua?ee.image.height:null,Q=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ve=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Me=ve!==void 0?ve.length:0,Ne=0;ie.morphAttributes.position!==void 0&&(Ne=1),ie.morphAttributes.normal!==void 0&&(Ne=2),ie.morphAttributes.color!==void 0&&(Ne=3);let st,ne,pe,xe;if(Q){let bt=oi[Q];st=bt.vertexShader,ne=bt.fragmentShader}else st=E.vertexShader,ne=E.fragmentShader,l.update(E),pe=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);let be=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),qe=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,ct=!!E.map,ht=!!E.matcap,et=!!ee,k=!!E.aoMap,At=!!E.lightMap,tt=!!E.bumpMap,oe=!!E.normalMap,le=!!E.displacementMap,Pe=!!E.emissiveMap,we=!!E.metalnessMap,P=!!E.roughnessMap,S=E.anisotropy>0,Y=E.clearcoat>0,se=E.dispersion>0,ue=E.iridescence>0,re=E.sheen>0,Be=E.transmission>0,Ee=S&&!!E.anisotropyMap,He=Y&&!!E.clearcoatMap,je=Y&&!!E.clearcoatNormalMap,me=Y&&!!E.clearcoatRoughnessMap,Fe=ue&&!!E.iridescenceMap,Oe=ue&&!!E.iridescenceThicknessMap,ze=re&&!!E.sheenColorMap,Ue=re&&!!E.sheenRoughnessMap,nt=!!E.specularMap,Ve=!!E.specularColorMap,it=!!E.specularIntensityMap,H=Be&&!!E.transmissionMap,J=Be&&!!E.thicknessMap,$=!!E.gradientMap,he=!!E.alphaMap,De=E.alphaTest>0,Se=!!E.alphaHash,rt=!!E.extensions,It=Pi;E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(It=r.toneMapping);let zt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:ne,defines:E.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:qe,instancingColor:qe&&W.instanceColor!==null,instancingMorph:qe&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:jt,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:ht,envMap:et,envMapMode:et&&ee.mapping,envMapCubeUVHeight:X,aoMap:k,lightMap:At,bumpMap:tt,normalMap:oe,displacementMap:f&&le,emissiveMap:Pe,normalMapObjectSpace:oe&&E.normalMapType===If,normalMapTangentSpace:oe&&E.normalMapType===Dl,metalnessMap:we,roughnessMap:P,anisotropy:S,anisotropyMap:Ee,clearcoat:Y,clearcoatMap:He,clearcoatNormalMap:je,clearcoatRoughnessMap:me,dispersion:se,iridescence:ue,iridescenceMap:Fe,iridescenceThicknessMap:Oe,sheen:re,sheenColorMap:ze,sheenRoughnessMap:Ue,specularMap:nt,specularColorMap:Ve,specularIntensityMap:it,transmission:Be,transmissionMap:H,thicknessMap:J,gradientMap:$,opaque:E.transparent===!1&&E.blending===lr&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:Se,combine:E.combine,mapUv:ct&&x(E.map.channel),aoMapUv:k&&x(E.aoMap.channel),lightMapUv:At&&x(E.lightMap.channel),bumpMapUv:tt&&x(E.bumpMap.channel),normalMapUv:oe&&x(E.normalMap.channel),displacementMapUv:le&&x(E.displacementMap.channel),emissiveMapUv:Pe&&x(E.emissiveMap.channel),metalnessMapUv:we&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:Ee&&x(E.anisotropyMap.channel),clearcoatMapUv:He&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:je&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:nt&&x(E.specularMap.channel),specularColorMapUv:Ve&&x(E.specularColorMap.channel),specularIntensityMapUv:it&&x(E.specularIntensityMap.channel),transmissionMapUv:H&&x(E.transmissionMap.channel),thicknessMapUv:J&&x(E.thicknessMap.channel),alphaMapUv:he&&x(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(oe||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&(ct||he),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===St,decodeVideoTextureEmissive:Pe&&E.emissiveMap.isVideoTexture===!0&&gt.getTransfer(E.emissiveMap.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sn,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:rt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&E.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(w(M,E),y(M,E),M.push(r.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let M=g[E.type],L;if(M){let V=oi[M];L=vn.clone(V.uniforms)}else L=E.uniforms;return L}function C(E,M){let L;for(let V=0,W=h.length;V<W;V++){let K=h[V];if(K.cacheKey===M){L=K,++L.usedTimes;break}}return L===void 0&&(L=new Ax(r,M,E,s),h.push(L)),L}function I(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function D(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:I,releaseShaderCache:D,programs:h,dispose:N}}function Px(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ix(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dd(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,x,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Ix),n.length>1&&n.sort(f||fd),i.length>1&&i.sort(f||fd)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Dx(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new dd,r.set(n,[a])):i>=s.length?(a=new dd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Lx(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function Ux(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Nx=0;function Fx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ox(r){let e=new Lx,t=Ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new $e,a=new $e;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,w=0,y=0,_=0,C=0,I=0,D=0;c.sort(Fx);for(let E=0,M=c.length;E<M;E++){let L=c[E],V=L.color,W=L.intensity,K=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*W,u+=V.g*W,f+=V.b*W;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],W);D++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=ie,n.directionalShadowMatrix[d]=L.shadow.matrix,w++}n.directional[d]=z,d++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(V).multiplyScalar(W),z.distance=K,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[x]=z;let ee=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,ee.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[x]=ee.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=ie,_++}x++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(V).multiplyScalar(W),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=z,g++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(W),z.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==C||N.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=C,N.numLightProbes=D,n.version=Nx++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function pd(r){let e=new Ox(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Bx(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new pd(r),e.set(i,[o])):s>=a.length?(o=new pd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hx(r,e,t){let n=new rs,i=new Te,s=new Te,a=new yt,o=new Ro({depthPacking:Pf}),l=new Co,c={},h=t.maxTextureSize,u={[jn]:mn,[mn]:jn,[Sn]:Sn},f=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:kx,fragmentShader:zx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let p=this.type;this.render=function(I,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let E=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Yt),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=p!==ai&&this.type===ai,K=p===ai&&this.type!==ai;for(let ie=0,z=I.length;ie<z;ie++){let ee=I[ie],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let Q=X.getFrameExtents();if(i.multiply(Q),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,X.mapSize.y=s.y)),X.map===null||W===!0||K===!0){let Me=this.type!==ai?{minFilter:qt,magFilter:qt}:{};X.map!==null&&X.map.dispose(),X.map=new Gt(i.x,i.y,Me),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let ve=X.getViewportCount();for(let Me=0;Me<ve;Me++){let Ne=X.getViewport(Me);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),V.viewport(a),X.updateMatrices(ee,Me),n=X.getFrustum(),_(D,N,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ai&&w(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,M,L)};function w(I,D){let N=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gt(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(D,null,N,f,x,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(D,null,N,d,x,null)}function y(I,D,N,E){let M=null,L=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?l:o,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=M.uuid,W=D.uuid,K=c[V];K===void 0&&(K={},c[V]=K);let ie=K[W];ie===void 0&&(ie=M.clone(),K[W]=ie,D.addEventListener("dispose",C)),M=ie}if(M.visible=D.visible,M.wireframe=D.wireframe,E===ai?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=r.properties.get(M);V.light=N}return M}function _(I,D,N,E,M){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===ai)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);let W=e.update(I),K=I.material;if(Array.isArray(K)){let ie=W.groups;for(let z=0,ee=ie.length;z<ee;z++){let X=ie[z],Q=K[X.materialIndex];if(Q&&Q.visible){let ve=y(I,Q,E,M);I.onBeforeShadow(r,I,D,N,W,ve,X),r.renderBufferDirect(N,null,W,ve,I,X),I.onAfterShadow(r,I,D,N,W,ve,X)}}}else if(K.visible){let ie=y(I,K,E,M);I.onBeforeShadow(r,I,D,N,W,ie,null),r.renderBufferDirect(N,null,W,ie,I,null),I.onAfterShadow(r,I,D,N,W,ie,null)}}let V=I.children;for(let W=0,K=V.length;W<K;W++)_(V[W],D,N,E,M)}function C(I){I.target.removeEventListener("dispose",C);for(let N in c){let E=c[N],M=I.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var Gx={[Bo]:ko,[zo]:Vo,[Ho]:Wo,[cr]:Go,[ko]:Bo,[Vo]:zo,[Wo]:Ho,[Go]:cr};function Vx(r,e){function t(){let H=!1,J=new yt,$=null,he=new yt(0,0,0,0);return{setMask:function(De){$!==De&&!H&&(r.colorMask(De,De,De,De),$=De)},setLocked:function(De){H=De},setClear:function(De,Se,rt,It,zt){zt===!0&&(De*=It,Se*=It,rt*=It),J.set(De,Se,rt,It),he.equals(J)===!1&&(r.clearColor(De,Se,rt,It),he.copy(J))},reset:function(){H=!1,$=null,he.set(-1,0,0,0)}}}function n(){let H=!1,J=!1,$=null,he=null,De=null;return{setReversed:function(Se){if(J!==Se){let rt=e.get("EXT_clip_control");Se?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),J=Se;let It=De;De=null,this.setClear(It)}},getReversed:function(){return J},setTest:function(Se){Se?be(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Se){$!==Se&&!H&&(r.depthMask(Se),$=Se)},setFunc:function(Se){if(J&&(Se=Gx[Se]),he!==Se){switch(Se){case Bo:r.depthFunc(r.NEVER);break;case ko:r.depthFunc(r.ALWAYS);break;case zo:r.depthFunc(r.LESS);break;case cr:r.depthFunc(r.LEQUAL);break;case Ho:r.depthFunc(r.EQUAL);break;case Go:r.depthFunc(r.GEQUAL);break;case Vo:r.depthFunc(r.GREATER);break;case Wo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Se}},setLocked:function(Se){H=Se},setClear:function(Se){De!==Se&&(J&&(Se=1-Se),r.clearDepth(Se),De=Se)},reset:function(){H=!1,$=null,he=null,De=null,J=!1}}}function i(){let H=!1,J=null,$=null,he=null,De=null,Se=null,rt=null,It=null,zt=null;return{setTest:function(bt){H||(bt?be(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(bt){J!==bt&&!H&&(r.stencilMask(bt),J=bt)},setFunc:function(bt,j,fe){($!==bt||he!==j||De!==fe)&&(r.stencilFunc(bt,j,fe),$=bt,he=j,De=fe)},setOp:function(bt,j,fe){(Se!==bt||rt!==j||It!==fe)&&(r.stencilOp(bt,j,fe),Se=bt,rt=j,It=fe)},setLocked:function(bt){H=bt},setClear:function(bt){zt!==bt&&(r.clearStencil(bt),zt=bt)},reset:function(){H=!1,J=null,$=null,he=null,De=null,Se=null,rt=null,It=null,zt=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,w=null,y=null,_=null,C=null,I=null,D=new Re(0,0,0),N=0,E=!1,M=null,L=null,V=null,W=null,K=null,ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=ee>=2);let Q=null,ve={},Me=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),st=new yt().fromArray(Me),ne=new yt().fromArray(Ne);function pe(H,J,$,he){let De=new Uint8Array(4),Se=r.createTexture();r.bindTexture(H,Se),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<$;rt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(J+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Se}let xe={};xe[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),be(r.DEPTH_TEST),a.setFunc(cr),tt(!1),oe(jc),be(r.CULL_FACE),k(Yt);function be(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function Le(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function qe(H,J){return u[H]!==J?(r.bindFramebuffer(H,J),u[H]=J,H===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=J),H===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Ce(H,J){let $=d,he=!1;if(H){$=f.get(J),$===void 0&&($=[],f.set(J,$));let De=H.textures;if($.length!==De.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,rt=De.length;Se<rt;Se++)$[Se]=r.COLOR_ATTACHMENT0+Se;$.length=De.length,he=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,he=!0);he&&r.drawBuffers($)}function ct(H){return g!==H?(r.useProgram(H),g=H,!0):!1}let ht={[Rn]:r.FUNC_ADD,[uf]:r.FUNC_SUBTRACT,[ff]:r.FUNC_REVERSE_SUBTRACT};ht[df]=r.MIN,ht[pf]=r.MAX;let et={[Sr]:r.ZERO,[mf]:r.ONE,[gf]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[_f]:r.SRC_ALPHA_SATURATE,[ha]:r.DST_COLOR,[ca]:r.DST_ALPHA,[vf]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[bf]:r.ONE_MINUS_DST_COLOR,[xf]:r.ONE_MINUS_DST_ALPHA,[yf]:r.CONSTANT_COLOR,[Mf]:r.ONE_MINUS_CONSTANT_COLOR,[Sf]:r.CONSTANT_ALPHA,[Ef]:r.ONE_MINUS_CONSTANT_ALPHA};function k(H,J,$,he,De,Se,rt,It,zt,bt){if(H===Yt){x===!0&&(Le(r.BLEND),x=!1);return}if(x===!1&&(be(r.BLEND),x=!0),H!==Oo){if(H!==m||bt!==E){if((p!==Rn||_!==Rn)&&(r.blendEquation(r.FUNC_ADD),p=Rn,_=Rn),bt)switch(H){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ci:r.blendFunc(r.ONE,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ci:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}w=null,y=null,C=null,I=null,D.set(0,0,0),N=0,m=H,E=bt}return}De=De||J,Se=Se||$,rt=rt||he,(J!==p||De!==_)&&(r.blendEquationSeparate(ht[J],ht[De]),p=J,_=De),($!==w||he!==y||Se!==C||rt!==I)&&(r.blendFuncSeparate(et[$],et[he],et[Se],et[rt]),w=$,y=he,C=Se,I=rt),(It.equals(D)===!1||zt!==N)&&(r.blendColor(It.r,It.g,It.b,zt),D.copy(It),N=zt),m=H,E=!1}function At(H,J){H.side===Sn?Le(r.CULL_FACE):be(r.CULL_FACE);let $=H.side===mn;J&&($=!$),tt($),H.blending===lr&&H.transparent===!1?k(Yt):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);let he=H.stencilWrite;o.setTest(he),he&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(H){M!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),M=H)}function oe(H){H!==cf?(be(r.CULL_FACE),H!==L&&(H===jc?r.cullFace(r.BACK):H===hf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),L=H}function le(H){H!==V&&(z&&r.lineWidth(H),V=H)}function Pe(H,J,$){H?(be(r.POLYGON_OFFSET_FILL),(W!==J||K!==$)&&(r.polygonOffset(J,$),W=J,K=$)):Le(r.POLYGON_OFFSET_FILL)}function we(H){H?be(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function P(H){H===void 0&&(H=r.TEXTURE0+ie-1),Q!==H&&(r.activeTexture(H),Q=H)}function S(H,J,$){$===void 0&&(Q===null?$=r.TEXTURE0+ie-1:$=Q);let he=ve[$];he===void 0&&(he={type:void 0,texture:void 0},ve[$]=he),(he.type!==H||he.texture!==J)&&(Q!==$&&(r.activeTexture($),Q=$),r.bindTexture(H,J||xe[H]),he.type=H,he.texture=J)}function Y(){let H=ve[Q];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function se(){try{r.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{r.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{r.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{r.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{r.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{r.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{r.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{r.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{r.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{r.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(H){st.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),st.copy(H))}function Ue(H){ne.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),ne.copy(H))}function nt(H,J){let $=c.get(J);$===void 0&&($=new WeakMap,c.set(J,$));let he=$.get(H);he===void 0&&(he=r.getUniformBlockIndex(J,H.name),$.set(H,he))}function Ve(H,J){let he=c.get(J).get(H);l.get(J)!==he&&(r.uniformBlockBinding(J,he,H.__bindingPointIndex),l.set(J,he))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,ve={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,w=null,y=null,_=null,C=null,I=null,D=new Re(0,0,0),N=0,E=!1,M=null,L=null,V=null,W=null,K=null,st.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:be,disable:Le,bindFramebuffer:qe,drawBuffers:Ce,useProgram:ct,setBlending:k,setMaterial:At,setFlipSided:tt,setCullFace:oe,setLineWidth:le,setPolygonOffset:Pe,setScissorTest:we,activeTexture:P,bindTexture:S,unbindTexture:Y,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:Fe,texImage3D:Oe,updateUBOMapping:nt,uniformBlockBinding:Ve,texStorage2D:je,texStorage3D:me,texSubImage2D:re,texSubImage3D:Be,compressedTexSubImage2D:Ee,compressedTexSubImage3D:He,scissor:ze,viewport:Ue,reset:it}}function Wx(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return d?new OffscreenCanvas(P,S):Kr("canvas")}function x(P,S,Y){let se=1,ue=we(P);if((ue.width>Y||ue.height>Y)&&(se=Y/Math.max(ue.width,ue.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let re=Math.floor(se*ue.width),Be=Math.floor(se*ue.height);u===void 0&&(u=g(re,Be));let Ee=S?g(re,Be):u;return Ee.width=re,Ee.height=Be,Ee.getContext("2d").drawImage(P,0,0,re,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+re+"x"+Be+")."),Ee}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,S,Y,se,ue=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=S;if(S===r.RED&&(Y===r.FLOAT&&(re=r.R32F),Y===r.HALF_FLOAT&&(re=r.R16F),Y===r.UNSIGNED_BYTE&&(re=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.R8UI),Y===r.UNSIGNED_SHORT&&(re=r.R16UI),Y===r.UNSIGNED_INT&&(re=r.R32UI),Y===r.BYTE&&(re=r.R8I),Y===r.SHORT&&(re=r.R16I),Y===r.INT&&(re=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(re=r.RG32F),Y===r.HALF_FLOAT&&(re=r.RG16F),Y===r.UNSIGNED_BYTE&&(re=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RG8UI),Y===r.UNSIGNED_SHORT&&(re=r.RG16UI),Y===r.UNSIGNED_INT&&(re=r.RG32UI),Y===r.BYTE&&(re=r.RG8I),Y===r.SHORT&&(re=r.RG16I),Y===r.INT&&(re=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(re=r.RGB16UI),Y===r.UNSIGNED_INT&&(re=r.RGB32UI),Y===r.BYTE&&(re=r.RGB8I),Y===r.SHORT&&(re=r.RGB16I),Y===r.INT&&(re=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),Y===r.UNSIGNED_INT&&(re=r.RGBA32UI),Y===r.BYTE&&(re=r.RGBA8I),Y===r.SHORT&&(re=r.RGBA16I),Y===r.INT&&(re=r.RGBA32I)),S===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),S===r.RGBA){let Be=ue?zs:gt.getTransfer(se);Y===r.FLOAT&&(re=r.RGBA32F),Y===r.HALF_FLOAT&&(re=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(re=Be===St?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(P,S){let Y;return P?S===null||S===qi||S===ji?Y=r.DEPTH24_STENCIL8:S===hn?Y=r.DEPTH32F_STENCIL8:S===us&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===ji?Y=r.DEPTH_COMPONENT24:S===hn?Y=r.DEPTH_COMPONENT32F:S===us&&(Y=r.DEPTH_COMPONENT16),Y}function C(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qt&&P.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function I(P){let S=P.target;S.removeEventListener("dispose",I),N(S),S.isVideoTexture&&h.delete(S)}function D(P){let S=P.target;S.removeEventListener("dispose",D),M(S)}function N(P){let S=n.get(P);if(S.__webglInit===void 0)return;let Y=P.source,se=f.get(Y);if(se){let ue=se[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(P),Object.keys(se).length===0&&f.delete(Y)}n.remove(P)}function E(P){let S=n.get(P);r.deleteTexture(S.__webglTexture);let Y=P.source,se=f.get(Y);delete se[S.__cacheKey],a.memory.textures--}function M(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let ue=0;ue<S.__webglFramebuffer[se].length;ue++)r.deleteFramebuffer(S.__webglFramebuffer[se][ue]);else r.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)r.deleteFramebuffer(S.__webglFramebuffer[se]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Y=P.textures;for(let se=0,ue=Y.length;se<ue;se++){let re=n.get(Y[se]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(Y[se])}n.remove(P)}let L=0;function V(){L=0}function W(){let P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function K(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ie(P,S){let Y=n.get(P);if(P.isVideoTexture&&le(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,P,S);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function z(P,S){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function ee(P,S){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,S);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function X(P,S){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){pe(Y,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}let Q={[Jt]:r.REPEAT,[Nn]:r.CLAMP_TO_EDGE,[Yr]:r.MIRRORED_REPEAT},ve={[qt]:r.NEAREST,[$o]:r.NEAREST_MIPMAP_NEAREST,[Tr]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[hs]:r.LINEAR_MIPMAP_NEAREST,[On]:r.LINEAR_MIPMAP_LINEAR},Me={[Df]:r.NEVER,[Bf]:r.ALWAYS,[Lf]:r.LESS,[oh]:r.LEQUAL,[Uf]:r.EQUAL,[Of]:r.GEQUAL,[Nf]:r.GREATER,[Ff]:r.NOTEQUAL};function Ne(P,S){if(S.type===hn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===hs||S.magFilter===Tr||S.magFilter===On||S.minFilter===Ht||S.minFilter===hs||S.minFilter===Tr||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Q[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ve[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==Tr&&S.minFilter!==On||S.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I));let se=S.source,ue=f.get(se);ue===void 0&&(ue={},f.set(se,ue));let re=K(S);if(re!==P.__cacheKey){ue[re]===void 0&&(ue[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ue[re].usedTimes++;let Be=ue[P.__cacheKey];Be!==void 0&&(ue[P.__cacheKey].usedTimes--,Be.usedTimes===0&&E(S)),P.__cacheKey=re,P.__webglTexture=ue[re].texture}return Y}function ne(P,S,Y){let se=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=r.TEXTURE_3D);let ue=st(P,S),re=S.source;t.bindTexture(se,P.__webglTexture,r.TEXTURE0+Y);let Be=n.get(re);if(re.version!==Be.__version||ue===!0){t.activeTexture(r.TEXTURE0+Y);let Ee=gt.getPrimaries(gt.workingColorSpace),He=S.colorSpace===Kn?null:gt.getPrimaries(S.colorSpace),je=S.colorSpace===Kn||Ee===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let me=x(S.image,!1,i.maxTextureSize);me=Pe(S,me);let Fe=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type),ze=y(S.internalFormat,Fe,Oe,S.colorSpace,S.isVideoTexture);Ne(se,S);let Ue,nt=S.mipmaps,Ve=S.isVideoTexture!==!0,it=Be.__version===void 0||ue===!0,H=re.dataReady,J=C(S,me);if(S.isDepthTexture)ze=_(S.format===Yi,S.type),it&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,ze,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,ze,me.width,me.height,0,Fe,Oe,null));else if(S.isDataTexture)if(nt.length>0){Ve&&it&&t.texStorage2D(r.TEXTURE_2D,J,ze,nt[0].width,nt[0].height);for(let $=0,he=nt.length;$<he;$++)Ue=nt[$],Ve?H&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Fe,Oe,Ue.data):t.texImage2D(r.TEXTURE_2D,$,ze,Ue.width,Ue.height,0,Fe,Oe,Ue.data);S.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(r.TEXTURE_2D,J,ze,me.width,me.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,Fe,Oe,me.data)):t.texImage2D(r.TEXTURE_2D,0,ze,me.width,me.height,0,Fe,Oe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,J,ze,nt[0].width,nt[0].height,me.depth);for(let $=0,he=nt.length;$<he;$++)if(Ue=nt[$],S.format!==sn)if(Fe!==null)if(Ve){if(H)if(S.layerUpdates.size>0){let De=gh(Ue.width,Ue.height,S.format,S.type);for(let Se of S.layerUpdates){let rt=Ue.data.subarray(Se*De/Ue.data.BYTES_PER_ELEMENT,(Se+1)*De/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Se,Ue.width,Ue.height,1,Fe,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ue.width,Ue.height,me.depth,Fe,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,ze,Ue.width,Ue.height,me.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ue.width,Ue.height,me.depth,Fe,Oe,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,ze,Ue.width,Ue.height,me.depth,0,Fe,Oe,Ue.data)}else{Ve&&it&&t.texStorage2D(r.TEXTURE_2D,J,ze,nt[0].width,nt[0].height);for(let $=0,he=nt.length;$<he;$++)Ue=nt[$],S.format!==sn?Fe!==null?Ve?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,$,ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?H&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Fe,Oe,Ue.data):t.texImage2D(r.TEXTURE_2D,$,ze,Ue.width,Ue.height,0,Fe,Oe,Ue.data)}else if(S.isDataArrayTexture)if(Ve){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,J,ze,me.width,me.height,me.depth),H)if(S.layerUpdates.size>0){let $=gh(me.width,me.height,S.format,S.type);for(let he of S.layerUpdates){let De=me.data.subarray(he*$/me.data.BYTES_PER_ELEMENT,(he+1)*$/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,Fe,Oe,De)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,Oe,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,me.width,me.height,me.depth,0,Fe,Oe,me.data);else if(S.isData3DTexture)Ve?(it&&t.texStorage3D(r.TEXTURE_3D,J,ze,me.width,me.height,me.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,Oe,me.data)):t.texImage3D(r.TEXTURE_3D,0,ze,me.width,me.height,me.depth,0,Fe,Oe,me.data);else if(S.isFramebufferTexture){if(it)if(Ve)t.texStorage2D(r.TEXTURE_2D,J,ze,me.width,me.height);else{let $=me.width,he=me.height;for(let De=0;De<J;De++)t.texImage2D(r.TEXTURE_2D,De,ze,$,he,0,Fe,Oe,null),$>>=1,he>>=1}}else if(nt.length>0){if(Ve&&it){let $=we(nt[0]);t.texStorage2D(r.TEXTURE_2D,J,ze,$.width,$.height)}for(let $=0,he=nt.length;$<he;$++)Ue=nt[$],Ve?H&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Fe,Oe,Ue):t.texImage2D(r.TEXTURE_2D,$,ze,Fe,Oe,Ue);S.generateMipmaps=!1}else if(Ve){if(it){let $=we(me);t.texStorage2D(r.TEXTURE_2D,J,ze,$.width,$.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,Oe,me)}else t.texImage2D(r.TEXTURE_2D,0,ze,Fe,Oe,me);m(S)&&p(se),Be.__version=re.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function pe(P,S,Y){if(S.image.length!==6)return;let se=st(P,S),ue=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);let re=n.get(ue);if(ue.version!==re.__version||se===!0){t.activeTexture(r.TEXTURE0+Y);let Be=gt.getPrimaries(gt.workingColorSpace),Ee=S.colorSpace===Kn?null:gt.getPrimaries(S.colorSpace),He=S.colorSpace===Kn||Be===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let je=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!je&&!me?Fe[he]=x(S.image[he],!0,i.maxCubemapSize):Fe[he]=me?S.image[he].image:S.image[he],Fe[he]=Pe(S,Fe[he]);let Oe=Fe[0],ze=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type),nt=y(S.internalFormat,ze,Ue,S.colorSpace),Ve=S.isVideoTexture!==!0,it=re.__version===void 0||se===!0,H=ue.dataReady,J=C(S,Oe);Ne(r.TEXTURE_CUBE_MAP,S);let $;if(je){Ve&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,J,nt,Oe.width,Oe.height);for(let he=0;he<6;he++){$=Fe[he].mipmaps;for(let De=0;De<$.length;De++){let Se=$[De];S.format!==sn?ze!==null?Ve?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Se.width,Se.height,ze,Se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,nt,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Se.width,Se.height,ze,Ue,Se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,nt,Se.width,Se.height,0,ze,Ue,Se.data)}}}else{if($=S.mipmaps,Ve&&it){$.length>0&&J++;let he=we(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,J,nt,he.width,he.height)}for(let he=0;he<6;he++)if(me){Ve?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,ze,Ue,Fe[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,nt,Fe[he].width,Fe[he].height,0,ze,Ue,Fe[he].data);for(let De=0;De<$.length;De++){let rt=$[De].image[he].image;Ve?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,rt.width,rt.height,ze,Ue,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,nt,rt.width,rt.height,0,ze,Ue,rt.data)}}else{Ve?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,Ue,Fe[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,nt,ze,Ue,Fe[he]);for(let De=0;De<$.length;De++){let Se=$[De];Ve?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,ze,Ue,Se.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,nt,ze,Ue,Se.image[he])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),re.__version=ue.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function xe(P,S,Y,se,ue,re){let Be=s.convert(Y.format,Y.colorSpace),Ee=s.convert(Y.type),He=y(Y.internalFormat,Be,Ee,Y.colorSpace),je=n.get(S),me=n.get(Y);if(me.__renderTarget=S,!je.__hasExternalTextures){let Fe=Math.max(1,S.width>>re),Oe=Math.max(1,S.height>>re);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,re,He,Fe,Oe,S.depth,0,Be,Ee,null):t.texImage2D(ue,re,He,Fe,Oe,0,Be,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ue,me.__webglTexture,0,tt(S)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ue,me.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(P,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){let se=S.depthTexture,ue=se&&se.isDepthTexture?se.type:null,re=_(S.stencilBuffer,ue),Be=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=tt(S);oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,re,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,re,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,re,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Be,r.RENDERBUFFER,P)}else{let se=S.textures;for(let ue=0;ue<se.length;ue++){let re=se[ue],Be=s.convert(re.format,re.colorSpace),Ee=s.convert(re.type),He=y(re.internalFormat,Be,Ee,re.colorSpace),je=tt(S);Y&&oe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,He,S.width,S.height):oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,He,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,He,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie(S.depthTexture,0);let ue=se.__webglTexture,re=tt(S);if(S.depthTexture.format===Zr)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ue,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ue,0);else if(S.depthTexture.format===Yi)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ue,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function qe(P){let S=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let se=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ue)};se.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=se}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let se=P.texture.mipmaps;se&&se.length>0?Le(S.__webglFramebuffer[0],P):Le(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=r.createRenderbuffer(),be(S.__webglDepthbuffer[se],P,!1);else{let ue=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,re)}}else{let se=P.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),be(S.__webglDepthbuffer,P,!1);else{let ue=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,re)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(P,S,Y){let se=n.get(P);S!==void 0&&xe(se.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&qe(P)}function ct(P){let S=P.texture,Y=n.get(P),se=n.get(S);P.addEventListener("dispose",D);let ue=P.textures,re=P.isWebGLCubeRenderTarget===!0,Be=ue.length>1;if(Be||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=S.version,a.memory.textures++),re){Y.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Ee]=[];for(let He=0;He<S.mipmaps.length;He++)Y.__webglFramebuffer[Ee][He]=r.createFramebuffer()}else Y.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)Y.__webglFramebuffer[Ee]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Be)for(let Ee=0,He=ue.length;Ee<He;Ee++){let je=n.get(ue[Ee]);je.__webglTexture===void 0&&(je.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&oe(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ue.length;Ee++){let He=ue[Ee];Y.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);let je=s.convert(He.format,He.colorSpace),me=s.convert(He.type),Fe=y(He.internalFormat,je,me,He.colorSpace,P.isXRRenderTarget===!0),Oe=tt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Fe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),be(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,S);for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)xe(Y.__webglFramebuffer[Ee][He],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He);else xe(Y.__webglFramebuffer[Ee],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ee=0,He=ue.length;Ee<He;Ee++){let je=ue[Ee],me=n.get(je);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),Ne(r.TEXTURE_2D,je),xe(Y.__webglFramebuffer,P,je,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),m(je)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,se.__webglTexture),Ne(Ee,S),S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)xe(Y.__webglFramebuffer[He],P,S,r.COLOR_ATTACHMENT0,Ee,He);else xe(Y.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,Ee,0);m(S)&&p(Ee),t.unbindTexture()}P.depthBuffer&&qe(P)}function ht(P){let S=P.textures;for(let Y=0,se=S.length;Y<se;Y++){let ue=S[Y];if(m(ue)){let re=w(P),Be=n.get(ue).__webglTexture;t.bindTexture(re,Be),p(re),t.unbindTexture()}}}let et=[],k=[];function At(P){if(P.samples>0){if(oe(P)===!1){let S=P.textures,Y=P.width,se=P.height,ue=r.COLOR_BUFFER_BIT,re=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=n.get(P),Ee=S.length>1;if(Ee)for(let je=0;je<S.length;je++)t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);let He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let je=0;je<S.length;je++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[je]);let me=n.get(S[je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,Y,se,0,0,Y,se,ue,r.NEAREST),l===!0&&(et.length=0,k.length=0,et.push(r.COLOR_ATTACHMENT0+je),P.depthBuffer&&P.resolveDepthBuffer===!1&&(et.push(re),k.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let je=0;je<S.length;je++){t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,Be.__webglColorRenderbuffer[je]);let me=n.get(S[je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function tt(P){return Math.min(i.maxSamples,P.samples)}function oe(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Pe(P,S){let Y=P.colorSpace,se=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==jt&&Y!==Kn&&(gt.getTransfer(Y)===St?(se!==sn||ue!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function we(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Ce,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=oe}function Xx(r,e){function t(n,i=Kn){let s,a=gt.getTransfer(i);if(n===gn)return r.UNSIGNED_BYTE;if(n===tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===th)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return r.BYTE;if(n===eh)return r.SHORT;if(n===us)return r.UNSIGNED_SHORT;if(n===el)return r.INT;if(n===qi)return r.UNSIGNED_INT;if(n===hn)return r.FLOAT;if(n===kt)return r.HALF_FLOAT;if(n===nh)return r.ALPHA;if(n===ih)return r.RGB;if(n===sn)return r.RGBA;if(n===Zr)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===fs)return r.RED;if(n===il)return r.RED_INTEGER;if(n===rh)return r.RG;if(n===rl)return r.RG_INTEGER;if(n===sl)return r.RGBA_INTEGER;if(n===fa||n===da||n===pa||n===ma)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hl||n===ul)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dl||n===pl||n===ml||n===gl||n===vl||n===xl||n===bl||n===_l||n===yl||n===Ml||n===Sl||n===El||n===wl||n===Tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===Al||n===Rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ga)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===Cl||n===Pl||n===Il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ga)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:qx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends yi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Ch,m=t.getContextAttributes(),p=null,w=null,y=[],_=[],C=new Te,I=null,D=new Bt;D.viewport=new yt;let N=new Bt;N.viewport=new yt;let E=[D,N],M=new Fo,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=y[ne];return pe===void 0&&(pe=new es,y[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=y[ne];return pe===void 0&&(pe=new es,y[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=y[ne];return pe===void 0&&(pe=new es,y[ne]=pe),pe.getHandSpace()};function W(ne){let pe=_.indexOf(ne.inputSource);if(pe===-1)return;let xe=y[pe];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||a),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<y.length;ne++){let pe=_[ne];pe!==null&&(_[ne]=null,y[ne].disconnect(pe))}L=null,V=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,w=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,be=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?Yi:Zr,be=m.stencil?ji:qi);let qe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Gt(f.textureWidth,f.textureHeight,{format:sn,type:gn,depthTexture:new gr(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Gt(d.framebufferWidth,d.framebufferHeight,{format:sn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ne){for(let pe=0;pe<ne.removed.length;pe++){let xe=ne.removed[pe],be=_.indexOf(xe);be>=0&&(_[be]=null,y[be].disconnect(xe))}for(let pe=0;pe<ne.added.length;pe++){let xe=ne.added[pe],be=_.indexOf(xe);if(be===-1){for(let qe=0;qe<y.length;qe++)if(qe>=_.length){_.push(xe),be=qe;break}else if(_[qe]===null){_[qe]=xe,be=qe;break}if(be===-1)break}let Le=y[be];Le&&Le.connect(xe)}}let z=new O,ee=new O;function X(ne,pe,xe){z.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let be=z.distanceTo(ee),Le=pe.projectionMatrix.elements,qe=xe.projectionMatrix.elements,Ce=Le[14]/(Le[10]-1),ct=Le[14]/(Le[10]+1),ht=(Le[9]+1)/Le[5],et=(Le[9]-1)/Le[5],k=(Le[8]-1)/Le[0],At=(qe[8]+1)/qe[0],tt=Ce*k,oe=Ce*At,le=be/(-k+At),Pe=le*-k;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Pe),ne.translateZ(le),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Le[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let we=Ce+le,P=ct+le,S=tt-Pe,Y=oe+(be-Pe),se=ht*ct/P*we,ue=et*ct/P*we;ne.projectionMatrix.makePerspective(S,Y,se,ue,we,P),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Q(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let pe=ne.near,xe=ne.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),M.near=N.near=D.near=pe,M.far=N.far=D.far=xe,(L!==M.near||V!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far),D.layers.mask=ne.layers.mask|2,N.layers.mask=ne.layers.mask|4,M.layers.mask=D.layers.mask|N.layers.mask;let be=ne.parent,Le=M.cameras;Q(M,be);for(let qe=0;qe<Le.length;qe++)Q(Le[qe],be);Le.length===2?X(M,D,N):M.projectionMatrix.copy(D.projectionMatrix),ve(ne,M,be)};function ve(ne,pe,xe){xe===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=fr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Me=null;function Ne(ne,pe){if(h=pe.getViewerPose(c||a),g=pe,h!==null){let xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let be=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let Ce=0;Ce<xe.length;Ce++){let ct=xe[Ce],ht=null;if(d!==null)ht=d.getViewport(ct);else{let k=u.getViewSubImage(f,ct);ht=k.viewport,Ce===0&&(e.setRenderTargetTextures(w,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(w))}let et=E[Ce];et===void 0&&(et=new Bt,et.layers.enable(Ce),et.viewport=new yt,E[Ce]=et),et.matrix.fromArray(ct.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ct.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ht.x,ht.y,ht.width,ht.height),Ce===0&&(M.matrix.copy(et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(et)}let Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let Ce=u.getDepthInformation(xe[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,i.renderState)}}for(let xe=0;xe<y.length;xe++){let be=_[xe],Le=y[xe];be!==null&&Le!==void 0&&Le.update(be,pe,c||a)}Me&&Me(ne,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let st=new md;st.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}},Cr=new Yn,Yx=new $e;function Zx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),y=w.envMap,_=w.envMapRotation;y&&(m.envMap.value=y,Cr.copy(_),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Cr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kx(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){let _=y.program;n.uniformBlockBinding(w,_)}function c(w,y){let _=i[w.id];_===void 0&&(g(w),_=h(w),i[w.id]=_,w.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(w,C);let I=e.render.frame;s[w.id]!==I&&(f(w),s[w.id]=I)}function h(w){let y=u();w.__bindingPointIndex=y;let _=r.createBuffer(),C=w.__size,I=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let y=i[w.id],_=w.uniforms,C=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let I=0,D=_.length;I<D;I++){let N=Array.isArray(_[I])?_[I]:[_[I]];for(let E=0,M=N.length;E<M;E++){let L=N[E];if(d(L,I,E,C)===!0){let V=L.__offset,W=Array.isArray(L.value)?L.value:[L.value],K=0;for(let ie=0;ie<W.length;ie++){let z=W[ie],ee=x(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,V+K,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,K),K+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(w,y,_,C){let I=w.value,D=y+"_"+_;if(C[D]===void 0)return typeof I=="number"||typeof I=="boolean"?C[D]=I:C[D]=I.clone(),!0;{let N=C[D];if(typeof I=="number"||typeof I=="boolean"){if(N!==I)return C[D]=I,!0}else if(N.equals(I)===!1)return N.copy(I),!0}return!1}function g(w){let y=w.uniforms,_=0,C=16;for(let D=0,N=y.length;D<N;D++){let E=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,L=E.length;M<L;M++){let V=E[M],W=Array.isArray(V.value)?V.value:[V.value];for(let K=0,ie=W.length;K<ie;K++){let z=W[K],ee=x(z),X=_%C,Q=X%ee.boundary,ve=X+Q;_+=Q,ve!==0&&C-ve<ee.storage&&(_+=C-ve),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=ee.storage}}}let I=_%C;return I>0&&(_+=C-I),w.__size=_,w.__cache={},this}function x(w){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){let y=w.target;y.removeEventListener("dispose",m);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var vs=class{constructor(e={}){let{canvas:t=kf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,C=!1;this._outputColorSpace=Lt;let I=0,D=0,N=null,E=-1,M=null,L=new yt,V=new yt,W=null,K=new Re(0),ie=0,z=t.width,ee=t.height,X=1,Q=null,ve=null,Me=new yt(0,0,z,ee),Ne=new yt(0,0,z,ee),st=!1,ne=new rs,pe=!1,xe=!1,be=new $e,Le=new $e,qe=new O,Ce=new yt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function et(){return N===null?X:1}let k=n;function At(b,A){return t.getContext(b,A)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"176"}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){let A="webgl2";if(k=At(A,b),k===null)throw At(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let tt,oe,le,Pe,we,P,S,Y,se,ue,re,Be,Ee,He,je,me,Fe,Oe,ze,Ue,nt,Ve,it,H;function J(){tt=new pv(k),tt.init(),Ve=new Xx(k,tt),oe=new ov(k,tt,e,Ve),le=new Vx(k,tt),oe.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),Pe=new vv(k),we=new Px,P=new Wx(k,tt,le,we,oe,Ve,Pe),S=new cv(_),Y=new dv(_),se=new Sm(k),it=new sv(k,se),ue=new mv(k,se,Pe,it),re=new bv(k,ue,se,Pe),ze=new xv(k,oe,P),me=new lv(we),Be=new Cx(_,S,Y,tt,oe,it,me),Ee=new Zx(_,we),He=new Dx,je=new Bx(tt),Oe=new rv(_,S,Y,le,re,d,l),Fe=new Hx(_,re,oe),H=new Kx(k,Pe,oe,le),Ue=new av(k,tt,Pe),nt=new gv(k,tt,Pe),Pe.programs=Be.programs,_.capabilities=oe,_.extensions=tt,_.properties=we,_.renderLists=He,_.shadowMap=Fe,_.state=le,_.info=Pe}J();let $=new Ph(_,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(z,ee,!1))},this.getSize=function(b){return b.set(z,ee)},this.setSize=function(b,A,R=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,ee=A,t.width=Math.floor(b*X),t.height=Math.floor(A*X),R===!0&&(t.style.width=b+"px",t.style.height=A+"px"),this.setViewport(0,0,b,A)},this.getDrawingBufferSize=function(b){return b.set(z*X,ee*X).floor()},this.setDrawingBufferSize=function(b,A,R){z=b,ee=A,X=R,t.width=Math.floor(b*R),t.height=Math.floor(A*R),this.setViewport(0,0,b,A)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,A,R,B){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,A,R,B),le.viewport(L.copy(Me).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,A,R,B){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,A,R,B),le.scissor(V.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){le.setScissorTest(st=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,A=!0,R=!0){let B=0;if(b){let U=!1;if(N!==null){let G=N.texture.format;U=G===sl||G===rl||G===il}if(U){let G=N.texture.type,q=G===gn||G===qi||G===us||G===ji||G===tl||G===nl,Z=Oe.getClearColor(),te=Oe.getClearAlpha(),ce=Z.r,ae=Z.g,de=Z.b;q?(g[0]=ce,g[1]=ae,g[2]=de,g[3]=te,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=ce,x[1]=ae,x[2]=de,x[3]=te,k.clearBufferiv(k.COLOR,0,x))}else B|=k.COLOR_BUFFER_BIT}A&&(B|=k.DEPTH_BUFFER_BIT),R&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Oe.dispose(),He.dispose(),je.dispose(),we.dispose(),S.dispose(),Y.dispose(),re.dispose(),it.dispose(),H.dispose(),Be.dispose(),$.dispose(),$.removeEventListener("sessionstart",ye),$.removeEventListener("sessionend",ke),Je.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=Pe.autoReset,A=Fe.enabled,R=Fe.autoUpdate,B=Fe.needsUpdate,U=Fe.type;J(),Pe.autoReset=b,Fe.enabled=A,Fe.autoUpdate=R,Fe.needsUpdate=B,Fe.type=U}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){let A=b.target;A.removeEventListener("dispose",rt),It(A)}function It(b){zt(b),we.remove(b)}function zt(b){let A=we.get(b).programs;A!==void 0&&(A.forEach(function(R){Be.releaseProgram(R)}),b.isShaderMaterial&&Be.releaseShaderCache(b))}this.renderBufferDirect=function(b,A,R,B,U,G){A===null&&(A=ct);let q=U.isMesh&&U.matrixWorld.determinant()<0,Z=rc(b,A,R,B,U);le.setMaterial(B,q);let te=R.index,ce=1;if(B.wireframe===!0){if(te=ue.getWireframeAttribute(R),te===void 0)return;ce=2}let ae=R.drawRange,de=R.attributes.position,ge=ae.start*ce,_e=(ae.start+ae.count)*ce;G!==null&&(ge=Math.max(ge,G.start*ce),_e=Math.min(_e,(G.start+G.count)*ce)),te!==null?(ge=Math.max(ge,0),_e=Math.min(_e,te.count)):de!=null&&(ge=Math.max(ge,0),_e=Math.min(_e,de.count));let We=_e-ge;if(We<0||We===1/0)return;it.setup(U,B,Z,R,te);let at,Ye=Ue;if(te!==null&&(at=se.get(te),Ye=nt,Ye.setIndex(at)),U.isMesh)B.wireframe===!0?(le.setLineWidth(B.wireframeLinewidth*et()),Ye.setMode(k.LINES)):Ye.setMode(k.TRIANGLES);else if(U.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),le.setLineWidth(Ge*et()),U.isLineSegments?Ye.setMode(k.LINES):U.isLineLoop?Ye.setMode(k.LINE_LOOP):Ye.setMode(k.LINE_STRIP)}else U.isPoints?Ye.setMode(k.POINTS):U.isSprite&&Ye.setMode(k.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)xa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ge=U._multiDrawStarts,ut=U._multiDrawCounts,Xe=U._multiDrawCount,Mt=te?se.get(te).bytesPerElement:1,Zt=we.get(B).currentProgram.getUniforms();for(let _t=0;_t<Xe;_t++)Zt.setValue(k,"_gl_DrawID",_t),Ye.render(Ge[_t]/Mt,ut[_t])}else if(U.isInstancedMesh)Ye.renderInstances(ge,We,U.count);else if(R.isInstancedBufferGeometry){let Ge=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,ut=Math.min(R.instanceCount,Ge);Ye.renderInstances(ge,We,ut)}else Ye.render(ge,We)};function bt(b,A,R){b.transparent===!0&&b.side===Sn&&b.forceSinglePass===!1?(b.side=mn,b.needsUpdate=!0,ei(b,A,R),b.side=jn,b.needsUpdate=!0,ei(b,A,R),b.side=Sn):ei(b,A,R)}this.compile=function(b,A,R=null){R===null&&(R=b),p=je.get(R),p.init(A),y.push(p),R.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==R&&b.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let B=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let G=U.material;if(G)if(Array.isArray(G))for(let q=0;q<G.length;q++){let Z=G[q];bt(Z,R,U),B.add(Z)}else bt(G,R,U),B.add(G)}),p=y.pop(),B},this.compileAsync=function(b,A,R=null){let B=this.compile(b,A,R);return new Promise(U=>{function G(){if(B.forEach(function(q){we.get(q).currentProgram.isReady()&&B.delete(q)}),B.size===0){U(b);return}setTimeout(G,10)}tt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let j=null;function fe(b){j&&j(b)}function ye(){Je.stop()}function ke(){Je.start()}let Je=new md;Je.setAnimationLoop(fe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(b){j=b,$.setAnimationLoop(b),b===null?Je.stop():Je.start()},$.addEventListener("sessionstart",ye),$.addEventListener("sessionend",ke),this.render=function(b,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(A),A=$.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,A,N),p=je.get(b,y.length),p.init(A),y.push(p),Le.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),ne.setFromProjectionMatrix(Le),xe=this.localClippingEnabled,pe=me.init(this.clippingPlanes,xe),m=He.get(b,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){let G=_.xr.getDepthSensingMesh();G!==null&&ft(G,A,-1/0,_.sortObjects)}ft(b,A,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,ve),ht=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ht&&Oe.addToRenderList(m,b),this.info.render.frame++,pe===!0&&me.beginShadows();let R=p.state.shadowsArray;Fe.render(R,b,A),pe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,U=m.transmissive;if(p.setupLights(),A.isArrayCamera){let G=A.cameras;if(U.length>0)for(let q=0,Z=G.length;q<Z;q++){let te=G[q];$n(B,U,b,te)}ht&&Oe.render(b);for(let q=0,Z=G.length;q<Z;q++){let te=G[q];wt(m,b,te,te.viewport)}}else U.length>0&&$n(B,U,b,A),ht&&Oe.render(b),wt(m,b,A);N!==null&&D===0&&(P.updateMultisampleRenderTarget(N),P.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(_,b,A),it.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],pe===!0&&me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ft(b,A,R,B){if(b.visible===!1)return;if(b.layers.test(A.layers)){if(b.isGroup)R=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(A);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){B&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);let q=re.update(b),Z=b.material;Z.visible&&m.push(b,q,Z,R,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){let q=re.update(b),Z=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Ce.copy(q.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(Z)){let te=q.groups;for(let ce=0,ae=te.length;ce<ae;ce++){let de=te[ce],ge=Z[de.materialIndex];ge&&ge.visible&&m.push(b,q,ge,R,Ce.z,de)}}else Z.visible&&m.push(b,q,Z,R,Ce.z,null)}}let G=b.children;for(let q=0,Z=G.length;q<Z;q++)ft(G[q],A,R,B)}function wt(b,A,R,B){let U=b.opaque,G=b.transmissive,q=b.transparent;p.setupLightsView(R),pe===!0&&me.setGlobalState(_.clippingPlanes,R),B&&le.viewport(L.copy(B)),U.length>0&&wn(U,A,R),G.length>0&&wn(G,A,R),q.length>0&&wn(q,A,R),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function $n(b,A,R,B){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Gt(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?kt:gn,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let G=p.state.transmissionRenderTarget[B.id],q=B.viewport||L;G.setSize(q.z*_.transmissionResolutionScale,q.w*_.transmissionResolutionScale);let Z=_.getRenderTarget();_.setRenderTarget(G),_.getClearColor(K),ie=_.getClearAlpha(),ie<1&&_.setClearColor(16777215,.5),_.clear(),ht&&Oe.render(R);let te=_.toneMapping;_.toneMapping=Pi;let ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),pe===!0&&me.setGlobalState(_.clippingPlanes,B),wn(b,R,B),P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let de=0,ge=A.length;de<ge;de++){let _e=A[de],We=_e.object,at=_e.geometry,Ye=_e.material,Ge=_e.group;if(Ye.side===Sn&&We.layers.test(B.layers)){let ut=Ye.side;Ye.side=mn,Ye.needsUpdate=!0,er(We,R,B,at,Ye,Ge),Ye.side=ut,Ye.needsUpdate=!0,ae=!0}}ae===!0&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G))}_.setRenderTarget(Z),_.setClearColor(K,ie),ce!==void 0&&(B.viewport=ce),_.toneMapping=te}function wn(b,A,R){let B=A.isScene===!0?A.overrideMaterial:null;for(let U=0,G=b.length;U<G;U++){let q=b[U],Z=q.object,te=q.geometry,ce=q.group,ae=q.material;ae.allowOverride===!0&&B!==null&&(ae=B),Z.layers.test(R.layers)&&er(Z,A,R,te,ae,ce)}}function er(b,A,R,B,U,G){b.onBeforeRender(_,A,R,B,U,G),b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,A,R,B,b,G),U.transparent===!0&&U.side===Sn&&U.forceSinglePass===!1?(U.side=mn,U.needsUpdate=!0,_.renderBufferDirect(R,A,B,U,b,G),U.side=jn,U.needsUpdate=!0,_.renderBufferDirect(R,A,B,U,b,G),U.side=Sn):_.renderBufferDirect(R,A,B,U,b,G),b.onAfterRender(_,A,R,B,U,G)}function ei(b,A,R){A.isScene!==!0&&(A=ct);let B=we.get(b),U=p.state.lights,G=p.state.shadowsArray,q=U.state.version,Z=Be.getParameters(b,U.state,G,A,R),te=Be.getProgramCacheKey(Z),ce=B.programs;B.environment=b.isMeshStandardMaterial?A.environment:null,B.fog=A.fog,B.envMap=(b.isMeshStandardMaterial?Y:S).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?A.environmentRotation:b.envMapRotation,ce===void 0&&(b.addEventListener("dispose",rt),ce=new Map,B.programs=ce);let ae=ce.get(te);if(ae!==void 0){if(B.currentProgram===ae&&B.lightsStateVersion===q)return As(b,Z),ae}else Z.uniforms=Be.getUniforms(b),b.onBeforeCompile(Z,_),ae=Be.acquireProgram(Z,te),ce.set(te,ae),B.uniforms=Z.uniforms;let de=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(de.clippingPlanes=me.uniform),As(b,Z),B.needsLights=Ui(b),B.lightsStateVersion=q,B.needsLights&&(de.ambientLightColor.value=U.state.ambient,de.lightProbe.value=U.state.probe,de.directionalLights.value=U.state.directional,de.directionalLightShadows.value=U.state.directionalShadow,de.spotLights.value=U.state.spot,de.spotLightShadows.value=U.state.spotShadow,de.rectAreaLights.value=U.state.rectArea,de.ltc_1.value=U.state.rectAreaLTC1,de.ltc_2.value=U.state.rectAreaLTC2,de.pointLights.value=U.state.point,de.pointLightShadows.value=U.state.pointShadow,de.hemisphereLights.value=U.state.hemi,de.directionalShadowMap.value=U.state.directionalShadowMap,de.directionalShadowMatrix.value=U.state.directionalShadowMatrix,de.spotShadowMap.value=U.state.spotShadowMap,de.spotLightMatrix.value=U.state.spotLightMatrix,de.spotLightMap.value=U.state.spotLightMap,de.pointShadowMap.value=U.state.pointShadowMap,de.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=ae,B.uniformsList=null,ae}function tr(b){if(b.uniformsList===null){let A=b.currentProgram.getUniforms();b.uniformsList=gs.seqWithValue(A.seq,b.uniforms)}return b.uniformsList}function As(b,A){let R=we.get(b);R.outputColorSpace=A.outputColorSpace,R.batching=A.batching,R.batchingColor=A.batchingColor,R.instancing=A.instancing,R.instancingColor=A.instancingColor,R.instancingMorph=A.instancingMorph,R.skinning=A.skinning,R.morphTargets=A.morphTargets,R.morphNormals=A.morphNormals,R.morphColors=A.morphColors,R.morphTargetsCount=A.morphTargetsCount,R.numClippingPlanes=A.numClippingPlanes,R.numIntersection=A.numClipIntersection,R.vertexAlphas=A.vertexAlphas,R.vertexTangents=A.vertexTangents,R.toneMapping=A.toneMapping}function rc(b,A,R,B,U){A.isScene!==!0&&(A=ct),P.resetTextureUnits();let G=A.fog,q=B.isMeshStandardMaterial?A.environment:null,Z=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:jt,te=(B.isMeshStandardMaterial?Y:S).get(B.envMap||q),ce=B.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ae=!!R.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),de=!!R.morphAttributes.position,ge=!!R.morphAttributes.normal,_e=!!R.morphAttributes.color,We=Pi;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(We=_.toneMapping);let at=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Ye=at!==void 0?at.length:0,Ge=we.get(B),ut=p.state.lights;if(pe===!0&&(xe===!0||b!==M)){let Dt=b===M&&B.id===E;me.setState(B,b,Dt)}let Xe=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ut.state.version||Ge.outputColorSpace!==Z||U.isBatchedMesh&&Ge.batching===!1||!U.isBatchedMesh&&Ge.batching===!0||U.isBatchedMesh&&Ge.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ge.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ge.instancing===!1||!U.isInstancedMesh&&Ge.instancing===!0||U.isSkinnedMesh&&Ge.skinning===!1||!U.isSkinnedMesh&&Ge.skinning===!0||U.isInstancedMesh&&Ge.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ge.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ge.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ge.instancingMorph===!1&&U.morphTexture!==null||Ge.envMap!==te||B.fog===!0&&Ge.fog!==G||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==me.numPlanes||Ge.numIntersection!==me.numIntersection)||Ge.vertexAlphas!==ce||Ge.vertexTangents!==ae||Ge.morphTargets!==de||Ge.morphNormals!==ge||Ge.morphColors!==_e||Ge.toneMapping!==We||Ge.morphTargetsCount!==Ye)&&(Xe=!0):(Xe=!0,Ge.__version=B.version);let Mt=Ge.currentProgram;Xe===!0&&(Mt=ei(B,A,U));let Zt=!1,_t=!1,xt=!1,ot=Mt.getUniforms(),Ot=Ge.uniforms;if(le.useProgram(Mt.program)&&(Zt=!0,_t=!0,xt=!0),B.id!==E&&(E=B.id,_t=!0),Zt||M!==b){le.buffers.depth.getReversed()?(be.copy(b.projectionMatrix),Hf(be),Gf(be),ot.setValue(k,"projectionMatrix",be)):ot.setValue(k,"projectionMatrix",b.projectionMatrix),ot.setValue(k,"viewMatrix",b.matrixWorldInverse);let Kt=ot.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,qe.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&ot.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ot.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,_t=!0,xt=!0)}if(U.isSkinnedMesh){ot.setOptional(k,U,"bindMatrix"),ot.setOptional(k,U,"bindMatrixInverse");let Dt=U.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ot.setValue(k,"boneTexture",Dt.boneTexture,P))}U.isBatchedMesh&&(ot.setOptional(k,U,"batchingTexture"),ot.setValue(k,"batchingTexture",U._matricesTexture,P),ot.setOptional(k,U,"batchingIdTexture"),ot.setValue(k,"batchingIdTexture",U._indirectTexture,P),ot.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(k,"batchingColorTexture",U._colorsTexture,P));let tn=R.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ze.update(U,R,Mt),(_t||Ge.receiveShadow!==U.receiveShadow)&&(Ge.receiveShadow=U.receiveShadow,ot.setValue(k,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ot.envMap.value=te,Ot.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&A.environment!==null&&(Ot.envMapIntensity.value=A.environmentIntensity),_t&&(ot.setValue(k,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&ui(Ot,xt),G&&B.fog===!0&&Ee.refreshFogUniforms(Ot,G),Ee.refreshMaterialUniforms(Ot,B,X,ee,p.state.transmissionRenderTarget[b.id]),gs.upload(k,tr(Ge),Ot,P)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gs.upload(k,tr(Ge),Ot,P),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ot.setValue(k,"center",U.center),ot.setValue(k,"modelViewMatrix",U.modelViewMatrix),ot.setValue(k,"normalMatrix",U.normalMatrix),ot.setValue(k,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Dt=B.uniformsGroups;for(let Kt=0,sc=Dt.length;Kt<sc;Kt++){let nr=Dt[Kt];H.update(nr,Mt),H.bind(nr,Mt)}}return Mt}function ui(b,A){b.ambientLightColor.needsUpdate=A,b.lightProbe.needsUpdate=A,b.directionalLights.needsUpdate=A,b.directionalLightShadows.needsUpdate=A,b.pointLights.needsUpdate=A,b.pointLightShadows.needsUpdate=A,b.spotLights.needsUpdate=A,b.spotLightShadows.needsUpdate=A,b.rectAreaLights.needsUpdate=A,b.hemisphereLights.needsUpdate=A}function Ui(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,A,R){let B=we.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),we.get(b.texture).__webglTexture=A,we.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:R,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,A){let R=we.get(b);R.__webglFramebuffer=A,R.__useDefaultFramebuffer=A===void 0};let v=k.createFramebuffer();this.setRenderTarget=function(b,A=0,R=0){N=b,I=A,D=R;let B=!0,U=null,G=!1,q=!1;if(b){let te=we.get(b);if(te.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(k.FRAMEBUFFER,null),B=!1;else if(te.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(te.__hasExternalTextures)P.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let de=b.depthTexture;if(te.__boundDepthTexture!==de){if(de!==null&&we.has(de)&&(b.width!==de.image.width||b.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}let ce=b.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(q=!0);let ae=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ae[A])?U=ae[A][R]:U=ae[A],G=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?U=we.get(b).__webglMultisampledFramebuffer:Array.isArray(ae)?U=ae[R]:U=ae,L.copy(b.viewport),V.copy(b.scissor),W=b.scissorTest}else L.copy(Me).multiplyScalar(X).floor(),V.copy(Ne).multiplyScalar(X).floor(),W=st;if(R!==0&&(U=v),le.bindFramebuffer(k.FRAMEBUFFER,U)&&B&&le.drawBuffers(b,U),le.viewport(L),le.scissor(V),le.setScissorTest(W),G){let te=we.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+A,te.__webglTexture,R)}else if(q){let te=we.get(b.texture),ce=A;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.__webglTexture,R,ce)}else if(b!==null&&R!==0){let te=we.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,te.__webglTexture,R)}E=-1},this.readRenderTargetPixels=function(b,A,R,B,U,G,q){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&q!==void 0&&(Z=Z[q]),Z){le.bindFramebuffer(k.FRAMEBUFFER,Z);try{let te=b.texture,ce=te.format,ae=te.type;if(!oe.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=b.width-B&&R>=0&&R<=b.height-U&&k.readPixels(A,R,B,U,Ve.convert(ce),Ve.convert(ae),G)}finally{let te=N!==null?we.get(N).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(b,A,R,B,U,G,q){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Z=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&q!==void 0&&(Z=Z[q]),Z)if(A>=0&&A<=b.width-B&&R>=0&&R<=b.height-U){le.bindFramebuffer(k.FRAMEBUFFER,Z);let te=b.texture,ce=te.format,ae=te.type;if(!oe.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,de),k.bufferData(k.PIXEL_PACK_BUFFER,G.byteLength,k.STREAM_READ),k.readPixels(A,R,B,U,Ve.convert(ce),Ve.convert(ae),0);let ge=N!==null?we.get(N).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,ge);let _e=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zf(k,_e,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,de),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,G),k.deleteBuffer(de),k.deleteSync(_e),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,A=null,R=0){let B=Math.pow(2,-R),U=Math.floor(b.image.width*B),G=Math.floor(b.image.height*B),q=A!==null?A.x:0,Z=A!==null?A.y:0;P.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,R,0,0,q,Z,U,G),le.unbindTexture()};let T=k.createFramebuffer(),F=k.createFramebuffer();this.copyTextureToTexture=function(b,A,R=null,B=null,U=0,G=null){G===null&&(U!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=U,U=0):G=0);let q,Z,te,ce,ae,de,ge,_e,We,at=b.isCompressedTexture?b.mipmaps[G]:b.image;if(R!==null)q=R.max.x-R.min.x,Z=R.max.y-R.min.y,te=R.isBox3?R.max.z-R.min.z:1,ce=R.min.x,ae=R.min.y,de=R.isBox3?R.min.z:0;else{let tn=Math.pow(2,-U);q=Math.floor(at.width*tn),Z=Math.floor(at.height*tn),b.isDataArrayTexture?te=at.depth:b.isData3DTexture?te=Math.floor(at.depth*tn):te=1,ce=0,ae=0,de=0}B!==null?(ge=B.x,_e=B.y,We=B.z):(ge=0,_e=0,We=0);let Ye=Ve.convert(A.format),Ge=Ve.convert(A.type),ut;A.isData3DTexture?(P.setTexture3D(A,0),ut=k.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(P.setTexture2DArray(A,0),ut=k.TEXTURE_2D_ARRAY):(P.setTexture2D(A,0),ut=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,A.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,A.unpackAlignment);let Xe=k.getParameter(k.UNPACK_ROW_LENGTH),Mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Zt=k.getParameter(k.UNPACK_SKIP_PIXELS),_t=k.getParameter(k.UNPACK_SKIP_ROWS),xt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,at.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ce),k.pixelStorei(k.UNPACK_SKIP_ROWS,ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,de);let ot=b.isDataArrayTexture||b.isData3DTexture,Ot=A.isDataArrayTexture||A.isData3DTexture;if(b.isDepthTexture){let tn=we.get(b),Dt=we.get(A),Kt=we.get(tn.__renderTarget),sc=we.get(Dt.__renderTarget);le.bindFramebuffer(k.READ_FRAMEBUFFER,Kt.__webglFramebuffer),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,sc.__webglFramebuffer);for(let nr=0;nr<te;nr++)ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.get(b).__webglTexture,U,de+nr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.get(A).__webglTexture,G,We+nr)),k.blitFramebuffer(ce,ae,q,Z,ge,_e,q,Z,k.DEPTH_BUFFER_BIT,k.NEAREST);le.bindFramebuffer(k.READ_FRAMEBUFFER,null),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||we.has(b)){let tn=we.get(b),Dt=we.get(A);le.bindFramebuffer(k.READ_FRAMEBUFFER,T),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let Kt=0;Kt<te;Kt++)ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,U,de+Kt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,U),Ot?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,G,We+Kt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,G),U!==0?k.blitFramebuffer(ce,ae,q,Z,ge,_e,q,Z,k.COLOR_BUFFER_BIT,k.NEAREST):Ot?k.copyTexSubImage3D(ut,G,ge,_e,We+Kt,ce,ae,q,Z):k.copyTexSubImage2D(ut,G,ge,_e,ce,ae,q,Z);le.bindFramebuffer(k.READ_FRAMEBUFFER,null),le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ot?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(ut,G,ge,_e,We,q,Z,te,Ye,Ge,at.data):A.isCompressedArrayTexture?k.compressedTexSubImage3D(ut,G,ge,_e,We,q,Z,te,Ye,at.data):k.texSubImage3D(ut,G,ge,_e,We,q,Z,te,Ye,Ge,at):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,ge,_e,q,Z,Ye,Ge,at.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,ge,_e,at.width,at.height,Ye,at.data):k.texSubImage2D(k.TEXTURE_2D,G,ge,_e,q,Z,Ye,Ge,at);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,_t),k.pixelStorei(k.UNPACK_SKIP_IMAGES,xt),G===0&&A.generateMipmaps&&k.generateMipmap(ut),le.unbindTexture()},this.copyTextureToTexture3D=function(b,A,R=null,B=null,U=0){return xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,A,R,B,U)},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){I=0,D=0,N=null,le.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};function yd(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Ft,c=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=_d(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let g=_d(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function _d(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Ut(a,t,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Dh(r,e){if(e===ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ds||e===va){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===ds)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Ol=class extends Zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new $h(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ai.extractUrlBase(e);a=Ai.resolveURL(c,this.path)}else a=Ai.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new xr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Td){try{a[vt.KHR_BINARY_GLTF]=new eu(e)}catch(u){i&&i(u);return}s=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ou(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case vt.KHR_MATERIALS_UNLIT:a[u]=new Oh;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new tu(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[u]=new nu;break;case vt.KHR_MESH_QUANTIZATION:a[u]=new iu;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Jx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fh=class{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ti(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pn(h),c.distance=u;break;case"spot":c=new Mr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Oh=class{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){let i=[];e.color=new Re(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],jt),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],jt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Yh=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Kh=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Jh=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Qh=class{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},$h=class{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new $e,m=new O,p=new Fn,w=new O(1,1,1),y=new Ks(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&w.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,w));for(let _ in l)if(_==="_COLOR_0"){let C=l[_];y.instanceColor=new Vi(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Nt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Td="glTF",_a=12,Md={JSON:1313821514,BIN:5130562},eu=class{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,_a),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-_a,s=new DataView(e,_a),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Md.JSON){let c=new Uint8Array(e,_a+a,o);this.content=n.decode(c)}else if(l===Md.BIN){let c=_a+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=su[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=su[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=bs[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(d)},o,c,jt,f)})})}},nu=class{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},iu=class{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}},Bl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,w=1-m,y=p-f+u;for(let _=0;_!==o;_++){let C=a[x+_+o],I=a[x+_+l]*h,D=a[g+_+o],N=a[g+_]*h;s[_]=w*C+y*I+m*D+p*N}return s}},Qx=new Fn,ru=class extends Bl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Qx.fromArray(s).normalize().toArray(s),s}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sd={9728:qt,9729:Ht,9984:$o,9985:hs,9986:Tr,9987:On},Ed={33071:Nn,33648:Yr,10497:Jt},Lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$x={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},Uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ae({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),r.DefaultMaterial}function Dr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ii(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tb(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function nb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ib(r){let e,t=r.extensions&&r.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nh(t.attributes):e=r.indices+":"+Nh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Nh(r.targets[n]);return e}function Nh(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function au(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var sb=new $e,ou=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new br(this.options.manager):this.textureLoader=new oa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Dr(s,o,i),Ii(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ai.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Lh[i.type],o=bs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ut(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Lh[i.type],c=bs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(w);y||(x=new c(o,p*d,i.count*d/h),y=new ts(x,d/h),t.cache.add(w,y)),m=new ns(y,l,f%d/h,g)}else o===null?x=new c(i.count*l):x=new c(o,f,i.count*l),m=new Ut(x,l,g);if(i.sparse!==void 0){let p=Lh.SCALAR,w=bs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new w(a[1],y,i.sparse.count*p),I=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,N=C.length;D<N;D++){let E=C[D];if(m.setX(E,I[D*l]),l>=2&&m.setY(E,I[D*l+1]),l>=3&&m.setZ(E,I[D*l+2]),l>=4&&m.setW(E,I[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return h.magFilter=Sd[f.magFilter]||Ht,h.minFilter=Sd[f.minFilter]||On,h.wrapS=Ed[f.wrapS]||Jt,h.wrapT=Ed[f.wrapT]||Jt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Qt(x);m.needsUpdate=!0,f(m)}),t.load(Ai.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ii(u,a),u.userData.mimeType=a.mimeType||rb(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new as,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ss,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ae}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){let u=i[vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],jt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Sn);let h=s.alphaMode||Uh.OPAQUE;if(h===Uh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Uh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==rn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==rn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==rn){let u=s.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],jt)}return s.emissiveTexture!==void 0&&a!==rn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Ii(u,s),t.associations.set(u,{materials:e}),s.extensions&&Dr(i,u,s),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return wd(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=ib(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=wd(new Ft,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?eb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=a[d],p,w=c[d];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Ys(x,w):new Ze(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?p.geometry=Dh(p.geometry,va):m.mode===Bn.TRIANGLE_FAN&&(p.geometry=Dh(p.geometry,ds));else if(m.mode===Bn.LINES)p=new Js(x,w);else if(m.mode===Bn.LINE_STRIP)p=new pr(x,w);else if(m.mode===Bn.LINE_LOOP)p=new Qs(x,w);else if(m.mode===Bn.POINTS)p=new mr(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ii(p,s),m.extensions&&Dr(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Dr(i,u[0],s),u[0];let f=new Qe;s.extensions&&Dr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(hh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ii(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new $e;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zs(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let w=0,y=f.length;w<y;w++){let _=f[w],C=d[w],I=g[w],D=x[w],N=m[w];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,C,I,D,N);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new ra(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,sb)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new is:c.length>1?h=new Qe:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Ii(h,s),s.extensions&&Dr(n,h,s),s.matrix!==void 0){let u=new $e;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Qe;n.name&&(s.name=i.createUniqueName(n.name)),Ii(s,n),n.extensions&&Dr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof dn||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];Ji[s.path]===Ji.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ji[s.path]){case Ji.weights:c=ii;break;case Ji.rotation:c=ri;break;case Ji.translation:case Ji.scale:c=si;break;default:n.itemSize===1?c=ii:c=si;break}let h=i.interpolation!==void 0?$x[i.interpolation]:ur,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Ji[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=au(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ri?ru:Bl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ab(r,e,t){let n=e.attributes,i=new Cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){let h=au(bs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new O,l=new O;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=au(bs[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new _n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function wd(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=su[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return gt.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Ii(r,e),ab(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tb(r,e.targets,t):r})}var kn=Uint8Array,_s=Uint16Array,ob=Int32Array,Ad=new kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rd=new kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),lb=new kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cd=function(r,e){for(var t=new _s(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new ob(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Pd=Cd(Ad,2),Id=Pd.b,cb=Pd.r;Id[28]=258,cb[258]=28;var Dd=Cd(Rd,0),hb=Dd.b,DM=Dd.r,hu=new _s(32768);for(Et=0;Et<32768;++Et)Di=(Et&43690)>>1|(Et&21845)<<1,Di=(Di&52428)>>2|(Di&13107)<<2,Di=(Di&61680)>>4|(Di&3855)<<4,hu[Et]=((Di&65280)>>8|(Di&255)<<8)>>1;var Di,Et,ya=(function(r,e,t){for(var n=r.length,i=0,s=new _s(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new _s(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new _s(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=a[r[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[hu[u]>>l]=c}else for(o=new _s(n),i=0;i<n;++i)r[i]&&(o[i]=hu[a[r[i]-1]++]>>15-r[i]);return o}),Ma=new kn(288);for(Et=0;Et<144;++Et)Ma[Et]=8;var Et;for(Et=144;Et<256;++Et)Ma[Et]=9;var Et;for(Et=256;Et<280;++Et)Ma[Et]=7;var Et;for(Et=280;Et<288;++Et)Ma[Et]=8;var Et,Ld=new kn(32);for(Et=0;Et<32;++Et)Ld[Et]=5;var Et;var ub=ya(Ma,9,1);var fb=ya(Ld,5,1),lu=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Jn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},cu=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},db=function(r){return(r+7)/8|0},pb=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new kn(r.subarray(e,t))};var mb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Qn=function(r,e,t){var n=new Error(e||mb[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Qn),!t)throw n;return n},gb=function(r,e,t,n){var i=r.length,s=n?n.length:0;if(!i||e.f&&!e.l)return t||new kn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new kn(i*3));var c=function(ct){var ht=t.length;if(ct>ht){var et=new kn(Math.max(ht*2,ct));et.set(t),t=et}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,g=e.d,x=e.m,m=e.n,p=i*8;do{if(!d){h=Jn(r,u,1);var w=Jn(r,u+1,3);if(u+=3,w)if(w==1)d=ub,g=fb,x=9,m=5;else if(w==2){var I=Jn(r,u,31)+257,D=Jn(r,u+10,15)+4,N=I+Jn(r,u+5,31)+1;u+=14;for(var E=new kn(N),M=new kn(19),L=0;L<D;++L)M[lb[L]]=Jn(r,u+L*3,7);u+=D*3;for(var V=lu(M),W=(1<<V)-1,K=ya(M,V,1),L=0;L<N;){var ie=K[Jn(r,u,W)];u+=ie&15;var y=ie>>4;if(y<16)E[L++]=y;else{var z=0,ee=0;for(y==16?(ee=3+Jn(r,u,3),u+=2,z=E[L-1]):y==17?(ee=3+Jn(r,u,7),u+=3):y==18&&(ee=11+Jn(r,u,127),u+=7);ee--;)E[L++]=z}}var X=E.subarray(0,I),Q=E.subarray(I);x=lu(X),m=lu(Q),d=ya(X,x,1),g=ya(Q,m,1)}else Qn(1);else{var y=db(u)+4,_=r[y-4]|r[y-3]<<8,C=y+_;if(C>i){l&&Qn(0);break}o&&c(f+_),t.set(r.subarray(y,C),f),e.b=f+=_,e.p=u=C*8,e.f=h;continue}if(u>p){l&&Qn(0);break}}o&&c(f+131072);for(var ve=(1<<x)-1,Me=(1<<m)-1,Ne=u;;Ne=u){var z=d[cu(r,u)&ve],st=z>>4;if(u+=z&15,u>p){l&&Qn(0);break}if(z||Qn(2),st<256)t[f++]=st;else if(st==256){Ne=u,d=null;break}else{var ne=st-254;if(st>264){var L=st-257,pe=Ad[L];ne=Jn(r,u,(1<<pe)-1)+Id[L],u+=pe}var xe=g[cu(r,u)&Me],be=xe>>4;xe||Qn(3),u+=xe&15;var Q=hb[be];if(be>3){var pe=Rd[be];Q+=cu(r,u)&(1<<pe)-1,u+=pe}if(u>p){l&&Qn(0);break}o&&c(f+131072);var Le=f+ne;if(f<Q){var qe=s-Q,Ce=Math.min(Q,Le);for(qe+f<0&&Qn(3);f<Ce;++f)t[f]=n[qe+f]}for(;f<Le;++f)t[f]=t[f-Q]}}e.l=d,e.p=Ne,e.b=f,e.f=h,d&&(h=1,e.m=x,e.d=g,e.n=m)}while(!h);return f!=t.length&&a?pb(t,0,f):t.subarray(0,f)};var vb=new kn(0);var xb=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Qn(6,"invalid zlib data"),(r[1]>>5&1)==+!e&&Qn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Sa(r,e){return gb(r.subarray(xb(r,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var bb=typeof TextDecoder<"u"&&new TextDecoder,_b=0;try{bb.decode(vb,{stream:!0}),_b=1}catch{}var ys=class extends sa{constructor(e){super(e),this.type=kt}parse(e){let E=Math.pow(2.7182818,2.2);function M(v,T){let F=0;for(let A=0;A<65536;++A)(A==0||v[A>>3]&1<<(A&7))&&(T[F++]=A);let b=F-1;for(;F<65536;)T[F++]=0;return b}function L(v){for(let T=0;T<16384;T++)v[T]={},v[T].len=0,v[T].lit=0,v[T].p=null}let V={l:0,c:0,lc:0};function W(v,T,F,b,A){for(;F<v;)T=T<<8|Ue(b,A),F+=8;F-=v,V.l=T>>F&(1<<v)-1,V.c=T,V.lc=F}let K=new Array(59);function ie(v){for(let F=0;F<=58;++F)K[F]=0;for(let F=0;F<65537;++F)K[v[F]]+=1;let T=0;for(let F=58;F>0;--F){let b=T+K[F]>>1;K[F]=T,T=b}for(let F=0;F<65537;++F){let b=v[F];b>0&&(v[F]=b|K[b]++<<6)}}function z(v,T,F,b,A,R){let B=T,U=0,G=0;for(;b<=A;b++){if(B.value-T.value>F)return!1;W(6,U,G,v,B);let q=V.l;if(U=V.c,G=V.lc,R[b]=q,q==63){if(B.value-T.value>F)throw new Error("Something wrong with hufUnpackEncTable");W(8,U,G,v,B);let Z=V.l+6;if(U=V.c,G=V.lc,b+Z>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Z--;)R[b++]=0;b--}else if(q>=59){let Z=q-59+2;if(b+Z>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Z--;)R[b++]=0;b--}}ie(R)}function ee(v){return v&63}function X(v){return v>>6}function Q(v,T,F,b){for(;T<=F;T++){let A=X(v[T]),R=ee(v[T]);if(A>>R)throw new Error("Invalid table entry");if(R>14){let B=b[A>>R-14];if(B.len)throw new Error("Invalid table entry");if(B.lit++,B.p){let U=B.p;B.p=new Array(B.lit);for(let G=0;G<B.lit-1;++G)B.p[G]=U[G]}else B.p=new Array(1);B.p[B.lit-1]=T}else if(R){let B=0;for(let U=1<<14-R;U>0;U--){let G=b[(A<<14-R)+B];if(G.len||G.p)throw new Error("Invalid table entry");G.len=R,G.lit=T,B++}}}return!0}let ve={c:0,lc:0};function Me(v,T,F,b){v=v<<8|Ue(F,b),T+=8,ve.c=v,ve.lc=T}let Ne={c:0,lc:0};function st(v,T,F,b,A,R,B,U,G){if(v==T){b<8&&(Me(F,b,A,R),F=ve.c,b=ve.lc),b-=8;let q=F>>b;if(q=new Uint8Array([q])[0],U.value+q>G)return!1;let Z=B[U.value-1];for(;q-- >0;)B[U.value++]=Z}else if(U.value<G)B[U.value++]=v;else return!1;Ne.c=F,Ne.lc=b}function ne(v){return v&65535}function pe(v){let T=ne(v);return T>32767?T-65536:T}let xe={a:0,b:0};function be(v,T){let F=pe(v),A=pe(T),R=F+(A&1)+(A>>1),B=R,U=R-A;xe.a=B,xe.b=U}function Le(v,T){let F=ne(v),b=ne(T),A=F-(b>>1)&65535,R=b+A-32768&65535;xe.a=R,xe.b=A}function qe(v,T,F,b,A,R,B){let U=B<16384,G=F>A?A:F,q=1,Z,te;for(;q<=G;)q<<=1;for(q>>=1,Z=q,q>>=1;q>=1;){te=0;let ce=te+R*(A-Z),ae=R*q,de=R*Z,ge=b*q,_e=b*Z,We,at,Ye,Ge;for(;te<=ce;te+=de){let ut=te,Xe=te+b*(F-Z);for(;ut<=Xe;ut+=_e){let Mt=ut+ge,Zt=ut+ae,_t=Zt+ge;U?(be(v[ut+T],v[Zt+T]),We=xe.a,Ye=xe.b,be(v[Mt+T],v[_t+T]),at=xe.a,Ge=xe.b,be(We,at),v[ut+T]=xe.a,v[Mt+T]=xe.b,be(Ye,Ge),v[Zt+T]=xe.a,v[_t+T]=xe.b):(Le(v[ut+T],v[Zt+T]),We=xe.a,Ye=xe.b,Le(v[Mt+T],v[_t+T]),at=xe.a,Ge=xe.b,Le(We,at),v[ut+T]=xe.a,v[Mt+T]=xe.b,Le(Ye,Ge),v[Zt+T]=xe.a,v[_t+T]=xe.b)}if(F&q){let Mt=ut+ae;U?be(v[ut+T],v[Mt+T]):Le(v[ut+T],v[Mt+T]),We=xe.a,v[Mt+T]=xe.b,v[ut+T]=We}}if(A&q){let ut=te,Xe=te+b*(F-Z);for(;ut<=Xe;ut+=_e){let Mt=ut+ge;U?be(v[ut+T],v[Mt+T]):Le(v[ut+T],v[Mt+T]),We=xe.a,v[Mt+T]=xe.b,v[ut+T]=We}}Z=q,q>>=1}return te}function Ce(v,T,F,b,A,R,B,U,G){let q=0,Z=0,te=B,ce=Math.trunc(b.value+(A+7)/8);for(;b.value<ce;)for(Me(q,Z,F,b),q=ve.c,Z=ve.lc;Z>=14;){let de=q>>Z-14&16383,ge=T[de];if(ge.len)Z-=ge.len,st(ge.lit,R,q,Z,F,b,U,G,te),q=Ne.c,Z=Ne.lc;else{if(!ge.p)throw new Error("hufDecode issues");let _e;for(_e=0;_e<ge.lit;_e++){let We=ee(v[ge.p[_e]]);for(;Z<We&&b.value<ce;)Me(q,Z,F,b),q=ve.c,Z=ve.lc;if(Z>=We&&X(v[ge.p[_e]])==(q>>Z-We&(1<<We)-1)){Z-=We,st(ge.p[_e],R,q,Z,F,b,U,G,te),q=Ne.c,Z=Ne.lc;break}}if(_e==ge.lit)throw new Error("hufDecode issues")}}let ae=8-A&7;for(q>>=ae,Z-=ae;Z>0;){let de=T[q<<14-Z&16383];if(de.len)Z-=de.len,st(de.lit,R,q,Z,F,b,U,G,te),q=Ne.c,Z=Ne.lc;else throw new Error("hufDecode issues")}return!0}function ct(v,T,F,b,A,R){let B={value:0},U=F.value,G=ze(T,F),q=ze(T,F);F.value+=4;let Z=ze(T,F);if(F.value+=4,G<0||G>=65537||q<0||q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let te=new Array(65537),ce=new Array(16384);L(ce);let ae=b-(F.value-U);if(z(v,F,ae,G,q,te),Z>8*(b-(F.value-U)))throw new Error("Something wrong with hufUncompress");Q(te,G,q,ce),Ce(te,ce,v,F,Z,q,R,A,B)}function ht(v,T,F){for(let b=0;b<F;++b)T[b]=v[T[b]]}function et(v){for(let T=1;T<v.length;T++){let F=v[T-1]+v[T]-128;v[T]=F}}function k(v,T){let F=0,b=Math.floor((v.length+1)/2),A=0,R=v.length-1;for(;!(A>R||(T[A++]=v[F++],A>R));)T[A++]=v[b++]}function At(v){let T=v.byteLength,F=new Array,b=0,A=new DataView(v);for(;T>0;){let R=A.getInt8(b++);if(R<0){let B=-R;T-=B+1;for(let U=0;U<B;U++)F.push(A.getUint8(b++))}else{let B=R;T-=2;let U=A.getUint8(b++);for(let G=0;G<B+1;G++)F.push(U)}}return F}function tt(v,T,F,b,A,R){let B=new DataView(R.buffer),U=F[v.idx[0]].width,G=F[v.idx[0]].height,q=3,Z=Math.floor(U/8),te=Math.ceil(U/8),ce=Math.ceil(G/8),ae=U-(te-1)*8,de=G-(ce-1)*8,ge={value:0},_e=new Array(q),We=new Array(q),at=new Array(q),Ye=new Array(q),Ge=new Array(q);for(let Xe=0;Xe<q;++Xe)Ge[Xe]=T[v.idx[Xe]],_e[Xe]=Xe<1?0:_e[Xe-1]+te*ce,We[Xe]=new Float32Array(64),at[Xe]=new Uint16Array(64),Ye[Xe]=new Uint16Array(te*64);for(let Xe=0;Xe<ce;++Xe){let Mt=8;Xe==ce-1&&(Mt=de);let Zt=8;for(let xt=0;xt<te;++xt){xt==te-1&&(Zt=ae);for(let ot=0;ot<q;++ot)at[ot].fill(0),at[ot][0]=A[_e[ot]++],oe(ge,b,at[ot]),le(at[ot],We[ot]),Pe(We[ot]);q==3&&we(We);for(let ot=0;ot<q;++ot)P(We[ot],Ye[ot],xt*64)}let _t=0;for(let xt=0;xt<q;++xt){let ot=F[v.idx[xt]].type;for(let Ot=8*Xe;Ot<8*Xe+Mt;++Ot){_t=Ge[xt][Ot];for(let tn=0;tn<Z;++tn){let Dt=tn*64+(Ot&7)*8;B.setUint16(_t+0*ot,Ye[xt][Dt+0],!0),B.setUint16(_t+2*ot,Ye[xt][Dt+1],!0),B.setUint16(_t+4*ot,Ye[xt][Dt+2],!0),B.setUint16(_t+6*ot,Ye[xt][Dt+3],!0),B.setUint16(_t+8*ot,Ye[xt][Dt+4],!0),B.setUint16(_t+10*ot,Ye[xt][Dt+5],!0),B.setUint16(_t+12*ot,Ye[xt][Dt+6],!0),B.setUint16(_t+14*ot,Ye[xt][Dt+7],!0),_t+=16*ot}}if(Z!=te)for(let Ot=8*Xe;Ot<8*Xe+Mt;++Ot){let tn=Ge[xt][Ot]+8*Z*2*ot,Dt=Z*64+(Ot&7)*8;for(let Kt=0;Kt<Zt;++Kt)B.setUint16(tn+Kt*2*ot,Ye[xt][Dt+Kt],!0)}}}let ut=new Uint16Array(U);B=new DataView(R.buffer);for(let Xe=0;Xe<q;++Xe){F[v.idx[Xe]].decoded=!0;let Mt=F[v.idx[Xe]].type;if(F[Xe].type==2)for(let Zt=0;Zt<G;++Zt){let _t=Ge[Xe][Zt];for(let xt=0;xt<U;++xt)ut[xt]=B.getUint16(_t+xt*2*Mt,!0);for(let xt=0;xt<U;++xt)B.setFloat32(_t+xt*2*Mt,J(ut[xt]),!0)}}}function oe(v,T,F){let b,A=1;for(;A<64;)b=T[v.value],b==65280?A=64:b>>8==255?A+=b&255:(F[A]=b,A++),v.value++}function le(v,T){T[0]=J(v[0]),T[1]=J(v[1]),T[2]=J(v[5]),T[3]=J(v[6]),T[4]=J(v[14]),T[5]=J(v[15]),T[6]=J(v[27]),T[7]=J(v[28]),T[8]=J(v[2]),T[9]=J(v[4]),T[10]=J(v[7]),T[11]=J(v[13]),T[12]=J(v[16]),T[13]=J(v[26]),T[14]=J(v[29]),T[15]=J(v[42]),T[16]=J(v[3]),T[17]=J(v[8]),T[18]=J(v[12]),T[19]=J(v[17]),T[20]=J(v[25]),T[21]=J(v[30]),T[22]=J(v[41]),T[23]=J(v[43]),T[24]=J(v[9]),T[25]=J(v[11]),T[26]=J(v[18]),T[27]=J(v[24]),T[28]=J(v[31]),T[29]=J(v[40]),T[30]=J(v[44]),T[31]=J(v[53]),T[32]=J(v[10]),T[33]=J(v[19]),T[34]=J(v[23]),T[35]=J(v[32]),T[36]=J(v[39]),T[37]=J(v[45]),T[38]=J(v[52]),T[39]=J(v[54]),T[40]=J(v[20]),T[41]=J(v[22]),T[42]=J(v[33]),T[43]=J(v[38]),T[44]=J(v[46]),T[45]=J(v[51]),T[46]=J(v[55]),T[47]=J(v[60]),T[48]=J(v[21]),T[49]=J(v[34]),T[50]=J(v[37]),T[51]=J(v[47]),T[52]=J(v[50]),T[53]=J(v[56]),T[54]=J(v[59]),T[55]=J(v[61]),T[56]=J(v[35]),T[57]=J(v[36]),T[58]=J(v[48]),T[59]=J(v[49]),T[60]=J(v[57]),T[61]=J(v[58]),T[62]=J(v[62]),T[63]=J(v[63])}function Pe(v){let T=.5*Math.cos(.7853975),F=.5*Math.cos(3.14159/16),b=.5*Math.cos(3.14159/8),A=.5*Math.cos(3*3.14159/16),R=.5*Math.cos(5*3.14159/16),B=.5*Math.cos(3*3.14159/8),U=.5*Math.cos(7*3.14159/16),G=new Array(4),q=new Array(4),Z=new Array(4),te=new Array(4);for(let ce=0;ce<8;++ce){let ae=ce*8;G[0]=b*v[ae+2],G[1]=B*v[ae+2],G[2]=b*v[ae+6],G[3]=B*v[ae+6],q[0]=F*v[ae+1]+A*v[ae+3]+R*v[ae+5]+U*v[ae+7],q[1]=A*v[ae+1]-U*v[ae+3]-F*v[ae+5]-R*v[ae+7],q[2]=R*v[ae+1]-F*v[ae+3]+U*v[ae+5]+A*v[ae+7],q[3]=U*v[ae+1]-R*v[ae+3]+A*v[ae+5]-F*v[ae+7],Z[0]=T*(v[ae+0]+v[ae+4]),Z[3]=T*(v[ae+0]-v[ae+4]),Z[1]=G[0]+G[3],Z[2]=G[1]-G[2],te[0]=Z[0]+Z[1],te[1]=Z[3]+Z[2],te[2]=Z[3]-Z[2],te[3]=Z[0]-Z[1],v[ae+0]=te[0]+q[0],v[ae+1]=te[1]+q[1],v[ae+2]=te[2]+q[2],v[ae+3]=te[3]+q[3],v[ae+4]=te[3]-q[3],v[ae+5]=te[2]-q[2],v[ae+6]=te[1]-q[1],v[ae+7]=te[0]-q[0]}for(let ce=0;ce<8;++ce)G[0]=b*v[16+ce],G[1]=B*v[16+ce],G[2]=b*v[48+ce],G[3]=B*v[48+ce],q[0]=F*v[8+ce]+A*v[24+ce]+R*v[40+ce]+U*v[56+ce],q[1]=A*v[8+ce]-U*v[24+ce]-F*v[40+ce]-R*v[56+ce],q[2]=R*v[8+ce]-F*v[24+ce]+U*v[40+ce]+A*v[56+ce],q[3]=U*v[8+ce]-R*v[24+ce]+A*v[40+ce]-F*v[56+ce],Z[0]=T*(v[ce]+v[32+ce]),Z[3]=T*(v[ce]-v[32+ce]),Z[1]=G[0]+G[3],Z[2]=G[1]-G[2],te[0]=Z[0]+Z[1],te[1]=Z[3]+Z[2],te[2]=Z[3]-Z[2],te[3]=Z[0]-Z[1],v[0+ce]=te[0]+q[0],v[8+ce]=te[1]+q[1],v[16+ce]=te[2]+q[2],v[24+ce]=te[3]+q[3],v[32+ce]=te[3]-q[3],v[40+ce]=te[2]-q[2],v[48+ce]=te[1]-q[1],v[56+ce]=te[0]-q[0]}function we(v){for(let T=0;T<64;++T){let F=v[0][T],b=v[1][T],A=v[2][T];v[0][T]=F+1.5747*A,v[1][T]=F-.1873*b-.4682*A,v[2][T]=F+1.8556*b}}function P(v,T,F){for(let b=0;b<64;++b)T[F+b]=$r.toHalfFloat(S(v[b]))}function S(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(E,Math.abs(v)-1)}function Y(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function se(v){let T=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),F=new Uint8Array(At(T)),b=new Uint8Array(F.length);return et(F),k(F,b),new DataView(b.buffer)}function ue(v){let T=v.array.slice(v.offset.value,v.offset.value+v.size),F=Sa(T),b=new Uint8Array(F.length);return et(F),k(F,b),new DataView(b.buffer)}function re(v){let T=v.viewer,F={value:v.offset.value},b=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),A=new Uint8Array(8192),R=0,B=new Array(v.inputChannels.length);for(let de=0,ge=v.inputChannels.length;de<ge;de++)B[de]={},B[de].start=R,B[de].end=B[de].start,B[de].nx=v.columns,B[de].ny=v.lines,B[de].size=v.type,R+=B[de].nx*B[de].ny*B[de].size;let U=$(T,F),G=$(T,F);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(U<=G)for(let de=0;de<G-U+1;de++)A[de+U]=nt(T,F);let q=new Uint16Array(65536),Z=M(A,q),te=ze(T,F);ct(v.array,T,F,te,b,R);for(let de=0;de<v.inputChannels.length;++de){let ge=B[de];for(let _e=0;_e<B[de].size;++_e)qe(b,ge.start+_e,ge.nx,ge.size,ge.ny,ge.nx*ge.size,Z)}ht(q,b,R);let ce=0,ae=new Uint8Array(b.buffer.byteLength);for(let de=0;de<v.lines;de++)for(let ge=0;ge<v.inputChannels.length;ge++){let _e=B[ge],We=_e.nx*_e.size,at=new Uint8Array(b.buffer,_e.end*2,We*2);ae.set(at,ce),ce+=We*2,_e.end+=We}return new DataView(ae.buffer)}function Be(v){let T=v.array.slice(v.offset.value,v.offset.value+v.size),F=Sa(T),b=v.inputChannels.length*v.lines*v.columns*v.totalBytes,A=new ArrayBuffer(b),R=new DataView(A),B=0,U=0,G=new Array(4);for(let q=0;q<v.lines;q++)for(let Z=0;Z<v.inputChannels.length;Z++){let te=0;switch(v.inputChannels[Z].pixelType){case 1:G[0]=B,G[1]=G[0]+v.columns,B=G[1]+v.columns;for(let ae=0;ae<v.columns;++ae){let de=F[G[0]++]<<8|F[G[1]++];te+=de,R.setUint16(U,te,!0),U+=2}break;case 2:G[0]=B,G[1]=G[0]+v.columns,G[2]=G[1]+v.columns,B=G[2]+v.columns;for(let ae=0;ae<v.columns;++ae){let de=F[G[0]++]<<24|F[G[1]++]<<16|F[G[2]++]<<8;te+=de,R.setUint32(U,te,!0),U+=4}break}}return R}function Ee(v){let T=v.viewer,F={value:v.offset.value},b=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),A={version:Ve(T,F),unknownUncompressedSize:Ve(T,F),unknownCompressedSize:Ve(T,F),acCompressedSize:Ve(T,F),dcCompressedSize:Ve(T,F),rleCompressedSize:Ve(T,F),rleUncompressedSize:Ve(T,F),rleRawSize:Ve(T,F),totalAcUncompressedCount:Ve(T,F),totalDcUncompressedCount:Ve(T,F),acCompression:Ve(T,F)};if(A.version<2)throw new Error("EXRLoader.parse: "+ui.compression+" version "+A.version+" is unsupported");let R=new Array,B=$(T,F)-2;for(;B>0;){let ge=He(T.buffer,F),_e=nt(T,F),We=_e>>2&3,at=(_e>>4)-1,Ye=new Int8Array([at])[0],Ge=nt(T,F);R.push({name:ge,index:Ye,type:Ge,compression:We}),B-=ge.length+3}let U=ui.channels,G=new Array(v.inputChannels.length);for(let ge=0;ge<v.inputChannels.length;++ge){let _e=G[ge]={},We=U[ge];_e.name=We.name,_e.compression=0,_e.decoded=!1,_e.type=We.pixelType,_e.pLinear=We.pLinear,_e.width=v.columns,_e.height=v.lines}let q={idx:new Array(3)};for(let ge=0;ge<v.inputChannels.length;++ge){let _e=G[ge];for(let We=0;We<R.length;++We){let at=R[We];_e.name==at.name&&(_e.compression=at.compression,at.index>=0&&(q.idx[at.index]=ge),_e.offset=ge)}}let Z,te,ce;if(A.acCompressedSize>0)switch(A.acCompression){case 0:Z=new Uint16Array(A.totalAcUncompressedCount),ct(v.array,T,F,A.acCompressedSize,Z,A.totalAcUncompressedCount);break;case 1:let ge=v.array.slice(F.value,F.value+A.totalAcUncompressedCount),_e=Sa(ge);Z=new Uint16Array(_e.buffer),F.value+=A.totalAcUncompressedCount;break}if(A.dcCompressedSize>0){let ge={array:v.array,offset:F,size:A.dcCompressedSize};te=new Uint16Array(ue(ge).buffer),F.value+=A.dcCompressedSize}if(A.rleRawSize>0){let ge=v.array.slice(F.value,F.value+A.rleCompressedSize),_e=Sa(ge);ce=At(_e.buffer),F.value+=A.rleCompressedSize}let ae=0,de=new Array(G.length);for(let ge=0;ge<de.length;++ge)de[ge]=new Array;for(let ge=0;ge<v.lines;++ge)for(let _e=0;_e<G.length;++_e)de[_e].push(ae),ae+=G[_e].width*v.type*2;tt(q,de,G,Z,te,b);for(let ge=0;ge<G.length;++ge){let _e=G[ge];if(!_e.decoded)switch(_e.compression){case 2:let We=0,at=0;for(let Ye=0;Ye<v.lines;++Ye){let Ge=de[ge][We];for(let ut=0;ut<_e.width;++ut){for(let Xe=0;Xe<2*_e.type;++Xe)b[Ge++]=ce[at+Xe*_e.width*_e.height];at++}We++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(b.buffer)}function He(v,T){let F=new Uint8Array(v),b=0;for(;F[T.value+b]!=0;)b+=1;let A=new TextDecoder().decode(F.slice(T.value,T.value+b));return T.value=T.value+b+1,A}function je(v,T,F){let b=new TextDecoder().decode(new Uint8Array(v).slice(T.value,T.value+F));return T.value=T.value+F,b}function me(v,T){let F=Oe(v,T),b=ze(v,T);return[F,b]}function Fe(v,T){let F=ze(v,T),b=ze(v,T);return[F,b]}function Oe(v,T){let F=v.getInt32(T.value,!0);return T.value=T.value+4,F}function ze(v,T){let F=v.getUint32(T.value,!0);return T.value=T.value+4,F}function Ue(v,T){let F=v[T.value];return T.value=T.value+1,F}function nt(v,T){let F=v.getUint8(T.value);return T.value=T.value+1,F}let Ve=function(v,T){let F;return"getBigInt64"in DataView.prototype?F=Number(v.getBigInt64(T.value,!0)):F=v.getUint32(T.value+4,!0)+Number(v.getUint32(T.value,!0)<<32),T.value+=8,F};function it(v,T){let F=v.getFloat32(T.value,!0);return T.value+=4,F}function H(v,T){return $r.toHalfFloat(it(v,T))}function J(v){let T=(v&31744)>>10,F=v&1023;return(v>>15?-1:1)*(T?T===31?F?NaN:1/0:Math.pow(2,T-15)*(1+F/1024):6103515625e-14*(F/1024))}function $(v,T){let F=v.getUint16(T.value,!0);return T.value+=2,F}function he(v,T){return J($(v,T))}function De(v,T,F,b){let A=F.value,R=[];for(;F.value<A+b-1;){let B=He(T,F),U=Oe(v,F),G=nt(v,F);F.value+=3;let q=Oe(v,F),Z=Oe(v,F);R.push({name:B,pixelType:U,pLinear:G,xSampling:q,ySampling:Z})}return F.value+=1,R}function Se(v,T){let F=it(v,T),b=it(v,T),A=it(v,T),R=it(v,T),B=it(v,T),U=it(v,T),G=it(v,T),q=it(v,T);return{redX:F,redY:b,greenX:A,greenY:R,blueX:B,blueY:U,whiteX:G,whiteY:q}}function rt(v,T){let F=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],b=nt(v,T);return F[b]}function It(v,T){let F=Oe(v,T),b=Oe(v,T),A=Oe(v,T),R=Oe(v,T);return{xMin:F,yMin:b,xMax:A,yMax:R}}function zt(v,T){let F=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],b=nt(v,T);return F[b]}function bt(v,T){let F=["ENVMAP_LATLONG","ENVMAP_CUBE"],b=nt(v,T);return F[b]}function j(v,T){let F=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],b=["ROUND_DOWN","ROUND_UP"],A=ze(v,T),R=ze(v,T),B=nt(v,T);return{xSize:A,ySize:R,levelMode:F[B&15],roundingMode:b[B>>4]}}function fe(v,T){let F=it(v,T),b=it(v,T);return[F,b]}function ye(v,T){let F=it(v,T),b=it(v,T),A=it(v,T);return[F,b,A]}function ke(v,T,F,b,A){if(b==="string"||b==="stringvector"||b==="iccProfile")return je(T,F,A);if(b==="chlist")return De(v,T,F,A);if(b==="chromaticities")return Se(v,F);if(b==="compression")return rt(v,F);if(b==="box2i")return It(v,F);if(b==="envmap")return bt(v,F);if(b==="tiledesc")return j(v,F);if(b==="lineOrder")return zt(v,F);if(b==="float")return it(v,F);if(b==="v2f")return fe(v,F);if(b==="v3f")return ye(v,F);if(b==="int")return Oe(v,F);if(b==="rational")return me(v,F);if(b==="timecode")return Fe(v,F);if(b==="preview")return F.value+=A,"skipped";F.value+=A}function Je(v,T){let F=Math.log2(v);return T=="ROUND_DOWN"?Math.floor(F):Math.ceil(F)}function ft(v,T,F){let b=0;switch(v.levelMode){case"ONE_LEVEL":b=1;break;case"MIPMAP_LEVELS":b=Je(Math.max(T,F),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return b}function wt(v,T,F,b){let A=new Array(v);for(let R=0;R<v;R++){let B=1<<R,U=T/B|0;b=="ROUND_UP"&&U*B<T&&(U+=1);let G=Math.max(U,1);A[R]=(G+F-1)/F|0}return A}function $n(){let v=this,T=v.offset,F={value:0};for(let b=0;b<v.tileCount;b++){let A=Oe(v.viewer,T),R=Oe(v.viewer,T);T.value+=8,v.size=ze(v.viewer,T);let B=A*v.blockWidth,U=R*v.blockHeight;v.columns=B+v.blockWidth>v.width?v.width-B:v.blockWidth,v.lines=U+v.blockHeight>v.height?v.height-U:v.blockHeight;let G=v.columns*v.totalBytes,Z=v.size<v.lines*G?v.uncompress(v):Y(v);T.value+=v.size;for(let te=0;te<v.lines;te++){let ce=te*v.columns*v.totalBytes;for(let ae=0;ae<v.inputChannels.length;ae++){let de=ui.channels[ae].name,ge=v.channelByteOffsets[de]*v.columns,_e=v.decodeChannels[de];if(_e===void 0)continue;F.value=ce+ge;let We=(v.height-(1+U+te))*v.outLineWidth;for(let at=0;at<v.columns;at++){let Ye=We+(at+B)*v.outputChannels+_e;v.byteArray[Ye]=v.getter(Z,F)}}}}}function wn(){let v=this,T=v.offset,F={value:0};for(let b=0;b<v.height/v.blockHeight;b++){let A=Oe(v.viewer,T)-ui.dataWindow.yMin;v.size=ze(v.viewer,T),v.lines=A+v.blockHeight>v.height?v.height-A:v.blockHeight;let R=v.columns*v.totalBytes,U=v.size<v.lines*R?v.uncompress(v):Y(v);T.value+=v.size;for(let G=0;G<v.blockHeight;G++){let q=b*v.blockHeight,Z=G+v.scanOrder(q);if(Z>=v.height)continue;let te=G*R,ce=(v.height-1-Z)*v.outLineWidth;for(let ae=0;ae<v.inputChannels.length;ae++){let de=ui.channels[ae].name,ge=v.channelByteOffsets[de]*v.columns,_e=v.decodeChannels[de];if(_e!==void 0){F.value=te+ge;for(let We=0;We<v.columns;We++){let at=ce+We*v.outputChannels+_e;v.byteArray[at]=v.getter(U,F)}}}}}}function er(v,T,F){let b={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");b.version=v.getUint8(4);let A=v.getUint8(5);b.spec={singleTile:!!(A&2),longName:!!(A&4),deepFormat:!!(A&8),multiPart:!!(A&16)},F.value=8;let R=!0;for(;R;){let B=He(T,F);if(B==="")R=!1;else{let U=He(T,F),G=ze(v,F),q=ke(v,T,F,U,G);q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):b[B]=q}}if((A&-7)!=0)throw console.error("THREE.EXRHeader:",b),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return b}function ei(v,T,F,b,A){let R={size:0,viewer:T,array:F,offset:b,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:jt};switch(v.compression){case"NO_COMPRESSION":R.blockHeight=1,R.uncompress=Y;break;case"RLE_COMPRESSION":R.blockHeight=1,R.uncompress=se;break;case"ZIPS_COMPRESSION":R.blockHeight=1,R.uncompress=ue;break;case"ZIP_COMPRESSION":R.blockHeight=16,R.uncompress=ue;break;case"PIZ_COMPRESSION":R.blockHeight=32,R.uncompress=re;break;case"PXR24_COMPRESSION":R.blockHeight=16,R.uncompress=Be;break;case"DWAA_COMPRESSION":R.blockHeight=32,R.uncompress=Ee;break;case"DWAB_COMPRESSION":R.blockHeight=256,R.uncompress=Ee;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}let B={};for(let Z of v.channels)switch(Z.name){case"Y":case"R":case"G":case"B":case"A":B[Z.name]=!0,R.type=Z.pixelType}let U=!1;if(B.R&&B.G&&B.B)U=!B.A,R.outputChannels=4,R.decodeChannels={R:0,G:1,B:2,A:3};else if(B.Y)R.outputChannels=1,R.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(R.type==1)switch(A){case hn:R.getter=he;break;case kt:R.getter=$;break}else if(R.type==2)switch(A){case hn:R.getter=it;break;case kt:R.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+R.type+" for "+v.compression+".");R.columns=R.width;let G=R.width*R.height*R.outputChannels;switch(A){case hn:R.byteArray=new Float32Array(G),U&&R.byteArray.fill(1,0,G);break;case kt:R.byteArray=new Uint16Array(G),U&&R.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",A);break}let q=0;for(let Z of v.channels)R.decodeChannels[Z.name]!==void 0&&(R.channelByteOffsets[Z.name]=q),q+=Z.pixelType*2;if(R.totalBytes=q,R.outLineWidth=R.width*R.outputChannels,v.lineOrder==="INCREASING_Y"?R.scanOrder=Z=>Z:R.scanOrder=Z=>R.height-1-Z,R.outputChannels==4?(R.format=sn,R.colorSpace=jt):(R.format=fs,R.colorSpace=Kn),v.spec.singleTile){R.blockHeight=v.tiles.ySize,R.blockWidth=v.tiles.xSize;let Z=ft(v.tiles,R.width,R.height),te=wt(Z,R.width,v.tiles.xSize,v.tiles.roundingMode),ce=wt(Z,R.height,v.tiles.ySize,v.tiles.roundingMode);R.tileCount=te[0]*ce[0];for(let ae=0;ae<Z;ae++)for(let de=0;de<ce[ae];de++)for(let ge=0;ge<te[ae];ge++)Ve(T,b);R.decode=$n.bind(R)}else{R.blockWidth=R.width;let Z=Math.ceil(R.height/R.blockHeight);for(let te=0;te<Z;te++)Ve(T,b);R.decode=wn.bind(R)}return R}let tr={value:0},As=new DataView(e),rc=new Uint8Array(e),ui=er(As,e,tr),Ui=ei(ui,As,rc,tr,this.type);return Ui.decode(),{header:ui,width:Ui.width,height:Ui.height,data:Ui.byteArray,format:Ui.format,colorSpace:Ui.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Ht,a.magFilter=Ht,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}};var Ud=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var w=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);w[y]=_>96?_-97:_>64?_-39:_+4}for(var C=0,y=0;y<p.length;++y)w[C++]=w[y]<60?n[w[y]]:(w[y]-60)*64+w[++y];return w.buffer.slice(0,C)}function l(p,w,y,_,C,I){var D=s.exports.sbrk,N=y+3&-4,E=D(N*_),M=D(C.length),L=new Uint8Array(s.exports.memory.buffer);L.set(C,M);var V=p(E,y,_,M,C.length);if(V==0&&I&&I(E,N,_),w.set(L.subarray(E,E+y*_)),D(E-D(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var w={object:new Worker(p),pending:0,requests:{}};return w.object.onmessage=function(y){var _=y.data;w.pending-=_.count,w.requests[_.id][_.action](_.value),delete w.requests[_.id]},w}function g(p){for(var w="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),y=new Blob([w],{type:"text/javascript"}),_=URL.createObjectURL(y),C=0;C<p;++C)u[C]=d(_);URL.revokeObjectURL(_)}function x(p,w,y,_,C){for(var I=u[0],D=1;D<u.length;++D)u[D].pending<I.pending&&(I=u[D]);return new Promise(function(N,E){var M=new Uint8Array(y),L=f++;I.pending+=p,I.requests[L]={resolve:N,reject:E},I.object.postMessage({id:L,count:p,size:w,source:M,mode:_,filter:C},[M.buffer])})}function m(p){a.then(function(){var w=p.data;try{var y=new Uint8Array(w.count*w.size);l(s.exports[w.mode],y,w.count,w.size,w.source,s.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:y},[y.buffer])}catch(_){self.postMessage({id:w.id,count:w.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,w,y,_,C){l(s.exports.meshopt_decodeVertexBuffer,p,w,y,_,s.exports[c[C]])},decodeIndexBuffer:function(p,w,y,_){l(s.exports.meshopt_decodeIndexBuffer,p,w,y,_)},decodeIndexSequence:function(p,w,y,_){l(s.exports.meshopt_decodeIndexSequence,p,w,y,_)},decodeGltfBuffer:function(p,w,y,_,C,I){l(s.exports[h[C]],p,w,y,_,s.exports[c[I]])},decodeGltfBufferAsync:function(p,w,y,_,C){return u.length>0?x(p,w,y,h[_],c[C]):a.then(function(){var I=new Uint8Array(p*w);return l(s.exports[h[_]],I,p,w,y,s.exports[c[C]]),I})}}})();var li={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Mb=new wi(-1,1,1,-1,0,1),uu=class extends Ft{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}},Sb=new uu,ci=class{constructor(e){this._mesh=new Ze(Sb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var kl=class extends xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vn.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ci(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ea=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},zl=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kl(li),this.copyPass.material.blending=Yt,this.clock=new la}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ea!==void 0&&(a instanceof Ea?n=!0:a instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gl=class extends xn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Nd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ms=class r extends xn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(s,a,{type:kt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Gt(s,a,{type:kt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Gt(s,a,{type:kt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=Nd;this.highPassUniforms=vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Te(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vn.clone(li.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:li.vertexShader,fragmentShader:li.fragmentShader,blending:Ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new rn,this._fsQuad=new ci(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ms.BlurDirectionX=new Te(1,0);Ms.BlurDirectionY=new Te(0,1);var wa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $e},cameraProjectionMatrixInverse:{value:new $e},cameraWorldMatrix:{value:new $e},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ta={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Vl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Fd(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=Eb(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let s=new ni(i,e,e);return s.wrapS=Jt,s.wrapT=Jt,s.needsUpdate=!0,s}function Eb(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=a++;s++,i--}return n}var Aa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:fu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Te},cameraProjectionMatrixInverse:{value:new $e},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function fu(r,e,t){let n=wb(r,e,t),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=n[s];i+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return i}function wb(r,e,t){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*e*i/r,a=Math.pow(i/(r-1),t);n.push(new O(Math.cos(s),Math.sin(s),a))}return n}var Wl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let w=g-m+h,y=x-p+h,_=g-1+2*h,C=x-1+2*h,I=l&255,D=c&255,N=this.perm[I+this.perm[D]]%12,E=this.perm[I+m+this.perm[D+p]]%12,M=this.perm[I+1+this.perm[D+1]]%12,L=.5-g*g-x*x;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[N],g,x));let V=.5-w*w-y*y;V<0?i=0:(V*=V,i=V*V*this._dot(this.grad3[E],w,y));let W=.5-_*_-C*C;return W<0?s=0:(W*=W,s=W*W*this._dot(this.grad3[M],_,C)),70*(n+i+s)}noise3d(e,t,n){let i,s,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,x=h-g,m=u-g,p=f-g,w=e-x,y=t-m,_=n-p,C,I,D,N,E,M;w>=y?y>=_?(C=1,I=0,D=0,N=1,E=1,M=0):w>=_?(C=1,I=0,D=0,N=1,E=0,M=1):(C=0,I=0,D=1,N=1,E=0,M=1):y<_?(C=0,I=0,D=1,N=0,E=1,M=1):w<_?(C=0,I=1,D=0,N=0,E=1,M=1):(C=0,I=1,D=0,N=1,E=1,M=0);let L=w-C+d,V=y-I+d,W=_-D+d,K=w-N+2*d,ie=y-E+2*d,z=_-M+2*d,ee=w-1+3*d,X=y-1+3*d,Q=_-1+3*d,ve=h&255,Me=u&255,Ne=f&255,st=this.perm[ve+this.perm[Me+this.perm[Ne]]]%12,ne=this.perm[ve+C+this.perm[Me+I+this.perm[Ne+D]]]%12,pe=this.perm[ve+N+this.perm[Me+E+this.perm[Ne+M]]]%12,xe=this.perm[ve+1+this.perm[Me+1+this.perm[Ne+1]]]%12,be=.6-w*w-y*y-_*_;be<0?i=0:(be*=be,i=be*be*this._dot3(this.grad3[st],w,y,_));let Le=.6-L*L-V*V-W*W;Le<0?s=0:(Le*=Le,s=Le*Le*this._dot3(this.grad3[ne],L,V,W));let qe=.6-K*K-ie*ie-z*z;qe<0?a=0:(qe*=qe,a=qe*qe*this._dot3(this.grad3[pe],K,ie,z));let Ce=.6-ee*ee-X*X-Q*Q;return Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this._dot3(this.grad3[xe],ee,X,Q)),32*(i+s+a+o)}noise4d(e,t,n,i){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,x=(e+t+n+i)*l,m=Math.floor(e+x),p=Math.floor(t+x),w=Math.floor(n+x),y=Math.floor(i+x),_=(m+p+w+y)*c,C=m-_,I=p-_,D=w-_,N=y-_,E=e-C,M=t-I,L=n-D,V=i-N,W=E>M?32:0,K=E>L?16:0,ie=M>L?8:0,z=E>V?4:0,ee=M>V?2:0,X=L>V?1:0,Q=W+K+ie+z+ee+X,ve=a[Q][0]>=3?1:0,Me=a[Q][1]>=3?1:0,Ne=a[Q][2]>=3?1:0,st=a[Q][3]>=3?1:0,ne=a[Q][0]>=2?1:0,pe=a[Q][1]>=2?1:0,xe=a[Q][2]>=2?1:0,be=a[Q][3]>=2?1:0,Le=a[Q][0]>=1?1:0,qe=a[Q][1]>=1?1:0,Ce=a[Q][2]>=1?1:0,ct=a[Q][3]>=1?1:0,ht=E-ve+c,et=M-Me+c,k=L-Ne+c,At=V-st+c,tt=E-ne+2*c,oe=M-pe+2*c,le=L-xe+2*c,Pe=V-be+2*c,we=E-Le+3*c,P=M-qe+3*c,S=L-Ce+3*c,Y=V-ct+3*c,se=E-1+4*c,ue=M-1+4*c,re=L-1+4*c,Be=V-1+4*c,Ee=m&255,He=p&255,je=w&255,me=y&255,Fe=o[Ee+o[He+o[je+o[me]]]]%32,Oe=o[Ee+ve+o[He+Me+o[je+Ne+o[me+st]]]]%32,ze=o[Ee+ne+o[He+pe+o[je+xe+o[me+be]]]]%32,Ue=o[Ee+Le+o[He+qe+o[je+Ce+o[me+ct]]]]%32,nt=o[Ee+1+o[He+1+o[je+1+o[me+1]]]]%32,Ve=.6-E*E-M*M-L*L-V*V;Ve<0?h=0:(Ve*=Ve,h=Ve*Ve*this._dot4(s[Fe],E,M,L,V));let it=.6-ht*ht-et*et-k*k-At*At;it<0?u=0:(it*=it,u=it*it*this._dot4(s[Oe],ht,et,k,At));let H=.6-tt*tt-oe*oe-le*le-Pe*Pe;H<0?f=0:(H*=H,f=H*H*this._dot4(s[ze],tt,oe,le,Pe));let J=.6-we*we-P*P-S*S-Y*Y;J<0?d=0:(J*=J,d=J*J*this._dot4(s[Ue],we,P,S,Y));let $=.6-se*se-ue*ue-re*re-Be*Be;return $<0?g=0:($*=$,g=$*$*this._dot4(s[nt],se,ue,re,Be)),27*(h+u+f+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}};var Ra=class r extends xn{constructor(e,t,n=512,i=512,s,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Fd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Gt(this.width,this.height,{type:kt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Tt({defines:Object.assign({},wa.defines),uniforms:vn.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new na,this.normalMaterial.blending=Yt,this.pdMaterial=new Tt({defines:Object.assign({},Aa.defines),uniforms:vn.clone(Aa.uniforms),vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Tt({defines:Object.assign({},Ta.defines),uniforms:vn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Tt({uniforms:vn.clone(li.uniforms),vertexShader:li.vertexShader,fragmentShader:li.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ha,blendDst:Sr,blendEquation:Rn,blendSrcAlpha:ca,blendDstAlpha:Sr,blendEquationAlpha:Rn}),this.blendMaterial=new Tt({uniforms:vn.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Oo,blendSrc:ha,blendDst:Sr,blendEquation:Rn,blendSrcAlpha:ca,blendDstAlpha:Sr,blendEquationAlpha:Rn}),this._fsQuad=new ci(null),this._originalClearColor=new Re,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new gr,this.depthTexture.format=Yi,this.depthTexture.type=ji,this.normalRenderTarget=new Gt(this.width,this.height,{minFilter:qt,magFilter:qt,type:kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=fu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}_restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}_generateNoise(e=64){let t=new Wl,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new ni(i,e,e,sn,gn);return s.wrapS=Jt,s.wrapT=Jt,s.needsUpdate=!0,s}};Ra.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ca={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xl=class extends xn{constructor(){super(),this.uniforms=vn.clone(Ca.uniforms),this.material=new ta({name:Ca.name,uniforms:this.uniforms,vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader}),this._fsQuad=new ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xi?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function ql(r,e){return e!==void 0?e:window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||r.clientWidth<700}var jl=r=>Math.min(window.devicePixelRatio||1,r?1.25:1.5);function Yl(r,e,t,{lite:n,bloom:i=.45}){let s=r.extensions.has("EXT_color_buffer_half_float")||r.extensions.has("EXT_color_buffer_float"),a=new Gt(1,1,{type:s?kt:gn,samples:n?2:4}),o=new Hl(r,a);o.addPass(new Gl(e,t));let l=null;if(!n){l=new Ra(e,t,1,1),l.blendIntensity=.85,l.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1});let y=l.setSize.bind(l);l.setSize=(_,C)=>y(Math.max(1,Math.ceil(_/2)),Math.max(1,Math.ceil(C/2))),o.addPass(l)}let c=new Ms(new Te(1,1),i,.45,1);o.addPass(c),o.addPass(new Xl);let h=y=>[o.renderTarget1,o.renderTarget2].forEach(_=>{_.samples!==y&&(_.samples=y,_.dispose())}),u=[l?()=>{l.enabled=!1}:null,r.getPixelRatio()>1?()=>{r.setPixelRatio(1),o.setPixelRatio(1)}:null,()=>h(n?0:2),n?null:()=>h(0)].filter(Boolean),f=0,d=0,g=0,x=0,m=[1,1];function p(y,_){m=[y,_],o.setSize(y,_)}function w(y,_){let C=y-d;if(d=y,!_||f>=u.length||C>400||C<=0){_||(d=0);return}x++,C>40&&g++,!(x<24)&&(g>=10&&(u[f++](),p(m[0],m[1])),x=0,g=0)}return{composer:o,setSize:p,watch:w,render(){o.render()},level:()=>f,dispose(){l&&l.dispose(),c.dispose(),o.dispose(),a.dispose()}}}function Zl(r,e=[]){r.updateMatrixWorld(!0);let t=new $e().copy(r.matrixWorld).invert(),n=new Set(e),i=new Map,s=l=>{if(!(n.has(l)||!l.visible||Object.keys(l.userData).length)){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&!Array.isArray(l.material)&&!l.material.transparent&&!l.morphTargetInfluences){let c=l.material.uuid+(l.castShadow?"c":"")+(l.receiveShadow?"r":"");i.has(c)||i.set(c,[]),i.get(c).push(l)}l.children.forEach(s)}};r.children.slice().forEach(s);let a=0,o=new $e;return i.forEach(l=>{if(l.length<2)return;let c=l.map(f=>{let d=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();return!d.attributes.position||!d.attributes.normal||!d.attributes.uv?null:(Object.keys(d.attributes).forEach(g=>{g!=="position"&&g!=="normal"&&g!=="uv"&&d.deleteAttribute(g)}),d.clearGroups(),d.applyMatrix4(o.multiplyMatrices(t,f.matrixWorld)),d)});if(c.some(f=>!f))return;let h=yd(c,!1);if(c.forEach(f=>f.dispose()),!h)return;let u=new Ze(h,l[0].material);u.castShadow=l[0].castShadow,u.receiveShadow=l[0].receiveShadow,r.add(u),l.forEach(f=>f.parent.remove(f)),a+=l.length}),a}var Od=`varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Bd=`uniform vec3 uColor; uniform float uFront, uFlow, uTime, uDir, uLen, uHi, uShow, uRev;
varying vec2 vUv;
void main(){
  float s = uRev > 0.5 ? 1.0 - vUv.x : vUv.x;
  float on = 1.0 - step(uFront, s - 0.0001);
  float d = fract(vUv.x * uLen / 0.42 - uTime * 1.7 * uDir);
  float dash = smoothstep(0.0, 0.12, d) * (1.0 - smoothstep(0.3, 0.45, d));
  // intensita' contenute: oltre 1 la resa schiarisce verso il bianco e i colori dei conduttori non si riconoscono piu'
  vec3 c = uColor * (uShow * 0.09 + on * (0.42 + uFlow * dash * 0.9) + uHi * 0.35);
  gl_FragColor = vec4(c, 1.0);
}`,du={fase:16752453,neutro:6203647,terra:9425231,leak:16734762},Tb=r=>r*r*(3-2*r);function kd(r,e){let t=new Qe;t.renderOrder=20,r.add(t);let n={},i=1,s=0;Object.entries(e).forEach(([c,h])=>{Object.entries(h).forEach(([u,f])=>{let d=new os;for(let y=1;y<f.length;y++)d.add(new vr(new O(...f[y-1]),new O(...f[y])));let g=d.getLength(),x=new ls(d,Math.max(24,Math.round(g*14)),.016,6,!1),m={uColor:{value:new Re(du[u])},uFront:{value:0},uFlow:{value:0},uTime:{value:0},uDir:{value:u==="fase"?1:-1},uLen:{value:g},uHi:{value:0},uShow:{value:i},uRev:{value:0}},p=new Tt({uniforms:m,vertexShader:Od,fragmentShader:Bd,transparent:!0,blending:Ci,depthTest:!1,depthWrite:!1}),w=new Ze(x,p);w.renderOrder=20,w.frustumCulled=!1,t.add(w),n[c+"."+u]={mesh:w,u:m,line:c,cond:u,live:!1,flowUntil:0}})});let a=new Map;function o(){s||(s=1,r.loop(()=>{let c=performance.now(),h=!1;return Object.values(n).forEach(u=>{u.u.uTime.value=c/1e3;let f=a.get(u);if(f){let g=Math.min(1,(c-f.t0)/f.ms);u.u.uFront.value=f.from+(f.to-f.from)*Tb(g),g>=1?a.delete(u):h=!0}let d=u.flowUntil>c?1:Math.max(0,1-(c-u.flowUntil)/500);u.u.uFlow.value=r.reduced?0:d,d>0&&(h=!0)}),h?!0:(s=0,!1)}))}function l(c,h,u,f=0,d=!1){if(c.u.uRev.value=d?1:0,r.reduced){c.u.uFront.value=h;return}a.set(c,{from:c.u.uFront.value,to:h,t0:performance.now()+f,ms:u})}return{group:t,setLine(c,{live:h,flow:u,earth:f=0}){["fase","neutro","terra"].forEach(d=>{let g=n[c+"."+d];if(!g)return;let x=d==="terra",m=x?f>0:h;x?(g.u.uColor.value.setHex(du[m?"leak":"terra"]),m!==g.live&&l(g,m?f:0,m?520:260,m?300:0,m&&f>=1)):m!==g.live&&(m?l(g,1,420,d==="neutro"?330:0,d==="neutro"):l(g,0,280,0,!1)),m&&(u||x&&f>0)&&(!g.live||u==="again")&&(g.flowUntil=performance.now()+(x?1400:1700)),g.live=m}),o(),r.redraw()},cut(){Object.values(n).forEach(c=>{a.delete(c),c.u.uFront.value=0,c.u.uFlow.value=0,c.flowUntil=0,c.live=!1,c.u.uColor.value.setHex(du[c.cond])}),r.redraw()},highlight(c){Object.values(n).forEach(h=>h.u.uHi.value=h.line===c?1:0),r.redraw()},setVisible(c){i=c?1:0,t.visible=!!c,Object.values(n).forEach(h=>h.u.uShow.value=i),r.redraw()}}}function zd(r,e,t){let n=t||40,i=new Float32Array(n*3),s=new Float32Array(n);for(let u=0;u<n;u++)s[u]=Math.random(),i[u*3]=(Math.random()-.5)*.2,i[u*3+1]=Math.random()*.3,i[u*3+2]=(Math.random()-.5)*.12;let a=new Ft;a.setAttribute("position",new Ut(i,3)),a.setAttribute("aSeed",new Ut(s,1));let o={uTime:{value:0},uColor:{value:new Re(16738842)}},l=new Tt({uniforms:o,transparent:!0,blending:Ci,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; varying float vA;
      void main(){ float t = fract(uTime * (0.9 + aSeed) + aSeed); vec3 p = position * (1.0 + t * 2.0); p.y += t * 0.45;
        vA = 1.0 - t; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = (3.0 + aSeed * 4.0) * (14.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(uColor * 3.0 * vA * (1.0 - d * 2.0), 1.0); }"}),c=new mr(a,l);c.position.set(...e),c.visible=!1,c.frustumCulled=!1,c.renderOrder=21,r.add(c);let h=0;return{play(u){if(c.visible=!0,h)return;let f=performance.now();h=r.animate(u,d=>{o.uTime.value=(performance.now()-f)/1e3,d>=1&&(c.visible=!1,h=0)})},stop(){c.visible=!1,r.redraw()}}}var Ab={marrone:16752453,blu:6203647,gv:9425231,nero:12042448,grigio:14080479,rosso:16734810};function Hd(r){let e=new Qe;e.renderOrder=20,r.add(e);let t=new Map,n=!1,i=0;function s(){n||(n=!0,r.loop(()=>{let o=performance.now(),l=!1;return t.forEach(c=>{if(c.u.uTime.value=o/1e3,c.born){let u=Math.min(1,(o-c.born)/520);c.u.uFront.value=u*u*(3-2*u),u>=1?c.born=0:l=!0}let h=i>o?1:Math.max(0,1-(o-i)/600);c.u.uFlow.value=r.reduced?0:h,h>0&&(l=!0)}),l?!0:(n=!1,!1)}))}function a(o,l){let c=new os;for(let x=1;x<o.length;x++)c.add(new vr(new O(...o[x-1]),new O(...o[x])));let h=c.getLength(),u=new ls(c,Math.max(16,Math.round(h*12)),.016,6,!1),f={uColor:{value:new Re(Ab[l]||16777215)},uFront:{value:r.reduced?1:0},uFlow:{value:0},uTime:{value:0},uDir:{value:1},uLen:{value:h},uHi:{value:0},uShow:{value:1},uRev:{value:0}},d=new Tt({uniforms:f,vertexShader:Od,fragmentShader:Bd,transparent:!0,blending:Ci,depthTest:!1,depthWrite:!1}),g=new Ze(u,d);return g.renderOrder=20,g.frustumCulled=!1,{mesh:g,u:f}}return{sync(o,l=!0){let c=new Set;o.forEach(h=>{if(c.add(h.id),t.has(h.id))return;let u=a(h.pts,h.color);e.add(u.mesh),t.set(h.id,{...u,born:l&&!r.reduced?performance.now():0}),(!l||r.reduced)&&(u.u.uFront.value=1)}),t.forEach((h,u)=>{c.has(u)||(e.remove(h.mesh),h.mesh.geometry.dispose(),h.mesh.material.dispose(),t.delete(u))}),s(),r.redraw()},flow(o=2200){i=performance.now()+o,s()},setVisible(o){e.visible=!!o,r.redraw()},clear(){this.sync([])}}}var Gd=[{id:"c01-circuito-chiuso",code:"c01",blurb:"Una lampada si accende solo se il giro \xE8 completo.",flow:"always",n:0,name:"Circuito chiuso",title:"Il circuito chiuso",goal:"Collega la lampada al quadro con due fili: la fase e il neutro. Poi dai corrente con la levetta del quadro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:[],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase (marrone) parte dal morsetto FASE del quadro e arriva a un morsetto della lampada.","Il neutro (blu) parte dal morsetto NEUTRO del quadro e arriva all\u2019altro morsetto della lampada.","Servono due fili in tutto, uno per ciascun morsetto della lampada. Poi tocca la levetta del quadro."]},{id:"c02-presa",code:"c02",blurb:"Fase, neutro e terra: dove vanno e perch\xE9.",flow:"always",n:1,name:"Presa",title:"La presa di corrente",goal:"Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{F:{l:"FASE"},PE:{l:"TERRA"},N:{l:"NEUTRO"}}},{id:"P",type:"presa",short:"Presa",title:"Presa bipasso 10/16 A",terms:{L:{l:"L"},PE:{l:"PE"},N:{l:"N"}}}],controls:[],load:["P.L","P.N"],earth:["Q.PE","P.PE"],pol:"P.L",room:"tavolo",solution:[["Q.F","P.L","marrone"],["Q.N","P.N","blu"],["Q.PE","P.PE","gv"]],hints:["Il marrone \xE8 la fase: va dal quadro al morsetto L della presa.","Il blu \xE8 il neutro: va dal quadro al morsetto N della presa.","Il giallo-verde \xE8 la terra: va al morsetto PE, quello al centro."]},{id:"c03-interrotto",code:"c03",blurb:"Interrompere la fase, non il neutro.",flow:"always",n:2,name:"Interrotto",title:"Punto luce interrotto",goal:"Accendi e spegni la lampada con un interruttore. L\u2019interruttore interrompe la fase, mai il neutro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L.A","marrone"],["Q.N","L.B","blu"]],hints:["Parti dalla fase: dal quadro va all\u2019interruttore, non direttamente alla lampada.","Dall\u2019altro morsetto dell\u2019interruttore il filo va a un morsetto della lampada.","Il neutro (blu) va dal quadro all\u2019altro morsetto della lampada, senza passare dall\u2019interruttore."]},{id:"c04-parallelo",code:"c04",blurb:"Il parallelo: due lampade, un solo comando.",flow:"always",n:0,name:"Parallelo",title:"Due lampade, un interruttore",goal:"Comanda due lampade con un solo interruttore: premendolo, si accendono e si spengono insieme.",loadName:"Le lampade",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L1",type:"lamp",short:"Lampada 1",title:"Portalampada 1",terms:{B:{l:"B"},A:{l:"A"}}},{id:"L2",type:"lamp",short:"Lampada 2",title:"Portalampada 2",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L1.A","L1.B"],loads:[["L1.A","L1.B"],["L2.A","L2.B"]],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L1.A","marrone"],["S.b","L2.A","marrone"],["Q.N","L1.B","blu"],["Q.N","L2.B","blu"]],hints:["La fase va dal quadro all\u2019interruttore, come in un punto luce con una sola lampada.","Dal morsetto 2 dell\u2019interruttore parte un filo per ogni lampada: due fili di fase, uno su ciascuna.","Il neutro (blu) va dal quadro a tutte e due le lampade, sul morsetto che resta libero, senza passare dall\u2019interruttore."]},{id:"c05-deviato",code:"c05",blurb:"Accendere e spegnere da due punti.",flow:"onDemand",n:3,name:"Deviato",title:"Punto luce deviato",goal:"Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","D2.1","nero"],["D1.2","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase entra nel morsetto C (comune) del primo deviatore.","I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.","Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori."]},{id:"c06-invertito",code:"c06",blurb:"Comandare la stessa luce da tre punti.",flow:"onDemand",n:4,name:"Invertito",title:"Punto luce invertito",goal:"Aggiungi un terzo punto di comando in mezzo, con l\u2019invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"I",type:"inv",short:"Invertitore",title:"Invertitore",where:"Camera",terms:{1:{l:"1"},2:{l:"2"},3:{l:"3"},4:{l:"4"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","I","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","I.1","nero"],["D1.2","I.2","grigio"],["I.3","D2.1","nero"],["I.4","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["\xC8 come la deviata, ma in mezzo ai due fili di collegamento metti l\u2019invertitore.","I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell\u2019invertitore.","Dai morsetti 3 e 4 (in basso) dell\u2019invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada."]}];var Ss=r=>Gd.find(e=>e.id===r),mu=(r,e)=>r.map(t=>e[t.id]?{...t,...e[t.id]}:t),DS={...Ss("c03-interrotto"),id:"t01-bagno",quadroOnly:!0,code:"t01",n:0,name:"Bagno",title:"Il bagno",blurb:"Punto luce interrotto, con l\u2019interruttore vicino alla porta.",goal:"Cabla il punto luce del bagno: un interruttore vicino alla porta accende e spegne la lampada.",comps:mu(Ss("c03-interrotto").comps,{S:{short:"Interruttore",title:"Interruttore del bagno",where:"Porta"},L:{short:"Lampada",title:"Lampada del bagno"}})},LS={...Ss("c05-deviato"),id:"t02-camera",quadroOnly:!0,code:"t02",n:0,name:"Camera",title:"La camera",blurb:"Punto luce deviato, dalla porta e dal comodino.",goal:"Cabla il punto luce della camera: si accende e si spegne dalla porta e dal comodino.",comps:mu(Ss("c05-deviato").comps,{D1:{short:"Deviatore porta",title:"Deviatore della porta",where:"Porta"},D2:{short:"Deviatore comodino",title:"Deviatore del comodino",where:"Comodino"},L:{short:"Lampada",title:"Lampada della camera"}})},US={...Ss("c06-invertito"),id:"t03-corridoio",quadroOnly:!0,code:"t03",n:0,name:"Corridoio",title:"Il corridoio",blurb:"Punto luce invertito, da tre punti.",goal:"Cabla il punto luce del corridoio: si comanda dall\u2019ingresso, dal soggiorno e dalla camera.",comps:mu(Ss("c06-invertito").comps,{D1:{short:"Deviatore ingresso",title:"Deviatore dell\u2019ingresso",where:"Ingresso"},I:{short:"Invertitore soggiorno",title:"Invertitore del soggiorno",where:"Soggiorno"},D2:{short:"Deviatore camera",title:"Deviatore della camera",where:"Camera"},L:{short:"Lampada",title:"Lampada del corridoio"}})};var Vt={size:{w:9,d:8},rooms:[{id:"cucina",name:"Cucina",x:0,z:0,w:3,d:3.5,scene:!0},{id:"bagno",name:"Bagno",x:3,z:0,w:2,d:3.5,circuit:"t01-bagno",lamp:[4,1.75]},{id:"camera",name:"Camera",x:5,z:0,w:4,d:3.5,circuit:"t02-camera",lamp:[7,1.75]},{id:"corridoio",name:"Corridoio",x:0,z:3.5,w:9,d:1.5,circuit:"t03-corridoio",lamp:[4.5,4.25]},{id:"ingresso",name:"Ingresso",x:0,z:5,w:2.5,d:3,scene:!0},{id:"soggiorno",name:"Soggiorno",x:2.5,z:5,w:6.5,d:3,scene:!0}],controls:{"t01-bagno":{S:{x:3.3,z:3.5,face:"s",label:"Interruttore bagno"}},"t02-camera":{D1:{x:5.4,z:3.5,face:"s",label:"Porta camera"},D2:{x:9,z:1.4,face:"w",label:"Comodino"}},"t03-corridoio":{D1:{x:0,z:4.25,face:"e",label:"Ingresso"},I:{x:4,z:5,face:"s",label:"Soggiorno"},D2:{x:9,z:4.25,face:"w",label:"Camera"}}},breaker:{x:0,z:6.5,face:"e",label:"Quadro"},wallsH:[[0,0,9],[3.5,0,1],[3.5,2,3.9],[3.5,4.8,6],[3.5,7,9],[5,0,1.6],[5,2.4,5],[5,6,9],[8,0,9]],wallsV:[[0,0,8],[9,0,8],[3,0,3.5],[5,0,3.5],[2.5,5,6],[2.5,7,8]],furniture:[{room:"camera",x:7.3,z:.3,w:1.5,d:2,h:.5,c:"#B9A58A"},{room:"camera",x:8.5,z:1.1,w:.4,d:.5,h:.5,c:"#9C8666"},{room:"bagno",x:3.2,z:.2,w:1.6,d:.6,h:.45,c:"#E9EEF0"},{room:"bagno",x:4,z:2.4,w:.9,d:.9,h:.15,c:"#CFE0E8"},{room:"soggiorno",x:3.5,z:6.7,w:2.4,d:.9,h:.5,c:"#8A94A3"},{room:"soggiorno",x:6.3,z:5.8,w:1.4,d:1,h:.4,c:"#B9A58A"},{room:"cucina",x:.2,z:.2,w:2.6,d:.6,h:.9,c:"#D8D2C4"}]},Rb=["L\u2019interruttore del bagno sta sul filo di fase, tra il quadro e la lampada.","Il neutro va diretto alla lampada.","Si cabla come nel livello dell\u2019interruttore."],Cb=["Due deviatori comandano la stessa lampada: porta e comodino.","I due fili di collegamento vanno 1 con 1 e 2 con 2.","La fase entra nel comune del primo; il comune del secondo va alla lampada."],Pb=["Tre punti di comando: ingresso, soggiorno e camera.","L\u2019invertitore sta in mezzo ai due fili di collegamento tra i deviatori.","Ogni comando cambia lo stato della luce."],pu=(r,e,t)=>({type:"spiegazione",title:r,paras:[e,t]}),NS={"t01-bagno":{support:"passi",lesson:{pages:[pu("Il bagno","Un punto luce con un interruttore vicino alla porta. Lo hai gi\xE0 fatto: qui lo ritrovi dentro una casa vera.","Se ti serve, ripassa la lezione del punto luce interrotto dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["S.a"],color:"marrone",short:"1 Fase",title:"Porta la fase all\u2019interruttore",text:"Dalla FASE del quadro al morsetto 1 dell\u2019interruttore."},{kind:"wire",from:"S.b",to:["L.A"],color:"marrone",short:"2 Lampada",title:"Dall\u2019interruttore alla lampada",text:"Dal morsetto 2 dell\u2019interruttore a un morsetto della lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"3 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"4 Levetta",title:"Dai corrente",text:"Tocca la levetta del quadro, poi prova l\u2019interruttore."},{kind:"verify",short:"5 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:Rb},"t02-camera":{support:"passi",lesson:{pages:[pu("La camera","Un punto luce che si comanda dalla porta e dal comodino, con due deviatori.","Se ti serve, ripassa la lezione del punto luce deviato dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel primo deviatore",text:"Dalla FASE al comune C del deviatore della porta."},{kind:"wire",from:"D1.1",to:["D2.1"],color:"nero",short:"2 Collegamento 1",title:"Primo filo di collegamento",text:"Dal morsetto 1 del primo deviatore al morsetto 1 del secondo."},{kind:"wire",from:"D1.2",to:["D2.2"],color:"grigio",short:"3 Collegamento 2",title:"Secondo filo di collegamento",text:"Dal morsetto 2 del primo deviatore al morsetto 2 del secondo."},{kind:"wire",from:"D2.C",to:["L.A"],color:"marrone",short:"4 Lampada",title:"Dal secondo deviatore alla lampada",text:"Dal comune C del deviatore del comodino alla lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"5 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"6 Levetta",title:"Dai corrente",text:"Tocca la levetta, poi prova i due deviatori."},{kind:"verify",short:"7 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:Cb},"t03-corridoio":{support:"obiettivo",lesson:{pages:[pu("Il corridoio","Un punto luce che si comanda da tre punti: ingresso, soggiorno e camera.","Se ti serve, ripassa la lezione del punto luce invertito dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel deviatore dell\u2019ingresso",text:"Dalla FASE al comune C del deviatore dell\u2019ingresso."},{kind:"verify",short:"2 Verifica",title:"Collega i tre punti di comando",text:"Collega il deviatore dell\u2019ingresso ai morsetti 1 e 2 dell\u2019invertitore, poi i morsetti 3 e 4 al deviatore della camera. Il comune C di quest\u2019ultimo va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica."}],summary:Pb}};function gu(){let r=[];return Vt.rooms.filter(e=>e.circuit).forEach(e=>{let t=Vt.controls[e.circuit]||{};Object.keys(t).forEach(n=>r.push({room:e.id,circuit:e.circuit,id:n,...t[n]}))}),r}var Pa=new O;function zn(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Pa.copy(e),Pa[n]=0,Pa.normalize();let c=.5*a/(a+o),h=1-Pa.angleTo(r)/l;return Math.sign(Pa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Lr=class extends ln{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new O,l=new O,c=new O(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new O,x=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=zn(g,l,"z","y",s,n),f[p+1]=1-zn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),f[p+0]=1-zn(g,l,"z","y",s,n),f[p+1]=1-zn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),f[p+0]=1-zn(g,l,"x","z",s,e),f[p+1]=zn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),f[p+0]=1-zn(g,l,"x","z",s,e),f[p+1]=1-zn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),f[p+0]=1-zn(g,l,"x","y",s,e),f[p+1]=1-zn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),f[p+0]=zn(g,l,"x","y",s,e),f[p+1]=1-zn(g,l,"y","x",s,t);break}}};var Hn=1.45,Da=2.75,Es="assets/trilocale/";function La(r,e){let t=document.createElement("canvas");return t.width=t.height=r,e(t.getContext("2d"),r),t}function bn(r,e=1,t=!0){let n=new Wi(r);return n.wrapS=n.wrapT=Jt,n.repeat.set(e,e),n.anisotropy=4,t&&(n.colorSpace=Lt),n}function Ua(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Na(r,e,t,n,i=.06){for(let s=0;s<e*40;s++){let a=Math.floor(n()*255);r.fillStyle=`rgba(${a},${a},${a},${i})`,r.fillRect(n()*e,n()*e,1+n()*t,1+n()*t)}}var Ib=()=>La(256,(r,e)=>{r.fillStyle="#808080",r.fillRect(0,0,e,e),Na(r,e,3,Ua(7),.12)});function Ia(r,e,t,n,i,s){return La(r,a=>{let o=Ua(i),l=r/e;a.fillStyle=s?"#202020":n,a.fillRect(0,0,r,r);for(let c=0;c<e;c++)for(let h=0;h<e;h++){if(s)a.fillStyle="#d0d0d0";else{let u=(o()-.5)*10,f=new Re(t).offsetHSL(0,0,u/255);a.fillStyle="#"+f.getHexString()}a.fillRect(c*l+2,h*l+2,l-4,l-4)}s||Na(a,r,2,o,.04)})}function Vd(r){return La(512,(e,t)=>{let n=Ua(11),i=16,s=12,a=t/i,o=t/s;e.fillStyle=r?"#000":"#5a2a1a",e.fillRect(0,0,t,t);for(let l=0;l<i;l++)for(let c=-1;c<=s;c++){let h=c*o+l%2*o/2,u=e.createLinearGradient(h,0,h+o,0);if(r)u.addColorStop(0,"#202020"),u.addColorStop(.5,"#f0f0f0"),u.addColorStop(1,"#202020");else{let f=new Re().setHSL(.04+(n()-.5)*.02,.55,.36+(n()-.5)*.08);u.addColorStop(0,"#"+f.clone().offsetHSL(0,0,-.12).getHexString()),u.addColorStop(.5,"#"+f.getHexString()),u.addColorStop(1,"#"+f.clone().offsetHSL(0,0,-.14).getHexString())}e.fillStyle=u,e.fillRect(h+1,l*a,o-2,a*.92)}r||Na(e,t,3,n,.08)})}function vu(r,e,t){return La(256,(n,i)=>{let s=Ua(t);n.fillStyle=r,n.fillRect(0,0,i,i),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(14,14,i-28,i-28),n.lineWidth=3,n.strokeRect(32,32,i-64,i-64);for(let a=0;a<6;a++)n.beginPath(),n.arc(i/2,i/2,20+a*14,0,Math.PI*2),n.stroke();Na(n,i,2,s,.1)})}var Kl=(r,e)=>La(128,(t,n)=>{t.fillStyle=r,t.fillRect(0,0,n,n);for(let i=0;i<n;i+=2)t.fillStyle=`rgba(0,0,0,${.04+i%4*.01})`,t.fillRect(i,0,1,n),t.fillRect(0,i,n,1);Na(t,n,1,Ua(e),.05)});function Wd(r){let e={},t=bn(Ib(),3,!1);e.wall=new Ae({color:15657182,roughness:.92,bumpMap:t,bumpScale:.6}),e.wallCut=new Ae({color:4212302,roughness:.8}),e.outside=new Ae({color:14865080,roughness:.95,bumpMap:t,bumpScale:1}),e.parquet=new Ae({color:11831903,roughness:.55});let n=new br,i=(s,a,o)=>n.load(Es+s,l=>{l.wrapS=l.wrapT=Jt,l.anisotropy=8,a&&(l.colorSpace=Lt),o(l),r()},void 0,()=>{});return i("parquet.webp",!0,s=>{s.repeat.set(1,1),e.parquet.map=s,e.parquet.color.set(16777215),e.parquet.needsUpdate=!0}),i("parquet-ruvido.webp",!1,s=>{e.parquet.roughnessMap=s,e.parquet.roughness=1,e.parquet.needsUpdate=!0}),i("parquet-rilievo.webp",!1,s=>{e.parquet.bumpMap=s,e.parquet.bumpScale=.4,e.parquet.needsUpdate=!0}),e.tiles=new Ae({map:bn(Ia(512,6,"#d9d6cf","#9c978d",3),1),bumpMap:bn(Ia(512,6,0,0,3,!0),1,!1),bumpScale:.8,roughness:.35}),e.kitchenFloor=new Ae({map:bn(Ia(512,4,"#8f8a82","#5d5953",5),1),bumpMap:bn(Ia(512,4,0,0,5,!0),1,!1),bumpScale:.8,roughness:.6}),e.grass=new Ae({color:6257221,roughness:1}),i("prato.webp",!0,s=>{s.repeat.set(10,10),e.grass.map=s,e.grass.color.set(12108968),e.grass.needsUpdate=!0}),e.paving=new Ae({map:bn(Ia(256,4,"#b7b1a6","#8a857c",9),1),roughness:.9}),e.roof=new Ae({map:bn(Vd(!1),1),bumpMap:bn(Vd(!0),1,!1),bumpScale:2,roughness:.75,transparent:!0,opacity:1}),e.fascia=new Ae({color:7031347,roughness:.7,transparent:!0,opacity:1}),e.wood=new Ae({color:9068348,roughness:.5}),e.woodLight=new Ae({color:14073754,roughness:.55}),e.door=new Ae({color:15921128,roughness:.45}),e.white=new Ae({color:16052974,roughness:.3}),e.ceramic=new cn({color:16777215,roughness:.12,clearcoat:1,clearcoatRoughness:.05}),e.steel=new Ae({color:13159632,roughness:.28,metalness:1}),e.black=new Ae({color:1382170,roughness:.15,metalness:.2}),e.stone=new Ae({color:3815478,roughness:.25}),e.cabinet=new Ae({color:6254442,roughness:.45}),e.water=new Ae({color:12573152,roughness:.05,metalness:.1,transparent:!0,opacity:.6}),e.mirror=new Ae({color:14673642,roughness:.02,metalness:1}),e.glass=new Ae({color:10466500,roughness:.05,metalness:.6,emissive:0}),e.frame=new Ae({color:16184818,roughness:.4}),e.duvet=new Ae({map:bn(Kl("#e9e4da",2),4),roughness:.95}),e.blanket=new Ae({map:bn(Kl("#7b8f86",3),4),roughness:.95}),e.pillow=new Ae({map:bn(Kl("#f5f2ec",4),2),roughness:.95}),e.rugLiving=new Ae({map:bn(vu("#a65c46","#e8d5b5",21)),roughness:1}),e.rugBed=new Ae({map:bn(vu("#d9d2c3","#8a8f86",22)),roughness:1}),e.runner=new Ae({map:bn(vu("#3e4a5c","#c9b48a",23)),roughness:1}),e.towel=new Ae({map:bn(Kl("#7fa6b5",5),3),roughness:1}),e.screen=new Ae({color:724240,roughness:.05,metalness:.5}),e.cord=new Ae({color:2236962,roughness:.6}),e.plate=new Ae({color:16513782,roughness:.3}),e.rocker=new Ae({color:15329249,roughness:.25}),e.panel=new Ae({color:15855852,roughness:.35}),e.panelDoor=new Ae({color:3819090,roughness:.1,transparent:!0,opacity:.55}),e.book=[10238766,3103354,13939804,5204806,7228018].map(s=>new Ae({color:s,roughness:.8})),e}var Xd=r=>(r.castShadow=!0,r.receiveShadow=!0,r);function Ke(r,e,t,n,i,s,a,o,l=.02){let c=Xd(new Ze(new Lr(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e));return c.position.set(t+s/2,n+a/2,i+o/2),r.add(c),c}function Li(r,e,t,n,i,s,a=.002,o){let l=new yn(i,s);if(o){let h=l.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*i/o,h.getY(u)*s/o)}let c=new Ze(l,e);return c.rotation.x=-Math.PI/2,c.position.set(t+i/2,a,n+s/2),c.receiveShadow=!0,r.add(c),c}function Jl(r,e,t,n,i,s,a,o=24,l){let c=Xd(new Ze(new Pn(l===void 0?s:l,s,a,o),e));return c.position.set(t,n+a/2,i),r.add(c),c}function Qi(r,e,t,n,i){let s=new Qe;Ke(s,e.wood,-.21,.44,-.21,.42,.04,.42,.01),[[-.19,-.19],[.16,-.19],[-.19,.16],[.16,.16]].forEach(([a,o])=>Ke(s,e.wood,a,0,o,.03,.44,.03,.005)),Ke(s,e.wood,-.21,.48,.17,.42,.42,.03,.01),s.position.set(t,0,n),s.rotation.y=i,r.add(s)}function qd(r,e){Ke(r,e.cabinet,.7,0,.05,2.25,.86,.6,.01),Ke(r,e.stone,.68,.86,.04,2.29,.04,.63,.008),Ke(r,e.steel,1.15,.89,.15,.5,.02,.38,.01),Ke(r,e.black,2.05,.9,.12,.6,.01,.48,.005),[[2.2,.24],[2.5,.24],[2.2,.48],[2.5,.48]].forEach(([i,s])=>Jl(r,e.steel,i,.905,s,.07,.006,24)),Ke(r,e.steel,.05,0,.05,.62,1.4,.64,.02),Ke(r,e.woodLight,.9,.72,1.75,1.3,.04,.8,.01),[[.95,1.8],[2.13,1.8],[.95,2.48],[2.13,2.48]].forEach(([i,s])=>Ke(r,e.woodLight,i,0,s,.05,.72,.05,.01)),Qi(r,e,1.25,1.45,0),Qi(r,e,1.85,1.45,0),Qi(r,e,1.25,2.9,Math.PI),Qi(r,e,1.85,2.9,Math.PI),Jl(r,e.white,1.55,.76,2.15,.12,.05,24,.14);let t=Ke(r,e.ceramic,3.08,0,.06,1.75,.55,.78,.08);t.userData.keep=!0,Ke(r,e.water,3.18,.4,.15,1.55,.02,.6,.06),Ke(r,e.cabinet,3.06,0,1.55,.5,.82,.8,.01),Ke(r,e.ceramic,3.05,.82,1.6,.48,.1,.7,.04),Ke(r,e.mirror,3.03,1,1.65,.02,.42,.6,.005);let n=new Qe;Ke(n,e.ceramic,-.18,0,-.17,.36,.4,.34,.12),Ke(n,e.ceramic,-.2,.38,-.2,.4,.04,.5,.15),Ke(n,e.ceramic,.16,.38,-.2,.14,.42,.4,.04),n.position.set(4.68,0,2.4),n.rotation.y=-Math.PI/2,r.add(n),Ke(r,e.towel,4.93,1,1.3,.04,.5,.4,.02),Li(r,e.towel,3.5,2.6,.7,.5,.012),Li(r,e.rugBed,6.4,.6,2.4,2.3,.006),Ke(r,e.wood,6.95,0,.95,1.95,.32,1.65,.03),Ke(r,e.wood,8.85,0,.92,.08,1.05,1.71,.03),Ke(r,e.duvet,6.98,.32,.98,1.85,.2,1.59,.08),Ke(r,e.blanket,6.95,.42,.97,.6,.12,1.61,.06),Ke(r,e.pillow,8.35,.5,1.08,.42,.14,.66,.07),Ke(r,e.pillow,8.35,.5,1.82,.42,.14,.66,.07),Ke(r,e.wood,8.45,0,.35,.48,.5,.45,.02),Ke(r,e.wood,8.45,0,2.72,.48,.5,.45,.02),Ke(r,e.woodLight,5.06,0,.12,.62,1.4,1.9,.02),Ke(r,e.cabinet,5.1,0,2.6,.45,.75,.7,.02),Li(r,e.runner,2.2,3.95,4.6,.75,.006),Ke(r,e.wood,7.6,0,3.58,1,.8,.32,.02),e.book.forEach((i,s)=>Ke(r,i,7.7+s*.07,.8,3.62,.06,.22+s%3*.03,.2,.004)),Ke(r,e.woodLight,1.8,0,7.35,.6,.9,.55,.02),Jl(r,e.wood,2.2,0,5.4,.18,.02,24),Jl(r,e.wood,2.2,0,5.4,.02,1.4,12),Li(r,e.rugLiving,.5,7,.9,.6,.006),Li(r,e.rugLiving,4.4,5.8,2.8,1.9,.006),Ke(r,e.wood,5.2,0,6.35,1.2,.38,.65,.02),Ke(r,e.black,6.45,0,5.1,1.9,.45,.42,.01),Ke(r,e.screen,6.85,.45,5.18,1.1,.66,.05,.005),Ke(r,e.woodLight,8.5,0,5.05,.45,1.4,1.3,.02);for(let i=0;i<3;i++)e.book.forEach((s,a)=>Ke(r,s,8.55,.15+i*.45,5.15+a*.2,.3,.26+a%2*.04,.16,.004));Ke(r,e.wood,2.85,.74,5.45,1.4,.04,.85,.01),[[2.9,5.5],[4.18,5.5],[2.9,6.23],[4.18,6.23]].forEach(([i,s])=>Ke(r,e.wood,i,0,s,.05,.74,.05,.01)),Qi(r,e,3.2,5.2,0),Qi(r,e,3.9,5.2,0),Qi(r,e,3.2,6.6,Math.PI),Qi(r,e,3.9,6.6,Math.PI)}var jd=[{file:"divano.glb",x:5.8,z:7.3,rot:Math.PI,scale:1,stand:[4.75,6.85,2.15,.85]},{file:"poltrona.glb",x:7.6,z:6.7,rot:-Math.PI/2-.4,scale:1,stand:[7.25,6.35,.75,.75]},{file:"pianta.glb",x:8.55,z:7.55,rot:.6,scale:1.1,stand:null}];function Yd(r,e,t){let[n,i,s,a]=t,o=new Qe;return Ke(o,e.blanket,n,0,i,s,.45,a,.08),Ke(o,e.blanket,n,.45,i+a-.2,s,.4,.2,.08),r.add(o),o}function Zd(r,e){[["h",3.5,1,2,-1],["h",3.5,3.9,4.8,-1],["h",3.5,6,7,-1],["h",5,1.6,2.4,1],["h",5,5,6,1],["v",2.5,6,7,-1]].forEach(([n,i,s,a,o])=>{let l=a-s-.04,c=new Qe;Ke(c,e.door,0,0,-.02,l,Hn,.04,.01);let h=new Ze(new Dn(.025,12,8),e.steel);h.position.set(l-.07,1,.04),c.add(h),n==="h"?(c.position.set(s+.02,0,i),c.rotation.y=o*1.45):(c.position.set(i,0,s+.02),c.rotation.y=-Math.PI/2+o*1.45),r.add(c)})}var Db=[["n",1,2.1,"cucina"],["n",3.6,4.4,"bagno"],["n",6.2,7.6,"camera"],["s",4.4,6.6,"soggiorno"],["s",7,8.4,"soggiorno"],["e",6,7.2,"soggiorno"],["w",1.2,2.4,"cucina"],["w",3.9,4.6,"corridoio"]];function Kd(r,e,t,n){let i=[];function a(l,c,h,u){let f=new Qe;Ke(f,t.frame,-l/2,c,-.02,l,h,.04,.005);let d=new Ze(new yn(l-.12,h-.12),u);return d.position.set(0,c+h/2,.022),f.add(d),Ke(f,t.frame,-.02,c+.06,0,.04,h-.12,.03,.004),f}let o={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};return Db.forEach(([l,c,h,u])=>{let f=t.glass.clone(),[d,g]=o[l],x=h-c,m=(c+h)/2,p=l==="n"||l==="s"?[m,l==="n"?0:n.d]:[l==="w"?0:n.w,m],w=a(x,.9,1.35,f);w.position.set(p[0]+d*(.12/2+.02),0,p[1]+g*(.12/2+.02)),w.rotation.y=Math.atan2(d,g),e.add(w);let y=a(x,.9,Hn-.9,f);y.position.set(p[0]-d*(.12/2+.004),0,p[1]-g*(.12/2+.004)),y.rotation.y=Math.atan2(-d,-g),r.add(y),i.push({room:u,glass:f})}),i}function Jd(r,e){let s=e.w+.45,a=-.45,o=e.d+.45,l=(o-a)/2,c=(a+o)/2,h=[-.45+l,2.3,c],u=[s-l,2.3,c],f=[-.45,0,a],d=[s,0,a],g=[s,0,o],x=[-.45,0,o],m=[],p=[],w=Math.hypot(l,2.3);function y(N,E,M,L){[N,E,M].forEach(V=>{m.push(...V),L==="z"?p.push(V[0]/2.4,Math.abs(V[2]-c)/l*w/2.4):p.push(V[2]/2.4,Math.min(V[0]- -.45,s-V[0])/l*w/2.4)})}y(f,h,d,"z"),y(d,h,u,"z"),y(g,u,x,"z"),y(x,u,h,"z"),y(d,u,g,"x"),y(x,h,f,"x");let _=new Ft;_.setAttribute("position",new Ct(m,3)),_.setAttribute("uv",new Ct(p,2)),_.computeVertexNormals();let C=new Qe,I=new Ze(_,r.roof);I.castShadow=!0,I.material.side=Sn,C.add(I);let D=Ke(C,r.fascia,-.45,-.18,a,s- -.45,.18,.08,.01);return D.userData.roof=!0,Ke(C,r.fascia,-.45,-.18,o-.08,s- -.45,.18,.08,.01),Ke(C,r.fascia,-.45,-.18,a,.08,.18,o-a,.01),Ke(C,r.fascia,s-.08,-.18,a,.08,.18,o-a,.01),Ke(C,r.fascia,1.9,.6,1.4,.5,1.4,.5,.02),C.traverse(N=>{N.userData.roof=!0}),C}var Qd=1448998,$d=527122,Lb=2,Ub=1.1;function Nb(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var ep=r=>r*Math.PI/180,Ql=r=>r*r*(3-2*r);function xu(r,e){if(!Nb())return null;let t=!!e.night,n=t?$d:Qd,i=ql(r,e.lite),s;try{s=new vs({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}s.setPixelRatio(jl(i)),s.setClearColor(n),s.toneMapping=Xi,s.toneMappingExposure=t?1.3:.95,s.shadowMap.enabled=!0,s.shadowMap.type=cs,s.domElement.className="house3d",s.domElement.setAttribute("role","img"),r.appendChild(s.domElement);let a=document.createElement("div");a.className="hlabels",r.appendChild(a);let o=!0,l=0,c=!1,h=new Set,u=()=>{o=!0,Oe()},f=!0,d=()=>{f=!0},g=new dr;g.background=new Re(n),g.fog=new js(n,26,60);let x=Wd(u),m=new yr(13490410,7035464,t?.06:.9);g.add(m);let p=new Zi(s),w=!1,y=t?1:0;new ys().load(Es+"ambiente.exr",j=>{c||(g.environment=p.fromEquirectangular(j).texture,w=!0,se(),j.dispose(),p.dispose(),u())},void 0,()=>{});let _=new Ti(t?9415142:16752486,t?.22:1);_.position.set(-9,6,12),_.target.position.set(4.5,0,4),_.castShadow=!0,_.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(_.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40}),_.shadow.bias=-4e-4,_.shadow.normalBias=.02,_.shadow.radius=5,_.shadow.autoUpdate=!1,g.add(_,_.target);let C=new Bt(38,1,.1,120),I=Vt.size.w/2,D=Vt.size.d/2,N={tx:I,tz:D+.3,yaw:0,pitch:58,dist:17.5,ty:.6},E={...N},M=new Qe;g.add(M),Li(M,x.grass,-30,-30,69,68,-.02),Li(M,x.paving,-1,-1,Vt.size.w+2,Vt.size.d+2,-.01,1);let L={},V=[];Vt.rooms.forEach(j=>{let fe=j.id==="bagno"?x.tiles:j.id==="cucina"?x.kitchenFloor:x.parquet,ye=j.id==="bagno"?1.8:j.id==="cucina"?2.4:1.1,ke=Li(M,fe,j.x,j.z,j.w,j.d,.001,ye);ke.userData={room:j.id},V.push(ke),L[j.id]={def:j,floor:ke,light:null,bulb:null,glow:null,level:0,target:0,wins:[]}});let W=.12;function K(j,fe,ye,ke){let Je=new Ze(new ln(ye,Hn,ke),x.wall);Je.position.set(j,Hn/2,fe),Je.castShadow=!0,Je.receiveShadow=!0,M.add(Je);let ft=new Ze(new ln(ye+.002,.01,ke+.002),x.wallCut);ft.position.set(j,Hn+.005,fe),M.add(ft)}Vt.wallsH.forEach(([j,fe,ye])=>K((fe+ye)/2,j,ye-fe+W,W)),Vt.wallsV.forEach(([j,fe,ye])=>K(j,(fe+ye)/2,W,ye-fe+W));let ie=new Qe,z=Vt.size.w,ee=Vt.size.d,X=W/2+.006;[[z/2,-X,z+W+.02,.012],[z/2,ee+X,z+W+.02,.012],[-X,ee/2,.012,ee+W],[z+X,ee/2,.012,ee+W]].forEach(([j,fe,ye,ke])=>{let Je=new Ze(new ln(ye,Da,ke),x.outside);Je.position.set(j,Da/2,fe),Je.receiveShadow=!0,Je.castShadow=!0,ie.add(Je)}),Ke(ie,x.wood,.9,0,ee+X,1,2.2,.05,.01),M.add(ie),qd(M,x),Zd(M,x);let Q=Kd(M,ie,x,Vt.size).map(j=>({glass:j.glass,room:L[j.room]||null})),ve=new Re(16757596);function Me(){Q.forEach(j=>j.glass.emissive.copy(ve).multiplyScalar(Math.max(j.room?.9*j.room.level:0,.8*y)))}let Ne=new pn(16757596,0,7,1.6);Ne.position.set(1.4,2.5,ee+.7),M.add(Ne);let st=new Ol;st.setMeshoptDecoder(Ud),jd.forEach(j=>{let fe=j.stand?Yd(M,x,j.stand):null;fe&&(fe.userData.placeholder=!0),st.load(Es+j.file,ye=>{if(c)return;let ke=ye.scene;ke.traverse(ft=>{ft.isLight&&(ft.visible=!1),ft.isMesh&&(ft.castShadow=!0,ft.receiveShadow=!0)}),ke.scale.setScalar(j.scale),ke.rotation.y=j.rot,ke.position.set(j.x,0,j.z);let Je=()=>{c||(M.add(ke),fe&&M.remove(fe),d(),u())};(s.compileAsync?s.compileAsync(ke,C,g):Promise.resolve()).then(Je,Je)},void 0,()=>{})}),Vt.rooms.filter(j=>j.lamp).forEach(j=>{let fe=new Qe;fe.position.set(j.lamp[0],Lb,j.lamp[1]);let ye=new Ze(new Pn(.005,.005,.5,6),x.cord);ye.position.y=.36;let ke=new Ze(new Pn(.03,.05,.06,16),x.steel);ke.position.y=.12;let Je=new Ae({color:15921128,roughness:.35,emissive:16761466,emissiveIntensity:0}),ft=new Ze(new Dn(.11,24,16),Je);ft.castShadow=!1;let wt=new pn(16763272,0,10,2);wt.position.y=-.14,wt.castShadow=!i,wt.shadow.mapSize.set(512,512),wt.shadow.bias=-.002,wt.shadow.radius=4,wt.shadow.autoUpdate=!1,fe.add(ye,ke,ft,wt),M.add(fe),Object.assign(L[j.id],{light:wt,bulb:Je,shade:null,stale:!0})});let ne={},pe={n:[0,0,-1],s:[0,0,1],e:[1,0,0],w:[-1,0,0]},xe={n:Math.PI,s:0,e:Math.PI/2,w:-Math.PI/2},be=new rn({visible:!1});function Le(j,fe,ye,ke,Je,ft=1){let wt=new Qe,$n=Ke(wt,ke,-.09*ft,-.12*ft,-.015,.18*ft,.24*ft,.03,.012),wn=Ke(wt,x.rocker,-.055*ft,-.07*ft,0,.11*ft,.14*ft,.025,.01),er=pe[ye];wt.position.set(j+er[0]*(W/2+.015),Ub,fe+er[2]*(W/2+.015)),wt.rotation.y=xe[ye];let ei=new Ze(new Dn(.45,12,8),be);return[wt,$n,wn,ei].forEach(tr=>tr.userData=Je),wt.add(ei),V.push($n,wn,ei),M.add(wt),{group:wt,rocker:wn}}e.bare||gu().forEach(j=>{ne[j.circuit+"."+j.id]=Le(j.x,j.z,j.face,x.plate,{circuit:j.circuit,ctl:j.id})});let qe=Vt.breaker,Ce=new Qe,ct=Ke(Ce,x.panel,-.22,-.2,-.02,.44,.4,.08,.02),ht=Ke(Ce,x.panelDoor,-.18,-.15,.06,.36,.3,.012,.01);Ce.position.set(qe.x+pe[qe.face][0]*(W/2+.02),1.15,qe.z+pe[qe.face][2]*(W/2+.02)),Ce.rotation.y=xe[qe.face];let et=new Ze(new Dn(.55,12,8),be);Ce.add(et),[Ce,ct,ht,et].forEach(j=>j.userData={breaker:!0}),e.bare||(V.push(ct,ht,et),M.add(Ce));let k=Jd(x,Vt.size);k.position.y=Hn,g.add(k);let At=!0,tt=1;function oe(){d();let j=Hn+(Da-Hn)*Math.min(1,tt*1.4);ie.scale.y=j/Da,k.position.y=j+(1-tt)*3.2,k.visible=tt>.01,x.roof.opacity=x.fascia.opacity=Math.min(1,tt*1.6),x.roof.depthWrite=x.fascia.depthWrite=tt>.99,a.style.opacity=String(Math.max(0,1-tt*2))}let le=[];function Pe(j,fe,ye,ke,Je){let ft=document.createElement("div");return ft.className="hlabel "+(Je||""),ft.textContent=j,a.appendChild(ft),le.push({el:ft,v:new O(fe,ye,ke)}),ft}Vt.rooms.forEach(j=>Pe(j.name,j.x+j.w/2,.15,j.z+j.d/2+(j.id==="corridoio"?.45:.9),"room")),e.bare||(gu().forEach(j=>Pe(j.label,j.x+pe[j.face][0]*.4,Hn+.25,j.z+pe[j.face][2]*.4,"ctl")),Pe(qe.label,qe.x+.55,Hn+.25,qe.z,"ctl")),Zl(M,[ie]);let we=e.extend?e.extend({world:M,M:x,pick:V,rooms:L,addLabel:Pe,animate:(j,fe)=>ze(j,ye=>(d(),fe(ye))),redraw:u,moved:()=>{d(),u()},loop:j=>{h.add(j),Oe()},lite:i,FACE:pe,FACE_ROT:xe,T:W,WALL_H:Hn,camera:C,scene:g}):null,P=e.wires?Hd({add:j=>M.add(j),loop:j=>{h.add(j),Oe()},redraw:u,reduced:!!e.reduced}):null,S={sun:new Re(16752486),sunI:1,env:.16,hemi:.12,exp:.95,bg:new Re(Qd)},Y={sun:new Re(9415142),sunI:.34,env:.05,hemi:.045,exp:1.3,bg:new Re($d)};function se(){let j=y,fe=(ye,ke)=>ye+(ke-ye)*j;_.color.copy(S.sun).lerp(Y.sun,j),_.intensity=fe(S.sunI,Y.sunI),s.toneMappingExposure=fe(S.exp,Y.exp),g.background.copy(S.bg).lerp(Y.bg,j),g.fog.color.copy(g.background),s.setClearColor(g.background),w&&(g.environmentIntensity=fe(S.env,Y.env),m.intensity=fe(S.hemi,Y.hemi)),Ne.intensity=5*j,Me(),u()}let ue=Yl(s,g,C,{lite:i});function re(){let j=ep(E.pitch),fe=ep(E.yaw),ye=E.dist;C.position.set(E.tx+Math.sin(fe)*Math.cos(j)*ye,E.ty-.6+Math.sin(j)*ye,E.tz+Math.cos(fe)*Math.cos(j)*ye),C.lookAt(E.tx,E.ty,E.tz)}function Be(){let j=Math.max(1,r.clientWidth),fe=Math.max(1,r.clientHeight);s.setSize(j,fe,!1),s.domElement.style.width="100%",s.domElement.style.height="100%",ue.setSize(j,fe),C.aspect=j/fe,C.fov=j/fe<.9?52:38,C.updateProjectionMatrix(),u()}let Ee=typeof ResizeObserver<"u"?new ResizeObserver(Be):null;Ee&&Ee.observe(r);let He=new O;function je(){re(),_.shadow.needsUpdate=f,Object.values(L).forEach(ye=>{if(!ye.light)return;f&&(ye.stale=!0);let ke=ye.stale&&ye.level>.01;ye.light.shadow.needsUpdate=ke,ke&&(ye.stale=!1)}),f=!1,ue.render();let j=r.clientWidth,fe=r.clientHeight;le.forEach(ye=>{He.copy(ye.v).project(C),ye.el.style.display=He.z<1?"":"none",ye.el.style.transform=`translate(-50%,-50%) translate(${(He.x+1)/2*j}px,${(1-He.y)/2*fe}px)`})}let me=!1;(s.compileAsync?s.compileAsync(g,C):Promise.resolve()).catch(()=>{}).then(()=>{me=!0,u()});function Fe(j){l=0,!c&&me&&(ue.watch(j,h.size>0||!!Se),h.size&&(o=!0),h.forEach(fe=>{fe(j)||h.delete(fe)}),o&&(o=!1,je()),h.size&&Oe())}function Oe(){!l&&!c&&(l=requestAnimationFrame(Fe))}function ze(j,fe){let ye=performance.now(),ke=Je=>{let ft=Math.min(1,(Je-ye)/j);return fe(ft),ft<1};return h.add(ke),Oe(),ke}let Ue=e.reduced||e.noIntro,nt=null,Ve=!Ue,it={};function H(j,fe=650){if(Ve){it=j;return}let ye={...N,...j};if(C.aspect<.9&&ye.dist===N.dist&&(ye.dist*=1.22),nt&&h.delete(nt),e.reduced){Object.assign(E,ye),u();return}let ke={...E};nt=ze(fe,Je=>{let ft=Ql(Je);Object.keys(ye).forEach(wt=>E[wt]=ke[wt]+(ye[wt]-ke[wt])*ft)})}let J=null;function $(j,fe=1400){At=!!j,e.onRoof&&e.onRoof(At),J&&h.delete(J);let ye=tt,ke=At?1:0;if(e.reduced){tt=ke,oe(),u();return}J=ze(fe,Je=>{tt=ye+(ke-ye)*Ql(Je),oe()})}Ue?(tt=e.startRoof?1:0,At=!!e.startRoof,oe(),e.start&&Object.assign(E,e.start)):(Object.assign(E,{tx:I,tz:D,yaw:-28,pitch:30,dist:27}),oe(),setTimeout(()=>{c||(Ve=!1,H(it,2600),setTimeout(()=>{c||($(!1,1600),e.onRoof&&e.onRoof(!1))},700))},450));let he=new Ri,De=new Te,Se=null,rt=s.domElement;rt.style.touchAction="pan-y",rt.addEventListener("pointerdown",j=>{Se={x:j.clientX,y:j.clientY,yaw:E.yaw,pitch:E.pitch,moved:!1};try{rt.setPointerCapture(j.pointerId)}catch{}}),rt.addEventListener("pointermove",j=>{if(!Se)return;let fe=j.clientX-Se.x,ye=j.clientY-Se.y;Math.abs(fe)+Math.abs(ye)>6&&(Se.moved=!0),Se.moved&&(nt&&(h.delete(nt),nt=null),E.yaw=Math.max(-35,Math.min(35,Se.yaw-fe*.25)),E.pitch=Math.max(38,Math.min(75,Se.pitch+ye*.2)),u())}),rt.addEventListener("pointerup",j=>{let fe=Se;if(Se=null,!fe||fe.moved)return;if(At){$(!1),e.onRoof&&e.onRoof(!1);return}let ye=rt.getBoundingClientRect();De.set((j.clientX-ye.left)/ye.width*2-1,-((j.clientY-ye.top)/ye.height)*2+1),he.setFromCamera(De,C);let ke=he.intersectObjects(V,!1)[0];if(!ke)return;let Je=ke.object.userData||{};Je.ext?e.onPick&&e.onPick(Je):Je.breaker?e.onBreaker():Je.ctl?e.onControl(Je.circuit,Je.ctl):Je.room&&e.onRoom(Je.room)}),rt.addEventListener("wheel",j=>{j.ctrlKey&&(j.preventDefault(),E.dist=Math.max(9,Math.min(24,E.dist+j.deltaY*.01)),u())},{passive:!1}),rt.addEventListener("pointercancel",()=>{Se=null});let It=11;function zt(j,fe){j.level=fe,j.light&&(j.light.intensity=It*fe,j.bulb.emissiveIntensity=6*fe),Me()}function bt(j,fe){let ye=fe?1:0;if(j.target===ye)return;if(j.target=ye,e.reduced){zt(j,ye);return}let ke=j.level;j.anim&&h.delete(j.anim),j.anim=ze(fe?420:260,Je=>{let ft=fe&&Je<.5?Math.sin(Je*60)>.2?1:.35:1;zt(j,(ke+(ye-ke)*Ql(Je))*ft)})}return oe(),Be(),{update(j){we&&we.update&&we.update(j);let fe=[];Object.keys(L).forEach(ye=>{let ke=L[ye],Je=j.rooms[ye]||{},ft=!!Je.lit;bt(ke,ft),ft&&ke.def.name&&fe.push(ke.def.name);let wt=Vt.controls[ke.def.circuit]||{};Object.keys(wt).forEach($n=>{let wn=ne[ke.def.circuit+"."+$n];wn&&(wn.rocker.rotation.x=(Je.controls&&Je.controls[$n]?-1:1)*.25)})}),s.domElement.setAttribute("aria-label","Casa vista dall\u2019alto. Stanze con la luce accesa: "+(fe.length?fe.join(", "):"nessuna")),u()},focusRoom(j){let fe=L[j]&&L[j].def;if(fe){if(At&&!Ve&&$(!1),C.aspect<.9){H({tx:(I+fe.x+fe.w/2)/2,tz:(D+fe.z+fe.d/2)/2+.3,dist:19,pitch:62});return}H({tx:fe.x+fe.w/2,tz:fe.z+fe.d/2+.3,dist:12.5,yaw:0,pitch:60})}},overview(){H({})},project(j,fe,ye){let ke=new O(j,fe,ye).project(C);return{x:(ke.x+1)/2*r.clientWidth,y:(1-ke.y)/2*r.clientHeight,visible:ke.z<1&&ke.x>-1.05&&ke.x<1.05&&ke.y>-1.05&&ke.y<1.05}},wires:()=>P,setNight(j,fe=2e3){let ye=y,ke=j?1:0;if(e.reduced||fe<=1){y=ke,se();return}ze(fe,Je=>{y=ye+(ke-ye)*Ql(Je),se()})},look(j,fe){H(j,fe)},screenOf(j){let fe=V.find(ke=>ke.userData&&ke.userData.id===j);if(!fe)return null;fe.updateWorldMatrix(!0,!1);let ye=new O().setFromMatrixPosition(fe.matrixWorld).project(C);return{x:(ye.x+1)/2*r.clientWidth,y:(1-ye.y)/2*r.clientHeight,visible:ye.z<1}},setRoof(j,fe,ye){$(j,ye),j&&!fe&&H({yaw:-18,pitch:42,dist:23},1400)},roof(){return At},resize:Be,dispose(){c=!0,we&&we.dispose&&we.dispose(),l&&cancelAnimationFrame(l),Ee&&Ee.disconnect(),g.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(fe=>{Object.values(fe).forEach(ye=>ye&&ye.isTexture&&ye.dispose()),fe.dispose()})}),g.environment&&g.environment.dispose(),ue.dispose(),s.dispose(),s.forceContextLoss&&s.forceContextLoss(),s.domElement.remove(),a.remove()}}}typeof window<"u"&&(window.FaseNeutroScene={createScene:xu});function ws(r,e,t){let n=document.createElement("canvas");return n.width=r,n.height=e,t(n.getContext("2d"),r,e),n}function ec(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Fa(r,e=1,t=1,n=!0){let i=new Wi(r);return i.wrapS=i.wrapT=Jt,i.repeat.set(e,t),i.anisotropy=4,n&&(i.colorSpace=Lt),i}function tc(r,e,t,n,i,s,a){for(let o=0;o<n;o++){let l=Math.floor(s()*255);r.fillStyle=`rgba(${l},${l},${l},${a})`,r.fillRect(s()*e,s()*t,1+s()*i,1+s()*i)}}var Fb=()=>ws(512,512,(r,e,t)=>{let n=ec(31);r.fillStyle="#8a8a86",r.fillRect(0,0,e,t);for(let i=0;i<40;i++)r.fillStyle=`rgba(${90+n()*60},${90+n()*60},${86+n()*60},0.10)`,r.beginPath(),r.ellipse(n()*e,n()*t,30+n()*90,20+n()*60,n()*3,0,7),r.fill();tc(r,e,t,9e3,3,n,.18),r.strokeStyle="rgba(40,40,40,0.55)",r.lineWidth=3,r.beginPath(),r.moveTo(0,2),r.lineTo(e,2),r.moveTo(2,0),r.lineTo(2,t),r.stroke()}),Ob=()=>ws(256,256,(r,e,t)=>{let n=ec(32);r.fillStyle="#808080",r.fillRect(0,0,e,t),tc(r,e,t,6e3,3,n,.35)}),Bb=()=>ws(256,256,(r,e,t)=>{let n=ec(41);r.fillStyle="#1d1f22",r.fillRect(0,0,e,t);for(let i=0;i<8;i++)r.fillStyle="#2b2e32",r.fillRect(i*32+3,0,5,t),r.fillStyle="#121315",r.fillRect(i*32+9,0,3,t);tc(r,e,t,2500,2,n,.12)}),kb=()=>ws(256,256,(r,e,t)=>{let n=ec(51);r.fillStyle="#b98b57",r.fillRect(0,0,e,t);for(let i=0;i<t;i+=3)r.fillStyle=`rgba(80,50,20,${.04+i%6*.01})`,r.fillRect(0,i,e,1);tc(r,e,t,2500,2,n,.12),r.fillStyle="rgba(214,190,150,0.9)",r.fillRect(0,t/2-12,e,24)}),zb=()=>ws(256,64,(r,e,t)=>{r.fillStyle="#d9b01e",r.fillRect(0,0,e,t),r.fillStyle="#17181a";for(let n=-t;n<e+t;n+=48)r.beginPath(),r.moveTo(n,t),r.lineTo(n+24,t),r.lineTo(n+24+t,0),r.lineTo(n+t,0),r.fill()});function nc(){let r={};r.concrete=new Ae({map:Fa(Fb(),1,1),bumpMap:Fa(Ob(),6,6,!1),bumpScale:.6,roughness:.88}),r.wall=new Ae({color:13355199,roughness:.95}),r.wallBase=new Ae({color:5068640,roughness:.85});let e=Fa(Bb(),6,1);return r.rubber=new Ae({map:e,roughness:.92}),r.beltTex=e,r.cardboard=new Ae({map:Fa(kb(),1,1),roughness:.85}),r.hazard=new Ae({map:Fa(zb(),1,1),roughness:.6}),r.steel=new Ae({color:12830667,roughness:.3,metalness:1}),r.steelDark=new Ae({color:7172984,roughness:.4,metalness:.9}),r.frame=new Ae({color:4086390,roughness:.5,metalness:.3}),r.yellow=new Ae({color:14923295,roughness:.45}),r.red=new Ae({color:12854813,roughness:.3}),r.green=new Ae({color:2068293,roughness:.3}),r.motor=new Ae({color:2912896,roughness:.42,metalness:.35,emissive:16734751,emissiveIntensity:0}),r.cabinet=new Ae({color:13883096,roughness:.5,metalness:.2}),r.cabinetIn=new Ae({color:15329506,roughness:.7}),r.din=new Ae({color:11449272,roughness:.35,metalness:1}),r.modWhite=new Ae({color:15329766,roughness:.35}),r.modGrey=new Ae({color:9344155,roughness:.4}),r.modDark=new Ae({color:2303530,roughness:.35}),r.modBlue=new Ae({color:2973594,roughness:.4}),r.lever=new Ae({color:1382170,roughness:.3}),r.glassDoor=new Ae({color:3819090,roughness:.08,transparent:!0,opacity:.35}),r.stripe=new Ae({color:16742938,roughness:.4}),r.windowGlow=new Ae({color:12375022,emissive:10274032,emissiveIntensity:.9,roughness:.2}),r}function $l(r,e=.012,t="sphere"){let n=new Ae({color:new Re(r).multiplyScalar(.25),emissive:r,emissiveIntensity:0,roughness:.3}),i=t==="box"?new Lr(e*2,e,e,1,e*.3):new Dn(e,14,10);return{mesh:new Ze(i,n),mat:n,set(a,o=3){n.emissiveIntensity=a?o:0}}}function lt(r,e,t,n,i,s,a,o,l=.01){let c=new Ze(new Lr(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e);return c.position.set(t,n,i),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}function Wt(r,e,t,n,i,s,a,o="y",l=28,c){let h=new Ze(new Pn(c===void 0?s:c,s,a,l),e);return h.position.set(t,n,i),o==="x"&&(h.rotation.z=Math.PI/2),o==="z"&&(h.rotation.x=Math.PI/2),h.castShadow=!0,h.receiveShadow=!0,r.add(h),h}function $i(r,e,t,n,i,s,a,o={}){let c=Math.max(24,Math.round(256*a/s)),h=ws(256,c,(d,g,x)=>{d.clearRect(0,0,g,x),d.fillStyle=o.bg||"rgba(255,255,255,0)",d.fillRect(0,0,g,x),d.fillStyle=o.fg||"#2a2d31",d.font=`600 ${Math.round(x*(o.size||.62))}px system-ui, sans-serif`,d.textAlign="center",d.textBaseline="middle",d.fillText(e,g/2,x/2+1,g-8)}),u=new Wi(h);u.colorSpace=Lt;let f=new Ze(new yn(s,a),new rn({map:u,transparent:!0,color:o.dim||14540253}));return f.position.set(t,n,i),r.add(f),f}function Hb(r,e,t){let n=new Qe,i=t.w||.036,s=t.h||.09,a=.05,o=lt(n,t.kind==="mp"?e.modDark:e.modWhite,0,0,0,i,s,a,.004),l=lt(n,(t.kind==="mp",e.modGrey),0,0,a/2+.002,i*.86,s*.9,.008,.003),c=new Qe;c.position.set(0,s*.04,a/2+.01);let h=lt(c,e.lever,0,0,.012,i*.52,s*.3,.02,.004);h.userData={id:t.id,kind:"toggle",...t.data||{}},n.add(c);let u=$l(16747034,.007,"box");u.mesh.position.set(0,s*.36,a/2+.012),n.add(u.mesh);let f=$l(3789930,.006);f.mesh.position.set(i*.22,-s*.34,a/2+.012),n.add(f.mesh);let d=null;t.kind==="rcd"&&(d=Wt(n,e.modBlue,-i*.18,-s*.3,a/2+.012,.006,.01,"z",14),d.userData={id:t.id+".test",kind:"test",part:t.id}),n.position.set(t.x,t.y,0),r.add(n);let g=[h,l,o].concat(d?[d]:[]);return g.forEach(x=>{x!==h&&x!==d&&(x.userData={id:t.id,kind:"toggle",...t.data||{}})}),{group:n,picks:g,set(x){c.rotation.x=x.tripped?0:x.on?-.5:.5,c.position.y=x.tripped?0:x.on?s*.1:-s*.1,u.set(!!x.tripped,2.5),f.set(!!x.live,3.2)}}}function tp(r,e=1){let t=new Qe,n=[{id:"D",kind:"rcd",w:.072,label:"Diff."},{id:"M1",kind:"mcb",w:.036,label:"Luce"},{id:"M2",kind:"mcb",w:.036,label:"Prese"},{id:"M3",kind:"mcb",w:.036,label:"Cucina"}],i=.006,s=n.reduce((f,d)=>f+d.w,0)+i*(n.length-1)+.09,a=.27;lt(t,r.cabinet,0,0,-.012,s+.04,a+.04,.045,.008),lt(t,r.cabinetIn,0,0,.011,s,a,.005,.004),lt(t,r.din,0,0,.016,s-.02,.018,.006,.002);let o=[],l={},c=-s/2+.045;n.forEach(f=>{let d=Hb(t,r,{id:f.id,kind:f.kind,w:f.w,x:c+f.w/2,y:0});d.group.position.z=.04,l[f.id]=d,d.picks.forEach(g=>o.push(g)),$i(t,f.label,c+f.w/2,-.085,.066,f.w+.004,.022,{size:.4}),c+=f.w+i});let h=new Qe;h.position.set(-s/2-.02,0,.115);let u=lt(h,r.glassDoor,s/2+.02,0,0,s+.04,a+.04,.006,.004);return u.renderOrder=2,u.castShadow=!1,t.add(h),t.scale.setScalar(e),{group:t,picks:o,width:s*e,door(f){h.rotation.y=-1.95*f},set(f){l.D.set({on:f.rcd.on,tripped:f.rcd.tripped,live:f.rcd.on}),l.M1.set({on:f.lines.luce.on,tripped:f.lines.luce.tripped,live:f.lines.luce.on&&f.rcd.on}),l.M2.set({on:f.lines.prese.on,tripped:f.lines.prese.tripped,live:f.lines.prese.on&&f.rcd.on}),l.M3.set({on:f.lines.cucina.on,tripped:f.lines.cucina.tripped,live:f.lines.cucina.on&&f.rcd.on})}}}function np(r,e){let t=new Qe,n=e.x1-e.x0,i=e.w||.7,s=e.h||.8,a=(e.x0+e.x1)/2;[-1,1].forEach(c=>{lt(t,r.frame,a,s-.1,c*(i/2+.03),n+.1,.12,.05,.01),lt(t,r.steelDark,a,s-.02,c*(i/2+.03),n+.1,.03,.07,.005);let h=Math.max(2,Math.round(n/1.5)+1);for(let u=0;u<h;u++)lt(t,r.frame,e.x0+n*u/(h-1),(s-.16)/2,c*(i/2+.03),.06,s-.16,.05,.008)});for(let c=0;c<3;c++)lt(t,r.frame,e.x0+.1+(n-.2)*c/2,.3,0,.04,.04,i+.06,.005);Wt(t,r.steel,e.x0,s-.07,0,.07,i+.02,"z"),Wt(t,r.steel,e.x1,s-.07,0,.07,i+.02,"z");let o=new Ze(new ln(n,.025,i-.02),r.rubber);o.position.set(a,s-.0125+0,0),o.receiveShadow=!0,o.castShadow=!0,t.add(o),r.beltTex.repeat.set(n*1.4,1);let l=0;return{group:t,belt:o,run(c,h){l=(l+c*h*1.4/1)%1,r.beltTex.offset.x=-l}}}function ip(r,e=.48,t=.34,n=.38){let i=new Qe;return lt(i,r.cardboard,0,t/2,0,e,t,n,.01),i}function rp(r){let e=new Qe,t=Wt(e,r.motor,0,0,0,.16,.42,"z",36);for(let s=0;s<9;s++)lt(e,r.motor,0,0,-.17+s*.043,.36,.014,.012,.003);Wt(e,r.steelDark,0,0,.26,.05,.1,"z"),lt(e,r.modDark,0,.19,-.02,.16,.07,.14,.01),lt(e,r.steelDark,0,-.17,0,.32,.03,.36,.005);let n=new Qe,i=Wt(n,r.steelDark,0,0,0,.14,.04,"z",32);for(let s=0;s<8;s++){let a=lt(n,r.steel,0,.09,0,.025,.07,.018,.003);a.rotation.z=s/8*Math.PI*2,a.position.set(Math.sin(a.rotation.z)*-.09,Math.cos(a.rotation.z)*.09,0)}return n.position.z=-.24,e.add(n),{group:e,set(s){r.motor.emissiveIntensity=1.4*s.heat},spin(s,a){n.rotation.z+=s*Math.PI*2*a},hum(s){e.position.y+=Math.sin(s/25)*6e-4},body:t,cap:i}}function sp(r,e=1.5){let t=new Qe;Wt(t,r.steelDark,0,.02,0,.09,.04,"y"),Wt(t,r.steel,0,e/2,0,.018,e,"y",14);let n=[["green",3073642],["yellow",16762394],["red",16726570]].map(([s,a],o)=>{let l=new Ae({color:new Re(a).multiplyScalar(.3),emissive:a,emissiveIntensity:0,roughness:.25,transparent:!0,opacity:.95}),c=Wt(t,l,0,e+.07*o,0,.055,.07,"y",24);return{name:s,mat:l,mesh:c}});Wt(t,r.modDark,0,e+.07*3+.01,0,.056,.02,"y",24);let i={};return n.forEach(s=>{let a=new pn(s.mat.emissive.getHex(),0,3.2,2);a.position.y=s.mesh.position.y,t.add(a),i[s.name]=a}),{group:t,set(s){n.forEach(a=>{let o=!!s[a.name];a.mat.emissiveIntensity=o?3.4:0,i[a.name].intensity=o?1.4:0})}}}function ap(r){let e=new Qe;Wt(e,r.steelDark,0,.02,0,.16,.04,"y"),Wt(e,r.steel,0,.55,0,.03,1.1,"y",14),lt(e,r.yellow,0,1.28,0,.3,.46,.12,.012);let t=(l,c,h,u,f,d,g)=>{let x=new Qe;x.position.set(h,u,.07);let m=Wt(x,r.modDark,0,0,0,f+.012,.014,"z",28),p=Wt(x,c,0,0,.012,f,.022,"z",28);return m.userData=p.userData={id:l,kind:d?"hold":"toggle",hold:!!d},e.add(x),$i(e,g,h,u-f-.035,.066,.14,.032,{fg:"#17181a"}),{grp:x,cap:p,ring:m}},n=t("SB1",r.green,-.075,1.4,.034,!0,"Marcia"),i=t("SB0",r.red,.075,1.4,.034,!0,"Arresto"),s=new Qe;s.position.set(0,1.2,.07),Wt(s,r.yellow,0,0,0,.056,.012,"z",32);let a=Wt(s,r.red,0,0,.026,.04,.036,"z",32,.032);a.userData={id:"SBE",kind:"toggle"},e.add(s),$i(e,"Emergenza",0,1.115,.066,.18,.032,{fg:"#17181a"});let o=[n.cap,n.ring,i.cap,i.ring,a];return{group:e,picks:o,set(l){n.cap.position.z=l.start?.004:.012,i.cap.position.z=l.stop?.004:.012,a.position.z=l.emergency?.008:.026}}}function op(r){let e=new Qe,t=1,n=1.2;lt(e,r.cabinet,0,0,-.04,t+.05,n+.05,.1,.012),lt(e,r.cabinetIn,0,0,.012,t,n,.01,.004),[.3,-.22].forEach(x=>lt(e,r.din,0,x,.022,t-.1,.022,.008,.002));let i=[],s=1.75,a=new Qe;a.position.set(-.3,.34,.03),a.scale.setScalar(s),lt(a,r.modDark,0,0,0,.1,.16,.08,.008);let o=new Qe;o.position.set(0,.02,.05);let l=lt(o,r.lever,0,0,.012,.045,.085,.028,.006);l.userData={id:"QM",kind:"toggle"};let c=Wt(a,r.yellow,0,.02,.043,.05,.006,"z",24);c.userData={id:"QM",kind:"toggle"},a.add(o),e.add(a),i.push(l,c),$i(e,"Salvamotore",-.3,.15,.075,.3,.05,{size:.5});let h=new Qe;h.position.set(0,.34,.03),h.scale.setScalar(s),lt(h,r.modGrey,0,0,0,.12,.17,.08,.008);let u=$l(3789930,.012,"box");u.mesh.scale.set(1.6,1,.5),u.mesh.position.set(0,.03,.044),h.add(u.mesh),e.add(h),$i(e,"Contattore",0,.15,.075,.3,.05,{size:.5});let f=new Qe;f.position.set(.3,.34,.03),f.scale.setScalar(s),lt(f,r.modBlue,0,0,0,.1,.17,.08,.008);let d=$l(16722458,.012,"box");d.mesh.scale.set(1.4,1,.5),d.mesh.position.set(0,.05,.044),f.add(d.mesh);let g=Wt(f,r.modWhite,0,-.045,.045,.02,.014,"z",18);g.userData={id:"FR.reset",kind:"reset",part:"FR"},e.add(f),i.push(g),$i(e,"Termico",.3,.15,.075,.3,.05,{size:.5});for(let x=0;x<8;x++)lt(e,x%2?r.modGrey:r.modWhite,-.35+x*.1,-.35,.03,.05,.09,.05,.004);return{group:e,picks:i,set(x){o.rotation.z=x.qm?0:.7,u.set(!!x.contactor,2.5),d.set(!!x.thermal.tripped,3.2)}}}var Ts={insieme:{tx:4.5,tz:4.3,yaw:0,pitch:58,dist:17.5},quadro:{tx:.15,tz:6.5,ty:1.2,yaw:90,pitch:6,dist:2.3},soggiorno:{tx:4.2,tz:6.6,yaw:0,pitch:55,dist:9},corridoio:{tx:4.5,tz:4.6,yaw:0,pitch:60,dist:10.5},cucina:{tx:1.5,tz:1.5,yaw:0,pitch:58,dist:9},ingresso:{tx:1.4,tz:6.2,yaw:32,pitch:50,dist:7.5},dispersione:{tx:3.2,tz:6,yaw:0,pitch:52,dist:10.5},esterno:{tx:4.5,tz:4.2,ty:.8,yaw:-24,pitch:22,dist:21},lontano:{tx:4.5,tz:4.2,ty:.8,yaw:-34,pitch:18,dist:30}},hi=1.47,bu=[.12,1.2,6.5],lp={luce:[bu,[.12,hi,6.5],[.12,hi,4.25],[.12,1.1,4.25],[.12,hi,4.25],[4.5,hi,4.25],[4.5,2,4.25]],prese:[bu,[.12,hi,6.5],[.12,hi,5],[6.15,hi,5],[6.15,.32,5.07],[6.15,.3,5.4]],cucina:[bu,[.12,hi,6.5],[.12,hi,.12],[2.35,hi,.12],[2.35,.3,.12]]},Gb={luce:["fase","neutro"],prese:["fase","neutro","terra"],cucina:["fase","neutro","terra"]},_u={};Object.entries(lp).forEach(([r,e])=>{_u[r]={};let t=r==="luce"?-.12:r==="cucina"?.12:0;Gb[r].forEach((n,i)=>{let s=t+(i-1)*.05;_u[r][n]=e.map(([a,o,l])=>[a+s,o,l+s])})});var Vb={luce:"lamp",prese:"socket",cucina:"oven"},Wb=2.5;function Xb(r,e){let{world:t,pick:n,addLabel:i,redraw:s,moved:a,FACE_ROT:o,loop:l,animate:c}=r,h=nc(),u=new Ri,f=new Te,d=new O,g=new Un(new O(0,1,0),0),x=new Qe;t.add(x);let m=Vt.breaker,p=tp(h,Wb);p.group.position.set(m.x+.06+.03,1.2,m.z),p.group.rotation.y=o.e,x.add(p.group),p.picks.forEach(X=>{X.userData={...X.userData,ext:!0},n.push(X)}),i("Quadro",m.x+.6,1.55,m.z,"ctl");let w=new Qe;w.position.set(.06+.015,1.1,4.25),w.rotation.y=o.e,w.scale.setScalar(1.6),lt(w,r.M.plate,0,0,0,.09,.12,.015,.006);let y=lt(w,r.M.rocker,0,0,.012,.055,.07,.016,.005),_=lt(w,r.M.plate,0,0,.004,.14,.18,.03,.006);_.visible=!1,_.userData=y.userData={id:"S",kind:"toggle",ext:!0},x.add(w),n.push(_,y),i("Interruttore",.5,1.45,4.25,"ctl");let C=new Qe;C.position.set(6.15,0,5.4),lt(C,h.modWhite,0,.3,0,.36,.56,.16,.02),lt(C,h.steelDark,0,.02,0,.3,.04,.2,.006);let I=new Ae({color:5974548,emissive:16734746,emissiveIntensity:0,roughness:.4});for(let X=0;X<3;X++){let Q=new Ze(new Pn(.012,.012,.28,10),I);Q.rotation.z=Math.PI/2,Q.position.set(0,.2+X*.1,.085),C.add(Q)}lt(C,h.steelDark,0,.3,.092,.31,.46,.006,.002).material=new Ae({color:2829874,roughness:.6,metalness:.8,wireframe:!0});let D=lt(C,h.modWhite,0,.3,0,.42,.62,.22,.02);D.visible=!1,D.userData={id:"G",kind:"toggle",ext:!0},x.add(C),n.push(D),lt(x,h.modWhite,6.15,.32,5.07,.09,.09,.02,.004);let N=new Ze(new Pn(.008,.008,.26,8),new Ae({color:1710618,roughness:.6}));N.rotation.x=Math.PI/2,N.position.set(6.15,.32,5.2),x.add(N),i("Stufetta",6.15,.95,5.4,"ctl");let E=$i(x,"12:00",2.35,.62,.66,.18,.05,{fg:"#47ff8a",dim:2236962});lt(x,h.modDark,2.35,.55,.655,.5,.36,.01,.004),E.position.z=.665,i("Forno",2.35,1.1,.7,"ctl");let M=r.M.screen;i("TV",7.4,1.35,5.15,"ctl");let L=new pn(7252200,0,3.2,2);L.position.set(7.4,.8,5.45);let V=new pn(16738858,0,2.6,2);V.position.set(6.15,.35,5.6),x.add(L,V);let W=kd({add:X=>x.add(X),loop:l,animate:c,redraw:s,reduced:!!e.reduced},_u),K=zd({add:X=>x.add(X),animate:c,redraw:s},[6.15,.35,5.45],r.lite?20:40),ie=i("Dispersione verso terra \xB7 300 mA",6.15,1.25,5.5,"leak");ie.classList.add("off");let z={luce:!1,prese:!1,cucina:!1,loads:{},rcd:!1,plugged:!0},ee=new Mr(16773590,0,0,.11,.55,2);return ee.target.position.set(4.5,0,4.3),x.add(ee,ee.target),{update(X){let Q=X&&X.prova;if(!Q)return;p.set(Q),y.rotation.x=(Q.switchOn?-1:1)*.25;let ve=Q.socket&&Q.heaterPlugged;I.emissiveIntensity=ve?3.5:0,Q.heaterPlugged!==z.plugged&&(z.plugged=Q.heaterPlugged,!Q.heaterPlugged&&!e.reduced?c(320,Me=>{N.position.z=5.2+Me*.16,Me>=1&&(N.visible=!1,a())}):(N.position.z=5.2,N.visible=Q.heaterPlugged,a())),M.emissive=new Re(Q.socket?2907286:0),M.emissiveIntensity=Q.socket?1.1:0,L.intensity=Q.socket?2.2:0,V.intensity=ve?2.6:0,E.material.color.setHex(Q.oven?16777215:1842204),z.rcd&&!Q.rcd.on&&W.cut(),z.rcd=Q.rcd.on,Object.keys(lp).forEach(Me=>{let Ne=!!(Q.supply&&Q.rcd.on&&Q.lines[Me].on),st=!!Q[Vb[Me]],ne=Me==="prese"&&Q.leak?Q.leak==="isolated"?1:.14:0;W.setLine(Me,{live:Ne,flow:Ne&&st?z.loads[Me]?!0:"again":!1,earth:ne}),z.loads[Me]=Ne&&st}),Q.leak==="isolated"?(K.play(1600),ie.classList.remove("off")):(K.stop(),ie.classList.add("off")),s()},wires:W,door(X){p.door(X),s()},windows(X){["cucina","soggiorno"].forEach(Q=>r.rooms[Q].wins.forEach(ve=>ve.emissive.setHex(16757596).multiplyScalar(X?1.2:0))),s()},torch(X){ee.intensity=X?900:0,s()},aim(X,Q){u.setFromCamera(f.set(X,Q),r.camera),u.ray.intersectPlane(g,d)&&(ee.target.position.copy(d),ee.position.copy(r.camera.position),ee.intensity>0&&s())},dispose(){}}}function cp(r,e){let t=null,n=xu(r,{night:!0,bare:!0,noIntro:!0,start:Ts.insieme,reduced:e.reduced,lite:e.lite,capture:e.capture,onBreaker(){},onControl(){},onRoom(){},onRoof(){},onPick:e.onTap,extend:i=>t=Xb(i,e)});return n?{update(i){n.update(i)},torch(i){t&&t.torch(i)},wires:()=>t&&t.wires,door(i){t&&t.door(i)},windows(i){t&&t.windows(i)},setRoof(i,s){n.setRoof(i,!0,s)},view:i=>({...Ts[i]||Ts.insieme}),aim(i,s){if(!t)return;let a=r.getBoundingClientRect();t.aim((i-a.left)/a.width*2-1,-((s-a.top)/a.height)*2+1)},look(i,s){let a=typeof i=="object"?i:{...Ts[i]||Ts.insieme};r.clientWidth<r.clientHeight*.9&&i==="quadro"&&(a.dist=1.5),n.look(a,s)},screenOf:n.screenOf,views:Object.keys(Ts),resize:n.resize,dispose:n.dispose}:null}function qb(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var hp=r=>r*Math.PI/180,jb=r=>r*r*(3-2*r);function up(r,e){if(!qb())return null;let t=ql(r,e.lite),n=e.bg===void 0?1448998:e.bg,i;try{i=new vs({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}i.setPixelRatio(jl(t)),i.setClearColor(n),i.toneMapping=Xi,i.toneMappingExposure=e.exposure||1,i.shadowMap.enabled=!0,i.shadowMap.type=cs,i.domElement.className="house3d",i.domElement.setAttribute("role","img"),r.appendChild(i.domElement);let s=document.createElement("div");s.className="hlabels",r.appendChild(s);let a=!0,o=0,l=!1,c=new Set,h=new Set,u=()=>{a=!0,Me()},f=!0,d=!0,g=0,x=()=>{f=!0,u()},m=new dr;m.background=new Re(n);let p=new Bt(38,1,.1,120),w=new Qe;m.add(w);let y=new yr(13490410,7035464,.9);m.add(y);let _=new Zi(i),C=.16;new ys().load(Es+"ambiente.exr",oe=>{if(l){oe.dispose(),_.dispose();return}m.environment=_.fromEquirectangular(oe).texture,m.environmentIntensity=C,y.intensity=.12,oe.dispose(),_.dispose(),u()},void 0,()=>{});let I=Yl(i,m,p,{lite:t,bloom:e.bloom===void 0?.45:e.bloom}),D={ty:.8,...e.view},N={...D},E=e.limits||{yaw:[-35,35],pitch:[12,75],dist:[3,30]};function M(){let oe=hp(N.pitch),le=hp(N.yaw),Pe=N.dist;p.position.set(N.tx+Math.sin(le)*Math.cos(oe)*Pe,N.ty+Math.sin(oe)*Pe,N.tz+Math.cos(le)*Math.cos(oe)*Pe),p.lookAt(N.tx,N.ty,N.tz)}function L(){let oe=Math.max(1,r.clientWidth),le=Math.max(1,r.clientHeight);i.setSize(oe,le,!1),i.domElement.style.width="100%",i.domElement.style.height="100%",I.setSize(oe,le),p.aspect=oe/le,p.fov=oe/le<.9?52:38,p.updateProjectionMatrix(),u()}let V=typeof ResizeObserver<"u"?new ResizeObserver(L):null;V&&V.observe(r);let W=[],K=new O;function ie(oe,le,Pe,we,P){let S=document.createElement("div");S.className="hlabel "+(P||""),S.textContent=oe,s.appendChild(S);let Y={el:S,v:new O(le,Pe,we)};return W.push(Y),Y}function z(){g++,f&&(d=!0);let oe=d&&(!h.size||g%3===0);w.traverse(le=>{!le.isLight||!le.castShadow||(le.shadow.autoUpdate=!1,le.shadow.needsUpdate=le.isPointLight?oe:f)}),oe&&(d=!1),f=!1}function ee(){M(),z(),I.render();let oe=r.clientWidth,le=r.clientHeight;W.forEach(Pe=>{K.copy(Pe.v).project(p),Pe.el.style.display=K.z<1?"":"none",Pe.el.style.transform=`translate(-50%,-50%) translate(${(K.x+1)/2*oe}px,${(1-K.y)/2*le}px)`})}let X=!1,Q=!1;function ve(oe){if(o=0,!l){if(!X){Q||(Q=!0,(i.compileAsync?i.compileAsync(m,p):Promise.resolve()).catch(()=>{}).then(()=>{X=!0,a=!0,Me()}));return}I.watch(oe,c.size>0||!!ct),d&&!h.size&&(a=!0),c.size&&(a=!0),c.forEach(le=>{le(oe)||c.delete(le)}),a&&(a=!1,ee()),c.size&&Me()}}function Me(){!o&&!l&&(o=requestAnimationFrame(ve))}function Ne(oe,le){let Pe=performance.now(),we=P=>{let S=Math.min(1,(P-Pe)/oe);return le(S),S<1};return c.add(we),Me(),we}function st(oe){let le=performance.now(),Pe=we=>{let P=Math.min(.1,(we-le)/1e3);return le=we,oe(we,P),!0};return c.add(Pe),h.add(Pe),Me(),()=>{c.delete(Pe),h.delete(Pe),u()}}let ne=null;function pe(oe,le=900){let Pe={...D,...oe};if(ne&&c.delete(ne),e.reduced){Object.assign(N,Pe),u();return}let we={...N};ne=Ne(le,P=>{let S=jb(P);Object.keys(Pe).forEach(Y=>N[Y]=we[Y]+(Pe[Y]-we[Y])*S)})}function xe(){pe({})}let be=new Ri,Le=new Te,qe=[],Ce=i.domElement;Ce.style.touchAction="pan-y";let ct=null,ht=null,et=null,k=oe=>{let le=Ce.getBoundingClientRect();Le.set((oe.clientX-le.left)/le.width*2-1,-((oe.clientY-le.top)/le.height)*2+1),be.setFromCamera(Le,p);let Pe=be.intersectObjects(qe,!1)[0];return Pe&&Pe.object.userData&&Pe.object.userData.id?Pe.object.userData:null};Ce.addEventListener("pointerdown",oe=>{if(!ht){ct={x:oe.clientX,y:oe.clientY,yaw:N.yaw,pitch:N.pitch,moved:!1,u:k(oe)};try{Ce.setPointerCapture(oe.pointerId)}catch{}ct.u&&ct.u.hold&&e.onPress&&(ht=ct.u,et=oe.pointerId,e.onPress(ht))}}),Ce.addEventListener("pointermove",oe=>{if(!ct||ht)return;let le=oe.clientX-ct.x,Pe=oe.clientY-ct.y;Math.abs(le)+Math.abs(Pe)>6&&(ct.moved=!0),ct.moved&&(ne&&(c.delete(ne),ne=null),N.yaw=Math.max(E.yaw[0],Math.min(E.yaw[1],ct.yaw-le*.25)),N.pitch=Math.max(E.pitch[0],Math.min(E.pitch[1],ct.pitch+Pe*.2)),u())});let At=oe=>{if(ht&&oe.pointerId!==et)return;let le=ct;if(ct=null,ht){let Pe=ht;ht=null,e.onRelease&&e.onRelease(Pe);return}!le||le.moved||!le.u||e.onTap&&e.onTap(le.u)};Ce.addEventListener("pointerup",At),Ce.addEventListener("pointercancel",oe=>{if(!(ht&&oe.pointerId!==et)&&(ct=null,ht)){let le=ht;ht=null,e.onRelease&&e.onRelease(le)}}),Ce.addEventListener("wheel",oe=>{oe.ctrlKey&&(oe.preventDefault(),N.dist=Math.max(E.dist[0],Math.min(E.dist[1],N.dist+oe.deltaY*.01)),u())},{passive:!1});function tt(oe){let le=qe.find(we=>we.userData&&we.userData.id===oe);if(!le)return null;le.updateWorldMatrix(!0,!1);let Pe=new O().setFromMatrixPosition(le.matrixWorld).project(p);return{x:(Pe.x+1)/2*r.clientWidth,y:(1-Pe.y)/2*r.clientHeight,visible:Pe.z<1}}return L(),{screenOf:tt,THREE_scene:m,world:w,camera:p,renderer:i,lite:t,pick:qe,view:N,home:D,setEnvIntensity(oe){C=oe,m.environment&&(m.environmentIntensity=oe)},add(oe){return w.add(oe),oe},label:ie,animate:Ne,loop:st,look:pe,reset:xe,redraw:u,moved:x,resize:L,finish(oe){Zl(w,oe),x()},dispose(){l=!0,o&&cancelAnimationFrame(o),V&&V.disconnect(),m.traverse(oe=>{oe.geometry&&oe.geometry.dispose(),oe.material&&(Array.isArray(oe.material)?oe.material:[oe.material]).forEach(le=>{Object.values(le).forEach(Pe=>Pe&&Pe.isTexture&&Pe.dispose()),le.dispose()})}),m.environment&&m.environment.dispose(),I.dispose(),i.dispose(),i.forceContextLoss&&i.forceContextLoss(),i.domElement.remove(),s.remove()}}}var En={x0:2.6,x1:8.6,z:3.4,h:.8,w:.7},yu=.9,ic=2.95,Oa={insieme:{tx:5.6,ty:.9,tz:3.4,yaw:18,pitch:28,dist:15},pulsantiera:{tx:6.4,ty:1.5,tz:5.5,yaw:8,pitch:8,dist:2.9},quadro:{tx:3.1,ty:1.45,tz:.4,yaw:8,pitch:6,dist:3.4},motore:{tx:8.6,ty:.85,tz:3.6,yaw:-30,pitch:18,dist:5.2}};function fp(r,e){let t=up(r,{bg:1316894,exposure:1.25,view:Oa.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[2.5,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:e.onTap,onPress:e.onPress,onRelease:e.onRelease});if(!t)return null;let{world:n,pick:i,lite:s}=t,a=nc();t.setEnvIntensity(.22);let o=new Ti(14674175,1.5);o.position.set(7,9,-6),o.target.position.set(5.5,0,3.5),o.castShadow=!0,o.shadow.mapSize.set(s?1024:2048,s?1024:2048),Object.assign(o.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,n.add(o,o.target),[[3.2,3.4],[6,3.4],[8.8,3.4],[6,6.2]].forEach(([z,ee],X)=>{let Q=new pn(16773336,17,14,2);Q.position.set(z,3.2,ee),!s&&X===1&&(Q.castShadow=!0,Q.shadow.mapSize.set(512,512),Q.shadow.bias=-.002),n.add(Q),lt(n,a.steelDark,z,3.3,ee,.9,.05,.16,.01);let ve=new Ze(new ln(.8,.02,.1),new Ae({color:16777215,emissive:16773336,emissiveIntensity:2.4}));ve.position.set(z,3.27,ee),n.add(ve)});let l=new Ze(new yn(14,11),a.concrete);l.rotation.x=-Math.PI/2,l.position.set(5.5,0,4),l.receiveShadow=!0,a.concrete.map.repeat.set(3,2.4),a.concrete.bumpMap.repeat.set(10,8),n.add(l);let c=3.6;lt(n,a.wall,5.5,c/2,-.1,12,c,.2,.01),lt(n,a.wall,-.1,c/2,4,.2,c,9,.01),lt(n,a.wall,11.6,c/2,4,.2,c,9,.01),lt(n,a.wallBase,5.5,.55,-0,12,1.1,.04,.005),lt(n,a.wallBase,-0,.55,4,.04,1.1,9,.005),[[7.6,4.2],[11,2]].forEach(([z,ee])=>{let X=new Ze(new yn(ee-.4,1),a.windowGlow);X.position.set(z,2.55,.016),n.add(X),lt(n,a.frame,z,2.55,.03,ee-.3,.06,.04,.005),lt(n,a.frame,z,3.05,.03,ee-.3,.06,.04,.005),lt(n,a.frame,z,2.05,.03,ee-.3,.06,.04,.005)}),lt(n,a.steelDark,.02,1.6,6.2,.04,2.8,2.6,.01);let h=(z,ee,X,Q)=>{let ve=new Ze(new yn(X,Q),a.hazard);ve.rotation.x=-Math.PI/2,ve.position.set(z,.004,ee),ve.receiveShadow=!0,n.add(ve)};h(5.6,2.6,7.2,.14),h(5.6,4.9,7.2,.14),h(2,3.75,.14,2.4),h(9.2,3.75,.14,2.4),a.hazard.map.repeat.set(7,1);let u=np(a,{x0:En.x0,x1:En.x1,h:En.h,w:En.w});u.group.position.z=En.z,n.add(u.group);let f=ip(a);f.position.set(ic,En.h+.0125,En.z),n.add(f);let d=new Qe;d.position.set(8.68,En.h+.2,En.z+.52),lt(d,a.steelDark,0,-.22,0,.05,.4,.05,.005),lt(d,a.modGrey,0,0,0,.12,.12,.1,.01);let g=new Qe;g.position.set(-.05,0,-.03),lt(g,a.steel,-.02,0,-.26,.02,.02,.5,.004);let x=Wt(g,a.red,-.02,0,-.5,.035,.03,"y",18);d.add(g),n.add(d);let m=new Ze(new Dn(.012,10,8),new Ae({color:3811845,emissive:16757018,emissiveIntensity:0}));m.position.set(.03,0,.055),d.add(m);let p=rp(a);p.group.rotation.y=Math.PI,p.group.position.set(En.x1,En.h-.07,4.35),n.add(p.group),lt(n,a.frame,En.x1,.27,4.35,.36,.54,.46,.01),Wt(n,a.steelDark,En.x1,En.h-.07,3.92,.04,.12,"z");let w=sp(a,1.45);w.group.position.set(9.6,0,2.2),n.add(w.group);let y=ap(a);y.group.position.set(6.4,0,5.5),y.group.scale.setScalar(1.25),n.add(y.group),y.picks.forEach(z=>i.push(z));let _=op(a);_.group.position.set(3,1.5,.07),n.add(_.group),_.picks.forEach(z=>i.push(z)),t.label("Nastro",4.8,1.25,3.4,"room"),t.label("Motore",8.9,1.35,4.35,"room"),t.label("Finecorsa",8.7,1.4,3.9,"room"),t.label("Quadro",3,2.3,.3,"room"),t.label("Pulsantiera",6.4,2,5.5,"room");let C=0,I=0,D=!1,N=0,E=!1,M=null,L=ic,V=p.group.position.y;function W(){M||(M=t.loop((z,ee)=>{let X=I-C;C+=Math.abs(X)<.001?X:X*Math.min(1,ee*7),f.position.x=ic+C*yu,Math.abs(f.position.x-L)>.004&&(L=f.position.x,t.moved()),D&&u.run(yu,ee),N&&p.spin(N,ee),p.group.position.y=V+(E?Math.sin(z/22)*.0035:0),!D&&!N&&!E&&Math.abs(I-C)<.002&&(M(),M=null)}))}t.finish([u.group,f,d,p.group,w.group,y.group,_.group]);let K=z=>{let ee={...Oa[z]||Oa.insieme};return t.camera.aspect<.9&&(z==="insieme"||!Oa[z])&&(ee.dist=10.5,ee.yaw=24),ee},ie=!0;return t.camera.aspect<.9&&t.look(K("insieme"),1),{update(z){z&&(I=Math.max(0,Math.min(z.length,z.pos)),ie&&(C=I,f.position.x=L=ic+C*yu,ie=!1,t.moved()),D=z.motor==="fwd"&&!z.atEnd,N=z.motor==="fwd"?6:0,E=z.motor==="hum",p.set({heat:Math.max(z.thermal.heat*.9,z.overload&&z.motor!=="off"?.35:0)}),g.rotation.y!==(z.atEnd?.55:0)&&(g.rotation.y=z.atEnd?.55:0,t.moved()),m.material.emissiveIntensity=z.atEnd?3:0,w.set({green:z.lamp,red:z.thermal.tripped||z.emergency,yellow:!z.qm&&z.supply?!0:z.overload&&!z.thermal.tripped}),y.set(z),_.set(z),W(),t.redraw(),r.querySelector("canvas").setAttribute("aria-label","Officina con il nastro trasportatore. "+(z.motor==="fwd"?"Il nastro \xE8 in marcia.":z.motor==="hum"?"Il motore ronza e non parte.":"Il nastro \xE8 fermo.")+(z.thermal.tripped?" Il termico \xE8 scattato.":"")+(z.emergency?" L\u2019emergenza \xE8 premuta.":"")+(z.atEnd?" Il pacco \xE8 a fine corsa.":"")))},look(z,ee){t.look(K(z),ee)},screenOf:t.screenOf,views:Object.keys(Oa),resize:t.resize,dispose(){M&&M(),t.dispose()}}}var dp={appartamento:cp,officina:fp};typeof window<"u"&&(window.FaseNeutroProve={createScene(r,e,t){return dp[r]?dp[r](e,t):null}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
