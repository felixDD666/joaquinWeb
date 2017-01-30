from django.conf.urls import url

from . import views

app_name = 'webJP'
urlpatterns = [
    url(r'^$', views.principal, name='principal'),
    url(r'^CVJ/$', views.CVJ, name='CV-joaquin'),
    url(r'^CVP/$', views.CVP, name='CV-pilar'),
    url(r'^serv1/$', views.serv1, name='serv1'),
    url(r'^serv2/$', views.serv2, name='serv2'),
    url(r'^serv3/$', views.serv3, name='serv3'),
    url(r'^serv4/$', views.serv4, name='serv4'),
]
