// *******
// * all *
// *******

// メニューボタンのクリック
const top_menu = $("#top_menu");
const header_menu = $("#header_menu");
const icon = $(".humberger");
const icon_inner_div = $(".humberger_inner div");
const path = location.pathname;
const file = path.split("/").slice(-1)[0];
icon.on("click", () => {
    // top menu
    if (file === "index.html" || !file) {
        if (top_menu.css("display") === "none") {
            top_menu.fadeIn().css("display", "inline-block");
            icon_inner_div.addClass("open");
        } else {
            top_menu.fadeOut();
            icon_inner_div.removeClass("open");
        }
    // menu
    } else {
        if (header_menu.css("display") === "none") {
            header_menu.fadeIn().css("display", "inline-block");
            icon.css("border", "1px solid rgb(255, 255, 255)");
            icon_inner_div.css("background-color", "rgb(255, 255, 255)");
            icon_inner_div.addClass("open");
        } else {
            header_menu.fadeOut();
            icon.css("border", "1px solid rgb(59, 59, 59)");
            icon_inner_div.css("background-color", "rgb(59, 59, 59)");
            icon_inner_div.removeClass("open");
        }
    }
});


// ***********
// * company *
// ***********
let val;
const change_contents = (val) => {
    // コンテンツ全非表示
    $("#company_contents div").fadeOut();
    // タブに連動するコンテンツを表示
    setTimeout(function() {
        $("#" + TAB_ARRAY[val]).fadeIn();
    }, 500);
};

// コンテンツ切り替え(pc)
const TAB_ARRAY = {
    "company_tab_philosophy": "company_contents_philosophy",
    "company_tab_about":      "company_contents_about",
    "company_tab_history":    "company_contents_history",
    "company_tab_overview":   "company_contents_overview",
};

$("#company_tab_wrap div").click(function() {
    // class全削除
    $("#company_tab_wrap div").removeClass("active_tab");
    // クリックしたタブのみクラス追加
    $(this).addClass("active_tab");

    // クリックしたタブのid取得
    val = $(this).attr("id")
    change_contents(val);
});

// コンテンツ切り替え(sp)
$("#company_pulldown_wrap select").change(function() {
    val = $(this).val();
    change_contents(val);
});
