let t=document.createElement("style");t.innerHTML=".account-setting{margin:12px;background:#fff}.account-setting .base-title{padding-left:0}.account-setting .ant-tabs-tab-active{background-color:#e6f7ff}",document.head.appendChild(t);import{a as e,i,o as s,j as o,w as a,k as r,ah as n,aV as d,dv as m}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import"./index.f1319839.js";import"./index.ed9be7a7.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.e6984f16.js";import{T as p}from"./index.04005f70.js";import"./UpOutlined.d2d7be45.js";import"./LeftOutlined.a8393734.js";import"./DownOutlined.a7138082.js";import"./index.a311583a.js";import"./index.7bd923c9.js";import"./zh_CN.0242bd16.js";import"./index.6317d623.js";import"./index.e9dabea4.js";import"./index.0874e336.js";import{a as c}from"./index.40756bd5.js";import"./CloseOutlined.1ded85a0.js";import"./index.9e082a18.js";import"./index.e47dd816.js";import"./LeftOutlined.375e5079.js";import"./functional.c7d55e9a.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./useBreakpoint.1cdd5e73.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./animation.1adf111b.js";import"./index.abc9c33d.js";import"./header.817c2c65.js";import"./index.228fcfc3.js";import"./useWindowSizeFn.2b8ac17a.js";import"./uuid.40269c00.js";import"./download.c37bde26.js";import"./useForm.57e0baec.js";import{s as j}from"./data.8adaf682.js";import f from"./AccountBind.ce5b541f.js";import l from"./BaseSetting.5d1ea19f.js";import u from"./SecureSetting.0e03898d.js";import b from"./MsgNotify.7462a14f.js";var x=e({components:{ScrollContainer:c,Tabs:p,TabPane:p.TabPane,BaseSetting:l,SecureSetting:u,AccountBind:f,MsgNotify:b},setup:()=>({prefixCls:"account-setting",settingList:j,tabBarStyle:{width:"220px"}})});x.render=function(t,e,p,c,j,f){const l=i("TabPane"),u=i("Tabs"),b=i("ScrollContainer");return s(),o(b,null,{default:a((()=>[r("div",{ref:"wrapperRef",class:t.prefixCls},[r(u,{"tab-position":"left",tabBarStyle:t.tabBarStyle},{default:a((()=>[(s(!0),o(n,null,d(t.settingList,(t=>(s(),o(l,{key:t.key,tab:t.name},{default:a((()=>[(s(),o(m(t.component)))])),_:2},1032,["tab"])))),128))])),_:1},8,["tabBarStyle"])],2)])),_:1})};export default x;