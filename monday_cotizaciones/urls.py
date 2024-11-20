from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from cotizaciones import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.pruebaAPI, name='home'),
    path('accounts/', include('django.contrib.auth.urls')),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
]