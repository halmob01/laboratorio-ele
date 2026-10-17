(()=>{var Dd=0,sh=1,Ld=2;var ah=1,zs=2,Si=3,ci=0,In=1,un=2,hn=0,Rr=1,Jn=2,oh=3,lh=4,Ul=5,Vn=100,Ud=101,Nd=102,Fd=103,Od=104,Gr=200,kd=201,zd=202,Bd=203,hl=204,fl=205,Za=206,Hd=207,Ka=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,jd=214,Nl=0,Fl=1,Ol=2,Cr=3,kl=4,zl=5,Bl=6,Hl=7,ch=0,Yd=1,Zd=2,Ki=0,Gl=1,Vl=2,Wl=3,Xl=4,ql=5,fr=6,jl=7,qu="attached",Kd="detached",uh=300,Vr=301,Wr=302,Yl=303,Zl=304,Ja=306,jt=1e3,Zn=1001,Ss=1002,ln=1003,Kl=1004;var Xr=1005;var rn=1006,Bs=1007;var Qn=1008;var Dn=1009,hh=1010,fh=1011,Hs=1012,Jl=1013,dr=1014,An=1015,en=1016,Ql=1017,$l=1018,pr=1020,dh=35902,ph=1021,mh=1022,En=1023,ws=1026,mr=1027,Gs=1028,ec=1029,gh=1030,tc=1031;var nc=1033,Qa=33776,$a=33777,eo=33778,to=33779,ic=35840,rc=35841,sc=35842,ac=35843,oc=36196,lc=37492,cc=37496,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,xc=37815,vc=37816,bc=37817,_c=37818,yc=37819,Mc=37820,Ec=37821,no=36492,Sc=36494,wc=36495,xh=36283,Tc=36284,Ac=36285,Rc=36286;var Pr=2300,Ir=2301,ul=2302,ju=2400,Yu=2401,Zu=2402,Jd=2500;var vh=0,io=1,Vs=2,Qd=3200,Cc=3201;var Pc=0,$d=1,di="",wt="srgb",cn="srgb-linear",Ta="linear",Dt="srgb";var Ar=7680;var Ku=519,ep=512,tp=513,np=514,bh=515,ip=516,rp=517,sp=518,ap=519,dl=35044;var _h="300 es",xi=2e3,Aa=2001;var Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=1234567,Ma=Math.PI/180,Dr=180/Math.PI;function li(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function yh(r,e){return(r%e+e)%e}function i0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function r0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ea(r,e,t){return(1-t)*r+t*e}function s0(r,e,t,n){return Ea(r,e,1-Math.exp(-t*n))}function a0(r,e=1){return e-Math.abs(yh(r,e*2)-e)}function o0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function l0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function c0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function u0(r,e){return r+Math.random()*(e-r)}function h0(r){return r*(.5-Math.random())}function f0(r){r!==void 0&&(qf=r);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d0(r){return r*Ma}function p0(r){return r*Dr}function m0(r){return(r&r-1)===0&&r!==0}function g0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function x0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function v0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*m,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*m,o*c);break;case"ZYZ":r.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Mh={DEG2RAD:Ma,RAD2DEG:Dr,generateUUID:li,clamp:xt,euclideanModulo:yh,mapLinear:i0,inverseLerp:r0,lerp:Ea,damp:s0,pingpong:a0,smoothstep:o0,smootherstep:l0,randInt:c0,randFloat:u0,randFloatSpread:h0,seededRandom:f0,degToRad:d0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:v0,normalize:Nt,denormalize:oi},Ve=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],y=i[4],_=i[7],D=i[2],L=i[5],P=i[8];return s[0]=a*x+o*M+l*D,s[3]=a*g+o*y+l*L,s[6]=a*p+o*_+l*P,s[1]=c*x+u*M+h*D,s[4]=c*g+u*y+h*L,s[7]=c*p+u*_+h*P,s[2]=f*x+d*M+m*D,s[5]=f*g+d*y+m*L,s[8]=f*p+d*_+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vu.makeScale(e,t)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,t){return this.premultiply(vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vu=new mt;function Eh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function op(){let r=Ts("canvas");return r.style.display="block",r}var jf={};function ro(r){r in jf||(jf[r]=!0,console.warn(r))}function lp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function cp(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function up(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Yf=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){let r={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Dt&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[cn]:{primaries:e,whitePoint:n,transfer:Ta,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),r}var bt=b0();function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var us,pl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=Ts("canvas")),us.width=e.width,us.height=e.height;let i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_0=0,As=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(bu(i[a].image)):s.push(bu(i[a]))}else s=bu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function bu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var y0=0,pn=class r extends Gi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Zn,i=Zn,s=rn,a=Qn,o=En,l=Dn,c=r.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=li(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jt:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jt:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=uh;pn.DEFAULT_ANISOTROPY=1;var Ct=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(d+1)/2,D=(p+1)/2,L=(u+f)/4,P=(h+x)/4,C=(m+g)/4;return y>_&&y>D?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=L/n,s=P/n):_>D?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=L/i,s=C/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=P/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-x)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new As(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==m){let g=1-o,p=l*f+c*d+u*m+h*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let D=Math.sqrt(y),L=Math.atan2(D,p*M);g=Math.sin(g*L)/D,o=Math.sin(o*L)/D}let _=o*M;if(l=l*g+f*_,c=c*g+d*_,u=u*g+m*_,h=h*g+x*_,g===1-o){let D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_u=new F,Kf=new mn,Wn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Bo.subVectors(this.max,pa),hs.subVectors(e.a,pa),fs.subVectors(e.b,pa),ds.subVectors(e.c,pa),nr.subVectors(fs,hs),ir.subVectors(ds,fs),Er.subVectors(hs,ds);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Er.z,Er.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Er.z,0,-Er.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Er.y,Er.x,0];return!yu(t,hs,fs,ds,Bo)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,hs,fs,ds,Bo))?!1:(Ho.crossVectors(nr,ir),t=[Ho.x,Ho.y,Ho.z],yu(t,hs,fs,ds,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new F,new F,new F,new F,new F,new F,new F,new F],ri=new F,zo=new Wn,hs=new F,fs=new F,ds=new F,nr=new F,ir=new F,Er=new F,pa=new F,Bo=new F,Ho=new F,Sr=new F;function yu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Sr.fromArray(r,s);let o=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var M0=new Wn,ma=new F,Mu=new F,On=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Mu)),this.expandByPoint(ma.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new F,Eu=new F,Go=new F,rr=new F,Su=new F,Vo=new F,wu=new F,cr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eu.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Eu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=rr.dot(this.direction),l=-rr.dot(Go),c=rr.lengthSq(),u=Math.abs(1-a*a),h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Eu).addScaledVector(Go,f),d}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,s){Su.subVectors(t,e),Vo.subVectors(n,e),wu.crossVectors(Su,Vo);let a=this.direction.dot(wu),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rr.subVectors(this.origin,e);let l=o*this.direction.dot(Vo.crossVectors(rr,Vo));if(l<0)return null;let c=o*this.direction.dot(Su.cross(rr));if(c<0||l+c>a)return null;let u=-o*rr.dot(wu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class r{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,m,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,m,x,g)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,d=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,S0)}lookAt(e,t,n){let i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),sr.crossVectors(n,Hn),sr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),sr.crossVectors(n,Hn)),sr.normalize(),Wo.crossVectors(Hn,sr),i[0]=sr.x,i[4]=Wo.x,i[8]=Hn.x,i[1]=sr.y,i[5]=Wo.y,i[9]=Hn.y,i[2]=sr.z,i[6]=Wo.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],y=n[7],_=n[11],D=n[15],L=i[0],P=i[4],C=i[8],S=i[12],w=i[1],R=i[5],O=i[9],G=i[13],W=i[2],J=i[6],Y=i[10],he=i[14],j=i[3],Q=i[7],ge=i[11],Ee=i[15];return s[0]=a*L+o*w+l*W+c*j,s[4]=a*P+o*R+l*J+c*Q,s[8]=a*C+o*O+l*Y+c*ge,s[12]=a*S+o*G+l*he+c*Ee,s[1]=u*L+h*w+f*W+d*j,s[5]=u*P+h*R+f*J+d*Q,s[9]=u*C+h*O+f*Y+d*ge,s[13]=u*S+h*G+f*he+d*Ee,s[2]=m*L+x*w+g*W+p*j,s[6]=m*P+x*R+g*J+p*Q,s[10]=m*C+x*O+g*Y+p*ge,s[14]=m*S+x*G+g*he+p*Ee,s[3]=M*L+y*w+_*W+D*j,s[7]=M*P+y*R+_*J+D*Q,s[11]=M*C+y*O+_*Y+D*ge,s[15]=M*S+y*G+_*he+D*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+x*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+g*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=h*g*c-x*f*c+x*l*d-o*g*d-h*l*p+o*f*p,y=m*f*c-u*g*c-m*l*d+a*g*d+u*l*p-a*f*p,_=u*x*c-m*h*c+m*o*d-a*x*d-u*o*p+a*h*p,D=m*h*l-u*x*l-m*o*f+a*x*f+u*o*g-a*h*g,L=t*M+n*y+i*_+s*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/L;return e[0]=M*P,e[1]=(x*f*s-h*g*s-x*i*d+n*g*d+h*i*p-n*f*p)*P,e[2]=(o*g*s-x*l*s+x*i*c-n*g*c-o*i*p+n*l*p)*P,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*P,e[4]=y*P,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*P,e[6]=(m*l*s-a*g*s-m*i*c+t*g*c+a*i*p-t*l*p)*P,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*P,e[8]=_*P,e[9]=(m*h*s-u*x*s-m*n*d+t*x*d+u*n*p-t*h*p)*P,e[10]=(a*x*s-m*o*s+m*n*c-t*x*c-a*n*p+t*o*p)*P,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*P,e[12]=D*P,e[13]=(u*x*i-m*h*i+m*n*f-t*x*f-u*n*g+t*h*g)*P,e[14]=(m*o*i-a*x*i-m*n*l+t*x*l+a*n*g-t*o*g)*P,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,x=a*u,g=a*h,p=o*h,M=l*c,y=l*u,_=l*h,D=n.x,L=n.y,P=n.z;return i[0]=(1-(x+p))*D,i[1]=(d+_)*D,i[2]=(m-y)*D,i[3]=0,i[4]=(d-_)*L,i[5]=(1-(f+p))*L,i[6]=(g+M)*L,i[7]=0,i[8]=(m+y)*P,i[9]=(g-M)*P,i[10]=(1-(f+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=ps.set(i[0],i[1],i[2]).length(),a=ps.set(i[4],i[5],i[6]).length(),o=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],si.copy(this);let c=1/s,u=1/a,h=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=xi){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,m;if(o===xi)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Aa)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=xi){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u,m,x;if(o===xi)m=(a+s)*h,x=-2*h;else if(o===Aa)m=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ps=new F,si=new Je,E0=new F(0,0,0),S0=new F(1,1,1),sr=new F,Wo=new F,Hn=new F,Jf=new Je,Qf=new mn,ui=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},w0=0,$f=new F,ms=new mn,Ni=new Je,Xo=new F,ga=new F,T0=new F,A0=new mn,ed=new F(1,0,0),td=new F(0,1,0),nd=new F(0,0,1),id={type:"added"},R0={type:"removed"},gs={type:"childadded",child:null},Tu={type:"childremoved",child:null},Xt=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new F,t=new ui,n=new mn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new mt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ga,Xo,this.up):Ni.lookAt(Xo,ga,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(Ni),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Xt.DEFAULT_UP=new F(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new F,Fi=new F,Au=new F,Oi=new F,xs=new F,vs=new F,rd=new F,Ru=new F,Cu=new F,Pu=new F,Iu=new Ct,Du=new Ct,Lu=new Ct,lr=class r{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ai.subVectors(i,t),Fi.subVectors(n,t),Au.subVectors(e,t);let a=ai.dot(ai),o=ai.dot(Fi),l=ai.dot(Au),c=Fi.dot(Fi),u=Fi.dot(Au),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Iu.setScalar(0),Du.setScalar(0),Lu.setScalar(0),Iu.fromBufferAttribute(e,t),Du.fromBufferAttribute(e,n),Lu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Iu,s.x),a.addScaledVector(Du,s.y),a.addScaledVector(Lu,s.z),a}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),Fi.subVectors(e,t),ai.cross(Fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;xs.subVectors(i,n),vs.subVectors(s,n),Ru.subVectors(e,n);let l=xs.dot(Ru),c=vs.dot(Ru);if(l<=0&&c<=0)return t.copy(n);Cu.subVectors(e,i);let u=xs.dot(Cu),h=vs.dot(Cu);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xs,a);Pu.subVectors(e,s);let d=xs.dot(Pu),m=vs.dot(Pu);if(m>=0&&d<=m)return t.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(vs,o);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return rd.subVectors(s,i),o=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(rd,o);let p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Uu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=yh(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Uu(a,s,e+1/3),this.g=Uu(a,s,e),this.b=Uu(a,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return bt.fromWorkingColorSpace(wn.copy(this),e),Math.round(xt(wn.r*255,0,255))*65536+Math.round(xt(wn.g*255,0,255))*256+Math.round(xt(wn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=wt){bt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(qo);let n=Ea(ar.h,qo.h,t),i=Ea(ar.s,qo.s,t),s=Ea(ar.l,qo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Be;Be.NAMES=hp;var C0=0,Pn=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Rr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=fl,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_t=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zi=P0();function P0(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function I0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=xt(r,-65504,65504),zi.floatView[0]=r;let e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}function D0(r){let e=r>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(r&1023)]+zi.exponentTable[e],zi.floatView[0]}var Cs=class{static toHalfFloat(e){return I0(e)}static fromHalfFloat(e){return D0(e)}},on=new F,jo=new Ve,L0=0,Wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}};var Ca=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pa=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},U0=0,jn=new Je,Nu=new Xt,bs=new F,Gn=new Wn,xa=new Wn,yn=new F,Ht=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?Pa:Ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(Gn.min,xa.min),Gn.expandByPoint(yn),yn.addVectors(Gn.max,xa.max),Gn.expandByPoint(yn)):(Gn.expandByPoint(xa.min),Gn.expandByPoint(xa.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yn.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),yn.add(bs)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;let c=new F,u=new F,h=new F,f=new Ve,d=new Ve,m=new Ve,x=new F,g=new F;function p(C,S,w){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,w),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),o[C].add(x),o[S].add(x),o[w].add(x),l[C].add(g),l[S].add(g),l[w].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){let w=M[C],R=w.start,O=w.count;for(let G=R,W=R+O;G<W;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new F,_=new F,D=new F,L=new F;function P(C){D.fromBufferAttribute(i,C),L.copy(D);let S=o[C];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),_.crossVectors(L,S);let R=_.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=M.length;C<S;++C){let w=M[C],R=w.start,O=w.count;for(let G=R,W=R+O;G<W;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sd=new Je,wr=new cr,Yo=new On,ad=new F,Zo=new F,Ko=new F,Jo=new F,Fu=new F,Qo=new F,od=new F,$o=new F,De=class extends Xt{constructor(e=new Ht,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(Fu.fromBufferAttribute(h,e),a?Qo.addScaledVector(Fu,u):Qo.addScaledVector(Fu.sub(t),u))}t.add(Qo)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(Yo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Yo,ad)===null||wr.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(sd.copy(s).invert(),wr.copy(e.ray).applyMatrix4(sd),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,D=y;_<D;_+=3){let L=o.getX(_),P=o.getX(_+1),C=o.getX(_+2);i=el(this,p,e,n,c,u,h,L,P,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);i=el(this,a,e,n,c,u,h,M,y,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,D=y;_<D;_+=3){let L=_,P=_+1,C=_+2;i=el(this,p,e,n,c,u,h,L,P,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=g,y=g+1,_=g+2;i=el(this,a,e,n,c,u,h,M,y,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function N0(r,e,t,n,i,s,a,o){let l;if(e.side===In?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ci,o),l===null)return null;$o.copy(o),$o.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo($o);return c<t.near||c>t.far?null:{distance:c,point:$o.clone(),object:r}}function el(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Zo),r.getVertexPosition(l,Ko),r.getVertexPosition(c,Jo);let u=N0(r,e,t,n,Zo,Ko,Jo,od);if(u){let h=new F;lr.getBarycoord(od,Zo,Ko,Jo,h),i&&(u.uv=lr.getInterpolatedAttribute(i,o,l,c,h,new Ve)),s&&(u.uv1=lr.getInterpolatedAttribute(s,o,l,c,h,new Ve)),a&&(u.normal=lr.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};lr.getNormal(Zo,Ko,Jo,f.normal),u.face=f,u.barycoord=h}return u}var Tt=class r extends Ht{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function m(x,g,p,M,y,_,D,L,P,C,S){let w=_/P,R=D/C,O=_/2,G=D/2,W=L/2,J=P+1,Y=C+1,he=0,j=0,Q=new F;for(let ge=0;ge<Y;ge++){let Ee=ge*R-G;for(let Ge=0;Ge<J;Ge++){let Ye=Ge*w-O;Q[x]=Ye*M,Q[g]=Ee*y,Q[p]=W,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[p]=L>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Ge/P),h.push(1-ge/C),he+=1}}for(let ge=0;ge<C;ge++)for(let Ee=0;Ee<P;Ee++){let Ge=f+Ee+J*ge,Ye=f+Ee+J*(ge+1),te=f+(Ee+1)+J*(ge+1),de=f+(Ee+1)+J*ge;l.push(Ge,Ye,de),l.push(Ye,te,de),j+=6}o.addGroup(d,j,S),d+=j,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rn(r){let e={};for(let t=0;t<r.length;t++){let n=qr(r[t]);for(let i in n)e[i]=n[i]}return e}function F0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Ln={clone:qr,merge:Rn},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ia=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},or=new F,ld=new Ve,cd=new Ve,Qt=class extends Ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,ys=1,xl=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(_s,ys,e,t);i.layers=this.layers,this.add(i);let s=new Qt(_s,ys,e,t);s.layers=this.layers,this.add(s);let a=new Qt(_s,ys,e,t);a.layers=this.layers,this.add(a);let o=new Qt(_s,ys,e,t);o.layers=this.layers,this.add(o);let l=new Qt(_s,ys,e,t);l.layers=this.layers,this.add(l);let c=new Qt(_s,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Da=class extends pn{constructor(e=[],t=Vr,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Da(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tt(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:hn});s.uniforms.tEquirect.value=t;let a=new De(i,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=rn),new xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Ce=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var La=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vi=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Is=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new F,Ds=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ud=new F,hd=new Ct,fd=new Ct,B0=new F,dd=new Je,tl=new F,Ou=new On,pd=new Je,ku=new cr,Ua=class extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qu,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tl),this.boundingBox.expandByPoint(tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tl),this.boundingSphere.expandByPoint(tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ou.copy(this.boundingSphere),Ou.applyMatrix4(i),e.ray.intersectsSphere(Ou)!==!1&&(pd.copy(i).invert(),ku.copy(e.ray).applyMatrix4(pd),!(this.boundingBox!==null&&ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;hd.fromBufferAttribute(i.attributes.skinIndex,e),fd.fromBufferAttribute(i.attributes.skinWeight,e),ud.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=fd.getComponent(s);if(a!==0){let o=hd.getComponent(s);dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(B0.copy(ud).applyMatrix4(dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ls=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Kn=class extends pn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ln,u=ln,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},md=new Je,H0=new Je,Na=class r{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:H0;md.multiplyMatrices(o,t[s]),md.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Kn(t,e,e,En,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ls),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ur=class extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new Je,gd=new Je,nl=[],xd=new Wn,G0=new Je,va=new De,ba=new On,$t=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,G0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),xd.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),ba.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),gd.multiplyMatrices(n,Ms),va.matrixWorld=gd,va.raycast(e,nl);for(let a=0,o=nl.length;a<o;a++){let l=nl[a];l.instanceId=s,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kn(new Float32Array(i*this.count),i,this.count,Gs,An));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zu=new F,V0=new F,W0=new mt,Yn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=zu.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||W0.getNormalMatrix(e),i=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Tr=new On,il=new F,bi=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],M=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-s,f-c,g-d,_-p).normalize(),n[1].setComponents(l+s,f+c,g+d,_+p).normalize(),n[2].setComponents(l+a,f+u,g+m,_+M).normalize(),n[3].setComponents(l-a,f-u,g-m,_-M).normalize(),n[4].setComponents(l-o,f-h,g-x,_-y).normalize(),t===xi)n[5].setComponents(l+o,f+h,g+x,_+y).normalize();else if(t===Aa)n[5].setComponents(o,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(il.x=i.normal.x>0?e.max.x:e.min.x,il.y=i.normal.y>0?e.max.y:e.min.y,il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bl=new F,_l=new F,vd=new Je,_a=new cr,rl=new On,Bu=new F,bd=new F,Lr=class extends Xt{constructor(e=new Ht,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)bl.fromBufferAttribute(t,i-1),_l.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bl.distanceTo(_l);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;vd.copy(i).invert(),_a.copy(e.ray).applyMatrix4(vd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),M=u.getX(x+1),y=sl(this,e,_a,l,p,M,x);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=sl(this,e,_a,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=sl(this,e,_a,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=sl(this,e,_a,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function sl(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(bl.fromBufferAttribute(o,i),_l.fromBufferAttribute(o,s),t.distanceSqToSegment(bl,_l,Bu,bd)>n)return;Bu.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Bu);if(!(c<e.near||c>e.far))return{distance:c,point:bd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var _d=new F,yd=new F,Fa=class extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_d.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_d.distanceTo(yd);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends Lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ns=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new Je,Ju=new cr,al=new On,ol=new F,Ur=class extends Xt{constructor(e=new Ht,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(i),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;Md.copy(i).invert(),Ju.copy(e.ray).applyMatrix4(Md);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);ol.fromBufferAttribute(h,g),Ed(ol,g,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,x=d;m<x;m++)ol.fromBufferAttribute(h,m),Ed(ol,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ed(r,e,t,n,i,s,a){let o=Ju.distanceSqToPoint(r);if(o<t){let l=new F;Ju.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var zt=class extends pn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nr=class extends pn{constructor(e,t,n=dr,i,s,a,o=ln,l=ln,c,u=ws){if(u!==ws&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var ka=class r extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new F,u=new Ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gn=class r extends Ht{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],m=0,x=[],g=n/2,p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function M(){let _=new F,D=new F,L=0,P=(t-e)/n;for(let C=0;C<=s;C++){let S=[],w=C/s,R=w*(t-e)+e;for(let O=0;O<=i;O++){let G=O/i,W=G*l+o,J=Math.sin(W),Y=Math.cos(W);D.x=R*J,D.y=-w*n+g,D.z=R*Y,h.push(D.x,D.y,D.z),_.set(J,P,Y).normalize(),f.push(_.x,_.y,_.z),d.push(G,1-w),S.push(m++)}x.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){let w=x[S][C],R=x[S+1][C],O=x[S+1][C+1],G=x[S][C+1];(e>0||S!==0)&&(u.push(w,R,G),L+=3),(t>0||S!==s-1)&&(u.push(R,O,G),L+=3)}c.addGroup(p,L,0),p+=L}function y(_){let D=m,L=new Ve,P=new F,C=0,S=_===!0?e:t,w=_===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),m++;let R=m;for(let O=0;O<=i;O++){let W=O/i*l+o,J=Math.cos(W),Y=Math.sin(W);P.x=S*Y,P.y=g*w,P.z=S*J,h.push(P.x,P.y,P.z),f.push(0,w,0),L.x=J*.5+.5,L.y=Y*.5*w+.5,d.push(L.x,L.y),m++}for(let O=0;O<i;O++){let G=D+O,W=R+O;_===!0?u.push(W,W+1,G):u.push(W+1,W,G),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ve:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],s=[],a=[],o=new F,l=new Je;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(xt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(xt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},za=class extends Xn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ve){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yl=class extends za{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var ll=new F,Hu=new wh,Gu=new wh,Vu=new wh,Fs=class extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(ll.subVectors(i[0],i[1]).add(i[0]),c=ll);let h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(ll.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ll),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Hu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,x,g),Gu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,x,g),Vu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Hu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Gu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Vu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Hu.calc(l),Gu.calc(l),Vu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sd(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function X0(r,e){let t=1-r;return t*t*e}function q0(r,e){return 2*(1-r)*r*e}function j0(r,e){return r*r*e}function Sa(r,e,t,n){return X0(r,e)+q0(r,t)+j0(r,n)}function Y0(r,e){let t=1-r;return t*t*t*e}function Z0(r,e){let t=1-r;return 3*t*t*r*e}function K0(r,e){return 3*(1-r)*r*r*e}function J0(r,e){return r*r*r*e}function wa(r,e,t,n,i){return Y0(r,e)+Z0(r,t)+K0(r,n)+J0(r,i)}var Ml=class extends Xn{constructor(e=new Ve,t=new Ve,n=new Ve,i=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ve){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wa(e,i.x,s.x,a.x,o.x),wa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends Xn{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wa(e,i.x,s.x,a.x,o.x),wa(e,i.y,s.y,a.y,o.y),wa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends Xn{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends Xn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends Xn{constructor(e=new Ve,t=new Ve,n=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ve){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Sa(e,i.x,s.x,a.x),Sa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Xn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Sa(e,i.x,s.x,a.x),Sa(e,i.y,s.y,a.y),Sa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Sd(o,l.x,c.x,u.x,h.x),Sd(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ve().fromArray(i))}return this}},Qu=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:Fs,CubicBezierCurve:Ml,CubicBezierCurve3:El,EllipseCurve:za,LineCurve:Sl,LineCurve3:hr,QuadraticBezierCurve:wl,QuadraticBezierCurve3:Ba,SplineCurve:Tl}),Fr=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Qu[i.type]().fromJSON(i))}return this}};var Et=class r extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let M=p*f-a;for(let y=0;y<c;y++){let _=y*h-s;m.push(_,-M,0),x.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,_=M+c*(p+1),D=M+1+c*(p+1),L=M+1+c*p;d.push(y,_,L),d.push(_,D,L)}this.setIndex(d),this.setAttribute("position",new Mt(m,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var xn=class r extends Ht{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new F,f=new F,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let M=[],y=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let D=0;D<=t;D++){let L=D/t;h.x=-e*Math.cos(i+L*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(i+L*s)*Math.sin(a+y*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(L+_,1-y),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=u[p][M+1],_=u[p][M],D=u[p+1][M],L=u[p+1][M+1];(p!==0||a>0)&&d.push(y,_,L),(p!==n-1||l<Math.PI)&&d.push(_,D,L)}this.setIndex(d),this.setAttribute("position",new Mt(m,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class r extends Ht{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new F,h=new F,f=new F;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let x=m/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let x=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,M=(i+1)*d+m;a.push(x,g,M),a.push(g,p,M)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vi=class r extends Ht{constructor(e=new Ba(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new Ve,u=new F,h=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function x(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),M(),p()}function g(y){u=e.getPointAt(y/t,u);let _=a.normals[y],D=a.binormals[y];for(let L=0;L<=i;L++){let P=L/i*Math.PI*2,C=Math.sin(P),S=-Math.cos(P);l.x=S*_.x+C*D.x,l.y=S*_.y+C*D.y,l.z=S*_.z+C*D.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=i;_++){let D=(i+1)*(y-1)+(_-1),L=(i+1)*y+(_-1),P=(i+1)*y+_,C=(i+1)*(y-1)+_;m.push(D,L,C),m.push(L,P,C)}}function M(){for(let y=0;y<=t;y++)for(let _=0;_<=i;_++)c.x=y/t,c.y=_/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Qu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ha=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tn=class extends _e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ga=class extends Pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Os=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ks=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Q0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $0(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wd(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function fp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Wi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Al=class extends Wi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yu:s=e,o=2*t-n;break;case Zu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yu:a=e,l=2*n-t;break;case Zu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,_=d*g-d*x;for(let D=0;D!==o;++D)s[D]=p*a[u+D]+M*a[c+D]+y*a[l+D]+_*a[h+D];return s}},Rl=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}},Cl=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cl(t,this.TimeBufferType),this.values=cl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cl(e.times,Array),values:cl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case ul:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Q0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ul,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ir;var Xi=class extends kn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Pr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}};Va.prototype.ValueTypeName="color";var yi=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}};yi.prototype.ValueTypeName="number";var Pl=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)mn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Mi=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName="quaternion";Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends kn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Pr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName="vector";var Wa=class{constructor(e="",t=-1,n=[],i=Jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=$0(l);l=wd(l,1,u),c=wd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new yi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,m,x){if(d.length!==0){let g=[],p=[];fp(d,g,p,m),g.length!==0&&x.push(new h(f,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let M=0;M!==f[m].morphTargets.length;++M){let y=f[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new yi(".morphTargetInfluence["+x+"]",g,p))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(Ei,d+".position",f,"pos",i),n(Mi,d+".quaternion",f,"rot",i),n(Ei,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function eg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return Va;case"quaternion":return Mi;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function tg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eg(r.type);if(r.times===void 0){let t=[],n=[];fp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Il=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},dp=new Il,hi=class{constructor(e){this.manager=e!==void 0?e:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},$u=class extends Error{constructor(e,t){super(e),this.response=t}},Or=class extends hi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:i});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ki[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let D=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let L=0,P=u.length;L<P;L++){let C=u[L];C.onProgress&&C.onProgress(D)}p.enqueue(_),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new $u(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Bi.add(e,c);let u=ki[e];delete ki[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Dl=class extends hi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Bi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Ts("img");function l(){u(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Xa=class extends hi{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new Kn,o=new Or(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Zn,a.wrapT=c.wrapT!==void 0?c.wrapT:Zn,a.magFilter=c.magFilter!==void 0?c.magFilter:rn,a.minFilter=c.minFilter!==void 0?c.minFilter:rn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Qn),c.mipmapCount===1&&(a.minFilter=rn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},kr=class extends hi{constructor(e){super(e)}load(e,t,n,i){let s=new pn,a=new Dl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},zr=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Br=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wu=new Je,Td=new F,Ad=new F,qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eh=class extends qa{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Hr=class extends zr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new eh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rd=new Je,ya=new F,Xu=new F,th=class extends qa{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),n.position.copy(ya),Xu.copy(n.position),Xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xu),n.updateMatrixWorld(),i.makeTranslation(-ya.x,-ya.y,-ya.z),Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd)}},an=class extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fi=class extends Ia{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nh=class extends qa{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ji=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ja=class extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Bi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(e,l),s.manager.itemStart(e)}};var Ll=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ya=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cd(){return performance.now()}var Th="\\[\\]\\.:\\/",ng=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",ig="[^"+Th.replace("\\.","")+"]",rg=/((?:WC+[\/:])*)/.source.replace("WC",Ah),sg=/(WCOD+)?/.source.replace("WCOD",ig),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),lg=new RegExp("^"+rg+sg+ag+og+"$"),cg=["material","materials","bones","map"],ih=class{constructor(e,t,n){let i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(e){let t=lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);cg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=ih;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);var Pd=new Je,Zi=class{constructor(e,t,n=0,i=1/0){this.ray=new cr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pd),this}intersectObject(e,t=!0,n=[]){return rh(e,this,n,t),n.sort(Id),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)rh(e[i],this,n,t);return n.sort(Id),n}};function Id(r,e){return r.distance-e.distance}function rh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)rh(s[a],e,t,!0)}}function Rh(r,e,t,n){let i=ug(n);switch(t){case ph:return r*e;case Gs:return r*e/i.components*i.byteLength;case ec:return r*e/i.components*i.byteLength;case gh:return r*e*2/i.components*i.byteLength;case tc:return r*e*2/i.components*i.byteLength;case mh:return r*e*3/i.components*i.byteLength;case En:return r*e*4/i.components*i.byteLength;case nc:return r*e*4/i.components*i.byteLength;case Qa:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(r,16)*Math.max(e,8)/4;case ic:case sc:return Math.max(r,8)*Math.max(e,8)/2;case oc:case lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case no:case Sc:case wc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case xh:case Tc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ac:case Rc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ug(r){switch(r){case Dn:case hh:return{byteLength:1,components:1};case Hs:case fh:case en:return{byteLength:2,components:1};case Ql:case $l:return{byteLength:2,components:4};case dr:case Jl:case An:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");function Op(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fg(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fg=`#define PI 3.141592653589793
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
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kg=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,hx=`struct PhysicalMaterial {
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
}`,fx=`
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jx=`float getShadowMask() {
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
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
#endif`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
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
}`,bv=`#if DEPTH_PACKING == 3200
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
}`,_v=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,Rv=`#define LAMBERT
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
}`,Cv=`#define LAMBERT
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
}`,Pv=`#define MATCAP
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
}`,Iv=`#define MATCAP
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
}`,Dv=`#define NORMAL
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
}`,Lv=`#define NORMAL
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
}`,Uv=`#define PHONG
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
}`,Nv=`#define PHONG
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
}`,Fv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,zv=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Vv=`uniform vec3 color;
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
}`,Wv=`uniform float rotation;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:dg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:bg,aomap_pars_fragment:_g,batching_pars_vertex:yg,batching_vertex:Mg,begin_vertex:Eg,beginnormal_vertex:Sg,bsdfs:wg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Ig,color_fragment:Dg,color_pars_fragment:Lg,color_pars_vertex:Ug,color_vertex:Ng,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:kg,displacementmap_pars_vertex:zg,displacementmap_vertex:Bg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Gg,colorspace_fragment:Vg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:jg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:sx,envmap_vertex:Zg,fog_vertex:Kg,fog_pars_vertex:Jg,fog_fragment:Qg,fog_pars_fragment:$g,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:ox,lights_phong_fragment:lx,lights_phong_pars_fragment:cx,lights_physical_fragment:ux,lights_physical_pars_fragment:hx,lights_fragment_begin:fx,lights_fragment_maps:dx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:vx,map_fragment:bx,map_pars_fragment:_x,map_particle_fragment:yx,map_particle_pars_fragment:Mx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Sx,morphinstance_vertex:wx,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Ix,normal_pars_fragment:Dx,normal_pars_vertex:Lx,normal_vertex:Ux,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:kx,iridescence_pars_fragment:zx,opaque_fragment:Bx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:Zx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:$x,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:av,transmission_pars_fragment:ov,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,worldpos_vertex:hv,background_vert:fv,background_frag:dv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:xv,depth_vert:vv,depth_frag:bv,distanceRGBA_vert:_v,distanceRGBA_frag:yv,equirect_vert:Mv,equirect_frag:Ev,linedashed_vert:Sv,linedashed_frag:wv,meshbasic_vert:Tv,meshbasic_frag:Av,meshlambert_vert:Rv,meshlambert_frag:Cv,meshmatcap_vert:Pv,meshmatcap_frag:Iv,meshnormal_vert:Dv,meshnormal_frag:Lv,meshphong_vert:Uv,meshphong_frag:Nv,meshphysical_vert:Fv,meshphysical_frag:Ov,meshtoon_vert:kv,meshtoon_frag:zv,points_vert:Bv,points_frag:Hv,shadow_vert:Gv,shadow_frag:Vv,sprite_vert:Wv,sprite_frag:Xv},je={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Rn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Be(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Rn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Rn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Rn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Be(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Rn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Rn([je.points,je.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Rn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Rn([je.common,je.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Rn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Rn([je.sprite,je.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Rn([je.common,je.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Rn([je.lights,je.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var Ic={r:0,b:0,g:0},jr=new ui,qv=new Je;function jv(r,e,t,n,i,s,a){let o=new Be(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,D=m(y);D===null?p(o,l):D&&D.isColor&&(p(D,1),_=!0);let L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,_){let D=m(_);D&&(D.isCubeTexture||D.mapping===Ja)?(u===void 0&&(u=new De(new Tt(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:qr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),jr.copy(_.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(jr)),u.material.toneMapped=bt.getTransfer(D.colorSpace)!==Dt,(h!==D||f!==D.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=D,f=D.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new De(new Et(2,2),new Lt({name:"BackgroundMaterial",uniforms:qr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=bt.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=D,f=D.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Ic,Sh(r)),n.buffers.color.setClear(Ic.r,Ic.g,Ic.b,_,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:g,dispose:M}}function Yv(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(w,R,O,G,W){let J=!1,Y=h(G,O,R);s!==Y&&(s=Y,c(s.object)),J=d(w,G,O,W),J&&m(w,G,O,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(w,R,O,G),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function u(w){return r.deleteVertexArray(w)}function h(w,R,O){let G=O.wireframe===!0,W=n[w.id];W===void 0&&(W={},n[w.id]=W);let J=W[R.id];J===void 0&&(J={},W[R.id]=J);let Y=J[G];return Y===void 0&&(Y=f(l()),J[G]=Y),Y}function f(w){let R=[],O=[],G=[];for(let W=0;W<t;W++)R[W]=0,O[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:G,object:w,attributes:{},index:null}}function d(w,R,O,G){let W=s.attributes,J=R.attributes,Y=0,he=O.getAttributes();for(let j in he)if(he[j].location>=0){let ge=W[j],Ee=J[j];if(Ee===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function m(w,R,O,G){let W={},J=R.attributes,Y=0,he=O.getAttributes();for(let j in he)if(he[j].location>=0){let ge=J[j];ge===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor));let Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),W[j]=Ee,Y++}s.attributes=W,s.attributesNum=Y,s.index=G}function x(){let w=s.newAttributes;for(let R=0,O=w.length;R<O;R++)w[R]=0}function g(w){p(w,0)}function p(w,R){let O=s.newAttributes,G=s.enabledAttributes,W=s.attributeDivisors;O[w]=1,G[w]===0&&(r.enableVertexAttribArray(w),G[w]=1),W[w]!==R&&(r.vertexAttribDivisor(w,R),W[w]=R)}function M(){let w=s.newAttributes,R=s.enabledAttributes;for(let O=0,G=R.length;O<G;O++)R[O]!==w[O]&&(r.disableVertexAttribArray(O),R[O]=0)}function y(w,R,O,G,W,J,Y){Y===!0?r.vertexAttribIPointer(w,R,O,W,J):r.vertexAttribPointer(w,R,O,G,W,J)}function _(w,R,O,G){x();let W=G.attributes,J=O.getAttributes(),Y=R.defaultAttributeValues;for(let he in J){let j=J[he];if(j.location>=0){let Q=W[he];if(Q===void 0&&(he==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),he==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){let ge=Q.normalized,Ee=Q.itemSize,Ge=e.get(Q);if(Ge===void 0)continue;let Ye=Ge.buffer,te=Ge.type,de=Ge.bytesPerElement,fe=te===r.INT||te===r.UNSIGNED_INT||Q.gpuType===Jl;if(Q.isInterleavedBufferAttribute){let xe=Q.data,Ae=xe.stride,Qe=Q.offset;if(xe.isInstancedInterleavedBuffer){for(let Le=0;Le<j.locationSize;Le++)p(j.location+Le,xe.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Le=0;Le<j.locationSize;Le++)g(j.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Le=0;Le<j.locationSize;Le++)y(j.location+Le,Ee/j.locationSize,te,ge,Ae*de,(Qe+Ee/j.locationSize*Le)*de,fe)}else{if(Q.isInstancedBufferAttribute){for(let xe=0;xe<j.locationSize;xe++)p(j.location+xe,Q.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<j.locationSize;xe++)g(j.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let xe=0;xe<j.locationSize;xe++)y(j.location+xe,Ee/j.locationSize,te,ge,Ee*de,Ee/j.locationSize*xe*de,fe)}}else if(Y!==void 0){let ge=Y[he];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(j.location,ge);break;case 3:r.vertexAttrib3fv(j.location,ge);break;case 4:r.vertexAttrib4fv(j.location,ge);break;default:r.vertexAttrib1fv(j.location,ge)}}}}M()}function D(){C();for(let w in n){let R=n[w];for(let O in R){let G=R[O];for(let W in G)u(G[W].object),delete G[W];delete R[O]}delete n[w]}}function L(w){if(n[w.id]===void 0)return;let R=n[w.id];for(let O in R){let G=R[O];for(let W in G)u(G[W].object),delete G[W];delete R[O]}delete n[w.id]}function P(w){for(let R in n){let O=n[R];if(O[w.id]===void 0)continue;let G=O[w.id];for(let W in G)u(G[W].object),delete G[W];delete O[w.id]}}function C(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Zv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*f[x];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==En&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let C=P===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Dn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==An&&!C)}function l(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:D,maxSamples:L}}function Jv(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Yn,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{let M=s?0:n,y=M*4,_=p.clippingState||null;l.value=_,_=u(m,f,y,d);for(let D=0;D!==y;++D)_[D]=t[D];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)a.copy(h[y]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Qv(r){let e=new WeakMap;function t(a,o){return o===Yl?a.mapping=Vr:o===Zl&&(a.mapping=Wr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yl||o===Zl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new vl(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xs=4,pp=[.125,.215,.35,.446,.526,.582],Kr=20,Ch=new fi,mp=new Be,Ph=null,Ih=0,Dh=0,Lh=!1,Zr=(1+Math.sqrt(5))/2,Ws=1/Zr,gp=[new F(-Zr,Ws,0),new F(Zr,Ws,0),new F(-Ws,0,Zr),new F(Ws,0,Zr),new F(0,Zr,-Ws),new F(0,Zr,Ws),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],$v=new F,gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=$v}=s;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Ih,Dh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:en,format:En,colorSpace:cn,depthBuffer:!1},i=xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(s)),this._blurMaterial=tb(s,e,t)}return i}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Ch)}_sceneToCubeUV(e,t,n,i,s){let l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(mp),h.toneMapping=Ki,h.autoClear=!1;let m=new _t({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),x=new De(new Tt,m),g=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(mp),g=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let _=this._cubeSize;Dc(i,y*_,M>2?_:0,_,_),h.setRenderTarget(i),g&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Vr||e.mapping===Wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Dc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ch)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gp[(i-s-1)%gp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new De(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Kr-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Kr;g>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kr}`);let p=[],M=0;for(let P=0;P<Kr;++P){let C=P/x,S=Math.exp(-C*C/2);p.push(S),P===0?M+=S:P<g&&(M+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;let _=this._sizeLods[i],D=3*_*(i>y-Xs?i-y+Xs:0),L=4*(this._cubeSize-_);Dc(t,D,L,3*_,2*_),l.setRenderTarget(t),l.render(h,Ch)}};function eb(r){let e=[],t=[],n=[],i=r,s=r-Xs+1+pp.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Xs?l=pp[a-r+Xs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let L=0;L<d;L++){let P=L%3*2/3-1,C=L>2?0:-1,S=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];M.set(S,x*m*L),y.set(f,g*m*L);let w=[L,L,L,L,L,L];_.set(w,p*m*L)}let D=new Ht;D.setAttribute("position",new Wt(M,x)),D.setAttribute("uv",new Wt(y,g)),D.setAttribute("faceIndex",new Wt(_,p)),e.push(D),i>Xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xp(r,e,t){let n=new sn(r,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tb(r,e,t){let n=new Float32Array(Kr),i=new F(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function vp(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function bp(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function nb(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Yl||l===Zl,u=l===Vr||l===Wr;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new gr(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new gr(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ib(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ro("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rb(r,e,t,n){let i={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let y=0,_=M.length;y<_;y+=3){let D=M[y+0],L=M[y+1],P=M[y+2];f.push(D,L,L,P,P,D)}}else if(m!==void 0){let M=m.array;x=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let D=y+0,L=y+1,P=y+2;f.push(D,L,L,P,P,D)}}else return;let g=new(Eh(f)?Pa:Ca)(f,1);g.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sb(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ab(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ob(r,e,t){let n=new WeakMap,i=new Ct;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,D=1;_>e.maxTextureSize&&(D=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let L=new Float32Array(_*D*4*h),P=new Ra(L,_,D,h);P.type=An,P.needsUpdate=!0;let C=y*4;for(let w=0;w<h;w++){let R=g[w],O=p[w],G=M[w],W=_*D*4*w;for(let J=0;J<R.count;J++){let Y=J*C;d===!0&&(i.fromBufferAttribute(R,J),L[W+Y+0]=i.x,L[W+Y+1]=i.y,L[W+Y+2]=i.z,L[W+Y+3]=0),m===!0&&(i.fromBufferAttribute(O,J),L[W+Y+4]=i.x,L[W+Y+5]=i.y,L[W+Y+6]=i.z,L[W+Y+7]=0),x===!0&&(i.fromBufferAttribute(G,J),L[W+Y+8]=i.x,L[W+Y+9]=i.y,L[W+Y+10]=i.z,L[W+Y+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new Ve(_,D)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function lb(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var kp=new pn,_p=new Nr(1,1),zp=new Ra,Bp=new gl,Hp=new Da,yp=[],Mp=[],Ep=new Float32Array(16),Sp=new Float32Array(9),wp=new Float32Array(4);function Ys(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=yp[i];if(s===void 0&&(s=new Float32Array(i),yp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function vn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Uc(r,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ub(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2fv(this.addr,e),bn(t,e)}}function hb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;r.uniform3fv(this.addr,e),bn(t,e)}}function fb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4fv(this.addr,e),bn(t,e)}}function db(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,n))return;wp.set(n),r.uniformMatrix2fv(this.addr,!1,wp),bn(t,n)}}function pb(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,n))return;Sp.set(n),r.uniformMatrix3fv(this.addr,!1,Sp),bn(t,n)}}function mb(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,n))return;Ep.set(n),r.uniformMatrix4fv(this.addr,!1,Ep),bn(t,n)}}function gb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2iv(this.addr,e),bn(t,e)}}function vb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;r.uniform3iv(this.addr,e),bn(t,e)}}function bb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4iv(this.addr,e),bn(t,e)}}function _b(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2uiv(this.addr,e),bn(t,e)}}function Mb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;r.uniform3uiv(this.addr,e),bn(t,e)}}function Eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4uiv(this.addr,e),bn(t,e)}}function Sb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(_p.compareFunction=bh,s=_p):s=kp,t.setTexture2D(e||s,i)}function wb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bp,i)}function Tb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hp,i)}function Ab(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zp,i)}function Rb(r){switch(r){case 5126:return cb;case 35664:return ub;case 35665:return hb;case 35666:return fb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return bb;case 5125:return _b;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Cb(r,e){r.uniform1fv(this.addr,e)}function Pb(r,e){let t=Ys(e,this.size,2);r.uniform2fv(this.addr,t)}function Ib(r,e){let t=Ys(e,this.size,3);r.uniform3fv(this.addr,t)}function Db(r,e){let t=Ys(e,this.size,4);r.uniform4fv(this.addr,t)}function Lb(r,e){let t=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ub(r,e){let t=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nb(r,e){let t=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fb(r,e){r.uniform1iv(this.addr,e)}function Ob(r,e){r.uniform2iv(this.addr,e)}function kb(r,e){r.uniform3iv(this.addr,e)}function zb(r,e){r.uniform4iv(this.addr,e)}function Bb(r,e){r.uniform1uiv(this.addr,e)}function Hb(r,e){r.uniform2uiv(this.addr,e)}function Gb(r,e){r.uniform3uiv(this.addr,e)}function Vb(r,e){r.uniform4uiv(this.addr,e)}function Wb(r,e,t){let n=this.cache,i=e.length,s=Uc(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||kp,s[a])}function Xb(r,e,t){let n=this.cache,i=e.length,s=Uc(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Bp,s[a])}function qb(r,e,t){let n=this.cache,i=e.length,s=Uc(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hp,s[a])}function jb(r,e,t){let n=this.cache,i=e.length,s=Uc(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),bn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||zp,s[a])}function Yb(r){switch(r){case 5126:return Cb;case 35664:return Pb;case 35665:return Ib;case 35666:return Db;case 35674:return Lb;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return kb;case 35669:case 35673:return zb;case 5125:return Bb;case 36294:return Hb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return jb}}var Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rb(t.type)}},Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yb(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Uh=/(\w+)(\])?(\[|\.)?/g;function Tp(r,e){r.seq.push(e),r.map[e.id]=e}function Zb(r,e,t){let n=r.name,i=n.length;for(Uh.lastIndex=0;;){let s=Uh.exec(n),a=Uh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tp(t,c===void 0?new Nh(o,r,e):new Fh(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Oh(o),Tp(t,h)),t=h}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Zb(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ap(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Kb=37297,Jb=0;function Qb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Rp=new mt;function $b(r){bt._getMatrix(Rp,bt.workingColorSpace,r);let e=`mat3( ${Rp.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case Ta:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Qb(r.getShaderSource(e),a)}else return i}function e_(r,e){let t=$b(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t_(r,e){let t;switch(e){case Gl:t="Linear";break;case Vl:t="Reinhard";break;case Wl:t="Cineon";break;case Xl:t="ACESFilmic";break;case fr:t="AgX";break;case jl:t="Neutral";break;case ql:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new F;function n_(){bt.getLuminanceCoefficients(Lc);let r=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function r_(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function so(r){return r!==""}function Pp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(a_,l_)}var o_=new Map;function l_(r,e){let t=vt[e];if(t===void 0){let n=o_.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(r){return r.replace(c_,u_)}function u_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function h_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zs?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function f_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Wr&&(e="ENVMAP_MODE_REFRACTION"),e}function p_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function m_(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g_(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=h_(t),c=f_(t),u=d_(t),h=p_(t),f=m_(t),d=i_(t),m=r_(s),x=i.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),p.length>0&&(p+=`
`)):(g=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?vt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),n_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),a=kh(a),a=Pp(a,t),a=Ip(a,t),o=kh(o),o=Pp(o,t),o=Ip(o,t),a=Dp(a),o=Dp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+a,_=M+p+o,D=Ap(i,i.VERTEX_SHADER,y),L=Ap(i,i.FRAGMENT_SHADER,_);i.attachShader(x,D),i.attachShader(x,L),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(R){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(D).trim(),W=i.getShaderInfoLog(L).trim(),J=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,D,L);else{let he=Cp(i,D,"vertex"),j=Cp(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+he+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||W==="")&&(Y=!1);Y&&(R.diagnostics={runnable:J,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(D),i.deleteShader(L),C=new qs(i,x),S=s_(i,x)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,Kb)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=L,this}var x_=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};function v_(r,e,t,n,i,s,a){let o=new Rs,l=new zh,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,w,R,O,G){let W=O.fog,J=G.geometry,Y=S.isMeshStandardMaterial?O.environment:null,he=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),j=he&&he.mapping===Ja?he.image.height:null,Q=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ee=ge!==void 0?ge.length:0,Ge=0;J.morphAttributes.position!==void 0&&(Ge=1),J.morphAttributes.normal!==void 0&&(Ge=2),J.morphAttributes.color!==void 0&&(Ge=3);let Ye,te,de,fe;if(Q){let ft=wi[Q];Ye=ft.vertexShader,te=ft.fragmentShader}else Ye=S.vertexShader,te=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);let xe=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Qe=G.isInstancedMesh===!0,Le=G.isBatchedMesh===!0,rt=!!S.map,$e=!!S.matcap,Oe=!!he,A=!!S.aoMap,qe=!!S.lightMap,Fe=!!S.bumpMap,ke=!!S.normalMap,Te=!!S.displacementMap,V=!!S.emissiveMap,ae=!!S.metalnessMap,E=!!S.roughnessMap,T=S.anisotropy>0,H=S.clearcoat>0,ee=S.dispersion>0,oe=S.iridescence>0,ce=S.sheen>0,He=S.transmission>0,Pe=T&&!!S.anisotropyMap,re=H&&!!S.clearcoatMap,me=H&&!!S.clearcoatNormalMap,le=H&&!!S.clearcoatRoughnessMap,pe=oe&&!!S.iridescenceMap,Ie=oe&&!!S.iridescenceThicknessMap,ze=ce&&!!S.sheenColorMap,Re=ce&&!!S.sheenRoughnessMap,at=!!S.specularMap,Ze=!!S.specularColorMap,it=!!S.specularIntensityMap,X=He&&!!S.transmissionMap,ie=He&&!!S.thicknessMap,ne=!!S.gradientMap,ve=!!S.alphaMap,We=S.alphaTest>0,Xe=!!S.alphaHash,ht=!!S.extensions,Ft=Ki;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ft=r.toneMapping);let nn={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:te,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Le,batchingColor:Le&&G._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&G.instanceColor!==null,instancingMorph:Qe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:cn,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:$e,envMap:Oe,envMapMode:Oe&&he.mapping,envMapCubeUVHeight:j,aoMap:A,lightMap:qe,bumpMap:Fe,normalMap:ke,displacementMap:f&&Te,emissiveMap:V,normalMapObjectSpace:ke&&S.normalMapType===$d,normalMapTangentSpace:ke&&S.normalMapType===Pc,metalnessMap:ae,roughnessMap:E,anisotropy:T,anisotropyMap:Pe,clearcoat:H,clearcoatMap:re,clearcoatNormalMap:me,clearcoatRoughnessMap:le,dispersion:ee,iridescence:oe,iridescenceMap:pe,iridescenceThicknessMap:Ie,sheen:ce,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:at,specularColorMap:Ze,specularIntensityMap:it,transmission:He,transmissionMap:X,thicknessMap:ie,gradientMap:ne,opaque:S.transparent===!1&&S.blending===Rr&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:We,alphaHash:Xe,combine:S.combine,mapUv:rt&&x(S.map.channel),aoMapUv:A&&x(S.aoMap.channel),lightMapUv:qe&&x(S.lightMap.channel),bumpMapUv:Fe&&x(S.bumpMap.channel),normalMapUv:ke&&x(S.normalMap.channel),displacementMapUv:Te&&x(S.displacementMap.channel),emissiveMapUv:V&&x(S.emissiveMap.channel),metalnessMapUv:ae&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:Pe&&x(S.anisotropyMap.channel),clearcoatMapUv:re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(S.sheenRoughnessMap.channel),specularMapUv:at&&x(S.specularMap.channel),specularColorMapUv:Ze&&x(S.specularColorMap.channel),specularIntensityMapUv:it&&x(S.specularIntensityMap.channel),transmissionMapUv:X&&x(S.transmissionMap.channel),thicknessMapUv:ie&&x(S.thicknessMap.channel),alphaMapUv:ve&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ke||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(rt||ve),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Dt,decodeVideoTextureEmissive:V&&S.emissiveMap.isVideoTexture===!0&&bt.getTransfer(S.emissiveMap.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===In,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function p(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)w.push(R),w.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(M(w,S),y(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let w=m[S.type],R;if(w){let O=wi[w];R=Ln.clone(O.uniforms)}else R=S.uniforms;return R}function D(S,w){let R;for(let O=0,G=u.length;O<G;O++){let W=u[O];if(W.cacheKey===w){R=W,++R.usedTimes;break}}return R===void 0&&(R=new g_(r,w,S,s),u.push(R)),R}function L(S){if(--S.usedTimes===0){let w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:C}}function b_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function __(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Up(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Np(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,m,x,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,f,d,m,x,g){let p=a(h,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,m,x,g){let p=a(h,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||__),n.length>1&&n.sort(f||Up),i.length>1&&i.sort(f||Up)}function u(){for(let h=e,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function y_(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Np,r.set(n,[a])):i>=s.length?(a=new Np,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function M_(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function E_(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var S_=0;function w_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function T_(r){let e=new M_,t=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,s=new Je,a=new Je;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,y=0,_=0,D=0,L=0,P=0;c.sort(w_);for(let S=0,w=c.length;S<w;S++){let R=c[S],O=R.color,G=R.intensity,W=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*G,h+=O.g*G,f+=O.b*G;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],G);P++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let he=R.shadow,j=t.get(R);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=Y,d++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(O).multiplyScalar(G),Y.distance=W,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[x]=Y;let he=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,he.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[x]=he.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=J,_++}x++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=Y,g++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let he=R.shadow,j=t.get(R);j.shadowIntensity=he.intensity,j.shadowBias=he.bias,j.shadowNormalBias=he.normalBias,j.shadowRadius=he.radius,j.shadowMapSize=he.mapSize,j.shadowCameraNear=he.camera.near,j.shadowCameraFar=he.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=Y,m++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(G),Y.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=je.LTC_FLOAT_1,n.rectAreaLTC2=je.LTC_FLOAT_2):(n.rectAreaLTC1=je.LTC_HALF_1,n.rectAreaLTC2=je.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==D||C.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+D-L,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,C.directionalLength=d,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=D,C.numLightProbes=P,n.version=S_++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),h++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Fp(r){let e=new T_(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function A_(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Fp(r),e.set(i,[o])):s>=a.length?(o=new Fp(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(r,e,t){let n=new bi,i=new Ve,s=new Ve,a=new Ct,o=new Os({depthPacking:Cc}),l=new ks,c={},u=t.maxTextureSize,h={[ci]:In,[In]:ci,[un]:un},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ht;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new De(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(L,P,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;let S=r.getRenderTarget(),w=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),O=r.state;O.setBlending(hn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=p!==Si&&this.type===Si,W=p===Si&&this.type!==Si;for(let J=0,Y=L.length;J<Y;J++){let he=L[J],j=he.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let Q=j.getFrameExtents();if(i.multiply(Q),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,j.mapSize.y=s.y)),j.map===null||G===!0||W===!0){let Ee=this.type!==Si?{minFilter:ln,magFilter:ln}:{};j.map!==null&&j.map.dispose(),j.map=new sn(i.x,i.y,Ee),j.map.texture.name=he.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();let ge=j.getViewportCount();for(let Ee=0;Ee<ge;Ee++){let Ge=j.getViewport(Ee);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),O.viewport(a),j.updateMatrices(he,Ee),n=j.getFrustum(),_(P,C,j.camera,he,this.type)}j.isPointLightShadow!==!0&&this.type===Si&&M(j,C),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,w,R)};function M(L,P){let C=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new sn(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(P,null,C,f,x,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(P,null,C,d,x,null)}function y(L,P,C,S){let w=null,R=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)w=R;else if(w=C.isPointLight===!0?l:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=w.uuid,G=P.uuid,W=c[O];W===void 0&&(W={},c[O]=W);let J=W[G];J===void 0&&(J=w.clone(),W[G]=J,P.addEventListener("dispose",D)),w=J}if(w.visible=P.visible,w.wireframe=P.wireframe,S===Si?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=r.properties.get(w);O.light=C}return w}function _(L,P,C,S,w){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Si)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);let G=e.update(L),W=L.material;if(Array.isArray(W)){let J=G.groups;for(let Y=0,he=J.length;Y<he;Y++){let j=J[Y],Q=W[j.materialIndex];if(Q&&Q.visible){let ge=y(L,Q,S,w);L.onBeforeShadow(r,L,P,C,G,ge,j),r.renderBufferDirect(C,null,G,ge,L,j),L.onAfterShadow(r,L,P,C,G,ge,j)}}}else if(W.visible){let J=y(L,W,S,w);L.onBeforeShadow(r,L,P,C,G,J,null),r.renderBufferDirect(C,null,G,J,L,null),L.onAfterShadow(r,L,P,C,G,J,null)}}let O=L.children;for(let G=0,W=O.length;G<W;G++)_(O[G],P,C,S,w)}function D(L){L.target.removeEventListener("dispose",D);for(let C in c){let S=c[C],w=L.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}var I_={[Nl]:Fl,[Ol]:Bl,[kl]:Hl,[Cr]:zl,[Fl]:Nl,[Bl]:Ol,[Hl]:kl,[zl]:Cr};function D_(r,e){function t(){let X=!1,ie=new Ct,ne=null,ve=new Ct(0,0,0,0);return{setMask:function(We){ne!==We&&!X&&(r.colorMask(We,We,We,We),ne=We)},setLocked:function(We){X=We},setClear:function(We,Xe,ht,Ft,nn){nn===!0&&(We*=Ft,Xe*=Ft,ht*=Ft),ie.set(We,Xe,ht,Ft),ve.equals(ie)===!1&&(r.clearColor(We,Xe,ht,Ft),ve.copy(ie))},reset:function(){X=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let X=!1,ie=!1,ne=null,ve=null,We=null;return{setReversed:function(Xe){if(ie!==Xe){let ht=e.get("EXT_clip_control");Xe?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),ie=Xe;let Ft=We;We=null,this.setClear(Ft)}},getReversed:function(){return ie},setTest:function(Xe){Xe?xe(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Xe){ne!==Xe&&!X&&(r.depthMask(Xe),ne=Xe)},setFunc:function(Xe){if(ie&&(Xe=I_[Xe]),ve!==Xe){switch(Xe){case Nl:r.depthFunc(r.NEVER);break;case Fl:r.depthFunc(r.ALWAYS);break;case Ol:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case kl:r.depthFunc(r.EQUAL);break;case zl:r.depthFunc(r.GEQUAL);break;case Bl:r.depthFunc(r.GREATER);break;case Hl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Xe}},setLocked:function(Xe){X=Xe},setClear:function(Xe){We!==Xe&&(ie&&(Xe=1-Xe),r.clearDepth(Xe),We=Xe)},reset:function(){X=!1,ne=null,ve=null,We=null,ie=!1}}}function i(){let X=!1,ie=null,ne=null,ve=null,We=null,Xe=null,ht=null,Ft=null,nn=null;return{setTest:function(ft){X||(ft?xe(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(ft){ie!==ft&&!X&&(r.stencilMask(ft),ie=ft)},setFunc:function(ft,Kt,zn){(ne!==ft||ve!==Kt||We!==zn)&&(r.stencilFunc(ft,Kt,zn),ne=ft,ve=Kt,We=zn)},setOp:function(ft,Kt,zn){(Xe!==ft||ht!==Kt||Ft!==zn)&&(r.stencilOp(ft,Kt,zn),Xe=ft,ht=Kt,Ft=zn)},setLocked:function(ft){X=ft},setClear:function(ft){nn!==ft&&(r.clearStencil(ft),nn=ft)},reset:function(){X=!1,ie=null,ne=null,ve=null,We=null,Xe=null,ht=null,Ft=null,nn=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,D=null,L=null,P=new Be(0,0,0),C=0,S=!1,w=null,R=null,O=null,G=null,W=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,he=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=he>=1):j.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=he>=2);let Q=null,ge={},Ee=r.getParameter(r.SCISSOR_BOX),Ge=r.getParameter(r.VIEWPORT),Ye=new Ct().fromArray(Ee),te=new Ct().fromArray(Ge);function de(X,ie,ne,ve){let We=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(X,Xe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<ne;ht++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,We):r.texImage2D(ie+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,We);return Xe}let fe={};fe[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(r.DEPTH_TEST),a.setFunc(Cr),Fe(!1),ke(sh),xe(r.CULL_FACE),A(hn);function xe(X){u[X]!==!0&&(r.enable(X),u[X]=!0)}function Ae(X){u[X]!==!1&&(r.disable(X),u[X]=!1)}function Qe(X,ie){return h[X]!==ie?(r.bindFramebuffer(X,ie),h[X]=ie,X===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ie),X===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Le(X,ie){let ne=d,ve=!1;if(X){ne=f.get(ie),ne===void 0&&(ne=[],f.set(ie,ne));let We=X.textures;if(ne.length!==We.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,ht=We.length;Xe<ht;Xe++)ne[Xe]=r.COLOR_ATTACHMENT0+Xe;ne.length=We.length,ve=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ne)}function rt(X){return m!==X?(r.useProgram(X),m=X,!0):!1}let $e={[Vn]:r.FUNC_ADD,[Ud]:r.FUNC_SUBTRACT,[Nd]:r.FUNC_REVERSE_SUBTRACT};$e[Fd]=r.MIN,$e[Od]=r.MAX;let Oe={[Gr]:r.ZERO,[kd]:r.ONE,[zd]:r.SRC_COLOR,[hl]:r.SRC_ALPHA,[Vd]:r.SRC_ALPHA_SATURATE,[Ka]:r.DST_COLOR,[Za]:r.DST_ALPHA,[Bd]:r.ONE_MINUS_SRC_COLOR,[fl]:r.ONE_MINUS_SRC_ALPHA,[Gd]:r.ONE_MINUS_DST_COLOR,[Hd]:r.ONE_MINUS_DST_ALPHA,[Wd]:r.CONSTANT_COLOR,[Xd]:r.ONE_MINUS_CONSTANT_COLOR,[qd]:r.CONSTANT_ALPHA,[jd]:r.ONE_MINUS_CONSTANT_ALPHA};function A(X,ie,ne,ve,We,Xe,ht,Ft,nn,ft){if(X===hn){x===!0&&(Ae(r.BLEND),x=!1);return}if(x===!1&&(xe(r.BLEND),x=!0),X!==Ul){if(X!==g||ft!==S){if((p!==Vn||_!==Vn)&&(r.blendEquation(r.FUNC_ADD),p=Vn,_=Vn),ft)switch(X){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jn:r.blendFunc(r.ONE,r.ONE);break;case oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}M=null,y=null,D=null,L=null,P.set(0,0,0),C=0,g=X,S=ft}return}We=We||ie,Xe=Xe||ne,ht=ht||ve,(ie!==p||We!==_)&&(r.blendEquationSeparate($e[ie],$e[We]),p=ie,_=We),(ne!==M||ve!==y||Xe!==D||ht!==L)&&(r.blendFuncSeparate(Oe[ne],Oe[ve],Oe[Xe],Oe[ht]),M=ne,y=ve,D=Xe,L=ht),(Ft.equals(P)===!1||nn!==C)&&(r.blendColor(Ft.r,Ft.g,Ft.b,nn),P.copy(Ft),C=nn),g=X,S=!1}function qe(X,ie){X.side===un?Ae(r.CULL_FACE):xe(r.CULL_FACE);let ne=X.side===In;ie&&(ne=!ne),Fe(ne),X.blending===Rr&&X.transparent===!1?A(hn):A(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);let ve=X.stencilWrite;o.setTest(ve),ve&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),V(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function ke(X){X!==Dd?(xe(r.CULL_FACE),X!==R&&(X===sh?r.cullFace(r.BACK):X===Ld?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),R=X}function Te(X){X!==O&&(Y&&r.lineWidth(X),O=X)}function V(X,ie,ne){X?(xe(r.POLYGON_OFFSET_FILL),(G!==ie||W!==ne)&&(r.polygonOffset(ie,ne),G=ie,W=ne)):Ae(r.POLYGON_OFFSET_FILL)}function ae(X){X?xe(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function E(X){X===void 0&&(X=r.TEXTURE0+J-1),Q!==X&&(r.activeTexture(X),Q=X)}function T(X,ie,ne){ne===void 0&&(Q===null?ne=r.TEXTURE0+J-1:ne=Q);let ve=ge[ne];ve===void 0&&(ve={type:void 0,texture:void 0},ge[ne]=ve),(ve.type!==X||ve.texture!==ie)&&(Q!==ne&&(r.activeTexture(ne),Q=ne),r.bindTexture(X,ie||fe[X]),ve.type=X,ve.texture=ie)}function H(){let X=ge[Q];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ee(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(X){Ye.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ye.copy(X))}function Re(X){te.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),te.copy(X))}function at(X,ie){let ne=c.get(ie);ne===void 0&&(ne=new WeakMap,c.set(ie,ne));let ve=ne.get(X);ve===void 0&&(ve=r.getUniformBlockIndex(ie,X.name),ne.set(X,ve))}function Ze(X,ie){let ve=c.get(ie).get(X);l.get(ie)!==ve&&(r.uniformBlockBinding(ie,ve,X.__bindingPointIndex),l.set(ie,ve))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,ge={},h={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,D=null,L=null,P=new Be(0,0,0),C=0,S=!1,w=null,R=null,O=null,G=null,W=null,Ye.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xe,disable:Ae,bindFramebuffer:Qe,drawBuffers:Le,useProgram:rt,setBlending:A,setMaterial:qe,setFlipSided:Fe,setCullFace:ke,setLineWidth:Te,setPolygonOffset:V,setScissorTest:ae,activeTexture:E,bindTexture:T,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:oe,texImage2D:pe,texImage3D:Ie,updateUBOMapping:at,uniformBlockBinding:Ze,texStorage2D:me,texStorage3D:le,texSubImage2D:ce,texSubImage3D:He,compressedTexSubImage2D:Pe,compressedTexSubImage3D:re,scissor:ze,viewport:Re,reset:it}}function L_(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,T){return d?new OffscreenCanvas(E,T):Ts("canvas")}function x(E,T,H){let ee=1,oe=ae(E);if((oe.width>H||oe.height>H)&&(ee=H/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(ee*oe.width),He=Math.floor(ee*oe.height);h===void 0&&(h=m(ce,He));let Pe=T?m(ce,He):h;return Pe.width=ce,Pe.height=He,Pe.getContext("2d").drawImage(E,0,0,ce,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ce+"x"+He+")."),Pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){r.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(E,T,H,ee,oe=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=T;if(T===r.RED&&(H===r.FLOAT&&(ce=r.R32F),H===r.HALF_FLOAT&&(ce=r.R16F),H===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ce=r.R8UI),H===r.UNSIGNED_SHORT&&(ce=r.R16UI),H===r.UNSIGNED_INT&&(ce=r.R32UI),H===r.BYTE&&(ce=r.R8I),H===r.SHORT&&(ce=r.R16I),H===r.INT&&(ce=r.R32I)),T===r.RG&&(H===r.FLOAT&&(ce=r.RG32F),H===r.HALF_FLOAT&&(ce=r.RG16F),H===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(ce=r.RG8UI),H===r.UNSIGNED_SHORT&&(ce=r.RG16UI),H===r.UNSIGNED_INT&&(ce=r.RG32UI),H===r.BYTE&&(ce=r.RG8I),H===r.SHORT&&(ce=r.RG16I),H===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),H===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),H===r.UNSIGNED_INT&&(ce=r.RGB32UI),H===r.BYTE&&(ce=r.RGB8I),H===r.SHORT&&(ce=r.RGB16I),H===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),H===r.UNSIGNED_INT&&(ce=r.RGBA32UI),H===r.BYTE&&(ce=r.RGBA8I),H===r.SHORT&&(ce=r.RGBA16I),H===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){let He=oe?Ta:bt.getTransfer(ee);H===r.FLOAT&&(ce=r.RGBA32F),H===r.HALF_FLOAT&&(ce=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ce=He===Dt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function _(E,T){let H;return E?T===null||T===dr||T===pr?H=r.DEPTH24_STENCIL8:T===An?H=r.DEPTH32F_STENCIL8:T===Hs&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===dr||T===pr?H=r.DEPTH_COMPONENT24:T===An?H=r.DEPTH_COMPONENT32F:T===Hs&&(H=r.DEPTH_COMPONENT16),H}function D(E,T){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==ln&&E.minFilter!==rn?Math.log2(Math.max(T.width,T.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?T.mipmaps.length:1}function L(E){let T=E.target;T.removeEventListener("dispose",L),C(T),T.isVideoTexture&&u.delete(T)}function P(E){let T=E.target;T.removeEventListener("dispose",P),w(T)}function C(E){let T=n.get(E);if(T.__webglInit===void 0)return;let H=E.source,ee=f.get(H);if(ee){let oe=ee[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(E),Object.keys(ee).length===0&&f.delete(H)}n.remove(E)}function S(E){let T=n.get(E);r.deleteTexture(T.__webglTexture);let H=E.source,ee=f.get(H);delete ee[T.__cacheKey],a.memory.textures--}function w(E){let T=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let oe=0;oe<T.__webglFramebuffer[ee].length;oe++)r.deleteFramebuffer(T.__webglFramebuffer[ee][oe]);else r.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)r.deleteFramebuffer(T.__webglFramebuffer[ee]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let H=E.textures;for(let ee=0,oe=H.length;ee<oe;ee++){let ce=n.get(H[ee]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(H[ee])}n.remove(E)}let R=0;function O(){R=0}function G(){let E=R;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function W(E){let T=[];return T.push(E.wrapS),T.push(E.wrapT),T.push(E.wrapR||0),T.push(E.magFilter),T.push(E.minFilter),T.push(E.anisotropy),T.push(E.internalFormat),T.push(E.format),T.push(E.type),T.push(E.generateMipmaps),T.push(E.premultiplyAlpha),T.push(E.flipY),T.push(E.unpackAlignment),T.push(E.colorSpace),T.join()}function J(E,T){let H=n.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,E,T);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+T)}function Y(E,T){let H=n.get(E);if(E.version>0&&H.__version!==E.version){te(H,E,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+T)}function he(E,T){let H=n.get(E);if(E.version>0&&H.__version!==E.version){te(H,E,T);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+T)}function j(E,T){let H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+T)}let Q={[jt]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[Ss]:r.MIRRORED_REPEAT},ge={[ln]:r.NEAREST,[Kl]:r.NEAREST_MIPMAP_NEAREST,[Xr]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Bs]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},Ee={[ep]:r.NEVER,[ap]:r.ALWAYS,[tp]:r.LESS,[bh]:r.LEQUAL,[np]:r.EQUAL,[sp]:r.GEQUAL,[ip]:r.GREATER,[rp]:r.NOTEQUAL};function Ge(E,T){if(T.type===An&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===rn||T.magFilter===Bs||T.magFilter===Xr||T.magFilter===Qn||T.minFilter===rn||T.minFilter===Bs||T.minFilter===Xr||T.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,Q[T.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,Q[T.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,Q[T.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,ge[T.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,ge[T.minFilter]),T.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ln||T.minFilter!==Xr&&T.minFilter!==Qn||T.type===An&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ye(E,T){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,T.addEventListener("dispose",L));let ee=T.source,oe=f.get(ee);oe===void 0&&(oe={},f.set(ee,oe));let ce=W(T);if(ce!==E.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),oe[ce].usedTimes++;let He=oe[E.__cacheKey];He!==void 0&&(oe[E.__cacheKey].usedTimes--,He.usedTimes===0&&S(T)),E.__cacheKey=ce,E.__webglTexture=oe[ce].texture}return H}function te(E,T,H){let ee=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=r.TEXTURE_3D);let oe=Ye(E,T),ce=T.source;t.bindTexture(ee,E.__webglTexture,r.TEXTURE0+H);let He=n.get(ce);if(ce.version!==He.__version||oe===!0){t.activeTexture(r.TEXTURE0+H);let Pe=bt.getPrimaries(bt.workingColorSpace),re=T.colorSpace===di?null:bt.getPrimaries(T.colorSpace),me=T.colorSpace===di||Pe===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let le=x(T.image,!1,i.maxTextureSize);le=V(T,le);let pe=s.convert(T.format,T.colorSpace),Ie=s.convert(T.type),ze=y(T.internalFormat,pe,Ie,T.colorSpace,T.isVideoTexture);Ge(ee,T);let Re,at=T.mipmaps,Ze=T.isVideoTexture!==!0,it=He.__version===void 0||oe===!0,X=ce.dataReady,ie=D(T,le);if(T.isDepthTexture)ze=_(T.format===mr,T.type),it&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,ze,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,ze,le.width,le.height,0,pe,Ie,null));else if(T.isDataTexture)if(at.length>0){Ze&&it&&t.texStorage2D(r.TEXTURE_2D,ie,ze,at[0].width,at[0].height);for(let ne=0,ve=at.length;ne<ve;ne++)Re=at[ne],Ze?X&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Re.width,Re.height,pe,Ie,Re.data):t.texImage2D(r.TEXTURE_2D,ne,ze,Re.width,Re.height,0,pe,Ie,Re.data);T.generateMipmaps=!1}else Ze?(it&&t.texStorage2D(r.TEXTURE_2D,ie,ze,le.width,le.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,pe,Ie,le.data)):t.texImage2D(r.TEXTURE_2D,0,ze,le.width,le.height,0,pe,Ie,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,ze,at[0].width,at[0].height,le.depth);for(let ne=0,ve=at.length;ne<ve;ne++)if(Re=at[ne],T.format!==En)if(pe!==null)if(Ze){if(X)if(T.layerUpdates.size>0){let We=Rh(Re.width,Re.height,T.format,T.type);for(let Xe of T.layerUpdates){let ht=Re.data.subarray(Xe*We/Re.data.BYTES_PER_ELEMENT,(Xe+1)*We/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Xe,Re.width,Re.height,1,pe,ht)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,Re.width,Re.height,le.depth,pe,Re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,ze,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,Re.width,Re.height,le.depth,pe,Ie,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,ze,Re.width,Re.height,le.depth,0,pe,Ie,Re.data)}else{Ze&&it&&t.texStorage2D(r.TEXTURE_2D,ie,ze,at[0].width,at[0].height);for(let ne=0,ve=at.length;ne<ve;ne++)Re=at[ne],T.format!==En?pe!==null?Ze?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,Re.width,Re.height,pe,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?X&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Re.width,Re.height,pe,Ie,Re.data):t.texImage2D(r.TEXTURE_2D,ne,ze,Re.width,Re.height,0,pe,Ie,Re.data)}else if(T.isDataArrayTexture)if(Ze){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,ze,le.width,le.height,le.depth),X)if(T.layerUpdates.size>0){let ne=Rh(le.width,le.height,T.format,T.type);for(let ve of T.layerUpdates){let We=le.data.subarray(ve*ne/le.data.BYTES_PER_ELEMENT,(ve+1)*ne/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,le.width,le.height,1,pe,Ie,We)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,Ie,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,le.width,le.height,le.depth,0,pe,Ie,le.data);else if(T.isData3DTexture)Ze?(it&&t.texStorage3D(r.TEXTURE_3D,ie,ze,le.width,le.height,le.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,Ie,le.data)):t.texImage3D(r.TEXTURE_3D,0,ze,le.width,le.height,le.depth,0,pe,Ie,le.data);else if(T.isFramebufferTexture){if(it)if(Ze)t.texStorage2D(r.TEXTURE_2D,ie,ze,le.width,le.height);else{let ne=le.width,ve=le.height;for(let We=0;We<ie;We++)t.texImage2D(r.TEXTURE_2D,We,ze,ne,ve,0,pe,Ie,null),ne>>=1,ve>>=1}}else if(at.length>0){if(Ze&&it){let ne=ae(at[0]);t.texStorage2D(r.TEXTURE_2D,ie,ze,ne.width,ne.height)}for(let ne=0,ve=at.length;ne<ve;ne++)Re=at[ne],Ze?X&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,pe,Ie,Re):t.texImage2D(r.TEXTURE_2D,ne,ze,pe,Ie,Re);T.generateMipmaps=!1}else if(Ze){if(it){let ne=ae(le);t.texStorage2D(r.TEXTURE_2D,ie,ze,ne.width,ne.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Ie,le)}else t.texImage2D(r.TEXTURE_2D,0,ze,pe,Ie,le);g(T)&&p(ee),He.__version=ce.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function de(E,T,H){if(T.image.length!==6)return;let ee=Ye(E,T),oe=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+H);let ce=n.get(oe);if(oe.version!==ce.__version||ee===!0){t.activeTexture(r.TEXTURE0+H);let He=bt.getPrimaries(bt.workingColorSpace),Pe=T.colorSpace===di?null:bt.getPrimaries(T.colorSpace),re=T.colorSpace===di||He===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let me=T.isCompressedTexture||T.image[0].isCompressedTexture,le=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let ve=0;ve<6;ve++)!me&&!le?pe[ve]=x(T.image[ve],!0,i.maxCubemapSize):pe[ve]=le?T.image[ve].image:T.image[ve],pe[ve]=V(T,pe[ve]);let Ie=pe[0],ze=s.convert(T.format,T.colorSpace),Re=s.convert(T.type),at=y(T.internalFormat,ze,Re,T.colorSpace),Ze=T.isVideoTexture!==!0,it=ce.__version===void 0||ee===!0,X=oe.dataReady,ie=D(T,Ie);Ge(r.TEXTURE_CUBE_MAP,T);let ne;if(me){Ze&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,at,Ie.width,Ie.height);for(let ve=0;ve<6;ve++){ne=pe[ve].mipmaps;for(let We=0;We<ne.length;We++){let Xe=ne[We];T.format!==En?ze!==null?Ze?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,Xe.width,Xe.height,ze,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,at,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,Xe.width,Xe.height,ze,Re,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,at,Xe.width,Xe.height,0,ze,Re,Xe.data)}}}else{if(ne=T.mipmaps,Ze&&it){ne.length>0&&ie++;let ve=ae(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(le){Ze?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,pe[ve].width,pe[ve].height,ze,Re,pe[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,pe[ve].width,pe[ve].height,0,ze,Re,pe[ve].data);for(let We=0;We<ne.length;We++){let ht=ne[We].image[ve].image;Ze?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,ht.width,ht.height,ze,Re,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,at,ht.width,ht.height,0,ze,Re,ht.data)}}else{Ze?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ze,Re,pe[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,ze,Re,pe[ve]);for(let We=0;We<ne.length;We++){let Xe=ne[We];Ze?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,ze,Re,Xe.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,at,ze,Re,Xe.image[ve])}}}g(T)&&p(r.TEXTURE_CUBE_MAP),ce.__version=oe.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function fe(E,T,H,ee,oe,ce){let He=s.convert(H.format,H.colorSpace),Pe=s.convert(H.type),re=y(H.internalFormat,He,Pe,H.colorSpace),me=n.get(T),le=n.get(H);if(le.__renderTarget=T,!me.__hasExternalTextures){let pe=Math.max(1,T.width>>ce),Ie=Math.max(1,T.height>>ce);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,ce,re,pe,Ie,T.depth,0,He,Pe,null):t.texImage2D(oe,ce,re,pe,Ie,0,He,Pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),ke(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,oe,le.__webglTexture,0,Fe(T)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,oe,le.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(E,T,H){if(r.bindRenderbuffer(r.RENDERBUFFER,E),T.depthBuffer){let ee=T.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,ce=_(T.stencilBuffer,oe),He=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=Fe(T);ke(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,ce,T.width,T.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,E)}else{let ee=T.textures;for(let oe=0;oe<ee.length;oe++){let ce=ee[oe],He=s.convert(ce.format,ce.colorSpace),Pe=s.convert(ce.type),re=y(ce.internalFormat,He,Pe,ce.colorSpace),me=Fe(T);H&&ke(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,re,T.width,T.height):ke(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,re,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,re,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(E,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);let oe=ee.__webglTexture,ce=Fe(T);if(T.depthTexture.format===ws)ke(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(T.depthTexture.format===mr)ke(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Qe(E){let T=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==E.depthTexture){let ee=E.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){let oe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),T.__depthDisposeCallback=oe}T.__boundDepthTexture=ee}if(E.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let ee=E.texture.mipmaps;ee&&ee.length>0?Ae(T.__webglFramebuffer[0],E):Ae(T.__webglFramebuffer,E)}else if(H){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=r.createRenderbuffer(),xe(T.__webglDepthbuffer[ee],E,!1);else{let oe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ce)}}else{let ee=E.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),xe(T.__webglDepthbuffer,E,!1);else{let oe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(E,T,H){let ee=n.get(E);T!==void 0&&fe(ee.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Qe(E)}function rt(E){let T=E.texture,H=n.get(E),ee=n.get(T);E.addEventListener("dispose",P);let oe=E.textures,ce=E.isWebGLCubeRenderTarget===!0,He=oe.length>1;if(He||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=T.version,a.memory.textures++),ce){H.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[Pe]=[];for(let re=0;re<T.mipmaps.length;re++)H.__webglFramebuffer[Pe][re]=r.createFramebuffer()}else H.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)H.__webglFramebuffer[Pe]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(He)for(let Pe=0,re=oe.length;Pe<re;Pe++){let me=n.get(oe[Pe]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&ke(E)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Pe=0;Pe<oe.length;Pe++){let re=oe[Pe];H.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[Pe]);let me=s.convert(re.format,re.colorSpace),le=s.convert(re.type),pe=y(re.internalFormat,me,le,re.colorSpace,E.isXRRenderTarget===!0),Ie=Fe(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,pe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,H.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)fe(H.__webglFramebuffer[Pe][re],E,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,re);else fe(H.__webglFramebuffer[Pe],E,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Pe=0,re=oe.length;Pe<re;Pe++){let me=oe[Pe],le=n.get(me);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),Ge(r.TEXTURE_2D,me),fe(H.__webglFramebuffer,E,me,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,0),g(me)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Pe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ee.__webglTexture),Ge(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)fe(H.__webglFramebuffer[re],E,T,r.COLOR_ATTACHMENT0,Pe,re);else fe(H.__webglFramebuffer,E,T,r.COLOR_ATTACHMENT0,Pe,0);g(T)&&p(Pe),t.unbindTexture()}E.depthBuffer&&Qe(E)}function $e(E){let T=E.textures;for(let H=0,ee=T.length;H<ee;H++){let oe=T[H];if(g(oe)){let ce=M(E),He=n.get(oe).__webglTexture;t.bindTexture(ce,He),p(ce),t.unbindTexture()}}}let Oe=[],A=[];function qe(E){if(E.samples>0){if(ke(E)===!1){let T=E.textures,H=E.width,ee=E.height,oe=r.COLOR_BUFFER_BIT,ce=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=n.get(E),Pe=T.length>1;if(Pe)for(let me=0;me<T.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);let re=E.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let me=0;me<T.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[me]);let le=n.get(T[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,H,ee,0,0,H,ee,oe,r.NEAREST),l===!0&&(Oe.length=0,A.length=0,Oe.push(r.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Oe.push(ce),A.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,A)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let me=0;me<T.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,He.__webglColorRenderbuffer[me]);let le=n.get(T[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let T=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Fe(E){return Math.min(i.maxSamples,E.samples)}function ke(E){let T=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(E){let T=a.render.frame;u.get(E)!==T&&(u.set(E,T),E.update())}function V(E,T){let H=E.colorSpace,ee=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==cn&&H!==di&&(bt.getTransfer(H)===Dt?(ee!==En||oe!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=he,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ke}function U_(r,e){function t(n,i=di){let s,a=bt.getTransfer(i);if(n===Dn)return r.UNSIGNED_BYTE;if(n===Ql)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return r.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return r.BYTE;if(n===fh)return r.SHORT;if(n===Hs)return r.UNSIGNED_SHORT;if(n===Jl)return r.INT;if(n===dr)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===en)return r.HALF_FLOAT;if(n===ph)return r.ALPHA;if(n===mh)return r.RGB;if(n===En)return r.RGBA;if(n===ws)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===Gs)return r.RED;if(n===ec)return r.RED_INTEGER;if(n===gh)return r.RG;if(n===tc)return r.RG_INTEGER;if(n===nc)return r.RGBA_INTEGER;if(n===Qa||n===$a||n===eo||n===to)if(a===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===rc||n===sc||n===ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oc||n===lc)return a===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===vc||n===bc||n===_c||n===yc||n===Mc||n===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===Sc||n===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===no)return a===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===Tc||n===Ac||n===Rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===no)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new pn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends Gi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=new Hh,g=t.getContextAttributes(),p=null,M=null,y=[],_=[],D=new Ve,L=null,P=new Qt;P.viewport=new Ct;let C=new Qt;C.viewport=new Ct;let S=[P,C],w=new Ll,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=y[te];return de===void 0&&(de=new Ps,y[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=y[te];return de===void 0&&(de=new Ps,y[te]=de),de.getGripSpace()},this.getHand=function(te){let de=y[te];return de===void 0&&(de=new Ps,y[te]=de),de.getHandSpace()};function G(te){let de=_.indexOf(te.inputSource);if(de===-1)return;let fe=y[de];fe!==void 0&&(fe.update(te.inputSource,te.frame,c||a),fe.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",J);for(let te=0;te<y.length;te++){let de=_[te];de!==null&&(_[te]=null,y[te].disconnect(de))}R=null,O=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,xe=null,Ae=null;g.depth&&(Ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=g.stencil?mr:ws,xe=g.stencil?pr:dr);let Qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new sn(f.textureWidth,f.textureHeight,{format:En,type:Dn,depthTexture:new Nr(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new sn(d.framebufferWidth,d.framebufferHeight,{format:En,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(te){for(let de=0;de<te.removed.length;de++){let fe=te.removed[de],xe=_.indexOf(fe);xe>=0&&(_[xe]=null,y[xe].disconnect(fe))}for(let de=0;de<te.added.length;de++){let fe=te.added[de],xe=_.indexOf(fe);if(xe===-1){for(let Qe=0;Qe<y.length;Qe++)if(Qe>=_.length){_.push(fe),xe=Qe;break}else if(_[Qe]===null){_[Qe]=fe,xe=Qe;break}if(xe===-1)break}let Ae=y[xe];Ae&&Ae.connect(fe)}}let Y=new F,he=new F;function j(te,de,fe){Y.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(fe.matrixWorld);let xe=Y.distanceTo(he),Ae=de.projectionMatrix.elements,Qe=fe.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),rt=Ae[14]/(Ae[10]+1),$e=(Ae[9]+1)/Ae[5],Oe=(Ae[9]-1)/Ae[5],A=(Ae[8]-1)/Ae[0],qe=(Qe[8]+1)/Qe[0],Fe=Le*A,ke=Le*qe,Te=xe/(-A+qe),V=Te*-A;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(V),te.translateZ(Te),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let ae=Le+Te,E=rt+Te,T=Fe-V,H=ke+(xe-V),ee=$e*rt/E*ae,oe=Oe*rt/E*ae;te.projectionMatrix.makePerspective(T,H,ee,oe,ae,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Q(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let de=te.near,fe=te.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),w.near=C.near=P.near=de,w.far=C.far=P.far=fe,(R!==w.near||O!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,O=w.far),P.layers.mask=te.layers.mask|2,C.layers.mask=te.layers.mask|4,w.layers.mask=P.layers.mask|C.layers.mask;let xe=te.parent,Ae=w.cameras;Q(w,xe);for(let Qe=0;Qe<Ae.length;Qe++)Q(Ae[Qe],xe);Ae.length===2?j(w,P,C):w.projectionMatrix.copy(P.projectionMatrix),ge(te,w,xe)};function ge(te,de,fe){fe===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(fe.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Dr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Ee=null;function Ge(te,de){if(u=de.getViewerPose(c||a),m=de,u!==null){let fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let xe=!1;fe.length!==w.cameras.length&&(w.cameras.length=0,xe=!0);for(let Le=0;Le<fe.length;Le++){let rt=fe[Le],$e=null;if(d!==null)$e=d.getViewport(rt);else{let A=h.getViewSubImage(f,rt);$e=A.viewport,Le===0&&(e.setRenderTargetTextures(M,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(M))}let Oe=S[Le];Oe===void 0&&(Oe=new Qt,Oe.layers.enable(Le),Oe.viewport=new Ct,S[Le]=Oe),Oe.matrix.fromArray(rt.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(rt.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set($e.x,$e.y,$e.width,$e.height),Le===0&&(w.matrix.copy(Oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xe===!0&&w.cameras.push(Oe)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){let Le=h.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,i.renderState)}}for(let fe=0;fe<y.length;fe++){let xe=_[fe],Ae=y[fe];xe!==null&&Ae!==void 0&&Ae.update(xe,de,c||a)}Ee&&Ee(te,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),m=null}let Ye=new Op;Ye.setAnimationLoop(Ge),this.setAnimationLoop=function(te){Ee=te},this.dispose=function(){}}},Yr=new ui,O_=new Je;function k_(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Sh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===In&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===In&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(g.envMap.value=y,Yr.copy(_),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Yr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z_(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let _=y.program;n.uniformBlockBinding(M,_)}function c(M,y){let _=i[M.id];_===void 0&&(m(M),_=u(M),i[M.id]=_,M.addEventListener("dispose",g));let D=y.program;n.updateUBOMapping(M,D);let L=e.render.frame;s[M.id]!==L&&(f(M),s[M.id]=L)}function u(M){let y=h();M.__bindingPointIndex=y;let _=r.createBuffer(),D=M.__size,L=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,D,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=i[M.id],_=M.uniforms,D=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let L=0,P=_.length;L<P;L++){let C=Array.isArray(_[L])?_[L]:[_[L]];for(let S=0,w=C.length;S<w;S++){let R=C[S];if(d(R,L,S,D)===!0){let O=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],W=0;for(let J=0;J<G.length;J++){let Y=G[J],he=x(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,O+W,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,W),W+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,y,_,D){let L=M.value,P=y+"_"+_;if(D[P]===void 0)return typeof L=="number"||typeof L=="boolean"?D[P]=L:D[P]=L.clone(),!0;{let C=D[P];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return D[P]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function m(M){let y=M.uniforms,_=0,D=16;for(let P=0,C=y.length;P<C;P++){let S=Array.isArray(y[P])?y[P]:[y[P]];for(let w=0,R=S.length;w<R;w++){let O=S[w],G=Array.isArray(O.value)?O.value:[O.value];for(let W=0,J=G.length;W<J;W++){let Y=G[W],he=x(Y),j=_%D,Q=j%he.boundary,ge=j+Q;_+=Q,ge!==0&&D-ge<he.storage&&(_+=D-ge),O.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=he.storage}}}let L=_%D;return L>0&&(_+=D-L),M.__size=_,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var js=class{constructor(e={}){let{canvas:t=op(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,D=!1;this._outputColorSpace=wt;let L=0,P=0,C=null,S=-1,w=null,R=new Ct,O=new Ct,G=null,W=new Be(0),J=0,Y=t.width,he=t.height,j=1,Q=null,ge=null,Ee=new Ct(0,0,Y,he),Ge=new Ct(0,0,Y,he),Ye=!1,te=new bi,de=!1,fe=!1,xe=new Je,Ae=new Je,Qe=new F,Le=new Ct,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Oe(){return C===null?j:1}let A=n;function qe(b,U){return t.getContext(b,U)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"176"}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),A===null){let U="webgl2";if(A=qe(U,b),A===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,ke,Te,V,ae,E,T,H,ee,oe,ce,He,Pe,re,me,le,pe,Ie,ze,Re,at,Ze,it,X;function ie(){Fe=new ib(A),Fe.init(),Ze=new U_(A,Fe),ke=new Kv(A,Fe,e,Ze),Te=new D_(A,Fe),ke.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),V=new ab(A),ae=new b_,E=new L_(A,Fe,Te,ae,ke,Ze,V),T=new Qv(_),H=new nb(_),ee=new fg(A),it=new Yv(A,ee),oe=new rb(A,ee,V,it),ce=new lb(A,oe,ee,V),ze=new ob(A,ke,E),le=new Jv(ae),He=new v_(_,T,H,Fe,ke,it,le),Pe=new k_(_,ae),re=new y_,me=new A_(Fe),Ie=new jv(_,T,H,Te,ce,d,l),pe=new P_(_,ce,ke),X=new z_(A,V,ke,Te),Re=new Zv(A,Fe,V),at=new sb(A,Fe,V),V.programs=He.programs,_.capabilities=ke,_.extensions=Fe,_.properties=ae,_.renderLists=re,_.shadowMap=pe,_.state=Te,_.info=V}ie();let ne=new Gh(_,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(Y,he,!1))},this.getSize=function(b){return b.set(Y,he)},this.setSize=function(b,U,N=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,he=U,t.width=Math.floor(b*j),t.height=Math.floor(U*j),N===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Y*j,he*j).floor()},this.setDrawingBufferSize=function(b,U,N){Y=b,he=U,j=N,t.width=Math.floor(b*N),t.height=Math.floor(U*N),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,U,N,B){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,U,N,B),Te.viewport(R.copy(Ee).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,U,N,B){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,U,N,B),Te.scissor(O.copy(Ge).multiplyScalar(j).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){Te.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,N=!0){let B=0;if(b){let k=!1;if(C!==null){let q=C.texture.format;k=q===nc||q===tc||q===ec}if(k){let q=C.texture.type,K=q===Dn||q===dr||q===Hs||q===pr||q===Ql||q===$l,$=Ie.getClearColor(),ue=Ie.getClearAlpha(),ye=$.r,be=$.g,Me=$.b;K?(m[0]=ye,m[1]=be,m[2]=Me,m[3]=ue,A.clearBufferuiv(A.COLOR,0,m)):(x[0]=ye,x[1]=be,x[2]=Me,x[3]=ue,A.clearBufferiv(A.COLOR,0,x))}else B|=A.COLOR_BUFFER_BIT}U&&(B|=A.DEPTH_BUFFER_BIT),N&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Ie.dispose(),re.dispose(),me.dispose(),ae.dispose(),T.dispose(),H.dispose(),ce.dispose(),it.dispose(),X.dispose(),He.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",yr),ne.removeEventListener("sessionend",ls),Z.stop()};function ve(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=V.autoReset,U=pe.enabled,N=pe.autoUpdate,B=pe.needsUpdate,k=pe.type;ie(),V.autoReset=b,pe.enabled=U,pe.autoUpdate=N,pe.needsUpdate=B,pe.type=k}function Xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let U=b.target;U.removeEventListener("dispose",ht),Ft(U)}function Ft(b){nn(b),ae.remove(b)}function nn(b){let U=ae.get(b).programs;U!==void 0&&(U.forEach(function(N){He.releaseProgram(N)}),b.isShaderMaterial&&He.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,N,B,k,q){U===null&&(U=rt);let K=k.isMesh&&k.matrixWorld.determinant()<0,$=cs(b,U,N,B,k);Te.setMaterial(B,K);let ue=N.index,ye=1;if(B.wireframe===!0){if(ue=oe.getWireframeAttribute(N),ue===void 0)return;ye=2}let be=N.drawRange,Me=N.attributes.position,we=be.start*ye,Ue=(be.start+be.count)*ye;q!==null&&(we=Math.max(we,q.start*ye),Ue=Math.min(Ue,(q.start+q.count)*ye)),ue!==null?(we=Math.max(we,0),Ue=Math.min(Ue,ue.count)):Me!=null&&(we=Math.max(we,0),Ue=Math.min(Ue,Me.count));let tt=Ue-we;if(tt<0||tt===1/0)return;it.setup(k,B,$,N,ue);let ct,st=Re;if(ue!==null&&(ct=ee.get(ue),st=at,st.setIndex(ct)),k.isMesh)B.wireframe===!0?(Te.setLineWidth(B.wireframeLinewidth*Oe()),st.setMode(A.LINES)):st.setMode(A.TRIANGLES);else if(k.isLine){let et=B.linewidth;et===void 0&&(et=1),Te.setLineWidth(et*Oe()),k.isLineSegments?st.setMode(A.LINES):k.isLineLoop?st.setMode(A.LINE_LOOP):st.setMode(A.LINE_STRIP)}else k.isPoints?st.setMode(A.POINTS):k.isSprite&&st.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ro("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let et=k._multiDrawStarts,pt=k._multiDrawCounts,nt=k._multiDrawCount,It=ue?ee.get(ue).bytesPerElement:1,fn=ae.get(B).currentProgram.getUniforms();for(let Rt=0;Rt<nt;Rt++)fn.setValue(A,"_gl_DrawID",Rt),st.render(et[Rt]/It,pt[Rt])}else if(k.isInstancedMesh)st.renderInstances(we,tt,k.count);else if(N.isInstancedBufferGeometry){let et=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,pt=Math.min(N.instanceCount,et);st.renderInstances(we,tt,pt)}else st.render(we,tt)};function ft(b,U,N){b.transparent===!0&&b.side===un&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Pt(b,U,N),b.side=ci,b.needsUpdate=!0,Pt(b,U,N),b.side=un):Pt(b,U,N)}this.compile=function(b,U,N=null){N===null&&(N=b),p=me.get(N),p.init(U),y.push(p),N.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==N&&b.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let B=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let q=k.material;if(q)if(Array.isArray(q))for(let K=0;K<q.length;K++){let $=q[K];ft($,N,k),B.add($)}else ft(q,N,k),B.add(q)}),p=y.pop(),B},this.compileAsync=function(b,U,N=null){let B=this.compile(b,U,N);return new Promise(k=>{function q(){if(B.forEach(function(K){ae.get(K).currentProgram.isReady()&&B.delete(K)}),B.size===0){k(b);return}setTimeout(q,10)}Fe.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Kt=null;function zn(b){Kt&&Kt(b)}function yr(){Z.stop()}function ls(){Z.start()}let Z=new Op;Z.setAnimationLoop(zn),typeof self<"u"&&Z.setContext(self),this.setAnimationLoop=function(b){Kt=b,ne.setAnimationLoop(b),b===null?Z.stop():Z.start()},ne.addEventListener("sessionstart",yr),ne.addEventListener("sessionend",ls),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,C),p=me.get(b,y.length),p.init(U),y.push(p),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,de=le.init(this.clippingPlanes,fe),g=re.get(b,M.length),g.init(),M.push(g),ne.enabled===!0&&ne.isPresenting===!0){let q=_.xr.getDepthSensingMesh();q!==null&&Se(q,U,-1/0,_.sortObjects)}Se(b,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Q,ge),$e=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,$e&&Ie.addToRenderList(g,b),this.info.render.frame++,de===!0&&le.beginShadows();let N=p.state.shadowsArray;pe.render(N,b,U),de===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,k=g.transmissive;if(p.setupLights(),U.isArrayCamera){let q=U.cameras;if(k.length>0)for(let K=0,$=q.length;K<$;K++){let ue=q[K];Ke(B,k,b,ue)}$e&&Ie.render(b);for(let K=0,$=q.length;K<$;K++){let ue=q[K];Ne(g,b,ue,ue.viewport)}}else k.length>0&&Ke(B,k,b,U),$e&&Ie.render(b),Ne(g,b,U);C!==null&&P===0&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,U),it.resetDefaultState(),S=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],de===!0&&le.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Se(b,U,N,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)N=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){B&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);let K=ce.update(b),$=b.material;$.visible&&g.push(b,K,$,N,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||te.intersectsObject(b))){let K=ce.update(b),$=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(K.boundingSphere===null&&K.computeBoundingSphere(),Le.copy(K.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray($)){let ue=K.groups;for(let ye=0,be=ue.length;ye<be;ye++){let Me=ue[ye],we=$[Me.materialIndex];we&&we.visible&&g.push(b,K,we,N,Le.z,Me)}}else $.visible&&g.push(b,K,$,N,Le.z,null)}}let q=b.children;for(let K=0,$=q.length;K<$;K++)Se(q[K],U,N,B)}function Ne(b,U,N,B){let k=b.opaque,q=b.transmissive,K=b.transparent;p.setupLightsView(N),de===!0&&le.setGlobalState(_.clippingPlanes,N),B&&Te.viewport(R.copy(B)),k.length>0&&lt(k,U,N),q.length>0&&lt(q,U,N),K.length>0&&lt(K,U,N),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ke(b,U,N,B){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new sn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?en:Dn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let q=p.state.transmissionRenderTarget[B.id],K=B.viewport||R;q.setSize(K.z*_.transmissionResolutionScale,K.w*_.transmissionResolutionScale);let $=_.getRenderTarget();_.setRenderTarget(q),_.getClearColor(W),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),$e&&Ie.render(N);let ue=_.toneMapping;_.toneMapping=Ki;let ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),de===!0&&le.setGlobalState(_.clippingPlanes,B),lt(b,N,B),E.updateMultisampleRenderTarget(q),E.updateRenderTargetMipmap(q),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Me=0,we=U.length;Me<we;Me++){let Ue=U[Me],tt=Ue.object,ct=Ue.geometry,st=Ue.material,et=Ue.group;if(st.side===un&&tt.layers.test(B.layers)){let pt=st.side;st.side=In,st.needsUpdate=!0,dt(tt,N,B,ct,st,et),st.side=pt,st.needsUpdate=!0,be=!0}}be===!0&&(E.updateMultisampleRenderTarget(q),E.updateRenderTargetMipmap(q))}_.setRenderTarget($),_.setClearColor(W,J),ye!==void 0&&(B.viewport=ye),_.toneMapping=ue}function lt(b,U,N){let B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,q=b.length;k<q;k++){let K=b[k],$=K.object,ue=K.geometry,ye=K.group,be=K.material;be.allowOverride===!0&&B!==null&&(be=B),$.layers.test(N.layers)&&dt($,U,N,ue,be,ye)}}function dt(b,U,N,B,k,q){b.onBeforeRender(_,U,N,B,k,q),b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(_,U,N,B,b,q),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=In,k.needsUpdate=!0,_.renderBufferDirect(N,U,B,k,b,q),k.side=ci,k.needsUpdate=!0,_.renderBufferDirect(N,U,B,k,b,q),k.side=un):_.renderBufferDirect(N,U,B,k,b,q),b.onAfterRender(_,U,N,B,k,q)}function Pt(b,U,N){U.isScene!==!0&&(U=rt);let B=ae.get(b),k=p.state.lights,q=p.state.shadowsArray,K=k.state.version,$=He.getParameters(b,k.state,q,U,N),ue=He.getProgramCacheKey($),ye=B.programs;B.environment=b.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(b.isMeshStandardMaterial?H:T).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,ye===void 0&&(b.addEventListener("dispose",ht),ye=new Map,B.programs=ye);let be=ye.get(ue);if(be!==void 0){if(B.currentProgram===be&&B.lightsStateVersion===K)return qn(b,$),be}else $.uniforms=He.getUniforms(b),b.onBeforeCompile($,_),be=He.acquireProgram($,ue),ye.set(ue,be),B.uniforms=$.uniforms;let Me=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=le.uniform),qn(b,$),B.needsLights=gi(b),B.lightsStateVersion=K,B.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.directionalShadowMap.value=k.state.directionalShadowMap,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotShadowMap.value=k.state.spotShadowMap,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMap.value=k.state.pointShadowMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),B.currentProgram=be,B.uniformsList=null,be}function ii(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=qs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function qn(b,U){let N=ae.get(b);N.outputColorSpace=U.outputColorSpace,N.batching=U.batching,N.batchingColor=U.batchingColor,N.instancing=U.instancing,N.instancingColor=U.instancingColor,N.instancingMorph=U.instancingMorph,N.skinning=U.skinning,N.morphTargets=U.morphTargets,N.morphNormals=U.morphNormals,N.morphColors=U.morphColors,N.morphTargetsCount=U.morphTargetsCount,N.numClippingPlanes=U.numClippingPlanes,N.numIntersection=U.numClipIntersection,N.vertexAlphas=U.vertexAlphas,N.vertexTangents=U.vertexTangents,N.toneMapping=U.toneMapping}function cs(b,U,N,B,k){U.isScene!==!0&&(U=rt),E.resetTextureUnits();let q=U.fog,K=B.isMeshStandardMaterial?U.environment:null,$=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cn,ue=(B.isMeshStandardMaterial?H:T).get(B.envMap||K),ye=B.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,be=!!N.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!N.morphAttributes.position,we=!!N.morphAttributes.normal,Ue=!!N.morphAttributes.color,tt=Ki;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tt=_.toneMapping);let ct=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=ct!==void 0?ct.length:0,et=ae.get(B),pt=p.state.lights;if(de===!0&&(fe===!0||b!==w)){let kt=b===w&&B.id===S;le.setState(B,b,kt)}let nt=!1;B.version===et.__version?(et.needsLights&&et.lightsStateVersion!==pt.state.version||et.outputColorSpace!==$||k.isBatchedMesh&&et.batching===!1||!k.isBatchedMesh&&et.batching===!0||k.isBatchedMesh&&et.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&et.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&et.instancing===!1||!k.isInstancedMesh&&et.instancing===!0||k.isSkinnedMesh&&et.skinning===!1||!k.isSkinnedMesh&&et.skinning===!0||k.isInstancedMesh&&et.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&et.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&et.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&et.instancingMorph===!1&&k.morphTexture!==null||et.envMap!==ue||B.fog===!0&&et.fog!==q||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==le.numPlanes||et.numIntersection!==le.numIntersection)||et.vertexAlphas!==ye||et.vertexTangents!==be||et.morphTargets!==Me||et.morphNormals!==we||et.morphColors!==Ue||et.toneMapping!==tt||et.morphTargetsCount!==st)&&(nt=!0):(nt=!0,et.__version=B.version);let It=et.currentProgram;nt===!0&&(It=Pt(B,U,k));let fn=!1,Rt=!1,St=!1,ut=It.getUniforms(),Jt=et.uniforms;if(Te.useProgram(It.program)&&(fn=!0,Rt=!0,St=!0),B.id!==S&&(S=B.id,Rt=!0),fn||w!==b){Te.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),cp(xe),up(xe),ut.setValue(A,"projectionMatrix",xe)):ut.setValue(A,"projectionMatrix",b.projectionMatrix),ut.setValue(A,"viewMatrix",b.matrixWorldInverse);let dn=ut.map.cameraPosition;dn!==void 0&&dn.setValue(A,Qe.setFromMatrixPosition(b.matrixWorld)),ke.logarithmicDepthBuffer&&ut.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Rt=!0,St=!0)}if(k.isSkinnedMesh){ut.setOptional(A,k,"bindMatrix"),ut.setOptional(A,k,"bindMatrixInverse");let kt=k.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ut.setValue(A,"boneTexture",kt.boneTexture,E))}k.isBatchedMesh&&(ut.setOptional(A,k,"batchingTexture"),ut.setValue(A,"batchingTexture",k._matricesTexture,E),ut.setOptional(A,k,"batchingIdTexture"),ut.setValue(A,"batchingIdTexture",k._indirectTexture,E),ut.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(A,"batchingColorTexture",k._colorsTexture,E));let _n=N.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ze.update(k,N,It),(Rt||et.receiveShadow!==k.receiveShadow)&&(et.receiveShadow=k.receiveShadow,ut.setValue(A,"receiveShadow",k.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Jt.envMap.value=ue,Jt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Rt&&(ut.setValue(A,"toneMappingExposure",_.toneMappingExposure),et.needsLights&&Bn(Jt,St),q&&B.fog===!0&&Pe.refreshFogUniforms(Jt,q),Pe.refreshMaterialUniforms(Jt,B,j,he,p.state.transmissionRenderTarget[b.id]),qs.upload(A,ii(et),Jt,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qs.upload(A,ii(et),Jt,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(A,"center",k.center),ut.setValue(A,"modelViewMatrix",k.modelViewMatrix),ut.setValue(A,"normalMatrix",k.normalMatrix),ut.setValue(A,"modelMatrix",k.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let kt=B.uniformsGroups;for(let dn=0,xu=kt.length;dn<xu;dn++){let Mr=kt[dn];X.update(Mr,It),X.bind(Mr,It)}}return It}function Bn(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function gi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,U,N){let B=ae.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ae.get(b.texture).__webglTexture=U,ae.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:N,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let N=ae.get(b);N.__webglFramebuffer=U,N.__useDefaultFramebuffer=U===void 0};let v=A.createFramebuffer();this.setRenderTarget=function(b,U=0,N=0){C=b,L=U,P=N;let B=!0,k=null,q=!1,K=!1;if(b){let ue=ae.get(b);if(ue.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(ue.__hasExternalTextures)E.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Me=b.depthTexture;if(ue.__boundDepthTexture!==Me){if(Me!==null&&ae.has(Me)&&(b.width!==Me.image.width||b.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let ye=b.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(K=!0);let be=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[U])?k=be[U][N]:k=be[U],q=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?k=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[N]:k=be,R.copy(b.viewport),O.copy(b.scissor),G=b.scissorTest}else R.copy(Ee).multiplyScalar(j).floor(),O.copy(Ge).multiplyScalar(j).floor(),G=Ye;if(N!==0&&(k=v),Te.bindFramebuffer(A.FRAMEBUFFER,k)&&B&&Te.drawBuffers(b,k),Te.viewport(R),Te.scissor(O),Te.setScissorTest(G),q){let ue=ae.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,N)}else if(K){let ue=ae.get(b.texture),ye=U;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ue.__webglTexture,N,ye)}else if(b!==null&&N!==0){let ue=ae.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,N)}S=-1},this.readRenderTargetPixels=function(b,U,N,B,k,q,K){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&K!==void 0&&($=$[K]),$){Te.bindFramebuffer(A.FRAMEBUFFER,$);try{let ue=b.texture,ye=ue.format,be=ue.type;if(!ke.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&N>=0&&N<=b.height-k&&A.readPixels(U,N,B,k,Ze.convert(ye),Ze.convert(be),q)}finally{let ue=C!==null?ae.get(C).__webglFramebuffer:null;Te.bindFramebuffer(A.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(b,U,N,B,k,q,K){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&K!==void 0&&($=$[K]),$)if(U>=0&&U<=b.width-B&&N>=0&&N<=b.height-k){Te.bindFramebuffer(A.FRAMEBUFFER,$);let ue=b.texture,ye=ue.format,be=ue.type;if(!ke.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Me),A.bufferData(A.PIXEL_PACK_BUFFER,q.byteLength,A.STREAM_READ),A.readPixels(U,N,B,k,Ze.convert(ye),Ze.convert(be),0);let we=C!==null?ae.get(C).__webglFramebuffer:null;Te.bindFramebuffer(A.FRAMEBUFFER,we);let Ue=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await lp(A,Ue,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Me),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,q),A.deleteBuffer(Me),A.deleteSync(Ue),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,N=0){let B=Math.pow(2,-N),k=Math.floor(b.image.width*B),q=Math.floor(b.image.height*B),K=U!==null?U.x:0,$=U!==null?U.y:0;E.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,N,0,0,K,$,k,q),Te.unbindTexture()};let I=A.createFramebuffer(),z=A.createFramebuffer();this.copyTextureToTexture=function(b,U,N=null,B=null,k=0,q=null){q===null&&(k!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=k,k=0):q=0);let K,$,ue,ye,be,Me,we,Ue,tt,ct=b.isCompressedTexture?b.mipmaps[q]:b.image;if(N!==null)K=N.max.x-N.min.x,$=N.max.y-N.min.y,ue=N.isBox3?N.max.z-N.min.z:1,ye=N.min.x,be=N.min.y,Me=N.isBox3?N.min.z:0;else{let _n=Math.pow(2,-k);K=Math.floor(ct.width*_n),$=Math.floor(ct.height*_n),b.isDataArrayTexture?ue=ct.depth:b.isData3DTexture?ue=Math.floor(ct.depth*_n):ue=1,ye=0,be=0,Me=0}B!==null?(we=B.x,Ue=B.y,tt=B.z):(we=0,Ue=0,tt=0);let st=Ze.convert(U.format),et=Ze.convert(U.type),pt;U.isData3DTexture?(E.setTexture3D(U,0),pt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),pt=A.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),pt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);let nt=A.getParameter(A.UNPACK_ROW_LENGTH),It=A.getParameter(A.UNPACK_IMAGE_HEIGHT),fn=A.getParameter(A.UNPACK_SKIP_PIXELS),Rt=A.getParameter(A.UNPACK_SKIP_ROWS),St=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ye),A.pixelStorei(A.UNPACK_SKIP_ROWS,be),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Me);let ut=b.isDataArrayTexture||b.isData3DTexture,Jt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let _n=ae.get(b),kt=ae.get(U),dn=ae.get(_n.__renderTarget),xu=ae.get(kt.__renderTarget);Te.bindFramebuffer(A.READ_FRAMEBUFFER,dn.__webglFramebuffer),Te.bindFramebuffer(A.DRAW_FRAMEBUFFER,xu.__webglFramebuffer);for(let Mr=0;Mr<ue;Mr++)ut&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ae.get(b).__webglTexture,k,Me+Mr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ae.get(U).__webglTexture,q,tt+Mr)),A.blitFramebuffer(ye,be,K,$,we,Ue,K,$,A.DEPTH_BUFFER_BIT,A.NEAREST);Te.bindFramebuffer(A.READ_FRAMEBUFFER,null),Te.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||ae.has(b)){let _n=ae.get(b),kt=ae.get(U);Te.bindFramebuffer(A.READ_FRAMEBUFFER,I),Te.bindFramebuffer(A.DRAW_FRAMEBUFFER,z);for(let dn=0;dn<ue;dn++)ut?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_n.__webglTexture,k,Me+dn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_n.__webglTexture,k),Jt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,kt.__webglTexture,q,tt+dn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,kt.__webglTexture,q),k!==0?A.blitFramebuffer(ye,be,K,$,we,Ue,K,$,A.COLOR_BUFFER_BIT,A.NEAREST):Jt?A.copyTexSubImage3D(pt,q,we,Ue,tt+dn,ye,be,K,$):A.copyTexSubImage2D(pt,q,we,Ue,ye,be,K,$);Te.bindFramebuffer(A.READ_FRAMEBUFFER,null),Te.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Jt?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(pt,q,we,Ue,tt,K,$,ue,st,et,ct.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(pt,q,we,Ue,tt,K,$,ue,st,ct.data):A.texSubImage3D(pt,q,we,Ue,tt,K,$,ue,st,et,ct):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,q,we,Ue,K,$,st,et,ct.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,q,we,Ue,ct.width,ct.height,st,ct.data):A.texSubImage2D(A.TEXTURE_2D,q,we,Ue,K,$,st,et,ct);A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,It),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Rt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,St),q===0&&U.generateMipmaps&&A.generateMipmap(pt),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,U,N=null,B=null,k=0){return ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,N,B,k)},this.initRenderTarget=function(b){ae.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){L=0,P=0,C=null,Te.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};function Jr(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Ht,c=0;for(let u=0;u<r.length;++u){let h=r[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Gp(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][f]);let m=Gp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Gp(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let a=new e(s),o=new Wt(a,t,n),l=0;for(let c=0;c<r.length;++c){let u=r[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);o.setComponent(f+h,m,x)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function Wh(r,e){if(e===vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Vs||e===io){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Vs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Nc=class extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new ff(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Yi.extractUrlBase(e);a=Yi.resolveURL(c,this.path)}else a=Yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jp){try{a[yt.KHR_BINARY_GLTF]=new df(e)}catch(h){i&&i(h);return}s=JSON.parse(a[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _f(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case yt.KHR_MATERIALS_UNLIT:a[h]=new Zh;break;case yt.KHR_DRACO_MESH_COMPRESSION:a[h]=new pf(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:a[h]=new mf;break;case yt.KHR_MESH_QUANTIZATION:a[h]=new gf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function B_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yh=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],cn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ji(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new an(u),c.distance=h;break;case"spot":c=new Hr(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Zh=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){let i=[];e.color=new Be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],cn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(s)}},Qh=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},ef=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],cn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},tf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},nf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],cn),Promise.all(s)}},rf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],cn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(s)}},af=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},of=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},lf=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},cf=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},uf=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},hf=class{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},ff=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==$n.TRIANGLES&&c.mode!==$n.TRIANGLE_STRIP&&c.mode!==$n.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new Je,g=new F,p=new mn,M=new F(1,1,1),y=new $t(m.geometry,m.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&M.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(g,p,M));for(let _ in l)if(_==="_COLOR_0"){let D=l[_];y.instanceColor=new ur(D.array,D.itemSize,D.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Xt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},jp="glTF",ao=12,Vp={JSON:1313821514,BIN:5130562},df=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ao,s=new DataView(e,ao),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Vp.JSON){let c=new Uint8Array(e,ao+a,o);this.content=n.decode(c)}else if(l===Vp.BIN){let c=ao+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=vf[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=vf[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Zs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(d)},o,c,cn,f)})})}},mf=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},gf=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},Fc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,M=1-g,y=p-f+h;for(let _=0;_!==o;_++){let D=a[x+_+o],L=a[x+_+l]*u,P=a[m+_+o],C=a[m+_]*u;s[_]=M*D+y*L+g*P+p*C}return s}},H_=new mn,xf=class extends Fc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return H_.fromArray(s).normalize().toArray(s),s}},$n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wp={9728:ln,9729:rn,9984:Kl,9985:Bs,9986:Xr,9987:Qn},Xp={33071:Zn,33648:Ss,10497:jt},Xh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G_={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function V_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),r.DefaultMaterial}function Qr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function X_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q_(r){let e,t=r.extensions&&r.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jh(t.attributes):e=r.indices+":"+jh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+jh(r.targets[n]);return e}function jh(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function bf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Y_=new Je,_f=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new B_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new kr(this.options.manager):this.textureLoader=new ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Qr(s,o,i),Ji(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Yi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Xh[i.type],o=Zs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Wt(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Xh[i.type],c=Zs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(M);y||(x=new c(o,p*d,i.count*d/u),y=new Is(x,d/u),t.cache.add(M,y)),g=new Ds(y,l,f%d/u,m)}else o===null?x=new c(i.count*l):x=new c(o,f,i.count*l),g=new Wt(x,l,m);if(i.sparse!==void 0){let p=Xh.SCALAR,M=Zs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,D=new M(a[1],y,i.sparse.count*p),L=new c(a[2],_,i.sparse.count*l);o!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,C=D.length;P<C;P++){let S=D[P];if(g.setX(S,L[P*l]),l>=2&&g.setY(S,L[P*l+1]),l>=3&&g.setZ(S,L[P*l+2]),l>=4&&g.setW(S,L[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Wp[f.magFilter]||rn,u.minFilter=Wp[f.minFilter]||Qn,u.wrapS=Xp[f.wrapS]||jt,u.wrapT=Xp[f.wrapT]||jt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ln&&u.minFilter!==rn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new pn(x);g.needsUpdate=!0,f(g)}),t.load(Yi.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Ji(h,a),h.userData.mimeType=a.mimeType||j_(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ns,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Us,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _e}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let h=i[yt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],cn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=un);let u=s.alphaMode||qh.OPAQUE;if(u===qh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===qh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==_t&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==_t&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==_t){let h=s.emissiveFactor;o.emissive=new Be().setRGB(h[0],h[1],h[2],cn)}return s.emissiveTexture!==void 0&&a!==_t&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,wt)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&Qr(i,h,s),h})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return qp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=q_(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=qp(new Ht,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?V_(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=a[d],p,M=c[d];if(g.mode===$n.TRIANGLES||g.mode===$n.TRIANGLE_STRIP||g.mode===$n.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Ua(x,M):new De(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===$n.TRIANGLE_STRIP?p.geometry=Wh(p.geometry,io):g.mode===$n.TRIANGLE_FAN&&(p.geometry=Wh(p.geometry,Vs));else if(g.mode===$n.LINES)p=new Fa(x,M);else if(g.mode===$n.LINE_STRIP)p=new Lr(x,M);else if(g.mode===$n.LINE_LOOP)p=new Oa(x,M);else if(g.mode===$n.POINTS)p=new Ur(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&X_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ji(p,s),g.extensions&&Qr(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Qr(i,h[0],s),h[0];let f=new Ce;s.extensions&&Qr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Mh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Na(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let M=0,y=f.length;M<y;M++){let _=f[M],D=d[M],L=m[M],P=x[M],C=g[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,D,L,P,C);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}return new Wa(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Y_)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Ls:c.length>1?u=new Ce:c.length===1?u=c[0]:u=new Xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Ji(u,s),s.extensions&&Qr(n,u,s),s.matrix!==void 0){let h=new Je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ce;n.name&&(s.name=i.createUniqueName(n.name)),Ji(s,n),n.extensions&&Qr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof Pn||f instanceof pn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];xr[s.path]===xr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(xr[s.path]){case xr.weights:c=yi;break;case xr.rotation:c=Mi;break;case xr.translation:case xr.scale:c=Ei;break;default:n.itemSize===1?c=yi:c=Ei;break}let u=i.interpolation!==void 0?G_[i.interpolation]:Ir,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+xr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bf(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Mi?xf:Fc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Z_(r,e,t){let n=e.attributes,i=new Wn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){let u=bf(Zs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new F,l=new F;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=bf(Zs[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new On;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function qp(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=vf[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return bt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Ji(r,e),Z_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?W_(r,e.targets,t):r})}var ei=Uint8Array,Ks=Uint16Array,K_=Int32Array,Yp=new ei([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zp=new ei([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),J_=new ei([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kp=function(r,e){for(var t=new Ks(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new K_(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Jp=Kp(Yp,2),Qp=Jp.b,Q_=Jp.r;Qp[28]=258,Q_[258]=28;var $p=Kp(Zp,0),$_=$p.b,CE=$p.r,Ef=new Ks(32768);for(Ut=0;Ut<32768;++Ut)Qi=(Ut&43690)>>1|(Ut&21845)<<1,Qi=(Qi&52428)>>2|(Qi&13107)<<2,Qi=(Qi&61680)>>4|(Qi&3855)<<4,Ef[Ut]=((Qi&65280)>>8|(Qi&255)<<8)>>1;var Qi,Ut,oo=(function(r,e,t){for(var n=r.length,i=0,s=new Ks(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new Ks(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new Ks(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=a[r[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Ef[h]>>l]=c}else for(o=new Ks(n),i=0;i<n;++i)r[i]&&(o[i]=Ef[a[r[i]-1]++]>>15-r[i]);return o}),lo=new ei(288);for(Ut=0;Ut<144;++Ut)lo[Ut]=8;var Ut;for(Ut=144;Ut<256;++Ut)lo[Ut]=9;var Ut;for(Ut=256;Ut<280;++Ut)lo[Ut]=7;var Ut;for(Ut=280;Ut<288;++Ut)lo[Ut]=8;var Ut,em=new ei(32);for(Ut=0;Ut<32;++Ut)em[Ut]=5;var Ut;var ey=oo(lo,9,1);var ty=oo(em,5,1),yf=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},pi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Mf=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},ny=function(r){return(r+7)/8|0},iy=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new ei(r.subarray(e,t))};var ry=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],mi=function(r,e,t){var n=new Error(e||ry[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,mi),!t)throw n;return n},sy=function(r,e,t,n){var i=r.length,s=n?n.length:0;if(!i||e.f&&!e.l)return t||new ei(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ei(i*3));var c=function(rt){var $e=t.length;if(rt>$e){var Oe=new ei(Math.max($e*2,rt));Oe.set(t),t=Oe}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,m=e.d,x=e.m,g=e.n,p=i*8;do{if(!d){u=pi(r,h,1);var M=pi(r,h+1,3);if(h+=3,M)if(M==1)d=ey,m=ty,x=9,g=5;else if(M==2){var L=pi(r,h,31)+257,P=pi(r,h+10,15)+4,C=L+pi(r,h+5,31)+1;h+=14;for(var S=new ei(C),w=new ei(19),R=0;R<P;++R)w[J_[R]]=pi(r,h+R*3,7);h+=P*3;for(var O=yf(w),G=(1<<O)-1,W=oo(w,O,1),R=0;R<C;){var J=W[pi(r,h,G)];h+=J&15;var y=J>>4;if(y<16)S[R++]=y;else{var Y=0,he=0;for(y==16?(he=3+pi(r,h,3),h+=2,Y=S[R-1]):y==17?(he=3+pi(r,h,7),h+=3):y==18&&(he=11+pi(r,h,127),h+=7);he--;)S[R++]=Y}}var j=S.subarray(0,L),Q=S.subarray(L);x=yf(j),g=yf(Q),d=oo(j,x,1),m=oo(Q,g,1)}else mi(1);else{var y=ny(h)+4,_=r[y-4]|r[y-3]<<8,D=y+_;if(D>i){l&&mi(0);break}o&&c(f+_),t.set(r.subarray(y,D),f),e.b=f+=_,e.p=h=D*8,e.f=u;continue}if(h>p){l&&mi(0);break}}o&&c(f+131072);for(var ge=(1<<x)-1,Ee=(1<<g)-1,Ge=h;;Ge=h){var Y=d[Mf(r,h)&ge],Ye=Y>>4;if(h+=Y&15,h>p){l&&mi(0);break}if(Y||mi(2),Ye<256)t[f++]=Ye;else if(Ye==256){Ge=h,d=null;break}else{var te=Ye-254;if(Ye>264){var R=Ye-257,de=Yp[R];te=pi(r,h,(1<<de)-1)+Qp[R],h+=de}var fe=m[Mf(r,h)&Ee],xe=fe>>4;fe||mi(3),h+=fe&15;var Q=$_[xe];if(xe>3){var de=Zp[xe];Q+=Mf(r,h)&(1<<de)-1,h+=de}if(h>p){l&&mi(0);break}o&&c(f+131072);var Ae=f+te;if(f<Q){var Qe=s-Q,Le=Math.min(Q,Ae);for(Qe+f<0&&mi(3);f<Le;++f)t[f]=n[Qe+f]}for(;f<Ae;++f)t[f]=t[f-Q]}}e.l=d,e.p=Ge,e.b=f,e.f=u,d&&(u=1,e.m=x,e.d=m,e.n=g)}while(!u);return f!=t.length&&a?iy(t,0,f):t.subarray(0,f)};var ay=new ei(0);var oy=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&mi(6,"invalid zlib data"),(r[1]>>5&1)==+!e&&mi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function co(r,e){return sy(r.subarray(oy(r,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var ly=typeof TextDecoder<"u"&&new TextDecoder,cy=0;try{ly.decode(ay,{stream:!0}),cy=1}catch{}var Js=class extends Xa{constructor(e){super(e),this.type=en}parse(e){let S=Math.pow(2.7182818,2.2);function w(v,I){let z=0;for(let U=0;U<65536;++U)(U==0||v[U>>3]&1<<(U&7))&&(I[z++]=U);let b=z-1;for(;z<65536;)I[z++]=0;return b}function R(v){for(let I=0;I<16384;I++)v[I]={},v[I].len=0,v[I].lit=0,v[I].p=null}let O={l:0,c:0,lc:0};function G(v,I,z,b,U){for(;z<v;)I=I<<8|Re(b,U),z+=8;z-=v,O.l=I>>z&(1<<v)-1,O.c=I,O.lc=z}let W=new Array(59);function J(v){for(let z=0;z<=58;++z)W[z]=0;for(let z=0;z<65537;++z)W[v[z]]+=1;let I=0;for(let z=58;z>0;--z){let b=I+W[z]>>1;W[z]=I,I=b}for(let z=0;z<65537;++z){let b=v[z];b>0&&(v[z]=b|W[b]++<<6)}}function Y(v,I,z,b,U,N){let B=I,k=0,q=0;for(;b<=U;b++){if(B.value-I.value>z)return!1;G(6,k,q,v,B);let K=O.l;if(k=O.c,q=O.lc,N[b]=K,K==63){if(B.value-I.value>z)throw new Error("Something wrong with hufUnpackEncTable");G(8,k,q,v,B);let $=O.l+6;if(k=O.c,q=O.lc,b+$>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;$--;)N[b++]=0;b--}else if(K>=59){let $=K-59+2;if(b+$>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;$--;)N[b++]=0;b--}}J(N)}function he(v){return v&63}function j(v){return v>>6}function Q(v,I,z,b){for(;I<=z;I++){let U=j(v[I]),N=he(v[I]);if(U>>N)throw new Error("Invalid table entry");if(N>14){let B=b[U>>N-14];if(B.len)throw new Error("Invalid table entry");if(B.lit++,B.p){let k=B.p;B.p=new Array(B.lit);for(let q=0;q<B.lit-1;++q)B.p[q]=k[q]}else B.p=new Array(1);B.p[B.lit-1]=I}else if(N){let B=0;for(let k=1<<14-N;k>0;k--){let q=b[(U<<14-N)+B];if(q.len||q.p)throw new Error("Invalid table entry");q.len=N,q.lit=I,B++}}}return!0}let ge={c:0,lc:0};function Ee(v,I,z,b){v=v<<8|Re(z,b),I+=8,ge.c=v,ge.lc=I}let Ge={c:0,lc:0};function Ye(v,I,z,b,U,N,B,k,q){if(v==I){b<8&&(Ee(z,b,U,N),z=ge.c,b=ge.lc),b-=8;let K=z>>b;if(K=new Uint8Array([K])[0],k.value+K>q)return!1;let $=B[k.value-1];for(;K-- >0;)B[k.value++]=$}else if(k.value<q)B[k.value++]=v;else return!1;Ge.c=z,Ge.lc=b}function te(v){return v&65535}function de(v){let I=te(v);return I>32767?I-65536:I}let fe={a:0,b:0};function xe(v,I){let z=de(v),U=de(I),N=z+(U&1)+(U>>1),B=N,k=N-U;fe.a=B,fe.b=k}function Ae(v,I){let z=te(v),b=te(I),U=z-(b>>1)&65535,N=b+U-32768&65535;fe.a=N,fe.b=U}function Qe(v,I,z,b,U,N,B){let k=B<16384,q=z>U?U:z,K=1,$,ue;for(;K<=q;)K<<=1;for(K>>=1,$=K,K>>=1;K>=1;){ue=0;let ye=ue+N*(U-$),be=N*K,Me=N*$,we=b*K,Ue=b*$,tt,ct,st,et;for(;ue<=ye;ue+=Me){let pt=ue,nt=ue+b*(z-$);for(;pt<=nt;pt+=Ue){let It=pt+we,fn=pt+be,Rt=fn+we;k?(xe(v[pt+I],v[fn+I]),tt=fe.a,st=fe.b,xe(v[It+I],v[Rt+I]),ct=fe.a,et=fe.b,xe(tt,ct),v[pt+I]=fe.a,v[It+I]=fe.b,xe(st,et),v[fn+I]=fe.a,v[Rt+I]=fe.b):(Ae(v[pt+I],v[fn+I]),tt=fe.a,st=fe.b,Ae(v[It+I],v[Rt+I]),ct=fe.a,et=fe.b,Ae(tt,ct),v[pt+I]=fe.a,v[It+I]=fe.b,Ae(st,et),v[fn+I]=fe.a,v[Rt+I]=fe.b)}if(z&K){let It=pt+be;k?xe(v[pt+I],v[It+I]):Ae(v[pt+I],v[It+I]),tt=fe.a,v[It+I]=fe.b,v[pt+I]=tt}}if(U&K){let pt=ue,nt=ue+b*(z-$);for(;pt<=nt;pt+=Ue){let It=pt+we;k?xe(v[pt+I],v[It+I]):Ae(v[pt+I],v[It+I]),tt=fe.a,v[It+I]=fe.b,v[pt+I]=tt}}$=K,K>>=1}return ue}function Le(v,I,z,b,U,N,B,k,q){let K=0,$=0,ue=B,ye=Math.trunc(b.value+(U+7)/8);for(;b.value<ye;)for(Ee(K,$,z,b),K=ge.c,$=ge.lc;$>=14;){let Me=K>>$-14&16383,we=I[Me];if(we.len)$-=we.len,Ye(we.lit,N,K,$,z,b,k,q,ue),K=Ge.c,$=Ge.lc;else{if(!we.p)throw new Error("hufDecode issues");let Ue;for(Ue=0;Ue<we.lit;Ue++){let tt=he(v[we.p[Ue]]);for(;$<tt&&b.value<ye;)Ee(K,$,z,b),K=ge.c,$=ge.lc;if($>=tt&&j(v[we.p[Ue]])==(K>>$-tt&(1<<tt)-1)){$-=tt,Ye(we.p[Ue],N,K,$,z,b,k,q,ue),K=Ge.c,$=Ge.lc;break}}if(Ue==we.lit)throw new Error("hufDecode issues")}}let be=8-U&7;for(K>>=be,$-=be;$>0;){let Me=I[K<<14-$&16383];if(Me.len)$-=Me.len,Ye(Me.lit,N,K,$,z,b,k,q,ue),K=Ge.c,$=Ge.lc;else throw new Error("hufDecode issues")}return!0}function rt(v,I,z,b,U,N){let B={value:0},k=z.value,q=ze(I,z),K=ze(I,z);z.value+=4;let $=ze(I,z);if(z.value+=4,q<0||q>=65537||K<0||K>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let ue=new Array(65537),ye=new Array(16384);R(ye);let be=b-(z.value-k);if(Y(v,z,be,q,K,ue),$>8*(b-(z.value-k)))throw new Error("Something wrong with hufUncompress");Q(ue,q,K,ye),Le(ue,ye,v,z,$,K,N,U,B)}function $e(v,I,z){for(let b=0;b<z;++b)I[b]=v[I[b]]}function Oe(v){for(let I=1;I<v.length;I++){let z=v[I-1]+v[I]-128;v[I]=z}}function A(v,I){let z=0,b=Math.floor((v.length+1)/2),U=0,N=v.length-1;for(;!(U>N||(I[U++]=v[z++],U>N));)I[U++]=v[b++]}function qe(v){let I=v.byteLength,z=new Array,b=0,U=new DataView(v);for(;I>0;){let N=U.getInt8(b++);if(N<0){let B=-N;I-=B+1;for(let k=0;k<B;k++)z.push(U.getUint8(b++))}else{let B=N;I-=2;let k=U.getUint8(b++);for(let q=0;q<B+1;q++)z.push(k)}}return z}function Fe(v,I,z,b,U,N){let B=new DataView(N.buffer),k=z[v.idx[0]].width,q=z[v.idx[0]].height,K=3,$=Math.floor(k/8),ue=Math.ceil(k/8),ye=Math.ceil(q/8),be=k-(ue-1)*8,Me=q-(ye-1)*8,we={value:0},Ue=new Array(K),tt=new Array(K),ct=new Array(K),st=new Array(K),et=new Array(K);for(let nt=0;nt<K;++nt)et[nt]=I[v.idx[nt]],Ue[nt]=nt<1?0:Ue[nt-1]+ue*ye,tt[nt]=new Float32Array(64),ct[nt]=new Uint16Array(64),st[nt]=new Uint16Array(ue*64);for(let nt=0;nt<ye;++nt){let It=8;nt==ye-1&&(It=Me);let fn=8;for(let St=0;St<ue;++St){St==ue-1&&(fn=be);for(let ut=0;ut<K;++ut)ct[ut].fill(0),ct[ut][0]=U[Ue[ut]++],ke(we,b,ct[ut]),Te(ct[ut],tt[ut]),V(tt[ut]);K==3&&ae(tt);for(let ut=0;ut<K;++ut)E(tt[ut],st[ut],St*64)}let Rt=0;for(let St=0;St<K;++St){let ut=z[v.idx[St]].type;for(let Jt=8*nt;Jt<8*nt+It;++Jt){Rt=et[St][Jt];for(let _n=0;_n<$;++_n){let kt=_n*64+(Jt&7)*8;B.setUint16(Rt+0*ut,st[St][kt+0],!0),B.setUint16(Rt+2*ut,st[St][kt+1],!0),B.setUint16(Rt+4*ut,st[St][kt+2],!0),B.setUint16(Rt+6*ut,st[St][kt+3],!0),B.setUint16(Rt+8*ut,st[St][kt+4],!0),B.setUint16(Rt+10*ut,st[St][kt+5],!0),B.setUint16(Rt+12*ut,st[St][kt+6],!0),B.setUint16(Rt+14*ut,st[St][kt+7],!0),Rt+=16*ut}}if($!=ue)for(let Jt=8*nt;Jt<8*nt+It;++Jt){let _n=et[St][Jt]+8*$*2*ut,kt=$*64+(Jt&7)*8;for(let dn=0;dn<fn;++dn)B.setUint16(_n+dn*2*ut,st[St][kt+dn],!0)}}}let pt=new Uint16Array(k);B=new DataView(N.buffer);for(let nt=0;nt<K;++nt){z[v.idx[nt]].decoded=!0;let It=z[v.idx[nt]].type;if(z[nt].type==2)for(let fn=0;fn<q;++fn){let Rt=et[nt][fn];for(let St=0;St<k;++St)pt[St]=B.getUint16(Rt+St*2*It,!0);for(let St=0;St<k;++St)B.setFloat32(Rt+St*2*It,ie(pt[St]),!0)}}}function ke(v,I,z){let b,U=1;for(;U<64;)b=I[v.value],b==65280?U=64:b>>8==255?U+=b&255:(z[U]=b,U++),v.value++}function Te(v,I){I[0]=ie(v[0]),I[1]=ie(v[1]),I[2]=ie(v[5]),I[3]=ie(v[6]),I[4]=ie(v[14]),I[5]=ie(v[15]),I[6]=ie(v[27]),I[7]=ie(v[28]),I[8]=ie(v[2]),I[9]=ie(v[4]),I[10]=ie(v[7]),I[11]=ie(v[13]),I[12]=ie(v[16]),I[13]=ie(v[26]),I[14]=ie(v[29]),I[15]=ie(v[42]),I[16]=ie(v[3]),I[17]=ie(v[8]),I[18]=ie(v[12]),I[19]=ie(v[17]),I[20]=ie(v[25]),I[21]=ie(v[30]),I[22]=ie(v[41]),I[23]=ie(v[43]),I[24]=ie(v[9]),I[25]=ie(v[11]),I[26]=ie(v[18]),I[27]=ie(v[24]),I[28]=ie(v[31]),I[29]=ie(v[40]),I[30]=ie(v[44]),I[31]=ie(v[53]),I[32]=ie(v[10]),I[33]=ie(v[19]),I[34]=ie(v[23]),I[35]=ie(v[32]),I[36]=ie(v[39]),I[37]=ie(v[45]),I[38]=ie(v[52]),I[39]=ie(v[54]),I[40]=ie(v[20]),I[41]=ie(v[22]),I[42]=ie(v[33]),I[43]=ie(v[38]),I[44]=ie(v[46]),I[45]=ie(v[51]),I[46]=ie(v[55]),I[47]=ie(v[60]),I[48]=ie(v[21]),I[49]=ie(v[34]),I[50]=ie(v[37]),I[51]=ie(v[47]),I[52]=ie(v[50]),I[53]=ie(v[56]),I[54]=ie(v[59]),I[55]=ie(v[61]),I[56]=ie(v[35]),I[57]=ie(v[36]),I[58]=ie(v[48]),I[59]=ie(v[49]),I[60]=ie(v[57]),I[61]=ie(v[58]),I[62]=ie(v[62]),I[63]=ie(v[63])}function V(v){let I=.5*Math.cos(.7853975),z=.5*Math.cos(3.14159/16),b=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),B=.5*Math.cos(3*3.14159/8),k=.5*Math.cos(7*3.14159/16),q=new Array(4),K=new Array(4),$=new Array(4),ue=new Array(4);for(let ye=0;ye<8;++ye){let be=ye*8;q[0]=b*v[be+2],q[1]=B*v[be+2],q[2]=b*v[be+6],q[3]=B*v[be+6],K[0]=z*v[be+1]+U*v[be+3]+N*v[be+5]+k*v[be+7],K[1]=U*v[be+1]-k*v[be+3]-z*v[be+5]-N*v[be+7],K[2]=N*v[be+1]-z*v[be+3]+k*v[be+5]+U*v[be+7],K[3]=k*v[be+1]-N*v[be+3]+U*v[be+5]-z*v[be+7],$[0]=I*(v[be+0]+v[be+4]),$[3]=I*(v[be+0]-v[be+4]),$[1]=q[0]+q[3],$[2]=q[1]-q[2],ue[0]=$[0]+$[1],ue[1]=$[3]+$[2],ue[2]=$[3]-$[2],ue[3]=$[0]-$[1],v[be+0]=ue[0]+K[0],v[be+1]=ue[1]+K[1],v[be+2]=ue[2]+K[2],v[be+3]=ue[3]+K[3],v[be+4]=ue[3]-K[3],v[be+5]=ue[2]-K[2],v[be+6]=ue[1]-K[1],v[be+7]=ue[0]-K[0]}for(let ye=0;ye<8;++ye)q[0]=b*v[16+ye],q[1]=B*v[16+ye],q[2]=b*v[48+ye],q[3]=B*v[48+ye],K[0]=z*v[8+ye]+U*v[24+ye]+N*v[40+ye]+k*v[56+ye],K[1]=U*v[8+ye]-k*v[24+ye]-z*v[40+ye]-N*v[56+ye],K[2]=N*v[8+ye]-z*v[24+ye]+k*v[40+ye]+U*v[56+ye],K[3]=k*v[8+ye]-N*v[24+ye]+U*v[40+ye]-z*v[56+ye],$[0]=I*(v[ye]+v[32+ye]),$[3]=I*(v[ye]-v[32+ye]),$[1]=q[0]+q[3],$[2]=q[1]-q[2],ue[0]=$[0]+$[1],ue[1]=$[3]+$[2],ue[2]=$[3]-$[2],ue[3]=$[0]-$[1],v[0+ye]=ue[0]+K[0],v[8+ye]=ue[1]+K[1],v[16+ye]=ue[2]+K[2],v[24+ye]=ue[3]+K[3],v[32+ye]=ue[3]-K[3],v[40+ye]=ue[2]-K[2],v[48+ye]=ue[1]-K[1],v[56+ye]=ue[0]-K[0]}function ae(v){for(let I=0;I<64;++I){let z=v[0][I],b=v[1][I],U=v[2][I];v[0][I]=z+1.5747*U,v[1][I]=z-.1873*b-.4682*U,v[2][I]=z+1.8556*b}}function E(v,I,z){for(let b=0;b<64;++b)I[z+b]=Cs.toHalfFloat(T(v[b]))}function T(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(S,Math.abs(v)-1)}function H(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function ee(v){let I=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),z=new Uint8Array(qe(I)),b=new Uint8Array(z.length);return Oe(z),A(z,b),new DataView(b.buffer)}function oe(v){let I=v.array.slice(v.offset.value,v.offset.value+v.size),z=co(I),b=new Uint8Array(z.length);return Oe(z),A(z,b),new DataView(b.buffer)}function ce(v){let I=v.viewer,z={value:v.offset.value},b=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),U=new Uint8Array(8192),N=0,B=new Array(v.inputChannels.length);for(let Me=0,we=v.inputChannels.length;Me<we;Me++)B[Me]={},B[Me].start=N,B[Me].end=B[Me].start,B[Me].nx=v.columns,B[Me].ny=v.lines,B[Me].size=v.type,N+=B[Me].nx*B[Me].ny*B[Me].size;let k=ne(I,z),q=ne(I,z);if(q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(k<=q)for(let Me=0;Me<q-k+1;Me++)U[Me+k]=at(I,z);let K=new Uint16Array(65536),$=w(U,K),ue=ze(I,z);rt(v.array,I,z,ue,b,N);for(let Me=0;Me<v.inputChannels.length;++Me){let we=B[Me];for(let Ue=0;Ue<B[Me].size;++Ue)Qe(b,we.start+Ue,we.nx,we.size,we.ny,we.nx*we.size,$)}$e(K,b,N);let ye=0,be=new Uint8Array(b.buffer.byteLength);for(let Me=0;Me<v.lines;Me++)for(let we=0;we<v.inputChannels.length;we++){let Ue=B[we],tt=Ue.nx*Ue.size,ct=new Uint8Array(b.buffer,Ue.end*2,tt*2);be.set(ct,ye),ye+=tt*2,Ue.end+=tt}return new DataView(be.buffer)}function He(v){let I=v.array.slice(v.offset.value,v.offset.value+v.size),z=co(I),b=v.inputChannels.length*v.lines*v.columns*v.totalBytes,U=new ArrayBuffer(b),N=new DataView(U),B=0,k=0,q=new Array(4);for(let K=0;K<v.lines;K++)for(let $=0;$<v.inputChannels.length;$++){let ue=0;switch(v.inputChannels[$].pixelType){case 1:q[0]=B,q[1]=q[0]+v.columns,B=q[1]+v.columns;for(let be=0;be<v.columns;++be){let Me=z[q[0]++]<<8|z[q[1]++];ue+=Me,N.setUint16(k,ue,!0),k+=2}break;case 2:q[0]=B,q[1]=q[0]+v.columns,q[2]=q[1]+v.columns,B=q[2]+v.columns;for(let be=0;be<v.columns;++be){let Me=z[q[0]++]<<24|z[q[1]++]<<16|z[q[2]++]<<8;ue+=Me,N.setUint32(k,ue,!0),k+=4}break}}return N}function Pe(v){let I=v.viewer,z={value:v.offset.value},b=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),U={version:Ze(I,z),unknownUncompressedSize:Ze(I,z),unknownCompressedSize:Ze(I,z),acCompressedSize:Ze(I,z),dcCompressedSize:Ze(I,z),rleCompressedSize:Ze(I,z),rleUncompressedSize:Ze(I,z),rleRawSize:Ze(I,z),totalAcUncompressedCount:Ze(I,z),totalDcUncompressedCount:Ze(I,z),acCompression:Ze(I,z)};if(U.version<2)throw new Error("EXRLoader.parse: "+Bn.compression+" version "+U.version+" is unsupported");let N=new Array,B=ne(I,z)-2;for(;B>0;){let we=re(I.buffer,z),Ue=at(I,z),tt=Ue>>2&3,ct=(Ue>>4)-1,st=new Int8Array([ct])[0],et=at(I,z);N.push({name:we,index:st,type:et,compression:tt}),B-=we.length+3}let k=Bn.channels,q=new Array(v.inputChannels.length);for(let we=0;we<v.inputChannels.length;++we){let Ue=q[we]={},tt=k[we];Ue.name=tt.name,Ue.compression=0,Ue.decoded=!1,Ue.type=tt.pixelType,Ue.pLinear=tt.pLinear,Ue.width=v.columns,Ue.height=v.lines}let K={idx:new Array(3)};for(let we=0;we<v.inputChannels.length;++we){let Ue=q[we];for(let tt=0;tt<N.length;++tt){let ct=N[tt];Ue.name==ct.name&&(Ue.compression=ct.compression,ct.index>=0&&(K.idx[ct.index]=we),Ue.offset=we)}}let $,ue,ye;if(U.acCompressedSize>0)switch(U.acCompression){case 0:$=new Uint16Array(U.totalAcUncompressedCount),rt(v.array,I,z,U.acCompressedSize,$,U.totalAcUncompressedCount);break;case 1:let we=v.array.slice(z.value,z.value+U.totalAcUncompressedCount),Ue=co(we);$=new Uint16Array(Ue.buffer),z.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){let we={array:v.array,offset:z,size:U.dcCompressedSize};ue=new Uint16Array(oe(we).buffer),z.value+=U.dcCompressedSize}if(U.rleRawSize>0){let we=v.array.slice(z.value,z.value+U.rleCompressedSize),Ue=co(we);ye=qe(Ue.buffer),z.value+=U.rleCompressedSize}let be=0,Me=new Array(q.length);for(let we=0;we<Me.length;++we)Me[we]=new Array;for(let we=0;we<v.lines;++we)for(let Ue=0;Ue<q.length;++Ue)Me[Ue].push(be),be+=q[Ue].width*v.type*2;Fe(K,Me,q,$,ue,b);for(let we=0;we<q.length;++we){let Ue=q[we];if(!Ue.decoded)switch(Ue.compression){case 2:let tt=0,ct=0;for(let st=0;st<v.lines;++st){let et=Me[we][tt];for(let pt=0;pt<Ue.width;++pt){for(let nt=0;nt<2*Ue.type;++nt)b[et++]=ye[ct+nt*Ue.width*Ue.height];ct++}tt++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(b.buffer)}function re(v,I){let z=new Uint8Array(v),b=0;for(;z[I.value+b]!=0;)b+=1;let U=new TextDecoder().decode(z.slice(I.value,I.value+b));return I.value=I.value+b+1,U}function me(v,I,z){let b=new TextDecoder().decode(new Uint8Array(v).slice(I.value,I.value+z));return I.value=I.value+z,b}function le(v,I){let z=Ie(v,I),b=ze(v,I);return[z,b]}function pe(v,I){let z=ze(v,I),b=ze(v,I);return[z,b]}function Ie(v,I){let z=v.getInt32(I.value,!0);return I.value=I.value+4,z}function ze(v,I){let z=v.getUint32(I.value,!0);return I.value=I.value+4,z}function Re(v,I){let z=v[I.value];return I.value=I.value+1,z}function at(v,I){let z=v.getUint8(I.value);return I.value=I.value+1,z}let Ze=function(v,I){let z;return"getBigInt64"in DataView.prototype?z=Number(v.getBigInt64(I.value,!0)):z=v.getUint32(I.value+4,!0)+Number(v.getUint32(I.value,!0)<<32),I.value+=8,z};function it(v,I){let z=v.getFloat32(I.value,!0);return I.value+=4,z}function X(v,I){return Cs.toHalfFloat(it(v,I))}function ie(v){let I=(v&31744)>>10,z=v&1023;return(v>>15?-1:1)*(I?I===31?z?NaN:1/0:Math.pow(2,I-15)*(1+z/1024):6103515625e-14*(z/1024))}function ne(v,I){let z=v.getUint16(I.value,!0);return I.value+=2,z}function ve(v,I){return ie(ne(v,I))}function We(v,I,z,b){let U=z.value,N=[];for(;z.value<U+b-1;){let B=re(I,z),k=Ie(v,z),q=at(v,z);z.value+=3;let K=Ie(v,z),$=Ie(v,z);N.push({name:B,pixelType:k,pLinear:q,xSampling:K,ySampling:$})}return z.value+=1,N}function Xe(v,I){let z=it(v,I),b=it(v,I),U=it(v,I),N=it(v,I),B=it(v,I),k=it(v,I),q=it(v,I),K=it(v,I);return{redX:z,redY:b,greenX:U,greenY:N,blueX:B,blueY:k,whiteX:q,whiteY:K}}function ht(v,I){let z=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],b=at(v,I);return z[b]}function Ft(v,I){let z=Ie(v,I),b=Ie(v,I),U=Ie(v,I),N=Ie(v,I);return{xMin:z,yMin:b,xMax:U,yMax:N}}function nn(v,I){let z=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],b=at(v,I);return z[b]}function ft(v,I){let z=["ENVMAP_LATLONG","ENVMAP_CUBE"],b=at(v,I);return z[b]}function Kt(v,I){let z=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],b=["ROUND_DOWN","ROUND_UP"],U=ze(v,I),N=ze(v,I),B=at(v,I);return{xSize:U,ySize:N,levelMode:z[B&15],roundingMode:b[B>>4]}}function zn(v,I){let z=it(v,I),b=it(v,I);return[z,b]}function yr(v,I){let z=it(v,I),b=it(v,I),U=it(v,I);return[z,b,U]}function ls(v,I,z,b,U){if(b==="string"||b==="stringvector"||b==="iccProfile")return me(I,z,U);if(b==="chlist")return We(v,I,z,U);if(b==="chromaticities")return Xe(v,z);if(b==="compression")return ht(v,z);if(b==="box2i")return Ft(v,z);if(b==="envmap")return ft(v,z);if(b==="tiledesc")return Kt(v,z);if(b==="lineOrder")return nn(v,z);if(b==="float")return it(v,z);if(b==="v2f")return zn(v,z);if(b==="v3f")return yr(v,z);if(b==="int")return Ie(v,z);if(b==="rational")return le(v,z);if(b==="timecode")return pe(v,z);if(b==="preview")return z.value+=U,"skipped";z.value+=U}function Z(v,I){let z=Math.log2(v);return I=="ROUND_DOWN"?Math.floor(z):Math.ceil(z)}function Se(v,I,z){let b=0;switch(v.levelMode){case"ONE_LEVEL":b=1;break;case"MIPMAP_LEVELS":b=Z(Math.max(I,z),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return b}function Ne(v,I,z,b){let U=new Array(v);for(let N=0;N<v;N++){let B=1<<N,k=I/B|0;b=="ROUND_UP"&&k*B<I&&(k+=1);let q=Math.max(k,1);U[N]=(q+z-1)/z|0}return U}function Ke(){let v=this,I=v.offset,z={value:0};for(let b=0;b<v.tileCount;b++){let U=Ie(v.viewer,I),N=Ie(v.viewer,I);I.value+=8,v.size=ze(v.viewer,I);let B=U*v.blockWidth,k=N*v.blockHeight;v.columns=B+v.blockWidth>v.width?v.width-B:v.blockWidth,v.lines=k+v.blockHeight>v.height?v.height-k:v.blockHeight;let q=v.columns*v.totalBytes,$=v.size<v.lines*q?v.uncompress(v):H(v);I.value+=v.size;for(let ue=0;ue<v.lines;ue++){let ye=ue*v.columns*v.totalBytes;for(let be=0;be<v.inputChannels.length;be++){let Me=Bn.channels[be].name,we=v.channelByteOffsets[Me]*v.columns,Ue=v.decodeChannels[Me];if(Ue===void 0)continue;z.value=ye+we;let tt=(v.height-(1+k+ue))*v.outLineWidth;for(let ct=0;ct<v.columns;ct++){let st=tt+(ct+B)*v.outputChannels+Ue;v.byteArray[st]=v.getter($,z)}}}}}function lt(){let v=this,I=v.offset,z={value:0};for(let b=0;b<v.height/v.blockHeight;b++){let U=Ie(v.viewer,I)-Bn.dataWindow.yMin;v.size=ze(v.viewer,I),v.lines=U+v.blockHeight>v.height?v.height-U:v.blockHeight;let N=v.columns*v.totalBytes,k=v.size<v.lines*N?v.uncompress(v):H(v);I.value+=v.size;for(let q=0;q<v.blockHeight;q++){let K=b*v.blockHeight,$=q+v.scanOrder(K);if($>=v.height)continue;let ue=q*N,ye=(v.height-1-$)*v.outLineWidth;for(let be=0;be<v.inputChannels.length;be++){let Me=Bn.channels[be].name,we=v.channelByteOffsets[Me]*v.columns,Ue=v.decodeChannels[Me];if(Ue!==void 0){z.value=ue+we;for(let tt=0;tt<v.columns;tt++){let ct=ye+tt*v.outputChannels+Ue;v.byteArray[ct]=v.getter(k,z)}}}}}}function dt(v,I,z){let b={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");b.version=v.getUint8(4);let U=v.getUint8(5);b.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},z.value=8;let N=!0;for(;N;){let B=re(I,z);if(B==="")N=!1;else{let k=re(I,z),q=ze(v,z),K=ls(v,I,z,k,q);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${k}'.`):b[B]=K}}if((U&-7)!=0)throw console.error("THREE.EXRHeader:",b),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return b}function Pt(v,I,z,b,U){let N={size:0,viewer:I,array:z,offset:b,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:cn};switch(v.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=H;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=ee;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=oe;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=oe;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=ce;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=He;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=Pe;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=Pe;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}let B={};for(let $ of v.channels)switch($.name){case"Y":case"R":case"G":case"B":case"A":B[$.name]=!0,N.type=$.pixelType}let k=!1;if(B.R&&B.G&&B.B)k=!B.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(B.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(U){case An:N.getter=ve;break;case en:N.getter=ne;break}else if(N.type==2)switch(U){case An:N.getter=it;break;case en:N.getter=X}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+v.compression+".");N.columns=N.width;let q=N.width*N.height*N.outputChannels;switch(U){case An:N.byteArray=new Float32Array(q),k&&N.byteArray.fill(1,0,q);break;case en:N.byteArray=new Uint16Array(q),k&&N.byteArray.fill(15360,0,q);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let K=0;for(let $ of v.channels)N.decodeChannels[$.name]!==void 0&&(N.channelByteOffsets[$.name]=K),K+=$.pixelType*2;if(N.totalBytes=K,N.outLineWidth=N.width*N.outputChannels,v.lineOrder==="INCREASING_Y"?N.scanOrder=$=>$:N.scanOrder=$=>N.height-1-$,N.outputChannels==4?(N.format=En,N.colorSpace=cn):(N.format=Gs,N.colorSpace=di),v.spec.singleTile){N.blockHeight=v.tiles.ySize,N.blockWidth=v.tiles.xSize;let $=Se(v.tiles,N.width,N.height),ue=Ne($,N.width,v.tiles.xSize,v.tiles.roundingMode),ye=Ne($,N.height,v.tiles.ySize,v.tiles.roundingMode);N.tileCount=ue[0]*ye[0];for(let be=0;be<$;be++)for(let Me=0;Me<ye[be];Me++)for(let we=0;we<ue[be];we++)Ze(I,b);N.decode=Ke.bind(N)}else{N.blockWidth=N.width;let $=Math.ceil(N.height/N.blockHeight);for(let ue=0;ue<$;ue++)Ze(I,b);N.decode=lt.bind(N)}return N}let ii={value:0},qn=new DataView(e),cs=new Uint8Array(e),Bn=dt(qn,e,ii),gi=Pt(Bn,qn,cs,ii,this.type);return gi.decode(),{header:Bn,width:gi.width,height:gi.height,data:gi.byteArray,format:gi.format,colorSpace:gi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=rn,a.magFilter=rn,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}};var tm=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);M[y]=_>96?_-97:_>64?_-39:_+4}for(var D=0,y=0;y<p.length;++y)M[D++]=M[y]<60?n[M[y]]:(M[y]-60)*64+M[++y];return M.buffer.slice(0,D)}function l(p,M,y,_,D,L){var P=s.exports.sbrk,C=y+3&-4,S=P(C*_),w=P(D.length),R=new Uint8Array(s.exports.memory.buffer);R.set(D,w);var O=p(S,y,_,w,D.length);if(O==0&&L&&L(S,C,_),M.set(R.subarray(S,S+y*_)),P(S-P(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(y){var _=y.data;M.pending-=_.count,M.requests[_.id][_.action](_.value),delete M.requests[_.id]},M}function m(p){for(var M="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+g.toString(),y=new Blob([M],{type:"text/javascript"}),_=URL.createObjectURL(y),D=0;D<p;++D)h[D]=d(_);URL.revokeObjectURL(_)}function x(p,M,y,_,D){for(var L=h[0],P=1;P<h.length;++P)h[P].pending<L.pending&&(L=h[P]);return new Promise(function(C,S){var w=new Uint8Array(y),R=f++;L.pending+=p,L.requests[R]={resolve:C,reject:S},L.object.postMessage({id:R,count:p,size:M,source:w,mode:_,filter:D},[w.buffer])})}function g(p){a.then(function(){var M=p.data;try{var y=new Uint8Array(M.count*M.size);l(s.exports[M.mode],y,M.count,M.size,M.source,s.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:y},[y.buffer])}catch(_){self.postMessage({id:M.id,count:M.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,M,y,_,D){l(s.exports.meshopt_decodeVertexBuffer,p,M,y,_,s.exports[c[D]])},decodeIndexBuffer:function(p,M,y,_){l(s.exports.meshopt_decodeIndexBuffer,p,M,y,_)},decodeIndexSequence:function(p,M,y,_){l(s.exports.meshopt_decodeIndexSequence,p,M,y,_)},decodeGltfBuffer:function(p,M,y,_,D,L){l(s.exports[u[D]],p,M,y,_,s.exports[c[L]])},decodeGltfBufferAsync:function(p,M,y,_,D){return h.length>0?x(p,M,y,u[_],c[D]):a.then(function(){var L=new Uint8Array(p*M);return l(s.exports[u[_]],L,p,M,y,s.exports[c[D]]),L})}}})();var Ti={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},hy=new fi(-1,1,1,-1,0,1),Sf=class extends Ht{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},fy=new Sf,Ai=class{constructor(e){this._mesh=new De(fy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Oc=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ln.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ai(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var uo=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},kc=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ve);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oc(Ti),this.copyPass.material.blending=hn,this.clock=new Ya}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uo!==void 0&&(a instanceof uo?n=!0:a instanceof kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bc=class extends Nn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var nm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Qs=class r extends Nn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(s,a,{type:en}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new sn(s,a,{type:en});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new sn(s,a,{type:en});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=nm;this.highPassUniforms=Ln.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ve(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ln.clone(Ti.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,blending:Jn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new _t,this._fsQuad=new Ai(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ve(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Qs.BlurDirectionX=new Ve(1,0);Qs.BlurDirectionY=new Ve(0,1);var ho={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ve},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Je},cameraProjectionMatrixInverse:{value:new Je},cameraWorldMatrix:{value:new Je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},fo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Hc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function im(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=dy(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let s=new Kn(i,e,e);return s.wrapS=jt,s.wrapT=jt,s.needsUpdate=!0,s}function dy(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=a++;s++,i--}return n}var po={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:wf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ve},cameraProjectionMatrixInverse:{value:new Je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function wf(r,e,t){let n=py(r,e,t),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=n[s];i+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return i}function py(r,e,t){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*e*i/r,a=Math.pow(i/(r-1),t);n.push(new F(Math.cos(s),Math.sin(s),a))}return n}var Gc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,m=e-f,x=t-d,g,p;m>x?(g=1,p=0):(g=0,p=1);let M=m-g+u,y=x-p+u,_=m-1+2*u,D=x-1+2*u,L=l&255,P=c&255,C=this.perm[L+this.perm[P]]%12,S=this.perm[L+g+this.perm[P+p]]%12,w=this.perm[L+1+this.perm[P+1]]%12,R=.5-m*m-x*x;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[C],m,x));let O=.5-M*M-y*y;O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[S],M,y));let G=.5-_*_-D*D;return G<0?s=0:(G*=G,s=G*G*this._dot(this.grad3[w],_,D)),70*(n+i+s)}noise3d(e,t,n){let i,s,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(u+h+f)*d,x=u-m,g=h-m,p=f-m,M=e-x,y=t-g,_=n-p,D,L,P,C,S,w;M>=y?y>=_?(D=1,L=0,P=0,C=1,S=1,w=0):M>=_?(D=1,L=0,P=0,C=1,S=0,w=1):(D=0,L=0,P=1,C=1,S=0,w=1):y<_?(D=0,L=0,P=1,C=0,S=1,w=1):M<_?(D=0,L=1,P=0,C=0,S=1,w=1):(D=0,L=1,P=0,C=1,S=1,w=0);let R=M-D+d,O=y-L+d,G=_-P+d,W=M-C+2*d,J=y-S+2*d,Y=_-w+2*d,he=M-1+3*d,j=y-1+3*d,Q=_-1+3*d,ge=u&255,Ee=h&255,Ge=f&255,Ye=this.perm[ge+this.perm[Ee+this.perm[Ge]]]%12,te=this.perm[ge+D+this.perm[Ee+L+this.perm[Ge+P]]]%12,de=this.perm[ge+C+this.perm[Ee+S+this.perm[Ge+w]]]%12,fe=this.perm[ge+1+this.perm[Ee+1+this.perm[Ge+1]]]%12,xe=.6-M*M-y*y-_*_;xe<0?i=0:(xe*=xe,i=xe*xe*this._dot3(this.grad3[Ye],M,y,_));let Ae=.6-R*R-O*O-G*G;Ae<0?s=0:(Ae*=Ae,s=Ae*Ae*this._dot3(this.grad3[te],R,O,G));let Qe=.6-W*W-J*J-Y*Y;Qe<0?a=0:(Qe*=Qe,a=Qe*Qe*this._dot3(this.grad3[de],W,J,Y));let Le=.6-he*he-j*j-Q*Q;return Le<0?o=0:(Le*=Le,o=Le*Le*this._dot3(this.grad3[fe],he,j,Q)),32*(i+s+a+o)}noise4d(e,t,n,i){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,m,x=(e+t+n+i)*l,g=Math.floor(e+x),p=Math.floor(t+x),M=Math.floor(n+x),y=Math.floor(i+x),_=(g+p+M+y)*c,D=g-_,L=p-_,P=M-_,C=y-_,S=e-D,w=t-L,R=n-P,O=i-C,G=S>w?32:0,W=S>R?16:0,J=w>R?8:0,Y=S>O?4:0,he=w>O?2:0,j=R>O?1:0,Q=G+W+J+Y+he+j,ge=a[Q][0]>=3?1:0,Ee=a[Q][1]>=3?1:0,Ge=a[Q][2]>=3?1:0,Ye=a[Q][3]>=3?1:0,te=a[Q][0]>=2?1:0,de=a[Q][1]>=2?1:0,fe=a[Q][2]>=2?1:0,xe=a[Q][3]>=2?1:0,Ae=a[Q][0]>=1?1:0,Qe=a[Q][1]>=1?1:0,Le=a[Q][2]>=1?1:0,rt=a[Q][3]>=1?1:0,$e=S-ge+c,Oe=w-Ee+c,A=R-Ge+c,qe=O-Ye+c,Fe=S-te+2*c,ke=w-de+2*c,Te=R-fe+2*c,V=O-xe+2*c,ae=S-Ae+3*c,E=w-Qe+3*c,T=R-Le+3*c,H=O-rt+3*c,ee=S-1+4*c,oe=w-1+4*c,ce=R-1+4*c,He=O-1+4*c,Pe=g&255,re=p&255,me=M&255,le=y&255,pe=o[Pe+o[re+o[me+o[le]]]]%32,Ie=o[Pe+ge+o[re+Ee+o[me+Ge+o[le+Ye]]]]%32,ze=o[Pe+te+o[re+de+o[me+fe+o[le+xe]]]]%32,Re=o[Pe+Ae+o[re+Qe+o[me+Le+o[le+rt]]]]%32,at=o[Pe+1+o[re+1+o[me+1+o[le+1]]]]%32,Ze=.6-S*S-w*w-R*R-O*O;Ze<0?u=0:(Ze*=Ze,u=Ze*Ze*this._dot4(s[pe],S,w,R,O));let it=.6-$e*$e-Oe*Oe-A*A-qe*qe;it<0?h=0:(it*=it,h=it*it*this._dot4(s[Ie],$e,Oe,A,qe));let X=.6-Fe*Fe-ke*ke-Te*Te-V*V;X<0?f=0:(X*=X,f=X*X*this._dot4(s[ze],Fe,ke,Te,V));let ie=.6-ae*ae-E*E-T*T-H*H;ie<0?d=0:(ie*=ie,d=ie*ie*this._dot4(s[Re],ae,E,T,H));let ne=.6-ee*ee-oe*oe-ce*ce-He*He;return ne<0?m=0:(ne*=ne,m=ne*ne*this._dot4(s[at],ee,oe,ce,He)),27*(u+h+f+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}};var mo=class r extends Nn{constructor(e,t,n=512,i=512,s,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=im(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new sn(this.width,this.height,{type:en}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Lt({defines:Object.assign({},ho.defines),uniforms:Ln.clone(ho.uniforms),vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ga,this.normalMaterial.blending=hn,this.pdMaterial=new Lt({defines:Object.assign({},po.defines),uniforms:Ln.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Lt({defines:Object.assign({},fo.defines),uniforms:Ln.clone(fo.uniforms),vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Lt({uniforms:Ln.clone(Ti.uniforms),vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ka,blendDst:Gr,blendEquation:Vn,blendSrcAlpha:Za,blendDstAlpha:Gr,blendEquationAlpha:Vn}),this.blendMaterial=new Lt({uniforms:Ln.clone(Hc.uniforms),vertexShader:Hc.vertexShader,fragmentShader:Hc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ul,blendSrc:Ka,blendDst:Gr,blendEquation:Vn,blendSrcAlpha:Za,blendDstAlpha:Gr,blendEquationAlpha:Vn}),this._fsQuad=new Ai(null),this._originalClearColor=new Be,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Nr,this.depthTexture.format=mr,this.depthTexture.type=pr,this.normalRenderTarget=new sn(this.width,this.height,{minFilter:ln,magFilter:ln,type:en,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}_restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}_generateNoise(e=64){let t=new Gc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new Kn(i,e,e,En,Dn);return s.wrapS=jt,s.wrapT=jt,s.needsUpdate=!0,s}};mo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var go={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Vc=class extends Nn{constructor(){super(),this.uniforms=Ln.clone(go.uniforms),this.material=new Ha({name:go.name,uniforms:this.uniforms,vertexShader:go.vertexShader,fragmentShader:go.fragmentShader}),this._fsQuad=new Ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Wc(r,e){return e!==void 0?e:window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||r.clientWidth<700}var Xc=r=>Math.min(window.devicePixelRatio||1,r?1.25:1.5);function qc(r,e,t,{lite:n,bloom:i=.45}){let s=r.extensions.has("EXT_color_buffer_half_float")||r.extensions.has("EXT_color_buffer_float"),a=new sn(1,1,{type:s?en:Dn,samples:n?2:4}),o=new zc(r,a);o.addPass(new Bc(e,t));let l=null;if(!n){l=new mo(e,t,1,1),l.blendIntensity=.85,l.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1});let P=l.setSize.bind(l);l.setSize=(S,w)=>P(Math.max(1,Math.ceil(S/2)),Math.max(1,Math.ceil(w/2)));let C=l._overrideVisibility.bind(l);l._overrideVisibility=function(){C(),this.scene.traverse(S=>{S.visible&&S.isMesh&&S.material&&S.material.transparent&&(S.visible=!1)})},o.addPass(l)}let c=new Qs(new Ve(1,1),i,.45,1);o.addPass(c),o.addPass(new Vc);let u=P=>[o.renderTarget1,o.renderTarget2].forEach(C=>{C.samples!==P&&(C.samples=P,C.dispose())}),h=[l?()=>{l.enabled=!1}:null,r.getPixelRatio()>1?()=>{r.setPixelRatio(1),o.setPixelRatio(1)}:null,()=>u(n?0:2),n?null:()=>u(0)].filter(Boolean),f=0,d=0,m=0,x=0,g=[1,1];function p(P,C){g=[P,C],o.setSize(P,C)}function M(P,C){let S=P-d;if(d=P,!C||f>=h.length||S>400||S<=0){C||(d=0);return}x++,S>40&&m++,!(x<24)&&(m>=10&&(h[f++](),p(g[0],g[1])),x=0,m=0)}let y=new fi(-1,1,1,-1,0,1);function _(P,C,S){if(!r.compileAsync)return Promise.resolve();let w=r.getRenderTarget();r.setRenderTarget(P);let R=r.compileAsync(C,S,e).catch(()=>{});return r.setRenderTarget(w),R}let D=P=>_(o.renderTarget1,P,t);function L(){let P=new vi,C=new vi,S=new Et(2,2),w=new Set,R=(G,W)=>{W&&W.isMaterial&&!w.has(W)&&(w.add(W),G.add(new De(S,W)))};o.passes.forEach(G=>{let W=G===o.passes[o.passes.length-1]?C:P;Object.values(G).forEach(J=>Array.isArray(J)?J.forEach(Y=>R(W,Y)):R(W,J))}),R(P,new Os({depthPacking:Cc})),R(P,new ks);let O=()=>S.dispose();return Promise.all([_(o.renderTarget1,e,t),_(o.renderTarget1,P,y),_(null,C,y)]).then(O,O)}return{composer:o,setSize:p,watch:M,warm:L,prepare:D,render(){o.render()},level:()=>f,dispose(){l&&l.dispose(),c.dispose(),o.dispose(),a.dispose()}}}function $r(r,e=[]){r.updateMatrixWorld(!0);let t=new Je().copy(r.matrixWorld).invert(),n=new Set(e),i=new Map,s=l=>{if(!(n.has(l)||!l.visible||Object.keys(l.userData).length)){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&!Array.isArray(l.material)&&!l.material.transparent&&!l.morphTargetInfluences){let c=l.material.uuid+(l.castShadow?"c":"")+(l.receiveShadow?"r":"");i.has(c)||i.set(c,[]),i.get(c).push(l)}l.children.forEach(s)}};r.children.slice().forEach(s);let a=0,o=new Je;return i.forEach(l=>{if(l.length<2)return;let c=l.map(f=>{let d=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();return!d.attributes.position||!d.attributes.normal||!d.attributes.uv?null:(Object.keys(d.attributes).forEach(m=>{m!=="position"&&m!=="normal"&&m!=="uv"&&d.deleteAttribute(m)}),d.clearGroups(),d.applyMatrix4(o.multiplyMatrices(t,f.matrixWorld)),d)});if(c.some(f=>!f))return;let u=Jr(c,!1);if(c.forEach(f=>f.dispose()),!u)return;let h=new De(u,l[0].material);h.castShadow=l[0].castShadow,h.receiveShadow=l[0].receiveShadow,r.add(h),l.forEach(f=>f.parent.remove(f)),a+=l.length}),a}var Af=`varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Rf=`uniform vec3 uColor; uniform float uFront, uFlow, uTime, uDir, uLen, uHi, uShow, uRev;
varying vec2 vUv;
void main(){
  float s = uRev > 0.5 ? 1.0 - vUv.x : vUv.x;
  float on = 1.0 - step(uFront, s - 0.0001);
  float d = fract(vUv.x * uLen / 0.42 - uTime * 1.7 * uDir);
  float dash = smoothstep(0.0, 0.12, d) * (1.0 - smoothstep(0.3, 0.45, d));
  // intensita' contenute: oltre 1 la resa schiarisce verso il bianco e i colori dei conduttori non si riconoscono piu'
  vec3 c = uColor * (uShow * 0.09 + on * (0.42 + uFlow * dash * 0.9) + uHi * 0.35);
  gl_FragColor = vec4(c, 1.0);
}`,Tf={fase:16752453,neutro:6203647,terra:9425231,leak:16734762},my=r=>r*r*(3-2*r);function rm(r,e){let t=new Ce;t.renderOrder=20,r.add(t);let n={},i=1,s=0;Object.entries(e).forEach(([c,u])=>{Object.entries(u).forEach(([h,f])=>{let d=new Fr;for(let y=1;y<f.length;y++)d.add(new hr(new F(...f[y-1]),new F(...f[y])));let m=d.getLength(),x=new Vi(d,Math.max(24,Math.round(m*14)),.016,6,!1),g={uColor:{value:new Be(Tf[h])},uFront:{value:0},uFlow:{value:0},uTime:{value:0},uDir:{value:h==="fase"?1:-1},uLen:{value:m},uHi:{value:0},uShow:{value:i},uRev:{value:0}},p=new Lt({uniforms:g,vertexShader:Af,fragmentShader:Rf,transparent:!0,blending:Jn,depthTest:!1,depthWrite:!1}),M=new De(x,p);M.renderOrder=20,M.frustumCulled=!1,t.add(M),n[c+"."+h]={mesh:M,u:g,line:c,cond:h,live:!1,flowUntil:0}})});let a=new Map;function o(){s||(s=1,r.loop(()=>{let c=performance.now(),u=!1;return Object.values(n).forEach(h=>{h.u.uTime.value=c/1e3;let f=a.get(h);if(f){let m=Math.min(1,(c-f.t0)/f.ms);h.u.uFront.value=f.from+(f.to-f.from)*my(m),m>=1?a.delete(h):u=!0}let d=h.flowUntil>c?1:Math.max(0,1-(c-h.flowUntil)/500);h.u.uFlow.value=r.reduced?0:d,d>0&&(u=!0)}),u?!0:(s=0,!1)}))}function l(c,u,h,f=0,d=!1){if(c.u.uRev.value=d?1:0,r.reduced){c.u.uFront.value=u;return}a.set(c,{from:c.u.uFront.value,to:u,t0:performance.now()+f,ms:h})}return{group:t,setLine(c,{live:u,flow:h,earth:f=0}){["fase","neutro","terra"].forEach(d=>{let m=n[c+"."+d];if(!m)return;let x=d==="terra",g=x?f>0:u;x?(m.u.uColor.value.setHex(Tf[g?"leak":"terra"]),g!==m.live&&l(m,g?f:0,g?520:260,g?300:0,g&&f>=1)):g!==m.live&&(g?l(m,1,420,d==="neutro"?330:0,d==="neutro"):l(m,0,280,0,!1)),g&&(h||x&&f>0)&&(!m.live||h==="again")&&(m.flowUntil=performance.now()+(x?1400:1700)),m.live=g}),o(),r.redraw()},cut(){Object.values(n).forEach(c=>{a.delete(c),c.u.uFront.value=0,c.u.uFlow.value=0,c.flowUntil=0,c.live=!1,c.u.uColor.value.setHex(Tf[c.cond])}),r.redraw()},highlight(c){Object.values(n).forEach(u=>u.u.uHi.value=u.line===c?1:0),r.redraw()},setVisible(c){i=c?1:0,t.visible=!!c,Object.values(n).forEach(u=>u.u.uShow.value=i),r.redraw()}}}function jc(r,e,t){let n=t||40,i=new Float32Array(n*3),s=new Float32Array(n);for(let h=0;h<n;h++)s[h]=Math.random(),i[h*3]=(Math.random()-.5)*.2,i[h*3+1]=Math.random()*.3,i[h*3+2]=(Math.random()-.5)*.12;let a=new Ht;a.setAttribute("position",new Wt(i,3)),a.setAttribute("aSeed",new Wt(s,1));let o={uTime:{value:0},uColor:{value:new Be(16738842)}},l=new Lt({uniforms:o,transparent:!0,blending:Jn,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; varying float vA;
      void main(){ float t = fract(uTime * (0.9 + aSeed) + aSeed); vec3 p = position * (1.0 + t * 2.0); p.y += t * 0.45;
        vA = 1.0 - t; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = (3.0 + aSeed * 4.0) * (14.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(uColor * 3.0 * vA * (1.0 - d * 2.0), 1.0); }"}),c=new Ur(a,l);c.position.set(...e),c.visible=!1,c.frustumCulled=!1,c.renderOrder=21,r.add(c);let u=0;return{play(h){if(c.visible=!0,u)return;let f=performance.now();u=r.animate(h,d=>{o.uTime.value=(performance.now()-f)/1e3,d>=1&&(c.visible=!1,u=0)})},stop(){c.visible=!1,r.redraw()}}}var sm={marrone:16752453,blu:6203647,gv:9425231,nero:12042448,grigio:14080479,rosso:16734810};function am(r){let e=new Ce;e.renderOrder=20,r.add(e);let t=new Map,n=!1,i=0;function s(){n||(n=!0,r.loop(()=>{let o=performance.now(),l=!1;return t.forEach(c=>{if(c.u.uTime.value=o/1e3,c.born){let h=Math.min(1,(o-c.born)/520);c.u.uFront.value=h*h*(3-2*h),h>=1?c.born=0:l=!0}let u=i>o?1:Math.max(0,1-(o-i)/600);c.u.uFlow.value=r.reduced?0:u,u>0&&(l=!0)}),l?!0:(n=!1,!1)}))}function a(o,l){let c=new Fr;for(let x=1;x<o.length;x++)c.add(new hr(new F(...o[x-1]),new F(...o[x])));let u=c.getLength(),h=new Vi(c,Math.max(16,Math.round(u*12)),.016,6,!1),f={uColor:{value:new Be(sm[l]||16777215)},uFront:{value:r.reduced?1:0},uFlow:{value:0},uTime:{value:0},uDir:{value:1},uLen:{value:u},uHi:{value:0},uShow:{value:1},uRev:{value:0}},d=new Lt({uniforms:f,vertexShader:Af,fragmentShader:Rf,transparent:!0,blending:Jn,depthTest:!1,depthWrite:!1}),m=new De(h,d);return m.renderOrder=20,m.frustumCulled=!1,{mesh:m,u:f}}return{sync(o,l=!0){let c=new Set;o.forEach(u=>{if(c.add(u.id),t.has(u.id))return;let h=a(u.pts,u.color);e.add(h.mesh),t.set(u.id,{...h,born:l&&!r.reduced?performance.now():0}),(!l||r.reduced)&&(h.u.uFront.value=1)}),t.forEach((u,h)=>{c.has(h)||(e.remove(u.mesh),u.mesh.geometry.dispose(),u.mesh.material.dispose(),t.delete(h))}),s(),r.redraw()},flow(o=2200){i=performance.now()+o,s()},setVisible(o){e.visible=!!o,r.redraw()},clear(){this.sync([])}}}function $s(r){let e=new Ce;e.renderOrder=20,r.add(e);let t=new Map,n=!1;function i(){n||(n=!0,r.loop(()=>{let a=performance.now(),o=!1;return t.forEach(l=>{if(l.u.uTime.value=a/1e3,l.born){let u=Math.min(1,(a-l.born)/520);l.u.uShow.value=u,u>=1?l.born=0:o=!0}if(l.t0){let u=Math.min(1,(a-l.t0)/(l.to>l.from?420:240));l.u.uFront.value=l.from+(l.to-l.from)*u*u*(3-2*u),u>=1?l.t0=0:o=!0}let c=l.current?1:Math.max(0,l.u.uFlow.value-.08);l.u.uFlow.value=r.reduced?0:c,c>0&&!r.reduced&&(o=!0)}),o?!0:(n=!1,!1)}))}function s(a,o){let l=new Fr;for(let m=1;m<a.length;m++)l.add(new hr(new F(...a[m-1]),new F(...a[m])));let c=l.getLength(),u=new Vi(l,Math.max(16,Math.round(c*10)),.009,5,!1),h={uColor:{value:new Be(sm[o]||16777215)},uFront:{value:0},uFlow:{value:0},uTime:{value:0},uDir:{value:1},uLen:{value:c},uHi:{value:0},uShow:{value:1},uRev:{value:0}},f=new Lt({uniforms:h,vertexShader:Af,fragmentShader:Rf,transparent:!0,blending:Jn,depthTest:!1,depthWrite:!1}),d=new De(u,f);return d.renderOrder=20,d.frustumCulled=!1,{mesh:d,u:h}}return{sync(a,o=!0){let l=new Set;a.forEach(c=>{l.add(c.id);let u=t.get(c.id);u||(u={...s(c.pts,c.color),born:o&&!r.reduced?performance.now():0,live:!1,current:!1,t0:0,from:0,to:0},u.born&&(u.u.uShow.value=0),e.add(u.mesh),t.set(c.id,u)),!!c.live!==u.live&&(u.live=!!c.live,r.reduced?u.u.uFront.value=u.live?1:0:(u.from=u.u.uFront.value,u.to=u.live?1:0,u.t0=performance.now())),u.current=!!c.current&&u.live}),t.forEach((c,u)=>{l.has(u)||(e.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh.material.dispose(),t.delete(u))}),i(),r.redraw()},highlight(a){t.forEach((o,l)=>o.u.uHi.value=a&&a.includes(l)?1:0),r.redraw()},setVisible(a){e.visible=!!a,r.redraw()},clear(){this.sync([])}}}var om=[{id:"c01-circuito-chiuso",code:"c01",blurb:"Una lampada si accende solo se il giro \xE8 completo.",flow:"always",n:0,name:"Circuito chiuso",title:"Il circuito chiuso",goal:"Collega la lampada al quadro con due fili: la fase e il neutro. Poi dai corrente con la levetta del quadro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:[],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase (marrone) parte dal morsetto FASE del quadro e arriva a un morsetto della lampada.","Il neutro (blu) parte dal morsetto NEUTRO del quadro e arriva all\u2019altro morsetto della lampada.","Servono due fili in tutto, uno per ciascun morsetto della lampada. Poi tocca la levetta del quadro."]},{id:"c02-presa",code:"c02",blurb:"Fase, neutro e terra: dove vanno e perch\xE9.",flow:"always",n:1,name:"Presa",title:"La presa di corrente",goal:"Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{F:{l:"FASE"},PE:{l:"TERRA"},N:{l:"NEUTRO"}}},{id:"P",type:"presa",short:"Presa",title:"Presa bipasso 10/16 A",terms:{L:{l:"L"},PE:{l:"PE"},N:{l:"N"}}}],controls:[],load:["P.L","P.N"],earth:["Q.PE","P.PE"],pol:"P.L",room:"tavolo",solution:[["Q.F","P.L","marrone"],["Q.N","P.N","blu"],["Q.PE","P.PE","gv"]],hints:["Il marrone \xE8 la fase: va dal quadro al morsetto L della presa.","Il blu \xE8 il neutro: va dal quadro al morsetto N della presa.","Il giallo-verde \xE8 la terra: va al morsetto PE, quello al centro."]},{id:"c03-interrotto",code:"c03",blurb:"Interrompere la fase, non il neutro.",flow:"always",n:2,name:"Interrotto",title:"Punto luce interrotto",goal:"Accendi e spegni la lampada con un interruttore. L\u2019interruttore interrompe la fase, mai il neutro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L.A","marrone"],["Q.N","L.B","blu"]],hints:["Parti dalla fase: dal quadro va all\u2019interruttore, non direttamente alla lampada.","Dall\u2019altro morsetto dell\u2019interruttore il filo va a un morsetto della lampada.","Il neutro (blu) va dal quadro all\u2019altro morsetto della lampada, senza passare dall\u2019interruttore."]},{id:"c04-parallelo",code:"c04",blurb:"Il parallelo: due lampade, un solo comando.",flow:"always",n:0,name:"Parallelo",title:"Due lampade, un interruttore",goal:"Comanda due lampade con un solo interruttore: premendolo, si accendono e si spengono insieme.",loadName:"Le lampade",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L1",type:"lamp",short:"Lampada 1",title:"Portalampada 1",terms:{B:{l:"B"},A:{l:"A"}}},{id:"L2",type:"lamp",short:"Lampada 2",title:"Portalampada 2",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L1.A","L1.B"],loads:[["L1.A","L1.B"],["L2.A","L2.B"]],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L1.A","marrone"],["S.b","L2.A","marrone"],["Q.N","L1.B","blu"],["Q.N","L2.B","blu"]],hints:["La fase va dal quadro all\u2019interruttore, come in un punto luce con una sola lampada.","Dal morsetto 2 dell\u2019interruttore parte un filo per ogni lampada: due fili di fase, uno su ciascuna.","Il neutro (blu) va dal quadro a tutte e due le lampade, sul morsetto che resta libero, senza passare dall\u2019interruttore."]},{id:"c05-deviato",code:"c05",blurb:"Accendere e spegnere da due punti.",flow:"onDemand",n:3,name:"Deviato",title:"Punto luce deviato",goal:"Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","D2.1","nero"],["D1.2","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase entra nel morsetto C (comune) del primo deviatore.","I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.","Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori."]},{id:"c06-invertito",code:"c06",blurb:"Comandare la stessa luce da tre punti.",flow:"onDemand",n:4,name:"Invertito",title:"Punto luce invertito",goal:"Aggiungi un terzo punto di comando in mezzo, con l\u2019invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"I",type:"inv",short:"Invertitore",title:"Invertitore",where:"Camera",terms:{1:{l:"1"},2:{l:"2"},3:{l:"3"},4:{l:"4"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","I","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","I.1","nero"],["D1.2","I.2","grigio"],["I.3","D2.1","nero"],["I.4","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["\xC8 come la deviata, ma in mezzo ai due fili di collegamento metti l\u2019invertitore.","I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell\u2019invertitore.","Dai morsetti 3 e 4 (in basso) dell\u2019invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada."]}];var ea=r=>om.find(e=>e.id===r),Pf=(r,e)=>r.map(t=>e[t.id]?{...t,...e[t.id]}:t),CS={...ea("c03-interrotto"),id:"t01-bagno",quadroOnly:!0,code:"t01",n:0,name:"Bagno",title:"Il bagno",blurb:"Punto luce interrotto, con l\u2019interruttore vicino alla porta.",goal:"Cabla il punto luce del bagno: un interruttore vicino alla porta accende e spegne la lampada.",comps:Pf(ea("c03-interrotto").comps,{S:{short:"Interruttore",title:"Interruttore del bagno",where:"Porta"},L:{short:"Lampada",title:"Lampada del bagno"}})},PS={...ea("c05-deviato"),id:"t02-camera",quadroOnly:!0,code:"t02",n:0,name:"Camera",title:"La camera",blurb:"Punto luce deviato, dalla porta e dal comodino.",goal:"Cabla il punto luce della camera: si accende e si spegne dalla porta e dal comodino.",comps:Pf(ea("c05-deviato").comps,{D1:{short:"Deviatore porta",title:"Deviatore della porta",where:"Porta"},D2:{short:"Deviatore comodino",title:"Deviatore del comodino",where:"Comodino"},L:{short:"Lampada",title:"Lampada della camera"}})},IS={...ea("c06-invertito"),id:"t03-corridoio",quadroOnly:!0,code:"t03",n:0,name:"Corridoio",title:"Il corridoio",blurb:"Punto luce invertito, da tre punti.",goal:"Cabla il punto luce del corridoio: si comanda dall\u2019ingresso, dal soggiorno e dalla camera.",comps:Pf(ea("c06-invertito").comps,{D1:{short:"Deviatore ingresso",title:"Deviatore dell\u2019ingresso",where:"Ingresso"},I:{short:"Invertitore soggiorno",title:"Invertitore del soggiorno",where:"Soggiorno"},D2:{short:"Deviatore camera",title:"Deviatore della camera",where:"Camera"},L:{short:"Lampada",title:"Lampada del corridoio"}})};var Gt={size:{w:9,d:8},rooms:[{id:"cucina",name:"Cucina",x:0,z:0,w:3,d:3.5,scene:!0},{id:"bagno",name:"Bagno",x:3,z:0,w:2,d:3.5,circuit:"t01-bagno",lamp:[4,1.75]},{id:"camera",name:"Camera",x:5,z:0,w:4,d:3.5,circuit:"t02-camera",lamp:[7,1.75]},{id:"corridoio",name:"Corridoio",x:0,z:3.5,w:9,d:1.5,circuit:"t03-corridoio",lamp:[4.5,4.25]},{id:"ingresso",name:"Ingresso",x:0,z:5,w:2.5,d:3,scene:!0},{id:"soggiorno",name:"Soggiorno",x:2.5,z:5,w:6.5,d:3,scene:!0}],controls:{"t01-bagno":{S:{x:3.3,z:3.5,face:"s",label:"Interruttore bagno"}},"t02-camera":{D1:{x:5.4,z:3.5,face:"s",label:"Porta camera"},D2:{x:9,z:1.4,face:"w",label:"Comodino"}},"t03-corridoio":{D1:{x:0,z:4.25,face:"e",label:"Ingresso"},I:{x:4,z:5,face:"s",label:"Soggiorno"},D2:{x:9,z:4.25,face:"w",label:"Camera"}}},breaker:{x:0,z:6.5,face:"e",label:"Quadro"},wallsH:[[0,0,9],[3.5,0,1],[3.5,2,3.9],[3.5,4.8,6],[3.5,7,9],[5,0,1.6],[5,2.4,5],[5,6,9],[8,0,9]],wallsV:[[0,0,8],[9,0,8],[3,0,3.5],[5,0,3.5],[2.5,5,6],[2.5,7,8]],furniture:[{room:"camera",x:7.3,z:.3,w:1.5,d:2,h:.5,c:"#B9A58A"},{room:"camera",x:8.5,z:1.1,w:.4,d:.5,h:.5,c:"#9C8666"},{room:"bagno",x:3.2,z:.2,w:1.6,d:.6,h:.45,c:"#E9EEF0"},{room:"bagno",x:4,z:2.4,w:.9,d:.9,h:.15,c:"#CFE0E8"},{room:"soggiorno",x:3.5,z:6.7,w:2.4,d:.9,h:.5,c:"#8A94A3"},{room:"soggiorno",x:6.3,z:5.8,w:1.4,d:1,h:.4,c:"#B9A58A"},{room:"cucina",x:.2,z:.2,w:2.6,d:.6,h:.9,c:"#D8D2C4"}]},gy=["L\u2019interruttore del bagno sta sul filo di fase, tra il quadro e la lampada.","Il neutro va diretto alla lampada.","Si cabla come nel livello dell\u2019interruttore."],xy=["Due deviatori comandano la stessa lampada: porta e comodino.","I due fili di collegamento vanno 1 con 1 e 2 con 2.","La fase entra nel comune del primo; il comune del secondo va alla lampada."],vy=["Tre punti di comando: ingresso, soggiorno e camera.","L\u2019invertitore sta in mezzo ai due fili di collegamento tra i deviatori.","Ogni comando cambia lo stato della luce."],Cf=(r,e,t)=>({type:"spiegazione",title:r,paras:[e,t]}),DS={"t01-bagno":{support:"passi",lesson:{pages:[Cf("Il bagno","Un punto luce con un interruttore vicino alla porta. Lo hai gi\xE0 fatto: qui lo ritrovi dentro una casa vera.","Se ti serve, ripassa la lezione del punto luce interrotto dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["S.a"],color:"marrone",short:"1 Fase",title:"Porta la fase all\u2019interruttore",text:"Dalla FASE del quadro al morsetto 1 dell\u2019interruttore."},{kind:"wire",from:"S.b",to:["L.A"],color:"marrone",short:"2 Lampada",title:"Dall\u2019interruttore alla lampada",text:"Dal morsetto 2 dell\u2019interruttore a un morsetto della lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"3 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"4 Levetta",title:"Dai corrente",text:"Tocca la levetta del quadro, poi prova l\u2019interruttore."},{kind:"verify",short:"5 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:gy},"t02-camera":{support:"passi",lesson:{pages:[Cf("La camera","Un punto luce che si comanda dalla porta e dal comodino, con due deviatori.","Se ti serve, ripassa la lezione del punto luce deviato dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel primo deviatore",text:"Dalla FASE al comune C del deviatore della porta."},{kind:"wire",from:"D1.1",to:["D2.1"],color:"nero",short:"2 Collegamento 1",title:"Primo filo di collegamento",text:"Dal morsetto 1 del primo deviatore al morsetto 1 del secondo."},{kind:"wire",from:"D1.2",to:["D2.2"],color:"grigio",short:"3 Collegamento 2",title:"Secondo filo di collegamento",text:"Dal morsetto 2 del primo deviatore al morsetto 2 del secondo."},{kind:"wire",from:"D2.C",to:["L.A"],color:"marrone",short:"4 Lampada",title:"Dal secondo deviatore alla lampada",text:"Dal comune C del deviatore del comodino alla lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"5 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"6 Levetta",title:"Dai corrente",text:"Tocca la levetta, poi prova i due deviatori."},{kind:"verify",short:"7 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:xy},"t03-corridoio":{support:"obiettivo",lesson:{pages:[Cf("Il corridoio","Un punto luce che si comanda da tre punti: ingresso, soggiorno e camera.","Se ti serve, ripassa la lezione del punto luce invertito dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel deviatore dell\u2019ingresso",text:"Dalla FASE al comune C del deviatore dell\u2019ingresso."},{kind:"verify",short:"2 Verifica",title:"Collega i tre punti di comando",text:"Collega il deviatore dell\u2019ingresso ai morsetti 1 e 2 dell\u2019invertitore, poi i morsetti 3 e 4 al deviatore della camera. Il comune C di quest\u2019ultimo va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica."}],summary:vy}};function If(){let r=[];return Gt.rooms.filter(e=>e.circuit).forEach(e=>{let t=Gt.controls[e.circuit]||{};Object.keys(t).forEach(n=>r.push({room:e.id,circuit:e.circuit,id:n,...t[n]}))}),r}var xo=new F;function ti(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;xo.copy(e),xo[n]=0,xo.normalize();let c=.5*a/(a+o),u=1-xo.angleTo(r)/l;return Math.sign(xo[t])===1?u*c:o/(a+o)+c+c*(1-u)}var es=class extends Tt{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new F,l=new F,c=new F(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,m=new F,x=.5/i;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(o.fromArray(u,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(o.x)+l.x*s,u[g+1]=c.y*Math.sign(o.y)+l.y*s,u[g+2]=c.z*Math.sign(o.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=ti(m,l,"z","y",s,n),f[p+1]=1-ti(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),f[p+0]=1-ti(m,l,"z","y",s,n),f[p+1]=1-ti(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),f[p+0]=1-ti(m,l,"x","z",s,e),f[p+1]=ti(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),f[p+0]=1-ti(m,l,"x","z",s,e),f[p+1]=1-ti(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),f[p+0]=1-ti(m,l,"x","y",s,e),f[p+1]=1-ti(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),f[p+0]=ti(m,l,"x","y",s,e),f[p+1]=1-ti(m,l,"y","x",s,t);break}}};var ni=1.45,bo=2.75,ta="assets/trilocale/";function _o(r,e){let t=document.createElement("canvas");return t.width=t.height=r,e(t.getContext("2d",{willReadFrequently:!0}),r),t}function Fn(r,e=1,t=!0){let n=new zt(r);return n.wrapS=n.wrapT=jt,n.repeat.set(e,e),n.anisotropy=4,t&&(n.colorSpace=wt),n}function yo(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Mo(r,e,t,n,i=.06){for(let s=0;s<e*40;s++){let a=Math.floor(n()*255);r.fillStyle=`rgba(${a},${a},${a},${i})`,r.fillRect(n()*e,n()*e,1+n()*t,1+n()*t)}}var by=()=>_o(256,(r,e)=>{r.fillStyle="#808080",r.fillRect(0,0,e,e),Mo(r,e,3,yo(7),.12)});function vo(r,e,t,n,i,s){return _o(r,a=>{let o=yo(i),l=r/e;a.fillStyle=s?"#202020":n,a.fillRect(0,0,r,r);for(let c=0;c<e;c++)for(let u=0;u<e;u++){if(s)a.fillStyle="#d0d0d0";else{let h=(o()-.5)*10,f=new Be(t).offsetHSL(0,0,h/255);a.fillStyle="#"+f.getHexString()}a.fillRect(c*l+2,u*l+2,l-4,l-4)}s||Mo(a,r,2,o,.04)})}function lm(r){return _o(512,(e,t)=>{let n=yo(11),i=16,s=12,a=t/i,o=t/s;e.fillStyle=r?"#000":"#5a2a1a",e.fillRect(0,0,t,t);for(let l=0;l<i;l++)for(let c=-1;c<=s;c++){let u=c*o+l%2*o/2,h=e.createLinearGradient(u,0,u+o,0);if(r)h.addColorStop(0,"#202020"),h.addColorStop(.5,"#f0f0f0"),h.addColorStop(1,"#202020");else{let f=new Be().setHSL(.04+(n()-.5)*.02,.55,.36+(n()-.5)*.08);h.addColorStop(0,"#"+f.clone().offsetHSL(0,0,-.12).getHexString()),h.addColorStop(.5,"#"+f.getHexString()),h.addColorStop(1,"#"+f.clone().offsetHSL(0,0,-.14).getHexString())}e.fillStyle=h,e.fillRect(u+1,l*a,o-2,a*.92)}r||Mo(e,t,3,n,.08)})}function Df(r,e,t){return _o(256,(n,i)=>{let s=yo(t);n.fillStyle=r,n.fillRect(0,0,i,i),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(14,14,i-28,i-28),n.lineWidth=3,n.strokeRect(32,32,i-64,i-64);for(let a=0;a<6;a++)n.beginPath(),n.arc(i/2,i/2,20+a*14,0,Math.PI*2),n.stroke();Mo(n,i,2,s,.1)})}var Yc=(r,e)=>_o(128,(t,n)=>{t.fillStyle=r,t.fillRect(0,0,n,n);for(let i=0;i<n;i+=2)t.fillStyle=`rgba(0,0,0,${.04+i%4*.01})`,t.fillRect(i,0,1,n),t.fillRect(0,i,n,1);Mo(t,n,1,yo(e),.05)});function cm(r){let e={},t=Fn(by(),3,!1);e.wall=new _e({color:15657182,roughness:.92,bumpMap:t,bumpScale:.6}),e.wallCut=new _e({color:4212302,roughness:.8}),e.outside=new _e({color:14865080,roughness:.95,bumpMap:t,bumpScale:1});let n=(l,c)=>{let u=new Kn(new Uint8Array([l>>16&255,l>>8&255,l&255,255]),1,1);return c&&(u.colorSpace=wt),u.needsUpdate=!0,u},i=l=>{let c=Math.round(l*255);return n(c<<16|c<<8|c,!1)};e.parquet=new _e({color:16777215,map:n(11831903,!0),roughness:1,roughnessMap:i(.55),bumpMap:i(.5),bumpScale:.4});let s=new kr,a=(l,c,u)=>s.load(ta+l,h=>{h.wrapS=h.wrapT=jt,h.anisotropy=8,c&&(h.colorSpace=wt),u(h),r()},void 0,()=>{}),o=(l,c,u)=>{let h=l[c];l[c]=u,h&&h.dispose()};return a("parquet.webp",!0,l=>{l.repeat.set(1,1),o(e.parquet,"map",l)}),a("parquet-ruvido.webp",!1,l=>o(e.parquet,"roughnessMap",l)),a("parquet-rilievo.webp",!1,l=>o(e.parquet,"bumpMap",l)),e.tiles=new _e({map:Fn(vo(512,6,"#d9d6cf","#9c978d",3),1),bumpMap:Fn(vo(512,6,0,0,3,!0),1,!1),bumpScale:.8,roughness:.35}),e.kitchenFloor=new _e({map:Fn(vo(512,4,"#8f8a82","#5d5953",5),1),bumpMap:Fn(vo(512,4,0,0,5,!0),1,!1),bumpScale:.8,roughness:.6}),e.grass=new _e({color:16777215,map:n(6257221,!0),roughness:1}),a("prato.webp",!0,l=>{l.repeat.set(10,10),o(e.grass,"map",l),e.grass.color.set(12108968)}),e.paving=new _e({map:Fn(vo(256,4,"#b7b1a6","#8a857c",9),1),roughness:.9}),e.roof=new _e({map:Fn(lm(!1),1),bumpMap:Fn(lm(!0),1,!1),bumpScale:2,roughness:.75,transparent:!0,opacity:1}),e.fascia=new _e({color:7031347,roughness:.7,transparent:!0,opacity:1}),e.wood=new _e({color:9068348,roughness:.5}),e.woodLight=new _e({color:14073754,roughness:.55}),e.door=new _e({color:15921128,roughness:.45}),e.white=new _e({color:16052974,roughness:.3}),e.ceramic=new Tn({color:16777215,roughness:.12,clearcoat:1,clearcoatRoughness:.05}),e.steel=new _e({color:13159632,roughness:.28,metalness:1}),e.black=new _e({color:1382170,roughness:.15,metalness:.2}),e.stone=new _e({color:3815478,roughness:.25}),e.cabinet=new _e({color:6254442,roughness:.45}),e.water=new _e({color:12573152,roughness:.05,metalness:.1,transparent:!0,opacity:.6}),e.mirror=new _e({color:14673642,roughness:.02,metalness:1}),e.glass=new _e({color:10466500,roughness:.05,metalness:.6,emissive:0}),e.frame=new _e({color:16184818,roughness:.4}),e.duvet=new _e({map:Fn(Yc("#e9e4da",2),4),roughness:.95}),e.blanket=new _e({map:Fn(Yc("#7b8f86",3),4),roughness:.95}),e.pillow=new _e({map:Fn(Yc("#f5f2ec",4),2),roughness:.95}),e.rugLiving=new _e({map:Fn(Df("#a65c46","#e8d5b5",21)),roughness:1}),e.rugBed=new _e({map:Fn(Df("#d9d2c3","#8a8f86",22)),roughness:1}),e.runner=new _e({map:Fn(Df("#3e4a5c","#c9b48a",23)),roughness:1}),e.towel=new _e({map:Fn(Yc("#7fa6b5",5),3),roughness:1}),e.screen=new _e({color:724240,roughness:.05,metalness:.5}),e.cord=new _e({color:2236962,roughness:.6}),e.plate=new _e({color:16513782,roughness:.3}),e.rocker=new _e({color:15329249,roughness:.25}),e.panel=new _e({color:15855852,roughness:.35}),e.panelDoor=new _e({color:3819090,roughness:.1,transparent:!0,opacity:.55}),e.book=[10238766,3103354,13939804,5204806,7228018].map(l=>new _e({color:l,roughness:.8})),e}var um=r=>(r.castShadow=!0,r.receiveShadow=!0,r);function ot(r,e,t,n,i,s,a,o,l=.02){let c=um(new De(new es(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e));return c.position.set(t+s/2,n+a/2,i+o/2),r.add(c),c}function $i(r,e,t,n,i,s,a=.002,o){let l=new Et(i,s);if(o){let u=l.attributes.uv;for(let h=0;h<u.count;h++)u.setXY(h,u.getX(h)*i/o,u.getY(h)*s/o)}let c=new De(l,e);return c.rotation.x=-Math.PI/2,c.position.set(t+i/2,a,n+s/2),c.receiveShadow=!0,r.add(c),c}function Zc(r,e,t,n,i,s,a,o=24,l){let c=um(new De(new gn(l===void 0?s:l,s,a,o),e));return c.position.set(t,n+a/2,i),r.add(c),c}function vr(r,e,t,n,i){let s=new Ce;ot(s,e.wood,-.21,.44,-.21,.42,.04,.42,.01),[[-.19,-.19],[.16,-.19],[-.19,.16],[.16,.16]].forEach(([a,o])=>ot(s,e.wood,a,0,o,.03,.44,.03,.005)),ot(s,e.wood,-.21,.48,.17,.42,.42,.03,.01),s.position.set(t,0,n),s.rotation.y=i,r.add(s)}function hm(r,e){ot(r,e.cabinet,.7,0,.05,2.25,.86,.6,.01),ot(r,e.stone,.68,.86,.04,2.29,.04,.63,.008),ot(r,e.steel,1.15,.89,.15,.5,.02,.38,.01),ot(r,e.black,2.05,.9,.12,.6,.01,.48,.005),[[2.2,.24],[2.5,.24],[2.2,.48],[2.5,.48]].forEach(([i,s])=>Zc(r,e.steel,i,.905,s,.07,.006,24)),ot(r,e.steel,.05,0,.05,.62,1.4,.64,.02),ot(r,e.woodLight,.9,.72,1.75,1.3,.04,.8,.01),[[.95,1.8],[2.13,1.8],[.95,2.48],[2.13,2.48]].forEach(([i,s])=>ot(r,e.woodLight,i,0,s,.05,.72,.05,.01)),vr(r,e,1.25,1.45,0),vr(r,e,1.85,1.45,0),vr(r,e,1.25,2.9,Math.PI),vr(r,e,1.85,2.9,Math.PI),Zc(r,e.white,1.55,.76,2.15,.12,.05,24,.14);let t=ot(r,e.ceramic,3.08,0,.06,1.75,.55,.78,.08);t.userData.keep=!0,ot(r,e.water,3.18,.4,.15,1.55,.02,.6,.06),ot(r,e.cabinet,3.06,0,1.55,.5,.82,.8,.01),ot(r,e.ceramic,3.05,.82,1.6,.48,.1,.7,.04),ot(r,e.mirror,3.03,1,1.65,.02,.42,.6,.005);let n=new Ce;ot(n,e.ceramic,-.18,0,-.17,.36,.4,.34,.12),ot(n,e.ceramic,-.2,.38,-.2,.4,.04,.5,.15),ot(n,e.ceramic,.16,.38,-.2,.14,.42,.4,.04),n.position.set(4.68,0,2.4),n.rotation.y=-Math.PI/2,r.add(n),ot(r,e.towel,4.93,1,1.3,.04,.5,.4,.02),$i(r,e.towel,3.5,2.6,.7,.5,.012),$i(r,e.rugBed,6.4,.6,2.4,2.3,.006),ot(r,e.wood,6.95,0,.95,1.95,.32,1.65,.03),ot(r,e.wood,8.85,0,.92,.08,1.05,1.71,.03),ot(r,e.duvet,6.98,.32,.98,1.85,.2,1.59,.08),ot(r,e.blanket,6.95,.42,.97,.6,.12,1.61,.06),ot(r,e.pillow,8.35,.5,1.08,.42,.14,.66,.07),ot(r,e.pillow,8.35,.5,1.82,.42,.14,.66,.07),ot(r,e.wood,8.45,0,.35,.48,.5,.45,.02),ot(r,e.wood,8.45,0,2.72,.48,.5,.45,.02),ot(r,e.woodLight,5.06,0,.12,.62,1.4,1.9,.02),ot(r,e.cabinet,5.1,0,2.6,.45,.75,.7,.02),$i(r,e.runner,2.2,3.95,4.6,.75,.006),ot(r,e.wood,7.6,0,3.58,1,.8,.32,.02),e.book.forEach((i,s)=>ot(r,i,7.7+s*.07,.8,3.62,.06,.22+s%3*.03,.2,.004)),ot(r,e.woodLight,1.8,0,7.35,.6,.9,.55,.02),Zc(r,e.wood,2.2,0,5.4,.18,.02,24),Zc(r,e.wood,2.2,0,5.4,.02,1.4,12),$i(r,e.rugLiving,.5,7,.9,.6,.006),$i(r,e.rugLiving,4.4,5.8,2.8,1.9,.006),ot(r,e.wood,5.2,0,6.35,1.2,.38,.65,.02),ot(r,e.black,6.45,0,5.1,1.9,.45,.42,.01),ot(r,e.screen,6.85,.45,5.18,1.1,.66,.05,.005),ot(r,e.woodLight,8.5,0,5.05,.45,1.4,1.3,.02);for(let i=0;i<3;i++)e.book.forEach((s,a)=>ot(r,s,8.55,.15+i*.45,5.15+a*.2,.3,.26+a%2*.04,.16,.004));ot(r,e.wood,2.85,.74,5.45,1.4,.04,.85,.01),[[2.9,5.5],[4.18,5.5],[2.9,6.23],[4.18,6.23]].forEach(([i,s])=>ot(r,e.wood,i,0,s,.05,.74,.05,.01)),vr(r,e,3.2,5.2,0),vr(r,e,3.9,5.2,0),vr(r,e,3.2,6.6,Math.PI),vr(r,e,3.9,6.6,Math.PI)}var fm=[{file:"divano.glb",x:5.8,z:7.3,rot:Math.PI,scale:1,stand:[4.75,6.85,2.15,.85]},{file:"poltrona.glb",x:7.6,z:6.7,rot:-Math.PI/2-.4,scale:1,stand:[7.25,6.35,.75,.75]},{file:"pianta.glb",x:8.55,z:7.55,rot:.6,scale:1.1,stand:null}];function dm(r,e,t){let[n,i,s,a]=t,o=new Ce;return ot(o,e.blanket,n,0,i,s,.45,a,.08),ot(o,e.blanket,n,.45,i+a-.2,s,.4,.2,.08),r.add(o),o}function pm(r,e){[["h",3.5,1,2,-1],["h",3.5,3.9,4.8,-1],["h",3.5,6,7,-1],["h",5,1.6,2.4,1],["h",5,5,6,1],["v",2.5,6,7,-1]].forEach(([n,i,s,a,o])=>{let l=a-s-.04,c=new Ce;ot(c,e.door,0,0,-.02,l,ni,.04,.01);let u=new De(new xn(.025,12,8),e.steel);u.position.set(l-.07,1,.04),c.add(u),n==="h"?(c.position.set(s+.02,0,i),c.rotation.y=o*1.45):(c.position.set(i,0,s+.02),c.rotation.y=-Math.PI/2+o*1.45),r.add(c)})}var _y=[["n",1,2.1,"cucina"],["n",3.6,4.4,"bagno"],["n",6.2,7.6,"camera"],["s",4.4,6.6,"soggiorno"],["s",7,8.4,"soggiorno"],["e",6,7.2,"soggiorno"],["w",1.2,2.4,"cucina"],["w",3.9,4.6,"corridoio"]];function mm(r,e,t,n){let i=[];function a(l,c,u,h){let f=new Ce;ot(f,t.frame,-l/2,c,-.02,l,u,.04,.005);let d=new De(new Et(l-.12,u-.12),h);return d.position.set(0,c+u/2,.022),f.add(d),ot(f,t.frame,-.02,c+.06,0,.04,u-.12,.03,.004),f}let o={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};return _y.forEach(([l,c,u,h])=>{let f=t.glass.clone(),[d,m]=o[l],x=u-c,g=(c+u)/2,p=l==="n"||l==="s"?[g,l==="n"?0:n.d]:[l==="w"?0:n.w,g],M=a(x,.9,1.35,f);M.position.set(p[0]+d*(.12/2+.02),0,p[1]+m*(.12/2+.02)),M.rotation.y=Math.atan2(d,m),e.add(M);let y=a(x,.9,ni-.9,f);y.position.set(p[0]-d*(.12/2+.004),0,p[1]-m*(.12/2+.004)),y.rotation.y=Math.atan2(-d,-m),r.add(y),i.push({room:h,glass:f})}),i}function gm(r,e){let s=e.w+.45,a=-.45,o=e.d+.45,l=(o-a)/2,c=(a+o)/2,u=[-.45+l,2.3,c],h=[s-l,2.3,c],f=[-.45,0,a],d=[s,0,a],m=[s,0,o],x=[-.45,0,o],g=[],p=[],M=Math.hypot(l,2.3);function y(C,S,w,R){[C,S,w].forEach(O=>{g.push(...O),R==="z"?p.push(O[0]/2.4,Math.abs(O[2]-c)/l*M/2.4):p.push(O[2]/2.4,Math.min(O[0]- -.45,s-O[0])/l*M/2.4)})}y(f,u,d,"z"),y(d,u,h,"z"),y(m,h,x,"z"),y(x,h,u,"z"),y(d,h,m,"x"),y(x,u,f,"x");let _=new Ht;_.setAttribute("position",new Mt(g,3)),_.setAttribute("uv",new Mt(p,2)),_.computeVertexNormals();let D=new Ce,L=new De(_,r.roof);L.castShadow=!0,L.material.side=un,D.add(L);let P=ot(D,r.fascia,-.45,-.18,a,s- -.45,.18,.08,.01);return P.userData.roof=!0,ot(D,r.fascia,-.45,-.18,o-.08,s- -.45,.18,.08,.01),ot(D,r.fascia,-.45,-.18,a,.08,.18,o-a,.01),ot(D,r.fascia,s-.08,-.18,a,.08,.18,o-a,.01),ot(D,r.fascia,1.9,.6,1.4,.5,1.4,.5,.02),D.traverse(C=>{C.userData.roof=!0}),D}var xm=1448998,vm=527122,yy=2,My=1.1;function Ey(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var bm=r=>r*Math.PI/180,Kc=r=>r*r*(3-2*r);function Eo(r,e){if(!Ey())return null;let t=!!e.night,n=t?vm:xm,i=Wc(r,e.lite),s;try{s=new js({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}s.setPixelRatio(Xc(i)),s.setClearColor(n),s.toneMapping=fr,s.toneMappingExposure=t?1.3:.95,s.shadowMap.enabled=!0,s.shadowMap.type=zs,s.domElement.className="house3d",s.domElement.setAttribute("role","img"),r.appendChild(s.domElement);let a=document.createElement("div");a.className="hlabels",r.appendChild(a);let o=!0,l=0,c=!1,u=new Set,h=()=>{o=!0,Ze()},f=!0,d=()=>{f=!0},m=new vi;m.background=new Be(n),m.fog=new La(n,26,60);let x=cm(h),g=new Br(13490410,7035464,t?.06:.9);m.add(g);let p=new gr(s),M=!1,y=t?1:0,_,D=new Promise(Z=>{_=Z,setTimeout(Z,4e3)});new Js().load(ta+"ambiente.exr",Z=>{c||(m.environment=p.fromEquirectangular(Z).texture,M=!0,ce(),Z.dispose(),p.dispose(),_(),h())},void 0,()=>_());let L=new ji(t?9415142:16752486,t?.22:1);L.position.set(-9,6,12),L.target.position.set(4.5,0,4),L.castShadow=!0,L.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(L.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40}),L.shadow.bias=-4e-4,L.shadow.normalBias=.02,L.shadow.radius=5,L.shadow.autoUpdate=!1,m.add(L,L.target);let P=new Qt(38,1,.1,120),C=Gt.size.w/2,S=Gt.size.d/2,w={tx:C,tz:S+.3,yaw:0,pitch:58,dist:17.5,ty:.6},R={...w},O=new Ce;m.add(O),$i(O,x.grass,-30,-30,69,68,-.02),$i(O,x.paving,-1,-1,Gt.size.w+2,Gt.size.d+2,-.01,1);let G={},W=[];Gt.rooms.forEach(Z=>{let Se=Z.id==="bagno"?x.tiles:Z.id==="cucina"?x.kitchenFloor:x.parquet,Ne=Z.id==="bagno"?1.8:Z.id==="cucina"?2.4:1.1,Ke=$i(O,Se,Z.x,Z.z,Z.w,Z.d,.001,Ne);Ke.userData={room:Z.id},W.push(Ke),G[Z.id]={def:Z,floor:Ke,light:null,bulb:null,glow:null,level:0,target:0,wins:[]}});let J=.12;function Y(Z,Se,Ne,Ke){let lt=new De(new Tt(Ne,ni,Ke),x.wall);lt.position.set(Z,ni/2,Se),lt.castShadow=!0,lt.receiveShadow=!0,O.add(lt);let dt=new De(new Tt(Ne+.002,.01,Ke+.002),x.wallCut);dt.position.set(Z,ni+.005,Se),O.add(dt)}Gt.wallsH.forEach(([Z,Se,Ne])=>Y((Se+Ne)/2,Z,Ne-Se+J,J)),Gt.wallsV.forEach(([Z,Se,Ne])=>Y(Z,(Se+Ne)/2,J,Ne-Se+J));let he=new Ce,j=Gt.size.w,Q=Gt.size.d,ge=J/2+.006;[[j/2,-ge,j+J+.02,.012],[j/2,Q+ge,j+J+.02,.012],[-ge,Q/2,.012,Q+J],[j+ge,Q/2,.012,Q+J]].forEach(([Z,Se,Ne,Ke])=>{let lt=new De(new Tt(Ne,bo,Ke),x.outside);lt.position.set(Z,bo/2,Se),lt.receiveShadow=!0,lt.castShadow=!0,he.add(lt)}),ot(he,x.wood,.9,0,Q+ge,1,2.2,.05,.01),O.add(he),hm(O,x),pm(O,x);let Ee=mm(O,he,x,Gt.size).map(Z=>({glass:Z.glass,room:G[Z.room]||null})),Ge=new Be(16757596);function Ye(){Ee.forEach(Z=>Z.glass.emissive.copy(Ge).multiplyScalar(Math.max(Z.room?.9*Z.room.level:0,e.roomWindows?0:.8*y)))}let te=new an(16757596,0,7,1.6);te.position.set(1.4,2.5,Q+.7),O.add(te);let de=new Nc;de.setMeshoptDecoder(tm),fm.forEach(Z=>{let Se=Z.stand?dm(O,x,Z.stand):null;Se&&(Se.userData.placeholder=!0),de.load(ta+Z.file,Ne=>{if(c)return;let Ke=Ne.scene;Ke.traverse(dt=>{dt.isLight&&(dt.visible=!1),dt.isMesh&&(dt.castShadow=!0,dt.receiveShadow=!0)}),Ke.scale.setScalar(Z.scale),Ke.rotation.y=Z.rot,Ke.position.set(Z.x,0,Z.z);let lt=()=>{c||(O.add(Ke),Se&&O.remove(Se),d(),h())};He.prepare(Ke).then(lt,lt)},void 0,()=>{})}),Gt.rooms.filter(Z=>Z.lamp).forEach(Z=>{let Se=new Ce;Se.position.set(Z.lamp[0],yy,Z.lamp[1]);let Ne=new De(new gn(.005,.005,.5,6),x.cord);Ne.position.y=.36;let Ke=new De(new gn(.03,.05,.06,16),x.steel);Ke.position.y=.12;let lt=new _e({color:15921128,roughness:.35,emissive:16761466,emissiveIntensity:0}),dt=new De(new xn(.11,24,16),lt);dt.castShadow=!1;let Pt=new an(16763272,0,10,2);Pt.position.y=-.14,Pt.castShadow=!i,Pt.shadow.mapSize.set(512,512),Pt.shadow.bias=-.002,Pt.shadow.radius=4,Pt.shadow.autoUpdate=!1,Se.add(Ne,Ke,dt,Pt),O.add(Se),Object.assign(G[Z.id],{light:Pt,bulb:lt,shade:null,stale:!0})});let fe={},xe={n:[0,0,-1],s:[0,0,1],e:[1,0,0],w:[-1,0,0]},Ae={n:Math.PI,s:0,e:Math.PI/2,w:-Math.PI/2},Qe=new _t({visible:!1});function Le(Z,Se,Ne,Ke,lt,dt=1){let Pt=new Ce,ii=ot(Pt,Ke,-.09*dt,-.12*dt,-.015,.18*dt,.24*dt,.03,.012),qn=ot(Pt,x.rocker,-.055*dt,-.07*dt,0,.11*dt,.14*dt,.025,.01),cs=xe[Ne];Pt.position.set(Z+cs[0]*(J/2+.015),My,Se+cs[2]*(J/2+.015)),Pt.rotation.y=Ae[Ne];let Bn=new De(new xn(.45,12,8),Qe);return[Pt,ii,qn,Bn].forEach(gi=>gi.userData=lt),Pt.add(Bn),W.push(ii,qn,Bn),O.add(Pt),{group:Pt,rocker:qn}}e.bare||If().forEach(Z=>{fe[Z.circuit+"."+Z.id]=Le(Z.x,Z.z,Z.face,x.plate,{circuit:Z.circuit,ctl:Z.id})});let rt=Gt.breaker,$e=new Ce,Oe=ot($e,x.panel,-.22,-.2,-.02,.44,.4,.08,.02),A=ot($e,x.panelDoor,-.18,-.15,.06,.36,.3,.012,.01);$e.position.set(rt.x+xe[rt.face][0]*(J/2+.02),1.15,rt.z+xe[rt.face][2]*(J/2+.02)),$e.rotation.y=Ae[rt.face];let qe=new De(new xn(.55,12,8),Qe);$e.add(qe),[$e,Oe,A,qe].forEach(Z=>Z.userData={breaker:!0}),e.bare||(W.push(Oe,A,qe),O.add($e));let Fe=gm(x,Gt.size);Fe.position.y=ni,m.add(Fe);let ke=!0,Te=1;function V(){d();let Z=ni+(bo-ni)*Math.min(1,Te*1.4);he.scale.y=Z/bo,Fe.position.y=Z+(1-Te)*3.2,Fe.visible=Te>.01,x.roof.opacity=x.fascia.opacity=Math.min(1,Te*1.6),x.roof.depthWrite=x.fascia.depthWrite=Te>.99,a.style.opacity=String(Math.max(0,1-Te*2))}let ae=[];function E(Z,Se,Ne,Ke,lt){let dt=document.createElement("div");return dt.className="hlabel "+(lt||""),dt.textContent=Z,a.appendChild(dt),ae.push({el:dt,v:new F(Se,Ne,Ke)}),dt}Gt.rooms.forEach(Z=>E(Z.name,Z.x+Z.w/2,.15,Z.z+Z.d/2+(Z.id==="corridoio"?.45:.9),"room")),e.bare||(If().forEach(Z=>E(Z.label,Z.x+xe[Z.face][0]*.4,ni+.25,Z.z+xe[Z.face][2]*.4,"ctl")),E(rt.label,rt.x+.55,ni+.25,rt.z,"ctl")),$r(O,[he]);let T=e.extend?e.extend({world:O,M:x,pick:W,rooms:G,addLabel:E,animate:(Z,Se)=>it(Z,Ne=>(d(),Se(Ne))),redraw:h,moved:()=>{d(),h()},loop:Z=>{u.add(Z),Ze()},lite:i,FACE:xe,FACE_ROT:Ae,T:J,WALL_H:ni,camera:P,scene:m,sun:L,roof:Fe}):null,H=e.wires?am({add:Z=>O.add(Z),loop:Z=>{u.add(Z),Ze()},redraw:h,reduced:!!e.reduced}):null,ee={sun:new Be(16752486),sunI:1,env:.16,hemi:.12,exp:.95,bg:new Be(e.dayBg===void 0?xm:e.dayBg)},oe={sun:new Be(9415142),sunI:.34,env:.05,hemi:.045,exp:1.3,bg:new Be(vm)};function ce(){let Z=y,Se=(Ne,Ke)=>Ne+(Ke-Ne)*Z;L.color.copy(ee.sun).lerp(oe.sun,Z),L.intensity=Se(ee.sunI,oe.sunI),s.toneMappingExposure=Se(ee.exp,oe.exp),m.background.copy(ee.bg).lerp(oe.bg,Z),m.fog.color.copy(m.background),s.setClearColor(m.background),M&&(m.environmentIntensity=Se(ee.env,oe.env),g.intensity=Se(ee.hemi,oe.hemi)),te.intensity=e.porch===!1?0:5*Z,Ye(),h()}let He=qc(s,m,P,{lite:i});function Pe(){let Z=bm(R.pitch),Se=bm(R.yaw),Ne=R.dist;P.position.set(R.tx+Math.sin(Se)*Math.cos(Z)*Ne,R.ty-.6+Math.sin(Z)*Ne,R.tz+Math.cos(Se)*Math.cos(Z)*Ne),P.lookAt(R.tx,R.ty,R.tz)}function re(){let Z=Math.max(1,r.clientWidth),Se=Math.max(1,r.clientHeight);s.setSize(Z,Se,!1),s.domElement.style.width="100%",s.domElement.style.height="100%",He.setSize(Z,Se),P.aspect=Z/Se,P.fov=Z/Se<.9?52:38,P.updateProjectionMatrix(),h()}let me=typeof ResizeObserver<"u"?new ResizeObserver(re):null;me&&me.observe(r);let le=new F;function pe(){Pe(),L.shadow.needsUpdate=f,Object.values(G).forEach(Ne=>{if(!Ne.light)return;f&&(Ne.stale=!0);let Ke=Ne.stale&&Ne.level>.01;Ne.light.shadow.needsUpdate=Ke,Ke&&(Ne.stale=!1)}),f=!1,He.render();let Z=r.clientWidth,Se=r.clientHeight;ae.forEach(Ne=>{le.copy(Ne.v).project(P),Ne.el.style.display=le.z<1?"":"none",Ne.el.style.transform=`translate(-50%,-50%) translate(${(le.x+1)/2*Z}px,${(1-le.y)/2*Se}px)`})}let Ie=!1,ze,Re=new Promise(Z=>{ze=Z});D.then(()=>c?null:He.warm()).then(()=>{Ie=!0,ze(),h()});function at(Z){l=0,!c&&Ie&&(He.watch(Z,u.size>0||!!ft),u.size&&(o=!0),u.forEach(Se=>{Se(Z)||u.delete(Se)}),o&&(o=!1,pe()),u.size&&Ze())}function Ze(){!l&&!c&&(l=requestAnimationFrame(at))}function it(Z,Se){let Ne=performance.now(),Ke=lt=>{let dt=Math.min(1,(lt-Ne)/Z);return Se(dt),dt<1};return u.add(Ke),Ze(),Ke}let X=e.reduced||e.noIntro,ie=null,ne=!X,ve={};function We(Z,Se=650){if(ne){ve=Z;return}let Ne={...w,...Z};if(P.aspect<.9&&Ne.dist===w.dist&&(Ne.dist*=1.22),ie&&u.delete(ie),e.reduced){Object.assign(R,Ne),h();return}let Ke={...R};ie=it(Se,lt=>{let dt=Kc(lt);Object.keys(Ne).forEach(Pt=>R[Pt]=Ke[Pt]+(Ne[Pt]-Ke[Pt])*dt)})}let Xe=null;function ht(Z,Se=1400){ke=!!Z,e.onRoof&&e.onRoof(ke),Xe&&u.delete(Xe);let Ne=Te,Ke=ke?1:0;if(e.reduced){Te=Ke,V(),h();return}Xe=it(Se,lt=>{Te=Ne+(Ke-Ne)*Kc(lt),V()})}X?(Te=e.startRoof?1:0,ke=!!e.startRoof,V(),e.start&&Object.assign(R,e.start)):(Object.assign(R,{tx:C,tz:S,yaw:-28,pitch:30,dist:27}),V(),setTimeout(()=>{c||(ne=!1,We(ve,2600),setTimeout(()=>{c||(ht(!1,1600),e.onRoof&&e.onRoof(!1))},700))},450));let Ft=new Zi,nn=new Ve,ft=null,Kt=s.domElement;Kt.style.touchAction="pan-y",Kt.addEventListener("pointerdown",Z=>{ft={x:Z.clientX,y:Z.clientY,yaw:R.yaw,pitch:R.pitch,moved:!1};try{Kt.setPointerCapture(Z.pointerId)}catch{}}),Kt.addEventListener("pointermove",Z=>{if(!ft)return;let Se=Z.clientX-ft.x,Ne=Z.clientY-ft.y;if(Math.abs(Se)+Math.abs(Ne)>6&&(ft.moved=!0),ft.moved){ie&&(u.delete(ie),ie=null);let Ke=e.limits||{},lt=Ke.yaw||[-35,35],dt=Ke.pitch||[38,75];R.yaw=Math.max(lt[0],Math.min(lt[1],ft.yaw-Se*.25)),R.pitch=Math.max(dt[0],Math.min(dt[1],ft.pitch+Ne*.2)),h()}}),Kt.addEventListener("pointerup",Z=>{let Se=ft;if(ft=null,!Se||Se.moved)return;if(ke){ht(!1),e.onRoof&&e.onRoof(!1);return}let Ne=Kt.getBoundingClientRect();nn.set((Z.clientX-Ne.left)/Ne.width*2-1,-((Z.clientY-Ne.top)/Ne.height)*2+1),Ft.setFromCamera(nn,P);let Ke=Ft.intersectObjects(W,!1)[0];if(!Ke)return;let lt=Ke.object.userData||{};lt.ext?e.onPick&&e.onPick(lt):lt.breaker?e.onBreaker():lt.ctl?e.onControl(lt.circuit,lt.ctl):lt.room&&e.onRoom(lt.room)}),Kt.addEventListener("wheel",Z=>{Z.ctrlKey&&(Z.preventDefault(),R.dist=Math.max(9,Math.min(24,R.dist+Z.deltaY*.01)),h())},{passive:!1}),Kt.addEventListener("pointercancel",()=>{ft=null});let zn=11;function yr(Z,Se){Z.level=Se,Z.light&&(Z.light.intensity=zn*Se,Z.bulb.emissiveIntensity=6*Se),Ye()}function ls(Z,Se){let Ne=Se?1:0;if(Z.target===Ne)return;if(Z.target=Ne,e.reduced){yr(Z,Ne);return}let Ke=Z.level;Z.anim&&u.delete(Z.anim),Z.anim=it(Se?420:260,lt=>{let dt=Se&&lt<.5?Math.sin(lt*60)>.2?1:.35:1;yr(Z,(Ke+(Ne-Ke)*Kc(lt))*dt)})}return V(),re(),{update(Z){T&&T.update&&T.update(Z);let Se=[];Object.keys(G).forEach(Ne=>{let Ke=G[Ne],lt=Z.rooms[Ne]||{},dt=!!lt.lit;ls(Ke,dt),dt&&Ke.def.name&&Se.push(Ke.def.name);let Pt=Gt.controls[Ke.def.circuit]||{};Object.keys(Pt).forEach(ii=>{let qn=fe[Ke.def.circuit+"."+ii];qn&&(qn.rocker.rotation.x=(lt.controls&&lt.controls[ii]?-1:1)*.25)})}),s.domElement.setAttribute("aria-label","Casa vista dall\u2019alto. Stanze con la luce accesa: "+(Se.length?Se.join(", "):"nessuna")),h()},focusRoom(Z){let Se=G[Z]&&G[Z].def;if(Se){if(ke&&!ne&&ht(!1),P.aspect<.9){We({tx:(C+Se.x+Se.w/2)/2,tz:(S+Se.z+Se.d/2)/2+.3,dist:19,pitch:62});return}We({tx:Se.x+Se.w/2,tz:Se.z+Se.d/2+.3,dist:12.5,yaw:0,pitch:60})}},overview(){We({})},project(Z,Se,Ne){let Ke=new F(Z,Se,Ne).project(P);return{x:(Ke.x+1)/2*r.clientWidth,y:(1-Ke.y)/2*r.clientHeight,visible:Ke.z<1&&Ke.x>-1.05&&Ke.x<1.05&&Ke.y>-1.05&&Ke.y<1.05}},wires:()=>H,setNight(Z,Se=2e3){let Ne=y,Ke=Z?1:0;if(e.reduced||Se<=1){y=Ke,ce();return}it(Se,lt=>{y=Ne+(Ke-Ne)*Kc(lt),ce()})},nightLevel(Z){y=Math.max(0,Math.min(1,Z)),ce()},look(Z,Se){We(Z,Se)},screenOf(Z){let Se=W.find(Ke=>Ke.userData&&Ke.userData.id===Z);if(!Se)return null;Se.updateWorldMatrix(!0,!1);let Ne=new F().setFromMatrixPosition(Se.matrixWorld).project(P);return{x:(Ne.x+1)/2*r.clientWidth,y:(1-Ne.y)/2*r.clientHeight,visible:Ne.z<1}},setRoof(Z,Se,Ne){ht(Z,Ne),Z&&!Se&&We({yaw:-18,pitch:42,dist:23},1400)},roof(){return ke},whenReady(){return Re},resize:re,dispose(){c=!0,T&&T.dispose&&T.dispose(),l&&cancelAnimationFrame(l),me&&me.disconnect(),m.traverse(Z=>{Z.geometry&&Z.geometry.dispose(),Z.material&&(Array.isArray(Z.material)?Z.material:[Z.material]).forEach(Se=>{Object.values(Se).forEach(Ne=>Ne&&Ne.isTexture&&Ne.dispose()),Se.dispose()})}),m.environment&&m.environment.dispose(),He.dispose(),s.dispose(),s.forceContextLoss&&s.forceContextLoss(),s.domElement.remove(),a.remove()}}}typeof window<"u"&&(window.FaseNeutroScene={createScene:Eo});function na(r,e,t){let n=document.createElement("canvas");return n.width=r,n.height=e,t(n.getContext("2d",{willReadFrequently:!0}),r,e),n}function Jc(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function So(r,e=1,t=1,n=!0){let i=new zt(r);return i.wrapS=i.wrapT=jt,i.repeat.set(e,t),i.anisotropy=4,n&&(i.colorSpace=wt),i}function Qc(r,e,t,n,i,s,a){for(let o=0;o<n;o++){let l=Math.floor(s()*255);r.fillStyle=`rgba(${l},${l},${l},${a})`,r.fillRect(s()*e,s()*t,1+s()*i,1+s()*i)}}var Sy=()=>na(512,512,(r,e,t)=>{let n=Jc(31);r.fillStyle="#8a8a86",r.fillRect(0,0,e,t);for(let i=0;i<40;i++)r.fillStyle=`rgba(${90+n()*60},${90+n()*60},${86+n()*60},0.10)`,r.beginPath(),r.ellipse(n()*e,n()*t,30+n()*90,20+n()*60,n()*3,0,7),r.fill();Qc(r,e,t,9e3,3,n,.18),r.strokeStyle="rgba(40,40,40,0.55)",r.lineWidth=3,r.beginPath(),r.moveTo(0,2),r.lineTo(e,2),r.moveTo(2,0),r.lineTo(2,t),r.stroke()}),wy=()=>na(256,256,(r,e,t)=>{let n=Jc(32);r.fillStyle="#808080",r.fillRect(0,0,e,t),Qc(r,e,t,6e3,3,n,.35)}),Ty=()=>na(256,256,(r,e,t)=>{let n=Jc(41);r.fillStyle="#1d1f22",r.fillRect(0,0,e,t);for(let i=0;i<8;i++)r.fillStyle="#2b2e32",r.fillRect(i*32+3,0,5,t),r.fillStyle="#121315",r.fillRect(i*32+9,0,3,t);Qc(r,e,t,2500,2,n,.12)}),Ay=()=>na(256,256,(r,e,t)=>{let n=Jc(51);r.fillStyle="#b98b57",r.fillRect(0,0,e,t);for(let i=0;i<t;i+=3)r.fillStyle=`rgba(80,50,20,${.04+i%6*.01})`,r.fillRect(0,i,e,1);Qc(r,e,t,2500,2,n,.12),r.fillStyle="rgba(214,190,150,0.9)",r.fillRect(0,t/2-12,e,24)}),Ry=()=>na(256,64,(r,e,t)=>{r.fillStyle="#d9b01e",r.fillRect(0,0,e,t),r.fillStyle="#17181a";for(let n=-t;n<e+t;n+=48)r.beginPath(),r.moveTo(n,t),r.lineTo(n+24,t),r.lineTo(n+24+t,0),r.lineTo(n+t,0),r.fill()});function Ri(){let r={};r.concrete=new _e({map:So(Sy(),1,1),bumpMap:So(wy(),6,6,!1),bumpScale:.6,roughness:.88}),r.wall=new _e({color:13355199,roughness:.95}),r.wallBase=new _e({color:5068640,roughness:.85});let e=So(Ty(),6,1);return r.rubber=new _e({map:e,roughness:.92}),r.beltTex=e,r.cardboard=new _e({map:So(Ay(),1,1),roughness:.85}),r.hazard=new _e({map:So(Ry(),1,1),roughness:.6}),r.steel=new _e({color:12830667,roughness:.3,metalness:1}),r.steelDark=new _e({color:7172984,roughness:.4,metalness:.9}),r.frame=new _e({color:4086390,roughness:.5,metalness:.3}),r.yellow=new _e({color:14923295,roughness:.45}),r.red=new _e({color:12854813,roughness:.3}),r.green=new _e({color:2068293,roughness:.3}),r.motor=new _e({color:2912896,roughness:.42,metalness:.35,emissive:16734751,emissiveIntensity:0}),r.cabinet=new _e({color:13883096,roughness:.5,metalness:.2}),r.cabinetIn=new _e({color:15329506,roughness:.7}),r.din=new _e({color:11449272,roughness:.35,metalness:1}),r.modWhite=new _e({color:15329766,roughness:.35}),r.modGrey=new _e({color:9344155,roughness:.4}),r.modDark=new _e({color:2303530,roughness:.35}),r.modBlue=new _e({color:2973594,roughness:.4}),r.lever=new _e({color:1382170,roughness:.3}),r.glassDoor=new _e({color:3819090,roughness:.08,transparent:!0,opacity:.35}),r.stripe=new _e({color:16742938,roughness:.4}),r.windowGlow=new _e({color:12375022,emissive:10274032,emissiveIntensity:.9,roughness:.2}),r}function qt(r,e=.012,t="sphere"){let n=new _e({color:new Be(r).multiplyScalar(.25),emissive:r,emissiveIntensity:0,roughness:.3}),i=t==="box"?new es(e*2,e,e,1,e*.3):new xn(e,14,10);return{mesh:new De(i,n),mat:n,set(a,o=3){n.emissiveIntensity=a?o:0}}}function se(r,e,t,n,i,s,a,o,l=.01){let c=new De(new es(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e);return c.position.set(t,n,i),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}function gt(r,e,t,n,i,s,a,o="y",l=28,c){let u=new De(new gn(c===void 0?s:c,s,a,l),e);return u.position.set(t,n,i),o==="x"&&(u.rotation.z=Math.PI/2),o==="z"&&(u.rotation.x=Math.PI/2),u.castShadow=!0,u.receiveShadow=!0,r.add(u),u}function tn(r,e,t,n,i,s,a,o={}){let c=Math.max(24,Math.round(256*a/s)),u=na(256,c,(d,m,x)=>{d.clearRect(0,0,m,x),d.fillStyle=o.bg||"rgba(255,255,255,0)",d.fillRect(0,0,m,x),d.fillStyle=o.fg||"#2a2d31",d.font=`600 ${Math.round(x*(o.size||.62))}px system-ui, sans-serif`,d.textAlign="center",d.textBaseline="middle",d.fillText(e,m/2,x/2+1,m-8)}),h=new zt(u);h.colorSpace=wt;let f=new De(new Et(s,a),new _t({map:h,transparent:!0,color:o.dim||14540253}));return f.position.set(t,n,i),r.add(f),f}function Lf(r,e,t){let n=new Ce,i=t.w||.036,s=t.h||.09,a=.05,o=se(n,t.kind==="mp"?e.modDark:e.modWhite,0,0,0,i,s,a,.004),l=se(n,(t.kind==="mp",e.modGrey),0,0,a/2+.002,i*.86,s*.9,.008,.003),c=new Ce;c.position.set(0,s*.04,a/2+.01);let u=se(c,e.lever,0,0,.012,i*.52,s*.3,.02,.004);u.userData={id:t.id,kind:"toggle",...t.data||{}},n.add(c);let h=qt(16747034,.007,"box");h.mesh.position.set(0,s*.36,a/2+.012),n.add(h.mesh);let f=qt(3789930,.006);f.mesh.position.set(i*.22,-s*.34,a/2+.012),n.add(f.mesh);let d=null;t.kind==="rcd"&&(d=gt(n,e.modBlue,-i*.18,-s*.3,a/2+.012,.006,.01,"z",14),d.userData={id:t.id+".test",kind:"test",part:t.id}),n.position.set(t.x,t.y,0),r.add(n);let m=[u,l,o].concat(d?[d]:[]);return m.forEach(x=>{x!==u&&x!==d&&(x.userData={id:t.id,kind:"toggle",...t.data||{}})}),{group:n,picks:m,set(x){c.rotation.x=x.tripped?0:x.on?-.5:.5,c.position.y=x.tripped?0:x.on?s*.1:-s*.1,h.set(!!x.tripped,2.5),f.set(!!x.live,3.2)}}}function _m(r,e=1){let t=new Ce,n=[{id:"D",kind:"rcd",w:.072,label:"Diff."},{id:"M1",kind:"mcb",w:.036,label:"Luce"},{id:"M2",kind:"mcb",w:.036,label:"Prese"},{id:"M3",kind:"mcb",w:.036,label:"Cucina"}],i=.006,s=n.reduce((f,d)=>f+d.w,0)+i*(n.length-1)+.09,a=.27;se(t,r.cabinet,0,0,-.012,s+.04,a+.04,.045,.008),se(t,r.cabinetIn,0,0,.011,s,a,.005,.004),se(t,r.din,0,0,.016,s-.02,.018,.006,.002);let o=[],l={},c=-s/2+.045;n.forEach(f=>{let d=Lf(t,r,{id:f.id,kind:f.kind,w:f.w,x:c+f.w/2,y:0});d.group.position.z=.04,l[f.id]=d,d.picks.forEach(m=>o.push(m)),tn(t,f.label,c+f.w/2,-.085,.066,f.w+.004,.022,{size:.4}),c+=f.w+i});let u=new Ce;u.position.set(-s/2-.02,0,.115);let h=se(u,r.glassDoor,s/2+.02,0,0,s+.04,a+.04,.006,.004);return h.renderOrder=2,h.castShadow=!1,t.add(u),t.scale.setScalar(e),{group:t,picks:o,width:s*e,door(f){u.rotation.y=-1.95*f},set(f){l.D.set({on:f.rcd.on,tripped:f.rcd.tripped,live:f.rcd.on}),l.M1.set({on:f.lines.luce.on,tripped:f.lines.luce.tripped,live:f.lines.luce.on&&f.rcd.on}),l.M2.set({on:f.lines.prese.on,tripped:f.lines.prese.tripped,live:f.lines.prese.on&&f.rcd.on}),l.M3.set({on:f.lines.cucina.on,tripped:f.lines.cucina.tripped,live:f.lines.cucina.on&&f.rcd.on})}}}function ia(r,e){let t=new Ce,n=e.x1-e.x0,i=e.w||.7,s=e.h||.8,a=(e.x0+e.x1)/2;[-1,1].forEach(c=>{se(t,r.frame,a,s-.1,c*(i/2+.03),n+.1,.12,.05,.01),se(t,r.steelDark,a,s-.02,c*(i/2+.03),n+.1,.03,.07,.005);let u=Math.max(2,Math.round(n/1.5)+1);for(let h=0;h<u;h++)se(t,r.frame,e.x0+n*h/(u-1),(s-.16)/2,c*(i/2+.03),.06,s-.16,.05,.008)});for(let c=0;c<3;c++)se(t,r.frame,e.x0+.1+(n-.2)*c/2,.3,0,.04,.04,i+.06,.005);gt(t,r.steel,e.x0,s-.07,0,.07,i+.02,"z"),gt(t,r.steel,e.x1,s-.07,0,.07,i+.02,"z");let o=new De(new Tt(n,.025,i-.02),r.rubber);o.position.set(a,s-.0125+0,0),o.receiveShadow=!0,o.castShadow=!0,t.add(o),r.beltTex.repeat.set(n*1.4,1);let l=0;return{group:t,belt:o,run(c,u){l=(l+c*u*1.4/1)%1,r.beltTex.offset.x=-l}}}function ym(r,e=.48,t=.34,n=.38){let i=new Ce;return se(i,r.cardboard,0,t/2,0,e,t,n,.01),i}function $c(r){let e=new Ce,t=gt(e,r.motor,0,0,0,.16,.42,"z",36);for(let s=0;s<9;s++)se(e,r.motor,0,0,-.17+s*.043,.36,.014,.012,.003);gt(e,r.steelDark,0,0,.26,.05,.1,"z"),se(e,r.modDark,0,.19,-.02,.16,.07,.14,.01),se(e,r.steelDark,0,-.17,0,.32,.03,.36,.005);let n=new Ce,i=gt(n,r.steelDark,0,0,0,.14,.04,"z",32);for(let s=0;s<8;s++){let a=se(n,r.steel,0,.09,0,.025,.07,.018,.003);a.rotation.z=s/8*Math.PI*2,a.position.set(Math.sin(a.rotation.z)*-.09,Math.cos(a.rotation.z)*.09,0)}return n.position.z=-.24,e.add(n),{group:e,set(s){r.motor.emissiveIntensity=1.4*s.heat},spin(s,a){n.rotation.z+=s*Math.PI*2*a},hum(s){e.position.y+=Math.sin(s/25)*6e-4},body:t,cap:i}}function ra(r,e=1.5){let t=new Ce;gt(t,r.steelDark,0,.02,0,.09,.04,"y"),gt(t,r.steel,0,e/2,0,.018,e,"y",14);let n=[["green",3073642],["yellow",16762394],["red",16726570]].map(([s,a],o)=>{let l=new _e({color:new Be(a).multiplyScalar(.3),emissive:a,emissiveIntensity:0,roughness:.25,transparent:!0,opacity:.95}),c=gt(t,l,0,e+.07*o,0,.055,.07,"y",24);return{name:s,mat:l,mesh:c}});gt(t,r.modDark,0,e+.07*3+.01,0,.056,.02,"y",24);let i={};return n.forEach(s=>{let a=new an(s.mat.emissive.getHex(),0,3.2,2);a.position.y=s.mesh.position.y,t.add(a),i[s.name]=a}),{group:t,set(s){n.forEach(a=>{let o=!!s[a.name];a.mat.emissiveIntensity=o?3.4:0,i[a.name].intensity=o?1.4:0})}}}function sa(r){let e=new Ce;gt(e,r.steelDark,0,.02,0,.16,.04,"y"),gt(e,r.steel,0,.55,0,.03,1.1,"y",14),se(e,r.yellow,0,1.28,0,.3,.46,.12,.012);let t=(l,c,u,h,f,d,m)=>{let x=new Ce;x.position.set(u,h,.07);let g=gt(x,r.modDark,0,0,0,f+.012,.014,"z",28),p=gt(x,c,0,0,.012,f,.022,"z",28);return g.userData=p.userData={id:l,kind:d?"hold":"toggle",hold:!!d},e.add(x),tn(e,m,u,h-f-.035,.066,.14,.032,{fg:"#17181a"}),{grp:x,cap:p,ring:g}},n=t("SB1",r.green,-.075,1.4,.034,!0,"Marcia"),i=t("SB0",r.red,.075,1.4,.034,!0,"Arresto"),s=new Ce;s.position.set(0,1.2,.07),gt(s,r.yellow,0,0,0,.056,.012,"z",32);let a=gt(s,r.red,0,0,.026,.04,.036,"z",32,.032);a.userData={id:"SBE",kind:"toggle"},e.add(s),tn(e,"Emergenza",0,1.115,.066,.18,.032,{fg:"#17181a"});let o=[n.cap,n.ring,i.cap,i.ring,a];return{group:e,picks:o,set(l){n.cap.position.z=l.start?.004:.012,i.cap.position.z=l.stop?.004:.012,a.position.z=l.emergency?.008:.026}}}function aa(r,e={}){let t=new Ce,n=1,i=1.2;se(t,r.cabinet,0,0,-.04,n+.05,i+.05,.1,.012),se(t,r.cabinetIn,0,0,.012,n,i,.01,.004),[.3,-.22].forEach(g=>se(t,r.din,0,g,.022,n-.1,.022,.008,.002));let s=[],a=1.75,o=new Ce;o.position.set(-.3,.34,.03),o.scale.setScalar(a),se(o,r.modDark,0,0,0,.1,.16,.08,.008);let l=new Ce;l.position.set(0,.02,.05);let c=se(l,r.lever,0,0,.012,.045,.085,.028,.006);c.userData={id:"QM",kind:"toggle"};let u=gt(o,r.yellow,0,.02,.043,.05,.006,"z",24);u.userData={id:"QM",kind:"toggle"},o.add(l),t.add(o),s.push(c,u),tn(t,e.qm||"Salvamotore",-.3,.15,.075,.3,.05,{size:.5});let h=new Ce;h.position.set(0,.34,.03),h.scale.setScalar(a),se(h,r.modGrey,0,0,0,.12,.17,.08,.008);let f=qt(3789930,.012,"box");f.mesh.scale.set(1.6,1,.5),f.mesh.position.set(0,.03,.044),h.add(f.mesh),t.add(h),tn(t,"Contattore",0,.15,.075,.3,.05,{size:.5});let d=new Ce;d.position.set(.3,.34,.03),d.scale.setScalar(a),se(d,r.modBlue,0,0,0,.1,.17,.08,.008);let m=qt(16722458,.012,"box");m.mesh.scale.set(1.4,1,.5),m.mesh.position.set(0,.05,.044),d.add(m.mesh);let x=gt(d,r.modWhite,0,-.045,.045,.02,.014,"z",18);x.userData={id:"FR.reset",kind:"reset",part:"FR"},e.thermal!==!1&&(t.add(d),s.push(x),tn(t,"Termico",.3,.15,.075,.3,.05,{size:.5}));for(let g=0;g<8;g++)se(t,g%2?r.modGrey:r.modWhite,-.35+g*.1,-.35,.03,.05,.09,.05,.004);return{group:t,picks:s,set(g){l.rotation.z=g.qm?0:.7,f.set(!!g.contactor,2.5),m.set(!!(g.thermal&&g.thermal.tripped),3.2)}}}function eu(r,e={}){let t=new Ce,n=e.wide?.5:.36,i=.16;se(t,r.modGrey,0,0,0,n,i,.08,.01),se(t,r.modDark,0,0,.042,n-.02,i-.05,.006,.004),se(t,r.modDark,0,i/2-.012,.03,n-.02,.022,.03,.003),se(t,r.modDark,0,-i/2+.012,.03,n-.02,.022,.03,.003);let s=e.wide?[["RUN",-n/2+.035,3073642],...[0,1,2,3,4,5,6,7].map(u=>["I"+u,-.15+u*.026,3073642]),...[0,1,2,3].map(u=>["Q"+u,.105+u*.03,16757018])]:[["RUN",-n/2+.045,3073642],["I0",-.042,3073642],["I1",-.012,3073642],["I2",.018,3073642],["I3",.048,3073642],["Q0",.104,16757018],["Q1",.134,16757018]];e.wide?tn(t,"PLC   I0 I1 I2 I3 I4 I5 I6 I7   Q0 Q1 Q2 Q3",0,-.024,.047,.47,.022,{fg:"#c9ccd0",size:.6}):tn(t,"PLC     I0  I1  I2  I3     Q0  Q1",0,-.024,.047,.33,.022,{fg:"#c9ccd0",size:.6});let a=new $t(new Tt(.014,.01,.006),new _t({color:16777215}),s.length),o=new Je,l=new Be;s.forEach(([,u],h)=>{o.makeTranslation(u,h===0?-.004:.004,.048),a.setMatrixAt(h,o),a.setColorAt(h,l.setHex(1711135))}),a.castShadow=!1,t.add(a);let c="";return{group:t,leds:a,set(u){let h=d=>d==="RUN"?u.on:u.on&&!!((d[0]==="I"?u.inputs:u.outputs)||{})[d],f=s.map(([d])=>h(d)?1:0).join("");return f===c?!1:(c=f,s.forEach(([d,,m],x)=>a.setColorAt(x,h(d)?l.setHex(m).multiplyScalar(2.2):l.setHex(1711135))),a.instanceColor.needsUpdate=!0,!0)}}}function Mm(r,e=.9,t=.97){let n=new Ce;[0,e].forEach(o=>{gt(n,r.steelDark,0,.02,o,.06,.04,"y",18),gt(n,r.steel,0,t/2,o,.02,t,"y",10)}),se(n,r.modDark,0,t,-.03,.09,.1,.09,.01),se(n,r.yellow,0,t,e+.015,.08,.08,.025,.005);let i=qt(16757018,.012);i.mesh.position.set(0,t+.058,-.03),n.add(i.mesh);let s=new _t({color:16726570,transparent:!0,opacity:.18,depthWrite:!1}),a=new De(new gn(.0035,.0035,e,6),s);return a.rotation.x=Math.PI/2,a.position.set(0,t,e/2),a.castShadow=!1,n.add(a),{group:n,set(o){i.set(!!o.beam,3.2),s.opacity=o.beam?.05:.18}}}var oa={insieme:{tx:4.5,tz:4.3,yaw:0,pitch:58,dist:17.5},quadro:{tx:.15,tz:6.5,ty:1.2,yaw:90,pitch:6,dist:2.3},soggiorno:{tx:4.2,tz:6.6,yaw:0,pitch:55,dist:9},corridoio:{tx:4.5,tz:4.6,yaw:0,pitch:60,dist:10.5},cucina:{tx:1.5,tz:1.5,yaw:0,pitch:58,dist:9},ingresso:{tx:1.4,tz:6.2,yaw:32,pitch:50,dist:7.5},dispersione:{tx:3.2,tz:6,yaw:0,pitch:52,dist:10.5},esterno:{tx:4.5,tz:4.2,ty:.8,yaw:-24,pitch:22,dist:21},lontano:{tx:4.5,tz:4.2,ty:.8,yaw:-34,pitch:18,dist:30}},Ci=1.47,Uf=[.12,1.2,6.5],Em={luce:[Uf,[.12,Ci,6.5],[.12,Ci,4.25],[.12,1.1,4.25],[.12,Ci,4.25],[4.5,Ci,4.25],[4.5,2,4.25]],prese:[Uf,[.12,Ci,6.5],[.12,Ci,5],[6.15,Ci,5],[6.15,.32,5.07],[6.15,.3,5.4]],cucina:[Uf,[.12,Ci,6.5],[.12,Ci,.12],[2.35,Ci,.12],[2.35,.3,.12]]},Cy={luce:["fase","neutro"],prese:["fase","neutro","terra"],cucina:["fase","neutro","terra"]},Nf={};Object.entries(Em).forEach(([r,e])=>{Nf[r]={};let t=r==="luce"?-.12:r==="cucina"?.12:0;Cy[r].forEach((n,i)=>{let s=t+(i-1)*.05;Nf[r][n]=e.map(([a,o,l])=>[a+s,o,l+s])})});var Py={luce:"lamp",prese:"socket",cucina:"oven"},Iy=2.5;function Dy(r,e){let{world:t,pick:n,addLabel:i,redraw:s,moved:a,FACE_ROT:o,loop:l,animate:c}=r,u=Ri(),h=new Zi,f=new Ve,d=new F,m=new Yn(new F(0,1,0),0),x=new Ce;t.add(x);let g=Gt.breaker,p=_m(u,Iy);p.group.position.set(g.x+.06+.03,1.2,g.z),p.group.rotation.y=o.e,x.add(p.group),p.picks.forEach(j=>{j.userData={...j.userData,ext:!0},n.push(j)}),i("Quadro",g.x+.6,1.55,g.z,"ctl");let M=new Ce;M.position.set(.06+.015,1.1,4.25),M.rotation.y=o.e,M.scale.setScalar(1.6),se(M,r.M.plate,0,0,0,.09,.12,.015,.006);let y=se(M,r.M.rocker,0,0,.012,.055,.07,.016,.005),_=se(M,r.M.plate,0,0,.004,.14,.18,.03,.006);_.visible=!1,_.userData=y.userData={id:"S",kind:"toggle",ext:!0},x.add(M),n.push(_,y),i("Interruttore",.5,1.45,4.25,"ctl");let D=new Ce;D.position.set(6.15,0,5.4),se(D,u.modWhite,0,.3,0,.36,.56,.16,.02),se(D,u.steelDark,0,.02,0,.3,.04,.2,.006);let L=new _e({color:5974548,emissive:16734746,emissiveIntensity:0,roughness:.4});for(let j=0;j<3;j++){let Q=new De(new gn(.012,.012,.28,10),L);Q.rotation.z=Math.PI/2,Q.position.set(0,.2+j*.1,.085),D.add(Q)}se(D,u.steelDark,0,.3,.092,.31,.46,.006,.002).material=new _e({color:2829874,roughness:.6,metalness:.8,wireframe:!0});let P=se(D,u.modWhite,0,.3,0,.42,.62,.22,.02);P.visible=!1,P.userData={id:"G",kind:"toggle",ext:!0},x.add(D),n.push(P),se(x,u.modWhite,6.15,.32,5.07,.09,.09,.02,.004);let C=new De(new gn(.008,.008,.26,8),new _e({color:1710618,roughness:.6}));C.rotation.x=Math.PI/2,C.position.set(6.15,.32,5.2),x.add(C),i("Stufetta",6.15,.95,5.4,"ctl");let S=tn(x,"12:00",2.35,.62,.66,.18,.05,{fg:"#47ff8a",dim:2236962});se(x,u.modDark,2.35,.55,.655,.5,.36,.01,.004),S.position.z=.665,i("Forno",2.35,1.1,.7,"ctl");let w=r.M.screen;i("TV",7.4,1.35,5.15,"ctl");let R=new an(7252200,0,3.2,2);R.position.set(7.4,.8,5.45);let O=new an(16738858,0,2.6,2);O.position.set(6.15,.35,5.6),x.add(R,O);let G=rm({add:j=>x.add(j),loop:l,animate:c,redraw:s,reduced:!!e.reduced},Nf),W=jc({add:j=>x.add(j),animate:c,redraw:s},[6.15,.35,5.45],r.lite?20:40),J=i("Dispersione verso terra \xB7 300 mA",6.15,1.25,5.5,"leak");J.classList.add("off");let Y={luce:!1,prese:!1,cucina:!1,loads:{},rcd:!1,plugged:!0},he=new Hr(16773590,0,0,.11,.55,2);return he.target.position.set(4.5,0,4.3),x.add(he,he.target),{update(j){let Q=j&&j.prova;if(!Q)return;p.set(Q),y.rotation.x=(Q.switchOn?-1:1)*.25;let ge=Q.socket&&Q.heaterPlugged;L.emissiveIntensity=ge?3.5:0,Q.heaterPlugged!==Y.plugged&&(Y.plugged=Q.heaterPlugged,!Q.heaterPlugged&&!e.reduced?c(320,Ee=>{C.position.z=5.2+Ee*.16,Ee>=1&&(C.visible=!1,a())}):(C.position.z=5.2,C.visible=Q.heaterPlugged,a())),w.emissive=new Be(Q.socket?2907286:0),w.emissiveIntensity=Q.socket?1.1:0,R.intensity=Q.socket?2.2:0,O.intensity=ge?2.6:0,S.material.color.setHex(Q.oven?16777215:1842204),Y.rcd&&!Q.rcd.on&&G.cut(),Y.rcd=Q.rcd.on,Object.keys(Em).forEach(Ee=>{let Ge=!!(Q.supply&&Q.rcd.on&&Q.lines[Ee].on),Ye=!!Q[Py[Ee]],te=Ee==="prese"&&Q.leak?Q.leak==="isolated"?1:.14:0;G.setLine(Ee,{live:Ge,flow:Ge&&Ye?Y.loads[Ee]?!0:"again":!1,earth:te}),Y.loads[Ee]=Ge&&Ye}),Q.leak==="isolated"?(W.play(1600),J.classList.remove("off")):(W.stop(),J.classList.add("off")),s()},wires:G,door(j){p.door(j),s()},windows(j){["cucina","soggiorno"].forEach(Q=>r.rooms[Q].wins.forEach(ge=>ge.emissive.setHex(16757596).multiplyScalar(j?1.2:0))),s()},torch(j){he.intensity=j?900:0,s()},aim(j,Q){h.setFromCamera(f.set(j,Q),r.camera),h.ray.intersectPlane(m,d)&&(he.target.position.copy(d),he.position.copy(r.camera.position),he.intensity>0&&s())},dispose(){}}}function Sm(r,e){let t=null,n=Eo(r,{night:!0,bare:!0,noIntro:!0,start:oa.insieme,reduced:e.reduced,lite:e.lite,capture:e.capture,onBreaker(){},onControl(){},onRoom(){},onRoof(){},onPick:e.onTap,extend:i=>t=Dy(i,e)});return n?{update(i){n.update(i);let s=i&&i.prova,a=r.querySelector("canvas");if(!s||!a)return;let o=(l,c)=>`Linea ${c} ${s.lines[l].tripped?"scattata":s.lines[l].on?"chiusa":"aperta"}.`;a.setAttribute("aria-label",["Appartamento di notte.",s.rcd.tripped?"Il differenziale \xE8 scattato.":s.rcd.on?"Il differenziale \xE8 armato.":"Il differenziale \xE8 aperto.",o("luce","luce"),o("prese","prese"),o("cucina","cucina"),s.heaterPlugged?"La stufetta \xE8 collegata.":"La stufetta \xE8 scollegata.",s.dark?"La casa \xE8 al buio.":s.lamp?"La luce del corridoio \xE8 accesa.":"La luce del corridoio \xE8 spenta."].join(" "))},torch(i){t&&t.torch(i)},wires:()=>t&&t.wires,door(i){t&&t.door(i)},windows(i){t&&t.windows(i)},setRoof(i,s){n.setRoof(i,!0,s)},view:i=>({...oa[i]||oa.insieme}),aim(i,s){if(!t)return;let a=r.getBoundingClientRect();t.aim((i-a.left)/a.width*2-1,-((s-a.top)/a.height)*2+1)},look(i,s){let a=typeof i=="object"?i:{...oa[i]||oa.insieme};r.clientWidth<r.clientHeight*.9&&i==="quadro"&&(a.dist=1.5),n.look(a,s)},screenOf:n.screenOf,views:Object.keys(oa),resize:n.resize,dispose:n.dispose}:null}function Ly(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var wm=r=>r*Math.PI/180,Uy=r=>r*r*(3-2*r);function la(r,e){if(!Ly())return null;let t=Wc(r,e.lite),n=e.bg===void 0?1448998:e.bg,i;try{i=new js({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}i.setPixelRatio(Xc(t)),i.setClearColor(n),i.toneMapping=fr,i.toneMappingExposure=e.exposure||1,i.shadowMap.enabled=!0,i.shadowMap.type=zs,i.domElement.className="house3d",i.domElement.setAttribute("role","img"),r.appendChild(i.domElement);let s=document.createElement("div");s.className="hlabels",r.appendChild(s);let a=!0,o=0,l=!1,c=new Set,u=new Set,h=()=>{a=!0,Ye()},f=!0,d=!0,m=0,x=()=>{f=!0,h()},g=new vi;g.background=new Be(n);let p=new Qt(38,1,.1,120),M=new Ce;g.add(M);let y=new Br(13490410,7035464,.9);g.add(y);let _=new gr(i),D=.16,L,P=new Promise(V=>{L=V,setTimeout(V,4e3)});new Js().load(ta+"ambiente.exr",V=>{if(l){V.dispose(),_.dispose();return}g.environment=_.fromEquirectangular(V).texture,g.environmentIntensity=D,y.intensity=.12,V.dispose(),_.dispose(),L(),h()},void 0,()=>L());let C=qc(i,g,p,{lite:t,bloom:e.bloom===void 0?.45:e.bloom}),S={ty:.8,...e.view},w={...S},R=e.limits||{yaw:[-35,35],pitch:[12,75],dist:[3,30]};function O(){let V=wm(w.pitch),ae=wm(w.yaw),E=w.dist;p.position.set(w.tx+Math.sin(ae)*Math.cos(V)*E,w.ty+Math.sin(V)*E,w.tz+Math.cos(ae)*Math.cos(V)*E),p.lookAt(w.tx,w.ty,w.tz)}function G(){let V=Math.max(1,r.clientWidth),ae=Math.max(1,r.clientHeight);i.setSize(V,ae,!1),i.domElement.style.width="100%",i.domElement.style.height="100%",C.setSize(V,ae),p.aspect=V/ae,p.fov=V/ae<.9?52:38,p.updateProjectionMatrix(),h()}let W=typeof ResizeObserver<"u"?new ResizeObserver(G):null;W&&W.observe(r);let J=[],Y=new F;function he(V,ae,E,T,H){let ee=document.createElement("div");ee.className="hlabel "+(H||""),ee.textContent=V,s.appendChild(ee);let oe={el:ee,v:new F(ae,E,T)};return J.push(oe),oe}function j(){m++,f&&(d=!0);let V=d&&(!u.size||m%3===0);M.traverse(ae=>{!ae.isLight||!ae.castShadow||(ae.shadow.autoUpdate=!1,ae.shadow.needsUpdate=ae.isPointLight?V:f)}),V&&(d=!1),f=!1}function Q(){O(),j(),C.render();let V=r.clientWidth,ae=r.clientHeight;J.forEach(E=>{Y.copy(E.v).project(p),E.el.style.display=Y.z<1?"":"none",E.el.style.transform=`translate(-50%,-50%) translate(${(Y.x+1)/2*V}px,${(1-Y.y)/2*ae}px)`})}let ge=!1,Ee=!1;function Ge(V){if(o=0,!l){if(!ge){Ee||(Ee=!0,P.then(()=>l?null:C.warm()).then(()=>{ge=!0,a=!0,Ye()}));return}C.watch(V,c.size>0||!!Oe),d&&!u.size&&(a=!0),c.size&&(a=!0),c.forEach(ae=>{ae(V)||c.delete(ae)}),a&&(a=!1,Q()),c.size&&Ye()}}function Ye(){!o&&!l&&(o=requestAnimationFrame(Ge))}function te(V,ae){let E=performance.now(),T=H=>{let ee=Math.min(1,(H-E)/V);return ae(ee),ee<1};return c.add(T),Ye(),T}function de(V){let ae=performance.now(),E=T=>{let H=Math.min(.1,(T-ae)/1e3);return ae=T,V(T,H),!0};return c.add(E),u.add(E),Ye(),()=>{c.delete(E),u.delete(E),h()}}let fe=null;function xe(V,ae=900){let E={...S,...V};if(fe&&c.delete(fe),e.reduced){Object.assign(w,E),h();return}let T={...w};fe=te(ae,H=>{let ee=Uy(H);Object.keys(E).forEach(oe=>w[oe]=T[oe]+(E[oe]-T[oe])*ee)})}function Ae(){xe({})}let Qe=new Zi,Le=new Ve,rt=[],$e=i.domElement;$e.style.touchAction="pan-y";let Oe=null,A=null,qe=null,Fe=V=>{let ae=$e.getBoundingClientRect();Le.set((V.clientX-ae.left)/ae.width*2-1,-((V.clientY-ae.top)/ae.height)*2+1),Qe.setFromCamera(Le,p);let E=Qe.intersectObjects(rt,!1)[0];return E&&E.object.userData&&E.object.userData.id?E.object.userData:null};$e.addEventListener("pointerdown",V=>{if(!A){Oe={x:V.clientX,y:V.clientY,yaw:w.yaw,pitch:w.pitch,moved:!1,u:Fe(V)};try{$e.setPointerCapture(V.pointerId)}catch{}Oe.u&&Oe.u.hold&&e.onPress&&(A=Oe.u,qe=V.pointerId,e.onPress(A))}}),$e.addEventListener("pointermove",V=>{if(!Oe||A)return;let ae=V.clientX-Oe.x,E=V.clientY-Oe.y;Math.abs(ae)+Math.abs(E)>6&&(Oe.moved=!0),Oe.moved&&(fe&&(c.delete(fe),fe=null),w.yaw=Math.max(R.yaw[0],Math.min(R.yaw[1],Oe.yaw-ae*.25)),w.pitch=Math.max(R.pitch[0],Math.min(R.pitch[1],Oe.pitch+E*.2)),h())});let ke=V=>{if(A&&V.pointerId!==qe)return;let ae=Oe;if(Oe=null,A){let E=A;A=null,e.onRelease&&e.onRelease(E);return}!ae||ae.moved||!ae.u||e.onTap&&e.onTap(ae.u)};$e.addEventListener("pointerup",ke),$e.addEventListener("pointercancel",V=>{if(!(A&&V.pointerId!==qe)&&(Oe=null,A)){let ae=A;A=null,e.onRelease&&e.onRelease(ae)}}),$e.addEventListener("wheel",V=>{V.ctrlKey&&(V.preventDefault(),w.dist=Math.max(R.dist[0],Math.min(R.dist[1],w.dist+V.deltaY*.01)),h())},{passive:!1});function Te(V){let ae=rt.find(T=>T.userData&&T.userData.id===V);if(!ae)return null;ae.updateWorldMatrix(!0,!1);let E=new F().setFromMatrixPosition(ae.matrixWorld).project(p);return{x:(E.x+1)/2*r.clientWidth,y:(1-E.y)/2*r.clientHeight,visible:E.z<1}}return G(),{screenOf:Te,THREE_scene:g,world:M,camera:p,renderer:i,lite:t,pick:rt,view:w,home:S,setEnvIntensity(V){D=V,g.environment&&(g.environmentIntensity=V)},add(V){return M.add(V),V},label:he,animate:te,loop:de,look:xe,reset:Ae,redraw:h,moved:x,resize:G,finish(V){$r(M,V),x()},dispose(){l=!0,o&&cancelAnimationFrame(o),W&&W.disconnect(),g.traverse(V=>{V.geometry&&V.geometry.dispose(),V.material&&(Array.isArray(V.material)?V.material:[V.material]).forEach(ae=>{Object.values(ae).forEach(E=>E&&E.isTexture&&E.dispose()),ae.dispose()})}),g.environment&&g.environment.dispose(),C.dispose(),i.dispose(),i.forceContextLoss&&i.forceContextLoss(),i.domElement.remove(),s.remove()}}}var Tm={QM:2.7,KM:3,FR:3.3},tu=3,nu=1.28,ts=6.8,ca=2.95,Am={1:-.05,2:-.05,3:0,4:0,5:.05,6:.05};function Rm(r){let[e,t]=r.split(".");if(e==="Q"){let i=["L1","L2","L3","N","PE"].indexOf(t);return i<0?null:{p:[2.58+i*.07,2.16,.21],zone:"cab"}}if(Tm[e]&&Am[t]!==void 0)return{p:[Tm[e]+Am[t],Number(t)%2?2:1.68,.21],zone:"cab"};if(e==="KM"){let i={A1:[2.88,1.86],A2:[3.12,1.86],13:[2.88,1.76],14:[3.12,1.76]}[t];return i?{p:[i[0],i[1],.21],zone:"cab"}:null}if(e==="FR"){let i={95:[3.25,1.6],96:[3.31,1.6],97:[3.37,1.6],98:[3.43,1.6]}[t];return i?{p:[i[0],i[1],.21],zone:"cab"}:null}let n={SB1:[6.31,1.75],SB0:[6.49,1.75],SBE:[6.4,1.5],H:[6.4,2]}[e];if(n){let i={1:-.02,3:-.02,X1:-.02,2:.02,4:.02,X2:.02}[t];return i===void 0?null:{p:[n[0]+i,n[1],5.4],zone:"st"}}if(e==="PLC"){let i=["A1","A2","IC","I0","I1","I2","I3"].indexOf(t),s=["Q0A","Q0B","Q1A","Q1B"].indexOf(t);return i>=0?{p:[tu-.135+i*.045,nu+.075,.21],zone:"cab"}:s>=0?{p:[tu-.075+s*.05,nu-.075,.21],zone:"cab"}:null}if(e==="PH"){let i={1:-.03,2:-.01,3:.01,4:.03}[t];return i===void 0?null:{p:[ts+i,.86,ca],zone:"ph"}}if(e==="FC"){let i={1:-.03,2:-.01,3:.01,4:.03}[t];return i===void 0?null:{p:[8.68+i,1,3.84],zone:"fc"}}if(e==="M"){let i={U:-.04,V:0,W:.04,PE:.08}[t];return i===void 0?null:{p:[8.6+i,.95,4.37],zone:"mot"}}return null}var Ny={st:[6.4,5.4],fc:[8.68,3.84],mot:[8.6,4.37],ph:[ts,ca]};function Fy(r,e,t=0){let n=Rm(r),i=Rm(e);if(!n||!i)return null;let s=(t%9-4)*.022,a=.21+.03+Math.abs(s)*.6;if(n.zone==="cab"&&i.zone==="cab"){let h=Math.min(n.p[1],i.p[1])-.06-t%4*.025;return[n.p,[n.p[0],n.p[1],a],[n.p[0],h,a],[i.p[0],h,a],[i.p[0],i.p[1],a],i.p]}let o=3.05+s*.3;if(n.zone!=="cab"&&i.zone!=="cab"){if(n.zone===i.zone){let h=Math.max(n.p[1],i.p[1])+.08+t%3*.03;return[n.p,[n.p[0],h,n.p[2]-.03],[i.p[0],h,i.p[2]-.03],i.p]}return[...Ff(n,s,o).reverse(),...Ff(i,s,o)]}let[l,c]=n.zone==="cab"?[n,i]:[i,n],u=[l.p,[l.p[0],l.p[1],a],[l.p[0],o,a],[l.p[0],o,.4+s],...Ff(c,s,o)];return n.zone==="cab"?u:u.reverse()}function Ff(r,e,t){let n=Ny[r.zone][0]+e;return[[n,t,.4+e],[n,t,r.p[2]],[r.p[0],t,r.p[2]],r.p]}function iu(r,e){let t=[];return(r||[]).forEach((n,i)=>{let s=Fy(n.a,n.b,i);if(!s)return;let a=e&&e.wires&&e.wires[n.id]||{},o=!!a.current;t.push({id:String(n.id)+":"+n.a+"-"+n.b,pts:s,color:n.c,live:a.net==="fase"||a.net==="neutro"&&o,current:o})}),t}var Yt={z0:4.9,z1:7.5,h:2.8},Of=180,Cm=17,Pi=3.6,wo={sun:{color:7308996,intensity:.12,pos:[7,9,-6]},mood:{sun:[.06,.1],cold:6124720,warm:10466016,env:[.03,.05]},sunShadow:!1,windows:.06,rowsOn:[2],bg:461588,exposure:1};function ua(r,e,t={}){let{world:n,lite:i}=r,s=t.sun||{},a=new ji(s.color||14674175,s.intensity||1.5);a.position.set(...s.pos||[7,9,-6]),a.target.position.set(5.5,0,3.5),a.castShadow=t.sunShadow!==!1,a.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(a.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:30}),a.shadow.bias=-4e-4,a.shadow.normalBias=.02,a.shadow.radius=4,n.add(a,a.target);let o=t.shadowRow===void 0?2:t.shadowRow,l=[[3.2,3.4],[6,6.2],[6,3.4],[8.8,3.4]].map(([C,S],w)=>{let R=new an(16773336,Cm,14,2);R.position.set(C,3.2,S),!i&&w===o&&(R.castShadow=!0,R.shadow.mapSize.set(512,512),R.shadow.bias=-.002),n.add(R),se(n,e.steelDark,C,3.3,S,.9,.05,.16,.01);let O=new _e({color:16777215,emissive:16773336,emissiveIntensity:2.4}),G=new De(new Tt(.8,.02,.1),O);return G.position.set(C,3.27,S),G.userData.lamp=w,n.add(G),{light:R,mat:O,level:1}});function c(C,S){C.level=S,C.light.intensity=Cm*S,C.mat.emissiveIntensity=.05+2.35*S,C.mat.color.setScalar(.35+.65*S)}let u=C=>!t.rowsOn||t.rowsOn.includes(C);t.rowsOn&&l.forEach((C,S)=>{u(S)||c(C,0)});let h=t.mood||{sun:[.55,.95],cold:10466528,warm:14674175,env:[.1,.12]},f=new Be(h.warm);function d(){let C=l.reduce((S,w)=>S+w.level,0)/l.length;a.intensity=h.sun[0]+h.sun[1]*C,a.color.setHex(h.cold).lerp(f,C),r.setEnvIntensity(h.env[0]+h.env[1]*C),r.redraw()}t.windows!==void 0&&(e.windowGlow.emissiveIntensity=t.windows,t.windows<.2&&e.windowGlow.color.setHex(1844790)),t.exposure!==void 0&&r.renderer&&(r.renderer.toneMappingExposure=t.exposure),t.bg!==void 0&&r.THREE_scene&&r.THREE_scene.background&&r.THREE_scene.background.setHex(t.bg);let m=new De(new Et(14,11),e.concrete);m.rotation.x=-Math.PI/2,m.position.set(5.5,0,4),m.receiveShadow=!0,e.concrete.map.repeat.set(3,2.4),e.concrete.bumpMap.repeat.set(10,8),n.add(m);let x=new _e({color:3816770,roughness:.95}),g=new De(new Et(14,22),x);g.rotation.x=-Math.PI/2,g.position.set(-8.6,-.005,4),g.receiveShadow=!0,n.add(g),se(n,e.wall,5.5,Pi/2,-.1,12,Pi,.2,.01),se(n,e.wall,-.1,Pi/2,(-.5+Yt.z0)/2,.2,Pi,Yt.z0+.5,.01),se(n,e.wall,-.1,Pi/2,(Yt.z1+8.5)/2,.2,Pi,8.5-Yt.z1,.01),se(n,e.wall,-.1,(Yt.h+Pi)/2,(Yt.z0+Yt.z1)/2,.2,Pi-Yt.h,Yt.z1-Yt.z0,.01),se(n,e.wall,11.6,Pi/2,4,.2,Pi,9,.01),se(n,e.wallBase,5.5,.55,-0,12,1.1,.04,.005),se(n,e.wallBase,-0,.55,(-.5+Yt.z0)/2,.04,1.1,Yt.z0+.5,.005),[[7.6,4.2],[11,2]].forEach(([C,S])=>{let w=new De(new Et(S-.4,1),e.windowGlow);w.position.set(C,2.55,.016),n.add(w),se(n,e.frame,C,2.55,.03,S-.3,.06,.04,.005),se(n,e.frame,C,3.05,.03,S-.3,.06,.04,.005),se(n,e.frame,C,2.05,.03,S-.3,.06,.04,.005)});let p=(()=>{let C=document.createElement("canvas");C.width=64,C.height=256;let S=C.getContext("2d",{willReadFrequently:!0});S.fillStyle="#8b939b",S.fillRect(0,0,64,256);for(let R=0;R<256;R+=16)S.fillStyle="#5d646b",S.fillRect(0,R,64,3),S.fillStyle="#a9b0b7",S.fillRect(0,R+3,64,2);let w=new zt(C);return w.wrapS=w.wrapT=jt,w.colorSpace=wt,w})(),M=new _e({map:p,roughness:.45,metalness:.6}),y=new De(new Tt(.05,1,Yt.z1-Yt.z0-.02),M);y.castShadow=!0,y.receiveShadow=!0,n.add(y),se(n,e.steelDark,-.24,Yt.h+.16,(Yt.z0+Yt.z1)/2,.3,.32,Yt.z1-Yt.z0+.1,.03);let _=1;function D(C){_=C;let S=Math.max(.02,Yt.h*(1-C));y.scale.y=S,p.repeat.set(1,S/.9),y.position.set(-.12,Yt.h-S/2,(Yt.z0+Yt.z1)/2),y.visible=C<.995,r.moved()}D(1);let L=(C,S,w,R)=>{let O=new De(new Et(w,R),e.hazard);O.rotation.x=-Math.PI/2,O.position.set(C,.004,S),O.receiveShadow=!0,n.add(O)};L(5.6,2.6,7.2,.14),L(5.6,4.9,7.2,.14),L(2,3.75,.14,2.4),L(9.2,3.75,.14,2.4),e.hazard.map.repeat.set(7,1);let P=(C,S,w,R)=>{let O=Math.abs(w-C)>Math.abs(R-S),G=Math.abs(O?w-C:R-S),W=(C+w)/2,J=(S+R)/2,Y=.26,he=3.05-.05;se(n,e.steelDark,W,he,J,O?G:Y,.012,O?Y:G,.003),[-1,1].forEach(j=>se(n,e.steelDark,O?W:W+j*Y/2,he+.035,O?J+j*Y/2:J,O?G:.012,.07,O?.012:G,.003))};return P(2.5,.4,8.9,.4),P(6.4,.4,6.4,5.4),P(8.68,.4,8.68,4.4),[3,5,7,8.9].forEach(C=>se(n,e.steelDark,C,3.05+.25,.4,.02,.5,.02,.003)),{sun:a,rows:l,shutter:y,setRow:c,mood:d,setShutter:D,tray:P,shutterK:()=>_,lampsOn(C=1){if(t.reduced){l.forEach((R,O)=>c(R,u(O)?C:0)),d();return}let S=R=>R<0?0:R<50?.7:R<100?.05:R<150?1:R<190?.35:1,w=Of*l.length+260;r.animate(w,R=>{l.forEach((O,G)=>c(O,u(G)?C*S(R*w-G*Of):0)),d()})},shutterTo(C,S=1600){let w=_,R=C?1:0;if(t.reduced||S<=1){D(R);return}r.animate(S,O=>D(w+(R-w)*(O*O*(3-2*O))))}}}var Zt={x0:2.6,x1:8.6,z:3.4,h:.8,w:.7},su=.9,au=2.95;var To={insieme:{tx:5.6,ty:.9,tz:3.4,yaw:18,pitch:28,dist:15},pulsantiera:{tx:6.4,ty:1.5,tz:5.5,yaw:8,pitch:8,dist:2.9},quadro:{tx:3,ty:1.75,tz:.4,yaw:6,pitch:6,dist:2.6},motore:{tx:8.6,ty:.85,tz:3.6,yaw:-30,pitch:18,dist:5.2},esterno:{tx:.4,ty:1.5,tz:6.2,yaw:-78,pitch:7,dist:9.5},turno:{tx:5.8,ty:1,tz:3.6,yaw:26,pitch:34,dist:13.5}};function Pm(r,e){let t=la(r,{bg:1910328,exposure:1.25,view:To.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[2.5,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:e.onTap,onPress:e.onPress,onRelease:e.onRelease});if(!t)return null;let{world:n,pick:i,lite:s}=t,a=Ri();t.setEnvIntensity(.22);let o=ua(t,a,{reduced:e.reduced}),{rows:l,setRow:c,mood:u,setShutter:h,shutter:f}=o,d=ia(a,{x0:Zt.x0,x1:Zt.x1,h:Zt.h,w:Zt.w});d.group.position.z=Zt.z,n.add(d.group);let m=ym(a);m.position.set(au,Zt.h+.0125,Zt.z),n.add(m);let x=new Ce;x.position.set(8.68,Zt.h+.2,Zt.z+.52),se(x,a.steelDark,0,-.22,0,.05,.4,.05,.005),se(x,a.modGrey,0,0,0,.12,.12,.1,.01);let g=new Ce;g.position.set(-.05,0,-.03),se(g,a.steel,-.02,0,-.26,.02,.02,.5,.004),gt(g,a.red,-.02,0,-.5,.035,.03,"y",18),x.add(g),n.add(x);let p=new De(new xn(.012,10,8),new _e({color:3811845,emissive:16757018,emissiveIntensity:0}));p.position.set(.03,0,.055),x.add(p);let M=$c(a);M.group.rotation.y=Math.PI,M.group.position.set(Zt.x1,Zt.h-.07,4.35),n.add(M.group),se(n,a.frame,Zt.x1,.27,4.35,.36,.54,.46,.01),gt(n,a.steelDark,Zt.x1,Zt.h-.07,3.92,.04,.12,"z");let y=jc({add:V=>n.add(V),animate:t.animate,redraw:t.redraw},[Zt.x1,Zt.h+.15,4.45],s?18:34),_=ra(a,1.45);_.group.position.set(9.6,0,2.2),n.add(_.group);let D=sa(a);D.group.position.set(6.4,0,5.5),D.group.scale.setScalar(1.25),n.add(D.group),D.picks.forEach(V=>i.push(V));let L=qt(3073642,.028);L.mesh.position.set(0,1.56,0),D.group.add(L.mesh);let P=aa(a);P.group.position.set(3,1.5,.07),n.add(P.group),P.picks.forEach(V=>i.push(V));let C=new Ce;C.position.set(2.7,1.66,.27);let S=new De(new _i(.022,.005,8,18,Math.PI),a.steel);S.position.y=.03,C.add(S),se(C,a.red,0,0,0,.05,.045,.022,.006);let w=tn(C,"Lavori in corso",0,-.1,.015,.16,.08,{bg:"#f5c400",fg:"#17181a",size:.36,dim:16777215});w.material.side=un,C.scale.setScalar(1e-4),n.add(C);let R=6,O=new $t(new Tt(.48,.34,.38),a.cardboard,R);O.count=0,O.frustumCulled=!1,n.add(O);let G=(()=>{let V=document.createElement("canvas");V.width=V.height=64;let ae=V.getContext("2d",{willReadFrequently:!0}),E=ae.createRadialGradient(32,32,4,32,32,31);return E.addColorStop(0,"rgba(0,0,0,0.55)"),E.addColorStop(1,"rgba(0,0,0,0)"),ae.fillStyle=E,ae.fillRect(0,0,64,64),new zt(V)})(),W=new $t(new Et(.7,.56).rotateX(-Math.PI/2),new _t({map:G,transparent:!0,depthWrite:!1}),R);W.count=0,W.frustumCulled=!1,W.renderOrder=1,n.add(W);let J=new Je,Y=new mn,he=new F,j=new F;m.traverse(V=>{V.isMesh&&(V.castShadow=!1)});let Q=new De(new Et(.7,.56).rotateX(-Math.PI/2),W.material);Q.position.y=-.01,Q.renderOrder=1,m.add(Q);let ge=$s({add:V=>n.add(V),redraw:t.redraw,reduced:e.reduced,loop:V=>{let ae=t.loop(()=>{V()===!1&&ae()})}});t.label("Nastro",4.8,1.25,3.4,"room"),t.label("Motore",8.9,1.35,4.35,"room"),t.label("Finecorsa",8.7,1.4,3.9,"room"),t.label("Quadro",3,2.3,.3,"room"),t.label("Pulsantiera",6.4,2.25,5.5,"room");let Ee=0,Ge=0,Ye=!1,te=0,de=!1,fe=null,xe=au,Ae=!1,Qe=!1,Le=!1,rt=0,$e=0,Oe=null,A=M.group.position.y;function qe(){fe||(fe=t.loop((V,ae)=>{let E=Ge-Ee;if(Ee+=Math.abs(E)<.001?E:E*Math.min(1,ae*7),Le||(m.position.x=au+Ee*su,m.rotation.z=Ae?-.14+Math.sin(V/40)*.02:0,xe=m.position.x),(Ye||Le)&&d.run(su,ae),(te||Le)&&M.spin(te||6,ae),M.group.position.y=A+(de||Ae?Math.sin(V/22)*(Ae?.006:.0035):0),Qe&&(_.set({yellow:Math.floor(V/320)%2===0,red:!1,green:Oe&&Oe.lamp}),V-$e>1300&&($e=V,y.play(900))),Le){rt+=ae;let T=Zt.x1-Zt.x0-.5,H=T/R;for(let ee=0;ee<R;ee++){let oe=(rt*su+ee*H)%T,ce=Zt.x0+.25+oe,He=Math.min(1,oe/.25,(T-oe)/.25);j.setScalar(Math.max(.001,He)),he.set(ce,Zt.h+.0125+.17*He,Zt.z),J.compose(he,Y,j),O.setMatrixAt(ee,J),he.set(ce,Zt.h+.002,Zt.z),J.compose(he,Y,j),W.setMatrixAt(ee,J)}O.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0}!Ye&&!te&&!de&&!Ae&&!Qe&&!Le&&Math.abs(Ge-Ee)<.002&&(fe(),fe=null)}))}t.finish([m,x,M.group,_.group,f,C,O,W]);let Fe=V=>{let ae={...To[V]||To.insieme};return t.camera.aspect<.9&&(V==="insieme"||V==="turno"||!To[V])&&(ae.dist=10.5,ae.yaw=24),t.camera.aspect<.9&&V==="esterno"&&(ae.dist=13),ae},ke=!0,Te=!0;return t.camera.aspect<.9&&t.look(Fe("insieme"),1),{update(V){if(!V)return;Oe=V,Ge=Math.max(0,Math.min(V.length,V.pos)),ke&&(Ee=Ge,m.position.x=xe=au+Ee*su,ke=!1,t.moved()),Ye=V.motor==="fwd"&&!V.atEnd,te=V.motor==="fwd"?6:0,de=V.motor==="hum",Ae=!!V.overload&&V.motor==="fwd",Qe=V.thermal.tripped&&V.motor==="fwd",!Ae&&m.rotation.z!==0&&(m.rotation.z=0,t.moved()),M.set({heat:Math.max(V.thermal.heat*.9,Ae?.35:0,Qe?.8:0)}),g.rotation.y!==(V.atEnd?.55:0)&&(g.rotation.y=V.atEnd?.55:0,t.moved()),p.material.emissiveIntensity=V.atEnd?3:0,Le?_.set({green:!0}):Qe||_.set({green:V.lamp,red:V.thermal.tripped||V.emergency,yellow:!V.qm&&V.supply?!0:V.overload&&!V.thermal.tripped&&V.motor==="fwd"}),D.set(V),P.set(V),L.set(!!V.lamp||Le,3.2);let ae=V.qm?1e-4:1;C.scale.x!==ae&&(C.scale.setScalar(ae),t.moved()),V.wires&&(ge.sync(iu(V.wires,V.flow),!Te),Te=!1),qe(),t.redraw(),r.querySelector("canvas").setAttribute("aria-label","Officina con il nastro trasportatore. "+(V.motor==="fwd"?"Il nastro \xE8 in marcia.":V.motor==="hum"?"Il motore ronza e non parte.":"Il nastro \xE8 fermo.")+(V.thermal.tripped?" Il termico \xE8 scattato.":"")+(V.emergency?" L\u2019emergenza \xE8 premuta.":"")+(V.atEnd?" Il pacco \xE8 a fine corsa.":"")+(V.qm?"":" Il salvamotore \xE8 aperto: lavori in corso."))},look(V,ae){t.look(Fe(V),ae)},outside(){h(0),l.forEach(V=>c(V,0)),u(),t.look(Fe("esterno"),1)},inside(){h(1),l.forEach(V=>c(V,1)),u()},shutter(V,ae=1600){o.shutterTo(V,ae)},lampsOn(){o.lampsOn()},shift(V){Le=!!V,rt=0,O.count=W.count=V?R:0,m.visible=!V,t.moved(),V?(_.set({green:!0}),L.set(!0,3.2),qe()):Oe&&this.update(Oe),t.redraw()},wires:()=>ge,stats(){let V={},ae=new bi().setFromProjectionMatrix(new Je().multiplyMatrices(t.camera.projectionMatrix,t.camera.matrixWorldInverse));return t.THREE_scene.traverseVisible(E=>{if(!E.isMesh&&!E.isPoints||E.frustumCulled&&E.geometry.boundingSphere!==void 0&&!ae.intersectsObject(E))return;let T=E,H="";for(;T&&T.parent&&!H;)T.parent===t.world&&(H=T.name||T.type+(T.children.length?"["+T.children.length+"]":"")),T=T.parent;let ee=H+" \xB7 "+(E.isInstancedMesh?"inst ":"")+(E.material.transparent?"trasp ":"")+E.material.type+(E.material.type==="ShaderMaterial"?"":" "+E.geometry.attributes.position.count);V[ee]=(V[ee]||0)+1}),{by:V}},screenOf:t.screenOf,views:Object.keys(To),resize:t.resize,dispose(){fe&&fe(),t.dispose()}}}var At={x0:2.6,x1:8.6,z:3.4,h:.8,w:.7},ou=.6,Vt={x0:8.62,x1:9.3,y0:At.h,y1:.42,len:.75},Di={x:9.85,z:At.z,y:.14},ns={w:.48,h:.34,d:.38},Ao=8,lu=8,Ro={insieme:{tx:6,ty:.9,tz:3.4,yaw:16,pitch:27,dist:14.5},pulsantiera:{tx:6.4,ty:1.5,tz:5.5,yaw:8,pitch:8,dist:2.9},quadro:{tx:3,ty:1.5,tz:.4,yaw:6,pitch:6,dist:2.7},plc:{tx:3,ty:1.3,tz:.3,yaw:4,pitch:4,dist:1.5},fotocellula:{tx:6.8,ty:1,tz:3.4,yaw:-28,pitch:20,dist:3.6},bancale:{tx:9.4,ty:.7,tz:3.4,yaw:-34,pitch:22,dist:4.2},esterno:{tx:.4,ty:1.5,tz:6.2,yaw:-78,pitch:9,dist:9.5},turno:{tx:6.6,ty:1,tz:3.6,yaw:24,pitch:32,dist:13}};function Im(r,e){let t=la(r,{bg:8362941,exposure:1.2,view:Ro.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[1.2,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:e.onTap,onPress:e.onPress,onRelease:e.onRelease});if(!t)return null;let{world:n,pick:i}=t,s=Ri();s.windowGlow.emissiveIntensity=1.6;let a=ua(t,s,{reduced:e.reduced,sun:{color:16773594,intensity:2.4,pos:[6.5,12,-5]},mood:{sun:[1.9,.6],cold:16771528,warm:16774370,env:[.26,.08]}});a.rows.forEach(E=>a.setRow(E,.45)),a.mood(),a.tray(ts,.4,ts,ca);let o=ia(s,{x0:At.x0,x1:At.x1,h:At.h,w:At.w});o.group.position.z=At.z,n.add(o.group);let l=At.x0+.25;se(n,s.frame,l-.35,.9,At.z,1.3,1.8,1.2,.02),se(n,s.modDark,l+.31,At.h+.24,At.z,.02,.48,.78,.004),se(n,s.yellow,l+.32,At.h+.52,At.z,.03,.06,.9,.004),tn(n,"Confezionatrice",l-.35,1.55,At.z+.61,.9,.12,{bg:"#e3b61f",fg:"#17181a",size:.5,dim:16777215});let c=Math.atan2(Vt.y0-Vt.y1,Vt.x1-Vt.x0),u=new Ce;u.position.set(Vt.x0,Vt.y0-.05,At.z),u.rotation.z=-c;let h=Math.hypot(Vt.x1-Vt.x0,Vt.y0-Vt.y1);[-1,1].forEach(E=>se(u,s.frame,h/2,0,E*.4,h,.06,.04,.006));for(let E=0;E<6;E++)gt(u,s.steel,.06+E*(h-.12)/5,.01,0,.025,.76,"z",12);n.add(u),[Vt.x0+.05,Vt.x1-.05].forEach((E,T)=>se(n,s.frame,E,(T?Vt.y1:Vt.y0)/2-.04,At.z+.4,.04,(T?Vt.y1:Vt.y0)-.08,.04,.005));let f=new _e({color:10844746,roughness:.85});[-.42,0,.42].forEach(E=>se(n,f,Di.x,.05,Di.z+E,1,.1,.12,.006)),[-.4,-.13,.13,.4].forEach(E=>se(n,f,Di.x+E,.12,Di.z,.12,.04,.96,.004));let d=Mm(s,At.w+.2,.97);d.group.position.set(ts,0,ca),n.add(d.group);let m=$c(s);m.group.rotation.y=Math.PI,m.group.position.set(At.x1,At.h-.07,4.35),n.add(m.group),se(n,s.frame,At.x1,.27,4.35,.36,.54,.46,.01),gt(n,s.steelDark,At.x1,At.h-.07,3.92,.04,.12,"z");let x=ra(s,1.45);x.group.position.set(9.6,0,2.2),n.add(x.group);let g=sa(s);g.group.position.set(6.4,0,5.5),g.group.scale.setScalar(1.25),n.add(g.group),g.picks.forEach(E=>i.push(E));let p=qt(16777215,.028);p.mat.color.setHex(3815994),p.mat.emissive.setHex(16774084),p.mesh.position.set(0,1.56,0),g.group.add(p.mesh);let M=aa(s);M.group.position.set(3,1.5,.07),n.add(M.group),M.picks.forEach(E=>i.push(E));let y=eu(s);y.group.position.set(tu-3,nu-1.5,.05),M.group.add(y.group);let _=new Ce;_.position.set(2.7,1.66,.27);let D=new De(new _i(.022,.005,8,18,Math.PI),s.steel);D.position.y=.03,_.add(D),se(_,s.red,0,0,0,.05,.045,.022,.006);let L=tn(_,"Lavori in corso",0,-.1,.015,.16,.08,{bg:"#f5c400",fg:"#17181a",size:.36,dim:16777215});L.material.side=un,_.scale.setScalar(1e-4),n.add(_);let P=new Tt(ns.w,ns.h,ns.d),C=new $t(P,s.cardboard,Ao),S=new $t(P,s.cardboard,lu),w=(()=>{let E=document.createElement("canvas");E.width=E.height=64;let T=E.getContext("2d",{willReadFrequently:!0}),H=T.createRadialGradient(32,32,4,32,32,31);return H.addColorStop(0,"rgba(0,0,0,0.55)"),H.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=H,T.fillRect(0,0,64,64),new zt(E)})(),R=new $t(new Et(.7,.56).rotateX(-Math.PI/2),new _t({map:w,transparent:!0,depthWrite:!1}),Ao+lu);R.renderOrder=1,[C,S,R].forEach(E=>{E.castShadow=!1,E.receiveShadow=E!==R,E.frustumCulled=!1}),S.count=0,n.add(C,S,R);let O=new Je,G=new mn,W=new mn,J=new F,Y=new F,he=new F(0,0,1);W.setFromAxisAngle(he,-c);let j=new Je().makeScale(1e-4,1e-4,1e-4);function Q(E){let T=At.x1-At.x0;if(E<=T)return{x:At.x0+E,y:At.h+ns.h/2,rot:!1,by:At.h+.002};let H=(E-T)/Vt.len;return H>=1?null:{x:Vt.x0+H*(Vt.x1-Vt.x0),y:Vt.y0+H*(Vt.y1-Vt.y0)+ns.h/2-.02,rot:!0,by:.004}}function ge(E){let T=Math.floor(E/4),H=E%4;return[Di.x+(H%2?.25:-.25),Di.y+ns.h/2+T*ns.h,Di.z+(H<2?-.2:.2)]}let Ee=-1,Ge=-1;function Ye(E,T,H,ee=0){let ce=At.x1-At.x0+Vt.len+H/2,He=Math.max(0,Math.ceil((E-H/2-ce)/T)),Pe=0,re=0;for(let pe=0;pe<Ao;pe++){let Ie=He+pe,ze=E-Ie*T-H/2,Re=ze>-H?Q(ze):null;if(!Re||ze<.35){C.setMatrixAt(pe,j),R.setMatrixAt(re++,j);continue}J.set(Re.x,Re.y,At.z),O.compose(J,Re.rot?W:G,Y.setScalar(1)),C.setMatrixAt(pe,O),J.set(Re.x,Re.by,At.z),O.compose(J,G,Y.setScalar(1)),R.setMatrixAt(re++,O),Pe++}let me=Math.max(0,He-ee),le=me?(me-1)%lu+1:0;if(le!==Ge){Ge=le,S.count=le;for(let pe=0;pe<lu;pe++)if(pe<le){let Ie=ge(pe);J.set(...Ie),O.compose(J,G,Y.setScalar(1)),S.setMatrixAt(pe,O),J.set(Ie[0],Di.y+.002,Ie[2]),O.compose(J,G,Y.setScalar(pe<4?.8:1e-4)),R.setMatrixAt(Ao+pe,O)}else R.setMatrixAt(Ao+pe,j);S.instanceMatrix.needsUpdate=!0}C.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,Ee=Pe}let te=$s({add:E=>n.add(E),redraw:t.redraw,reduced:e.reduced,loop:E=>{let T=t.loop(()=>{E()===!1&&T()})}});t.label("Nastro",5,1.3,3.4,"room"),t.label("Fotocellula",ts,1.35,ca,"room"),t.label("Bancale",Di.x,.95,Di.z,"room"),t.label("Quadro e PLC",3,2.3,.3,"room"),t.label("Pulsantiera",6.4,2.25,5.5,"room");let de=null,fe=0,xe=!1,Ae=null,Qe=null,Le=!1,rt=0,$e="",Oe={gap:1.4,size:.48},A=0;function qe(){Ae||(Ae=t.loop((E,T)=>{xe||Le?de=Le?de+ou*T:Math.min(de+ou*T,fe+ou*.55):de+=(fe-de)*Math.min(1,T*8),!xe&&!Le&&Math.abs(fe-de)<.002&&(de=fe),Ye(de,Oe.gap,Oe.size,Le?A:0),(xe||Le)&&(o.run(ou,T),m.spin(6,T));let H=E<rt;H?x.set({yellow:Math.floor(E/320)%2===0,red:!1,green:!1}):$e==="alarm"&&($e="",Fe()),!xe&&!Le&&!H&&de===fe&&(Ae(),Ae=null)}))}function Fe(){let E=Qe;if(E){if(Le){x.set({green:!0});return}x.set({green:E.motor==="fwd",red:E.thermal.tripped||E.emergency,yellow:!E.qm&&E.supply||E.lamp})}}t.finish([m.cap.parent,a.shutter,_,C,S,R]);let ke=E=>{if(typeof E=="object")return{...E};let T={...Ro[E]||Ro.insieme};return t.camera.aspect<.9&&(E==="insieme"||E==="turno"||!Ro[E])&&(T.dist=10.5,T.yaw=22),t.camera.aspect<.9&&E==="esterno"&&(T.dist=13),T};t.camera.aspect<.9&&t.look(ke("insieme"),1);let Te=!0,V="",ae=r.querySelector("canvas");return{update(E){if(!E)return;let T=Qe;Qe=E,Oe.gap=E.gap,Oe.size=E.size,fe=E.lead,(de===null||fe<de-.5)&&(de=fe,Ge=-1,Ye(de,Oe.gap,Oe.size),t.moved()),xe=E.motor==="fwd",m.set({heat:E.thermal.heat*.9}),g.set(E),M.set(E),d.set(E);let H=y.set(E.plc);p.set(!!E.lamp||Le,3.2);let ee=E.qm?1e-4:1;_.scale.x!==ee&&(_.scale.setScalar(ee),t.moved()),$e!=="alarm"&&Fe();let oe=[E.motor,E.lamp,E.beam,E.qm,E.thermal.tripped,Math.round(E.thermal.heat*20),E.emergency,E.start,E.stop,E.contactor].join();if(E.wires){let ce=iu(E.wires,E.flow).map(Pe=>({...Pe,current:Pe.current&&xe})),He=ce.map(Pe=>Pe.id+(Pe.live?"+":"-")+(Pe.current?">":"")).join();He!==V&&(V=He,te.sync(ce,!Te),Te=!1)}E._sig=oe,(xe||de!==fe)&&qe(),(!T||oe!==T._sig||H||de!==fe)&&t.redraw(),ae&&ae.setAttribute("aria-label",["Linea di confezionamento.",E.motor==="fwd"?"Il nastro \xE8 in marcia.":"Il nastro \xE8 fermo.",E.lamp?"La spia del lotto pieno \xE8 accesa.":"La spia del lotto pieno \xE8 spenta.",E.beam?"Un pacco \xE8 davanti alla fotocellula.":"Davanti alla fotocellula non c\u2019\xE8 nessun pacco.",E.plc.on?"Il PLC \xE8 acceso.":"Il PLC \xE8 spento.",E.emergency?"L\u2019emergenza \xE8 premuta.":"",E.thermal.tripped?"Il termico \xE8 scattato.":"",E.qm?"":"Il salvamotore \xE8 aperto: lavori in corso."].filter(Boolean).join(" "))},look(E,T){t.look(ke(E),T)},outside(){a.setShutter(1),t.look(ke("esterno"),1)},inside(){a.setShutter(1)},arrival(){return t.look(ke("insieme"),2600),2800},alert(E=2600){$e="alarm",rt=performance.now()+(e.reduced?0:E),qe(),t.redraw()},shift(E){Le=!!E,E?(A=Math.max(0,Math.ceil((de-Oe.size/2-(At.x1-At.x0+Vt.len+Oe.size/2))/Oe.gap)),Ge=-1,x.set({green:!0}),p.set(!0,3.2),qe()):(Ge=-1,de=fe,Ye(de,Oe.gap,Oe.size),Qe&&(Fe(),p.set(!!Qe.lamp,3.2))),t.moved(),t.redraw()},wires:()=>te,stats(){let E={},T=new bi().setFromProjectionMatrix(new Je().multiplyMatrices(t.camera.projectionMatrix,t.camera.matrixWorldInverse));return t.THREE_scene.traverseVisible(H=>{if(!H.isMesh&&!H.isPoints||H.frustumCulled&&H.geometry.boundingSphere!==void 0&&!T.intersectsObject(H))return;let ee=H,oe="";for(;ee&&ee.parent&&!oe;)ee.parent===t.world&&(oe=ee.name||ee.type+(ee.children.length?"["+ee.children.length+"]":"")),ee=ee.parent;let ce=oe+" \xB7 "+(H.isInstancedMesh?"inst ":"")+(H.material.transparent?"trasp ":"")+H.material.type+(H.material.type==="ShaderMaterial"?"":" "+H.geometry.attributes.position.count);E[ce]=(E[ce]||0)+1}),{by:E,parcels:Ee}},screenOf:t.screenOf,views:Object.keys(Ro),resize:t.resize,dispose(){Ae&&Ae(),t.dispose()}}}var Mn={pick:-1.1,place:1.1,beamY:2.2,stroke:.8,toolTop:1.7,toolLow:.9,toolZ:.22,partH:.14};function ha(r,e){let t=new Ce,n=se(t,r.modGrey,0,0,0,.06,.09,.05,.006),i=se(t,r.modDark,0,.055,0,.04,.02,.04,.004),s=new Ce;s.position.set(0,.06,0);let a=e.lever||.07;se(s,r.steel,0,a/2,0,.008,a,.008,.002),gt(s,r.red,0,a,0,.012,.012,"z",12),e.dir&&(s.rotation.z=e.dir),t.add(s);let o=qt(16762394,.009);o.mesh.position.set(0,.015,.027),t.add(o.mesh),[n,i].forEach(c=>{c.userData={id:e.id,kind:"repair"}});let l=null;return{group:t,picks:[n,i],arm:s,set(c){let u=!!(c&&c.sensors&&c.sensors[e.id]&&c.sensors[e.id].act);return u===l?!1:(l=u,o.set(u,3.4),s.rotation.x=u?.35:0,!0)}}}function Dm(r){let e=new Ce,t=new _e({color:14710303,roughness:.45,metalness:.2}),n=-1.45,i=1.45,s=Mn.beamY;[n,i].forEach(m=>{se(e,r.steelDark,m,.015,0,.32,.03,.32,.004),se(e,t,m,s/2,0,.12,s,.12,.01)}),se(e,t,0,s+.08,0,i-n+.12,.16,.16,.012),se(e,r.steel,0,s-.005,.085,i-n-.1,.02,.012,.003),se(e,r.steelDark,0,s+.17,0,i-n-.2,.025,.06,.004);let a=new Ce;a.position.set(Mn.pick,s,.14),se(a,r.modGrey,0,.02,0,.26,.22,.12,.012),se(a,r.modDark,0,.16,-.02,.12,.08,.08,.008);let o=new Ce;a.add(o),gt(o,r.steel,0,.175,.08,.022,1.25,"y",14),se(o,r.modDark,0,-.44,.08,.12,.05,.1,.008);let l=[-1,1].map(m=>se(o,r.steelDark,m*.06,-.5,.08,.02,.12,.06,.004));e.add(a);let c={XP:ha(r,{id:"XP",dir:-Math.PI/2}),XL:ha(r,{id:"XL",dir:Math.PI/2}),ZU:ha(r,{id:"ZU"}),ZD:ha(r,{id:"ZD"})};Object.values(c).forEach(m=>m.group.scale.setScalar(1.6)),c.XP.group.position.set(Mn.pick-.2,s-.12,.2),c.XL.group.position.set(Mn.place+.2,s-.12,.2),c.ZU.group.position.set(.17,.06,.1),c.ZD.group.position.set(.17,-.2,.1),e.add(c.XP.group,c.XL.group),a.add(c.ZU.group,c.ZD.group);let u=Object.values(c).flatMap(m=>m.picks),h=(()=>{let m=document.createElement("canvas");m.width=m.height=64;let x=m.getContext("2d",{willReadFrequently:!0}),g=x.createRadialGradient(32,32,4,32,32,31);g.addColorStop(0,"rgba(0,0,0,0.45)"),g.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=g,x.fillRect(0,0,64,64);let p=new De(new Et(.5,.5).rotateX(-Math.PI/2),new _t({map:new zt(m),transparent:!0,depthWrite:!1}));return p.position.set(Mn.pick,.006,.22),p.renderOrder=1,p})();e.add(h),[a,o].forEach(m=>m.traverse(x=>{x.isMesh&&(x.castShadow=!1)}));let f="",d=(m,x,g)=>{a.position.x=Mn.pick+(Mn.place-Mn.pick)*m,o.position.y=-Mn.stroke*x;let p=.095-.045*g;l[0].position.x=-p,l[1].position.x=p,h.position.x=a.position.x};return d(0,0,0),{group:e,picks:u,sensors:c,skip:[a,h],move(m,x,g){d(m,x,g)},set(m){let x=!1;Object.values(c).forEach(M=>{M.set(m)&&(x=!0)});let g=m&&m.robot||{x:0,z:0,grip:0},p=[g.x,g.z,g.grip].map(M=>Math.round(M*1e3)).join();return p!==f&&(f=p,d(g.x,g.z,g.grip),x=!0),x},tool(m=new F){return m.set(a.position.x,Mn.beamY+o.position.y-.5,.22)}}}var cu=null;function Oy(){if(cu)return cu;let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d",{willReadFrequently:!0});e.clearRect(0,0,64,64),e.fillStyle="#c4c9ce",e.fillRect(0,0,64,7),e.fillRect(0,0,7,64);let t=new zt(r);return t.wrapS=t.wrapT=jt,t.colorSpace=wt,t.anisotropy=4,cu=new _e({map:t,alphaTest:.5,side:un,roughness:.45,metalness:.7}),cu}var Lm=.08;function fa(r,e,t,n,i,s,a){let o=Math.hypot(n-e,i-t),l=a-s,c=new Et(o,l),u=c.attributes.uv;for(let f=0;f<u.count;f++)u.setXY(f,u.getX(f)*o/Lm,u.getY(f)*l/Lm);let h=new De(c,Oy());return h.position.set((e+n)/2,(s+a)/2,(t+i)/2),h.rotation.y=-Math.atan2(i-t,n-e),h.castShadow=!0,h.receiveShadow=!0,r.add(h),h}function Um(r,e={}){let t=e.w||3.2,n=e.d||2.4,i=e.h||2,s=e.doorW||.9,a=e.doorFrom===void 0?.6:e.doorFrom,o=new Ce,l=-t/2,c=t/2,u=-n/2,h=n/2,f=.1,d=i-.06,m=l+a,x=m+s;fa(o,l,u,c,u,f,d),fa(o,l,u,l,h,f,d),fa(o,c,u,c,h,f,d),fa(o,l,h,m,h,f,d),fa(o,x,h,c,h,f,d);let g=(R,O)=>{se(o,r.yellow,R,i/2,O,.05,i,.05,.006),se(o,r.steelDark,R,.008,O,.12,.016,.12,.003)};[[l,u],[c,u],[l,h],[c,h],[0,u],[m,h],[x,h],[l,0],[c,0]].forEach(([R,O])=>g(R,O));let p=(R,O,G,W,J,Y)=>se(o,r.yellow,(R+G)/2,J,(O+W)/2,Math.max(Y,Math.abs(G-R)),Y,Math.max(Y,Math.abs(W-O)),.004);p(l,u,c,u,i-.03,.04),p(l,u,l,h,i-.03,.04),p(c,u,c,h,i-.03,.04),p(l,h,m,h,i-.03,.04),p(x,h,c,h,i-.03,.04),p(l,u,c,u,f-.02,.03),p(l,u,l,h,f-.02,.03),p(c,u,c,h,f-.02,.03),p(l,h,m,h,f-.02,.03),p(x,h,c,h,f-.02,.03);let M=new Ce;M.position.set(m+.03,0,h);let y=s-.06,_=[],D=R=>(R.userData={id:"P",kind:"toggle"},_.push(R),R);D(fa(M,.02,0,y-.02,0,f+.02,d-.02)),[[.015,i/2,.03,i-.08],[y-.015,i/2,.03,i-.08]].forEach(([R,O,G,W])=>D(se(M,r.yellow,R,O,0,G,W,.03,.004))),[[f,.03],[i-.07,.03],[i/2,.025]].forEach(([R,O])=>D(se(M,r.yellow,y/2,R,0,y,O,.03,.004))),[.35,i-.4].forEach(R=>gt(M,r.steelDark,0,R,0,.018,.12,"y",12)),se(M,r.steelDark,y-.08,1.05,.04,.03,.14,.03,.006),se(M,r.modDark,y-.02,1.25,.02,.03,.05,.03,.004),o.add(M);let L=new Ce;L.position.set(x-.005,1.25,h+.045),se(L,r.yellow,0,0,0,.05,.11,.04,.006),se(L,r.modDark,0,-.035,.021,.04,.03,.004,.002);let P=qt(3073642,.008);P.mesh.position.set(0,.035,.022),L.add(P.mesh),o.add(L),tn(o,"Portella",m+s/2,i+.08,h,.4,.07,{bg:"#17181a",fg:"#f5c400",size:.62,dim:16777215});let C=-1,S=null;function w(R){C=R,M.rotation.y=-1.7*R}return w(0),{group:o,picks:_,skip:[M],hinge:[m+.03,h],switchAt:[x-.005,1.25,h+.045],doorTo:w,set(R){let O=!!R.door;return O===S?!1:(S=O,w(O?1:0),P.set(!O,3.2),!0)}}}function Nm(r){let e=new Ce,t=.12,n=.17;se(e,r.yellow,0,0,0,t,n,.08,.01),se(e,r.modDark,0,.012,.042,t-.02,.07,.004,.003),se(e,r.modDark,0,n/2-.012,.03,t-.01,.022,.03,.003),se(e,r.modDark,0,-n/2+.012,.03,t-.01,.022,.03,.003),tn(e,"KS",0,-.044,.045,.08,.026,{fg:"#17181a",size:.8,dim:16777215});let i=[["ALIM",3073642],["CH1",3073642],["CH2",3073642],["OUT",3073642],["RIARMO",16757018]],s=new $t(new Tt(.016,.009,.006),new _t({color:16777215}),i.length),a=new Je,o=new Be,l=[[0,.036],[-.024,.014],[.024,.014],[-.024,-.008],[.024,-.008]];i.forEach((u,h)=>{a.makeTranslation(l[h][0],l[h][1],.046),s.setMatrixAt(h,a),s.setColorAt(h,o.setHex(1711135))}),s.castShadow=!1,e.add(s);let c="";return{group:e,picks:[],leds:s,set(u){let h=!u.emergency,f=!u.door,d={ALIM:!!u.supply,CH1:!!u.supply&&h,CH2:!!u.supply&&f,OUT:!!u.ks,RIARMO:!!u.supply&&h&&f&&!u.ks},m=i.map(([x])=>d[x]?1:0).join("");return m===c?!1:(c=m,i.forEach(([x,g],p)=>s.setColorAt(p,d[x]?o.setHex(g).multiplyScalar(2.2):o.setHex(1711135))),s.instanceColor.needsUpdate=!0,!0)}}}function Fm(r){let e=new Ce,t=1.35;gt(e,r.steelDark,0,.015,0,.18,.03,"y",24),gt(e,r.steel,0,(t-.12)/2,0,.035,t-.12,"y",14);let n=new Ce;n.position.set(0,t,0),n.rotation.x=-.32;let i=se(n,r.modDark,0,0,0,.46,.32,.06,.012),s=(()=>{let h=document.createElement("canvas");h.width=192,h.height=128;let f=h.getContext("2d",{willReadFrequently:!0});f.fillStyle="#2a3442",f.fillRect(0,0,192,128),f.fillStyle="#c8d6e6",f.fillRect(0,0,192,14),f.fillStyle="#7d8fa6",[[8,22,84,44],[100,22,84,44],[8,74,176,46]].forEach(([m,x,g,p])=>f.fillRect(m,x,g,p)),f.fillStyle="#e8f0f8",[[14,30,40,10],[106,30,56,10]].forEach(([m,x,g,p])=>f.fillRect(m,x,g,p)),f.strokeStyle="#ffffff",f.lineWidth=3,f.beginPath(),[0,18,10,26,22,34,28,30,36].forEach((m,x)=>x?f.lineTo(14+x*20,110-m):f.moveTo(14,110-m)),f.stroke();let d=new zt(h);return d.colorSpace=wt,d})(),a=new _e({color:724498,emissive:10474751,emissiveMap:s,emissiveIntensity:0,roughness:.25}),o=new De(new Et(.38,.24),a);o.position.z=.031,o.castShadow=!1,n.add(o);let l=qt(3073642,.006);l.mesh.position.set(.2,-.14,.032),n.add(l.mesh),se(e,r.modDark,0,t-.18,-.02,.1,.06,.06,.008),e.add(n),i.userData=o.userData={id:"HMI",kind:"toggle"};let c=[i,o],u="";return{group:e,picks:c,screenAt:[0,t,.03],set(h){let f=h.supply===void 0?!0:!!h.supply,d=!!(f&&h.panelOn&&h.hmi&&h.hmi.link),m=d&&!!h.hmi.horn,x=`${f}${!!h.panelOn}${d}${m}`;return x===u?!1:(u=x,d?(a.emissive.setHex(m?16752704:7321855),a.emissiveIntensity=1.1):f&&h.panelOn?(a.emissive.setHex(9080985),a.emissiveIntensity=.18):a.emissiveIntensity=0,l.set(f&&!!h.panelOn,3),!0)}}}var Bt={x:6,z:3.4},tr={x:6.4,z:5.5},ss={x:4,z:5.3},is={x:3.2,y:1.28},rs={x:2.82,y:1.28},Po=[3.43,2.14,.13],Co=.21,Io=[Bt.x-1.3,2.08,Bt.z+.2],Do=[Bt.x+1.3,2.08,Bt.z+.2],Lo=[Bt.x,2.42,Bt.z],er=[Bt.x-1.1+.32,.95,Bt.z+.22],Uo=[Bt.x-.105,1.25,Bt.z+1.245],ky={st:[tr.x,tr.z-.1],door:[Uo[0],Uo[2]],xp:[Io[0],Io[2]],xl:[Do[0],Do[2]],beam:[Lo[0],Lo[2]],pr:[er[0],er[2]]},uu=(r,e,t,n)=>Object.fromEntries(t.map((i,s)=>[i,[r+(s-(t.length-1)/2)*n,e]])),kf={A1:[2.88,1.86],A2:[3.12,1.86],1:[2.95,2],2:[2.95,1.68],13:[2.88,1.76],14:[3.12,1.76],21:[3.05,2],22:[3.05,1.68]},zf={...uu(is.x,is.y+.08,["A1","S12","S22","R","13","23"],.018),...uu(is.x,is.y-.08,["A2","14","24"],.03)},Bf={...uu(rs.x,rs.y+.08,["A1","A2","IC","I0","I1","I2","I3","I4","I5","I6","I7"],.03),...uu(rs.x,rs.y-.08,["Q0A","Q0B","Q1A","Q1B","Q2A","Q2B","Q3A","Q3B"],.04)},Om={SB1:1.75,SB0:1.75,E:1.5,SBR:1.62,HC:1.98},zy={SB1:-.09,SB0:.09,E:0,SBR:.16,HC:0};function km(r){let[e,t]=r.split("."),n={1:-.012,3:-.012,X1:-.012,A:-.012,2:.012,4:.012,X2:.012,B:.012}[t];if(e==="Q"){let i=["F","N","PE"].indexOf(t);return i<0?null:{p:[2.6+i*.07,2.16,Co],zone:"cab"}}return e==="KM"&&kf[t]?{p:[kf[t][0],kf[t][1],Co],zone:"cab"}:e==="KS"&&zf[t]?{p:[zf[t][0],zf[t][1],Co],zone:"cab"}:e==="PLC"&&Bf[t]?{p:[Bf[t][0],Bf[t][1],Co],zone:"cab"}:e==="L"&&n!==void 0?{p:[Po[0]+n,Po[1],Po[2]+.05],zone:"cab"}:Om[e]!==void 0&&n!==void 0?{p:[tr.x+zy[e]+n,Om[e],tr.z-.1],zone:"st"}:e==="P"&&n!==void 0?{p:[Uo[0]+n,Uo[1]+(t>"2"?-.03:.03),Uo[2]-.02],zone:"door"}:n===void 0?null:e==="XP"?{p:[Io[0]+n,Io[1]+.05,Io[2]],zone:"xp"}:e==="XL"?{p:[Do[0]+n,Do[1]+.05,Do[2]],zone:"xl"}:e==="ZU"||e==="ZD"?{p:[Lo[0]+n+(e==="ZD"?.05:0),Lo[1],Lo[2]],zone:"beam"}:e==="PR"?{p:[er[0]+n,er[1]+.06,er[2]],zone:"pr"}:null}function Hf(r,e,t){let[n,i]=ky[r.zone];return[[n+e,t,.4+e],[n+e,t,i+e*.5],[r.p[0],t,i+e*.5],r.p]}function By(r,e,t=0){let n=km(r),i=km(e);if(!n||!i)return null;let s=(t%11-5)*.018,a=Co+.03+Math.abs(s)*.5,o=3.05+s*.3;if(n.zone==="cab"&&i.zone==="cab"){let h=Math.min(n.p[1],i.p[1])-.05-t%5*.02;return[n.p,[n.p[0],n.p[1],a],[n.p[0],h,a],[i.p[0],h,a],[i.p[0],i.p[1],a],i.p]}if(n.zone!=="cab"&&i.zone!=="cab"){if(n.zone===i.zone){let h=Math.max(n.p[1],i.p[1])+.06+t%3*.02;return[n.p,[n.p[0],h,n.p[2]-.03],[i.p[0],h,i.p[2]-.03],i.p]}return[...Hf(n,s,o).reverse(),...Hf(i,s,o)]}let[l,c]=n.zone==="cab"?[n,i]:[i,n],u=[l.p,[l.p[0],l.p[1],a],[l.p[0],o,a],[l.p[0],o,.4+s],...Hf(c,s,o)];return n.zone==="cab"?u:u.reverse()}function zm(r,e){let t=[];return(r||[]).forEach((n,i)=>{let s=By(n.a,n.b,i);if(!s)return;let a=e&&e.wires&&e.wires[n.id]||{},o=!!a.current;t.push({id:String(n.id)+":"+n.a+"-"+n.b,pts:s,color:n.c,live:a.net==="fase"||a.net==="neutro"&&o,current:o})}),t}var Bm=500,Hm=5,os={w:.16,h:Mn.partH,d:.16},as=Mn.toolLow-os.h/2,No={x:Bt.x+Mn.pick,z0:Bt.z-1.05,z1:Bt.z+Mn.toolZ+.12},Gf={x:Bt.x+Mn.place,z0:Bt.z-1.05,z1:Bt.z+Mn.toolZ+.12},hu=Bt.z+Mn.toolZ,Fo=3,Oo={insieme:{tx:6,ty:0,tz:4.8,yaw:14,pitch:32,dist:13},cella:{tx:5.8,ty:.35,tz:3.9,yaw:-16,pitch:22,dist:6.8},quadro:{tx:3,ty:1.15,tz:.4,yaw:4,pitch:4,dist:3},pannello:{tx:ss.x-.1,ty:.95,tz:ss.z,yaw:-14,pitch:8,dist:2.3},esterno:{tx:.4,ty:1.5,tz:6.2,yaw:-78,pitch:7,dist:9.5},turno:{tx:6,ty:1,tz:3.6,yaw:26,pitch:34,dist:11}};function Gm(r,e){let t=null,n=A=>{A&&A.id==="HMI"&&t&&t.panelOn||e.onTap&&e.onTap(A)},i=la(r,{bg:wo.bg,exposure:1.25,view:Oo.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[1.5,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:n,onPress:e.onPress,onRelease:e.onRelease});if(!i)return null;let{world:s,pick:a}=i,o=Ri(),l=ua(i,o,{...wo,reduced:e.reduced});l.mood();let c=new Ce;c.position.set(Bt.x,0,Bt.z),s.add(c);let u=Um(o);c.add(u.group),u.picks.forEach(A=>a.push(A));let h=Dm(o);c.add(h.group),h.picks.forEach(A=>a.push(A));let f=ha(o,{id:"PR",lever:.06,dir:Math.PI/2});f.group.scale.setScalar(1.6),f.group.position.set(er[0],er[1]-.05,er[2]),s.add(f.group),f.picks.forEach(A=>a.push(A));let d=[No,Gf].map(A=>{let qe=ia(o,{x0:0,x1:A.z1-A.z0,h:as,w:.34});return qe.group.rotation.y=-Math.PI/2,qe.group.position.set(A.x,0,A.z0),s.add(qe.group),qe});o.beltTex.repeat.set(2,1),se(s,o.yellow,Bt.x+1,2.08,Bt.z+1.21,.5,.12,.02,.004);let m=sa(o);m.group.position.set(tr.x,0,tr.z),m.group.scale.setScalar(1.25),s.add(m.group),m.picks.forEach(A=>{A.userData.id==="SBE"&&(A.userData={id:"E",kind:"toggle"})});let x=new Ce;x.position.set(.128,1.29,.07),gt(x,o.modDark,0,0,0,.032,.014,"z",24);let g=gt(x,o.modBlue,0,0,.012,.024,.022,"z",24);g.userData={id:"SBR",kind:"hold",hold:!0},m.group.add(x),se(m.group,o.yellow,.128,1.29,0,.08,.08,.1,.008),m.picks.push(g),m.picks.forEach(A=>a.push(A));let p=qt(16777215,.028);p.mat.color.setHex(3815994),p.mat.emissive.setHex(16774084),p.mesh.position.set(0,1.56,0),m.group.add(p.mesh);let M=ra(o,1.45);M.group.position.set(Bt.x+1.85,0,Bt.z-1.25),s.add(M.group);let y=Fm(o);y.group.position.set(ss.x,0,ss.z),s.add(y.group),y.picks.forEach(A=>a.push(A));let _=aa(o,{qm:"Interruttore",thermal:!1});_.group.position.set(3,1.5,.07),s.add(_.group),_.picks.forEach(A=>a.push(A));let D=eu(o,{wide:!0});D.group.position.set(rs.x-3,rs.y-1.5,.05),D.group.scale.setScalar(.7),_.group.add(D.group);let L=Nm(o);L.group.position.set(is.x-3,is.y-1.5,.05),_.group.add(L.group);let P=qt(3073642,.02);P.mesh.position.set(...Po),s.add(P.mesh);let C=new _e({color:4157360,metalness:.6,roughness:.35}),S=new $t(new Tt(os.w,os.h,os.d),C,2+Fo),w=(()=>{let A=document.createElement("canvas");A.width=A.height=64;let qe=A.getContext("2d",{willReadFrequently:!0}),Fe=qe.createRadialGradient(32,32,4,32,32,31);return Fe.addColorStop(0,"rgba(0,0,0,0.5)"),Fe.addColorStop(1,"rgba(0,0,0,0)"),qe.fillStyle=Fe,qe.fillRect(0,0,64,64),new zt(A)})(),R=new $t(new Et(.26,.26).rotateX(-Math.PI/2),new _t({map:w,transparent:!0,depthWrite:!1}),2+Fo);R.renderOrder=1,[S,R].forEach(A=>{A.castShadow=!1,A.frustumCulled=!1}),s.add(S,R);let O=new Je,G=new F,W=new F,J=new Je().makeScale(1e-4,1e-4,1e-4),Y=(A,qe,Fe,ke,Te)=>{S.setMatrixAt(A,O.makeTranslation(qe,Fe,ke)),R.setMatrixAt(A,Te===null?J:O.makeTranslation(qe,Te,ke))},he=A=>{S.setMatrixAt(A,J),R.setMatrixAt(A,J)},j=$s({add:A=>s.add(A),redraw:i.redraw,reduced:e.reduced,loop:A=>{let qe=i.loop(()=>{A()===!1&&qe()})}});i.label("Cella del robot",Bt.x,2.5,Bt.z,"room"),i.label("Quadro",3,2.3,.3,"room"),i.label("Pulsantiera",tr.x,2.25,tr.z,"room"),i.label("Pannello",ss.x,1.85,ss.z,"room");let Q={from:{x:0,z:0,grip:0,wait:0},to:{x:0,z:0,grip:0,wait:0},cur:{x:0,z:0,grip:0,wait:0},t0:0},ge=[],Ee=null,Ge=0,Ye=!1,te=!1;function de(A){let qe=Math.min(1,(A-Q.t0)/Bm);["x","z","grip","wait"].forEach(ke=>{Q.cur[ke]=Q.from[ke]+(Q.to[ke]-Q.from[ke])*qe}),h.move(Q.cur.x,Q.cur.z,Q.cur.grip);let Fe=t;if(Fe&&Fe.robot.holding?(h.tool(W),c.localToWorld(W),Y(1,W.x,W.y,W.z,null)):he(1),Fe&&Fe.robot.feed&&!Fe.robot.holding)Y(0,No.x,as+os.h/2,hu,as+.003);else if(Fe&&!Fe.robot.holding&&Q.cur.wait>0){let ke=Math.min(1,Q.cur.wait/Hm);Y(0,No.x,as+os.h/2,No.z0+.1+(hu-No.z0-.1)*ke,as+.003)}else he(0);for(let ke=0;ke<Fo;ke++){let Te=ge[ke];if(Te===void 0){he(2+ke);continue}let V=(A-Te)/2600;if(V>=1){ge.splice(ke,1),ke--;continue}Y(2+ke,Gf.x,as+os.h/2,hu-(hu-Gf.z0-.08)*V,as+.003)}for(let ke=ge.length;ke<Fo;ke++)he(2+ke);return S.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,qe<1}function fe(){Ee||(Ee=i.loop((A,qe)=>{let Fe=performance.now(),ke=de(Fe);te&&d.forEach(V=>V.run(.4,qe));let Te=Fe<Ge;Te?M.set({red:Math.floor(A/300)%2===0,yellow:!1,green:!1}):M._alarm&&(M._alarm=!1,xe()),Te&&(M._alarm=!0),!ke&&!te&&!Te&&!ge.length&&(Ee(),Ee=null)}))}function xe(){let A=t;if(!A)return;if(Ye){M.set({green:!0});return}let qe=!!(A.hmi&&A.hmi.alarms&&A.hmi.alarms.some(Fe=>Fe.state==="attivo"));M.set({green:A.cycle&&A.powered,yellow:!A.ks&&A.supply,red:qe})}i.finish([...u.skip,...h.skip,l.shutter,S,R]);let Ae=A=>{if(typeof A=="object")return{...A};let qe={...Oo[A]||Oo.insieme};return i.camera.aspect<.9&&(A==="insieme"||A==="turno"||!Oo[A])&&(qe.dist=10.5,qe.yaw=18),i.camera.aspect<.9&&A==="cella"&&Object.assign(qe,{ty:1,pitch:18,dist:12}),i.camera.aspect<.9&&A==="esterno"&&(qe.dist=13),qe};i.camera.aspect<.9&&i.look(Ae("insieme"),1);let Qe=!0,Le="",rt="",$e=null,Oe=r.querySelector("canvas");return{update(A){if(!A)return;let qe=t;t=A;let Fe=A.robot,ke=!Fe.feed&&!Fe.holding&&A.powered&&qe?Math.min(Hm,Q.to.wait+2):0,Te={x:Fe.x,z:Fe.z,grip:Fe.grip,wait:ke},V=performance.now(),ae=["x","z","grip","wait"].some(H=>Math.abs(Te[H]-Q.to[H])>1e-4);if(ae&&(de(V),Q.from={...Q.cur},Q.to=Te,Q.t0=e.reduced?V-Bm:V,qe||(Q.from={...Te},Q.cur={...Te})),$e!==null&&Fe.out>$e)for(let H=$e;H<Fe.out&&ge.length<Fo;H++)ge.push(V);$e=Fe.out,te=!!(A.cycle&&A.powered)&&!(A.shift&&A.shift.done)&&!Ye;let E=ae||ge.length>0;if(u.set(A)){E=!0;let H=A.door?1:0,ee=1-H;!qe||e.reduced?(u.doorTo(H),i.moved()):i.animate(700,oe=>{u.doorTo(ee+(H-ee)*oe*oe*(3-2*oe)),i.moved()})}h.set({sensors:A.sensors,robot:Q.to})&&(E=!0),h.move(Q.cur.x,Q.cur.z,Q.cur.grip),f.set(A)&&(E=!0),L.set(A)&&(E=!0),y.set(A)&&(E=!0),D.set(A.plc)&&(E=!0),m.set(A),g.position.z=A.reset?.004:.012,_.set({qm:A.supply,contactor:A.contactor,thermal:{tripped:!1}}),P.set(!!A.powered,3.2),p.set(!!A.cycle||Ye,3.2),M._alarm||xe();let T=[A.cycle,A.powered,A.ks,A.door,A.emergency,A.start,A.stop,A.reset,A.contactor,A.panelOn,A.hmi&&A.hmi.link,A.hmi&&A.hmi.alarms&&A.hmi.alarms.map(H=>H.state).join("")].join();if(T!==rt&&(rt=T,E=!0),A.wires){let H=zm(A.wires,A.flow).map(oe=>({...oe,current:oe.current&&te})),ee=H.map(oe=>oe.id+(oe.live?"+":"-")+(oe.current?">":"")).join();ee!==Le&&(Le=ee,j.sync(H,!Qe),Qe=!1)}(ae||te||ge.length)&&fe(),E&&i.redraw(),Oe&&Oe.setAttribute("aria-label",["Cella del robot, di notte.",te?"Il robot lavora.":"Il robot \xE8 fermo.",A.powered?"Il robot ha potenza.":"Il robot \xE8 senza potenza.",A.door?"La portella \xE8 aperta.":"",A.emergency?"L\u2019emergenza \xE8 premuta.":"",A.panelOn?"":"Il cavo del pannello \xE8 staccato.",Fe.holding?"Il robot tiene un pezzo.":""].filter(Boolean).join(" "))},look(A,qe){i.look(Ae(A),qe)},outside(){l.setShutter(0),l.rows.forEach(A=>l.setRow(A,0)),l.mood(),i.look(Ae("esterno"),1)},inside(){l.setShutter(1),l.rows.forEach((A,qe)=>l.setRow(A,wo.rowsOn.includes(qe)?1:0)),l.mood()},arrival(){return l.shutterTo(!0,1600),setTimeout(()=>l.lampsOn(),e.reduced?0:1500),setTimeout(()=>i.look(Ae("insieme"),2200),e.reduced?0:1800),e.reduced?0:4100},alert(A=2600){Ge=performance.now()+(e.reduced?0:A),M._alarm=!0,fe(),i.redraw()},shift(A){Ye=!!A,l.rows.forEach((qe,Fe)=>l.setRow(qe,A||wo.rowsOn.includes(Fe)?1:0)),l.mood(),A&&(te=!1),M._alarm=!1,xe(),p.set(A||!!(t&&t.cycle),3.2),i.redraw()},wires:()=>j,stats(){let A=0;return i.THREE_scene.traverseVisible(qe=>{(qe.isMesh||qe.isPoints)&&A++}),{meshes:A}},screenOf:i.screenOf,views:Object.keys(Oo),resize:i.resize,dispose(){Ee&&Ee(),i.dispose()}}}function fu(r,e){let t=document.createElement("canvas");return t.width=r,t.height=e,{c:t,g:t.getContext("2d",{willReadFrequently:!0})}}var da=1e-4;function Hy(r,e,t=.5){let{c:n,g:i}=fu(64,64),s=i.createRadialGradient(32,32,4,32,32,31);s.addColorStop(0,`rgba(0,0,0,${t})`),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);let a=new De(new Et(r,e).rotateX(-Math.PI/2),new _t({map:new zt(n),transparent:!0,depthWrite:!1}));return a.position.y=.012,a.renderOrder=1,a.castShadow=!1,a}function Gy(){let{c:r,g:e}=fu(128,192);e.fillStyle="#c9ced3",e.fillRect(0,0,128,192),e.fillStyle="#14233f",e.fillRect(5,5,118,182);for(let n=0;n<6;n++)for(let i=0;i<10;i++)e.fillStyle=(n+i)%2?"#1b2f55":"#18294b",e.fillRect(7+n*19.2,7+i*17.8,18,16.6);e.fillStyle="rgba(200,210,225,0.5)";for(let n=1;n<6;n++)e.fillRect(6+n*19.2,6,1,180);let t=new zt(r);return t.colorSpace=wt,t.anisotropy=4,t}function Vm(r,e){let s=e.w+.45,a=e.d+.45,o=(e.d+2*.45)/2,l=Math.hypot(o,2.3),c=Math.atan2(2.3,o),u=1,h=1.6,f=.05,d=.3,m=[];[[.35,1],[.35+h+.12,1]].forEach(([P])=>{let C=(P+h)/l,S=-.45+C*o+d,w=s-C*o-d,R=Math.floor((w-S+f)/(u+f)),O=(S+w)/2-(R*(u+f)-f)/2+u/2,G=P+h/2,W=G/l;for(let J=0;J<R;J++)m.push([O+J*(u+f),W*2.3+.05,a-W*o+.03])});let x=new _e({map:Gy(),roughness:.22,metalness:.35,emissive:2772890,emissiveIntensity:0}),g=new Tt(u,.04,h),p=new $t(g,x,m.length),M=new Je,y=new mn().setFromAxisAngle(new F(1,0,0),c),_=new F(1,1,1);m.forEach(([P,C,S],w)=>p.setMatrixAt(w,M.compose(new F(P,C,S),y,_))),p.castShadow=!0,p.receiveShadow=!0;let D=new Ce;D.add(p);let L=-1;return{group:D,picks:[],count:m.length,skip:[p],set(P){let C=P&&P.kw&&P.kw.pv||0,S=Math.round(Math.min(1,C/(e.peak||3))*10)/10;return S===L?!1:(L=S,x.emissiveIntensity=.35*S,!0)}}}function Wm(r){let e=new Ce;se(e,r.modWhite,-.38,.95,.1,.62,1.05,.2,.03),se(e,r.modDark,-.38,.95,.205,.1,.82,.01,.004);let t=new _e({color:1924659,emissive:3793018,emissiveIntensity:1.6,roughness:.4}),n=.78,i=new De(new Tt(.07,n,.012).translate(0,n/2,0),t);i.position.set(-.38,.95-n/2,.209),i.castShadow=!1,e.add(i);let s=qt(3793018,.018);s.mesh.position.set(-.38,1.42,.21),e.add(s.mesh),se(e,r.cabinet,.32,1.05,.09,.46,.58,.18,.02),se(e,r.modDark,.32,1.17,.185,.26,.12,.01,.004);let a=qt(3793018,.014);a.mesh.position.set(.24,1.17,.193),e.add(a.mesh),se(e,r.modGrey,0,.32,.04,.06,.64,.06,.01);let o="";return{group:e,picks:[],skip:[i],set(l){let c=Math.max(0,Math.min(100,l&&l.soc||0)),u=l&&l.kw&&l.kw.batt||0,h=(l&&l.kw&&l.kw.pv||0)>.05&&!!(l&&l.powered),f=!l||!l.powered?0:u>.05?1:u<-.05?-1:0,d=Math.round(c)+"|"+f+"|"+h;return d===o?!1:(o=d,i.scale.y=Math.max(da,c/100),t.emissive.setHex(c<15?16742954:3793018),s.mat.emissive.setHex(f<0?16756778:3793018),s.set(f!==0,3),a.set(h,3),!0)}}}function Xm(r){let e=new Ce,t=new _e({color:9183012,roughness:.32,metalness:.55}),n=new _e({color:1712168,roughness:.08,metalness:.7}),i=new _e({color:1315860,roughness:.85}),s=[],a=(m,x,g,p,M)=>{m.translate(g,p,M),s.push([m,x])},o=(m,x,g)=>new Tt(m,x,g),l=(m,x,g)=>{let p=o(m,x,g),M=p.attributes.position;for(let y=0;y<M.count;y++)M.getY(y)>0&&(M.setX(y,M.getX(y)*.9),M.setZ(y,M.getZ(y)*.62));return p};a(o(1.78,.55,4.2),t,0,.55,0),a(l(1.6,.52,2.5),n,0,1.08,.2),a(o(1.42,.05,1.5),t,0,1.35,.2),[-1,1].forEach(m=>a(o(.06,.5,.08),t,m*.75,1.08,.2)),[[-.82,-1.35],[.82,-1.35],[-.82,1.35],[.82,1.35]].forEach(([m,x])=>a(new gn(.33,.33,.24,18).rotateZ(Math.PI/2),i,m,.33,x));let c=new Map;s.forEach(([m,x])=>{c.has(x)||c.set(x,[]),c.get(x).push(m.toNonIndexed())}),c.forEach((m,x)=>{let g=new De(Jr(m,!1),x);g.castShadow=!1,g.receiveShadow=!0,e.add(g)});let u=new _e({color:14673646,emissive:16774364,emissiveIntensity:0,roughness:.2}),h=new _e({color:5902352,emissive:16722458,emissiveIntensity:0,roughness:.3}),f=(m,x,g)=>Jr([-.6,.6].map(p=>new Tt(.34,m,.03).translate(p,x,g)),!1);e.add(new De(f(.12,.66,-2.1),u),new De(f(.1,.7,2.1),h));let d=Hy(2.5,4.9,.6);return e.add(d),{group:e,picks:[],skip:[e],port:new F(.9,.78,-.75),lights(m){u.emissiveIntensity=m?2.2:0,h.emissiveIntensity=m?1.6:0}}}function qm(r,e){let t=new Ce;se(t,r.modDark,0,1.1,.07,.32,.44,.14,.04),se(t,r.modGrey,0,1.1,.142,.26,.36,.006,.02);let n=new _e({color:2240576,emissive:3793018,emissiveIntensity:0,roughness:.3}),i=new De(new _i(.065,.012,10,32),n);i.position.set(0,1.16,.148),i.castShadow=!1,t.add(i),se(t,r.modGrey,.2,.95,.06,.06,.12,.08,.01);let s=new F(0,.88,.1),a=e.port.clone(),o=new Fs([s,new F(s.x+(a.x-s.x)*.25,.3,s.z+(a.z-s.z)*.3),new F(s.x+(a.x-s.x)*.7,.22,s.z+(a.z-s.z)*.7),a]),l=new _e({color:1382170,roughness:.55}),c=new De(new Vi(o,40,.014,6),l);c.castShadow=!1;let u=new Ce;u.add(c),t.add(u);let h=new _t({color:6273279,transparent:!0,opacity:0,depthWrite:!1,blending:Jn}),f=new $t(new xn(.026,10,8),h,3);f.castShadow=!1,f.frustumCulled=!1,u.add(f);let d=new F,m=new Je,x=p=>{for(let M=0;M<3;M++)o.getPointAt((p/1400+M/3)%1,d),f.setMatrixAt(M,m.makeTranslation(d.x,d.y,d.z));f.instanceMatrix.needsUpdate=!0};x(0),u.scale.setScalar(da);let g="";return{group:t,picks:[],skip:[u,i],set(p){let M=p&&p.ev||{},_=!!(p&&p.powered)?M.charging?"charge":M.plugged?"plug":"free":"off",D=_+"|"+!!M.plugged;return D===g?!1:(g=D,u.scale.setScalar(M.plugged?1:da),n.emissive.setHex(_==="charge"?3837183:_==="plug"?15791359:3793018),n.emissiveIntensity=_==="off"?0:_==="free"?.8:2.4,h.opacity=_==="charge"?.9:0,!0)},charging(){return g.startsWith("charge")},pulse(p){x(p),n.emissiveIntensity=1.6+.9*Math.sin(p/220)}}}function jm(r){let e=new Ce;se(e,r.modWhite,0,.42,0,1,.72,.38,.03),se(e,r.modDark,-.14,.43,.192,.6,.6,.01,.01);let t=new De(new _i(.27,.012,8,40),r.steelDark);t.position.set(-.14,.43,.222),e.add(t),[-.18,-.09,0,.09,.18].forEach(o=>se(e,r.steelDark,-.14,.43+o,.226,.54,.008,.008,.002)),[-.4,.4].forEach(o=>se(e,r.modGrey,o,.03,0,.08,.06,.4,.01)),gt(e,r.steel,.42,.25,-.24,.018,.12,"z",10),gt(e,r.steel,.42,.33,-.24,.014,.12,"z",10);let n=[];for(let o=0;o<3;o++){let l=new Tt(.1,.24,.012).translate(0,.13,0).rotateY(.35).rotateZ(o*Math.PI*2/3);n.push(l.toNonIndexed())}n.push(new gn(.045,.045,.04,16).rotateX(Math.PI/2).toNonIndexed()),n.forEach(o=>{o.attributes.uv||o.setAttribute("uv",new Mt(new Float32Array(o.attributes.position.count*2),2))});let i=new De(Jr(n,!1),r.modGrey);i.position.set(-.14,.43,.206),i.castShadow=!1,e.add(i);let s=qt(3793018,.016);s.mesh.position.set(.34,.66,.195),e.add(s.mesh);let a="";return{group:e,picks:[],skip:[i],set(o){let l=o&&o.hp||{},c=(l.on?1:0)+"|"+(l.broken?1:0);return c===a?!1:(a=c,s.mat.emissive.setHex(l.broken?16726570:3793018),s.set(!!l.on||!!l.broken,3.2),!0)},running(){return a==="1|0"},spin(o){i.rotation.z-=o*.014}}}function Vf(r,e={}){let t=new Ce;se(t,r.modWhite,0,0,0,.2,.2,.03,.02);let{c:n,g:i}=fu(128,96),s=new zt(n);s.colorSpace=wt;let a=new De(new Et(.16,.12),new _t({map:s,color:14540253}));a.position.set(0,.005,.017),t.add(a);let o="",l=(c,u,h)=>{i.fillStyle="#0f1a24",i.fillRect(0,0,128,96),i.fillStyle=h?"#9fd4ff":"#e9f2ff",i.font="600 50px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(c===null?"--":c+"\xB0",64,42),i.font="600 17px system-ui, sans-serif",i.fillStyle=h?"#9fd4ff":u?"#ffad4a":"#5d6b78",i.fillText(h?"finestra":u?"scalda":e.name||"",64,80),s.needsUpdate=!0};return l(null,!1,!1),{group:t,picks:[],set(c,u){let h=c&&typeof c.T=="number"?Math.round(c.T):null,f=!!(c&&c.valve>.5),d=!!(c&&c.window),m=u?h+"|"+f+"|"+d:"off";return m===o?!1:(o=m,u&&l(h,f,d),a.material.color.setHex(u?14540253:1118481),!0)}}}function Wf(r,e=.9){let t=new Ce,n=new _e({color:15921644,roughness:.4,emissive:16738858,emissiveIntensity:0}),i=Math.round(e/.08);for(let a=0;a<i;a++)se(t,n,-e/2+.04+a*.08,.42,.04,.06,.52,.06,.012);se(t,n,0,.7,.04,e,.03,.05,.01),se(t,n,0,.15,.04,e,.03,.05,.01);let s=-1;return{group:t,picks:[],mat:n,set(a){let o=Math.round(Math.max(0,Math.min(1,a))*4)/4;return o===s?!1:(s=o,n.emissiveIntensity=.22*o,!0)}}}function Ym(r){let e=new Ce,t=se(e,r.modWhite,0,.02,0,.1,.04,.07,.01),n=se(e,r.steel,0,.004,0,.07,.008,.04,.002),i=qt(16726570,.008);i.mesh.position.set(.03,.043,.02),e.add(i.mesh),se(e,r.modGrey,0,.3,-.06,.012,.6,.012,.003);let s=new _e({color:3108776,roughness:.03,metalness:.3,transparent:!0,opacity:.78,depthWrite:!1}),a=new De(new ka(.55,40).rotateX(-Math.PI/2),s);a.position.set(.1,.006,.25),a.scale.setScalar(da),a.renderOrder=1,a.castShadow=!1,e.add(a);let o=new De(new xn(.35,10,8),new _t({visible:!1}));o.position.set(0,.1,.1),e.add(o),[t,n,o].forEach(c=>{c.userData={id:"S2",kind:"toggle"}});let l=null;return{group:e,picks:[t,n,o],skip:[a],set(c){let u=!!(c&&c.flood&&c.flood.wet);return u===l?!1:(l=u,i.set(u&&!!(c&&c.powered),3),!0)},grow(c){a.scale.set(Math.max(da,c),1,Math.max(da,c))}}}function Zm(r){let e=new Ce;se(e,r.modWhite,0,0,0,.2,.26,.08,.03);let t=new _e({color:6951952,emissive:16722458,emissiveIntensity:0,roughness:.25}),n=gt(e,t,0,.04,.05,.06,.03,"z",24);n.castShadow=!1,[-.03,0,.03].forEach(a=>se(e,r.modDark,a,-.07,.042,.012,.05,.006,.002));let i=new an(16722458,0,4.5,2);i.position.set(0,.04,.35),e.add(i);let s=null;return{group:e,picks:[],skip:[n],set(a){let o=!!(a&&a.flood&&a.flood.siren);return o===s?!1:(s=o,o||(t.emissiveIntensity=0,i.intensity=0),!0)},sounding(){return!!s},flash(a){let o=Math.floor(a/260)%2===0?1:0;t.emissiveIntensity=3.2*o,i.intensity=9*o}}}function Km(r){let e=new Ce;se(e,r.modWhite,0,0,0,.12,.16,.02,.012);let t=gt(e,r.modGrey,0,.015,.012,.034,.012,"z",24),n=gt(e,r.modDark,0,.015,.022,.026,.018,"z",24),i=new De(new xn(.22,10,8),new _t({visible:!1}));return e.add(i),[t,n,i].forEach(s=>{s.userData={id:"TA",kind:"press"}}),tn(e,"Tacita",0,-.052,.012,.1,.03,{fg:"#2a2d31",size:.75}),{group:e,picks:[n,t,i],set(){return!1},press(s){n.position.z=s?.016:.022}}}function Jm(r,e=2.4){let t=new Ce;se(t,r.cabinet,0,0,-.012,.2,.2,.045,.008),se(t,r.cabinetIn,0,0,.011,.17,.17,.005,.004),se(t,r.din,0,.02,.016,.15,.018,.006,.002);let n=Lf(t,r,{id:"QG",kind:"mcb",w:.054,x:-.03,y:.02});n.group.position.z=.04,se(t,r.modWhite,.04,.02,.04,.036,.09,.05,.004),se(t,r.modGrey,.04,.02,.067,.03,.08,.006,.003);let i=qt(16726570,.007);i.mesh.position.set(.04,.045,.072),t.add(i.mesh),tn(t,"Generale",-.03,-.055,.066,.07,.018,{size:.5}),tn(t,"Allarme",.04,-.055,.066,.06,.018,{size:.5}),t.scale.setScalar(e);let s="";return{group:t,picks:n.picks,set(a){let o=a&&typeof a.qg=="boolean"?a.qg:!!(a&&(a.powered||a.blackout)),l=o+"|"+!!(a&&a.powered)+"|"+!!(a&&a.flood&&a.flood.siren);return l===s?!1:(s=l,n.set({on:o,tripped:!1,live:!!(a&&a.powered)}),i.set(!!(a&&a.flood&&a.flood.siren),3),!0)}}}function Qm(r){let e=new Ce;se(e,r.cabinet,0,.75,0,.5,1.5,.3,.03),se(e,r.modGrey,0,1.15,.155,.34,.42,.012,.01);let{c:t,g:n}=fu(128,48),i=new zt(t);i.colorSpace=wt;let s=new De(new Et(.22,.08),new _t({map:i,color:14540253}));s.position.set(0,1.22,.163),e.add(s);let a=qt(16726570,.016);a.mesh.position.set(.11,1.08,.165),e.add(a.mesh);let o="";return{group:e,picks:[],set(l){let c=l&&l.kw&&l.kw.grid||0,u=!!(l&&l.blackout),h=u?"off":c.toFixed(1);return h===o?!1:(o=h,n.fillStyle="#0e1712",n.fillRect(0,0,128,48),n.fillStyle=u?"#ff6a5a":"#8dff9e",n.font="600 30px ui-monospace, monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(u?"STACCO":c.toFixed(1)+" kW",64,25),i.needsUpdate=!0,a.set(u,3.2),!0)}}}function $m(r,e,t,n){let i=new Ce,s=new Ce;s.position.set(-e/2,0,0),i.add(s);let a=new _e({color:16184818,roughness:.4}),o=new _e({color:10469592,roughness:.05,metalness:.3,transparent:!0,opacity:.35,depthWrite:!1}),l=[[e/2,n+.03,e,.06],[e/2,n+t-.03,e,.06],[.03,n+t/2,.06,t],[e-.03,n+t/2,.06,t]],c=new De(Jr(l.map(([m,x,g,p])=>new Tt(g,p,.05).translate(m,x,0)),!1),a);c.castShadow=!1,s.add(c);let u=[c],h=new De(new Et(e-.12,t-.12),o);h.position.set(e/2,n+t/2,0),s.add(h);let f=new De(new Tt(e+.3,t+.2,.5),new _t({visible:!1}));f.position.set(0,n+t/2,.2),i.add(f),u.concat([h,f]).forEach(m=>{m.userData={id:"W1",kind:"toggle"}});let d=null;return{group:i,picks:u.concat([f]),skip:[s],set(m){let x=!!(m&&m.window);return x===d?!1:(d=x,!0)},isOpen(){return!!d},open(m){s.rotation.y=-1.25*m}}}var{w:Xf,d:du}=Gt.size,ko=Xf+.07,br={insieme:{tx:6.4,ty:.6,tz:4.9,yaw:0,pitch:56,dist:20.5},tetto:{tx:4.5,ty:2.4,tz:6.5,yaw:-18,pitch:24,dist:15},tettoia:{tx:10.4,ty:1,tz:3.9,yaw:62,pitch:16,dist:8.5},quadro:{tx:.15,tz:6.5,ty:1.2,yaw:90,pitch:6,dist:2.3},bagno:{tx:4.1,ty:.3,tz:2.4,yaw:0,pitch:80,dist:6},esterno:{tx:6.6,ty:1.2,tz:4.8,yaw:26,pitch:16,dist:25},pompa:{tx:7.4,ty:.8,tz:-.4,yaw:152,pitch:14,dist:7.5},lontano:{tx:6.6,ty:1.2,tz:5.5,yaw:18,pitch:12,dist:34}},e0=new Set(["tetto","tettoia","esterno","pompa","lontano"]),_r={x:11.3,z:4.6},pu={x:11.7,z:17.5},Vy=5662858,Wy={cucina:[1.5,1.75],ingresso:[1.25,6.4],soggiorno:[5.9,6.5]},mu=r=>r*r*(3-2*r),gu=r=>Math.max(0,Math.min(1,r));function Xy(r,e){let{world:t,pick:n,addLabel:i,redraw:s,FACE_ROT:a,T:o}=r,l=Ri(),c=new Ce;t.add(c);let u=new Ce;c.add(u);let h=[],f=re=>((re.picks||[]).forEach(me=>{me.userData={...me.userData,ext:!0},n.push(me)}),(re.skip||[]).forEach(me=>h.push(me)),re),d=new _e({color:3882304,roughness:.92}),m=new _e({color:9275260,roughness:1}),x=(re,me,le,pe,Ie,ze)=>{let Re=new De(new Et(pe-me,Ie-le).rotateX(-Math.PI/2),re);return Re.position.set((me+pe)/2,ze,(le+Ie)/2),Re.receiveShadow=!0,c.add(Re),Re};x(m,9.55,1.4,13.9,12.2,-.004),x(d,-30,12.6,39,19,-.006),x(m,.4,9,1.4,12.2,-.004);let g=new _e({color:3099178,roughness:1});[[-3,.15],[1.6,9.55]].forEach(([re,me])=>se(c,g,(re+me)/2,.45,12.25,me-re,.9,.55,.12)),[[-3.2,12.25,.55,12.6],[14.2,4.5,.55,15.5]].forEach(([re,me,le,pe])=>se(c,g,re,.45,me,le,.9,pe,.12)),se(c,g,14.2-0,.45,12.25,.55,.9,.55,.12),[.25,1.5,9.55,13.95].forEach(re=>se(c,l.cabinet,re,.6,12.25,.3,1.2,.3,.02));for(let re=0;re<7;re++)se(c,l.steelDark,.45+re*.14,.55,12.25,.03,.9,.03,.005);se(c,l.steelDark,.87,.95,12.25,1,.04,.04,.006),se(c,l.steelDark,.87,.2,12.25,1,.04,.04,.006);let p=new _e({color:8016438,roughness:.7}),M={x0:ko,x1:13.5,z0:1.8,z1:7.6,h:2.35};[M.z0+.1,(M.z0+M.z1)/2,M.z1-.1].forEach(re=>se(c,p,M.x1-.1,M.h/2,re,.14,M.h,.14,.01)),se(c,p,M.x1-.1,M.h+.06,(M.z0+M.z1)/2,.16,.18,M.z1-M.z0,.01),se(c,p,M.x0+.08,M.h+.06,(M.z0+M.z1)/2,.12,.16,M.z1-M.z0,.01);for(let re=M.z0+.15;re<M.z1;re+=.42)se(c,p,(M.x0+M.x1)/2,M.h+.2,re,M.x1-M.x0+.2,.1,.08,.01);i("Tettoia",11.6,2.9,4.7,"ctl");let y=f(Wm(l));y.group.position.set(ko,0,2.7),y.group.rotation.y=a.e,c.add(y.group),i("Batteria",ko+.4,1.7,2.7,"ctl");let _=Xm(l);_.port.x=-.9;let D=new F(ko,0,4.25),P=new F(_r.x+_.port.x,_.port.y,_r.z+_.port.z).clone().sub(D),C=f(qm(l,{port:new F(-P.z,P.y,P.x)}));C.group.position.copy(D),C.group.rotation.y=a.e,c.add(C.group),i("Colonnina",ko+.4,1.7,4.25,"ctl"),_.group.position.set(_r.x,0,_r.z),_.group.scale.setScalar(1e-4),c.add(_.group),h.push(_.group);let S=f(jm(l));S.group.position.set(7.4,0,-.07-.25),S.group.rotation.y=a.n,c.add(S.group),i("Pompa di calore",7.4,1.25,-.6,"ctl");let w=f(Qm(l));w.group.position.set(9,0,12.25),c.add(w.group),i("Contatore",9,1.9,12.25,"ctl");let R=Vm(l,{w:Xf,d:du,peak:3});r.roof.add(R.group);let O=Gt.breaker,G=f(Jm(l,2.4));G.group.position.set(O.x+.06+.03,1.2,O.z),G.group.rotation.y=a.e,u.add(G.group),i("Quadro",O.x+.6,1.6,O.z,"ctl");let W=f(Ym(l));W.group.position.set(4.62,0,3.5-o/2-.08),W.group.rotation.y=Math.PI,W.group.scale.setScalar(1.4),u.add(W.group),i("Sonda",4.5,.5,2.9,"ctl");let J=f(Zm(l));J.group.position.set(Xf-4-o/2-.04,1.2,.55),J.group.rotation.y=a.w,J.group.scale.setScalar(1.6),c.add(J.group);let Y=f(Km(l));Y.group.position.set(3.62,1.15,3.5+o/2+.012),Y.group.rotation.y=a.s,Y.group.scale.setScalar(1.6),u.add(Y.group),i("Tacitazione",3.62,1.6,3.9,"ctl");let he={soggiorno:{th:f(Vf(l,{name:"soggiorno"})),rad:f(Wf(l,1))},camera:{th:f(Vf(l,{name:"camera"})),rad:f(Wf(l,1))}},j=he.soggiorno,Q=he.camera;j.th.group.position.set(4.6,1.15,5+o/2+.016),j.th.group.rotation.y=a.s,Q.th.group.position.set(8.2,1.15,3.5-o/2-.016),Q.th.group.rotation.y=a.n,j.rad.group.position.set(5.5,0,du-o/2-.05),j.rad.group.rotation.y=a.n,Q.rad.group.position.set(6.9,0,o/2+.05),Q.rad.group.rotation.y=a.s,Object.values(he).forEach(re=>{re.th.group.scale.setScalar(1.5),u.add(re.th.group,re.rad.group)});let ge=f($m(l,1.4,.55,.9));ge.group.position.set(7.7,0,du-o/2-.035),ge.group.rotation.y=a.n,u.add(ge.group),i("Finestra",7.7,1.75,7.6,"ctl");let Ee=new _e({color:1774608,emissive:16742954,emissiveIntensity:0,roughness:.15});se(u,l.steelDark,2.35,.45,.66,.58,.56,.02,.006);let Ge=se(u,Ee,2.35,.43,.672,.44,.3,.012,.004);Ge.castShadow=!1;let Ye=new an(16747066,0,2.2,2);Ye.position.set(2.35,.45,.95),c.add(Ye);let te={};Object.entries(Wy).forEach(([re,[me,le]])=>{let pe=new Ce;pe.position.set(me,2,le);let Ie=new De(new gn(.005,.005,.5,6),l.modDark);Ie.position.y=.36;let ze=new _e({color:15921128,roughness:.35,emissive:16761466,emissiveIntensity:0}),Re=new De(new xn(.11,20,14),ze);Re.castShadow=!1;let at=new an(16763272,0,9,2);at.position.y=-.14,pe.add(Ie,Re,at),c.add(pe),te[re]={bulbMat:ze,light:at,level:0}});let de=new an(16757596,0,7,1.6);de.position.set(1.4,2.5,du+.7),c.add(de);let fe=r.sun;Object.assign(fe.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:50}),fe.shadow.camera.updateProjectionMatrix(),fe.target.position.set(6.5,0,5.5);let xe="";function Ae(re){let me=re>=17.2,le=me?"night":String(Math.round(re*4)/4);if(le===xe)return!1;xe=le;let pe=me?-.55:.85+(re-16.5)*.25,Ie=me?.75:Math.max(.1,.26-(re-16.5)*.24);return fe.position.set(6.5-Math.sin(pe)*Math.cos(Ie)*20,Math.sin(Ie)*20,5.5+Math.cos(pe)*Math.cos(Ie)*20),fe.target.updateMatrixWorld(),!0}Ae(16.5),$r(u,h),$r(c,[...h,u]);function Qe(re){t.children.forEach(me=>{if(me===c||me.isLight||me.isMesh&&(me.material===r.M.grass||me.material===r.M.paving))return;let le=!1;me.traverse(pe=>{(pe.isLight||pe.material===r.M.outside)&&(le=!0)}),le||(me.visible=re)}),u.visible=re}let Le=(re,me)=>{let le=performance.now();r.loop(()=>{let pe=Math.min(1,(performance.now()-le)/re);return me(pe),pe<1})},rt=!1,$e=!1,Oe=0,A=()=>rt&&performance.now()-Oe<1500;function qe(){if($e||e.reduced)return;$e=!0;let re=performance.now();r.loop(me=>{let le=Math.min(60,me-re);re=me;let pe=A(),Ie=!1;return pe&&S.running()&&(S.spin(le),Ie=!0),pe&&C.charging()&&(C.pulse(me),Ie=!0),pe&&J.sounding()&&(J.flash(me),Ie=!0),Ie||($e=!1),Ie})}let Fe=!1;function ke(re,me){if(re!==Fe){if(Fe=re,!re){_.group.scale.setScalar(1e-4),_.lights(!1),s();return}if(_.group.scale.setScalar(1),me||e.reduced){_.group.position.set(_r.x,0,_r.z),s();return}_.lights(!0),Le(4200,le=>{let pe=1-(1-le)*(1-le);_.group.position.set(pu.x+(_r.x-pu.x)*pe,0,pu.z+(_r.z-pu.z)*pe),le>=1&&_.lights(!1)})}}let Te=0,V=0;function ae(re){let me=re?1:0,le=Te;if(e.reduced){Te=me,ge.open(me),s();return}Le(700,pe=>{Te=le+(me-le)*mu(pe),ge.open(Te)})}function E(re){let me=re?.8:0,le=V;if(e.reduced){V=me,W.grow(me),s();return}Le(re?2400:900,pe=>{V=le+(me-le)*mu(pe),W.grow(V)})}function T(re,me,le){let pe=te[re];if(!pe||Math.abs(pe.level-me)<.01)return;let Ie=pe.level,ze=Re=>{pe.level=Re,pe.light.intensity=11*Re,pe.bulbMat.emissiveIntensity=6*Re};if(le||e.reduced){ze(me),s();return}Le(me>Ie?420:260,Re=>ze(Ie+(me-Ie)*mu(Re)))}let H=null,ee="",oe=null,ce=null,He=null,Pe=!1;return{lamps:te,interior:Qe,lampsTo(re,me){Object.keys(te).forEach(le=>T(le,gu(re[le]||0),me))},stats(){let re=0;return r.scene.traverseVisible(me=>{me.isMesh&&re++}),{meshes:re}},apply(re,me,le,pe){let Ie=H;H=re;let ze=!1,Re=typeof re.hour=="number"?re.hour:16.5;oe!==null&&Math.abs(Re-oe)>1e-6&&(rt=!0,Oe=performance.now()),oe=Re,re.shift&&re.shift.done&&(rt=!1),Ae(Re)&&(r.moved(),ze=!0),[R,y,C,S,w,G,W,J].forEach(ne=>{ne.set(re)&&(ze=!0)}),!!re.silence!==Pe&&(Pe=!!re.silence,Y.press(Pe),ze=!0),(re.zones||[]).forEach(ne=>{let ve=he[ne.id];ve&&(ve.th.set(ne,!!re.powered)&&(ze=!0),ve.rad.set(re.hp&&re.hp.on?ne.valve:0)&&(ze=!0))});let at=(re.zones||[]).find(ne=>ne.id==="soggiorno"),Ze=!!(at&&at.window);ge.set(at),Ze!==He&&(He!==null?ae(Ze):(Te=Ze?1:0,ge.open(Te)),He=Ze,ze=!0);let it=!!(re.flood&&re.flood.wet);it!==ce&&(ce!==null?E(it):(V=it?.8:0,W.grow(V)),ce=it,ze=!0),ke(!!(re.ev&&re.ev.plugged),!Ie);let X=!!re.powered;Ee.emissiveIntensity=X&&re.oven?2.4:0,Ye.intensity=X&&re.oven?1.6:0,pe||Object.keys(te).forEach(ne=>T(ne,X?gu(me[ne]||0):0,le||!!re.blackout)),de.intensity=X&&Re>=17?5:0;let ie=[X,re.oven,re.blackout,Re>=17,Object.keys(te).map(ne=>me[ne]||0).join()].join();return ie!==ee&&(ee=ie,ze=!0),e.reduced?J.sounding()&&J.flash(0):A()&&(S.running()||C.charging()||J.sounding())&&qe(),ze&&s(),ze},dispose(){}}}function t0(r,e){let t=null,n=Eo(r,{night:!1,bare:!0,noIntro:!0,startRoof:!0,start:br.esterno,dayBg:Vy,roomWindows:!0,porch:!1,limits:{yaw:[-200,200],pitch:[8,80]},reduced:e.reduced,lite:e.lite,capture:e.capture,onBreaker(){},onControl(){},onRoom(){},onRoof(){},onPick:y=>{let{ext:_,...D}=y;if(D.kind==="press"&&e.onPress){e.onPress(D),setTimeout(()=>{e.onRelease&&e.onRelease(D)},700);return}e.onTap&&e.onTap(D)},extend:y=>t=Xy(y,e)});if(!n)return null;let i=r.querySelector("canvas"),s=null,a="",o=-1,l=null,c=null,u=0,h=Gt.rooms.map(y=>y.id);function f(y,_){let D=h.map(P=>(y[P]||0)>=.5?1:0).join("");if(D===a&&!_)return;a=D;let L={};h.forEach(P=>{L[P]={lit:(y[P]||0)>=.5,controls:{}}}),n.update({rooms:L})}function d(y){if(l)return l;let _={};return h.forEach(D=>{_[D]=y&&y.powered&&y.rooms?gu(y.rooms[D]||0):0}),_}let m=0;function x(y,_){let D=++m;!y&&t&&t.interior(!0),n.setRoof(y,!0,_),y&&n.whenReady().then(()=>setTimeout(()=>{D===m&&n.roof()&&t&&t.interior(!1)},e.reduced?0:_+80))}n.whenReady().then(()=>{m===0&&n.roof()&&t&&t.interior(!1)});let g="esterno",p=null,M=(y,_)=>{g=typeof y=="string"?y:null,p&&(clearTimeout(p),p=null);let D=typeof y=="object"?{...y}:{...br[y]||br.insieme};r.clientWidth<r.clientHeight*.9&&(y==="quadro"?D.dist=1.5:y==="insieme"?Object.assign(D,{tx:6.3,tz:4.2,yaw:90,pitch:62,dist:21}):y==="bagno"?D.dist=7.5:typeof y=="string"&&e0.has(y)&&(D.dist*=1.5)),typeof y=="string"&&x(e0.has(y),_===void 0?1300:Math.max(1,_)),n.look(D,_)};return{update(y){if(!y)return;let _=!s,D=s&&s.qg;s=y,!_&&y.qg&&D===!1&&g==="quadro"&&(p=setTimeout(()=>{p=null,g==="quadro"&&M("insieme",1400)},e.reduced?0:1100));let L=d(y),P=Math.round(gu(((typeof y.hour=="number"?y.hour:16.5)-16.6)/1.2)*40)/40;P!==o&&(o=P,n.nightLevel(mu(P)));let C=performance.now()<u;C||f(L,_),t&&t.apply(y,L,_,C),i&&i.setAttribute("aria-label",qy(y))},look:M,blackout(){let y={};if(h.forEach(D=>{y[D]=0}),e.reduced)return f(y,!0),0;let _={};return h.forEach(D=>{_[D]=1}),u=performance.now()+700,[[0,_],[90,y],[200,_],[320,y]].forEach(([D,L])=>setTimeout(()=>{f(L,!0),t&&t.lampsTo(L,!0)},D)),setTimeout(()=>{s&&f(d(s),!0)},720),700},evening(y){if(c&&(c.forEach(clearTimeout),c=null),!y)return l=null,s&&(f(d(s),!0),t&&t.apply(s,d(s),!0)),0;M("esterno",2200);let _=["cucina","ingresso","bagno","corridoio","soggiorno","camera"];l={...d(s||{})};let L=e.reduced?0:900;return c=_.map((P,C)=>setTimeout(()=>{l={...l,[P]:0},f(l,!0),t&&s&&t.apply(s,l,!1)},2400+C*L)),2400+_.length*L},alert(){},inside(){M("insieme",1)},outside(){x(!0,1),n.look({...br.lontano},1)},arrival(){return e.reduced?(M("insieme",1),0):(n.look({...br.esterno},2400),setTimeout(()=>M("insieme",1800),2600),4500)},stats(){return t?t.stats():{meshes:0}},screenOf:n.screenOf,views:Object.keys(br).filter(y=>y!=="lontano"),view:y=>({...br[y]||br.insieme}),resize:n.resize,dispose(){c&&c.forEach(clearTimeout),p&&clearTimeout(p),m++,n.dispose()}}}function qy(r){let t=(n=>(r.zones||[]).find(i=>i.id===n))("soggiorno");return["Casa intelligente, di sera.",r.blackout?"Il contatore ha staccato: la casa \xE8 al buio.":r.powered?"La casa ha corrente.":"Il generale \xE8 aperto.",r.sun>.05?"I pannelli producono.":"I pannelli non producono.",r.ev&&r.ev.charging?"L\u2019auto \xE8 in carica.":r.ev&&r.ev.plugged?"L\u2019auto \xE8 attaccata alla colonnina.":"",r.hp&&r.hp.broken?"La pompa di calore \xE8 guasta.":r.hp&&r.hp.on?"La pompa di calore scalda.":"La pompa di calore \xE8 ferma.",r.oven?"Il forno \xE8 acceso.":"",t&&t.window?"La finestra del soggiorno \xE8 aperta.":"",r.flood&&r.flood.siren?"La sirena dell\u2019allagamento suona.":r.flood&&r.flood.wet?"La sonda del bagno \xE8 bagnata.":""].filter(Boolean).join(" ")}var n0={appartamento:Sm,officina:Pm,automatico:Im,fabbrica:Gm,casa:t0};typeof window<"u"&&(window.FaseNeutroProve={createScene(r,e,t){return n0[r]?n0[r](e,t):null}});})();
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
