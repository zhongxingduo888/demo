/**
 * Created by zhongxd on 2016/7/24.
 */
window.onload = function () {
    imgLocation("container", "box");
}

function imgLocation(parent, content) {
    //将parent下所有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth;
    var clos = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth * clos + "px; margin:0px auto;";

    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < clos) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            console.log(BoxHeightArr[i]);
        } else {
            var minHeight = Math.min.apply(null, BoxHeightArr);
            console.log("min:", minHeight);
            var minIndex = getminheightLocation(BoxHeightArr, minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
}

function getminheightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }

}

function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}