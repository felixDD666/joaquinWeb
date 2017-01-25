from django.shortcuts import render

# Create your views here.
def principal(request):
    return render(request,'webJP/principal.html',{})

def CVJ(request):
    return render(request,'webJP/CV-joaquin.html',{})

def CVP(request):
    return render(request,'webJP/CV-pilar.html',{})