from django.shortcuts import render

# Create your views here.
def principal(request):
    return render(request,'webJP/principal.html',{})

def CVJ(request):
    return render(request,'webJP/CV-joaquin.html',{})

def CVP(request):
	return render(request,'webJP/CV-pilar.html',{})

def serv1(request):
	return render(request,'webJP/podoDeportiva.html',{})

def serv2(request):
	return render(request,'webJP/ciruPodo.html',{})

def serv3(request):
	return render(request,'webJP/teraLaser.html',{})

def serv4(request):
	return render(request,'webJP/plasma.html',{})