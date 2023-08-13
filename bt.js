function home() {window.location.href = "index.html";}
function stuff() {
    window.location.href = "stuff.html";
}
function addin(){
    for (let i = 0; i < localStorage.length; ++i){
        localStorage.setItem(i, localStorage.getItem(i));
    }
    alert("Sản phẩm đã được chỉnh sửa-thêm vào giỏ hàng");
    var dt = document.getElementsByName("count");
    for (let i = 0; i < dt.length; ++i){
            localStorage.setItem(i+1, dt[i].value);
    }
}
