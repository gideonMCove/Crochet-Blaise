from rest_framework import serializers
from .models import Profile, Patterns, Patterns_Yarn, Yarn, Techniques, Tools


class ToolsSerializer(serializers.HyperlinkedModelSerializer):
    techniques = serializers.HyperlinkedRelatedField(
        view_name='techniques_detail',
        read_only=True
    )

    techniques_id = serializers.PrimaryKeyRelatedField(
        queryset=Techniques.objects.all(),
        source='techniques'

    )

    class Meta:
        model = Tools
        fields = ('id', 'techniques', 'name', 'description', 'brand','techniques_id',)

class TechniquesSerializer(serializers.HyperlinkedModelSerializer):
    tools = ToolsSerializer(
        many=True,
        read_only=True
    )
    techniques_url = serializers.ModelSerializer.serializer_url_field(
        view_name='techniques_detail'
    )
    patterns = serializers.HyperlinkedRelatedField(
        view_name='patterns_detail',
        read_only=True
    )
    patterns_id = serializers.PrimaryKeyRelatedField(
        queryset=Patterns.objects.all(),
        source='tools'
    )
    class Meta:
        model = Techniques
        fields =('id', 'patterns','name,','description','skill_level','tools','techniques_url','patterns_id')
class YarnSerializer(serializers.HyperlinkedModelSerializer):
    patterns_yarn = serializers.HyperlinkedRelatedField(
        view_name='patterns_yarn_detail',
        read_only=True
    )
    
    patterns_yarn_id = serializers.PrimaryKeyRelatedField(
        queryset=Patterns_Yarn.objects.all(),
        source='patterns_yarn'
    )
   
    class Meta:
        model = Yarn
        fields =('id', 'patterns_yarn','patterns_yarn_id,','name','brand','colour','price','size')
class Patterns_YarnSerializer(serializers.HyperlinkedModelSerializer):
    yarn = YarnSerializer(
        many=True,
        read_only=True
    )
    patterns_yarn_url = serializers.ModelSerializer.serializer_url_field(
        view_name='patterns_yarn_detail'
    )
    patterns = serializers.HyperlinkedRelatedField(
        view_name='patterns_detail',
        read_only=True
    )
    patterns_id = serializers.PrimaryKeyRelatedField(
        queryset=Patterns.objects.all(),
        source='patterns'
    )
    class Meta:
        model = Patterns_Yarn
        fields =('id', 'patterns','patterns_id','yarn','patterns_yarn_url','name',)

class PatternsSerializer(serializers.HyperlinkedModelSerializer):
    patterns_yarn = Patterns_YarnSerializer(
        many=True,
        read_only=True
    )
    techniques = TechniquesSerializer(
        many=True,
        read_only=True
    )
    patterns_url = serializers.ModelSerializer.serializer_url_field(
        view_name='patterns_detail'
    )
    profile = serializers.HyperlinkedRelatedField(
        view_name='profile_detail',
        read_only=True
    )
    profile_id = serializers.PrimaryKeyRelatedField(
        queryset=Profile.objects.all(),
        source='profile'
    )
    class Meta:
        model = Patterns
        fields = ('id','patterns_yarn','techniques','patterns_url','profile','profile_id','name','description',)
class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    patterns = PatternsSerializer(
        many=True,
        read_only=True
    )
    profile_url = serializers.ModelSerializer.serializer_url_field(
        view_name='profile_detail'
    )
    class Meta:
        model = Profile
        fields = ('id', 'profile_url','name','patterns')
