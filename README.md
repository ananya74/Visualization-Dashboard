# Visualization-Dashboard

- **Backend (Django):**
  - Imports and loads data from `jsondata.json`.<br>
  - Uses Django REST Framework to build an API.<br>
  - Implements filtering (e.g., by year, topic, sector, region, etc.) using `django-filter`.<br>

- **Frontend (React):**
  - Filters implemented as dropdowns to query the Django API.<br>
  - Interactive charts:<br>
    - Bar charts for Intensity, Likelihood, Relevance.<br>
    - Pie chart for Sector Distribution.<br>
    - Country statistics and a chart showing entries by country.<br>
  - Dynamic circular progress bar (e.g., Completed Tasks) that fetches live data from the backend.<br>


## Installation

### Backend Setup

1. **Clone the Repository** :
   git clone <repository-url><br>
   cd board/data_dashboard<br>
2. **Create and Activate a Virtual Environment**:
    python -m venv env<br>
    source env/bin/activate    # On Windows: env\Scripts\activate<br>
    pip install django djangorestframework django-filter django-cors-headers<br>
3.**Run Migrations:**
    python manage.py makemigrations<br>
    python manage.py migrate<br>
4.**Load Data from JSON:**
    python load_data.py<br>
5.**Start the Django Server:**
    python manage.py runserver<br>
    The API should now be accessible at http://127.0.0.1:8000/api/data/.<br>

### Frontend Setup
1.**Navigate to the Frontend Folder:**
  cd ../dashboard-frontend<br>
  Install Frontend Dependencies:<br>
  npm install<br>
  npm install axios bootstrap react-bootstrap chart.js react-chartjs-2 react-circular-progressbar<br>
2.**Start the React App:**
  npm start
 


   
