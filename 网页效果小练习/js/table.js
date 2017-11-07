;(function($){  
    $.fn.extend({
    	"Table":function(divId,id,row,col,headList,content){  
		var content = [
    {"shopName":"Pokka Cafe Grill Specialist","shopStar":3,"categories":"日本菜/咖啡店/日式西餐"},
    {"shopName":"黑福多拉麺","shopStar":3,"categories":"日本菜/拉麺/夀司"},
    {"shopName":"牛陣","shopStar":3.5,"categories":"日本菜/火鍋/日式西餐"},
	{"shopName":"4","shopStar":4,"categories":"4"},
    {"shopName":"5","shopStar":5,"categories":"5"},
    {"shopName":"6","shopStar":6,"categories":"6"},
    {"shopName":"7","shopStar":7,"categories":"7"},
    {"shopName":"8","shopStar":8,"categories":"8"},
    {"shopName":"9","shopStar":9,"categories":"9"},
    {"shopName":"10","shopStar":10,"categories":"10"}
];
        // var row = 16;
        var table = $("<table class='re' id="+id+">"),
        // 设置表头
        setHead = function(){
        	for(var n = 0;n<col;n++){
				var th = $("<th>"+headList[n]+"</th>");
				$(th).appendTo(table);
			}
		},
		// 设置内容
		setContent = function() {
			var td = new Array();
			var td_arr = new Array();
			$.each(content,
			function(i, item) {
				$.each(item,
				function(j, val) {
					td.push(val);
					if (td[x] == null) td[x] = " ";
				});
			});
			// 获取实际输入的内容项
			for (var real_row = 0; real_row < td.length; real_row += col - 1) {
				td_arr.push(td.slice(real_row, real_row + col));
			}
			// 内容置空
			for (var y = 0; y < row; y++) {
				var tr = $("<tr>");
				$(tr).appendTo(table);
				for (var x = 0 + (col * y); x < col * (y + 1); x++) {
					$("<td>" + " " + "</td>").appendTo(tr);
				}
				$("</tr>").appendTo(table);
				// 设置序号
				for (var i = 0; i < row; i++) {
					$("#re tr:eq(" + i + ") td:eq(0)").text(i + 1);
				}
				// 设置内容
				for (var r = 0; r < td_arr.length; r++) {
					for (var c = 1; c <= col; c++) {
						$("#re tr:eq(" + r + ") td:eq(" + c + ")").text(td_arr[r][c - 1]);
					}
				}
			}
		};

		table.appendTo($(divId));
		
		$("<thead>").appendTo(table);
		setHead();
		$("</thead>").appendTo(table);
		$("<tbody>").appendTo(table);
		setContent();
		$("</tbody>").appendTo(table);
		$(divId).append("</table>");
		// 样式
		$(".re th:eq(0),#bank th:eq(0)").css({"width":"50px","text-align":"center"});
		$("#re tr td:last-child()").css({"width":"50px","margin":"0 auto","vertical-align": "middle"})
		$(".re tr td:first-child()").css({"background":"linear-gradient(to bottom, #f9f9f9 , #f1f1f1)","text-align":"center"})
		
    }//table结束  
	});//fn结束
}(jQuery));
  