function toLogin(form) {
    Parse.User.logIn(form.username.value, form.password.value, 
    {
       success: function(user) {
             if (user.attributes.role == "admin")
                   {window.open('admin_login.html')}
             else
                   {window.open('user_login.html')}
       },
       error: function(user, error) {
             alert("error")
       }
    });
}
