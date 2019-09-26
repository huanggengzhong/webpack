function Header() {
// header
var dom=document.getElementById('root')
var headerDom=document.createElement('h2')
headerDom.innerText='This is header'
dom.appendChild(headerDom)
}
export default Header;
// commonJS导出写法
// modules.exports=Header;