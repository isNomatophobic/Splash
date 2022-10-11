from django.http import HttpResponse,HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import login 

@csrf_exempt
def Register(req):
    form = UserCreationForm(req.POST) 
    if form.is_valid():  
        user = form.save()
        login(req,user)
        return HttpResponse()
    print(form.errors)
    return HttpResponseBadRequest()


@csrf_exempt
def Is_Logged(req):
    return HttpResponse(req.user.is_authenticated)
