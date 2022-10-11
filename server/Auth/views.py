from django.http import HttpResponse,HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import login,authenticate,logout

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
def Login(req):
    if req.user.is_authenticated:
        return HttpResponseBadRequest('User already logged in')
    username = req.POST['username']
    password = req.POST['password']
    user = authenticate(req, username=username, password=password)
    if user is not None:
        login(req, user)
        return HttpResponse(f'User logged in as {username}')
        # Redirect to a success page.
    return HttpResponseBadRequest('Invalid username/password combination')

@csrf_exempt
def Logout(req):
    if not req.user.is_authenticated:
        return HttpResponseBadRequest('User not logged in')
    logout(req)
    return HttpResponse('User logged out')

@csrf_exempt
def Is_Logged(req):
    return HttpResponse(req.user.is_authenticated)
