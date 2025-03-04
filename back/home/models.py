from django.db import models
from django.db.models.fields import CharField, TextField, URLField, IntegerField

# Create your models here.
class Item(models.Model):
    title = CharField(max_length=100)
    description = TextField(max_length = 300, blank=True)
    url = URLField()
    current_chapter = IntegerField()