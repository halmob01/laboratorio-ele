(()=>{var xd=0,ju=1,vd=2;var Yu=1,Ls=2,_i=3,ai=0,Cn=1,sn=2,an=0,wr=1,yi=2,Zu=3,Ku=4,Tl=5,Hn=100,bd=101,_d=102,yd=103,Md=104,Hr=200,Sd=201,Ed=202,wd=203,nl=204,il=205,Ga=206,Td=207,Va=208,Ad=209,Rd=210,Cd=211,Pd=212,Id=213,Dd=214,Al=0,Rl=1,Cl=2,Tr=3,Pl=4,Il=5,Dl=6,Ll=7,Ju=0,Ld=1,Ud=2,ji=0,Ul=1,Nl=2,Fl=3,Ol=4,Bl=5,hr=6,zl=7,Uu="attached",Nd="detached",Qu=300,Gr=301,Vr=302,kl=303,Hl=304,Wa=306,Xt=1e3,Yn=1001,bs=1002,nn=1003,Gl=1004;var Wr=1005;var Jt=1006,Us=1007;var Kn=1008;var Pn=1009,$u=1010,eh=1011,Ns=1012,Vl=1013,fr=1014,En=1015,Kt=1016,Wl=1017,Xl=1018,dr=1020,th=35902,nh=1021,ih=1022,vn=1023,_s=1026,pr=1027,Fs=1028,ql=1029,rh=1030,jl=1031;var Yl=1033,Xa=33776,qa=33777,ja=33778,Ya=33779,Zl=35840,Kl=35841,Jl=35842,Ql=35843,$l=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,ac=37812,oc=37813,lc=37814,cc=37815,uc=37816,hc=37817,fc=37818,dc=37819,pc=37820,mc=37821,Za=36492,gc=36494,xc=36495,sh=36283,vc=36284,bc=36285,_c=36286;var Ar=2300,Rr=2301,tl=2302,Nu=2400,Fu=2401,Ou=2402,Fd=2500;var ah=0,Ka=1,Os=2,Od=3200,yc=3201;var Mc=0,Bd=1,ui="",Rt="srgb",rn="srgb-linear",_a="linear",Ct="srgb";var Er=7680;var Bu=519,zd=512,kd=513,Hd=514,oh=515,Gd=516,Vd=517,Wd=518,Xd=519,rl=35044;var lh="300 es",pi=2e3,ya=2001;var ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=1234567,ga=Math.PI/180,Cr=180/Math.PI;function si(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function ch(r,e){return(r%e+e)%e}function Pm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Im(r,e,t){return r!==e?(t-r)/(e-r):0}function xa(r,e,t){return(1-t)*r+t*e}function Dm(r,e,t,n){return xa(r,e,1-Math.exp(-t*n))}function Lm(r,e=1){return e-Math.abs(ch(r,e*2)-e)}function Um(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Nm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Fm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Om(r,e){return r+Math.random()*(e-r)}function Bm(r){return r*(.5-Math.random())}function zm(r){r!==void 0&&(If=r);let e=If+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(r){return r*ga}function Hm(r){return r*Cr}function Gm(r){return(r&r-1)===0&&r!==0}function Vm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xm(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*m,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*m,o*c);break;case"ZYZ":r.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var uh={DEG2RAD:ga,RAD2DEG:Cr,generateUUID:si,clamp:mt,euclideanModulo:ch,mapLinear:Pm,inverseLerp:Im,lerp:xa,damp:Dm,pingpong:Lm,smoothstep:Um,smootherstep:Nm,randInt:Fm,randFloat:Om,randFloatSpread:Bm,seededRandom:zm,degToRad:km,radToDeg:Hm,isPowerOfTwo:Gm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:Xm,normalize:Lt,denormalize:ri},Fe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],T=i[1],w=i[4],y=i[7],N=i[2],I=i[5],D=i[8];return s[0]=a*x+o*T+l*N,s[3]=a*g+o*w+l*I,s[6]=a*p+o*y+l*D,s[1]=c*x+u*T+h*N,s[4]=c*g+u*w+h*I,s[7]=c*p+u*y+h*D,s[2]=f*x+d*T+m*N,s[5]=f*g+d*w+m*I,s[8]=f*p+d*y+m*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(au.makeScale(e,t)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,t){return this.premultiply(au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},au=new dt;function hh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qd(){let r=ys("canvas");return r.style.display="block",r}var Df={};function Ja(r){r in Df||(Df[r]=!0,console.warn(r))}function jd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yd(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zd(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Lf=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qm(){let r={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?_a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[rn]:{primaries:e,whitePoint:n,transfer:_a,toXYZ:Lf,fromXYZ:Uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Lf,fromXYZ:Uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),r}var xt=qm();function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ss,sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=ys("canvas")),ss.width=e.width,ss.height=e.height;let i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jm=0,Ms=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ou(i[a].image)):s.push(ou(i[a]))}else s=ou(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ou(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ym=0,cn=class r extends ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Yn,i=Yn,s=Jt,a=Kn,o=vn,l=Pn,c=r.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=si(),this.name="",this.source=new Ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xt:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xt:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Qu;cn.DEFAULT_ANISOTROPY=1;var wt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,y=(d+1)/2,N=(p+1)/2,I=(u+f)/4,D=(h+x)/4,P=(m+g)/4;return w>y&&w>N?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=I/n,s=D/n):y>N?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=I/i,s=P/i):N<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(N),n=D/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(h-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ms(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==m){let g=1-o,p=l*f+c*d+u*m+h*x,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let N=Math.sqrt(w),I=Math.atan2(N,p*T);g=Math.sin(g*I)/N,o=Math.sin(o*I)/N}let y=o*T;if(l=l*g+f*y,c=c*g+d*y,u=u*g+m*y,h=h*g+x*y,g===1-o){let N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lu=new O,Nf=new xn,Gn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Io.subVectors(this.max,la),as.subVectors(e.a,la),os.subVectors(e.b,la),ls.subVectors(e.c,la),tr.subVectors(os,as),nr.subVectors(ls,os),_r.subVectors(as,ls);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-_r.z,_r.y,tr.z,0,-tr.x,nr.z,0,-nr.x,_r.z,0,-_r.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-_r.y,_r.x,0];return!cu(t,as,os,ls,Io)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,as,os,ls,Io))?!1:(Do.crossVectors(tr,nr),t=[Do.x,Do.y,Do.z],cu(t,as,os,ls,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new O,new O,new O,new O,new O,new O,new O,new O],ti=new O,Po=new Gn,as=new O,os=new O,ls=new O,tr=new O,nr=new O,_r=new O,la=new O,Io=new O,Do=new O,yr=new O;function cu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){yr.fromArray(r,s);let o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),u=n.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Zm=new Gn,ca=new O,uu=new O,Un=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ca,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(uu)),this.expandByPoint(ca.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new O,hu=new O,Lo=new O,ir=new O,fu=new O,Uo=new O,du=new O,lr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hu.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(hu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),o=ir.dot(this.direction),l=-ir.dot(Lo),c=ir.lengthSq(),u=Math.abs(1-a*a),h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hu).addScaledVector(Lo,f),d}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),i=Di.dot(Di)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,i,s){fu.subVectors(t,e),Uo.subVectors(n,e),du.crossVectors(fu,Uo);let a=this.direction.dot(du),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ir.subVectors(this.origin,e);let l=o*this.direction.dot(Uo.crossVectors(ir,Uo));if(l<0)return null;let c=o*this.direction.dot(fu.cross(ir));if(c<0||l+c>a)return null;let u=-o*ir.dot(du);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class r{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,m,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,m,x,g)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,d=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Km,e,Jm)}lookAt(e,t,n){let i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),rr.crossVectors(n,zn),rr.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),rr.crossVectors(n,zn)),rr.normalize(),No.crossVectors(zn,rr),i[0]=rr.x,i[4]=No.x,i[8]=zn.x,i[1]=rr.y,i[5]=No.y,i[9]=zn.y,i[2]=rr.z,i[6]=No.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],T=n[3],w=n[7],y=n[11],N=n[15],I=i[0],D=i[4],P=i[8],S=i[12],E=i[1],R=i[5],F=i[9],G=i[13],q=i[2],ee=i[6],Z=i[10],le=i[14],j=i[3],J=i[7],me=i[11],ye=i[15];return s[0]=a*I+o*E+l*q+c*j,s[4]=a*D+o*R+l*ee+c*J,s[8]=a*P+o*F+l*Z+c*me,s[12]=a*S+o*G+l*le+c*ye,s[1]=u*I+h*E+f*q+d*j,s[5]=u*D+h*R+f*ee+d*J,s[9]=u*P+h*F+f*Z+d*me,s[13]=u*S+h*G+f*le+d*ye,s[2]=m*I+x*E+g*q+p*j,s[6]=m*D+x*R+g*ee+p*J,s[10]=m*P+x*F+g*Z+p*me,s[14]=m*S+x*G+g*le+p*ye,s[3]=T*I+w*E+y*q+N*j,s[7]=T*D+w*R+y*ee+N*J,s[11]=T*P+w*F+y*Z+N*me,s[15]=T*S+w*G+y*le+N*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+x*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+g*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],T=h*g*c-x*f*c+x*l*d-o*g*d-h*l*p+o*f*p,w=m*f*c-u*g*c-m*l*d+a*g*d+u*l*p-a*f*p,y=u*x*c-m*h*c+m*o*d-a*x*d-u*o*p+a*h*p,N=m*h*l-u*x*l-m*o*f+a*x*f+u*o*g-a*h*g,I=t*T+n*w+i*y+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=T*D,e[1]=(x*f*s-h*g*s-x*i*d+n*g*d+h*i*p-n*f*p)*D,e[2]=(o*g*s-x*l*s+x*i*c-n*g*c-o*i*p+n*l*p)*D,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*D,e[4]=w*D,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*D,e[6]=(m*l*s-a*g*s-m*i*c+t*g*c+a*i*p-t*l*p)*D,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*D,e[8]=y*D,e[9]=(m*h*s-u*x*s-m*n*d+t*x*d+u*n*p-t*h*p)*D,e[10]=(a*x*s-m*o*s+m*n*c-t*x*c-a*n*p+t*o*p)*D,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*D,e[12]=N*D,e[13]=(u*x*i-m*h*i+m*n*f-t*x*f-u*n*g+t*h*g)*D,e[14]=(m*o*i-a*x*i-m*n*l+t*x*l+a*n*g-t*o*g)*D,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,x=a*u,g=a*h,p=o*h,T=l*c,w=l*u,y=l*h,N=n.x,I=n.y,D=n.z;return i[0]=(1-(x+p))*N,i[1]=(d+y)*N,i[2]=(m-w)*N,i[3]=0,i[4]=(d-y)*I,i[5]=(1-(f+p))*I,i[6]=(g+T)*I,i[7]=0,i[8]=(m+w)*D,i[9]=(g-T)*D,i[10]=(1-(f+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=cs.set(i[0],i[1],i[2]).length(),a=cs.set(i[4],i[5],i[6]).length(),o=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ni.copy(this);let c=1/s,u=1/a,h=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=pi){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,m;if(o===pi)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===ya)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=pi){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u,m,x;if(o===pi)m=(a+s)*h,x=-2*h;else if(o===ya)m=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new O,ni=new Ye,Km=new O(0,0,0),Jm=new O(1,1,1),rr=new O,No=new O,zn=new O,Ff=new Ye,Of=new xn,oi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qm=0,Bf=new O,us=new xn,Li=new Ye,Fo=new O,ua=new O,$m=new O,e0=new xn,zf=new O(1,0,0),kf=new O(0,1,0),Hf=new O(0,0,1),Gf={type:"added"},t0={type:"removed"},hs={type:"childadded",child:null},pu={type:"childremoved",child:null},Vt=class r extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new O,t=new oi,n=new xn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new dt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ua,Fo,this.up):Li.lookAt(Fo,ua,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Li),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new O,Ui=new O,mu=new O,Ni=new O,fs=new O,ds=new O,Vf=new O,gu=new O,xu=new O,vu=new O,bu=new wt,_u=new wt,yu=new wt,or=class r{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ii.subVectors(e,t),i.cross(ii);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ii.subVectors(i,t),Ui.subVectors(n,t),mu.subVectors(e,t);let a=ii.dot(ii),o=ii.dot(Ui),l=ii.dot(mu),c=Ui.dot(Ui),u=Ui.dot(mu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return bu.setScalar(0),_u.setScalar(0),yu.setScalar(0),bu.fromBufferAttribute(e,t),_u.fromBufferAttribute(e,n),yu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bu,s.x),a.addScaledVector(_u,s.y),a.addScaledVector(yu,s.z),a}static isFrontFacing(e,t,n,i){return ii.subVectors(n,t),Ui.subVectors(e,t),ii.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;fs.subVectors(i,n),ds.subVectors(s,n),gu.subVectors(e,n);let l=fs.dot(gu),c=ds.dot(gu);if(l<=0&&c<=0)return t.copy(n);xu.subVectors(e,i);let u=fs.dot(xu),h=ds.dot(xu);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(fs,a);vu.subVectors(e,s);let d=fs.dot(vu),m=ds.dot(vu);if(m>=0&&d<=m)return t.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ds,o);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Vf.subVectors(s,i),o=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Vf,o);let p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(fs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Mu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=ch(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Mu(a,s,e+1/3),this.g=Mu(a,s,e),this.b=Mu(a,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return xt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(mt(Mn.r*255,0,255))*65536+Math.round(mt(Mn.g*255,0,255))*256+Math.round(mt(Mn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Mn.copy(this),t);let n=Mn.r,i=Mn.g,s=Mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Rt){xt.fromWorkingColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,i=Mn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Oo);let n=xa(sr.h,Oo.h,t),i=xa(sr.s,Oo.s,t),s=xa(sr.l,Oo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Pe;Pe.NAMES=Kd;var n0=0,An=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=wr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ut=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oi=i0();function i0(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function r0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=mt(r,-65504,65504),Oi.floatView[0]=r;let e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((e&8388607)>>Oi.shiftTable[t])}function s0(r){let e=r>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(r&1023)]+Oi.exponentTable[e],Oi.floatView[0]}var Es=class{static toHalfFloat(e){return r0(e)}static fromHalfFloat(e){return s0(e)}},tn=new O,Bo=new Fe,a0=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}};var Sa=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ea=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pt=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},o0=0,qn=new Ye,Su=new Vt,ps=new O,kn=new Gn,ha=new Gn,pn=new O,Wt=class r extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?Ea:Sa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(kn.min,ha.min),kn.expandByPoint(pn),pn.addVectors(kn.max,ha.max),kn.expandByPoint(pn)):(kn.expandByPoint(ha.min),kn.expandByPoint(ha.max))}kn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),pn.add(ps)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new O,l[P]=new O;let c=new O,u=new O,h=new O,f=new Fe,d=new Fe,m=new Fe,x=new O,g=new O;function p(P,S,E){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),o[P].add(x),o[S].add(x),o[E].add(x),l[P].add(g),l[S].add(g),l[E].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,S=T.length;P<S;++P){let E=T[P],R=E.start,F=E.count;for(let G=R,q=R+F;G<q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let w=new O,y=new O,N=new O,I=new O;function D(P){N.fromBufferAttribute(i,P),I.copy(N);let S=o[P];w.copy(S),w.sub(N.multiplyScalar(N.dot(S))).normalize(),y.crossVectors(I,S);let R=y.dot(l[P])<0?-1:1;a.setXYZW(P,w.x,w.y,w.z,R)}for(let P=0,S=T.length;P<S;++P){let E=T[P],R=E.start,F=E.count;for(let G=R,q=R+F;G<q;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wf=new Ye,Mr=new lr,zo=new Un,Xf=new O,ko=new O,Ho=new O,Go=new O,Eu=new O,Vo=new O,qf=new O,Wo=new O,We=class extends Vt{constructor(e=new Wt,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(Eu.fromBufferAttribute(h,e),a?Vo.addScaledVector(Eu,u):Vo.addScaledVector(Eu.sub(t),u))}t.add(Vo)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(zo.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(zo,Xf)===null||Mr.origin.distanceToSquared(Xf)>(e.far-e.near)**2))&&(Wf.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Wf),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],T=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=T,N=w;y<N;y+=3){let I=o.getX(y),D=o.getX(y+1),P=o.getX(y+2);i=Xo(this,p,e,n,c,u,h,I,D,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let T=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);i=Xo(this,a,e,n,c,u,h,T,w,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],T=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=T,N=w;y<N;y+=3){let I=y,D=y+1,P=y+2;i=Xo(this,p,e,n,c,u,h,I,D,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let T=g,w=g+1,y=g+2;i=Xo(this,a,e,n,c,u,h,T,w,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function l0(r,e,t,n,i,s,a,o){let l;if(e.side===Cn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ai,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:r}}function Xo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ko),r.getVertexPosition(l,Ho),r.getVertexPosition(c,Go);let u=l0(r,e,t,n,ko,Ho,Go,qf);if(u){let h=new O;or.getBarycoord(qf,ko,Ho,Go,h),i&&(u.uv=or.getInterpolatedAttribute(i,o,l,c,h,new Fe)),s&&(u.uv1=or.getInterpolatedAttribute(s,o,l,c,h,new Fe)),a&&(u.normal=or.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};or.getNormal(ko,Ho,Go,f.normal),u.face=f,u.barycoord=h}return u}var zt=class r extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function m(x,g,p,T,w,y,N,I,D,P,S){let E=y/D,R=N/P,F=y/2,G=N/2,q=I/2,ee=D+1,Z=P+1,le=0,j=0,J=new O;for(let me=0;me<Z;me++){let ye=me*R-G;for(let Ne=0;Ne<ee;Ne++){let Xe=Ne*E-F;J[x]=Xe*T,J[g]=ye*w,J[p]=q,c.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[p]=I>0?1:-1,u.push(J.x,J.y,J.z),h.push(Ne/D),h.push(1-me/P),le+=1}}for(let me=0;me<P;me++)for(let ye=0;ye<D;ye++){let Ne=f+ye+ee*me,Xe=f+ye+ee*(me+1),te=f+(ye+1)+ee*(me+1),ue=f+(ye+1)+ee*me;l.push(Ne,Xe,ue),l.push(Xe,te,ue),j+=6}o.addGroup(d,j,S),d+=j,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(r){let e={};for(let t=0;t<r.length;t++){let n=Xr(r[t]);for(let i in n)e[i]=n[i]}return e}function c0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var In={clone:Xr,merge:wn},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wa=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ar=new O,jf=new Fe,Yf=new Fe,Zt=class extends wa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,jf,Yf),t.subVectors(Yf,jf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,gs=1,ll=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Zt(ms,gs,e,t);i.layers=this.layers,this.add(i);let s=new Zt(ms,gs,e,t);s.layers=this.layers,this.add(s);let a=new Zt(ms,gs,e,t);a.layers=this.layers,this.add(a);let o=new Zt(ms,gs,e,t);o.layers=this.layers,this.add(o);let l=new Zt(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ta=class extends cn{constructor(e=[],t=Gr,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cl=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ta(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zt(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:an});s.uniforms.tEquirect.value=t;let a=new We(i,s),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Jt),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Be=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},f0={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Aa=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mi=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new O,As=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Zf=new O,Kf=new wt,Jf=new wt,d0=new O,Qf=new Ye,qo=new O,wu=new Un,$f=new Ye,Tu=new lr,Ra=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wu.copy(this.boundingSphere),wu.applyMatrix4(i),e.ray.intersectsSphere(wu)!==!1&&($f.copy(i).invert(),Tu.copy(e.ray).applyMatrix4($f),!(this.boundingBox!==null&&Tu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Kf.fromBufferAttribute(i.attributes.skinIndex,e),Jf.fromBufferAttribute(i.attributes.skinWeight,e),Zf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Jf.getComponent(s);if(a!==0){let o=Kf.getComponent(s);Qf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(d0.copy(Zf).applyMatrix4(Qf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Rs=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Zn=class extends cn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=nn,u=nn,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ed=new Ye,p0=new Ye,Ca=class r{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:p0;ed.multiplyMatrices(o,t[s]),ed.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Zn(t,e,e,vn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Rs),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},cr=class extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Ye,td=new Ye,jo=[],nd=new Gn,m0=new Ye,fa=new We,da=new Un,un=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),nd.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),da.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xs),td.multiplyMatrices(n,xs),fa.matrixWorld=td,fa.raycast(e,jo);for(let a=0,o=jo.length;a<o;a++){let l=jo[a];l.instanceId=s,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zn(new Float32Array(i*this.count),i,this.count,Fs,En));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Au=new O,g0=new O,x0=new dt,jn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Au.subVectors(n,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Au),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||x0.getNormalMatrix(e),i=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sr=new Un,Yo=new O,gi=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,s=new jn,a=new jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],T=i[13],w=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,g-d,y-p).normalize(),n[1].setComponents(l+s,f+c,g+d,y+p).normalize(),n[2].setComponents(l+a,f+u,g+m,y+T).normalize(),n[3].setComponents(l-a,f-u,g-m,y-T).normalize(),n[4].setComponents(l-o,f-h,g-x,y-w).normalize(),t===pi)n[5].setComponents(l+o,f+h,g+x,y+w).normalize();else if(t===ya)n[5].setComponents(o,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yo.x=i.normal.x>0?e.max.x:e.min.x,Yo.y=i.normal.y>0?e.max.y:e.min.y,Yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ul=new O,hl=new O,id=new Ye,pa=new lr,Zo=new Un,Ru=new O,rd=new O,Pr=class extends Vt{constructor(e=new Wt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ul.fromBufferAttribute(t,i-1),hl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ul.distanceTo(hl);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=s,e.ray.intersectsSphere(Zo)===!1)return;id.copy(i).invert(),pa.copy(e.ray).applyMatrix4(id);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),T=u.getX(x+1),w=Ko(this,e,pa,l,p,T,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Ko(this,e,pa,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=Ko(this,e,pa,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ko(this,e,pa,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ko(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(ul.fromBufferAttribute(o,i),hl.fromBufferAttribute(o,s),t.distanceSqToSegment(ul,hl,Ru,rd)>n)return;Ru.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ru);if(!(c<e.near||c>e.far))return{distance:c,point:rd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var sd=new O,ad=new O,Pa=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sd.fromBufferAttribute(t,i),ad.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sd.distanceTo(ad);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ia=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ps=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},od=new Ye,zu=new lr,Jo=new Un,Qo=new O,Ir=class extends Vt{constructor(e=new Wt,t=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;od.copy(i).invert(),zu.copy(e.ray).applyMatrix4(od);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Qo.fromBufferAttribute(h,g),ld(Qo,g,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Qo.fromBufferAttribute(h,m),ld(Qo,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ld(r,e,t,n,i,s,a){let o=zu.distanceSqToPoint(r);if(o<t){let l=new O;zu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $t=class extends cn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dr=class extends cn{constructor(e,t,n=fr,i,s,a,o=nn,l=nn,c,u=_s){if(u!==_s&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Nn=class r extends Wt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],m=0,x=[],g=n/2,p=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(d,2));function T(){let y=new O,N=new O,I=0,D=(t-e)/n;for(let P=0;P<=s;P++){let S=[],E=P/s,R=E*(t-e)+e;for(let F=0;F<=i;F++){let G=F/i,q=G*l+o,ee=Math.sin(q),Z=Math.cos(q);N.x=R*ee,N.y=-E*n+g,N.z=R*Z,h.push(N.x,N.y,N.z),y.set(ee,D,Z).normalize(),f.push(y.x,y.y,y.z),d.push(G,1-E),S.push(m++)}x.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){let E=x[S][P],R=x[S+1][P],F=x[S+1][P+1],G=x[S][P+1];(e>0||S!==0)&&(u.push(E,R,G),I+=3),(t>0||S!==s-1)&&(u.push(R,F,G),I+=3)}c.addGroup(p,I,0),p+=I}function w(y){let N=m,I=new Fe,D=new O,P=0,S=y===!0?e:t,E=y===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),m++;let R=m;for(let F=0;F<=i;F++){let q=F/i*l+o,ee=Math.cos(q),Z=Math.sin(q);D.x=S*Z,D.y=g*E,D.z=S*ee,h.push(D.x,D.y,D.z),f.push(0,E,0),I.x=ee*.5+.5,I.y=Z*.5*E+.5,d.push(I.x,I.y),m++}for(let F=0;F<i;F++){let G=N+F,q=R+F;y===!0?u.push(q,q+1,G):u.push(q+1,q,G),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Fe:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,i=[],s=[],a=[],o=new O,l=new Ye;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(mt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(mt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Da=class extends Vn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Fe){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends Da{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var $o=new O,Cu=new dh,Pu=new dh,Iu=new dh,dl=class extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:($o.subVectors(i[0],i[1]).add(i[0]),c=$o);let h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:($o.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Cu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,x,g),Pu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,x,g),Iu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Cu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Pu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Iu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Cu.calc(l),Pu.calc(l),Iu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cd(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function v0(r,e){let t=1-r;return t*t*e}function b0(r,e){return 2*(1-r)*r*e}function _0(r,e){return r*r*e}function va(r,e,t,n){return v0(r,e)+b0(r,t)+_0(r,n)}function y0(r,e){let t=1-r;return t*t*t*e}function M0(r,e){let t=1-r;return 3*t*t*r*e}function S0(r,e){return 3*(1-r)*r*r*e}function E0(r,e){return r*r*r*e}function ba(r,e,t,n,i){return y0(r,e)+M0(r,t)+S0(r,n)+E0(r,i)}var pl=class extends Vn{constructor(e=new Fe,t=new Fe,n=new Fe,i=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Fe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,i.x,s.x,a.x,o.x),ba(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ml=class extends Vn{constructor(e=new O,t=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new O){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,i.x,s.x,a.x,o.x),ba(e,i.y,s.y,a.y,o.y),ba(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends Vn{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends Vn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends Vn{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(va(e,i.x,s.x,a.x),va(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Vn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(va(e,i.x,s.x,a.x),va(e,i.y,s.y,a.y),va(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(cd(o,l.x,c.x,u.x,h.x),cd(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Fe().fromArray(i))}return this}},ku=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:dl,CubicBezierCurve:pl,CubicBezierCurve3:ml,EllipseCurve:Da,LineCurve:gl,LineCurve3:ur,QuadraticBezierCurve:xl,QuadraticBezierCurve3:La,SplineCurve:vl}),Lr=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ku[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ku[i.type]().fromJSON(i))}return this}};var Nt=class r extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let T=p*f-a;for(let w=0;w<c;w++){let y=w*h-s;m.push(y,-T,0),x.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let w=T+c*p,y=T+c*(p+1),N=T+1+c*(p+1),I=T+1+c*p;d.push(w,y,I),d.push(y,N,I)}this.setIndex(d),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wn=class r extends Wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new O,f=new O,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let T=[],w=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let N=0;N<=t;N++){let I=N/t;h.x=-e*Math.cos(i+I*s)*Math.sin(a+w*o),h.y=e*Math.cos(a+w*o),h.z=e*Math.sin(i+I*s)*Math.sin(a+w*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(I+y,1-w),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let w=u[p][T+1],y=u[p][T],N=u[p+1][T],I=u[p+1][T+1];(p!==0||a>0)&&d.push(w,y,I),(p!==n-1||l<Math.PI)&&d.push(y,N,I)}this.setIndex(d),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ur=class r extends Wt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new O,h=new O,f=new O;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let x=m/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let x=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,T=(i+1)*d+m;a.push(x,g,T),a.push(g,p,T)}this.setIndex(a),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Nr=class r extends Wt{constructor(e=new La(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,l=new O,c=new Fe,u=new O,h=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(d,2));function x(){for(let w=0;w<t;w++)g(w);g(s===!1?t:0),T(),p()}function g(w){u=e.getPointAt(w/t,u);let y=a.normals[w],N=a.binormals[w];for(let I=0;I<=i;I++){let D=I/i*Math.PI*2,P=Math.sin(D),S=-Math.cos(D);l.x=S*y.x+P*N.x,l.y=S*y.y+P*N.y,l.z=S*y.z+P*N.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let y=1;y<=i;y++){let N=(i+1)*(w-1)+(y-1),I=(i+1)*w+(y-1),D=(i+1)*w+y,P=(i+1)*(w-1)+y;m.push(N,I,P),m.push(I,D,P)}}function T(){for(let w=0;w<=t;w++)for(let y=0;y<=i;y++)c.x=w/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ku[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ua=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Te{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Na=class extends An{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Is=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ds=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function el(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function w0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function T0(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ud(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Jd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Hi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends Hi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fu:s=e,o=2*t-n;break;case Ou:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fu:a=e,l=2*n-t;break;case Ou:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,T=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,w=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let N=0;N!==o;++N)s[N]=p*a[u+N]+T*a[c+N]+w*a[l+N]+y*a[h+N];return s}},_l=class extends Hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}},yl=class extends Hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=el(t,this.TimeBufferType),this.values=el(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:el(e.times,Array),values:el(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&w0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Rr;var Gi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ar;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Fn{constructor(e,t,n,i){super(e,t,n,i)}};Fa.prototype.ValueTypeName="color";var xi=class extends Fn{constructor(e,t,n,i){super(e,t,n,i)}};xi.prototype.ValueTypeName="number";var Ml=class extends Hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)xn.slerpFlat(s,0,a,c-o,a,c,l);return s}},vi=class extends Fn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};vi.prototype.ValueTypeName="quaternion";vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Ar;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Fn{constructor(e,t,n,i){super(e,t,n,i)}};bi.prototype.ValueTypeName="vector";var Oa=class{constructor(e="",t=-1,n=[],i=Fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(R0(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=T0(l);l=ud(l,1,u),c=ud(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,m,x){if(d.length!==0){let g=[],p=[];Jd(d,g,p,m),g.length!==0&&x.push(new h(f,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let T=0;T!==f[m].morphTargets.length;++T){let w=f[m];g.push(w.time),p.push(w.morphTarget===x?1:0)}i.push(new xi(".morphTargetInfluence["+x+"]",g,p))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(bi,d+".position",f,"pos",i),n(vi,d+".quaternion",f,"rot",i),n(bi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function A0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return Fa;case"quaternion":return vi;case"bool":case"boolean":return Gi;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function R0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=A0(r.type);if(r.times===void 0){let t=[],n=[];Jd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Sl=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Qd=new Sl,li=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Hu=class extends Error{constructor(e,t){super(e),this.response=t}},Fr=class extends li{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:i});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Fi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){T();function T(){h.read().then(({done:w,value:y})=>{if(w)p.close();else{x+=y.byteLength;let N=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let I=0,D=u.length;I<D;I++){let P=u[I];P.onProgress&&P.onProgress(N)}p.enqueue(y),T()}},w=>{p.error(w)})}}});return new Response(g)}else throw new Hu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Bi.add(e,c);let u=Fi[e];delete Fi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var El=class extends li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Bi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=ys("img");function l(){u(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Ba=class extends li{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new Zn,o=new Fr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Yn,a.wrapT=c.wrapT!==void 0?c.wrapT:Yn,a.magFilter=c.magFilter!==void 0?c.magFilter:Jt,a.minFilter=c.minFilter!==void 0?c.minFilter:Jt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Kn),c.mipmapCount===1&&(a.minFilter=Jt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},Or=class extends li{constructor(e){super(e)}load(e,t,n,i){let s=new cn,a=new El(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Br=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zr=class extends Br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Du=new Ye,hd=new O,fd=new O,za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),Du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gu=class extends za{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},kr=class extends Br{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Gu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dd=new Ye,ma=new O,Lu=new O,Vu=class extends za{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(ma),Lu.copy(n.position),Lu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lu),n.updateMatrixWorld(),i.makeTranslation(-ma.x,-ma.y,-ma.z),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd)}},Rn=class extends Br{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ci=class extends wa{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wu=class extends za{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ka=class extends li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Bi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(e,l),s.manager.itemStart(e)}};var wl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ha=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pd(){return performance.now()}var ph="\\[\\]\\.:\\/",C0=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",P0="[^"+ph.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",mh),D0=/(WCOD+)?/.source.replace("WCOD",P0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),N0=new RegExp("^"+I0+D0+L0+U0+"$"),F0=["material","materials","bones","map"],Xu=class{constructor(e,t,n){let i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(e){let t=N0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);F0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Xu;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var md=new Ye,qi=class{constructor(e,t,n=0,i=1/0){this.ray=new lr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return qu(e,this,n,t),n.sort(gd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)qu(e[i],this,n,t);return n.sort(gd),n}};function gd(r,e){return r.distance-e.distance}function qu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)qu(s[a],e,t,!0)}}function gh(r,e,t,n){let i=O0(n);switch(t){case nh:return r*e;case Fs:return r*e/i.components*i.byteLength;case ql:return r*e/i.components*i.byteLength;case rh:return r*e*2/i.components*i.byteLength;case jl:return r*e*2/i.components*i.byteLength;case ih:return r*e*3/i.components*i.byteLength;case vn:return r*e*4/i.components*i.byteLength;case Yl:return r*e*4/i.components*i.byteLength;case Xa:case qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kl:case Ql:return Math.max(r,16)*Math.max(e,8)/4;case Zl:case Jl:return Math.max(r,8)*Math.max(e,8)/2;case $l:case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Za:case gc:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sh:case vc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bc:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O0(r){switch(r){case Pn:case $u:return{byteLength:1,components:1};case Ns:case eh:case Kt:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case fr:case Vl:case En:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");function Mp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function z0(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var k0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
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
#endif`,Z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$0=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cg=`#define PI 3.141592653589793
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
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hg=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
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
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
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
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
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
#endif`,Bg=`struct PhysicalMaterial {
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
}`,zg=`
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
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
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ex=`float getShadowMask() {
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
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
}`,qx=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#define LAMBERT
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define MATCAP
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
}`,rv=`#define MATCAP
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
}`,sv=`#define NORMAL
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
}`,av=`#define NORMAL
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
}`,ov=`#define PHONG
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
}`,lv=`#define PHONG
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
}`,cv=`#define STANDARD
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
}`,uv=`#define STANDARD
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
}`,hv=`#define TOON
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
}`,fv=`#define TOON
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
}`,dv=`uniform float size;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,vv=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:k0,alphahash_pars_fragment:H0,alphamap_fragment:G0,alphamap_pars_fragment:V0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:j0,batching_pars_vertex:Y0,batching_vertex:Z0,begin_vertex:K0,beginnormal_vertex:J0,bsdfs:Q0,iridescence_fragment:$0,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:rg,color_fragment:sg,color_pars_fragment:ag,color_pars_vertex:og,color_vertex:lg,common:cg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:hg,displacementmap_pars_vertex:fg,displacementmap_vertex:dg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:bg,envmap_pars_fragment:_g,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Dg,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:Eg,fog_fragment:wg,fog_pars_fragment:Tg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Rg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Pg,lights_pars_begin:Ig,lights_toon_fragment:Lg,lights_toon_pars_fragment:Ug,lights_phong_fragment:Ng,lights_phong_pars_fragment:Fg,lights_physical_fragment:Og,lights_physical_pars_fragment:Bg,lights_fragment_begin:zg,lights_fragment_maps:kg,lights_fragment_end:Hg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:qg,map_pars_fragment:jg,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:Qg,morphcolor_vertex:$g,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ax,normal_vertex:ox,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,opaque_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:xx,dithering_pars_fragment:vx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:Mx,shadowmap_vertex:Sx,shadowmask_pars_fragment:Ex,skinbase_vertex:wx,skinning_pars_vertex:Tx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Px,tonemapping_fragment:Ix,tonemapping_pars_fragment:Dx,transmission_fragment:Lx,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Fx,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:zx,background_frag:kx,backgroundCube_vert:Hx,backgroundCube_frag:Gx,cube_vert:Vx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:jx,distanceRGBA_frag:Yx,equirect_vert:Zx,equirect_frag:Kx,linedashed_vert:Jx,linedashed_frag:Qx,meshbasic_vert:$x,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:rv,meshnormal_vert:sv,meshnormal_frag:av,meshphong_vert:ov,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:uv,meshtoon_vert:hv,meshtoon_frag:fv,points_vert:dv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:xv,sprite_frag:vv},He={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Pe(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:wn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:wn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Pe(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:wn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:wn([He.points,He.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:wn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:wn([He.common,He.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:wn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:wn([He.sprite,He.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:wn([He.common,He.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:wn([He.lights,He.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Sc={r:0,b:0,g:0},qr=new oi,bv=new Ye;function _v(r,e,t,n,i,s,a){let o=new Pe(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1,N=m(w);N===null?p(o,l):N&&N.isColor&&(p(N,1),y=!0);let I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(w,y){let N=m(y);N&&(N.isCubeTexture||N.mapping===Wa)?(u===void 0&&(u=new We(new zt(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Xr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),qr.copy(y.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(qr)),u.material.toneMapped=xt.getTransfer(N.colorSpace)!==Ct,(h!==N||f!==N.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=N,f=N.version,d=r.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new We(new Nt(2,2),new It({name:"BackgroundMaterial",uniforms:Xr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(N.colorSpace)!==Ct,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(h!==N||f!==N.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=N,f=N.version,d=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,y){w.getRGB(Sc,fh(r)),n.buffers.color.setClear(Sc.r,Sc.g,Sc.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:g,dispose:T}}function yv(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(E,R,F,G,q){let ee=!1,Z=h(G,F,R);s!==Z&&(s=Z,c(s.object)),ee=d(E,G,F,q),ee&&m(E,G,F,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,y(E,R,F,G),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,R,F){let G=F.wireframe===!0,q=n[E.id];q===void 0&&(q={},n[E.id]=q);let ee=q[R.id];ee===void 0&&(ee={},q[R.id]=ee);let Z=ee[G];return Z===void 0&&(Z=f(l()),ee[G]=Z),Z}function f(E){let R=[],F=[],G=[];for(let q=0;q<t;q++)R[q]=0,F[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:G,object:E,attributes:{},index:null}}function d(E,R,F,G){let q=s.attributes,ee=R.attributes,Z=0,le=F.getAttributes();for(let j in le)if(le[j].location>=0){let me=q[j],ye=ee[j];if(ye===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor)),me===void 0||me.attribute!==ye||ye&&me.data!==ye.data)return!0;Z++}return s.attributesNum!==Z||s.index!==G}function m(E,R,F,G){let q={},ee=R.attributes,Z=0,le=F.getAttributes();for(let j in le)if(le[j].location>=0){let me=ee[j];me===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(me=E.instanceColor));let ye={};ye.attribute=me,me&&me.data&&(ye.data=me.data),q[j]=ye,Z++}s.attributes=q,s.attributesNum=Z,s.index=G}function x(){let E=s.newAttributes;for(let R=0,F=E.length;R<F;R++)E[R]=0}function g(E){p(E,0)}function p(E,R){let F=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;F[E]=1,G[E]===0&&(r.enableVertexAttribArray(E),G[E]=1),q[E]!==R&&(r.vertexAttribDivisor(E,R),q[E]=R)}function T(){let E=s.newAttributes,R=s.enabledAttributes;for(let F=0,G=R.length;F<G;F++)R[F]!==E[F]&&(r.disableVertexAttribArray(F),R[F]=0)}function w(E,R,F,G,q,ee,Z){Z===!0?r.vertexAttribIPointer(E,R,F,q,ee):r.vertexAttribPointer(E,R,F,G,q,ee)}function y(E,R,F,G){x();let q=G.attributes,ee=F.getAttributes(),Z=R.defaultAttributeValues;for(let le in ee){let j=ee[le];if(j.location>=0){let J=q[le];if(J===void 0&&(le==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),le==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){let me=J.normalized,ye=J.itemSize,Ne=e.get(J);if(Ne===void 0)continue;let Xe=Ne.buffer,te=Ne.type,ue=Ne.bytesPerElement,ce=te===r.INT||te===r.UNSIGNED_INT||J.gpuType===Vl;if(J.isInterleavedBufferAttribute){let he=J.data,Me=he.stride,Ze=J.offset;if(he.isInstancedInterleavedBuffer){for(let Re=0;Re<j.locationSize;Re++)p(j.location+Re,he.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Re=0;Re<j.locationSize;Re++)g(j.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Re=0;Re<j.locationSize;Re++)w(j.location+Re,ye/j.locationSize,te,me,Me*ue,(Ze+ye/j.locationSize*Re)*ue,ce)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<j.locationSize;he++)p(j.location+he,J.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<j.locationSize;he++)g(j.location+he);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let he=0;he<j.locationSize;he++)w(j.location+he,ye/j.locationSize,te,me,ye*ue,ye/j.locationSize*he*ue,ce)}}else if(Z!==void 0){let me=Z[le];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(j.location,me);break;case 3:r.vertexAttrib3fv(j.location,me);break;case 4:r.vertexAttrib4fv(j.location,me);break;default:r.vertexAttrib1fv(j.location,me)}}}}T()}function N(){P();for(let E in n){let R=n[E];for(let F in R){let G=R[F];for(let q in G)u(G[q].object),delete G[q];delete R[F]}delete n[E]}}function I(E){if(n[E.id]===void 0)return;let R=n[E.id];for(let F in R){let G=R[F];for(let q in G)u(G[q].object),delete G[q];delete R[F]}delete n[E.id]}function D(E){for(let R in n){let F=n[R];if(F[E.id]===void 0)continue;let G=F[E.id];for(let q in G)u(G[q].object),delete G[q];delete F[E.id]}}function P(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function Mv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*f[x];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==vn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let P=D===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Pn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==En&&!P)}function l(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=m>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:N,maxSamples:I}}function Ev(r){let e=this,t=null,n=0,i=!1,s=!1,a=new jn,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{let T=s?0:n,w=T*4,y=p.clippingState||null;l.value=y,y=u(m,f,w,d);for(let N=0;N!==w;++N)y[N]=t[N];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,y=d;w!==x;++w,y+=4)a.copy(h[w]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function wv(r){let e=new WeakMap;function t(a,o){return o===kl?a.mapping=Gr:o===Hl&&(a.mapping=Vr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===kl||o===Hl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cl(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var zs=4,$d=[.125,.215,.35,.446,.526,.582],Zr=20,xh=new ci,ep=new Pe,vh=null,bh=0,_h=0,yh=!1,Yr=(1+Math.sqrt(5))/2,Bs=1/Yr,tp=[new O(-Yr,Bs,0),new O(Yr,Bs,0),new O(-Bs,0,Yr),new O(Bs,0,Yr),new O(0,Yr,-Bs),new O(0,Yr,Bs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Tv=new O,mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Tv}=s;vh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,bh,_h),this._renderer.xr.enabled=yh,e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Kt,format:vn,colorSpace:rn,depthBuffer:!1},i=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(s)),this._blurMaterial=Rv(s,e,t)}return i}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,xh)}_sceneToCubeUV(e,t,n,i,s){let l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ep),h.toneMapping=ji,h.autoClear=!1;let m=new Ut({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),x=new We(new zt,m),g=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(ep),g=!0);for(let T=0;T<6;T++){let w=T%3;w===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):w===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));let y=this._cubeSize;Ec(i,w*y,T>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Gr||e.mapping===Vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ec(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tp[(i-s-1)%tp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new We(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Zr-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Zr;g>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zr}`);let p=[],T=0;for(let D=0;D<Zr;++D){let P=D/x,S=Math.exp(-P*P/2);p.push(S),D===0?T+=S:D<g&&(T+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:w}=this;f.dTheta.value=m,f.mipInt.value=w-n;let y=this._sizeLods[i],N=3*y*(i>w-zs?i-w+zs:0),I=4*(this._cubeSize-y);Ec(t,N,I,3*y,2*y),l.setRenderTarget(t),l.render(h,xh)}};function Av(r){let e=[],t=[],n=[],i=r,s=r-zs+1+$d.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>r-zs?l=$d[a-r+zs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,x=3,g=2,p=1,T=new Float32Array(x*m*d),w=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let I=0;I<d;I++){let D=I%3*2/3-1,P=I>2?0:-1,S=[D,P,0,D+2/3,P,0,D+2/3,P+1,0,D,P,0,D+2/3,P+1,0,D,P+1,0];T.set(S,x*m*I),w.set(f,g*m*I);let E=[I,I,I,I,I,I];y.set(E,p*m*I)}let N=new Wt;N.setAttribute("position",new Gt(T,x)),N.setAttribute("uv",new Gt(w,g)),N.setAttribute("faceIndex",new Gt(y,p)),e.push(N),i>zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function np(r,e,t){let n=new Qt(r,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ec(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rv(r,e,t){let n=new Float32Array(Zr),i=new O(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function ip(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function rp(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function Cv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===kl||l===Hl,u=l===Gr||l===Vr;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new mr(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new mr(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Pv(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ja("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Iv(r,e,t,n){let i={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(d!==null){let T=d.array;x=d.version;for(let w=0,y=T.length;w<y;w+=3){let N=T[w+0],I=T[w+1],D=T[w+2];f.push(N,I,I,D,D,N)}}else if(m!==void 0){let T=m.array;x=m.version;for(let w=0,y=T.length/3-1;w<y;w+=3){let N=w+0,I=w+1,D=w+2;f.push(N,I,I,D,D,N)}}else return;let g=new(hh(f)?Ea:Sa)(f,1);g.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Dv(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*a,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,m);let p=0;for(let T=0;T<m;T++)p+=d[T]*x[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Lv(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uv(r,e,t){let n=new WeakMap,i=new wt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],w=0;d===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,N=1;y>e.maxTextureSize&&(N=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let I=new Float32Array(y*N*4*h),D=new Ma(I,y,N,h);D.type=En,D.needsUpdate=!0;let P=w*4;for(let E=0;E<h;E++){let R=g[E],F=p[E],G=T[E],q=y*N*4*E;for(let ee=0;ee<R.count;ee++){let Z=ee*P;d===!0&&(i.fromBufferAttribute(R,ee),I[q+Z+0]=i.x,I[q+Z+1]=i.y,I[q+Z+2]=i.z,I[q+Z+3]=0),m===!0&&(i.fromBufferAttribute(F,ee),I[q+Z+4]=i.x,I[q+Z+5]=i.y,I[q+Z+6]=i.z,I[q+Z+7]=0),x===!0&&(i.fromBufferAttribute(G,ee),I[q+Z+8]=i.x,I[q+Z+9]=i.y,I[q+Z+10]=i.z,I[q+Z+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:D,size:new Fe(y,N)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Nv(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var Sp=new cn,sp=new Dr(1,1),Ep=new Ma,wp=new ol,Tp=new Ta,ap=[],op=[],lp=new Float32Array(16),cp=new Float32Array(9),up=new Float32Array(4);function Gs(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=ap[i];if(s===void 0&&(s=new Float32Array(i),ap[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Tc(r,e){let t=op[e];t===void 0&&(t=new Int32Array(e),op[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ov(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function Bv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function zv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function kv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;up.set(n),r.uniformMatrix2fv(this.addr,!1,up),fn(t,n)}}function Hv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;cp.set(n),r.uniformMatrix3fv(this.addr,!1,cp),fn(t,n)}}function Gv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;lp.set(n),r.uniformMatrix4fv(this.addr,!1,lp),fn(t,n)}}function Vv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Wv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function Xv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function qv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function jv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Yv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function Zv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function Kv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function Jv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(sp.compareFunction=oh,s=sp):s=Sp,t.setTexture2D(e||s,i)}function Qv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wp,i)}function $v(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tp,i)}function eb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ep,i)}function tb(r){switch(r){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return jv;case 36294:return Yv;case 36295:return Zv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(r,e){r.uniform1fv(this.addr,e)}function ib(r,e){let t=Gs(e,this.size,2);r.uniform2fv(this.addr,t)}function rb(r,e){let t=Gs(e,this.size,3);r.uniform3fv(this.addr,t)}function sb(r,e){let t=Gs(e,this.size,4);r.uniform4fv(this.addr,t)}function ab(r,e){let t=Gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ob(r,e){let t=Gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lb(r,e){let t=Gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cb(r,e){r.uniform1iv(this.addr,e)}function ub(r,e){r.uniform2iv(this.addr,e)}function hb(r,e){r.uniform3iv(this.addr,e)}function fb(r,e){r.uniform4iv(this.addr,e)}function db(r,e){r.uniform1uiv(this.addr,e)}function pb(r,e){r.uniform2uiv(this.addr,e)}function mb(r,e){r.uniform3uiv(this.addr,e)}function gb(r,e){r.uniform4uiv(this.addr,e)}function xb(r,e,t){let n=this.cache,i=e.length,s=Tc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sp,s[a])}function vb(r,e,t){let n=this.cache,i=e.length,s=Tc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wp,s[a])}function bb(r,e,t){let n=this.cache,i=e.length,s=Tc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Tp,s[a])}function _b(r,e,t){let n=this.cache,i=e.length,s=Tc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ep,s[a])}function yb(r){switch(r){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ab;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return _b}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tb(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yb(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function hp(r,e){r.seq.push(e),r.map[e.id]=e}function Mb(r,e,t){let n=r.name,i=n.length;for(Mh.lastIndex=0;;){let s=Mh.exec(n),a=Mh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hp(t,c===void 0?new Sh(o,r,e):new Eh(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new wh(o),hp(t,h)),t=h}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Mb(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function fp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Sb=37297,Eb=0;function wb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dp=new dt;function Tb(r){xt._getMatrix(dp,xt.workingColorSpace,r);let e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(r)){case _a:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+wb(r.getShaderSource(e),a)}else return i}function Ab(r,e){let t=Tb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rb(r,e){let t;switch(e){case Ul:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="Cineon";break;case Ol:t="ACESFilmic";break;case hr:t="AgX";break;case zl:t="Neutral";break;case Bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new O;function Cb(){xt.getLuminanceCoefficients(wc);let r=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function Ib(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Db(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Qa(r){return r!==""}function mp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(r){return r.replace(Lb,Nb)}var Ub=new Map;function Nb(r,e){let t=gt[e];if(t===void 0){let n=Ub.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}var Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xp(r){return r.replace(Fb,Ob)}function Ob(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Bb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ls?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gr:case Vr:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kb(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Vr&&(e="ENVMAP_MODE_REFRACTION"),e}function Hb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ju:e="ENVMAP_BLENDING_MULTIPLY";break;case Ld:e="ENVMAP_BLENDING_MIX";break;case Ud:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Bb(t),c=zb(t),u=kb(t),h=Hb(t),f=Gb(t),d=Pb(t),m=Ib(s),x=i.createProgram(),g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qa).join(`
`),p.length>0&&(p+=`
`)):(g=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),p=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?gt.tonemapping_pars_fragment:"",t.toneMapping!==ji?Rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Ab("linearToOutputTexel",t.outputColorSpace),Cb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),a=Th(a),a=mp(a,t),a=gp(a,t),o=Th(o),o=mp(o,t),o=gp(o,t),a=xp(a),o=xp(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=T+g+a,y=T+p+o,N=fp(i,i.VERTEX_SHADER,w),I=fp(i,i.FRAGMENT_SHADER,y);i.attachShader(x,N),i.attachShader(x,I),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(R){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(N).trim(),q=i.getShaderInfoLog(I).trim(),ee=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,N,I);else{let le=pp(i,N,"vertex"),j=pp(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+le+`
`+j)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||q==="")&&(Z=!1);Z&&(R.diagnostics={runnable:ee,programLog:F,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:p}})}i.deleteShader(N),i.deleteShader(I),P=new ks(i,x),S=Db(i,x)}let P;this.getUniforms=function(){return P===void 0&&D(this),P};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,Sb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=I,this}var Wb=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}};function Xb(r,e,t,n,i,s,a){let o=new Ss,l=new Ah,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,E,R,F,G){let q=F.fog,ee=G.geometry,Z=S.isMeshStandardMaterial?F.environment:null,le=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),j=le&&le.mapping===Wa?le.image.height:null,J=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ye=me!==void 0?me.length:0,Ne=0;ee.morphAttributes.position!==void 0&&(Ne=1),ee.morphAttributes.normal!==void 0&&(Ne=2),ee.morphAttributes.color!==void 0&&(Ne=3);let Xe,te,ue,ce;if(J){let Mt=Mi[J];Xe=Mt.vertexShader,te=Mt.fragmentShader}else Xe=S.vertexShader,te=S.fragmentShader,l.update(S),ue=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);let he=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ze=G.isInstancedMesh===!0,Re=G.isBatchedMesh===!0,at=!!S.map,nt=!!S.matcap,Ie=!!le,A=!!S.aoMap,Ge=!!S.lightMap,Ce=!!S.bumpMap,De=!!S.normalMap,Ee=!!S.displacementMap,V=!!S.emissiveMap,ie=!!S.metalnessMap,_=!!S.roughnessMap,M=S.anisotropy>0,H=S.clearcoat>0,$=S.dispersion>0,se=S.iridescence>0,ae=S.sheen>0,Oe=S.transmission>0,we=M&&!!S.anisotropyMap,je=H&&!!S.clearcoatMap,et=H&&!!S.clearcoatNormalMap,ge=H&&!!S.clearcoatRoughnessMap,Le=se&&!!S.iridescenceMap,Ve=se&&!!S.iridescenceThicknessMap,Ke=ae&&!!S.sheenColorMap,Ue=ae&&!!S.sheenRoughnessMap,ot=!!S.specularMap,tt=!!S.specularColorMap,it=!!S.specularIntensityMap,W=Oe&&!!S.transmissionMap,ne=Oe&&!!S.thicknessMap,re=!!S.gradientMap,de=!!S.alphaMap,ze=S.alphaTest>0,ke=!!S.alphaHash,ht=!!S.extensions,vt=ji;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(vt=r.toneMapping);let Ft={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:te,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Re,batchingColor:Re&&G._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&G.instanceColor!==null,instancingMorph:Ze&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:rn,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:nt,envMap:Ie,envMapMode:Ie&&le.mapping,envMapCubeUVHeight:j,aoMap:A,lightMap:Ge,bumpMap:Ce,normalMap:De,displacementMap:f&&Ee,emissiveMap:V,normalMapObjectSpace:De&&S.normalMapType===Bd,normalMapTangentSpace:De&&S.normalMapType===Mc,metalnessMap:ie,roughnessMap:_,anisotropy:M,anisotropyMap:we,clearcoat:H,clearcoatMap:je,clearcoatNormalMap:et,clearcoatRoughnessMap:ge,dispersion:$,iridescence:se,iridescenceMap:Le,iridescenceThicknessMap:Ve,sheen:ae,sheenColorMap:Ke,sheenRoughnessMap:Ue,specularMap:ot,specularColorMap:tt,specularIntensityMap:it,transmission:Oe,transmissionMap:W,thicknessMap:ne,gradientMap:re,opaque:S.transparent===!1&&S.blending===wr&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:ze,alphaHash:ke,combine:S.combine,mapUv:at&&x(S.map.channel),aoMapUv:A&&x(S.aoMap.channel),lightMapUv:Ge&&x(S.lightMap.channel),bumpMapUv:Ce&&x(S.bumpMap.channel),normalMapUv:De&&x(S.normalMap.channel),displacementMapUv:Ee&&x(S.displacementMap.channel),emissiveMapUv:V&&x(S.emissiveMap.channel),metalnessMapUv:ie&&x(S.metalnessMap.channel),roughnessMapUv:_&&x(S.roughnessMap.channel),anisotropyMapUv:we&&x(S.anisotropyMap.channel),clearcoatMapUv:je&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(S.sheenRoughnessMap.channel),specularMapUv:ot&&x(S.specularMap.channel),specularColorMapUv:tt&&x(S.specularColorMap.channel),specularIntensityMapUv:it&&x(S.specularIntensityMap.channel),transmissionMapUv:W&&x(S.transmissionMap.channel),thicknessMapUv:ne&&x(S.thicknessMap.channel),alphaMapUv:de&&x(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(De||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(at||de),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Ct,decodeVideoTextureEmissive:V&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)E.push(R),E.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(E,S),w(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let E=m[S.type],R;if(E){let F=Mi[E];R=In.clone(F.uniforms)}else R=S.uniforms;return R}function N(S,E){let R;for(let F=0,G=u.length;F<G;F++){let q=u[F];if(q.cacheKey===E){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Vb(r,E,S,s),u.push(R)),R}function I(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:N,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:P}}function qb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function jb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _p(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,m,x,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,f,d,m,x,g){let p=a(h,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,m,x,g){let p=a(h,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||jb),n.length>1&&n.sort(f||bp),i.length>1&&i.sort(f||bp)}function u(){for(let h=e,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Yb(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new _p,r.set(n,[a])):i>=s.length?(a=new _p,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Zb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Pe};break;case"SpotLight":t={position:new O,direction:new O,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function Kb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Jb=0;function Qb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $b(r){let e=new Zb,t=Kb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new Ye,a=new Ye;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,T=0,w=0,y=0,N=0,I=0,D=0;c.sort(Qb);for(let S=0,E=c.length;S<E;S++){let R=c[S],F=R.color,G=R.intensity,q=R.distance,ee=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*G,h+=F.g*G,f+=F.b*G;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],G);D++}else if(R.isDirectionalLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let le=R.shadow,j=t.get(R);j.shadowIntensity=le.intensity,j.shadowBias=le.bias,j.shadowNormalBias=le.normalBias,j.shadowRadius=le.radius,j.shadowMapSize=le.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=ee,n.directionalShadowMatrix[d]=R.shadow.matrix,T++}n.directional[d]=Z,d++}else if(R.isSpotLight){let Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(F).multiplyScalar(G),Z.distance=q,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[x]=Z;let le=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,le.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[x]=le.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=le.intensity,j.shadowBias=le.bias,j.shadowNormalBias=le.normalBias,j.shadowRadius=le.radius,j.shadowMapSize=le.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=ee,y++}x++}else if(R.isRectAreaLight){let Z=e.get(R);Z.color.copy(F).multiplyScalar(G),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=Z,g++}else if(R.isPointLight){let Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let le=R.shadow,j=t.get(R);j.shadowIntensity=le.intensity,j.shadowBias=le.bias,j.shadowNormalBias=le.normalBias,j.shadowRadius=le.radius,j.shadowMapSize=le.mapSize,j.shadowCameraNear=le.camera.near,j.shadowCameraFar=le.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=R.shadow.matrix,w++}n.point[m]=Z,m++}else if(R.isHemisphereLight){let Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(G),Z.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[p]=Z,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==N||P.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+N-I,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=N,P.numLightProbes=D,n.version=Jb++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let w=c[p];if(w.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(w.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(w.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function yp(r){let e=new $b(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function e_(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new yp(r),e.set(i,[o])):s>=a.length?(o=new yp(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`;function i_(r,e,t){let n=new gi,i=new Fe,s=new Fe,a=new wt,o=new Is({depthPacking:yc}),l=new Ds,c={},u=t.maxTextureSize,h={[ai]:Cn,[Cn]:ai,[sn]:sn},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Wt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new We(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let p=this.type;this.render=function(I,D,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=r.getRenderTarget(),E=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),F=r.state;F.setBlending(an),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==_i&&this.type===_i,q=p===_i&&this.type!==_i;for(let ee=0,Z=I.length;ee<Z;ee++){let le=I[ee],j=le.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let J=j.getFrameExtents();if(i.multiply(J),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,j.mapSize.y=s.y)),j.map===null||G===!0||q===!0){let ye=this.type!==_i?{minFilter:nn,magFilter:nn}:{};j.map!==null&&j.map.dispose(),j.map=new Qt(i.x,i.y,ye),j.map.texture.name=le.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();let me=j.getViewportCount();for(let ye=0;ye<me;ye++){let Ne=j.getViewport(ye);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),F.viewport(a),j.updateMatrices(le,ye),n=j.getFrustum(),y(D,P,j.camera,le,this.type)}j.isPointLightShadow!==!0&&this.type===_i&&T(j,P),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,E,R)};function T(I,D){let P=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qt(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(D,null,P,f,x,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(D,null,P,d,x,null)}function w(I,D,P,S){let E=null,R=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)E=R;else if(E=P.isPointLight===!0?l:o,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let F=E.uuid,G=D.uuid,q=c[F];q===void 0&&(q={},c[F]=q);let ee=q[G];ee===void 0&&(ee=E.clone(),q[G]=ee,D.addEventListener("dispose",N)),E=ee}if(E.visible=D.visible,E.wireframe=D.wireframe,S===_i?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:h[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=r.properties.get(E);F.light=P}return E}function y(I,D,P,S,E){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===_i)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);let G=e.update(I),q=I.material;if(Array.isArray(q)){let ee=G.groups;for(let Z=0,le=ee.length;Z<le;Z++){let j=ee[Z],J=q[j.materialIndex];if(J&&J.visible){let me=w(I,J,S,E);I.onBeforeShadow(r,I,D,P,G,me,j),r.renderBufferDirect(P,null,G,me,I,j),I.onAfterShadow(r,I,D,P,G,me,j)}}}else if(q.visible){let ee=w(I,q,S,E);I.onBeforeShadow(r,I,D,P,G,ee,null),r.renderBufferDirect(P,null,G,ee,I,null),I.onAfterShadow(r,I,D,P,G,ee,null)}}let F=I.children;for(let G=0,q=F.length;G<q;G++)y(F[G],D,P,S,E)}function N(I){I.target.removeEventListener("dispose",N);for(let P in c){let S=c[P],E=I.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var r_={[Al]:Rl,[Cl]:Dl,[Pl]:Ll,[Tr]:Il,[Rl]:Al,[Dl]:Cl,[Ll]:Pl,[Il]:Tr};function s_(r,e){function t(){let W=!1,ne=new wt,re=null,de=new wt(0,0,0,0);return{setMask:function(ze){re!==ze&&!W&&(r.colorMask(ze,ze,ze,ze),re=ze)},setLocked:function(ze){W=ze},setClear:function(ze,ke,ht,vt,Ft){Ft===!0&&(ze*=vt,ke*=vt,ht*=vt),ne.set(ze,ke,ht,vt),de.equals(ne)===!1&&(r.clearColor(ze,ke,ht,vt),de.copy(ne))},reset:function(){W=!1,re=null,de.set(-1,0,0,0)}}}function n(){let W=!1,ne=!1,re=null,de=null,ze=null;return{setReversed:function(ke){if(ne!==ke){let ht=e.get("EXT_clip_control");ke?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),ne=ke;let vt=ze;ze=null,this.setClear(vt)}},getReversed:function(){return ne},setTest:function(ke){ke?he(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(ke){re!==ke&&!W&&(r.depthMask(ke),re=ke)},setFunc:function(ke){if(ne&&(ke=r_[ke]),de!==ke){switch(ke){case Al:r.depthFunc(r.NEVER);break;case Rl:r.depthFunc(r.ALWAYS);break;case Cl:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case Pl:r.depthFunc(r.EQUAL);break;case Il:r.depthFunc(r.GEQUAL);break;case Dl:r.depthFunc(r.GREATER);break;case Ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=ke}},setLocked:function(ke){W=ke},setClear:function(ke){ze!==ke&&(ne&&(ke=1-ke),r.clearDepth(ke),ze=ke)},reset:function(){W=!1,re=null,de=null,ze=null,ne=!1}}}function i(){let W=!1,ne=null,re=null,de=null,ze=null,ke=null,ht=null,vt=null,Ft=null;return{setTest:function(Mt){W||(Mt?he(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Mt){ne!==Mt&&!W&&(r.stencilMask(Mt),ne=Mt)},setFunc:function(Mt,_n,On){(re!==Mt||de!==_n||ze!==On)&&(r.stencilFunc(Mt,_n,On),re=Mt,de=_n,ze=On)},setOp:function(Mt,_n,On){(ke!==Mt||ht!==_n||vt!==On)&&(r.stencilOp(Mt,_n,On),ke=Mt,ht=_n,vt=On)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Ft!==Mt&&(r.clearStencil(Mt),Ft=Mt)},reset:function(){W=!1,ne=null,re=null,de=null,ze=null,ke=null,ht=null,vt=null,Ft=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,T=null,w=null,y=null,N=null,I=null,D=new Pe(0,0,0),P=0,S=!1,E=null,R=null,F=null,G=null,q=null,ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,le=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=le>=1):j.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=le>=2);let J=null,me={},ye=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Xe=new wt().fromArray(ye),te=new wt().fromArray(Ne);function ue(W,ne,re,de){let ze=new Uint8Array(4),ke=r.createTexture();r.bindTexture(W,ke),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<re;ht++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(ne+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return ke}let ce={};ce[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(Tr),Ce(!1),De(ju),he(r.CULL_FACE),A(an);function he(W){u[W]!==!0&&(r.enable(W),u[W]=!0)}function Me(W){u[W]!==!1&&(r.disable(W),u[W]=!1)}function Ze(W,ne){return h[W]!==ne?(r.bindFramebuffer(W,ne),h[W]=ne,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ne),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function Re(W,ne){let re=d,de=!1;if(W){re=f.get(ne),re===void 0&&(re=[],f.set(ne,re));let ze=W.textures;if(re.length!==ze.length||re[0]!==r.COLOR_ATTACHMENT0){for(let ke=0,ht=ze.length;ke<ht;ke++)re[ke]=r.COLOR_ATTACHMENT0+ke;re.length=ze.length,de=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,de=!0);de&&r.drawBuffers(re)}function at(W){return m!==W?(r.useProgram(W),m=W,!0):!1}let nt={[Hn]:r.FUNC_ADD,[bd]:r.FUNC_SUBTRACT,[_d]:r.FUNC_REVERSE_SUBTRACT};nt[yd]=r.MIN,nt[Md]=r.MAX;let Ie={[Hr]:r.ZERO,[Sd]:r.ONE,[Ed]:r.SRC_COLOR,[nl]:r.SRC_ALPHA,[Rd]:r.SRC_ALPHA_SATURATE,[Va]:r.DST_COLOR,[Ga]:r.DST_ALPHA,[wd]:r.ONE_MINUS_SRC_COLOR,[il]:r.ONE_MINUS_SRC_ALPHA,[Ad]:r.ONE_MINUS_DST_COLOR,[Td]:r.ONE_MINUS_DST_ALPHA,[Cd]:r.CONSTANT_COLOR,[Pd]:r.ONE_MINUS_CONSTANT_COLOR,[Id]:r.CONSTANT_ALPHA,[Dd]:r.ONE_MINUS_CONSTANT_ALPHA};function A(W,ne,re,de,ze,ke,ht,vt,Ft,Mt){if(W===an){x===!0&&(Me(r.BLEND),x=!1);return}if(x===!1&&(he(r.BLEND),x=!0),W!==Tl){if(W!==g||Mt!==S){if((p!==Hn||y!==Hn)&&(r.blendEquation(r.FUNC_ADD),p=Hn,y=Hn),Mt)switch(W){case wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yi:r.blendFunc(r.ONE,r.ONE);break;case Zu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ku:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ku:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}T=null,w=null,N=null,I=null,D.set(0,0,0),P=0,g=W,S=Mt}return}ze=ze||ne,ke=ke||re,ht=ht||de,(ne!==p||ze!==y)&&(r.blendEquationSeparate(nt[ne],nt[ze]),p=ne,y=ze),(re!==T||de!==w||ke!==N||ht!==I)&&(r.blendFuncSeparate(Ie[re],Ie[de],Ie[ke],Ie[ht]),T=re,w=de,N=ke,I=ht),(vt.equals(D)===!1||Ft!==P)&&(r.blendColor(vt.r,vt.g,vt.b,Ft),D.copy(vt),P=Ft),g=W,S=!1}function Ge(W,ne){W.side===sn?Me(r.CULL_FACE):he(r.CULL_FACE);let re=W.side===Cn;ne&&(re=!re),Ce(re),W.blending===wr&&W.transparent===!1?A(an):A(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let de=W.stencilWrite;o.setTest(de),de&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),V(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(W){E!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),E=W)}function De(W){W!==xd?(he(r.CULL_FACE),W!==R&&(W===ju?r.cullFace(r.BACK):W===vd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),R=W}function Ee(W){W!==F&&(Z&&r.lineWidth(W),F=W)}function V(W,ne,re){W?(he(r.POLYGON_OFFSET_FILL),(G!==ne||q!==re)&&(r.polygonOffset(ne,re),G=ne,q=re)):Me(r.POLYGON_OFFSET_FILL)}function ie(W){W?he(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function _(W){W===void 0&&(W=r.TEXTURE0+ee-1),J!==W&&(r.activeTexture(W),J=W)}function M(W,ne,re){re===void 0&&(J===null?re=r.TEXTURE0+ee-1:re=J);let de=me[re];de===void 0&&(de={type:void 0,texture:void 0},me[re]=de),(de.type!==W||de.texture!==ne)&&(J!==re&&(r.activeTexture(re),J=re),r.bindTexture(W,ne||ce[W]),de.type=W,de.texture=ne)}function H(){let W=me[J];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function $(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(W){Xe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Xe.copy(W))}function Ue(W){te.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),te.copy(W))}function ot(W,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let de=re.get(W);de===void 0&&(de=r.getUniformBlockIndex(ne,W.name),re.set(W,de))}function tt(W,ne){let de=c.get(ne).get(W);l.get(ne)!==de&&(r.uniformBlockBinding(ne,de,W.__bindingPointIndex),l.set(ne,de))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,me={},h={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,T=null,w=null,y=null,N=null,I=null,D=new Pe(0,0,0),P=0,S=!1,E=null,R=null,F=null,G=null,q=null,Xe.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Me,bindFramebuffer:Ze,drawBuffers:Re,useProgram:at,setBlending:A,setMaterial:Ge,setFlipSided:Ce,setCullFace:De,setLineWidth:Ee,setPolygonOffset:V,setScissorTest:ie,activeTexture:_,bindTexture:M,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:se,texImage2D:Le,texImage3D:Ve,updateUBOMapping:ot,uniformBlockBinding:tt,texStorage2D:et,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:Oe,compressedTexSubImage2D:we,compressedTexSubImage3D:je,scissor:Ke,viewport:Ue,reset:it}}function a_(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(_,M){return d?new OffscreenCanvas(_,M):ys("canvas")}function x(_,M,H){let $=1,se=ie(_);if((se.width>H||se.height>H)&&($=H/Math.max(se.width,se.height)),$<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let ae=Math.floor($*se.width),Oe=Math.floor($*se.height);h===void 0&&(h=m(ae,Oe));let we=M?m(ae,Oe):h;return we.width=ae,we.height=Oe,we.getContext("2d").drawImage(_,0,0,ae,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ae+"x"+Oe+")."),we}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),_;return _}function g(_){return _.generateMipmaps}function p(_){r.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?r.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(_,M,H,$,se=!1){if(_!==null){if(r[_]!==void 0)return r[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ae=M;if(M===r.RED&&(H===r.FLOAT&&(ae=r.R32F),H===r.HALF_FLOAT&&(ae=r.R16F),H===r.UNSIGNED_BYTE&&(ae=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.R8UI),H===r.UNSIGNED_SHORT&&(ae=r.R16UI),H===r.UNSIGNED_INT&&(ae=r.R32UI),H===r.BYTE&&(ae=r.R8I),H===r.SHORT&&(ae=r.R16I),H===r.INT&&(ae=r.R32I)),M===r.RG&&(H===r.FLOAT&&(ae=r.RG32F),H===r.HALF_FLOAT&&(ae=r.RG16F),H===r.UNSIGNED_BYTE&&(ae=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.RG8UI),H===r.UNSIGNED_SHORT&&(ae=r.RG16UI),H===r.UNSIGNED_INT&&(ae=r.RG32UI),H===r.BYTE&&(ae=r.RG8I),H===r.SHORT&&(ae=r.RG16I),H===r.INT&&(ae=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),H===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),H===r.UNSIGNED_INT&&(ae=r.RGB32UI),H===r.BYTE&&(ae=r.RGB8I),H===r.SHORT&&(ae=r.RGB16I),H===r.INT&&(ae=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),H===r.UNSIGNED_INT&&(ae=r.RGBA32UI),H===r.BYTE&&(ae=r.RGBA8I),H===r.SHORT&&(ae=r.RGBA16I),H===r.INT&&(ae=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),M===r.RGBA){let Oe=se?_a:xt.getTransfer($);H===r.FLOAT&&(ae=r.RGBA32F),H===r.HALF_FLOAT&&(ae=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ae=Oe===Ct?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(_,M){let H;return _?M===null||M===fr||M===dr?H=r.DEPTH24_STENCIL8:M===En?H=r.DEPTH32F_STENCIL8:M===Ns&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fr||M===dr?H=r.DEPTH_COMPONENT24:M===En?H=r.DEPTH_COMPONENT32F:M===Ns&&(H=r.DEPTH_COMPONENT16),H}function N(_,M){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==nn&&_.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?M.mipmaps.length:1}function I(_){let M=_.target;M.removeEventListener("dispose",I),P(M),M.isVideoTexture&&u.delete(M)}function D(_){let M=_.target;M.removeEventListener("dispose",D),E(M)}function P(_){let M=n.get(_);if(M.__webglInit===void 0)return;let H=_.source,$=f.get(H);if($){let se=$[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(_),Object.keys($).length===0&&f.delete(H)}n.remove(_)}function S(_){let M=n.get(_);r.deleteTexture(M.__webglTexture);let H=_.source,$=f.get(H);delete $[M.__cacheKey],a.memory.textures--}function E(_){let M=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let se=0;se<M.__webglFramebuffer[$].length;se++)r.deleteFramebuffer(M.__webglFramebuffer[$][se]);else r.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)r.deleteFramebuffer(M.__webglFramebuffer[$]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=_.textures;for(let $=0,se=H.length;$<se;$++){let ae=n.get(H[$]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(_)}let R=0;function F(){R=0}function G(){let _=R;return _>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+i.maxTextures),R+=1,_}function q(_){let M=[];return M.push(_.wrapS),M.push(_.wrapT),M.push(_.wrapR||0),M.push(_.magFilter),M.push(_.minFilter),M.push(_.anisotropy),M.push(_.internalFormat),M.push(_.format),M.push(_.type),M.push(_.generateMipmaps),M.push(_.premultiplyAlpha),M.push(_.flipY),M.push(_.unpackAlignment),M.push(_.colorSpace),M.join()}function ee(_,M){let H=n.get(_);if(_.isVideoTexture&&Ee(_),_.isRenderTargetTexture===!1&&_.version>0&&H.__version!==_.version){let $=_.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,_,M);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function Z(_,M){let H=n.get(_);if(_.version>0&&H.__version!==_.version){te(H,_,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function le(_,M){let H=n.get(_);if(_.version>0&&H.__version!==_.version){te(H,_,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function j(_,M){let H=n.get(_);if(_.version>0&&H.__version!==_.version){ue(H,_,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}let J={[Xt]:r.REPEAT,[Yn]:r.CLAMP_TO_EDGE,[bs]:r.MIRRORED_REPEAT},me={[nn]:r.NEAREST,[Gl]:r.NEAREST_MIPMAP_NEAREST,[Wr]:r.NEAREST_MIPMAP_LINEAR,[Jt]:r.LINEAR,[Us]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},ye={[zd]:r.NEVER,[Xd]:r.ALWAYS,[kd]:r.LESS,[oh]:r.LEQUAL,[Hd]:r.EQUAL,[Wd]:r.GEQUAL,[Gd]:r.GREATER,[Vd]:r.NOTEQUAL};function Ne(_,M){if(M.type===En&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===Us||M.magFilter===Wr||M.magFilter===Kn||M.minFilter===Jt||M.minFilter===Us||M.minFilter===Wr||M.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(_,r.TEXTURE_WRAP_S,J[M.wrapS]),r.texParameteri(_,r.TEXTURE_WRAP_T,J[M.wrapT]),(_===r.TEXTURE_3D||_===r.TEXTURE_2D_ARRAY)&&r.texParameteri(_,r.TEXTURE_WRAP_R,J[M.wrapR]),r.texParameteri(_,r.TEXTURE_MAG_FILTER,me[M.magFilter]),r.texParameteri(_,r.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(r.texParameteri(_,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(_,r.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==Wr&&M.minFilter!==Kn||M.type===En&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(_,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(_,M){let H=!1;_.__webglInit===void 0&&(_.__webglInit=!0,M.addEventListener("dispose",I));let $=M.source,se=f.get($);se===void 0&&(se={},f.set($,se));let ae=q(M);if(ae!==_.__cacheKey){se[ae]===void 0&&(se[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[ae].usedTimes++;let Oe=se[_.__cacheKey];Oe!==void 0&&(se[_.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(M)),_.__cacheKey=ae,_.__webglTexture=se[ae].texture}return H}function te(_,M,H){let $=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=r.TEXTURE_3D);let se=Xe(_,M),ae=M.source;t.bindTexture($,_.__webglTexture,r.TEXTURE0+H);let Oe=n.get(ae);if(ae.version!==Oe.__version||se===!0){t.activeTexture(r.TEXTURE0+H);let we=xt.getPrimaries(xt.workingColorSpace),je=M.colorSpace===ui?null:xt.getPrimaries(M.colorSpace),et=M.colorSpace===ui||we===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ge=x(M.image,!1,i.maxTextureSize);ge=V(M,ge);let Le=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),Ke=w(M.internalFormat,Le,Ve,M.colorSpace,M.isVideoTexture);Ne($,M);let Ue,ot=M.mipmaps,tt=M.isVideoTexture!==!0,it=Oe.__version===void 0||se===!0,W=ae.dataReady,ne=N(M,ge);if(M.isDepthTexture)Ke=y(M.format===pr,M.type),it&&(tt?t.texStorage2D(r.TEXTURE_2D,1,Ke,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,Ke,ge.width,ge.height,0,Le,Ve,null));else if(M.isDataTexture)if(ot.length>0){tt&&it&&t.texStorage2D(r.TEXTURE_2D,ne,Ke,ot[0].width,ot[0].height);for(let re=0,de=ot.length;re<de;re++)Ue=ot[re],tt?W&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ue.width,Ue.height,Le,Ve,Ue.data):t.texImage2D(r.TEXTURE_2D,re,Ke,Ue.width,Ue.height,0,Le,Ve,Ue.data);M.generateMipmaps=!1}else tt?(it&&t.texStorage2D(r.TEXTURE_2D,ne,Ke,ge.width,ge.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge.width,ge.height,Le,Ve,ge.data)):t.texImage2D(r.TEXTURE_2D,0,Ke,ge.width,ge.height,0,Le,Ve,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ke,ot[0].width,ot[0].height,ge.depth);for(let re=0,de=ot.length;re<de;re++)if(Ue=ot[re],M.format!==vn)if(Le!==null)if(tt){if(W)if(M.layerUpdates.size>0){let ze=gh(Ue.width,Ue.height,M.format,M.type);for(let ke of M.layerUpdates){let ht=Ue.data.subarray(ke*ze/Ue.data.BYTES_PER_ELEMENT,(ke+1)*ze/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ke,Ue.width,Ue.height,1,Le,ht)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Ue.width,Ue.height,ge.depth,Le,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ke,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Ue.width,Ue.height,ge.depth,Le,Ve,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ke,Ue.width,Ue.height,ge.depth,0,Le,Ve,Ue.data)}else{tt&&it&&t.texStorage2D(r.TEXTURE_2D,ne,Ke,ot[0].width,ot[0].height);for(let re=0,de=ot.length;re<de;re++)Ue=ot[re],M.format!==vn?Le!==null?tt?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Ue.width,Ue.height,Le,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ue.width,Ue.height,Le,Ve,Ue.data):t.texImage2D(r.TEXTURE_2D,re,Ke,Ue.width,Ue.height,0,Le,Ve,Ue.data)}else if(M.isDataArrayTexture)if(tt){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ke,ge.width,ge.height,ge.depth),W)if(M.layerUpdates.size>0){let re=gh(ge.width,ge.height,M.format,M.type);for(let de of M.layerUpdates){let ze=ge.data.subarray(de*re/ge.data.BYTES_PER_ELEMENT,(de+1)*re/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,ge.width,ge.height,1,Le,Ve,ze)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ve,ge.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,ge.width,ge.height,ge.depth,0,Le,Ve,ge.data);else if(M.isData3DTexture)tt?(it&&t.texStorage3D(r.TEXTURE_3D,ne,Ke,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ve,ge.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,ge.width,ge.height,ge.depth,0,Le,Ve,ge.data);else if(M.isFramebufferTexture){if(it)if(tt)t.texStorage2D(r.TEXTURE_2D,ne,Ke,ge.width,ge.height);else{let re=ge.width,de=ge.height;for(let ze=0;ze<ne;ze++)t.texImage2D(r.TEXTURE_2D,ze,Ke,re,de,0,Le,Ve,null),re>>=1,de>>=1}}else if(ot.length>0){if(tt&&it){let re=ie(ot[0]);t.texStorage2D(r.TEXTURE_2D,ne,Ke,re.width,re.height)}for(let re=0,de=ot.length;re<de;re++)Ue=ot[re],tt?W&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Le,Ve,Ue):t.texImage2D(r.TEXTURE_2D,re,Ke,Le,Ve,Ue);M.generateMipmaps=!1}else if(tt){if(it){let re=ie(ge);t.texStorage2D(r.TEXTURE_2D,ne,Ke,re.width,re.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Ve,ge)}else t.texImage2D(r.TEXTURE_2D,0,Ke,Le,Ve,ge);g(M)&&p($),Oe.__version=ae.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function ue(_,M,H){if(M.image.length!==6)return;let $=Xe(_,M),se=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,_.__webglTexture,r.TEXTURE0+H);let ae=n.get(se);if(se.version!==ae.__version||$===!0){t.activeTexture(r.TEXTURE0+H);let Oe=xt.getPrimaries(xt.workingColorSpace),we=M.colorSpace===ui?null:xt.getPrimaries(M.colorSpace),je=M.colorSpace===ui||Oe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let et=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let de=0;de<6;de++)!et&&!ge?Le[de]=x(M.image[de],!0,i.maxCubemapSize):Le[de]=ge?M.image[de].image:M.image[de],Le[de]=V(M,Le[de]);let Ve=Le[0],Ke=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),ot=w(M.internalFormat,Ke,Ue,M.colorSpace),tt=M.isVideoTexture!==!0,it=ae.__version===void 0||$===!0,W=se.dataReady,ne=N(M,Ve);Ne(r.TEXTURE_CUBE_MAP,M);let re;if(et){tt&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,ot,Ve.width,Ve.height);for(let de=0;de<6;de++){re=Le[de].mipmaps;for(let ze=0;ze<re.length;ze++){let ke=re[ze];M.format!==vn?Ke!==null?tt?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,ke.width,ke.height,Ke,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ot,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,ke.width,ke.height,Ke,Ue,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ot,ke.width,ke.height,0,Ke,Ue,ke.data)}}}else{if(re=M.mipmaps,tt&&it){re.length>0&&ne++;let de=ie(Le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,ot,de.width,de.height)}for(let de=0;de<6;de++)if(ge){tt?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Le[de].width,Le[de].height,Ke,Ue,Le[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ot,Le[de].width,Le[de].height,0,Ke,Ue,Le[de].data);for(let ze=0;ze<re.length;ze++){let ht=re[ze].image[de].image;tt?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,ht.width,ht.height,Ke,Ue,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ot,ht.width,ht.height,0,Ke,Ue,ht.data)}}else{tt?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ke,Ue,Le[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ot,Ke,Ue,Le[de]);for(let ze=0;ze<re.length;ze++){let ke=re[ze];tt?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Ke,Ue,ke.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ot,Ke,Ue,ke.image[de])}}}g(M)&&p(r.TEXTURE_CUBE_MAP),ae.__version=se.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function ce(_,M,H,$,se,ae){let Oe=s.convert(H.format,H.colorSpace),we=s.convert(H.type),je=w(H.internalFormat,Oe,we,H.colorSpace),et=n.get(M),ge=n.get(H);if(ge.__renderTarget=M,!et.__hasExternalTextures){let Le=Math.max(1,M.width>>ae),Ve=Math.max(1,M.height>>ae);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ae,je,Le,Ve,M.depth,0,Oe,we,null):t.texImage2D(se,ae,je,Le,Ve,0,Oe,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,_),De(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,se,ge.__webglTexture,0,Ce(M)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,se,ge.__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(_,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,_),M.depthBuffer){let $=M.depthTexture,se=$&&$.isDepthTexture?$.type:null,ae=y(M.stencilBuffer,se),Oe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=Ce(M);De(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ae,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ae,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ae,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,_)}else{let $=M.textures;for(let se=0;se<$.length;se++){let ae=$[se],Oe=s.convert(ae.format,ae.colorSpace),we=s.convert(ae.type),je=w(ae.internalFormat,Oe,we,ae.colorSpace),et=Ce(M);H&&De(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,je,M.width,M.height):De(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,je,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,je,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(_,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,_),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let se=$.__webglTexture,ae=Ce(M);if(M.depthTexture.format===_s)De(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(M.depthTexture.format===pr)De(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ze(_){let M=n.get(_),H=_.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==_.depthTexture){let $=_.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",se)};$.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=$}if(_.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let $=_.texture.mipmaps;$&&$.length>0?Me(M.__webglFramebuffer[0],_):Me(M.__webglFramebuffer,_)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=r.createRenderbuffer(),he(M.__webglDepthbuffer[$],_,!1);else{let se=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ae)}}else{let $=_.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),he(M.__webglDepthbuffer,_,!1);else{let se=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ae)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(_,M,H){let $=n.get(_);M!==void 0&&ce($.__webglFramebuffer,_,_.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Ze(_)}function at(_){let M=_.texture,H=n.get(_),$=n.get(M);_.addEventListener("dispose",D);let se=_.textures,ae=_.isWebGLCubeRenderTarget===!0,Oe=se.length>1;if(Oe||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=M.version,a.memory.textures++),ae){H.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[we]=[];for(let je=0;je<M.mipmaps.length;je++)H.__webglFramebuffer[we][je]=r.createFramebuffer()}else H.__webglFramebuffer[we]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)H.__webglFramebuffer[we]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let we=0,je=se.length;we<je;we++){let et=n.get(se[we]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),a.memory.textures++)}if(_.samples>0&&De(_)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let we=0;we<se.length;we++){let je=se[we];H.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[we]);let et=s.convert(je.format,je.colorSpace),ge=s.convert(je.type),Le=w(je.internalFormat,et,ge,je.colorSpace,_.isXRRenderTarget===!0),Ve=Ce(_);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Le,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,H.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),_.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),he(H.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let je=0;je<M.mipmaps.length;je++)ce(H.__webglFramebuffer[we][je],_,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else ce(H.__webglFramebuffer[we],_,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let we=0,je=se.length;we<je;we++){let et=se[we],ge=n.get(et);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),Ne(r.TEXTURE_2D,et),ce(H.__webglFramebuffer,_,et,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),g(et)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(we=_.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,$.__webglTexture),Ne(we,M),M.mipmaps&&M.mipmaps.length>0)for(let je=0;je<M.mipmaps.length;je++)ce(H.__webglFramebuffer[je],_,M,r.COLOR_ATTACHMENT0,we,je);else ce(H.__webglFramebuffer,_,M,r.COLOR_ATTACHMENT0,we,0);g(M)&&p(we),t.unbindTexture()}_.depthBuffer&&Ze(_)}function nt(_){let M=_.textures;for(let H=0,$=M.length;H<$;H++){let se=M[H];if(g(se)){let ae=T(_),Oe=n.get(se).__webglTexture;t.bindTexture(ae,Oe),p(ae),t.unbindTexture()}}}let Ie=[],A=[];function Ge(_){if(_.samples>0){if(De(_)===!1){let M=_.textures,H=_.width,$=_.height,se=r.COLOR_BUFFER_BIT,ae=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(_),we=M.length>1;if(we)for(let et=0;et<M.length;et++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);let je=_.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let et=0;et<M.length;et++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[et]);let ge=n.get(M[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,H,$,0,0,H,$,se,r.NEAREST),l===!0&&(Ie.length=0,A.length=0,Ie.push(r.COLOR_ATTACHMENT0+et),_.depthBuffer&&_.resolveDepthBuffer===!1&&(Ie.push(ae),A.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,A)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<M.length;et++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[et]);let ge=n.get(M[et]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let M=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ce(_){return Math.min(i.maxSamples,_.samples)}function De(_){let M=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(_){let M=a.render.frame;u.get(_)!==M&&(u.set(_,M),_.update())}function V(_,M){let H=_.colorSpace,$=_.format,se=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||H!==rn&&H!==ui&&(xt.getTransfer(H)===Ct?($!==vn||se!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function ie(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=le,this.setTextureCube=j,this.rebindTextures=Re,this.setupRenderTarget=at,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=De}function o_(r,e){function t(n,i=ui){let s,a=xt.getTransfer(i);if(n===Pn)return r.UNSIGNED_BYTE;if(n===Wl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===th)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return r.BYTE;if(n===eh)return r.SHORT;if(n===Ns)return r.UNSIGNED_SHORT;if(n===Vl)return r.INT;if(n===fr)return r.UNSIGNED_INT;if(n===En)return r.FLOAT;if(n===Kt)return r.HALF_FLOAT;if(n===nh)return r.ALPHA;if(n===ih)return r.RGB;if(n===vn)return r.RGBA;if(n===_s)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===Fs)return r.RED;if(n===ql)return r.RED_INTEGER;if(n===rh)return r.RG;if(n===jl)return r.RG_INTEGER;if(n===Yl)return r.RGBA_INTEGER;if(n===Xa||n===qa||n===ja||n===Ya)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===Kl||n===Jl||n===Ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$l||n===ec)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===gc||n===xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===vc||n===bc||n===_c)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new cn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends ki{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=new Ch,g=t.getContextAttributes(),p=null,T=null,w=[],y=[],N=new Fe,I=null,D=new Zt;D.viewport=new wt;let P=new Zt;P.viewport=new wt;let S=[D,P],E=new wl,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=w[te];return ue===void 0&&(ue=new ws,w[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=w[te];return ue===void 0&&(ue=new ws,w[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=w[te];return ue===void 0&&(ue=new ws,w[te]=ue),ue.getHandSpace()};function G(te){let ue=y.indexOf(te.inputSource);if(ue===-1)return;let ce=w[ue];ce!==void 0&&(ce.update(te.inputSource,te.frame,c||a),ce.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",ee);for(let te=0;te<w.length;te++){let ue=y[te];ue!==null&&(y[te]=null,w[te].disconnect(ue))}R=null,F=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,T=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,he=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?pr:_s,he=g.stencil?dr:fr);let Ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Qt(f.textureWidth,f.textureHeight,{format:vn,type:Pn,depthTexture:new Dr(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Qt(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(te){for(let ue=0;ue<te.removed.length;ue++){let ce=te.removed[ue],he=y.indexOf(ce);he>=0&&(y[he]=null,w[he].disconnect(ce))}for(let ue=0;ue<te.added.length;ue++){let ce=te.added[ue],he=y.indexOf(ce);if(he===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=y.length){y.push(ce),he=Ze;break}else if(y[Ze]===null){y[Ze]=ce,he=Ze;break}if(he===-1)break}let Me=w[he];Me&&Me.connect(ce)}}let Z=new O,le=new O;function j(te,ue,ce){Z.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(ce.matrixWorld);let he=Z.distanceTo(le),Me=ue.projectionMatrix.elements,Ze=ce.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),at=Me[14]/(Me[10]+1),nt=(Me[9]+1)/Me[5],Ie=(Me[9]-1)/Me[5],A=(Me[8]-1)/Me[0],Ge=(Ze[8]+1)/Ze[0],Ce=Re*A,De=Re*Ge,Ee=he/(-A+Ge),V=Ee*-A;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(V),te.translateZ(Ee),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Me[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let ie=Re+Ee,_=at+Ee,M=Ce-V,H=De+(he-V),$=nt*at/_*ie,se=Ie*at/_*ie;te.projectionMatrix.makePerspective(M,H,$,se,ie,_),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function J(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let ue=te.near,ce=te.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),E.near=P.near=D.near=ue,E.far=P.far=D.far=ce,(R!==E.near||F!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,F=E.far),D.layers.mask=te.layers.mask|2,P.layers.mask=te.layers.mask|4,E.layers.mask=D.layers.mask|P.layers.mask;let he=te.parent,Me=E.cameras;J(E,he);for(let Ze=0;Ze<Me.length;Ze++)J(Me[Ze],he);Me.length===2?j(E,D,P):E.projectionMatrix.copy(D.projectionMatrix),me(te,E,he)};function me(te,ue,ce){ce===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Cr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ye=null;function Ne(te,ue){if(u=ue.getViewerPose(c||a),m=ue,u!==null){let ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let he=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,he=!0);for(let Re=0;Re<ce.length;Re++){let at=ce[Re],nt=null;if(d!==null)nt=d.getViewport(at);else{let A=h.getViewSubImage(f,at);nt=A.viewport,Re===0&&(e.setRenderTargetTextures(T,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(T))}let Ie=S[Re];Ie===void 0&&(Ie=new Zt,Ie.layers.enable(Re),Ie.viewport=new wt,S[Re]=Ie),Ie.matrix.fromArray(at.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(at.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(nt.x,nt.y,nt.width,nt.height),Re===0&&(E.matrix.copy(Ie.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),he===!0&&E.cameras.push(Ie)}let Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){let Re=h.getDepthInformation(ce[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,i.renderState)}}for(let ce=0;ce<w.length;ce++){let he=y[ce],Me=w[ce];he!==null&&Me!==void 0&&Me.update(he,ue,c||a)}ye&&ye(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}let Xe=new Mp;Xe.setAnimationLoop(Ne),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}},jr=new oi,u_=new Ye;function h_(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,fh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,T,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=e.get(p),w=T.envMap,y=T.envMapRotation;w&&(g.envMap.value=w,jr.copy(y),jr.x*=-1,jr.y*=-1,jr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(jr)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function f_(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){let y=w.program;n.uniformBlockBinding(T,y)}function c(T,w){let y=i[T.id];y===void 0&&(m(T),y=u(T),i[T.id]=y,T.addEventListener("dispose",g));let N=w.program;n.updateUBOMapping(T,N);let I=e.render.frame;s[T.id]!==I&&(f(T),s[T.id]=I)}function u(T){let w=h();T.__bindingPointIndex=w;let y=r.createBuffer(),N=T.__size,I=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,N,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,y),y}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let w=i[T.id],y=T.uniforms,N=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let I=0,D=y.length;I<D;I++){let P=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,E=P.length;S<E;S++){let R=P[S];if(d(R,I,S,N)===!0){let F=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],q=0;for(let ee=0;ee<G.length;ee++){let Z=G[ee],le=x(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,F+q,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,q),q+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,w,y,N){let I=T.value,D=w+"_"+y;if(N[D]===void 0)return typeof I=="number"||typeof I=="boolean"?N[D]=I:N[D]=I.clone(),!0;{let P=N[D];if(typeof I=="number"||typeof I=="boolean"){if(P!==I)return N[D]=I,!0}else if(P.equals(I)===!1)return P.copy(I),!0}return!1}function m(T){let w=T.uniforms,y=0,N=16;for(let D=0,P=w.length;D<P;D++){let S=Array.isArray(w[D])?w[D]:[w[D]];for(let E=0,R=S.length;E<R;E++){let F=S[E],G=Array.isArray(F.value)?F.value:[F.value];for(let q=0,ee=G.length;q<ee;q++){let Z=G[q],le=x(Z),j=y%N,J=j%le.boundary,me=j+J;y+=J,me!==0&&N-me<le.storage&&(y+=N-me),F.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=le.storage}}}let I=y%N;return I>0&&(y+=N-I),T.__size=y,T.__cache={},this}function x(T){let w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function g(T){let w=T.target;w.removeEventListener("dispose",g);let y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function p(){for(let T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Hs=class{constructor(e={}){let{canvas:t=qd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,N=!1;this._outputColorSpace=Rt;let I=0,D=0,P=null,S=-1,E=null,R=new wt,F=new wt,G=null,q=new Pe(0),ee=0,Z=t.width,le=t.height,j=1,J=null,me=null,ye=new wt(0,0,Z,le),Ne=new wt(0,0,Z,le),Xe=!1,te=new gi,ue=!1,ce=!1,he=new Ye,Me=new Ye,Ze=new O,Re=new wt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function Ie(){return P===null?j:1}let A=n;function Ge(b,L){return t.getContext(b,L)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"176"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ke,!1),A===null){let L="webgl2";if(A=Ge(L,b),A===null)throw Ge(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ce,De,Ee,V,ie,_,M,H,$,se,ae,Oe,we,je,et,ge,Le,Ve,Ke,Ue,ot,tt,it,W;function ne(){Ce=new Pv(A),Ce.init(),tt=new o_(A,Ce),De=new Sv(A,Ce,e,tt),Ee=new s_(A,Ce),De.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),V=new Lv(A),ie=new qb,_=new a_(A,Ce,Ee,ie,De,tt,V),M=new wv(y),H=new Cv(y),$=new z0(A),it=new yv(A,$),se=new Iv(A,$,V,it),ae=new Nv(A,se,$,V),Ke=new Uv(A,De,_),ge=new Ev(ie),Oe=new Xb(y,M,H,Ce,De,it,ge),we=new h_(y,ie),je=new Yb,et=new e_(Ce),Ve=new _v(y,M,H,Ee,ae,d,l),Le=new i_(y,ae,De),W=new f_(A,V,De,Ee),Ue=new Mv(A,Ce,V),ot=new Dv(A,Ce,V),V.programs=Oe.programs,y.capabilities=De,y.extensions=Ce,y.properties=ie,y.renderLists=je,y.shadowMap=Le,y.state=Ee,y.info=V}ne();let re=new Ph(y,A);this.xr=re,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let b=Ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(Z,le,!1))},this.getSize=function(b){return b.set(Z,le)},this.setSize=function(b,L,U=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,le=L,t.width=Math.floor(b*j),t.height=Math.floor(L*j),U===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(Z*j,le*j).floor()},this.setDrawingBufferSize=function(b,L,U){Z=b,le=L,j=U,t.width=Math.floor(b*U),t.height=Math.floor(L*U),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,L,U,k){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,L,U,k),Ee.viewport(R.copy(ye).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,L,U,k){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,L,U,k),Ee.scissor(F.copy(Ne).multiplyScalar(j).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){Ee.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,U=!0){let k=0;if(b){let B=!1;if(P!==null){let X=P.texture.format;B=X===Yl||X===jl||X===ql}if(B){let X=P.texture.type,Y=X===Pn||X===fr||X===Ns||X===dr||X===Wl||X===Xl,K=Ve.getClearColor(),oe=Ve.getClearAlpha(),pe=K.r,fe=K.g,xe=K.b;Y?(m[0]=pe,m[1]=fe,m[2]=xe,m[3]=oe,A.clearBufferuiv(A.COLOR,0,m)):(x[0]=pe,x[1]=fe,x[2]=xe,x[3]=oe,A.clearBufferiv(A.COLOR,0,x))}else k|=A.COLOR_BUFFER_BIT}L&&(k|=A.DEPTH_BUFFER_BIT),U&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ve.dispose(),je.dispose(),et.dispose(),ie.dispose(),M.dispose(),H.dispose(),ae.dispose(),it.dispose(),W.dispose(),Oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Q),re.removeEventListener("sessionend",be),Se.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let b=V.autoReset,L=Le.enabled,U=Le.autoUpdate,k=Le.needsUpdate,B=Le.type;ne(),V.autoReset=b,Le.enabled=L,Le.autoUpdate=U,Le.needsUpdate=k,Le.type=B}function ke(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let L=b.target;L.removeEventListener("dispose",ht),vt(L)}function vt(b){Ft(b),ie.remove(b)}function Ft(b){let L=ie.get(b).programs;L!==void 0&&(L.forEach(function(U){Oe.releaseProgram(U)}),b.isShaderMaterial&&Oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,U,k,B,X){L===null&&(L=at);let Y=B.isMesh&&B.matrixWorld.determinant()<0,K=oa(b,L,U,k,B);Ee.setMaterial(k,Y);let oe=U.index,pe=1;if(k.wireframe===!0){if(oe=se.getWireframeAttribute(U),oe===void 0)return;pe=2}let fe=U.drawRange,xe=U.attributes.position,_e=fe.start*pe,Ae=(fe.start+fe.count)*pe;X!==null&&(_e=Math.max(_e,X.start*pe),Ae=Math.min(Ae,(X.start+X.count)*pe)),oe!==null?(_e=Math.max(_e,0),Ae=Math.min(Ae,oe.count)):xe!=null&&(_e=Math.max(_e,0),Ae=Math.min(Ae,xe.count));let Qe=Ae-_e;if(Qe<0||Qe===1/0)return;it.setup(B,k,K,U,oe);let lt,rt=Ue;if(oe!==null&&(lt=$.get(oe),rt=ot,rt.setIndex(lt)),B.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*Ie()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(B.isLine){let Je=k.linewidth;Je===void 0&&(Je=1),Ee.setLineWidth(Je*Ie()),B.isLineSegments?rt.setMode(A.LINES):B.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else B.isPoints?rt.setMode(A.POINTS):B.isSprite&&rt.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ja("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Je=B._multiDrawStarts,ft=B._multiDrawCounts,$e=B._multiDrawCount,At=oe?$.get(oe).bytesPerElement:1,on=ie.get(k).currentProgram.getUniforms();for(let Et=0;Et<$e;Et++)on.setValue(A,"_gl_DrawID",Et),rt.render(Je[Et]/At,ft[Et])}else if(B.isInstancedMesh)rt.renderInstances(_e,Qe,B.count);else if(U.isInstancedBufferGeometry){let Je=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ft=Math.min(U.instanceCount,Je);rt.renderInstances(_e,Qe,ft)}else rt.render(_e,Qe)};function Mt(b,L,U){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Bn(b,L,U),b.side=ai,b.needsUpdate=!0,Bn(b,L,U),b.side=sn):Bn(b,L,U)}this.compile=function(b,L,U=null){U===null&&(U=b),p=et.get(U),p.init(L),w.push(p),U.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==U&&b.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let k=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let X=B.material;if(X)if(Array.isArray(X))for(let Y=0;Y<X.length;Y++){let K=X[Y];Mt(K,U,B),k.add(K)}else Mt(X,U,B),k.add(X)}),p=w.pop(),k},this.compileAsync=function(b,L,U=null){let k=this.compile(b,L,U);return new Promise(B=>{function X(){if(k.forEach(function(Y){ie.get(Y).currentProgram.isReady()&&k.delete(Y)}),k.size===0){B(b);return}setTimeout(X,10)}Ce.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let _n=null;function On(b){_n&&_n(b)}function Q(){Se.stop()}function be(){Se.start()}let Se=new Mp;Se.setAnimationLoop(On),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(b){_n=b,re.setAnimationLoop(b),b===null?Se.stop():Se.start()},re.addEventListener("sessionstart",Q),re.addEventListener("sessionend",be),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(L),L=re.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,L,P),p=et.get(b,w.length),p.init(L),w.push(p),Me.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),te.setFromProjectionMatrix(Me),ce=this.localClippingEnabled,ue=ge.init(this.clippingPlanes,ce),g=je.get(b,T.length),g.init(),T.push(g),re.enabled===!0&&re.isPresenting===!0){let X=y.xr.getDepthSensingMesh();X!==null&&qe(X,L,-1/0,y.sortObjects)}qe(b,L,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,me),nt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,nt&&Ve.addToRenderList(g,b),this.info.render.frame++,ue===!0&&ge.beginShadows();let U=p.state.shadowsArray;Le.render(U,b,L),ue===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=g.opaque,B=g.transmissive;if(p.setupLights(),L.isArrayCamera){let X=L.cameras;if(B.length>0)for(let Y=0,K=X.length;Y<K;Y++){let oe=X[Y];pt(k,B,b,oe)}nt&&Ve.render(b);for(let Y=0,K=X.length;Y<K;Y++){let oe=X[Y];ut(g,b,oe,oe.viewport)}}else B.length>0&&pt(k,B,b,L),nt&&Ve.render(b),ut(g,b,L);P!==null&&D===0&&(_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,L),it.resetDefaultState(),S=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],ue===!0&&ge.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function qe(b,L,U,k){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)U=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){k&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);let Y=ae.update(b),K=b.material;K.visible&&g.push(b,Y,K,U,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||te.intersectsObject(b))){let Y=ae.update(b),K=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Re.copy(Y.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(K)){let oe=Y.groups;for(let pe=0,fe=oe.length;pe<fe;pe++){let xe=oe[pe],_e=K[xe.materialIndex];_e&&_e.visible&&g.push(b,Y,_e,U,Re.z,xe)}}else K.visible&&g.push(b,Y,K,U,Re.z,null)}}let X=b.children;for(let Y=0,K=X.length;Y<K;Y++)qe(X[Y],L,U,k)}function ut(b,L,U,k){let B=b.opaque,X=b.transmissive,Y=b.transparent;p.setupLightsView(U),ue===!0&&ge.setGlobalState(y.clippingPlanes,U),k&&Ee.viewport(R.copy(k)),B.length>0&&Tt(B,L,U),X.length>0&&Tt(X,L,U),Y.length>0&&Tt(Y,L,U),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function pt(b,L,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Qt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Kt:Pn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let X=p.state.transmissionRenderTarget[k.id],Y=k.viewport||R;X.setSize(Y.z*y.transmissionResolutionScale,Y.w*y.transmissionResolutionScale);let K=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(q),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),nt&&Ve.render(U);let oe=y.toneMapping;y.toneMapping=ji;let pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ue===!0&&ge.setGlobalState(y.clippingPlanes,k),Tt(b,U,k),_.updateMultisampleRenderTarget(X),_.updateRenderTargetMipmap(X),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let xe=0,_e=L.length;xe<_e;xe++){let Ae=L[xe],Qe=Ae.object,lt=Ae.geometry,rt=Ae.material,Je=Ae.group;if(rt.side===sn&&Qe.layers.test(k.layers)){let ft=rt.side;rt.side=Cn,rt.needsUpdate=!0,di(Qe,U,k,lt,rt,Je),rt.side=ft,rt.needsUpdate=!0,fe=!0}}fe===!0&&(_.updateMultisampleRenderTarget(X),_.updateRenderTargetMipmap(X))}y.setRenderTarget(K),y.setClearColor(q,ee),pe!==void 0&&(k.viewport=pe),y.toneMapping=oe}function Tt(b,L,U){let k=L.isScene===!0?L.overrideMaterial:null;for(let B=0,X=b.length;B<X;B++){let Y=b[B],K=Y.object,oe=Y.geometry,pe=Y.group,fe=Y.material;fe.allowOverride===!0&&k!==null&&(fe=k),K.layers.test(U.layers)&&di(K,L,U,oe,fe,pe)}}function di(b,L,U,k,B,X){b.onBeforeRender(y,L,U,k,B,X),b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,L,U,k,b,X),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=Cn,B.needsUpdate=!0,y.renderBufferDirect(U,L,k,B,b,X),B.side=ai,B.needsUpdate=!0,y.renderBufferDirect(U,L,k,B,b,X),B.side=sn):y.renderBufferDirect(U,L,k,B,b,X),b.onAfterRender(y,L,U,k,B,X)}function Bn(b,L,U){L.isScene!==!0&&(L=at);let k=ie.get(b),B=p.state.lights,X=p.state.shadowsArray,Y=B.state.version,K=Oe.getParameters(b,B.state,X,L,U),oe=Oe.getProgramCacheKey(K),pe=k.programs;k.environment=b.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,pe===void 0&&(b.addEventListener("dispose",ht),pe=new Map,k.programs=pe);let fe=pe.get(oe);if(fe!==void 0){if(k.currentProgram===fe&&k.lightsStateVersion===Y)return Ci(b,K),fe}else K.uniforms=Oe.getUniforms(b),b.onBeforeCompile(K,y),fe=Oe.acquireProgram(K,oe),pe.set(oe,fe),k.uniforms=K.uniforms;let xe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xe.clippingPlanes=ge.uniform),Ci(b,K),k.needsLights=er(b),k.lightsStateVersion=Y,k.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.directionalShadowMap.value=B.state.directionalShadowMap,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotShadowMap.value=B.state.spotShadowMap,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMap.value=B.state.pointShadowMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=fe,k.uniformsList=null,fe}function $i(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=ks.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Ci(b,L){let U=ie.get(b);U.outputColorSpace=L.outputColorSpace,U.batching=L.batching,U.batchingColor=L.batchingColor,U.instancing=L.instancing,U.instancingColor=L.instancingColor,U.instancingMorph=L.instancingMorph,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function oa(b,L,U,k,B){L.isScene!==!0&&(L=at),_.resetTextureUnits();let X=L.fog,Y=k.isMeshStandardMaterial?L.environment:null,K=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:rn,oe=(k.isMeshStandardMaterial?H:M).get(k.envMap||Y),pe=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,fe=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xe=!!U.morphAttributes.position,_e=!!U.morphAttributes.normal,Ae=!!U.morphAttributes.color,Qe=ji;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Qe=y.toneMapping);let lt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,rt=lt!==void 0?lt.length:0,Je=ie.get(k),ft=p.state.lights;if(ue===!0&&(ce===!0||b!==E)){let Bt=b===E&&k.id===S;ge.setState(k,b,Bt)}let $e=!1;k.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==ft.state.version||Je.outputColorSpace!==K||B.isBatchedMesh&&Je.batching===!1||!B.isBatchedMesh&&Je.batching===!0||B.isBatchedMesh&&Je.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Je.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Je.instancing===!1||!B.isInstancedMesh&&Je.instancing===!0||B.isSkinnedMesh&&Je.skinning===!1||!B.isSkinnedMesh&&Je.skinning===!0||B.isInstancedMesh&&Je.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Je.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Je.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Je.instancingMorph===!1&&B.morphTexture!==null||Je.envMap!==oe||k.fog===!0&&Je.fog!==X||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ge.numPlanes||Je.numIntersection!==ge.numIntersection)||Je.vertexAlphas!==pe||Je.vertexTangents!==fe||Je.morphTargets!==xe||Je.morphNormals!==_e||Je.morphColors!==Ae||Je.toneMapping!==Qe||Je.morphTargetsCount!==rt)&&($e=!0):($e=!0,Je.__version=k.version);let At=Je.currentProgram;$e===!0&&(At=Bn(k,L,B));let on=!1,Et=!1,yt=!1,ct=At.getUniforms(),Yt=Je.uniforms;if(Ee.useProgram(At.program)&&(on=!0,Et=!0,yt=!0),k.id!==S&&(S=k.id,Et=!0),on||E!==b){Ee.buffers.depth.getReversed()?(he.copy(b.projectionMatrix),Yd(he),Zd(he),ct.setValue(A,"projectionMatrix",he)):ct.setValue(A,"projectionMatrix",b.projectionMatrix),ct.setValue(A,"viewMatrix",b.matrixWorldInverse);let ln=ct.map.cameraPosition;ln!==void 0&&ln.setValue(A,Ze.setFromMatrixPosition(b.matrixWorld)),De.logarithmicDepthBuffer&&ct.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Et=!0,yt=!0)}if(B.isSkinnedMesh){ct.setOptional(A,B,"bindMatrix"),ct.setOptional(A,B,"bindMatrixInverse");let Bt=B.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ct.setValue(A,"boneTexture",Bt.boneTexture,_))}B.isBatchedMesh&&(ct.setOptional(A,B,"batchingTexture"),ct.setValue(A,"batchingTexture",B._matricesTexture,_),ct.setOptional(A,B,"batchingIdTexture"),ct.setValue(A,"batchingIdTexture",B._indirectTexture,_),ct.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(A,"batchingColorTexture",B._colorsTexture,_));let dn=U.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ke.update(B,U,At),(Et||Je.receiveShadow!==B.receiveShadow)&&(Je.receiveShadow=B.receiveShadow,ct.setValue(A,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Yt.envMap.value=oe,Yt.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Yt.envMapIntensity.value=L.environmentIntensity),Et&&(ct.setValue(A,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&Pi(Yt,yt),X&&k.fog===!0&&we.refreshFogUniforms(Yt,X),we.refreshMaterialUniforms(Yt,k,j,le,p.state.transmissionRenderTarget[b.id]),ks.upload(A,$i(Je),Yt,_)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ks.upload(A,$i(Je),Yt,_),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(A,"center",B.center),ct.setValue(A,"modelViewMatrix",B.modelViewMatrix),ct.setValue(A,"normalMatrix",B.normalMatrix),ct.setValue(A,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Bt=k.uniformsGroups;for(let ln=0,su=Bt.length;ln<su;ln++){let br=Bt[ln];W.update(br,At),W.bind(br,At)}}return At}function Pi(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function er(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,L,U){let k=ie.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ie.get(b.texture).__webglTexture=L,ie.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:U,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let U=ie.get(b);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0};let v=A.createFramebuffer();this.setRenderTarget=function(b,L=0,U=0){P=b,I=L,D=U;let k=!0,B=null,X=!1,Y=!1;if(b){let oe=ie.get(b);if(oe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(A.FRAMEBUFFER,null),k=!1;else if(oe.__webglFramebuffer===void 0)_.setupRenderTarget(b);else if(oe.__hasExternalTextures)_.rebindTextures(b,ie.get(b.texture).__webglTexture,ie.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let xe=b.depthTexture;if(oe.__boundDepthTexture!==xe){if(xe!==null&&ie.has(xe)&&(b.width!==xe.image.width||b.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(b)}}let pe=b.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Y=!0);let fe=ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(fe[L])?B=fe[L][U]:B=fe[L],X=!0):b.samples>0&&_.useMultisampledRTT(b)===!1?B=ie.get(b).__webglMultisampledFramebuffer:Array.isArray(fe)?B=fe[U]:B=fe,R.copy(b.viewport),F.copy(b.scissor),G=b.scissorTest}else R.copy(ye).multiplyScalar(j).floor(),F.copy(Ne).multiplyScalar(j).floor(),G=Xe;if(U!==0&&(B=v),Ee.bindFramebuffer(A.FRAMEBUFFER,B)&&k&&Ee.drawBuffers(b,B),Ee.viewport(R),Ee.scissor(F),Ee.setScissorTest(G),X){let oe=ie.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe.__webglTexture,U)}else if(Y){let oe=ie.get(b.texture),pe=L;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,oe.__webglTexture,U,pe)}else if(b!==null&&U!==0){let oe=ie.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,oe.__webglTexture,U)}S=-1},this.readRenderTargetPixels=function(b,L,U,k,B,X,Y){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let K=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Y!==void 0&&(K=K[Y]),K){Ee.bindFramebuffer(A.FRAMEBUFFER,K);try{let oe=b.texture,pe=oe.format,fe=oe.type;if(!De.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-k&&U>=0&&U<=b.height-B&&A.readPixels(L,U,k,B,tt.convert(pe),tt.convert(fe),X)}finally{let oe=P!==null?ie.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(b,L,U,k,B,X,Y){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let K=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Y!==void 0&&(K=K[Y]),K)if(L>=0&&L<=b.width-k&&U>=0&&U<=b.height-B){Ee.bindFramebuffer(A.FRAMEBUFFER,K);let oe=b.texture,pe=oe.format,fe=oe.type;if(!De.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,xe),A.bufferData(A.PIXEL_PACK_BUFFER,X.byteLength,A.STREAM_READ),A.readPixels(L,U,k,B,tt.convert(pe),tt.convert(fe),0);let _e=P!==null?ie.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,_e);let Ae=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await jd(A,Ae,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,X),A.deleteBuffer(xe),A.deleteSync(Ae),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,U=0){let k=Math.pow(2,-U),B=Math.floor(b.image.width*k),X=Math.floor(b.image.height*k),Y=L!==null?L.x:0,K=L!==null?L.y:0;_.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,U,0,0,Y,K,B,X),Ee.unbindTexture()};let C=A.createFramebuffer(),z=A.createFramebuffer();this.copyTextureToTexture=function(b,L,U=null,k=null,B=0,X=null){X===null&&(B!==0?(Ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),X=B,B=0):X=0);let Y,K,oe,pe,fe,xe,_e,Ae,Qe,lt=b.isCompressedTexture?b.mipmaps[X]:b.image;if(U!==null)Y=U.max.x-U.min.x,K=U.max.y-U.min.y,oe=U.isBox3?U.max.z-U.min.z:1,pe=U.min.x,fe=U.min.y,xe=U.isBox3?U.min.z:0;else{let dn=Math.pow(2,-B);Y=Math.floor(lt.width*dn),K=Math.floor(lt.height*dn),b.isDataArrayTexture?oe=lt.depth:b.isData3DTexture?oe=Math.floor(lt.depth*dn):oe=1,pe=0,fe=0,xe=0}k!==null?(_e=k.x,Ae=k.y,Qe=k.z):(_e=0,Ae=0,Qe=0);let rt=tt.convert(L.format),Je=tt.convert(L.type),ft;L.isData3DTexture?(_.setTexture3D(L,0),ft=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(_.setTexture2DArray(L,0),ft=A.TEXTURE_2D_ARRAY):(_.setTexture2D(L,0),ft=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);let $e=A.getParameter(A.UNPACK_ROW_LENGTH),At=A.getParameter(A.UNPACK_IMAGE_HEIGHT),on=A.getParameter(A.UNPACK_SKIP_PIXELS),Et=A.getParameter(A.UNPACK_SKIP_ROWS),yt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,lt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,fe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,xe);let ct=b.isDataArrayTexture||b.isData3DTexture,Yt=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let dn=ie.get(b),Bt=ie.get(L),ln=ie.get(dn.__renderTarget),su=ie.get(Bt.__renderTarget);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,su.__webglFramebuffer);for(let br=0;br<oe;br++)ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ie.get(b).__webglTexture,B,xe+br),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ie.get(L).__webglTexture,X,Qe+br)),A.blitFramebuffer(pe,fe,Y,K,_e,Ae,Y,K,A.DEPTH_BUFFER_BIT,A.NEAREST);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||ie.has(b)){let dn=ie.get(b),Bt=ie.get(L);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,C),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,z);for(let ln=0;ln<oe;ln++)ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,dn.__webglTexture,B,xe+ln):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,dn.__webglTexture,B),Yt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Bt.__webglTexture,X,Qe+ln):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Bt.__webglTexture,X),B!==0?A.blitFramebuffer(pe,fe,Y,K,_e,Ae,Y,K,A.COLOR_BUFFER_BIT,A.NEAREST):Yt?A.copyTexSubImage3D(ft,X,_e,Ae,Qe+ln,pe,fe,Y,K):A.copyTexSubImage2D(ft,X,_e,Ae,pe,fe,Y,K);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Yt?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(ft,X,_e,Ae,Qe,Y,K,oe,rt,Je,lt.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(ft,X,_e,Ae,Qe,Y,K,oe,rt,lt.data):A.texSubImage3D(ft,X,_e,Ae,Qe,Y,K,oe,rt,Je,lt):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,X,_e,Ae,Y,K,rt,Je,lt.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,X,_e,Ae,lt.width,lt.height,rt,lt.data):A.texSubImage2D(A.TEXTURE_2D,X,_e,Ae,Y,K,rt,Je,lt);A.pixelStorei(A.UNPACK_ROW_LENGTH,$e),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(A.UNPACK_SKIP_PIXELS,on),A.pixelStorei(A.UNPACK_SKIP_ROWS,Et),A.pixelStorei(A.UNPACK_SKIP_IMAGES,yt),X===0&&L.generateMipmaps&&A.generateMipmap(ft),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,L,U=null,k=null,B=0){return Ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,U,k,B)},this.initRenderTarget=function(b){ie.get(b).__webglFramebuffer===void 0&&_.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?_.setTextureCube(b,0):b.isData3DTexture?_.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_.setTexture2DArray(b,0):_.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){I=0,D=0,P=null,Ee.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};function Rp(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Wt,c=0;for(let u=0;u<r.length;++u){let h=r[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Ap(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][f]);let m=Ap(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Ap(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let a=new e(s),o=new Gt(a,t,n),l=0;for(let c=0;c<r.length;++c){let u=r[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);o.setComponent(f+h,m,x)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function Dh(r,e){if(e===ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Os||e===Ka){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Os)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Ac=class extends li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new $h(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Xi.extractUrlBase(e);a=Xi.resolveURL(c,this.path)}else a=Xi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lp){try{a[bt.KHR_BINARY_GLTF]=new ef(e)}catch(h){i&&i(h);return}s=JSON.parse(a[bt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new lf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case bt.KHR_MATERIALS_UNLIT:a[h]=new Oh;break;case bt.KHR_DRACO_MESH_COMPRESSION:a[h]=new tf(s,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:a[h]=new nf;break;case bt.KHR_MESH_QUANTIZATION:a[h]=new rf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function d_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fh=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rn(u),c.distance=h;break;case"spot":c=new kr(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Oh=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ut}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},zh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(s)}},kh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Rt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],rn),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Rt)),Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Yh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Kh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Jh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Qh=class{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},$h=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new Ye,g=new O,p=new xn,T=new O(1,1,1),w=new un(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&T.fromBufferAttribute(l.SCALE,y),w.setMatrixAt(y,x.compose(g,p,T));for(let y in l)if(y==="_COLOR_0"){let N=l[y];w.instanceColor=new cr(N.array,N.itemSize,N.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Vt.prototype.copy.call(w,m),this.parser.assignFinalMaterial(w),d.push(w)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Lp="glTF",$a=12,Cp={JSON:1313821514,BIN:5130562},ef=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$a),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-$a,s=new DataView(e,$a),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Cp.JSON){let c=new Uint8Array(e,$a+a,o);this.content=n.decode(c)}else if(l===Cp.BIN){let c=$a+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=af[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=af[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Vs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(d)},o,c,rn,f)})})}},nf=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},rf=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},Rc=class extends Hi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,T=1-g,w=p-f+h;for(let y=0;y!==o;y++){let N=a[x+y+o],I=a[x+y+l]*u,D=a[m+y+o],P=a[m+y]*u;s[y]=T*N+w*I+g*D+p*P}return s}},p_=new xn,sf=class extends Rc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return p_.fromArray(s).normalize().toArray(s),s}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pp={9728:nn,9729:Jt,9984:Gl,9985:Us,9986:Wr,9987:Kn},Ip={33071:Yn,33648:bs,10497:Xt},Lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},af={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m_={CUBICSPLINE:void 0,LINEAR:Rr,STEP:Ar},Uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),r.DefaultMaterial}function Kr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function x_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function v_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b_(r){let e,t=r.extensions&&r.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nh(t.attributes):e=r.indices+":"+Nh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Nh(r.targets[n]);return e}function Nh(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function of(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function __(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var y_=new Ye,lf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new d_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Or(this.options.manager):this.textureLoader=new ka(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Kr(s,o,i),Yi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Xi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Lh[i.type],o=Vs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Gt(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Lh[i.type],c=Vs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=t.cache.get(T);w||(x=new c(o,p*d,i.count*d/u),w=new Ts(x,d/u),t.cache.add(T,w)),g=new As(w,l,f%d/u,m)}else o===null?x=new c(i.count*l):x=new c(o,f,i.count*l),g=new Gt(x,l,m);if(i.sparse!==void 0){let p=Lh.SCALAR,T=Vs[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,N=new T(a[1],w,i.sparse.count*p),I=new c(a[2],y,i.sparse.count*l);o!==null&&(g=new Gt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let D=0,P=N.length;D<P;D++){let S=N[D];if(g.setX(S,I[D*l]),l>=2&&g.setY(S,I[D*l+1]),l>=3&&g.setZ(S,I[D*l+2]),l>=4&&g.setW(S,I[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Pp[f.magFilter]||Jt,u.minFilter=Pp[f.minFilter]||Kn,u.wrapS=Ip[f.wrapS]||Xt,u.wrapT=Ip[f.wrapT]||Xt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==Jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new cn(x);g.needsUpdate=!0,f(g)}),t.load(Xi.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Yi(h,a),h.userData.mimeType=a.mimeType||__(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ps,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Cs,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Te}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[bt.KHR_MATERIALS_UNLIT]){let h=i[bt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],rn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Rt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=sn);let u=s.alphaMode||Uh.OPAQUE;if(u===Uh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Uh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ut&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Ut&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ut){let h=s.emissiveFactor;o.emissive=new Pe().setRGB(h[0],h[1],h[2],rn)}return s.emissiveTexture!==void 0&&a!==Ut&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Yi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Kr(i,h,s),h})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Dp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=b_(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Dp(new Wt,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?g_(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=a[d],p,T=c[d];if(g.mode===Jn.TRIANGLES||g.mode===Jn.TRIANGLE_STRIP||g.mode===Jn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Ra(x,T):new We(x,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Jn.TRIANGLE_STRIP?p.geometry=Dh(p.geometry,Ka):g.mode===Jn.TRIANGLE_FAN&&(p.geometry=Dh(p.geometry,Os));else if(g.mode===Jn.LINES)p=new Pa(x,T);else if(g.mode===Jn.LINE_STRIP)p=new Pr(x,T);else if(g.mode===Jn.LINE_LOOP)p=new Ia(x,T);else if(g.mode===Jn.POINTS)p=new Ir(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&v_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Yi(p,s),g.extensions&&Kr(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Kr(i,h[0],s),h[0];let f=new Be;s.extensions&&Kr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(uh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ci(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Ye;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ca(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,T=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let T=0,w=f.length;T<w;T++){let y=f[T],N=d[T],I=m[T],D=x[T],P=g[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let S=n._createAnimationTracks(y,N,I,D,P);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new Oa(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,y_)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Rs:c.length>1?u=new Be:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Yi(u,s),s.extensions&&Kr(n,u,s),s.matrix!==void 0){let h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Be;n.name&&(s.name=i.createUniqueName(n.name)),Yi(s,n),n.extensions&&Kr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof An||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];gr[s.path]===gr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(gr[s.path]){case gr.weights:c=xi;break;case gr.rotation:c=vi;break;case gr.translation:case gr.scale:c=bi;break;default:n.itemSize===1?c=xi:c=bi;break}let u=i.interpolation!==void 0?m_[i.interpolation]:Rr,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+gr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=of(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof vi?sf:Rc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function M_(r,e,t){let n=e.attributes,i=new Gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){let u=of(Vs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new O,l=new O;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=of(Vs[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Dp(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=af[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return xt.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Yi(r,e),M_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?x_(r,e.targets,t):r})}var Qn=Uint8Array,Ws=Uint16Array,S_=Int32Array,Up=new Qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Np=new Qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),E_=new Qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fp=function(r,e){for(var t=new Ws(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new S_(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Op=Fp(Up,2),Bp=Op.b,w_=Op.r;Bp[28]=258,w_[258]=28;var zp=Fp(Np,0),T_=zp.b,QM=zp.r,hf=new Ws(32768);for(Dt=0;Dt<32768;++Dt)Zi=(Dt&43690)>>1|(Dt&21845)<<1,Zi=(Zi&52428)>>2|(Zi&13107)<<2,Zi=(Zi&61680)>>4|(Zi&3855)<<4,hf[Dt]=((Zi&65280)>>8|(Zi&255)<<8)>>1;var Zi,Dt,eo=(function(r,e,t){for(var n=r.length,i=0,s=new Ws(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new Ws(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new Ws(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=a[r[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[hf[h]>>l]=c}else for(o=new Ws(n),i=0;i<n;++i)r[i]&&(o[i]=hf[a[r[i]-1]++]>>15-r[i]);return o}),to=new Qn(288);for(Dt=0;Dt<144;++Dt)to[Dt]=8;var Dt;for(Dt=144;Dt<256;++Dt)to[Dt]=9;var Dt;for(Dt=256;Dt<280;++Dt)to[Dt]=7;var Dt;for(Dt=280;Dt<288;++Dt)to[Dt]=8;var Dt,kp=new Qn(32);for(Dt=0;Dt<32;++Dt)kp[Dt]=5;var Dt;var A_=eo(to,9,1);var R_=eo(kp,5,1),cf=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},hi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},uf=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},C_=function(r){return(r+7)/8|0},P_=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new Qn(r.subarray(e,t))};var I_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fi=function(r,e,t){var n=new Error(e||I_[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,fi),!t)throw n;return n},D_=function(r,e,t,n){var i=r.length,s=n?n.length:0;if(!i||e.f&&!e.l)return t||new Qn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Qn(i*3));var c=function(at){var nt=t.length;if(at>nt){var Ie=new Qn(Math.max(nt*2,at));Ie.set(t),t=Ie}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,m=e.d,x=e.m,g=e.n,p=i*8;do{if(!d){u=hi(r,h,1);var T=hi(r,h+1,3);if(h+=3,T)if(T==1)d=A_,m=R_,x=9,g=5;else if(T==2){var I=hi(r,h,31)+257,D=hi(r,h+10,15)+4,P=I+hi(r,h+5,31)+1;h+=14;for(var S=new Qn(P),E=new Qn(19),R=0;R<D;++R)E[E_[R]]=hi(r,h+R*3,7);h+=D*3;for(var F=cf(E),G=(1<<F)-1,q=eo(E,F,1),R=0;R<P;){var ee=q[hi(r,h,G)];h+=ee&15;var w=ee>>4;if(w<16)S[R++]=w;else{var Z=0,le=0;for(w==16?(le=3+hi(r,h,3),h+=2,Z=S[R-1]):w==17?(le=3+hi(r,h,7),h+=3):w==18&&(le=11+hi(r,h,127),h+=7);le--;)S[R++]=Z}}var j=S.subarray(0,I),J=S.subarray(I);x=cf(j),g=cf(J),d=eo(j,x,1),m=eo(J,g,1)}else fi(1);else{var w=C_(h)+4,y=r[w-4]|r[w-3]<<8,N=w+y;if(N>i){l&&fi(0);break}o&&c(f+y),t.set(r.subarray(w,N),f),e.b=f+=y,e.p=h=N*8,e.f=u;continue}if(h>p){l&&fi(0);break}}o&&c(f+131072);for(var me=(1<<x)-1,ye=(1<<g)-1,Ne=h;;Ne=h){var Z=d[uf(r,h)&me],Xe=Z>>4;if(h+=Z&15,h>p){l&&fi(0);break}if(Z||fi(2),Xe<256)t[f++]=Xe;else if(Xe==256){Ne=h,d=null;break}else{var te=Xe-254;if(Xe>264){var R=Xe-257,ue=Up[R];te=hi(r,h,(1<<ue)-1)+Bp[R],h+=ue}var ce=m[uf(r,h)&ye],he=ce>>4;ce||fi(3),h+=ce&15;var J=T_[he];if(he>3){var ue=Np[he];J+=uf(r,h)&(1<<ue)-1,h+=ue}if(h>p){l&&fi(0);break}o&&c(f+131072);var Me=f+te;if(f<J){var Ze=s-J,Re=Math.min(J,Me);for(Ze+f<0&&fi(3);f<Re;++f)t[f]=n[Ze+f]}for(;f<Me;++f)t[f]=t[f-J]}}e.l=d,e.p=Ne,e.b=f,e.f=u,d&&(u=1,e.m=x,e.d=m,e.n=g)}while(!u);return f!=t.length&&a?P_(t,0,f):t.subarray(0,f)};var L_=new Qn(0);var U_=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&fi(6,"invalid zlib data"),(r[1]>>5&1)==+!e&&fi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function no(r,e){return D_(r.subarray(U_(r,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var N_=typeof TextDecoder<"u"&&new TextDecoder,F_=0;try{N_.decode(L_,{stream:!0}),F_=1}catch{}var Xs=class extends Ba{constructor(e){super(e),this.type=Kt}parse(e){let S=Math.pow(2.7182818,2.2);function E(v,C){let z=0;for(let L=0;L<65536;++L)(L==0||v[L>>3]&1<<(L&7))&&(C[z++]=L);let b=z-1;for(;z<65536;)C[z++]=0;return b}function R(v){for(let C=0;C<16384;C++)v[C]={},v[C].len=0,v[C].lit=0,v[C].p=null}let F={l:0,c:0,lc:0};function G(v,C,z,b,L){for(;z<v;)C=C<<8|Ue(b,L),z+=8;z-=v,F.l=C>>z&(1<<v)-1,F.c=C,F.lc=z}let q=new Array(59);function ee(v){for(let z=0;z<=58;++z)q[z]=0;for(let z=0;z<65537;++z)q[v[z]]+=1;let C=0;for(let z=58;z>0;--z){let b=C+q[z]>>1;q[z]=C,C=b}for(let z=0;z<65537;++z){let b=v[z];b>0&&(v[z]=b|q[b]++<<6)}}function Z(v,C,z,b,L,U){let k=C,B=0,X=0;for(;b<=L;b++){if(k.value-C.value>z)return!1;G(6,B,X,v,k);let Y=F.l;if(B=F.c,X=F.lc,U[b]=Y,Y==63){if(k.value-C.value>z)throw new Error("Something wrong with hufUnpackEncTable");G(8,B,X,v,k);let K=F.l+6;if(B=F.c,X=F.lc,b+K>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)U[b++]=0;b--}else if(Y>=59){let K=Y-59+2;if(b+K>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)U[b++]=0;b--}}ee(U)}function le(v){return v&63}function j(v){return v>>6}function J(v,C,z,b){for(;C<=z;C++){let L=j(v[C]),U=le(v[C]);if(L>>U)throw new Error("Invalid table entry");if(U>14){let k=b[L>>U-14];if(k.len)throw new Error("Invalid table entry");if(k.lit++,k.p){let B=k.p;k.p=new Array(k.lit);for(let X=0;X<k.lit-1;++X)k.p[X]=B[X]}else k.p=new Array(1);k.p[k.lit-1]=C}else if(U){let k=0;for(let B=1<<14-U;B>0;B--){let X=b[(L<<14-U)+k];if(X.len||X.p)throw new Error("Invalid table entry");X.len=U,X.lit=C,k++}}}return!0}let me={c:0,lc:0};function ye(v,C,z,b){v=v<<8|Ue(z,b),C+=8,me.c=v,me.lc=C}let Ne={c:0,lc:0};function Xe(v,C,z,b,L,U,k,B,X){if(v==C){b<8&&(ye(z,b,L,U),z=me.c,b=me.lc),b-=8;let Y=z>>b;if(Y=new Uint8Array([Y])[0],B.value+Y>X)return!1;let K=k[B.value-1];for(;Y-- >0;)k[B.value++]=K}else if(B.value<X)k[B.value++]=v;else return!1;Ne.c=z,Ne.lc=b}function te(v){return v&65535}function ue(v){let C=te(v);return C>32767?C-65536:C}let ce={a:0,b:0};function he(v,C){let z=ue(v),L=ue(C),U=z+(L&1)+(L>>1),k=U,B=U-L;ce.a=k,ce.b=B}function Me(v,C){let z=te(v),b=te(C),L=z-(b>>1)&65535,U=b+L-32768&65535;ce.a=U,ce.b=L}function Ze(v,C,z,b,L,U,k){let B=k<16384,X=z>L?L:z,Y=1,K,oe;for(;Y<=X;)Y<<=1;for(Y>>=1,K=Y,Y>>=1;Y>=1;){oe=0;let pe=oe+U*(L-K),fe=U*Y,xe=U*K,_e=b*Y,Ae=b*K,Qe,lt,rt,Je;for(;oe<=pe;oe+=xe){let ft=oe,$e=oe+b*(z-K);for(;ft<=$e;ft+=Ae){let At=ft+_e,on=ft+fe,Et=on+_e;B?(he(v[ft+C],v[on+C]),Qe=ce.a,rt=ce.b,he(v[At+C],v[Et+C]),lt=ce.a,Je=ce.b,he(Qe,lt),v[ft+C]=ce.a,v[At+C]=ce.b,he(rt,Je),v[on+C]=ce.a,v[Et+C]=ce.b):(Me(v[ft+C],v[on+C]),Qe=ce.a,rt=ce.b,Me(v[At+C],v[Et+C]),lt=ce.a,Je=ce.b,Me(Qe,lt),v[ft+C]=ce.a,v[At+C]=ce.b,Me(rt,Je),v[on+C]=ce.a,v[Et+C]=ce.b)}if(z&Y){let At=ft+fe;B?he(v[ft+C],v[At+C]):Me(v[ft+C],v[At+C]),Qe=ce.a,v[At+C]=ce.b,v[ft+C]=Qe}}if(L&Y){let ft=oe,$e=oe+b*(z-K);for(;ft<=$e;ft+=Ae){let At=ft+_e;B?he(v[ft+C],v[At+C]):Me(v[ft+C],v[At+C]),Qe=ce.a,v[At+C]=ce.b,v[ft+C]=Qe}}K=Y,Y>>=1}return oe}function Re(v,C,z,b,L,U,k,B,X){let Y=0,K=0,oe=k,pe=Math.trunc(b.value+(L+7)/8);for(;b.value<pe;)for(ye(Y,K,z,b),Y=me.c,K=me.lc;K>=14;){let xe=Y>>K-14&16383,_e=C[xe];if(_e.len)K-=_e.len,Xe(_e.lit,U,Y,K,z,b,B,X,oe),Y=Ne.c,K=Ne.lc;else{if(!_e.p)throw new Error("hufDecode issues");let Ae;for(Ae=0;Ae<_e.lit;Ae++){let Qe=le(v[_e.p[Ae]]);for(;K<Qe&&b.value<pe;)ye(Y,K,z,b),Y=me.c,K=me.lc;if(K>=Qe&&j(v[_e.p[Ae]])==(Y>>K-Qe&(1<<Qe)-1)){K-=Qe,Xe(_e.p[Ae],U,Y,K,z,b,B,X,oe),Y=Ne.c,K=Ne.lc;break}}if(Ae==_e.lit)throw new Error("hufDecode issues")}}let fe=8-L&7;for(Y>>=fe,K-=fe;K>0;){let xe=C[Y<<14-K&16383];if(xe.len)K-=xe.len,Xe(xe.lit,U,Y,K,z,b,B,X,oe),Y=Ne.c,K=Ne.lc;else throw new Error("hufDecode issues")}return!0}function at(v,C,z,b,L,U){let k={value:0},B=z.value,X=Ke(C,z),Y=Ke(C,z);z.value+=4;let K=Ke(C,z);if(z.value+=4,X<0||X>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let oe=new Array(65537),pe=new Array(16384);R(pe);let fe=b-(z.value-B);if(Z(v,z,fe,X,Y,oe),K>8*(b-(z.value-B)))throw new Error("Something wrong with hufUncompress");J(oe,X,Y,pe),Re(oe,pe,v,z,K,Y,U,L,k)}function nt(v,C,z){for(let b=0;b<z;++b)C[b]=v[C[b]]}function Ie(v){for(let C=1;C<v.length;C++){let z=v[C-1]+v[C]-128;v[C]=z}}function A(v,C){let z=0,b=Math.floor((v.length+1)/2),L=0,U=v.length-1;for(;!(L>U||(C[L++]=v[z++],L>U));)C[L++]=v[b++]}function Ge(v){let C=v.byteLength,z=new Array,b=0,L=new DataView(v);for(;C>0;){let U=L.getInt8(b++);if(U<0){let k=-U;C-=k+1;for(let B=0;B<k;B++)z.push(L.getUint8(b++))}else{let k=U;C-=2;let B=L.getUint8(b++);for(let X=0;X<k+1;X++)z.push(B)}}return z}function Ce(v,C,z,b,L,U){let k=new DataView(U.buffer),B=z[v.idx[0]].width,X=z[v.idx[0]].height,Y=3,K=Math.floor(B/8),oe=Math.ceil(B/8),pe=Math.ceil(X/8),fe=B-(oe-1)*8,xe=X-(pe-1)*8,_e={value:0},Ae=new Array(Y),Qe=new Array(Y),lt=new Array(Y),rt=new Array(Y),Je=new Array(Y);for(let $e=0;$e<Y;++$e)Je[$e]=C[v.idx[$e]],Ae[$e]=$e<1?0:Ae[$e-1]+oe*pe,Qe[$e]=new Float32Array(64),lt[$e]=new Uint16Array(64),rt[$e]=new Uint16Array(oe*64);for(let $e=0;$e<pe;++$e){let At=8;$e==pe-1&&(At=xe);let on=8;for(let yt=0;yt<oe;++yt){yt==oe-1&&(on=fe);for(let ct=0;ct<Y;++ct)lt[ct].fill(0),lt[ct][0]=L[Ae[ct]++],De(_e,b,lt[ct]),Ee(lt[ct],Qe[ct]),V(Qe[ct]);Y==3&&ie(Qe);for(let ct=0;ct<Y;++ct)_(Qe[ct],rt[ct],yt*64)}let Et=0;for(let yt=0;yt<Y;++yt){let ct=z[v.idx[yt]].type;for(let Yt=8*$e;Yt<8*$e+At;++Yt){Et=Je[yt][Yt];for(let dn=0;dn<K;++dn){let Bt=dn*64+(Yt&7)*8;k.setUint16(Et+0*ct,rt[yt][Bt+0],!0),k.setUint16(Et+2*ct,rt[yt][Bt+1],!0),k.setUint16(Et+4*ct,rt[yt][Bt+2],!0),k.setUint16(Et+6*ct,rt[yt][Bt+3],!0),k.setUint16(Et+8*ct,rt[yt][Bt+4],!0),k.setUint16(Et+10*ct,rt[yt][Bt+5],!0),k.setUint16(Et+12*ct,rt[yt][Bt+6],!0),k.setUint16(Et+14*ct,rt[yt][Bt+7],!0),Et+=16*ct}}if(K!=oe)for(let Yt=8*$e;Yt<8*$e+At;++Yt){let dn=Je[yt][Yt]+8*K*2*ct,Bt=K*64+(Yt&7)*8;for(let ln=0;ln<on;++ln)k.setUint16(dn+ln*2*ct,rt[yt][Bt+ln],!0)}}}let ft=new Uint16Array(B);k=new DataView(U.buffer);for(let $e=0;$e<Y;++$e){z[v.idx[$e]].decoded=!0;let At=z[v.idx[$e]].type;if(z[$e].type==2)for(let on=0;on<X;++on){let Et=Je[$e][on];for(let yt=0;yt<B;++yt)ft[yt]=k.getUint16(Et+yt*2*At,!0);for(let yt=0;yt<B;++yt)k.setFloat32(Et+yt*2*At,ne(ft[yt]),!0)}}}function De(v,C,z){let b,L=1;for(;L<64;)b=C[v.value],b==65280?L=64:b>>8==255?L+=b&255:(z[L]=b,L++),v.value++}function Ee(v,C){C[0]=ne(v[0]),C[1]=ne(v[1]),C[2]=ne(v[5]),C[3]=ne(v[6]),C[4]=ne(v[14]),C[5]=ne(v[15]),C[6]=ne(v[27]),C[7]=ne(v[28]),C[8]=ne(v[2]),C[9]=ne(v[4]),C[10]=ne(v[7]),C[11]=ne(v[13]),C[12]=ne(v[16]),C[13]=ne(v[26]),C[14]=ne(v[29]),C[15]=ne(v[42]),C[16]=ne(v[3]),C[17]=ne(v[8]),C[18]=ne(v[12]),C[19]=ne(v[17]),C[20]=ne(v[25]),C[21]=ne(v[30]),C[22]=ne(v[41]),C[23]=ne(v[43]),C[24]=ne(v[9]),C[25]=ne(v[11]),C[26]=ne(v[18]),C[27]=ne(v[24]),C[28]=ne(v[31]),C[29]=ne(v[40]),C[30]=ne(v[44]),C[31]=ne(v[53]),C[32]=ne(v[10]),C[33]=ne(v[19]),C[34]=ne(v[23]),C[35]=ne(v[32]),C[36]=ne(v[39]),C[37]=ne(v[45]),C[38]=ne(v[52]),C[39]=ne(v[54]),C[40]=ne(v[20]),C[41]=ne(v[22]),C[42]=ne(v[33]),C[43]=ne(v[38]),C[44]=ne(v[46]),C[45]=ne(v[51]),C[46]=ne(v[55]),C[47]=ne(v[60]),C[48]=ne(v[21]),C[49]=ne(v[34]),C[50]=ne(v[37]),C[51]=ne(v[47]),C[52]=ne(v[50]),C[53]=ne(v[56]),C[54]=ne(v[59]),C[55]=ne(v[61]),C[56]=ne(v[35]),C[57]=ne(v[36]),C[58]=ne(v[48]),C[59]=ne(v[49]),C[60]=ne(v[57]),C[61]=ne(v[58]),C[62]=ne(v[62]),C[63]=ne(v[63])}function V(v){let C=.5*Math.cos(.7853975),z=.5*Math.cos(3.14159/16),b=.5*Math.cos(3.14159/8),L=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),k=.5*Math.cos(3*3.14159/8),B=.5*Math.cos(7*3.14159/16),X=new Array(4),Y=new Array(4),K=new Array(4),oe=new Array(4);for(let pe=0;pe<8;++pe){let fe=pe*8;X[0]=b*v[fe+2],X[1]=k*v[fe+2],X[2]=b*v[fe+6],X[3]=k*v[fe+6],Y[0]=z*v[fe+1]+L*v[fe+3]+U*v[fe+5]+B*v[fe+7],Y[1]=L*v[fe+1]-B*v[fe+3]-z*v[fe+5]-U*v[fe+7],Y[2]=U*v[fe+1]-z*v[fe+3]+B*v[fe+5]+L*v[fe+7],Y[3]=B*v[fe+1]-U*v[fe+3]+L*v[fe+5]-z*v[fe+7],K[0]=C*(v[fe+0]+v[fe+4]),K[3]=C*(v[fe+0]-v[fe+4]),K[1]=X[0]+X[3],K[2]=X[1]-X[2],oe[0]=K[0]+K[1],oe[1]=K[3]+K[2],oe[2]=K[3]-K[2],oe[3]=K[0]-K[1],v[fe+0]=oe[0]+Y[0],v[fe+1]=oe[1]+Y[1],v[fe+2]=oe[2]+Y[2],v[fe+3]=oe[3]+Y[3],v[fe+4]=oe[3]-Y[3],v[fe+5]=oe[2]-Y[2],v[fe+6]=oe[1]-Y[1],v[fe+7]=oe[0]-Y[0]}for(let pe=0;pe<8;++pe)X[0]=b*v[16+pe],X[1]=k*v[16+pe],X[2]=b*v[48+pe],X[3]=k*v[48+pe],Y[0]=z*v[8+pe]+L*v[24+pe]+U*v[40+pe]+B*v[56+pe],Y[1]=L*v[8+pe]-B*v[24+pe]-z*v[40+pe]-U*v[56+pe],Y[2]=U*v[8+pe]-z*v[24+pe]+B*v[40+pe]+L*v[56+pe],Y[3]=B*v[8+pe]-U*v[24+pe]+L*v[40+pe]-z*v[56+pe],K[0]=C*(v[pe]+v[32+pe]),K[3]=C*(v[pe]-v[32+pe]),K[1]=X[0]+X[3],K[2]=X[1]-X[2],oe[0]=K[0]+K[1],oe[1]=K[3]+K[2],oe[2]=K[3]-K[2],oe[3]=K[0]-K[1],v[0+pe]=oe[0]+Y[0],v[8+pe]=oe[1]+Y[1],v[16+pe]=oe[2]+Y[2],v[24+pe]=oe[3]+Y[3],v[32+pe]=oe[3]-Y[3],v[40+pe]=oe[2]-Y[2],v[48+pe]=oe[1]-Y[1],v[56+pe]=oe[0]-Y[0]}function ie(v){for(let C=0;C<64;++C){let z=v[0][C],b=v[1][C],L=v[2][C];v[0][C]=z+1.5747*L,v[1][C]=z-.1873*b-.4682*L,v[2][C]=z+1.8556*b}}function _(v,C,z){for(let b=0;b<64;++b)C[z+b]=Es.toHalfFloat(M(v[b]))}function M(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(S,Math.abs(v)-1)}function H(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function $(v){let C=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),z=new Uint8Array(Ge(C)),b=new Uint8Array(z.length);return Ie(z),A(z,b),new DataView(b.buffer)}function se(v){let C=v.array.slice(v.offset.value,v.offset.value+v.size),z=no(C),b=new Uint8Array(z.length);return Ie(z),A(z,b),new DataView(b.buffer)}function ae(v){let C=v.viewer,z={value:v.offset.value},b=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),L=new Uint8Array(8192),U=0,k=new Array(v.inputChannels.length);for(let xe=0,_e=v.inputChannels.length;xe<_e;xe++)k[xe]={},k[xe].start=U,k[xe].end=k[xe].start,k[xe].nx=v.columns,k[xe].ny=v.lines,k[xe].size=v.type,U+=k[xe].nx*k[xe].ny*k[xe].size;let B=re(C,z),X=re(C,z);if(X>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(B<=X)for(let xe=0;xe<X-B+1;xe++)L[xe+B]=ot(C,z);let Y=new Uint16Array(65536),K=E(L,Y),oe=Ke(C,z);at(v.array,C,z,oe,b,U);for(let xe=0;xe<v.inputChannels.length;++xe){let _e=k[xe];for(let Ae=0;Ae<k[xe].size;++Ae)Ze(b,_e.start+Ae,_e.nx,_e.size,_e.ny,_e.nx*_e.size,K)}nt(Y,b,U);let pe=0,fe=new Uint8Array(b.buffer.byteLength);for(let xe=0;xe<v.lines;xe++)for(let _e=0;_e<v.inputChannels.length;_e++){let Ae=k[_e],Qe=Ae.nx*Ae.size,lt=new Uint8Array(b.buffer,Ae.end*2,Qe*2);fe.set(lt,pe),pe+=Qe*2,Ae.end+=Qe}return new DataView(fe.buffer)}function Oe(v){let C=v.array.slice(v.offset.value,v.offset.value+v.size),z=no(C),b=v.inputChannels.length*v.lines*v.columns*v.totalBytes,L=new ArrayBuffer(b),U=new DataView(L),k=0,B=0,X=new Array(4);for(let Y=0;Y<v.lines;Y++)for(let K=0;K<v.inputChannels.length;K++){let oe=0;switch(v.inputChannels[K].pixelType){case 1:X[0]=k,X[1]=X[0]+v.columns,k=X[1]+v.columns;for(let fe=0;fe<v.columns;++fe){let xe=z[X[0]++]<<8|z[X[1]++];oe+=xe,U.setUint16(B,oe,!0),B+=2}break;case 2:X[0]=k,X[1]=X[0]+v.columns,X[2]=X[1]+v.columns,k=X[2]+v.columns;for(let fe=0;fe<v.columns;++fe){let xe=z[X[0]++]<<24|z[X[1]++]<<16|z[X[2]++]<<8;oe+=xe,U.setUint32(B,oe,!0),B+=4}break}}return U}function we(v){let C=v.viewer,z={value:v.offset.value},b=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),L={version:tt(C,z),unknownUncompressedSize:tt(C,z),unknownCompressedSize:tt(C,z),acCompressedSize:tt(C,z),dcCompressedSize:tt(C,z),rleCompressedSize:tt(C,z),rleUncompressedSize:tt(C,z),rleRawSize:tt(C,z),totalAcUncompressedCount:tt(C,z),totalDcUncompressedCount:tt(C,z),acCompression:tt(C,z)};if(L.version<2)throw new Error("EXRLoader.parse: "+Pi.compression+" version "+L.version+" is unsupported");let U=new Array,k=re(C,z)-2;for(;k>0;){let _e=je(C.buffer,z),Ae=ot(C,z),Qe=Ae>>2&3,lt=(Ae>>4)-1,rt=new Int8Array([lt])[0],Je=ot(C,z);U.push({name:_e,index:rt,type:Je,compression:Qe}),k-=_e.length+3}let B=Pi.channels,X=new Array(v.inputChannels.length);for(let _e=0;_e<v.inputChannels.length;++_e){let Ae=X[_e]={},Qe=B[_e];Ae.name=Qe.name,Ae.compression=0,Ae.decoded=!1,Ae.type=Qe.pixelType,Ae.pLinear=Qe.pLinear,Ae.width=v.columns,Ae.height=v.lines}let Y={idx:new Array(3)};for(let _e=0;_e<v.inputChannels.length;++_e){let Ae=X[_e];for(let Qe=0;Qe<U.length;++Qe){let lt=U[Qe];Ae.name==lt.name&&(Ae.compression=lt.compression,lt.index>=0&&(Y.idx[lt.index]=_e),Ae.offset=_e)}}let K,oe,pe;if(L.acCompressedSize>0)switch(L.acCompression){case 0:K=new Uint16Array(L.totalAcUncompressedCount),at(v.array,C,z,L.acCompressedSize,K,L.totalAcUncompressedCount);break;case 1:let _e=v.array.slice(z.value,z.value+L.totalAcUncompressedCount),Ae=no(_e);K=new Uint16Array(Ae.buffer),z.value+=L.totalAcUncompressedCount;break}if(L.dcCompressedSize>0){let _e={array:v.array,offset:z,size:L.dcCompressedSize};oe=new Uint16Array(se(_e).buffer),z.value+=L.dcCompressedSize}if(L.rleRawSize>0){let _e=v.array.slice(z.value,z.value+L.rleCompressedSize),Ae=no(_e);pe=Ge(Ae.buffer),z.value+=L.rleCompressedSize}let fe=0,xe=new Array(X.length);for(let _e=0;_e<xe.length;++_e)xe[_e]=new Array;for(let _e=0;_e<v.lines;++_e)for(let Ae=0;Ae<X.length;++Ae)xe[Ae].push(fe),fe+=X[Ae].width*v.type*2;Ce(Y,xe,X,K,oe,b);for(let _e=0;_e<X.length;++_e){let Ae=X[_e];if(!Ae.decoded)switch(Ae.compression){case 2:let Qe=0,lt=0;for(let rt=0;rt<v.lines;++rt){let Je=xe[_e][Qe];for(let ft=0;ft<Ae.width;++ft){for(let $e=0;$e<2*Ae.type;++$e)b[Je++]=pe[lt+$e*Ae.width*Ae.height];lt++}Qe++}break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(b.buffer)}function je(v,C){let z=new Uint8Array(v),b=0;for(;z[C.value+b]!=0;)b+=1;let L=new TextDecoder().decode(z.slice(C.value,C.value+b));return C.value=C.value+b+1,L}function et(v,C,z){let b=new TextDecoder().decode(new Uint8Array(v).slice(C.value,C.value+z));return C.value=C.value+z,b}function ge(v,C){let z=Ve(v,C),b=Ke(v,C);return[z,b]}function Le(v,C){let z=Ke(v,C),b=Ke(v,C);return[z,b]}function Ve(v,C){let z=v.getInt32(C.value,!0);return C.value=C.value+4,z}function Ke(v,C){let z=v.getUint32(C.value,!0);return C.value=C.value+4,z}function Ue(v,C){let z=v[C.value];return C.value=C.value+1,z}function ot(v,C){let z=v.getUint8(C.value);return C.value=C.value+1,z}let tt=function(v,C){let z;return"getBigInt64"in DataView.prototype?z=Number(v.getBigInt64(C.value,!0)):z=v.getUint32(C.value+4,!0)+Number(v.getUint32(C.value,!0)<<32),C.value+=8,z};function it(v,C){let z=v.getFloat32(C.value,!0);return C.value+=4,z}function W(v,C){return Es.toHalfFloat(it(v,C))}function ne(v){let C=(v&31744)>>10,z=v&1023;return(v>>15?-1:1)*(C?C===31?z?NaN:1/0:Math.pow(2,C-15)*(1+z/1024):6103515625e-14*(z/1024))}function re(v,C){let z=v.getUint16(C.value,!0);return C.value+=2,z}function de(v,C){return ne(re(v,C))}function ze(v,C,z,b){let L=z.value,U=[];for(;z.value<L+b-1;){let k=je(C,z),B=Ve(v,z),X=ot(v,z);z.value+=3;let Y=Ve(v,z),K=Ve(v,z);U.push({name:k,pixelType:B,pLinear:X,xSampling:Y,ySampling:K})}return z.value+=1,U}function ke(v,C){let z=it(v,C),b=it(v,C),L=it(v,C),U=it(v,C),k=it(v,C),B=it(v,C),X=it(v,C),Y=it(v,C);return{redX:z,redY:b,greenX:L,greenY:U,blueX:k,blueY:B,whiteX:X,whiteY:Y}}function ht(v,C){let z=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],b=ot(v,C);return z[b]}function vt(v,C){let z=Ve(v,C),b=Ve(v,C),L=Ve(v,C),U=Ve(v,C);return{xMin:z,yMin:b,xMax:L,yMax:U}}function Ft(v,C){let z=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],b=ot(v,C);return z[b]}function Mt(v,C){let z=["ENVMAP_LATLONG","ENVMAP_CUBE"],b=ot(v,C);return z[b]}function _n(v,C){let z=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],b=["ROUND_DOWN","ROUND_UP"],L=Ke(v,C),U=Ke(v,C),k=ot(v,C);return{xSize:L,ySize:U,levelMode:z[k&15],roundingMode:b[k>>4]}}function On(v,C){let z=it(v,C),b=it(v,C);return[z,b]}function Q(v,C){let z=it(v,C),b=it(v,C),L=it(v,C);return[z,b,L]}function be(v,C,z,b,L){if(b==="string"||b==="stringvector"||b==="iccProfile")return et(C,z,L);if(b==="chlist")return ze(v,C,z,L);if(b==="chromaticities")return ke(v,z);if(b==="compression")return ht(v,z);if(b==="box2i")return vt(v,z);if(b==="envmap")return Mt(v,z);if(b==="tiledesc")return _n(v,z);if(b==="lineOrder")return Ft(v,z);if(b==="float")return it(v,z);if(b==="v2f")return On(v,z);if(b==="v3f")return Q(v,z);if(b==="int")return Ve(v,z);if(b==="rational")return ge(v,z);if(b==="timecode")return Le(v,z);if(b==="preview")return z.value+=L,"skipped";z.value+=L}function Se(v,C){let z=Math.log2(v);return C=="ROUND_DOWN"?Math.floor(z):Math.ceil(z)}function qe(v,C,z){let b=0;switch(v.levelMode){case"ONE_LEVEL":b=1;break;case"MIPMAP_LEVELS":b=Se(Math.max(C,z),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return b}function ut(v,C,z,b){let L=new Array(v);for(let U=0;U<v;U++){let k=1<<U,B=C/k|0;b=="ROUND_UP"&&B*k<C&&(B+=1);let X=Math.max(B,1);L[U]=(X+z-1)/z|0}return L}function pt(){let v=this,C=v.offset,z={value:0};for(let b=0;b<v.tileCount;b++){let L=Ve(v.viewer,C),U=Ve(v.viewer,C);C.value+=8,v.size=Ke(v.viewer,C);let k=L*v.blockWidth,B=U*v.blockHeight;v.columns=k+v.blockWidth>v.width?v.width-k:v.blockWidth,v.lines=B+v.blockHeight>v.height?v.height-B:v.blockHeight;let X=v.columns*v.totalBytes,K=v.size<v.lines*X?v.uncompress(v):H(v);C.value+=v.size;for(let oe=0;oe<v.lines;oe++){let pe=oe*v.columns*v.totalBytes;for(let fe=0;fe<v.inputChannels.length;fe++){let xe=Pi.channels[fe].name,_e=v.channelByteOffsets[xe]*v.columns,Ae=v.decodeChannels[xe];if(Ae===void 0)continue;z.value=pe+_e;let Qe=(v.height-(1+B+oe))*v.outLineWidth;for(let lt=0;lt<v.columns;lt++){let rt=Qe+(lt+k)*v.outputChannels+Ae;v.byteArray[rt]=v.getter(K,z)}}}}}function Tt(){let v=this,C=v.offset,z={value:0};for(let b=0;b<v.height/v.blockHeight;b++){let L=Ve(v.viewer,C)-Pi.dataWindow.yMin;v.size=Ke(v.viewer,C),v.lines=L+v.blockHeight>v.height?v.height-L:v.blockHeight;let U=v.columns*v.totalBytes,B=v.size<v.lines*U?v.uncompress(v):H(v);C.value+=v.size;for(let X=0;X<v.blockHeight;X++){let Y=b*v.blockHeight,K=X+v.scanOrder(Y);if(K>=v.height)continue;let oe=X*U,pe=(v.height-1-K)*v.outLineWidth;for(let fe=0;fe<v.inputChannels.length;fe++){let xe=Pi.channels[fe].name,_e=v.channelByteOffsets[xe]*v.columns,Ae=v.decodeChannels[xe];if(Ae!==void 0){z.value=oe+_e;for(let Qe=0;Qe<v.columns;Qe++){let lt=pe+Qe*v.outputChannels+Ae;v.byteArray[lt]=v.getter(B,z)}}}}}}function di(v,C,z){let b={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");b.version=v.getUint8(4);let L=v.getUint8(5);b.spec={singleTile:!!(L&2),longName:!!(L&4),deepFormat:!!(L&8),multiPart:!!(L&16)},z.value=8;let U=!0;for(;U;){let k=je(C,z);if(k==="")U=!1;else{let B=je(C,z),X=Ke(v,z),Y=be(v,C,z,B,X);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${B}'.`):b[k]=Y}}if((L&-7)!=0)throw console.error("THREE.EXRHeader:",b),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return b}function Bn(v,C,z,b,L){let U={size:0,viewer:C,array:z,offset:b,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:rn};switch(v.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=H;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=$;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=se;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=se;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=ae;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=Oe;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=we;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=we;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}let k={};for(let K of v.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":k[K.name]=!0,U.type=K.pixelType}let B=!1;if(k.R&&k.G&&k.B)B=!k.A,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3};else if(k.Y)U.outputChannels=1,U.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(U.type==1)switch(L){case En:U.getter=de;break;case Kt:U.getter=re;break}else if(U.type==2)switch(L){case En:U.getter=it;break;case Kt:U.getter=W}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+v.compression+".");U.columns=U.width;let X=U.width*U.height*U.outputChannels;switch(L){case En:U.byteArray=new Float32Array(X),B&&U.byteArray.fill(1,0,X);break;case Kt:U.byteArray=new Uint16Array(X),B&&U.byteArray.fill(15360,0,X);break;default:console.error("THREE.EXRLoader: unsupported type: ",L);break}let Y=0;for(let K of v.channels)U.decodeChannels[K.name]!==void 0&&(U.channelByteOffsets[K.name]=Y),Y+=K.pixelType*2;if(U.totalBytes=Y,U.outLineWidth=U.width*U.outputChannels,v.lineOrder==="INCREASING_Y"?U.scanOrder=K=>K:U.scanOrder=K=>U.height-1-K,U.outputChannels==4?(U.format=vn,U.colorSpace=rn):(U.format=Fs,U.colorSpace=ui),v.spec.singleTile){U.blockHeight=v.tiles.ySize,U.blockWidth=v.tiles.xSize;let K=qe(v.tiles,U.width,U.height),oe=ut(K,U.width,v.tiles.xSize,v.tiles.roundingMode),pe=ut(K,U.height,v.tiles.ySize,v.tiles.roundingMode);U.tileCount=oe[0]*pe[0];for(let fe=0;fe<K;fe++)for(let xe=0;xe<pe[fe];xe++)for(let _e=0;_e<oe[fe];_e++)tt(C,b);U.decode=pt.bind(U)}else{U.blockWidth=U.width;let K=Math.ceil(U.height/U.blockHeight);for(let oe=0;oe<K;oe++)tt(C,b);U.decode=Tt.bind(U)}return U}let $i={value:0},Ci=new DataView(e),oa=new Uint8Array(e),Pi=di(Ci,e,$i),er=Bn(Pi,Ci,oa,$i,this.type);return er.decode(),{header:Pi,width:er.width,height:er.height,data:er.byteArray,format:er.format,colorSpace:er.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Jt,a.magFilter=Jt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}};var Hp=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var T=new Uint8Array(p.length),w=0;w<p.length;++w){var y=p.charCodeAt(w);T[w]=y>96?y-97:y>64?y-39:y+4}for(var N=0,w=0;w<p.length;++w)T[N++]=T[w]<60?n[T[w]]:(T[w]-60)*64+T[++w];return T.buffer.slice(0,N)}function l(p,T,w,y,N,I){var D=s.exports.sbrk,P=w+3&-4,S=D(P*y),E=D(N.length),R=new Uint8Array(s.exports.memory.buffer);R.set(N,E);var F=p(S,w,y,E,N.length);if(F==0&&I&&I(S,P,y),T.set(R.subarray(S,S+w*y)),D(S-D(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var T={object:new Worker(p),pending:0,requests:{}};return T.object.onmessage=function(w){var y=w.data;T.pending-=y.count,T.requests[y.id][y.action](y.value),delete T.requests[y.id]},T}function m(p){for(var T="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+g.toString(),w=new Blob([T],{type:"text/javascript"}),y=URL.createObjectURL(w),N=0;N<p;++N)h[N]=d(y);URL.revokeObjectURL(y)}function x(p,T,w,y,N){for(var I=h[0],D=1;D<h.length;++D)h[D].pending<I.pending&&(I=h[D]);return new Promise(function(P,S){var E=new Uint8Array(w),R=f++;I.pending+=p,I.requests[R]={resolve:P,reject:S},I.object.postMessage({id:R,count:p,size:T,source:E,mode:y,filter:N},[E.buffer])})}function g(p){a.then(function(){var T=p.data;try{var w=new Uint8Array(T.count*T.size);l(s.exports[T.mode],w,T.count,T.size,T.source,s.exports[T.filter]),self.postMessage({id:T.id,count:T.count,action:"resolve",value:w},[w.buffer])}catch(y){self.postMessage({id:T.id,count:T.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,T,w,y,N){l(s.exports.meshopt_decodeVertexBuffer,p,T,w,y,s.exports[c[N]])},decodeIndexBuffer:function(p,T,w,y){l(s.exports.meshopt_decodeIndexBuffer,p,T,w,y)},decodeIndexSequence:function(p,T,w,y){l(s.exports.meshopt_decodeIndexSequence,p,T,w,y)},decodeGltfBuffer:function(p,T,w,y,N,I){l(s.exports[u[N]],p,T,w,y,s.exports[c[I]])},decodeGltfBufferAsync:function(p,T,w,y,N){return h.length>0?x(p,T,w,u[y],c[N]):a.then(function(){var I=new Uint8Array(p*T);return l(s.exports[u[y]],I,p,T,w,s.exports[c[N]]),I})}}})();var Si={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},B_=new ci(-1,1,1,-1,0,1),ff=class extends Wt{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}},z_=new ff,Ei=class{constructor(e){this._mesh=new We(z_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cc=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=In.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ei(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var io=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Pc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cc(Si),this.copyPass.material.blending=an,this.clock=new Ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}io!==void 0&&(a instanceof io?n=!0:a instanceof Pc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Dc=class extends Dn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Gp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qs=class r extends Dn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(s,a,{type:Kt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Qt(s,a,{type:Kt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Qt(s,a,{type:Kt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=Gp;this.highPassUniforms=In.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Fe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=In.clone(Si.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:Si.vertexShader,fragmentShader:Si.fragmentShader,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new Ut,this._fsQuad=new Ei(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Fe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};qs.BlurDirectionX=new Fe(1,0);qs.BlurDirectionY=new Fe(0,1);var ro={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ye},cameraProjectionMatrixInverse:{value:new Ye},cameraWorldMatrix:{value:new Ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},so={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Vp(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=k_(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let s=new Zn(i,e,e);return s.wrapS=Xt,s.wrapT=Xt,s.needsUpdate=!0,s}function k_(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=a++;s++,i--}return n}var ao={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:df(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Fe},cameraProjectionMatrixInverse:{value:new Ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function df(r,e,t){let n=H_(r,e,t),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=n[s];i+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return i}function H_(r,e,t){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*e*i/r,a=Math.pow(i/(r-1),t);n.push(new O(Math.cos(s),Math.sin(s),a))}return n}var Uc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,m=e-f,x=t-d,g,p;m>x?(g=1,p=0):(g=0,p=1);let T=m-g+u,w=x-p+u,y=m-1+2*u,N=x-1+2*u,I=l&255,D=c&255,P=this.perm[I+this.perm[D]]%12,S=this.perm[I+g+this.perm[D+p]]%12,E=this.perm[I+1+this.perm[D+1]]%12,R=.5-m*m-x*x;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[P],m,x));let F=.5-T*T-w*w;F<0?i=0:(F*=F,i=F*F*this._dot(this.grad3[S],T,w));let G=.5-y*y-N*N;return G<0?s=0:(G*=G,s=G*G*this._dot(this.grad3[E],y,N)),70*(n+i+s)}noise3d(e,t,n){let i,s,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(u+h+f)*d,x=u-m,g=h-m,p=f-m,T=e-x,w=t-g,y=n-p,N,I,D,P,S,E;T>=w?w>=y?(N=1,I=0,D=0,P=1,S=1,E=0):T>=y?(N=1,I=0,D=0,P=1,S=0,E=1):(N=0,I=0,D=1,P=1,S=0,E=1):w<y?(N=0,I=0,D=1,P=0,S=1,E=1):T<y?(N=0,I=1,D=0,P=0,S=1,E=1):(N=0,I=1,D=0,P=1,S=1,E=0);let R=T-N+d,F=w-I+d,G=y-D+d,q=T-P+2*d,ee=w-S+2*d,Z=y-E+2*d,le=T-1+3*d,j=w-1+3*d,J=y-1+3*d,me=u&255,ye=h&255,Ne=f&255,Xe=this.perm[me+this.perm[ye+this.perm[Ne]]]%12,te=this.perm[me+N+this.perm[ye+I+this.perm[Ne+D]]]%12,ue=this.perm[me+P+this.perm[ye+S+this.perm[Ne+E]]]%12,ce=this.perm[me+1+this.perm[ye+1+this.perm[Ne+1]]]%12,he=.6-T*T-w*w-y*y;he<0?i=0:(he*=he,i=he*he*this._dot3(this.grad3[Xe],T,w,y));let Me=.6-R*R-F*F-G*G;Me<0?s=0:(Me*=Me,s=Me*Me*this._dot3(this.grad3[te],R,F,G));let Ze=.6-q*q-ee*ee-Z*Z;Ze<0?a=0:(Ze*=Ze,a=Ze*Ze*this._dot3(this.grad3[ue],q,ee,Z));let Re=.6-le*le-j*j-J*J;return Re<0?o=0:(Re*=Re,o=Re*Re*this._dot3(this.grad3[ce],le,j,J)),32*(i+s+a+o)}noise4d(e,t,n,i){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,m,x=(e+t+n+i)*l,g=Math.floor(e+x),p=Math.floor(t+x),T=Math.floor(n+x),w=Math.floor(i+x),y=(g+p+T+w)*c,N=g-y,I=p-y,D=T-y,P=w-y,S=e-N,E=t-I,R=n-D,F=i-P,G=S>E?32:0,q=S>R?16:0,ee=E>R?8:0,Z=S>F?4:0,le=E>F?2:0,j=R>F?1:0,J=G+q+ee+Z+le+j,me=a[J][0]>=3?1:0,ye=a[J][1]>=3?1:0,Ne=a[J][2]>=3?1:0,Xe=a[J][3]>=3?1:0,te=a[J][0]>=2?1:0,ue=a[J][1]>=2?1:0,ce=a[J][2]>=2?1:0,he=a[J][3]>=2?1:0,Me=a[J][0]>=1?1:0,Ze=a[J][1]>=1?1:0,Re=a[J][2]>=1?1:0,at=a[J][3]>=1?1:0,nt=S-me+c,Ie=E-ye+c,A=R-Ne+c,Ge=F-Xe+c,Ce=S-te+2*c,De=E-ue+2*c,Ee=R-ce+2*c,V=F-he+2*c,ie=S-Me+3*c,_=E-Ze+3*c,M=R-Re+3*c,H=F-at+3*c,$=S-1+4*c,se=E-1+4*c,ae=R-1+4*c,Oe=F-1+4*c,we=g&255,je=p&255,et=T&255,ge=w&255,Le=o[we+o[je+o[et+o[ge]]]]%32,Ve=o[we+me+o[je+ye+o[et+Ne+o[ge+Xe]]]]%32,Ke=o[we+te+o[je+ue+o[et+ce+o[ge+he]]]]%32,Ue=o[we+Me+o[je+Ze+o[et+Re+o[ge+at]]]]%32,ot=o[we+1+o[je+1+o[et+1+o[ge+1]]]]%32,tt=.6-S*S-E*E-R*R-F*F;tt<0?u=0:(tt*=tt,u=tt*tt*this._dot4(s[Le],S,E,R,F));let it=.6-nt*nt-Ie*Ie-A*A-Ge*Ge;it<0?h=0:(it*=it,h=it*it*this._dot4(s[Ve],nt,Ie,A,Ge));let W=.6-Ce*Ce-De*De-Ee*Ee-V*V;W<0?f=0:(W*=W,f=W*W*this._dot4(s[Ke],Ce,De,Ee,V));let ne=.6-ie*ie-_*_-M*M-H*H;ne<0?d=0:(ne*=ne,d=ne*ne*this._dot4(s[Ue],ie,_,M,H));let re=.6-$*$-se*se-ae*ae-Oe*Oe;return re<0?m=0:(re*=re,m=re*re*this._dot4(s[ot],$,se,ae,Oe)),27*(u+h+f+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}};var oo=class r extends Dn{constructor(e,t,n=512,i=512,s,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Qt(this.width,this.height,{type:Kt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},ro.defines),uniforms:In.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,blending:an,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Na,this.normalMaterial.blending=an,this.pdMaterial=new It({defines:Object.assign({},ao.defines),uniforms:In.clone(ao.uniforms),vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},so.defines),uniforms:In.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:an}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:In.clone(Si.uniforms),vertexShader:Si.vertexShader,fragmentShader:Si.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Va,blendDst:Hr,blendEquation:Hn,blendSrcAlpha:Ga,blendDstAlpha:Hr,blendEquationAlpha:Hn}),this.blendMaterial=new It({uniforms:In.clone(Lc.uniforms),vertexShader:Lc.vertexShader,fragmentShader:Lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Tl,blendSrc:Va,blendDst:Hr,blendEquation:Hn,blendSrcAlpha:Ga,blendDstAlpha:Hr,blendEquationAlpha:Hn}),this._fsQuad=new Ei(null),this._originalClearColor=new Pe,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Dr,this.depthTexture.format=pr,this.depthTexture.type=dr,this.normalRenderTarget=new Qt(this.width,this.height,{minFilter:nn,magFilter:nn,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=df(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}_restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}_generateNoise(e=64){let t=new Uc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new Zn(i,e,e,vn,Pn);return s.wrapS=Xt,s.wrapT=Xt,s.needsUpdate=!0,s}};oo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Nc=class extends Dn{constructor(){super(),this.uniforms=In.clone(lo.uniforms),this.material=new Ua({name:lo.name,uniforms:this.uniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader}),this._fsQuad=new Ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Fc(r,e){return e!==void 0?e:window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||r.clientWidth<700}var Oc=r=>Math.min(window.devicePixelRatio||1,r?1.25:1.5);function Bc(r,e,t,{lite:n,bloom:i=.45}){let s=r.extensions.has("EXT_color_buffer_half_float")||r.extensions.has("EXT_color_buffer_float"),a=new Qt(1,1,{type:s?Kt:Pn,samples:n?2:4}),o=new Ic(r,a);o.addPass(new Dc(e,t));let l=null;if(!n){l=new oo(e,t,1,1),l.blendIntensity=.85,l.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1});let D=l.setSize.bind(l);l.setSize=(S,E)=>D(Math.max(1,Math.ceil(S/2)),Math.max(1,Math.ceil(E/2)));let P=l._overrideVisibility.bind(l);l._overrideVisibility=function(){P(),this.scene.traverse(S=>{S.visible&&S.isMesh&&S.material&&S.material.transparent&&(S.visible=!1)})},o.addPass(l)}let c=new qs(new Fe(1,1),i,.45,1);o.addPass(c),o.addPass(new Nc);let u=D=>[o.renderTarget1,o.renderTarget2].forEach(P=>{P.samples!==D&&(P.samples=D,P.dispose())}),h=[l?()=>{l.enabled=!1}:null,r.getPixelRatio()>1?()=>{r.setPixelRatio(1),o.setPixelRatio(1)}:null,()=>u(n?0:2),n?null:()=>u(0)].filter(Boolean),f=0,d=0,m=0,x=0,g=[1,1];function p(D,P){g=[D,P],o.setSize(D,P)}function T(D,P){let S=D-d;if(d=D,!P||f>=h.length||S>400||S<=0){P||(d=0);return}x++,S>40&&m++,!(x<24)&&(m>=10&&(h[f++](),p(g[0],g[1])),x=0,m=0)}let w=new ci(-1,1,1,-1,0,1);function y(D,P,S){if(!r.compileAsync)return Promise.resolve();let E=r.getRenderTarget();r.setRenderTarget(D);let R=r.compileAsync(P,S,e).catch(()=>{});return r.setRenderTarget(E),R}let N=D=>y(o.renderTarget1,D,t);function I(){let D=new mi,P=new mi,S=new Nt(2,2),E=new Set,R=(G,q)=>{q&&q.isMaterial&&!E.has(q)&&(E.add(q),G.add(new We(S,q)))};o.passes.forEach(G=>{let q=G===o.passes[o.passes.length-1]?P:D;Object.values(G).forEach(ee=>Array.isArray(ee)?ee.forEach(Z=>R(q,Z)):R(q,ee))}),R(D,new Is({depthPacking:yc})),R(D,new Ds);let F=()=>S.dispose();return Promise.all([y(o.renderTarget1,e,t),y(o.renderTarget1,D,w),y(null,P,w)]).then(F,F)}return{composer:o,setSize:p,watch:T,warm:I,prepare:N,render(){o.render()},level:()=>f,dispose(){l&&l.dispose(),c.dispose(),o.dispose(),a.dispose()}}}function zc(r,e=[]){r.updateMatrixWorld(!0);let t=new Ye().copy(r.matrixWorld).invert(),n=new Set(e),i=new Map,s=l=>{if(!(n.has(l)||!l.visible||Object.keys(l.userData).length)){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&!Array.isArray(l.material)&&!l.material.transparent&&!l.morphTargetInfluences){let c=l.material.uuid+(l.castShadow?"c":"")+(l.receiveShadow?"r":"");i.has(c)||i.set(c,[]),i.get(c).push(l)}l.children.forEach(s)}};r.children.slice().forEach(s);let a=0,o=new Ye;return i.forEach(l=>{if(l.length<2)return;let c=l.map(f=>{let d=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();return!d.attributes.position||!d.attributes.normal||!d.attributes.uv?null:(Object.keys(d.attributes).forEach(m=>{m!=="position"&&m!=="normal"&&m!=="uv"&&d.deleteAttribute(m)}),d.clearGroups(),d.applyMatrix4(o.multiplyMatrices(t,f.matrixWorld)),d)});if(c.some(f=>!f))return;let u=Rp(c,!1);if(c.forEach(f=>f.dispose()),!u)return;let h=new We(u,l[0].material);h.castShadow=l[0].castShadow,h.receiveShadow=l[0].receiveShadow,r.add(h),l.forEach(f=>f.parent.remove(f)),a+=l.length}),a}var mf=`varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,gf=`uniform vec3 uColor; uniform float uFront, uFlow, uTime, uDir, uLen, uHi, uShow, uRev;
varying vec2 vUv;
void main(){
  float s = uRev > 0.5 ? 1.0 - vUv.x : vUv.x;
  float on = 1.0 - step(uFront, s - 0.0001);
  float d = fract(vUv.x * uLen / 0.42 - uTime * 1.7 * uDir);
  float dash = smoothstep(0.0, 0.12, d) * (1.0 - smoothstep(0.3, 0.45, d));
  // intensita' contenute: oltre 1 la resa schiarisce verso il bianco e i colori dei conduttori non si riconoscono piu'
  vec3 c = uColor * (uShow * 0.09 + on * (0.42 + uFlow * dash * 0.9) + uHi * 0.35);
  gl_FragColor = vec4(c, 1.0);
}`,pf={fase:16752453,neutro:6203647,terra:9425231,leak:16734762},G_=r=>r*r*(3-2*r);function Wp(r,e){let t=new Be;t.renderOrder=20,r.add(t);let n={},i=1,s=0;Object.entries(e).forEach(([c,u])=>{Object.entries(u).forEach(([h,f])=>{let d=new Lr;for(let w=1;w<f.length;w++)d.add(new ur(new O(...f[w-1]),new O(...f[w])));let m=d.getLength(),x=new Nr(d,Math.max(24,Math.round(m*14)),.016,6,!1),g={uColor:{value:new Pe(pf[h])},uFront:{value:0},uFlow:{value:0},uTime:{value:0},uDir:{value:h==="fase"?1:-1},uLen:{value:m},uHi:{value:0},uShow:{value:i},uRev:{value:0}},p=new It({uniforms:g,vertexShader:mf,fragmentShader:gf,transparent:!0,blending:yi,depthTest:!1,depthWrite:!1}),T=new We(x,p);T.renderOrder=20,T.frustumCulled=!1,t.add(T),n[c+"."+h]={mesh:T,u:g,line:c,cond:h,live:!1,flowUntil:0}})});let a=new Map;function o(){s||(s=1,r.loop(()=>{let c=performance.now(),u=!1;return Object.values(n).forEach(h=>{h.u.uTime.value=c/1e3;let f=a.get(h);if(f){let m=Math.min(1,(c-f.t0)/f.ms);h.u.uFront.value=f.from+(f.to-f.from)*G_(m),m>=1?a.delete(h):u=!0}let d=h.flowUntil>c?1:Math.max(0,1-(c-h.flowUntil)/500);h.u.uFlow.value=r.reduced?0:d,d>0&&(u=!0)}),u?!0:(s=0,!1)}))}function l(c,u,h,f=0,d=!1){if(c.u.uRev.value=d?1:0,r.reduced){c.u.uFront.value=u;return}a.set(c,{from:c.u.uFront.value,to:u,t0:performance.now()+f,ms:h})}return{group:t,setLine(c,{live:u,flow:h,earth:f=0}){["fase","neutro","terra"].forEach(d=>{let m=n[c+"."+d];if(!m)return;let x=d==="terra",g=x?f>0:u;x?(m.u.uColor.value.setHex(pf[g?"leak":"terra"]),g!==m.live&&l(m,g?f:0,g?520:260,g?300:0,g&&f>=1)):g!==m.live&&(g?l(m,1,420,d==="neutro"?330:0,d==="neutro"):l(m,0,280,0,!1)),g&&(h||x&&f>0)&&(!m.live||h==="again")&&(m.flowUntil=performance.now()+(x?1400:1700)),m.live=g}),o(),r.redraw()},cut(){Object.values(n).forEach(c=>{a.delete(c),c.u.uFront.value=0,c.u.uFlow.value=0,c.flowUntil=0,c.live=!1,c.u.uColor.value.setHex(pf[c.cond])}),r.redraw()},highlight(c){Object.values(n).forEach(u=>u.u.uHi.value=u.line===c?1:0),r.redraw()},setVisible(c){i=c?1:0,t.visible=!!c,Object.values(n).forEach(u=>u.u.uShow.value=i),r.redraw()}}}function kc(r,e,t){let n=t||40,i=new Float32Array(n*3),s=new Float32Array(n);for(let h=0;h<n;h++)s[h]=Math.random(),i[h*3]=(Math.random()-.5)*.2,i[h*3+1]=Math.random()*.3,i[h*3+2]=(Math.random()-.5)*.12;let a=new Wt;a.setAttribute("position",new Gt(i,3)),a.setAttribute("aSeed",new Gt(s,1));let o={uTime:{value:0},uColor:{value:new Pe(16738842)}},l=new It({uniforms:o,transparent:!0,blending:yi,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; varying float vA;
      void main(){ float t = fract(uTime * (0.9 + aSeed) + aSeed); vec3 p = position * (1.0 + t * 2.0); p.y += t * 0.45;
        vA = 1.0 - t; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = (3.0 + aSeed * 4.0) * (14.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(uColor * 3.0 * vA * (1.0 - d * 2.0), 1.0); }"}),c=new Ir(a,l);c.position.set(...e),c.visible=!1,c.frustumCulled=!1,c.renderOrder=21,r.add(c);let u=0;return{play(h){if(c.visible=!0,u)return;let f=performance.now();u=r.animate(h,d=>{o.uTime.value=(performance.now()-f)/1e3,d>=1&&(c.visible=!1,u=0)})},stop(){c.visible=!1,r.redraw()}}}var Xp={marrone:16752453,blu:6203647,gv:9425231,nero:12042448,grigio:14080479,rosso:16734810};function qp(r){let e=new Be;e.renderOrder=20,r.add(e);let t=new Map,n=!1,i=0;function s(){n||(n=!0,r.loop(()=>{let o=performance.now(),l=!1;return t.forEach(c=>{if(c.u.uTime.value=o/1e3,c.born){let h=Math.min(1,(o-c.born)/520);c.u.uFront.value=h*h*(3-2*h),h>=1?c.born=0:l=!0}let u=i>o?1:Math.max(0,1-(o-i)/600);c.u.uFlow.value=r.reduced?0:u,u>0&&(l=!0)}),l?!0:(n=!1,!1)}))}function a(o,l){let c=new Lr;for(let x=1;x<o.length;x++)c.add(new ur(new O(...o[x-1]),new O(...o[x])));let u=c.getLength(),h=new Nr(c,Math.max(16,Math.round(u*12)),.016,6,!1),f={uColor:{value:new Pe(Xp[l]||16777215)},uFront:{value:r.reduced?1:0},uFlow:{value:0},uTime:{value:0},uDir:{value:1},uLen:{value:u},uHi:{value:0},uShow:{value:1},uRev:{value:0}},d=new It({uniforms:f,vertexShader:mf,fragmentShader:gf,transparent:!0,blending:yi,depthTest:!1,depthWrite:!1}),m=new We(h,d);return m.renderOrder=20,m.frustumCulled=!1,{mesh:m,u:f}}return{sync(o,l=!0){let c=new Set;o.forEach(u=>{if(c.add(u.id),t.has(u.id))return;let h=a(u.pts,u.color);e.add(h.mesh),t.set(u.id,{...h,born:l&&!r.reduced?performance.now():0}),(!l||r.reduced)&&(h.u.uFront.value=1)}),t.forEach((u,h)=>{c.has(h)||(e.remove(u.mesh),u.mesh.geometry.dispose(),u.mesh.material.dispose(),t.delete(h))}),s(),r.redraw()},flow(o=2200){i=performance.now()+o,s()},setVisible(o){e.visible=!!o,r.redraw()},clear(){this.sync([])}}}function js(r){let e=new Be;e.renderOrder=20,r.add(e);let t=new Map,n=!1;function i(){n||(n=!0,r.loop(()=>{let a=performance.now(),o=!1;return t.forEach(l=>{if(l.u.uTime.value=a/1e3,l.born){let u=Math.min(1,(a-l.born)/520);l.u.uShow.value=u,u>=1?l.born=0:o=!0}if(l.t0){let u=Math.min(1,(a-l.t0)/(l.to>l.from?420:240));l.u.uFront.value=l.from+(l.to-l.from)*u*u*(3-2*u),u>=1?l.t0=0:o=!0}let c=l.current?1:Math.max(0,l.u.uFlow.value-.08);l.u.uFlow.value=r.reduced?0:c,c>0&&!r.reduced&&(o=!0)}),o?!0:(n=!1,!1)}))}function s(a,o){let l=new Lr;for(let m=1;m<a.length;m++)l.add(new ur(new O(...a[m-1]),new O(...a[m])));let c=l.getLength(),u=new Nr(l,Math.max(16,Math.round(c*10)),.009,5,!1),h={uColor:{value:new Pe(Xp[o]||16777215)},uFront:{value:0},uFlow:{value:0},uTime:{value:0},uDir:{value:1},uLen:{value:c},uHi:{value:0},uShow:{value:1},uRev:{value:0}},f=new It({uniforms:h,vertexShader:mf,fragmentShader:gf,transparent:!0,blending:yi,depthTest:!1,depthWrite:!1}),d=new We(u,f);return d.renderOrder=20,d.frustumCulled=!1,{mesh:d,u:h}}return{sync(a,o=!0){let l=new Set;a.forEach(c=>{l.add(c.id);let u=t.get(c.id);u||(u={...s(c.pts,c.color),born:o&&!r.reduced?performance.now():0,live:!1,current:!1,t0:0,from:0,to:0},u.born&&(u.u.uShow.value=0),e.add(u.mesh),t.set(c.id,u)),!!c.live!==u.live&&(u.live=!!c.live,r.reduced?u.u.uFront.value=u.live?1:0:(u.from=u.u.uFront.value,u.to=u.live?1:0,u.t0=performance.now())),u.current=!!c.current&&u.live}),t.forEach((c,u)=>{l.has(u)||(e.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh.material.dispose(),t.delete(u))}),i(),r.redraw()},highlight(a){t.forEach((o,l)=>o.u.uHi.value=a&&a.includes(l)?1:0),r.redraw()},setVisible(a){e.visible=!!a,r.redraw()},clear(){this.sync([])}}}var jp=[{id:"c01-circuito-chiuso",code:"c01",blurb:"Una lampada si accende solo se il giro \xE8 completo.",flow:"always",n:0,name:"Circuito chiuso",title:"Il circuito chiuso",goal:"Collega la lampada al quadro con due fili: la fase e il neutro. Poi dai corrente con la levetta del quadro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:[],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase (marrone) parte dal morsetto FASE del quadro e arriva a un morsetto della lampada.","Il neutro (blu) parte dal morsetto NEUTRO del quadro e arriva all\u2019altro morsetto della lampada.","Servono due fili in tutto, uno per ciascun morsetto della lampada. Poi tocca la levetta del quadro."]},{id:"c02-presa",code:"c02",blurb:"Fase, neutro e terra: dove vanno e perch\xE9.",flow:"always",n:1,name:"Presa",title:"La presa di corrente",goal:"Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{F:{l:"FASE"},PE:{l:"TERRA"},N:{l:"NEUTRO"}}},{id:"P",type:"presa",short:"Presa",title:"Presa bipasso 10/16 A",terms:{L:{l:"L"},PE:{l:"PE"},N:{l:"N"}}}],controls:[],load:["P.L","P.N"],earth:["Q.PE","P.PE"],pol:"P.L",room:"tavolo",solution:[["Q.F","P.L","marrone"],["Q.N","P.N","blu"],["Q.PE","P.PE","gv"]],hints:["Il marrone \xE8 la fase: va dal quadro al morsetto L della presa.","Il blu \xE8 il neutro: va dal quadro al morsetto N della presa.","Il giallo-verde \xE8 la terra: va al morsetto PE, quello al centro."]},{id:"c03-interrotto",code:"c03",blurb:"Interrompere la fase, non il neutro.",flow:"always",n:2,name:"Interrotto",title:"Punto luce interrotto",goal:"Accendi e spegni la lampada con un interruttore. L\u2019interruttore interrompe la fase, mai il neutro.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L.A","marrone"],["Q.N","L.B","blu"]],hints:["Parti dalla fase: dal quadro va all\u2019interruttore, non direttamente alla lampada.","Dall\u2019altro morsetto dell\u2019interruttore il filo va a un morsetto della lampada.","Il neutro (blu) va dal quadro all\u2019altro morsetto della lampada, senza passare dall\u2019interruttore."]},{id:"c04-parallelo",code:"c04",blurb:"Il parallelo: due lampade, un solo comando.",flow:"always",n:0,name:"Parallelo",title:"Due lampade, un interruttore",goal:"Comanda due lampade con un solo interruttore: premendolo, si accendono e si spengono insieme.",loadName:"Le lampade",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"S",type:"sw",short:"Interruttore",title:"Interruttore",where:"Parete",terms:{a:{l:"1"},b:{l:"2"}}},{id:"L1",type:"lamp",short:"Lampada 1",title:"Portalampada 1",terms:{B:{l:"B"},A:{l:"A"}}},{id:"L2",type:"lamp",short:"Lampada 2",title:"Portalampada 2",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["S"],load:["L1.A","L1.B"],loads:[["L1.A","L1.B"],["L2.A","L2.B"]],room:"soffitto",solution:[["Q.F","S.a","marrone"],["S.b","L1.A","marrone"],["S.b","L2.A","marrone"],["Q.N","L1.B","blu"],["Q.N","L2.B","blu"]],hints:["La fase va dal quadro all\u2019interruttore, come in un punto luce con una sola lampada.","Dal morsetto 2 dell\u2019interruttore parte un filo per ogni lampada: due fili di fase, uno su ciascuna.","Il neutro (blu) va dal quadro a tutte e due le lampade, sul morsetto che resta libero, senza passare dall\u2019interruttore."]},{id:"c05-deviato",code:"c05",blurb:"Accendere e spegnere da due punti.",flow:"onDemand",n:3,name:"Deviato",title:"Punto luce deviato",goal:"Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","D2.1","nero"],["D1.2","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["La fase entra nel morsetto C (comune) del primo deviatore.","I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.","Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori."]},{id:"c06-invertito",code:"c06",blurb:"Comandare la stessa luce da tre punti.",flow:"onDemand",n:4,name:"Invertito",title:"Punto luce invertito",goal:"Aggiungi un terzo punto di comando in mezzo, con l\u2019invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.",loadName:"La lampada",comps:[{id:"Q",type:"quadro",short:"Quadro",title:"Quadro elettrico",terms:{N:{l:"NEUTRO"},F:{l:"FASE"}}},{id:"D1",type:"dev",short:"Deviatore A",title:"Deviatore A",where:"Ingresso",terms:{C:{l:"C"},1:{l:"1"},2:{l:"2"}}},{id:"I",type:"inv",short:"Invertitore",title:"Invertitore",where:"Camera",terms:{1:{l:"1"},2:{l:"2"},3:{l:"3"},4:{l:"4"}}},{id:"D2",type:"dev",short:"Deviatore B",title:"Deviatore B",where:"Fondo",terms:{1:{l:"1"},2:{l:"2"},C:{l:"C"}}},{id:"L",type:"lamp",short:"Lampada",title:"Portalampada",terms:{B:{l:"B"},A:{l:"A"}}}],controls:["D1","I","D2"],load:["L.A","L.B"],room:"soffitto",solution:[["Q.F","D1.C","marrone"],["D1.1","I.1","nero"],["D1.2","I.2","grigio"],["I.3","D2.1","nero"],["I.4","D2.2","grigio"],["D2.C","L.A","marrone"],["Q.N","L.B","blu"]],hints:["\xC8 come la deviata, ma in mezzo ai due fili di collegamento metti l\u2019invertitore.","I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell\u2019invertitore.","Dai morsetti 3 e 4 (in basso) dell\u2019invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada."]}];var Ys=r=>jp.find(e=>e.id===r),vf=(r,e)=>r.map(t=>e[t.id]?{...t,...e[t.id]}:t),QS={...Ys("c03-interrotto"),id:"t01-bagno",quadroOnly:!0,code:"t01",n:0,name:"Bagno",title:"Il bagno",blurb:"Punto luce interrotto, con l\u2019interruttore vicino alla porta.",goal:"Cabla il punto luce del bagno: un interruttore vicino alla porta accende e spegne la lampada.",comps:vf(Ys("c03-interrotto").comps,{S:{short:"Interruttore",title:"Interruttore del bagno",where:"Porta"},L:{short:"Lampada",title:"Lampada del bagno"}})},$S={...Ys("c05-deviato"),id:"t02-camera",quadroOnly:!0,code:"t02",n:0,name:"Camera",title:"La camera",blurb:"Punto luce deviato, dalla porta e dal comodino.",goal:"Cabla il punto luce della camera: si accende e si spegne dalla porta e dal comodino.",comps:vf(Ys("c05-deviato").comps,{D1:{short:"Deviatore porta",title:"Deviatore della porta",where:"Porta"},D2:{short:"Deviatore comodino",title:"Deviatore del comodino",where:"Comodino"},L:{short:"Lampada",title:"Lampada della camera"}})},eE={...Ys("c06-invertito"),id:"t03-corridoio",quadroOnly:!0,code:"t03",n:0,name:"Corridoio",title:"Il corridoio",blurb:"Punto luce invertito, da tre punti.",goal:"Cabla il punto luce del corridoio: si comanda dall\u2019ingresso, dal soggiorno e dalla camera.",comps:vf(Ys("c06-invertito").comps,{D1:{short:"Deviatore ingresso",title:"Deviatore dell\u2019ingresso",where:"Ingresso"},I:{short:"Invertitore soggiorno",title:"Invertitore del soggiorno",where:"Soggiorno"},D2:{short:"Deviatore camera",title:"Deviatore della camera",where:"Camera"},L:{short:"Lampada",title:"Lampada del corridoio"}})};var en={size:{w:9,d:8},rooms:[{id:"cucina",name:"Cucina",x:0,z:0,w:3,d:3.5,scene:!0},{id:"bagno",name:"Bagno",x:3,z:0,w:2,d:3.5,circuit:"t01-bagno",lamp:[4,1.75]},{id:"camera",name:"Camera",x:5,z:0,w:4,d:3.5,circuit:"t02-camera",lamp:[7,1.75]},{id:"corridoio",name:"Corridoio",x:0,z:3.5,w:9,d:1.5,circuit:"t03-corridoio",lamp:[4.5,4.25]},{id:"ingresso",name:"Ingresso",x:0,z:5,w:2.5,d:3,scene:!0},{id:"soggiorno",name:"Soggiorno",x:2.5,z:5,w:6.5,d:3,scene:!0}],controls:{"t01-bagno":{S:{x:3.3,z:3.5,face:"s",label:"Interruttore bagno"}},"t02-camera":{D1:{x:5.4,z:3.5,face:"s",label:"Porta camera"},D2:{x:9,z:1.4,face:"w",label:"Comodino"}},"t03-corridoio":{D1:{x:0,z:4.25,face:"e",label:"Ingresso"},I:{x:4,z:5,face:"s",label:"Soggiorno"},D2:{x:9,z:4.25,face:"w",label:"Camera"}}},breaker:{x:0,z:6.5,face:"e",label:"Quadro"},wallsH:[[0,0,9],[3.5,0,1],[3.5,2,3.9],[3.5,4.8,6],[3.5,7,9],[5,0,1.6],[5,2.4,5],[5,6,9],[8,0,9]],wallsV:[[0,0,8],[9,0,8],[3,0,3.5],[5,0,3.5],[2.5,5,6],[2.5,7,8]],furniture:[{room:"camera",x:7.3,z:.3,w:1.5,d:2,h:.5,c:"#B9A58A"},{room:"camera",x:8.5,z:1.1,w:.4,d:.5,h:.5,c:"#9C8666"},{room:"bagno",x:3.2,z:.2,w:1.6,d:.6,h:.45,c:"#E9EEF0"},{room:"bagno",x:4,z:2.4,w:.9,d:.9,h:.15,c:"#CFE0E8"},{room:"soggiorno",x:3.5,z:6.7,w:2.4,d:.9,h:.5,c:"#8A94A3"},{room:"soggiorno",x:6.3,z:5.8,w:1.4,d:1,h:.4,c:"#B9A58A"},{room:"cucina",x:.2,z:.2,w:2.6,d:.6,h:.9,c:"#D8D2C4"}]},V_=["L\u2019interruttore del bagno sta sul filo di fase, tra il quadro e la lampada.","Il neutro va diretto alla lampada.","Si cabla come nel livello dell\u2019interruttore."],W_=["Due deviatori comandano la stessa lampada: porta e comodino.","I due fili di collegamento vanno 1 con 1 e 2 con 2.","La fase entra nel comune del primo; il comune del secondo va alla lampada."],X_=["Tre punti di comando: ingresso, soggiorno e camera.","L\u2019invertitore sta in mezzo ai due fili di collegamento tra i deviatori.","Ogni comando cambia lo stato della luce."],xf=(r,e,t)=>({type:"spiegazione",title:r,paras:[e,t]}),tE={"t01-bagno":{support:"passi",lesson:{pages:[xf("Il bagno","Un punto luce con un interruttore vicino alla porta. Lo hai gi\xE0 fatto: qui lo ritrovi dentro una casa vera.","Se ti serve, ripassa la lezione del punto luce interrotto dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["S.a"],color:"marrone",short:"1 Fase",title:"Porta la fase all\u2019interruttore",text:"Dalla FASE del quadro al morsetto 1 dell\u2019interruttore."},{kind:"wire",from:"S.b",to:["L.A"],color:"marrone",short:"2 Lampada",title:"Dall\u2019interruttore alla lampada",text:"Dal morsetto 2 dell\u2019interruttore a un morsetto della lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"3 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"4 Levetta",title:"Dai corrente",text:"Tocca la levetta del quadro, poi prova l\u2019interruttore."},{kind:"verify",short:"5 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:V_},"t02-camera":{support:"passi",lesson:{pages:[xf("La camera","Un punto luce che si comanda dalla porta e dal comodino, con due deviatori.","Se ti serve, ripassa la lezione del punto luce deviato dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel primo deviatore",text:"Dalla FASE al comune C del deviatore della porta."},{kind:"wire",from:"D1.1",to:["D2.1"],color:"nero",short:"2 Collegamento 1",title:"Primo filo di collegamento",text:"Dal morsetto 1 del primo deviatore al morsetto 1 del secondo."},{kind:"wire",from:"D1.2",to:["D2.2"],color:"grigio",short:"3 Collegamento 2",title:"Secondo filo di collegamento",text:"Dal morsetto 2 del primo deviatore al morsetto 2 del secondo."},{kind:"wire",from:"D2.C",to:["L.A"],color:"marrone",short:"4 Lampada",title:"Dal secondo deviatore alla lampada",text:"Dal comune C del deviatore del comodino alla lampada."},{kind:"wire",from:"Q.N",to:["L.B"],color:"blu",short:"5 Neutro",title:"Il neutro va diretto",text:"Dal NEUTRO all\u2019altro morsetto della lampada."},{kind:"power",short:"6 Levetta",title:"Dai corrente",text:"Tocca la levetta, poi prova i due deviatori."},{kind:"verify",short:"7 Verifica",title:"Controlla l\u2019impianto",text:"Premi Verifica."}],summary:W_},"t03-corridoio":{support:"obiettivo",lesson:{pages:[xf("Il corridoio","Un punto luce che si comanda da tre punti: ingresso, soggiorno e camera.","Se ti serve, ripassa la lezione del punto luce invertito dalla mappa."),{type:"sintesi",title:"Da ricordare"}]},steps:[{kind:"wire",from:"Q.F",to:["D1.C"],color:"marrone",short:"1 Fase",title:"La fase entra nel deviatore dell\u2019ingresso",text:"Dalla FASE al comune C del deviatore dell\u2019ingresso."},{kind:"verify",short:"2 Verifica",title:"Collega i tre punti di comando",text:"Collega il deviatore dell\u2019ingresso ai morsetti 1 e 2 dell\u2019invertitore, poi i morsetti 3 e 4 al deviatore della camera. Il comune C di quest\u2019ultimo va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica."}],summary:X_}};function bf(){let r=[];return en.rooms.filter(e=>e.circuit).forEach(e=>{let t=en.controls[e.circuit]||{};Object.keys(t).forEach(n=>r.push({room:e.id,circuit:e.circuit,id:n,...t[n]}))}),r}var co=new O;function $n(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;co.copy(e),co[n]=0,co.normalize();let c=.5*a/(a+o),u=1-co.angleTo(r)/l;return Math.sign(co[t])===1?u*c:o/(a+o)+c+c*(1-u)}var Jr=class extends zt{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new O,l=new O,c=new O(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,m=new O,x=.5/i;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(o.fromArray(u,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(o.x)+l.x*s,u[g+1]=c.y*Math.sign(o.y)+l.y*s,u[g+2]=c.z*Math.sign(o.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=$n(m,l,"z","y",s,n),f[p+1]=1-$n(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),f[p+0]=1-$n(m,l,"z","y",s,n),f[p+1]=1-$n(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),f[p+0]=1-$n(m,l,"x","z",s,e),f[p+1]=$n(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),f[p+0]=1-$n(m,l,"x","z",s,e),f[p+1]=1-$n(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),f[p+0]=1-$n(m,l,"x","y",s,e),f[p+1]=1-$n(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),f[p+0]=$n(m,l,"x","y",s,e),f[p+1]=1-$n(m,l,"y","x",s,t);break}}};var ei=1.45,ho=2.75,Zs="assets/trilocale/";function fo(r,e){let t=document.createElement("canvas");return t.width=t.height=r,e(t.getContext("2d",{willReadFrequently:!0}),r),t}function Ln(r,e=1,t=!0){let n=new $t(r);return n.wrapS=n.wrapT=Xt,n.repeat.set(e,e),n.anisotropy=4,t&&(n.colorSpace=Rt),n}function po(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function mo(r,e,t,n,i=.06){for(let s=0;s<e*40;s++){let a=Math.floor(n()*255);r.fillStyle=`rgba(${a},${a},${a},${i})`,r.fillRect(n()*e,n()*e,1+n()*t,1+n()*t)}}var q_=()=>fo(256,(r,e)=>{r.fillStyle="#808080",r.fillRect(0,0,e,e),mo(r,e,3,po(7),.12)});function uo(r,e,t,n,i,s){return fo(r,a=>{let o=po(i),l=r/e;a.fillStyle=s?"#202020":n,a.fillRect(0,0,r,r);for(let c=0;c<e;c++)for(let u=0;u<e;u++){if(s)a.fillStyle="#d0d0d0";else{let h=(o()-.5)*10,f=new Pe(t).offsetHSL(0,0,h/255);a.fillStyle="#"+f.getHexString()}a.fillRect(c*l+2,u*l+2,l-4,l-4)}s||mo(a,r,2,o,.04)})}function Yp(r){return fo(512,(e,t)=>{let n=po(11),i=16,s=12,a=t/i,o=t/s;e.fillStyle=r?"#000":"#5a2a1a",e.fillRect(0,0,t,t);for(let l=0;l<i;l++)for(let c=-1;c<=s;c++){let u=c*o+l%2*o/2,h=e.createLinearGradient(u,0,u+o,0);if(r)h.addColorStop(0,"#202020"),h.addColorStop(.5,"#f0f0f0"),h.addColorStop(1,"#202020");else{let f=new Pe().setHSL(.04+(n()-.5)*.02,.55,.36+(n()-.5)*.08);h.addColorStop(0,"#"+f.clone().offsetHSL(0,0,-.12).getHexString()),h.addColorStop(.5,"#"+f.getHexString()),h.addColorStop(1,"#"+f.clone().offsetHSL(0,0,-.14).getHexString())}e.fillStyle=h,e.fillRect(u+1,l*a,o-2,a*.92)}r||mo(e,t,3,n,.08)})}function _f(r,e,t){return fo(256,(n,i)=>{let s=po(t);n.fillStyle=r,n.fillRect(0,0,i,i),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(14,14,i-28,i-28),n.lineWidth=3,n.strokeRect(32,32,i-64,i-64);for(let a=0;a<6;a++)n.beginPath(),n.arc(i/2,i/2,20+a*14,0,Math.PI*2),n.stroke();mo(n,i,2,s,.1)})}var Hc=(r,e)=>fo(128,(t,n)=>{t.fillStyle=r,t.fillRect(0,0,n,n);for(let i=0;i<n;i+=2)t.fillStyle=`rgba(0,0,0,${.04+i%4*.01})`,t.fillRect(i,0,1,n),t.fillRect(0,i,n,1);mo(t,n,1,po(e),.05)});function Zp(r){let e={},t=Ln(q_(),3,!1);e.wall=new Te({color:15657182,roughness:.92,bumpMap:t,bumpScale:.6}),e.wallCut=new Te({color:4212302,roughness:.8}),e.outside=new Te({color:14865080,roughness:.95,bumpMap:t,bumpScale:1});let n=(l,c)=>{let u=new Zn(new Uint8Array([l>>16&255,l>>8&255,l&255,255]),1,1);return c&&(u.colorSpace=Rt),u.needsUpdate=!0,u},i=l=>{let c=Math.round(l*255);return n(c<<16|c<<8|c,!1)};e.parquet=new Te({color:16777215,map:n(11831903,!0),roughness:1,roughnessMap:i(.55),bumpMap:i(.5),bumpScale:.4});let s=new Or,a=(l,c,u)=>s.load(Zs+l,h=>{h.wrapS=h.wrapT=Xt,h.anisotropy=8,c&&(h.colorSpace=Rt),u(h),r()},void 0,()=>{}),o=(l,c,u)=>{let h=l[c];l[c]=u,h&&h.dispose()};return a("parquet.webp",!0,l=>{l.repeat.set(1,1),o(e.parquet,"map",l)}),a("parquet-ruvido.webp",!1,l=>o(e.parquet,"roughnessMap",l)),a("parquet-rilievo.webp",!1,l=>o(e.parquet,"bumpMap",l)),e.tiles=new Te({map:Ln(uo(512,6,"#d9d6cf","#9c978d",3),1),bumpMap:Ln(uo(512,6,0,0,3,!0),1,!1),bumpScale:.8,roughness:.35}),e.kitchenFloor=new Te({map:Ln(uo(512,4,"#8f8a82","#5d5953",5),1),bumpMap:Ln(uo(512,4,0,0,5,!0),1,!1),bumpScale:.8,roughness:.6}),e.grass=new Te({color:16777215,map:n(6257221,!0),roughness:1}),a("prato.webp",!0,l=>{l.repeat.set(10,10),o(e.grass,"map",l),e.grass.color.set(12108968)}),e.paving=new Te({map:Ln(uo(256,4,"#b7b1a6","#8a857c",9),1),roughness:.9}),e.roof=new Te({map:Ln(Yp(!1),1),bumpMap:Ln(Yp(!0),1,!1),bumpScale:2,roughness:.75,transparent:!0,opacity:1}),e.fascia=new Te({color:7031347,roughness:.7,transparent:!0,opacity:1}),e.wood=new Te({color:9068348,roughness:.5}),e.woodLight=new Te({color:14073754,roughness:.55}),e.door=new Te({color:15921128,roughness:.45}),e.white=new Te({color:16052974,roughness:.3}),e.ceramic=new Sn({color:16777215,roughness:.12,clearcoat:1,clearcoatRoughness:.05}),e.steel=new Te({color:13159632,roughness:.28,metalness:1}),e.black=new Te({color:1382170,roughness:.15,metalness:.2}),e.stone=new Te({color:3815478,roughness:.25}),e.cabinet=new Te({color:6254442,roughness:.45}),e.water=new Te({color:12573152,roughness:.05,metalness:.1,transparent:!0,opacity:.6}),e.mirror=new Te({color:14673642,roughness:.02,metalness:1}),e.glass=new Te({color:10466500,roughness:.05,metalness:.6,emissive:0}),e.frame=new Te({color:16184818,roughness:.4}),e.duvet=new Te({map:Ln(Hc("#e9e4da",2),4),roughness:.95}),e.blanket=new Te({map:Ln(Hc("#7b8f86",3),4),roughness:.95}),e.pillow=new Te({map:Ln(Hc("#f5f2ec",4),2),roughness:.95}),e.rugLiving=new Te({map:Ln(_f("#a65c46","#e8d5b5",21)),roughness:1}),e.rugBed=new Te({map:Ln(_f("#d9d2c3","#8a8f86",22)),roughness:1}),e.runner=new Te({map:Ln(_f("#3e4a5c","#c9b48a",23)),roughness:1}),e.towel=new Te({map:Ln(Hc("#7fa6b5",5),3),roughness:1}),e.screen=new Te({color:724240,roughness:.05,metalness:.5}),e.cord=new Te({color:2236962,roughness:.6}),e.plate=new Te({color:16513782,roughness:.3}),e.rocker=new Te({color:15329249,roughness:.25}),e.panel=new Te({color:15855852,roughness:.35}),e.panelDoor=new Te({color:3819090,roughness:.1,transparent:!0,opacity:.55}),e.book=[10238766,3103354,13939804,5204806,7228018].map(l=>new Te({color:l,roughness:.8})),e}var Kp=r=>(r.castShadow=!0,r.receiveShadow=!0,r);function st(r,e,t,n,i,s,a,o,l=.02){let c=Kp(new We(new Jr(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e));return c.position.set(t+s/2,n+a/2,i+o/2),r.add(c),c}function Ki(r,e,t,n,i,s,a=.002,o){let l=new Nt(i,s);if(o){let u=l.attributes.uv;for(let h=0;h<u.count;h++)u.setXY(h,u.getX(h)*i/o,u.getY(h)*s/o)}let c=new We(l,e);return c.rotation.x=-Math.PI/2,c.position.set(t+i/2,a,n+s/2),c.receiveShadow=!0,r.add(c),c}function Gc(r,e,t,n,i,s,a,o=24,l){let c=Kp(new We(new Nn(l===void 0?s:l,s,a,o),e));return c.position.set(t,n+a/2,i),r.add(c),c}function xr(r,e,t,n,i){let s=new Be;st(s,e.wood,-.21,.44,-.21,.42,.04,.42,.01),[[-.19,-.19],[.16,-.19],[-.19,.16],[.16,.16]].forEach(([a,o])=>st(s,e.wood,a,0,o,.03,.44,.03,.005)),st(s,e.wood,-.21,.48,.17,.42,.42,.03,.01),s.position.set(t,0,n),s.rotation.y=i,r.add(s)}function Jp(r,e){st(r,e.cabinet,.7,0,.05,2.25,.86,.6,.01),st(r,e.stone,.68,.86,.04,2.29,.04,.63,.008),st(r,e.steel,1.15,.89,.15,.5,.02,.38,.01),st(r,e.black,2.05,.9,.12,.6,.01,.48,.005),[[2.2,.24],[2.5,.24],[2.2,.48],[2.5,.48]].forEach(([i,s])=>Gc(r,e.steel,i,.905,s,.07,.006,24)),st(r,e.steel,.05,0,.05,.62,1.4,.64,.02),st(r,e.woodLight,.9,.72,1.75,1.3,.04,.8,.01),[[.95,1.8],[2.13,1.8],[.95,2.48],[2.13,2.48]].forEach(([i,s])=>st(r,e.woodLight,i,0,s,.05,.72,.05,.01)),xr(r,e,1.25,1.45,0),xr(r,e,1.85,1.45,0),xr(r,e,1.25,2.9,Math.PI),xr(r,e,1.85,2.9,Math.PI),Gc(r,e.white,1.55,.76,2.15,.12,.05,24,.14);let t=st(r,e.ceramic,3.08,0,.06,1.75,.55,.78,.08);t.userData.keep=!0,st(r,e.water,3.18,.4,.15,1.55,.02,.6,.06),st(r,e.cabinet,3.06,0,1.55,.5,.82,.8,.01),st(r,e.ceramic,3.05,.82,1.6,.48,.1,.7,.04),st(r,e.mirror,3.03,1,1.65,.02,.42,.6,.005);let n=new Be;st(n,e.ceramic,-.18,0,-.17,.36,.4,.34,.12),st(n,e.ceramic,-.2,.38,-.2,.4,.04,.5,.15),st(n,e.ceramic,.16,.38,-.2,.14,.42,.4,.04),n.position.set(4.68,0,2.4),n.rotation.y=-Math.PI/2,r.add(n),st(r,e.towel,4.93,1,1.3,.04,.5,.4,.02),Ki(r,e.towel,3.5,2.6,.7,.5,.012),Ki(r,e.rugBed,6.4,.6,2.4,2.3,.006),st(r,e.wood,6.95,0,.95,1.95,.32,1.65,.03),st(r,e.wood,8.85,0,.92,.08,1.05,1.71,.03),st(r,e.duvet,6.98,.32,.98,1.85,.2,1.59,.08),st(r,e.blanket,6.95,.42,.97,.6,.12,1.61,.06),st(r,e.pillow,8.35,.5,1.08,.42,.14,.66,.07),st(r,e.pillow,8.35,.5,1.82,.42,.14,.66,.07),st(r,e.wood,8.45,0,.35,.48,.5,.45,.02),st(r,e.wood,8.45,0,2.72,.48,.5,.45,.02),st(r,e.woodLight,5.06,0,.12,.62,1.4,1.9,.02),st(r,e.cabinet,5.1,0,2.6,.45,.75,.7,.02),Ki(r,e.runner,2.2,3.95,4.6,.75,.006),st(r,e.wood,7.6,0,3.58,1,.8,.32,.02),e.book.forEach((i,s)=>st(r,i,7.7+s*.07,.8,3.62,.06,.22+s%3*.03,.2,.004)),st(r,e.woodLight,1.8,0,7.35,.6,.9,.55,.02),Gc(r,e.wood,2.2,0,5.4,.18,.02,24),Gc(r,e.wood,2.2,0,5.4,.02,1.4,12),Ki(r,e.rugLiving,.5,7,.9,.6,.006),Ki(r,e.rugLiving,4.4,5.8,2.8,1.9,.006),st(r,e.wood,5.2,0,6.35,1.2,.38,.65,.02),st(r,e.black,6.45,0,5.1,1.9,.45,.42,.01),st(r,e.screen,6.85,.45,5.18,1.1,.66,.05,.005),st(r,e.woodLight,8.5,0,5.05,.45,1.4,1.3,.02);for(let i=0;i<3;i++)e.book.forEach((s,a)=>st(r,s,8.55,.15+i*.45,5.15+a*.2,.3,.26+a%2*.04,.16,.004));st(r,e.wood,2.85,.74,5.45,1.4,.04,.85,.01),[[2.9,5.5],[4.18,5.5],[2.9,6.23],[4.18,6.23]].forEach(([i,s])=>st(r,e.wood,i,0,s,.05,.74,.05,.01)),xr(r,e,3.2,5.2,0),xr(r,e,3.9,5.2,0),xr(r,e,3.2,6.6,Math.PI),xr(r,e,3.9,6.6,Math.PI)}var Qp=[{file:"divano.glb",x:5.8,z:7.3,rot:Math.PI,scale:1,stand:[4.75,6.85,2.15,.85]},{file:"poltrona.glb",x:7.6,z:6.7,rot:-Math.PI/2-.4,scale:1,stand:[7.25,6.35,.75,.75]},{file:"pianta.glb",x:8.55,z:7.55,rot:.6,scale:1.1,stand:null}];function $p(r,e,t){let[n,i,s,a]=t,o=new Be;return st(o,e.blanket,n,0,i,s,.45,a,.08),st(o,e.blanket,n,.45,i+a-.2,s,.4,.2,.08),r.add(o),o}function em(r,e){[["h",3.5,1,2,-1],["h",3.5,3.9,4.8,-1],["h",3.5,6,7,-1],["h",5,1.6,2.4,1],["h",5,5,6,1],["v",2.5,6,7,-1]].forEach(([n,i,s,a,o])=>{let l=a-s-.04,c=new Be;st(c,e.door,0,0,-.02,l,ei,.04,.01);let u=new We(new Wn(.025,12,8),e.steel);u.position.set(l-.07,1,.04),c.add(u),n==="h"?(c.position.set(s+.02,0,i),c.rotation.y=o*1.45):(c.position.set(i,0,s+.02),c.rotation.y=-Math.PI/2+o*1.45),r.add(c)})}var j_=[["n",1,2.1,"cucina"],["n",3.6,4.4,"bagno"],["n",6.2,7.6,"camera"],["s",4.4,6.6,"soggiorno"],["s",7,8.4,"soggiorno"],["e",6,7.2,"soggiorno"],["w",1.2,2.4,"cucina"],["w",3.9,4.6,"corridoio"]];function tm(r,e,t,n){let i=[];function a(l,c,u,h){let f=new Be;st(f,t.frame,-l/2,c,-.02,l,u,.04,.005);let d=new We(new Nt(l-.12,u-.12),h);return d.position.set(0,c+u/2,.022),f.add(d),st(f,t.frame,-.02,c+.06,0,.04,u-.12,.03,.004),f}let o={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]};return j_.forEach(([l,c,u,h])=>{let f=t.glass.clone(),[d,m]=o[l],x=u-c,g=(c+u)/2,p=l==="n"||l==="s"?[g,l==="n"?0:n.d]:[l==="w"?0:n.w,g],T=a(x,.9,1.35,f);T.position.set(p[0]+d*(.12/2+.02),0,p[1]+m*(.12/2+.02)),T.rotation.y=Math.atan2(d,m),e.add(T);let w=a(x,.9,ei-.9,f);w.position.set(p[0]-d*(.12/2+.004),0,p[1]-m*(.12/2+.004)),w.rotation.y=Math.atan2(-d,-m),r.add(w),i.push({room:h,glass:f})}),i}function nm(r,e){let s=e.w+.45,a=-.45,o=e.d+.45,l=(o-a)/2,c=(a+o)/2,u=[-.45+l,2.3,c],h=[s-l,2.3,c],f=[-.45,0,a],d=[s,0,a],m=[s,0,o],x=[-.45,0,o],g=[],p=[],T=Math.hypot(l,2.3);function w(P,S,E,R){[P,S,E].forEach(F=>{g.push(...F),R==="z"?p.push(F[0]/2.4,Math.abs(F[2]-c)/l*T/2.4):p.push(F[2]/2.4,Math.min(F[0]- -.45,s-F[0])/l*T/2.4)})}w(f,u,d,"z"),w(d,u,h,"z"),w(m,h,x,"z"),w(x,h,u,"z"),w(d,h,m,"x"),w(x,u,f,"x");let y=new Wt;y.setAttribute("position",new Pt(g,3)),y.setAttribute("uv",new Pt(p,2)),y.computeVertexNormals();let N=new Be,I=new We(y,r.roof);I.castShadow=!0,I.material.side=sn,N.add(I);let D=st(N,r.fascia,-.45,-.18,a,s- -.45,.18,.08,.01);return D.userData.roof=!0,st(N,r.fascia,-.45,-.18,o-.08,s- -.45,.18,.08,.01),st(N,r.fascia,-.45,-.18,a,.08,.18,o-a,.01),st(N,r.fascia,s-.08,-.18,a,.08,.18,o-a,.01),st(N,r.fascia,1.9,.6,1.4,.5,1.4,.5,.02),N.traverse(P=>{P.userData.roof=!0}),N}var im=1448998,rm=527122,Y_=2,Z_=1.1;function K_(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var sm=r=>r*Math.PI/180,Vc=r=>r*r*(3-2*r);function yf(r,e){if(!K_())return null;let t=!!e.night,n=t?rm:im,i=Fc(r,e.lite),s;try{s=new Hs({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}s.setPixelRatio(Oc(i)),s.setClearColor(n),s.toneMapping=hr,s.toneMappingExposure=t?1.3:.95,s.shadowMap.enabled=!0,s.shadowMap.type=Ls,s.domElement.className="house3d",s.domElement.setAttribute("role","img"),r.appendChild(s.domElement);let a=document.createElement("div");a.className="hlabels",r.appendChild(a);let o=!0,l=0,c=!1,u=new Set,h=()=>{o=!0,Ue()},f=!0,d=()=>{f=!0},m=new mi;m.background=new Pe(n),m.fog=new Aa(n,26,60);let x=Zp(h),g=new zr(13490410,7035464,t?.06:.9);m.add(g);let p=new mr(s),T=!1,w=t?1:0,y,N=new Promise(Q=>{y=Q,setTimeout(Q,4e3)});new Xs().load(Zs+"ambiente.exr",Q=>{c||(m.environment=p.fromEquirectangular(Q).texture,T=!0,ae(),Q.dispose(),p.dispose(),y(),h())},void 0,()=>y());let I=new Wi(t?9415142:16752486,t?.22:1);I.position.set(-9,6,12),I.target.position.set(4.5,0,4),I.castShadow=!0,I.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(I.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40}),I.shadow.bias=-4e-4,I.shadow.normalBias=.02,I.shadow.radius=5,I.shadow.autoUpdate=!1,m.add(I,I.target);let D=new Zt(38,1,.1,120),P=en.size.w/2,S=en.size.d/2,E={tx:P,tz:S+.3,yaw:0,pitch:58,dist:17.5,ty:.6},R={...E},F=new Be;m.add(F),Ki(F,x.grass,-30,-30,69,68,-.02),Ki(F,x.paving,-1,-1,en.size.w+2,en.size.d+2,-.01,1);let G={},q=[];en.rooms.forEach(Q=>{let be=Q.id==="bagno"?x.tiles:Q.id==="cucina"?x.kitchenFloor:x.parquet,Se=Q.id==="bagno"?1.8:Q.id==="cucina"?2.4:1.1,qe=Ki(F,be,Q.x,Q.z,Q.w,Q.d,.001,Se);qe.userData={room:Q.id},q.push(qe),G[Q.id]={def:Q,floor:qe,light:null,bulb:null,glow:null,level:0,target:0,wins:[]}});let ee=.12;function Z(Q,be,Se,qe){let ut=new We(new zt(Se,ei,qe),x.wall);ut.position.set(Q,ei/2,be),ut.castShadow=!0,ut.receiveShadow=!0,F.add(ut);let pt=new We(new zt(Se+.002,.01,qe+.002),x.wallCut);pt.position.set(Q,ei+.005,be),F.add(pt)}en.wallsH.forEach(([Q,be,Se])=>Z((be+Se)/2,Q,Se-be+ee,ee)),en.wallsV.forEach(([Q,be,Se])=>Z(Q,(be+Se)/2,ee,Se-be+ee));let le=new Be,j=en.size.w,J=en.size.d,me=ee/2+.006;[[j/2,-me,j+ee+.02,.012],[j/2,J+me,j+ee+.02,.012],[-me,J/2,.012,J+ee],[j+me,J/2,.012,J+ee]].forEach(([Q,be,Se,qe])=>{let ut=new We(new zt(Se,ho,qe),x.outside);ut.position.set(Q,ho/2,be),ut.receiveShadow=!0,ut.castShadow=!0,le.add(ut)}),st(le,x.wood,.9,0,J+me,1,2.2,.05,.01),F.add(le),Jp(F,x),em(F,x);let ye=tm(F,le,x,en.size).map(Q=>({glass:Q.glass,room:G[Q.room]||null})),Ne=new Pe(16757596);function Xe(){ye.forEach(Q=>Q.glass.emissive.copy(Ne).multiplyScalar(Math.max(Q.room?.9*Q.room.level:0,.8*w)))}let te=new Rn(16757596,0,7,1.6);te.position.set(1.4,2.5,J+.7),F.add(te);let ue=new Ac;ue.setMeshoptDecoder(Hp),Qp.forEach(Q=>{let be=Q.stand?$p(F,x,Q.stand):null;be&&(be.userData.placeholder=!0),ue.load(Zs+Q.file,Se=>{if(c)return;let qe=Se.scene;qe.traverse(pt=>{pt.isLight&&(pt.visible=!1),pt.isMesh&&(pt.castShadow=!0,pt.receiveShadow=!0)}),qe.scale.setScalar(Q.scale),qe.rotation.y=Q.rot,qe.position.set(Q.x,0,Q.z);let ut=()=>{c||(F.add(qe),be&&F.remove(be),d(),h())};Oe.prepare(qe).then(ut,ut)},void 0,()=>{})}),en.rooms.filter(Q=>Q.lamp).forEach(Q=>{let be=new Be;be.position.set(Q.lamp[0],Y_,Q.lamp[1]);let Se=new We(new Nn(.005,.005,.5,6),x.cord);Se.position.y=.36;let qe=new We(new Nn(.03,.05,.06,16),x.steel);qe.position.y=.12;let ut=new Te({color:15921128,roughness:.35,emissive:16761466,emissiveIntensity:0}),pt=new We(new Wn(.11,24,16),ut);pt.castShadow=!1;let Tt=new Rn(16763272,0,10,2);Tt.position.y=-.14,Tt.castShadow=!i,Tt.shadow.mapSize.set(512,512),Tt.shadow.bias=-.002,Tt.shadow.radius=4,Tt.shadow.autoUpdate=!1,be.add(Se,qe,pt,Tt),F.add(be),Object.assign(G[Q.id],{light:Tt,bulb:ut,shade:null,stale:!0})});let ce={},he={n:[0,0,-1],s:[0,0,1],e:[1,0,0],w:[-1,0,0]},Me={n:Math.PI,s:0,e:Math.PI/2,w:-Math.PI/2},Ze=new Ut({visible:!1});function Re(Q,be,Se,qe,ut,pt=1){let Tt=new Be,di=st(Tt,qe,-.09*pt,-.12*pt,-.015,.18*pt,.24*pt,.03,.012),Bn=st(Tt,x.rocker,-.055*pt,-.07*pt,0,.11*pt,.14*pt,.025,.01),$i=he[Se];Tt.position.set(Q+$i[0]*(ee/2+.015),Z_,be+$i[2]*(ee/2+.015)),Tt.rotation.y=Me[Se];let Ci=new We(new Wn(.45,12,8),Ze);return[Tt,di,Bn,Ci].forEach(oa=>oa.userData=ut),Tt.add(Ci),q.push(di,Bn,Ci),F.add(Tt),{group:Tt,rocker:Bn}}e.bare||bf().forEach(Q=>{ce[Q.circuit+"."+Q.id]=Re(Q.x,Q.z,Q.face,x.plate,{circuit:Q.circuit,ctl:Q.id})});let at=en.breaker,nt=new Be,Ie=st(nt,x.panel,-.22,-.2,-.02,.44,.4,.08,.02),A=st(nt,x.panelDoor,-.18,-.15,.06,.36,.3,.012,.01);nt.position.set(at.x+he[at.face][0]*(ee/2+.02),1.15,at.z+he[at.face][2]*(ee/2+.02)),nt.rotation.y=Me[at.face];let Ge=new We(new Wn(.55,12,8),Ze);nt.add(Ge),[nt,Ie,A,Ge].forEach(Q=>Q.userData={breaker:!0}),e.bare||(q.push(Ie,A,Ge),F.add(nt));let Ce=nm(x,en.size);Ce.position.y=ei,m.add(Ce);let De=!0,Ee=1;function V(){d();let Q=ei+(ho-ei)*Math.min(1,Ee*1.4);le.scale.y=Q/ho,Ce.position.y=Q+(1-Ee)*3.2,Ce.visible=Ee>.01,x.roof.opacity=x.fascia.opacity=Math.min(1,Ee*1.6),x.roof.depthWrite=x.fascia.depthWrite=Ee>.99,a.style.opacity=String(Math.max(0,1-Ee*2))}let ie=[];function _(Q,be,Se,qe,ut){let pt=document.createElement("div");return pt.className="hlabel "+(ut||""),pt.textContent=Q,a.appendChild(pt),ie.push({el:pt,v:new O(be,Se,qe)}),pt}en.rooms.forEach(Q=>_(Q.name,Q.x+Q.w/2,.15,Q.z+Q.d/2+(Q.id==="corridoio"?.45:.9),"room")),e.bare||(bf().forEach(Q=>_(Q.label,Q.x+he[Q.face][0]*.4,ei+.25,Q.z+he[Q.face][2]*.4,"ctl")),_(at.label,at.x+.55,ei+.25,at.z,"ctl")),zc(F,[le]);let M=e.extend?e.extend({world:F,M:x,pick:q,rooms:G,addLabel:_,animate:(Q,be)=>ot(Q,Se=>(d(),be(Se))),redraw:h,moved:()=>{d(),h()},loop:Q=>{u.add(Q),Ue()},lite:i,FACE:he,FACE_ROT:Me,T:ee,WALL_H:ei,camera:D,scene:m}):null,H=e.wires?qp({add:Q=>F.add(Q),loop:Q=>{u.add(Q),Ue()},redraw:h,reduced:!!e.reduced}):null,$={sun:new Pe(16752486),sunI:1,env:.16,hemi:.12,exp:.95,bg:new Pe(im)},se={sun:new Pe(9415142),sunI:.34,env:.05,hemi:.045,exp:1.3,bg:new Pe(rm)};function ae(){let Q=w,be=(Se,qe)=>Se+(qe-Se)*Q;I.color.copy($.sun).lerp(se.sun,Q),I.intensity=be($.sunI,se.sunI),s.toneMappingExposure=be($.exp,se.exp),m.background.copy($.bg).lerp(se.bg,Q),m.fog.color.copy(m.background),s.setClearColor(m.background),T&&(m.environmentIntensity=be($.env,se.env),g.intensity=be($.hemi,se.hemi)),te.intensity=5*Q,Xe(),h()}let Oe=Bc(s,m,D,{lite:i});function we(){let Q=sm(R.pitch),be=sm(R.yaw),Se=R.dist;D.position.set(R.tx+Math.sin(be)*Math.cos(Q)*Se,R.ty-.6+Math.sin(Q)*Se,R.tz+Math.cos(be)*Math.cos(Q)*Se),D.lookAt(R.tx,R.ty,R.tz)}function je(){let Q=Math.max(1,r.clientWidth),be=Math.max(1,r.clientHeight);s.setSize(Q,be,!1),s.domElement.style.width="100%",s.domElement.style.height="100%",Oe.setSize(Q,be),D.aspect=Q/be,D.fov=Q/be<.9?52:38,D.updateProjectionMatrix(),h()}let et=typeof ResizeObserver<"u"?new ResizeObserver(je):null;et&&et.observe(r);let ge=new O;function Le(){we(),I.shadow.needsUpdate=f,Object.values(G).forEach(Se=>{if(!Se.light)return;f&&(Se.stale=!0);let qe=Se.stale&&Se.level>.01;Se.light.shadow.needsUpdate=qe,qe&&(Se.stale=!1)}),f=!1,Oe.render();let Q=r.clientWidth,be=r.clientHeight;ie.forEach(Se=>{ge.copy(Se.v).project(D),Se.el.style.display=ge.z<1?"":"none",Se.el.style.transform=`translate(-50%,-50%) translate(${(ge.x+1)/2*Q}px,${(1-ge.y)/2*be}px)`})}let Ve=!1;N.then(()=>c?null:Oe.warm()).then(()=>{Ve=!0,h()});function Ke(Q){l=0,!c&&Ve&&(Oe.watch(Q,u.size>0||!!vt),u.size&&(o=!0),u.forEach(be=>{be(Q)||u.delete(be)}),o&&(o=!1,Le()),u.size&&Ue())}function Ue(){!l&&!c&&(l=requestAnimationFrame(Ke))}function ot(Q,be){let Se=performance.now(),qe=ut=>{let pt=Math.min(1,(ut-Se)/Q);return be(pt),pt<1};return u.add(qe),Ue(),qe}let tt=e.reduced||e.noIntro,it=null,W=!tt,ne={};function re(Q,be=650){if(W){ne=Q;return}let Se={...E,...Q};if(D.aspect<.9&&Se.dist===E.dist&&(Se.dist*=1.22),it&&u.delete(it),e.reduced){Object.assign(R,Se),h();return}let qe={...R};it=ot(be,ut=>{let pt=Vc(ut);Object.keys(Se).forEach(Tt=>R[Tt]=qe[Tt]+(Se[Tt]-qe[Tt])*pt)})}let de=null;function ze(Q,be=1400){De=!!Q,e.onRoof&&e.onRoof(De),de&&u.delete(de);let Se=Ee,qe=De?1:0;if(e.reduced){Ee=qe,V(),h();return}de=ot(be,ut=>{Ee=Se+(qe-Se)*Vc(ut),V()})}tt?(Ee=e.startRoof?1:0,De=!!e.startRoof,V(),e.start&&Object.assign(R,e.start)):(Object.assign(R,{tx:P,tz:S,yaw:-28,pitch:30,dist:27}),V(),setTimeout(()=>{c||(W=!1,re(ne,2600),setTimeout(()=>{c||(ze(!1,1600),e.onRoof&&e.onRoof(!1))},700))},450));let ke=new qi,ht=new Fe,vt=null,Ft=s.domElement;Ft.style.touchAction="pan-y",Ft.addEventListener("pointerdown",Q=>{vt={x:Q.clientX,y:Q.clientY,yaw:R.yaw,pitch:R.pitch,moved:!1};try{Ft.setPointerCapture(Q.pointerId)}catch{}}),Ft.addEventListener("pointermove",Q=>{if(!vt)return;let be=Q.clientX-vt.x,Se=Q.clientY-vt.y;Math.abs(be)+Math.abs(Se)>6&&(vt.moved=!0),vt.moved&&(it&&(u.delete(it),it=null),R.yaw=Math.max(-35,Math.min(35,vt.yaw-be*.25)),R.pitch=Math.max(38,Math.min(75,vt.pitch+Se*.2)),h())}),Ft.addEventListener("pointerup",Q=>{let be=vt;if(vt=null,!be||be.moved)return;if(De){ze(!1),e.onRoof&&e.onRoof(!1);return}let Se=Ft.getBoundingClientRect();ht.set((Q.clientX-Se.left)/Se.width*2-1,-((Q.clientY-Se.top)/Se.height)*2+1),ke.setFromCamera(ht,D);let qe=ke.intersectObjects(q,!1)[0];if(!qe)return;let ut=qe.object.userData||{};ut.ext?e.onPick&&e.onPick(ut):ut.breaker?e.onBreaker():ut.ctl?e.onControl(ut.circuit,ut.ctl):ut.room&&e.onRoom(ut.room)}),Ft.addEventListener("wheel",Q=>{Q.ctrlKey&&(Q.preventDefault(),R.dist=Math.max(9,Math.min(24,R.dist+Q.deltaY*.01)),h())},{passive:!1}),Ft.addEventListener("pointercancel",()=>{vt=null});let Mt=11;function _n(Q,be){Q.level=be,Q.light&&(Q.light.intensity=Mt*be,Q.bulb.emissiveIntensity=6*be),Xe()}function On(Q,be){let Se=be?1:0;if(Q.target===Se)return;if(Q.target=Se,e.reduced){_n(Q,Se);return}let qe=Q.level;Q.anim&&u.delete(Q.anim),Q.anim=ot(be?420:260,ut=>{let pt=be&&ut<.5?Math.sin(ut*60)>.2?1:.35:1;_n(Q,(qe+(Se-qe)*Vc(ut))*pt)})}return V(),je(),{update(Q){M&&M.update&&M.update(Q);let be=[];Object.keys(G).forEach(Se=>{let qe=G[Se],ut=Q.rooms[Se]||{},pt=!!ut.lit;On(qe,pt),pt&&qe.def.name&&be.push(qe.def.name);let Tt=en.controls[qe.def.circuit]||{};Object.keys(Tt).forEach(di=>{let Bn=ce[qe.def.circuit+"."+di];Bn&&(Bn.rocker.rotation.x=(ut.controls&&ut.controls[di]?-1:1)*.25)})}),s.domElement.setAttribute("aria-label","Casa vista dall\u2019alto. Stanze con la luce accesa: "+(be.length?be.join(", "):"nessuna")),h()},focusRoom(Q){let be=G[Q]&&G[Q].def;if(be){if(De&&!W&&ze(!1),D.aspect<.9){re({tx:(P+be.x+be.w/2)/2,tz:(S+be.z+be.d/2)/2+.3,dist:19,pitch:62});return}re({tx:be.x+be.w/2,tz:be.z+be.d/2+.3,dist:12.5,yaw:0,pitch:60})}},overview(){re({})},project(Q,be,Se){let qe=new O(Q,be,Se).project(D);return{x:(qe.x+1)/2*r.clientWidth,y:(1-qe.y)/2*r.clientHeight,visible:qe.z<1&&qe.x>-1.05&&qe.x<1.05&&qe.y>-1.05&&qe.y<1.05}},wires:()=>H,setNight(Q,be=2e3){let Se=w,qe=Q?1:0;if(e.reduced||be<=1){w=qe,ae();return}ot(be,ut=>{w=Se+(qe-Se)*Vc(ut),ae()})},look(Q,be){re(Q,be)},screenOf(Q){let be=q.find(qe=>qe.userData&&qe.userData.id===Q);if(!be)return null;be.updateWorldMatrix(!0,!1);let Se=new O().setFromMatrixPosition(be.matrixWorld).project(D);return{x:(Se.x+1)/2*r.clientWidth,y:(1-Se.y)/2*r.clientHeight,visible:Se.z<1}},setRoof(Q,be,Se){ze(Q,Se),Q&&!be&&re({yaw:-18,pitch:42,dist:23},1400)},roof(){return De},resize:je,dispose(){c=!0,M&&M.dispose&&M.dispose(),l&&cancelAnimationFrame(l),et&&et.disconnect(),m.traverse(Q=>{Q.geometry&&Q.geometry.dispose(),Q.material&&(Array.isArray(Q.material)?Q.material:[Q.material]).forEach(be=>{Object.values(be).forEach(Se=>Se&&Se.isTexture&&Se.dispose()),be.dispose()})}),m.environment&&m.environment.dispose(),Oe.dispose(),s.dispose(),s.forceContextLoss&&s.forceContextLoss(),s.domElement.remove(),a.remove()}}}typeof window<"u"&&(window.FaseNeutroScene={createScene:yf});function Ks(r,e,t){let n=document.createElement("canvas");return n.width=r,n.height=e,t(n.getContext("2d",{willReadFrequently:!0}),r,e),n}function Wc(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function go(r,e=1,t=1,n=!0){let i=new $t(r);return i.wrapS=i.wrapT=Xt,i.repeat.set(e,t),i.anisotropy=4,n&&(i.colorSpace=Rt),i}function Xc(r,e,t,n,i,s,a){for(let o=0;o<n;o++){let l=Math.floor(s()*255);r.fillStyle=`rgba(${l},${l},${l},${a})`,r.fillRect(s()*e,s()*t,1+s()*i,1+s()*i)}}var J_=()=>Ks(512,512,(r,e,t)=>{let n=Wc(31);r.fillStyle="#8a8a86",r.fillRect(0,0,e,t);for(let i=0;i<40;i++)r.fillStyle=`rgba(${90+n()*60},${90+n()*60},${86+n()*60},0.10)`,r.beginPath(),r.ellipse(n()*e,n()*t,30+n()*90,20+n()*60,n()*3,0,7),r.fill();Xc(r,e,t,9e3,3,n,.18),r.strokeStyle="rgba(40,40,40,0.55)",r.lineWidth=3,r.beginPath(),r.moveTo(0,2),r.lineTo(e,2),r.moveTo(2,0),r.lineTo(2,t),r.stroke()}),Q_=()=>Ks(256,256,(r,e,t)=>{let n=Wc(32);r.fillStyle="#808080",r.fillRect(0,0,e,t),Xc(r,e,t,6e3,3,n,.35)}),$_=()=>Ks(256,256,(r,e,t)=>{let n=Wc(41);r.fillStyle="#1d1f22",r.fillRect(0,0,e,t);for(let i=0;i<8;i++)r.fillStyle="#2b2e32",r.fillRect(i*32+3,0,5,t),r.fillStyle="#121315",r.fillRect(i*32+9,0,3,t);Xc(r,e,t,2500,2,n,.12)}),ey=()=>Ks(256,256,(r,e,t)=>{let n=Wc(51);r.fillStyle="#b98b57",r.fillRect(0,0,e,t);for(let i=0;i<t;i+=3)r.fillStyle=`rgba(80,50,20,${.04+i%6*.01})`,r.fillRect(0,i,e,1);Xc(r,e,t,2500,2,n,.12),r.fillStyle="rgba(214,190,150,0.9)",r.fillRect(0,t/2-12,e,24)}),ty=()=>Ks(256,64,(r,e,t)=>{r.fillStyle="#d9b01e",r.fillRect(0,0,e,t),r.fillStyle="#17181a";for(let n=-t;n<e+t;n+=48)r.beginPath(),r.moveTo(n,t),r.lineTo(n+24,t),r.lineTo(n+24+t,0),r.lineTo(n+t,0),r.fill()});function vr(){let r={};r.concrete=new Te({map:go(J_(),1,1),bumpMap:go(Q_(),6,6,!1),bumpScale:.6,roughness:.88}),r.wall=new Te({color:13355199,roughness:.95}),r.wallBase=new Te({color:5068640,roughness:.85});let e=go($_(),6,1);return r.rubber=new Te({map:e,roughness:.92}),r.beltTex=e,r.cardboard=new Te({map:go(ey(),1,1),roughness:.85}),r.hazard=new Te({map:go(ty(),1,1),roughness:.6}),r.steel=new Te({color:12830667,roughness:.3,metalness:1}),r.steelDark=new Te({color:7172984,roughness:.4,metalness:.9}),r.frame=new Te({color:4086390,roughness:.5,metalness:.3}),r.yellow=new Te({color:14923295,roughness:.45}),r.red=new Te({color:12854813,roughness:.3}),r.green=new Te({color:2068293,roughness:.3}),r.motor=new Te({color:2912896,roughness:.42,metalness:.35,emissive:16734751,emissiveIntensity:0}),r.cabinet=new Te({color:13883096,roughness:.5,metalness:.2}),r.cabinetIn=new Te({color:15329506,roughness:.7}),r.din=new Te({color:11449272,roughness:.35,metalness:1}),r.modWhite=new Te({color:15329766,roughness:.35}),r.modGrey=new Te({color:9344155,roughness:.4}),r.modDark=new Te({color:2303530,roughness:.35}),r.modBlue=new Te({color:2973594,roughness:.4}),r.lever=new Te({color:1382170,roughness:.3}),r.glassDoor=new Te({color:3819090,roughness:.08,transparent:!0,opacity:.35}),r.stripe=new Te({color:16742938,roughness:.4}),r.windowGlow=new Te({color:12375022,emissive:10274032,emissiveIntensity:.9,roughness:.2}),r}function bn(r,e=.012,t="sphere"){let n=new Te({color:new Pe(r).multiplyScalar(.25),emissive:r,emissiveIntensity:0,roughness:.3}),i=t==="box"?new Jr(e*2,e,e,1,e*.3):new Wn(e,14,10);return{mesh:new We(i,n),mat:n,set(a,o=3){n.emissiveIntensity=a?o:0}}}function ve(r,e,t,n,i,s,a,o,l=.01){let c=new We(new Jr(s,a,o,2,Math.min(l,s/2,a/2,o/2)),e);return c.position.set(t,n,i),c.castShadow=!0,c.receiveShadow=!0,r.add(c),c}function _t(r,e,t,n,i,s,a,o="y",l=28,c){let u=new We(new Nn(c===void 0?s:c,s,a,l),e);return u.position.set(t,n,i),o==="x"&&(u.rotation.z=Math.PI/2),o==="z"&&(u.rotation.x=Math.PI/2),u.castShadow=!0,u.receiveShadow=!0,r.add(u),u}function mn(r,e,t,n,i,s,a,o={}){let c=Math.max(24,Math.round(256*a/s)),u=Ks(256,c,(d,m,x)=>{d.clearRect(0,0,m,x),d.fillStyle=o.bg||"rgba(255,255,255,0)",d.fillRect(0,0,m,x),d.fillStyle=o.fg||"#2a2d31",d.font=`600 ${Math.round(x*(o.size||.62))}px system-ui, sans-serif`,d.textAlign="center",d.textBaseline="middle",d.fillText(e,m/2,x/2+1,m-8)}),h=new $t(u);h.colorSpace=Rt;let f=new We(new Nt(s,a),new Ut({map:h,transparent:!0,color:o.dim||14540253}));return f.position.set(t,n,i),r.add(f),f}function ny(r,e,t){let n=new Be,i=t.w||.036,s=t.h||.09,a=.05,o=ve(n,t.kind==="mp"?e.modDark:e.modWhite,0,0,0,i,s,a,.004),l=ve(n,(t.kind==="mp",e.modGrey),0,0,a/2+.002,i*.86,s*.9,.008,.003),c=new Be;c.position.set(0,s*.04,a/2+.01);let u=ve(c,e.lever,0,0,.012,i*.52,s*.3,.02,.004);u.userData={id:t.id,kind:"toggle",...t.data||{}},n.add(c);let h=bn(16747034,.007,"box");h.mesh.position.set(0,s*.36,a/2+.012),n.add(h.mesh);let f=bn(3789930,.006);f.mesh.position.set(i*.22,-s*.34,a/2+.012),n.add(f.mesh);let d=null;t.kind==="rcd"&&(d=_t(n,e.modBlue,-i*.18,-s*.3,a/2+.012,.006,.01,"z",14),d.userData={id:t.id+".test",kind:"test",part:t.id}),n.position.set(t.x,t.y,0),r.add(n);let m=[u,l,o].concat(d?[d]:[]);return m.forEach(x=>{x!==u&&x!==d&&(x.userData={id:t.id,kind:"toggle",...t.data||{}})}),{group:n,picks:m,set(x){c.rotation.x=x.tripped?0:x.on?-.5:.5,c.position.y=x.tripped?0:x.on?s*.1:-s*.1,h.set(!!x.tripped,2.5),f.set(!!x.live,3.2)}}}function am(r,e=1){let t=new Be,n=[{id:"D",kind:"rcd",w:.072,label:"Diff."},{id:"M1",kind:"mcb",w:.036,label:"Luce"},{id:"M2",kind:"mcb",w:.036,label:"Prese"},{id:"M3",kind:"mcb",w:.036,label:"Cucina"}],i=.006,s=n.reduce((f,d)=>f+d.w,0)+i*(n.length-1)+.09,a=.27;ve(t,r.cabinet,0,0,-.012,s+.04,a+.04,.045,.008),ve(t,r.cabinetIn,0,0,.011,s,a,.005,.004),ve(t,r.din,0,0,.016,s-.02,.018,.006,.002);let o=[],l={},c=-s/2+.045;n.forEach(f=>{let d=ny(t,r,{id:f.id,kind:f.kind,w:f.w,x:c+f.w/2,y:0});d.group.position.z=.04,l[f.id]=d,d.picks.forEach(m=>o.push(m)),mn(t,f.label,c+f.w/2,-.085,.066,f.w+.004,.022,{size:.4}),c+=f.w+i});let u=new Be;u.position.set(-s/2-.02,0,.115);let h=ve(u,r.glassDoor,s/2+.02,0,0,s+.04,a+.04,.006,.004);return h.renderOrder=2,h.castShadow=!1,t.add(u),t.scale.setScalar(e),{group:t,picks:o,width:s*e,door(f){u.rotation.y=-1.95*f},set(f){l.D.set({on:f.rcd.on,tripped:f.rcd.tripped,live:f.rcd.on}),l.M1.set({on:f.lines.luce.on,tripped:f.lines.luce.tripped,live:f.lines.luce.on&&f.rcd.on}),l.M2.set({on:f.lines.prese.on,tripped:f.lines.prese.tripped,live:f.lines.prese.on&&f.rcd.on}),l.M3.set({on:f.lines.cucina.on,tripped:f.lines.cucina.tripped,live:f.lines.cucina.on&&f.rcd.on})}}}function Js(r,e){let t=new Be,n=e.x1-e.x0,i=e.w||.7,s=e.h||.8,a=(e.x0+e.x1)/2;[-1,1].forEach(c=>{ve(t,r.frame,a,s-.1,c*(i/2+.03),n+.1,.12,.05,.01),ve(t,r.steelDark,a,s-.02,c*(i/2+.03),n+.1,.03,.07,.005);let u=Math.max(2,Math.round(n/1.5)+1);for(let h=0;h<u;h++)ve(t,r.frame,e.x0+n*h/(u-1),(s-.16)/2,c*(i/2+.03),.06,s-.16,.05,.008)});for(let c=0;c<3;c++)ve(t,r.frame,e.x0+.1+(n-.2)*c/2,.3,0,.04,.04,i+.06,.005);_t(t,r.steel,e.x0,s-.07,0,.07,i+.02,"z"),_t(t,r.steel,e.x1,s-.07,0,.07,i+.02,"z");let o=new We(new zt(n,.025,i-.02),r.rubber);o.position.set(a,s-.0125+0,0),o.receiveShadow=!0,o.castShadow=!0,t.add(o),r.beltTex.repeat.set(n*1.4,1);let l=0;return{group:t,belt:o,run(c,u){l=(l+c*u*1.4/1)%1,r.beltTex.offset.x=-l}}}function om(r,e=.48,t=.34,n=.38){let i=new Be;return ve(i,r.cardboard,0,t/2,0,e,t,n,.01),i}function qc(r){let e=new Be,t=_t(e,r.motor,0,0,0,.16,.42,"z",36);for(let s=0;s<9;s++)ve(e,r.motor,0,0,-.17+s*.043,.36,.014,.012,.003);_t(e,r.steelDark,0,0,.26,.05,.1,"z"),ve(e,r.modDark,0,.19,-.02,.16,.07,.14,.01),ve(e,r.steelDark,0,-.17,0,.32,.03,.36,.005);let n=new Be,i=_t(n,r.steelDark,0,0,0,.14,.04,"z",32);for(let s=0;s<8;s++){let a=ve(n,r.steel,0,.09,0,.025,.07,.018,.003);a.rotation.z=s/8*Math.PI*2,a.position.set(Math.sin(a.rotation.z)*-.09,Math.cos(a.rotation.z)*.09,0)}return n.position.z=-.24,e.add(n),{group:e,set(s){r.motor.emissiveIntensity=1.4*s.heat},spin(s,a){n.rotation.z+=s*Math.PI*2*a},hum(s){e.position.y+=Math.sin(s/25)*6e-4},body:t,cap:i}}function Qs(r,e=1.5){let t=new Be;_t(t,r.steelDark,0,.02,0,.09,.04,"y"),_t(t,r.steel,0,e/2,0,.018,e,"y",14);let n=[["green",3073642],["yellow",16762394],["red",16726570]].map(([s,a],o)=>{let l=new Te({color:new Pe(a).multiplyScalar(.3),emissive:a,emissiveIntensity:0,roughness:.25,transparent:!0,opacity:.95}),c=_t(t,l,0,e+.07*o,0,.055,.07,"y",24);return{name:s,mat:l,mesh:c}});_t(t,r.modDark,0,e+.07*3+.01,0,.056,.02,"y",24);let i={};return n.forEach(s=>{let a=new Rn(s.mat.emissive.getHex(),0,3.2,2);a.position.y=s.mesh.position.y,t.add(a),i[s.name]=a}),{group:t,set(s){n.forEach(a=>{let o=!!s[a.name];a.mat.emissiveIntensity=o?3.4:0,i[a.name].intensity=o?1.4:0})}}}function $s(r){let e=new Be;_t(e,r.steelDark,0,.02,0,.16,.04,"y"),_t(e,r.steel,0,.55,0,.03,1.1,"y",14),ve(e,r.yellow,0,1.28,0,.3,.46,.12,.012);let t=(l,c,u,h,f,d,m)=>{let x=new Be;x.position.set(u,h,.07);let g=_t(x,r.modDark,0,0,0,f+.012,.014,"z",28),p=_t(x,c,0,0,.012,f,.022,"z",28);return g.userData=p.userData={id:l,kind:d?"hold":"toggle",hold:!!d},e.add(x),mn(e,m,u,h-f-.035,.066,.14,.032,{fg:"#17181a"}),{grp:x,cap:p,ring:g}},n=t("SB1",r.green,-.075,1.4,.034,!0,"Marcia"),i=t("SB0",r.red,.075,1.4,.034,!0,"Arresto"),s=new Be;s.position.set(0,1.2,.07),_t(s,r.yellow,0,0,0,.056,.012,"z",32);let a=_t(s,r.red,0,0,.026,.04,.036,"z",32,.032);a.userData={id:"SBE",kind:"toggle"},e.add(s),mn(e,"Emergenza",0,1.115,.066,.18,.032,{fg:"#17181a"});let o=[n.cap,n.ring,i.cap,i.ring,a];return{group:e,picks:o,set(l){n.cap.position.z=l.start?.004:.012,i.cap.position.z=l.stop?.004:.012,a.position.z=l.emergency?.008:.026}}}function ea(r,e={}){let t=new Be,n=1,i=1.2;ve(t,r.cabinet,0,0,-.04,n+.05,i+.05,.1,.012),ve(t,r.cabinetIn,0,0,.012,n,i,.01,.004),[.3,-.22].forEach(g=>ve(t,r.din,0,g,.022,n-.1,.022,.008,.002));let s=[],a=1.75,o=new Be;o.position.set(-.3,.34,.03),o.scale.setScalar(a),ve(o,r.modDark,0,0,0,.1,.16,.08,.008);let l=new Be;l.position.set(0,.02,.05);let c=ve(l,r.lever,0,0,.012,.045,.085,.028,.006);c.userData={id:"QM",kind:"toggle"};let u=_t(o,r.yellow,0,.02,.043,.05,.006,"z",24);u.userData={id:"QM",kind:"toggle"},o.add(l),t.add(o),s.push(c,u),mn(t,e.qm||"Salvamotore",-.3,.15,.075,.3,.05,{size:.5});let h=new Be;h.position.set(0,.34,.03),h.scale.setScalar(a),ve(h,r.modGrey,0,0,0,.12,.17,.08,.008);let f=bn(3789930,.012,"box");f.mesh.scale.set(1.6,1,.5),f.mesh.position.set(0,.03,.044),h.add(f.mesh),t.add(h),mn(t,"Contattore",0,.15,.075,.3,.05,{size:.5});let d=new Be;d.position.set(.3,.34,.03),d.scale.setScalar(a),ve(d,r.modBlue,0,0,0,.1,.17,.08,.008);let m=bn(16722458,.012,"box");m.mesh.scale.set(1.4,1,.5),m.mesh.position.set(0,.05,.044),d.add(m.mesh);let x=_t(d,r.modWhite,0,-.045,.045,.02,.014,"z",18);x.userData={id:"FR.reset",kind:"reset",part:"FR"},e.thermal!==!1&&(t.add(d),s.push(x),mn(t,"Termico",.3,.15,.075,.3,.05,{size:.5}));for(let g=0;g<8;g++)ve(t,g%2?r.modGrey:r.modWhite,-.35+g*.1,-.35,.03,.05,.09,.05,.004);return{group:t,picks:s,set(g){l.rotation.z=g.qm?0:.7,f.set(!!g.contactor,2.5),m.set(!!(g.thermal&&g.thermal.tripped),3.2)}}}function jc(r,e={}){let t=new Be,n=e.wide?.5:.36,i=.16;ve(t,r.modGrey,0,0,0,n,i,.08,.01),ve(t,r.modDark,0,0,.042,n-.02,i-.05,.006,.004),ve(t,r.modDark,0,i/2-.012,.03,n-.02,.022,.03,.003),ve(t,r.modDark,0,-i/2+.012,.03,n-.02,.022,.03,.003);let s=e.wide?[["RUN",-n/2+.035,3073642],...[0,1,2,3,4,5,6,7].map(u=>["I"+u,-.15+u*.026,3073642]),...[0,1,2,3].map(u=>["Q"+u,.105+u*.03,16757018])]:[["RUN",-n/2+.045,3073642],["I0",-.042,3073642],["I1",-.012,3073642],["I2",.018,3073642],["I3",.048,3073642],["Q0",.104,16757018],["Q1",.134,16757018]];e.wide?mn(t,"PLC   I0 I1 I2 I3 I4 I5 I6 I7   Q0 Q1 Q2 Q3",0,-.024,.047,.47,.022,{fg:"#c9ccd0",size:.6}):mn(t,"PLC     I0  I1  I2  I3     Q0  Q1",0,-.024,.047,.33,.022,{fg:"#c9ccd0",size:.6});let a=new un(new zt(.014,.01,.006),new Ut({color:16777215}),s.length),o=new Ye,l=new Pe;s.forEach(([,u],h)=>{o.makeTranslation(u,h===0?-.004:.004,.048),a.setMatrixAt(h,o),a.setColorAt(h,l.setHex(1711135))}),a.castShadow=!1,t.add(a);let c="";return{group:t,leds:a,set(u){let h=d=>d==="RUN"?u.on:u.on&&!!((d[0]==="I"?u.inputs:u.outputs)||{})[d],f=s.map(([d])=>h(d)?1:0).join("");return f===c?!1:(c=f,s.forEach(([d,,m],x)=>a.setColorAt(x,h(d)?l.setHex(m).multiplyScalar(2.2):l.setHex(1711135))),a.instanceColor.needsUpdate=!0,!0)}}}function lm(r,e=.9,t=.97){let n=new Be;[0,e].forEach(o=>{_t(n,r.steelDark,0,.02,o,.06,.04,"y",18),_t(n,r.steel,0,t/2,o,.02,t,"y",10)}),ve(n,r.modDark,0,t,-.03,.09,.1,.09,.01),ve(n,r.yellow,0,t,e+.015,.08,.08,.025,.005);let i=bn(16757018,.012);i.mesh.position.set(0,t+.058,-.03),n.add(i.mesh);let s=new Ut({color:16726570,transparent:!0,opacity:.18,depthWrite:!1}),a=new We(new Nn(.0035,.0035,e,6),s);return a.rotation.x=Math.PI/2,a.position.set(0,t,e/2),a.castShadow=!1,n.add(a),{group:n,set(o){i.set(!!o.beam,3.2),s.opacity=o.beam?.05:.18}}}var ta={insieme:{tx:4.5,tz:4.3,yaw:0,pitch:58,dist:17.5},quadro:{tx:.15,tz:6.5,ty:1.2,yaw:90,pitch:6,dist:2.3},soggiorno:{tx:4.2,tz:6.6,yaw:0,pitch:55,dist:9},corridoio:{tx:4.5,tz:4.6,yaw:0,pitch:60,dist:10.5},cucina:{tx:1.5,tz:1.5,yaw:0,pitch:58,dist:9},ingresso:{tx:1.4,tz:6.2,yaw:32,pitch:50,dist:7.5},dispersione:{tx:3.2,tz:6,yaw:0,pitch:52,dist:10.5},esterno:{tx:4.5,tz:4.2,ty:.8,yaw:-24,pitch:22,dist:21},lontano:{tx:4.5,tz:4.2,ty:.8,yaw:-34,pitch:18,dist:30}},wi=1.47,Mf=[.12,1.2,6.5],cm={luce:[Mf,[.12,wi,6.5],[.12,wi,4.25],[.12,1.1,4.25],[.12,wi,4.25],[4.5,wi,4.25],[4.5,2,4.25]],prese:[Mf,[.12,wi,6.5],[.12,wi,5],[6.15,wi,5],[6.15,.32,5.07],[6.15,.3,5.4]],cucina:[Mf,[.12,wi,6.5],[.12,wi,.12],[2.35,wi,.12],[2.35,.3,.12]]},iy={luce:["fase","neutro"],prese:["fase","neutro","terra"],cucina:["fase","neutro","terra"]},Sf={};Object.entries(cm).forEach(([r,e])=>{Sf[r]={};let t=r==="luce"?-.12:r==="cucina"?.12:0;iy[r].forEach((n,i)=>{let s=t+(i-1)*.05;Sf[r][n]=e.map(([a,o,l])=>[a+s,o,l+s])})});var ry={luce:"lamp",prese:"socket",cucina:"oven"},sy=2.5;function ay(r,e){let{world:t,pick:n,addLabel:i,redraw:s,moved:a,FACE_ROT:o,loop:l,animate:c}=r,u=vr(),h=new qi,f=new Fe,d=new O,m=new jn(new O(0,1,0),0),x=new Be;t.add(x);let g=en.breaker,p=am(u,sy);p.group.position.set(g.x+.06+.03,1.2,g.z),p.group.rotation.y=o.e,x.add(p.group),p.picks.forEach(j=>{j.userData={...j.userData,ext:!0},n.push(j)}),i("Quadro",g.x+.6,1.55,g.z,"ctl");let T=new Be;T.position.set(.06+.015,1.1,4.25),T.rotation.y=o.e,T.scale.setScalar(1.6),ve(T,r.M.plate,0,0,0,.09,.12,.015,.006);let w=ve(T,r.M.rocker,0,0,.012,.055,.07,.016,.005),y=ve(T,r.M.plate,0,0,.004,.14,.18,.03,.006);y.visible=!1,y.userData=w.userData={id:"S",kind:"toggle",ext:!0},x.add(T),n.push(y,w),i("Interruttore",.5,1.45,4.25,"ctl");let N=new Be;N.position.set(6.15,0,5.4),ve(N,u.modWhite,0,.3,0,.36,.56,.16,.02),ve(N,u.steelDark,0,.02,0,.3,.04,.2,.006);let I=new Te({color:5974548,emissive:16734746,emissiveIntensity:0,roughness:.4});for(let j=0;j<3;j++){let J=new We(new Nn(.012,.012,.28,10),I);J.rotation.z=Math.PI/2,J.position.set(0,.2+j*.1,.085),N.add(J)}ve(N,u.steelDark,0,.3,.092,.31,.46,.006,.002).material=new Te({color:2829874,roughness:.6,metalness:.8,wireframe:!0});let D=ve(N,u.modWhite,0,.3,0,.42,.62,.22,.02);D.visible=!1,D.userData={id:"G",kind:"toggle",ext:!0},x.add(N),n.push(D),ve(x,u.modWhite,6.15,.32,5.07,.09,.09,.02,.004);let P=new We(new Nn(.008,.008,.26,8),new Te({color:1710618,roughness:.6}));P.rotation.x=Math.PI/2,P.position.set(6.15,.32,5.2),x.add(P),i("Stufetta",6.15,.95,5.4,"ctl");let S=mn(x,"12:00",2.35,.62,.66,.18,.05,{fg:"#47ff8a",dim:2236962});ve(x,u.modDark,2.35,.55,.655,.5,.36,.01,.004),S.position.z=.665,i("Forno",2.35,1.1,.7,"ctl");let E=r.M.screen;i("TV",7.4,1.35,5.15,"ctl");let R=new Rn(7252200,0,3.2,2);R.position.set(7.4,.8,5.45);let F=new Rn(16738858,0,2.6,2);F.position.set(6.15,.35,5.6),x.add(R,F);let G=Wp({add:j=>x.add(j),loop:l,animate:c,redraw:s,reduced:!!e.reduced},Sf),q=kc({add:j=>x.add(j),animate:c,redraw:s},[6.15,.35,5.45],r.lite?20:40),ee=i("Dispersione verso terra \xB7 300 mA",6.15,1.25,5.5,"leak");ee.classList.add("off");let Z={luce:!1,prese:!1,cucina:!1,loads:{},rcd:!1,plugged:!0},le=new kr(16773590,0,0,.11,.55,2);return le.target.position.set(4.5,0,4.3),x.add(le,le.target),{update(j){let J=j&&j.prova;if(!J)return;p.set(J),w.rotation.x=(J.switchOn?-1:1)*.25;let me=J.socket&&J.heaterPlugged;I.emissiveIntensity=me?3.5:0,J.heaterPlugged!==Z.plugged&&(Z.plugged=J.heaterPlugged,!J.heaterPlugged&&!e.reduced?c(320,ye=>{P.position.z=5.2+ye*.16,ye>=1&&(P.visible=!1,a())}):(P.position.z=5.2,P.visible=J.heaterPlugged,a())),E.emissive=new Pe(J.socket?2907286:0),E.emissiveIntensity=J.socket?1.1:0,R.intensity=J.socket?2.2:0,F.intensity=me?2.6:0,S.material.color.setHex(J.oven?16777215:1842204),Z.rcd&&!J.rcd.on&&G.cut(),Z.rcd=J.rcd.on,Object.keys(cm).forEach(ye=>{let Ne=!!(J.supply&&J.rcd.on&&J.lines[ye].on),Xe=!!J[ry[ye]],te=ye==="prese"&&J.leak?J.leak==="isolated"?1:.14:0;G.setLine(ye,{live:Ne,flow:Ne&&Xe?Z.loads[ye]?!0:"again":!1,earth:te}),Z.loads[ye]=Ne&&Xe}),J.leak==="isolated"?(q.play(1600),ee.classList.remove("off")):(q.stop(),ee.classList.add("off")),s()},wires:G,door(j){p.door(j),s()},windows(j){["cucina","soggiorno"].forEach(J=>r.rooms[J].wins.forEach(me=>me.emissive.setHex(16757596).multiplyScalar(j?1.2:0))),s()},torch(j){le.intensity=j?900:0,s()},aim(j,J){h.setFromCamera(f.set(j,J),r.camera),h.ray.intersectPlane(m,d)&&(le.target.position.copy(d),le.position.copy(r.camera.position),le.intensity>0&&s())},dispose(){}}}function um(r,e){let t=null,n=yf(r,{night:!0,bare:!0,noIntro:!0,start:ta.insieme,reduced:e.reduced,lite:e.lite,capture:e.capture,onBreaker(){},onControl(){},onRoom(){},onRoof(){},onPick:e.onTap,extend:i=>t=ay(i,e)});return n?{update(i){n.update(i);let s=i&&i.prova,a=r.querySelector("canvas");if(!s||!a)return;let o=(l,c)=>`Linea ${c} ${s.lines[l].tripped?"scattata":s.lines[l].on?"chiusa":"aperta"}.`;a.setAttribute("aria-label",["Appartamento di notte.",s.rcd.tripped?"Il differenziale \xE8 scattato.":s.rcd.on?"Il differenziale \xE8 armato.":"Il differenziale \xE8 aperto.",o("luce","luce"),o("prese","prese"),o("cucina","cucina"),s.heaterPlugged?"La stufetta \xE8 collegata.":"La stufetta \xE8 scollegata.",s.dark?"La casa \xE8 al buio.":s.lamp?"La luce del corridoio \xE8 accesa.":"La luce del corridoio \xE8 spenta."].join(" "))},torch(i){t&&t.torch(i)},wires:()=>t&&t.wires,door(i){t&&t.door(i)},windows(i){t&&t.windows(i)},setRoof(i,s){n.setRoof(i,!0,s)},view:i=>({...ta[i]||ta.insieme}),aim(i,s){if(!t)return;let a=r.getBoundingClientRect();t.aim((i-a.left)/a.width*2-1,-((s-a.top)/a.height)*2+1)},look(i,s){let a=typeof i=="object"?i:{...ta[i]||ta.insieme};r.clientWidth<r.clientHeight*.9&&i==="quadro"&&(a.dist=1.5),n.look(a,s)},screenOf:n.screenOf,views:Object.keys(ta),resize:n.resize,dispose:n.dispose}:null}function oy(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}var hm=r=>r*Math.PI/180,ly=r=>r*r*(3-2*r);function na(r,e){if(!oy())return null;let t=Fc(r,e.lite),n=e.bg===void 0?1448998:e.bg,i;try{i=new Hs({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.capture})}catch{return null}i.setPixelRatio(Oc(t)),i.setClearColor(n),i.toneMapping=hr,i.toneMappingExposure=e.exposure||1,i.shadowMap.enabled=!0,i.shadowMap.type=Ls,i.domElement.className="house3d",i.domElement.setAttribute("role","img"),r.appendChild(i.domElement);let s=document.createElement("div");s.className="hlabels",r.appendChild(s);let a=!0,o=0,l=!1,c=new Set,u=new Set,h=()=>{a=!0,Xe()},f=!0,d=!0,m=0,x=()=>{f=!0,h()},g=new mi;g.background=new Pe(n);let p=new Zt(38,1,.1,120),T=new Be;g.add(T);let w=new zr(13490410,7035464,.9);g.add(w);let y=new mr(i),N=.16,I,D=new Promise(V=>{I=V,setTimeout(V,4e3)});new Xs().load(Zs+"ambiente.exr",V=>{if(l){V.dispose(),y.dispose();return}g.environment=y.fromEquirectangular(V).texture,g.environmentIntensity=N,w.intensity=.12,V.dispose(),y.dispose(),I(),h()},void 0,()=>I());let P=Bc(i,g,p,{lite:t,bloom:e.bloom===void 0?.45:e.bloom}),S={ty:.8,...e.view},E={...S},R=e.limits||{yaw:[-35,35],pitch:[12,75],dist:[3,30]};function F(){let V=hm(E.pitch),ie=hm(E.yaw),_=E.dist;p.position.set(E.tx+Math.sin(ie)*Math.cos(V)*_,E.ty+Math.sin(V)*_,E.tz+Math.cos(ie)*Math.cos(V)*_),p.lookAt(E.tx,E.ty,E.tz)}function G(){let V=Math.max(1,r.clientWidth),ie=Math.max(1,r.clientHeight);i.setSize(V,ie,!1),i.domElement.style.width="100%",i.domElement.style.height="100%",P.setSize(V,ie),p.aspect=V/ie,p.fov=V/ie<.9?52:38,p.updateProjectionMatrix(),h()}let q=typeof ResizeObserver<"u"?new ResizeObserver(G):null;q&&q.observe(r);let ee=[],Z=new O;function le(V,ie,_,M,H){let $=document.createElement("div");$.className="hlabel "+(H||""),$.textContent=V,s.appendChild($);let se={el:$,v:new O(ie,_,M)};return ee.push(se),se}function j(){m++,f&&(d=!0);let V=d&&(!u.size||m%3===0);T.traverse(ie=>{!ie.isLight||!ie.castShadow||(ie.shadow.autoUpdate=!1,ie.shadow.needsUpdate=ie.isPointLight?V:f)}),V&&(d=!1),f=!1}function J(){F(),j(),P.render();let V=r.clientWidth,ie=r.clientHeight;ee.forEach(_=>{Z.copy(_.v).project(p),_.el.style.display=Z.z<1?"":"none",_.el.style.transform=`translate(-50%,-50%) translate(${(Z.x+1)/2*V}px,${(1-Z.y)/2*ie}px)`})}let me=!1,ye=!1;function Ne(V){if(o=0,!l){if(!me){ye||(ye=!0,D.then(()=>l?null:P.warm()).then(()=>{me=!0,a=!0,Xe()}));return}P.watch(V,c.size>0||!!Ie),d&&!u.size&&(a=!0),c.size&&(a=!0),c.forEach(ie=>{ie(V)||c.delete(ie)}),a&&(a=!1,J()),c.size&&Xe()}}function Xe(){!o&&!l&&(o=requestAnimationFrame(Ne))}function te(V,ie){let _=performance.now(),M=H=>{let $=Math.min(1,(H-_)/V);return ie($),$<1};return c.add(M),Xe(),M}function ue(V){let ie=performance.now(),_=M=>{let H=Math.min(.1,(M-ie)/1e3);return ie=M,V(M,H),!0};return c.add(_),u.add(_),Xe(),()=>{c.delete(_),u.delete(_),h()}}let ce=null;function he(V,ie=900){let _={...S,...V};if(ce&&c.delete(ce),e.reduced){Object.assign(E,_),h();return}let M={...E};ce=te(ie,H=>{let $=ly(H);Object.keys(_).forEach(se=>E[se]=M[se]+(_[se]-M[se])*$)})}function Me(){he({})}let Ze=new qi,Re=new Fe,at=[],nt=i.domElement;nt.style.touchAction="pan-y";let Ie=null,A=null,Ge=null,Ce=V=>{let ie=nt.getBoundingClientRect();Re.set((V.clientX-ie.left)/ie.width*2-1,-((V.clientY-ie.top)/ie.height)*2+1),Ze.setFromCamera(Re,p);let _=Ze.intersectObjects(at,!1)[0];return _&&_.object.userData&&_.object.userData.id?_.object.userData:null};nt.addEventListener("pointerdown",V=>{if(!A){Ie={x:V.clientX,y:V.clientY,yaw:E.yaw,pitch:E.pitch,moved:!1,u:Ce(V)};try{nt.setPointerCapture(V.pointerId)}catch{}Ie.u&&Ie.u.hold&&e.onPress&&(A=Ie.u,Ge=V.pointerId,e.onPress(A))}}),nt.addEventListener("pointermove",V=>{if(!Ie||A)return;let ie=V.clientX-Ie.x,_=V.clientY-Ie.y;Math.abs(ie)+Math.abs(_)>6&&(Ie.moved=!0),Ie.moved&&(ce&&(c.delete(ce),ce=null),E.yaw=Math.max(R.yaw[0],Math.min(R.yaw[1],Ie.yaw-ie*.25)),E.pitch=Math.max(R.pitch[0],Math.min(R.pitch[1],Ie.pitch+_*.2)),h())});let De=V=>{if(A&&V.pointerId!==Ge)return;let ie=Ie;if(Ie=null,A){let _=A;A=null,e.onRelease&&e.onRelease(_);return}!ie||ie.moved||!ie.u||e.onTap&&e.onTap(ie.u)};nt.addEventListener("pointerup",De),nt.addEventListener("pointercancel",V=>{if(!(A&&V.pointerId!==Ge)&&(Ie=null,A)){let ie=A;A=null,e.onRelease&&e.onRelease(ie)}}),nt.addEventListener("wheel",V=>{V.ctrlKey&&(V.preventDefault(),E.dist=Math.max(R.dist[0],Math.min(R.dist[1],E.dist+V.deltaY*.01)),h())},{passive:!1});function Ee(V){let ie=at.find(M=>M.userData&&M.userData.id===V);if(!ie)return null;ie.updateWorldMatrix(!0,!1);let _=new O().setFromMatrixPosition(ie.matrixWorld).project(p);return{x:(_.x+1)/2*r.clientWidth,y:(1-_.y)/2*r.clientHeight,visible:_.z<1}}return G(),{screenOf:Ee,THREE_scene:g,world:T,camera:p,renderer:i,lite:t,pick:at,view:E,home:S,setEnvIntensity(V){N=V,g.environment&&(g.environmentIntensity=V)},add(V){return T.add(V),V},label:le,animate:te,loop:ue,look:he,reset:Me,redraw:h,moved:x,resize:G,finish(V){zc(T,V),x()},dispose(){l=!0,o&&cancelAnimationFrame(o),q&&q.disconnect(),g.traverse(V=>{V.geometry&&V.geometry.dispose(),V.material&&(Array.isArray(V.material)?V.material:[V.material]).forEach(ie=>{Object.values(ie).forEach(_=>_&&_.isTexture&&_.dispose()),ie.dispose()})}),g.environment&&g.environment.dispose(),P.dispose(),i.dispose(),i.forceContextLoss&&i.forceContextLoss(),i.domElement.remove(),s.remove()}}}var fm={QM:2.7,KM:3,FR:3.3},Yc=3,Zc=1.28,Qr=6.8,ia=2.95,dm={1:-.05,2:-.05,3:0,4:0,5:.05,6:.05};function pm(r){let[e,t]=r.split(".");if(e==="Q"){let i=["L1","L2","L3","N","PE"].indexOf(t);return i<0?null:{p:[2.58+i*.07,2.16,.21],zone:"cab"}}if(fm[e]&&dm[t]!==void 0)return{p:[fm[e]+dm[t],Number(t)%2?2:1.68,.21],zone:"cab"};if(e==="KM"){let i={A1:[2.88,1.86],A2:[3.12,1.86],13:[2.88,1.76],14:[3.12,1.76]}[t];return i?{p:[i[0],i[1],.21],zone:"cab"}:null}if(e==="FR"){let i={95:[3.25,1.6],96:[3.31,1.6],97:[3.37,1.6],98:[3.43,1.6]}[t];return i?{p:[i[0],i[1],.21],zone:"cab"}:null}let n={SB1:[6.31,1.75],SB0:[6.49,1.75],SBE:[6.4,1.5],H:[6.4,2]}[e];if(n){let i={1:-.02,3:-.02,X1:-.02,2:.02,4:.02,X2:.02}[t];return i===void 0?null:{p:[n[0]+i,n[1],5.4],zone:"st"}}if(e==="PLC"){let i=["A1","A2","IC","I0","I1","I2","I3"].indexOf(t),s=["Q0A","Q0B","Q1A","Q1B"].indexOf(t);return i>=0?{p:[Yc-.135+i*.045,Zc+.075,.21],zone:"cab"}:s>=0?{p:[Yc-.075+s*.05,Zc-.075,.21],zone:"cab"}:null}if(e==="PH"){let i={1:-.03,2:-.01,3:.01,4:.03}[t];return i===void 0?null:{p:[Qr+i,.86,ia],zone:"ph"}}if(e==="FC"){let i={1:-.03,2:-.01,3:.01,4:.03}[t];return i===void 0?null:{p:[8.68+i,1,3.84],zone:"fc"}}if(e==="M"){let i={U:-.04,V:0,W:.04,PE:.08}[t];return i===void 0?null:{p:[8.6+i,.95,4.37],zone:"mot"}}return null}var cy={st:[6.4,5.4],fc:[8.68,3.84],mot:[8.6,4.37],ph:[Qr,ia]};function uy(r,e,t=0){let n=pm(r),i=pm(e);if(!n||!i)return null;let s=(t%9-4)*.022,a=.21+.03+Math.abs(s)*.6;if(n.zone==="cab"&&i.zone==="cab"){let h=Math.min(n.p[1],i.p[1])-.06-t%4*.025;return[n.p,[n.p[0],n.p[1],a],[n.p[0],h,a],[i.p[0],h,a],[i.p[0],i.p[1],a],i.p]}let o=3.05+s*.3;if(n.zone!=="cab"&&i.zone!=="cab"){if(n.zone===i.zone){let h=Math.max(n.p[1],i.p[1])+.08+t%3*.03;return[n.p,[n.p[0],h,n.p[2]-.03],[i.p[0],h,i.p[2]-.03],i.p]}return[...Ef(n,s,o).reverse(),...Ef(i,s,o)]}let[l,c]=n.zone==="cab"?[n,i]:[i,n],u=[l.p,[l.p[0],l.p[1],a],[l.p[0],o,a],[l.p[0],o,.4+s],...Ef(c,s,o)];return n.zone==="cab"?u:u.reverse()}function Ef(r,e,t){let n=cy[r.zone][0]+e;return[[n,t,.4+e],[n,t,r.p[2]],[r.p[0],t,r.p[2]],r.p]}function Kc(r,e){let t=[];return(r||[]).forEach((n,i)=>{let s=uy(n.a,n.b,i);if(!s)return;let a=e&&e.wires&&e.wires[n.id]||{},o=!!a.current;t.push({id:String(n.id)+":"+n.a+"-"+n.b,pts:s,color:n.c,live:a.net==="fase"||a.net==="neutro"&&o,current:o})}),t}var qt={z0:4.9,z1:7.5,h:2.8},wf=180,mm=17,Ti=3.6,xo={sun:{color:7308996,intensity:.12,pos:[7,9,-6]},mood:{sun:[.06,.1],cold:6124720,warm:10466016,env:[.03,.05]},sunShadow:!1,windows:.06,rowsOn:[2],bg:461588,exposure:1};function ra(r,e,t={}){let{world:n,lite:i}=r,s=t.sun||{},a=new Wi(s.color||14674175,s.intensity||1.5);a.position.set(...s.pos||[7,9,-6]),a.target.position.set(5.5,0,3.5),a.castShadow=t.sunShadow!==!1,a.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(a.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:30}),a.shadow.bias=-4e-4,a.shadow.normalBias=.02,a.shadow.radius=4,n.add(a,a.target);let o=t.shadowRow===void 0?2:t.shadowRow,l=[[3.2,3.4],[6,6.2],[6,3.4],[8.8,3.4]].map(([P,S],E)=>{let R=new Rn(16773336,mm,14,2);R.position.set(P,3.2,S),!i&&E===o&&(R.castShadow=!0,R.shadow.mapSize.set(512,512),R.shadow.bias=-.002),n.add(R),ve(n,e.steelDark,P,3.3,S,.9,.05,.16,.01);let F=new Te({color:16777215,emissive:16773336,emissiveIntensity:2.4}),G=new We(new zt(.8,.02,.1),F);return G.position.set(P,3.27,S),G.userData.lamp=E,n.add(G),{light:R,mat:F,level:1}});function c(P,S){P.level=S,P.light.intensity=mm*S,P.mat.emissiveIntensity=.05+2.35*S,P.mat.color.setScalar(.35+.65*S)}let u=P=>!t.rowsOn||t.rowsOn.includes(P);t.rowsOn&&l.forEach((P,S)=>{u(S)||c(P,0)});let h=t.mood||{sun:[.55,.95],cold:10466528,warm:14674175,env:[.1,.12]},f=new Pe(h.warm);function d(){let P=l.reduce((S,E)=>S+E.level,0)/l.length;a.intensity=h.sun[0]+h.sun[1]*P,a.color.setHex(h.cold).lerp(f,P),r.setEnvIntensity(h.env[0]+h.env[1]*P),r.redraw()}t.windows!==void 0&&(e.windowGlow.emissiveIntensity=t.windows,t.windows<.2&&e.windowGlow.color.setHex(1844790)),t.exposure!==void 0&&r.renderer&&(r.renderer.toneMappingExposure=t.exposure),t.bg!==void 0&&r.THREE_scene&&r.THREE_scene.background&&r.THREE_scene.background.setHex(t.bg);let m=new We(new Nt(14,11),e.concrete);m.rotation.x=-Math.PI/2,m.position.set(5.5,0,4),m.receiveShadow=!0,e.concrete.map.repeat.set(3,2.4),e.concrete.bumpMap.repeat.set(10,8),n.add(m);let x=new Te({color:3816770,roughness:.95}),g=new We(new Nt(14,22),x);g.rotation.x=-Math.PI/2,g.position.set(-8.6,-.005,4),g.receiveShadow=!0,n.add(g),ve(n,e.wall,5.5,Ti/2,-.1,12,Ti,.2,.01),ve(n,e.wall,-.1,Ti/2,(-.5+qt.z0)/2,.2,Ti,qt.z0+.5,.01),ve(n,e.wall,-.1,Ti/2,(qt.z1+8.5)/2,.2,Ti,8.5-qt.z1,.01),ve(n,e.wall,-.1,(qt.h+Ti)/2,(qt.z0+qt.z1)/2,.2,Ti-qt.h,qt.z1-qt.z0,.01),ve(n,e.wall,11.6,Ti/2,4,.2,Ti,9,.01),ve(n,e.wallBase,5.5,.55,-0,12,1.1,.04,.005),ve(n,e.wallBase,-0,.55,(-.5+qt.z0)/2,.04,1.1,qt.z0+.5,.005),[[7.6,4.2],[11,2]].forEach(([P,S])=>{let E=new We(new Nt(S-.4,1),e.windowGlow);E.position.set(P,2.55,.016),n.add(E),ve(n,e.frame,P,2.55,.03,S-.3,.06,.04,.005),ve(n,e.frame,P,3.05,.03,S-.3,.06,.04,.005),ve(n,e.frame,P,2.05,.03,S-.3,.06,.04,.005)});let p=(()=>{let P=document.createElement("canvas");P.width=64,P.height=256;let S=P.getContext("2d",{willReadFrequently:!0});S.fillStyle="#8b939b",S.fillRect(0,0,64,256);for(let R=0;R<256;R+=16)S.fillStyle="#5d646b",S.fillRect(0,R,64,3),S.fillStyle="#a9b0b7",S.fillRect(0,R+3,64,2);let E=new $t(P);return E.wrapS=E.wrapT=Xt,E.colorSpace=Rt,E})(),T=new Te({map:p,roughness:.45,metalness:.6}),w=new We(new zt(.05,1,qt.z1-qt.z0-.02),T);w.castShadow=!0,w.receiveShadow=!0,n.add(w),ve(n,e.steelDark,-.24,qt.h+.16,(qt.z0+qt.z1)/2,.3,.32,qt.z1-qt.z0+.1,.03);let y=1;function N(P){y=P;let S=Math.max(.02,qt.h*(1-P));w.scale.y=S,p.repeat.set(1,S/.9),w.position.set(-.12,qt.h-S/2,(qt.z0+qt.z1)/2),w.visible=P<.995,r.moved()}N(1);let I=(P,S,E,R)=>{let F=new We(new Nt(E,R),e.hazard);F.rotation.x=-Math.PI/2,F.position.set(P,.004,S),F.receiveShadow=!0,n.add(F)};I(5.6,2.6,7.2,.14),I(5.6,4.9,7.2,.14),I(2,3.75,.14,2.4),I(9.2,3.75,.14,2.4),e.hazard.map.repeat.set(7,1);let D=(P,S,E,R)=>{let F=Math.abs(E-P)>Math.abs(R-S),G=Math.abs(F?E-P:R-S),q=(P+E)/2,ee=(S+R)/2,Z=.26,le=3.05-.05;ve(n,e.steelDark,q,le,ee,F?G:Z,.012,F?Z:G,.003),[-1,1].forEach(j=>ve(n,e.steelDark,F?q:q+j*Z/2,le+.035,F?ee+j*Z/2:ee,F?G:.012,.07,F?.012:G,.003))};return D(2.5,.4,8.9,.4),D(6.4,.4,6.4,5.4),D(8.68,.4,8.68,4.4),[3,5,7,8.9].forEach(P=>ve(n,e.steelDark,P,3.05+.25,.4,.02,.5,.02,.003)),{sun:a,rows:l,shutter:w,setRow:c,mood:d,setShutter:N,tray:D,shutterK:()=>y,lampsOn(P=1){if(t.reduced){l.forEach((R,F)=>c(R,u(F)?P:0)),d();return}let S=R=>R<0?0:R<50?.7:R<100?.05:R<150?1:R<190?.35:1,E=wf*l.length+260;r.animate(E,R=>{l.forEach((F,G)=>c(F,u(G)?P*S(R*E-G*wf):0)),d()})},shutterTo(P,S=1600){let E=y,R=P?1:0;if(t.reduced||S<=1){N(R);return}r.animate(S,F=>N(E+(R-E)*(F*F*(3-2*F))))}}}var jt={x0:2.6,x1:8.6,z:3.4,h:.8,w:.7},Qc=.9,$c=2.95;var vo={insieme:{tx:5.6,ty:.9,tz:3.4,yaw:18,pitch:28,dist:15},pulsantiera:{tx:6.4,ty:1.5,tz:5.5,yaw:8,pitch:8,dist:2.9},quadro:{tx:3,ty:1.75,tz:.4,yaw:6,pitch:6,dist:2.6},motore:{tx:8.6,ty:.85,tz:3.6,yaw:-30,pitch:18,dist:5.2},esterno:{tx:.4,ty:1.5,tz:6.2,yaw:-78,pitch:7,dist:9.5},turno:{tx:5.8,ty:1,tz:3.6,yaw:26,pitch:34,dist:13.5}};function gm(r,e){let t=na(r,{bg:1910328,exposure:1.25,view:vo.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[2.5,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:e.onTap,onPress:e.onPress,onRelease:e.onRelease});if(!t)return null;let{world:n,pick:i,lite:s}=t,a=vr();t.setEnvIntensity(.22);let o=ra(t,a,{reduced:e.reduced}),{rows:l,setRow:c,mood:u,setShutter:h,shutter:f}=o,d=Js(a,{x0:jt.x0,x1:jt.x1,h:jt.h,w:jt.w});d.group.position.z=jt.z,n.add(d.group);let m=om(a);m.position.set($c,jt.h+.0125,jt.z),n.add(m);let x=new Be;x.position.set(8.68,jt.h+.2,jt.z+.52),ve(x,a.steelDark,0,-.22,0,.05,.4,.05,.005),ve(x,a.modGrey,0,0,0,.12,.12,.1,.01);let g=new Be;g.position.set(-.05,0,-.03),ve(g,a.steel,-.02,0,-.26,.02,.02,.5,.004),_t(g,a.red,-.02,0,-.5,.035,.03,"y",18),x.add(g),n.add(x);let p=new We(new Wn(.012,10,8),new Te({color:3811845,emissive:16757018,emissiveIntensity:0}));p.position.set(.03,0,.055),x.add(p);let T=qc(a);T.group.rotation.y=Math.PI,T.group.position.set(jt.x1,jt.h-.07,4.35),n.add(T.group),ve(n,a.frame,jt.x1,.27,4.35,.36,.54,.46,.01),_t(n,a.steelDark,jt.x1,jt.h-.07,3.92,.04,.12,"z");let w=kc({add:V=>n.add(V),animate:t.animate,redraw:t.redraw},[jt.x1,jt.h+.15,4.45],s?18:34),y=Qs(a,1.45);y.group.position.set(9.6,0,2.2),n.add(y.group);let N=$s(a);N.group.position.set(6.4,0,5.5),N.group.scale.setScalar(1.25),n.add(N.group),N.picks.forEach(V=>i.push(V));let I=bn(3073642,.028);I.mesh.position.set(0,1.56,0),N.group.add(I.mesh);let D=ea(a);D.group.position.set(3,1.5,.07),n.add(D.group),D.picks.forEach(V=>i.push(V));let P=new Be;P.position.set(2.7,1.66,.27);let S=new We(new Ur(.022,.005,8,18,Math.PI),a.steel);S.position.y=.03,P.add(S),ve(P,a.red,0,0,0,.05,.045,.022,.006);let E=mn(P,"Lavori in corso",0,-.1,.015,.16,.08,{bg:"#f5c400",fg:"#17181a",size:.36,dim:16777215});E.material.side=sn,P.scale.setScalar(1e-4),n.add(P);let R=6,F=new un(new zt(.48,.34,.38),a.cardboard,R);F.count=0,F.frustumCulled=!1,n.add(F);let G=(()=>{let V=document.createElement("canvas");V.width=V.height=64;let ie=V.getContext("2d",{willReadFrequently:!0}),_=ie.createRadialGradient(32,32,4,32,32,31);return _.addColorStop(0,"rgba(0,0,0,0.55)"),_.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=_,ie.fillRect(0,0,64,64),new $t(V)})(),q=new un(new Nt(.7,.56).rotateX(-Math.PI/2),new Ut({map:G,transparent:!0,depthWrite:!1}),R);q.count=0,q.frustumCulled=!1,q.renderOrder=1,n.add(q);let ee=new Ye,Z=new xn,le=new O,j=new O;m.traverse(V=>{V.isMesh&&(V.castShadow=!1)});let J=new We(new Nt(.7,.56).rotateX(-Math.PI/2),q.material);J.position.y=-.01,J.renderOrder=1,m.add(J);let me=js({add:V=>n.add(V),redraw:t.redraw,reduced:e.reduced,loop:V=>{let ie=t.loop(()=>{V()===!1&&ie()})}});t.label("Nastro",4.8,1.25,3.4,"room"),t.label("Motore",8.9,1.35,4.35,"room"),t.label("Finecorsa",8.7,1.4,3.9,"room"),t.label("Quadro",3,2.3,.3,"room"),t.label("Pulsantiera",6.4,2.25,5.5,"room");let ye=0,Ne=0,Xe=!1,te=0,ue=!1,ce=null,he=$c,Me=!1,Ze=!1,Re=!1,at=0,nt=0,Ie=null,A=T.group.position.y;function Ge(){ce||(ce=t.loop((V,ie)=>{let _=Ne-ye;if(ye+=Math.abs(_)<.001?_:_*Math.min(1,ie*7),Re||(m.position.x=$c+ye*Qc,m.rotation.z=Me?-.14+Math.sin(V/40)*.02:0,he=m.position.x),(Xe||Re)&&d.run(Qc,ie),(te||Re)&&T.spin(te||6,ie),T.group.position.y=A+(ue||Me?Math.sin(V/22)*(Me?.006:.0035):0),Ze&&(y.set({yellow:Math.floor(V/320)%2===0,red:!1,green:Ie&&Ie.lamp}),V-nt>1300&&(nt=V,w.play(900))),Re){at+=ie;let M=jt.x1-jt.x0-.5,H=M/R;for(let $=0;$<R;$++){let se=(at*Qc+$*H)%M,ae=jt.x0+.25+se,Oe=Math.min(1,se/.25,(M-se)/.25);j.setScalar(Math.max(.001,Oe)),le.set(ae,jt.h+.0125+.17*Oe,jt.z),ee.compose(le,Z,j),F.setMatrixAt($,ee),le.set(ae,jt.h+.002,jt.z),ee.compose(le,Z,j),q.setMatrixAt($,ee)}F.instanceMatrix.needsUpdate=!0,q.instanceMatrix.needsUpdate=!0}!Xe&&!te&&!ue&&!Me&&!Ze&&!Re&&Math.abs(Ne-ye)<.002&&(ce(),ce=null)}))}t.finish([m,x,T.group,y.group,f,P,F,q]);let Ce=V=>{let ie={...vo[V]||vo.insieme};return t.camera.aspect<.9&&(V==="insieme"||V==="turno"||!vo[V])&&(ie.dist=10.5,ie.yaw=24),t.camera.aspect<.9&&V==="esterno"&&(ie.dist=13),ie},De=!0,Ee=!0;return t.camera.aspect<.9&&t.look(Ce("insieme"),1),{update(V){if(!V)return;Ie=V,Ne=Math.max(0,Math.min(V.length,V.pos)),De&&(ye=Ne,m.position.x=he=$c+ye*Qc,De=!1,t.moved()),Xe=V.motor==="fwd"&&!V.atEnd,te=V.motor==="fwd"?6:0,ue=V.motor==="hum",Me=!!V.overload&&V.motor==="fwd",Ze=V.thermal.tripped&&V.motor==="fwd",!Me&&m.rotation.z!==0&&(m.rotation.z=0,t.moved()),T.set({heat:Math.max(V.thermal.heat*.9,Me?.35:0,Ze?.8:0)}),g.rotation.y!==(V.atEnd?.55:0)&&(g.rotation.y=V.atEnd?.55:0,t.moved()),p.material.emissiveIntensity=V.atEnd?3:0,Re?y.set({green:!0}):Ze||y.set({green:V.lamp,red:V.thermal.tripped||V.emergency,yellow:!V.qm&&V.supply?!0:V.overload&&!V.thermal.tripped&&V.motor==="fwd"}),N.set(V),D.set(V),I.set(!!V.lamp||Re,3.2);let ie=V.qm?1e-4:1;P.scale.x!==ie&&(P.scale.setScalar(ie),t.moved()),V.wires&&(me.sync(Kc(V.wires,V.flow),!Ee),Ee=!1),Ge(),t.redraw(),r.querySelector("canvas").setAttribute("aria-label","Officina con il nastro trasportatore. "+(V.motor==="fwd"?"Il nastro \xE8 in marcia.":V.motor==="hum"?"Il motore ronza e non parte.":"Il nastro \xE8 fermo.")+(V.thermal.tripped?" Il termico \xE8 scattato.":"")+(V.emergency?" L\u2019emergenza \xE8 premuta.":"")+(V.atEnd?" Il pacco \xE8 a fine corsa.":"")+(V.qm?"":" Il salvamotore \xE8 aperto: lavori in corso."))},look(V,ie){t.look(Ce(V),ie)},outside(){h(0),l.forEach(V=>c(V,0)),u(),t.look(Ce("esterno"),1)},inside(){h(1),l.forEach(V=>c(V,1)),u()},shutter(V,ie=1600){o.shutterTo(V,ie)},lampsOn(){o.lampsOn()},shift(V){Re=!!V,at=0,F.count=q.count=V?R:0,m.visible=!V,t.moved(),V?(y.set({green:!0}),I.set(!0,3.2),Ge()):Ie&&this.update(Ie),t.redraw()},wires:()=>me,stats(){let V={},ie=new gi().setFromProjectionMatrix(new Ye().multiplyMatrices(t.camera.projectionMatrix,t.camera.matrixWorldInverse));return t.THREE_scene.traverseVisible(_=>{if(!_.isMesh&&!_.isPoints||_.frustumCulled&&_.geometry.boundingSphere!==void 0&&!ie.intersectsObject(_))return;let M=_,H="";for(;M&&M.parent&&!H;)M.parent===t.world&&(H=M.name||M.type+(M.children.length?"["+M.children.length+"]":"")),M=M.parent;let $=H+" \xB7 "+(_.isInstancedMesh?"inst ":"")+(_.material.transparent?"trasp ":"")+_.material.type+(_.material.type==="ShaderMaterial"?"":" "+_.geometry.attributes.position.count);V[$]=(V[$]||0)+1}),{by:V}},screenOf:t.screenOf,views:Object.keys(vo),resize:t.resize,dispose(){ce&&ce(),t.dispose()}}}var St={x0:2.6,x1:8.6,z:3.4,h:.8,w:.7},eu=.6,Ht={x0:8.62,x1:9.3,y0:St.h,y1:.42,len:.75},Ri={x:9.85,z:St.z,y:.14},$r={w:.48,h:.34,d:.38},bo=8,tu=8,_o={insieme:{tx:6,ty:.9,tz:3.4,yaw:16,pitch:27,dist:14.5},pulsantiera:{tx:6.4,ty:1.5,tz:5.5,yaw:8,pitch:8,dist:2.9},quadro:{tx:3,ty:1.5,tz:.4,yaw:6,pitch:6,dist:2.7},plc:{tx:3,ty:1.3,tz:.3,yaw:4,pitch:4,dist:1.5},fotocellula:{tx:6.8,ty:1,tz:3.4,yaw:-28,pitch:20,dist:3.6},bancale:{tx:9.4,ty:.7,tz:3.4,yaw:-34,pitch:22,dist:4.2},esterno:{tx:.4,ty:1.5,tz:6.2,yaw:-78,pitch:9,dist:9.5},turno:{tx:6.6,ty:1,tz:3.6,yaw:24,pitch:32,dist:13}};function xm(r,e){let t=na(r,{bg:8362941,exposure:1.2,view:_o.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[1.2,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:e.onTap,onPress:e.onPress,onRelease:e.onRelease});if(!t)return null;let{world:n,pick:i}=t,s=vr();s.windowGlow.emissiveIntensity=1.6;let a=ra(t,s,{reduced:e.reduced,sun:{color:16773594,intensity:2.4,pos:[6.5,12,-5]},mood:{sun:[1.9,.6],cold:16771528,warm:16774370,env:[.26,.08]}});a.rows.forEach(_=>a.setRow(_,.45)),a.mood(),a.tray(Qr,.4,Qr,ia);let o=Js(s,{x0:St.x0,x1:St.x1,h:St.h,w:St.w});o.group.position.z=St.z,n.add(o.group);let l=St.x0+.25;ve(n,s.frame,l-.35,.9,St.z,1.3,1.8,1.2,.02),ve(n,s.modDark,l+.31,St.h+.24,St.z,.02,.48,.78,.004),ve(n,s.yellow,l+.32,St.h+.52,St.z,.03,.06,.9,.004),mn(n,"Confezionatrice",l-.35,1.55,St.z+.61,.9,.12,{bg:"#e3b61f",fg:"#17181a",size:.5,dim:16777215});let c=Math.atan2(Ht.y0-Ht.y1,Ht.x1-Ht.x0),u=new Be;u.position.set(Ht.x0,Ht.y0-.05,St.z),u.rotation.z=-c;let h=Math.hypot(Ht.x1-Ht.x0,Ht.y0-Ht.y1);[-1,1].forEach(_=>ve(u,s.frame,h/2,0,_*.4,h,.06,.04,.006));for(let _=0;_<6;_++)_t(u,s.steel,.06+_*(h-.12)/5,.01,0,.025,.76,"z",12);n.add(u),[Ht.x0+.05,Ht.x1-.05].forEach((_,M)=>ve(n,s.frame,_,(M?Ht.y1:Ht.y0)/2-.04,St.z+.4,.04,(M?Ht.y1:Ht.y0)-.08,.04,.005));let f=new Te({color:10844746,roughness:.85});[-.42,0,.42].forEach(_=>ve(n,f,Ri.x,.05,Ri.z+_,1,.1,.12,.006)),[-.4,-.13,.13,.4].forEach(_=>ve(n,f,Ri.x+_,.12,Ri.z,.12,.04,.96,.004));let d=lm(s,St.w+.2,.97);d.group.position.set(Qr,0,ia),n.add(d.group);let m=qc(s);m.group.rotation.y=Math.PI,m.group.position.set(St.x1,St.h-.07,4.35),n.add(m.group),ve(n,s.frame,St.x1,.27,4.35,.36,.54,.46,.01),_t(n,s.steelDark,St.x1,St.h-.07,3.92,.04,.12,"z");let x=Qs(s,1.45);x.group.position.set(9.6,0,2.2),n.add(x.group);let g=$s(s);g.group.position.set(6.4,0,5.5),g.group.scale.setScalar(1.25),n.add(g.group),g.picks.forEach(_=>i.push(_));let p=bn(16777215,.028);p.mat.color.setHex(3815994),p.mat.emissive.setHex(16774084),p.mesh.position.set(0,1.56,0),g.group.add(p.mesh);let T=ea(s);T.group.position.set(3,1.5,.07),n.add(T.group),T.picks.forEach(_=>i.push(_));let w=jc(s);w.group.position.set(Yc-3,Zc-1.5,.05),T.group.add(w.group);let y=new Be;y.position.set(2.7,1.66,.27);let N=new We(new Ur(.022,.005,8,18,Math.PI),s.steel);N.position.y=.03,y.add(N),ve(y,s.red,0,0,0,.05,.045,.022,.006);let I=mn(y,"Lavori in corso",0,-.1,.015,.16,.08,{bg:"#f5c400",fg:"#17181a",size:.36,dim:16777215});I.material.side=sn,y.scale.setScalar(1e-4),n.add(y);let D=new zt($r.w,$r.h,$r.d),P=new un(D,s.cardboard,bo),S=new un(D,s.cardboard,tu),E=(()=>{let _=document.createElement("canvas");_.width=_.height=64;let M=_.getContext("2d",{willReadFrequently:!0}),H=M.createRadialGradient(32,32,4,32,32,31);return H.addColorStop(0,"rgba(0,0,0,0.55)"),H.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=H,M.fillRect(0,0,64,64),new $t(_)})(),R=new un(new Nt(.7,.56).rotateX(-Math.PI/2),new Ut({map:E,transparent:!0,depthWrite:!1}),bo+tu);R.renderOrder=1,[P,S,R].forEach(_=>{_.castShadow=!1,_.receiveShadow=_!==R,_.frustumCulled=!1}),S.count=0,n.add(P,S,R);let F=new Ye,G=new xn,q=new xn,ee=new O,Z=new O,le=new O(0,0,1);q.setFromAxisAngle(le,-c);let j=new Ye().makeScale(1e-4,1e-4,1e-4);function J(_){let M=St.x1-St.x0;if(_<=M)return{x:St.x0+_,y:St.h+$r.h/2,rot:!1,by:St.h+.002};let H=(_-M)/Ht.len;return H>=1?null:{x:Ht.x0+H*(Ht.x1-Ht.x0),y:Ht.y0+H*(Ht.y1-Ht.y0)+$r.h/2-.02,rot:!0,by:.004}}function me(_){let M=Math.floor(_/4),H=_%4;return[Ri.x+(H%2?.25:-.25),Ri.y+$r.h/2+M*$r.h,Ri.z+(H<2?-.2:.2)]}let ye=-1,Ne=-1;function Xe(_,M,H,$=0){let ae=St.x1-St.x0+Ht.len+H/2,Oe=Math.max(0,Math.ceil((_-H/2-ae)/M)),we=0,je=0;for(let Le=0;Le<bo;Le++){let Ve=Oe+Le,Ke=_-Ve*M-H/2,Ue=Ke>-H?J(Ke):null;if(!Ue||Ke<.35){P.setMatrixAt(Le,j),R.setMatrixAt(je++,j);continue}ee.set(Ue.x,Ue.y,St.z),F.compose(ee,Ue.rot?q:G,Z.setScalar(1)),P.setMatrixAt(Le,F),ee.set(Ue.x,Ue.by,St.z),F.compose(ee,G,Z.setScalar(1)),R.setMatrixAt(je++,F),we++}let et=Math.max(0,Oe-$),ge=et?(et-1)%tu+1:0;if(ge!==Ne){Ne=ge,S.count=ge;for(let Le=0;Le<tu;Le++)if(Le<ge){let Ve=me(Le);ee.set(...Ve),F.compose(ee,G,Z.setScalar(1)),S.setMatrixAt(Le,F),ee.set(Ve[0],Ri.y+.002,Ve[2]),F.compose(ee,G,Z.setScalar(Le<4?.8:1e-4)),R.setMatrixAt(bo+Le,F)}else R.setMatrixAt(bo+Le,j);S.instanceMatrix.needsUpdate=!0}P.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,ye=we}let te=js({add:_=>n.add(_),redraw:t.redraw,reduced:e.reduced,loop:_=>{let M=t.loop(()=>{_()===!1&&M()})}});t.label("Nastro",5,1.3,3.4,"room"),t.label("Fotocellula",Qr,1.35,ia,"room"),t.label("Bancale",Ri.x,.95,Ri.z,"room"),t.label("Quadro e PLC",3,2.3,.3,"room"),t.label("Pulsantiera",6.4,2.25,5.5,"room");let ue=null,ce=0,he=!1,Me=null,Ze=null,Re=!1,at=0,nt="",Ie={gap:1.4,size:.48},A=0;function Ge(){Me||(Me=t.loop((_,M)=>{he||Re?ue=Re?ue+eu*M:Math.min(ue+eu*M,ce+eu*.55):ue+=(ce-ue)*Math.min(1,M*8),!he&&!Re&&Math.abs(ce-ue)<.002&&(ue=ce),Xe(ue,Ie.gap,Ie.size,Re?A:0),(he||Re)&&(o.run(eu,M),m.spin(6,M));let H=_<at;H?x.set({yellow:Math.floor(_/320)%2===0,red:!1,green:!1}):nt==="alarm"&&(nt="",Ce()),!he&&!Re&&!H&&ue===ce&&(Me(),Me=null)}))}function Ce(){let _=Ze;if(_){if(Re){x.set({green:!0});return}x.set({green:_.motor==="fwd",red:_.thermal.tripped||_.emergency,yellow:!_.qm&&_.supply||_.lamp})}}t.finish([m.cap.parent,a.shutter,y,P,S,R]);let De=_=>{if(typeof _=="object")return{..._};let M={..._o[_]||_o.insieme};return t.camera.aspect<.9&&(_==="insieme"||_==="turno"||!_o[_])&&(M.dist=10.5,M.yaw=22),t.camera.aspect<.9&&_==="esterno"&&(M.dist=13),M};t.camera.aspect<.9&&t.look(De("insieme"),1);let Ee=!0,V="",ie=r.querySelector("canvas");return{update(_){if(!_)return;let M=Ze;Ze=_,Ie.gap=_.gap,Ie.size=_.size,ce=_.lead,(ue===null||ce<ue-.5)&&(ue=ce,Ne=-1,Xe(ue,Ie.gap,Ie.size),t.moved()),he=_.motor==="fwd",m.set({heat:_.thermal.heat*.9}),g.set(_),T.set(_),d.set(_);let H=w.set(_.plc);p.set(!!_.lamp||Re,3.2);let $=_.qm?1e-4:1;y.scale.x!==$&&(y.scale.setScalar($),t.moved()),nt!=="alarm"&&Ce();let se=[_.motor,_.lamp,_.beam,_.qm,_.thermal.tripped,Math.round(_.thermal.heat*20),_.emergency,_.start,_.stop,_.contactor].join();if(_.wires){let ae=Kc(_.wires,_.flow).map(we=>({...we,current:we.current&&he})),Oe=ae.map(we=>we.id+(we.live?"+":"-")+(we.current?">":"")).join();Oe!==V&&(V=Oe,te.sync(ae,!Ee),Ee=!1)}_._sig=se,(he||ue!==ce)&&Ge(),(!M||se!==M._sig||H||ue!==ce)&&t.redraw(),ie&&ie.setAttribute("aria-label",["Linea di confezionamento.",_.motor==="fwd"?"Il nastro \xE8 in marcia.":"Il nastro \xE8 fermo.",_.lamp?"La spia del lotto pieno \xE8 accesa.":"La spia del lotto pieno \xE8 spenta.",_.beam?"Un pacco \xE8 davanti alla fotocellula.":"Davanti alla fotocellula non c\u2019\xE8 nessun pacco.",_.plc.on?"Il PLC \xE8 acceso.":"Il PLC \xE8 spento.",_.emergency?"L\u2019emergenza \xE8 premuta.":"",_.thermal.tripped?"Il termico \xE8 scattato.":"",_.qm?"":"Il salvamotore \xE8 aperto: lavori in corso."].filter(Boolean).join(" "))},look(_,M){t.look(De(_),M)},outside(){a.setShutter(1),t.look(De("esterno"),1)},inside(){a.setShutter(1)},arrival(){return t.look(De("insieme"),2600),2800},alert(_=2600){nt="alarm",at=performance.now()+(e.reduced?0:_),Ge(),t.redraw()},shift(_){Re=!!_,_?(A=Math.max(0,Math.ceil((ue-Ie.size/2-(St.x1-St.x0+Ht.len+Ie.size/2))/Ie.gap)),Ne=-1,x.set({green:!0}),p.set(!0,3.2),Ge()):(Ne=-1,ue=ce,Xe(ue,Ie.gap,Ie.size),Ze&&(Ce(),p.set(!!Ze.lamp,3.2))),t.moved(),t.redraw()},wires:()=>te,stats(){let _={},M=new gi().setFromProjectionMatrix(new Ye().multiplyMatrices(t.camera.projectionMatrix,t.camera.matrixWorldInverse));return t.THREE_scene.traverseVisible(H=>{if(!H.isMesh&&!H.isPoints||H.frustumCulled&&H.geometry.boundingSphere!==void 0&&!M.intersectsObject(H))return;let $=H,se="";for(;$&&$.parent&&!se;)$.parent===t.world&&(se=$.name||$.type+($.children.length?"["+$.children.length+"]":"")),$=$.parent;let ae=se+" \xB7 "+(H.isInstancedMesh?"inst ":"")+(H.material.transparent?"trasp ":"")+H.material.type+(H.material.type==="ShaderMaterial"?"":" "+H.geometry.attributes.position.count);_[ae]=(_[ae]||0)+1}),{by:_,parcels:ye}},screenOf:t.screenOf,views:Object.keys(_o),resize:t.resize,dispose(){Me&&Me(),t.dispose()}}}var gn={pick:-1.1,place:1.1,beamY:2.2,stroke:.8,toolTop:1.7,toolLow:.9,toolZ:.22,partH:.14};function sa(r,e){let t=new Be,n=ve(t,r.modGrey,0,0,0,.06,.09,.05,.006),i=ve(t,r.modDark,0,.055,0,.04,.02,.04,.004),s=new Be;s.position.set(0,.06,0);let a=e.lever||.07;ve(s,r.steel,0,a/2,0,.008,a,.008,.002),_t(s,r.red,0,a,0,.012,.012,"z",12),e.dir&&(s.rotation.z=e.dir),t.add(s);let o=bn(16762394,.009);o.mesh.position.set(0,.015,.027),t.add(o.mesh),[n,i].forEach(c=>{c.userData={id:e.id,kind:"repair"}});let l=null;return{group:t,picks:[n,i],arm:s,set(c){let u=!!(c&&c.sensors&&c.sensors[e.id]&&c.sensors[e.id].act);return u===l?!1:(l=u,o.set(u,3.4),s.rotation.x=u?.35:0,!0)}}}function vm(r){let e=new Be,t=new Te({color:14710303,roughness:.45,metalness:.2}),n=-1.45,i=1.45,s=gn.beamY;[n,i].forEach(m=>{ve(e,r.steelDark,m,.015,0,.32,.03,.32,.004),ve(e,t,m,s/2,0,.12,s,.12,.01)}),ve(e,t,0,s+.08,0,i-n+.12,.16,.16,.012),ve(e,r.steel,0,s-.005,.085,i-n-.1,.02,.012,.003),ve(e,r.steelDark,0,s+.17,0,i-n-.2,.025,.06,.004);let a=new Be;a.position.set(gn.pick,s,.14),ve(a,r.modGrey,0,.02,0,.26,.22,.12,.012),ve(a,r.modDark,0,.16,-.02,.12,.08,.08,.008);let o=new Be;a.add(o),_t(o,r.steel,0,.175,.08,.022,1.25,"y",14),ve(o,r.modDark,0,-.44,.08,.12,.05,.1,.008);let l=[-1,1].map(m=>ve(o,r.steelDark,m*.06,-.5,.08,.02,.12,.06,.004));e.add(a);let c={XP:sa(r,{id:"XP",dir:-Math.PI/2}),XL:sa(r,{id:"XL",dir:Math.PI/2}),ZU:sa(r,{id:"ZU"}),ZD:sa(r,{id:"ZD"})};Object.values(c).forEach(m=>m.group.scale.setScalar(1.6)),c.XP.group.position.set(gn.pick-.2,s-.12,.2),c.XL.group.position.set(gn.place+.2,s-.12,.2),c.ZU.group.position.set(.17,.06,.1),c.ZD.group.position.set(.17,-.2,.1),e.add(c.XP.group,c.XL.group),a.add(c.ZU.group,c.ZD.group);let u=Object.values(c).flatMap(m=>m.picks),h=(()=>{let m=document.createElement("canvas");m.width=m.height=64;let x=m.getContext("2d",{willReadFrequently:!0}),g=x.createRadialGradient(32,32,4,32,32,31);g.addColorStop(0,"rgba(0,0,0,0.45)"),g.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=g,x.fillRect(0,0,64,64);let p=new We(new Nt(.5,.5).rotateX(-Math.PI/2),new Ut({map:new $t(m),transparent:!0,depthWrite:!1}));return p.position.set(gn.pick,.006,.22),p.renderOrder=1,p})();e.add(h),[a,o].forEach(m=>m.traverse(x=>{x.isMesh&&(x.castShadow=!1)}));let f="",d=(m,x,g)=>{a.position.x=gn.pick+(gn.place-gn.pick)*m,o.position.y=-gn.stroke*x;let p=.095-.045*g;l[0].position.x=-p,l[1].position.x=p,h.position.x=a.position.x};return d(0,0,0),{group:e,picks:u,sensors:c,skip:[a,h],move(m,x,g){d(m,x,g)},set(m){let x=!1;Object.values(c).forEach(T=>{T.set(m)&&(x=!0)});let g=m&&m.robot||{x:0,z:0,grip:0},p=[g.x,g.z,g.grip].map(T=>Math.round(T*1e3)).join();return p!==f&&(f=p,d(g.x,g.z,g.grip),x=!0),x},tool(m=new O){return m.set(a.position.x,gn.beamY+o.position.y-.5,.22)}}}var nu=null;function hy(){if(nu)return nu;let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d",{willReadFrequently:!0});e.clearRect(0,0,64,64),e.fillStyle="#c4c9ce",e.fillRect(0,0,64,7),e.fillRect(0,0,7,64);let t=new $t(r);return t.wrapS=t.wrapT=Xt,t.colorSpace=Rt,t.anisotropy=4,nu=new Te({map:t,alphaTest:.5,side:sn,roughness:.45,metalness:.7}),nu}var bm=.08;function aa(r,e,t,n,i,s,a){let o=Math.hypot(n-e,i-t),l=a-s,c=new Nt(o,l),u=c.attributes.uv;for(let f=0;f<u.count;f++)u.setXY(f,u.getX(f)*o/bm,u.getY(f)*l/bm);let h=new We(c,hy());return h.position.set((e+n)/2,(s+a)/2,(t+i)/2),h.rotation.y=-Math.atan2(i-t,n-e),h.castShadow=!0,h.receiveShadow=!0,r.add(h),h}function _m(r,e={}){let t=e.w||3.2,n=e.d||2.4,i=e.h||2,s=e.doorW||.9,a=e.doorFrom===void 0?.6:e.doorFrom,o=new Be,l=-t/2,c=t/2,u=-n/2,h=n/2,f=.1,d=i-.06,m=l+a,x=m+s;aa(o,l,u,c,u,f,d),aa(o,l,u,l,h,f,d),aa(o,c,u,c,h,f,d),aa(o,l,h,m,h,f,d),aa(o,x,h,c,h,f,d);let g=(R,F)=>{ve(o,r.yellow,R,i/2,F,.05,i,.05,.006),ve(o,r.steelDark,R,.008,F,.12,.016,.12,.003)};[[l,u],[c,u],[l,h],[c,h],[0,u],[m,h],[x,h],[l,0],[c,0]].forEach(([R,F])=>g(R,F));let p=(R,F,G,q,ee,Z)=>ve(o,r.yellow,(R+G)/2,ee,(F+q)/2,Math.max(Z,Math.abs(G-R)),Z,Math.max(Z,Math.abs(q-F)),.004);p(l,u,c,u,i-.03,.04),p(l,u,l,h,i-.03,.04),p(c,u,c,h,i-.03,.04),p(l,h,m,h,i-.03,.04),p(x,h,c,h,i-.03,.04),p(l,u,c,u,f-.02,.03),p(l,u,l,h,f-.02,.03),p(c,u,c,h,f-.02,.03),p(l,h,m,h,f-.02,.03),p(x,h,c,h,f-.02,.03);let T=new Be;T.position.set(m+.03,0,h);let w=s-.06,y=[],N=R=>(R.userData={id:"P",kind:"toggle"},y.push(R),R);N(aa(T,.02,0,w-.02,0,f+.02,d-.02)),[[.015,i/2,.03,i-.08],[w-.015,i/2,.03,i-.08]].forEach(([R,F,G,q])=>N(ve(T,r.yellow,R,F,0,G,q,.03,.004))),[[f,.03],[i-.07,.03],[i/2,.025]].forEach(([R,F])=>N(ve(T,r.yellow,w/2,R,0,w,F,.03,.004))),[.35,i-.4].forEach(R=>_t(T,r.steelDark,0,R,0,.018,.12,"y",12)),ve(T,r.steelDark,w-.08,1.05,.04,.03,.14,.03,.006),ve(T,r.modDark,w-.02,1.25,.02,.03,.05,.03,.004),o.add(T);let I=new Be;I.position.set(x-.005,1.25,h+.045),ve(I,r.yellow,0,0,0,.05,.11,.04,.006),ve(I,r.modDark,0,-.035,.021,.04,.03,.004,.002);let D=bn(3073642,.008);D.mesh.position.set(0,.035,.022),I.add(D.mesh),o.add(I),mn(o,"Portella",m+s/2,i+.08,h,.4,.07,{bg:"#17181a",fg:"#f5c400",size:.62,dim:16777215});let P=-1,S=null;function E(R){P=R,T.rotation.y=-1.7*R}return E(0),{group:o,picks:y,skip:[T],hinge:[m+.03,h],switchAt:[x-.005,1.25,h+.045],doorTo:E,set(R){let F=!!R.door;return F===S?!1:(S=F,E(F?1:0),D.set(!F,3.2),!0)}}}function ym(r){let e=new Be,t=.12,n=.17;ve(e,r.yellow,0,0,0,t,n,.08,.01),ve(e,r.modDark,0,.012,.042,t-.02,.07,.004,.003),ve(e,r.modDark,0,n/2-.012,.03,t-.01,.022,.03,.003),ve(e,r.modDark,0,-n/2+.012,.03,t-.01,.022,.03,.003),mn(e,"KS",0,-.044,.045,.08,.026,{fg:"#17181a",size:.8,dim:16777215});let i=[["ALIM",3073642],["CH1",3073642],["CH2",3073642],["OUT",3073642],["RIARMO",16757018]],s=new un(new zt(.016,.009,.006),new Ut({color:16777215}),i.length),a=new Ye,o=new Pe,l=[[0,.036],[-.024,.014],[.024,.014],[-.024,-.008],[.024,-.008]];i.forEach((u,h)=>{a.makeTranslation(l[h][0],l[h][1],.046),s.setMatrixAt(h,a),s.setColorAt(h,o.setHex(1711135))}),s.castShadow=!1,e.add(s);let c="";return{group:e,picks:[],leds:s,set(u){let h=!u.emergency,f=!u.door,d={ALIM:!!u.supply,CH1:!!u.supply&&h,CH2:!!u.supply&&f,OUT:!!u.ks,RIARMO:!!u.supply&&h&&f&&!u.ks},m=i.map(([x])=>d[x]?1:0).join("");return m===c?!1:(c=m,i.forEach(([x,g],p)=>s.setColorAt(p,d[x]?o.setHex(g).multiplyScalar(2.2):o.setHex(1711135))),s.instanceColor.needsUpdate=!0,!0)}}}function Mm(r){let e=new Be,t=1.35;_t(e,r.steelDark,0,.015,0,.18,.03,"y",24),_t(e,r.steel,0,(t-.12)/2,0,.035,t-.12,"y",14);let n=new Be;n.position.set(0,t,0),n.rotation.x=-.32;let i=ve(n,r.modDark,0,0,0,.46,.32,.06,.012),s=(()=>{let h=document.createElement("canvas");h.width=192,h.height=128;let f=h.getContext("2d",{willReadFrequently:!0});f.fillStyle="#2a3442",f.fillRect(0,0,192,128),f.fillStyle="#c8d6e6",f.fillRect(0,0,192,14),f.fillStyle="#7d8fa6",[[8,22,84,44],[100,22,84,44],[8,74,176,46]].forEach(([m,x,g,p])=>f.fillRect(m,x,g,p)),f.fillStyle="#e8f0f8",[[14,30,40,10],[106,30,56,10]].forEach(([m,x,g,p])=>f.fillRect(m,x,g,p)),f.strokeStyle="#ffffff",f.lineWidth=3,f.beginPath(),[0,18,10,26,22,34,28,30,36].forEach((m,x)=>x?f.lineTo(14+x*20,110-m):f.moveTo(14,110-m)),f.stroke();let d=new $t(h);return d.colorSpace=Rt,d})(),a=new Te({color:724498,emissive:10474751,emissiveMap:s,emissiveIntensity:0,roughness:.25}),o=new We(new Nt(.38,.24),a);o.position.z=.031,o.castShadow=!1,n.add(o);let l=bn(3073642,.006);l.mesh.position.set(.2,-.14,.032),n.add(l.mesh),ve(e,r.modDark,0,t-.18,-.02,.1,.06,.06,.008),e.add(n),i.userData=o.userData={id:"HMI",kind:"toggle"};let c=[i,o],u="";return{group:e,picks:c,screenAt:[0,t,.03],set(h){let f=h.supply===void 0?!0:!!h.supply,d=!!(f&&h.panelOn&&h.hmi&&h.hmi.link),m=d&&!!h.hmi.horn,x=`${f}${!!h.panelOn}${d}${m}`;return x===u?!1:(u=x,d?(a.emissive.setHex(m?16752704:7321855),a.emissiveIntensity=1.1):f&&h.panelOn?(a.emissive.setHex(9080985),a.emissiveIntensity=.18):a.emissiveIntensity=0,l.set(f&&!!h.panelOn,3),!0)}}}var kt={x:6,z:3.4},Qi={x:6.4,z:5.5},ns={x:4,z:5.3},es={x:3.2,y:1.28},ts={x:2.82,y:1.28},Mo=[3.43,2.14,.13],yo=.21,So=[kt.x-1.3,2.08,kt.z+.2],Eo=[kt.x+1.3,2.08,kt.z+.2],wo=[kt.x,2.42,kt.z],Ji=[kt.x-1.1+.32,.95,kt.z+.22],To=[kt.x-.105,1.25,kt.z+1.245],fy={st:[Qi.x,Qi.z-.1],door:[To[0],To[2]],xp:[So[0],So[2]],xl:[Eo[0],Eo[2]],beam:[wo[0],wo[2]],pr:[Ji[0],Ji[2]]},iu=(r,e,t,n)=>Object.fromEntries(t.map((i,s)=>[i,[r+(s-(t.length-1)/2)*n,e]])),Tf={A1:[2.88,1.86],A2:[3.12,1.86],1:[2.95,2],2:[2.95,1.68],13:[2.88,1.76],14:[3.12,1.76],21:[3.05,2],22:[3.05,1.68]},Af={...iu(es.x,es.y+.08,["A1","S12","S22","R","13","23"],.018),...iu(es.x,es.y-.08,["A2","14","24"],.03)},Rf={...iu(ts.x,ts.y+.08,["A1","A2","IC","I0","I1","I2","I3","I4","I5","I6","I7"],.03),...iu(ts.x,ts.y-.08,["Q0A","Q0B","Q1A","Q1B","Q2A","Q2B","Q3A","Q3B"],.04)},Sm={SB1:1.75,SB0:1.75,E:1.5,SBR:1.62,HC:1.98},dy={SB1:-.09,SB0:.09,E:0,SBR:.16,HC:0};function Em(r){let[e,t]=r.split("."),n={1:-.012,3:-.012,X1:-.012,A:-.012,2:.012,4:.012,X2:.012,B:.012}[t];if(e==="Q"){let i=["F","N","PE"].indexOf(t);return i<0?null:{p:[2.6+i*.07,2.16,yo],zone:"cab"}}return e==="KM"&&Tf[t]?{p:[Tf[t][0],Tf[t][1],yo],zone:"cab"}:e==="KS"&&Af[t]?{p:[Af[t][0],Af[t][1],yo],zone:"cab"}:e==="PLC"&&Rf[t]?{p:[Rf[t][0],Rf[t][1],yo],zone:"cab"}:e==="L"&&n!==void 0?{p:[Mo[0]+n,Mo[1],Mo[2]+.05],zone:"cab"}:Sm[e]!==void 0&&n!==void 0?{p:[Qi.x+dy[e]+n,Sm[e],Qi.z-.1],zone:"st"}:e==="P"&&n!==void 0?{p:[To[0]+n,To[1]+(t>"2"?-.03:.03),To[2]-.02],zone:"door"}:n===void 0?null:e==="XP"?{p:[So[0]+n,So[1]+.05,So[2]],zone:"xp"}:e==="XL"?{p:[Eo[0]+n,Eo[1]+.05,Eo[2]],zone:"xl"}:e==="ZU"||e==="ZD"?{p:[wo[0]+n+(e==="ZD"?.05:0),wo[1],wo[2]],zone:"beam"}:e==="PR"?{p:[Ji[0]+n,Ji[1]+.06,Ji[2]],zone:"pr"}:null}function Cf(r,e,t){let[n,i]=fy[r.zone];return[[n+e,t,.4+e],[n+e,t,i+e*.5],[r.p[0],t,i+e*.5],r.p]}function py(r,e,t=0){let n=Em(r),i=Em(e);if(!n||!i)return null;let s=(t%11-5)*.018,a=yo+.03+Math.abs(s)*.5,o=3.05+s*.3;if(n.zone==="cab"&&i.zone==="cab"){let h=Math.min(n.p[1],i.p[1])-.05-t%5*.02;return[n.p,[n.p[0],n.p[1],a],[n.p[0],h,a],[i.p[0],h,a],[i.p[0],i.p[1],a],i.p]}if(n.zone!=="cab"&&i.zone!=="cab"){if(n.zone===i.zone){let h=Math.max(n.p[1],i.p[1])+.06+t%3*.02;return[n.p,[n.p[0],h,n.p[2]-.03],[i.p[0],h,i.p[2]-.03],i.p]}return[...Cf(n,s,o).reverse(),...Cf(i,s,o)]}let[l,c]=n.zone==="cab"?[n,i]:[i,n],u=[l.p,[l.p[0],l.p[1],a],[l.p[0],o,a],[l.p[0],o,.4+s],...Cf(c,s,o)];return n.zone==="cab"?u:u.reverse()}function wm(r,e){let t=[];return(r||[]).forEach((n,i)=>{let s=py(n.a,n.b,i);if(!s)return;let a=e&&e.wires&&e.wires[n.id]||{},o=!!a.current;t.push({id:String(n.id)+":"+n.a+"-"+n.b,pts:s,color:n.c,live:a.net==="fase"||a.net==="neutro"&&o,current:o})}),t}var Tm=500,Am=5,rs={w:.16,h:gn.partH,d:.16},is=gn.toolLow-rs.h/2,Ao={x:kt.x+gn.pick,z0:kt.z-1.05,z1:kt.z+gn.toolZ+.12},Pf={x:kt.x+gn.place,z0:kt.z-1.05,z1:kt.z+gn.toolZ+.12},ru=kt.z+gn.toolZ,Ro=3,Co={insieme:{tx:6,ty:0,tz:4.8,yaw:14,pitch:32,dist:13},cella:{tx:5.8,ty:.35,tz:3.9,yaw:-16,pitch:22,dist:6.8},quadro:{tx:3,ty:1.15,tz:.4,yaw:4,pitch:4,dist:3},pannello:{tx:ns.x-.1,ty:.95,tz:ns.z,yaw:-14,pitch:8,dist:2.3},esterno:{tx:.4,ty:1.5,tz:6.2,yaw:-78,pitch:7,dist:9.5},turno:{tx:6,ty:1,tz:3.6,yaw:26,pitch:34,dist:11}};function Rm(r,e){let t=null,n=A=>{A&&A.id==="HMI"&&t&&t.panelOn||e.onTap&&e.onTap(A)},i=na(r,{bg:xo.bg,exposure:1.25,view:Co.insieme,limits:{yaw:[-50,50],pitch:[6,70],dist:[1.5,24]},reduced:e.reduced,lite:e.lite,capture:e.capture,onTap:n,onPress:e.onPress,onRelease:e.onRelease});if(!i)return null;let{world:s,pick:a}=i,o=vr(),l=ra(i,o,{...xo,reduced:e.reduced});l.mood();let c=new Be;c.position.set(kt.x,0,kt.z),s.add(c);let u=_m(o);c.add(u.group),u.picks.forEach(A=>a.push(A));let h=vm(o);c.add(h.group),h.picks.forEach(A=>a.push(A));let f=sa(o,{id:"PR",lever:.06,dir:Math.PI/2});f.group.scale.setScalar(1.6),f.group.position.set(Ji[0],Ji[1]-.05,Ji[2]),s.add(f.group),f.picks.forEach(A=>a.push(A));let d=[Ao,Pf].map(A=>{let Ge=Js(o,{x0:0,x1:A.z1-A.z0,h:is,w:.34});return Ge.group.rotation.y=-Math.PI/2,Ge.group.position.set(A.x,0,A.z0),s.add(Ge.group),Ge});o.beltTex.repeat.set(2,1),ve(s,o.yellow,kt.x+1,2.08,kt.z+1.21,.5,.12,.02,.004);let m=$s(o);m.group.position.set(Qi.x,0,Qi.z),m.group.scale.setScalar(1.25),s.add(m.group),m.picks.forEach(A=>{A.userData.id==="SBE"&&(A.userData={id:"E",kind:"toggle"})});let x=new Be;x.position.set(.128,1.29,.07),_t(x,o.modDark,0,0,0,.032,.014,"z",24);let g=_t(x,o.modBlue,0,0,.012,.024,.022,"z",24);g.userData={id:"SBR",kind:"hold",hold:!0},m.group.add(x),ve(m.group,o.yellow,.128,1.29,0,.08,.08,.1,.008),m.picks.push(g),m.picks.forEach(A=>a.push(A));let p=bn(16777215,.028);p.mat.color.setHex(3815994),p.mat.emissive.setHex(16774084),p.mesh.position.set(0,1.56,0),m.group.add(p.mesh);let T=Qs(o,1.45);T.group.position.set(kt.x+1.85,0,kt.z-1.25),s.add(T.group);let w=Mm(o);w.group.position.set(ns.x,0,ns.z),s.add(w.group),w.picks.forEach(A=>a.push(A));let y=ea(o,{qm:"Interruttore",thermal:!1});y.group.position.set(3,1.5,.07),s.add(y.group),y.picks.forEach(A=>a.push(A));let N=jc(o,{wide:!0});N.group.position.set(ts.x-3,ts.y-1.5,.05),N.group.scale.setScalar(.7),y.group.add(N.group);let I=ym(o);I.group.position.set(es.x-3,es.y-1.5,.05),y.group.add(I.group);let D=bn(3073642,.02);D.mesh.position.set(...Mo),s.add(D.mesh);let P=new Te({color:4157360,metalness:.6,roughness:.35}),S=new un(new zt(rs.w,rs.h,rs.d),P,2+Ro),E=(()=>{let A=document.createElement("canvas");A.width=A.height=64;let Ge=A.getContext("2d",{willReadFrequently:!0}),Ce=Ge.createRadialGradient(32,32,4,32,32,31);return Ce.addColorStop(0,"rgba(0,0,0,0.5)"),Ce.addColorStop(1,"rgba(0,0,0,0)"),Ge.fillStyle=Ce,Ge.fillRect(0,0,64,64),new $t(A)})(),R=new un(new Nt(.26,.26).rotateX(-Math.PI/2),new Ut({map:E,transparent:!0,depthWrite:!1}),2+Ro);R.renderOrder=1,[S,R].forEach(A=>{A.castShadow=!1,A.frustumCulled=!1}),s.add(S,R);let F=new Ye,G=new O,q=new O,ee=new Ye().makeScale(1e-4,1e-4,1e-4),Z=(A,Ge,Ce,De,Ee)=>{S.setMatrixAt(A,F.makeTranslation(Ge,Ce,De)),R.setMatrixAt(A,Ee===null?ee:F.makeTranslation(Ge,Ee,De))},le=A=>{S.setMatrixAt(A,ee),R.setMatrixAt(A,ee)},j=js({add:A=>s.add(A),redraw:i.redraw,reduced:e.reduced,loop:A=>{let Ge=i.loop(()=>{A()===!1&&Ge()})}});i.label("Cella del robot",kt.x,2.5,kt.z,"room"),i.label("Quadro",3,2.3,.3,"room"),i.label("Pulsantiera",Qi.x,2.25,Qi.z,"room"),i.label("Pannello",ns.x,1.85,ns.z,"room");let J={from:{x:0,z:0,grip:0,wait:0},to:{x:0,z:0,grip:0,wait:0},cur:{x:0,z:0,grip:0,wait:0},t0:0},me=[],ye=null,Ne=0,Xe=!1,te=!1;function ue(A){let Ge=Math.min(1,(A-J.t0)/Tm);["x","z","grip","wait"].forEach(De=>{J.cur[De]=J.from[De]+(J.to[De]-J.from[De])*Ge}),h.move(J.cur.x,J.cur.z,J.cur.grip);let Ce=t;if(Ce&&Ce.robot.holding?(h.tool(q),c.localToWorld(q),Z(1,q.x,q.y,q.z,null)):le(1),Ce&&Ce.robot.feed&&!Ce.robot.holding)Z(0,Ao.x,is+rs.h/2,ru,is+.003);else if(Ce&&!Ce.robot.holding&&J.cur.wait>0){let De=Math.min(1,J.cur.wait/Am);Z(0,Ao.x,is+rs.h/2,Ao.z0+.1+(ru-Ao.z0-.1)*De,is+.003)}else le(0);for(let De=0;De<Ro;De++){let Ee=me[De];if(Ee===void 0){le(2+De);continue}let V=(A-Ee)/2600;if(V>=1){me.splice(De,1),De--;continue}Z(2+De,Pf.x,is+rs.h/2,ru-(ru-Pf.z0-.08)*V,is+.003)}for(let De=me.length;De<Ro;De++)le(2+De);return S.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,Ge<1}function ce(){ye||(ye=i.loop((A,Ge)=>{let Ce=performance.now(),De=ue(Ce);te&&d.forEach(V=>V.run(.4,Ge));let Ee=Ce<Ne;Ee?T.set({red:Math.floor(A/300)%2===0,yellow:!1,green:!1}):T._alarm&&(T._alarm=!1,he()),Ee&&(T._alarm=!0),!De&&!te&&!Ee&&!me.length&&(ye(),ye=null)}))}function he(){let A=t;if(!A)return;if(Xe){T.set({green:!0});return}let Ge=!!(A.hmi&&A.hmi.alarms&&A.hmi.alarms.some(Ce=>Ce.state==="attivo"));T.set({green:A.cycle&&A.powered,yellow:!A.ks&&A.supply,red:Ge})}i.finish([...u.skip,...h.skip,l.shutter,S,R]);let Me=A=>{if(typeof A=="object")return{...A};let Ge={...Co[A]||Co.insieme};return i.camera.aspect<.9&&(A==="insieme"||A==="turno"||!Co[A])&&(Ge.dist=10.5,Ge.yaw=18),i.camera.aspect<.9&&A==="cella"&&Object.assign(Ge,{ty:1,pitch:18,dist:12}),i.camera.aspect<.9&&A==="esterno"&&(Ge.dist=13),Ge};i.camera.aspect<.9&&i.look(Me("insieme"),1);let Ze=!0,Re="",at="",nt=null,Ie=r.querySelector("canvas");return{update(A){if(!A)return;let Ge=t;t=A;let Ce=A.robot,De=!Ce.feed&&!Ce.holding&&A.powered&&Ge?Math.min(Am,J.to.wait+2):0,Ee={x:Ce.x,z:Ce.z,grip:Ce.grip,wait:De},V=performance.now(),ie=["x","z","grip","wait"].some(H=>Math.abs(Ee[H]-J.to[H])>1e-4);if(ie&&(ue(V),J.from={...J.cur},J.to=Ee,J.t0=e.reduced?V-Tm:V,Ge||(J.from={...Ee},J.cur={...Ee})),nt!==null&&Ce.out>nt)for(let H=nt;H<Ce.out&&me.length<Ro;H++)me.push(V);nt=Ce.out,te=!!(A.cycle&&A.powered)&&!(A.shift&&A.shift.done)&&!Xe;let _=ie||me.length>0;if(u.set(A)){_=!0;let H=A.door?1:0,$=1-H;!Ge||e.reduced?(u.doorTo(H),i.moved()):i.animate(700,se=>{u.doorTo($+(H-$)*se*se*(3-2*se)),i.moved()})}h.set({sensors:A.sensors,robot:J.to})&&(_=!0),h.move(J.cur.x,J.cur.z,J.cur.grip),f.set(A)&&(_=!0),I.set(A)&&(_=!0),w.set(A)&&(_=!0),N.set(A.plc)&&(_=!0),m.set(A),g.position.z=A.reset?.004:.012,y.set({qm:A.supply,contactor:A.contactor,thermal:{tripped:!1}}),D.set(!!A.powered,3.2),p.set(!!A.cycle||Xe,3.2),T._alarm||he();let M=[A.cycle,A.powered,A.ks,A.door,A.emergency,A.start,A.stop,A.reset,A.contactor,A.panelOn,A.hmi&&A.hmi.link,A.hmi&&A.hmi.alarms&&A.hmi.alarms.map(H=>H.state).join("")].join();if(M!==at&&(at=M,_=!0),A.wires){let H=wm(A.wires,A.flow).map(se=>({...se,current:se.current&&te})),$=H.map(se=>se.id+(se.live?"+":"-")+(se.current?">":"")).join();$!==Re&&(Re=$,j.sync(H,!Ze),Ze=!1)}(ie||te||me.length)&&ce(),_&&i.redraw(),Ie&&Ie.setAttribute("aria-label",["Cella del robot, di notte.",te?"Il robot lavora.":"Il robot \xE8 fermo.",A.powered?"Il robot ha potenza.":"Il robot \xE8 senza potenza.",A.door?"La portella \xE8 aperta.":"",A.emergency?"L\u2019emergenza \xE8 premuta.":"",A.panelOn?"":"Il cavo del pannello \xE8 staccato.",Ce.holding?"Il robot tiene un pezzo.":""].filter(Boolean).join(" "))},look(A,Ge){i.look(Me(A),Ge)},outside(){l.setShutter(0),l.rows.forEach(A=>l.setRow(A,0)),l.mood(),i.look(Me("esterno"),1)},inside(){l.setShutter(1),l.rows.forEach((A,Ge)=>l.setRow(A,xo.rowsOn.includes(Ge)?1:0)),l.mood()},arrival(){return l.shutterTo(!0,1600),setTimeout(()=>l.lampsOn(),e.reduced?0:1500),setTimeout(()=>i.look(Me("insieme"),2200),e.reduced?0:1800),e.reduced?0:4100},alert(A=2600){Ne=performance.now()+(e.reduced?0:A),T._alarm=!0,ce(),i.redraw()},shift(A){Xe=!!A,l.rows.forEach((Ge,Ce)=>l.setRow(Ge,A||xo.rowsOn.includes(Ce)?1:0)),l.mood(),A&&(te=!1),T._alarm=!1,he(),p.set(A||!!(t&&t.cycle),3.2),i.redraw()},wires:()=>j,stats(){let A=0;return i.THREE_scene.traverseVisible(Ge=>{(Ge.isMesh||Ge.isPoints)&&A++}),{meshes:A}},screenOf:i.screenOf,views:Object.keys(Co),resize:i.resize,dispose(){ye&&ye(),i.dispose()}}}var Cm={appartamento:um,officina:gm,automatico:xm,fabbrica:Rm};typeof window<"u"&&(window.FaseNeutroProve={createScene(r,e,t){return Cm[r]?Cm[r](e,t):null}});})();
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
