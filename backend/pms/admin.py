from django.contrib import admin
from .models import Task, Assignee


@admin.register(Assignee)
class AssigneeAdmin(admin.ModelAdmin):

    list_display = ("id", "name", "avatar")
    search_fields = ("name",)
    ordering = ("name",)


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "category",
        "priority",
        "progress",
        "is_completed",
        "due_date",
        "created_at",
    )
    list_filter = (
        "category",
        "priority",
        "is_completed",
    )
    search_fields = (
        "title",
        "description",
    )
    filter_horizontal = ("assignees",)
    date_hierarchy = "created_at"
    ordering = ("-created_at",)