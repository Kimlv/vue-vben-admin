import{db as e,a as r,r as i,u as o,O as t,F as s,cP as a,dh as n,i as d,o as m,j as l,ad as p,aG as c,aH as f,aI as j,k as u,w as b,p as x,n as g}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import"./index.0a1619d0.js";import"./index.e00b5824.js";import"./Trigger.d6b11091.js";import"./omit.d6d96393.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.0629dec0.js";import"./CheckOutlined.f824e206.js";import"./index.af08d434.js";import"./colors.862e21a0.js";import"./index.3b9b1bfd.js";import"./RightOutlined.db1f08eb.js";import"./index.e75dd547.js";import"./types.95acfcc2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.5c27b99c.js";import"./_baseFor.f4e5f03f.js";import"./index.ed40df68.js";import"./index.a172b251.js";import"./index.abbd4b6e.js";import"./index.57f035ac.js";import"./UpOutlined.f340cfe2.js";import"./LeftOutlined.e5a32001.js";import"./index.8755de1d.js";import"./index.cd92e16d.js";import"./index.d6a53ab6.js";import"./index.baa00882.js";import"./index.76293adc.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.fdcfd8f1.js";import"./index.8ca82af0.js";import"./CaretDownFilled.f100d0c3.js";import"./CheckOutlined.df11ebaf.js";import"./CloseOutlined.c0022700.js";import{s as y}from"./EditTableHeaderIcon.3fa45cff.js";import"./DownOutlined.d4782c6f.js";import"./FullscreenOutlined.a8e2f04d.js";import"./LeftOutlined.11b1cc66.js";import"./functional.44913f31.js";import"./RedoOutlined.0e78e406.js";import"./RightOutlined.34287f23.js";import"./SettingOutlined.9c311242.js";import"./useTimeout.96c25433.js";import"./useDebounce.0224f5f7.js";import"./useEventListener.9721bdc6.js";import"./useBreakpoint.5c1ed0da.js";import"./useDescription.2dedb570.js";import"./index.e360b4fd.js";import"./index.11311f0f.js";import"./tsxHelper.98cdb59f.js";import"./index.e65e388a.js";import"./index.dd2b6cc2.js";import"./useForm.197ddde2.js";import{u as R}from"./index.949a94b4.js";import"./useModalContext.1b0bfcbf.js";import"./domUtils.1437ab67.js";import"./useFullScreen.6dc73f2e.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.70de1666.js";import"./useExpose.fcb4abd2.js";import"./index.e1c8c217.js";import{u as T}from"./useTable.6dedb5ef.js";import{getColumns as C}from"./data.3824d403.js";import O from"./DetailModal.d52a2171.js";var h;(h||(h={})).Error="/error";var D=r({name:"ErrorHandler",components:{DetailModal:O,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=T({title:m("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:f}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{p(a(e))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:h.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const k={class:"p-4"};D.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",k,[(m(!0),l(p,null,c(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[j,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default D;