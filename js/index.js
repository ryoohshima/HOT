const TAB_ARRAY = {
    "company_tab_philosophy": "company_contents_philosophy",
    "company_tab_about": "company_contents_about",
    "company_tab_history": "company_contents_history",
    "company_tab_overview": "company_contents_overview",
};

$("#company_tab_wrap div").click(function(){
    $(this).addClass("active_tab");
    const click_tab = $(this).attr("id")
});
