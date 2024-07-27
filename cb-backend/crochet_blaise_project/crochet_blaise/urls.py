from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('profiles/', views.ProfileList.as_view(), name='profile_list'),
    path('profiles/<int:pk>', views.ProfileDetail.as_view(), name='profile_detail'),
    path('patterns/', views.PatternsList.as_view(), name='patterns_list'),
    path('patterns/<int:pk>', views.PatternsDetail.as_view(), name='patterns_detail'),
    path('patterns_yarn/', views.Patterns_YarnList.as_view(), name='patterns_yarn_list'),
    path('patterns_yarn/<int:pk>', views.Patterns_YarnDetail.as_view(), name='patterns_yarn_detail'),
    path('yarns/', views.YarnList.as_view(), name='yarn_list'),
    path('yarns/<int:pk>', views.YarnDetail.as_view(), name='yarn_detail'),
]