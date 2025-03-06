from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Item, Genero

@api_view(['POST'])
def all_items(request):
    try:
        # Obtener los parámetros del cuerpo de la solicitud
        filters = request.data.get('filters', {})
        page_number = request.data.get('page', 1)
        page_size = request.data.get('page_size', 10)

        # Separar los filtros especiales (como 'generos') de los filtros normales
        generos_filtro = [genero.lower() for genero in filters.pop('generos', [])]

        # Filtrar los ítems basados en los filtros normales
        items = Item.objects.all().filter(**filters)

        # Aplicar el filtro por géneros si se proporciona un array no vacío
        if generos_filtro:
            matching_items = []
            for item in items:
                # Convertir el campo `generos` del ítem en una lista y a minúsculas
                generos_item = [g.strip().lower() for g in item.generos.split(",")]
                # Verificar si TODOS los géneros del filtro están en los géneros del ítem
                if all(genero in generos_item for genero in generos_filtro):
                    matching_items.append(item)
            # Convertir la lista de ítems en un QuerySet
            items = Item.objects.filter(id__in=[item.id for item in matching_items])

        # Paginar los resultados
        paginator = Paginator(items.values('id', 'title', 'description', 'url', 'current_chapter', 'on_going', 'generos'), page_size)
        
        try:
            paginated_items = paginator.page(page_number)
        except PageNotAnInteger:
            # Si el número de página no es un entero, devolver la primera página
            paginated_items = paginator.page(1)
        except EmptyPage:
            # Si la página está fuera de rango, devolver la última página
            paginated_items = paginator.page(paginator.num_pages)

        # Convertir el QuerySet paginado a una lista
        data = list(paginated_items)

        # Devolver la lista como respuesta JSON
        return Response({
            'data': data,
            'page': paginated_items.number,
            'total_pages': paginator.num_pages
        }, status=status.HTTP_200_OK)

    except Exception as e:
        # Manejar cualquier error inesperado
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def all_genres(request):
    # Obtener todos los ítems y convertir a diccionarios
    genres = Genero.objects.all().values()
    
    # Convertir el QuerySet a una lista
    data = list(genres)
    
    # Devolver la lista como respuesta JSON
    return Response(data)