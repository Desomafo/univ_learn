from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

app_name = 'training'
urlpatterns = [
    path('', views.IntroView.as_view(), name='intro'),
    path('theory/', views.TheoryListView.as_view(), name='theory_list'),
    path('theory/<int:pk>', views.TheoryDetailView.as_view(),
         name='theory_detail'),
    path('practice/', views.PracticeListView.as_view(), name='practice_list'),
    path('practice/<int:pk>', views.PracticeDetailView.as_view(),
         name='practice_detail'),
]
