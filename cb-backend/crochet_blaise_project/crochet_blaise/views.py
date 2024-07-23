from rest_framework import generics
from .serializers import ToolsSerializer, TechniquesSerializer, YarnSerializer, Patterns_YarnSerializer, PatternsSerializer, ProfileSerializer
from .models import Tools, Techniques, Yarn, Patterns_Yarn, Patterns, Profile
# Create your views here.

class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class PatternsList(generics.ListCreateAPIView):
    queryset = Patterns.objects.all()
    serializer_class = PatternsSerializer

class PatternsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patterns.objects.all()
    serializer_class = PatternsSerializer

class Patterns_YarnList(generics.ListCreateAPIView):
    queryset = Patterns_Yarn.objects.all()
    serializer_class = Patterns_YarnSerializer

class Patterns_YarnDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patterns_Yarn.objects.all()
    serializer_class = Patterns_YarnSerializer

class YarnList(generics.ListCreateAPIView):
    queryset = Yarn.objects.all()
    serializer_class = YarnSerializer

class YarnDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Yarn.objects.all()
    serializer_class = YarnSerializer

class TechniquesList(generics.ListCreateAPIView):
    queryset = Techniques.objects.all()
    serializer_class = TechniquesSerializer

class TechniquesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Techniques.objects.all()
    serializer_class = TechniquesSerializer

class ToolsList(generics.ListCreateAPIView):
    queryset = Tools.objects.all()
    serializer_class = ToolsSerializer

class ToolsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tools.objects.all()
    serializer_class = ToolsSerializer