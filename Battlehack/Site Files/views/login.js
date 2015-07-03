function toLogin(form) {
	Parse.User.logIn(form.username.value, form.password.value, 
	{
	   success: function(user) {
	     	if (user.attributes.role == "admin")
	       		{window.alert("Success")}
	     	else
	       		{window.alert("YOU SUCK")}
	   },
	   error: function(user, error) {
	     	alert("error")
	   }
	});
}