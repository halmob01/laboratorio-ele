(()=>{var vu=0,oc=1,bu=2;var lc=1,ro=2,Wn=3,In=0,nn=1,hn=2,Ft=0,Bi=1,Or=2,cc=3,hc=4,ao=5,pn=100,xu=101,_u=102,yu=103,Mu=104,Ji=200,Su=201,wu=202,Eu=203,ka=204,Ha=205,Br=206,Tu=207,zr=208,Au=209,Ru=210,Cu=211,Pu=212,Iu=213,Du=214,oo=0,lo=1,co=2,zi=3,ho=4,uo=5,fo=6,po=7,uc=0,Lu=1,Uu=2,ui=0,mo=1,go=2,vo=3,bo=4,xo=5,Fs=6,_o=7,Zl="attached",Nu="detached",fc=300,Qi=301,$i=302,yo=303,Mo=304,kr=306,Yt=1e3,bn=1001,Ss=1002,Ut=1003,So=1004;var es=1005;var Ct=1006,Os=1007;var yn=1008;var sn=1009,dc=1010,pc=1011,Bs=1012,wo=1013,Ai=1014,Qt=1015,Rt=1016,Eo=1017,To=1018,Ri=1020,mc=35902,gc=1021,vc=1022,jt=1023,ws=1026,Ci=1027,zs=1028,Ao=1029,bc=1030,Ro=1031;var Co=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,Po=35840,Io=35841,Do=35842,Lo=35843,Uo=36196,No=37492,Fo=37496,Oo=37808,Bo=37809,zo=37810,ko=37811,Ho=37812,Go=37813,Vo=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,jo=37819,Zo=37820,Ko=37821,Xr=36492,Jo=36494,Qo=36495,xc=36283,$o=36284,el=36285,tl=36286;var ki=2300,Hi=2301,za=2302,Kl=2400,Jl=2401,Ql=2402,Fu=2500;var _c=0,qr=1,ks=2,Ou=3200,Bu=3201;var nl=0,zu=1,Un="",At="srgb",Nt="srgb-linear",hr="linear",mt="srgb";var Oi=7680;var $l=519,ku=512,Hu=513,Gu=514,yc=515,Vu=516,Wu=517,Xu=518,qu=519,Ga=35044;var Mc="300 es",zn=2e3,ur=2001;var ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=1234567,lr=Math.PI/180,Gi=180/Math.PI;function Pn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function Sc(s,e){return(s%e+e)%e}function nd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function id(s,e,t){return s!==e?(t-s)/(e-s):0}function cr(s,e,t){return(1-t)*s+t*e}function sd(s,e,t,n){return cr(s,e,1-Math.exp(-t*n))}function rd(s,e=1){return e-Math.abs(Sc(s,e*2)-e)}function ad(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ld(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cd(s,e){return s+Math.random()*(e-s)}function hd(s){return s*(.5-Math.random())}function ud(s){s!==void 0&&(Dh=s);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fd(s){return s*lr}function dd(s){return s*Gi}function pd(s){return(s&s-1)===0&&s!==0}function md(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vd(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*b,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*b,o*c);break;case"ZYZ":s.set(l*b,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var wc={DEG2RAD:lr,RAD2DEG:Gi,generateUUID:Pn,clamp:st,euclideanModulo:Sc,mapLinear:nd,inverseLerp:id,lerp:cr,damp:sd,pingpong:rd,smoothstep:ad,smootherstep:od,randInt:ld,randFloat:cd,randFloatSpread:hd,seededRandom:ud,degToRad:fd,radToDeg:dd,isPowerOfTwo:pd,ceilPowerOfTwo:md,floorPowerOfTwo:gd,setQuaternionFromProperEuler:vd,normalize:vt,denormalize:Cn},He=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],b=n[8],x=i[0],m=i[3],d=i[6],E=i[1],M=i[4],_=i[7],L=i[2],P=i[5],D=i[8];return r[0]=a*x+o*E+l*L,r[3]=a*m+o*M+l*P,r[6]=a*d+o*_+l*D,r[1]=c*x+h*E+u*L,r[4]=c*m+h*M+u*P,r[7]=c*d+h*_+u*D,r[2]=f*x+p*E+b*L,r[5]=f*m+p*M+b*P,r[8]=f*d+p*_+b*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,b=t*u+n*f+i*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/b;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wl.makeScale(e,t)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wl=new et;function Ec(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yu(){let s=Es("canvas");return s.style.display="block",s}var Lh={};function Yr(s){s in Lh||(Lh[s]=!0,console.warn(s))}function ju(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Zu(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ku(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Uh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){let s={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?hr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Nt]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),s}var it=bd();function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cs,Va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=Es("canvas")),cs.width=e.width,cs.height=e.height;let i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xd=0,Ts=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(El(i[a].image)):r.push(El(i[a]))}else r=El(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function El(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,zt=class s extends ri{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=bn,i=bn,r=Ct,a=yn,o=jt,l=sn,c=s.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Pn(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=fc;zt.DEFAULT_ANISOTROPY=1;var ft=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],b=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(b-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(b+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,L=(d+1)/2,P=(h+f)/4,D=(u+x)/4,z=(b+m)/4;return M>_&&M>L?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=P/n,r=D/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=P/i,r=z/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=D/r,i=z/r),this.set(n,i,r,t),this}let E=Math.sqrt((m-b)*(m-b)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-b)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wa=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let r=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ts(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pt=class extends Wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fr=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],b=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=b,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==b){let m=1-o,d=l*f+c*p+h*b+u*x,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let L=Math.sqrt(M),P=Math.atan2(L,d*E);m=Math.sin(m*P)/L,o=Math.sin(o*P)/L}let _=o*E;if(l=l*m+f*_,c=c*m+p*_,h=h*m+b*_,u=u*m+x*_,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+h*u+l*p-c*f,e[t+1]=l*b+h*f+c*u-o*p,e[t+2]=c*b+h*p+o*f-l*u,e[t+3]=h*b-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),b=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*b,this._y=c*p*u-f*h*b,this._z=c*h*b+f*p*u,this._w=c*h*u-f*p*b;break;case"YXZ":this._x=f*h*u+c*p*b,this._y=c*p*u-f*h*b,this._z=c*h*b-f*p*u,this._w=c*h*u+f*p*b;break;case"ZXY":this._x=f*h*u-c*p*b,this._y=c*p*u+f*h*b,this._z=c*h*b+f*p*u,this._w=c*h*u-f*p*b;break;case"ZYX":this._x=f*h*u-c*p*b,this._y=c*p*u+f*h*b,this._z=c*h*b-f*p*u,this._w=c*h*u+f*p*b;break;case"YZX":this._x=f*h*u+c*p*b,this._y=c*p*u+f*h*b,this._z=c*h*b-f*p*u,this._w=c*h*u-f*p*b;break;case"XZY":this._x=f*h*u-c*p*b,this._y=c*p*u-f*h*b,this._z=c*h*b+f*p*u,this._w=c*h*u+f*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new k,Fh=new xn,mn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),ga.subVectors(this.max,er),hs.subVectors(e.a,er),us.subVectors(e.b,er),fs.subVectors(e.c,er),gi.subVectors(us,hs),vi.subVectors(fs,us),Li.subVectors(hs,fs);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Li.z,Li.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Li.y,Li.x,0];return!Al(t,hs,us,fs,ga)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,hs,us,fs,ga))?!1:(va.crossVectors(gi,vi),t=[va.x,va.y,va.z],Al(t,hs,us,fs,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new k,new k,new k,new k,new k,new k,new k,new k],Tn=new k,ma=new mn,hs=new k,us=new k,fs=new k,gi=new k,vi=new k,Li=new k,er=new k,ga=new k,va=new k,Ui=new k;function Al(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ui.fromArray(s,r);let o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var yd=new mn,tr=new k,Rl=new k,ln=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Rl)),this.expandByPoint(tr.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new k,Cl=new k,ba=new k,bi=new k,Pl=new k,xa=new k,Il=new k,Si=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Cl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=bi.dot(this.direction),l=-bi.dot(ba),c=bi.lengthSq(),h=Math.abs(1-a*a),u,f,p,b;if(h>0)if(u=a*l-o,f=a*o-l,b=r*h,u>=0)if(f>=-b)if(f<=b){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-b?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=b?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Cl).addScaledVector(ba,f),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,r){Pl.subVectors(t,e),xa.subVectors(n,e),Il.crossVectors(Pl,xa);let a=this.direction.dot(Il),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);let l=o*this.direction.dot(xa.crossVectors(bi,xa));if(l<0)return null;let c=o*this.direction.dot(Pl.cross(bi));if(c<0||l+c>a)return null;let h=-o*bi.dot(Il);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,f,p,b,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,p,b,x,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,p,b,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=b,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,b=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+b*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=b+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,b=c*h,x=c*u;t[0]=f+x*o,t[4]=b*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-b,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,b=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,b=o*h,x=o*u;t[0]=l*h,t[4]=b*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-b,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,b=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=b*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+b,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,p=a*c,b=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-b,t[2]=b*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Sd)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),xi.crossVectors(n,fn),xi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),xi.crossVectors(n,fn)),xi.normalize(),_a.crossVectors(fn,xi),i[0]=xi.x,i[4]=_a.x,i[8]=fn.x,i[1]=xi.y,i[5]=_a.y,i[9]=fn.y,i[2]=xi.z,i[6]=_a.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],b=n[2],x=n[6],m=n[10],d=n[14],E=n[3],M=n[7],_=n[11],L=n[15],P=i[0],D=i[4],z=i[8],w=i[12],y=i[1],F=i[5],V=i[9],Y=i[13],J=i[2],re=i[6],Q=i[10],me=i[14],Z=i[3],he=i[7],Me=i[11],Re=i[15];return r[0]=a*P+o*y+l*J+c*Z,r[4]=a*D+o*F+l*re+c*he,r[8]=a*z+o*V+l*Q+c*Me,r[12]=a*w+o*Y+l*me+c*Re,r[1]=h*P+u*y+f*J+p*Z,r[5]=h*D+u*F+f*re+p*he,r[9]=h*z+u*V+f*Q+p*Me,r[13]=h*w+u*Y+f*me+p*Re,r[2]=b*P+x*y+m*J+d*Z,r[6]=b*D+x*F+m*re+d*he,r[10]=b*z+x*V+m*Q+d*Me,r[14]=b*w+x*Y+m*me+d*Re,r[3]=E*P+M*y+_*J+L*Z,r[7]=E*D+M*F+_*re+L*he,r[11]=E*z+M*V+_*Q+L*Me,r[15]=E*w+M*Y+_*me+L*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],b=e[3],x=e[7],m=e[11],d=e[15];return b*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],b=e[12],x=e[13],m=e[14],d=e[15],E=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,M=b*f*c-h*m*c-b*l*p+a*m*p+h*l*d-a*f*d,_=h*x*c-b*u*c+b*o*p-a*x*p-h*o*d+a*u*d,L=b*u*l-h*x*l-b*o*f+a*x*f+h*o*m-a*u*m,P=t*E+n*M+i*_+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=E*D,e[1]=(x*f*r-u*m*r-x*i*p+n*m*p+u*i*d-n*f*d)*D,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*d+n*l*d)*D,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*D,e[4]=M*D,e[5]=(h*m*r-b*f*r+b*i*p-t*m*p-h*i*d+t*f*d)*D,e[6]=(b*l*r-a*m*r-b*i*c+t*m*c+a*i*d-t*l*d)*D,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*D,e[8]=_*D,e[9]=(b*u*r-h*x*r-b*n*p+t*x*p+h*n*d-t*u*d)*D,e[10]=(a*x*r-b*o*r+b*n*c-t*x*c-a*n*d+t*o*d)*D,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*D,e[12]=L*D,e[13]=(h*x*i-b*u*i+b*n*f-t*x*f-h*n*m+t*u*m)*D,e[14]=(b*o*i-a*x*i-b*n*l+t*x*l+a*n*m-t*o*m)*D,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,b=r*u,x=a*h,m=a*u,d=o*u,E=l*c,M=l*h,_=l*u,L=n.x,P=n.y,D=n.z;return i[0]=(1-(x+d))*L,i[1]=(p+_)*L,i[2]=(b-M)*L,i[3]=0,i[4]=(p-_)*P,i[5]=(1-(f+d))*P,i[6]=(m+E)*P,i[7]=0,i[8]=(b+M)*D,i[9]=(m-E)*D,i[10]=(1-(f+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ds.set(i[0],i[1],i[2]).length(),a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);let c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=zn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,b;if(o===zn)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ur)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=zn){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,p=(n+i)*h,b,x;if(o===zn)b=(a+r)*u,x=-2*u;else if(o===ur)b=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ds=new k,An=new je,Md=new k(0,0,0),Sd=new k(1,1,1),xi=new k,_a=new k,fn=new k,Oh=new je,Bh=new xn,Dn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wd=0,zh=new k,ps=new xn,Qn=new je,ya=new k,nr=new k,Ed=new k,Td=new xn,kh=new k(1,0,0),Hh=new k(0,1,0),Gh=new k(0,0,1),Vh={type:"added"},Ad={type:"removed"},ms={type:"childadded",child:null},Dl={type:"childremoved",child:null},Et=class s extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new k,t=new Dn,n=new xn,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new et}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(nr,ya,this.up):Qn.lookAt(ya,nr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Qn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ad),Dl.child=e,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Et.DEFAULT_UP=new k(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new k,$n=new k,Ll=new k,ei=new k,gs=new k,vs=new k,Wh=new k,Ul=new k,Nl=new k,Fl=new k,Ol=new ft,Bl=new ft,zl=new ft,Mi=class s{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rn.subVectors(i,t),$n.subVectors(n,t),Ll.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot($n),l=Rn.dot(Ll),c=$n.dot($n),h=$n.dot(Ll),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,b=(a*h-o*l)*f;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ol.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Ol.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),zl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ol,r.x),a.addScaledVector(Bl,r.y),a.addScaledVector(zl,r.z),a}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),$n.subVectors(e,t),Rn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Rn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;gs.subVectors(i,n),vs.subVectors(r,n),Ul.subVectors(e,n);let l=gs.dot(Ul),c=vs.dot(Ul);if(l<=0&&c<=0)return t.copy(n);Nl.subVectors(e,i);let h=gs.dot(Nl),u=vs.dot(Nl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gs,a);Fl.subVectors(e,r);let p=gs.dot(Fl),b=vs.dot(Fl);if(b>=0&&p<=b)return t.copy(r);let x=p*c-l*b;if(x<=0&&c>=0&&b<=0)return o=c/(c-b),t.copy(n).addScaledVector(vs,o);let m=h*b-p*u;if(m<=0&&u-h>=0&&p-b>=0)return Wh.subVectors(r,i),o=(u-h)/(u-h+(p-b)),t.copy(i).addScaledVector(Wh,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(gs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function kl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Sc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kl(a,r,e+1/3),this.g=kl(a,r,e),this.b=kl(a,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return it.fromWorkingColorSpace(Kt.copy(this),e),Math.round(st(Kt.r*255,0,255))*65536+Math.round(st(Kt.g*255,0,255))*256+Math.round(st(Kt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,r=Kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=At){it.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ma);let n=cr(_i.h,Ma.h,t),i=cr(_i.s,Ma.s,t),r=cr(_i.l,Ma.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new ze;ze.NAMES=Ju;var Rd=0,tn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Bi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ha,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gn=class extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ni=Cd();function Cd(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Pd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=st(s,-65504,65504),ni.floatView[0]=s;let e=ni.uint32View[0],t=e>>23&511;return ni.baseTable[t]+((e&8388607)>>ni.shiftTable[t])}function Id(s){let e=s>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[e]+(s&1023)]+ni.exponentTable[e],ni.floatView[0]}var Rs=class{static toHalfFloat(e){return Pd(e)}static fromHalfFloat(e){return Id(e)}},It=new k,Sa=new He,Dd=0,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}};var dr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ld=0,vn=new je,Hl=new Et,bs=new k,dn=new mn,ir=new mn,qt=new k,kt=class s extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?pr:dr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(dn.min,ir.min),dn.expandByPoint(qt),qt.addVectors(dn.max,ir.max),dn.expandByPoint(qt)):(dn.expandByPoint(ir.min),dn.expandByPoint(ir.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),qt.add(bs)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new k,l[z]=new k;let c=new k,h=new k,u=new k,f=new He,p=new He,b=new He,x=new k,m=new k;function d(z,w,y){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,w),b.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),b.sub(f);let F=1/(p.x*b.y-b.x*p.y);isFinite(F)&&(x.copy(h).multiplyScalar(b.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(F),o[z].add(x),o[w].add(x),o[y].add(x),l[z].add(m),l[w].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,w=E.length;z<w;++z){let y=E[z],F=y.start,V=y.count;for(let Y=F,J=F+V;Y<J;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let M=new k,_=new k,L=new k,P=new k;function D(z){L.fromBufferAttribute(i,z),P.copy(L);let w=o[z];M.copy(w),M.sub(L.multiplyScalar(L.dot(w))).normalize(),_.crossVectors(P,w);let F=_.dot(l[z])<0?-1:1;a.setXYZW(z,M.x,M.y,M.z,F)}for(let z=0,w=E.length;z<w;++z){let y=E[z],F=y.start,V=y.count;for(let Y=F,J=F+V;Y<J;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let b=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,b=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[b++]=c[p++]}return new Lt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new je,Ni=new Si,wa=new ln,qh=new k,Ea=new k,Ta=new k,Aa=new k,Gl=new k,Ra=new k,Yh=new k,Ca=new k,ht=class extends Et{constructor(e=new kt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Gl.fromBufferAttribute(u,e),a?Ra.addScaledVector(Gl,h):Ra.addScaledVector(Gl.sub(t),h))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(wa.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(wa,qh)===null||Ni.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Xh.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,x=f.length;b<x;b++){let m=f[b],d=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,L=M;_<L;_+=3){let P=o.getX(_),D=o.getX(_+1),z=o.getX(_+2);i=Pa(this,d,e,n,c,h,u,P,D,z),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let b=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=b,d=x;m<d;m+=3){let E=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);i=Pa(this,a,e,n,c,h,u,E,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let b=0,x=f.length;b<x;b++){let m=f[b],d=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,L=M;_<L;_+=3){let P=_,D=_+1,z=_+2;i=Pa(this,d,e,n,c,h,u,P,D,z),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let b=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=b,d=x;m<d;m+=3){let E=m,M=m+1,_=m+2;i=Pa(this,a,e,n,c,h,u,E,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Ud(s,e,t,n,i,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===In,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:s}}function Pa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ea),s.getVertexPosition(l,Ta),s.getVertexPosition(c,Aa);let h=Ud(s,e,t,n,Ea,Ta,Aa,Yh);if(h){let u=new k;Mi.getBarycoord(Yh,Ea,Ta,Aa,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,o,l,c,u,new He)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,u,new He)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Mi.getNormal(Ea,Ta,Aa,f.normal),h.face=f,h.barycoord=u}return h}var _n=class s extends kt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,i,a,2),b("x","z","y",1,-1,e,n,-t,i,a,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function b(x,m,d,E,M,_,L,P,D,z,w){let y=_/D,F=L/z,V=_/2,Y=L/2,J=P/2,re=D+1,Q=z+1,me=0,Z=0,he=new k;for(let Me=0;Me<Q;Me++){let Re=Me*F-Y;for(let Oe=0;Oe<re;Oe++){let Xe=Oe*y-V;he[x]=Xe*E,he[m]=Re*M,he[d]=J,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[d]=P>0?1:-1,h.push(he.x,he.y,he.z),u.push(Oe/D),u.push(1-Me/z),me+=1}}for(let Me=0;Me<z;Me++)for(let Re=0;Re<D;Re++){let Oe=f+Re+re*Me,Xe=f+Re+re*(Me+1),te=f+(Re+1)+re*(Me+1),ge=f+(Re+1)+re*Me;l.push(Oe,Xe,ge),l.push(Xe,te,ge),Z+=6}o.addGroup(p,Z,w),p+=Z,f+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ts(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){let e={};for(let t=0;t<s.length;t++){let n=ts(s[t]);for(let i in n)e[i]=n[i]}return e}function Nd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Tc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var rn={clone:ts,merge:$t},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_t=class extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},mr=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new k,jh=new He,Zh=new He,Dt=class extends mr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Zh),t.subVectors(Zh,jh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xs=-90,_s=1,qa=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dt(xs,_s,e,t);i.layers=this.layers,this.add(i);let r=new Dt(xs,_s,e,t);r.layers=this.layers,this.add(r);let a=new Dt(xs,_s,e,t);a.layers=this.layers,this.add(a);let o=new Dt(xs,_s,e,t);o.layers=this.layers,this.add(o);let l=new Dt(xs,_s,e,t);l.layers=this.layers,this.add(l);let c=new Dt(xs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},gr=class extends zt{constructor(e=[],t=Qi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _n(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ft});r.uniforms.tEquirect.value=t;let a=new ht(i,r),o=t.minFilter;return t.minFilter===yn&&(t.minFilter=Ct),new qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},wt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,b=.005;c.inputState.pinching&&f>p+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var vr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},br=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new k,Is=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Kh=new k,Jh=new ft,Qh=new ft,zd=new k,$h=new je,Ia=new k,Vl=new ln,eu=new je,Wl=new Si,xr=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zl,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vl.copy(this.boundingSphere),Vl.applyMatrix4(i),e.ray.intersectsSphere(Vl)!==!1&&(eu.copy(i).invert(),Wl.copy(e.ray).applyMatrix4(eu),!(this.boundingBox!==null&&Wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Jh.fromBufferAttribute(i.attributes.skinIndex,e),Qh.fromBufferAttribute(i.attributes.skinWeight,e),Kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Qh.getComponent(r);if(a!==0){let o=Jh.getComponent(r);$h.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zd.copy(Kh).applyMatrix4($h),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ds=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},kn=class extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ut,h=Ut,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tu=new je,kd=new je,_r=class s{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:kd;tu.multiplyMatrices(o,t[r]),tu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new kn(t,e,e,jt,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ds),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},wi=class extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new je,nu=new je,Da=[],iu=new mn,Hd=new je,sr=new ht,rr=new ln,yr=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),iu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(iu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),rr.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ys),nu.multiplyMatrices(n,ys),sr.matrixWorld=nu,sr.raycast(e,Da);for(let a=0,o=Da.length;a<o;a++){let l=Da[a];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kn(new Float32Array(i*this.count),i,this.count,zs,Qt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xl=new k,Gd=new k,Vd=new et,Bn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Xl.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vd.getNormalMatrix(e),i=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new ln,La=new k,Ls=class{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],b=i[9],x=i[10],m=i[11],d=i[12],E=i[13],M=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+h,m+b,_+E).normalize(),n[3].setComponents(l-a,f-h,m-b,_-E).normalize(),n[4].setComponents(l-o,f-u,m-x,_-M).normalize(),t===zn)n[5].setComponents(l+o,f+u,m+x,_+M).normalize();else if(t===ur)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(La.x=i.normal.x>0?e.max.x:e.min.x,La.y=i.normal.y>0?e.max.y:e.min.y,La.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ja=new k,Za=new k,su=new je,ar=new Si,Ua=new ln,ql=new k,ru=new k,Vi=class extends Et{constructor(e=new kt,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ja.fromBufferAttribute(t,i-1),Za.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(Za);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;su.copy(i).invert(),ar.copy(e.ray).applyMatrix4(su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let x=p,m=b-1;x<m;x+=c){let d=h.getX(x),E=h.getX(x+1),M=Na(this,e,ar,l,d,E,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(b-1),m=h.getX(p),d=Na(this,e,ar,l,x,m,b-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let x=p,m=b-1;x<m;x+=c){let d=Na(this,e,ar,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Na(this,e,ar,l,b-1,p,b-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Na(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(ja.fromBufferAttribute(o,i),Za.fromBufferAttribute(o,r),t.distanceSqToSegment(ja,Za,ql,ru)>n)return;ql.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:ru.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var au=new k,ou=new k,Mr=class extends Vi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)au.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+au.distanceTo(ou);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sr=class extends Vi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ns=class extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lu=new je,ec=new Si,Fa=new ln,Oa=new k,wr=class extends Et{constructor(e=new kt,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;lu.copy(i).invert(),ec.copy(e.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let b=f,x=p;b<x;b++){let m=c.getX(b);Oa.fromBufferAttribute(u,m),cu(Oa,m,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=f,x=p;b<x;b++)Oa.fromBufferAttribute(u,b),cu(Oa,b,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cu(s,e,t,n,i,r,a){let o=ec.distanceSqToPoint(s);if(o<t){let l=new k;ec.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Er=class extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wi=class extends zt{constructor(e,t,n=Ai,i,r,a,o=Ut,l=Ut,c,h=ws){if(h!==ws&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ei=class s extends kt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],b=0,x=[],m=n/2,d=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(p,2));function E(){let _=new k,L=new k,P=0,D=(t-e)/n;for(let z=0;z<=r;z++){let w=[],y=z/r,F=y*(t-e)+e;for(let V=0;V<=i;V++){let Y=V/i,J=Y*l+o,re=Math.sin(J),Q=Math.cos(J);L.x=F*re,L.y=-y*n+m,L.z=F*Q,u.push(L.x,L.y,L.z),_.set(re,D,Q).normalize(),f.push(_.x,_.y,_.z),p.push(Y,1-y),w.push(b++)}x.push(w)}for(let z=0;z<i;z++)for(let w=0;w<r;w++){let y=x[w][z],F=x[w+1][z],V=x[w+1][z+1],Y=x[w][z+1];(e>0||w!==0)&&(h.push(y,F,Y),P+=3),(t>0||w!==r-1)&&(h.push(F,V,Y),P+=3)}c.addGroup(d,P,0),d+=P}function M(_){let L=b,P=new He,D=new k,z=0,w=_===!0?e:t,y=_===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),b++;let F=b;for(let V=0;V<=i;V++){let J=V/i*l+o,re=Math.cos(J),Q=Math.sin(J);D.x=w*Q,D.y=m*y,D.z=w*re,u.push(D.x,D.y,D.z),f.push(0,y,0),P.x=re*.5+.5,P.y=Q*.5*y+.5,p.push(P.x,P.y),b++}for(let V=0;V<i;V++){let Y=L+V,J=F+V;_===!0?h.push(J,J+1,Y):h.push(J+1,J,Y),z+=3}c.addGroup(d,z,_===!0?1:2),d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ti=class s extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,p=[],b=[],x=[],m=[];for(let d=0;d<h;d++){let E=d*f-a;for(let M=0;M<c;M++){let _=M*u-r;b.push(_,-E,0),x.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let M=E+c*d,_=E+c*(d+1),L=E+1+c*(d+1),P=E+1+c*d;p.push(M,_,P),p.push(_,L,P)}this.setIndex(p),this.setAttribute("position",new yt(b,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Xi=class s extends kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new k,f=new k,p=[],b=[],x=[],m=[];for(let d=0;d<=n;d++){let E=[],M=d/n,_=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){let P=L/t;u.x=-e*Math.cos(i+P*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(i+P*r)*Math.sin(a+M*o),b.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(P+_,1-M),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let M=h[d][E+1],_=h[d][E],L=h[d+1][E],P=h[d+1][E+1];(d!==0||a>0)&&p.push(M,_,P),(d!==n-1||l<Math.PI)&&p.push(_,L,P)}this.setIndex(p),this.setAttribute("position",new yt(b,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tr=class extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ar=class extends tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ka=class extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ba(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Wd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xd(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Qu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ai=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qa=class extends ai{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jl:r=e,o=2*t-n;break;case Ql:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jl:a=e,l=2*n-t;break;case Ql:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,b=(n-t)/(i-t),x=b*b,m=x*b,d=-f*m+2*f*x-f*b,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*b+1,M=(-1-p)*m+(1.5+p)*x+.5*b,_=p*m-p*x;for(let L=0;L!==o;++L)r[L]=d*a[h+L]+E*a[c+L]+M*a[l+L]+_*a[u+L];return r}},$a=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},eo=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},cn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ki:t=this.InterpolantFactoryMethodDiscrete;break;case Hi:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ki;case this.InterpolantFactoryMethodLinear:return Hi;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Wd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===za,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let b=0;b!==n;++b){let x=t[u+b];if(x!==t[f+b]||x!==t[p+b]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Hi;var oi=class extends cn{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=ki;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends cn{constructor(e,t,n,i){super(e,t,n,i)}};Rr.prototype.ValueTypeName="color";var Hn=class extends cn{constructor(e,t,n,i){super(e,t,n,i)}};Hn.prototype.ValueTypeName="number";var to=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gn=class extends cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion";Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends cn{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=ki;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends cn{constructor(e,t,n,i){super(e,t,n,i)}};Vn.prototype.ValueTypeName="vector";var Cr=class{constructor(e="",t=-1,n=[],i=Fu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Yd(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Xd(l);l=hu(l,1,h),c=hu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Hn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,b,x){if(p.length!==0){let m=[],d=[];Qu(p,m,d,b),m.length!==0&&x.push(new u(f,m,d))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},b;for(b=0;b<f.length;b++)if(f[b].morphTargets)for(let x=0;x<f[b].morphTargets.length;x++)p[f[b].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let E=0;E!==f[b].morphTargets.length;++E){let M=f[b];m.push(M.time),d.push(M.morphTarget===x?1:0)}i.push(new Hn(".morphTargetInfluence["+x+"]",m,d))}l=p.length*a}else{let p=".bones["+t[u].name+"]";n(Vn,p+".position",f,"pos",i),n(Gn,p+".quaternion",f,"rot",i),n(Vn,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function qd(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hn;case"vector":case"vector2":case"vector3":case"vector4":return Vn;case"color":return Rr;case"quaternion":return Gn;case"bool":case"boolean":return oi;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Yd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qd(s.type);if(s.times===void 0){let t=[],n=[];Qu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},no=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],b=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null}}},$u=new no,Ln=class{constructor(e){this.manager=e!==void 0?e:$u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ln.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},tc=class extends Error{constructor(e,t){super(e),this.response=t}},qi=class extends Ln{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:i});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ti[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,b=p!==0,x=0,m=new ReadableStream({start(d){E();function E(){u.read().then(({done:M,value:_})=>{if(M)d.close();else{x+=_.byteLength;let L=new ProgressEvent("progress",{lengthComputable:b,loaded:x,total:p});for(let P=0,D=h.length;P<D;P++){let z=h[P];z.onProgress&&z.onProgress(L)}d.enqueue(_),E()}},M=>{d.error(M)})}}});return new Response(m)}else throw new tc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(b=>p.decode(b))}}}).then(c=>{ii.add(e,c);let h=ti[e];delete ti[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=ti[e];if(h===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var io=class extends Ln{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ii.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Es("img");function l(){h(),ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Pr=class extends Ln{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new kn,o=new qi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:bn,a.wrapT=c.wrapT!==void 0?c.wrapT:bn,a.magFilter=c.magFilter!==void 0?c.magFilter:Ct,a.minFilter=c.minFilter!==void 0?c.minFilter:Ct,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=yn),c.mipmapCount===1&&(a.minFilter=Ct),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},Yi=class extends Ln{constructor(e){super(e)}load(e,t,n,i){let r=new zt,a=new io(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ji=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ir=class extends ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yl=new je,uu=new k,fu=new k,Dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),Yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nc=class extends Dr{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Gi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lr=class extends ji{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},du=new je,or=new k,jl=new k,ic=class extends Dr{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),i.makeTranslation(-or.x,-or.y,-or.z),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du)}},Zi=class extends ji{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ic}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ci=class extends mr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sc=class extends Dr{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new sc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ur=class extends Ln{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ii.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(e,l),r.manager.itemStart(e)}};var so=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Nr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pu(){return performance.now()}var Ac="\\[\\]\\.:\\/",jd=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",Zd="[^"+Ac.replace("\\.","")+"]",Kd=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Jd=/(WCOD+)?/.source.replace("WCOD",Zd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),$d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),ep=new RegExp("^"+Kd+Jd+Qd+$d+"$"),tp=["material","materials","bones","map"],rc=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jd,"")}static parseTrackName(e){let t=ep.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);tp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=rc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gb=new Float32Array(1);var mu=new je,Fr=class{constructor(e,t,n=0,i=1/0){this.ray=new Si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,n=[]){return ac(e,this,n,t),n.sort(gu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ac(e[i],this,n,t);return n.sort(gu),n}};function gu(s,e){return s.distance-e.distance}function ac(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)ac(r[a],e,t,!0)}}function Cc(s,e,t,n){let i=np(n);switch(t){case gc:return s*e;case zs:return s*e/i.components*i.byteLength;case Ao:return s*e/i.components*i.byteLength;case bc:return s*e*2/i.components*i.byteLength;case Ro:return s*e*2/i.components*i.byteLength;case vc:return s*e*3/i.components*i.byteLength;case jt:return s*e*4/i.components*i.byteLength;case Co:return s*e*4/i.components*i.byteLength;case Hr:case Gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Io:case Lo:return Math.max(s,16)*Math.max(e,8)/4;case Po:case Do:return Math.max(s,8)*Math.max(e,8)/2;case Uo:case No:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xr:case Jo:case Qo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xc:case $o:return Math.ceil(s/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function np(s){switch(s){case sn:case dc:return{byteLength:1,components:1};case Bs:case pc:case Rt:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case Ai:case wo:case Qt:return{byteLength:4,components:1};case mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");function wf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sp(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,b)=>p.start-b.start);let f=0;for(let p=1;p<u.length;p++){let b=u[f],x=u[p];x.start<=b.start+b.count+1?b.count=Math.max(b.count,x.start+x.count-b.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,b=u.length;p<b;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:rp,alphahash_pars_fragment:ap,alphamap_fragment:op,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:fp,batching_pars_vertex:dp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:vp,iridescence_fragment:bp,bumpmap_pars_fragment:xp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Dp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:zp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Jp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Kp,lights_toon_fragment:Qp,lights_toon_pars_fragment:$p,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:fm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:vm,morphcolor_vertex:bm,morphnormal_vertex:xm,morphtarget_pars_vertex:_m,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:wm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Im,opaque_fragment:Dm,packing:Lm,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Hm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:jm,specularmap_pars_fragment:Zm,tonemapping_fragment:Km,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:$m,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:ag,backgroundCube_frag:og,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:fg,distanceRGBA_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:bg,meshbasic_frag:xg,meshlambert_vert:_g,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:wg,meshnormal_frag:Eg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Lg,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:Fg,sprite_frag:Og},we={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Xn={basic:{uniforms:$t([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:$t([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:$t([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:$t([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:$t([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:$t([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:$t([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:$t([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:$t([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:$t([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:$t([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:$t([we.common,we.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:$t([we.lights,we.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Xn.physical={uniforms:$t([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var il={r:0,b:0,g:0},ns=new Dn,Bg=new je;function zg(s,e,t,n,i,r,a){let o=new ze(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function b(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function x(M){let _=!1,L=b(M);L===null?d(o,l):L&&L.isColor&&(d(L,1),_=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,_){let L=b(_);L&&(L.isCubeTexture||L.mapping===kr)?(h===void 0&&(h=new ht(new _n(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:ts(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(ns)),h.material.toneMapped=it.getTransfer(L.colorSpace)!==mt,(u!==L||f!==L.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=L,f=L.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new ht(new Ti(2,2),new _t({name:"BackgroundMaterial",uniforms:ts(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(L.colorSpace)!==mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,_){M.getRGB(il,Tc(s)),n.buffers.color.setClear(il.r,il.g,il.b,_,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:x,addToRenderList:m,dispose:E}}function kg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,F,V,Y,J){let re=!1,Q=u(Y,V,F);r!==Q&&(r=Q,c(r.object)),re=p(y,Y,V,J),re&&b(y,Y,V,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,_(y,F,V,Y),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,F,V){let Y=V.wireframe===!0,J=n[y.id];J===void 0&&(J={},n[y.id]=J);let re=J[F.id];re===void 0&&(re={},J[F.id]=re);let Q=re[Y];return Q===void 0&&(Q=f(l()),re[Y]=Q),Q}function f(y){let F=[],V=[],Y=[];for(let J=0;J<t;J++)F[J]=0,V[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:Y,object:y,attributes:{},index:null}}function p(y,F,V,Y){let J=r.attributes,re=F.attributes,Q=0,me=V.getAttributes();for(let Z in me)if(me[Z].location>=0){let Me=J[Z],Re=re[Z];if(Re===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),Me===void 0||Me.attribute!==Re||Re&&Me.data!==Re.data)return!0;Q++}return r.attributesNum!==Q||r.index!==Y}function b(y,F,V,Y){let J={},re=F.attributes,Q=0,me=V.getAttributes();for(let Z in me)if(me[Z].location>=0){let Me=re[Z];Me===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));let Re={};Re.attribute=Me,Me&&Me.data&&(Re.data=Me.data),J[Z]=Re,Q++}r.attributes=J,r.attributesNum=Q,r.index=Y}function x(){let y=r.newAttributes;for(let F=0,V=y.length;F<V;F++)y[F]=0}function m(y){d(y,0)}function d(y,F){let V=r.newAttributes,Y=r.enabledAttributes,J=r.attributeDivisors;V[y]=1,Y[y]===0&&(s.enableVertexAttribArray(y),Y[y]=1),J[y]!==F&&(s.vertexAttribDivisor(y,F),J[y]=F)}function E(){let y=r.newAttributes,F=r.enabledAttributes;for(let V=0,Y=F.length;V<Y;V++)F[V]!==y[V]&&(s.disableVertexAttribArray(V),F[V]=0)}function M(y,F,V,Y,J,re,Q){Q===!0?s.vertexAttribIPointer(y,F,V,J,re):s.vertexAttribPointer(y,F,V,Y,J,re)}function _(y,F,V,Y){x();let J=Y.attributes,re=V.getAttributes(),Q=F.defaultAttributeValues;for(let me in re){let Z=re[me];if(Z.location>=0){let he=J[me];if(he===void 0&&(me==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),me==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){let Me=he.normalized,Re=he.itemSize,Oe=e.get(he);if(Oe===void 0)continue;let Xe=Oe.buffer,te=Oe.type,ge=Oe.bytesPerElement,ve=te===s.INT||te===s.UNSIGNED_INT||he.gpuType===wo;if(he.isInterleavedBufferAttribute){let be=he.data,Ae=be.stride,We=he.offset;if(be.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)d(Z.location+De,be.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let De=0;De<Z.locationSize;De++)m(Z.location+De);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let De=0;De<Z.locationSize;De++)M(Z.location+De,Re/Z.locationSize,te,Me,Ae*ge,(We+Re/Z.locationSize*De)*ge,ve)}else{if(he.isInstancedBufferAttribute){for(let be=0;be<Z.locationSize;be++)d(Z.location+be,he.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<Z.locationSize;be++)m(Z.location+be);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let be=0;be<Z.locationSize;be++)M(Z.location+be,Re/Z.locationSize,te,Me,Re*ge,Re/Z.locationSize*be*ge,ve)}}else if(Q!==void 0){let Me=Q[me];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(Z.location,Me);break;case 3:s.vertexAttrib3fv(Z.location,Me);break;case 4:s.vertexAttrib4fv(Z.location,Me);break;default:s.vertexAttrib1fv(Z.location,Me)}}}}E()}function L(){z();for(let y in n){let F=n[y];for(let V in F){let Y=F[V];for(let J in Y)h(Y[J].object),delete Y[J];delete F[V]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;let F=n[y.id];for(let V in F){let Y=F[V];for(let J in Y)h(Y[J].object),delete Y[J];delete F[V]}delete n[y.id]}function D(y){for(let F in n){let V=n[F];if(V[y.id]===void 0)continue;let Y=V[y.id];for(let J in Y)h(Y[J].object),delete Y[J];delete V[y.id]}}function z(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:z,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Hg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let b=0;b<u;b++)p+=h[b];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let b=0;b<c.length;b++)a(c[b],h[b],f[b]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let b=0;for(let x=0;x<u;x++)b+=h[x]*f[x];t.update(b,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==jt&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let z=D===Rt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==sn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Qt&&!z)}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=b>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:b,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:L,maxSamples:P}}function Vg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Bn,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let b=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||b===null||b.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,M=E*4,_=d.clippingState||null;l.value=_,_=h(b,f,M,p);for(let L=0;L!==M;++L)_[L]=t[L];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,b){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,b!==!0||m===null){let d=p+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Wg(s){let e=new WeakMap;function t(a,o){return o===yo?a.mapping=Qi:o===Mo&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===yo||o===Mo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ya(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Gs=4,ef=[.125,.215,.35,.446,.526,.582],rs=20,Pc=new ci,tf=new ze,Ic=null,Dc=0,Lc=0,Uc=!1,ss=(1+Math.sqrt(5))/2,Hs=1/ss,nf=[new k(-ss,Hs,0),new k(ss,Hs,0),new k(-Hs,0,ss),new k(Hs,0,ss),new k(0,ss,-Hs),new k(0,ss,Hs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Xg=new k,Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Xg}=r;Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Dc,Lc),this._renderer.xr.enabled=Uc,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Rt,format:jt,colorSpace:Nt,depthBuffer:!1},i=sf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qg(r)),this._blurMaterial=Yg(r,e,t)}return i}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,i,r){let l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(tf),u.toneMapping=ui,u.autoClear=!1;let b=new gn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new ht(new _n,b),m=!1,d=e.background;d?d.isColor&&(b.color.copy(d),e.background=null,m=!0):(b.color.copy(tf),m=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let _=this._cubeSize;sl(i,M*_,E>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(x,l),u.render(e,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Qi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nf[(i-r-1)%nf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rs-1),x=r/b,m=isFinite(r)?1+Math.floor(h*x):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let d=[],E=0;for(let D=0;D<rs;++D){let z=D/x,w=Math.exp(-z*z/2);d.push(w),D===0?E+=w:D<m&&(E+=2*w)}for(let D=0;D<d.length;D++)d[D]=d[D]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=b,f.mipInt.value=M-n;let _=this._sizeLods[i],L=3*_*(i>M-Gs?i-M+Gs:0),P=4*(this._cubeSize-_);sl(t,L,P,3*_,2*_),l.setRenderTarget(t),l.render(u,Pc)}};function qg(s){let e=[],t=[],n=[],i=s,r=s-Gs+1+ef.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Gs?l=ef[a-s+Gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,b=6,x=3,m=2,d=1,E=new Float32Array(x*b*p),M=new Float32Array(m*b*p),_=new Float32Array(d*b*p);for(let P=0;P<p;P++){let D=P%3*2/3-1,z=P>2?0:-1,w=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];E.set(w,x*b*P),M.set(f,m*b*P);let y=[P,P,P,P,P,P];_.set(y,d*b*P)}let L=new kt;L.setAttribute("position",new Lt(E,x)),L.setAttribute("uv",new Lt(M,m)),L.setAttribute("faceIndex",new Lt(_,d)),e.push(L),i>Gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sf(s,e,t){let n=new Pt(s,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yg(s,e,t){let n=new Float32Array(rs),i=new k(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function rf(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function af(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function jg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===yo||l===Mo,h=l===Qi||l===$i;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ws(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ws(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kg(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let b in f.attributes)e.remove(f.attributes[b]);f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,b=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let M=0,_=E.length;M<_;M+=3){let L=E[M+0],P=E[M+1],D=E[M+2];f.push(L,P,P,D,D,L)}}else if(b!==void 0){let E=b.array;x=b.version;for(let M=0,_=E.length/3-1;M<_;M+=3){let L=M+0,P=M+1,D=M+2;f.push(L,P,P,D,D,L)}}else return;let m=new(Ec(f)?pr:dr)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Jg(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,b){b!==0&&(s.drawElementsInstanced(n,p,r,f*a,b),t.update(p,n,b))}function h(f,p,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,b);let m=0;for(let d=0;d<b;d++)m+=p[d];t.update(m,n,1)}function u(f,p,b,x){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,b);let d=0;for(let E=0;E<b;E++)d+=p[E]*x[E];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $g(s,e,t){let n=new WeakMap,i=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let w=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;p===!0&&(M=1),b===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let P=new Float32Array(_*L*4*u),D=new fr(P,_,L,u);D.type=Qt,D.needsUpdate=!0;let z=M*4;for(let y=0;y<u;y++){let F=m[y],V=d[y],Y=E[y],J=_*L*4*y;for(let re=0;re<F.count;re++){let Q=re*z;p===!0&&(i.fromBufferAttribute(F,re),P[J+Q+0]=i.x,P[J+Q+1]=i.y,P[J+Q+2]=i.z,P[J+Q+3]=0),b===!0&&(i.fromBufferAttribute(V,re),P[J+Q+4]=i.x,P[J+Q+5]=i.y,P[J+Q+6]=i.z,P[J+Q+7]=0),x===!0&&(i.fromBufferAttribute(Y,re),P[J+Q+8]=i.x,P[J+Q+9]=i.y,P[J+Q+10]=i.z,P[J+Q+11]=Y.itemSize===4?i.w:1)}}f={count:u,texture:D,size:new He(_,L)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let b=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function e0(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ef=new zt,of=new Wi(1,1),Tf=new fr,Af=new Xa,Rf=new gr,lf=[],cf=[],hf=new Float32Array(16),uf=new Float32Array(9),ff=new Float32Array(4);function Xs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=lf[i];if(r===void 0&&(r=new Float32Array(i),lf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ol(s,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function t0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function n0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function i0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function s0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function r0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;ff.set(n),s.uniformMatrix2fv(this.addr,!1,ff),Gt(t,n)}}function a0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;uf.set(n),s.uniformMatrix3fv(this.addr,!1,uf),Gt(t,n)}}function o0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;hf.set(n),s.uniformMatrix4fv(this.addr,!1,hf),Gt(t,n)}}function l0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function c0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function h0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function u0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function f0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function d0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function p0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function m0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function g0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(of.compareFunction=yc,r=of):r=Ef,t.setTexture2D(e||r,i)}function v0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Af,i)}function b0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rf,i)}function x0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tf,i)}function _0(s){switch(s){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(s,e){s.uniform1fv(this.addr,e)}function M0(s,e){let t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function S0(s,e){let t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function w0(s,e){let t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function E0(s,e){let t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function T0(s,e){let t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function A0(s,e){let t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function R0(s,e){s.uniform1iv(this.addr,e)}function C0(s,e){s.uniform2iv(this.addr,e)}function P0(s,e){s.uniform3iv(this.addr,e)}function I0(s,e){s.uniform4iv(this.addr,e)}function D0(s,e){s.uniform1uiv(this.addr,e)}function L0(s,e){s.uniform2uiv(this.addr,e)}function U0(s,e){s.uniform3uiv(this.addr,e)}function N0(s,e){s.uniform4uiv(this.addr,e)}function F0(s,e,t){let n=this.cache,i=e.length,r=ol(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ef,r[a])}function O0(s,e,t){let n=this.cache,i=e.length,r=ol(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Af,r[a])}function B0(s,e,t){let n=this.cache,i=e.length,r=ol(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rf,r[a])}function z0(s,e,t){let n=this.cache,i=e.length,r=ol(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Tf,r[a])}function k0(s){switch(s){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return w0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return L0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}},Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}},Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function df(s,e){s.seq.push(e),s.map[e.id]=e}function H0(s,e,t){let n=s.name,i=n.length;for(Nc.lastIndex=0;;){let r=Nc.exec(n),a=Nc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){df(t,c===void 0?new Fc(o,s,e):new Oc(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Bc(o),df(t,u)),t=u}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);H0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function pf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var G0=37297,V0=0;function W0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var mf=new et;function X0(s){it._getMatrix(mf,it.workingColorSpace,s);let e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case hr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+W0(s.getShaderSource(e),a)}else return i}function q0(s,e){let t=X0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Y0(s,e){let t;switch(e){case mo:t="Linear";break;case go:t="Reinhard";break;case vo:t="Cineon";break;case bo:t="ACESFilmic";break;case Fs:t="AgX";break;case _o:t="Neutral";break;case xo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rl=new k;function j0(){it.getLuminanceCoefficients(rl);let s=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function K0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function jr(s){return s!==""}function vf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(s){return s.replace(Q0,ev)}var $0=new Map;function ev(s,e){let t=nt[e];if(t===void 0){let n=$0.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zc(t)}var tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(s){return s.replace(tv,nv)}function nv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _f(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case $i:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===$i&&(e="ENVMAP_MODE_REFRACTION"),e}function av(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lu:e="ENVMAP_BLENDING_MIX";break;case Uu:e="ENVMAP_BLENDING_ADD";break}return e}function ov(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=iv(t),c=sv(t),h=rv(t),u=av(t),f=ov(t),p=Z0(t),b=K0(r),x=i.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(jr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(jr).join(`
`),d.length>0&&(d+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),d=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?nt.tonemapping_pars_fragment:"",t.toneMapping!==ui?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,q0("linearToOutputTexel",t.outputColorSpace),j0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),a=zc(a),a=vf(a,t),a=bf(a,t),o=zc(o),o=vf(o,t),o=bf(o,t),a=xf(a),o=xf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=E+m+a,_=E+d+o,L=pf(i,i.VERTEX_SHADER,M),P=pf(i,i.FRAGMENT_SHADER,_);i.attachShader(x,L),i.attachShader(x,P),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(F){if(s.debug.checkShaderErrors){let V=i.getProgramInfoLog(x).trim(),Y=i.getShaderInfoLog(L).trim(),J=i.getShaderInfoLog(P).trim(),re=!0,Q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,P);else{let me=gf(i,L,"vertex"),Z=gf(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+me+`
`+Z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Y===""||J==="")&&(Q=!1);Q&&(F.diagnostics={runnable:re,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:J,prefix:d}})}i.deleteShader(L),i.deleteShader(P),z=new Vs(i,x),w=J0(i,x)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,G0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}var cv=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}};function hv(s,e,t,n,i,r,a){let o=new As,l=new kc,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,F,V,Y){let J=V.fog,re=Y.geometry,Q=w.isMeshStandardMaterial?V.environment:null,me=(w.isMeshStandardMaterial?t:e).get(w.envMap||Q),Z=me&&me.mapping===kr?me.image.height:null,he=b[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Me=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Re=Me!==void 0?Me.length:0,Oe=0;re.morphAttributes.position!==void 0&&(Oe=1),re.morphAttributes.normal!==void 0&&(Oe=2),re.morphAttributes.color!==void 0&&(Oe=3);let Xe,te,ge,ve;if(he){let dt=Xn[he];Xe=dt.vertexShader,te=dt.fragmentShader}else Xe=w.vertexShader,te=w.fragmentShader,l.update(w),ge=l.getVertexShaderID(w),ve=l.getFragmentShaderID(w);let be=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),We=Y.isInstancedMesh===!0,De=Y.isBatchedMesh===!0,ct=!!w.map,lt=!!w.matcap,Ze=!!me,O=!!w.aoMap,Mt=!!w.lightMap,tt=!!w.bumpMap,$e=!!w.normalMap,Be=!!w.displacementMap,at=!!w.emissiveMap,Ie=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,q=w.clearcoat>0,se=w.dispersion>0,ce=w.iridescence>0,ie=w.sheen>0,Le=w.transmission>0,xe=S&&!!w.anisotropyMap,Ce=q&&!!w.clearcoatMap,ke=q&&!!w.clearcoatNormalMap,de=q&&!!w.clearcoatRoughnessMap,Pe=ce&&!!w.iridescenceMap,H=ce&&!!w.iridescenceThicknessMap,$=ie&&!!w.sheenColorMap,ne=ie&&!!w.sheenRoughnessMap,ye=!!w.specularMap,fe=!!w.specularColorMap,Se=!!w.specularIntensityMap,B=Le&&!!w.transmissionMap,j=Le&&!!w.thicknessMap,K=!!w.gradientMap,le=!!w.alphaMap,Ee=w.alphaTest>0,Te=!!w.alphaHash,Je=!!w.extensions,St=ui;w.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(St=s.toneMapping);let Wt={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:Xe,fragmentShader:te,defines:w.defines,customVertexShaderID:ge,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:De,batchingColor:De&&Y._colorsTexture!==null,instancing:We,instancingColor:We&&Y.instanceColor!==null,instancingMorph:We&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Nt,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:lt,envMap:Ze,envMapMode:Ze&&me.mapping,envMapCubeUVHeight:Z,aoMap:O,lightMap:Mt,bumpMap:tt,normalMap:$e,displacementMap:f&&Be,emissiveMap:at,normalMapObjectSpace:$e&&w.normalMapType===zu,normalMapTangentSpace:$e&&w.normalMapType===nl,metalnessMap:Ie,roughnessMap:C,anisotropy:S,anisotropyMap:xe,clearcoat:q,clearcoatMap:Ce,clearcoatNormalMap:ke,clearcoatRoughnessMap:de,dispersion:se,iridescence:ce,iridescenceMap:Pe,iridescenceThicknessMap:H,sheen:ie,sheenColorMap:$,sheenRoughnessMap:ne,specularMap:ye,specularColorMap:fe,specularIntensityMap:Se,transmission:Le,transmissionMap:B,thicknessMap:j,gradientMap:K,opaque:w.transparent===!1&&w.blending===Bi&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:Ee,alphaHash:Te,combine:w.combine,mapUv:ct&&x(w.map.channel),aoMapUv:O&&x(w.aoMap.channel),lightMapUv:Mt&&x(w.lightMap.channel),bumpMapUv:tt&&x(w.bumpMap.channel),normalMapUv:$e&&x(w.normalMap.channel),displacementMapUv:Be&&x(w.displacementMap.channel),emissiveMapUv:at&&x(w.emissiveMap.channel),metalnessMapUv:Ie&&x(w.metalnessMap.channel),roughnessMapUv:C&&x(w.roughnessMap.channel),anisotropyMapUv:xe&&x(w.anisotropyMap.channel),clearcoatMapUv:Ce&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:H&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:$&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(w.sheenRoughnessMap.channel),specularMapUv:ye&&x(w.specularMap.channel),specularColorMapUv:fe&&x(w.specularColorMap.channel),specularIntensityMapUv:Se&&x(w.specularIntensityMap.channel),transmissionMapUv:B&&x(w.transmissionMap.channel),thicknessMapUv:j&&x(w.thicknessMap.channel),alphaMapUv:le&&x(w.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&($e||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!re.attributes.uv&&(ct||le),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:Y.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===mt,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&it.getTransfer(w.emissiveMap.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hn,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function d(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)y.push(F),y.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(E(y,w),M(y,w),y.push(s.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function M(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let y=b[w.type],F;if(y){let V=Xn[y];F=rn.clone(V.uniforms)}else F=w.uniforms;return F}function L(w,y){let F;for(let V=0,Y=h.length;V<Y;V++){let J=h[V];if(J.cacheKey===y){F=J,++F.usedTimes;break}}return F===void 0&&(F=new lv(s,y,w,r),h.push(F)),F}function P(w){if(--w.usedTimes===0){let y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function D(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:L,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:z}}function uv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function fv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,b,x,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:b,renderOrder:u.renderOrder,z:x,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=b,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function o(u,f,p,b,x,m){let d=a(u,f,p,b,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,b,x,m){let d=a(u,f,p,b,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||fv),n.length>1&&n.sort(f||yf),i.length>1&&i.sort(f||yf)}function h(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function dv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Mf,s.set(n,[a])):i>=r.length?(a=new Mf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function pv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ze};break;case"SpotLight":t={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function mv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var gv=0;function vv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bv(s){let e=new pv,t=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new je,a=new je;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,b=0,x=0,m=0,d=0,E=0,M=0,_=0,L=0,P=0,D=0;c.sort(vv);for(let w=0,y=c.length;w<y;w++){let F=c[w],V=F.color,Y=F.intensity,J=F.distance,re=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=V.r*Y,u+=V.g*Y,f+=V.b*Y;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(F.sh.coefficients[Q],Y);D++}else if(F.isDirectionalLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let me=F.shadow,Z=t.get(F);Z.shadowIntensity=me.intensity,Z.shadowBias=me.bias,Z.shadowNormalBias=me.normalBias,Z.shadowRadius=me.radius,Z.shadowMapSize=me.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=F.shadow.matrix,E++}n.directional[p]=Q,p++}else if(F.isSpotLight){let Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(V).multiplyScalar(Y),Q.distance=J,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,n.spot[x]=Q;let me=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,me.updateMatrices(F),F.castShadow&&P++),n.spotLightMatrix[x]=me.matrix,F.castShadow){let Z=t.get(F);Z.shadowIntensity=me.intensity,Z.shadowBias=me.bias,Z.shadowNormalBias=me.normalBias,Z.shadowRadius=me.radius,Z.shadowMapSize=me.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=re,_++}x++}else if(F.isRectAreaLight){let Q=e.get(F);Q.color.copy(V).multiplyScalar(Y),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=Q,m++}else if(F.isPointLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let me=F.shadow,Z=t.get(F);Z.shadowIntensity=me.intensity,Z.shadowBias=me.bias,Z.shadowNormalBias=me.normalBias,Z.shadowRadius=me.radius,Z.shadowMapSize=me.mapSize,Z.shadowCameraNear=me.camera.near,Z.shadowCameraFar=me.camera.far,n.pointShadow[b]=Z,n.pointShadowMap[b]=re,n.pointShadowMatrix[b]=F.shadow.matrix,M++}n.point[b]=Q,b++}else if(F.isHemisphereLight){let Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar(Y),Q.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[d]=Q,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==p||z.pointLength!==b||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==E||z.numPointShadows!==M||z.numSpotShadows!==_||z.numSpotMaps!==L||z.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=b,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,z.directionalLength=p,z.pointLength=b,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=E,z.numPointShadows=M,z.numSpotShadows=_,z.numSpotMaps=L,z.numLightProbes=D,n.version=gv++)}function l(c,h){let u=0,f=0,p=0,b=0,x=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let M=c[d];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=n.rectArea[b];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Sf(s){let e=new bv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Sf(s),e.set(i,[o])):r>=a.length?(o=new Sf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`;function Mv(s,e,t){let n=new Ls,i=new He,r=new He,a=new ft,o=new Ka({depthPacking:Bu}),l=new Ja,c={},h=t.maxTextureSize,u={[In]:nn,[nn]:In,[hn]:hn},f=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_v,fragmentShader:yv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let b=new kt;b.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let d=this.type;this.render=function(P,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let w=s.getRenderTarget(),y=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Ft),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Y=d!==Wn&&this.type===Wn,J=d===Wn&&this.type!==Wn;for(let re=0,Q=P.length;re<Q;re++){let me=P[re],Z=me.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let he=Z.getFrameExtents();if(i.multiply(he),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,Z.mapSize.y=r.y)),Z.map===null||Y===!0||J===!0){let Re=this.type!==Wn?{minFilter:Ut,magFilter:Ut}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Pt(i.x,i.y,Re),Z.map.texture.name=me.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let Me=Z.getViewportCount();for(let Re=0;Re<Me;Re++){let Oe=Z.getViewport(Re);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),V.viewport(a),Z.updateMatrices(me,Re),n=Z.getFrustum(),_(D,z,Z.camera,me,this.type)}Z.isPointLightShadow!==!0&&this.type===Wn&&E(Z,z),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(w,y,F)};function E(P,D){let z=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pt(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(D,null,z,f,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(D,null,z,p,x,null)}function M(P,D,z,w){let y=null,F=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)y=F;else if(y=z.isPointLight===!0?l:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=y.uuid,Y=D.uuid,J=c[V];J===void 0&&(J={},c[V]=J);let re=J[Y];re===void 0&&(re=y.clone(),J[Y]=re,D.addEventListener("dispose",L)),y=re}if(y.visible=D.visible,y.wireframe=D.wireframe,w===Wn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:u[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=s.properties.get(y);V.light=z}return y}function _(P,D,z,w,y){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Wn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);let Y=e.update(P),J=P.material;if(Array.isArray(J)){let re=Y.groups;for(let Q=0,me=re.length;Q<me;Q++){let Z=re[Q],he=J[Z.materialIndex];if(he&&he.visible){let Me=M(P,he,w,y);P.onBeforeShadow(s,P,D,z,Y,Me,Z),s.renderBufferDirect(z,null,Y,Me,P,Z),P.onAfterShadow(s,P,D,z,Y,Me,Z)}}}else if(J.visible){let re=M(P,J,w,y);P.onBeforeShadow(s,P,D,z,Y,re,null),s.renderBufferDirect(z,null,Y,re,P,null),P.onAfterShadow(s,P,D,z,Y,re,null)}}let V=P.children;for(let Y=0,J=V.length;Y<J;Y++)_(V[Y],D,z,w,y)}function L(P){P.target.removeEventListener("dispose",L);for(let z in c){let w=c[z],y=P.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}var Sv={[oo]:lo,[co]:fo,[ho]:po,[zi]:uo,[lo]:oo,[fo]:co,[po]:ho,[uo]:zi};function wv(s,e){function t(){let B=!1,j=new ft,K=null,le=new ft(0,0,0,0);return{setMask:function(Ee){K!==Ee&&!B&&(s.colorMask(Ee,Ee,Ee,Ee),K=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,Te,Je,St,Wt){Wt===!0&&(Ee*=St,Te*=St,Je*=St),j.set(Ee,Te,Je,St),le.equals(j)===!1&&(s.clearColor(Ee,Te,Je,St),le.copy(j))},reset:function(){B=!1,K=null,le.set(-1,0,0,0)}}}function n(){let B=!1,j=!1,K=null,le=null,Ee=null;return{setReversed:function(Te){if(j!==Te){let Je=e.get("EXT_clip_control");Te?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),j=Te;let St=Ee;Ee=null,this.setClear(St)}},getReversed:function(){return j},setTest:function(Te){Te?be(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Te){K!==Te&&!B&&(s.depthMask(Te),K=Te)},setFunc:function(Te){if(j&&(Te=Sv[Te]),le!==Te){switch(Te){case oo:s.depthFunc(s.NEVER);break;case lo:s.depthFunc(s.ALWAYS);break;case co:s.depthFunc(s.LESS);break;case zi:s.depthFunc(s.LEQUAL);break;case ho:s.depthFunc(s.EQUAL);break;case uo:s.depthFunc(s.GEQUAL);break;case fo:s.depthFunc(s.GREATER);break;case po:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Te}},setLocked:function(Te){B=Te},setClear:function(Te){Ee!==Te&&(j&&(Te=1-Te),s.clearDepth(Te),Ee=Te)},reset:function(){B=!1,K=null,le=null,Ee=null,j=!1}}}function i(){let B=!1,j=null,K=null,le=null,Ee=null,Te=null,Je=null,St=null,Wt=null;return{setTest:function(dt){B||(dt?be(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(dt){j!==dt&&!B&&(s.stencilMask(dt),j=dt)},setFunc:function(dt,un,En){(K!==dt||le!==un||Ee!==En)&&(s.stencilFunc(dt,un,En),K=dt,le=un,Ee=En)},setOp:function(dt,un,En){(Te!==dt||Je!==un||St!==En)&&(s.stencilOp(dt,un,En),Te=dt,Je=un,St=En)},setLocked:function(dt){B=dt},setClear:function(dt){Wt!==dt&&(s.clearStencil(dt),Wt=dt)},reset:function(){B=!1,j=null,K=null,le=null,Ee=null,Te=null,Je=null,St=null,Wt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],b=null,x=!1,m=null,d=null,E=null,M=null,_=null,L=null,P=null,D=new ze(0,0,0),z=0,w=!1,y=null,F=null,V=null,Y=null,J=null,re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,me=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=me>=1):Z.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=me>=2);let he=null,Me={},Re=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Xe=new ft().fromArray(Re),te=new ft().fromArray(Oe);function ge(B,j,K,le){let Ee=new Uint8Array(4),Te=s.createTexture();s.bindTexture(B,Te),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<K;Je++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(j+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Te}let ve={};ve[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),be(s.DEPTH_TEST),a.setFunc(zi),tt(!1),$e(oc),be(s.CULL_FACE),O(Ft);function be(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Ae(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function We(B,j){return u[B]!==j?(s.bindFramebuffer(B,j),u[B]=j,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function De(B,j){let K=p,le=!1;if(B){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let Ee=B.textures;if(K.length!==Ee.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Je=Ee.length;Te<Je;Te++)K[Te]=s.COLOR_ATTACHMENT0+Te;K.length=Ee.length,le=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,le=!0);le&&s.drawBuffers(K)}function ct(B){return b!==B?(s.useProgram(B),b=B,!0):!1}let lt={[pn]:s.FUNC_ADD,[xu]:s.FUNC_SUBTRACT,[_u]:s.FUNC_REVERSE_SUBTRACT};lt[yu]=s.MIN,lt[Mu]=s.MAX;let Ze={[Ji]:s.ZERO,[Su]:s.ONE,[wu]:s.SRC_COLOR,[ka]:s.SRC_ALPHA,[Ru]:s.SRC_ALPHA_SATURATE,[zr]:s.DST_COLOR,[Br]:s.DST_ALPHA,[Eu]:s.ONE_MINUS_SRC_COLOR,[Ha]:s.ONE_MINUS_SRC_ALPHA,[Au]:s.ONE_MINUS_DST_COLOR,[Tu]:s.ONE_MINUS_DST_ALPHA,[Cu]:s.CONSTANT_COLOR,[Pu]:s.ONE_MINUS_CONSTANT_COLOR,[Iu]:s.CONSTANT_ALPHA,[Du]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,j,K,le,Ee,Te,Je,St,Wt,dt){if(B===Ft){x===!0&&(Ae(s.BLEND),x=!1);return}if(x===!1&&(be(s.BLEND),x=!0),B!==ao){if(B!==m||dt!==w){if((d!==pn||_!==pn)&&(s.blendEquation(s.FUNC_ADD),d=pn,_=pn),dt)switch(B){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.ONE,s.ONE);break;case cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,M=null,L=null,P=null,D.set(0,0,0),z=0,m=B,w=dt}return}Ee=Ee||j,Te=Te||K,Je=Je||le,(j!==d||Ee!==_)&&(s.blendEquationSeparate(lt[j],lt[Ee]),d=j,_=Ee),(K!==E||le!==M||Te!==L||Je!==P)&&(s.blendFuncSeparate(Ze[K],Ze[le],Ze[Te],Ze[Je]),E=K,M=le,L=Te,P=Je),(St.equals(D)===!1||Wt!==z)&&(s.blendColor(St.r,St.g,St.b,Wt),D.copy(St),z=Wt),m=B,w=!1}function Mt(B,j){B.side===hn?Ae(s.CULL_FACE):be(s.CULL_FACE);let K=B.side===nn;j&&(K=!K),tt(K),B.blending===Bi&&B.transparent===!1?O(Ft):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let le=B.stencilWrite;o.setTest(le),le&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),at(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(B){y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),y=B)}function $e(B){B!==vu?(be(s.CULL_FACE),B!==F&&(B===oc?s.cullFace(s.BACK):B===bu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),F=B}function Be(B){B!==V&&(Q&&s.lineWidth(B),V=B)}function at(B,j,K){B?(be(s.POLYGON_OFFSET_FILL),(Y!==j||J!==K)&&(s.polygonOffset(j,K),Y=j,J=K)):Ae(s.POLYGON_OFFSET_FILL)}function Ie(B){B?be(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function C(B){B===void 0&&(B=s.TEXTURE0+re-1),he!==B&&(s.activeTexture(B),he=B)}function S(B,j,K){K===void 0&&(he===null?K=s.TEXTURE0+re-1:K=he);let le=Me[K];le===void 0&&(le={type:void 0,texture:void 0},Me[K]=le),(le.type!==B||le.texture!==j)&&(he!==K&&(s.activeTexture(K),he=K),s.bindTexture(B,j||ve[B]),le.type=B,le.texture=j)}function q(){let B=Me[he];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(B){Xe.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Xe.copy(B))}function ne(B){te.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function ye(B,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let le=K.get(B);le===void 0&&(le=s.getUniformBlockIndex(j,B.name),K.set(B,le))}function fe(B,j){let le=c.get(j).get(B);l.get(j)!==le&&(s.uniformBlockBinding(j,le,B.__bindingPointIndex),l.set(j,le))}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},he=null,Me={},u={},f=new WeakMap,p=[],b=null,x=!1,m=null,d=null,E=null,M=null,_=null,L=null,P=null,D=new ze(0,0,0),z=0,w=!1,y=null,F=null,V=null,Y=null,J=null,Xe.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:be,disable:Ae,bindFramebuffer:We,drawBuffers:De,useProgram:ct,setBlending:O,setMaterial:Mt,setFlipSided:tt,setCullFace:$e,setLineWidth:Be,setPolygonOffset:at,setScissorTest:Ie,activeTexture:C,bindTexture:S,unbindTexture:q,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:Pe,texImage3D:H,updateUBOMapping:ye,uniformBlockBinding:fe,texStorage2D:ke,texStorage3D:de,texSubImage2D:ie,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ce,scissor:$,viewport:ne,reset:Se}}function Ev(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,S){return p?new OffscreenCanvas(C,S):Es("canvas")}function x(C,S,q){let se=1,ce=Ie(C);if((ce.width>q||ce.height>q)&&(se=q/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ie=Math.floor(se*ce.width),Le=Math.floor(se*ce.height);u===void 0&&(u=b(ie,Le));let xe=S?b(ie,Le):u;return xe.width=ie,xe.height=Le,xe.getContext("2d").drawImage(C,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+Le+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){s.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,q,se,ce=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=S;if(S===s.RED&&(q===s.FLOAT&&(ie=s.R32F),q===s.HALF_FLOAT&&(ie=s.R16F),q===s.UNSIGNED_BYTE&&(ie=s.R8)),S===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.R8UI),q===s.UNSIGNED_SHORT&&(ie=s.R16UI),q===s.UNSIGNED_INT&&(ie=s.R32UI),q===s.BYTE&&(ie=s.R8I),q===s.SHORT&&(ie=s.R16I),q===s.INT&&(ie=s.R32I)),S===s.RG&&(q===s.FLOAT&&(ie=s.RG32F),q===s.HALF_FLOAT&&(ie=s.RG16F),q===s.UNSIGNED_BYTE&&(ie=s.RG8)),S===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.RG8UI),q===s.UNSIGNED_SHORT&&(ie=s.RG16UI),q===s.UNSIGNED_INT&&(ie=s.RG32UI),q===s.BYTE&&(ie=s.RG8I),q===s.SHORT&&(ie=s.RG16I),q===s.INT&&(ie=s.RG32I)),S===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),q===s.UNSIGNED_INT&&(ie=s.RGB32UI),q===s.BYTE&&(ie=s.RGB8I),q===s.SHORT&&(ie=s.RGB16I),q===s.INT&&(ie=s.RGB32I)),S===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),q===s.UNSIGNED_INT&&(ie=s.RGBA32UI),q===s.BYTE&&(ie=s.RGBA8I),q===s.SHORT&&(ie=s.RGBA16I),q===s.INT&&(ie=s.RGBA32I)),S===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),S===s.RGBA){let Le=ce?hr:it.getTransfer(se);q===s.FLOAT&&(ie=s.RGBA32F),q===s.HALF_FLOAT&&(ie=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ie=Le===mt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(C,S){let q;return C?S===null||S===Ai||S===Ri?q=s.DEPTH24_STENCIL8:S===Qt?q=s.DEPTH32F_STENCIL8:S===Bs&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===Ri?q=s.DEPTH_COMPONENT24:S===Qt?q=s.DEPTH_COMPONENT32F:S===Bs&&(q=s.DEPTH_COMPONENT16),q}function L(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=C.target;S.removeEventListener("dispose",P),z(S),S.isVideoTexture&&h.delete(S)}function D(C){let S=C.target;S.removeEventListener("dispose",D),y(S)}function z(C){let S=n.get(C);if(S.__webglInit===void 0)return;let q=C.source,se=f.get(q);if(se){let ce=se[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&w(C),Object.keys(se).length===0&&f.delete(q)}n.remove(C)}function w(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let q=C.source,se=f.get(q);delete se[S.__cacheKey],a.memory.textures--}function y(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let ce=0;ce<S.__webglFramebuffer[se].length;ce++)s.deleteFramebuffer(S.__webglFramebuffer[se][ce]);else s.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)s.deleteFramebuffer(S.__webglFramebuffer[se]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let q=C.textures;for(let se=0,ce=q.length;se<ce;se++){let ie=n.get(q[se]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(q[se])}n.remove(C)}let F=0;function V(){F=0}function Y(){let C=F;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),F+=1,C}function J(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function re(C,S){let q=n.get(C);if(C.isVideoTexture&&Be(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,C,S);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+S)}function Q(C,S){let q=n.get(C);if(C.version>0&&q.__version!==C.version){te(q,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+S)}function me(C,S){let q=n.get(C);if(C.version>0&&q.__version!==C.version){te(q,C,S);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+S)}function Z(C,S){let q=n.get(C);if(C.version>0&&q.__version!==C.version){ge(q,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+S)}let he={[Yt]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Ss]:s.MIRRORED_REPEAT},Me={[Ut]:s.NEAREST,[So]:s.NEAREST_MIPMAP_NEAREST,[es]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[Os]:s.LINEAR_MIPMAP_NEAREST,[yn]:s.LINEAR_MIPMAP_LINEAR},Re={[ku]:s.NEVER,[qu]:s.ALWAYS,[Hu]:s.LESS,[yc]:s.LEQUAL,[Gu]:s.EQUAL,[Xu]:s.GEQUAL,[Vu]:s.GREATER,[Wu]:s.NOTEQUAL};function Oe(C,S){if(S.type===Qt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ct||S.magFilter===Os||S.magFilter===es||S.magFilter===yn||S.minFilter===Ct||S.minFilter===Os||S.minFilter===es||S.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,he[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,he[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,he[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Me[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Me[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==es&&S.minFilter!==yn||S.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));let se=S.source,ce=f.get(se);ce===void 0&&(ce={},f.set(se,ce));let ie=J(S);if(ie!==C.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ce[ie].usedTimes++;let Le=ce[C.__cacheKey];Le!==void 0&&(ce[C.__cacheKey].usedTimes--,Le.usedTimes===0&&w(S)),C.__cacheKey=ie,C.__webglTexture=ce[ie].texture}return q}function te(C,S,q){let se=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=s.TEXTURE_3D);let ce=Xe(C,S),ie=S.source;t.bindTexture(se,C.__webglTexture,s.TEXTURE0+q);let Le=n.get(ie);if(ie.version!==Le.__version||ce===!0){t.activeTexture(s.TEXTURE0+q);let xe=it.getPrimaries(it.workingColorSpace),Ce=S.colorSpace===Un?null:it.getPrimaries(S.colorSpace),ke=S.colorSpace===Un||xe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=x(S.image,!1,i.maxTextureSize);de=at(S,de);let Pe=r.convert(S.format,S.colorSpace),H=r.convert(S.type),$=M(S.internalFormat,Pe,H,S.colorSpace,S.isVideoTexture);Oe(se,S);let ne,ye=S.mipmaps,fe=S.isVideoTexture!==!0,Se=Le.__version===void 0||ce===!0,B=ie.dataReady,j=L(S,de);if(S.isDepthTexture)$=_(S.format===Ci,S.type),Se&&(fe?t.texStorage2D(s.TEXTURE_2D,1,$,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,$,de.width,de.height,0,Pe,H,null));else if(S.isDataTexture)if(ye.length>0){fe&&Se&&t.texStorage2D(s.TEXTURE_2D,j,$,ye[0].width,ye[0].height);for(let K=0,le=ye.length;K<le;K++)ne=ye[K],fe?B&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ne.width,ne.height,Pe,H,ne.data):t.texImage2D(s.TEXTURE_2D,K,$,ne.width,ne.height,0,Pe,H,ne.data);S.generateMipmaps=!1}else fe?(Se&&t.texStorage2D(s.TEXTURE_2D,j,$,de.width,de.height),B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de.width,de.height,Pe,H,de.data)):t.texImage2D(s.TEXTURE_2D,0,$,de.width,de.height,0,Pe,H,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){fe&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,j,$,ye[0].width,ye[0].height,de.depth);for(let K=0,le=ye.length;K<le;K++)if(ne=ye[K],S.format!==jt)if(Pe!==null)if(fe){if(B)if(S.layerUpdates.size>0){let Ee=Cc(ne.width,ne.height,S.format,S.type);for(let Te of S.layerUpdates){let Je=ne.data.subarray(Te*Ee/ne.data.BYTES_PER_ELEMENT,(Te+1)*Ee/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Te,ne.width,ne.height,1,Pe,Je)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,de.depth,Pe,ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,$,ne.width,ne.height,de.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,de.depth,Pe,H,ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,$,ne.width,ne.height,de.depth,0,Pe,H,ne.data)}else{fe&&Se&&t.texStorage2D(s.TEXTURE_2D,j,$,ye[0].width,ye[0].height);for(let K=0,le=ye.length;K<le;K++)ne=ye[K],S.format!==jt?Pe!==null?fe?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,ne.width,ne.height,Pe,ne.data):t.compressedTexImage2D(s.TEXTURE_2D,K,$,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?B&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ne.width,ne.height,Pe,H,ne.data):t.texImage2D(s.TEXTURE_2D,K,$,ne.width,ne.height,0,Pe,H,ne.data)}else if(S.isDataArrayTexture)if(fe){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,j,$,de.width,de.height,de.depth),B)if(S.layerUpdates.size>0){let K=Cc(de.width,de.height,S.format,S.type);for(let le of S.layerUpdates){let Ee=de.data.subarray(le*K/de.data.BYTES_PER_ELEMENT,(le+1)*K/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,Pe,H,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,H,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$,de.width,de.height,de.depth,0,Pe,H,de.data);else if(S.isData3DTexture)fe?(Se&&t.texStorage3D(s.TEXTURE_3D,j,$,de.width,de.height,de.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,H,de.data)):t.texImage3D(s.TEXTURE_3D,0,$,de.width,de.height,de.depth,0,Pe,H,de.data);else if(S.isFramebufferTexture){if(Se)if(fe)t.texStorage2D(s.TEXTURE_2D,j,$,de.width,de.height);else{let K=de.width,le=de.height;for(let Ee=0;Ee<j;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,$,K,le,0,Pe,H,null),K>>=1,le>>=1}}else if(ye.length>0){if(fe&&Se){let K=Ie(ye[0]);t.texStorage2D(s.TEXTURE_2D,j,$,K.width,K.height)}for(let K=0,le=ye.length;K<le;K++)ne=ye[K],fe?B&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Pe,H,ne):t.texImage2D(s.TEXTURE_2D,K,$,Pe,H,ne);S.generateMipmaps=!1}else if(fe){if(Se){let K=Ie(de);t.texStorage2D(s.TEXTURE_2D,j,$,K.width,K.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,H,de)}else t.texImage2D(s.TEXTURE_2D,0,$,Pe,H,de);m(S)&&d(se),Le.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ge(C,S,q){if(S.image.length!==6)return;let se=Xe(C,S),ce=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);let ie=n.get(ce);if(ce.version!==ie.__version||se===!0){t.activeTexture(s.TEXTURE0+q);let Le=it.getPrimaries(it.workingColorSpace),xe=S.colorSpace===Un?null:it.getPrimaries(S.colorSpace),Ce=S.colorSpace===Un||Le===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ke=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let le=0;le<6;le++)!ke&&!de?Pe[le]=x(S.image[le],!0,i.maxCubemapSize):Pe[le]=de?S.image[le].image:S.image[le],Pe[le]=at(S,Pe[le]);let H=Pe[0],$=r.convert(S.format,S.colorSpace),ne=r.convert(S.type),ye=M(S.internalFormat,$,ne,S.colorSpace),fe=S.isVideoTexture!==!0,Se=ie.__version===void 0||se===!0,B=ce.dataReady,j=L(S,H);Oe(s.TEXTURE_CUBE_MAP,S);let K;if(ke){fe&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,j,ye,H.width,H.height);for(let le=0;le<6;le++){K=Pe[le].mipmaps;for(let Ee=0;Ee<K.length;Ee++){let Te=K[Ee];S.format!==jt?$!==null?fe?B&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Te.width,Te.height,$,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,ye,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Te.width,Te.height,$,ne,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,ye,Te.width,Te.height,0,$,ne,Te.data)}}}else{if(K=S.mipmaps,fe&&Se){K.length>0&&j++;let le=Ie(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,j,ye,le.width,le.height)}for(let le=0;le<6;le++)if(de){fe?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe[le].width,Pe[le].height,$,ne,Pe[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Pe[le].width,Pe[le].height,0,$,ne,Pe[le].data);for(let Ee=0;Ee<K.length;Ee++){let Je=K[Ee].image[le].image;fe?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Je.width,Je.height,$,ne,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,ye,Je.width,Je.height,0,$,ne,Je.data)}}else{fe?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,$,ne,Pe[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,$,ne,Pe[le]);for(let Ee=0;Ee<K.length;Ee++){let Te=K[Ee];fe?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,$,ne,Te.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,ye,$,ne,Te.image[le])}}}m(S)&&d(s.TEXTURE_CUBE_MAP),ie.__version=ce.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,q,se,ce,ie){let Le=r.convert(q.format,q.colorSpace),xe=r.convert(q.type),Ce=M(q.internalFormat,Le,xe,q.colorSpace),ke=n.get(S),de=n.get(q);if(de.__renderTarget=S,!ke.__hasExternalTextures){let Pe=Math.max(1,S.width>>ie),H=Math.max(1,S.height>>ie);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,ie,Ce,Pe,H,S.depth,0,Le,xe,null):t.texImage2D(ce,ie,Ce,Pe,H,0,Le,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),$e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ce,de.__webglTexture,0,tt(S)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ce,de.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(C,S,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let se=S.depthTexture,ce=se&&se.isDepthTexture?se.type:null,ie=_(S.stencilBuffer,ce),Le=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=tt(S);$e(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,ie,S.width,S.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ie,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ie,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,C)}else{let se=S.textures;for(let ce=0;ce<se.length;ce++){let ie=se[ce],Le=r.convert(ie.format,ie.colorSpace),xe=r.convert(ie.type),Ce=M(ie.internalFormat,Le,xe,ie.colorSpace),ke=tt(S);q&&$e(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ce,S.width,S.height):$e(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,Ce,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re(S.depthTexture,0);let ce=se.__webglTexture,ie=tt(S);if(S.depthTexture.format===ws)$e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(S.depthTexture.format===Ci)$e(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function We(C){let S=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let se=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=se}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let se=C.texture.mipmaps;se&&se.length>0?Ae(S.__webglFramebuffer[0],C):Ae(S.__webglFramebuffer,C)}else if(q){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=s.createRenderbuffer(),be(S.__webglDepthbuffer[se],C,!1);else{let ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ie)}}else{let se=C.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),be(S.__webglDepthbuffer,C,!1);else{let ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(C,S,q){let se=n.get(C);S!==void 0&&ve(se.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&We(C)}function ct(C){let S=C.texture,q=n.get(C),se=n.get(S);C.addEventListener("dispose",D);let ce=C.textures,ie=C.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=S.version,a.memory.textures++),ie){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)q.__webglFramebuffer[xe][Ce]=s.createFramebuffer()}else q.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)q.__webglFramebuffer[xe]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Le)for(let xe=0,Ce=ce.length;xe<Ce;xe++){let ke=n.get(ce[xe]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&$e(C)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xe=0;xe<ce.length;xe++){let Ce=ce[xe];q.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[xe]);let ke=r.convert(Ce.format,Ce.colorSpace),de=r.convert(Ce.type),Pe=M(Ce.internalFormat,ke,de,Ce.colorSpace,C.isXRRenderTarget===!0),H=tt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,H,Pe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,q.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),be(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ve(q.__webglFramebuffer[xe][Ce],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else ve(q.__webglFramebuffer[xe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let xe=0,Ce=ce.length;xe<Ce;xe++){let ke=ce[xe],de=n.get(ke);t.bindTexture(s.TEXTURE_2D,de.__webglTexture),Oe(s.TEXTURE_2D,ke),ve(q.__webglFramebuffer,C,ke,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),m(ke)&&d(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,se.__webglTexture),Oe(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ve(q.__webglFramebuffer[Ce],C,S,s.COLOR_ATTACHMENT0,xe,Ce);else ve(q.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,xe,0);m(S)&&d(xe),t.unbindTexture()}C.depthBuffer&&We(C)}function lt(C){let S=C.textures;for(let q=0,se=S.length;q<se;q++){let ce=S[q];if(m(ce)){let ie=E(C),Le=n.get(ce).__webglTexture;t.bindTexture(ie,Le),d(ie),t.unbindTexture()}}}let Ze=[],O=[];function Mt(C){if(C.samples>0){if($e(C)===!1){let S=C.textures,q=C.width,se=C.height,ce=s.COLOR_BUFFER_BIT,ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(C),xe=S.length>1;if(xe)for(let ke=0;ke<S.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ce=C.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ke=0;ke<S.length;ke++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);let de=n.get(S[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,de,0)}s.blitFramebuffer(0,0,q,se,0,0,q,se,ce,s.NEAREST),l===!0&&(Ze.length=0,O.length=0,Ze.push(s.COLOR_ATTACHMENT0+ke),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ze.push(ie),O.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let ke=0;ke<S.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);let de=n.get(S[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,de,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function tt(C){return Math.min(i.maxSamples,C.samples)}function $e(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function at(C,S){let q=C.colorSpace,se=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Nt&&q!==Un&&(it.getTransfer(q)===mt?(se!==jt||ce!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function Ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.setTexture2D=re,this.setTexture2DArray=Q,this.setTexture3D=me,this.setTextureCube=Z,this.rebindTextures=De,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=$e}function Tv(s,e){function t(n,i=Un){let r,a=it.getTransfer(i);if(n===sn)return s.UNSIGNED_BYTE;if(n===Eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===To)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return s.BYTE;if(n===pc)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===wo)return s.INT;if(n===Ai)return s.UNSIGNED_INT;if(n===Qt)return s.FLOAT;if(n===Rt)return s.HALF_FLOAT;if(n===gc)return s.ALPHA;if(n===vc)return s.RGB;if(n===jt)return s.RGBA;if(n===ws)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===zs)return s.RED;if(n===Ao)return s.RED_INTEGER;if(n===bc)return s.RG;if(n===Ro)return s.RG_INTEGER;if(n===Co)return s.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Io||n===Do||n===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===No||n===Fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===No)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Zo||n===Ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===Jo||n===Qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===$o||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _t({vertexShader:Av,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends ri{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,b=null,x=new Gc,m=t.getContextAttributes(),d=null,E=null,M=[],_=[],L=new He,P=null,D=new Dt;D.viewport=new ft;let z=new Dt;z.viewport=new ft;let w=[D,z],y=new so,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=M[te];return ge===void 0&&(ge=new Cs,M[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=M[te];return ge===void 0&&(ge=new Cs,M[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=M[te];return ge===void 0&&(ge=new Cs,M[te]=ge),ge.getHandSpace()};function Y(te){let ge=_.indexOf(te.inputSource);if(ge===-1)return;let ve=M[ge];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||a),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",re);for(let te=0;te<M.length;te++){let ge=_[te];ge!==null&&(_[te]=null,M[te].disconnect(ge))}F=null,V=null,x.reset(),e.setRenderTarget(d),p=null,f=null,u=null,i=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",J),i.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,be=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?Ci:ws,be=m.stencil?Ri:Ai);let We={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Pt(f.textureWidth,f.textureHeight,{format:jt,type:sn,depthTexture:new Wi(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Pt(p.framebufferWidth,p.framebufferHeight,{format:jt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(te){for(let ge=0;ge<te.removed.length;ge++){let ve=te.removed[ge],be=_.indexOf(ve);be>=0&&(_[be]=null,M[be].disconnect(ve))}for(let ge=0;ge<te.added.length;ge++){let ve=te.added[ge],be=_.indexOf(ve);if(be===-1){for(let We=0;We<M.length;We++)if(We>=_.length){_.push(ve),be=We;break}else if(_[We]===null){_[We]=ve,be=We;break}if(be===-1)break}let Ae=M[be];Ae&&Ae.connect(ve)}}let Q=new k,me=new k;function Z(te,ge,ve){Q.setFromMatrixPosition(ge.matrixWorld),me.setFromMatrixPosition(ve.matrixWorld);let be=Q.distanceTo(me),Ae=ge.projectionMatrix.elements,We=ve.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),ct=Ae[14]/(Ae[10]+1),lt=(Ae[9]+1)/Ae[5],Ze=(Ae[9]-1)/Ae[5],O=(Ae[8]-1)/Ae[0],Mt=(We[8]+1)/We[0],tt=De*O,$e=De*Mt,Be=be/(-O+Mt),at=Be*-O;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(at),te.translateZ(Be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let Ie=De+Be,C=ct+Be,S=tt-at,q=$e+(be-at),se=lt*ct/C*Ie,ce=Ze*ct/C*Ie;te.projectionMatrix.makePerspective(S,q,se,ce,Ie,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let ge=te.near,ve=te.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),y.near=z.near=D.near=ge,y.far=z.far=D.far=ve,(F!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),F=y.near,V=y.far),D.layers.mask=te.layers.mask|2,z.layers.mask=te.layers.mask|4,y.layers.mask=D.layers.mask|z.layers.mask;let be=te.parent,Ae=y.cameras;he(y,be);for(let We=0;We<Ae.length;We++)he(Ae[We],be);Ae.length===2?Z(y,D,z):y.projectionMatrix.copy(D.projectionMatrix),Me(te,y,be)};function Me(te,ge,ve){ve===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Gi*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Re=null;function Oe(te,ge){if(h=ge.getViewerPose(c||a),b=ge,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let be=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,be=!0);for(let De=0;De<ve.length;De++){let ct=ve[De],lt=null;if(p!==null)lt=p.getViewport(ct);else{let O=u.getViewSubImage(f,ct);lt=O.viewport,De===0&&(e.setRenderTargetTextures(E,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(E))}let Ze=w[De];Ze===void 0&&(Ze=new Dt,Ze.layers.enable(De),Ze.viewport=new ft,w[De]=Ze),Ze.matrix.fromArray(ct.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ct.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(lt.x,lt.y,lt.width,lt.height),De===0&&(y.matrix.copy(Ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),be===!0&&y.cameras.push(Ze)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let De=u.getDepthInformation(ve[0]);De&&De.isValid&&De.texture&&x.init(e,De,i.renderState)}}for(let ve=0;ve<M.length;ve++){let be=_[ve],Ae=M[ve];be!==null&&Ae!==void 0&&Ae.update(be,ge,c||a)}Re&&Re(te,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),b=null}let Xe=new wf;Xe.setAnimationLoop(Oe),this.setAnimationLoop=function(te){Re=te},this.dispose=function(){}}},is=new Dn,Cv=new je;function Pv(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Tc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,E,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),b(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),M=E.envMap,_=E.envMapRotation;M&&(m.envMap.value=M,is.copy(_),is.x*=-1,is.y*=-1,is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(is)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let _=M.program;n.uniformBlockBinding(E,_)}function c(E,M){let _=i[E.id];_===void 0&&(b(E),_=h(E),i[E.id]=_,E.addEventListener("dispose",m));let L=M.program;n.updateUBOMapping(E,L);let P=e.render.frame;r[E.id]!==P&&(f(E),r[E.id]=P)}function h(E){let M=u();E.__bindingPointIndex=M;let _=s.createBuffer(),L=E.__size,P=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=i[E.id],_=E.uniforms,L=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let P=0,D=_.length;P<D;P++){let z=Array.isArray(_[P])?_[P]:[_[P]];for(let w=0,y=z.length;w<y;w++){let F=z[w];if(p(F,P,w,L)===!0){let V=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value],J=0;for(let re=0;re<Y.length;re++){let Q=Y[re],me=x(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,V+J,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,J),J+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,M,_,L){let P=E.value,D=M+"_"+_;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{let z=L[D];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return L[D]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function b(E){let M=E.uniforms,_=0,L=16;for(let D=0,z=M.length;D<z;D++){let w=Array.isArray(M[D])?M[D]:[M[D]];for(let y=0,F=w.length;y<F;y++){let V=w[y],Y=Array.isArray(V.value)?V.value:[V.value];for(let J=0,re=Y.length;J<re;J++){let Q=Y[J],me=x(Q),Z=_%L,he=Z%me.boundary,Me=Z+he;_+=he,Me!==0&&L-Me<me.storage&&(_+=L-Me),V.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=me.storage}}}let P=_%L;return P>0&&(_+=L-P),E.__size=_,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(let E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}var al=class{constructor(e={}){let{canvas:t=Yu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,L=!1;this._outputColorSpace=At;let P=0,D=0,z=null,w=-1,y=null,F=new ft,V=new ft,Y=null,J=new ze(0),re=0,Q=t.width,me=t.height,Z=1,he=null,Me=null,Re=new ft(0,0,Q,me),Oe=new ft(0,0,Q,me),Xe=!1,te=new Ls,ge=!1,ve=!1,be=new je,Ae=new je,We=new k,De=new ft,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Ze(){return z===null?Z:1}let O=n;function Mt(v,A){return t.getContext(v,A)}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"176"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){let A="webgl2";if(O=Mt(A,v),O===null)throw Mt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let tt,$e,Be,at,Ie,C,S,q,se,ce,ie,Le,xe,Ce,ke,de,Pe,H,$,ne,ye,fe,Se,B;function j(){tt=new Zg(O),tt.init(),fe=new Tv(O,tt),$e=new Gg(O,tt,e,fe),Be=new wv(O,tt),$e.reverseDepthBuffer&&f&&Be.buffers.depth.setReversed(!0),at=new Qg(O),Ie=new uv,C=new Ev(O,tt,Be,Ie,$e,fe,at),S=new Wg(_),q=new jg(_),se=new sp(O),Se=new kg(O,se),ce=new Kg(O,se,at,Se),ie=new e0(O,ce,se,at),$=new $g(O,$e,C),de=new Vg(Ie),Le=new hv(_,S,q,tt,$e,Se,de),xe=new Pv(_,Ie),Ce=new dv,ke=new xv(tt),H=new zg(_,S,q,Be,ie,p,l),Pe=new Mv(_,ie,$e),B=new Iv(O,at,$e,Be),ne=new Hg(O,tt,at),ye=new Jg(O,tt,at),at.programs=Le.programs,_.capabilities=$e,_.extensions=tt,_.properties=Ie,_.renderLists=Ce,_.shadowMap=Pe,_.state=Be,_.info=at}j();let K=new Vc(_,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(v){v!==void 0&&(Z=v,this.setSize(Q,me,!1))},this.getSize=function(v){return v.set(Q,me)},this.setSize=function(v,A,R=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=v,me=A,t.width=Math.floor(v*Z),t.height=Math.floor(A*Z),R===!0&&(t.style.width=v+"px",t.style.height=A+"px"),this.setViewport(0,0,v,A)},this.getDrawingBufferSize=function(v){return v.set(Q*Z,me*Z).floor()},this.setDrawingBufferSize=function(v,A,R){Q=v,me=A,Z=R,t.width=Math.floor(v*R),t.height=Math.floor(A*R),this.setViewport(0,0,v,A)},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(Re)},this.setViewport=function(v,A,R,N){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,A,R,N),Be.viewport(F.copy(Re).multiplyScalar(Z).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,A,R,N){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,A,R,N),Be.scissor(V.copy(Oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(v){Be.setScissorTest(Xe=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){Me=v},this.getClearColor=function(v){return v.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(v=!0,A=!0,R=!0){let N=0;if(v){let I=!1;if(z!==null){let G=z.texture.format;I=G===Co||G===Ro||G===Ao}if(I){let G=z.texture.type,W=G===sn||G===Ai||G===Bs||G===Ri||G===Eo||G===To,X=H.getClearColor(),ee=H.getClearAlpha(),oe=X.r,ae=X.g,ue=X.b;W?(b[0]=oe,b[1]=ae,b[2]=ue,b[3]=ee,O.clearBufferuiv(O.COLOR,0,b)):(x[0]=oe,x[1]=ae,x[2]=ue,x[3]=ee,O.clearBufferiv(O.COLOR,0,x))}else N|=O.COLOR_BUFFER_BIT}A&&(N|=O.DEPTH_BUFFER_BIT),R&&(N|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),H.dispose(),Ce.dispose(),ke.dispose(),Ie.dispose(),S.dispose(),q.dispose(),ie.dispose(),Se.dispose(),B.dispose(),Le.dispose(),K.dispose(),K.removeEventListener("sessionstart",ua),K.removeEventListener("sessionend",fa),jn.stop()};function le(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let v=at.autoReset,A=Pe.enabled,R=Pe.autoUpdate,N=Pe.needsUpdate,I=Pe.type;j(),at.autoReset=v,Pe.enabled=A,Pe.autoUpdate=R,Pe.needsUpdate=N,Pe.type=I}function Te(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Je(v){let A=v.target;A.removeEventListener("dispose",Je),St(A)}function St(v){Wt(v),Ie.remove(v)}function Wt(v){let A=Ie.get(v).programs;A!==void 0&&(A.forEach(function(R){Le.releaseProgram(R)}),v.isShaderMaterial&&Le.releaseShaderCache(v))}this.renderBufferDirect=function(v,A,R,N,I,G){A===null&&(A=ct);let W=I.isMesh&&I.matrixWorld.determinant()<0,X=Ml(v,A,R,N,I);Be.setMaterial(N,W);let ee=R.index,oe=1;if(N.wireframe===!0){if(ee=ce.getWireframeAttribute(R),ee===void 0)return;oe=2}let ae=R.drawRange,ue=R.attributes.position,pe=ae.start*oe,_e=(ae.start+ae.count)*oe;G!==null&&(pe=Math.max(pe,G.start*oe),_e=Math.min(_e,(G.start+G.count)*oe)),ee!==null?(pe=Math.max(pe,0),_e=Math.min(_e,ee.count)):ue!=null&&(pe=Math.max(pe,0),_e=Math.min(_e,ue.count));let Ne=_e-pe;if(Ne<0||Ne===1/0)return;Se.setup(I,N,X,R,ee);let qe,Ge=ne;if(ee!==null&&(qe=se.get(ee),Ge=ye,Ge.setIndex(qe)),I.isMesh)N.wireframe===!0?(Be.setLineWidth(N.wireframeLinewidth*Ze()),Ge.setMode(O.LINES)):Ge.setMode(O.TRIANGLES);else if(I.isLine){let Ue=N.linewidth;Ue===void 0&&(Ue=1),Be.setLineWidth(Ue*Ze()),I.isLineSegments?Ge.setMode(O.LINES):I.isLineLoop?Ge.setMode(O.LINE_LOOP):Ge.setMode(O.LINE_STRIP)}else I.isPoints?Ge.setMode(O.POINTS):I.isSprite&&Ge.setMode(O.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ge.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Ge.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Ue=I._multiDrawStarts,Qe=I._multiDrawCounts,Fe=I._multiDrawCount,pt=ee?se.get(ee).bytesPerElement:1,Ot=Ie.get(N).currentProgram.getUniforms();for(let ut=0;ut<Fe;ut++)Ot.setValue(O,"_gl_DrawID",ut),Ge.render(Ue[ut]/pt,Qe[ut])}else if(I.isInstancedMesh)Ge.renderInstances(pe,Ne,I.count);else if(R.isInstancedBufferGeometry){let Ue=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Qe=Math.min(R.instanceCount,Ue);Ge.renderInstances(pe,Ne,Qe)}else Ge.render(pe,Ne)};function dt(v,A,R){v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=nn,v.needsUpdate=!0,ls(v,A,R),v.side=In,v.needsUpdate=!0,ls(v,A,R),v.side=hn):ls(v,A,R)}this.compile=function(v,A,R=null){R===null&&(R=v),d=ke.get(R),d.init(A),M.push(d),R.traverseVisible(function(I){I.isLight&&I.layers.test(A.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),v!==R&&v.traverseVisible(function(I){I.isLight&&I.layers.test(A.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();let N=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let G=I.material;if(G)if(Array.isArray(G))for(let W=0;W<G.length;W++){let X=G[W];dt(X,R,I),N.add(X)}else dt(G,R,I),N.add(G)}),d=M.pop(),N},this.compileAsync=function(v,A,R=null){let N=this.compile(v,A,R);return new Promise(I=>{function G(){if(N.forEach(function(W){Ie.get(W).currentProgram.isReady()&&N.delete(W)}),N.size===0){I(v);return}setTimeout(G,10)}tt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let un=null;function En(v){un&&un(v)}function ua(){jn.stop()}function fa(){jn.start()}let jn=new wf;jn.setAnimationLoop(En),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(v){un=v,K.setAnimationLoop(v),v===null?jn.stop():jn.start()},K.addEventListener("sessionstart",ua),K.addEventListener("sessionend",fa),this.render=function(v,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(A),A=K.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,A,z),d=ke.get(v,M.length),d.init(A),M.push(d),Ae.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),te.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,ge=de.init(this.clippingPlanes,ve),m=Ce.get(v,E.length),m.init(),E.push(m),K.enabled===!0&&K.isPresenting===!0){let G=_.xr.getDepthSensingMesh();G!==null&&Ks(G,A,-1/0,_.sortObjects)}Ks(v,A,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(he,Me),lt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,lt&&H.addToRenderList(m,v),this.info.render.frame++,ge===!0&&de.beginShadows();let R=d.state.shadowsArray;Pe.render(R,v,A),ge===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let N=m.opaque,I=m.transmissive;if(d.setupLights(),A.isArrayCamera){let G=A.cameras;if(I.length>0)for(let W=0,X=G.length;W<X;W++){let ee=G[W];da(N,I,v,ee)}lt&&H.render(v);for(let W=0,X=G.length;W<X;W++){let ee=G[W];Js(m,v,ee,ee.viewport)}}else I.length>0&&da(N,I,v,A),lt&&H.render(v),Js(m,v,A);z!==null&&D===0&&(C.updateMultisampleRenderTarget(z),C.updateRenderTargetMipmap(z)),v.isScene===!0&&v.onAfterRender(_,v,A),Se.resetDefaultState(),w=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],ge===!0&&de.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ks(v,A,R,N){if(v.visible===!1)return;if(v.layers.test(A.layers)){if(v.isGroup)R=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(A);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||te.intersectsSprite(v)){N&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ae);let W=ie.update(v),X=v.material;X.visible&&m.push(v,W,X,R,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||te.intersectsObject(v))){let W=ie.update(v),X=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),De.copy(W.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(Ae)),Array.isArray(X)){let ee=W.groups;for(let oe=0,ae=ee.length;oe<ae;oe++){let ue=ee[oe],pe=X[ue.materialIndex];pe&&pe.visible&&m.push(v,W,pe,R,De.z,ue)}}else X.visible&&m.push(v,W,X,R,De.z,null)}}let G=v.children;for(let W=0,X=G.length;W<X;W++)Ks(G[W],A,R,N)}function Js(v,A,R,N){let I=v.opaque,G=v.transmissive,W=v.transparent;d.setupLightsView(R),ge===!0&&de.setGlobalState(_.clippingPlanes,R),N&&Be.viewport(F.copy(N)),I.length>0&&os(I,A,R),G.length>0&&os(G,A,R),W.length>0&&os(W,A,R),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function da(v,A,R,N){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new Pt(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Rt:sn,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let G=d.state.transmissionRenderTarget[N.id],W=N.viewport||F;G.setSize(W.z*_.transmissionResolutionScale,W.w*_.transmissionResolutionScale);let X=_.getRenderTarget();_.setRenderTarget(G),_.getClearColor(J),re=_.getClearAlpha(),re<1&&_.setClearColor(16777215,.5),_.clear(),lt&&H.render(R);let ee=_.toneMapping;_.toneMapping=ui;let oe=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),ge===!0&&de.setGlobalState(_.clippingPlanes,N),os(v,R,N),C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ue=0,pe=A.length;ue<pe;ue++){let _e=A[ue],Ne=_e.object,qe=_e.geometry,Ge=_e.material,Ue=_e.group;if(Ge.side===hn&&Ne.layers.test(N.layers)){let Qe=Ge.side;Ge.side=nn,Ge.needsUpdate=!0,pa(Ne,R,N,qe,Ge,Ue),Ge.side=Qe,Ge.needsUpdate=!0,ae=!0}}ae===!0&&(C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G))}_.setRenderTarget(X),_.setClearColor(J,re),oe!==void 0&&(N.viewport=oe),_.toneMapping=ee}function os(v,A,R){let N=A.isScene===!0?A.overrideMaterial:null;for(let I=0,G=v.length;I<G;I++){let W=v[I],X=W.object,ee=W.geometry,oe=W.group,ae=W.material;ae.allowOverride===!0&&N!==null&&(ae=N),X.layers.test(R.layers)&&pa(X,A,R,ee,ae,oe)}}function pa(v,A,R,N,I,G){v.onBeforeRender(_,A,R,N,I,G),v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(_,A,R,N,v,G),I.transparent===!0&&I.side===hn&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,_.renderBufferDirect(R,A,N,I,v,G),I.side=In,I.needsUpdate=!0,_.renderBufferDirect(R,A,N,I,v,G),I.side=hn):_.renderBufferDirect(R,A,N,I,v,G),v.onAfterRender(_,A,R,N,I,G)}function ls(v,A,R){A.isScene!==!0&&(A=ct);let N=Ie.get(v),I=d.state.lights,G=d.state.shadowsArray,W=I.state.version,X=Le.getParameters(v,I.state,G,A,R),ee=Le.getProgramCacheKey(X),oe=N.programs;N.environment=v.isMeshStandardMaterial?A.environment:null,N.fog=A.fog,N.envMap=(v.isMeshStandardMaterial?q:S).get(v.envMap||N.environment),N.envMapRotation=N.environment!==null&&v.envMap===null?A.environmentRotation:v.envMapRotation,oe===void 0&&(v.addEventListener("dispose",Je),oe=new Map,N.programs=oe);let ae=oe.get(ee);if(ae!==void 0){if(N.currentProgram===ae&&N.lightsStateVersion===W)return $s(v,X),ae}else X.uniforms=Le.getUniforms(v),v.onBeforeCompile(X,_),ae=Le.acquireProgram(X,ee),oe.set(ee,ae),N.uniforms=X.uniforms;let ue=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ue.clippingPlanes=de.uniform),$s(v,X),N.needsLights=mi(v),N.lightsStateVersion=W,N.needsLights&&(ue.ambientLightColor.value=I.state.ambient,ue.lightProbe.value=I.state.probe,ue.directionalLights.value=I.state.directional,ue.directionalLightShadows.value=I.state.directionalShadow,ue.spotLights.value=I.state.spot,ue.spotLightShadows.value=I.state.spotShadow,ue.rectAreaLights.value=I.state.rectArea,ue.ltc_1.value=I.state.rectAreaLTC1,ue.ltc_2.value=I.state.rectAreaLTC2,ue.pointLights.value=I.state.point,ue.pointLightShadows.value=I.state.pointShadow,ue.hemisphereLights.value=I.state.hemi,ue.directionalShadowMap.value=I.state.directionalShadowMap,ue.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ue.spotShadowMap.value=I.state.spotShadowMap,ue.spotLightMatrix.value=I.state.spotLightMatrix,ue.spotLightMap.value=I.state.spotLightMap,ue.pointShadowMap.value=I.state.pointShadowMap,ue.pointShadowMatrix.value=I.state.pointShadowMatrix),N.currentProgram=ae,N.uniformsList=null,ae}function Qs(v){if(v.uniformsList===null){let A=v.currentProgram.getUniforms();v.uniformsList=Vs.seqWithValue(A.seq,v.uniforms)}return v.uniformsList}function $s(v,A){let R=Ie.get(v);R.outputColorSpace=A.outputColorSpace,R.batching=A.batching,R.batchingColor=A.batchingColor,R.instancing=A.instancing,R.instancingColor=A.instancingColor,R.instancingMorph=A.instancingMorph,R.skinning=A.skinning,R.morphTargets=A.morphTargets,R.morphNormals=A.morphNormals,R.morphColors=A.morphColors,R.morphTargetsCount=A.morphTargetsCount,R.numClippingPlanes=A.numClippingPlanes,R.numIntersection=A.numClipIntersection,R.vertexAlphas=A.vertexAlphas,R.vertexTangents=A.vertexTangents,R.toneMapping=A.toneMapping}function Ml(v,A,R,N,I){A.isScene!==!0&&(A=ct),C.resetTextureUnits();let G=A.fog,W=N.isMeshStandardMaterial?A.environment:null,X=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Nt,ee=(N.isMeshStandardMaterial?q:S).get(N.envMap||W),oe=N.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ae=!!R.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ue=!!R.morphAttributes.position,pe=!!R.morphAttributes.normal,_e=!!R.morphAttributes.color,Ne=ui;N.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ne=_.toneMapping);let qe=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Ge=qe!==void 0?qe.length:0,Ue=Ie.get(N),Qe=d.state.lights;if(ge===!0&&(ve===!0||v!==y)){let xt=v===y&&N.id===w;de.setState(N,v,xt)}let Fe=!1;N.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Qe.state.version||Ue.outputColorSpace!==X||I.isBatchedMesh&&Ue.batching===!1||!I.isBatchedMesh&&Ue.batching===!0||I.isBatchedMesh&&Ue.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ue.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ue.instancing===!1||!I.isInstancedMesh&&Ue.instancing===!0||I.isSkinnedMesh&&Ue.skinning===!1||!I.isSkinnedMesh&&Ue.skinning===!0||I.isInstancedMesh&&Ue.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ue.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ue.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ue.instancingMorph===!1&&I.morphTexture!==null||Ue.envMap!==ee||N.fog===!0&&Ue.fog!==G||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==de.numPlanes||Ue.numIntersection!==de.numIntersection)||Ue.vertexAlphas!==oe||Ue.vertexTangents!==ae||Ue.morphTargets!==ue||Ue.morphNormals!==pe||Ue.morphColors!==_e||Ue.toneMapping!==Ne||Ue.morphTargetsCount!==Ge)&&(Fe=!0):(Fe=!0,Ue.__version=N.version);let pt=Ue.currentProgram;Fe===!0&&(pt=ls(N,A,I));let Ot=!1,ut=!1,ot=!1,Ye=pt.getUniforms(),Tt=Ue.uniforms;if(Be.useProgram(pt.program)&&(Ot=!0,ut=!0,ot=!0),N.id!==w&&(w=N.id,ut=!0),Ot||y!==v){Be.buffers.depth.getReversed()?(be.copy(v.projectionMatrix),Zu(be),Ku(be),Ye.setValue(O,"projectionMatrix",be)):Ye.setValue(O,"projectionMatrix",v.projectionMatrix),Ye.setValue(O,"viewMatrix",v.matrixWorldInverse);let Bt=Ye.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,We.setFromMatrixPosition(v.matrixWorld)),$e.logarithmicDepthBuffer&&Ye.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ye.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,ut=!0,ot=!0)}if(I.isSkinnedMesh){Ye.setOptional(O,I,"bindMatrix"),Ye.setOptional(O,I,"bindMatrixInverse");let xt=I.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),Ye.setValue(O,"boneTexture",xt.boneTexture,C))}I.isBatchedMesh&&(Ye.setOptional(O,I,"batchingTexture"),Ye.setValue(O,"batchingTexture",I._matricesTexture,C),Ye.setOptional(O,I,"batchingIdTexture"),Ye.setValue(O,"batchingIdTexture",I._indirectTexture,C),Ye.setOptional(O,I,"batchingColorTexture"),I._colorsTexture!==null&&Ye.setValue(O,"batchingColorTexture",I._colorsTexture,C));let Xt=R.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&$.update(I,R,pt),(ut||Ue.receiveShadow!==I.receiveShadow)&&(Ue.receiveShadow=I.receiveShadow,Ye.setValue(O,"receiveShadow",I.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Tt.envMap.value=ee,Tt.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&A.environment!==null&&(Tt.envMapIntensity.value=A.environmentIntensity),ut&&(Ye.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Zn(Tt,ot),G&&N.fog===!0&&xe.refreshFogUniforms(Tt,G),xe.refreshMaterialUniforms(Tt,N,Z,me,d.state.transmissionRenderTarget[v.id]),Vs.upload(O,Qs(Ue),Tt,C)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Vs.upload(O,Qs(Ue),Tt,C),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ye.setValue(O,"center",I.center),Ye.setValue(O,"modelViewMatrix",I.modelViewMatrix),Ye.setValue(O,"normalMatrix",I.normalMatrix),Ye.setValue(O,"modelMatrix",I.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let xt=N.uniformsGroups;for(let Bt=0,Sl=xt.length;Bt<Sl;Bt++){let Di=xt[Bt];B.update(Di,pt),B.bind(Di,pt)}}return pt}function Zn(v,A){v.ambientLightColor.needsUpdate=A,v.lightProbe.needsUpdate=A,v.directionalLights.needsUpdate=A,v.directionalLightShadows.needsUpdate=A,v.pointLights.needsUpdate=A,v.pointLightShadows.needsUpdate=A,v.spotLights.needsUpdate=A,v.spotLightShadows.needsUpdate=A,v.rectAreaLights.needsUpdate=A,v.hemisphereLights.needsUpdate=A}function mi(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,A,R){let N=Ie.get(v);N.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Ie.get(v.texture).__webglTexture=A,Ie.get(v.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:R,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,A){let R=Ie.get(v);R.__webglFramebuffer=A,R.__useDefaultFramebuffer=A===void 0};let g=O.createFramebuffer();this.setRenderTarget=function(v,A=0,R=0){z=v,P=A,D=R;let N=!0,I=null,G=!1,W=!1;if(v){let ee=Ie.get(v);if(ee.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(O.FRAMEBUFFER,null),N=!1;else if(ee.__webglFramebuffer===void 0)C.setupRenderTarget(v);else if(ee.__hasExternalTextures)C.rebindTextures(v,Ie.get(v.texture).__webglTexture,Ie.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ue=v.depthTexture;if(ee.__boundDepthTexture!==ue){if(ue!==null&&Ie.has(ue)&&(v.width!==ue.image.width||v.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(v)}}let oe=v.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(W=!0);let ae=Ie.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ae[A])?I=ae[A][R]:I=ae[A],G=!0):v.samples>0&&C.useMultisampledRTT(v)===!1?I=Ie.get(v).__webglMultisampledFramebuffer:Array.isArray(ae)?I=ae[R]:I=ae,F.copy(v.viewport),V.copy(v.scissor),Y=v.scissorTest}else F.copy(Re).multiplyScalar(Z).floor(),V.copy(Oe).multiplyScalar(Z).floor(),Y=Xe;if(R!==0&&(I=g),Be.bindFramebuffer(O.FRAMEBUFFER,I)&&N&&Be.drawBuffers(v,I),Be.viewport(F),Be.scissor(V),Be.setScissorTest(Y),G){let ee=Ie.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+A,ee.__webglTexture,R)}else if(W){let ee=Ie.get(v.texture),oe=A;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ee.__webglTexture,R,oe)}else if(v!==null&&R!==0){let ee=Ie.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ee.__webglTexture,R)}w=-1},this.readRenderTargetPixels=function(v,A,R,N,I,G,W){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=Ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&W!==void 0&&(X=X[W]),X){Be.bindFramebuffer(O.FRAMEBUFFER,X);try{let ee=v.texture,oe=ee.format,ae=ee.type;if(!$e.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=v.width-N&&R>=0&&R<=v.height-I&&O.readPixels(A,R,N,I,fe.convert(oe),fe.convert(ae),G)}finally{let ee=z!==null?Ie.get(z).__webglFramebuffer:null;Be.bindFramebuffer(O.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(v,A,R,N,I,G,W){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let X=Ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&W!==void 0&&(X=X[W]),X)if(A>=0&&A<=v.width-N&&R>=0&&R<=v.height-I){Be.bindFramebuffer(O.FRAMEBUFFER,X);let ee=v.texture,oe=ee.format,ae=ee.type;if(!$e.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.bufferData(O.PIXEL_PACK_BUFFER,G.byteLength,O.STREAM_READ),O.readPixels(A,R,N,I,fe.convert(oe),fe.convert(ae),0);let pe=z!==null?Ie.get(z).__webglFramebuffer:null;Be.bindFramebuffer(O.FRAMEBUFFER,pe);let _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ju(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,G),O.deleteBuffer(ue),O.deleteSync(_e),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,A=null,R=0){let N=Math.pow(2,-R),I=Math.floor(v.image.width*N),G=Math.floor(v.image.height*N),W=A!==null?A.x:0,X=A!==null?A.y:0;C.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,R,0,0,W,X,I,G),Be.unbindTexture()};let T=O.createFramebuffer(),U=O.createFramebuffer();this.copyTextureToTexture=function(v,A,R=null,N=null,I=0,G=null){G===null&&(I!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=I,I=0):G=0);let W,X,ee,oe,ae,ue,pe,_e,Ne,qe=v.isCompressedTexture?v.mipmaps[G]:v.image;if(R!==null)W=R.max.x-R.min.x,X=R.max.y-R.min.y,ee=R.isBox3?R.max.z-R.min.z:1,oe=R.min.x,ae=R.min.y,ue=R.isBox3?R.min.z:0;else{let Xt=Math.pow(2,-I);W=Math.floor(qe.width*Xt),X=Math.floor(qe.height*Xt),v.isDataArrayTexture?ee=qe.depth:v.isData3DTexture?ee=Math.floor(qe.depth*Xt):ee=1,oe=0,ae=0,ue=0}N!==null?(pe=N.x,_e=N.y,Ne=N.z):(pe=0,_e=0,Ne=0);let Ge=fe.convert(A.format),Ue=fe.convert(A.type),Qe;A.isData3DTexture?(C.setTexture3D(A,0),Qe=O.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(C.setTexture2DArray(A,0),Qe=O.TEXTURE_2D_ARRAY):(C.setTexture2D(A,0),Qe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,A.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,A.unpackAlignment);let Fe=O.getParameter(O.UNPACK_ROW_LENGTH),pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ot=O.getParameter(O.UNPACK_SKIP_PIXELS),ut=O.getParameter(O.UNPACK_SKIP_ROWS),ot=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,qe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,qe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,oe),O.pixelStorei(O.UNPACK_SKIP_ROWS,ae),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ue);let Ye=v.isDataArrayTexture||v.isData3DTexture,Tt=A.isDataArrayTexture||A.isData3DTexture;if(v.isDepthTexture){let Xt=Ie.get(v),xt=Ie.get(A),Bt=Ie.get(Xt.__renderTarget),Sl=Ie.get(xt.__renderTarget);Be.bindFramebuffer(O.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Sl.__webglFramebuffer);for(let Di=0;Di<ee;Di++)Ye&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(v).__webglTexture,I,ue+Di),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(A).__webglTexture,G,Ne+Di)),O.blitFramebuffer(oe,ae,W,X,pe,_e,W,X,O.DEPTH_BUFFER_BIT,O.NEAREST);Be.bindFramebuffer(O.READ_FRAMEBUFFER,null),Be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||Ie.has(v)){let Xt=Ie.get(v),xt=Ie.get(A);Be.bindFramebuffer(O.READ_FRAMEBUFFER,T),Be.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let Bt=0;Bt<ee;Bt++)Ye?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,I,ue+Bt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,I),Tt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,G,Ne+Bt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,G),I!==0?O.blitFramebuffer(oe,ae,W,X,pe,_e,W,X,O.COLOR_BUFFER_BIT,O.NEAREST):Tt?O.copyTexSubImage3D(Qe,G,pe,_e,Ne+Bt,oe,ae,W,X):O.copyTexSubImage2D(Qe,G,pe,_e,oe,ae,W,X);Be.bindFramebuffer(O.READ_FRAMEBUFFER,null),Be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Tt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Qe,G,pe,_e,Ne,W,X,ee,Ge,Ue,qe.data):A.isCompressedArrayTexture?O.compressedTexSubImage3D(Qe,G,pe,_e,Ne,W,X,ee,Ge,qe.data):O.texSubImage3D(Qe,G,pe,_e,Ne,W,X,ee,Ge,Ue,qe):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,pe,_e,W,X,Ge,Ue,qe.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,pe,_e,qe.width,qe.height,Ge,qe.data):O.texSubImage2D(O.TEXTURE_2D,G,pe,_e,W,X,Ge,Ue,qe);O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ot),G===0&&A.generateMipmaps&&O.generateMipmap(Qe),Be.unbindTexture()},this.copyTextureToTexture3D=function(v,A,R=null,N=null,I=0){return Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,A,R,N,I)},this.initRenderTarget=function(v){Ie.get(v).__webglFramebuffer===void 0&&C.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?C.setTextureCube(v,0):v.isData3DTexture?C.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?C.setTexture2DArray(v,0):C.setTexture2D(v,0),Be.unbindTexture()},this.resetState=function(){P=0,D=0,z=null,Be.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};function Xc(s,e){if(e===_c)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ks||e===qr){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ks)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ll=class extends Ln{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qc(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new fh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=hi.extractUrlBase(e);a=hi.resolveURL(c,this.path)}else a=hi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uf){try{a[rt.KHR_BINARY_GLTF]=new dh(e)}catch(u){i&&i(u);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _h(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:a[u]=new Kc;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ph(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[u]=new mh;break;case rt.KHR_MESH_QUANTIZATION:a[u]=new gh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Dv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zc=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ze(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ki(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zi(h),c.distance=u;break;case"spot":c=new Lr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Kc=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){let i=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(i)}},Jc=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Qc=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}},$c=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},eh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},th=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},ih=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],Nt),Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},rh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},ah=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},lh=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ch=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},hh=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},uh=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}},fh=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let b of u){let x=new je,m=new k,d=new xn,E=new k(1,1,1),M=new yr(b.geometry,b.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&E.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(m,d,E));for(let _ in l)if(_==="_COLOR_0"){let L=l[_];M.instanceColor=new wi(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&b.geometry.setAttribute(_,l[_]);Et.prototype.copy.call(M,b),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Uf="glTF",Zr=12,Pf={JSON:1313821514,BIN:5130562},dh=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Zr,r=new DataView(e,Zr),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Pf.JSON){let c=new Uint8Array(e,Zr+a,o);this.content=n.decode(c)}else if(l===Pf.BIN){let c=Zr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ph=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=bh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=bh[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=qs[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(p){for(let b in p.attributes){let x=p.attributes[b],m=l[b];m!==void 0&&(x.normalized=m)}u(p)},o,c,Nt,f)})})}},mh=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},gh=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},cl=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,b=e*c,x=b-c,m=-2*p+3*f,d=p-f,E=1-m,M=d-f+u;for(let _=0;_!==o;_++){let L=a[x+_+o],P=a[x+_+l]*h,D=a[b+_+o],z=a[b+_]*h;r[_]=E*L+M*P+m*D+d*z}return r}},Lv=new xn,vh=class extends cl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Lv.fromArray(r).normalize().toArray(r),r}},Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},If={9728:Ut,9729:Ct,9984:So,9985:Os,9986:es,9987:yn},Df={33071:bn,33648:Ss,10497:Yt},qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Uv={CUBICSPLINE:void 0,LINEAR:Hi,STEP:ki},Yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),s.DefaultMaterial}function as(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ov(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bv(s){let e,t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jc(t.attributes):e=s.indices+":"+jc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+jc(s.targets[n]);return e}function jc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function xh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var kv=new je,_h=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Yi(this.options.manager):this.textureLoader=new Ur(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return as(r,o,i),fi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(hi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=qc[i.type],o=qs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Lt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=qc[i.type],c=qs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,M=t.cache.get(E);M||(x=new c(o,d*p,i.count*p/h),M=new Ps(x,p/h),t.cache.add(E,M)),m=new Is(M,l,f%p/h,b)}else o===null?x=new c(i.count*l):x=new c(o,f,i.count*l),m=new Lt(x,l,b);if(i.sparse!==void 0){let d=qc.SCALAR,E=qs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,L=new E(a[1],M,i.sparse.count*d),P=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,z=L.length;D<z;D++){let w=L[D];if(m.setX(w,P[D*l]),l>=2&&m.setY(w,P[D*l+1]),l>=3&&m.setZ(w,P[D*l+2]),l>=4&&m.setW(w,P[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=If[f.magFilter]||Ct,h.minFilter=If[f.minFilter]||yn,h.wrapS=Df[f.wrapS]||Yt,h.wrapT=Df[f.wrapT]||Yt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let b=f;t.isImageBitmapLoader===!0&&(b=function(x){let m=new zt(x);m.needsUpdate=!0,f(m)}),t.load(hi.resolveURL(u,r.path),b,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),fi(u,a),u.userData.mimeType=a.mimeType||zv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ns,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Us,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ke}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let u=i[rt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Nt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,At)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||Yc.OPAQUE;if(h===Yc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Yc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gn){let u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&a!==gn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&as(i,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Lf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Bv(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Lf(new kt,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Nv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,b=h.length;p<b;p++){let x=h[p],m=a[p],d,E=c[p];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new xr(x,E):new ht(x,E),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?d.geometry=Xc(d.geometry,qr):m.mode===Mn.TRIANGLE_FAN&&(d.geometry=Xc(d.geometry,ks));else if(m.mode===Mn.LINES)d=new Mr(x,E);else if(m.mode===Mn.LINE_STRIP)d=new Vi(x,E);else if(m.mode===Mn.LINE_LOOP)d=new Sr(x,E);else if(m.mode===Mn.POINTS)d=new wr(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ov(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),fi(d,r),m.extensions&&as(i,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,b=u.length;p<b;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&as(i,u[0],r),u[0];let f=new wt;r.extensions&&as(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,b=u.length;p<b;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(wc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ci(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _r(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let p=i.channels[u],b=i.samplers[p.sampler],x=p.target,m=x.node,d=i.parameters!==void 0?i.parameters[b.input]:b.input,E=i.parameters!==void 0?i.parameters[b.output]:b.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",E)),c.push(b),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],b=u[2],x=u[3],m=u[4],d=[];for(let E=0,M=f.length;E<M;E++){let _=f[E],L=p[E],P=b[E],D=x[E],z=m[E];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let w=n._createAnimationTracks(_,L,P,D,z);if(w)for(let y=0;y<w.length;y++)d.push(w[y])}return new Cr(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,kv)});for(let p=0,b=u.length;p<b;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ds:c.length>1?h=new wt:c.length===1?h=c[0]:h=new Et,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),fi(h,r),r.extensions&&as(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new wt;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&as(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,p]of i.associations)(f instanceof tn||f instanceof zt)&&u.set(f,p);return h.traverse(f=>{let p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];Pi[r.path]===Pi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Pi[r.path]){case Pi.weights:c=Hn;break;case Pi.rotation:c=Gn;break;case Pi.translation:case Pi.scale:c=Vn;break;default:n.itemSize===1?c=Hn:c=Vn;break}let h=i.interpolation!==void 0?Uv[i.interpolation]:Hi,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let b=new c(l[f]+"."+Pi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Gn?vh:cl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Hv(s,e,t){let n=e.attributes,i=new mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let h=xh(qs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new k,l=new k;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,b=f.max;if(p!==void 0&&b!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),f.normalized){let x=xh(qs[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Lf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=bh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),fi(s,e),Hv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Fv(s,e.targets,t):s})}var Sn=Uint8Array,Ys=Uint16Array,Gv=Int32Array,Nf=new Sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ff=new Sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vv=new Sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Of=function(s,e){for(var t=new Ys(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Gv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Bf=Of(Nf,2),zf=Bf.b,Wv=Bf.r;zf[28]=258,Wv[258]=28;var kf=Of(Ff,0),Xv=kf.b,dy=kf.r,Sh=new Ys(32768);for(gt=0;gt<32768;++gt)di=(gt&43690)>>1|(gt&21845)<<1,di=(di&52428)>>2|(di&13107)<<2,di=(di&61680)>>4|(di&3855)<<4,Sh[gt]=((di&65280)>>8|(di&255)<<8)>>1;var di,gt,Kr=(function(s,e,t){for(var n=s.length,i=0,r=new Ys(e);i<n;++i)s[i]&&++r[s[i]-1];var a=new Ys(e);for(i=1;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new Ys(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Sh[u]>>l]=c}else for(o=new Ys(n),i=0;i<n;++i)s[i]&&(o[i]=Sh[a[s[i]-1]++]>>15-s[i]);return o}),Jr=new Sn(288);for(gt=0;gt<144;++gt)Jr[gt]=8;var gt;for(gt=144;gt<256;++gt)Jr[gt]=9;var gt;for(gt=256;gt<280;++gt)Jr[gt]=7;var gt;for(gt=280;gt<288;++gt)Jr[gt]=8;var gt,Hf=new Sn(32);for(gt=0;gt<32;++gt)Hf[gt]=5;var gt;var qv=Kr(Jr,9,1);var Yv=Kr(Hf,5,1),yh=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Nn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Mh=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},jv=function(s){return(s+7)/8|0},Zv=function(s,e,t){return(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length),new Sn(s.subarray(e,t))};var Kv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fn=function(s,e,t){var n=new Error(e||Kv[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Fn),!t)throw n;return n},Jv=function(s,e,t,n){var i=s.length,r=n?n.length:0;if(!i||e.f&&!e.l)return t||new Sn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Sn(i*3));var c=function(ct){var lt=t.length;if(ct>lt){var Ze=new Sn(Math.max(lt*2,ct));Ze.set(t),t=Ze}},h=e.f||0,u=e.p||0,f=e.b||0,p=e.l,b=e.d,x=e.m,m=e.n,d=i*8;do{if(!p){h=Nn(s,u,1);var E=Nn(s,u+1,3);if(u+=3,E)if(E==1)p=qv,b=Yv,x=9,m=5;else if(E==2){var P=Nn(s,u,31)+257,D=Nn(s,u+10,15)+4,z=P+Nn(s,u+5,31)+1;u+=14;for(var w=new Sn(z),y=new Sn(19),F=0;F<D;++F)y[Vv[F]]=Nn(s,u+F*3,7);u+=D*3;for(var V=yh(y),Y=(1<<V)-1,J=Kr(y,V,1),F=0;F<z;){var re=J[Nn(s,u,Y)];u+=re&15;var M=re>>4;if(M<16)w[F++]=M;else{var Q=0,me=0;for(M==16?(me=3+Nn(s,u,3),u+=2,Q=w[F-1]):M==17?(me=3+Nn(s,u,7),u+=3):M==18&&(me=11+Nn(s,u,127),u+=7);me--;)w[F++]=Q}}var Z=w.subarray(0,P),he=w.subarray(P);x=yh(Z),m=yh(he),p=Kr(Z,x,1),b=Kr(he,m,1)}else Fn(1);else{var M=jv(u)+4,_=s[M-4]|s[M-3]<<8,L=M+_;if(L>i){l&&Fn(0);break}o&&c(f+_),t.set(s.subarray(M,L),f),e.b=f+=_,e.p=u=L*8,e.f=h;continue}if(u>d){l&&Fn(0);break}}o&&c(f+131072);for(var Me=(1<<x)-1,Re=(1<<m)-1,Oe=u;;Oe=u){var Q=p[Mh(s,u)&Me],Xe=Q>>4;if(u+=Q&15,u>d){l&&Fn(0);break}if(Q||Fn(2),Xe<256)t[f++]=Xe;else if(Xe==256){Oe=u,p=null;break}else{var te=Xe-254;if(Xe>264){var F=Xe-257,ge=Nf[F];te=Nn(s,u,(1<<ge)-1)+zf[F],u+=ge}var ve=b[Mh(s,u)&Re],be=ve>>4;ve||Fn(3),u+=ve&15;var he=Xv[be];if(be>3){var ge=Ff[be];he+=Mh(s,u)&(1<<ge)-1,u+=ge}if(u>d){l&&Fn(0);break}o&&c(f+131072);var Ae=f+te;if(f<he){var We=r-he,De=Math.min(he,Ae);for(We+f<0&&Fn(3);f<De;++f)t[f]=n[We+f]}for(;f<Ae;++f)t[f]=t[f-he]}}e.l=p,e.p=Oe,e.b=f,e.f=h,p&&(h=1,e.m=x,e.d=b,e.n=m)}while(!h);return f!=t.length&&a?Zv(t,0,f):t.subarray(0,f)};var Qv=new Sn(0);var $v=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Fn(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&Fn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Qr(s,e){return Jv(s.subarray($v(s,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var eb=typeof TextDecoder<"u"&&new TextDecoder,tb=0;try{eb.decode(Qv,{stream:!0}),tb=1}catch{}var hl=class extends Pr{constructor(e){super(e),this.type=Rt}parse(e){let w=Math.pow(2.7182818,2.2);function y(g,T){let U=0;for(let A=0;A<65536;++A)(A==0||g[A>>3]&1<<(A&7))&&(T[U++]=A);let v=U-1;for(;U<65536;)T[U++]=0;return v}function F(g){for(let T=0;T<16384;T++)g[T]={},g[T].len=0,g[T].lit=0,g[T].p=null}let V={l:0,c:0,lc:0};function Y(g,T,U,v,A){for(;U<g;)T=T<<8|ne(v,A),U+=8;U-=g,V.l=T>>U&(1<<g)-1,V.c=T,V.lc=U}let J=new Array(59);function re(g){for(let U=0;U<=58;++U)J[U]=0;for(let U=0;U<65537;++U)J[g[U]]+=1;let T=0;for(let U=58;U>0;--U){let v=T+J[U]>>1;J[U]=T,T=v}for(let U=0;U<65537;++U){let v=g[U];v>0&&(g[U]=v|J[v]++<<6)}}function Q(g,T,U,v,A,R){let N=T,I=0,G=0;for(;v<=A;v++){if(N.value-T.value>U)return!1;Y(6,I,G,g,N);let W=V.l;if(I=V.c,G=V.lc,R[v]=W,W==63){if(N.value-T.value>U)throw new Error("Something wrong with hufUnpackEncTable");Y(8,I,G,g,N);let X=V.l+6;if(I=V.c,G=V.lc,v+X>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;X--;)R[v++]=0;v--}else if(W>=59){let X=W-59+2;if(v+X>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;X--;)R[v++]=0;v--}}re(R)}function me(g){return g&63}function Z(g){return g>>6}function he(g,T,U,v){for(;T<=U;T++){let A=Z(g[T]),R=me(g[T]);if(A>>R)throw new Error("Invalid table entry");if(R>14){let N=v[A>>R-14];if(N.len)throw new Error("Invalid table entry");if(N.lit++,N.p){let I=N.p;N.p=new Array(N.lit);for(let G=0;G<N.lit-1;++G)N.p[G]=I[G]}else N.p=new Array(1);N.p[N.lit-1]=T}else if(R){let N=0;for(let I=1<<14-R;I>0;I--){let G=v[(A<<14-R)+N];if(G.len||G.p)throw new Error("Invalid table entry");G.len=R,G.lit=T,N++}}}return!0}let Me={c:0,lc:0};function Re(g,T,U,v){g=g<<8|ne(U,v),T+=8,Me.c=g,Me.lc=T}let Oe={c:0,lc:0};function Xe(g,T,U,v,A,R,N,I,G){if(g==T){v<8&&(Re(U,v,A,R),U=Me.c,v=Me.lc),v-=8;let W=U>>v;if(W=new Uint8Array([W])[0],I.value+W>G)return!1;let X=N[I.value-1];for(;W-- >0;)N[I.value++]=X}else if(I.value<G)N[I.value++]=g;else return!1;Oe.c=U,Oe.lc=v}function te(g){return g&65535}function ge(g){let T=te(g);return T>32767?T-65536:T}let ve={a:0,b:0};function be(g,T){let U=ge(g),A=ge(T),R=U+(A&1)+(A>>1),N=R,I=R-A;ve.a=N,ve.b=I}function Ae(g,T){let U=te(g),v=te(T),A=U-(v>>1)&65535,R=v+A-32768&65535;ve.a=R,ve.b=A}function We(g,T,U,v,A,R,N){let I=N<16384,G=U>A?A:U,W=1,X,ee;for(;W<=G;)W<<=1;for(W>>=1,X=W,W>>=1;W>=1;){ee=0;let oe=ee+R*(A-X),ae=R*W,ue=R*X,pe=v*W,_e=v*X,Ne,qe,Ge,Ue;for(;ee<=oe;ee+=ue){let Qe=ee,Fe=ee+v*(U-X);for(;Qe<=Fe;Qe+=_e){let pt=Qe+pe,Ot=Qe+ae,ut=Ot+pe;I?(be(g[Qe+T],g[Ot+T]),Ne=ve.a,Ge=ve.b,be(g[pt+T],g[ut+T]),qe=ve.a,Ue=ve.b,be(Ne,qe),g[Qe+T]=ve.a,g[pt+T]=ve.b,be(Ge,Ue),g[Ot+T]=ve.a,g[ut+T]=ve.b):(Ae(g[Qe+T],g[Ot+T]),Ne=ve.a,Ge=ve.b,Ae(g[pt+T],g[ut+T]),qe=ve.a,Ue=ve.b,Ae(Ne,qe),g[Qe+T]=ve.a,g[pt+T]=ve.b,Ae(Ge,Ue),g[Ot+T]=ve.a,g[ut+T]=ve.b)}if(U&W){let pt=Qe+ae;I?be(g[Qe+T],g[pt+T]):Ae(g[Qe+T],g[pt+T]),Ne=ve.a,g[pt+T]=ve.b,g[Qe+T]=Ne}}if(A&W){let Qe=ee,Fe=ee+v*(U-X);for(;Qe<=Fe;Qe+=_e){let pt=Qe+pe;I?be(g[Qe+T],g[pt+T]):Ae(g[Qe+T],g[pt+T]),Ne=ve.a,g[pt+T]=ve.b,g[Qe+T]=Ne}}X=W,W>>=1}return ee}function De(g,T,U,v,A,R,N,I,G){let W=0,X=0,ee=N,oe=Math.trunc(v.value+(A+7)/8);for(;v.value<oe;)for(Re(W,X,U,v),W=Me.c,X=Me.lc;X>=14;){let ue=W>>X-14&16383,pe=T[ue];if(pe.len)X-=pe.len,Xe(pe.lit,R,W,X,U,v,I,G,ee),W=Oe.c,X=Oe.lc;else{if(!pe.p)throw new Error("hufDecode issues");let _e;for(_e=0;_e<pe.lit;_e++){let Ne=me(g[pe.p[_e]]);for(;X<Ne&&v.value<oe;)Re(W,X,U,v),W=Me.c,X=Me.lc;if(X>=Ne&&Z(g[pe.p[_e]])==(W>>X-Ne&(1<<Ne)-1)){X-=Ne,Xe(pe.p[_e],R,W,X,U,v,I,G,ee),W=Oe.c,X=Oe.lc;break}}if(_e==pe.lit)throw new Error("hufDecode issues")}}let ae=8-A&7;for(W>>=ae,X-=ae;X>0;){let ue=T[W<<14-X&16383];if(ue.len)X-=ue.len,Xe(ue.lit,R,W,X,U,v,I,G,ee),W=Oe.c,X=Oe.lc;else throw new Error("hufDecode issues")}return!0}function ct(g,T,U,v,A,R){let N={value:0},I=U.value,G=$(T,U),W=$(T,U);U.value+=4;let X=$(T,U);if(U.value+=4,G<0||G>=65537||W<0||W>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let ee=new Array(65537),oe=new Array(16384);F(oe);let ae=v-(U.value-I);if(Q(g,U,ae,G,W,ee),X>8*(v-(U.value-I)))throw new Error("Something wrong with hufUncompress");he(ee,G,W,oe),De(ee,oe,g,U,X,W,R,A,N)}function lt(g,T,U){for(let v=0;v<U;++v)T[v]=g[T[v]]}function Ze(g){for(let T=1;T<g.length;T++){let U=g[T-1]+g[T]-128;g[T]=U}}function O(g,T){let U=0,v=Math.floor((g.length+1)/2),A=0,R=g.length-1;for(;!(A>R||(T[A++]=g[U++],A>R));)T[A++]=g[v++]}function Mt(g){let T=g.byteLength,U=new Array,v=0,A=new DataView(g);for(;T>0;){let R=A.getInt8(v++);if(R<0){let N=-R;T-=N+1;for(let I=0;I<N;I++)U.push(A.getUint8(v++))}else{let N=R;T-=2;let I=A.getUint8(v++);for(let G=0;G<N+1;G++)U.push(I)}}return U}function tt(g,T,U,v,A,R){let N=new DataView(R.buffer),I=U[g.idx[0]].width,G=U[g.idx[0]].height,W=3,X=Math.floor(I/8),ee=Math.ceil(I/8),oe=Math.ceil(G/8),ae=I-(ee-1)*8,ue=G-(oe-1)*8,pe={value:0},_e=new Array(W),Ne=new Array(W),qe=new Array(W),Ge=new Array(W),Ue=new Array(W);for(let Fe=0;Fe<W;++Fe)Ue[Fe]=T[g.idx[Fe]],_e[Fe]=Fe<1?0:_e[Fe-1]+ee*oe,Ne[Fe]=new Float32Array(64),qe[Fe]=new Uint16Array(64),Ge[Fe]=new Uint16Array(ee*64);for(let Fe=0;Fe<oe;++Fe){let pt=8;Fe==oe-1&&(pt=ue);let Ot=8;for(let ot=0;ot<ee;++ot){ot==ee-1&&(Ot=ae);for(let Ye=0;Ye<W;++Ye)qe[Ye].fill(0),qe[Ye][0]=A[_e[Ye]++],$e(pe,v,qe[Ye]),Be(qe[Ye],Ne[Ye]),at(Ne[Ye]);W==3&&Ie(Ne);for(let Ye=0;Ye<W;++Ye)C(Ne[Ye],Ge[Ye],ot*64)}let ut=0;for(let ot=0;ot<W;++ot){let Ye=U[g.idx[ot]].type;for(let Tt=8*Fe;Tt<8*Fe+pt;++Tt){ut=Ue[ot][Tt];for(let Xt=0;Xt<X;++Xt){let xt=Xt*64+(Tt&7)*8;N.setUint16(ut+0*Ye,Ge[ot][xt+0],!0),N.setUint16(ut+2*Ye,Ge[ot][xt+1],!0),N.setUint16(ut+4*Ye,Ge[ot][xt+2],!0),N.setUint16(ut+6*Ye,Ge[ot][xt+3],!0),N.setUint16(ut+8*Ye,Ge[ot][xt+4],!0),N.setUint16(ut+10*Ye,Ge[ot][xt+5],!0),N.setUint16(ut+12*Ye,Ge[ot][xt+6],!0),N.setUint16(ut+14*Ye,Ge[ot][xt+7],!0),ut+=16*Ye}}if(X!=ee)for(let Tt=8*Fe;Tt<8*Fe+pt;++Tt){let Xt=Ue[ot][Tt]+8*X*2*Ye,xt=X*64+(Tt&7)*8;for(let Bt=0;Bt<Ot;++Bt)N.setUint16(Xt+Bt*2*Ye,Ge[ot][xt+Bt],!0)}}}let Qe=new Uint16Array(I);N=new DataView(R.buffer);for(let Fe=0;Fe<W;++Fe){U[g.idx[Fe]].decoded=!0;let pt=U[g.idx[Fe]].type;if(U[Fe].type==2)for(let Ot=0;Ot<G;++Ot){let ut=Ue[Fe][Ot];for(let ot=0;ot<I;++ot)Qe[ot]=N.getUint16(ut+ot*2*pt,!0);for(let ot=0;ot<I;++ot)N.setFloat32(ut+ot*2*pt,j(Qe[ot]),!0)}}}function $e(g,T,U){let v,A=1;for(;A<64;)v=T[g.value],v==65280?A=64:v>>8==255?A+=v&255:(U[A]=v,A++),g.value++}function Be(g,T){T[0]=j(g[0]),T[1]=j(g[1]),T[2]=j(g[5]),T[3]=j(g[6]),T[4]=j(g[14]),T[5]=j(g[15]),T[6]=j(g[27]),T[7]=j(g[28]),T[8]=j(g[2]),T[9]=j(g[4]),T[10]=j(g[7]),T[11]=j(g[13]),T[12]=j(g[16]),T[13]=j(g[26]),T[14]=j(g[29]),T[15]=j(g[42]),T[16]=j(g[3]),T[17]=j(g[8]),T[18]=j(g[12]),T[19]=j(g[17]),T[20]=j(g[25]),T[21]=j(g[30]),T[22]=j(g[41]),T[23]=j(g[43]),T[24]=j(g[9]),T[25]=j(g[11]),T[26]=j(g[18]),T[27]=j(g[24]),T[28]=j(g[31]),T[29]=j(g[40]),T[30]=j(g[44]),T[31]=j(g[53]),T[32]=j(g[10]),T[33]=j(g[19]),T[34]=j(g[23]),T[35]=j(g[32]),T[36]=j(g[39]),T[37]=j(g[45]),T[38]=j(g[52]),T[39]=j(g[54]),T[40]=j(g[20]),T[41]=j(g[22]),T[42]=j(g[33]),T[43]=j(g[38]),T[44]=j(g[46]),T[45]=j(g[51]),T[46]=j(g[55]),T[47]=j(g[60]),T[48]=j(g[21]),T[49]=j(g[34]),T[50]=j(g[37]),T[51]=j(g[47]),T[52]=j(g[50]),T[53]=j(g[56]),T[54]=j(g[59]),T[55]=j(g[61]),T[56]=j(g[35]),T[57]=j(g[36]),T[58]=j(g[48]),T[59]=j(g[49]),T[60]=j(g[57]),T[61]=j(g[58]),T[62]=j(g[62]),T[63]=j(g[63])}function at(g){let T=.5*Math.cos(.7853975),U=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),A=.5*Math.cos(3*3.14159/16),R=.5*Math.cos(5*3.14159/16),N=.5*Math.cos(3*3.14159/8),I=.5*Math.cos(7*3.14159/16),G=new Array(4),W=new Array(4),X=new Array(4),ee=new Array(4);for(let oe=0;oe<8;++oe){let ae=oe*8;G[0]=v*g[ae+2],G[1]=N*g[ae+2],G[2]=v*g[ae+6],G[3]=N*g[ae+6],W[0]=U*g[ae+1]+A*g[ae+3]+R*g[ae+5]+I*g[ae+7],W[1]=A*g[ae+1]-I*g[ae+3]-U*g[ae+5]-R*g[ae+7],W[2]=R*g[ae+1]-U*g[ae+3]+I*g[ae+5]+A*g[ae+7],W[3]=I*g[ae+1]-R*g[ae+3]+A*g[ae+5]-U*g[ae+7],X[0]=T*(g[ae+0]+g[ae+4]),X[3]=T*(g[ae+0]-g[ae+4]),X[1]=G[0]+G[3],X[2]=G[1]-G[2],ee[0]=X[0]+X[1],ee[1]=X[3]+X[2],ee[2]=X[3]-X[2],ee[3]=X[0]-X[1],g[ae+0]=ee[0]+W[0],g[ae+1]=ee[1]+W[1],g[ae+2]=ee[2]+W[2],g[ae+3]=ee[3]+W[3],g[ae+4]=ee[3]-W[3],g[ae+5]=ee[2]-W[2],g[ae+6]=ee[1]-W[1],g[ae+7]=ee[0]-W[0]}for(let oe=0;oe<8;++oe)G[0]=v*g[16+oe],G[1]=N*g[16+oe],G[2]=v*g[48+oe],G[3]=N*g[48+oe],W[0]=U*g[8+oe]+A*g[24+oe]+R*g[40+oe]+I*g[56+oe],W[1]=A*g[8+oe]-I*g[24+oe]-U*g[40+oe]-R*g[56+oe],W[2]=R*g[8+oe]-U*g[24+oe]+I*g[40+oe]+A*g[56+oe],W[3]=I*g[8+oe]-R*g[24+oe]+A*g[40+oe]-U*g[56+oe],X[0]=T*(g[oe]+g[32+oe]),X[3]=T*(g[oe]-g[32+oe]),X[1]=G[0]+G[3],X[2]=G[1]-G[2],ee[0]=X[0]+X[1],ee[1]=X[3]+X[2],ee[2]=X[3]-X[2],ee[3]=X[0]-X[1],g[0+oe]=ee[0]+W[0],g[8+oe]=ee[1]+W[1],g[16+oe]=ee[2]+W[2],g[24+oe]=ee[3]+W[3],g[32+oe]=ee[3]-W[3],g[40+oe]=ee[2]-W[2],g[48+oe]=ee[1]-W[1],g[56+oe]=ee[0]-W[0]}function Ie(g){for(let T=0;T<64;++T){let U=g[0][T],v=g[1][T],A=g[2][T];g[0][T]=U+1.5747*A,g[1][T]=U-.1873*v-.4682*A,g[2][T]=U+1.8556*v}}function C(g,T,U){for(let v=0;v<64;++v)T[U+v]=Rs.toHalfFloat(S(g[v]))}function S(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(w,Math.abs(g)-1)}function q(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function se(g){let T=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),U=new Uint8Array(Mt(T)),v=new Uint8Array(U.length);return Ze(U),O(U,v),new DataView(v.buffer)}function ce(g){let T=g.array.slice(g.offset.value,g.offset.value+g.size),U=Qr(T),v=new Uint8Array(U.length);return Ze(U),O(U,v),new DataView(v.buffer)}function ie(g){let T=g.viewer,U={value:g.offset.value},v=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),A=new Uint8Array(8192),R=0,N=new Array(g.inputChannels.length);for(let ue=0,pe=g.inputChannels.length;ue<pe;ue++)N[ue]={},N[ue].start=R,N[ue].end=N[ue].start,N[ue].nx=g.columns,N[ue].ny=g.lines,N[ue].size=g.type,R+=N[ue].nx*N[ue].ny*N[ue].size;let I=K(T,U),G=K(T,U);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(I<=G)for(let ue=0;ue<G-I+1;ue++)A[ue+I]=ye(T,U);let W=new Uint16Array(65536),X=y(A,W),ee=$(T,U);ct(g.array,T,U,ee,v,R);for(let ue=0;ue<g.inputChannels.length;++ue){let pe=N[ue];for(let _e=0;_e<N[ue].size;++_e)We(v,pe.start+_e,pe.nx,pe.size,pe.ny,pe.nx*pe.size,X)}lt(W,v,R);let oe=0,ae=new Uint8Array(v.buffer.byteLength);for(let ue=0;ue<g.lines;ue++)for(let pe=0;pe<g.inputChannels.length;pe++){let _e=N[pe],Ne=_e.nx*_e.size,qe=new Uint8Array(v.buffer,_e.end*2,Ne*2);ae.set(qe,oe),oe+=Ne*2,_e.end+=Ne}return new DataView(ae.buffer)}function Le(g){let T=g.array.slice(g.offset.value,g.offset.value+g.size),U=Qr(T),v=g.inputChannels.length*g.lines*g.columns*g.totalBytes,A=new ArrayBuffer(v),R=new DataView(A),N=0,I=0,G=new Array(4);for(let W=0;W<g.lines;W++)for(let X=0;X<g.inputChannels.length;X++){let ee=0;switch(g.inputChannels[X].pixelType){case 1:G[0]=N,G[1]=G[0]+g.columns,N=G[1]+g.columns;for(let ae=0;ae<g.columns;++ae){let ue=U[G[0]++]<<8|U[G[1]++];ee+=ue,R.setUint16(I,ee,!0),I+=2}break;case 2:G[0]=N,G[1]=G[0]+g.columns,G[2]=G[1]+g.columns,N=G[2]+g.columns;for(let ae=0;ae<g.columns;++ae){let ue=U[G[0]++]<<24|U[G[1]++]<<16|U[G[2]++]<<8;ee+=ue,R.setUint32(I,ee,!0),I+=4}break}}return R}function xe(g){let T=g.viewer,U={value:g.offset.value},v=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),A={version:fe(T,U),unknownUncompressedSize:fe(T,U),unknownCompressedSize:fe(T,U),acCompressedSize:fe(T,U),dcCompressedSize:fe(T,U),rleCompressedSize:fe(T,U),rleUncompressedSize:fe(T,U),rleRawSize:fe(T,U),totalAcUncompressedCount:fe(T,U),totalDcUncompressedCount:fe(T,U),acCompression:fe(T,U)};if(A.version<2)throw new Error("EXRLoader.parse: "+Zn.compression+" version "+A.version+" is unsupported");let R=new Array,N=K(T,U)-2;for(;N>0;){let pe=Ce(T.buffer,U),_e=ye(T,U),Ne=_e>>2&3,qe=(_e>>4)-1,Ge=new Int8Array([qe])[0],Ue=ye(T,U);R.push({name:pe,index:Ge,type:Ue,compression:Ne}),N-=pe.length+3}let I=Zn.channels,G=new Array(g.inputChannels.length);for(let pe=0;pe<g.inputChannels.length;++pe){let _e=G[pe]={},Ne=I[pe];_e.name=Ne.name,_e.compression=0,_e.decoded=!1,_e.type=Ne.pixelType,_e.pLinear=Ne.pLinear,_e.width=g.columns,_e.height=g.lines}let W={idx:new Array(3)};for(let pe=0;pe<g.inputChannels.length;++pe){let _e=G[pe];for(let Ne=0;Ne<R.length;++Ne){let qe=R[Ne];_e.name==qe.name&&(_e.compression=qe.compression,qe.index>=0&&(W.idx[qe.index]=pe),_e.offset=pe)}}let X,ee,oe;if(A.acCompressedSize>0)switch(A.acCompression){case 0:X=new Uint16Array(A.totalAcUncompressedCount),ct(g.array,T,U,A.acCompressedSize,X,A.totalAcUncompressedCount);break;case 1:let pe=g.array.slice(U.value,U.value+A.totalAcUncompressedCount),_e=Qr(pe);X=new Uint16Array(_e.buffer),U.value+=A.totalAcUncompressedCount;break}if(A.dcCompressedSize>0){let pe={array:g.array,offset:U,size:A.dcCompressedSize};ee=new Uint16Array(ce(pe).buffer),U.value+=A.dcCompressedSize}if(A.rleRawSize>0){let pe=g.array.slice(U.value,U.value+A.rleCompressedSize),_e=Qr(pe);oe=Mt(_e.buffer),U.value+=A.rleCompressedSize}let ae=0,ue=new Array(G.length);for(let pe=0;pe<ue.length;++pe)ue[pe]=new Array;for(let pe=0;pe<g.lines;++pe)for(let _e=0;_e<G.length;++_e)ue[_e].push(ae),ae+=G[_e].width*g.type*2;tt(W,ue,G,X,ee,v);for(let pe=0;pe<G.length;++pe){let _e=G[pe];if(!_e.decoded)switch(_e.compression){case 2:let Ne=0,qe=0;for(let Ge=0;Ge<g.lines;++Ge){let Ue=ue[pe][Ne];for(let Qe=0;Qe<_e.width;++Qe){for(let Fe=0;Fe<2*_e.type;++Fe)v[Ue++]=oe[qe+Fe*_e.width*_e.height];qe++}Ne++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function Ce(g,T){let U=new Uint8Array(g),v=0;for(;U[T.value+v]!=0;)v+=1;let A=new TextDecoder().decode(U.slice(T.value,T.value+v));return T.value=T.value+v+1,A}function ke(g,T,U){let v=new TextDecoder().decode(new Uint8Array(g).slice(T.value,T.value+U));return T.value=T.value+U,v}function de(g,T){let U=H(g,T),v=$(g,T);return[U,v]}function Pe(g,T){let U=$(g,T),v=$(g,T);return[U,v]}function H(g,T){let U=g.getInt32(T.value,!0);return T.value=T.value+4,U}function $(g,T){let U=g.getUint32(T.value,!0);return T.value=T.value+4,U}function ne(g,T){let U=g[T.value];return T.value=T.value+1,U}function ye(g,T){let U=g.getUint8(T.value);return T.value=T.value+1,U}let fe=function(g,T){let U;return"getBigInt64"in DataView.prototype?U=Number(g.getBigInt64(T.value,!0)):U=g.getUint32(T.value+4,!0)+Number(g.getUint32(T.value,!0)<<32),T.value+=8,U};function Se(g,T){let U=g.getFloat32(T.value,!0);return T.value+=4,U}function B(g,T){return Rs.toHalfFloat(Se(g,T))}function j(g){let T=(g&31744)>>10,U=g&1023;return(g>>15?-1:1)*(T?T===31?U?NaN:1/0:Math.pow(2,T-15)*(1+U/1024):6103515625e-14*(U/1024))}function K(g,T){let U=g.getUint16(T.value,!0);return T.value+=2,U}function le(g,T){return j(K(g,T))}function Ee(g,T,U,v){let A=U.value,R=[];for(;U.value<A+v-1;){let N=Ce(T,U),I=H(g,U),G=ye(g,U);U.value+=3;let W=H(g,U),X=H(g,U);R.push({name:N,pixelType:I,pLinear:G,xSampling:W,ySampling:X})}return U.value+=1,R}function Te(g,T){let U=Se(g,T),v=Se(g,T),A=Se(g,T),R=Se(g,T),N=Se(g,T),I=Se(g,T),G=Se(g,T),W=Se(g,T);return{redX:U,redY:v,greenX:A,greenY:R,blueX:N,blueY:I,whiteX:G,whiteY:W}}function Je(g,T){let U=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=ye(g,T);return U[v]}function St(g,T){let U=H(g,T),v=H(g,T),A=H(g,T),R=H(g,T);return{xMin:U,yMin:v,xMax:A,yMax:R}}function Wt(g,T){let U=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=ye(g,T);return U[v]}function dt(g,T){let U=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=ye(g,T);return U[v]}function un(g,T){let U=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],A=$(g,T),R=$(g,T),N=ye(g,T);return{xSize:A,ySize:R,levelMode:U[N&15],roundingMode:v[N>>4]}}function En(g,T){let U=Se(g,T),v=Se(g,T);return[U,v]}function ua(g,T){let U=Se(g,T),v=Se(g,T),A=Se(g,T);return[U,v,A]}function fa(g,T,U,v,A){if(v==="string"||v==="stringvector"||v==="iccProfile")return ke(T,U,A);if(v==="chlist")return Ee(g,T,U,A);if(v==="chromaticities")return Te(g,U);if(v==="compression")return Je(g,U);if(v==="box2i")return St(g,U);if(v==="envmap")return dt(g,U);if(v==="tiledesc")return un(g,U);if(v==="lineOrder")return Wt(g,U);if(v==="float")return Se(g,U);if(v==="v2f")return En(g,U);if(v==="v3f")return ua(g,U);if(v==="int")return H(g,U);if(v==="rational")return de(g,U);if(v==="timecode")return Pe(g,U);if(v==="preview")return U.value+=A,"skipped";U.value+=A}function jn(g,T){let U=Math.log2(g);return T=="ROUND_DOWN"?Math.floor(U):Math.ceil(U)}function Ks(g,T,U){let v=0;switch(g.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=jn(Math.max(T,U),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function Js(g,T,U,v){let A=new Array(g);for(let R=0;R<g;R++){let N=1<<R,I=T/N|0;v=="ROUND_UP"&&I*N<T&&(I+=1);let G=Math.max(I,1);A[R]=(G+U-1)/U|0}return A}function da(){let g=this,T=g.offset,U={value:0};for(let v=0;v<g.tileCount;v++){let A=H(g.viewer,T),R=H(g.viewer,T);T.value+=8,g.size=$(g.viewer,T);let N=A*g.blockWidth,I=R*g.blockHeight;g.columns=N+g.blockWidth>g.width?g.width-N:g.blockWidth,g.lines=I+g.blockHeight>g.height?g.height-I:g.blockHeight;let G=g.columns*g.totalBytes,X=g.size<g.lines*G?g.uncompress(g):q(g);T.value+=g.size;for(let ee=0;ee<g.lines;ee++){let oe=ee*g.columns*g.totalBytes;for(let ae=0;ae<g.inputChannels.length;ae++){let ue=Zn.channels[ae].name,pe=g.channelByteOffsets[ue]*g.columns,_e=g.decodeChannels[ue];if(_e===void 0)continue;U.value=oe+pe;let Ne=(g.height-(1+I+ee))*g.outLineWidth;for(let qe=0;qe<g.columns;qe++){let Ge=Ne+(qe+N)*g.outputChannels+_e;g.byteArray[Ge]=g.getter(X,U)}}}}}function os(){let g=this,T=g.offset,U={value:0};for(let v=0;v<g.height/g.blockHeight;v++){let A=H(g.viewer,T)-Zn.dataWindow.yMin;g.size=$(g.viewer,T),g.lines=A+g.blockHeight>g.height?g.height-A:g.blockHeight;let R=g.columns*g.totalBytes,I=g.size<g.lines*R?g.uncompress(g):q(g);T.value+=g.size;for(let G=0;G<g.blockHeight;G++){let W=v*g.blockHeight,X=G+g.scanOrder(W);if(X>=g.height)continue;let ee=G*R,oe=(g.height-1-X)*g.outLineWidth;for(let ae=0;ae<g.inputChannels.length;ae++){let ue=Zn.channels[ae].name,pe=g.channelByteOffsets[ue]*g.columns,_e=g.decodeChannels[ue];if(_e!==void 0){U.value=ee+pe;for(let Ne=0;Ne<g.columns;Ne++){let qe=oe+Ne*g.outputChannels+_e;g.byteArray[qe]=g.getter(I,U)}}}}}}function pa(g,T,U){let v={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=g.getUint8(4);let A=g.getUint8(5);v.spec={singleTile:!!(A&2),longName:!!(A&4),deepFormat:!!(A&8),multiPart:!!(A&16)},U.value=8;let R=!0;for(;R;){let N=Ce(T,U);if(N==="")R=!1;else{let I=Ce(T,U),G=$(g,U),W=fa(g,T,U,I,G);W===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${I}'.`):v[N]=W}}if((A&-7)!=0)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function ls(g,T,U,v,A){let R={size:0,viewer:T,array:U,offset:v,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Nt};switch(g.compression){case"NO_COMPRESSION":R.blockHeight=1,R.uncompress=q;break;case"RLE_COMPRESSION":R.blockHeight=1,R.uncompress=se;break;case"ZIPS_COMPRESSION":R.blockHeight=1,R.uncompress=ce;break;case"ZIP_COMPRESSION":R.blockHeight=16,R.uncompress=ce;break;case"PIZ_COMPRESSION":R.blockHeight=32,R.uncompress=ie;break;case"PXR24_COMPRESSION":R.blockHeight=16,R.uncompress=Le;break;case"DWAA_COMPRESSION":R.blockHeight=32,R.uncompress=xe;break;case"DWAB_COMPRESSION":R.blockHeight=256,R.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}let N={};for(let X of g.channels)switch(X.name){case"Y":case"R":case"G":case"B":case"A":N[X.name]=!0,R.type=X.pixelType}let I=!1;if(N.R&&N.G&&N.B)I=!N.A,R.outputChannels=4,R.decodeChannels={R:0,G:1,B:2,A:3};else if(N.Y)R.outputChannels=1,R.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(R.type==1)switch(A){case Qt:R.getter=le;break;case Rt:R.getter=K;break}else if(R.type==2)switch(A){case Qt:R.getter=Se;break;case Rt:R.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+R.type+" for "+g.compression+".");R.columns=R.width;let G=R.width*R.height*R.outputChannels;switch(A){case Qt:R.byteArray=new Float32Array(G),I&&R.byteArray.fill(1,0,G);break;case Rt:R.byteArray=new Uint16Array(G),I&&R.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",A);break}let W=0;for(let X of g.channels)R.decodeChannels[X.name]!==void 0&&(R.channelByteOffsets[X.name]=W),W+=X.pixelType*2;if(R.totalBytes=W,R.outLineWidth=R.width*R.outputChannels,g.lineOrder==="INCREASING_Y"?R.scanOrder=X=>X:R.scanOrder=X=>R.height-1-X,R.outputChannels==4?(R.format=jt,R.colorSpace=Nt):(R.format=zs,R.colorSpace=Un),g.spec.singleTile){R.blockHeight=g.tiles.ySize,R.blockWidth=g.tiles.xSize;let X=Ks(g.tiles,R.width,R.height),ee=Js(X,R.width,g.tiles.xSize,g.tiles.roundingMode),oe=Js(X,R.height,g.tiles.ySize,g.tiles.roundingMode);R.tileCount=ee[0]*oe[0];for(let ae=0;ae<X;ae++)for(let ue=0;ue<oe[ae];ue++)for(let pe=0;pe<ee[ae];pe++)fe(T,v);R.decode=da.bind(R)}else{R.blockWidth=R.width;let X=Math.ceil(R.height/R.blockHeight);for(let ee=0;ee<X;ee++)fe(T,v);R.decode=os.bind(R)}return R}let Qs={value:0},$s=new DataView(e),Ml=new Uint8Array(e),Zn=pa($s,e,Qs),mi=ls(Zn,$s,Ml,Qs,this.type);return mi.decode(),{header:Zn,width:mi.width,height:mi.height,data:mi.byteArray,format:mi.format,colorSpace:mi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Ct,a.magFilter=Ct,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,n,i)}};var Gf=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var E=new Uint8Array(d.length),M=0;M<d.length;++M){var _=d.charCodeAt(M);E[M]=_>96?_-97:_>64?_-39:_+4}for(var L=0,M=0;M<d.length;++M)E[L++]=E[M]<60?n[E[M]]:(E[M]-60)*64+E[++M];return E.buffer.slice(0,L)}function l(d,E,M,_,L,P){var D=r.exports.sbrk,z=M+3&-4,w=D(z*_),y=D(L.length),F=new Uint8Array(r.exports.memory.buffer);F.set(L,y);var V=d(w,M,_,y,L.length);if(V==0&&P&&P(w,z,_),E.set(F.subarray(w,w+M*_)),D(w-D(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var E={object:new Worker(d),pending:0,requests:{}};return E.object.onmessage=function(M){var _=M.data;E.pending-=_.count,E.requests[_.id][_.action](_.value),delete E.requests[_.id]},E}function b(d){for(var E="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),M=new Blob([E],{type:"text/javascript"}),_=URL.createObjectURL(M),L=0;L<d;++L)u[L]=p(_);URL.revokeObjectURL(_)}function x(d,E,M,_,L){for(var P=u[0],D=1;D<u.length;++D)u[D].pending<P.pending&&(P=u[D]);return new Promise(function(z,w){var y=new Uint8Array(M),F=f++;P.pending+=d,P.requests[F]={resolve:z,reject:w},P.object.postMessage({id:F,count:d,size:E,source:y,mode:_,filter:L},[y.buffer])})}function m(d){a.then(function(){var E=d.data;try{var M=new Uint8Array(E.count*E.size);l(r.exports[E.mode],M,E.count,E.size,E.source,r.exports[E.filter]),self.postMessage({id:E.id,count:E.count,action:"resolve",value:M},[M.buffer])}catch(_){self.postMessage({id:E.id,count:E.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(d){b(d)},decodeVertexBuffer:function(d,E,M,_,L){l(r.exports.meshopt_decodeVertexBuffer,d,E,M,_,r.exports[c[L]])},decodeIndexBuffer:function(d,E,M,_){l(r.exports.meshopt_decodeIndexBuffer,d,E,M,_)},decodeIndexSequence:function(d,E,M,_){l(r.exports.meshopt_decodeIndexSequence,d,E,M,_)},decodeGltfBuffer:function(d,E,M,_,L,P){l(r.exports[h[L]],d,E,M,_,r.exports[c[P]])},decodeGltfBufferAsync:function(d,E,M,_,L){return u.length>0?x(d,E,M,h[_],c[L]):a.then(function(){var P=new Uint8Array(d*E);return l(r.exports[h[_]],P,d,E,M,r.exports[c[L]]),P})}}})();var qn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ib=new ci(-1,1,1,-1,0,1),wh=class extends kt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},sb=new wh,Yn=class{constructor(e){this._mesh=new ht(sb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ib)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ul=class extends an{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rn.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $r=class extends an{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},fl=class extends an{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var dl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ul(qn),this.copyPass.material.blending=Ft,this.clock=new Nr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$r!==void 0&&(a instanceof $r?n=!0:a instanceof fl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pl=class extends an{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Vf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var js=class s extends an{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(r,a,{type:Rt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Pt(r,a,{type:Rt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Pt(r,a,{type:Rt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Vf;this.highPassUniforms=rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new He(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rn.clone(qn.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:qn.vertexShader,fragmentShader:qn.fragmentShader,blending:Or,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new gn,this._fsQuad=new Yn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new He(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};js.BlurDirectionX=new He(1,0);js.BlurDirectionY=new He(0,1);var ea={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},ta={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ml={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Wf(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=rb(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new kn(i,e,e);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}function rb(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var na={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Eh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Eh(s,e,t){let n=ab(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function ab(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new k(Math.cos(r),Math.sin(r),a))}return n}var gl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,b=e-f,x=t-p,m,d;b>x?(m=1,d=0):(m=0,d=1);let E=b-m+h,M=x-d+h,_=b-1+2*h,L=x-1+2*h,P=l&255,D=c&255,z=this.perm[P+this.perm[D]]%12,w=this.perm[P+m+this.perm[D+d]]%12,y=this.perm[P+1+this.perm[D+1]]%12,F=.5-b*b-x*x;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[z],b,x));let V=.5-E*E-M*M;V<0?i=0:(V*=V,i=V*V*this._dot(this.grad3[w],E,M));let Y=.5-_*_-L*L;return Y<0?r=0:(Y*=Y,r=Y*Y*this._dot(this.grad3[y],_,L)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),p=1/6,b=(h+u+f)*p,x=h-b,m=u-b,d=f-b,E=e-x,M=t-m,_=n-d,L,P,D,z,w,y;E>=M?M>=_?(L=1,P=0,D=0,z=1,w=1,y=0):E>=_?(L=1,P=0,D=0,z=1,w=0,y=1):(L=0,P=0,D=1,z=1,w=0,y=1):M<_?(L=0,P=0,D=1,z=0,w=1,y=1):E<_?(L=0,P=1,D=0,z=0,w=1,y=1):(L=0,P=1,D=0,z=1,w=1,y=0);let F=E-L+p,V=M-P+p,Y=_-D+p,J=E-z+2*p,re=M-w+2*p,Q=_-y+2*p,me=E-1+3*p,Z=M-1+3*p,he=_-1+3*p,Me=h&255,Re=u&255,Oe=f&255,Xe=this.perm[Me+this.perm[Re+this.perm[Oe]]]%12,te=this.perm[Me+L+this.perm[Re+P+this.perm[Oe+D]]]%12,ge=this.perm[Me+z+this.perm[Re+w+this.perm[Oe+y]]]%12,ve=this.perm[Me+1+this.perm[Re+1+this.perm[Oe+1]]]%12,be=.6-E*E-M*M-_*_;be<0?i=0:(be*=be,i=be*be*this._dot3(this.grad3[Xe],E,M,_));let Ae=.6-F*F-V*V-Y*Y;Ae<0?r=0:(Ae*=Ae,r=Ae*Ae*this._dot3(this.grad3[te],F,V,Y));let We=.6-J*J-re*re-Q*Q;We<0?a=0:(We*=We,a=We*We*this._dot3(this.grad3[ge],J,re,Q));let De=.6-me*me-Z*Z-he*he;return De<0?o=0:(De*=De,o=De*De*this._dot3(this.grad3[ve],me,Z,he)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,b,x=(e+t+n+i)*l,m=Math.floor(e+x),d=Math.floor(t+x),E=Math.floor(n+x),M=Math.floor(i+x),_=(m+d+E+M)*c,L=m-_,P=d-_,D=E-_,z=M-_,w=e-L,y=t-P,F=n-D,V=i-z,Y=w>y?32:0,J=w>F?16:0,re=y>F?8:0,Q=w>V?4:0,me=y>V?2:0,Z=F>V?1:0,he=Y+J+re+Q+me+Z,Me=a[he][0]>=3?1:0,Re=a[he][1]>=3?1:0,Oe=a[he][2]>=3?1:0,Xe=a[he][3]>=3?1:0,te=a[he][0]>=2?1:0,ge=a[he][1]>=2?1:0,ve=a[he][2]>=2?1:0,be=a[he][3]>=2?1:0,Ae=a[he][0]>=1?1:0,We=a[he][1]>=1?1:0,De=a[he][2]>=1?1:0,ct=a[he][3]>=1?1:0,lt=w-Me+c,Ze=y-Re+c,O=F-Oe+c,Mt=V-Xe+c,tt=w-te+2*c,$e=y-ge+2*c,Be=F-ve+2*c,at=V-be+2*c,Ie=w-Ae+3*c,C=y-We+3*c,S=F-De+3*c,q=V-ct+3*c,se=w-1+4*c,ce=y-1+4*c,ie=F-1+4*c,Le=V-1+4*c,xe=m&255,Ce=d&255,ke=E&255,de=M&255,Pe=o[xe+o[Ce+o[ke+o[de]]]]%32,H=o[xe+Me+o[Ce+Re+o[ke+Oe+o[de+Xe]]]]%32,$=o[xe+te+o[Ce+ge+o[ke+ve+o[de+be]]]]%32,ne=o[xe+Ae+o[Ce+We+o[ke+De+o[de+ct]]]]%32,ye=o[xe+1+o[Ce+1+o[ke+1+o[de+1]]]]%32,fe=.6-w*w-y*y-F*F-V*V;fe<0?h=0:(fe*=fe,h=fe*fe*this._dot4(r[Pe],w,y,F,V));let Se=.6-lt*lt-Ze*Ze-O*O-Mt*Mt;Se<0?u=0:(Se*=Se,u=Se*Se*this._dot4(r[H],lt,Ze,O,Mt));let B=.6-tt*tt-$e*$e-Be*Be-at*at;B<0?f=0:(B*=B,f=B*B*this._dot4(r[$],tt,$e,Be,at));let j=.6-Ie*Ie-C*C-S*S-q*q;j<0?p=0:(j*=j,p=j*j*this._dot4(r[ne],Ie,C,S,q));let K=.6-se*se-ce*ce-ie*ie-Le*Le;return K<0?b=0:(K*=K,b=K*K*this._dot4(r[ye],se,ce,ie,Le)),27*(h+u+f+p+b)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var ia=class s extends an{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Wf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Pt(this.width,this.height,{type:Rt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _t({defines:Object.assign({},ea.defines),uniforms:rn.clone(ea.uniforms),vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,blending:Ft,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ar,this.normalMaterial.blending=Ft,this.pdMaterial=new _t({defines:Object.assign({},na.defines),uniforms:rn.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _t({defines:Object.assign({},ta.defines),uniforms:rn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:Ft}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _t({uniforms:rn.clone(qn.uniforms),vertexShader:qn.vertexShader,fragmentShader:qn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zr,blendDst:Ji,blendEquation:pn,blendSrcAlpha:Br,blendDstAlpha:Ji,blendEquationAlpha:pn}),this.blendMaterial=new _t({uniforms:rn.clone(ml.uniforms),vertexShader:ml.vertexShader,fragmentShader:ml.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ao,blendSrc:zr,blendDst:Ji,blendEquation:pn,blendSrcAlpha:Br,blendDstAlpha:Ji,blendEquationAlpha:pn}),this._fsQuad=new Yn(null),this._originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Wi,this.depthTexture.format=Ci,this.depthTexture.type=Ri,this.normalRenderTarget=new Pt(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:Rt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Eh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ft,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ft,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ft,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ft,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ft,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}_restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}_generateNoise(e=64){let t=new gl,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new kn(i,e,e,jt,sn);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}};ia.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var vl=class extends an{constructor(){super(),this.uniforms=rn.clone(sa.uniforms),this.material=new Tr({name:sa.name,uniforms:this.uniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader}),this._fsQuad=new Yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xf=[{id:"c01-circuito-chiuso",code:"c01",blurb:"Una lampada si accende solo se il giro \xE8 completo.",flow:"always",n:0,name:"Circuito chiuso",title:"Il circuito chiuso",goal:"Collega la lampada al quadro con due fili: la fase e il neutro. Poi dai corrente con la levetta del quadro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:[],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase (marrone) parte dal morsetto FASE del quadro e arriva a un morsetto della lampada.","Il neutro (blu) parte dal morsetto NEUTRO del quadro e arriva all\u2019altro morsetto della lampada.","Servono due fili in tutto, uno per ciascun morsetto della lampada. Poi tocca la levetta del quadro."]},{id:"c02-presa",code:"c02",blurb:"Fase, neutro e terra: dove vanno e perch\xE9.",flow:"always",n:1,name:"Presa",title:"La presa di corrente",goal:"Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{F:{l:"FASE"},PE:{l:"TERRA"},N:{l:"NEUTRO"}}},{id:"P",type:"presa",short:"Presa",title:"Presa bipasso 10/16 A",terms:{L:{l:"L"},PE:{l:"PE"},N:{l:"N"}}}],controls:[],load:["P.L","P.N"],earth:["Q.PE","P.PE"],pol:"P.L",room:"tavolo",solution:[["Q.F","P.L","marrone"],["Q.N","P.N","blu"],["Q.PE","P.PE","gv"]],hints:["Il marrone \xE8 la fase: va dal quadro al morsetto L della presa.","Il blu \xE8 il neutro: va dal quadro al morsetto N della presa.","Il giallo-verde \xE8 la terra: va al morsetto PE, quello al centro."]},{id:"c03-interrotto",code:"c03",blurb:"Interrompere la fase, non il neutro.",flow:"always",n:2,name:"Interrotto",title:"Punto luce interrotto",goal:"Accendi e spegni la lampada con un interruttore. L\u2019interruttore interrompe la fase, mai il neutro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L.A","marrone"],["Q.N","L.B","blu"]],hints:["Parti dalla fase: dal quadro va all\u2019interruttore, non direttamente alla lampada.","Dall\u2019altro morsetto dell\u2019interruttore il filo va a un morsetto della lampada.","Il neutro (blu) va dal quadro all\u2019altro morsetto della lampada, senza passare dall\u2019interruttore."]},{id:"c04-parallelo",code:"c04",blurb:"Il parallelo: due lampade, un solo comando.",flow:"always",n:0,name:"Parallelo",title:"Due lampade, un interruttore",goal:"Comanda due lampade con un solo interruttore: premendolo, si accendono e si spengono insieme.",loadName:"Le lampade",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L1",type:"lamp",short:"Lampada 1",title:"Portalampada 1",terms:{B:{l:"B"},A:{l:"A"}}},{id:"L2",type:"lamp",short:"Lampada 2",title:"Portalampada 2",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L1.A","L1.B"],loads:[["L1.A","L1.B"],["L2.A","L2.B"]],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L1.A","marrone"],["S.b","L2.A","marrone"],["Q.N","L1.B","blu"],["Q.N","L2.B","blu"]],hints:["La fase va dal quadro all\u2019interruttore, come in un punto luce con una sola lampada.","Dal morsetto 2 dell\u2019interruttore parte un filo per ogni lampada: due fili di fase, uno su ciascuna.","Il neutro (blu) va dal quadro a tutte e due le lampade, sul morsetto che resta libero, senza passare dall\u2019interruttore."]},{id:"c05-deviato",code:"c05",blurb:"Accendere e spegnere da due punti.",flow:"onDemand",n:3,name:"Deviato",title:"Punto luce deviato",goal:"Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","D2.1","nero"],["D1.2","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase entra nel morsetto C (comune) del primo deviatore.","I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.","Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori."]},{id:"c06-invertito",code:"c06",blurb:"Comandare la stessa luce da tre punti.",flow:"onDemand",n:4,name:"Invertito",title:"Punto luce invertito",goal:"Aggiungi un terzo punto di comando in mezzo, con l\u2019invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"I",type:"inv",short:"Invertitore",title:"Invertitore",where:"Camera",terms:{1:{l:"1"},2:{l:"2"},3:{l:"3"},4:{l:"4"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","I","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","I.1","nero"],["D1.2","I.2","grigio"],["I.3","D2.1","nero"],["I.4","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["\xC8 come la deviata, ma in mezzo ai due fili di collegamento metti l\u2019invertitore.","I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell\u2019invertitore.","Dai morsetti 3 e 4 (in basso) dell\u2019invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada."]}];var Zs=s=>Xf.find(e=>e.id===s),Ah=(s,e)=>s.map(t=>e[t.id]?{...t,...e[t.id]}:t),rM={...Zs("c03-interrotto"),id:"t01-bagno",quadroOnly:!0,code:"t01",n:0,name:"Bagno",title:"Il bagno",blurb:"Punto luce interrotto, con l\u2019interruttore vicino alla porta.",goal:"Cabla il punto luce del bagno: un interruttore vicino alla porta accende e spegne la lampada.",comps:Ah(Zs("c03-interrotto").comps,{S:{short:"Interruttore",title:"Interruttore del bagno",where:"Porta"},L:{short:"Lampada",title:"Lampada del bagno"}})},aM={...Zs("c05-deviato"),id:"t02-camera",quadroOnly:!0,code:"t02",n:0,name:"Camera",title:"La camera",blurb:"Punto luce deviato, dalla porta e dal comodino.",goal:"Cabla il punto luce della camera: si accende e si spegne dalla porta e dal comodino.",comps:Ah(Zs("c05-deviato").comps,{D1:{short:"Deviatore porta",title:"Deviatore della porta",where:"Porta"},D2:{short:"Deviatore comodino",title:"Deviatore del comodino",where:"Comodino"},L:{short:"Lampada",title:"Lampada della camera"}})},oM={...Zs("c06-invertito"),id:"t03-corridoio",quadroOnly:!0,code:"t03",n:0,name:"Corridoio",title:"Il corridoio",blurb:"Punto luce invertito, da tre punti.",goal:"Cabla il punto luce del corridoio: si comanda dall\u2019ingresso, dal soggiorno e dalla camera.",comps:Ah(Zs("c06-invertito").comps,{D1:{short:"Deviatore ingresso",title:"Deviatore dell\u2019ingresso",where:"Ingresso"},I:{short:"Invertitore soggiorno",title:"Invertitore del soggiorno",where:"Soggiorno"},D2:{short:"Deviatore camera",title:"Deviatore della camera",where:"Camera"},L:{short:"Lampada",title:"Lampada del corridoio"}})};var Vt={size:{w:9,d:8},rooms:[{id:"cucina",name:"Cucina",x:0,z:0,w:3,d:3.5,scene:!0},{id:"bagno",name:"Bagno",x:3,z:0,w:2,d:3.5,circuit:"t01-bagno",lamp:[4,1.75]},{id:"camera",name:"Camera",x:5,z:0,w:4,d:3.5,circuit:"t02-camera",lamp:[7,1.75]},{id:"corridoio",name:"Corridoio",x:0,z:3.5,w:9,d:1.5,circuit:"t03-corridoio",lamp:[4.5,4.25]},{id:"ingresso",name:"Ingresso",x:0,z:5,w:2.5,d:3,scene:!0},{id:"soggiorno",name:"Soggiorno",x:2.5,z:5,w:6.5,d:3,scene:!0}],controls:{"t01-bagno":{S:{x:3.3,z:3.5,face:"s",label:"Interruttore bagno"}},"t02-camera":{D1:{x:5.4,z:3.5,face:"s",label:"Porta camera"},D2:{x:9,z:1.4,face:"w",label:"Comodino"}},"t03-corridoio":{D1:{x:0,z:4.25,face:"e",label:"Ingresso"},I:{x:4,z:5,face:"s",label:"Soggiorno"},D2:{x:9,z:4.25,face:"w",label:"Camera"}}},breaker:{x:0,z:6.5,face:"e",label:"Quadro"},wallsH:[[0,0,9],[3.5,0,1],[3.5,2,3.9],[3.5,4.8,6],[3.5,7,9],[5,0,1.6],[5,2.4,5],[5,6,9],[8,0,9]],wallsV:[[0,0,8],[9,0,8],[3,0,3.5],[5,0,3.5],[2.5,5,6],[2.5,7,8]],furniture:[{room:"camera",x:7.3,z:.3,w:1.5,d:2,h:.5,c:"#B9A58A"},{room:"camera",x:8.5,z:1.1,w:.4,d:.5,h:.5,c:"#9C8666"},{room:"bagno",x:3.2,z:.2,w:1.6,d:.6,h:.45,c:"#E9EEF0"},{room:"bagno",x:4,z:2.4,w:.9,d:.9,h:.15,c:"#CFE0E8"},{room:"soggiorno",x:3.5,z:6.7,w:2.4,d:.9,h:.5,c:"#8A94A3"},{room:"soggiorno",x:6.3,z:5.8,w:1.4,d:1,h:.4,c:"#B9A58A"},{room:"cucina",x:.2,z:.2,w:2.6,d:.6,h:.9,c:"#D8D2C4"}]},ob=["L\u2019interruttore del bagno sta sul filo di fase, tra il quadro e la lampada.","Il neutro va diretto alla lampada.","Si cabla come nel livello dell\u2019interruttore."],lb=["Due deviatori comandano la stessa lampada: porta e comodino.","I due fili di collegamento vanno 1 con 1 e 2 con 2.","La fase entra nel comune del primo; il comune del secondo va alla lampada."],cb=["Tre punti di comando: ingresso, soggiorno e camera.","L\u2019invertitore sta in mezzo ai due fili di collegamento tra i deviatori.","Ogni comando cambia lo stato della luce."],Th=(s,e,t)=>({type:"spiegazione",title:s,paras:[e,t]}),lM={"t01-bagno":{support:"passi",lesson:{pages:[Th("Il bagno","Un punto luce con un interruttore vicino alla porta. Lo hai gi\xE0 fatto: qui lo ritrovi dentro una casa vera.","Se ti serve, ripassa la lezione del punto luce interrotto dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["S.a"],color:"marrone",short:"1 Fase",title:"Porta la fase all\u2019interruttore",text:"Dalla FASE del quadro al morsetto 1 dell\u2019interruttore."},{kind:"wire",from:"S.b",to:["L.A"],color:"marrone",short:"2 Lampada",title:"Dall\u2019interruttore alla lampada",text:"Dal morsetto 2 dell\u2019interruttore a un morsetto della lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"3 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"4 Levetta",title:"Dai corrente",text:"Tocca la levetta del quadro, poi prova l\u2019interruttore."},{kind:"verify",short:"5 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:ob},"t02-camera":{support:"passi",lesson:{pages:[Th("La camera","Un punto luce che si comanda dalla porta e dal comodino, con due deviatori.","Se ti serve, ripassa la lezione del punto luce deviato dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel primo deviatore",text:"Dalla FASE al comune C del deviatore della porta."},{kind:"wire",from:"D1.1",to:["D2.1"],color:"nero",short:"2 Collegamento 1",title:"Primo filo di collegamento",text:"Dal morsetto 1 del primo deviatore al morsetto 1 del secondo."},{kind:"wire",from:"D1.2",to:["D2.2"],color:"grigio",short:"3 Collegamento 2",title:"Secondo filo di collegamento",text:"Dal morsetto 2 del primo deviatore al morsetto 2 del secondo."},{kind:"wire",from:"D2.C",to:["L.A"],color:"marrone",short:"4 Lampada",title:"Dal secondo deviatore alla lampada",text:"Dal comune C del deviatore del comodino alla lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"5 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"6 Levetta",title:"Dai corrente",text:"Tocca la levetta, poi prova i due deviatori."},{kind:"verify",short:"7 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:lb},"t03-corridoio":{support:"obiettivo",lesson:{pages:[Th("Il corridoio","Un punto luce che si comanda da tre punti: ingresso, soggiorno e camera.","Se ti serve, ripassa la lezione del punto luce invertito dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel deviatore dell\u2019ingresso",text:"Dalla FASE al comune C del deviatore dell\u2019ingresso."},{kind:"verify",short:"2 Verifica",title:"Collega i tre punti di comando",text:"Collega il deviatore dell\u2019ingresso ai morsetti 1 e 2 dell\u2019invertitore, poi i morsetti 3 e 4 al deviatore della camera. Il comune C di quest\u2019ultimo va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica."}],summary:cb}};function Rh(){let s=[];return Vt.rooms.filter(e=>e.circuit).forEach(e=>{let t=Vt.controls[e.circuit]||{};Object.keys(t).forEach(n=>s.push({room:e.id,circuit:e.circuit,id:n,...t[n]}))}),s}var ra=new k;function wn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ra.copy(e),ra[n]=0,ra.normalize();let c=.5*a/(a+o),h=1-ra.angleTo(s)/l;return Math.sign(ra[t])===1?h*c:o/(a+o)+c+c*(1-h)}var bl=class extends _n{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new k,l=new k,c=new k(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,b=new k,x=.5/i;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:b.set(1,0,0),f[d+0]=wn(b,l,"z","y",r,n),f[d+1]=1-wn(b,l,"y","z",r,t);break;case 1:b.set(-1,0,0),f[d+0]=1-wn(b,l,"z","y",r,n),f[d+1]=1-wn(b,l,"y","z",r,t);break;case 2:b.set(0,1,0),f[d+0]=1-wn(b,l,"x","z",r,e),f[d+1]=wn(b,l,"z","x",r,n);break;case 3:b.set(0,-1,0),f[d+0]=1-wn(b,l,"x","z",r,e),f[d+1]=1-wn(b,l,"z","x",r,n);break;case 4:b.set(0,0,1),f[d+0]=1-wn(b,l,"x","y",r,e),f[d+1]=1-wn(b,l,"y","x",r,t);break;case 5:b.set(0,0,-1),f[d+0]=wn(b,l,"x","y",r,e),f[d+1]=1-wn(b,l,"y","x",r,t);break}}};var On=1.45,oa=2.75,yl="assets/trilocale/";function la(s,e){let t=document.createElement("canvas");return t.width=t.height=s,e(t.getContext("2d"),s),t}function on(s,e=1,t=!0){let n=new Er(s);return n.wrapS=n.wrapT=Yt,n.repeat.set(e,e),n.anisotropy=4,t&&(n.colorSpace=At),n}function ca(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function ha(s,e,t,n,i=.06){for(let r=0;r<e*40;r++){let a=Math.floor(n()*255);s.fillStyle=`rgba(${a},${a},${a},${i})`,s.fillRect(n()*e,n()*e,1+n()*t,1+n()*t)}}var hb=()=>la(256,(s,e)=>{s.fillStyle="#808080",s.fillRect(0,0,e,e),ha(s,e,3,ca(7),.12)});function aa(s,e,t,n,i,r){return la(s,a=>{let o=ca(i),l=s/e;a.fillStyle=r?"#202020":n,a.fillRect(0,0,s,s);for(let c=0;c<e;c++)for(let h=0;h<e;h++){if(r)a.fillStyle="#d0d0d0";else{let u=(o()-.5)*10,f=new ze(t).offsetHSL(0,0,u/255);a.fillStyle="#"+f.getHexString()}a.fillRect(c*l+2,h*l+2,l-4,l-4)}r||ha(a,s,2,o,.04)})}function qf(s){return la(512,(e,t)=>{let n=ca(11),i=16,r=12,a=t/i,o=t/r;e.fillStyle=s?"#000":"#5a2a1a",e.fillRect(0,0,t,t);for(let l=0;l<i;l++)for(let c=-1;c<=r;c++){let h=c*o+l%2*o/2,u=e.createLinearGradient(h,0,h+o,0);if(s)u.addColorStop(0,"#202020"),u.addColorStop(.5,"#f0f0f0"),u.addColorStop(1,"#202020");else{let f=new ze().setHSL(.04+(n()-.5)*.02,.55,.36+(n()-.5)*.08);u.addColorStop(0,"#"+f.clone().offsetHSL(0,0,-.12).getHexString()),u.addColorStop(.5,"#"+f.getHexString()),u.addColorStop(1,"#"+f.clone().offsetHSL(0,0,-.14).getHexString())}e.fillStyle=u,e.fillRect(h+1,l*a,o-2,a*.92)}s||ha(e,t,3,n,.08)})}function Ch(s,e,t){return la(256,(n,i)=>{let r=ca(t);n.fillStyle=s,n.fillRect(0,0,i,i),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(14,14,i-28,i-28),n.lineWidth=3,n.strokeRect(32,32,i-64,i-64);for(let a=0;a<6;a++)n.beginPath(),n.arc(i/2,i/2,20+a*14,0,Math.PI*2),n.stroke();ha(n,i,2,r,.1)})}var xl=(s,e)=>la(128,(t,n)=>{t.fillStyle=s,t.fillRect(0,0,n,n);for(let i=0;i<n;i+=2)t.fillStyle=`rgba(0,0,0,${.04+i%4*.01})`,t.fillRect(i,0,1,n),t.fillRect(0,i,n,1);ha(t,n,1,ca(e),.05)});function Yf(s){let e={},t=on(hb(),3,!1);e.wall=new Ke({color:15657182,roughness:.92,bumpMap:t,bumpScale:.6}),e.wallCut=new Ke({color:4212302,roughness:.8}),e.outside=new Ke({color:14865080,roughness:.95,bumpMap:t,bumpScale:1}),e.parquet=new Ke({color:11831903,roughness:.55});let n=new Yi,i=(r,a,o)=>n.load(yl+r,l=>{l.wrapS=l.wrapT=Yt,l.anisotropy=8,a&&(l.colorSpace=At),o(l),s()},void 0,()=>{});return i("parquet.webp",!0,r=>{r.repeat.set(1,1),e.parquet.map=r,e.parquet.color.set(16777215),e.parquet.needsUpdate=!0}),i("parquet-ruvido.webp",!1,r=>{e.parquet.roughnessMap=r,e.parquet.roughness=1,e.parquet.needsUpdate=!0}),i("parquet-rilievo.webp",!1,r=>{e.parquet.bumpMap=r,e.parquet.bumpScale=.4,e.parquet.needsUpdate=!0}),e.tiles=new Ke({map:on(aa(512,6,"#d9d6cf","#9c978d",3),1),bumpMap:on(aa(512,6,0,0,3,!0),1,!1),bumpScale:.8,roughness:.35}),e.kitchenFloor=new Ke({map:on(aa(512,4,"#8f8a82","#5d5953",5),1),bumpMap:on(aa(512,4,0,0,5,!0),1,!1),bumpScale:.8,roughness:.6}),e.grass=new Ke({color:6257221,roughness:1}),i("prato.webp",!0,r=>{r.repeat.set(10,10),e.grass.map=r,e.grass.color.set(12108968),e.grass.needsUpdate=!0}),e.paving=new Ke({map:on(aa(256,4,"#b7b1a6","#8a857c",9),1),roughness:.9}),e.roof=new Ke({map:on(qf(!1),1),bumpMap:on(qf(!0),1,!1),bumpScale:2,roughness:.75,transparent:!0,opacity:1}),e.fascia=new Ke({color:7031347,roughness:.7,transparent:!0,opacity:1}),e.wood=new Ke({color:9068348,roughness:.5}),e.woodLight=new Ke({color:14073754,roughness:.55}),e.door=new Ke({color:15921128,roughness:.45}),e.white=new Ke({color:16052974,roughness:.3}),e.ceramic=new Jt({color:16777215,roughness:.12,clearcoat:1,clearcoatRoughness:.05}),e.steel=new Ke({color:13159632,roughness:.28,metalness:1}),e.black=new Ke({color:1382170,roughness:.15,metalness:.2}),e.stone=new Ke({color:3815478,roughness:.25}),e.cabinet=new Ke({color:6254442,roughness:.45}),e.water=new Ke({color:12573152,roughness:.05,metalness:.1,transparent:!0,opacity:.6}),e.mirror=new Ke({color:14673642,roughness:.02,metalness:1}),e.glass=new Ke({color:10466500,roughness:.05,metalness:.6,emissive:0}),e.frame=new Ke({color:16184818,roughness:.4}),e.duvet=new Ke({map:on(xl("#e9e4da",2),4),roughness:.95}),e.blanket=new Ke({map:on(xl("#7b8f86",3),4),roughness:.95}),e.pillow=new Ke({map:on(xl("#f5f2ec",4),2),roughness:.95}),e.rugLiving=new Ke({map:on(Ch("#a65c46","#e8d5b5",21)),roughness:1}),e.rugBed=new Ke({map:on(Ch("#d9d2c3","#8a8f86",22)),roughness:1}),e.runner=new Ke({map:on(Ch("#3e4a5c","#c9b48a",23)),roughness:1}),e.towel=new Ke({map:on(xl("#7fa6b5",5),3),roughness:1}),e.screen=new Ke({color:724240,roughness:.05,metalness:.5}),e.cord=new Ke({color:2236962,roughness:.6}),e.plate=new Ke({color:16513782,roughness:.3}),e.rocker=new Ke({color:15329249,roughness:.25}),e.panel=new Ke({color:15855852,roughness:.35}),e.panelDoor=new Ke({color:3819090,roughness:.1,transparent:!0,opacity:.55}),e.book=[10238766,3103354,13939804,5204806,7228018].map(r=>new Ke({color:r,roughness:.8})),e}var jf=s=>(s.castShadow=!0,s.receiveShadow=!0,s);function Ve(s,e,t,n,i,r,a,o,l=.02){let c=jf(new ht(new bl(r,a,o,2,Math.min(l,r/2,a/2,o/2)),e));return c.position.set(t+r/2,n+a/2,i+o/2),s.add(c),c}function pi(s,e,t,n,i,r,a=.002,o){let l=new Ti(i,r);if(o){let h=l.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*i/o,h.getY(u)*r/o)}let c=new ht(l,e);return c.rotation.x=-Math.PI/2,c.position.set(t+i/2,a,n+r/2),c.receiveShadow=!0,s.add(c),c}function _l(s,e,t,n,i,r,a,o=24,l){let c=jf(new ht(new Ei(l===void 0?r:l,r,a,o),e));return c.position.set(t,n+a/2,i),s.add(c),c}function Ii(s,e,t,n,i){let r=new wt;Ve(r,e.wood,-.21,.44,-.21,.42,.04,.42,.01),[[-.19,-.19],[.16,-.19],[-.19,.16],[.16,.16]].forEach(([a,o])=>Ve(r,e.wood,a,0,o,.03,.44,.03,.005)),Ve(r,e.wood,-.21,.48,.17,.42,.42,.03,.01),r.position.set(t,0,n),r.rotation.y=i,s.add(r)}function Zf(s,e){Ve(s,e.cabinet,.7,0,.05,2.25,.86,.6,.01),Ve(s,e.stone,.68,.86,.04,2.29,.04,.63,.008),Ve(s,e.steel,1.15,.89,.15,.5,.02,.38,.01),Ve(s,e.black,2.05,.9,.12,.6,.01,.48,.005),[[2.2,.24],[2.5,.24],[2.2,.48],[2.5,.48]].forEach(([i,r])=>_l(s,e.steel,i,.905,r,.07,.006,24)),Ve(s,e.steel,.05,0,.05,.62,1.4,.64,.02),Ve(s,e.woodLight,.9,.72,1.75,1.3,.04,.8,.01),[[.95,1.8],[2.13,1.8],[.95,2.48],[2.13,2.48]].forEach(([i,r])=>Ve(s,e.woodLight,i,0,r,.05,.72,.05,.01)),Ii(s,e,1.25,1.45,0),Ii(s,e,1.85,1.45,0),Ii(s,e,1.25,2.9,Math.PI),Ii(s,e,1.85,2.9,Math.PI),_l(s,e.white,1.55,.76,2.15,.12,.05,24,.14);let t=Ve(s,e.ceramic,3.08,0,.06,1.75,.55,.78,.08);t.userData.keep=!0,Ve(s,e.water,3.18,.4,.15,1.55,.02,.6,.06),Ve(s,e.cabinet,3.06,0,1.55,.5,.82,.8,.01),Ve(s,e.ceramic,3.05,.82,1.6,.48,.1,.7,.04),Ve(s,e.mirror,3.03,1,1.65,.02,.42,.6,.005);let n=new wt;Ve(n,e.ceramic,-.18,0,-.17,.36,.4,.34,.12),Ve(n,e.ceramic,-.2,.38,-.2,.4,.04,.5,.15),Ve(n,e.ceramic,.16,.38,-.2,.14,.42,.4,.04),n.position.set(4.68,0,2.4),n.rotation.y=-Math.PI/2,s.add(n),Ve(s,e.towel,4.93,1,1.3,.04,.5,.4,.02),pi(s,e.towel,3.5,2.6,.7,.5,.012),pi(s,e.rugBed,6.4,.6,2.4,2.3,.006),Ve(s,e.wood,6.95,0,.95,1.95,.32,1.65,.03),Ve(s,e.wood,8.85,0,.92,.08,1.05,1.71,.03),Ve(s,e.duvet,6.98,.32,.98,1.85,.2,1.59,.08),Ve(s,e.blanket,6.95,.42,.97,.6,.12,1.61,.06),Ve(s,e.pillow,8.35,.5,1.08,.42,.14,.66,.07),Ve(s,e.pillow,8.35,.5,1.82,.42,.14,.66,.07),Ve(s,e.wood,8.45,0,.35,.48,.5,.45,.02),Ve(s,e.wood,8.45,0,2.72,.48,.5,.45,.02),Ve(s,e.woodLight,5.06,0,.12,.62,1.4,1.9,.02),Ve(s,e.cabinet,5.1,0,2.6,.45,.75,.7,.02),pi(s,e.runner,2.2,3.95,4.6,.75,.006),Ve(s,e.wood,7.6,0,3.58,1,.8,.32,.02),e.book.forEach((i,r)=>Ve(s,i,7.7+r*.07,.8,3.62,.06,.22+r%3*.03,.2,.004)),Ve(s,e.woodLight,1.8,0,7.35,.6,.9,.55,.02),_l(s,e.wood,2.2,0,5.4,.18,.02,24),_l(s,e.wood,2.2,0,5.4,.02,1.4,12),pi(s,e.rugLiving,.5,7,.9,.6,.006),pi(s,e.rugLiving,4.4,5.8,2.8,1.9,.006),Ve(s,e.wood,5.2,0,6.35,1.2,.38,.65,.02),Ve(s,e.black,6.45,0,5.1,1.9,.45,.42,.01),Ve(s,e.screen,6.85,.45,5.18,1.1,.66,.05,.005),Ve(s,e.woodLight,8.5,0,5.05,.45,1.4,1.3,.02);for(let i=0;i<3;i++)e.book.forEach((r,a)=>Ve(s,r,8.55,.15+i*.45,5.15+a*.2,.3,.26+a%2*.04,.16,.004));Ve(s,e.wood,2.85,.74,5.45,1.4,.04,.85,.01),[[2.9,5.5],[4.18,5.5],[2.9,6.23],[4.18,6.23]].forEach(([i,r])=>Ve(s,e.wood,i,0,r,.05,.74,.05,.01)),Ii(s,e,3.2,5.2,0),Ii(s,e,3.9,5.2,0),Ii(s,e,3.2,6.6,Math.PI),Ii(s,e,3.9,6.6,Math.PI)}var Kf=[{file:"divano.glb",x:5.8,z:7.3,rot:Math.PI,scale:1,stand:[4.75,6.85,2.15,.85]},{file:"poltrona.glb",x:7.6,z:6.7,rot:-Math.PI/2-.4,scale:1,stand:[7.25,6.35,.75,.75]},{file:"pianta.glb",x:8.55,z:7.55,rot:.6,scale:1.1,stand:null}];function Jf(s,e,t){let[n,i,r,a]=t,o=new wt;return Ve(o,e.blanket,n,0,i,r,.45,a,.08),Ve(o,e.blanket,n,.45,i+a-.2,r,.4,.2,.08),s.add(o),o}function Qf(s,e){[["h",3.5,1,2,-1],["h",3.5,3.9,4.8,-1],["h",3.5,6,7,-1],["h",5,1.6,2.4,1],["h",5,5,6,1],["v",2.5,6,7,-1]].forEach(([n,i,r,a,o])=>{let l=a-r-.04,c=new wt;Ve(c,e.door,0,0,-.02,l,On,.04,.01);let h=new ht(new Xi(.025,12,8),e.steel);h.position.set(l-.07,1,.04),c.add(h),n==="h"?(c.position.set(r+.02,0,i),c.rotation.y=o*1.45):(c.position.set(i,0,r+.02),c.rotation.y=-Math.PI/2+o*1.45),s.add(c)})}var ub=[["n",1,2.1,"cucina"],["n",3.6,4.4,"bagno"],["n",6.2,7.6,"camera"],["s",4.4,6.6,"soggiorno"],["s",7,8.4,"soggiorno"],["e",6,7.2,"soggiorno"],["w",1.2,2.4,"cucina"],["w",3.9,4.6,"corridoio"]];function $f(s,e,t,n){let i=[];function a(l,c,h,u){let f=new wt;Ve(f,t.frame,-l/2,c,-.02,l,h,.04,.005);let p=new ht(new Ti(l-.12,h-.12),u);return p.position.set(0,c+h/2,.022),f.add(p),Ve(f,t.frame,-.02,c+.06,0,.04,h-.12,.03,.004),f}let o={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};return ub.forEach(([l,c,h,u])=>{let f=t.glass.clone(),[p,b]=o[l],x=h-c,m=(c+h)/2,d=l==="n"||l==="s"?[m,l==="n"?0:n.d]:[l==="w"?0:n.w,m],E=a(x,.9,1.35,f);E.position.set(d[0]+p*(.12/2+.02),0,d[1]+b*(.12/2+.02)),E.rotation.y=Math.atan2(p,b),e.add(E);let M=a(x,.9,On-.9,f);M.position.set(d[0]-p*(.12/2+.004),0,d[1]-b*(.12/2+.004)),M.rotation.y=Math.atan2(-p,-b),s.add(M),i.push({room:u,glass:f})}),i}function ed(s,e){let r=e.w+.45,a=-.45,o=e.d+.45,l=(o-a)/2,c=(a+o)/2,h=[-.45+l,2.3,c],u=[r-l,2.3,c],f=[-.45,0,a],p=[r,0,a],b=[r,0,o],x=[-.45,0,o],m=[],d=[],E=Math.hypot(l,2.3);function M(z,w,y,F){[z,w,y].forEach(V=>{m.push(...V),F==="z"?d.push(V[0]/2.4,Math.abs(V[2]-c)/l*E/2.4):d.push(V[2]/2.4,Math.min(V[0]- -.45,r-V[0])/l*E/2.4)})}M(f,h,p,"z"),M(p,h,u,"z"),M(b,u,x,"z"),M(x,u,h,"z"),M(p,u,b,"x"),M(x,h,f,"x");let _=new kt;_.setAttribute("position",new yt(m,3)),_.setAttribute("uv",new yt(d,2)),_.computeVertexNormals();let L=new wt,P=new ht(_,s.roof);P.castShadow=!0,P.material.side=hn,L.add(P);let D=Ve(L,s.fascia,-.45,-.18,a,r- -.45,.18,.08,.01);return D.userData.roof=!0,Ve(L,s.fascia,-.45,-.18,o-.08,r- -.45,.18,.08,.01),Ve(L,s.fascia,-.45,-.18,a,.08,.18,o-a,.01),Ve(L,s.fascia,r-.08,-.18,a,.08,.18,o-a,.01),Ve(L,s.fascia,1.9,.6,1.4,.5,1.4,.5,.02),L.traverse(z=>{z.userData.roof=!0}),L}var Ph=1448998,fb=2,db=1.1;function pb(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}var td=s=>s*Math.PI/180,Ih=s=>s*s*(3-2*s);function mb(s,e){if(!pb())return null;let t=e.lite!==void 0?e.lite:window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||s.clientWidth<700,n;try{n=new al({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.25:1.75)),n.setClearColor(Ph),n.toneMapping=Fs,n.toneMappingExposure=.95,n.shadowMap.enabled=!0,n.shadowMap.type=ro,n.domElement.className="house3d",n.domElement.setAttribute("role","img"),s.appendChild(n.domElement);let i=document.createElement("div");i.className="hlabels",s.appendChild(i);let r=!0,a=0,o=!1,l=new Set,c=()=>{r=!0,Be()},h=new br;h.background=new ze(Ph),h.fog=new vr(Ph,26,60);let u=Yf(c),f=new Ir(13490410,7035464,.9);h.add(f);let p=new Ws(n);new hl().load(yl+"ambiente.exr",H=>{o||(h.environment=p.fromEquirectangular(H).texture,h.environmentIntensity=.16,f.intensity=.12,H.dispose(),p.dispose(),c())},void 0,()=>{});let b=new Ki(16752486,1);b.position.set(-9,6,12),b.target.position.set(4.5,0,4),b.castShadow=!0,b.shadow.mapSize.set(t?1024:2048,t?1024:2048),Object.assign(b.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40}),b.shadow.bias=-4e-4,b.shadow.normalBias=.02,b.shadow.radius=5,h.add(b,b.target);let x=new Dt(38,1,.1,120),m=Vt.size.w/2,d=Vt.size.d/2,E={tx:m,tz:d+.3,yaw:0,pitch:58,dist:17.5},M={...E},_=new wt;h.add(_),pi(_,u.grass,-30,-30,69,68,-.02),pi(_,u.paving,-1,-1,Vt.size.w+2,Vt.size.d+2,-.01,1);let L={},P=[];Vt.rooms.forEach(H=>{let $=H.id==="bagno"?u.tiles:H.id==="cucina"?u.kitchenFloor:u.parquet,ne=H.id==="bagno"?1.8:H.id==="cucina"?2.4:1.1,ye=pi(_,$,H.x,H.z,H.w,H.d,.001,ne);ye.userData={room:H.id},P.push(ye),L[H.id]={def:H,floor:ye,light:null,bulb:null,glow:null,level:0,target:0,wins:[]}});let D=.12;function z(H,$,ne,ye){let fe=new ht(new _n(ne,On,ye),u.wall);fe.position.set(H,On/2,$),fe.castShadow=!0,fe.receiveShadow=!0,_.add(fe);let Se=new ht(new _n(ne+.002,.01,ye+.002),u.wallCut);Se.position.set(H,On+.005,$),_.add(Se)}Vt.wallsH.forEach(([H,$,ne])=>z(($+ne)/2,H,ne-$+D,D)),Vt.wallsV.forEach(([H,$,ne])=>z(H,($+ne)/2,D,ne-$+D));let w=new wt,y=Vt.size.w,F=Vt.size.d,V=D/2+.006;[[y/2,-V,y+D+.02,.012],[y/2,F+V,y+D+.02,.012],[-V,F/2,.012,F+D],[y+V,F/2,.012,F+D]].forEach(([H,$,ne,ye])=>{let fe=new ht(new _n(ne,oa,ye),u.outside);fe.position.set(H,oa/2,$),fe.receiveShadow=!0,fe.castShadow=!0,w.add(fe)}),Ve(w,u.wood,.9,0,F+V,1,2.2,.05,.01),_.add(w),Zf(_,u),Qf(_,u),$f(_,w,u,Vt.size).forEach(H=>L[H.room]&&L[H.room].wins.push(H.glass));let Y=new ll;Y.setMeshoptDecoder(Gf),Kf.forEach(H=>{let $=H.stand?Jf(_,u,H.stand):null;Y.load(yl+H.file,ne=>{if(o)return;let ye=ne.scene;ye.traverse(fe=>{fe.isLight&&(fe.visible=!1),fe.isMesh&&(fe.castShadow=!0,fe.receiveShadow=!0)}),ye.scale.setScalar(H.scale),ye.rotation.y=H.rot,ye.position.set(H.x,0,H.z),_.add(ye),$&&_.remove($),c()},void 0,()=>{})}),Vt.rooms.filter(H=>H.lamp).forEach(H=>{let $=new wt;$.position.set(H.lamp[0],fb,H.lamp[1]);let ne=new ht(new Ei(.005,.005,.5,6),u.cord);ne.position.y=.36;let ye=new ht(new Ei(.03,.05,.06,16),u.steel);ye.position.y=.12;let fe=new Ke({color:15921128,roughness:.35,emissive:16761466,emissiveIntensity:0}),Se=new ht(new Xi(.11,24,16),fe);Se.castShadow=!1;let B=new Zi(16763272,0,10,2);B.position.y=-.14,B.castShadow=!t,B.shadow.mapSize.set(512,512),B.shadow.bias=-.002,B.shadow.radius=4,$.add(ne,ye,Se,B),_.add($),Object.assign(L[H.id],{light:B,bulb:fe,shade:null})});let J={},re={n:[0,0,-1],s:[0,0,1],e:[1,0,0],w:[-1,0,0]},Q={n:Math.PI,s:0,e:Math.PI/2,w:-Math.PI/2};function me(H,$,ne,ye,fe,Se=1){let B=new wt,j=Ve(B,ye,-.09*Se,-.12*Se,-.015,.18*Se,.24*Se,.03,.012),K=Ve(B,u.rocker,-.055*Se,-.07*Se,0,.11*Se,.14*Se,.025,.01),le=re[ne];return B.position.set(H+le[0]*(D/2+.015),db,$+le[2]*(D/2+.015)),B.rotation.y=Q[ne],[B,j,K].forEach(Ee=>Ee.userData=fe),P.push(j,K),_.add(B),{group:B,rocker:K}}Rh().forEach(H=>{J[H.circuit+"."+H.id]=me(H.x,H.z,H.face,u.plate,{circuit:H.circuit,ctl:H.id})});let Z=Vt.breaker,he=new wt,Me=Ve(he,u.panel,-.22,-.2,-.02,.44,.4,.08,.02),Re=Ve(he,u.panelDoor,-.18,-.15,.06,.36,.3,.012,.01);he.position.set(Z.x+re[Z.face][0]*(D/2+.02),1.15,Z.z+re[Z.face][2]*(D/2+.02)),he.rotation.y=Q[Z.face],[he,Me,Re].forEach(H=>H.userData={breaker:!0}),P.push(Me,Re),_.add(he);let Oe=ed(u,Vt.size);Oe.position.y=On,h.add(Oe);let Xe=!0,te=1;function ge(){let H=On+(oa-On)*Math.min(1,te*1.4);w.scale.y=H/oa,Oe.position.y=H+(1-te)*3.2,Oe.visible=te>.01,u.roof.opacity=u.fascia.opacity=Math.min(1,te*1.6),u.roof.depthWrite=u.fascia.depthWrite=te>.99,i.style.opacity=String(Math.max(0,1-te*2))}let ve=[];function be(H,$,ne,ye,fe){let Se=document.createElement("div");Se.className="hlabel "+(fe||""),Se.textContent=H,i.appendChild(Se),ve.push({el:Se,v:new k($,ne,ye)})}Vt.rooms.forEach(H=>be(H.name,H.x+H.w/2,.15,H.z+H.d/2+(H.id==="corridoio"?.45:.9),"room")),Rh().forEach(H=>be(H.label,H.x+re[H.face][0]*.4,On+.25,H.z+re[H.face][2]*.4,"ctl")),be(Z.label,Z.x+.55,On+.25,Z.z,"ctl");let Ae=new Pt(1,1,{type:n.extensions.has("EXT_color_buffer_half_float")||n.extensions.has("EXT_color_buffer_float")?Rt:sn,samples:t?2:4}),We=new dl(n,Ae);We.addPass(new pl(h,x));let De=null;t||(De=new ia(h,x,1,1),De.blendIntensity=.85,De.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1}),We.addPass(De));let ct=new js(new He(1,1),.45,.45,1);We.addPass(ct),We.addPass(new vl);function lt(){let H=td(M.pitch),$=td(M.yaw),ne=M.dist;x.position.set(M.tx+Math.sin($)*Math.cos(H)*ne,Math.sin(H)*ne,M.tz+Math.cos($)*Math.cos(H)*ne),x.lookAt(M.tx,.6,M.tz)}function Ze(){let H=Math.max(1,s.clientWidth),$=Math.max(1,s.clientHeight);n.setSize(H,$,!1),n.domElement.style.width="100%",n.domElement.style.height="100%",We.setSize(H,$),x.aspect=H/$,x.fov=H/$<.9?52:38,x.updateProjectionMatrix(),c()}let O=typeof ResizeObserver<"u"?new ResizeObserver(Ze):null;O&&O.observe(s);let Mt=new k;function tt(){lt(),We.render();let H=s.clientWidth,$=s.clientHeight;ve.forEach(ne=>{Mt.copy(ne.v).project(x),ne.el.style.display=Mt.z<1?"":"none",ne.el.style.transform=`translate(-50%,-50%) translate(${(Mt.x+1)/2*H}px,${(1-Mt.y)/2*$}px)`})}function $e(H){a=0,!o&&(l.size&&(r=!0),l.forEach($=>{$(H)||l.delete($)}),r&&(r=!1,tt()),l.size&&Be())}function Be(){!a&&!o&&(a=requestAnimationFrame($e))}function at(H,$){let ne=performance.now(),ye=fe=>{let Se=Math.min(1,(fe-ne)/H);return $(Se),Se<1};return l.add(ye),Be(),ye}let Ie=null,C=!e.reduced,S={};function q(H,$=900){if(C){S=H;return}let ne={...E,...H};if(x.aspect<.9&&ne.dist===E.dist&&(ne.dist*=1.22),Ie&&l.delete(Ie),e.reduced){Object.assign(M,ne),c();return}let ye={...M};Ie=at($,fe=>{let Se=Ih(fe);Object.keys(ne).forEach(B=>M[B]=ye[B]+(ne[B]-ye[B])*Se)})}let se=null;function ce(H,$=1400){Xe=!!H,e.onRoof&&e.onRoof(Xe),se&&l.delete(se);let ne=te,ye=Xe?1:0;if(e.reduced){te=ye,ge(),c();return}se=at($,fe=>{te=ne+(ye-ne)*Ih(fe),ge()})}e.reduced?(te=0,Xe=!1,ge()):(Object.assign(M,{tx:m,tz:d,yaw:-28,pitch:30,dist:27}),ge(),setTimeout(()=>{o||(C=!1,q(S,2600),setTimeout(()=>{o||(ce(!1,1600),e.onRoof&&e.onRoof(!1))},700))},450));let ie=new Fr,Le=new He,xe=null,Ce=n.domElement;Ce.style.touchAction="pan-y",Ce.addEventListener("pointerdown",H=>{xe={x:H.clientX,y:H.clientY,yaw:M.yaw,pitch:M.pitch,moved:!1};try{Ce.setPointerCapture(H.pointerId)}catch{}}),Ce.addEventListener("pointermove",H=>{if(!xe)return;let $=H.clientX-xe.x,ne=H.clientY-xe.y;Math.abs($)+Math.abs(ne)>6&&(xe.moved=!0),xe.moved&&(Ie&&(l.delete(Ie),Ie=null),M.yaw=Math.max(-35,Math.min(35,xe.yaw-$*.25)),M.pitch=Math.max(38,Math.min(75,xe.pitch+ne*.2)),c())}),Ce.addEventListener("pointerup",H=>{let $=xe;if(xe=null,!$||$.moved)return;if(Xe){ce(!1),e.onRoof&&e.onRoof(!1);return}let ne=Ce.getBoundingClientRect();Le.set((H.clientX-ne.left)/ne.width*2-1,-((H.clientY-ne.top)/ne.height)*2+1),ie.setFromCamera(Le,x);let ye=ie.intersectObjects(P,!1)[0];if(!ye)return;let fe=ye.object.userData||{};fe.breaker?e.onBreaker():fe.ctl?e.onControl(fe.circuit,fe.ctl):fe.room&&e.onRoom(fe.room)}),Ce.addEventListener("wheel",H=>{H.ctrlKey&&(H.preventDefault(),M.dist=Math.max(9,Math.min(24,M.dist+H.deltaY*.01)),c())},{passive:!1}),Ce.addEventListener("pointercancel",()=>{xe=null});let ke=11;function de(H,$){H.level=$,H.light&&(H.light.intensity=ke*$,H.bulb.emissiveIntensity=6*$),H.wins.forEach(ne=>ne.emissive.setHex(16757596).multiplyScalar(.9*$))}function Pe(H,$){let ne=$?1:0;if(H.target===ne)return;if(H.target=ne,e.reduced){de(H,ne);return}let ye=H.level;H.anim&&l.delete(H.anim),H.anim=at($?420:260,fe=>{let Se=$&&fe<.5?Math.sin(fe*60)>.2?1:.35:1;de(H,(ye+(ne-ye)*Ih(fe))*Se)})}return ge(),Ze(),{update(H){let $=[];Object.keys(L).forEach(ne=>{let ye=L[ne],fe=H.rooms[ne]||{},Se=!!fe.lit;Pe(ye,Se),Se&&ye.def.name&&$.push(ye.def.name);let B=Vt.controls[ye.def.circuit]||{};Object.keys(B).forEach(j=>{let K=J[ye.def.circuit+"."+j];K&&(K.rocker.rotation.x=(fe.controls&&fe.controls[j]?-1:1)*.25)})}),n.domElement.setAttribute("aria-label","Casa vista dall\u2019alto. Stanze con la luce accesa: "+($.length?$.join(", "):"nessuna")),c()},focusRoom(H){let $=L[H]&&L[H].def;if($){if(Xe&&!C&&ce(!1),x.aspect<.9){q({tx:(m+$.x+$.w/2)/2,tz:(d+$.z+$.d/2)/2+.3,dist:19,pitch:62});return}q({tx:$.x+$.w/2,tz:$.z+$.d/2+.3,dist:12.5,yaw:0,pitch:60})}},overview(){q({})},setRoof(H){ce(H),H&&q({yaw:-18,pitch:42,dist:23},1400)},roof(){return Xe},resize:Ze,dispose(){o=!0,a&&cancelAnimationFrame(a),O&&O.disconnect(),h.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&(Array.isArray(H.material)?H.material:[H.material]).forEach($=>{Object.values($).forEach(ne=>ne&&ne.isTexture&&ne.dispose()),$.dispose()})}),h.environment&&h.environment.dispose(),De&&De.dispose(),ct.dispose(),We.dispose(),Ae.dispose(),n.dispose(),n.forceContextLoss&&n.forceContextLoss(),n.domElement.remove(),i.remove()}}}typeof window<"u"&&(window.FaseNeutroScene={createScene:mb});})();
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
