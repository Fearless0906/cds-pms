from rest_framework import serializers
from .models import Task, Assignee


class AssigneeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignee
        fields = ["id", "name", "avatar"]


class TaskSerializer(serializers.ModelSerializer):

    assignees = AssigneeSerializer(many=True)

    class Meta:
        model = Task
        fields = "__all__"

    def create(self, validated_data):

        assignees_data = validated_data.pop("assignees")
        task = Task.objects.create(**validated_data)

        for assignee_data in assignees_data:
            assignee, _ = Assignee.objects.get_or_create(
                name=assignee_data["name"],
                avatar=assignee_data["avatar"]
            )
            task.assignees.add(assignee)

        return task