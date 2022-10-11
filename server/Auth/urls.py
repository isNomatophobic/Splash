from django.urls import path
from .views import Register,Is_Logged,Login,Logout

urlpatterns = [
    path('register',Register,name="register"),
    path('login',Login,name="login"),
    path('logout',Logout,name="logout"),
    path('islogged',Is_Logged,name="is logged")

]