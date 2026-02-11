from rest_framework import serializers
from .models import Task, Assignee, Column, Project

class AssigneeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignee
        fields = ["id", "name", "avatar"]


class TaskSerializer(serializers.ModelSerializer):
    assignees = AssigneeSerializer(many=True,required=False,default=[])
    class Meta:
        model = Task
        fields = "__all__"

    def create(self, validated_data):
        assignees_data = validated_data.pop("assignees", [])
        task = Task.objects.create(**validated_data)
        for assignee_data in assignees_data:
            assignee, _ = Assignee.objects.get_or_create(
                name=assignee_data["name"],
                avatar=assignee_data["avatar"]
            )
            task.assignees.add(assignee)

        return task


    def update(self, instance, validated_data):
        assignees_data = validated_data.pop("assignees", None)

        # Update normal fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        # Update assignees if provided
        if assignees_data is not None:

            instance.assignees.clear()

            for assignee_data in assignees_data:
                assignee, _ = Assignee.objects.get_or_create(
                    name=assignee_data["name"],
                    avatar=assignee_data["avatar"]
                )
                instance.assignees.add(assignee)

        return instance

class ColumnSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True,read_only=True,default=[])
    class Meta:
        model = Column
        fields = "__all__"
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
