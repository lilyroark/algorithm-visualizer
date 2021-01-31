/*
 * Called when "submit" button is pushed, begins sorting animation
 */
var sort = function() {
	
	// Parse input from numbers to sort 
	var numString = document.getElementById("nums").value.split(",");
	var nums = [];
	for (var i = 0; i < numString.length; i++) {
		var num = parseFloat(numString[i].trim());
		var spanNum = document.createElement("span");
		spanNum.setAttribute("id", "index" + i);
		spanNum.textContent = num;
		spanNum.className = "num";
		document.getElementById("numArray").appendChild(spanNum);
		nums.push(spanNum);
		realNums.push(num);
	}
	
	
	var i = 0;
	var j = 1;
	var swap = false;
	var clear = [];
	var inspect = function() {
		
		for (var item in clear) {
			item.style.color = "white";
		}
		clear = [];
		
		if (swap === true) {
			var tmp = nums[i].innerHTML;
			nums[i].innerHTML = nums[j].innerHTML;
			nums[j].innerHTML = tmp;
			nums[i].style.color = "lightCyan";
			nums[j].style.color = "pink";
			swap = false;
			clear.push(i);
			clear.push(j);
		} else {	
			nums[i].style.color = "pink";
			nums[j].style.color = "lightCyan";
			if (nums[i].innerHTML > nums[j].innerHTML) {
				swap = true;
			} else {
				clear.push(i);
				clear.push(j);
			}
			
			if (j >= nums.length) {
				i++;
				j = i + 1;
				if (i >= nums.length) {
					window.clearInterval(animate);
				}
			} 
		}
	}
	
	var animate = window.setInterval(inspect, 1000);
}
	
var sortButton = document.getElementById("submit");
sortButton.addEventListener("click", sort);
