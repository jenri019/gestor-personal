from django.db import models
from django.db.models.fields import CharField, TextField, URLField, IntegerField, BooleanField, AutoField
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Item(models.Model):
    id = AutoField(primary_key=True)
    title = CharField(max_length=100)
    description = TextField(max_length = 300, blank=True)
    url = URLField()
    current_chapter = IntegerField()
    on_going = BooleanField(default=True)
    generos = ArrayField(
        CharField(max_length=50),
        default=list
    )