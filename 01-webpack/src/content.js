function Content() {
// content
var dom=document.getElementById('root')
var headerDom=document.createElement('h2')
headerDom.innerText='This is content'
dom.appendChild(headerDom)
    
}

export default Content;
// commonJS导出写法
// modules.exports=Content;