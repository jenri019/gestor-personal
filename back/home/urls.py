from django.urls import path
from .views import all_items

urlpatterns = [
    path('all', all_items, name='all_items'),
]