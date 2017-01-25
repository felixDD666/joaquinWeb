from django.conf.urls import url

from . import views

app_name = 'webJP'
urlpatterns = [
    url(r'^$', views.principal, name='principal'),
    url(r'^CVJ/$', views.CVJ, name='CV-joaquin'),
    url(r'^CVP/$', views.CVP, name='CV-pilar'),
]
