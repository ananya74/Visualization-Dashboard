from django.urls import path
from .views import DataEntryListView

urlpatterns = [
    path('data/', DataEntryListView.as_view(), name='data-list'),
]
