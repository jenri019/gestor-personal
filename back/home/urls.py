from django.urls import path
from .views import all_items, all_genres

urlpatterns = [
    path('all', all_items, name='all_items'),
    path('genres', all_genres, name='all_genres'),
]