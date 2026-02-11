from django.contrib import admin
from .models import Task, Assignee, Column, Project, ProjectMember


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
    
@admin.register(Column)
class ColumnAdmin(admin.ModelAdmin):

    list_display = ("project","title", "count", "color")
    search_fields = ("title",)
    ordering = ("title",)
    
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "name",
        "team_list",
        "progress",
        "due_date",
        "status",
        "is_favorite",
    )
    search_fields = ("name",)
    list_filter = ("status", "is_favorite")
    ordering = ("name",)
    filter_horizontal = ("team",)

    def team_list(self, obj):
        return ", ".join(obj.team.values_list("name", flat=True))

    team_list.short_description = "Team"


@admin.register(ProjectMember)
class ProjectMemberAdmin(admin.ModelAdmin):

    list_display = ("id", "name", "avatar")
    search_fields = ("name",)

