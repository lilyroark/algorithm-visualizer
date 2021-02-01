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
	}
	
	
	var i = 0;
	var j = 0;
	var swap = false;
	var clear = [];
	var inspect = function() {
		
		for (var k = 0; k < clear.length; k++) {
			nums[clear[k]].style.backgroundColor = "white";
		}
		clear = [i, j];
		
		if (swap === true) {
			var tmp = nums[i].innerHTML;
			nums[i].innerHTML = nums[j].innerHTML;
			nums[j].innerHTML = tmp;
			nums[i].style.backgroundColor = "lightCyan";
			nums[j].style.backgroundColor = "pink";
			swap = false;
		} else {	
			nums[j].style.backgroundColor = "lightCyan";
			nums[i].style.backgroundColor = "pink";
			if (nums[i].innerHTML > nums[j].innerHTML) {
				swap = true;
			} else {
				j++;
				if (j >= nums.length) {
					i++;
					j = i;
					if (i >= nums.length) {
						nums[nums.length - 1].style.backgroundColor = "white";
						window.clearInterval(animate);
						console.log("Done!");
					}
				} 
			}
		}
	}
	
	var animate = window.setInterval(inspect, 1000);
}
	
var sortButton = document.getElementById("submit");
sortButton.addEventListener("click", sort);
