from django.conf.urls import url,include
from django.views.generic import TemplateView
from django.contrib.sitemaps.views import sitemap
from django.http import HttpResponse
from django.contrib.sitemaps import GenericSitemap

from . import views

app_name = 'webJP'
urlpatterns = [
    url(r'^$', views.principal, name='principal'),
    url(r'^CVJ/$', views.CVJ, name='CV-joaquin'),
    url(r'^CVP/$', views.CVP, name='CV-pilar'),
    url(r'^CVJU/$', views.CVJU, name='CV-juan'),
    url(r'^CVR/$', views.CVR, name='CV-ramona'),
    url(r'^CVJ-mov/$', views.CVJmov, name='CV-joaquin-mov'),
    url(r'^CVP-mov/$', views.CVPmov, name='CV-pilar-mov'),
    url(r'^CVJU-mov/$', views.CVJUmov, name='CV-juan-mov'),
    url(r'^CVR-mov/$', views.CVRmov, name='CV-ramona-mov'),
    url(r'^serv1/$', views.serv1, name='serv1'),
    url(r'^serv2/$', views.serv2, name='serv2'),
    url(r'^serv3/$', views.serv3, name='serv3'),
    url(r'^serv4/$', views.serv4, name='serv4'),
    url(r'^serv5/$', views.serv5, name='serv5'),
    url(r'^serv6/$', views.serv6, name='serv6'),
    url(r'^serv7/$', views.serv7, name='serv7'),
    url(r'^serv8/$', views.serv8, name='serv8'),
    url(r'^serv9/$', views.serv9, name='serv9'),
    url(r'^serv10/$', views.serv10, name='ser10'),
    url(r'^serv11/$', views.serv11, name='serv11'),
    url(r'^serv12/$', views.serv12, name='serv12'),
    url(r'^serv4/encarnadas/$', views.encarnadas, name='encarnadas'),
    url(r'^serv4/helomas/$', views.helomas, name='helomas'),
    url(r'^serv4/exotosis/$', views.exotosis, name='exotosis'),
    url(r'^politica-privacidad/$', views.politicaPrivacidad, name='politica-privacidad'),
    url(r'^contactView/$', views.contacto, name='contactView'),
    url(r'^contactView/thanks/$',views.thanks,name='thanks'),
    url(r'^robots\.txt/$', lambda r: HttpResponse("User-agent: *\nDisallow: ", content_type="text/plain")),
    url(r'^sitemap\.xml/$', sitemap, {'sitemaps': sitemap}, name='django.contrib.sitemaps.views.sitemap'),
    
]
