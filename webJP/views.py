from django.shortcuts import render
from .forms import ContactForm

# Create your views here.
def principal(request):
    return render(request,'webJP/principal.html',{})

def CVJ(request):
    return render(request,'webJP/CV-joaquin.html',{})

def CVP(request):
	return render(request,'webJP/CV-pilar.html',{})

def CVJU(request):
	return render(request,'webJP/CV-juan.html',{})

def CVR(request):
	return render(request,'webJP/CV-ramona.html',{})

def CVJmov(request):
    return render(request,'webJP/CV-joaquinMovil.html',{})

def CVPmov(request):
	return render(request,'webJP/CV-pilarMovil.html',{})

def CVJUmov(request):
	return render(request,'webJP/CV-juanMovil.html',{})

def CVRmov(request):
	return render(request,'webJP/CV-ramonaMovil.html',{})

def serv1(request):
	return render(request,'webJP/quiro.html',{})

def serv2(request):
	return render(request,'webJP/podoDeportiva.html',{})

def serv3(request):
	return render(request,'webJP/plantillas.html',{})

def serv4(request):
	return render(request,'webJP/ciruPodo.html',{})

def serv5(request):
	return render(request,'webJP/teraLaser.html',{})

def serv6(request):
	return render(request,'webJP/podoInf.html',{})

def serv7(request):
	return render(request,'webJP/pieDiabe.html',{})

def serv8(request):
	return render(request,'webJP/plasma.html',{})

def serv9(request):
	return render(request,'webJP/eco.html',{})

def serv10(request):
	return render(request,'webJP/posturo.html',{})

def serv11(request):
	return render(request,'webJP/opto.html',{})

def serv12(request):
	return render(request,'webJP/recursos.html',{})
def contacto(request):
	form = ContactForm(request.POST)
	return render(request,'webJP/contactView.html',{'form': form})
