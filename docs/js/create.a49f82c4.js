(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{"0b95":function(e,t,n){"use strict";n("2e98")},"2e98":function(e,t,n){},b0c0:function(e,t,n){var a=n("83ab"),c=n("9bf2").f,i=Function.prototype,r=i.toString,u=/^\s*function ([^ (]*)/,o="name";a&&!(o in i)&&c(i,o,{configurable:!0,get:function(){try{return r.call(this).match(u)[1]}catch(e){return""}}})},c9c2:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),c=Object(a["H"])("data-v-754a4b51");Object(a["s"])("data-v-754a4b51");var i={class:"create-post container"},r=Object(a["g"])("h1",null,"Create Post",-1),u={class:"error"},o={id:"image-upload"},l={key:0},b=Object(a["f"])("Drag your image here to begin"),s=Object(a["g"])("br",null,null,-1),p=Object(a["f"])(" or click to browse"),d={key:1},g=Object(a["g"])("input",{class:"button",type:"submit",value:"Create post"},null,-1);Object(a["q"])();var m=c((function(e,t,n,c,m,f){return Object(a["p"])(),Object(a["d"])("div",i,[r,Object(a["g"])("form",{onSubmit:t[5]||(t[5]=Object(a["G"])((function(){return f.create&&f.create.apply(f,arguments)}),["prevent"])),enctype:"multipart/form-data"},[Object(a["g"])("p",u,Object(a["z"])(m.error),1),Object(a["F"])(Object(a["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.title=e}),type:"text",placeholder:"Title",ref:"title"},null,512),[[a["B"],m.title]]),Object(a["F"])(Object(a["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return m.subvue=e}),type:"text",placeholder:"Subvue"},null,512),[[a["B"],m.subvue]]),m.imagePreview?(Object(a["p"])(),Object(a["d"])("div",{key:0,id:"image-preview",style:"background-image: url("+m.imagePreview+")"},null,4)):Object(a["e"])("",!0),Object(a["g"])("div",o,[Object(a["g"])("p",null,[m.image?(Object(a["p"])(),Object(a["d"])("span",d,Object(a["z"])(m.image.name),1)):(Object(a["p"])(),Object(a["d"])("span",l,[b,s,p]))]),Object(a["g"])("input",{type:"file",onChange:t[3]||(t[3]=function(){return f.fileChanged&&f.fileChanged.apply(f,arguments)}),accept:"image/*"},null,32)]),Object(a["F"])(Object(a["g"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return m.content=e}),name:"name",placeholder:"Content",rows:"25",cols:"80"},null,512),[[a["B"],m.content]]),g],32)])})),f=n("46fe"),j={name:"create-post",data:function(){return{title:"",subvue:"",content:"",error:null,image:null,imagePreview:null}},methods:{create:function(){var e=this,t=new FormData;t.append("title",this.title),t.append("subvue",this.subvue),t.append("content",this.content),console.log(t),this.image&&t.append("image",this.image,this.image.name),f["a"].create(t).then((function(t){e.$router.push({name:"Post",params:{id:t.data.id,subvuePermalink:t.data.subvue.permalink}})})).catch((function(t){e.error=t.response.data.error}))},fileChanged:function(e){var t=this;this.image=e.target.files[0];var n=new FileReader;n.onload=function(e){t.imagePreview=e.target.result},n.readAsDataURL(this.image)}},mounted:function(){this.$refs.title.focus()}};n("0b95");j.render=m,j.__scopeId="data-v-754a4b51";t["default"]=j}}]);
//# sourceMappingURL=create.a49f82c4.js.map