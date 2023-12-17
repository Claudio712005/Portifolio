"""
URL configuration for backend_portifolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# backend_portifolio/urls.py

from django.contrib import admin  # Adicione essa linha para importar 'admin'
from django.urls import path, re_path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/dados', views.consultar_devs, name='infos'),
    re_path(r'^$', RedirectView.as_view(url='/pagina-padrao/')),  # Redireciona para '/pagina-padrao/'
]