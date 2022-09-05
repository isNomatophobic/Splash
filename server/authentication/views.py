from django.http import HttpResponse,HttpResponseNotAllowed,HttpResponseBadRequest
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def Register(request):
    if request.method !='POST': 
        return HttpResponseNotAllowed(['POST'])
    body_unicode = request.body.decode('utf-8') #-----
    body = json.loads(body_unicode) #Must be handled by client
    form = UserCreationForm(body)
    if form.is_valid():
        new_user = form.save()
        login(request, new_user)
        return HttpResponse('Logged')
    print(form.errors)
    print(form.non_field_errors)
    return HttpResponseBadRequest()

    