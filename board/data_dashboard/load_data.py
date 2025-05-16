import json
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "data_dashboard.settings")
django.setup()

from dashboard.models import DataEntry

def safe_int(value):
    try:
        return int(value)
    except (ValueError, TypeError):
        return None

with open("jsondata.json", encoding="utf-8") as f:
    data = json.load(f)

for entry in data:
    entry['intensity'] = safe_int(entry.get('intensity'))
    entry['likelihood'] = safe_int(entry.get('likelihood'))
    entry['relevance'] = safe_int(entry.get('relevance'))
    entry['start_year'] = entry.get('start_year') or None
    entry['end_year'] = entry.get('end_year') or None
    entry['impact'] = entry.get('impact') or None

    DataEntry.objects.create(**entry)

print("✅ Data loaded successfully.")
