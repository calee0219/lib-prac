var str1, str2, str3, str4, str5, str6, str7, str8,str9,str10,str11;
for(var i in CARDS)
{
    str1 = "<div class=\"row\">";
    str2 = "<div class=\"col-sm-6 col-md-4\">";
    str3 = "<div class=\"thumbnail\">"
    str4 = "<img src="+CARDS[i].Cover+">";
    str5 = "<div class=\"caption\">";
    str6 = "<h3>"+CARDS[i].Title+"</h3>";
    str7 = "<p>活動日期 ："+CARDS[i].Begin+"~"+CARDS[i].End+"</p>";
    str8 = "<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">更多詳情</a></p></div></div></div>";
    str9 = str9+str1+str2+str3+str4+str5+str6+str7+str8;
}
$(".row").append(str9);