var model;

window.onload = function() {
		//document.getElementById("dropdown").onclick = myFunction;
		
		var btnArr = document.getElementsByClassName("dropbtn");
		
		for (i = 0, len = btnArr.length; i < len; i++){
			//console.log("hi");
			
			btnArr[i].onclick = myFunction;
		}
		
		
		
		
		// LOGIN SET UP
		
		
		
				// Get the modal
		modal = document.getElementById("loginModal");

		// Get the button that opens the modal
		var btn = document.getElementById("loginBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		
		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}
		

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}
		
		
		
		
		
		
		
		
		document.getElementById("sign-in").onsubmit = (function(e) {
			e.preventDefault();
			//console.log("signing in!");
			var ajax = new XMLHttpRequest();

			var email = document.getElementById("si-email").value;
			var password = document.getElementById("si-password").value;

			var obj = {
				"Email": email,
				"Password": password
			};

			var json = JSON.stringify(obj);

			ajax.open("POST", "https://api.synapse-solutions.net/v1/sessions/", true);
			
			ajax.onreadystatechange = function() {
				if (this.readyState == 4 && this.status < 300) {
					
					var auth = this.getResponseHeader("Authorization");
					console.log(auth);
					localStorage.setItem('auth', auth);
					//location.reload();
				} else if (this.readyState == 4 && this.status >= 300) {
					var err = document.getElementById("err");
					err.innerHTML = "error: " + this.responseText;
				}
			}
			
			
			ajax.send(json);
		});
		
		
};

function myFunction() {
	
	var btnArr = document.getElementsByClassName("dropbtn");
	
	for (j = 0; j < btnArr.length; j++) {
		
		if (btnArr[j].id != this.id) {
			// slice to get rid of btn of the id
			document.getElementById(btnArr[j].id.slice(0,-3).concat("Dropdown")).classList.remove("show");
		}
	}
	
	document.getElementById(this.id.slice(0,-3).concat("Dropdown")).classList.toggle("show");
    //document.getElementById("resourcesDropdown").classList.toggle("show"); // id was myDropdown
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	
  if (!event.target.matches('.dropbtn')) { //if click anywhere other than a dropdown button, 'hide' all dropdowns

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      //if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      //}
    }
  }

	if (event.target == modal) {
		modal.style.display = "none";
	}
  
}


// add links to each page that each link under each drop down links to