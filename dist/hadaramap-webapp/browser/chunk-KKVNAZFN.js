import{h as Ce}from"./chunk-6BGUDOWJ.js";import{A as C,D as A,J as o,M as Y,Ma as _e,O as E,Oa as T,P as c,Pa as ve,Ra as S,Sa as h,Ua as K,V as F,a as l,ab as ye,b as d,e as ce,f as he,g as fe,h as pe,ha as w,i as G,j as M,k as ge,l as v,m as g,q as y,r as u,u as R,xa as I,y as me}from"./chunk-EN2OMHGG.js";var Se=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(Y),o(A))}}static{this.\u0275dir=u({type:i})}}return i})(),tt=(()=>{class i extends Se{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=me(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,features:[c]})}}return i})(),re=new g("");var it={provide:re,useExisting:M(()=>Ne),multi:!0};function nt(){let i=K()?K().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var rt=new g(""),Ne=(()=>{class i extends Se{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!nt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(Y),o(A),o(rt,8))}}static{this.\u0275dir=u({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&w("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[I([it]),c]})}}return i})();function f(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Oe(i){return i!=null&&typeof i.length=="number"}var se=new g(""),oe=new g(""),st=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ve=class{static min(e){return ot(e)}static max(e){return at(e)}static required(e){return lt(e)}static requiredTrue(e){return ut(e)}static email(e){return dt(e)}static minLength(e){return ct(e)}static maxLength(e){return ht(e)}static pattern(e){return ft(e)}static nullValidator(e){return xe(e)}static compose(e){return je(e)}static composeAsync(e){return Ue(e)}};function ot(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function at(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function lt(i){return f(i.value)?{required:!0}:null}function ut(i){return i.value===!0?null:{required:!0}}function dt(i){return f(i.value)||st.test(i.value)?null:{email:!0}}function ct(i){return e=>f(e.value)||!Oe(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function ht(i){return e=>Oe(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function ft(i){if(!i)return xe;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(f(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function xe(i){return null}function Pe(i){return i!=null}function ke(i){return _e(i)?he(i):i}function Ge(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Re(i,e){return e.map(t=>t(i))}function pt(i){return!i.validate}function Te(i){return i.map(e=>pt(e)?e:t=>e.validate(t))}function je(i){if(!i)return null;let e=i.filter(Pe);return e.length==0?null:function(t){return Ge(Re(t,e))}}function Be(i){return i!=null?je(Te(i)):null}function Ue(i){if(!i)return null;let e=i.filter(Pe);return e.length==0?null:function(t){let n=Re(t,e).map(ke);return pe(n).pipe(fe(Ge))}}function He(i){return i!=null?Ue(Te(i)):null}function De(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Le(i){return i._rawValidators}function $e(i){return i._rawAsyncValidators}function J(i){return i?Array.isArray(i)?i:[i]:[]}function B(i,e){return Array.isArray(i)?i.includes(e):i===e}function be(i,e){let t=J(e);return J(i).forEach(r=>{B(t,r)||t.push(r)}),t}function Me(i,e){return J(e).filter(t=>!B(i,t))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},m=class extends U{get formDirective(){return null}get path(){return null}},_=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qt=d(l({},gt),{"[class.ng-submitted]":"isSubmitted"}),ei=(()=>{class i extends H{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(_,2))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[c]})}}return i})(),ti=(()=>{class i extends H{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(m,10))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[c]})}}return i})();var N="VALID",j="INVALID",V="PENDING",O="DISABLED",p=class{},L=class extends p{constructor(e,t){super(),this.value=e,this.source=t}},x=class extends p{constructor(e,t){super(),this.pristine=e,this.source=t}},P=class extends p{constructor(e,t){super(),this.touched=e,this.source=t}},D=class extends p{constructor(e,t){super(),this.status=e,this.source=t}},Q=class extends p{constructor(e){super(),this.source=e}},ee=class extends p{constructor(e){super(),this.source=e}};function ae(i){return(z(i)?i.validators:i)||null}function mt(i){return Array.isArray(i)?Be(i):i||null}function le(i,e){return(z(e)?e.asyncValidators:i)||null}function _t(i){return Array.isArray(i)?He(i):i||null}function z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function We(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new G(1e3,"");if(!n[t])throw new G(1001,"")}function qe(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new G(1002,"")})}var b=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=S(()=>this.statusReactive()),this.statusReactive=E(void 0),this._pristine=S(()=>this.pristineReactive()),this.pristineReactive=E(!0),this._touched=S(()=>this.touchedReactive()),this.touchedReactive=E(!1),this._events=new ce,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===N}get invalid(){return this.status===j}get pending(){return this.status==V}get disabled(){return this.status===O}get enabled(){return this.status!==O}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new P(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new P(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,n)),this._events.next(new D(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(n=>{n.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===V)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(j)?j:N}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new x(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new P(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_t(this._rawAsyncValidators)}},$=class extends b{constructor(e,t,n){super(ae(t),le(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){qe(this,!0,e),Object.keys(e).forEach(n=>{We(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var te=class extends ${};var Z=new g("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function ze(i,e){return[...e.path,i]}function ie(i,e,t=X){ue(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),yt(i,e),Vt(i,e),Ct(i,e),vt(i,e)}function Ae(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),q(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function W(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function vt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ue(i,e){let t=Le(i);e.validator!==null?i.setValidators(De(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=$e(i);e.asyncValidator!==null?i.setAsyncValidators(De(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();W(e._rawValidators,r),W(e._rawAsyncValidators,r)}function q(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Le(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=$e(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return W(e._rawValidators,n),W(e._rawAsyncValidators,n),t}function yt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ze(i,e)})}function Ct(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Vt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Dt(i,e){i==null,ue(i,e)}function bt(i,e){return q(i,e)}function Xe(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Mt(i){return Object.getPrototypeOf(i.constructor)===tt}function At(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Ye(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===Ne?t=s:Mt(s)?n=s:r=s}),r||n||t||null}function Et(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ee(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Fe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var k=class extends b{constructor(e=null,t,n){super(ae(t),le(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ee(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ee(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ft=i=>i instanceof k;var wt={provide:_,useExisting:M(()=>de)},we=Promise.resolve(),de=(()=>{class i extends _{constructor(t,n,r,s,a,Qe){super(),this._changeDetectorRef=a,this.callSetDisabledState=Qe,this.control=new k,this._registered=!1,this.name="",this.update=new C,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ye(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Xe(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ie(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){we.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&ve(n);we.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ze(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(m,9),o(se,10),o(oe,10),o(re,10),o(T,8),o(Z,8))}}static{this.\u0275dir=u({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[I([wt]),c,R]})}}return i})(),ni=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Ke=new g("");var It={provide:m,useExisting:M(()=>St)},St=(()=>{class i extends m{get submitted(){return h(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=S(()=>this._submittedReactive()),this._submittedReactive=E(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new C,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return ie(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Ae(t.control||null,t,!1),Et(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),At(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Q(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ee(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(Ae(n||null,t),Ft(r)&&(ie(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Dt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&bt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ue(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(se,10),o(oe,10),o(Z,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&w("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[I([It]),c,R]})}}return i})();var Nt={provide:_,useExisting:M(()=>Ot)},Ot=(()=>{class i extends _{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new C,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ye(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Xe(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ze(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(m,13),o(se,10),o(oe,10),o(re,10),o(Ke,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[I([Nt]),c,R]})}}return i})();var Je=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=v({})}}return i})(),ne=class extends b{constructor(e,t,n){super(ae(t),le(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){qe(this,!1,e),e.forEach((n,r)=>{We(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ie(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ri=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return Ie(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new $(r,s)}record(t,n=null){let r=this._reduceControls(t);return new te(r,n)}control(t,n,r){let s={};return this.useNonNullable?(Ie(n)?s=n:(s.validators=n,s.asyncValidators=r),new k(t,d(l({},s),{nonNullable:!0}))):new k(t,n,r)}array(t,n,r){let s=t.map(a=>this._createControl(a));return new ne(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof k)return t;if(t instanceof b)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=ge({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var si=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Z,useValue:t.callSetDisabledState??X}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=v({imports:[Je]})}}return i})(),oi=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ke,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Z,useValue:t.callSetDisabledState??X}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=v({imports:[Je]})}}return i})();var di=(()=>{class i{el;ngModel;cd;config;variant="outlined";filled;constructor(t,n,r,s){this.el=t,this.ngModel=n,this.cd=r,this.config=s}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||i)(o(A),o(de,8),o(T),o(Ce))};static \u0275dir=u({type:i,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(n,r){n&1&&w("input",function(a){return r.onInput(a)}),n&2&&F("p-filled",r.filled)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled")},inputs:{variant:"variant"}})}return i})(),ci=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=y({type:i});static \u0275inj=v({imports:[ye]})}return i})();export{re as a,Ne as b,Ve as c,_ as d,ei as e,ti as f,$ as g,de as h,ni as i,St as j,Ot as k,ri as l,si as m,oi as n,di as o,ci as p};