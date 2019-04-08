function popupList2(a) {
    var b = '<div class="popup popup1"><div class="title">\u65e0\u5934\u6a21\u5f0f<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u65e0\u5934\u6a21\u5f0f</span><em class="fr"><i></i></em></div><p class="popup-hint">\u65e0\u5934\u6a21\u5f0f: \u5c06Air\u7684\u524d\u8fdb\u65b9\u5411\u8bbe\u7f6e\u4e3a\u73a9\u5bb6\u624b\u6301\u8bbe\u5907\u6240\u9762\u5411\u7684\u65b9\u5411\u3002</p></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}

function popupList3(a) {
    var b = '<div class="popup popup1"><div class="title">\u5b9a\u9ad8\u6a21\u5f0f<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u5b9a\u9ad8\u6a21\u5f0f</span><em class="fr"><i></i></em></div><p class="popup-hint">\u5b9a\u9ad8\u6a21\u5f0f: \u5c06\u98de\u673a\u8d77\u98de\u5e76\u60ac\u505c\u5728\u79bb\u5730150\u5398\u7c73\u9ad8\u5904\u3002</p><p class="popup-warn">*\u4ec5\u53ef\u5728\u6302\u8f7d\u8d85\u58f0\u6ce2\u6a21\u5757\u65f6\u7684\u9501\u5b9a\u72b6\u6001\u4e0b\u5f00\u542f\u201c\u5b9a\u9ad8\u6a21\u5f0f\u201d</p></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}

function popupList4(a) {
    var b = '<div class="popup popup1 list4"><div class="title">\u4f53\u611f\u6a21\u5f0f<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u4f53\u611f\u6a21\u5f0f</span><em class="fr"><i></i></em></div><p class="popup-hint">\u91cd\u529b\u611f\u5e94\uff1a\u73a9\u5bb6\u901a\u8fc7\u624b\u6301\u8bbe\u5907\u7684\u91cd\u529b\u611f\u5e94\u63a7\u5236Air\u98de\u884c\u3002</p></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}

function popupList5(a) {
    $("#popup_list").show();
    $("body").append('<div class="popup popup1"><div class="title">\u83b7\u53d6Air\u7684<span class="show-param1">\u4fef\u4ef0\u89d2</span>\u7684\u503c</div><div class="popup-content"><ul class="popup-angle clearfix"><li><div class="fl" text_="0">\u6a2a\u6eda\u89d2</div></li><li><div text_="1">\u504f\u822a\u89d2</div></li><li><div class="fr" text_="2">\u4fef\u4ef0\u89d2</div></li></ul><p class="popup-warn2">*\u4fef\u4ef0\u89d2: \u65e0\u4eba\u673a\u673a\u8eab\u62ac\u8d77\u7684\u89d2\u5ea6\u3002</p></div><button class="popup-btn">\u786e\u8ba4</button></div>');
    $(".popup-angle li").eq(a.value_).find("div").addClass("popup-active");
    $(".show-param1").html(a.text_);
    $(".popup-angle li div").click(function() {
        $(".popup-angle li div").removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html());
        0 == $(this).attr("text_") ? $(".popup-warn2").html("*\u6a2a\u6eda\u89d2: \u65e0\u4eba\u673a\u5de6\u53f3\u503e\u659c\u7684\u89d2\u5ea6\u3002") : 1 == $(this).attr("text_") ? $(".popup-warn2").html("*\u504f\u822a\u89d2: \u504f\u79bb\u6b63\u524d\u65b9\u822a\u5411\u7684\u89d2\u5ea6\u3002") : 2 == $(this).attr("text_") && $(".popup-warn2").html("*\u4fef\u4ef0\u89d2: \u65e0\u4eba\u673a\u673a\u8eab\u62ac\u8d77\u7684\u89d2\u5ea6\u3002")
    });
    popupOnOff()
}

function popupList6(a) {
    $("#popup_list").show();
    $("body").append('<div class="popup popup1"><div class="title">\u83b7\u53d6Air\u7684<span class="show-param1">\u4e0a\u4e0b</span>\u65b9\u5411\u7684\u901f\u5ea6\u503c</div><div class="popup-content"><ul class="popup-angle clearfix"><li><div class="fl" text_="0">\u4e0a\u4e0b</div></li><li><div text_="1">\u524d\u540e</div></li><li><div class="fr" text_="2">\u5de6\u53f3</div></li></ul><p class="popup-warn2">*\u98de\u673a\u5411\u4e0a\u3001\u5411\u524d\u3001\u5411\u53f3\u4e3a\u6b63\u503c\u3002</p></div><button class="popup-btn">\u786e\u8ba4</button></div>');
    $(".popup-angle li").eq(a.value_).find("div").addClass("popup-active");
    $(".show-param1").html(a.text_);
    $(".popup-angle li div").click(function() {
        $(".popup-angle li div").removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    popupOnOff()
}

function popupList7(a) {
    var b = '<div class="popup popup1"><div class="title">\u83b7\u53d6Air\u7684<span class="show-param1">' + a.text_ + '</span>\u65b9\u5411\u7684\u52a0\u901f\u5ea6\u503c</div><div class="popup-content"><ul class="popup-angle clearfix"><li><div class="fl" text_="0">\u4e0a\u4e0b</div></li><li><div text_="1">\u524d\u540e</div></li><li><div class="fr" text_="2">\u5de6\u53f3</div></li></ul><p class="popup-warn2">*\u98de\u673a\u5411\u4e0a\u3001\u5411\u524d\u3001\u5411\u53f3\u4e3a\u6b63\u503c\u3002</p></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    $(".popup-angle li").eq(a.value_).find("div").addClass("popup-active");
    $(".popup-angle li div").click(function() {
        $(".popup-angle li div").removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    popupOnOff()
}

function popupList8(a) {
    function b() {
        a.setValue($(".show-param1").html());
        a.setText($(".show-param1").html())
    }
    var d = '<div class="popup popup1"><div class="title">\u91cd\u590d\u6267\u884c<span class="show-param1">' + a.text_ + '</span>\u6b21</div><div class="popup-content"><ul class="ul-key1 clearfix"><li><ul><li><span class="popup-number" text_="1">1</span></li><li><span class="popup-number" text_="2">2</span></li><li><span class="popup-number" text_="3">3</span></li><li><span class="popup-del">\u5220\u9664</span></li> </ul></li><li><ul><li><span class="popup-number" text_="4">4</span></li><li><span class="popup-number" text_="5">5</span></li><li><span class="popup-number" text_="6">6</span></li><li><span class="popup-clear">\u6e05\u7a7a</span></li></ul></li><li><ul><li><span class="popup-number" text_="7">7</span></li><li><span class="popup-number" text_="8">8</span></li><li><span class="popup-number" text_="9">9</span></li><li><span class="popup-number" text_="0">0</span></li> </ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(d);
    var e = $(".show-param1").html();
    $(".popup-number").click(function() {
        e = 0 == e ? $(this).html() : e + $(this).html();
        $(".show-param1").html(e);
        99 <= e && (e = "99", $(".show-param1").html(e));
        b()
    });
    $(".popup-del").click(function() {
        e = 1 == e.length ? 0 : e.substring(0, e.length - 1);
        $(".show-param1").html(e);
        b()
    });
    $(".popup-clear").click(function() {
        e = 0;
        $(".show-param1").html(0);
        b()
    });
    popupOnOff()
}

function popupList9_1(a) {
    function b() {
        a.setValue($(".show-param1").html());
        a.setText($(".show-param1").html())
    }
    var d = '<div class="popup popup1"><div class="title">\u6570\u5b57<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><ul class="popup-keyboard-ul1"><li><ul><li class="key key1" text="1"><span>1</span></li><li class="key key2" text="2"><span>2</span></li><li class="key key3" text="3"><span>3</span></li><li class="key key0" text="0"><span>0</span></li></ul></li><li><ul><li class="key key4" text="4"><span>4</span></li><li class="key key5" text="5"><span>5</span></li><li class="key key6" text="6"><span>6</span></li><li><span class="key-sign">\u00b1</span></li></ul></li><li><ul><li class="key key7" text="7"><span>7</span></li><li class="key key8" text="8"><span>8</span></li><li class="key key9" text="9"><span>9</span></li><li class="key-clear"><span>C</span></li></ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(d);
    $(".popup-keyboard-ul1 ul .key").click(function() {
        var a = $(".show-param1").html();
        if (0 == a.indexOf("-") && 4 <= a.length || -1 == a.indexOf("-") && 3 <= a.length) return !1;
        $(".show-param1").html(("0" == a ? "" : a) + $(this).find("span").html());
        b()
    });
    $(".key-clear").click(function() {
        $(".show-param1").html("0");
        b()
    });
    $(".key-sign").click(function() {
        var a = $(".show-param1").html();
        $(".show-param1").html(-a);
        b()
    });
    popupOnOff()
}

function popupList9_2(a) {
    var b = '<div class="popup popup1"><div class="title">\u7b26\u53f7<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><ul class="clearfix popup1-symbol"><li text_="0">></li><li text_="1"><</li><li text_="2">=</li><li text_="3">\u2260</li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var d = $(".popup1-symbol li");
    d.eq(a.value_).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        a.setValue($(this).attr("text_"));
        a.setText($(this).text());
        $(".show-param1").html($(this).text())
    });
    popupOnOff()
}

function popupList10_2(a, b) {
    b = '<div class="popup popup1"><div class="title">Air<span class="show-param1">' + a.text_ + "</span>\u98de\u884c<span>" + b.text_ + '</span>\u79d2</div><div class="popup-content"><ul class="popup3-ul1"><li><ul><li text_="0">\u5411\u4e0a</li><li text_="1">\u5411\u524d</li><li text_="2">\u5411\u5de6</li></ul></li><li><ul><li text_="3">\u5411\u4e0b</li><li text_="4">\u5411\u540e</li><li text_="5">\u5411\u53f3</li></ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var d = $(".popup3-ul1 ul li");
    d.eq(a.value_).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        a.setValue($(this).attr("text_"));
        a.setText($(this).html());
        $(".show-param1").html($(this).html())
    });
    popupOnOff()
}

function popupList10_3(a, b) {
    function d() {
        if (10 <= c) return !1;
        c = Number(c);
        c += .1;
        c = Number(c.toFixed(1));
        0 == c % 1 && (c += ".0");
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }

    function e() {
        if (0 >= c) return !1;
        c = Number(c);
        c -= .1;
        c = Number(c.toFixed(1));
        0 == c % 1 && (c += ".0");
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }
    b = '<div class="popup popup1"><div class="title">Air<span>' + b.text_ + '</span>\u98de\u884c<span class="show-param1">' + a.text_ + '</span>\u79d2</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl"></li><li class="add fr"></li><li class="time">' + a.value_ + '</li></ul></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var c = parseFloat($(".time").html()),
        g, f;
    $(".add").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        e();
        g = setTimeout(function() {
            f = setInterval(function() {
                e()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function popupList11(a) {
    var b = '<div class="popup popup1"><div class="title">\u62cd\u7167\u6a21\u5f0f \u8fde\u62cd<span class="show-param1">' + a.text_ + '</span>\u5f20</div><div class="popup-content"><ul class="popup-camera-ul1"><li><ul><li text_="0">1\u5f20</li><li text_="1">2\u5f20</li><li text_="2">3\u5f20</li></ul></li><li><ul><li text_="3">5\u5f20</li><li text_="4">10\u5f20</li><li text_="5">15\u5f20</li></ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) parseInt(d.eq(b).html()) == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = parseInt($(this).html());
        $(".show-param1").html(b);
        a.setValue($(".show-param1").html());
        a.setText($(".show-param1").html())
    });
    popupOnOff()
}

function popupList12(a) {
    var b = '<div class="popup popup1"><div class="title">\u5f55\u50cf\u6a21\u5f0f \u62cd\u6444<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><ul class="popup-video-ul1"><li><ul><li text_="0">5\u79d2</li><li text_="1">30\u79d2</li><li text_="2">45\u79d2</li></ul></li><li><ul><li text_="3">60\u79d2</li><li text_="4">90\u79d2</li><li text_="5">120\u79d2</li></ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-video-ul1 ul li"), b = 0; b < d.length; b++) parseInt(d.eq(b).html()) == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = parseInt($(this).html());
        $(".show-param1").html(b);
        a.setValue($(".show-param1").html());
        a.setText($(".show-param1").html())
    });
    popupOnOff()
}

function popupList13(a) {
    var b = '<div class="popup popup1"><div class="title">\u5f55\u50cf\u6a21\u5f0f <span class="show-param1">' + a.text_ + '</span>\u62cd\u6444</div><div class="popup-content"><ul class="popup-onOff clearfix"><li text_="0"><span></span></li><li text_="1"><span></span></li><li text_="2"><span></span></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var d = $(".popup-onOff li");
    d.eq(a.value_).addClass("popup-onOff-active");
    d.click(function() {
        d.removeClass("popup-onOff-active");
        $(this).addClass("popup-onOff-active");
        0 == $(this).attr("text_") ? $(".show-param1").html("\u5f00\u59cb") : 1 == $(this).attr("text_") ? $(".show-param1").html("\u6682\u505c") : $(".show-param1").html("\u505c\u6b62");
        a.setValue($(this).attr("text_"));
        a.setText($(".show-param1").html())
    });
    popupOnOff()
}


//亮度（可以增减）
function popupList14(a) {
    function b() {
        if (200 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }

    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1"><div class="title">\u63a7\u5236\u98de\u884c\u9ad8\u5ea6\u5230<span class="show-param1">' + a.text_ + '</span>\u5398\u7c73</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl"></li><li class="add fr"></li><li class="time oHeight">' + a.text_ + '</li></ul></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function popupList15(a) {
    function b() {
        if (200 <= f) return !1;
        f = Number(f);
        f++;
        $(".oHeight").html(f);
        c.setValue($(".oHeight").html());
        c.setText($(".oHeight").html());
        $(".show-param2").html($(".oHeight").html())
    }

    function d() {
        if (0 >= f) return !1;
        f = Number(f);
        f--;
        f = Number(f.toFixed(1));
        $(".oHeight").html(f);
        c.setValue($(".oHeight").html());
        c.setText($(".oHeight").html());
        $(".show-param2").html($(".oHeight").html())
    }
    var e = a.inputList[0].fieldRow[2],
        c = a.inputList[0].fieldRow[4];
    a = '<div class="popup popup1"><div class="title">Air<span class="show-param1">' + e.text_ + '</span>\u98de\u884c<span class="show-param2">' + c.text_ + '</span>\u5398\u7c73</div><div class="popup-content clearfix"><div class="popup1-ultra-air"><ul class="popup1-ultra-ul1 fl"><li><span>\u5411\u4e0a</span><em text_="0"></em></li><li><em text_="1"></em><span>\u5411\u4e0b</span></li></ul><ul class="popup1-ultra-ul2 fl"><li class="minus fl"></li><li class="add fr"></li><li class="time oHeight">' + c.text_ + '</li></ul></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(a);
    var g = $(".popup1-ultra-ul1 li em");
    $(".popup1-ultra-ul1 li").eq(e.value_).find("em").addClass("activ");
    g.click(function() {
        g.removeClass("activ");
        $(this).addClass("activ");
        0 == $(this).attr("text_") ? $(".show-param1").html("\u5411\u4e0a") : $(".show-param1").html("\u5411\u4e0b");
        e.setValue($(this).attr("text_"));
        e.setText($(".show-param1").html())
    });
    var f = parseFloat($(".oHeight").html()),
        k, h;
    $(".add").on("touchstart", function() {
        b();
        k = setTimeout(function() {
            h = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(k);
        clearInterval(h)
    });
    $(".minus").on("touchstart", function() {
        d();
        k = setTimeout(function() {
            h = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(k);
        clearInterval(h)
    });
    popupOnOff()
}

function popupList16(a) {
    var b = a.inputList[0].fieldRow[2];
    a = a.inputList[0].fieldRow[4];
    var d = '<div class="popup popup1"><div class="title"><span class="show-param1">' + b.text_ + '</span>\u4eae\u5ea6<span class="show-param2">' + a.text_ + '</span></div><div class="popup-content clearfix"><div class="popup1-rgb"><div class="popup1-rgb-number fl"><ul class="clearfix"><li><span text_="1">1</span></li><li><span text_="2">2</span><span text_="5">5</span><span text_="0">\u5168\u90e8</span></li><li><span text_="3">3</span><span text_="4">4</span></li></ul></div><div class="popup1-rgb-light fl"><div class="popup1-rgb-img"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove"><div class="popup1-rgb-circle"><img src="images/popup-circle2.png"></div></div></div></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(d);
    for (var e = $(".popup1-rgb-number ul span"), d = 0; d < e.length; d++) e.eq(d).attr("text_") == b.value_ && e.eq(d).addClass("popup-active");
    e.click(function() {
        e.removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        b.setValue($(this).attr("text_"));
        b.setText($(".show-param1").html())
    });
    lightChange("popup1-rgb-groove", "popup1-rgb-circle", "show-param2", "popup1-rgb-img", a);
    popupOnOff()
}
/* 灯住颜色*/
function popupList17(a) {
    $("#popup_list").show();
    $("body").append('<div class="popup popup1"><div class="title">RGB\u706f\u989c\u8272</div><div class="popup-content clearfix"><div class="popup1-color-left fl"><div class="popup1-color-box"><ul><li>R:<span class="popup-param1">0</span></li><li>G:<span class="popup-param2">0</span></li><li>B:<span class="popup-param3">0</span></li></ul></div></div><div class="popup1-color-right fl"><div class="popup1-color-change"><ul><li class="popup-rgb-groove-r"><span class="popup-rgb-box-r"></span></li><li class="popup-rgb-groove-g"><span class="popup-rgb-box-g"></span></li><li class="popup-rgb-groove-b"><span class="popup-rgb-box-b"></span></li></ul></div></div></div><button class="popup-btn">\u786e\u8ba4</button></div>');
    var b = a.colour_.substring(1),
        d = parseInt(b.substring(2, 0), 16),
        e = parseInt(b.substring(4, 2), 16),
        b = parseInt(b.substring(6, 4), 16);
    $(".popup-param1").html(d);
    $(".popup-param2").html(e);
    $(".popup-param3").html(b);
    d = rgbValue("popup-rgb-groove-r", "popup-rgb-box-r", d);
    e = rgbValue("popup-rgb-groove-g", "popup-rgb-box-g", e);
    b = rgbValue("popup-rgb-groove-b", "popup-rgb-box-b", b);
    $(".popup-rgb-box-r").css("left", d);
    $(".popup-rgb-box-g").css("left", e);
    $(".popup-rgb-box-b").css("left", b);
    e = $(".popup1-color-box");
    e.css("backgroundColor", a.colour_);
    rbgColor("popup-rgb-groove-r", "popup-rgb-box-r", "popup-param1", a, e);
    rbgColor("popup-rgb-groove-g", "popup-rgb-box-g", "popup-param2", a, e);
    rbgColor("popup-rgb-groove-b", "popup-rgb-box-b", "popup-param3", a, e);
    popupOnOff()
}

function popupList18(a, b, d) {
    function e() {
        if (10 <= f) return !1;
        f = Number(f);
        f++;
        $(".time").html(f);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }

    function c() {
        if (0 >= f) return !1;
        f = Number(f);
        f--;
        f = Number(f.toFixed(1));
        $(".time").html(f);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }
    var g = '<div class="popup popup4"><div class="title">RGB<span class="show-param1">' + a.text_ + '</span>\u79d2\u5185\u989c\u8272\u6e10\u53d8</div><div class="popup-content clearfix"><ul class="popup4-gradual"><li><div class="popup4-color-box1"></div></li><li><ul><li class="minus minus2 active fl"></li><li class="add add2 fr"></li><li class="time time2">' + a.text_ + '</li></ul><div class="popup4-arrows"></div><p class="popup4-arrows-text">\u6e10\u53d8\u4e3a</p></li><li><div class="popup4-color-box2"></div></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(g);
    $(".popup4-color-box1").css("backgroundColor", b.colour_);
    $(".popup4-color-box2").css("backgroundColor", d.colour_);
    var f = parseFloat($(".time").html()),
        k, h;
    $(".add").on("touchstart", function() {
        e();
        k = setTimeout(function() {
            h = setInterval(function() {
                e()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(k);
        clearInterval(h)
    });
    $(".minus").on("touchstart", function() {
        c();
        k = setTimeout(function() {
            h = setInterval(function() {
                c()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(k);
        clearInterval(h)
    });
    popupOnOff()
}

function popupList19(a) {
    var b = a.inputList[0].fieldRow[2];
    a = a.inputList[0].fieldRow[4];
    var d = '<div class="popup popup1"><div class="title"><span class="show-param1">' + b.text_ + '</span>\u4eae\u5ea6<span class="show-param2">' + a.text_ + '</span></div><div class="popup-content clearfix"><div class="popup1-led-left fl"><ul><li text_="0">\u5168\u90e8</li><li text_="1">LED1</li><li text_="2">LED2</li></ul></div><div class="popup1-led-right fl"><div class="popup1-rgb-img"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove"><div class="popup1-rgb-circle"><img src="images/popup-circle2.png"></div></div></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(d);
    var e = $(".popup1-led-left ul li");
    e.eq(b.value_).addClass("popup-active");
    e.click(function() {
        e.removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        b.setValue($(this).attr("text_"));
        b.setText($(".show-param1").html())
    });
    lightChange("popup1-rgb-groove", "popup1-rgb-circle", "show-param2", "popup1-rgb-img", a);
    popupOnOff()
}


//电机复杂设置
function popupList20(a) {
    function b() {
        if (10 <= h) return !1;
        h = Number(h);
        h++;
        $(".time2").html(h);
        c.setValue($(".time2").html());
        c.setText($(".time2").html());
        $(".show-param2").html($(".time2").html())
    }

    function d() {
        if (0 >= h) return !1;
        h = Number(h);
        h--;
        h = Number(h.toFixed(1));
        $(".time2").html(h);
        c.setValue($(".time2").html());
        c.setText($(".time2").html());
        $(".show-param2").html($(".time2").html())
    }
    var e = a.inputList[0].fieldRow[1],
        c = a.inputList[0].fieldRow[2],
        g = a.inputList[0].fieldRow[4];
    a = a.inputList[0].fieldRow[6];
    var f = '<div class="popup popup5"><div class="title"><span class="show-param1">' + e.text_ + '</span><span class="show-param2">' + c.text_ + '</span>\u79d2\u5185 \u4eae\u5ea6<span class="show-param3">' + g.text_ + '</span>\u6e10\u53d8\u4e3a<span class="show-param4">' + a.text_ + '</span></div><div class="popup-content clearfix"><div class="popup5-led-top"><ul class="clearfix"><li text_="0">\u5168\u90e8</li><li text_="1">LED1</li><li text_="2">LED2</li></ul></div><div class="popup5-led-left fl"><div class="popup1-rgb-img popup5-img1"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove popup5-groove1"><div class="popup1-rgb-circle popup5-circle1"><img src="images/popup-circle2.png"></div></div></div><div class="popup5-led-right fr"><div class="popup1-rgb-img popup5-img2"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove popup5-groove2"><div class="popup1-rgb-circle popup5-circle2"><img src="images/popup-circle2.png"></div></div></div><div class="popup1-led-center"><ul class="clearfix"><li class="minus minus2 fl"></li><li class="add add2 fr"></li><li class="time time2">' + c.text_ + '</li></ul><div class="popup4-arrows"></div><p class="popup4-arrows-text">\u6e10\u53d8\u4e3a</p></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(f);
    var k = $(".popup5-led-top ul li");
    k.eq(e.value_).addClass("popup-active");
    k.click(function() {
        k.removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        e.setValue($(this).attr("text_"));
        e.setText($(".show-param1").html())
    });
    var h = parseFloat($(".time2").html()),
        l, m;
    $(".add").on("touchstart", function() {
        b();
        l = setTimeout(function() {
            m = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(l);
        clearInterval(m)
    });
    $(".minus").on("touchstart", function() {
        d();
        l = setTimeout(function() {
            m = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(l);
        clearInterval(m)
    });
    lightChange("popup5-groove1", "popup5-circle1", "show-param3", "popup5-img1", g);
    lightChange("popup5-groove2", "popup5-circle2", "show-param4", "popup5-img2", a);
    popupOnOff()
}

function popupList21_1(a, b) {
    b = '<div class="popup popup6"><div class="title">\u8702\u9e23\u5668\u54cd<span class="show-param1">' + a.text_ + "</span>\u97f3\u8c03<span>" + b.text_ + '</span>\u79d2</div><div class="popup-content"><ul class="clearfix popup6-music-tones"><li text_="0"><span>Do</span></li><li text_="1"><span>Re</span></li><li text_="2"><span>Mi</span></li><li text_="3"><span>Fa</span></li><li text_="4"><span>So</span></li><li text_="5"><span>La</span></li><li text_="6"><span>Si</span></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    $(".popup6-music-tones li").click(function() {
        $(".show-param1").html($(this).find("span").html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).find("span").html())
    });
    popupOnOff()
}

function popupList21_2(a, b) {
    function d() {
        if (2 <= c) return !1;
        c = Number(c);
        c += .25;
        c = Number(c.toFixed(2));
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param2").html($(".time").html())
    }

    function e() {
        if (.25 >= c) return !1;
        c = Number(c);
        c -= .25;
        c = Number(c.toFixed(2));
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param2").html($(".time").html())
    }
    b = '<div class="popup popup3"><div class="title">\u8702\u9e23\u5668\u54cd<span class="show-param1">' + b.text_ + '</span>\u97f3\u8c03<span class="show-param2">' + a.text_ + '</span>\u79d2</div><div class="popup-content"><div class="popup-time"><ul><li class="minus active fl"></li><li class="add fr"></li><li class="time">' + a.text_ + '</li></ul></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var c = parseFloat($(".time").html()),
        g, f;
    $(".add").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        e();
        g = setTimeout(function() {
            f = setInterval(function() {
                e()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function popupList22(a) {
    var b = '<div class="popup popup1"><div class="title">\u64ad\u653e\u97f3\u4e50<span id="popup-music-name" class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><ul class="popup-music clearfix"><li text_="0">ABCD\u6b4c</li><li text_="1">\u5c0f\u9f99\u4eba</li><li text_="2">\u5c0f\u7ea2\u5e3d</li><li text_="3">\u96ea\u7ed2\u82b1</li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var d = $(".popup-music li");
    d.eq(a.value_).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    popupOnOff()
}

function popupList23(a) {
    function b() {
        if (10 <= c) return !1;
        c = Number(c);
        c++;
        c = Number(c.toFixed(1));
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }

    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }
    var e = '<div class="popup popup3"><div class="title">\u5ef6\u65f6<span class="show-param1">' + a.value_ + '</span>\u79d2</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl"></li><li class="add fr"></li><li class="time">' + a.value_ + '</li></ul></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".time").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function popupList24(a) {
    function b() {
        if (80 <= c) return !1;
        c = Number(c);
        c++;
        c = Number(c.toFixed(1));
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }

    function d() {
        if (1 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".time").html(c);
        a.setValue($(".time").html());
        a.setText($(".time").html());
        $(".show-param1").html($(".time").html())
    }
    var e = '<div class="popup popup3"><div class="title">\u53d1\u5c04<span class="show-param1">' + a.text_ + '</span>\u8d6b\u5179\u7ea2\u5916\u4fe1\u53f7</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl"></li><li class="add fr"></li><li class="time">' + a.text_ + '</li></ul></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".time").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function popupList25(a) {
    var b = '<div class="popup popup1"><div class="title">\u53d1\u5c04\u7ea2\u5916\u4fe1\u53f7<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><ul class="popup-infrared-txt clearfix"><li text_="1">\u521b</li><li text_="2">\u65b0</li><li text_="3">\u4e50</li><li text_="4">\u9020</li><li text_="5">\u68a6</li><li text_="6">\u60f3</li><li text_="7">\u98de</li><li text_="8">\u822a</li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    $(".popup-infrared-txt li").eq(Number(a.value_) - 1).addClass("borderActive");
    $(".popup-infrared-txt li").click(function() {
        $(".popup-infrared-txt li").removeClass("borderActive");
        $(this).addClass("borderActive");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    popupOnOff()
}

function popupList26(a, b) {
    var d = b.inputList[0].fieldRow[2];
    b = b.inputList[0].fieldRow[4];
    var e = '<div class="popup popup1"><div class="title">Air\u6307\u793a\u706f<span class="show-param1">' + d.text_ + '</span>\u4eae\u5ea6<span class="show-param2">' + b.text_ + '</span></div><div class="popup-content popup-air-content"><div class="popup-air-light-left fl"><div><span class="popup-air-light-left-mast"></span><ul><li class="light-all" text_="0">\u5168\u90e8</li><li class="light1" text_="1">1</li><li class="light2" text_="2">2</li><li class="light3" text_="3">3</li><li class="light4" text_="4">4</li></ul></div></div><div class="popup-air-light-right fl"><div class="popup1-rgb-img"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove"><div class="popup1-rgb-circle"><img src="images/popup-circle2.png"></div></div></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    $(".popup-air-light-left li").eq(d.value_).addClass("active");
    $(".popup-air-light-left li").click(function() {
        $(".popup-air-light-left ul li").removeClass("active");
        $(this).addClass("active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    lightChange("popup1-rgb-groove", "popup1-rgb-circle", "show-param2", "popup1-rgb-img", b);
    popupOnOff()
}

function onOffPattern(a, b, d) {
    0 == b.value_ ? (a.find("i").css({
        right: "auto",
        left: "0.5rem"
    }), a.addClass("emOnOff")) : (a.find("i").css({
        left: "auto",
        right: "0.5rem"
    }), a.removeClass("emOnOff"));
    a.click(function() {
        0 == b.value_ ? ($(this).find("i").css({
            left: "auto",
            right: "0.5rem"
        }), d.html("\u5f00\u542f"), b.setValue("1"), b.setText("\u5f00\u542f"), a.removeClass("emOnOff")) : ($(this).find("i").css({
            right: "auto",
            left: "0.5rem"
        }), d.html("\u5173\u95ed"), b.setValue("0"), b.setText("\u5173\u95ed"), a.addClass("emOnOff"))
    })
}

function lightChange(a, b, d, e, c) {
    a = document.getElementsByClassName(a)[0];
    var g = document.getElementsByClassName(b)[0],
        f = document.getElementsByClassName(d)[0],
        k = document.getElementsByClassName(e)[0],
        h = a.offsetWidth + 10,
        l = g.offsetWidth - 10;
    b = (h - l) / 100 * f.innerHTML;
    k.style.opacity = f.innerHTML / 100;
    g.style.left = b - 10 + "px";
    g.addEventListener("touchstart", function(a) {
        a.preventDefault();
        var b = a.touches[0].pageX,
            d = parseFloat(g.style.left) || 0;
        g.addEventListener("touchmove", function(a) {
            if (!(1 < a.targetTouches.length || a.scale && 1 !== a.scale)) {
                a = a.touches[0].pageX - b + d;
                0 >= a ? a = 0 : a >= h - l && (a = h - l);
                var e = parseInt(a / ((h - l) / 100));
                f.innerHTML = e;
                k.style.opacity = e / 100;
                g.style.left = a - 10 + "px";
                c.setValue(f.innerHTML);
                c.setText(f.innerHTML)
            }
        }, !1)
    }, !1);
    g.addEventListener("touchend", function(a) {
        document.ontuchmove = null;
        document.ontouchend = null
    }, !1)
}

function rbgColor(a, b, d, e, c) {
    a = document.getElementsByClassName(a)[0];
    var g = document.getElementsByClassName(b)[0],
        f = document.getElementsByClassName(d)[0],
        k = a.offsetWidth,
        h = g.offsetWidth,
        l = 0;
    g.addEventListener("touchstart", function(a) {
        a.preventDefault();
        var b = a.touches[0].pageX,
            d = parseFloat(g.style.left) || 0;
        g.addEventListener("touchmove", function(a) {
            1 < a.targetTouches.length || a.scale && 1 !== a.scale || (a = a.touches[0].pageX - b + d, a < h ? a = 0 : a > k && (a = k - h), l = parseInt(a / ((k - h) / 255)), 255 <= l && (l = 255), 0 >= l && (l = 0), g.style.left = a + "px", g.setAttribute("value", l), f.innerHTML = l, c.css("backgroundColor", colorBox()), e.setValue(colorBox()))
        }, !1)
    }, !1);
    g.addEventListener("touchend", function(a) {
        document.ontuchmove = null;
        document.ontouchend = null
    }, !1)
}

function colorBox() {
    var a = Number($(".popup-param1").html()),
        b = Number($(".popup-param2").html()),
        d = Number($(".popup-param3").html()),
        a = "000000" + (a << 16 | b << 8 | d).toString(16);
    return "#" + a.substr(a.length - 6)
}

function rgbValue(a, b, d) {
    a = document.getElementsByClassName(a)[0];
    b = document.getElementsByClassName(b)[0];
    return (a.offsetWidth - b.offsetWidth) / 255 * d
}

function popupOnOff() {
    $(".popup-btn,#popup_list").click(function() {
        $("#popup_list").hide();
        $(".popup").remove()
    })
}

function popupDelete() {
    $("#popup_list").show();
    $("body").append('<div class="popup popup-hint"><div class="title">\u63d0&nbsp;&nbsp;\u793a</div><div class="popup-cotent"><p class="clear-p">\u662f\u5426\u5220\u9664\u6240\u6709\u7684\u5757\uff1f</p></div><ul class="clearfix btn-ul"><li class="btn-confirm">\u786e\u8ba4</li><li class="btn-cancel">\u53d6\u6d88</li></ul></div>');
    $(".btn-confirm").click(function() {
        Blockly.mainWorkspace.clear();
        $("#popup_list").hide();
        $(".popup").remove();
        Code.recover();
        zoomCenter2()
    });
    $(".btn-cancel,#popup_list").click(function() {
        $("#popup_list").hide();
        $(".popup").remove()
    })
}

function zoomCenter() {
    var a = Blockly.mainWorkspace;
    a.markFocused();
    a.setScale(a.options.zoomOptions.startScale);
    a.scrollCenter()
}

function zoomCenter2() {
    var a = Blockly.mainWorkspace;
    a.markFocused();
    a.setScale(a.options.zoomOptions.startScale);
    a.scrollCenter2()
};

function mylist1(a) {
    var b = '<div class="popup popup1"><div class="title">\u989c\u8272</div><div class="popup-content"><ul class="popup-camera-ul1"><li><ul><li text_="0" style="background-color:#FA5BDC">\u7c89\u8272</li><li text_="1" style="background-color: #5BC0F6">\u84dd\u8272</li><li text_="2" style="background-color: #F6943B">\u9ec4\u8272</li></ul></li><li><ul><li text_="3" style="background-color: #68C84A">\u7eff\u8272</li><li text_="4" style="background-color: #9C52C1">\u7d2b\u8272</li><li text_="5" style="background-color: #36D0B8">\u6d45\u7eff\u8272</li></ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).html();
        console.log(b);
        $(".show-param1").html(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

function mylist2(a) {
    var b = '<div class="popup popup1"><div class="title">\u706f\u67f1</div><div class="popup-content"><ul class="popup-camera-ul1"><li><ul><li text_="0">\u5168\u90e8</li><li text_="1" >1</li><li text_="2" >2</li></ul></li><li><ul><li text_="3" >3</li><li text_="4" >4</li><li text_="5">5</li></ul></li></ul></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).html();
        console.log(b);
        $(".show-param1").html(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}


function mylist3(a,b) {
    var e = '<div class="popup popup1"><div class="title">\u9ad8\u4eae\u004c\u0045\u0044<span class="show-param1">' + a.text_ + '</span>%</div><div class="popup-content popup-air-content"><div class="popup-air-light-right"><div class="popup1-rgb-img"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove" style="margin-left: 8.5rem;"><div class="popup1-rgb-circle"><img src="images/popup-circle2.png"></div></div></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    $(".popup-air-light-left li").eq(a.value_).addClass("active");
    $(".popup-air-light-left li").click(function() {
        $(".popup-air-light-left ul li").removeClass("active");
        $(this).addClass("active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    lightChange("popup1-rgb-groove", "popup1-rgb-circle", "show-param1", "popup1-rgb-img", a);
    popupOnOff()
}

function mylist4(a) {
    var b = '<div class="popup popup1" style="height: 18rem"><div class="title">\u0052\u0047\u0042\u706f\u5149<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u0052\u0047\u0042\u706f\u5149</span><em class="fr"><i></i></em></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}

function mylist5(a) {
    var b = '<div class="popup popup1" style="height: 18rem"><div class="title">\u9ad8\u4eae\u004c\u0045\u0044<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u9ad8\u4eae\u004c\u0045\u0044</span><em class="fr"><i></i></em></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}

function mylist6_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#F6943B">\u0052\u0047\u0042\u706f</div><div class="popup-content dianji"><ul class="popup-camera-ul1"><li><ul><li text_="0">A</li><li text_="1" >B</li><li text_="2" >AB</li></ul></li></ul></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).html();
        console.log(b);
        $(".show-param1").html(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

function mylist6_2(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#F6943B">\u8bbe\u7f6e\u65b9\u5411</div><div class="popup-content dianji"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">\u6b63\u8f6c</li><li text_="1" >\u53cd\u8f6c</li></ul></li></ul></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).html();
        console.log(b);
        $(".show-param1").html(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

function mylist6_3(a) {
    var e = '<div class="popup popup1"><div class="title" style="background-color: #F6943B;">\u8bbe\u7f6e\u7535\u673a \u901f\u5ea6<span class="show-param1" style="color:#F6943B">' + a.text_ + '</span>%</div><div class="popup-content popup-air-content"><div class="popup-air-light-right"><div class="popup1-rgb-img"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove" style="margin-left: 8.5rem;"><div class="popup1-rgb-circle"><img src="images/popup-circle2.png"></div></div></div></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    $(".popup-air-light-left li").eq(a.value_).addClass("active");
    $(".popup-air-light-left li").click(function() {
        $(".popup-air-light-left ul li").removeClass("active");
        $(this).addClass("active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    lightChange("popup1-rgb-groove", "popup1-rgb-circle", "show-param1", "popup1-rgb-img", a);
    popupOnOff()
}

//亮度（可以增减）   电机的秒
function mylist6_4(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c+=1;
        c = Number(c.toFixed(1))
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c-=1;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1"><div class="title" style="background-color:#F6943B">\u8bbe\u7f6e\u7535\u673a\u65f6\u95f4<span class="show-param1" style="color:#F6943B">' + a.text_ + '</span>\u79d2</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#F6943B">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

//电机的分钟
function mylist6_5(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c+=1;
        c = Number(c.toFixed(1))
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c-=1;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1"><div class="title" style="background-color:#F6943B">\u8bbe\u7f6e\u7535\u673a\u65f6\u95f4<span class="show-param1" style="color:#F6943B">' + a.text_ + '</span>\u5206</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#F6943B">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}


//电机的毫秒
function mylist6_6(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c+=1;
        c = Number(c.toFixed(1))
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c-=1;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1"><div class="title" style="background-color:#F6943B">\u8bbe\u7f6e\u7535\u673a\u65f6\u95f4<span class="show-param1" style="color:#F6943B">' + a.text_ + '</span>\u6beb\u79d2</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#F6943B">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}


/*停止电机*/
function mylist7(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#F6943B">\u505c\u6b62\u7535\u673a</div><div class="popup-content dianji"><ul class="popup-camera-ul1"><li><ul><li text_="0">A</li><li text_="1" >B</li><li text_="2" >AB</li></ul></li></ul></div><button class="popup-btn" style="background-color:#F6943B">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).html();
        console.log(b);
        $(".show-param1").html(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

//亮度（可以增减）
function mylist8(a) {
    function b() {
        if (200 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuptime"><div class="title" style="background-color:#68C84A">\u7b49\u5f85\u65f6\u95f4<span class="show-param1" style="color:#68C84A">' + a.text_ + '</span>\u79d2</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#68C84A">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#68C84A">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}


function mylist9(a) {
    function b() {
        if (200 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuploop"><div class="title" style="background-color:#9C52C1">\u91cd\u590d\u6267\u884c<span class="show-param1" style="color:#9C52C1">' + a.text_ + '</span>\u6b21</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#9C52C1">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function mylist10_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#9C52C1">\u7ea2\u5916\u7ebf\u4f20\u611f\u5668</div><div class="popup-content kongzhi"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">></li><li text_="1" ><</li></ul></li></ul></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).text();
        console.log(b);
        $(".show-param1").text(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

function mylist10_2(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuploop"><div class="title" style="background-color:#9C52C1">\u7ea2\u5916\u7ebf\u4f20\u611f\u5668<span class="show-param1" style="color:#9C52C1">' + a.text_ + '</span>%</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#9C52C1">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function mylist11_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#9C52C1">\u5149\u7ebf\u5f3a\u5ea6</div><div class="popup-content kongzhi"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">></li><li text_="1" ><</li></ul></li></ul></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).text();
        console.log(b);
        $(".show-param1").text(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

function mylist11_2(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuploop"><div class="title" style="background-color:#9C52C1">\u5149\u7ebf\u5f3a\u5ea6<span class="show-param1" style="color:#9C52C1">' + a.text_ + '</span>%</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#9C52C1">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

function mylist12_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#9C52C1">\u58f0\u97f3\u5927\u5c0f</div><div class="popup-content kongzhi"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">></li><li text_="1" ><</li></ul></li></ul></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).text();
        console.log(b);
        $(".show-param1").text(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

function mylist12_2(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuploop"><div class="title" style="background-color:#9C52C1">\u58f0\u97f3\u5927\u5c0f<span class="show-param1" style="color:#9C52C1">' + a.text_ + '</span>%</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#9C52C1">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}


/*按钮单击双击的弹窗*/
function mylist29_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#9C52C1">\u6309\u94ae</div><div class="popup-content kongzhi"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">\u5355\u51fb</li><li text_="1" >\u53cc\u51fb</li></ul></li></ul></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).text();
        console.log(b);
        $(".show-param1").text(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

/*电位器的大于小于弹窗*/
function mylist30_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#9C52C1">\u7535\u4f4d\u5668</div><div class="popup-content kongzhi"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">></li><li text_="1" ><</li></ul></li></ul></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).text();
        console.log(b);
        $(".show-param1").text(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}


/*电位器的电压百分比*/

function mylist30_2(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuploop"><div class="title" style="background-color:#9C52C1">\u7535\u4f4d\u5668<span class="show-param1" style="color:#9C52C1">' + a.text_ + '</span>%</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#9C52C1">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}


/*运动感知的弹窗*/

function mylist31_1(a) {
    var b = '<div class="popup popup1" style="height: 18rem"><div class="title">\u8fd0\u52a8\u611f\u77e5<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u8fd0\u52a8\u611f\u77e5</span><em class="fr"><i></i></em></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}



/*重力感应的大于小于弹窗*/
function mylist32_1(a) {
    var b = '<div class="popup popup1" style="height: 16rem"><div class="title" style="background-color:#9C52C1">\u91cd\u529b\u611f\u5e94</div><div class="popup-content kongzhi"><ul class="popup-camera-ul1" style="margin: 2.5rem 0 0 5.5rem"><li><ul><li text_="0">></li><li text_="1" ><</li></ul></li></ul></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    for (var d = $(".popup-camera-ul1 ul li"), b = 0; b < d.length; b++) d.eq(b).html() == a.value_ && d.eq(b).addClass("popup-active");
    d.click(function() {
        d.removeClass("popup-active");
        $(this).addClass("popup-active");
        var b = $(this).text();
        console.log(b);
        $(".show-param1").text(b);
        a.setValue(b);
        a.setText(b)
    });
    popupOnOff()
}

/*重力感应的电压百分比*/

function mylist32_2(a) {
    function b() {
        if (100 <= c) return !1;
        c = Number(c);
        c++;
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    function d() {
        if (0 >= c) return !1;
        c = Number(c);
        c--;
        c = Number(c.toFixed(1));
        $(".oHeight").html(c);
        a.setValue($(".oHeight").html());
        a.setText($(".oHeight").html());
        $(".show-param1").html($(".oHeight").html())
    }
    var e = '<div class="popup popup1 popuploop"><div class="title" style="background-color:#9C52C1">\u91cd\u529b\u611f\u5e94<span class="show-param1" style="color:#9C52C1">' + a.text_ + '</span>%</div><div class="popup-content"><div class="popup-time"><ul><li class="minus fl djminus"></li><li class="add fr"></li><li class="time oHeight" style="color:#9C52C1">' + a.text_ + '</li></ul></div></div><button class="popup-btn" style="background-color:#9C52C1">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    var c = parseFloat($(".oHeight").html()),
        g, f;
    $(".add").on("touchstart", function() {
        b();
        g = setTimeout(function() {
            f = setInterval(function() {
                b()
            }, 50)
        }, 200)
    });
    $(".add").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    $(".minus").on("touchstart", function() {
        d();
        g = setTimeout(function() {
            f = setInterval(function() {
                d()
            }, 50)
        }, 200)
    });
    $(".minus").on("touchend", function() {
        clearTimeout(g);
        clearInterval(f)
    });
    popupOnOff()
}

/*自锁开关的弹窗*/


function mylist33_1(a) {
    var b = '<div class="popup popup1" style="height: 18rem"><div class="title">\u81ea\u9501\u5f00\u5173<span class="show-param1">' + a.text_ + '</span></div><div class="popup-content"><div class="popup-pattern popup1-pattern"><span class="fl">\u81ea\u9501\u5f00\u5173</span><em class="fr"><i></i></em></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(b);
    var b = $(".popup em"),
        d = $(".show-param1");
    onOffPattern(b, a, d);
    popupOnOff()
}
/*蜂鸣器*/
function mylist34_1(a,b) {
    var e = '<div class="popup popup1"><div class="title">\u8702\u9e23\u5668<span class="show-param1">' + a.text_ + '</span>%</div><div class="popup-content popup-air-content"><div class="popup-air-light-right"><div class="popup1-rgb-img"><img src="images/popup-light.png"></div><div class="popup1-rgb-groove" style="margin-left: 8.5rem;"><div class="popup1-rgb-circle"><img src="images/popup-circle2.png"></div></div></div></div><button class="popup-btn">\u786e\u8ba4</button></div>';
    $("#popup_list").show();
    $("body").append(e);
    $(".popup-air-light-left li").eq(a.value_).addClass("active");
    $(".popup-air-light-left li").click(function() {
        $(".popup-air-light-left ul li").removeClass("active");
        $(this).addClass("active");
        $(".show-param1").html($(this).html());
        a.setValue($(this).attr("text_"));
        a.setText($(this).html())
    });
    lightChange("popup1-rgb-groove", "popup1-rgb-circle", "show-param1", "popup1-rgb-img", a);
    popupOnOff()
}

