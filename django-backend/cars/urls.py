from django.urls import path
from .views import car_makes_list

urlpatterns = [
    path('cars/', car_makes_list),
]
