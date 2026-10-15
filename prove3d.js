(()=>{var Du=0,_c=1,Lu=2;var yc=1,Zr=2,Jn=3,On=0,ln=1,mn=2,kt=0,Zi=1,Qs=2,Mc=3,Sc=4,Mo=5,_n=100,Uu=101,Nu=102,Fu=103,Ou=104,lr=200,Bu=201,zu=202,ku=203,no=204,io=205,$s=206,Hu=207,ea=208,Gu=209,Vu=210,Wu=211,Xu=212,qu=213,Yu=214,So=0,Eo=1,wo=2,Ki=3,To=4,Ao=5,Ro=6,Co=7,Ec=0,ju=1,Zu=2,bi=0,Po=1,Io=2,Do=3,Lo=4,Uo=5,Ui=6,No=7,lc="attached",Ku="detached",wc=300,cr=301,hr=302,Fo=303,Oo=304,ta=306,Vt=1e3,En=1001,Fr=1002,Bt=1003,Bo=1004;var ur=1005;var Dt=1006,Kr=1007;var Tn=1008;var Kt=1009,Tc=1010,Ac=1011,Jr=1012,zo=1013,Ni=1014,nn=1015,Rt=1016,ko=1017,Ho=1018,Fi=1020,Rc=35902,Cc=1021,Pc=1022,Jt=1023,Or=1026,Oi=1027,Qr=1028,Go=1029,Ic=1030,Vo=1031;var Wo=1033,na=33776,ia=33777,ra=33778,sa=33779,Xo=35840,qo=35841,Yo=35842,jo=35843,Zo=36196,Ko=37492,Jo=37496,Qo=37808,$o=37809,el=37810,tl=37811,nl=37812,il=37813,rl=37814,sl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,aa=36492,fl=36494,dl=36495,Dc=36283,pl=36284,ml=36285,gl=36286;var Ji=2300,Qi=2301,to=2302,cc=2400,hc=2401,uc=2402,Ju=2500;var Lc=0,oa=1,$r=2,Qu=3200,$u=3201;var vl=0,ef=1,Gn="",wt="srgb",zt="srgb-linear",Cs="linear",vt="srgb";var ji=7680;var fc=519,tf=512,nf=513,rf=514,Uc=515,sf=516,af=517,of=518,lf=519,ro=35044;var Nc="300 es",qn=2e3,Ps=2001;var fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,As=Math.PI/180,$i=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function Rd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Cd(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function Pd(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function Id(i,e=1){return e-Math.abs(Fc(i,e*2)-e)}function Dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ud(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nd(i,e){return i+Math.random()*(e-i)}function Fd(i){return i*(.5-Math.random())}function Od(i){i!==void 0&&(Yh=i);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bd(i){return i*As}function zd(i){return i*$i}function kd(i){return(i&i-1)===0&&i!==0}function Hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vd(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Oc={DEG2RAD:As,RAD2DEG:$i,generateUUID:Fn,clamp:ct,euclideanModulo:Fc,mapLinear:Rd,inverseLerp:Cd,lerp:Rs,damp:Pd,pingpong:Id,smoothstep:Dd,smootherstep:Ld,randInt:Ud,randFloat:Nd,randFloatSpread:Fd,seededRandom:Od,degToRad:Bd,radToDeg:zd,isPowerOfTwo:kd,ceilPowerOfTwo:Hd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Vd,normalize:_t,denormalize:Nn},Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],b=r[0],m=r[3],d=r[6],w=r[1],M=r[4],_=r[7],P=r[2],A=r[5],D=r[8];return s[0]=a*b+o*w+l*P,s[3]=a*m+o*M+l*A,s[6]=a*d+o*_+l*D,s[1]=c*b+h*w+u*P,s[4]=c*m+h*M+u*A,s[7]=c*d+h*_+u*D,s[2]=f*b+p*w+x*P,s[5]=f*m+p*M+x*A,s[8]=f*d+p*_+x*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,x=t*u+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=u*b,e[1]=(r*c-h*n)*b,e[2]=(o*n-r*a)*b,e[3]=f*b,e[4]=(h*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ol=new at;function Bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){let i=Br("canvas");return i.style.display="block",i}var jh={};function la(i){i in jh||(jh[i]=!0,console.warn(i))}function hf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function uf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ff(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Zh=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wd(){let i={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?Cs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zt]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:Zh,fromXYZ:Kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Zh,fromXYZ:Kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}var lt=Wd();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mr,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=Br("canvas")),Mr.width=e.width,Mr.height=e.height;let r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xd=0,zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bl(r[a].image)):s.push(Bl(r[a]))}else s=Bl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qd=0,Wt=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,r=En,s=Dt,a=Tn,o=Jt,l=Kt,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Fn(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=wc;Wt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],b=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,P=(d+1)/2,A=(h+f)/4,D=(u+b)/4,z=(x+m)/4;return M>_&&M>P?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=D/n):_>P?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=A/r,s=z/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=z/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-x)*(m-x)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(u-b)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ao=class extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let r={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new Wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new zr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ct=class extends ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Is=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[a+0],p=s[a+1],x=s[a+2],b=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=b;return}if(u!==b||l!==f||c!==p||h!==x){let m=1-o,d=l*f+c*p+h*x+u*b,w=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let P=Math.sqrt(M),A=Math.atan2(P,d*w);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}let _=o*w;if(l=l*m+f*_,c=c*m+p*_,h=h*m+x*_,u=u*m+b*_,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+h*u+l*p-c*f,e[t+1]=l*x+h*f+c*u-o*p,e[t+2]=c*x+h*p+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new k,Jh=new wn,yn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Da.subVectors(this.max,bs),Sr.subVectors(e.a,bs),Er.subVectors(e.b,bs),wr.subVectors(e.c,bs),Ei.subVectors(Er,Sr),wi.subVectors(wr,Er),Wi.subVectors(Sr,wr);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!kl(t,Sr,Er,wr,Da)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Sr,Er,wr,Da))?!1:(La.crossVectors(Ei,wi),t=[La.x,La.y,La.z],kl(t,Sr,Er,wr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new k,new k,new k,new k,new k,new k,new k,new k],Dn=new k,Ia=new yn,Sr=new k,Er=new k,wr=new k,Ei=new k,wi=new k,Wi=new k,bs=new k,Da=new k,La=new k,Xi=new k;function kl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Xi.fromArray(i,s);let o=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Yd=new yn,_s=new k,Hl=new k,fn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);let t=_s.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_s,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(Hl)),this.expandByPoint(_s.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new k,Gl=new k,Ua=new k,Ti=new k,Vl=new k,Na=new k,Wl=new k,Ii=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gl.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Gl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),o=Ti.dot(this.direction),l=-Ti.dot(Ua),c=Ti.lengthSq(),h=Math.abs(1-a*a),u,f,p,x;if(h>0)if(u=a*l-o,f=a*o-l,x=s*h,u>=0)if(f>=-x)if(f<=x){let b=1/h;u*=b,f*=b,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gl).addScaledVector(Ua,f),p}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,s){Vl.subVectors(t,e),Na.subVectors(n,e),Wl.crossVectors(Vl,Na);let a=this.direction.dot(Wl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);let l=o*this.direction.dot(Na.crossVectors(Ti,Na));if(l<0)return null;let c=o*this.direction.dot(Vl.cross(Ti));if(c<0||l+c>a)return null;let h=-o*Ti.dot(Wl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,f,p,x,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,p,x,b,m)}set(e,t,n,r,s,a,o,l,c,h,u,f,p,x,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,p=a*u,x=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,x=c*h,b=c*u;t[0]=f+b*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,x=c*h,b=c*u;t[0]=f-b*o,t[4]=-a*u,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,x=o*h,b=o*u;t[0]=l*h,t[4]=x*c-p,t[8]=f*c+b,t[1]=l*u,t[5]=b*c+f,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,x=o*l,b=o*c;t[0]=l*h,t[4]=b-f*u,t[8]=x*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+x,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*l,p=a*c,x=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+b,t[5]=a*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Zd)}lookAt(e,t,n){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ai.crossVectors(n,xn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ai.crossVectors(n,xn)),Ai.normalize(),Fa.crossVectors(xn,Ai),r[0]=Ai.x,r[4]=Fa.x,r[8]=xn.x,r[1]=Ai.y,r[5]=Fa.y,r[9]=xn.y,r[2]=Ai.z,r[6]=Fa.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],b=n[6],m=n[10],d=n[14],w=n[3],M=n[7],_=n[11],P=n[15],A=r[0],D=r[4],z=r[8],E=r[12],y=r[1],N=r[5],W=r[9],j=r[13],$=r[2],Z=r[6],K=r[10],oe=r[14],Q=r[3],le=r[7],ve=r[11],Ae=r[15];return s[0]=a*A+o*y+l*$+c*Q,s[4]=a*D+o*N+l*Z+c*le,s[8]=a*z+o*W+l*K+c*ve,s[12]=a*E+o*j+l*oe+c*Ae,s[1]=h*A+u*y+f*$+p*Q,s[5]=h*D+u*N+f*Z+p*le,s[9]=h*z+u*W+f*K+p*ve,s[13]=h*E+u*j+f*oe+p*Ae,s[2]=x*A+b*y+m*$+d*Q,s[6]=x*D+b*N+m*Z+d*le,s[10]=x*z+b*W+m*K+d*ve,s[14]=x*E+b*j+m*oe+d*Ae,s[3]=w*A+M*y+_*$+P*Q,s[7]=w*D+M*N+_*Z+P*le,s[11]=w*z+M*W+_*K+P*ve,s[15]=w*E+M*j+_*oe+P*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],b=e[7],m=e[11],d=e[15];return x*(+s*l*u-r*c*u-s*o*f+n*c*f+r*o*p-n*l*p)+b*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*h-s*l*h)+m*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+d*(-r*o*h-t*l*u+t*o*f+r*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],b=e[13],m=e[14],d=e[15],w=u*m*c-b*f*c+b*l*p-o*m*p-u*l*d+o*f*d,M=x*f*c-h*m*c-x*l*p+a*m*p+h*l*d-a*f*d,_=h*b*c-x*u*c+x*o*p-a*b*p-h*o*d+a*u*d,P=x*u*l-h*b*l-x*o*f+a*b*f+h*o*m-a*u*m,A=t*w+n*M+r*_+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=w*D,e[1]=(b*f*s-u*m*s-b*r*p+n*m*p+u*r*d-n*f*d)*D,e[2]=(o*m*s-b*l*s+b*r*c-n*m*c-o*r*d+n*l*d)*D,e[3]=(u*l*s-o*f*s-u*r*c+n*f*c+o*r*p-n*l*p)*D,e[4]=M*D,e[5]=(h*m*s-x*f*s+x*r*p-t*m*p-h*r*d+t*f*d)*D,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*d-t*l*d)*D,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*p+t*l*p)*D,e[8]=_*D,e[9]=(x*u*s-h*b*s-x*n*p+t*b*p+h*n*d-t*u*d)*D,e[10]=(a*b*s-x*o*s+x*n*c-t*b*c-a*n*d+t*o*d)*D,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*D,e[12]=P*D,e[13]=(h*b*r-x*u*r+x*n*f-t*b*f-h*n*m+t*u*m)*D,e[14]=(x*o*r-a*b*r-x*n*l+t*b*l+a*n*m-t*o*m)*D,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*f+t*o*f)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,x=s*u,b=a*h,m=a*u,d=o*u,w=l*c,M=l*h,_=l*u,P=n.x,A=n.y,D=n.z;return r[0]=(1-(b+d))*P,r[1]=(p+_)*P,r[2]=(x-M)*P,r[3]=0,r[4]=(p-_)*A,r[5]=(1-(f+d))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(x+M)*D,r[9]=(m-w)*D,r[10]=(1-(f+b))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Tr.set(r[0],r[1],r[2]).length(),a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let c=1/s,h=1/a,u=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=qn){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),p,x;if(o===qn)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ps)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=qn){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),f=(t+e)*c,p=(n+r)*h,x,b;if(o===qn)x=(a+s)*u,b=-2*u;else if(o===Ps)x=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tr=new k,Ln=new tt,jd=new k(0,0,0),Zd=new k(1,1,1),Ai=new k,Fa=new k,xn=new k,Qh=new tt,$h=new wn,Bn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kd=0,eu=new k,Ar=new wn,si=new tt,Oa=new k,ys=new k,Jd=new k,Qd=new wn,tu=new k(1,0,0),nu=new k(0,1,0),iu=new k(0,0,1),ru={type:"added"},$d={type:"removed"},Rr={type:"childadded",child:null},Xl={type:"childremoved",child:null},At=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Bn,n=new wn,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new at}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ys,Oa,this.up):si.lookAt(Oa,ys,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(si),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};At.DEFAULT_UP=new k(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new k,ai=new k,ql=new k,oi=new k,Cr=new k,Pr=new k,su=new k,Yl=new k,jl=new k,Zl=new k,Kl=new pt,Jl=new pt,Ql=new pt,Pi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Un.subVectors(r,t),ai.subVectors(n,t),ql.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(ai),l=Un.dot(ql),c=ai.dot(ai),h=ai.dot(ql),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Kl.setScalar(0),Jl.setScalar(0),Ql.setScalar(0),Kl.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,n),Ql.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kl,s.x),a.addScaledVector(Jl,s.y),a.addScaledVector(Ql,s.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),ai.subVectors(e,t),Un.cross(ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Un.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Cr.subVectors(r,n),Pr.subVectors(s,n),Yl.subVectors(e,n);let l=Cr.dot(Yl),c=Pr.dot(Yl);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,r);let h=Cr.dot(jl),u=Pr.dot(jl);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Cr,a);Zl.subVectors(e,s);let p=Cr.dot(Zl),x=Pr.dot(Zl);if(x>=0&&p<=x)return t.copy(s);let b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Pr,o);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return su.subVectors(s,r),o=(u-h)/(u-h+(p-x)),t.copy(r).addScaledVector(su,o);let d=1/(m+b+f);return a=b*d,o=f*d,t.copy(n).addScaledVector(Cr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function $l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Fc(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$l(a,s,e+1/3),this.g=$l(a,s,e),this.b=$l(a,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return lt.fromWorkingColorSpace($t.copy(this),e),Math.round(ct($t.r*255,0,255))*65536+Math.round(ct($t.g*255,0,255))*256+Math.round(ct($t.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,r=$t.g,s=$t.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=wt){lt.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,r=$t.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Ba);let n=Rs(Ri.h,Ba.h,t),r=Rs(Ri.s,Ba.s,t),s=Rs(Ri.l,Ba.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Le;Le.NAMES=df;var ep=0,an=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Zi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==_n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ci=tp();function tp(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function np(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=ct(i,-65504,65504),ci.floatView[0]=i;let e=ci.uint32View[0],t=e>>23&511;return ci.baseTable[t]+((e&8388607)>>ci.shiftTable[t])}function ip(i){let e=i>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[e]+(i&1023)]+ci.exponentTable[e],ci.floatView[0]}var Hr=class{static toHalfFloat(e){return np(e)}static fromHalfFloat(e){return ip(e)}},Ft=new k,za=new Ve,rp=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ro,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ro&&(e.usage=this.usage),e}};var Ds=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ls=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},sp=0,Sn=new tt,ec=new At,Ir=new k,bn=new yn,Ms=new yn,Zt=new k,Xt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Ls:Ds)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(bn.min,Ms.min),bn.expandByPoint(Zt),Zt.addVectors(bn.max,Ms.max),bn.expandByPoint(Zt)):(bn.expandByPoint(Ms.min),bn.expandByPoint(Ms.max))}bn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),Zt.add(Ir)),r=Math.max(r,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new k,l[z]=new k;let c=new k,h=new k,u=new k,f=new Ve,p=new Ve,x=new Ve,b=new k,m=new k;function d(z,E,y){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,z),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,y),h.sub(c),u.sub(c),p.sub(f),x.sub(f);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(N),o[z].add(b),o[E].add(b),o[y].add(b),l[z].add(m),l[E].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,E=w.length;z<E;++z){let y=w[z],N=y.start,W=y.count;for(let j=N,$=N+W;j<$;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let M=new k,_=new k,P=new k,A=new k;function D(z){P.fromBufferAttribute(r,z),A.copy(P);let E=o[z];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),_.crossVectors(A,E);let N=_.dot(l[z])<0?-1:1;a.setXYZW(z,M.x,M.y,M.z,N)}for(let z=0,E=w.length;z<E;++z){let y=w[z],N=y.start,W=y.count;for(let j=N,$=N+W;j<$;j+=3)D(e.getX(j+0)),D(e.getX(j+1)),D(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,x=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let d=0;d<h;d++)f[x++]=c[p++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new tt,qi=new Ii,ka=new fn,ou=new k,Ha=new k,Ga=new k,Va=new k,tc=new k,Wa=new k,lu=new k,Xa=new k,it=class extends At{constructor(e=new Xt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(tc.fromBufferAttribute(u,e),a?Wa.addScaledVector(tc,h):Wa.addScaledVector(tc.sub(t),h))}t.add(Wa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(ka.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ka,ou)===null||qi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(au.copy(s).invert(),qi.copy(e.ray).applyMatrix4(au),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=f.length;x<b;x++){let m=f[x],d=a[m.materialIndex],w=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,P=M;_<P;_+=3){let A=o.getX(_),D=o.getX(_+1),z=o.getX(_+2);r=qa(this,d,e,n,c,h,u,A,D,z),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=x,d=b;m<d;m+=3){let w=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);r=qa(this,a,e,n,c,h,u,w,M,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=f.length;x<b;x++){let m=f[x],d=a[m.materialIndex],w=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,P=M;_<P;_+=3){let A=_,D=_+1,z=_+2;r=qa(this,d,e,n,c,h,u,A,D,z),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=x,d=b;m<d;m+=3){let w=m,M=m+1,_=m+2;r=qa(this,a,e,n,c,h,u,w,M,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ap(i,e,t,n,r,s,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===On,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:i}}function qa(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ha),i.getVertexPosition(l,Ga),i.getVertexPosition(c,Va);let h=ap(i,e,t,n,Ha,Ga,Va,lu);if(h){let u=new k;Pi.getBarycoord(lu,Ha,Ga,Va,u),r&&(h.uv=Pi.getInterpolatedAttribute(r,o,l,c,u,new Ve)),s&&(h.uv1=Pi.getInterpolatedAttribute(s,o,l,c,u,new Ve)),a&&(h.normal=Pi.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Pi.getNormal(Ha,Ga,Va,f.normal),h.face=f,h.barycoord=u}return h}var en=class i extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function x(b,m,d,w,M,_,P,A,D,z,E){let y=_/D,N=P/z,W=_/2,j=P/2,$=A/2,Z=D+1,K=z+1,oe=0,Q=0,le=new k;for(let ve=0;ve<K;ve++){let Ae=ve*N-j;for(let Oe=0;Oe<Z;Oe++){let et=Oe*y-W;le[b]=et*w,le[m]=Ae*M,le[d]=$,c.push(le.x,le.y,le.z),le[b]=0,le[m]=0,le[d]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(Oe/D),u.push(1-ve/z),oe+=1}}for(let ve=0;ve<z;ve++)for(let Ae=0;Ae<D;Ae++){let Oe=f+Ae+Z*ve,et=f+Ae+Z*(ve+1),ne=f+(Ae+1)+Z*(ve+1),ue=f+(Ae+1)+Z*ve;l.push(Oe,et,ue),l.push(et,ne,ue),Q+=6}o.addGroup(p,Q,E),p+=Q,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let r in n)e[r]=n[r]}return e}function op(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var cn={clone:fr,merge:rn},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Us=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new k,cu=new Ve,hu=new Ve,It=class extends Us{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,cu,hu),t.subVectors(hu,cu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Lr=1,lo=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new It(Dr,Lr,e,t);r.layers=this.layers,this.add(r);let s=new It(Dr,Lr,e,t);s.layers=this.layers,this.add(s);let a=new It(Dr,Lr,e,t);a.layers=this.layers,this.add(a);let o=new It(Dr,Lr,e,t);o.layers=this.layers,this.add(o);let l=new It(Dr,Lr,e,t);l.layers=this.layers,this.add(l);let c=new It(Dr,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ns=class extends Wt{constructor(e=[],t=cr,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},co=class extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ns(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new en(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:kt});s.uniforms.tEquirect.value=t;let a=new it(r,s),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Dt),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},$e=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},hp={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),d=this._getHandJoint(c,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Fs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ro,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new k,Wr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var uu=new k,fu=new pt,du=new pt,up=new k,pu=new tt,Ya=new k,nc=new fn,mu=new tt,ic=new Ii,Os=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lc,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingBox.expandByPoint(Ya)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingSphere.expandByPoint(Ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(r),e.ray.intersectsSphere(nc)!==!1&&(mu.copy(r).invert(),ic.copy(e.ray).applyMatrix4(mu),!(this.boundingBox!==null&&ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;fu.fromBufferAttribute(r.attributes.skinIndex,e),du.fromBufferAttribute(r.attributes.skinWeight,e),uu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=du.getComponent(s);if(a!==0){let o=fu.getComponent(s);pu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(up.copy(uu).applyMatrix4(pu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xr=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Yn=class extends Wt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Bt,h=Bt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gu=new tt,fp=new tt,Bs=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:fp;gu.multiplyMatrices(o,t[s]),gu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yn(t,e,e,Jt,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Xr),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Di=class extends Ot{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ur=new tt,vu=new tt,ja=[],xu=new yn,dp=new tt,Ss=new it,Es=new fn,zs=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,dp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),xu.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Es.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ur),vu.multiplyMatrices(n,Ur),Ss.matrixWorld=vu,Ss.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=s,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(r*this.count),r,this.count,Qr,nn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rc=new k,pp=new k,mp=new at,Xn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=rc.subVectors(n,t).cross(pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(rc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mp.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new fn,Za=new k,qr=class{constructor(e=new Xn,t=new Xn,n=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],x=r[9],b=r[10],m=r[11],d=r[12],w=r[13],M=r[14],_=r[15];if(n[0].setComponents(l-s,f-c,m-p,_-d).normalize(),n[1].setComponents(l+s,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+h,m+x,_+w).normalize(),n[3].setComponents(l-a,f-h,m-x,_-w).normalize(),n[4].setComponents(l-o,f-u,m-b,_-M).normalize(),t===qn)n[5].setComponents(l+o,f+u,m+b,_+M).normalize();else if(t===Ps)n[5].setComponents(o,u,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ho=new k,uo=new k,bu=new tt,ws=new Ii,Ka=new fn,sc=new k,_u=new k,tr=class extends At{constructor(e=new Xt,t=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ho.fromBufferAttribute(t,r-1),uo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ho.distanceTo(uo);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=s,e.ray.intersectsSphere(Ka)===!1)return;bu.copy(r).invert(),ws.copy(e.ray).applyMatrix4(bu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let b=p,m=x-1;b<m;b+=c){let d=h.getX(b),w=h.getX(b+1),M=Ja(this,e,ws,l,d,w,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(x-1),m=h.getX(p),d=Ja(this,e,ws,l,b,m,x-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let b=p,m=x-1;b<m;b+=c){let d=Ja(this,e,ws,l,b,b+1,b);d&&t.push(d)}if(this.isLineLoop){let b=Ja(this,e,ws,l,x-1,p,x-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ja(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(ho.fromBufferAttribute(o,r),uo.fromBufferAttribute(o,s),t.distanceSqToSegment(ho,uo,sc,_u)>n)return;sc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(sc);if(!(c<e.near||c>e.far))return{distance:c,point:_u.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var yu=new k,Mu=new k,ks=class extends tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yu.fromBufferAttribute(t,r),Mu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yu.distanceTo(Mu);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hs=class extends tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jr=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Su=new tt,dc=new Ii,Qa=new fn,$a=new k,Gs=class extends At{constructor(e=new Xt,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Su.copy(r).invert(),dc.copy(e.ray).applyMatrix4(Su);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=f,b=p;x<b;x++){let m=c.getX(x);$a.fromBufferAttribute(u,m),Eu($a,m,l,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,b=p;x<b;x++)$a.fromBufferAttribute(u,x),Eu($a,x,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Eu(i,e,t,n,r,s,a){let o=dc.distanceSqToPoint(i);if(o<t){let l=new k;dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Li=class extends Wt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nr=class extends Wt{constructor(e,t,n=Ni,r,s,a,o=Bt,l=Bt,c,h=Or){if(h!==Or&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Mn=class i extends Xt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],p=[],x=0,b=[],m=n/2,d=0;w(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function w(){let _=new k,P=new k,A=0,D=(t-e)/n;for(let z=0;z<=s;z++){let E=[],y=z/s,N=y*(t-e)+e;for(let W=0;W<=r;W++){let j=W/r,$=j*l+o,Z=Math.sin($),K=Math.cos($);P.x=N*Z,P.y=-y*n+m,P.z=N*K,u.push(P.x,P.y,P.z),_.set(Z,D,K).normalize(),f.push(_.x,_.y,_.z),p.push(j,1-y),E.push(x++)}b.push(E)}for(let z=0;z<r;z++)for(let E=0;E<s;E++){let y=b[E][z],N=b[E+1][z],W=b[E+1][z+1],j=b[E][z+1];(e>0||E!==0)&&(h.push(y,N,j),A+=3),(t>0||E!==s-1)&&(h.push(N,W,j),A+=3)}c.addGroup(d,A,0),d+=A}function M(_){let P=x,A=new Ve,D=new k,z=0,E=_===!0?e:t,y=_===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),x++;let N=x;for(let W=0;W<=r;W++){let $=W/r*l+o,Z=Math.cos($),K=Math.sin($);D.x=E*K,D.y=m*y,D.z=E*Z,u.push(D.x,D.y,D.z),f.push(0,y,0),A.x=Z*.5+.5,A.y=K*.5*y+.5,p.push(A.x,A.y),x++}for(let W=0;W<r;W++){let j=P+W,$=N+W;_===!0?h.push($,$+1,j):h.push($+1,$,j),z+=3}c.addGroup(d,z,_===!0?1:2),d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dn=class i extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,p=[],x=[],b=[],m=[];for(let d=0;d<h;d++){let w=d*f-a;for(let M=0;M<c;M++){let _=M*u-s;x.push(_,-w,0),b.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){let M=w+c*d,_=w+c*(d+1),P=w+1+c*(d+1),A=w+1+c*d;p.push(M,_,A),p.push(_,P,A)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zn=class i extends Xt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new k,f=new k,p=[],x=[],b=[],m=[];for(let d=0;d<=n;d++){let w=[],M=d/n,_=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+M*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),m.push(A+_,1-M),w.push(c++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){let M=h[d][w+1],_=h[d][w],P=h[d+1][w],A=h[d+1][w+1];(d!==0||a>0)&&p.push(M,_,A),(d!==n-1||l<Math.PI)&&p.push(_,P,A)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vs=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tn=class extends Ee{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ws=class extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var fo=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},po=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function eo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vp(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function wu(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function pf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var di=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mo=class extends di{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:s=e,o=2*t-n;break;case uc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:a=e,l=2*n-t;break;case uc:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(r-t),b=x*x,m=b*x,d=-f*m+2*f*b-f*x,w=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*x+1,M=(-1-p)*m+(1.5+p)*b+.5*x,_=p*m-p*b;for(let P=0;P!==o;++P)s[P]=d*a[h+P]+w*a[c+P]+M*a[l+P]+_*a[u+P];return s}},go=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},vo=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case Qi:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return Qi;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&gp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===to,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let b=t[u+x];if(b!==t[f+x]||b!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Qi;var pi=class extends pn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Ji;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};Xs.prototype.ValueTypeName="color";var jn=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};jn.prototype.ValueTypeName="number";var xo=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)wn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Zn=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends pn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ji;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};Kn.prototype.ValueTypeName="vector";var qs=class{constructor(e="",t=-1,n=[],r=Ju){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bp(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(pn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=vp(l);l=wu(l,1,h),c=wu(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new jn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],f=r[u];f||(r[u]=f=[]),f.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,x,b){if(p.length!==0){let m=[],d=[];pf(p,m,d,x),m.length!==0&&b.push(new u(f,m,d))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let b=0;b<f[x].morphTargets.length;b++)p[f[x].morphTargets[b]]=-1;for(let b in p){let m=[],d=[];for(let w=0;w!==f[x].morphTargets.length;++w){let M=f[x];m.push(M.time),d.push(M.morphTarget===b?1:0)}r.push(new jn(".morphTargetInfluence["+b+"]",m,d))}l=p.length*a}else{let p=".bones["+t[u].name+"]";n(Kn,p+".position",f,"pos",r),n(Zn,p+".quaternion",f,"rot",r),n(Kn,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function xp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jn;case"vector":case"vector2":case"vector3":case"vector4":return Kn;case"color":return Xs;case"quaternion":return Zn;case"bool":case"boolean":return pi;case"string":return mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xp(i.type);if(i.times===void 0){let t=[],n=[];pf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},bo=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},mf=new bo,kn=class{constructor(e){this.manager=e!==void 0?e:mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};kn.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},pc=class extends Error{constructor(e,t){super(e),this.response=t}},ir=class extends kn{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:r});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=li[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,x=p!==0,b=0,m=new ReadableStream({start(d){w();function w(){u.read().then(({done:M,value:_})=>{if(M)d.close();else{b+=_.byteLength;let P=new ProgressEvent("progress",{lengthComputable:x,loaded:b,total:p});for(let A=0,D=h.length;A<D;A++){let z=h[A];z.onProgress&&z.onProgress(P)}d.enqueue(_),w()}},M=>{d.error(M)})}}});return new Response(m)}else throw new pc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{hi.add(e,c);let h=li[e];delete li[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var _o=class extends kn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Br("img");function l(){h(),hi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Ys=class extends kn{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new Yn,o=new ir(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:En,a.wrapT=c.wrapT!==void 0?c.wrapT:En,a.magFilter=c.magFilter!==void 0?c.magFilter:Dt,a.minFilter=c.minFilter!==void 0?c.minFilter:Dt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Tn),c.mipmapCount===1&&(a.minFilter=Dt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}},rr=class extends kn{constructor(e){super(e)}load(e,t,n,r){let s=new Wt,a=new _o(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},sr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ar=class extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ac=new tt,Tu=new k,Au=new k,js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=class extends js{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=$i*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Zs=class extends sr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ru=new tt,Ts=new k,oc=new k,gc=class extends js{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),r.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}},Hn=class extends sr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gi=class extends Us{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vc=class extends js{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ks=class extends kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),hi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});hi.add(e,l),s.manager.itemStart(e)}};var yo=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Js=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cu(){return performance.now()}var kc="\\[\\]\\.:\\/",_p=new RegExp("["+kc+"]","g"),Hc="[^"+kc+"]",yp="[^"+kc.replace("\\.","")+"]",Mp=/((?:WC+[\/:])*)/.source.replace("WC",Hc),Sp=/(WCOD+)?/.source.replace("WCOD",yp),Ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Tp=new RegExp("^"+Mp+Sp+Ep+wp+"$"),Ap=["material","materials","bones","map"],xc=class{constructor(e,t,n){let r=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_p,"")}static parseTrackName(e){let t=Tp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ap.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=xc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var Pu=new tt,or=class{constructor(e,t,n=0,r=1/0){this.ray=new Ii(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,n=[]){return bc(e,this,n,t),n.sort(Iu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)bc(e[r],this,n,t);return n.sort(Iu),n}};function Iu(i,e){return i.distance-e.distance}function bc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)bc(s[a],e,t,!0)}}function Gc(i,e,t,n){let r=Rp(n);switch(t){case Cc:return i*e;case Qr:return i*e/r.components*r.byteLength;case Go:return i*e/r.components*r.byteLength;case Ic:return i*e*2/r.components*r.byteLength;case Vo:return i*e*2/r.components*r.byteLength;case Pc:return i*e*3/r.components*r.byteLength;case Jt:return i*e*4/r.components*r.byteLength;case Wo:return i*e*4/r.components*r.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qo:case jo:return Math.max(i,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(i,8)*Math.max(e,8)/2;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case aa:case fl:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dc:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(i){switch(i){case Kt:case Tc:return{byteLength:1,components:1};case Jr:case Ac:case Rt:return{byteLength:2,components:1};case ko:case Ho:return{byteLength:2,components:4};case Ni:case zo:case nn:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");function zf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){let x=u[f],b=u[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++f,u[f]=b)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){let b=u[p];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,em=`#define PI 3.141592653589793
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
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
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
}`,Pm=`
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,j0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,Q0=`#define PHONG
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
}`,$0=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,rg=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Ip,alphahash_pars_fragment:Dp,alphamap_fragment:Lp,alphamap_pars_fragment:Up,alphatest_fragment:Np,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Zp,color_fragment:Kp,color_pars_fragment:Jp,color_pars_vertex:Qp,color_vertex:$p,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:sm,emissivemap_pars_fragment:am,colorspace_fragment:om,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:fm,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:vm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:bm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:ym,lights_pars_begin:Mm,lights_toon_fragment:Em,lights_toon_pars_fragment:wm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:Rm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Pm,lights_fragment_maps:Im,lights_fragment_end:Dm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:zm,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:jm,normal_fragment_maps:Zm,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:Qm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:v0,skinning_vertex:x0,skinnormal_vertex:b0,specularmap_fragment:_0,specularmap_pars_fragment:y0,tonemapping_fragment:M0,tonemapping_pars_fragment:S0,transmission_fragment:E0,transmission_pars_fragment:w0,uv_pars_fragment:T0,uv_pars_vertex:A0,uv_vertex:R0,worldpos_vertex:C0,background_vert:P0,background_frag:I0,backgroundCube_vert:D0,backgroundCube_frag:L0,cube_vert:U0,cube_frag:N0,depth_vert:F0,depth_frag:O0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:k0,equirect_frag:H0,linedashed_vert:G0,linedashed_frag:V0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:j0,meshmatcap_frag:Z0,meshnormal_vert:K0,meshnormal_frag:J0,meshphong_vert:Q0,meshphong_frag:$0,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:rg,points_frag:sg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},Re={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Qn={basic:{uniforms:rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Le(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:rn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:rn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Le(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:rn([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:rn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:rn([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:rn([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:rn([Re.common,Re.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:rn([Re.lights,Re.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Qn.physical={uniforms:rn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var xl={r:0,b:0,g:0},dr=new Bn,hg=new tt;function ug(i,e,t,n,r,s,a){let o=new Le(0),l=s===!0?0:1,c,h,u=null,f=0,p=null;function x(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function b(M){let _=!1,P=x(M);P===null?d(o,l):P&&P.isColor&&(d(P,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){let P=x(_);P&&(P.isCubeTexture||P.mapping===ta)?(h===void 0&&(h=new it(new en(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:fr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),dr.copy(_.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(dr)),h.material.toneMapped=lt.getTransfer(P.colorSpace)!==vt,(u!==P||f!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new it(new dn(2,2),new Et({name:"BackgroundMaterial",uniforms:fr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=lt.getTransfer(P.colorSpace)!==vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,f=P.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,_){M.getRGB(xl,zc(i)),n.buffers.color.setClear(xl.r,xl.g,xl.b,_,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:b,addToRenderList:m,dispose:w}}function fg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(y,N,W,j,$){let Z=!1,K=u(j,W,N);s!==K&&(s=K,c(s.object)),Z=p(y,j,W,$),Z&&x(y,j,W,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(y,N,W,j),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,N,W){let j=W.wireframe===!0,$=n[y.id];$===void 0&&($={},n[y.id]=$);let Z=$[N.id];Z===void 0&&(Z={},$[N.id]=Z);let K=Z[j];return K===void 0&&(K=f(l()),Z[j]=K),K}function f(y){let N=[],W=[],j=[];for(let $=0;$<t;$++)N[$]=0,W[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:j,object:y,attributes:{},index:null}}function p(y,N,W,j){let $=s.attributes,Z=N.attributes,K=0,oe=W.getAttributes();for(let Q in oe)if(oe[Q].location>=0){let ve=$[Q],Ae=Z[Q];if(Ae===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;K++}return s.attributesNum!==K||s.index!==j}function x(y,N,W,j){let $={},Z=N.attributes,K=0,oe=W.getAttributes();for(let Q in oe)if(oe[Q].location>=0){let ve=Z[Q];ve===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));let Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),$[Q]=Ae,K++}s.attributes=$,s.attributesNum=K,s.index=j}function b(){let y=s.newAttributes;for(let N=0,W=y.length;N<W;N++)y[N]=0}function m(y){d(y,0)}function d(y,N){let W=s.newAttributes,j=s.enabledAttributes,$=s.attributeDivisors;W[y]=1,j[y]===0&&(i.enableVertexAttribArray(y),j[y]=1),$[y]!==N&&(i.vertexAttribDivisor(y,N),$[y]=N)}function w(){let y=s.newAttributes,N=s.enabledAttributes;for(let W=0,j=N.length;W<j;W++)N[W]!==y[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function M(y,N,W,j,$,Z,K){K===!0?i.vertexAttribIPointer(y,N,W,$,Z):i.vertexAttribPointer(y,N,W,j,$,Z)}function _(y,N,W,j){b();let $=j.attributes,Z=W.getAttributes(),K=N.defaultAttributeValues;for(let oe in Z){let Q=Z[oe];if(Q.location>=0){let le=$[oe];if(le===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){let ve=le.normalized,Ae=le.itemSize,Oe=e.get(le);if(Oe===void 0)continue;let et=Oe.buffer,ne=Oe.type,ue=Oe.bytesPerElement,ae=ne===i.INT||ne===i.UNSIGNED_INT||le.gpuType===zo;if(le.isInterleavedBufferAttribute){let de=le.data,Ce=de.stride,Ze=le.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Q.locationSize;Ue++)d(Q.location+Ue,de.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<Q.locationSize;Ue++)m(Q.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Ue=0;Ue<Q.locationSize;Ue++)M(Q.location+Ue,Ae/Q.locationSize,ne,ve,Ce*ue,(Ze+Ae/Q.locationSize*Ue)*ue,ae)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<Q.locationSize;de++)d(Q.location+de,le.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<Q.locationSize;de++)m(Q.location+de);i.bindBuffer(i.ARRAY_BUFFER,et);for(let de=0;de<Q.locationSize;de++)M(Q.location+de,Ae/Q.locationSize,ne,ve,Ae*ue,Ae/Q.locationSize*de*ue,ae)}}else if(K!==void 0){let ve=K[oe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(Q.location,ve);break;case 3:i.vertexAttrib3fv(Q.location,ve);break;case 4:i.vertexAttrib4fv(Q.location,ve);break;default:i.vertexAttrib1fv(Q.location,ve)}}}}w()}function P(){z();for(let y in n){let N=n[y];for(let W in N){let j=N[W];for(let $ in j)h(j[$].object),delete j[$];delete N[W]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let N=n[y.id];for(let W in N){let j=N[W];for(let $ in j)h(j[$].object),delete j[$];delete N[W]}delete n[y.id]}function D(y){for(let N in n){let W=n[N];if(W[y.id]===void 0)continue;let j=W[y.id];for(let $ in j)h(j[$].object),delete j[$];delete W[y.id]}}function z(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:m,disableUnusedAttributes:w}}function dg(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let b=0;b<u;b++)x+=h[b]*f[b];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Jt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let z=D===Rt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Kt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==nn&&!z)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:P,maxSamples:A}}function mg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Xn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{let w=s?0:n,M=w*4,_=d.clippingState||null;l.value=_,_=h(x,f,M,p);for(let P=0;P!==M;++P)_[P]=t[P];d.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,x!==!0||m===null){let d=p+b*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==b;++M,_+=4)a.copy(u[M]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function gg(i){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=cr:o===Oo&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fo||o===Oo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new co(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ts=4,gf=[.125,.215,.35,.446,.526,.582],gr=20,Vc=new gi,vf=new Le,Wc=null,Xc=0,qc=0,Yc=!1,mr=(1+Math.sqrt(5))/2,es=1/mr,xf=[new k(-mr,es,0),new k(mr,es,0),new k(-es,0,mr),new k(es,0,mr),new k(0,mr,-es),new k(0,mr,es),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],vg=new k,Bi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=vg}=s;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Rt,format:Jt,colorSpace:zt,depthBuffer:!1},r=bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=bg(s,e,t)}return r}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,r,s){let l=new It(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(vf),u.toneMapping=bi,u.autoClear=!1;let x=new on({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),b=new it(new en,x),m=!1,d=e.background;d?d.isColor&&(x.color.copy(d),e.background=null,m=!0):(x.color.copy(vf),m=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let _=this._cubeSize;bl(r,M*_,w>2?_:0,_,_),u.setRenderTarget(r),m&&u.render(b,l),u.render(e,l)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===cr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;bl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xf[(r-s-1)%xf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),b=s/x,m=isFinite(s)?1+Math.floor(h*b):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);let d=[],w=0;for(let D=0;D<gr;++D){let z=D/b,E=Math.exp(-z*z/2);d.push(E),D===0?w+=E:D<m&&(w+=2*E)}for(let D=0;D<d.length;D++)d[D]=d[D]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;let _=this._sizeLods[r],P=3*_*(r>M-ts?r-M+ts:0),A=4*(this._cubeSize-_);bl(t,P,A,3*_,2*_),l.setRenderTarget(t),l.render(u,Vc)}};function xg(i){let e=[],t=[],n=[],r=i,s=i-ts+1+gf.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ts?l=gf[a-i+ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,b=3,m=2,d=1,w=new Float32Array(b*x*p),M=new Float32Array(m*x*p),_=new Float32Array(d*x*p);for(let A=0;A<p;A++){let D=A%3*2/3-1,z=A>2?0:-1,E=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];w.set(E,b*x*A),M.set(f,m*x*A);let y=[A,A,A,A,A,A];_.set(y,d*x*A)}let P=new Xt;P.setAttribute("position",new Ot(w,b)),P.setAttribute("uv",new Ot(M,m)),P.setAttribute("faceIndex",new Ot(_,d)),e.push(P),r>ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bf(i,e,t){let n=new Ct(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bg(i,e,t){let n=new Float32Array(gr),r=new k(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ih(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function _f(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function yf(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function _g(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Fo||l===Oo,h=l===cr||l===hr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Bi(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Bi(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Mg(i,e,t,n){let r={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,x=u.attributes.position,b=0;if(p!==null){let w=p.array;b=p.version;for(let M=0,_=w.length;M<_;M+=3){let P=w[M+0],A=w[M+1],D=w[M+2];f.push(P,A,A,D,D,P)}}else if(x!==void 0){let w=x.array;b=x.version;for(let M=0,_=w.length/3-1;M<_;M+=3){let P=M+0,A=M+1,D=M+2;f.push(P,A,A,D,D,P)}}else return;let m=new(Bc(f)?Ls:Ds)(f,1);m.version=b;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sg(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,f*a,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,b){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,b,0,x);let d=0;for(let w=0;w<x;w++)d+=p[w]*b[w];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Eg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wg(i,e,t){let n=new WeakMap,r=new pt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;p===!0&&(M=1),x===!0&&(M=2),b===!0&&(M=3);let _=o.attributes.position.count*M,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*P*4*u),D=new Is(A,_,P,u);D.type=nn,D.needsUpdate=!0;let z=M*4;for(let y=0;y<u;y++){let N=m[y],W=d[y],j=w[y],$=_*P*4*y;for(let Z=0;Z<N.count;Z++){let K=Z*z;p===!0&&(r.fromBufferAttribute(N,Z),A[$+K+0]=r.x,A[$+K+1]=r.y,A[$+K+2]=r.z,A[$+K+3]=0),x===!0&&(r.fromBufferAttribute(W,Z),A[$+K+4]=r.x,A[$+K+5]=r.y,A[$+K+6]=r.z,A[$+K+7]=0),b===!0&&(r.fromBufferAttribute(j,Z),A[$+K+8]=r.x,A[$+K+9]=r.y,A[$+K+10]=r.z,A[$+K+11]=j.itemSize===4?r.w:1)}}f={count:u,texture:D,size:new Ve(_,P)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Tg(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var kf=new Wt,Mf=new nr(1,1),Hf=new Is,Gf=new oo,Vf=new Ns,Sf=[],Ef=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Sf[r];if(s===void 0&&(s=new Float32Array(r),Sf[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yl(i,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),Yt(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),Yt(t,n)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),Yt(t,n)}}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Gg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Mf.compareFunction=Uc,s=Mf):s=kf,t.setTexture2D(e||s,r)}function Vg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gf,r)}function Wg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vf,r)}function Xg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hf,r)}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Dg;case 35676:return Lg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Yg(i,e){i.uniform1fv(this.addr,e)}function jg(i,e){let t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Zg(i,e){let t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function Kg(i,e){let t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Jg(i,e){let t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qg(i,e){let t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){let t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ev(i,e){i.uniform1iv(this.addr,e)}function tv(i,e){i.uniform2iv(this.addr,e)}function nv(i,e){i.uniform3iv(this.addr,e)}function iv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function sv(i,e){i.uniform2uiv(this.addr,e)}function av(i,e){i.uniform3uiv(this.addr,e)}function ov(i,e){i.uniform4uiv(this.addr,e)}function lv(i,e,t){let n=this.cache,r=e.length,s=yl(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||kf,s[a])}function cv(i,e,t){let n=this.cache,r=e.length,s=yl(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gf,s[a])}function hv(i,e,t){let n=this.cache,r=e.length,s=yl(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vf,s[a])}function uv(i,e,t){let n=this.cache,r=e.length,s=yl(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hf,s[a])}function fv(i){switch(i){case 5126:return Yg;case 35664:return jg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return $g;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}var Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qg(t.type)}},Kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}},Jc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},jc=/(\w+)(\])?(\[|\.)?/g;function Rf(i,e){i.seq.push(e),i.map[e.id]=e}function dv(i,e,t){let n=i.name,r=n.length;for(jc.lastIndex=0;;){let s=jc.exec(n),a=jc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rf(t,c===void 0?new Zc(o,i,e):new Kc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Jc(o),Rf(t,u)),t=u}}}var ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);dv(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var pv=37297,mv=0;function gv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pf=new at;function vv(i){lt._getMatrix(Pf,lt.workingColorSpace,i);let e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Cs:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function If(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gv(i.getShaderSource(e),a)}else return r}function xv(i,e){let t=vv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bv(i,e){let t;switch(e){case Po:t="Linear";break;case Io:t="Reinhard";break;case Do:t="Cineon";break;case Lo:t="ACESFilmic";break;case Ui:t="AgX";break;case No:t="Neutral";break;case Uo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new k;function _v(){lt.getLuminanceCoefficients(_l);let i=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Mv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ca(i){return i!==""}function Df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(Ev,Tv)}var wv=new Map;function Tv(i,e){let t=ot[e];if(t===void 0){let n=wv.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}var Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(Av,Rv)}function Rv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hr&&(e="ENVMAP_MODE_REFRACTION"),e}function Dv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:e="ENVMAP_BLENDING_MULTIPLY";break;case ju:e="ENVMAP_BLENDING_MIX";break;case Zu:e="ENVMAP_BLENDING_ADD";break}return e}function Lv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Uv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cv(t),c=Pv(t),h=Iv(t),u=Dv(t),f=Lv(t),p=yv(t),x=Mv(s),b=r.createProgram(),m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ca).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ca).join(`
`),d.length>0&&(d+=`
`)):(m=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),d=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?ot.tonemapping_pars_fragment:"",t.toneMapping!==bi?bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,xv("linearToOutputTexel",t.outputColorSpace),_v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=Qc(a),a=Df(a,t),a=Lf(a,t),o=Qc(o),o=Df(o,t),o=Lf(o,t),a=Uf(a),o=Uf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=w+m+a,_=w+d+o,P=Cf(r,r.VERTEX_SHADER,M),A=Cf(r,r.FRAGMENT_SHADER,_);r.attachShader(b,P),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function D(N){if(i.debug.checkShaderErrors){let W=r.getProgramInfoLog(b).trim(),j=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(A).trim(),Z=!0,K=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,P,A);else{let oe=If(r,P,"vertex"),Q=If(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+oe+`
`+Q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||$==="")&&(K=!1);K&&(N.diagnostics={runnable:Z,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(P),r.deleteShader(A),z=new ns(r,b),E=Sv(r,b)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(b,pv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=A,this}var Nv=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eh(e),t.set(e,n)),n}},eh=class{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}};function Fv(i,e,t,n,r,s,a){let o=new kr,l=new $c,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,N,W,j){let $=W.fog,Z=j.geometry,K=E.isMeshStandardMaterial?W.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),Q=oe&&oe.mapping===ta?oe.image.height:null,le=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ae=ve!==void 0?ve.length:0,Oe=0;Z.morphAttributes.position!==void 0&&(Oe=1),Z.morphAttributes.normal!==void 0&&(Oe=2),Z.morphAttributes.color!==void 0&&(Oe=3);let et,ne,ue,ae;if(le){let mt=Qn[le];et=mt.vertexShader,ne=mt.fragmentShader}else et=E.vertexShader,ne=E.fragmentShader,l.update(E),ue=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);let de=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ze=j.isInstancedMesh===!0,Ue=j.isBatchedMesh===!0,be=!!E.map,Se=!!E.matcap,ye=!!oe,B=!!E.aoMap,bt=!!E.lightMap,Ye=!!E.bumpMap,je=!!E.normalMap,Be=!!E.displacementMap,ft=!!E.emissiveMap,He=!!E.metalnessMap,I=!!E.roughnessMap,S=E.anisotropy>0,J=E.clearcoat>0,se=E.dispersion>0,fe=E.iridescence>0,re=E.sheen>0,De=E.transmission>0,Me=S&&!!E.anisotropyMap,Ne=J&&!!E.clearcoatMap,We=J&&!!E.clearcoatNormalMap,me=J&&!!E.clearcoatRoughnessMap,we=fe&&!!E.iridescenceMap,Pe=fe&&!!E.iridescenceThicknessMap,Ge=re&&!!E.sheenColorMap,Ie=re&&!!E.sheenRoughnessMap,rt=!!E.specularMap,H=!!E.specularColorMap,ie=!!E.specularIntensityMap,L=De&&!!E.transmissionMap,V=De&&!!E.thicknessMap,X=!!E.gradientMap,ee=!!E.alphaMap,xe=E.alphaTest>0,Te=!!E.alphaHash,Qe=!!E.extensions,yt=bi;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Nt={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:ne,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&j._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&j.instanceColor!==null,instancingMorph:Ze&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:zt,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:Se,envMap:ye,envMapMode:ye&&oe.mapping,envMapCubeUVHeight:Q,aoMap:B,lightMap:bt,bumpMap:Ye,normalMap:je,displacementMap:f&&Be,emissiveMap:ft,normalMapObjectSpace:je&&E.normalMapType===ef,normalMapTangentSpace:je&&E.normalMapType===vl,metalnessMap:He,roughnessMap:I,anisotropy:S,anisotropyMap:Me,clearcoat:J,clearcoatMap:Ne,clearcoatNormalMap:We,clearcoatRoughnessMap:me,dispersion:se,iridescence:fe,iridescenceMap:we,iridescenceThicknessMap:Pe,sheen:re,sheenColorMap:Ge,sheenRoughnessMap:Ie,specularMap:rt,specularColorMap:H,specularIntensityMap:ie,transmission:De,transmissionMap:L,thicknessMap:V,gradientMap:X,opaque:E.transparent===!1&&E.blending===Zi&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:xe,alphaHash:Te,combine:E.combine,mapUv:be&&b(E.map.channel),aoMapUv:B&&b(E.aoMap.channel),lightMapUv:bt&&b(E.lightMap.channel),bumpMapUv:Ye&&b(E.bumpMap.channel),normalMapUv:je&&b(E.normalMap.channel),displacementMapUv:Be&&b(E.displacementMap.channel),emissiveMapUv:ft&&b(E.emissiveMap.channel),metalnessMapUv:He&&b(E.metalnessMap.channel),roughnessMapUv:I&&b(E.roughnessMap.channel),anisotropyMapUv:Me&&b(E.anisotropyMap.channel),clearcoatMapUv:Ne&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(E.sheenRoughnessMap.channel),specularMapUv:rt&&b(E.specularMap.channel),specularColorMapUv:H&&b(E.specularColorMap.channel),specularIntensityMapUv:ie&&b(E.specularIntensityMap.channel),transmissionMapUv:L&&b(E.transmissionMap.channel),thicknessMapUv:V&&b(E.thicknessMap.channel),alphaMapUv:ee&&b(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(je||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(be||ee),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:j.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===vt,decodeVideoTextureEmissive:ft&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&E.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function d(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)y.push(N),y.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(w(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function w(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let y=x[E.type],N;if(y){let W=Qn[y];N=cn.clone(W.uniforms)}else N=E.uniforms;return N}function P(E,y){let N;for(let W=0,j=h.length;W<j;W++){let $=h[W];if($.cacheKey===y){N=$,++N.usedTimes;break}}return N===void 0&&(N=new Uv(i,y,E,s),h.push(N)),N}function A(E){if(--E.usedTimes===0){let y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function D(E){l.remove(E)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:P,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:z}}function Ov(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Bv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Of(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,p,x,b,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:b,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=b,d.group=m),e++,d}function o(u,f,p,x,b,m){let d=a(u,f,p,x,b,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,x,b,m){let d=a(u,f,p,x,b,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Bv),n.length>1&&n.sort(f||Ff),r.length>1&&r.sort(f||Ff)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function zv(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Of,i.set(n,[a])):r>=s.length?(a=new Of,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Le};break;case"SpotLight":t={position:new k,direction:new k,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Gv=0;function Vv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wv(i){let e=new kv,t=Hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let r=new k,s=new tt,a=new tt;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,x=0,b=0,m=0,d=0,w=0,M=0,_=0,P=0,A=0,D=0;c.sort(Vv);for(let E=0,y=c.length;E<y;E++){let N=c[E],W=N.color,j=N.intensity,$=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=W.r*j,u+=W.g*j,f+=W.b*j;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],j);D++}else if(N.isDirectionalLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let oe=N.shadow,Q=t.get(N);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=N.shadow.matrix,w++}n.directional[p]=K,p++}else if(N.isSpotLight){let K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(W).multiplyScalar(j),K.distance=$,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[b]=K;let oe=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,oe.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[b]=oe.matrix,N.castShadow){let Q=t.get(N);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=Z,_++}b++}else if(N.isRectAreaLight){let K=e.get(N);K.color.copy(W).multiplyScalar(j),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=K,m++}else if(N.isPointLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let oe=N.shadow,Q=t.get(N);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,Q.shadowCameraNear=oe.camera.near,Q.shadowCameraFar=oe.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=Z,n.pointShadowMatrix[x]=N.shadow.matrix,M++}n.point[x]=K,x++}else if(N.isHemisphereLight){let K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(j),K.groundColor.copy(N.groundColor).multiplyScalar(j),n.hemi[d]=K,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==p||z.pointLength!==x||z.spotLength!==b||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==w||z.numPointShadows!==M||z.numSpotShadows!==_||z.numSpotMaps!==P||z.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,z.directionalLength=p,z.pointLength=x,z.spotLength=b,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=w,z.numPointShadows=M,z.numSpotShadows=_,z.numSpotMaps=P,z.numLightProbes=D,n.version=Gv++)}function l(c,h){let u=0,f=0,p=0,x=0,b=0,m=h.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){let M=c[d];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=n.hemi[b];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function Bf(i){let e=new Wv(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Xv(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Bf(i),e.set(r,[o])):s>=a.length?(o=new Bf(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`;function jv(i,e,t){let n=new qr,r=new Ve,s=new Ve,a=new pt,o=new fo({depthPacking:$u}),l=new po,c={},h=t.maxTextureSize,u={[On]:ln,[ln]:On,[mn]:mn},f=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new Xt;x.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new it(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let d=this.type;this.render=function(A,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),W=i.state;W.setBlending(kt),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let j=d!==Jn&&this.type===Jn,$=d===Jn&&this.type!==Jn;for(let Z=0,K=A.length;Z<K;Z++){let oe=A[Z],Q=oe.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);let le=Q.getFrameExtents();if(r.multiply(le),s.copy(Q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,Q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,Q.mapSize.y=s.y)),Q.map===null||j===!0||$===!0){let Ae=this.type!==Jn?{minFilter:Bt,magFilter:Bt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ct(r.x,r.y,Ae),Q.map.texture.name=oe.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let ve=Q.getViewportCount();for(let Ae=0;Ae<ve;Ae++){let Oe=Q.getViewport(Ae);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),W.viewport(a),Q.updateMatrices(oe,Ae),n=Q.getFrustum(),_(D,z,Q.camera,oe,this.type)}Q.isPointLightShadow!==!0&&this.type===Jn&&w(Q,z),Q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,N)};function w(A,D){let z=e.update(b);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ct(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,z,f,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,z,p,b,null)}function M(A,D,z,E){let y=null,N=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)y=N;else if(y=z.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let W=y.uuid,j=D.uuid,$=c[W];$===void 0&&($={},c[W]=$);let Z=$[j];Z===void 0&&(Z=y.clone(),$[j]=Z,D.addEventListener("dispose",P)),y=Z}if(y.visible=D.visible,y.wireframe=D.wireframe,E===Jn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:u[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let W=i.properties.get(y);W.light=z}return y}function _(A,D,z,E,y){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let j=e.update(A),$=A.material;if(Array.isArray($)){let Z=j.groups;for(let K=0,oe=Z.length;K<oe;K++){let Q=Z[K],le=$[Q.materialIndex];if(le&&le.visible){let ve=M(A,le,E,y);A.onBeforeShadow(i,A,D,z,j,ve,Q),i.renderBufferDirect(z,null,j,ve,A,Q),A.onAfterShadow(i,A,D,z,j,ve,Q)}}}else if($.visible){let Z=M(A,$,E,y);A.onBeforeShadow(i,A,D,z,j,Z,null),i.renderBufferDirect(z,null,j,Z,A,null),A.onAfterShadow(i,A,D,z,j,Z,null)}}let W=A.children;for(let j=0,$=W.length;j<$;j++)_(W[j],D,z,E,y)}function P(A){A.target.removeEventListener("dispose",P);for(let z in c){let E=c[z],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var Zv={[So]:Eo,[wo]:Ro,[To]:Co,[Ki]:Ao,[Eo]:So,[Ro]:wo,[Co]:To,[Ao]:Ki};function Kv(i,e){function t(){let L=!1,V=new pt,X=null,ee=new pt(0,0,0,0);return{setMask:function(xe){X!==xe&&!L&&(i.colorMask(xe,xe,xe,xe),X=xe)},setLocked:function(xe){L=xe},setClear:function(xe,Te,Qe,yt,Nt){Nt===!0&&(xe*=yt,Te*=yt,Qe*=yt),V.set(xe,Te,Qe,yt),ee.equals(V)===!1&&(i.clearColor(xe,Te,Qe,yt),ee.copy(V))},reset:function(){L=!1,X=null,ee.set(-1,0,0,0)}}}function n(){let L=!1,V=!1,X=null,ee=null,xe=null;return{setReversed:function(Te){if(V!==Te){let Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),V=Te;let yt=xe;xe=null,this.setClear(yt)}},getReversed:function(){return V},setTest:function(Te){Te?de(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Te){X!==Te&&!L&&(i.depthMask(Te),X=Te)},setFunc:function(Te){if(V&&(Te=Zv[Te]),ee!==Te){switch(Te){case So:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=Te}},setLocked:function(Te){L=Te},setClear:function(Te){xe!==Te&&(V&&(Te=1-Te),i.clearDepth(Te),xe=Te)},reset:function(){L=!1,X=null,ee=null,xe=null,V=!1}}}function r(){let L=!1,V=null,X=null,ee=null,xe=null,Te=null,Qe=null,yt=null,Nt=null;return{setTest:function(mt){L||(mt?de(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(mt){V!==mt&&!L&&(i.stencilMask(mt),V=mt)},setFunc:function(mt,vn,In){(X!==mt||ee!==vn||xe!==In)&&(i.stencilFunc(mt,vn,In),X=mt,ee=vn,xe=In)},setOp:function(mt,vn,In){(Te!==mt||Qe!==vn||yt!==In)&&(i.stencilOp(mt,vn,In),Te=mt,Qe=vn,yt=In)},setLocked:function(mt){L=mt},setClear:function(mt){Nt!==mt&&(i.clearStencil(mt),Nt=mt)},reset:function(){L=!1,V=null,X=null,ee=null,xe=null,Te=null,Qe=null,yt=null,Nt=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],x=null,b=!1,m=null,d=null,w=null,M=null,_=null,P=null,A=null,D=new Le(0,0,0),z=0,E=!1,y=null,N=null,W=null,j=null,$=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,oe=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=oe>=1):Q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=oe>=2);let le=null,ve={},Ae=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),et=new pt().fromArray(Ae),ne=new pt().fromArray(Oe);function ue(L,V,X,ee){let xe=new Uint8Array(4),Te=i.createTexture();i.bindTexture(L,Te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<X;Qe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(V+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Te}let ae={};ae[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(Ki),Ye(!1),je(_c),de(i.CULL_FACE),B(kt);function de(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ce(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ze(L,V){return u[L]!==V?(i.bindFramebuffer(L,V),u[L]=V,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=V),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=V),!0):!1}function Ue(L,V){let X=p,ee=!1;if(L){X=f.get(V),X===void 0&&(X=[],f.set(V,X));let xe=L.textures;if(X.length!==xe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Qe=xe.length;Te<Qe;Te++)X[Te]=i.COLOR_ATTACHMENT0+Te;X.length=xe.length,ee=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ee=!0);ee&&i.drawBuffers(X)}function be(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let Se={[_n]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};Se[Fu]=i.MIN,Se[Ou]=i.MAX;let ye={[lr]:i.ZERO,[Bu]:i.ONE,[zu]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[ea]:i.DST_COLOR,[$s]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(L,V,X,ee,xe,Te,Qe,yt,Nt,mt){if(L===kt){b===!0&&(Ce(i.BLEND),b=!1);return}if(b===!1&&(de(i.BLEND),b=!0),L!==Mo){if(L!==m||mt!==E){if((d!==_n||_!==_n)&&(i.blendEquation(i.FUNC_ADD),d=_n,_=_n),mt)switch(L){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,M=null,P=null,A=null,D.set(0,0,0),z=0,m=L,E=mt}return}xe=xe||V,Te=Te||X,Qe=Qe||ee,(V!==d||xe!==_)&&(i.blendEquationSeparate(Se[V],Se[xe]),d=V,_=xe),(X!==w||ee!==M||Te!==P||Qe!==A)&&(i.blendFuncSeparate(ye[X],ye[ee],ye[Te],ye[Qe]),w=X,M=ee,P=Te,A=Qe),(yt.equals(D)===!1||Nt!==z)&&(i.blendColor(yt.r,yt.g,yt.b,Nt),D.copy(yt),z=Nt),m=L,E=!1}function bt(L,V){L.side===mn?Ce(i.CULL_FACE):de(i.CULL_FACE);let X=L.side===ln;V&&(X=!X),Ye(X),L.blending===Zi&&L.transparent===!1?B(kt):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let ee=L.stencilWrite;o.setTest(ee),ee&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function je(L){L!==Du?(de(i.CULL_FACE),L!==N&&(L===_c?i.cullFace(i.BACK):L===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),N=L}function Be(L){L!==W&&(K&&i.lineWidth(L),W=L)}function ft(L,V,X){L?(de(i.POLYGON_OFFSET_FILL),(j!==V||$!==X)&&(i.polygonOffset(V,X),j=V,$=X)):Ce(i.POLYGON_OFFSET_FILL)}function He(L){L?de(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function I(L){L===void 0&&(L=i.TEXTURE0+Z-1),le!==L&&(i.activeTexture(L),le=L)}function S(L,V,X){X===void 0&&(le===null?X=i.TEXTURE0+Z-1:X=le);let ee=ve[X];ee===void 0&&(ee={type:void 0,texture:void 0},ve[X]=ee),(ee.type!==L||ee.texture!==V)&&(le!==X&&(i.activeTexture(X),le=X),i.bindTexture(L,V||ae[L]),ee.type=L,ee.texture=V)}function J(){let L=ve[le];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(L){et.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function Ie(L){ne.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function rt(L,V){let X=c.get(V);X===void 0&&(X=new WeakMap,c.set(V,X));let ee=X.get(L);ee===void 0&&(ee=i.getUniformBlockIndex(V,L.name),X.set(L,ee))}function H(L,V){let ee=c.get(V).get(L);l.get(V)!==ee&&(i.uniformBlockBinding(V,ee,L.__bindingPointIndex),l.set(V,ee))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ve={},u={},f=new WeakMap,p=[],x=null,b=!1,m=null,d=null,w=null,M=null,_=null,P=null,A=null,D=new Le(0,0,0),z=0,E=!1,y=null,N=null,W=null,j=null,$=null,et.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:Ce,bindFramebuffer:Ze,drawBuffers:Ue,useProgram:be,setBlending:B,setMaterial:bt,setFlipSided:Ye,setCullFace:je,setLineWidth:Be,setPolygonOffset:ft,setScissorTest:He,activeTexture:I,bindTexture:S,unbindTexture:J,compressedTexImage2D:se,compressedTexImage3D:fe,texImage2D:we,texImage3D:Pe,updateUBOMapping:rt,uniformBlockBinding:H,texStorage2D:We,texStorage3D:me,texSubImage2D:re,texSubImage3D:De,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:Ge,viewport:Ie,reset:ie}}function Jv(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return p?new OffscreenCanvas(I,S):Br("canvas")}function b(I,S,J){let se=1,fe=He(I);if((fe.width>J||fe.height>J)&&(se=J/Math.max(fe.width,fe.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let re=Math.floor(se*fe.width),De=Math.floor(se*fe.height);u===void 0&&(u=x(re,De));let Me=S?x(re,De):u;return Me.width=re,Me.height=De,Me.getContext("2d").drawImage(I,0,0,re,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+re+"x"+De+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,S,J,se,fe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let re=S;if(S===i.RED&&(J===i.FLOAT&&(re=i.R32F),J===i.HALF_FLOAT&&(re=i.R16F),J===i.UNSIGNED_BYTE&&(re=i.R8)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(re=i.R8UI),J===i.UNSIGNED_SHORT&&(re=i.R16UI),J===i.UNSIGNED_INT&&(re=i.R32UI),J===i.BYTE&&(re=i.R8I),J===i.SHORT&&(re=i.R16I),J===i.INT&&(re=i.R32I)),S===i.RG&&(J===i.FLOAT&&(re=i.RG32F),J===i.HALF_FLOAT&&(re=i.RG16F),J===i.UNSIGNED_BYTE&&(re=i.RG8)),S===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(re=i.RG8UI),J===i.UNSIGNED_SHORT&&(re=i.RG16UI),J===i.UNSIGNED_INT&&(re=i.RG32UI),J===i.BYTE&&(re=i.RG8I),J===i.SHORT&&(re=i.RG16I),J===i.INT&&(re=i.RG32I)),S===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(re=i.RGB8UI),J===i.UNSIGNED_SHORT&&(re=i.RGB16UI),J===i.UNSIGNED_INT&&(re=i.RGB32UI),J===i.BYTE&&(re=i.RGB8I),J===i.SHORT&&(re=i.RGB16I),J===i.INT&&(re=i.RGB32I)),S===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),J===i.UNSIGNED_INT&&(re=i.RGBA32UI),J===i.BYTE&&(re=i.RGBA8I),J===i.SHORT&&(re=i.RGBA16I),J===i.INT&&(re=i.RGBA32I)),S===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),S===i.RGBA){let De=fe?Cs:lt.getTransfer(se);J===i.FLOAT&&(re=i.RGBA32F),J===i.HALF_FLOAT&&(re=i.RGBA16F),J===i.UNSIGNED_BYTE&&(re=De===vt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(I,S){let J;return I?S===null||S===Ni||S===Fi?J=i.DEPTH24_STENCIL8:S===nn?J=i.DEPTH32F_STENCIL8:S===Jr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===Fi?J=i.DEPTH_COMPONENT24:S===nn?J=i.DEPTH_COMPONENT32F:S===Jr&&(J=i.DEPTH_COMPONENT16),J}function P(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==Dt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),z(S),S.isVideoTexture&&h.delete(S)}function D(I){let S=I.target;S.removeEventListener("dispose",D),y(S)}function z(I){let S=n.get(I);if(S.__webglInit===void 0)return;let J=I.source,se=f.get(J);if(se){let fe=se[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(I),Object.keys(se).length===0&&f.delete(J)}n.remove(I)}function E(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let J=I.source,se=f.get(J);delete se[S.__cacheKey],a.memory.textures--}function y(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let fe=0;fe<S.__webglFramebuffer[se].length;fe++)i.deleteFramebuffer(S.__webglFramebuffer[se][fe]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let J=I.textures;for(let se=0,fe=J.length;se<fe;se++){let re=n.get(J[se]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(J[se])}n.remove(I)}let N=0;function W(){N=0}function j(){let I=N;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),N+=1,I}function $(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Z(I,S){let J=n.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){let se=I.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(J,I,S);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function K(I,S){let J=n.get(I);if(I.version>0&&J.__version!==I.version){ne(J,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function oe(I,S){let J=n.get(I);if(I.version>0&&J.__version!==I.version){ne(J,I,S);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function Q(I,S){let J=n.get(I);if(I.version>0&&J.__version!==I.version){ue(J,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}let le={[Vt]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},ve={[Bt]:i.NEAREST,[Bo]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},Ae={[tf]:i.NEVER,[lf]:i.ALWAYS,[nf]:i.LESS,[Uc]:i.LEQUAL,[rf]:i.EQUAL,[of]:i.GEQUAL,[sf]:i.GREATER,[af]:i.NOTEQUAL};function Oe(I,S){if(S.type===nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Dt||S.magFilter===Kr||S.magFilter===ur||S.magFilter===Tn||S.minFilter===Dt||S.minFilter===Kr||S.minFilter===ur||S.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,le[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ve[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==ur&&S.minFilter!==Tn||S.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function et(I,S){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let se=S.source,fe=f.get(se);fe===void 0&&(fe={},f.set(se,fe));let re=$(S);if(re!==I.__cacheKey){fe[re]===void 0&&(fe[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),fe[re].usedTimes++;let De=fe[I.__cacheKey];De!==void 0&&(fe[I.__cacheKey].usedTimes--,De.usedTimes===0&&E(S)),I.__cacheKey=re,I.__webglTexture=fe[re].texture}return J}function ne(I,S,J){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);let fe=et(I,S),re=S.source;t.bindTexture(se,I.__webglTexture,i.TEXTURE0+J);let De=n.get(re);if(re.version!==De.__version||fe===!0){t.activeTexture(i.TEXTURE0+J);let Me=lt.getPrimaries(lt.workingColorSpace),Ne=S.colorSpace===Gn?null:lt.getPrimaries(S.colorSpace),We=S.colorSpace===Gn||Me===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let me=b(S.image,!1,r.maxTextureSize);me=ft(S,me);let we=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),Ge=M(S.internalFormat,we,Pe,S.colorSpace,S.isVideoTexture);Oe(se,S);let Ie,rt=S.mipmaps,H=S.isVideoTexture!==!0,ie=De.__version===void 0||fe===!0,L=re.dataReady,V=P(S,me);if(S.isDepthTexture)Ge=_(S.format===Oi,S.type),ie&&(H?t.texStorage2D(i.TEXTURE_2D,1,Ge,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ge,me.width,me.height,0,we,Pe,null));else if(S.isDataTexture)if(rt.length>0){H&&ie&&t.texStorage2D(i.TEXTURE_2D,V,Ge,rt[0].width,rt[0].height);for(let X=0,ee=rt.length;X<ee;X++)Ie=rt[X],H?L&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ie.width,Ie.height,we,Pe,Ie.data):t.texImage2D(i.TEXTURE_2D,X,Ge,Ie.width,Ie.height,0,we,Pe,Ie.data);S.generateMipmaps=!1}else H?(ie&&t.texStorage2D(i.TEXTURE_2D,V,Ge,me.width,me.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,we,Pe,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,me.width,me.height,0,we,Pe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){H&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Ge,rt[0].width,rt[0].height,me.depth);for(let X=0,ee=rt.length;X<ee;X++)if(Ie=rt[X],S.format!==Jt)if(we!==null)if(H){if(L)if(S.layerUpdates.size>0){let xe=Gc(Ie.width,Ie.height,S.format,S.type);for(let Te of S.layerUpdates){let Qe=Ie.data.subarray(Te*xe/Ie.data.BYTES_PER_ELEMENT,(Te+1)*xe/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Te,Ie.width,Ie.height,1,we,Qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ie.width,Ie.height,me.depth,we,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ge,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ie.width,Ie.height,me.depth,we,Pe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ge,Ie.width,Ie.height,me.depth,0,we,Pe,Ie.data)}else{H&&ie&&t.texStorage2D(i.TEXTURE_2D,V,Ge,rt[0].width,rt[0].height);for(let X=0,ee=rt.length;X<ee;X++)Ie=rt[X],S.format!==Jt?we!==null?H?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?L&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ie.width,Ie.height,we,Pe,Ie.data):t.texImage2D(i.TEXTURE_2D,X,Ge,Ie.width,Ie.height,0,we,Pe,Ie.data)}else if(S.isDataArrayTexture)if(H){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Ge,me.width,me.height,me.depth),L)if(S.layerUpdates.size>0){let X=Gc(me.width,me.height,S.format,S.type);for(let ee of S.layerUpdates){let xe=me.data.subarray(ee*X/me.data.BYTES_PER_ELEMENT,(ee+1)*X/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,me.width,me.height,1,we,Pe,xe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,we,Pe,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,me.width,me.height,me.depth,0,we,Pe,me.data);else if(S.isData3DTexture)H?(ie&&t.texStorage3D(i.TEXTURE_3D,V,Ge,me.width,me.height,me.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,we,Pe,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,me.width,me.height,me.depth,0,we,Pe,me.data);else if(S.isFramebufferTexture){if(ie)if(H)t.texStorage2D(i.TEXTURE_2D,V,Ge,me.width,me.height);else{let X=me.width,ee=me.height;for(let xe=0;xe<V;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ge,X,ee,0,we,Pe,null),X>>=1,ee>>=1}}else if(rt.length>0){if(H&&ie){let X=He(rt[0]);t.texStorage2D(i.TEXTURE_2D,V,Ge,X.width,X.height)}for(let X=0,ee=rt.length;X<ee;X++)Ie=rt[X],H?L&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,we,Pe,Ie):t.texImage2D(i.TEXTURE_2D,X,Ge,we,Pe,Ie);S.generateMipmaps=!1}else if(H){if(ie){let X=He(me);t.texStorage2D(i.TEXTURE_2D,V,Ge,X.width,X.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Pe,me)}else t.texImage2D(i.TEXTURE_2D,0,Ge,we,Pe,me);m(S)&&d(se),De.__version=re.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ue(I,S,J){if(S.image.length!==6)return;let se=et(I,S),fe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);let re=n.get(fe);if(fe.version!==re.__version||se===!0){t.activeTexture(i.TEXTURE0+J);let De=lt.getPrimaries(lt.workingColorSpace),Me=S.colorSpace===Gn?null:lt.getPrimaries(S.colorSpace),Ne=S.colorSpace===Gn||De===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let We=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,we=[];for(let ee=0;ee<6;ee++)!We&&!me?we[ee]=b(S.image[ee],!0,r.maxCubemapSize):we[ee]=me?S.image[ee].image:S.image[ee],we[ee]=ft(S,we[ee]);let Pe=we[0],Ge=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type),rt=M(S.internalFormat,Ge,Ie,S.colorSpace),H=S.isVideoTexture!==!0,ie=re.__version===void 0||se===!0,L=fe.dataReady,V=P(S,Pe);Oe(i.TEXTURE_CUBE_MAP,S);let X;if(We){H&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,rt,Pe.width,Pe.height);for(let ee=0;ee<6;ee++){X=we[ee].mipmaps;for(let xe=0;xe<X.length;xe++){let Te=X[xe];S.format!==Jt?Ge!==null?H?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Te.width,Te.height,Ge,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,rt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Te.width,Te.height,Ge,Ie,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,rt,Te.width,Te.height,0,Ge,Ie,Te.data)}}}else{if(X=S.mipmaps,H&&ie){X.length>0&&V++;let ee=He(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,rt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(me){H?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we[ee].width,we[ee].height,Ge,Ie,we[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,rt,we[ee].width,we[ee].height,0,Ge,Ie,we[ee].data);for(let xe=0;xe<X.length;xe++){let Qe=X[xe].image[ee].image;H?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Qe.width,Qe.height,Ge,Ie,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,rt,Qe.width,Qe.height,0,Ge,Ie,Qe.data)}}else{H?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ge,Ie,we[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,rt,Ge,Ie,we[ee]);for(let xe=0;xe<X.length;xe++){let Te=X[xe];H?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Ge,Ie,Te.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,rt,Ge,Ie,Te.image[ee])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),re.__version=fe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ae(I,S,J,se,fe,re){let De=s.convert(J.format,J.colorSpace),Me=s.convert(J.type),Ne=M(J.internalFormat,De,Me,J.colorSpace),We=n.get(S),me=n.get(J);if(me.__renderTarget=S,!We.__hasExternalTextures){let we=Math.max(1,S.width>>re),Pe=Math.max(1,S.height>>re);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,re,Ne,we,Pe,S.depth,0,De,Me,null):t.texImage2D(fe,re,Ne,we,Pe,0,De,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),je(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,fe,me.__webglTexture,0,Ye(S)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,fe,me.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(I,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let se=S.depthTexture,fe=se&&se.isDepthTexture?se.type:null,re=_(S.stencilBuffer,fe),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=Ye(S);je(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,re,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,I)}else{let se=S.textures;for(let fe=0;fe<se.length;fe++){let re=se[fe],De=s.convert(re.format,re.colorSpace),Me=s.convert(re.type),Ne=M(re.internalFormat,De,Me,re.colorSpace),We=Ye(S);J&&je(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Ne,S.width,S.height):je(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let fe=se.__webglTexture,re=Ye(S);if(S.depthTexture.format===Or)je(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(S.depthTexture.format===Oi)je(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Ze(I){let S=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let se=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",fe)};se.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=se}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let se=I.texture.mipmaps;se&&se.length>0?Ce(S.__webglFramebuffer[0],I):Ce(S.__webglFramebuffer,I)}else if(J){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),de(S.__webglDepthbuffer[se],I,!1);else{let fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,re)}}else{let se=I.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),de(S.__webglDepthbuffer,I,!1);else{let fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(I,S,J){let se=n.get(I);S!==void 0&&ae(se.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Ze(I)}function be(I){let S=I.texture,J=n.get(I),se=n.get(S);I.addEventListener("dispose",D);let fe=I.textures,re=I.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,a.memory.textures++),re){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)J.__webglFramebuffer[Me][Ne]=i.createFramebuffer()}else J.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)J.__webglFramebuffer[Me]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(De)for(let Me=0,Ne=fe.length;Me<Ne;Me++){let We=n.get(fe[Me]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&je(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Me=0;Me<fe.length;Me++){let Ne=fe[Me];J.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);let We=s.convert(Ne.format,Ne.colorSpace),me=s.convert(Ne.type),we=M(Ne.internalFormat,We,me,Ne.colorSpace,I.isXRRenderTarget===!0),Pe=Ye(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,we,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,J.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),de(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)ae(J.__webglFramebuffer[Me][Ne],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne);else ae(J.__webglFramebuffer[Me],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Me=0,Ne=fe.length;Me<Ne;Me++){let We=fe[Me],me=n.get(We);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Oe(i.TEXTURE_2D,We),ae(J.__webglFramebuffer,I,We,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),m(We)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,se.__webglTexture),Oe(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)ae(J.__webglFramebuffer[Ne],I,S,i.COLOR_ATTACHMENT0,Me,Ne);else ae(J.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,Me,0);m(S)&&d(Me),t.unbindTexture()}I.depthBuffer&&Ze(I)}function Se(I){let S=I.textures;for(let J=0,se=S.length;J<se;J++){let fe=S[J];if(m(fe)){let re=w(I),De=n.get(fe).__webglTexture;t.bindTexture(re,De),d(re),t.unbindTexture()}}}let ye=[],B=[];function bt(I){if(I.samples>0){if(je(I)===!1){let S=I.textures,J=I.width,se=I.height,fe=i.COLOR_BUFFER_BIT,re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),Me=S.length>1;if(Me)for(let We=0;We<S.length;We++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ne=I.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let We=0;We<S.length;We++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[We]);let me=n.get(S[We]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,J,se,0,0,J,se,fe,i.NEAREST),l===!0&&(ye.length=0,B.length=0,ye.push(i.COLOR_ATTACHMENT0+We),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ye.push(re),B.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let We=0;We<S.length;We++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,De.__webglColorRenderbuffer[We]);let me=n.get(S[We]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ye(I){return Math.min(r.maxSamples,I.samples)}function je(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function ft(I,S){let J=I.colorSpace,se=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==zt&&J!==Gn&&(lt.getTransfer(J)===vt?(se!==Jt||fe!==Kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),S}function He(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=je}function Qv(i,e){function t(n,r=Gn){let s,a=lt.getTransfer(r);if(n===Kt)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Rt)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Pc)return i.RGB;if(n===Jt)return i.RGBA;if(n===Or)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Qr)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Ic)return i.RG;if(n===Vo)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===na||n===ia||n===ra||n===sa)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Ko||n===Jo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zo||n===Ko)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===$o||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===fl||n===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===pl||n===ml||n===gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:$v,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends fi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null,b=new th,m=t.getContextAttributes(),d=null,w=null,M=[],_=[],P=new Ve,A=null,D=new It;D.viewport=new pt;let z=new It;z.viewport=new pt;let E=[D,z],y=new yo,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=M[ne];return ue===void 0&&(ue=new Gr,M[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=M[ne];return ue===void 0&&(ue=new Gr,M[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=M[ne];return ue===void 0&&(ue=new Gr,M[ne]=ue),ue.getHandSpace()};function j(ne){let ue=_.indexOf(ne.inputSource);if(ue===-1)return;let ae=M[ue];ae!==void 0&&(ae.update(ne.inputSource,ne.frame,c||a),ae.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<M.length;ne++){let ue=_[ne];ue!==null&&(_[ne]=null,M[ne].disconnect(ue))}N=null,W=null,b.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,w=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,de=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Oi:Or,de=m.stencil?Fi:Ni);let Ze={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Ct(f.textureWidth,f.textureHeight,{format:Jt,type:Kt,depthTexture:new nr(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ct(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(ne){for(let ue=0;ue<ne.removed.length;ue++){let ae=ne.removed[ue],de=_.indexOf(ae);de>=0&&(_[de]=null,M[de].disconnect(ae))}for(let ue=0;ue<ne.added.length;ue++){let ae=ne.added[ue],de=_.indexOf(ae);if(de===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=_.length){_.push(ae),de=Ze;break}else if(_[Ze]===null){_[Ze]=ae,de=Ze;break}if(de===-1)break}let Ce=M[de];Ce&&Ce.connect(ae)}}let K=new k,oe=new k;function Q(ne,ue,ae){K.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(ae.matrixWorld);let de=K.distanceTo(oe),Ce=ue.projectionMatrix.elements,Ze=ae.projectionMatrix.elements,Ue=Ce[14]/(Ce[10]-1),be=Ce[14]/(Ce[10]+1),Se=(Ce[9]+1)/Ce[5],ye=(Ce[9]-1)/Ce[5],B=(Ce[8]-1)/Ce[0],bt=(Ze[8]+1)/Ze[0],Ye=Ue*B,je=Ue*bt,Be=de/(-B+bt),ft=Be*-B;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ft),ne.translateZ(Be),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let He=Ue+Be,I=be+Be,S=Ye-ft,J=je+(de-ft),se=Se*be/I*He,fe=ye*be/I*He;ne.projectionMatrix.makePerspective(S,J,se,fe,He,I),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function le(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ue=ne.near,ae=ne.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(ae=b.depthFar)),y.near=z.near=D.near=ue,y.far=z.far=D.far=ae,(N!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,W=y.far),D.layers.mask=ne.layers.mask|2,z.layers.mask=ne.layers.mask|4,y.layers.mask=D.layers.mask|z.layers.mask;let de=ne.parent,Ce=y.cameras;le(y,de);for(let Ze=0;Ze<Ce.length;Ze++)le(Ce[Ze],de);Ce.length===2?Q(y,D,z):y.projectionMatrix.copy(D.projectionMatrix),ve(ne,y,de)};function ve(ne,ue,ae){ae===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(ae.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=$i*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let Ae=null;function Oe(ne,ue){if(h=ue.getViewerPose(c||a),x=ue,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let de=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Ue=0;Ue<ae.length;Ue++){let be=ae[Ue],Se=null;if(p!==null)Se=p.getViewport(be);else{let B=u.getViewSubImage(f,be);Se=B.viewport,Ue===0&&(e.setRenderTargetTextures(w,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(w))}let ye=E[Ue];ye===void 0&&(ye=new It,ye.layers.enable(Ue),ye.viewport=new pt,E[Ue]=ye),ye.matrix.fromArray(be.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(be.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),Ue===0&&(y.matrix.copy(ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(ye)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Ue=u.getDepthInformation(ae[0]);Ue&&Ue.isValid&&Ue.texture&&b.init(e,Ue,r.renderState)}}for(let ae=0;ae<M.length;ae++){let de=_[ae],Ce=M[ae];de!==null&&Ce!==void 0&&Ce.update(de,ue,c||a)}Ae&&Ae(ne,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),x=null}let et=new zf;et.setAnimationLoop(Oe),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}},pr=new Bn,tx=new tt;function nx(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,zc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),b(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w=e.get(d),M=w.envMap,_=w.envMapRotation;M&&(m.envMap.value=M,pr.copy(_),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(pr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ix(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let _=M.program;n.uniformBlockBinding(w,_)}function c(w,M){let _=r[w.id];_===void 0&&(x(w),_=h(w),r[w.id]=_,w.addEventListener("dispose",m));let P=M.program;n.updateUBOMapping(w,P);let A=e.render.frame;s[w.id]!==A&&(f(w),s[w.id]=A)}function h(w){let M=u();w.__bindingPointIndex=M;let _=i.createBuffer(),P=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let M=r[w.id],_=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,D=_.length;A<D;A++){let z=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,y=z.length;E<y;E++){let N=z[E];if(p(N,A,E,P)===!0){let W=N.__offset,j=Array.isArray(N.value)?N.value:[N.value],$=0;for(let Z=0;Z<j.length;Z++){let K=j[Z],oe=b(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,W+$,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,M,_,P){let A=w.value,D=M+"_"+_;if(P[D]===void 0)return typeof A=="number"||typeof A=="boolean"?P[D]=A:P[D]=A.clone(),!0;{let z=P[D];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return P[D]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function x(w){let M=w.uniforms,_=0,P=16;for(let D=0,z=M.length;D<z;D++){let E=Array.isArray(M[D])?M[D]:[M[D]];for(let y=0,N=E.length;y<N;y++){let W=E[y],j=Array.isArray(W.value)?W.value:[W.value];for(let $=0,Z=j.length;$<Z;$++){let K=j[$],oe=b(K),Q=_%P,le=Q%oe.boundary,ve=Q+le;_+=le,ve!==0&&P-ve<oe.storage&&(_+=P-ve),W.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=oe.storage}}}let A=_%P;return A>0&&(_+=P-A),w.__size=_,w.__cache={},this}function b(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){let M=w.target;M.removeEventListener("dispose",m);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(let w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}var is=class{constructor(e={}){let{canvas:t=cf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=new Uint32Array(4),b=new Int32Array(4),m=null,d=null,w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,P=!1;this._outputColorSpace=wt;let A=0,D=0,z=null,E=-1,y=null,N=new pt,W=new pt,j=null,$=new Le(0),Z=0,K=t.width,oe=t.height,Q=1,le=null,ve=null,Ae=new pt(0,0,K,oe),Oe=new pt(0,0,K,oe),et=!1,ne=new qr,ue=!1,ae=!1,de=new tt,Ce=new tt,Ze=new k,Ue=new pt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function ye(){return z===null?Q:1}let B=n;function bt(v,R){return t.getContext(v,R)}try{let v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"176"}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){let R="webgl2";if(B=bt(R,v),B===null)throw bt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ye,je,Be,ft,He,I,S,J,se,fe,re,De,Me,Ne,We,me,we,Pe,Ge,Ie,rt,H,ie,L;function V(){Ye=new yg(B),Ye.init(),H=new Qv(B,Ye),je=new pg(B,Ye,e,H),Be=new Kv(B,Ye),je.reverseDepthBuffer&&f&&Be.buffers.depth.setReversed(!0),ft=new Eg(B),He=new Ov,I=new Jv(B,Ye,Be,He,je,H,ft),S=new gg(_),J=new _g(_),se=new Pp(B),ie=new fg(B,se),fe=new Mg(B,se,ft,ie),re=new Tg(B,fe,se,ft),Ge=new wg(B,je,I),me=new mg(He),De=new Fv(_,S,J,Ye,je,ie,me),Me=new nx(_,He),Ne=new zv,We=new Xv(Ye),Pe=new ug(_,S,J,Be,re,p,l),we=new jv(_,re,je),L=new ix(B,ft,je,Be),Ie=new dg(B,Ye,ft),rt=new Sg(B,Ye,ft),ft.programs=De.programs,_.capabilities=je,_.extensions=Ye,_.properties=He,_.renderLists=Ne,_.shadowMap=we,_.state=Be,_.info=ft}V();let X=new nh(_,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=Ye.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ye.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(v){v!==void 0&&(Q=v,this.setSize(K,oe,!1))},this.getSize=function(v){return v.set(K,oe)},this.setSize=function(v,R,C=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,oe=R,t.width=Math.floor(v*Q),t.height=Math.floor(R*Q),C===!0&&(t.style.width=v+"px",t.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(K*Q,oe*Q).floor()},this.setDrawingBufferSize=function(v,R,C){K=v,oe=R,Q=C,t.width=Math.floor(v*C),t.height=Math.floor(R*C),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(N)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,R,C,O){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,R,C,O),Be.viewport(N.copy(Ae).multiplyScalar(Q).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,R,C,O){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,R,C,O),Be.scissor(W.copy(Oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(v){Be.setScissorTest(et=v)},this.setOpaqueSort=function(v){le=v},this.setTransparentSort=function(v){ve=v},this.getClearColor=function(v){return v.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(v=!0,R=!0,C=!0){let O=0;if(v){let U=!1;if(z!==null){let G=z.texture.format;U=G===Wo||G===Vo||G===Go}if(U){let G=z.texture.type,q=G===Kt||G===Ni||G===Jr||G===Fi||G===ko||G===Ho,Y=Pe.getClearColor(),te=Pe.getClearAlpha(),he=Y.r,ce=Y.g,pe=Y.b;q?(x[0]=he,x[1]=ce,x[2]=pe,x[3]=te,B.clearBufferuiv(B.COLOR,0,x)):(b[0]=he,b[1]=ce,b[2]=pe,b[3]=te,B.clearBufferiv(B.COLOR,0,b))}else O|=B.COLOR_BUFFER_BIT}R&&(O|=B.DEPTH_BUFFER_BIT),C&&(O|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Pe.dispose(),Ne.dispose(),We.dispose(),He.dispose(),S.dispose(),J.dispose(),re.dispose(),ie.dispose(),L.dispose(),De.dispose(),X.dispose(),X.removeEventListener("sessionstart",Aa),X.removeEventListener("sessionend",Ra),ti.stop()};function ee(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let v=ft.autoReset,R=we.enabled,C=we.autoUpdate,O=we.needsUpdate,U=we.type;V(),ft.autoReset=v,we.enabled=R,we.autoUpdate=C,we.needsUpdate=O,we.type=U}function Te(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qe(v){let R=v.target;R.removeEventListener("dispose",Qe),yt(R)}function yt(v){Nt(v),He.remove(v)}function Nt(v){let R=He.get(v).programs;R!==void 0&&(R.forEach(function(C){De.releaseProgram(C)}),v.isShaderMaterial&&De.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,C,O,U,G){R===null&&(R=be);let q=U.isMesh&&U.matrixWorld.determinant()<0,Y=Nl(v,R,C,O,U);Be.setMaterial(O,q);let te=C.index,he=1;if(O.wireframe===!0){if(te=fe.getWireframeAttribute(C),te===void 0)return;he=2}let ce=C.drawRange,pe=C.attributes.position,ge=ce.start*he,_e=(ce.start+ce.count)*he;G!==null&&(ge=Math.max(ge,G.start*he),_e=Math.min(_e,(G.start+G.count)*he)),te!==null?(ge=Math.max(ge,0),_e=Math.min(_e,te.count)):pe!=null&&(ge=Math.max(ge,0),_e=Math.min(_e,pe.count));let ze=_e-ge;if(ze<0||ze===1/0)return;ie.setup(U,O,Y,C,te);let Ke,Xe=Ie;if(te!==null&&(Ke=se.get(te),Xe=rt,Xe.setIndex(Ke)),U.isMesh)O.wireframe===!0?(Be.setLineWidth(O.wireframeLinewidth*ye()),Xe.setMode(B.LINES)):Xe.setMode(B.TRIANGLES);else if(U.isLine){let Fe=O.linewidth;Fe===void 0&&(Fe=1),Be.setLineWidth(Fe*ye()),U.isLineSegments?Xe.setMode(B.LINES):U.isLineLoop?Xe.setMode(B.LINE_LOOP):Xe.setMode(B.LINE_STRIP)}else U.isPoints?Xe.setMode(B.POINTS):U.isSprite&&Xe.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)la("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Xe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Fe=U._multiDrawStarts,st=U._multiDrawCounts,ke=U._multiDrawCount,gt=te?se.get(te).bytesPerElement:1,Ht=He.get(O).currentProgram.getUniforms();for(let dt=0;dt<ke;dt++)Ht.setValue(B,"_gl_DrawID",dt),Xe.render(Fe[dt]/gt,st[dt])}else if(U.isInstancedMesh)Xe.renderInstances(ge,ze,U.count);else if(C.isInstancedBufferGeometry){let Fe=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,st=Math.min(C.instanceCount,Fe);Xe.renderInstances(ge,ze,st)}else Xe.render(ge,ze)};function mt(v,R,C){v.transparent===!0&&v.side===mn&&v.forceSinglePass===!1?(v.side=ln,v.needsUpdate=!0,yr(v,R,C),v.side=On,v.needsUpdate=!0,yr(v,R,C),v.side=mn):yr(v,R,C)}this.compile=function(v,R,C=null){C===null&&(C=v),d=We.get(C),d.init(R),M.push(d),C.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),v!==C&&v.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let O=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let G=U.material;if(G)if(Array.isArray(G))for(let q=0;q<G.length;q++){let Y=G[q];mt(Y,C,U),O.add(Y)}else mt(G,C,U),O.add(G)}),d=M.pop(),O},this.compileAsync=function(v,R,C=null){let O=this.compile(v,R,C);return new Promise(U=>{function G(){if(O.forEach(function(q){He.get(q).currentProgram.isReady()&&O.delete(q)}),O.size===0){U(v);return}setTimeout(G,10)}Ye.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let vn=null;function In(v){vn&&vn(v)}function Aa(){ti.stop()}function Ra(){ti.start()}let ti=new zf;ti.setAnimationLoop(In),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(v){vn=v,X.setAnimationLoop(v),v===null?ti.stop():ti.start()},X.addEventListener("sessionstart",Aa),X.addEventListener("sessionend",Ra),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(R),R=X.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,R,z),d=We.get(v,M.length),d.init(R),M.push(d),Ce.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ne.setFromProjectionMatrix(Ce),ae=this.localClippingEnabled,ue=me.init(this.clippingPlanes,ae),m=Ne.get(v,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){let G=_.xr.getDepthSensingMesh();G!==null&&ms(G,R,-1/0,_.sortObjects)}ms(v,R,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(le,ve),Se=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Se&&Pe.addToRenderList(m,v),this.info.render.frame++,ue===!0&&me.beginShadows();let C=d.state.shadowsArray;we.render(C,v,R),ue===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,U=m.transmissive;if(d.setupLights(),R.isArrayCamera){let G=R.cameras;if(U.length>0)for(let q=0,Y=G.length;q<Y;q++){let te=G[q];Ca(O,U,v,te)}Se&&Pe.render(v);for(let q=0,Y=G.length;q<Y;q++){let te=G[q];gs(m,v,te,te.viewport)}}else U.length>0&&Ca(O,U,v,R),Se&&Pe.render(v),gs(m,v,R);z!==null&&D===0&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),v.isScene===!0&&v.onAfterRender(_,v,R),ie.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],ue===!0&&me.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ms(v,R,C,O){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)C=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ne.intersectsSprite(v)){O&&Ue.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ce);let q=re.update(v),Y=v.material;Y.visible&&m.push(v,q,Y,C,Ue.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ne.intersectsObject(v))){let q=re.update(v),Y=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ue.copy(v.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Ue.copy(q.boundingSphere.center)),Ue.applyMatrix4(v.matrixWorld).applyMatrix4(Ce)),Array.isArray(Y)){let te=q.groups;for(let he=0,ce=te.length;he<ce;he++){let pe=te[he],ge=Y[pe.materialIndex];ge&&ge.visible&&m.push(v,q,ge,C,Ue.z,pe)}}else Y.visible&&m.push(v,q,Y,C,Ue.z,null)}}let G=v.children;for(let q=0,Y=G.length;q<Y;q++)ms(G[q],R,C,O)}function gs(v,R,C,O){let U=v.opaque,G=v.transmissive,q=v.transparent;d.setupLightsView(C),ue===!0&&me.setGlobalState(_.clippingPlanes,C),O&&Be.viewport(N.copy(O)),U.length>0&&_r(U,R,C),G.length>0&&_r(G,R,C),q.length>0&&_r(q,R,C),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Ca(v,R,C,O){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new Ct(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Rt:Kt,minFilter:Tn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let G=d.state.transmissionRenderTarget[O.id],q=O.viewport||N;G.setSize(q.z*_.transmissionResolutionScale,q.w*_.transmissionResolutionScale);let Y=_.getRenderTarget();_.setRenderTarget(G),_.getClearColor($),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Se&&Pe.render(C);let te=_.toneMapping;_.toneMapping=bi;let he=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),ue===!0&&me.setGlobalState(_.clippingPlanes,O),_r(v,C,O),I.updateMultisampleRenderTarget(G),I.updateRenderTargetMipmap(G),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let pe=0,ge=R.length;pe<ge;pe++){let _e=R[pe],ze=_e.object,Ke=_e.geometry,Xe=_e.material,Fe=_e.group;if(Xe.side===mn&&ze.layers.test(O.layers)){let st=Xe.side;Xe.side=ln,Xe.needsUpdate=!0,Pa(ze,C,O,Ke,Xe,Fe),Xe.side=st,Xe.needsUpdate=!0,ce=!0}}ce===!0&&(I.updateMultisampleRenderTarget(G),I.updateRenderTargetMipmap(G))}_.setRenderTarget(Y),_.setClearColor($,Z),he!==void 0&&(O.viewport=he),_.toneMapping=te}function _r(v,R,C){let O=R.isScene===!0?R.overrideMaterial:null;for(let U=0,G=v.length;U<G;U++){let q=v[U],Y=q.object,te=q.geometry,he=q.group,ce=q.material;ce.allowOverride===!0&&O!==null&&(ce=O),Y.layers.test(C.layers)&&Pa(Y,R,C,te,ce,he)}}function Pa(v,R,C,O,U,G){v.onBeforeRender(_,R,C,O,U,G),v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(_,R,C,O,v,G),U.transparent===!0&&U.side===mn&&U.forceSinglePass===!1?(U.side=ln,U.needsUpdate=!0,_.renderBufferDirect(C,R,O,U,v,G),U.side=On,U.needsUpdate=!0,_.renderBufferDirect(C,R,O,U,v,G),U.side=mn):_.renderBufferDirect(C,R,O,U,v,G),v.onAfterRender(_,R,C,O,U,G)}function yr(v,R,C){R.isScene!==!0&&(R=be);let O=He.get(v),U=d.state.lights,G=d.state.shadowsArray,q=U.state.version,Y=De.getParameters(v,U.state,G,R,C),te=De.getProgramCacheKey(Y),he=O.programs;O.environment=v.isMeshStandardMaterial?R.environment:null,O.fog=R.fog,O.envMap=(v.isMeshStandardMaterial?J:S).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,he===void 0&&(v.addEventListener("dispose",Qe),he=new Map,O.programs=he);let ce=he.get(te);if(ce!==void 0){if(O.currentProgram===ce&&O.lightsStateVersion===q)return xs(v,Y),ce}else Y.uniforms=De.getUniforms(v),v.onBeforeCompile(Y,_),ce=De.acquireProgram(Y,te),he.set(te,ce),O.uniforms=Y.uniforms;let pe=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(pe.clippingPlanes=me.uniform),xs(v,Y),O.needsLights=Si(v),O.lightsStateVersion=q,O.needsLights&&(pe.ambientLightColor.value=U.state.ambient,pe.lightProbe.value=U.state.probe,pe.directionalLights.value=U.state.directional,pe.directionalLightShadows.value=U.state.directionalShadow,pe.spotLights.value=U.state.spot,pe.spotLightShadows.value=U.state.spotShadow,pe.rectAreaLights.value=U.state.rectArea,pe.ltc_1.value=U.state.rectAreaLTC1,pe.ltc_2.value=U.state.rectAreaLTC2,pe.pointLights.value=U.state.point,pe.pointLightShadows.value=U.state.pointShadow,pe.hemisphereLights.value=U.state.hemi,pe.directionalShadowMap.value=U.state.directionalShadowMap,pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,pe.spotShadowMap.value=U.state.spotShadowMap,pe.spotLightMatrix.value=U.state.spotLightMatrix,pe.spotLightMap.value=U.state.spotLightMap,pe.pointShadowMap.value=U.state.pointShadowMap,pe.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=ce,O.uniformsList=null,ce}function vs(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=ns.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function xs(v,R){let C=He.get(v);C.outputColorSpace=R.outputColorSpace,C.batching=R.batching,C.batchingColor=R.batchingColor,C.instancing=R.instancing,C.instancingColor=R.instancingColor,C.instancingMorph=R.instancingMorph,C.skinning=R.skinning,C.morphTargets=R.morphTargets,C.morphNormals=R.morphNormals,C.morphColors=R.morphColors,C.morphTargetsCount=R.morphTargetsCount,C.numClippingPlanes=R.numClippingPlanes,C.numIntersection=R.numClipIntersection,C.vertexAlphas=R.vertexAlphas,C.vertexTangents=R.vertexTangents,C.toneMapping=R.toneMapping}function Nl(v,R,C,O,U){R.isScene!==!0&&(R=be),I.resetTextureUnits();let G=R.fog,q=O.isMeshStandardMaterial?R.environment:null,Y=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:zt,te=(O.isMeshStandardMaterial?J:S).get(O.envMap||q),he=O.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,ce=!!C.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),pe=!!C.morphAttributes.position,ge=!!C.morphAttributes.normal,_e=!!C.morphAttributes.color,ze=bi;O.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ze=_.toneMapping);let Ke=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Xe=Ke!==void 0?Ke.length:0,Fe=He.get(O),st=d.state.lights;if(ue===!0&&(ae===!0||v!==y)){let St=v===y&&O.id===E;me.setState(O,v,St)}let ke=!1;O.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==st.state.version||Fe.outputColorSpace!==Y||U.isBatchedMesh&&Fe.batching===!1||!U.isBatchedMesh&&Fe.batching===!0||U.isBatchedMesh&&Fe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Fe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Fe.instancing===!1||!U.isInstancedMesh&&Fe.instancing===!0||U.isSkinnedMesh&&Fe.skinning===!1||!U.isSkinnedMesh&&Fe.skinning===!0||U.isInstancedMesh&&Fe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Fe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Fe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Fe.instancingMorph===!1&&U.morphTexture!==null||Fe.envMap!==te||O.fog===!0&&Fe.fog!==G||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==me.numPlanes||Fe.numIntersection!==me.numIntersection)||Fe.vertexAlphas!==he||Fe.vertexTangents!==ce||Fe.morphTargets!==pe||Fe.morphNormals!==ge||Fe.morphColors!==_e||Fe.toneMapping!==ze||Fe.morphTargetsCount!==Xe)&&(ke=!0):(ke=!0,Fe.__version=O.version);let gt=Fe.currentProgram;ke===!0&&(gt=yr(O,R,U));let Ht=!1,dt=!1,ut=!1,Je=gt.getUniforms(),Pt=Fe.uniforms;if(Be.useProgram(gt.program)&&(Ht=!0,dt=!0,ut=!0),O.id!==E&&(E=O.id,dt=!0),Ht||y!==v){Be.buffers.depth.getReversed()?(de.copy(v.projectionMatrix),uf(de),ff(de),Je.setValue(B,"projectionMatrix",de)):Je.setValue(B,"projectionMatrix",v.projectionMatrix),Je.setValue(B,"viewMatrix",v.matrixWorldInverse);let Gt=Je.map.cameraPosition;Gt!==void 0&&Gt.setValue(B,Ze.setFromMatrixPosition(v.matrixWorld)),je.logarithmicDepthBuffer&&Je.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Je.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,dt=!0,ut=!0)}if(U.isSkinnedMesh){Je.setOptional(B,U,"bindMatrix"),Je.setOptional(B,U,"bindMatrixInverse");let St=U.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Je.setValue(B,"boneTexture",St.boneTexture,I))}U.isBatchedMesh&&(Je.setOptional(B,U,"batchingTexture"),Je.setValue(B,"batchingTexture",U._matricesTexture,I),Je.setOptional(B,U,"batchingIdTexture"),Je.setValue(B,"batchingIdTexture",U._indirectTexture,I),Je.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&Je.setValue(B,"batchingColorTexture",U._colorsTexture,I));let jt=C.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Ge.update(U,C,gt),(dt||Fe.receiveShadow!==U.receiveShadow)&&(Fe.receiveShadow=U.receiveShadow,Je.setValue(B,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Pt.envMap.value=te,Pt.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&R.environment!==null&&(Pt.envMapIntensity.value=R.environmentIntensity),dt&&(Je.setValue(B,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&ni(Pt,ut),G&&O.fog===!0&&Me.refreshFogUniforms(Pt,G),Me.refreshMaterialUniforms(Pt,O,Q,oe,d.state.transmissionRenderTarget[v.id]),ns.upload(B,vs(Fe),Pt,I)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ns.upload(B,vs(Fe),Pt,I),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Je.setValue(B,"center",U.center),Je.setValue(B,"modelViewMatrix",U.modelViewMatrix),Je.setValue(B,"normalMatrix",U.normalMatrix),Je.setValue(B,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let St=O.uniformsGroups;for(let Gt=0,Fl=St.length;Gt<Fl;Gt++){let Vi=St[Gt];L.update(Vi,gt),L.bind(Vi,gt)}}return gt}function ni(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function Si(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,R,C){let O=He.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),He.get(v.texture).__webglTexture=R,He.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:C,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,R){let C=He.get(v);C.__webglFramebuffer=R,C.__useDefaultFramebuffer=R===void 0};let g=B.createFramebuffer();this.setRenderTarget=function(v,R=0,C=0){z=v,A=R,D=C;let O=!0,U=null,G=!1,q=!1;if(v){let te=He.get(v);if(te.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(B.FRAMEBUFFER,null),O=!1;else if(te.__webglFramebuffer===void 0)I.setupRenderTarget(v);else if(te.__hasExternalTextures)I.rebindTextures(v,He.get(v.texture).__webglTexture,He.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let pe=v.depthTexture;if(te.__boundDepthTexture!==pe){if(pe!==null&&He.has(pe)&&(v.width!==pe.image.width||v.height!==pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(v)}}let he=v.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(q=!0);let ce=He.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ce[R])?U=ce[R][C]:U=ce[R],G=!0):v.samples>0&&I.useMultisampledRTT(v)===!1?U=He.get(v).__webglMultisampledFramebuffer:Array.isArray(ce)?U=ce[C]:U=ce,N.copy(v.viewport),W.copy(v.scissor),j=v.scissorTest}else N.copy(Ae).multiplyScalar(Q).floor(),W.copy(Oe).multiplyScalar(Q).floor(),j=et;if(C!==0&&(U=g),Be.bindFramebuffer(B.FRAMEBUFFER,U)&&O&&Be.drawBuffers(v,U),Be.viewport(N),Be.scissor(W),Be.setScissorTest(j),G){let te=He.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+R,te.__webglTexture,C)}else if(q){let te=He.get(v.texture),he=R;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,te.__webglTexture,C,he)}else if(v!==null&&C!==0){let te=He.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,te.__webglTexture,C)}E=-1},this.readRenderTargetPixels=function(v,R,C,O,U,G,q){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&q!==void 0&&(Y=Y[q]),Y){Be.bindFramebuffer(B.FRAMEBUFFER,Y);try{let te=v.texture,he=te.format,ce=te.type;if(!je.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-O&&C>=0&&C<=v.height-U&&B.readPixels(R,C,O,U,H.convert(he),H.convert(ce),G)}finally{let te=z!==null?He.get(z).__webglFramebuffer:null;Be.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(v,R,C,O,U,G,q){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&q!==void 0&&(Y=Y[q]),Y)if(R>=0&&R<=v.width-O&&C>=0&&C<=v.height-U){Be.bindFramebuffer(B.FRAMEBUFFER,Y);let te=v.texture,he=te.format,ce=te.type;if(!je.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.bufferData(B.PIXEL_PACK_BUFFER,G.byteLength,B.STREAM_READ),B.readPixels(R,C,O,U,H.convert(he),H.convert(ce),0);let ge=z!==null?He.get(z).__webglFramebuffer:null;Be.bindFramebuffer(B.FRAMEBUFFER,ge);let _e=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hf(B,_e,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,G),B.deleteBuffer(pe),B.deleteSync(_e),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,C=0){let O=Math.pow(2,-C),U=Math.floor(v.image.width*O),G=Math.floor(v.image.height*O),q=R!==null?R.x:0,Y=R!==null?R.y:0;I.setTexture2D(v,0),B.copyTexSubImage2D(B.TEXTURE_2D,C,0,0,q,Y,U,G),Be.unbindTexture()};let T=B.createFramebuffer(),F=B.createFramebuffer();this.copyTextureToTexture=function(v,R,C=null,O=null,U=0,G=null){G===null&&(U!==0?(la("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=U,U=0):G=0);let q,Y,te,he,ce,pe,ge,_e,ze,Ke=v.isCompressedTexture?v.mipmaps[G]:v.image;if(C!==null)q=C.max.x-C.min.x,Y=C.max.y-C.min.y,te=C.isBox3?C.max.z-C.min.z:1,he=C.min.x,ce=C.min.y,pe=C.isBox3?C.min.z:0;else{let jt=Math.pow(2,-U);q=Math.floor(Ke.width*jt),Y=Math.floor(Ke.height*jt),v.isDataArrayTexture?te=Ke.depth:v.isData3DTexture?te=Math.floor(Ke.depth*jt):te=1,he=0,ce=0,pe=0}O!==null?(ge=O.x,_e=O.y,ze=O.z):(ge=0,_e=0,ze=0);let Xe=H.convert(R.format),Fe=H.convert(R.type),st;R.isData3DTexture?(I.setTexture3D(R,0),st=B.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(I.setTexture2DArray(R,0),st=B.TEXTURE_2D_ARRAY):(I.setTexture2D(R,0),st=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,R.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,R.unpackAlignment);let ke=B.getParameter(B.UNPACK_ROW_LENGTH),gt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ht=B.getParameter(B.UNPACK_SKIP_PIXELS),dt=B.getParameter(B.UNPACK_SKIP_ROWS),ut=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ke.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,he),B.pixelStorei(B.UNPACK_SKIP_ROWS,ce),B.pixelStorei(B.UNPACK_SKIP_IMAGES,pe);let Je=v.isDataArrayTexture||v.isData3DTexture,Pt=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){let jt=He.get(v),St=He.get(R),Gt=He.get(jt.__renderTarget),Fl=He.get(St.__renderTarget);Be.bindFramebuffer(B.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Be.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let Vi=0;Vi<te;Vi++)Je&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.get(v).__webglTexture,U,pe+Vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.get(R).__webglTexture,G,ze+Vi)),B.blitFramebuffer(he,ce,q,Y,ge,_e,q,Y,B.DEPTH_BUFFER_BIT,B.NEAREST);Be.bindFramebuffer(B.READ_FRAMEBUFFER,null),Be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||He.has(v)){let jt=He.get(v),St=He.get(R);Be.bindFramebuffer(B.READ_FRAMEBUFFER,T),Be.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Gt=0;Gt<te;Gt++)Je?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.__webglTexture,U,pe+Gt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jt.__webglTexture,U),Pt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.__webglTexture,G,ze+Gt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,G),U!==0?B.blitFramebuffer(he,ce,q,Y,ge,_e,q,Y,B.COLOR_BUFFER_BIT,B.NEAREST):Pt?B.copyTexSubImage3D(st,G,ge,_e,ze+Gt,he,ce,q,Y):B.copyTexSubImage2D(st,G,ge,_e,he,ce,q,Y);Be.bindFramebuffer(B.READ_FRAMEBUFFER,null),Be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pt?v.isDataTexture||v.isData3DTexture?B.texSubImage3D(st,G,ge,_e,ze,q,Y,te,Xe,Fe,Ke.data):R.isCompressedArrayTexture?B.compressedTexSubImage3D(st,G,ge,_e,ze,q,Y,te,Xe,Ke.data):B.texSubImage3D(st,G,ge,_e,ze,q,Y,te,Xe,Fe,Ke):v.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,ge,_e,q,Y,Xe,Fe,Ke.data):v.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,ge,_e,Ke.width,Ke.height,Xe,Ke.data):B.texSubImage2D(B.TEXTURE_2D,G,ge,_e,q,Y,Xe,Fe,Ke);B.pixelStorei(B.UNPACK_ROW_LENGTH,ke),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ht),B.pixelStorei(B.UNPACK_SKIP_ROWS,dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ut),G===0&&R.generateMipmaps&&B.generateMipmap(st),Be.unbindTexture()},this.copyTextureToTexture3D=function(v,R,C=null,O=null,U=0){return la('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,C,O,U)},this.initRenderTarget=function(v){He.get(v).__webglFramebuffer===void 0&&I.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?I.setTextureCube(v,0):v.isData3DTexture?I.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?I.setTexture2DArray(v,0):I.setTexture2D(v,0),Be.unbindTexture()},this.resetState=function(){A=0,D=0,z=null,Be.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function rh(i,e){if(e===Lc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$r||e===oa){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===$r)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ml=class extends kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new wh(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=xi.extractUrlBase(e);a=xi.resolveURL(c,this.path)}else a=xi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ir(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jf){try{a[ht.KHR_BINARY_GLTF]=new Th(e)}catch(u){r&&r(u);return}s=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Lh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:a[u]=new ch;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ah(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[u]=new Rh;break;case ht.KHR_MESH_QUANTIZATION:a[u]=new Ch;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function rx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lh=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],zt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hn(h),c.distance=u;break;case"spot":c=new Zs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ch=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let r=[];e.color=new Le(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(r)}},hh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},uh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(s)}},fh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},dh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},ph=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],zt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},mh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],zt),Promise.all(s)}},vh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],zt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(s)}},bh=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},_h=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},yh=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Mh=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Sh=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Eh=class{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,r.mode,r.filter),p})})}else return null}},wh=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let x of u){let b=new tt,m=new k,d=new wn,w=new k(1,1,1),M=new zs(x.geometry,x.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&w.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,b.compose(m,d,w));for(let _ in l)if(_==="_COLOR_0"){let P=l[_];M.instanceColor=new Di(P.array,P.itemSize,P.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&x.geometry.setAttribute(_,l[_]);At.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},jf="glTF",ha=12,Wf={JSON:1313821514,BIN:5130562},Th=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-ha,s=new DataView(e,ha),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Wf.JSON){let c=new Uint8Array(e,ha+a,o);this.content=n.decode(c)}else if(l===Wf.BIN){let c=ha+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ah=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ih[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ih[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=as[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){r.decodeDracoFile(h,function(p){for(let x in p.attributes){let b=p.attributes[x],m=l[x];m!==void 0&&(b.normalized=m)}u(p)},o,c,zt,f)})})}},Rh=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ch=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},Sl=class extends di{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,u=(n-t)/h,f=u*u,p=f*u,x=e*c,b=x-c,m=-2*p+3*f,d=p-f,w=1-m,M=d-f+u;for(let _=0;_!==o;_++){let P=a[b+_+o],A=a[b+_+l]*h,D=a[x+_+o],z=a[x+_]*h;s[_]=w*P+M*A+m*D+d*z}return s}},sx=new wn,Ph=class extends Sl{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return sx.fromArray(s).normalize().toArray(s),s}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xf={9728:Bt,9729:Dt,9984:Bo,9985:Kr,9986:ur,9987:Tn},qf={33071:En,33648:Fr,10497:Vt},sh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ax={CUBICSPLINE:void 0,LINEAR:Qi,STEP:Ji},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ox(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ee({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),i.DefaultMaterial}function vr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lx(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(r){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function cx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hx(i){let e,t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=i.indices+":"+oh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+oh(i.targets[n]);return e}function oh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Dh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ux(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var fx=new tt,Lh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new rr(this.options.manager):this.textureLoader=new Ks(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return vr(s,o,r),_i(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(xi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=sh[r.type],o=as[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Ot(c,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=sh[r.type],c=as[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0,b,m;if(p&&p!==u){let d=Math.floor(f/p),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count,M=t.cache.get(w);M||(b=new c(o,d*p,r.count*p/h),M=new Vr(b,p/h),t.cache.add(w,M)),m=new Wr(M,l,f%p/h,x)}else o===null?b=new c(r.count*l):b=new c(o,f,r.count*l),m=new Ot(b,l,x);if(r.sparse!==void 0){let d=sh.SCALAR,w=as[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,P=new w(a[1],M,r.sparse.count*d),A=new c(a[2],_,r.sparse.count*l);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,z=P.length;D<z;D++){let E=P[D];if(m.setX(E,A[D*l]),l>=2&&m.setY(E,A[D*l+1]),l>=3&&m.setZ(E,A[D*l+2]),l>=4&&m.setW(E,A[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return h.magFilter=Xf[f.magFilter]||Dt,h.minFilter=Xf[f.minFilter]||Tn,h.wrapS=qf[f.wrapS]||Vt,h.wrapT=qf[f.wrapT]||Vt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Dt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(b){let m=new Wt(b);m.needsUpdate=!0,f(m)}),t.load(xi.resolveURL(u,s.path),x,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),_i(u,a),u.userData.mimeType=a.mimeType||ux(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new jr,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yr,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ee}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){let u=r[ht.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],zt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=mn);let h=s.alphaMode||ah.OPAQUE;if(h===ah.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ah.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==on){let u=s.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],zt)}return s.emissiveTexture!==void 0&&a!==on&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),_i(u,s),t.associations.set(u,{materials:e}),s.extensions&&vr(r,u,s),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Yf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=hx(c),u=r[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Yf(new Xt,c,t),r[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?ox(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,x=h.length;p<x;p++){let b=h[p],m=a[p],d,w=c[p];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new Os(b,w):new it(b,w),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?d.geometry=rh(d.geometry,oa):m.mode===An.TRIANGLE_FAN&&(d.geometry=rh(d.geometry,$r));else if(m.mode===An.LINES)d=new ks(b,w);else if(m.mode===An.LINE_STRIP)d=new tr(b,w);else if(m.mode===An.LINE_LOOP)d=new Hs(b,w);else if(m.mode===An.POINTS)d=new Gs(b,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&cx(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),_i(d,s),m.extensions&&vr(r,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,x=u.length;p<x;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&vr(r,u[0],s),u[0];let f=new $e;s.extensions&&vr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,x=u.length;p<x;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(Oc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new gi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new tt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Bs(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=r.channels.length;u<f;u++){let p=r.channels[u],x=r.samplers[p.sampler],b=p.target,m=b.node,d=r.parameters!==void 0?r.parameters[x.input]:x.input,w=r.parameters!==void 0?r.parameters[x.output]:x.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",w)),c.push(x),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],x=u[2],b=u[3],m=u[4],d=[];for(let w=0,M=f.length;w<M;w++){let _=f[w],P=p[w],A=x[w],D=b[w],z=m[w];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,P,A,D,z);if(E)for(let y=0;y<E.length;y++)d.push(E[y])}return new qs(s,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,fx)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Xr:c.length>1?h=new $e:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),_i(h,s),s.extensions&&vr(n,h,s),s.matrix!==void 0){let u=new tt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new $e;n.name&&(s.name=r.createUniqueName(n.name)),_i(s,n),n.extensions&&vr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[f,p]of r.associations)(f instanceof an||f instanceof Wt)&&u.set(f,p);return h.traverse(f=>{let p=r.associations.get(f);p!=null&&u.set(f,p)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];zi[s.path]===zi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(zi[s.path]){case zi.weights:c=jn;break;case zi.rotation:c=Zn;break;case zi.translation:case zi.scale:c=Kn;break;default:n.itemSize===1?c=jn:c=Kn;break}let h=r.interpolation!==void 0?ax[r.interpolation]:Qi,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new c(l[f]+"."+zi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Zn?Ph:Sl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function dx(i,e,t){let n=e.attributes,r=new yn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let h=Dh(as[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new k,l=new k;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,x=f.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),f.normalized){let b=Dh(as[f.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new fn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Yf(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Ih[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return lt.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),_i(i,e),dx(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?lx(i,e.targets,t):i})}var Rn=Uint8Array,os=Uint16Array,px=Int32Array,Zf=new Rn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Kf=new Rn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mx=new Rn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jf=function(i,e){for(var t=new os(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new px(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Qf=Jf(Zf,2),$f=Qf.b,gx=Qf.r;$f[28]=258,gx[258]=28;var ed=Jf(Kf,0),vx=ed.b,Ky=ed.r,Fh=new os(32768);for(xt=0;xt<32768;++xt)yi=(xt&43690)>>1|(xt&21845)<<1,yi=(yi&52428)>>2|(yi&13107)<<2,yi=(yi&61680)>>4|(yi&3855)<<4,Fh[xt]=((yi&65280)>>8|(yi&255)<<8)>>1;var yi,xt,ua=(function(i,e,t){for(var n=i.length,r=0,s=new os(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new os(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new os(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],h=e-i[r],u=a[i[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Fh[u]>>l]=c}else for(o=new os(n),r=0;r<n;++r)i[r]&&(o[r]=Fh[a[i[r]-1]++]>>15-i[r]);return o}),fa=new Rn(288);for(xt=0;xt<144;++xt)fa[xt]=8;var xt;for(xt=144;xt<256;++xt)fa[xt]=9;var xt;for(xt=256;xt<280;++xt)fa[xt]=7;var xt;for(xt=280;xt<288;++xt)fa[xt]=8;var xt,td=new Rn(32);for(xt=0;xt<32;++xt)td[xt]=5;var xt;var xx=ua(fa,9,1);var bx=ua(td,5,1),Uh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Vn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Nh=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},_x=function(i){return(i+7)/8|0},yx=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Rn(i.subarray(e,t))};var Mx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Wn=function(i,e,t){var n=new Error(e||Mx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Wn),!t)throw n;return n},Sx=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new Rn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Rn(r*3));var c=function(be){var Se=t.length;if(be>Se){var ye=new Rn(Math.max(Se*2,be));ye.set(t),t=ye}},h=e.f||0,u=e.p||0,f=e.b||0,p=e.l,x=e.d,b=e.m,m=e.n,d=r*8;do{if(!p){h=Vn(i,u,1);var w=Vn(i,u+1,3);if(u+=3,w)if(w==1)p=xx,x=bx,b=9,m=5;else if(w==2){var A=Vn(i,u,31)+257,D=Vn(i,u+10,15)+4,z=A+Vn(i,u+5,31)+1;u+=14;for(var E=new Rn(z),y=new Rn(19),N=0;N<D;++N)y[mx[N]]=Vn(i,u+N*3,7);u+=D*3;for(var W=Uh(y),j=(1<<W)-1,$=ua(y,W,1),N=0;N<z;){var Z=$[Vn(i,u,j)];u+=Z&15;var M=Z>>4;if(M<16)E[N++]=M;else{var K=0,oe=0;for(M==16?(oe=3+Vn(i,u,3),u+=2,K=E[N-1]):M==17?(oe=3+Vn(i,u,7),u+=3):M==18&&(oe=11+Vn(i,u,127),u+=7);oe--;)E[N++]=K}}var Q=E.subarray(0,A),le=E.subarray(A);b=Uh(Q),m=Uh(le),p=ua(Q,b,1),x=ua(le,m,1)}else Wn(1);else{var M=_x(u)+4,_=i[M-4]|i[M-3]<<8,P=M+_;if(P>r){l&&Wn(0);break}o&&c(f+_),t.set(i.subarray(M,P),f),e.b=f+=_,e.p=u=P*8,e.f=h;continue}if(u>d){l&&Wn(0);break}}o&&c(f+131072);for(var ve=(1<<b)-1,Ae=(1<<m)-1,Oe=u;;Oe=u){var K=p[Nh(i,u)&ve],et=K>>4;if(u+=K&15,u>d){l&&Wn(0);break}if(K||Wn(2),et<256)t[f++]=et;else if(et==256){Oe=u,p=null;break}else{var ne=et-254;if(et>264){var N=et-257,ue=Zf[N];ne=Vn(i,u,(1<<ue)-1)+$f[N],u+=ue}var ae=x[Nh(i,u)&Ae],de=ae>>4;ae||Wn(3),u+=ae&15;var le=vx[de];if(de>3){var ue=Kf[de];le+=Nh(i,u)&(1<<ue)-1,u+=ue}if(u>d){l&&Wn(0);break}o&&c(f+131072);var Ce=f+ne;if(f<le){var Ze=s-le,Ue=Math.min(le,Ce);for(Ze+f<0&&Wn(3);f<Ue;++f)t[f]=n[Ze+f]}for(;f<Ce;++f)t[f]=t[f-le]}}e.l=p,e.p=Oe,e.b=f,e.f=h,p&&(h=1,e.m=b,e.d=x,e.n=m)}while(!h);return f!=t.length&&a?yx(t,0,f):t.subarray(0,f)};var Ex=new Rn(0);var wx=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Wn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Wn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function da(i,e){return Sx(i.subarray(wx(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Tx=typeof TextDecoder<"u"&&new TextDecoder,Ax=0;try{Tx.decode(Ex,{stream:!0}),Ax=1}catch{}var ls=class extends Ys{constructor(e){super(e),this.type=Rt}parse(e){let E=Math.pow(2.7182818,2.2);function y(g,T){let F=0;for(let R=0;R<65536;++R)(R==0||g[R>>3]&1<<(R&7))&&(T[F++]=R);let v=F-1;for(;F<65536;)T[F++]=0;return v}function N(g){for(let T=0;T<16384;T++)g[T]={},g[T].len=0,g[T].lit=0,g[T].p=null}let W={l:0,c:0,lc:0};function j(g,T,F,v,R){for(;F<g;)T=T<<8|Ie(v,R),F+=8;F-=g,W.l=T>>F&(1<<g)-1,W.c=T,W.lc=F}let $=new Array(59);function Z(g){for(let F=0;F<=58;++F)$[F]=0;for(let F=0;F<65537;++F)$[g[F]]+=1;let T=0;for(let F=58;F>0;--F){let v=T+$[F]>>1;$[F]=T,T=v}for(let F=0;F<65537;++F){let v=g[F];v>0&&(g[F]=v|$[v]++<<6)}}function K(g,T,F,v,R,C){let O=T,U=0,G=0;for(;v<=R;v++){if(O.value-T.value>F)return!1;j(6,U,G,g,O);let q=W.l;if(U=W.c,G=W.lc,C[v]=q,q==63){if(O.value-T.value>F)throw new Error("Something wrong with hufUnpackEncTable");j(8,U,G,g,O);let Y=W.l+6;if(U=W.c,G=W.lc,v+Y>R+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)C[v++]=0;v--}else if(q>=59){let Y=q-59+2;if(v+Y>R+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)C[v++]=0;v--}}Z(C)}function oe(g){return g&63}function Q(g){return g>>6}function le(g,T,F,v){for(;T<=F;T++){let R=Q(g[T]),C=oe(g[T]);if(R>>C)throw new Error("Invalid table entry");if(C>14){let O=v[R>>C-14];if(O.len)throw new Error("Invalid table entry");if(O.lit++,O.p){let U=O.p;O.p=new Array(O.lit);for(let G=0;G<O.lit-1;++G)O.p[G]=U[G]}else O.p=new Array(1);O.p[O.lit-1]=T}else if(C){let O=0;for(let U=1<<14-C;U>0;U--){let G=v[(R<<14-C)+O];if(G.len||G.p)throw new Error("Invalid table entry");G.len=C,G.lit=T,O++}}}return!0}let ve={c:0,lc:0};function Ae(g,T,F,v){g=g<<8|Ie(F,v),T+=8,ve.c=g,ve.lc=T}let Oe={c:0,lc:0};function et(g,T,F,v,R,C,O,U,G){if(g==T){v<8&&(Ae(F,v,R,C),F=ve.c,v=ve.lc),v-=8;let q=F>>v;if(q=new Uint8Array([q])[0],U.value+q>G)return!1;let Y=O[U.value-1];for(;q-- >0;)O[U.value++]=Y}else if(U.value<G)O[U.value++]=g;else return!1;Oe.c=F,Oe.lc=v}function ne(g){return g&65535}function ue(g){let T=ne(g);return T>32767?T-65536:T}let ae={a:0,b:0};function de(g,T){let F=ue(g),R=ue(T),C=F+(R&1)+(R>>1),O=C,U=C-R;ae.a=O,ae.b=U}function Ce(g,T){let F=ne(g),v=ne(T),R=F-(v>>1)&65535,C=v+R-32768&65535;ae.a=C,ae.b=R}function Ze(g,T,F,v,R,C,O){let U=O<16384,G=F>R?R:F,q=1,Y,te;for(;q<=G;)q<<=1;for(q>>=1,Y=q,q>>=1;q>=1;){te=0;let he=te+C*(R-Y),ce=C*q,pe=C*Y,ge=v*q,_e=v*Y,ze,Ke,Xe,Fe;for(;te<=he;te+=pe){let st=te,ke=te+v*(F-Y);for(;st<=ke;st+=_e){let gt=st+ge,Ht=st+ce,dt=Ht+ge;U?(de(g[st+T],g[Ht+T]),ze=ae.a,Xe=ae.b,de(g[gt+T],g[dt+T]),Ke=ae.a,Fe=ae.b,de(ze,Ke),g[st+T]=ae.a,g[gt+T]=ae.b,de(Xe,Fe),g[Ht+T]=ae.a,g[dt+T]=ae.b):(Ce(g[st+T],g[Ht+T]),ze=ae.a,Xe=ae.b,Ce(g[gt+T],g[dt+T]),Ke=ae.a,Fe=ae.b,Ce(ze,Ke),g[st+T]=ae.a,g[gt+T]=ae.b,Ce(Xe,Fe),g[Ht+T]=ae.a,g[dt+T]=ae.b)}if(F&q){let gt=st+ce;U?de(g[st+T],g[gt+T]):Ce(g[st+T],g[gt+T]),ze=ae.a,g[gt+T]=ae.b,g[st+T]=ze}}if(R&q){let st=te,ke=te+v*(F-Y);for(;st<=ke;st+=_e){let gt=st+ge;U?de(g[st+T],g[gt+T]):Ce(g[st+T],g[gt+T]),ze=ae.a,g[gt+T]=ae.b,g[st+T]=ze}}Y=q,q>>=1}return te}function Ue(g,T,F,v,R,C,O,U,G){let q=0,Y=0,te=O,he=Math.trunc(v.value+(R+7)/8);for(;v.value<he;)for(Ae(q,Y,F,v),q=ve.c,Y=ve.lc;Y>=14;){let pe=q>>Y-14&16383,ge=T[pe];if(ge.len)Y-=ge.len,et(ge.lit,C,q,Y,F,v,U,G,te),q=Oe.c,Y=Oe.lc;else{if(!ge.p)throw new Error("hufDecode issues");let _e;for(_e=0;_e<ge.lit;_e++){let ze=oe(g[ge.p[_e]]);for(;Y<ze&&v.value<he;)Ae(q,Y,F,v),q=ve.c,Y=ve.lc;if(Y>=ze&&Q(g[ge.p[_e]])==(q>>Y-ze&(1<<ze)-1)){Y-=ze,et(ge.p[_e],C,q,Y,F,v,U,G,te),q=Oe.c,Y=Oe.lc;break}}if(_e==ge.lit)throw new Error("hufDecode issues")}}let ce=8-R&7;for(q>>=ce,Y-=ce;Y>0;){let pe=T[q<<14-Y&16383];if(pe.len)Y-=pe.len,et(pe.lit,C,q,Y,F,v,U,G,te),q=Oe.c,Y=Oe.lc;else throw new Error("hufDecode issues")}return!0}function be(g,T,F,v,R,C){let O={value:0},U=F.value,G=Ge(T,F),q=Ge(T,F);F.value+=4;let Y=Ge(T,F);if(F.value+=4,G<0||G>=65537||q<0||q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let te=new Array(65537),he=new Array(16384);N(he);let ce=v-(F.value-U);if(K(g,F,ce,G,q,te),Y>8*(v-(F.value-U)))throw new Error("Something wrong with hufUncompress");le(te,G,q,he),Ue(te,he,g,F,Y,q,C,R,O)}function Se(g,T,F){for(let v=0;v<F;++v)T[v]=g[T[v]]}function ye(g){for(let T=1;T<g.length;T++){let F=g[T-1]+g[T]-128;g[T]=F}}function B(g,T){let F=0,v=Math.floor((g.length+1)/2),R=0,C=g.length-1;for(;!(R>C||(T[R++]=g[F++],R>C));)T[R++]=g[v++]}function bt(g){let T=g.byteLength,F=new Array,v=0,R=new DataView(g);for(;T>0;){let C=R.getInt8(v++);if(C<0){let O=-C;T-=O+1;for(let U=0;U<O;U++)F.push(R.getUint8(v++))}else{let O=C;T-=2;let U=R.getUint8(v++);for(let G=0;G<O+1;G++)F.push(U)}}return F}function Ye(g,T,F,v,R,C){let O=new DataView(C.buffer),U=F[g.idx[0]].width,G=F[g.idx[0]].height,q=3,Y=Math.floor(U/8),te=Math.ceil(U/8),he=Math.ceil(G/8),ce=U-(te-1)*8,pe=G-(he-1)*8,ge={value:0},_e=new Array(q),ze=new Array(q),Ke=new Array(q),Xe=new Array(q),Fe=new Array(q);for(let ke=0;ke<q;++ke)Fe[ke]=T[g.idx[ke]],_e[ke]=ke<1?0:_e[ke-1]+te*he,ze[ke]=new Float32Array(64),Ke[ke]=new Uint16Array(64),Xe[ke]=new Uint16Array(te*64);for(let ke=0;ke<he;++ke){let gt=8;ke==he-1&&(gt=pe);let Ht=8;for(let ut=0;ut<te;++ut){ut==te-1&&(Ht=ce);for(let Je=0;Je<q;++Je)Ke[Je].fill(0),Ke[Je][0]=R[_e[Je]++],je(ge,v,Ke[Je]),Be(Ke[Je],ze[Je]),ft(ze[Je]);q==3&&He(ze);for(let Je=0;Je<q;++Je)I(ze[Je],Xe[Je],ut*64)}let dt=0;for(let ut=0;ut<q;++ut){let Je=F[g.idx[ut]].type;for(let Pt=8*ke;Pt<8*ke+gt;++Pt){dt=Fe[ut][Pt];for(let jt=0;jt<Y;++jt){let St=jt*64+(Pt&7)*8;O.setUint16(dt+0*Je,Xe[ut][St+0],!0),O.setUint16(dt+2*Je,Xe[ut][St+1],!0),O.setUint16(dt+4*Je,Xe[ut][St+2],!0),O.setUint16(dt+6*Je,Xe[ut][St+3],!0),O.setUint16(dt+8*Je,Xe[ut][St+4],!0),O.setUint16(dt+10*Je,Xe[ut][St+5],!0),O.setUint16(dt+12*Je,Xe[ut][St+6],!0),O.setUint16(dt+14*Je,Xe[ut][St+7],!0),dt+=16*Je}}if(Y!=te)for(let Pt=8*ke;Pt<8*ke+gt;++Pt){let jt=Fe[ut][Pt]+8*Y*2*Je,St=Y*64+(Pt&7)*8;for(let Gt=0;Gt<Ht;++Gt)O.setUint16(jt+Gt*2*Je,Xe[ut][St+Gt],!0)}}}let st=new Uint16Array(U);O=new DataView(C.buffer);for(let ke=0;ke<q;++ke){F[g.idx[ke]].decoded=!0;let gt=F[g.idx[ke]].type;if(F[ke].type==2)for(let Ht=0;Ht<G;++Ht){let dt=Fe[ke][Ht];for(let ut=0;ut<U;++ut)st[ut]=O.getUint16(dt+ut*2*gt,!0);for(let ut=0;ut<U;++ut)O.setFloat32(dt+ut*2*gt,V(st[ut]),!0)}}}function je(g,T,F){let v,R=1;for(;R<64;)v=T[g.value],v==65280?R=64:v>>8==255?R+=v&255:(F[R]=v,R++),g.value++}function Be(g,T){T[0]=V(g[0]),T[1]=V(g[1]),T[2]=V(g[5]),T[3]=V(g[6]),T[4]=V(g[14]),T[5]=V(g[15]),T[6]=V(g[27]),T[7]=V(g[28]),T[8]=V(g[2]),T[9]=V(g[4]),T[10]=V(g[7]),T[11]=V(g[13]),T[12]=V(g[16]),T[13]=V(g[26]),T[14]=V(g[29]),T[15]=V(g[42]),T[16]=V(g[3]),T[17]=V(g[8]),T[18]=V(g[12]),T[19]=V(g[17]),T[20]=V(g[25]),T[21]=V(g[30]),T[22]=V(g[41]),T[23]=V(g[43]),T[24]=V(g[9]),T[25]=V(g[11]),T[26]=V(g[18]),T[27]=V(g[24]),T[28]=V(g[31]),T[29]=V(g[40]),T[30]=V(g[44]),T[31]=V(g[53]),T[32]=V(g[10]),T[33]=V(g[19]),T[34]=V(g[23]),T[35]=V(g[32]),T[36]=V(g[39]),T[37]=V(g[45]),T[38]=V(g[52]),T[39]=V(g[54]),T[40]=V(g[20]),T[41]=V(g[22]),T[42]=V(g[33]),T[43]=V(g[38]),T[44]=V(g[46]),T[45]=V(g[51]),T[46]=V(g[55]),T[47]=V(g[60]),T[48]=V(g[21]),T[49]=V(g[34]),T[50]=V(g[37]),T[51]=V(g[47]),T[52]=V(g[50]),T[53]=V(g[56]),T[54]=V(g[59]),T[55]=V(g[61]),T[56]=V(g[35]),T[57]=V(g[36]),T[58]=V(g[48]),T[59]=V(g[49]),T[60]=V(g[57]),T[61]=V(g[58]),T[62]=V(g[62]),T[63]=V(g[63])}function ft(g){let T=.5*Math.cos(.7853975),F=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),R=.5*Math.cos(3*3.14159/16),C=.5*Math.cos(5*3.14159/16),O=.5*Math.cos(3*3.14159/8),U=.5*Math.cos(7*3.14159/16),G=new Array(4),q=new Array(4),Y=new Array(4),te=new Array(4);for(let he=0;he<8;++he){let ce=he*8;G[0]=v*g[ce+2],G[1]=O*g[ce+2],G[2]=v*g[ce+6],G[3]=O*g[ce+6],q[0]=F*g[ce+1]+R*g[ce+3]+C*g[ce+5]+U*g[ce+7],q[1]=R*g[ce+1]-U*g[ce+3]-F*g[ce+5]-C*g[ce+7],q[2]=C*g[ce+1]-F*g[ce+3]+U*g[ce+5]+R*g[ce+7],q[3]=U*g[ce+1]-C*g[ce+3]+R*g[ce+5]-F*g[ce+7],Y[0]=T*(g[ce+0]+g[ce+4]),Y[3]=T*(g[ce+0]-g[ce+4]),Y[1]=G[0]+G[3],Y[2]=G[1]-G[2],te[0]=Y[0]+Y[1],te[1]=Y[3]+Y[2],te[2]=Y[3]-Y[2],te[3]=Y[0]-Y[1],g[ce+0]=te[0]+q[0],g[ce+1]=te[1]+q[1],g[ce+2]=te[2]+q[2],g[ce+3]=te[3]+q[3],g[ce+4]=te[3]-q[3],g[ce+5]=te[2]-q[2],g[ce+6]=te[1]-q[1],g[ce+7]=te[0]-q[0]}for(let he=0;he<8;++he)G[0]=v*g[16+he],G[1]=O*g[16+he],G[2]=v*g[48+he],G[3]=O*g[48+he],q[0]=F*g[8+he]+R*g[24+he]+C*g[40+he]+U*g[56+he],q[1]=R*g[8+he]-U*g[24+he]-F*g[40+he]-C*g[56+he],q[2]=C*g[8+he]-F*g[24+he]+U*g[40+he]+R*g[56+he],q[3]=U*g[8+he]-C*g[24+he]+R*g[40+he]-F*g[56+he],Y[0]=T*(g[he]+g[32+he]),Y[3]=T*(g[he]-g[32+he]),Y[1]=G[0]+G[3],Y[2]=G[1]-G[2],te[0]=Y[0]+Y[1],te[1]=Y[3]+Y[2],te[2]=Y[3]-Y[2],te[3]=Y[0]-Y[1],g[0+he]=te[0]+q[0],g[8+he]=te[1]+q[1],g[16+he]=te[2]+q[2],g[24+he]=te[3]+q[3],g[32+he]=te[3]-q[3],g[40+he]=te[2]-q[2],g[48+he]=te[1]-q[1],g[56+he]=te[0]-q[0]}function He(g){for(let T=0;T<64;++T){let F=g[0][T],v=g[1][T],R=g[2][T];g[0][T]=F+1.5747*R,g[1][T]=F-.1873*v-.4682*R,g[2][T]=F+1.8556*v}}function I(g,T,F){for(let v=0;v<64;++v)T[F+v]=Hr.toHalfFloat(S(g[v]))}function S(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(E,Math.abs(g)-1)}function J(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function se(g){let T=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),F=new Uint8Array(bt(T)),v=new Uint8Array(F.length);return ye(F),B(F,v),new DataView(v.buffer)}function fe(g){let T=g.array.slice(g.offset.value,g.offset.value+g.size),F=da(T),v=new Uint8Array(F.length);return ye(F),B(F,v),new DataView(v.buffer)}function re(g){let T=g.viewer,F={value:g.offset.value},v=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),R=new Uint8Array(8192),C=0,O=new Array(g.inputChannels.length);for(let pe=0,ge=g.inputChannels.length;pe<ge;pe++)O[pe]={},O[pe].start=C,O[pe].end=O[pe].start,O[pe].nx=g.columns,O[pe].ny=g.lines,O[pe].size=g.type,C+=O[pe].nx*O[pe].ny*O[pe].size;let U=X(T,F),G=X(T,F);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(U<=G)for(let pe=0;pe<G-U+1;pe++)R[pe+U]=rt(T,F);let q=new Uint16Array(65536),Y=y(R,q),te=Ge(T,F);be(g.array,T,F,te,v,C);for(let pe=0;pe<g.inputChannels.length;++pe){let ge=O[pe];for(let _e=0;_e<O[pe].size;++_e)Ze(v,ge.start+_e,ge.nx,ge.size,ge.ny,ge.nx*ge.size,Y)}Se(q,v,C);let he=0,ce=new Uint8Array(v.buffer.byteLength);for(let pe=0;pe<g.lines;pe++)for(let ge=0;ge<g.inputChannels.length;ge++){let _e=O[ge],ze=_e.nx*_e.size,Ke=new Uint8Array(v.buffer,_e.end*2,ze*2);ce.set(Ke,he),he+=ze*2,_e.end+=ze}return new DataView(ce.buffer)}function De(g){let T=g.array.slice(g.offset.value,g.offset.value+g.size),F=da(T),v=g.inputChannels.length*g.lines*g.columns*g.totalBytes,R=new ArrayBuffer(v),C=new DataView(R),O=0,U=0,G=new Array(4);for(let q=0;q<g.lines;q++)for(let Y=0;Y<g.inputChannels.length;Y++){let te=0;switch(g.inputChannels[Y].pixelType){case 1:G[0]=O,G[1]=G[0]+g.columns,O=G[1]+g.columns;for(let ce=0;ce<g.columns;++ce){let pe=F[G[0]++]<<8|F[G[1]++];te+=pe,C.setUint16(U,te,!0),U+=2}break;case 2:G[0]=O,G[1]=G[0]+g.columns,G[2]=G[1]+g.columns,O=G[2]+g.columns;for(let ce=0;ce<g.columns;++ce){let pe=F[G[0]++]<<24|F[G[1]++]<<16|F[G[2]++]<<8;te+=pe,C.setUint32(U,te,!0),U+=4}break}}return C}function Me(g){let T=g.viewer,F={value:g.offset.value},v=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),R={version:H(T,F),unknownUncompressedSize:H(T,F),unknownCompressedSize:H(T,F),acCompressedSize:H(T,F),dcCompressedSize:H(T,F),rleCompressedSize:H(T,F),rleUncompressedSize:H(T,F),rleRawSize:H(T,F),totalAcUncompressedCount:H(T,F),totalDcUncompressedCount:H(T,F),acCompression:H(T,F)};if(R.version<2)throw new Error("EXRLoader.parse: "+ni.compression+" version "+R.version+" is unsupported");let C=new Array,O=X(T,F)-2;for(;O>0;){let ge=Ne(T.buffer,F),_e=rt(T,F),ze=_e>>2&3,Ke=(_e>>4)-1,Xe=new Int8Array([Ke])[0],Fe=rt(T,F);C.push({name:ge,index:Xe,type:Fe,compression:ze}),O-=ge.length+3}let U=ni.channels,G=new Array(g.inputChannels.length);for(let ge=0;ge<g.inputChannels.length;++ge){let _e=G[ge]={},ze=U[ge];_e.name=ze.name,_e.compression=0,_e.decoded=!1,_e.type=ze.pixelType,_e.pLinear=ze.pLinear,_e.width=g.columns,_e.height=g.lines}let q={idx:new Array(3)};for(let ge=0;ge<g.inputChannels.length;++ge){let _e=G[ge];for(let ze=0;ze<C.length;++ze){let Ke=C[ze];_e.name==Ke.name&&(_e.compression=Ke.compression,Ke.index>=0&&(q.idx[Ke.index]=ge),_e.offset=ge)}}let Y,te,he;if(R.acCompressedSize>0)switch(R.acCompression){case 0:Y=new Uint16Array(R.totalAcUncompressedCount),be(g.array,T,F,R.acCompressedSize,Y,R.totalAcUncompressedCount);break;case 1:let ge=g.array.slice(F.value,F.value+R.totalAcUncompressedCount),_e=da(ge);Y=new Uint16Array(_e.buffer),F.value+=R.totalAcUncompressedCount;break}if(R.dcCompressedSize>0){let ge={array:g.array,offset:F,size:R.dcCompressedSize};te=new Uint16Array(fe(ge).buffer),F.value+=R.dcCompressedSize}if(R.rleRawSize>0){let ge=g.array.slice(F.value,F.value+R.rleCompressedSize),_e=da(ge);he=bt(_e.buffer),F.value+=R.rleCompressedSize}let ce=0,pe=new Array(G.length);for(let ge=0;ge<pe.length;++ge)pe[ge]=new Array;for(let ge=0;ge<g.lines;++ge)for(let _e=0;_e<G.length;++_e)pe[_e].push(ce),ce+=G[_e].width*g.type*2;Ye(q,pe,G,Y,te,v);for(let ge=0;ge<G.length;++ge){let _e=G[ge];if(!_e.decoded)switch(_e.compression){case 2:let ze=0,Ke=0;for(let Xe=0;Xe<g.lines;++Xe){let Fe=pe[ge][ze];for(let st=0;st<_e.width;++st){for(let ke=0;ke<2*_e.type;++ke)v[Fe++]=he[Ke+ke*_e.width*_e.height];Ke++}ze++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function Ne(g,T){let F=new Uint8Array(g),v=0;for(;F[T.value+v]!=0;)v+=1;let R=new TextDecoder().decode(F.slice(T.value,T.value+v));return T.value=T.value+v+1,R}function We(g,T,F){let v=new TextDecoder().decode(new Uint8Array(g).slice(T.value,T.value+F));return T.value=T.value+F,v}function me(g,T){let F=Pe(g,T),v=Ge(g,T);return[F,v]}function we(g,T){let F=Ge(g,T),v=Ge(g,T);return[F,v]}function Pe(g,T){let F=g.getInt32(T.value,!0);return T.value=T.value+4,F}function Ge(g,T){let F=g.getUint32(T.value,!0);return T.value=T.value+4,F}function Ie(g,T){let F=g[T.value];return T.value=T.value+1,F}function rt(g,T){let F=g.getUint8(T.value);return T.value=T.value+1,F}let H=function(g,T){let F;return"getBigInt64"in DataView.prototype?F=Number(g.getBigInt64(T.value,!0)):F=g.getUint32(T.value+4,!0)+Number(g.getUint32(T.value,!0)<<32),T.value+=8,F};function ie(g,T){let F=g.getFloat32(T.value,!0);return T.value+=4,F}function L(g,T){return Hr.toHalfFloat(ie(g,T))}function V(g){let T=(g&31744)>>10,F=g&1023;return(g>>15?-1:1)*(T?T===31?F?NaN:1/0:Math.pow(2,T-15)*(1+F/1024):6103515625e-14*(F/1024))}function X(g,T){let F=g.getUint16(T.value,!0);return T.value+=2,F}function ee(g,T){return V(X(g,T))}function xe(g,T,F,v){let R=F.value,C=[];for(;F.value<R+v-1;){let O=Ne(T,F),U=Pe(g,F),G=rt(g,F);F.value+=3;let q=Pe(g,F),Y=Pe(g,F);C.push({name:O,pixelType:U,pLinear:G,xSampling:q,ySampling:Y})}return F.value+=1,C}function Te(g,T){let F=ie(g,T),v=ie(g,T),R=ie(g,T),C=ie(g,T),O=ie(g,T),U=ie(g,T),G=ie(g,T),q=ie(g,T);return{redX:F,redY:v,greenX:R,greenY:C,blueX:O,blueY:U,whiteX:G,whiteY:q}}function Qe(g,T){let F=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=rt(g,T);return F[v]}function yt(g,T){let F=Pe(g,T),v=Pe(g,T),R=Pe(g,T),C=Pe(g,T);return{xMin:F,yMin:v,xMax:R,yMax:C}}function Nt(g,T){let F=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=rt(g,T);return F[v]}function mt(g,T){let F=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=rt(g,T);return F[v]}function vn(g,T){let F=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],R=Ge(g,T),C=Ge(g,T),O=rt(g,T);return{xSize:R,ySize:C,levelMode:F[O&15],roundingMode:v[O>>4]}}function In(g,T){let F=ie(g,T),v=ie(g,T);return[F,v]}function Aa(g,T){let F=ie(g,T),v=ie(g,T),R=ie(g,T);return[F,v,R]}function Ra(g,T,F,v,R){if(v==="string"||v==="stringvector"||v==="iccProfile")return We(T,F,R);if(v==="chlist")return xe(g,T,F,R);if(v==="chromaticities")return Te(g,F);if(v==="compression")return Qe(g,F);if(v==="box2i")return yt(g,F);if(v==="envmap")return mt(g,F);if(v==="tiledesc")return vn(g,F);if(v==="lineOrder")return Nt(g,F);if(v==="float")return ie(g,F);if(v==="v2f")return In(g,F);if(v==="v3f")return Aa(g,F);if(v==="int")return Pe(g,F);if(v==="rational")return me(g,F);if(v==="timecode")return we(g,F);if(v==="preview")return F.value+=R,"skipped";F.value+=R}function ti(g,T){let F=Math.log2(g);return T=="ROUND_DOWN"?Math.floor(F):Math.ceil(F)}function ms(g,T,F){let v=0;switch(g.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=ti(Math.max(T,F),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function gs(g,T,F,v){let R=new Array(g);for(let C=0;C<g;C++){let O=1<<C,U=T/O|0;v=="ROUND_UP"&&U*O<T&&(U+=1);let G=Math.max(U,1);R[C]=(G+F-1)/F|0}return R}function Ca(){let g=this,T=g.offset,F={value:0};for(let v=0;v<g.tileCount;v++){let R=Pe(g.viewer,T),C=Pe(g.viewer,T);T.value+=8,g.size=Ge(g.viewer,T);let O=R*g.blockWidth,U=C*g.blockHeight;g.columns=O+g.blockWidth>g.width?g.width-O:g.blockWidth,g.lines=U+g.blockHeight>g.height?g.height-U:g.blockHeight;let G=g.columns*g.totalBytes,Y=g.size<g.lines*G?g.uncompress(g):J(g);T.value+=g.size;for(let te=0;te<g.lines;te++){let he=te*g.columns*g.totalBytes;for(let ce=0;ce<g.inputChannels.length;ce++){let pe=ni.channels[ce].name,ge=g.channelByteOffsets[pe]*g.columns,_e=g.decodeChannels[pe];if(_e===void 0)continue;F.value=he+ge;let ze=(g.height-(1+U+te))*g.outLineWidth;for(let Ke=0;Ke<g.columns;Ke++){let Xe=ze+(Ke+O)*g.outputChannels+_e;g.byteArray[Xe]=g.getter(Y,F)}}}}}function _r(){let g=this,T=g.offset,F={value:0};for(let v=0;v<g.height/g.blockHeight;v++){let R=Pe(g.viewer,T)-ni.dataWindow.yMin;g.size=Ge(g.viewer,T),g.lines=R+g.blockHeight>g.height?g.height-R:g.blockHeight;let C=g.columns*g.totalBytes,U=g.size<g.lines*C?g.uncompress(g):J(g);T.value+=g.size;for(let G=0;G<g.blockHeight;G++){let q=v*g.blockHeight,Y=G+g.scanOrder(q);if(Y>=g.height)continue;let te=G*C,he=(g.height-1-Y)*g.outLineWidth;for(let ce=0;ce<g.inputChannels.length;ce++){let pe=ni.channels[ce].name,ge=g.channelByteOffsets[pe]*g.columns,_e=g.decodeChannels[pe];if(_e!==void 0){F.value=te+ge;for(let ze=0;ze<g.columns;ze++){let Ke=he+ze*g.outputChannels+_e;g.byteArray[Ke]=g.getter(U,F)}}}}}}function Pa(g,T,F){let v={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=g.getUint8(4);let R=g.getUint8(5);v.spec={singleTile:!!(R&2),longName:!!(R&4),deepFormat:!!(R&8),multiPart:!!(R&16)},F.value=8;let C=!0;for(;C;){let O=Ne(T,F);if(O==="")C=!1;else{let U=Ne(T,F),G=Ge(g,F),q=Ra(g,T,F,U,G);q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):v[O]=q}}if((R&-7)!=0)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function yr(g,T,F,v,R){let C={size:0,viewer:T,array:F,offset:v,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:zt};switch(g.compression){case"NO_COMPRESSION":C.blockHeight=1,C.uncompress=J;break;case"RLE_COMPRESSION":C.blockHeight=1,C.uncompress=se;break;case"ZIPS_COMPRESSION":C.blockHeight=1,C.uncompress=fe;break;case"ZIP_COMPRESSION":C.blockHeight=16,C.uncompress=fe;break;case"PIZ_COMPRESSION":C.blockHeight=32,C.uncompress=re;break;case"PXR24_COMPRESSION":C.blockHeight=16,C.uncompress=De;break;case"DWAA_COMPRESSION":C.blockHeight=32,C.uncompress=Me;break;case"DWAB_COMPRESSION":C.blockHeight=256,C.uncompress=Me;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}let O={};for(let Y of g.channels)switch(Y.name){case"Y":case"R":case"G":case"B":case"A":O[Y.name]=!0,C.type=Y.pixelType}let U=!1;if(O.R&&O.G&&O.B)U=!O.A,C.outputChannels=4,C.decodeChannels={R:0,G:1,B:2,A:3};else if(O.Y)C.outputChannels=1,C.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(C.type==1)switch(R){case nn:C.getter=ee;break;case Rt:C.getter=X;break}else if(C.type==2)switch(R){case nn:C.getter=ie;break;case Rt:C.getter=L}else throw new Error("EXRLoader.parse: unsupported pixelType "+C.type+" for "+g.compression+".");C.columns=C.width;let G=C.width*C.height*C.outputChannels;switch(R){case nn:C.byteArray=new Float32Array(G),U&&C.byteArray.fill(1,0,G);break;case Rt:C.byteArray=new Uint16Array(G),U&&C.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",R);break}let q=0;for(let Y of g.channels)C.decodeChannels[Y.name]!==void 0&&(C.channelByteOffsets[Y.name]=q),q+=Y.pixelType*2;if(C.totalBytes=q,C.outLineWidth=C.width*C.outputChannels,g.lineOrder==="INCREASING_Y"?C.scanOrder=Y=>Y:C.scanOrder=Y=>C.height-1-Y,C.outputChannels==4?(C.format=Jt,C.colorSpace=zt):(C.format=Qr,C.colorSpace=Gn),g.spec.singleTile){C.blockHeight=g.tiles.ySize,C.blockWidth=g.tiles.xSize;let Y=ms(g.tiles,C.width,C.height),te=gs(Y,C.width,g.tiles.xSize,g.tiles.roundingMode),he=gs(Y,C.height,g.tiles.ySize,g.tiles.roundingMode);C.tileCount=te[0]*he[0];for(let ce=0;ce<Y;ce++)for(let pe=0;pe<he[ce];pe++)for(let ge=0;ge<te[ce];ge++)H(T,v);C.decode=Ca.bind(C)}else{C.blockWidth=C.width;let Y=Math.ceil(C.height/C.blockHeight);for(let te=0;te<Y;te++)H(T,v);C.decode=_r.bind(C)}return C}let vs={value:0},xs=new DataView(e),Nl=new Uint8Array(e),ni=Pa(xs,e,vs),Si=yr(ni,xs,Nl,vs,this.type);return Si.decode(),{header:ni,width:Si.width,height:Si.height,data:Si.byteArray,format:Si.format,colorSpace:Si.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Dt,a.magFilter=Dt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,r)}};var nd=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?e:i,s,a=WebAssembly.instantiate(o(r),{}).then(function(d){s=d.instance,s.exports.__wasm_call_ctors()});function o(d){for(var w=new Uint8Array(d.length),M=0;M<d.length;++M){var _=d.charCodeAt(M);w[M]=_>96?_-97:_>64?_-39:_+4}for(var P=0,M=0;M<d.length;++M)w[P++]=w[M]<60?n[w[M]]:(w[M]-60)*64+w[++M];return w.buffer.slice(0,P)}function l(d,w,M,_,P,A){var D=s.exports.sbrk,z=M+3&-4,E=D(z*_),y=D(P.length),N=new Uint8Array(s.exports.memory.buffer);N.set(P,y);var W=d(E,M,_,y,P.length);if(W==0&&A&&A(E,z,_),w.set(N.subarray(E,E+M*_)),D(E-D(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var w={object:new Worker(d),pending:0,requests:{}};return w.object.onmessage=function(M){var _=M.data;w.pending-=_.count,w.requests[_.id][_.action](_.value),delete w.requests[_.id]},w}function x(d){for(var w="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(r))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),M=new Blob([w],{type:"text/javascript"}),_=URL.createObjectURL(M),P=0;P<d;++P)u[P]=p(_);URL.revokeObjectURL(_)}function b(d,w,M,_,P){for(var A=u[0],D=1;D<u.length;++D)u[D].pending<A.pending&&(A=u[D]);return new Promise(function(z,E){var y=new Uint8Array(M),N=f++;A.pending+=d,A.requests[N]={resolve:z,reject:E},A.object.postMessage({id:N,count:d,size:w,source:y,mode:_,filter:P},[y.buffer])})}function m(d){a.then(function(){var w=d.data;try{var M=new Uint8Array(w.count*w.size);l(s.exports[w.mode],M,w.count,w.size,w.source,s.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:M},[M.buffer])}catch(_){self.postMessage({id:w.id,count:w.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(d){x(d)},decodeVertexBuffer:function(d,w,M,_,P){l(s.exports.meshopt_decodeVertexBuffer,d,w,M,_,s.exports[c[P]])},decodeIndexBuffer:function(d,w,M,_){l(s.exports.meshopt_decodeIndexBuffer,d,w,M,_)},decodeIndexSequence:function(d,w,M,_){l(s.exports.meshopt_decodeIndexSequence,d,w,M,_)},decodeGltfBuffer:function(d,w,M,_,P,A){l(s.exports[h[P]],d,w,M,_,s.exports[c[A]])},decodeGltfBufferAsync:function(d,w,M,_,P){return u.length>0?b(d,w,M,h[_],c[P]):a.then(function(){var A=new Uint8Array(d*w);return l(s.exports[h[_]],A,d,w,M,s.exports[c[P]]),A})}}})();var $n={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cx=new gi(-1,1,1,-1,0,1),Oh=class extends Xt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},Px=new Oh,ei=class{constructor(e){this._mesh=new it(Px,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var El=class extends hn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ei(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pa=class extends hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},wl=class extends hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cs=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ve);this._width=n.width,this._height=n.height,t=new Ct(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new El($n),this.copyPass.material.blending=kt,this.clock=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pa!==void 0&&(a instanceof pa?n=!0:a instanceof wl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hs=class extends hn{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var id={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ki=class i extends hn{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ct(s,a,{type:Rt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ct(s,a,{type:Rt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ct(s,a,{type:Rt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=id;this.highPassUniforms=cn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ve(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cn.clone($n.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader,blending:Qs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new ei(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ve(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ki.BlurDirectionX=new Ve(1,0);ki.BlurDirectionY=new Ve(0,1);var ma={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ve},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new tt},cameraProjectionMatrixInverse:{value:new tt},cameraWorldMatrix:{value:new tt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},ga={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Tl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function rd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ix(e),n=t.length,r=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();r[a*4]=(c.x*.5+.5)*255,r[a*4+1]=(c.y*.5+.5)*255,r[a*4+2]=127,r[a*4+3]=255}let s=new Yn(r,e,e);return s.wrapS=Vt,s.wrapT=Vt,s.needsUpdate=!0,s}function Ix(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),r=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),n[r*e+s]!==0){s-=2,r++;continue}else n[r*e+s]=a++;s++,r--}return n}var va={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Bh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ve},cameraProjectionMatrixInverse:{value:new tt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Bh(i,e,t){let n=Dx(i,e,t),r="vec3[SAMPLES](";for(let s=0;s<i;s++){let a=n[s];r+=`vec3(${a.x}, ${a.y}, ${a.z})${s<i-1?",":")"}`}return r}function Dx(i,e,t){let n=[];for(let r=0;r<i;r++){let s=2*Math.PI*e*r/i,a=Math.pow(r/(i-1),t);n.push(new k(Math.cos(s),Math.sin(s),a))}return n}var Al=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,x=e-f,b=t-p,m,d;x>b?(m=1,d=0):(m=0,d=1);let w=x-m+h,M=b-d+h,_=x-1+2*h,P=b-1+2*h,A=l&255,D=c&255,z=this.perm[A+this.perm[D]]%12,E=this.perm[A+m+this.perm[D+d]]%12,y=this.perm[A+1+this.perm[D+1]]%12,N=.5-x*x-b*b;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[z],x,b));let W=.5-w*w-M*M;W<0?r=0:(W*=W,r=W*W*this._dot(this.grad3[E],w,M));let j=.5-_*_-P*P;return j<0?s=0:(j*=j,s=j*j*this._dot(this.grad3[y],_,P)),70*(n+r+s)}noise3d(e,t,n){let r,s,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),p=1/6,x=(h+u+f)*p,b=h-x,m=u-x,d=f-x,w=e-b,M=t-m,_=n-d,P,A,D,z,E,y;w>=M?M>=_?(P=1,A=0,D=0,z=1,E=1,y=0):w>=_?(P=1,A=0,D=0,z=1,E=0,y=1):(P=0,A=0,D=1,z=1,E=0,y=1):M<_?(P=0,A=0,D=1,z=0,E=1,y=1):w<_?(P=0,A=1,D=0,z=0,E=1,y=1):(P=0,A=1,D=0,z=1,E=1,y=0);let N=w-P+p,W=M-A+p,j=_-D+p,$=w-z+2*p,Z=M-E+2*p,K=_-y+2*p,oe=w-1+3*p,Q=M-1+3*p,le=_-1+3*p,ve=h&255,Ae=u&255,Oe=f&255,et=this.perm[ve+this.perm[Ae+this.perm[Oe]]]%12,ne=this.perm[ve+P+this.perm[Ae+A+this.perm[Oe+D]]]%12,ue=this.perm[ve+z+this.perm[Ae+E+this.perm[Oe+y]]]%12,ae=this.perm[ve+1+this.perm[Ae+1+this.perm[Oe+1]]]%12,de=.6-w*w-M*M-_*_;de<0?r=0:(de*=de,r=de*de*this._dot3(this.grad3[et],w,M,_));let Ce=.6-N*N-W*W-j*j;Ce<0?s=0:(Ce*=Ce,s=Ce*Ce*this._dot3(this.grad3[ne],N,W,j));let Ze=.6-$*$-Z*Z-K*K;Ze<0?a=0:(Ze*=Ze,a=Ze*Ze*this._dot3(this.grad3[ue],$,Z,K));let Ue=.6-oe*oe-Q*Q-le*le;return Ue<0?o=0:(Ue*=Ue,o=Ue*Ue*this._dot3(this.grad3[ae],oe,Q,le)),32*(r+s+a+o)}noise4d(e,t,n,r){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,x,b=(e+t+n+r)*l,m=Math.floor(e+b),d=Math.floor(t+b),w=Math.floor(n+b),M=Math.floor(r+b),_=(m+d+w+M)*c,P=m-_,A=d-_,D=w-_,z=M-_,E=e-P,y=t-A,N=n-D,W=r-z,j=E>y?32:0,$=E>N?16:0,Z=y>N?8:0,K=E>W?4:0,oe=y>W?2:0,Q=N>W?1:0,le=j+$+Z+K+oe+Q,ve=a[le][0]>=3?1:0,Ae=a[le][1]>=3?1:0,Oe=a[le][2]>=3?1:0,et=a[le][3]>=3?1:0,ne=a[le][0]>=2?1:0,ue=a[le][1]>=2?1:0,ae=a[le][2]>=2?1:0,de=a[le][3]>=2?1:0,Ce=a[le][0]>=1?1:0,Ze=a[le][1]>=1?1:0,Ue=a[le][2]>=1?1:0,be=a[le][3]>=1?1:0,Se=E-ve+c,ye=y-Ae+c,B=N-Oe+c,bt=W-et+c,Ye=E-ne+2*c,je=y-ue+2*c,Be=N-ae+2*c,ft=W-de+2*c,He=E-Ce+3*c,I=y-Ze+3*c,S=N-Ue+3*c,J=W-be+3*c,se=E-1+4*c,fe=y-1+4*c,re=N-1+4*c,De=W-1+4*c,Me=m&255,Ne=d&255,We=w&255,me=M&255,we=o[Me+o[Ne+o[We+o[me]]]]%32,Pe=o[Me+ve+o[Ne+Ae+o[We+Oe+o[me+et]]]]%32,Ge=o[Me+ne+o[Ne+ue+o[We+ae+o[me+de]]]]%32,Ie=o[Me+Ce+o[Ne+Ze+o[We+Ue+o[me+be]]]]%32,rt=o[Me+1+o[Ne+1+o[We+1+o[me+1]]]]%32,H=.6-E*E-y*y-N*N-W*W;H<0?h=0:(H*=H,h=H*H*this._dot4(s[we],E,y,N,W));let ie=.6-Se*Se-ye*ye-B*B-bt*bt;ie<0?u=0:(ie*=ie,u=ie*ie*this._dot4(s[Pe],Se,ye,B,bt));let L=.6-Ye*Ye-je*je-Be*Be-ft*ft;L<0?f=0:(L*=L,f=L*L*this._dot4(s[Ge],Ye,je,Be,ft));let V=.6-He*He-I*I-S*S-J*J;V<0?p=0:(V*=V,p=V*V*this._dot4(s[Ie],He,I,S,J));let X=.6-se*se-fe*fe-re*re-De*De;return X<0?x=0:(X*=X,x=X*X*this._dot4(s[rt],se,fe,re,De)),27*(h+u+f+p+x)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}};var xr=class i extends hn{constructor(e,t,n=512,r=512,s,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=rd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ct(this.width,this.height,{type:Rt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Et({defines:Object.assign({},ma.defines),uniforms:cn.clone(ma.uniforms),vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ws,this.normalMaterial.blending=kt,this.pdMaterial=new Et({defines:Object.assign({},va.defines),uniforms:cn.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Et({defines:Object.assign({},ga.defines),uniforms:cn.clone(ga.uniforms),vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Et({uniforms:cn.clone($n.uniforms),vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ea,blendDst:lr,blendEquation:_n,blendSrcAlpha:$s,blendDstAlpha:lr,blendEquationAlpha:_n}),this.blendMaterial=new Et({uniforms:cn.clone(Tl.uniforms),vertexShader:Tl.vertexShader,fragmentShader:Tl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mo,blendSrc:ea,blendDst:lr,blendEquation:_n,blendSrcAlpha:$s,blendDstAlpha:lr,blendEquationAlpha:_n}),this._fsQuad=new ei(null),this._originalClearColor=new Le,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new nr,this.depthTexture.format=Oi,this.depthTexture.type=Fi,this.normalRenderTarget=new Ct(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:Rt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Bh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,r,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}_restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let r=t.get(n);n.visible=r}),t.clear()}_generateNoise(e=64){let t=new Al,n=e*e*4,r=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;r[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,r[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,r[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,r[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new Yn(r,e,e,Jt,Kt);return s.wrapS=Vt,s.wrapT=Vt,s.needsUpdate=!0,s}};xr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var us=class extends hn{constructor(){super(),this.uniforms=cn.clone(xa.uniforms),this.material=new Vs({name:xa.name,uniforms:this.uniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader}),this._fsQuad=new ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ui?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===No?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sd=[{id:"c01-circuito-chiuso",code:"c01",blurb:"Una lampada si accende solo se il giro \xE8 completo.",flow:"always",n:0,name:"Circuito chiuso",title:"Il circuito chiuso",goal:"Collega la lampada al quadro con due fili: la fase e il neutro. Poi dai corrente con la levetta del quadro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:[],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase (marrone) parte dal morsetto FASE del quadro e arriva a un morsetto della lampada.","Il neutro (blu) parte dal morsetto NEUTRO del quadro e arriva all\u2019altro morsetto della lampada.","Servono due fili in tutto, uno per ciascun morsetto della lampada. Poi tocca la levetta del quadro."]},{id:"c02-presa",code:"c02",blurb:"Fase, neutro e terra: dove vanno e perch\xE9.",flow:"always",n:1,name:"Presa",title:"La presa di corrente",goal:"Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{F:{l:"FASE"},PE:{l:"TERRA"},N:{l:"NEUTRO"}}},{id:"P",type:"presa",short:"Presa",title:"Presa bipasso 10/16 A",terms:{L:{l:"L"},PE:{l:"PE"},N:{l:"N"}}}],controls:[],load:["P.L","P.N"],earth:["Q.PE","P.PE"],pol:"P.L",room:"tavolo",solution:[["Q.F","P.L","marrone"],["Q.N","P.N","blu"],["Q.PE","P.PE","gv"]],hints:["Il marrone \xE8 la fase: va dal quadro al morsetto L della presa.","Il blu \xE8 il neutro: va dal quadro al morsetto N della presa.","Il giallo-verde \xE8 la terra: va al morsetto PE, quello al centro."]},{id:"c03-interrotto",code:"c03",blurb:"Interrompere la fase, non il neutro.",flow:"always",n:2,name:"Interrotto",title:"Punto luce interrotto",goal:"Accendi e spegni la lampada con un interruttore. L\u2019interruttore interrompe la fase, mai il neutro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L.A","marrone"],["Q.N","L.B","blu"]],hints:["Parti dalla fase: dal quadro va all\u2019interruttore, non direttamente alla lampada.","Dall\u2019altro morsetto dell\u2019interruttore il filo va a un morsetto della lampada.","Il neutro (blu) va dal quadro all\u2019altro morsetto della lampada, senza passare dall\u2019interruttore."]},{id:"c04-parallelo",code:"c04",blurb:"Il parallelo: due lampade, un solo comando.",flow:"always",n:0,name:"Parallelo",title:"Due lampade, un interruttore",goal:"Comanda due lampade con un solo interruttore: premendolo, si accendono e si spengono insieme.",loadName:"Le lampade",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L1",type:"lamp",short:"Lampada 1",title:"Portalampada 1",terms:{B:{l:"B"},A:{l:"A"}}},{id:"L2",type:"lamp",short:"Lampada 2",title:"Portalampada 2",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L1.A","L1.B"],loads:[["L1.A","L1.B"],["L2.A","L2.B"]],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L1.A","marrone"],["S.b","L2.A","marrone"],["Q.N","L1.B","blu"],["Q.N","L2.B","blu"]],hints:["La fase va dal quadro all\u2019interruttore, come in un punto luce con una sola lampada.","Dal morsetto 2 dell\u2019interruttore parte un filo per ogni lampada: due fili di fase, uno su ciascuna.","Il neutro (blu) va dal quadro a tutte e due le lampade, sul morsetto che resta libero, senza passare dall\u2019interruttore."]},{id:"c05-deviato",code:"c05",blurb:"Accendere e spegnere da due punti.",flow:"onDemand",n:3,name:"Deviato",title:"Punto luce deviato",goal:"Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","D2.1","nero"],["D1.2","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase entra nel morsetto C (comune) del primo deviatore.","I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.","Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori."]},{id:"c06-invertito",code:"c06",blurb:"Comandare la stessa luce da tre punti.",flow:"onDemand",n:4,name:"Invertito",title:"Punto luce invertito",goal:"Aggiungi un terzo punto di comando in mezzo, con l\u2019invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"I",type:"inv",short:"Invertitore",title:"Invertitore",where:"Camera",terms:{1:{l:"1"},2:{l:"2"},3:{l:"3"},4:{l:"4"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","I","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","I.1","nero"],["D1.2","I.2","grigio"],["I.3","D2.1","nero"],["I.4","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["\xC8 come la deviata, ma in mezzo ai due fili di collegamento metti l\u2019invertitore.","I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell\u2019invertitore.","Dai morsetti 3 e 4 (in basso) dell\u2019invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada."]}];var fs=i=>sd.find(e=>e.id===i),kh=(i,e)=>i.map(t=>e[t.id]?{...t,...e[t.id]}:t),GM={...fs("c03-interrotto"),id:"t01-bagno",quadroOnly:!0,code:"t01",n:0,name:"Bagno",title:"Il bagno",blurb:"Punto luce interrotto, con l\u2019interruttore vicino alla porta.",goal:"Cabla il punto luce del bagno: un interruttore vicino alla porta accende e spegne la lampada.",comps:kh(fs("c03-interrotto").comps,{S:{short:"Interruttore",title:"Interruttore del bagno",where:"Porta"},L:{short:"Lampada",title:"Lampada del bagno"}})},VM={...fs("c05-deviato"),id:"t02-camera",quadroOnly:!0,code:"t02",n:0,name:"Camera",title:"La camera",blurb:"Punto luce deviato, dalla porta e dal comodino.",goal:"Cabla il punto luce della camera: si accende e si spegne dalla porta e dal comodino.",comps:kh(fs("c05-deviato").comps,{D1:{short:"Deviatore porta",title:"Deviatore della porta",where:"Porta"},D2:{short:"Deviatore comodino",title:"Deviatore del comodino",where:"Comodino"},L:{short:"Lampada",title:"Lampada della camera"}})},WM={...fs("c06-invertito"),id:"t03-corridoio",quadroOnly:!0,code:"t03",n:0,name:"Corridoio",title:"Il corridoio",blurb:"Punto luce invertito, da tre punti.",goal:"Cabla il punto luce del corridoio: si comanda dall\u2019ingresso, dal soggiorno e dalla camera.",comps:kh(fs("c06-invertito").comps,{D1:{short:"Deviatore ingresso",title:"Deviatore dell\u2019ingresso",where:"Ingresso"},I:{short:"Invertitore soggiorno",title:"Invertitore del soggiorno",where:"Soggiorno"},D2:{short:"Deviatore camera",title:"Deviatore della camera",where:"Camera"},L:{short:"Lampada",title:"Lampada del corridoio"}})};var Lt={size:{w:9,d:8},rooms:[{id:"cucina",name:"Cucina",x:0,z:0,w:3,d:3.5,scene:!0},{id:"bagno",name:"Bagno",x:3,z:0,w:2,d:3.5,circuit:"t01-bagno",lamp:[4,1.75]},{id:"camera",name:"Camera",x:5,z:0,w:4,d:3.5,circuit:"t02-camera",lamp:[7,1.75]},{id:"corridoio",name:"Corridoio",x:0,z:3.5,w:9,d:1.5,circuit:"t03-corridoio",lamp:[4.5,4.25]},{id:"ingresso",name:"Ingresso",x:0,z:5,w:2.5,d:3,scene:!0},{id:"soggiorno",name:"Soggiorno",x:2.5,z:5,w:6.5,d:3,scene:!0}],controls:{"t01-bagno":{S:{x:3.3,z:3.5,face:"s",label:"Interruttore bagno"}},"t02-camera":{D1:{x:5.4,z:3.5,face:"s",label:"Porta camera"},D2:{x:9,z:1.4,face:"w",label:"Comodino"}},"t03-corridoio":{D1:{x:0,z:4.25,face:"e",label:"Ingresso"},I:{x:4,z:5,face:"s",label:"Soggiorno"},D2:{x:9,z:4.25,face:"w",label:"Camera"}}},breaker:{x:0,z:6.5,face:"e",label:"Quadro"},wallsH:[[0,0,9],[3.5,0,1],[3.5,2,3.9],[3.5,4.8,6],[3.5,7,9],[5,0,1.6],[5,2.4,5],[5,6,9],[8,0,9]],wallsV:[[0,0,8],[9,0,8],[3,0,3.5],[5,0,3.5],[2.5,5,6],[2.5,7,8]],furniture:[{room:"camera",x:7.3,z:.3,w:1.5,d:2,h:.5,c:"#B9A58A"},{room:"camera",x:8.5,z:1.1,w:.4,d:.5,h:.5,c:"#9C8666"},{room:"bagno",x:3.2,z:.2,w:1.6,d:.6,h:.45,c:"#E9EEF0"},{room:"bagno",x:4,z:2.4,w:.9,d:.9,h:.15,c:"#CFE0E8"},{room:"soggiorno",x:3.5,z:6.7,w:2.4,d:.9,h:.5,c:"#8A94A3"},{room:"soggiorno",x:6.3,z:5.8,w:1.4,d:1,h:.4,c:"#B9A58A"},{room:"cucina",x:.2,z:.2,w:2.6,d:.6,h:.9,c:"#D8D2C4"}]},Lx=["L\u2019interruttore del bagno sta sul filo di fase, tra il quadro e la lampada.","Il neutro va diretto alla lampada.","Si cabla come nel livello dell\u2019interruttore."],Ux=["Due deviatori comandano la stessa lampada: porta e comodino.","I due fili di collegamento vanno 1 con 1 e 2 con 2.","La fase entra nel comune del primo; il comune del secondo va alla lampada."],Nx=["Tre punti di comando: ingresso, soggiorno e camera.","L\u2019invertitore sta in mezzo ai due fili di collegamento tra i deviatori.","Ogni comando cambia lo stato della luce."],zh=(i,e,t)=>({type:"spiegazione",title:i,paras:[e,t]}),XM={"t01-bagno":{support:"passi",lesson:{pages:[zh("Il bagno","Un punto luce con un interruttore vicino alla porta. Lo hai gi\xE0 fatto: qui lo ritrovi dentro una casa vera.","Se ti serve, ripassa la lezione del punto luce interrotto dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["S.a"],color:"marrone",short:"1 Fase",title:"Porta la fase all\u2019interruttore",text:"Dalla FASE del quadro al morsetto 1 dell\u2019interruttore."},{kind:"wire",from:"S.b",to:["L.A"],color:"marrone",short:"2 Lampada",title:"Dall\u2019interruttore alla lampada",text:"Dal morsetto 2 dell\u2019interruttore a un morsetto della lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"3 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"4 Levetta",title:"Dai corrente",text:"Tocca la levetta del quadro, poi prova l\u2019interruttore."},{kind:"verify",short:"5 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:Lx},"t02-camera":{support:"passi",lesson:{pages:[zh("La camera","Un punto luce che si comanda dalla porta e dal comodino, con due deviatori.","Se ti serve, ripassa la lezione del punto luce deviato dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel primo deviatore",text:"Dalla FASE al comune C del deviatore della porta."},{kind:"wire",from:"D1.1",to:["D2.1"],color:"nero",short:"2 Collegamento 1",title:"Primo filo di collegamento",text:"Dal morsetto 1 del primo deviatore al morsetto 1 del secondo."},{kind:"wire",from:"D1.2",to:["D2.2"],color:"grigio",short:"3 Collegamento 2",title:"Secondo filo di collegamento",text:"Dal morsetto 2 del primo deviatore al morsetto 2 del secondo."},{kind:"wire",from:"D2.C",to:["L.A"],color:"marrone",short:"4 Lampada",title:"Dal secondo deviatore alla lampada",text:"Dal comune C del deviatore del comodino alla lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"5 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"6 Levetta",title:"Dai corrente",text:"Tocca la levetta, poi prova i due deviatori."},{kind:"verify",short:"7 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:Ux},"t03-corridoio":{support:"obiettivo",lesson:{pages:[zh("Il corridoio","Un punto luce che si comanda da tre punti: ingresso, soggiorno e camera.","Se ti serve, ripassa la lezione del punto luce invertito dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel deviatore dell\u2019ingresso",text:"Dalla FASE al comune C del deviatore dell\u2019ingresso."},{kind:"verify",short:"2 Verifica",title:"Collega i tre punti di comando",text:"Collega il deviatore dell\u2019ingresso ai morsetti 1 e 2 dell\u2019invertitore, poi i morsetti 3 e 4 al deviatore della camera. Il comune C di quest\u2019ultimo va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica."}],summary:Nx}};function Hh(){let i=[];return Lt.rooms.filter(e=>e.circuit).forEach(e=>{let t=Lt.controls[e.circuit]||{};Object.keys(t).forEach(n=>i.push({room:e.id,circuit:e.circuit,id:n,...t[n]}))}),i}var ba=new k;function Cn(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ba.copy(e),ba[n]=0,ba.normalize();let c=.5*a/(a+o),h=1-ba.angleTo(i)/l;return Math.sign(ba[t])===1?h*c:o/(a+o)+c+c*(1-h)}var br=class extends en{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new k,l=new k,c=new k(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,x=new k,b=.5/r;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*b,l.y-=Math.sign(l.y)*b,l.z-=Math.sign(l.z)*b,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[d+0]=Cn(x,l,"z","y",s,n),f[d+1]=1-Cn(x,l,"y","z",s,t);break;case 1:x.set(-1,0,0),f[d+0]=1-Cn(x,l,"z","y",s,n),f[d+1]=1-Cn(x,l,"y","z",s,t);break;case 2:x.set(0,1,0),f[d+0]=1-Cn(x,l,"x","z",s,e),f[d+1]=Cn(x,l,"z","x",s,n);break;case 3:x.set(0,-1,0),f[d+0]=1-Cn(x,l,"x","z",s,e),f[d+1]=1-Cn(x,l,"z","x",s,n);break;case 4:x.set(0,0,1),f[d+0]=1-Cn(x,l,"x","y",s,e),f[d+1]=1-Cn(x,l,"y","x",s,t);break;case 5:x.set(0,0,-1),f[d+0]=Cn(x,l,"x","y",s,e),f[d+1]=1-Cn(x,l,"y","x",s,t);break}}};var Pn=1.45,ya=2.75,ds="assets/trilocale/";function Ma(i,e){let t=document.createElement("canvas");return t.width=t.height=i,e(t.getContext("2d"),i),t}function un(i,e=1,t=!0){let n=new Li(i);return n.wrapS=n.wrapT=Vt,n.repeat.set(e,e),n.anisotropy=4,t&&(n.colorSpace=wt),n}function Sa(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Ea(i,e,t,n,r=.06){for(let s=0;s<e*40;s++){let a=Math.floor(n()*255);i.fillStyle=`rgba(${a},${a},${a},${r})`,i.fillRect(n()*e,n()*e,1+n()*t,1+n()*t)}}var Fx=()=>Ma(256,(i,e)=>{i.fillStyle="#808080",i.fillRect(0,0,e,e),Ea(i,e,3,Sa(7),.12)});function _a(i,e,t,n,r,s){return Ma(i,a=>{let o=Sa(r),l=i/e;a.fillStyle=s?"#202020":n,a.fillRect(0,0,i,i);for(let c=0;c<e;c++)for(let h=0;h<e;h++){if(s)a.fillStyle="#d0d0d0";else{let u=(o()-.5)*10,f=new Le(t).offsetHSL(0,0,u/255);a.fillStyle="#"+f.getHexString()}a.fillRect(c*l+2,h*l+2,l-4,l-4)}s||Ea(a,i,2,o,.04)})}function ad(i){return Ma(512,(e,t)=>{let n=Sa(11),r=16,s=12,a=t/r,o=t/s;e.fillStyle=i?"#000":"#5a2a1a",e.fillRect(0,0,t,t);for(let l=0;l<r;l++)for(let c=-1;c<=s;c++){let h=c*o+l%2*o/2,u=e.createLinearGradient(h,0,h+o,0);if(i)u.addColorStop(0,"#202020"),u.addColorStop(.5,"#f0f0f0"),u.addColorStop(1,"#202020");else{let f=new Le().setHSL(.04+(n()-.5)*.02,.55,.36+(n()-.5)*.08);u.addColorStop(0,"#"+f.clone().offsetHSL(0,0,-.12).getHexString()),u.addColorStop(.5,"#"+f.getHexString()),u.addColorStop(1,"#"+f.clone().offsetHSL(0,0,-.14).getHexString())}e.fillStyle=u,e.fillRect(h+1,l*a,o-2,a*.92)}i||Ea(e,t,3,n,.08)})}function Gh(i,e,t){return Ma(256,(n,r)=>{let s=Sa(t);n.fillStyle=i,n.fillRect(0,0,r,r),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(14,14,r-28,r-28),n.lineWidth=3,n.strokeRect(32,32,r-64,r-64);for(let a=0;a<6;a++)n.beginPath(),n.arc(r/2,r/2,20+a*14,0,Math.PI*2),n.stroke();Ea(n,r,2,s,.1)})}var Rl=(i,e)=>Ma(128,(t,n)=>{t.fillStyle=i,t.fillRect(0,0,n,n);for(let r=0;r<n;r+=2)t.fillStyle=`rgba(0,0,0,${.04+r%4*.01})`,t.fillRect(r,0,1,n),t.fillRect(0,r,n,1);Ea(t,n,1,Sa(e),.05)});function od(i){let e={},t=un(Fx(),3,!1);e.wall=new Ee({color:15657182,roughness:.92,bumpMap:t,bumpScale:.6}),e.wallCut=new Ee({color:4212302,roughness:.8}),e.outside=new Ee({color:14865080,roughness:.95,bumpMap:t,bumpScale:1}),e.parquet=new Ee({color:11831903,roughness:.55});let n=new rr,r=(s,a,o)=>n.load(ds+s,l=>{l.wrapS=l.wrapT=Vt,l.anisotropy=8,a&&(l.colorSpace=wt),o(l),i()},void 0,()=>{});return r("parquet.webp",!0,s=>{s.repeat.set(1,1),e.parquet.map=s,e.parquet.color.set(16777215),e.parquet.needsUpdate=!0}),r("parquet-ruvido.webp",!1,s=>{e.parquet.roughnessMap=s,e.parquet.roughness=1,e.parquet.needsUpdate=!0}),r("parquet-rilievo.webp",!1,s=>{e.parquet.bumpMap=s,e.parquet.bumpScale=.4,e.parquet.needsUpdate=!0}),e.tiles=new Ee({map:un(_a(512,6,"#d9d6cf","#9c978d",3),1),bumpMap:un(_a(512,6,0,0,3,!0),1,!1),bumpScale:.8,roughness:.35}),e.kitchenFloor=new Ee({map:un(_a(512,4,"#8f8a82","#5d5953",5),1),bumpMap:un(_a(512,4,0,0,5,!0),1,!1),bumpScale:.8,roughness:.6}),e.grass=new Ee({color:6257221,roughness:1}),r("prato.webp",!0,s=>{s.repeat.set(10,10),e.grass.map=s,e.grass.color.set(12108968),e.grass.needsUpdate=!0}),e.paving=new Ee({map:un(_a(256,4,"#b7b1a6","#8a857c",9),1),roughness:.9}),e.roof=new Ee({map:un(ad(!1),1),bumpMap:un(ad(!0),1,!1),bumpScale:2,roughness:.75,transparent:!0,opacity:1}),e.fascia=new Ee({color:7031347,roughness:.7,transparent:!0,opacity:1}),e.wood=new Ee({color:9068348,roughness:.5}),e.woodLight=new Ee({color:14073754,roughness:.55}),e.door=new Ee({color:15921128,roughness:.45}),e.white=new Ee({color:16052974,roughness:.3}),e.ceramic=new tn({color:16777215,roughness:.12,clearcoat:1,clearcoatRoughness:.05}),e.steel=new Ee({color:13159632,roughness:.28,metalness:1}),e.black=new Ee({color:1382170,roughness:.15,metalness:.2}),e.stone=new Ee({color:3815478,roughness:.25}),e.cabinet=new Ee({color:6254442,roughness:.45}),e.water=new Ee({color:12573152,roughness:.05,metalness:.1,transparent:!0,opacity:.6}),e.mirror=new Ee({color:14673642,roughness:.02,metalness:1}),e.glass=new Ee({color:10466500,roughness:.05,metalness:.6,emissive:0}),e.frame=new Ee({color:16184818,roughness:.4}),e.duvet=new Ee({map:un(Rl("#e9e4da",2),4),roughness:.95}),e.blanket=new Ee({map:un(Rl("#7b8f86",3),4),roughness:.95}),e.pillow=new Ee({map:un(Rl("#f5f2ec",4),2),roughness:.95}),e.rugLiving=new Ee({map:un(Gh("#a65c46","#e8d5b5",21)),roughness:1}),e.rugBed=new Ee({map:un(Gh("#d9d2c3","#8a8f86",22)),roughness:1}),e.runner=new Ee({map:un(Gh("#3e4a5c","#c9b48a",23)),roughness:1}),e.towel=new Ee({map:un(Rl("#7fa6b5",5),3),roughness:1}),e.screen=new Ee({color:724240,roughness:.05,metalness:.5}),e.cord=new Ee({color:2236962,roughness:.6}),e.plate=new Ee({color:16513782,roughness:.3}),e.rocker=new Ee({color:15329249,roughness:.25}),e.panel=new Ee({color:15855852,roughness:.35}),e.panelDoor=new Ee({color:3819090,roughness:.1,transparent:!0,opacity:.55}),e.book=[10238766,3103354,13939804,5204806,7228018].map(s=>new Ee({color:s,roughness:.8})),e}var ld=i=>(i.castShadow=!0,i.receiveShadow=!0,i);function qe(i,e,t,n,r,s,a,o,l=.02){let c=ld(new it(new br(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e));return c.position.set(t+s/2,n+a/2,r+o/2),i.add(c),c}function Mi(i,e,t,n,r,s,a=.002,o){let l=new dn(r,s);if(o){let h=l.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*r/o,h.getY(u)*s/o)}let c=new it(l,e);return c.rotation.x=-Math.PI/2,c.position.set(t+r/2,a,n+s/2),c.receiveShadow=!0,i.add(c),c}function Cl(i,e,t,n,r,s,a,o=24,l){let c=ld(new it(new Mn(l===void 0?s:l,s,a,o),e));return c.position.set(t,n+a/2,r),i.add(c),c}function Hi(i,e,t,n,r){let s=new $e;qe(s,e.wood,-.21,.44,-.21,.42,.04,.42,.01),[[-.19,-.19],[.16,-.19],[-.19,.16],[.16,.16]].forEach(([a,o])=>qe(s,e.wood,a,0,o,.03,.44,.03,.005)),qe(s,e.wood,-.21,.48,.17,.42,.42,.03,.01),s.position.set(t,0,n),s.rotation.y=r,i.add(s)}function cd(i,e){qe(i,e.cabinet,.7,0,.05,2.25,.86,.6,.01),qe(i,e.stone,.68,.86,.04,2.29,.04,.63,.008),qe(i,e.steel,1.15,.89,.15,.5,.02,.38,.01),qe(i,e.black,2.05,.9,.12,.6,.01,.48,.005),[[2.2,.24],[2.5,.24],[2.2,.48],[2.5,.48]].forEach(([r,s])=>Cl(i,e.steel,r,.905,s,.07,.006,24)),qe(i,e.steel,.05,0,.05,.62,1.4,.64,.02),qe(i,e.woodLight,.9,.72,1.75,1.3,.04,.8,.01),[[.95,1.8],[2.13,1.8],[.95,2.48],[2.13,2.48]].forEach(([r,s])=>qe(i,e.woodLight,r,0,s,.05,.72,.05,.01)),Hi(i,e,1.25,1.45,0),Hi(i,e,1.85,1.45,0),Hi(i,e,1.25,2.9,Math.PI),Hi(i,e,1.85,2.9,Math.PI),Cl(i,e.white,1.55,.76,2.15,.12,.05,24,.14);let t=qe(i,e.ceramic,3.08,0,.06,1.75,.55,.78,.08);t.userData.keep=!0,qe(i,e.water,3.18,.4,.15,1.55,.02,.6,.06),qe(i,e.cabinet,3.06,0,1.55,.5,.82,.8,.01),qe(i,e.ceramic,3.05,.82,1.6,.48,.1,.7,.04),qe(i,e.mirror,3.03,1,1.65,.02,.42,.6,.005);let n=new $e;qe(n,e.ceramic,-.18,0,-.17,.36,.4,.34,.12),qe(n,e.ceramic,-.2,.38,-.2,.4,.04,.5,.15),qe(n,e.ceramic,.16,.38,-.2,.14,.42,.4,.04),n.position.set(4.68,0,2.4),n.rotation.y=-Math.PI/2,i.add(n),qe(i,e.towel,4.93,1,1.3,.04,.5,.4,.02),Mi(i,e.towel,3.5,2.6,.7,.5,.012),Mi(i,e.rugBed,6.4,.6,2.4,2.3,.006),qe(i,e.wood,6.95,0,.95,1.95,.32,1.65,.03),qe(i,e.wood,8.85,0,.92,.08,1.05,1.71,.03),qe(i,e.duvet,6.98,.32,.98,1.85,.2,1.59,.08),qe(i,e.blanket,6.95,.42,.97,.6,.12,1.61,.06),qe(i,e.pillow,8.35,.5,1.08,.42,.14,.66,.07),qe(i,e.pillow,8.35,.5,1.82,.42,.14,.66,.07),qe(i,e.wood,8.45,0,.35,.48,.5,.45,.02),qe(i,e.wood,8.45,0,2.72,.48,.5,.45,.02),qe(i,e.woodLight,5.06,0,.12,.62,1.4,1.9,.02),qe(i,e.cabinet,5.1,0,2.6,.45,.75,.7,.02),Mi(i,e.runner,2.2,3.95,4.6,.75,.006),qe(i,e.wood,7.6,0,3.58,1,.8,.32,.02),e.book.forEach((r,s)=>qe(i,r,7.7+s*.07,.8,3.62,.06,.22+s%3*.03,.2,.004)),qe(i,e.woodLight,1.8,0,7.35,.6,.9,.55,.02),Cl(i,e.wood,2.2,0,5.4,.18,.02,24),Cl(i,e.wood,2.2,0,5.4,.02,1.4,12),Mi(i,e.rugLiving,.5,7,.9,.6,.006),Mi(i,e.rugLiving,4.4,5.8,2.8,1.9,.006),qe(i,e.wood,5.2,0,6.35,1.2,.38,.65,.02),qe(i,e.black,6.45,0,5.1,1.9,.45,.42,.01),qe(i,e.screen,6.85,.45,5.18,1.1,.66,.05,.005),qe(i,e.woodLight,8.5,0,5.05,.45,1.4,1.3,.02);for(let r=0;r<3;r++)e.book.forEach((s,a)=>qe(i,s,8.55,.15+r*.45,5.15+a*.2,.3,.26+a%2*.04,.16,.004));qe(i,e.wood,2.85,.74,5.45,1.4,.04,.85,.01),[[2.9,5.5],[4.18,5.5],[2.9,6.23],[4.18,6.23]].forEach(([r,s])=>qe(i,e.wood,r,0,s,.05,.74,.05,.01)),Hi(i,e,3.2,5.2,0),Hi(i,e,3.9,5.2,0),Hi(i,e,3.2,6.6,Math.PI),Hi(i,e,3.9,6.6,Math.PI)}var hd=[{file:"divano.glb",x:5.8,z:7.3,rot:Math.PI,scale:1,stand:[4.75,6.85,2.15,.85]},{file:"poltrona.glb",x:7.6,z:6.7,rot:-Math.PI/2-.4,scale:1,stand:[7.25,6.35,.75,.75]},{file:"pianta.glb",x:8.55,z:7.55,rot:.6,scale:1.1,stand:null}];function ud(i,e,t){let[n,r,s,a]=t,o=new $e;return qe(o,e.blanket,n,0,r,s,.45,a,.08),qe(o,e.blanket,n,.45,r+a-.2,s,.4,.2,.08),i.add(o),o}function fd(i,e){[["h",3.5,1,2,-1],["h",3.5,3.9,4.8,-1],["h",3.5,6,7,-1],["h",5,1.6,2.4,1],["h",5,5,6,1],["v",2.5,6,7,-1]].forEach(([n,r,s,a,o])=>{let l=a-s-.04,c=new $e;qe(c,e.door,0,0,-.02,l,Pn,.04,.01);let h=new it(new zn(.025,12,8),e.steel);h.position.set(l-.07,1,.04),c.add(h),n==="h"?(c.position.set(s+.02,0,r),c.rotation.y=o*1.45):(c.position.set(r,0,s+.02),c.rotation.y=-Math.PI/2+o*1.45),i.add(c)})}var Ox=[["n",1,2.1,"cucina"],["n",3.6,4.4,"bagno"],["n",6.2,7.6,"camera"],["s",4.4,6.6,"soggiorno"],["s",7,8.4,"soggiorno"],["e",6,7.2,"soggiorno"],["w",1.2,2.4,"cucina"],["w",3.9,4.6,"corridoio"]];function dd(i,e,t,n){let r=[];function a(l,c,h,u){let f=new $e;qe(f,t.frame,-l/2,c,-.02,l,h,.04,.005);let p=new it(new dn(l-.12,h-.12),u);return p.position.set(0,c+h/2,.022),f.add(p),qe(f,t.frame,-.02,c+.06,0,.04,h-.12,.03,.004),f}let o={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};return Ox.forEach(([l,c,h,u])=>{let f=t.glass.clone(),[p,x]=o[l],b=h-c,m=(c+h)/2,d=l==="n"||l==="s"?[m,l==="n"?0:n.d]:[l==="w"?0:n.w,m],w=a(b,.9,1.35,f);w.position.set(d[0]+p*(.12/2+.02),0,d[1]+x*(.12/2+.02)),w.rotation.y=Math.atan2(p,x),e.add(w);let M=a(b,.9,Pn-.9,f);M.position.set(d[0]-p*(.12/2+.004),0,d[1]-x*(.12/2+.004)),M.rotation.y=Math.atan2(-p,-x),i.add(M),r.push({room:u,glass:f})}),r}function pd(i,e){let s=e.w+.45,a=-.45,o=e.d+.45,l=(o-a)/2,c=(a+o)/2,h=[-.45+l,2.3,c],u=[s-l,2.3,c],f=[-.45,0,a],p=[s,0,a],x=[s,0,o],b=[-.45,0,o],m=[],d=[],w=Math.hypot(l,2.3);function M(z,E,y,N){[z,E,y].forEach(W=>{m.push(...W),N==="z"?d.push(W[0]/2.4,Math.abs(W[2]-c)/l*w/2.4):d.push(W[2]/2.4,Math.min(W[0]- -.45,s-W[0])/l*w/2.4)})}M(f,h,p,"z"),M(p,h,u,"z"),M(x,u,b,"z"),M(b,u,h,"z"),M(p,u,x,"x"),M(b,h,f,"x");let _=new Xt;_.setAttribute("position",new Tt(m,3)),_.setAttribute("uv",new Tt(d,2)),_.computeVertexNormals();let P=new $e,A=new it(_,i.roof);A.castShadow=!0,A.material.side=mn,P.add(A);let D=qe(P,i.fascia,-.45,-.18,a,s- -.45,.18,.08,.01);return D.userData.roof=!0,qe(P,i.fascia,-.45,-.18,o-.08,s- -.45,.18,.08,.01),qe(P,i.fascia,-.45,-.18,a,.08,.18,o-a,.01),qe(P,i.fascia,s-.08,-.18,a,.08,.18,o-a,.01),qe(P,i.fascia,1.9,.6,1.4,.5,1.4,.5,.02),P.traverse(z=>{z.userData.roof=!0}),P}var Bx=1448998,zx=527122,kx=2,Hx=1.1;function Gx(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var md=i=>i*Math.PI/180,Vh=i=>i*i*(3-2*i);function Wh(i,e){if(!Gx())return null;let t=!!e.night,n=t?zx:Bx,r=e.lite!==void 0?e.lite:window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||i.clientWidth<700,s;try{s=new is({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,r?1.25:1.75)),s.setClearColor(n),s.toneMapping=Ui,s.toneMappingExposure=t?1.3:.95,s.shadowMap.enabled=!0,s.shadowMap.type=Zr,s.domElement.className="house3d",s.domElement.setAttribute("role","img"),i.appendChild(s.domElement);let a=document.createElement("div");a.className="hlabels",i.appendChild(a);let o=!0,l=0,c=!1,h=new Set,u=()=>{o=!0,I()},f=new er;f.background=new Le(n),f.fog=new Fs(n,26,60);let p=od(u),x=new ar(13490410,7035464,.9);f.add(x);let b=new Bi(s);new ls().load(ds+"ambiente.exr",H=>{c||(f.environment=b.fromEquirectangular(H).texture,f.environmentIntensity=t?.07:.16,x.intensity=t?.07:.12,H.dispose(),b.dispose(),u())},void 0,()=>{});let m=new vi(t?9415142:16752486,t?.4:1);m.position.set(-9,6,12),m.target.position.set(4.5,0,4),m.castShadow=!0,m.shadow.mapSize.set(r?1024:2048,r?1024:2048),Object.assign(m.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40}),m.shadow.bias=-4e-4,m.shadow.normalBias=.02,m.shadow.radius=5,f.add(m,m.target);let d=new It(38,1,.1,120),w=Lt.size.w/2,M=Lt.size.d/2,_={tx:w,tz:M+.3,yaw:0,pitch:58,dist:17.5,ty:.6},P={..._},A=new $e;f.add(A),Mi(A,p.grass,-30,-30,69,68,-.02),Mi(A,p.paving,-1,-1,Lt.size.w+2,Lt.size.d+2,-.01,1);let D={},z=[];Lt.rooms.forEach(H=>{let ie=H.id==="bagno"?p.tiles:H.id==="cucina"?p.kitchenFloor:p.parquet,L=H.id==="bagno"?1.8:H.id==="cucina"?2.4:1.1,V=Mi(A,ie,H.x,H.z,H.w,H.d,.001,L);V.userData={room:H.id},z.push(V),D[H.id]={def:H,floor:V,light:null,bulb:null,glow:null,level:0,target:0,wins:[]}});let E=.12;function y(H,ie,L,V){let X=new it(new en(L,Pn,V),p.wall);X.position.set(H,Pn/2,ie),X.castShadow=!0,X.receiveShadow=!0,A.add(X);let ee=new it(new en(L+.002,.01,V+.002),p.wallCut);ee.position.set(H,Pn+.005,ie),A.add(ee)}Lt.wallsH.forEach(([H,ie,L])=>y((ie+L)/2,H,L-ie+E,E)),Lt.wallsV.forEach(([H,ie,L])=>y(H,(ie+L)/2,E,L-ie+E));let N=new $e,W=Lt.size.w,j=Lt.size.d,$=E/2+.006;[[W/2,-$,W+E+.02,.012],[W/2,j+$,W+E+.02,.012],[-$,j/2,.012,j+E],[W+$,j/2,.012,j+E]].forEach(([H,ie,L,V])=>{let X=new it(new en(L,ya,V),p.outside);X.position.set(H,ya/2,ie),X.receiveShadow=!0,X.castShadow=!0,N.add(X)}),qe(N,p.wood,.9,0,j+$,1,2.2,.05,.01),A.add(N),cd(A,p),fd(A,p),dd(A,N,p,Lt.size).forEach(H=>D[H.room]&&D[H.room].wins.push(H.glass));let Z=new Ml;Z.setMeshoptDecoder(nd),hd.forEach(H=>{let ie=H.stand?ud(A,p,H.stand):null;Z.load(ds+H.file,L=>{if(c)return;let V=L.scene;V.traverse(X=>{X.isLight&&(X.visible=!1),X.isMesh&&(X.castShadow=!0,X.receiveShadow=!0)}),V.scale.setScalar(H.scale),V.rotation.y=H.rot,V.position.set(H.x,0,H.z),A.add(V),ie&&A.remove(ie),u()},void 0,()=>{})}),Lt.rooms.filter(H=>H.lamp).forEach(H=>{let ie=new $e;ie.position.set(H.lamp[0],kx,H.lamp[1]);let L=new it(new Mn(.005,.005,.5,6),p.cord);L.position.y=.36;let V=new it(new Mn(.03,.05,.06,16),p.steel);V.position.y=.12;let X=new Ee({color:15921128,roughness:.35,emissive:16761466,emissiveIntensity:0}),ee=new it(new zn(.11,24,16),X);ee.castShadow=!1;let xe=new Hn(16763272,0,10,2);xe.position.y=-.14,xe.castShadow=!r,xe.shadow.mapSize.set(512,512),xe.shadow.bias=-.002,xe.shadow.radius=4,ie.add(L,V,ee,xe),A.add(ie),Object.assign(D[H.id],{light:xe,bulb:X,shade:null})});let K={},oe={n:[0,0,-1],s:[0,0,1],e:[1,0,0],w:[-1,0,0]},Q={n:Math.PI,s:0,e:Math.PI/2,w:-Math.PI/2};function le(H,ie,L,V,X,ee=1){let xe=new $e,Te=qe(xe,V,-.09*ee,-.12*ee,-.015,.18*ee,.24*ee,.03,.012),Qe=qe(xe,p.rocker,-.055*ee,-.07*ee,0,.11*ee,.14*ee,.025,.01),yt=oe[L];return xe.position.set(H+yt[0]*(E/2+.015),Hx,ie+yt[2]*(E/2+.015)),xe.rotation.y=Q[L],[xe,Te,Qe].forEach(Nt=>Nt.userData=X),z.push(Te,Qe),A.add(xe),{group:xe,rocker:Qe}}e.bare||Hh().forEach(H=>{K[H.circuit+"."+H.id]=le(H.x,H.z,H.face,p.plate,{circuit:H.circuit,ctl:H.id})});let ve=Lt.breaker,Ae=new $e,Oe=qe(Ae,p.panel,-.22,-.2,-.02,.44,.4,.08,.02),et=qe(Ae,p.panelDoor,-.18,-.15,.06,.36,.3,.012,.01);Ae.position.set(ve.x+oe[ve.face][0]*(E/2+.02),1.15,ve.z+oe[ve.face][2]*(E/2+.02)),Ae.rotation.y=Q[ve.face],[Ae,Oe,et].forEach(H=>H.userData={breaker:!0}),e.bare||(z.push(Oe,et),A.add(Ae));let ne=pd(p,Lt.size);ne.position.y=Pn,f.add(ne);let ue=!0,ae=1;function de(){let H=Pn+(ya-Pn)*Math.min(1,ae*1.4);N.scale.y=H/ya,ne.position.y=H+(1-ae)*3.2,ne.visible=ae>.01,p.roof.opacity=p.fascia.opacity=Math.min(1,ae*1.6),p.roof.depthWrite=p.fascia.depthWrite=ae>.99,a.style.opacity=String(Math.max(0,1-ae*2))}let Ce=[];function Ze(H,ie,L,V,X){let ee=document.createElement("div");ee.className="hlabel "+(X||""),ee.textContent=H,a.appendChild(ee),Ce.push({el:ee,v:new k(ie,L,V)})}Lt.rooms.forEach(H=>Ze(H.name,H.x+H.w/2,.15,H.z+H.d/2+(H.id==="corridoio"?.45:.9),"room")),e.bare||(Hh().forEach(H=>Ze(H.label,H.x+oe[H.face][0]*.4,Pn+.25,H.z+oe[H.face][2]*.4,"ctl")),Ze(ve.label,ve.x+.55,Pn+.25,ve.z,"ctl"));let Ue=e.extend?e.extend({world:A,M:p,pick:z,rooms:D,addLabel:Ze,animate:S,redraw:u,lite:r,FACE:oe,FACE_ROT:Q,T:E,WALL_H:Pn}):null,be=new Ct(1,1,{type:s.extensions.has("EXT_color_buffer_half_float")||s.extensions.has("EXT_color_buffer_float")?Rt:Kt,samples:r?2:4}),Se=new cs(s,be);Se.addPass(new hs(f,d));let ye=null;r||(ye=new xr(f,d,1,1),ye.blendIntensity=.85,ye.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1}),Se.addPass(ye));let B=new ki(new Ve(1,1),.45,.45,1);Se.addPass(B),Se.addPass(new us);function bt(){let H=md(P.pitch),ie=md(P.yaw),L=P.dist;d.position.set(P.tx+Math.sin(ie)*Math.cos(H)*L,P.ty-.6+Math.sin(H)*L,P.tz+Math.cos(ie)*Math.cos(H)*L),d.lookAt(P.tx,P.ty,P.tz)}function Ye(){let H=Math.max(1,i.clientWidth),ie=Math.max(1,i.clientHeight);s.setSize(H,ie,!1),s.domElement.style.width="100%",s.domElement.style.height="100%",Se.setSize(H,ie),d.aspect=H/ie,d.fov=H/ie<.9?52:38,d.updateProjectionMatrix(),u()}let je=typeof ResizeObserver<"u"?new ResizeObserver(Ye):null;je&&je.observe(i);let Be=new k;function ft(){bt(),Se.render();let H=i.clientWidth,ie=i.clientHeight;Ce.forEach(L=>{Be.copy(L.v).project(d),L.el.style.display=Be.z<1?"":"none",L.el.style.transform=`translate(-50%,-50%) translate(${(Be.x+1)/2*H}px,${(1-Be.y)/2*ie}px)`})}function He(H){l=0,!c&&(h.size&&(o=!0),h.forEach(ie=>{ie(H)||h.delete(ie)}),o&&(o=!1,ft()),h.size&&I())}function I(){!l&&!c&&(l=requestAnimationFrame(He))}function S(H,ie){let L=performance.now(),V=X=>{let ee=Math.min(1,(X-L)/H);return ie(ee),ee<1};return h.add(V),I(),V}let J=e.reduced||e.noIntro,se=null,fe=!J,re={};function De(H,ie=900){if(fe){re=H;return}let L={..._,...H};if(d.aspect<.9&&L.dist===_.dist&&(L.dist*=1.22),se&&h.delete(se),e.reduced){Object.assign(P,L),u();return}let V={...P};se=S(ie,X=>{let ee=Vh(X);Object.keys(L).forEach(xe=>P[xe]=V[xe]+(L[xe]-V[xe])*ee)})}let Me=null;function Ne(H,ie=1400){ue=!!H,e.onRoof&&e.onRoof(ue),Me&&h.delete(Me);let L=ae,V=ue?1:0;if(e.reduced){ae=V,de(),u();return}Me=S(ie,X=>{ae=L+(V-L)*Vh(X),de()})}J?(ae=0,ue=!1,de(),e.start&&Object.assign(P,e.start)):(Object.assign(P,{tx:w,tz:M,yaw:-28,pitch:30,dist:27}),de(),setTimeout(()=>{c||(fe=!1,De(re,2600),setTimeout(()=>{c||(Ne(!1,1600),e.onRoof&&e.onRoof(!1))},700))},450));let We=new or,me=new Ve,we=null,Pe=s.domElement;Pe.style.touchAction="pan-y",Pe.addEventListener("pointerdown",H=>{we={x:H.clientX,y:H.clientY,yaw:P.yaw,pitch:P.pitch,moved:!1};try{Pe.setPointerCapture(H.pointerId)}catch{}}),Pe.addEventListener("pointermove",H=>{if(!we)return;let ie=H.clientX-we.x,L=H.clientY-we.y;Math.abs(ie)+Math.abs(L)>6&&(we.moved=!0),we.moved&&(se&&(h.delete(se),se=null),P.yaw=Math.max(-35,Math.min(35,we.yaw-ie*.25)),P.pitch=Math.max(38,Math.min(75,we.pitch+L*.2)),u())}),Pe.addEventListener("pointerup",H=>{let ie=we;if(we=null,!ie||ie.moved)return;if(ue){Ne(!1),e.onRoof&&e.onRoof(!1);return}let L=Pe.getBoundingClientRect();me.set((H.clientX-L.left)/L.width*2-1,-((H.clientY-L.top)/L.height)*2+1),We.setFromCamera(me,d);let V=We.intersectObjects(z,!1)[0];if(!V)return;let X=V.object.userData||{};X.ext?e.onPick&&e.onPick(X):X.breaker?e.onBreaker():X.ctl?e.onControl(X.circuit,X.ctl):X.room&&e.onRoom(X.room)}),Pe.addEventListener("wheel",H=>{H.ctrlKey&&(H.preventDefault(),P.dist=Math.max(9,Math.min(24,P.dist+H.deltaY*.01)),u())},{passive:!1}),Pe.addEventListener("pointercancel",()=>{we=null});let Ge=11;function Ie(H,ie){H.level=ie,H.light&&(H.light.intensity=Ge*ie,H.bulb.emissiveIntensity=6*ie),H.wins.forEach(L=>L.emissive.setHex(16757596).multiplyScalar(.9*ie))}function rt(H,ie){let L=ie?1:0;if(H.target===L)return;if(H.target=L,e.reduced){Ie(H,L);return}let V=H.level;H.anim&&h.delete(H.anim),H.anim=S(ie?420:260,X=>{let ee=ie&&X<.5?Math.sin(X*60)>.2?1:.35:1;Ie(H,(V+(L-V)*Vh(X))*ee)})}return de(),Ye(),{update(H){Ue&&Ue.update&&Ue.update(H);let ie=[];Object.keys(D).forEach(L=>{let V=D[L],X=H.rooms[L]||{},ee=!!X.lit;rt(V,ee),ee&&V.def.name&&ie.push(V.def.name);let xe=Lt.controls[V.def.circuit]||{};Object.keys(xe).forEach(Te=>{let Qe=K[V.def.circuit+"."+Te];Qe&&(Qe.rocker.rotation.x=(X.controls&&X.controls[Te]?-1:1)*.25)})}),s.domElement.setAttribute("aria-label","Casa vista dall\u2019alto. Stanze con la luce accesa: "+(ie.length?ie.join(", "):"nessuna")),u()},focusRoom(H){let ie=D[H]&&D[H].def;if(ie){if(ue&&!fe&&Ne(!1),d.aspect<.9){De({tx:(w+ie.x+ie.w/2)/2,tz:(M+ie.z+ie.d/2)/2+.3,dist:19,pitch:62});return}De({tx:ie.x+ie.w/2,tz:ie.z+ie.d/2+.3,dist:12.5,yaw:0,pitch:60})}},overview(){De({})},look(H,ie){De(H,ie)},screenOf(H){let ie=z.find(V=>V.userData&&V.userData.id===H);if(!ie)return null;ie.updateWorldMatrix(!0,!1);let L=new k().setFromMatrixPosition(ie.matrixWorld).project(d);return{x:(L.x+1)/2*i.clientWidth,y:(1-L.y)/2*i.clientHeight,visible:L.z<1}},setRoof(H){Ne(H),H&&De({yaw:-18,pitch:42,dist:23},1400)},roof(){return ue},resize:Ye,dispose(){c=!0,Ue&&Ue.dispose&&Ue.dispose(),l&&cancelAnimationFrame(l),je&&je.disconnect(),f.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&(Array.isArray(H.material)?H.material:[H.material]).forEach(ie=>{Object.values(ie).forEach(L=>L&&L.isTexture&&L.dispose()),ie.dispose()})}),f.environment&&f.environment.dispose(),ye&&ye.dispose(),B.dispose(),Se.dispose(),be.dispose(),s.dispose(),s.forceContextLoss&&s.forceContextLoss(),s.domElement.remove(),a.remove()}}}typeof window<"u"&&(window.FaseNeutroScene={createScene:Wh});function ps(i,e,t){let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),n}function Il(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function wa(i,e=1,t=1,n=!0){let r=new Li(i);return r.wrapS=r.wrapT=Vt,r.repeat.set(e,t),r.anisotropy=4,n&&(r.colorSpace=wt),r}function Dl(i,e,t,n,r,s,a){for(let o=0;o<n;o++){let l=Math.floor(s()*255);i.fillStyle=`rgba(${l},${l},${l},${a})`,i.fillRect(s()*e,s()*t,1+s()*r,1+s()*r)}}var Vx=()=>ps(512,512,(i,e,t)=>{let n=Il(31);i.fillStyle="#8a8a86",i.fillRect(0,0,e,t);for(let r=0;r<40;r++)i.fillStyle=`rgba(${90+n()*60},${90+n()*60},${86+n()*60},0.10)`,i.beginPath(),i.ellipse(n()*e,n()*t,30+n()*90,20+n()*60,n()*3,0,7),i.fill();Dl(i,e,t,9e3,3,n,.18),i.strokeStyle="rgba(40,40,40,0.55)",i.lineWidth=3,i.beginPath(),i.moveTo(0,2),i.lineTo(e,2),i.moveTo(2,0),i.lineTo(2,t),i.stroke()}),Wx=()=>ps(256,256,(i,e,t)=>{let n=Il(32);i.fillStyle="#808080",i.fillRect(0,0,e,t),Dl(i,e,t,6e3,3,n,.35)}),Xx=()=>ps(256,256,(i,e,t)=>{let n=Il(41);i.fillStyle="#1d1f22",i.fillRect(0,0,e,t);for(let r=0;r<8;r++)i.fillStyle="#2b2e32",i.fillRect(r*32+3,0,5,t),i.fillStyle="#121315",i.fillRect(r*32+9,0,3,t);Dl(i,e,t,2500,2,n,.12)}),qx=()=>ps(256,256,(i,e,t)=>{let n=Il(51);i.fillStyle="#b98b57",i.fillRect(0,0,e,t);for(let r=0;r<t;r+=3)i.fillStyle=`rgba(80,50,20,${.04+r%6*.01})`,i.fillRect(0,r,e,1);Dl(i,e,t,2500,2,n,.12),i.fillStyle="rgba(214,190,150,0.9)",i.fillRect(0,t/2-12,e,24)}),Yx=()=>ps(256,64,(i,e,t)=>{i.fillStyle="#d9b01e",i.fillRect(0,0,e,t),i.fillStyle="#17181a";for(let n=-t;n<e+t;n+=48)i.beginPath(),i.moveTo(n,t),i.lineTo(n+24,t),i.lineTo(n+24+t,0),i.lineTo(n+t,0),i.fill()});function Ll(){let i={};i.concrete=new Ee({map:wa(Vx(),1,1),bumpMap:wa(Wx(),6,6,!1),bumpScale:.6,roughness:.88}),i.wall=new Ee({color:13355199,roughness:.95}),i.wallBase=new Ee({color:5068640,roughness:.85});let e=wa(Xx(),6,1);return i.rubber=new Ee({map:e,roughness:.92}),i.beltTex=e,i.cardboard=new Ee({map:wa(qx(),1,1),roughness:.85}),i.hazard=new Ee({map:wa(Yx(),1,1),roughness:.6}),i.steel=new Ee({color:12830667,roughness:.3,metalness:1}),i.steelDark=new Ee({color:7172984,roughness:.4,metalness:.9}),i.frame=new Ee({color:4086390,roughness:.5,metalness:.3}),i.yellow=new Ee({color:14923295,roughness:.45}),i.red=new Ee({color:12854813,roughness:.3}),i.green=new Ee({color:2068293,roughness:.3}),i.motor=new Ee({color:2912896,roughness:.42,metalness:.35,emissive:16734751,emissiveIntensity:0}),i.cabinet=new Ee({color:13883096,roughness:.5,metalness:.2}),i.cabinetIn=new Ee({color:15329506,roughness:.7}),i.din=new Ee({color:11449272,roughness:.35,metalness:1}),i.modWhite=new Ee({color:15329766,roughness:.35}),i.modGrey=new Ee({color:9344155,roughness:.4}),i.modDark=new Ee({color:2303530,roughness:.35}),i.modBlue=new Ee({color:2973594,roughness:.4}),i.lever=new Ee({color:1382170,roughness:.3}),i.glassDoor=new Ee({color:3819090,roughness:.08,transparent:!0,opacity:.35}),i.stripe=new Ee({color:16742938,roughness:.4}),i.windowGlow=new Ee({color:12375022,emissive:10274032,emissiveIntensity:.9,roughness:.2}),i}function Pl(i,e=.012,t="sphere"){let n=new Ee({color:new Le(i).multiplyScalar(.25),emissive:i,emissiveIntensity:0,roughness:.3}),r=t==="box"?new br(e*2,e,e,1,e*.3):new zn(e,14,10);return{mesh:new it(r,n),mat:n,set(a,o=3){n.emissiveIntensity=a?o:0}}}function nt(i,e,t,n,r,s,a,o,l=.01){let c=new it(new br(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e);return c.position.set(t,n,r),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Ut(i,e,t,n,r,s,a,o="y",l=28,c){let h=new it(new Mn(c===void 0?s:c,s,a,l),e);return h.position.set(t,n,r),o==="x"&&(h.rotation.z=Math.PI/2),o==="z"&&(h.rotation.x=Math.PI/2),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function Gi(i,e,t,n,r,s,a,o={}){let c=Math.max(24,Math.round(256*a/s)),h=ps(256,c,(p,x,b)=>{p.clearRect(0,0,x,b),p.fillStyle=o.bg||"rgba(255,255,255,0)",p.fillRect(0,0,x,b),p.fillStyle=o.fg||"#2a2d31",p.font=`600 ${Math.round(b*(o.size||.62))}px system-ui, sans-serif`,p.textAlign="center",p.textBaseline="middle",p.fillText(e,x/2,b/2+1,x-8)}),u=new Li(h);u.colorSpace=wt;let f=new it(new dn(s,a),new on({map:u,transparent:!0,color:o.dim||14540253}));return f.position.set(t,n,r),i.add(f),f}function jx(i,e,t){let n=new $e,r=t.w||.036,s=t.h||.09,a=.05,o=nt(n,t.kind==="mp"?e.modDark:e.modWhite,0,0,0,r,s,a,.004),l=nt(n,(t.kind==="mp",e.modGrey),0,0,a/2+.002,r*.86,s*.9,.008,.003),c=new $e;c.position.set(0,s*.04,a/2+.01);let h=nt(c,e.lever,0,0,.012,r*.52,s*.3,.02,.004);h.userData={id:t.id,kind:"toggle",...t.data||{}},n.add(c);let u=Pl(16747034,.007,"box");u.mesh.position.set(0,s*.36,a/2+.012),n.add(u.mesh);let f=Pl(3789930,.006);f.mesh.position.set(r*.22,-s*.34,a/2+.012),n.add(f.mesh);let p=null;t.kind==="rcd"&&(p=Ut(n,e.modBlue,-r*.18,-s*.3,a/2+.012,.006,.01,"z",14),p.userData={id:t.id+".test",kind:"test",part:t.id}),n.position.set(t.x,t.y,0),i.add(n);let x=[h,l,o].concat(p?[p]:[]);return x.forEach(b=>{b!==h&&b!==p&&(b.userData={id:t.id,kind:"toggle",...t.data||{}})}),{group:n,picks:x,set(b){c.rotation.x=b.tripped?0:b.on?-.5:.5,c.position.y=b.tripped?0:b.on?s*.1:-s*.1,u.set(!!b.tripped,2.5),f.set(!!b.live,3.2)}}}function gd(i,e=1){let t=new $e,n=[{id:"D",kind:"rcd",w:.072,label:"Diff."},{id:"M1",kind:"mcb",w:.036,label:"Luce"},{id:"M2",kind:"mcb",w:.036,label:"Prese"},{id:"M3",kind:"mcb",w:.036,label:"Cucina"}],r=.006,s=n.reduce((h,u)=>h+u.w,0)+r*(n.length-1)+.09,a=.27;nt(t,i.cabinet,0,0,-.012,s+.04,a+.04,.045,.008),nt(t,i.cabinetIn,0,0,.011,s,a,.005,.004),nt(t,i.din,0,0,.016,s-.02,.018,.006,.002);let o=[],l={},c=-s/2+.045;return n.forEach(h=>{let u=jx(t,i,{id:h.id,kind:h.kind,w:h.w,x:c+h.w/2,y:0});u.group.position.z=.04,l[h.id]=u,u.picks.forEach(f=>o.push(f)),Gi(t,h.label,c+h.w/2,-.085,.066,h.w+.004,.022,{size:.4}),c+=h.w+r}),t.scale.setScalar(e),{group:t,picks:o,width:s*e,set(h){l.D.set({on:h.rcd.on,tripped:h.rcd.tripped,live:h.rcd.on}),l.M1.set({on:h.lines.luce.on,tripped:h.lines.luce.tripped,live:h.lines.luce.on&&h.rcd.on}),l.M2.set({on:h.lines.prese.on,tripped:h.lines.prese.tripped,live:h.lines.prese.on&&h.rcd.on}),l.M3.set({on:h.lines.cucina.on,tripped:h.lines.cucina.tripped,live:h.lines.cucina.on&&h.rcd.on})}}}function vd(i,e){let t=new $e,n=e.x1-e.x0,r=e.w||.7,s=e.h||.8,a=(e.x0+e.x1)/2;[-1,1].forEach(c=>{nt(t,i.frame,a,s-.1,c*(r/2+.03),n+.1,.12,.05,.01),nt(t,i.steelDark,a,s-.02,c*(r/2+.03),n+.1,.03,.07,.005);let h=Math.max(2,Math.round(n/1.5)+1);for(let u=0;u<h;u++)nt(t,i.frame,e.x0+n*u/(h-1),(s-.16)/2,c*(r/2+.03),.06,s-.16,.05,.008)});for(let c=0;c<3;c++)nt(t,i.frame,e.x0+.1+(n-.2)*c/2,.3,0,.04,.04,r+.06,.005);Ut(t,i.steel,e.x0,s-.07,0,.07,r+.02,"z"),Ut(t,i.steel,e.x1,s-.07,0,.07,r+.02,"z");let o=new it(new en(n,.025,r-.02),i.rubber);o.position.set(a,s-.0125+0,0),o.receiveShadow=!0,o.castShadow=!0,t.add(o),i.beltTex.repeat.set(n*1.4,1);let l=0;return{group:t,belt:o,run(c,h){l=(l+c*h*1.4/1)%1,i.beltTex.offset.x=-l}}}function xd(i,e=.48,t=.34,n=.38){let r=new $e;return nt(r,i.cardboard,0,t/2,0,e,t,n,.01),r}function bd(i){let e=new $e,t=Ut(e,i.motor,0,0,0,.16,.42,"z",36);for(let s=0;s<9;s++)nt(e,i.motor,0,0,-.17+s*.043,.36,.014,.012,.003);Ut(e,i.steelDark,0,0,.26,.05,.1,"z"),nt(e,i.modDark,0,.19,-.02,.16,.07,.14,.01),nt(e,i.steelDark,0,-.17,0,.32,.03,.36,.005);let n=new $e,r=Ut(n,i.steelDark,0,0,0,.14,.04,"z",32);for(let s=0;s<8;s++){let a=nt(n,i.steel,0,.09,0,.025,.07,.018,.003);a.rotation.z=s/8*Math.PI*2,a.position.set(Math.sin(a.rotation.z)*-.09,Math.cos(a.rotation.z)*.09,0)}return n.position.z=-.24,e.add(n),{group:e,set(s){i.motor.emissiveIntensity=1.4*s.heat},spin(s,a){n.rotation.z+=s*Math.PI*2*a},hum(s){e.position.y+=Math.sin(s/25)*6e-4},body:t,cap:r}}function _d(i,e=1.5){let t=new $e;Ut(t,i.steelDark,0,.02,0,.09,.04,"y"),Ut(t,i.steel,0,e/2,0,.018,e,"y",14);let n=[["green",3073642],["yellow",16762394],["red",16726570]].map(([s,a],o)=>{let l=new Ee({color:new Le(a).multiplyScalar(.3),emissive:a,emissiveIntensity:0,roughness:.25,transparent:!0,opacity:.95}),c=Ut(t,l,0,e+.07*o,0,.055,.07,"y",24);return{name:s,mat:l,mesh:c}});Ut(t,i.modDark,0,e+.07*3+.01,0,.056,.02,"y",24);let r={};return n.forEach(s=>{let a=new Hn(s.mat.emissive.getHex(),0,3.2,2);a.position.y=s.mesh.position.y,t.add(a),r[s.name]=a}),{group:t,set(s){n.forEach(a=>{let o=!!s[a.name];a.mat.emissiveIntensity=o?3.4:0,r[a.name].intensity=o?1.4:0})}}}function yd(i){let e=new $e;Ut(e,i.steelDark,0,.02,0,.16,.04,"y"),Ut(e,i.steel,0,.55,0,.03,1.1,"y",14),nt(e,i.yellow,0,1.28,0,.3,.46,.12,.012);let t=(l,c,h,u,f,p,x)=>{let b=new $e;b.position.set(h,u,.07);let m=Ut(b,i.modDark,0,0,0,f+.012,.014,"z",28),d=Ut(b,c,0,0,.012,f,.022,"z",28);return m.userData=d.userData={id:l,kind:p?"hold":"toggle",hold:!!p},e.add(b),Gi(e,x,h,u-f-.035,.066,.14,.032,{fg:"#17181a"}),{grp:b,cap:d,ring:m}},n=t("SB1",i.green,-.075,1.4,.034,!0,"Marcia"),r=t("SB0",i.red,.075,1.4,.034,!0,"Arresto"),s=new $e;s.position.set(0,1.2,.07),Ut(s,i.yellow,0,0,0,.056,.012,"z",32);let a=Ut(s,i.red,0,0,.026,.04,.036,"z",32,.032);a.userData={id:"SBE",kind:"toggle"},e.add(s),Gi(e,"Emergenza",0,1.115,.066,.18,.032,{fg:"#17181a"});let o=[n.cap,n.ring,r.cap,r.ring,a];return{group:e,picks:o,set(l){n.cap.position.z=l.start?.004:.012,r.cap.position.z=l.stop?.004:.012,a.position.z=l.emergency?.008:.026}}}function Md(i){let e=new $e,t=1,n=1.2;nt(e,i.cabinet,0,0,-.04,t+.05,n+.05,.1,.012),nt(e,i.cabinetIn,0,0,.012,t,n,.01,.004),[.3,-.22].forEach(b=>nt(e,i.din,0,b,.022,t-.1,.022,.008,.002));let r=[],s=1.75,a=new $e;a.position.set(-.3,.34,.03),a.scale.setScalar(s),nt(a,i.modDark,0,0,0,.1,.16,.08,.008);let o=new $e;o.position.set(0,.02,.05);let l=nt(o,i.lever,0,0,.012,.045,.085,.028,.006);l.userData={id:"QM",kind:"toggle"};let c=Ut(a,i.yellow,0,.02,.043,.05,.006,"z",24);c.userData={id:"QM",kind:"toggle"},a.add(o),e.add(a),r.push(l,c),Gi(e,"Salvamotore",-.3,.15,.075,.3,.05,{size:.5});let h=new $e;h.position.set(0,.34,.03),h.scale.setScalar(s),nt(h,i.modGrey,0,0,0,.12,.17,.08,.008);let u=Pl(3789930,.012,"box");u.mesh.scale.set(1.6,1,.5),u.mesh.position.set(0,.03,.044),h.add(u.mesh),e.add(h),Gi(e,"Contattore",0,.15,.075,.3,.05,{size:.5});let f=new $e;f.position.set(.3,.34,.03),f.scale.setScalar(s),nt(f,i.modBlue,0,0,0,.1,.17,.08,.008);let p=Pl(16722458,.012,"box");p.mesh.scale.set(1.4,1,.5),p.mesh.position.set(0,.05,.044),f.add(p.mesh);let x=Ut(f,i.modWhite,0,-.045,.045,.02,.014,"z",18);x.userData={id:"FR.reset",kind:"reset",part:"FR"},e.add(f),r.push(x),Gi(e,"Termico",.3,.15,.075,.3,.05,{size:.5});for(let b=0;b<8;b++)nt(e,b%2?i.modGrey:i.modWhite,-.35+b*.1,-.35,.03,.05,.09,.05,.004);return{group:e,picks:r,set(b){o.rotation.z=b.qm?0:.7,u.set(!!b.contactor,2.5),p.set(!!b.thermal.tripped,3.2)}}}var Ul={insieme:{tx:4.5,tz:4.3,yaw:0,pitch:58,dist:17.5},quadro:{tx:.15,tz:6.5,ty:1.2,yaw:90,pitch:6,dist:2.3},soggiorno:{tx:4.2,tz:6.6,yaw:0,pitch:55,dist:9},cucina:{tx:1.5,tz:1.5,yaw:0,pitch:58,dist:9}},Zx=2.5;function Kx(i,e){let{world:t,pick:n,addLabel:r,redraw:s,FACE_ROT:a}=i,o=Ll(),l=new $e;t.add(l);let c=Lt.breaker,h=gd(o,Zx);h.group.position.set(c.x+.06+.03,1.2,c.z),h.group.rotation.y=a.e,l.add(h.group),h.picks.forEach(_=>{_.userData={..._.userData,ext:!0},n.push(_)}),r("Quadro",c.x+.6,1.55,c.z,"ctl");let u=new $e;u.position.set(.06+.015,1.1,4.25),u.rotation.y=a.e,u.scale.setScalar(1.6),nt(u,i.M.plate,0,0,0,.09,.12,.015,.006);let f=nt(u,i.M.rocker,0,0,.012,.055,.07,.016,.005),p=nt(u,i.M.plate,0,0,.004,.14,.18,.03,.006);p.visible=!1,p.userData=f.userData={id:"S",kind:"toggle",ext:!0},l.add(u),n.push(p,f),r("Interruttore",.5,1.45,4.25,"ctl");let x=new $e;x.position.set(6.15,0,5.4),nt(x,o.modWhite,0,.3,0,.36,.56,.16,.02),nt(x,o.steelDark,0,.02,0,.3,.04,.2,.006);let b=new Ee({color:5974548,emissive:16734746,emissiveIntensity:0,roughness:.4});for(let _=0;_<3;_++){let P=new it(new Mn(.012,.012,.28,10),b);P.rotation.z=Math.PI/2,P.position.set(0,.2+_*.1,.085),x.add(P)}nt(x,o.steelDark,0,.3,.092,.31,.46,.006,.002).material=new Ee({color:2829874,roughness:.6,metalness:.8,wireframe:!0});let m=nt(x,o.modWhite,0,.3,0,.42,.62,.22,.02);m.visible=!1,m.userData={id:"G",kind:"toggle",ext:!0},l.add(x),n.push(m),nt(l,o.modWhite,6.15,.32,5.07,.09,.09,.02,.004);let d=new it(new Mn(.008,.008,.26,8),new Ee({color:1710618,roughness:.6}));d.rotation.x=Math.PI/2,d.position.set(6.15,.32,5.2),l.add(d),r("Stufetta",6.15,.95,5.4,"ctl");let w=Gi(l,"12:00",2.35,.62,.66,.18,.05,{fg:"#47ff8a",dim:2236962});nt(l,o.modDark,2.35,.55,.655,.5,.36,.01,.004),w.position.z=.665,r("Forno",2.35,1.1,.7,"ctl");let M=i.M.screen;return r("TV",7.4,1.35,5.15,"ctl"),{update(_){let P=_&&_.prova;if(!P)return;h.set(P),f.rotation.x=(P.switchOn?-1:1)*.25;let A=P.socket&&P.heaterPlugged;b.emissiveIntensity=A?3.5:0,d.visible=P.heaterPlugged,M.emissive=new Le(P.socket?2907286:0),M.emissiveIntensity=P.socket?1.1:0,w.material.color.setHex(P.oven?16777215:1842204),s()},dispose(){}}}function Sd(i,e){let t=Wh(i,{night:!0,bare:!0,noIntro:!0,start:Ul.insieme,reduced:e.reduced,lite:e.lite,capture:e.capture,onBreaker(){},onControl(){},onRoom(){},onRoof(){},onPick:e.onTap,extend:n=>Kx(n,e)});return t?{update(n){t.update(n)},look(n,r){let s={...Ul[n]||Ul.insieme};i.clientWidth<i.clientHeight*.9&&n==="quadro"&&(s.dist=1.5),t.look(s,r)},screenOf:t.screenOf,views:Object.keys(Ul),resize:t.resize,dispose:t.dispose}:null}function Jx(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var Ed=i=>i*Math.PI/180,Qx=i=>i*i*(3-2*i);function wd(i,e){if(!Jx())return null;let t=e.lite!==void 0?e.lite:window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||i.clientWidth<700,n=e.bg===void 0?1448998:e.bg,r;try{r=new is({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}r.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.25:1.75)),r.setClearColor(n),r.toneMapping=Ui,r.toneMappingExposure=e.exposure||1,r.shadowMap.enabled=!0,r.shadowMap.type=Zr,r.domElement.className="house3d",r.domElement.setAttribute("role","img"),i.appendChild(r.domElement);let s=document.createElement("div");s.className="hlabels",i.appendChild(s);let a=!0,o=0,l=!1,c=new Set,h=()=>{a=!0,K()},u=new er;u.background=new Le(n);let f=new It(38,1,.1,120),p=new $e;u.add(p);let x=new ar(13490410,7035464,.9);u.add(x);let b=new Bi(r),m=.16;new ls().load(ds+"ambiente.exr",be=>{l||(u.environment=b.fromEquirectangular(be).texture,u.environmentIntensity=m,x.intensity=.12,be.dispose(),b.dispose(),h())},void 0,()=>{});let d=new Ct(1,1,{type:r.extensions.has("EXT_color_buffer_half_float")||r.extensions.has("EXT_color_buffer_float")?Rt:Kt,samples:t?2:4}),w=new cs(r,d);w.addPass(new hs(u,f));let M=null;t||(M=new xr(u,f,1,1),M.blendIntensity=.85,M.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1}),w.addPass(M));let _=new ki(new Ve(1,1),e.bloom===void 0?.45:e.bloom,.45,1);w.addPass(_),w.addPass(new us);let P={ty:.8,...e.view},A={...P},D=e.limits||{yaw:[-35,35],pitch:[12,75],dist:[3,30]};function z(){let be=Ed(A.pitch),Se=Ed(A.yaw),ye=A.dist;f.position.set(A.tx+Math.sin(Se)*Math.cos(be)*ye,A.ty+Math.sin(be)*ye,A.tz+Math.cos(Se)*Math.cos(be)*ye),f.lookAt(A.tx,A.ty,A.tz)}function E(){let be=Math.max(1,i.clientWidth),Se=Math.max(1,i.clientHeight);r.setSize(be,Se,!1),r.domElement.style.width="100%",r.domElement.style.height="100%",w.setSize(be,Se),f.aspect=be/Se,f.fov=be/Se<.9?52:38,f.updateProjectionMatrix(),h()}let y=typeof ResizeObserver<"u"?new ResizeObserver(E):null;y&&y.observe(i);let N=[],W=new k;function j(be,Se,ye,B,bt){let Ye=document.createElement("div");Ye.className="hlabel "+(bt||""),Ye.textContent=be,s.appendChild(Ye);let je={el:Ye,v:new k(Se,ye,B)};return N.push(je),je}function $(){z(),w.render();let be=i.clientWidth,Se=i.clientHeight;N.forEach(ye=>{W.copy(ye.v).project(f),ye.el.style.display=W.z<1?"":"none",ye.el.style.transform=`translate(-50%,-50%) translate(${(W.x+1)/2*be}px,${(1-W.y)/2*Se}px)`})}function Z(be){o=0,!l&&(c.size&&(a=!0),c.forEach(Se=>{Se(be)||c.delete(Se)}),a&&(a=!1,$()),c.size&&K())}function K(){!o&&!l&&(o=requestAnimationFrame(Z))}function oe(be,Se){let ye=performance.now(),B=bt=>{let Ye=Math.min(1,(bt-ye)/be);return Se(Ye),Ye<1};return c.add(B),K(),B}function Q(be){let Se=performance.now(),ye=B=>{let bt=Math.min(.1,(B-Se)/1e3);return Se=B,be(B,bt),!0};return c.add(ye),K(),()=>c.delete(ye)}let le=null;function ve(be,Se=900){let ye={...P,...be};if(le&&c.delete(le),e.reduced){Object.assign(A,ye),h();return}let B={...A};le=oe(Se,bt=>{let Ye=Qx(bt);Object.keys(ye).forEach(je=>A[je]=B[je]+(ye[je]-B[je])*Ye)})}function Ae(){ve({})}let Oe=new or,et=new Ve,ne=[],ue=r.domElement;ue.style.touchAction="pan-y";let ae=null,de=null,Ce=be=>{let Se=ue.getBoundingClientRect();et.set((be.clientX-Se.left)/Se.width*2-1,-((be.clientY-Se.top)/Se.height)*2+1),Oe.setFromCamera(et,f);let ye=Oe.intersectObjects(ne,!1)[0];return ye&&ye.object.userData&&ye.object.userData.id?ye.object.userData:null};ue.addEventListener("pointerdown",be=>{ae={x:be.clientX,y:be.clientY,yaw:A.yaw,pitch:A.pitch,moved:!1,u:Ce(be)};try{ue.setPointerCapture(be.pointerId)}catch{}ae.u&&ae.u.hold&&e.onPress&&(de=ae.u,e.onPress(de))}),ue.addEventListener("pointermove",be=>{if(!ae||de)return;let Se=be.clientX-ae.x,ye=be.clientY-ae.y;Math.abs(Se)+Math.abs(ye)>6&&(ae.moved=!0),ae.moved&&(le&&(c.delete(le),le=null),A.yaw=Math.max(D.yaw[0],Math.min(D.yaw[1],ae.yaw-Se*.25)),A.pitch=Math.max(D.pitch[0],Math.min(D.pitch[1],ae.pitch+ye*.2)),h())});let Ze=be=>{let Se=ae;if(ae=null,de){let ye=de;de=null,e.onRelease&&e.onRelease(ye);return}!Se||Se.moved||!Se.u||e.onTap&&e.onTap(Se.u)};ue.addEventListener("pointerup",Ze),ue.addEventListener("pointercancel",()=>{if(ae=null,de){let be=de;de=null,e.onRelease&&e.onRelease(be)}}),ue.addEventListener("wheel",be=>{be.ctrlKey&&(be.preventDefault(),A.dist=Math.max(D.dist[0],Math.min(D.dist[1],A.dist+be.deltaY*.01)),h())},{passive:!1});function Ue(be){let Se=ne.find(B=>B.userData&&B.userData.id===be);if(!Se)return null;Se.updateWorldMatrix(!0,!1);let ye=new k().setFromMatrixPosition(Se.matrixWorld).project(f);return{x:(ye.x+1)/2*i.clientWidth,y:(1-ye.y)/2*i.clientHeight,visible:ye.z<1}}return E(),{screenOf:Ue,THREE_scene:u,world:p,camera:f,renderer:r,lite:t,pick:ne,view:A,home:P,setEnvIntensity(be){m=be,u.environment&&(u.environmentIntensity=be)},add(be){return p.add(be),be},label:j,animate:oe,loop:Q,look:ve,reset:Ae,redraw:h,resize:E,dispose(){l=!0,o&&cancelAnimationFrame(o),y&&y.disconnect(),u.traverse(be=>{be.geometry&&be.geometry.dispose(),be.material&&(Array.isArray(be.material)?be.material:[be.material]).forEach(Se=>{Object.values(Se).forEach(ye=>ye&&ye.isTexture&&ye.dispose()),Se.dispose()})}),u.environment&&u.environment.dispose(),M&&M.dispose(),_.dispose(),w.dispose(),d.dispose(),r.dispose(),r.forceContextLoss&&r.forceContextLoss(),r.domElement.remove(),s.remove()}}}var gn={x0:2.6,x1:8.6,z:3.4,h:.8,w:.7},Xh=.9,qh=2.95,Ta={insieme:{tx:5.6,ty:.9,tz:3.4,yaw:18,pitch:28,dist:15},pulsantiera:{tx:6.4,ty:1.5,tz:5.5,yaw:8,pitch:8,dist:2.9},quadro:{tx:3.1,ty:1.45,tz:.4,yaw:8,pitch:6,dist:3.4},motore:{tx:8.6,ty:.85,tz:3.6,yaw:-30,pitch:18,dist:5.2}};function Td(i,e){let t=wd(i,{bg:1316894,exposure:1.25,view:Ta.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[2.5,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:e.onTap,onPress:e.onPress,onRelease:e.onRelease});if(!t)return null;let{world:n,pick:r,lite:s}=t,a=Ll();t.setEnvIntensity(.22);let o=new vi(14674175,1.5);o.position.set(7,9,-6),o.target.position.set(5.5,0,3.5),o.castShadow=!0,o.shadow.mapSize.set(s?1024:2048,s?1024:2048),Object.assign(o.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,n.add(o,o.target),[[3.2,3.4],[6,3.4],[8.8,3.4],[6,6.2]].forEach(([Z,K],oe)=>{let Q=new Hn(16773336,17,14,2);Q.position.set(Z,3.2,K),!s&&oe===1&&(Q.castShadow=!0,Q.shadow.mapSize.set(512,512),Q.shadow.bias=-.002),n.add(Q),nt(n,a.steelDark,Z,3.3,K,.9,.05,.16,.01);let le=new it(new en(.8,.02,.1),new Ee({color:16777215,emissive:16773336,emissiveIntensity:2.4}));le.position.set(Z,3.27,K),n.add(le)});let l=new it(new dn(14,11),a.concrete);l.rotation.x=-Math.PI/2,l.position.set(5.5,0,4),l.receiveShadow=!0,a.concrete.map.repeat.set(3,2.4),a.concrete.bumpMap.repeat.set(10,8),n.add(l);let c=3.6;nt(n,a.wall,5.5,c/2,-.1,12,c,.2,.01),nt(n,a.wall,-.1,c/2,4,.2,c,9,.01),nt(n,a.wall,11.6,c/2,4,.2,c,9,.01),nt(n,a.wallBase,5.5,.55,-0,12,1.1,.04,.005),nt(n,a.wallBase,-0,.55,4,.04,1.1,9,.005),[[7.6,4.2],[11,2]].forEach(([Z,K])=>{let oe=new it(new dn(K-.4,1),a.windowGlow);oe.position.set(Z,2.55,.016),n.add(oe),nt(n,a.frame,Z,2.55,.03,K-.3,.06,.04,.005),nt(n,a.frame,Z,3.05,.03,K-.3,.06,.04,.005),nt(n,a.frame,Z,2.05,.03,K-.3,.06,.04,.005)}),nt(n,a.steelDark,.02,1.6,6.2,.04,2.8,2.6,.01);let h=(Z,K,oe,Q)=>{let le=new it(new dn(oe,Q),a.hazard);le.rotation.x=-Math.PI/2,le.position.set(Z,.004,K),le.receiveShadow=!0,n.add(le)};h(5.6,2.6,7.2,.14),h(5.6,4.9,7.2,.14),h(2,3.75,.14,2.4),h(9.2,3.75,.14,2.4),a.hazard.map.repeat.set(7,1);let u=vd(a,{x0:gn.x0,x1:gn.x1,h:gn.h,w:gn.w});u.group.position.z=gn.z,n.add(u.group);let f=xd(a);f.position.set(qh,gn.h+.0125,gn.z),n.add(f);let p=new $e;p.position.set(8.68,gn.h+.2,gn.z+.52),nt(p,a.steelDark,0,-.22,0,.05,.4,.05,.005),nt(p,a.modGrey,0,0,0,.12,.12,.1,.01);let x=new $e;x.position.set(-.05,0,-.03),nt(x,a.steel,-.02,0,-.26,.02,.02,.5,.004);let b=Ut(x,a.red,-.02,0,-.5,.035,.03,"y",18);p.add(x),n.add(p);let m=new it(new zn(.012,10,8),new Ee({color:3811845,emissive:16757018,emissiveIntensity:0}));m.position.set(.03,0,.055),p.add(m);let d=bd(a);d.group.rotation.y=Math.PI,d.group.position.set(gn.x1,gn.h-.07,4.35),n.add(d.group),nt(n,a.frame,gn.x1,.27,4.35,.36,.54,.46,.01),Ut(n,a.steelDark,gn.x1,gn.h-.07,3.92,.04,.12,"z");let w=_d(a,1.45);w.group.position.set(9.6,0,2.2),n.add(w.group);let M=yd(a);M.group.position.set(6.4,0,5.5),M.group.scale.setScalar(1.25),n.add(M.group),M.picks.forEach(Z=>r.push(Z));let _=Md(a);_.group.position.set(3,1.5,.07),n.add(_.group),_.picks.forEach(Z=>r.push(Z)),t.label("Nastro",4.8,1.25,3.4,"room"),t.label("Motore",8.9,1.35,4.35,"room"),t.label("Finecorsa",8.7,1.4,3.9,"room"),t.label("Quadro",3,2.3,.3,"room"),t.label("Pulsantiera",6.4,2,5.5,"room");let P=0,A=0,D=!1,z=0,E=!1,y=null,N=d.group.position.y;function W(){y||(y=t.loop((Z,K)=>{let oe=A-P;P+=Math.abs(oe)<.001?oe:oe*Math.min(1,K*7),f.position.x=qh+P*Xh,D&&u.run(Xh,K),z&&d.spin(z,K),d.group.position.y=N+(E?Math.sin(Z/22)*.0035:0),!D&&!z&&!E&&Math.abs(A-P)<.002&&(y(),y=null)}))}let j=Z=>{let K={...Ta[Z]||Ta.insieme};return t.camera.aspect<.9&&(Z==="insieme"||!Ta[Z])&&(K.dist=10.5,K.yaw=24),K},$=!0;return t.camera.aspect<.9&&t.look(j("insieme"),1),{update(Z){Z&&(A=Math.max(0,Math.min(Z.length,Z.pos)),$&&(P=A,f.position.x=qh+P*Xh,$=!1),D=Z.motor==="fwd"&&!Z.atEnd,z=Z.motor==="fwd"?6:0,E=Z.motor==="hum",d.set({heat:Math.max(Z.thermal.heat*.9,Z.overload&&Z.motor!=="off"?.35:0)}),x.rotation.y=Z.atEnd?.55:0,m.material.emissiveIntensity=Z.atEnd?3:0,w.set({green:Z.lamp,red:Z.thermal.tripped||Z.emergency,yellow:!Z.qm&&Z.supply?!0:Z.overload&&!Z.thermal.tripped}),M.set(Z),_.set(Z),W(),t.redraw(),i.querySelector("canvas").setAttribute("aria-label","Officina con il nastro trasportatore. "+(Z.motor==="fwd"?"Il nastro \xE8 in marcia.":Z.motor==="hum"?"Il motore ronza e non parte.":"Il nastro \xE8 fermo.")+(Z.thermal.tripped?" Il termico \xE8 scattato.":"")+(Z.emergency?" L\u2019emergenza \xE8 premuta.":"")+(Z.atEnd?" Il pacco \xE8 a fine corsa.":"")))},look(Z,K){t.look(j(Z),K)},screenOf:t.screenOf,views:Object.keys(Ta),resize:t.resize,dispose(){y&&y(),t.dispose()}}}var Ad={appartamento:Sd,officina:Td};typeof window<"u"&&(window.FaseNeutroProve={createScene(i,e,t){return Ad[i]?Ad[i](e,t):null}});})();
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
