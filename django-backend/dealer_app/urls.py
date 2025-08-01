
from django.contrib import admin
from django.urls import path, include
from static_pages import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('about/', views.about_us, name='about_us'),
    path('contact/', views.contact_us, name='contact_us'),
    path('api/', include('auth_api.urls')),
    path('', include('cars.urls')),
]
