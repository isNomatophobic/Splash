from django.urls import path
from .views import Register,Is_Logged

urlpatterns = [
    path('register',Register,name="register"),
    path('islogged',Is_Logged,name="is logged")

]