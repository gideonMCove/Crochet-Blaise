from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('profiles/', views.ProfileList.as_view(), name='profile_list'),
    path('profile/<int:pk>', views.ProfileDetail.as_view(), name='profile_detail'),
    path('patterns/', views.PatternsList.as_view(), name='patterns_list'),
    path('patterns/<int:pk>', views.PatternsDetail.as_view(), name='patterns_detail'),
    path('patterns_yarn/', views.Patterns_YarnList.as_view(), name='patterns_yarn_list'),
    path('patterns_yarn/<int:pk>', views.Patterns_YarnDetail.as_view(), name='patterns_yarn_detail'),
    path('yarns/', views.YarnList.as_view(), name='yarn_list'),
    path('yarns/<int:pk>', views.YarnDetail.as_view(), name='yarn_detail'),
    path('techniques/', views.TechniquesList.as_view(), name='techniques_list'),
    path('techniques/<int:pk>', views.TechniquesDetail.as_view(), name='techniques_detail'),
    path('tools/', views.ToolsList.as_view(), name='tools_list'),
    path('tools/<int:pk>', views.ToolsDetail.as_view(), name='tools_detail'),
]