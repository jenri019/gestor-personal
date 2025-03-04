from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Item

@api_view(['GET'])
def all_items(request):
    # Obtener todos los ítems y convertir a diccionarios
    items = Item.objects.all().values('id','url', 'title')  # Especifica loss campos que se quieren obtener
    
    # Convertir el QuerySet a una lista
    data = list(items)
    
    # Devolver la lista como respuesta JSON
    return Response(data)



""" @api_view(['GET'])
def all_items(request):
    # Obtener todos los ítems y convertir a diccionarios
    items = Item.objects.all().values()
    
    # Convertir el QuerySet a una lista
    data = list(items)
    
    # Devolver la lista como respuesta JSON
    return Response(data) """