from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import DataEntry
from .serializers import DataEntrySerializer
from django_filters.rest_framework import DjangoFilterBackend

class DataEntryListView(generics.ListAPIView):
    queryset = DataEntry.objects.all()
    serializer_class = DataEntrySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['end_year', 'topic', 'sector', 'region', 'pestle', 'source', 'country']
