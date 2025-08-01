from django.http import JsonResponse
from .models import CarMake

def car_makes_list(request):
    makes = CarMake.objects.all()
    data = [{"id": m.id, "name": m.name, "description": m.description} for m in makes]
    return JsonResponse(data, safe=False)
